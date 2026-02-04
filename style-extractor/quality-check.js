import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DESIGN_SYSTEMS_DIR = path.join(__dirname, '..');

const qualityChecklist = {
  metadata: {
    name: '元数据',
    checks: [
      { key: '设计理念', required: true },
      { key: '设计价值观', required: true }
    ]
  },
  fontSystem: {
    name: '字体系统',
    checks: [
      { key: '主字体', required: true },
      { key: '字体使用规则', required: true },
      { key: '标题层级', required: true },
      { key: '行高规则', required: true },
      { key: '字间距规则', required: true }
    ]
  },
  colorSystem: {
    name: '颜色系统',
    checks: [
      { key: '主色', required: true },
      { key: '功能色', required: true },
      { key: '中性色', required: true },
      { key: '背景色', required: true },
      { key: '文字色', required: true },
      { key: '边框色', required: true }
    ]
  },
  spacingSystem: {
    name: '间距系统',
    checks: [
      { key: '间距系统', required: true }
    ]
  },
  componentStyles: {
    name: '组件规范',
    checks: [
      { key: '按钮', required: true },
      { key: '卡片', required: true },
      { key: '输入框', required: true },
      { key: '导航栏', required: true }
    ]
  },
  cssVariables: {
    name: 'CSS变量',
    checks: [
      { key: 'CSS变量定义', required: true }
    ]
  },
  accessibility: {
    name: '可访问性',
    checks: [
      { key: '可访问性要求', required: true },
      { key: '色彩对比度', required: false },
      { key: '字体大小', required: false },
      { key: '键盘导航', required: false },
      { key: '屏幕阅读器', required: false }
    ]
  }
};

function checkFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const results = {
      total: 0,
      passed: 0,
      failed: 0,
      details: {}
    };

    Object.entries(qualityChecklist).forEach(([category, { name, checks }]) => {
      const categoryResults = {
        total: checks.length,
        passed: 0,
        failed: 0,
        items: []
      };

      checks.forEach(({ key, required }) => {
        const found = content.includes(key);
        categoryResults.total++;
        results.total++;

        if (found) {
          categoryResults.passed++;
          results.passed++;
          categoryResults.items.push({ key, status: '✓' });
        } else {
          categoryResults.failed++;
          results.failed++;
          categoryResults.items.push({ key, status: required ? '✗' : '○', required });
        }
      });

      results.details[category] = {
        name,
        ...categoryResults,
        score: ((categoryResults.passed / categoryResults.total) * 100).toFixed(0)
      };
    });

    results.score = ((results.passed / results.total) * 100).toFixed(0);
    return results;
  } catch (error) {
    console.error(`检查失败: ${filePath}`, error.message);
    return null;
  }
}

function scanDirectory(dir) {
  const files = [];
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const readmeFile = path.join(fullPath, 'README.md');
      if (fs.existsSync(readmeFile)) {
        files.push({
          id: item,
          name: item.replace(/^\d+-/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          path: readmeFile
        });
      }
    }
  }
  
  return files.sort((a, b) => a.id.localeCompare(b.id));
}

function generateReport(results) {
  let report = '========================================\n';
  report += '设计规范质量检查报告\n';
  report += '========================================\n\n';

  const summary = {
    excellent: 0,
    good: 0,
    fair: 0,
    poor: 0
  };

  results.forEach(result => {
    const score = parseInt(result.score);
    if (score >= 90) summary.excellent++;
    else if (score >= 70) summary.good++;
    else if (score >= 50) summary.fair++;
    else summary.poor++;
  });

  report += `总计检查: ${results.length} 个设计规范\n\n`;
  report += `优秀 (90-100): ${summary.excellent} 个\n`;
  report += `良好 (70-89):  ${summary.good} 个\n`;
  report += `一般 (50-69):  ${summary.fair} 个\n`;
  report += `较差 (0-49):   ${summary.poor} 个\n\n`;
  report += '========================================\n\n';

  results.forEach(result => {
    report += `----------------------------------------\n`;
    report += `${result.id} ${result.name}\n`;
    report += `----------------------------------------\n`;
    report += `总分: ${result.score}% (${result.passed}/${result.total})\n\n`;

    Object.entries(result.details).forEach(([category, detail]) => {
      report += `【${detail.name}】${detail.score}%\n`;
      detail.items.forEach(item => {
        const status = item.status === '✓' ? '✓' : (item.required ? '✗' : '○');
        report += `  ${status} ${item.key}\n`;
      });
      report += '\n';
    });

    report += '\n';
  });

  report += '========================================\n';
  report += `平均分: ${(results.reduce((sum, r) => sum + parseInt(r.score), 0) / results.length).toFixed(1)}%\n`;
  report += '========================================\n';

  return report;
}

async function main() {
  console.log('========================================');
  console.log('开始检查设计规范质量');
  console.log('========================================\n');

  const designSystems = scanDirectory(DESIGN_SYSTEMS_DIR);
  
  console.log(`找到 ${designSystems.length} 个设计规范\n`);

  const results = [];

  for (const designSystem of designSystems) {
    console.log(`正在检查: ${designSystem.id} ${designSystem.name}`);
    const result = checkFile(designSystem.path);
    
    if (result) {
      results.push({
        id: designSystem.id,
        name: designSystem.name,
        ...result
      });
      console.log(`  得分: ${result.score}%`);
    }
  }

  console.log('\n');

  const report = generateReport(results);

  const reportPath = path.join(__dirname, 'quality-report.txt');
  fs.writeFileSync(reportPath, report, 'utf-8');

  console.log(report);
  console.log(`\n报告已保存到: ${reportPath}`);
}

main().catch(console.error);
