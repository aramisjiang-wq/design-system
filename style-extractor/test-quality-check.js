import { checkQuality } from './quality-checker.js';

async function testQualityCheck() {
  console.log('='.repeat(60));
  console.log('设计规范提取质量检查测试');
  console.log('='.repeat(60));
  console.log();

  const testUrls = [
    'https://example.com',
    'https://github.com',
    'https://www.apple.com'
  ];

  for (const url of testUrls) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`测试URL: ${url}`);
    console.log('='.repeat(60));

    const result = await checkQuality(url);

    if (!result.success) {
      console.log(`\n❌ 质量检查失败: ${result.error}`);
      continue;
    }

    const { results } = result;

    console.log(`\n📊 总体评分: ${results.overall.score}/100`);
    console.log(`🏆 质量等级: ${results.overall.grade}`);
    console.log(`💡 建议: ${results.overall.recommendation}`);

    console.log(`\n📈 各系统评分:`);
    console.log(`  颜色系统: ${results.scores.colors}/100`);
    console.log(`  字体系统: ${results.scores.fonts}/100`);
    console.log(`  间距系统: ${results.scores.spacing}/100`);
    console.log(`  组件系统: ${results.scores.components}/100`);
    console.log(`  布局系统: ${results.scores.layout}/100`);

    console.log(`\n✅ 通过项: ${results.completeness.passed.length}`);
    console.log(`⚠️  警告项: ${results.completeness.warnings.length}`);
    console.log(`❌ 问题项: ${results.completeness.issues.length}`);

    if (results.completeness.issues.length > 0) {
      console.log(`\n❌ 问题详情:`);
      results.completeness.issues.forEach(issue => {
        console.log(`  - ${issue}`);
      });
    }

    if (results.completeness.warnings.length > 0) {
      console.log(`\n⚠️  警告详情:`);
      results.completeness.warnings.forEach(warning => {
        console.log(`  - ${warning}`);
      });
    }

    if (results.issues.length > 0) {
      console.log(`\n🔍 发现的问题:`);
      results.issues.forEach(issue => {
        const icon = issue.severity === 'high' ? '🔴' : issue.severity === 'medium' ? '🟡' : '🟢';
        console.log(`  ${icon} [${issue.category}] ${issue.message}`);
        console.log(`     建议: ${issue.suggestion}`);
      });
    }

    if (results.recommendations.length > 0) {
      console.log(`\n💡 改进建议:`);
      results.recommendations.forEach(rec => {
        const icon = rec.priority === 'high' ? '🔴' : rec.priority === 'medium' ? '🟡' : '🟢';
        console.log(`  ${icon} [${rec.category}] ${rec.action}`);
        console.log(`     ${rec.description}`);
      });
    }

    console.log(`\n📋 框架符合度: ${results.framework.completeness}%`);
    if (results.framework.missingItems.length > 0) {
      console.log(`\n❌ 缺失内容:`);
      results.framework.missingItems.forEach(item => {
        console.log(`  - ${item}`);
      });
    }

    console.log(`\n${'='.repeat(60)}\n`);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  testQualityCheck().catch(console.error);
}

export { testQualityCheck };
