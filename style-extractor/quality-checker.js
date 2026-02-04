import { extractDesignSystemAdvanced } from './extractor-advanced.js';

export class QualityChecker {
  constructor() {
    this.framework = this.loadFramework();
  }

  loadFramework() {
    return {
      requiredSections: [
        '设计理念',
        '设计原则',
        '设计价值观',
        '颜色系统',
        '字体系统',
        '间距系统',
        '组件规范',
        '布局规范',
        '可访问性'
      ],
      colorRequirements: {
        minColors: 10,
        hasPrimary: true,
        hasFunctional: true,
        hasNeutral: true,
        hasCSSVariables: true
      },
      fontRequirements: {
        hasFontFamily: true,
        minFontSizes: 6,
        hasFontWeights: true,
        hasLineHeights: true,
        hasCSSVariables: true
      },
      spacingRequirements: {
        minSpacings: 7,
        hasLevels: true,
        hasUsageScenarios: true,
        hasCSSVariables: true
      },
      componentRequirements: {
        minComponents: 3,
        hasVariants: true,
        hasStates: true,
        hasAPI: true,
        hasExamples: true
      },
      layoutRequirements: {
        hasGrid: true,
        hasBreakpoints: true,
        minBreakpoints: 4,
        hasCSSVariables: true
      }
    };
  }

  async checkQuality(url) {
    console.log('开始质量检查...');
    
    const extractionResult = await extractDesignSystemAdvanced(url);
    
    if (!extractionResult.success) {
      return {
        success: false,
        error: extractionResult.error
      };
    }

    const extractedData = extractionResult.data;

    const results = {
      metadata: {
        url: url,
        checkedAt: new Date().toISOString(),
        extractionVersion: '2.0.0'
      },
      completeness: this.checkCompleteness(extractedData),
      scores: this.calculateScores(extractedData),
      framework: this.compareWithFramework(extractedData),
      issues: this.identifyIssues(extractedData),
      recommendations: this.generateRecommendations(extractedData),
      overall: {}
    };

    results.overall = this.calculateOverallScore(results);

    return {
      success: true,
      results
    };
  }

  checkCompleteness(data) {
    const issues = [];
    const warnings = [];
    const passed = [];

    if (!data.metadata || !data.metadata.url) {
      issues.push('缺少元数据（metadata）');
    } else {
      passed.push('元数据完整');
    }

    if (!data.colors) {
      issues.push('缺少颜色系统');
    } else {
      if (!data.colors.primaryColor) {
        issues.push('缺少主色（primaryColor）');
      } else {
        passed.push('主色识别成功');
      }

      if (!data.colors.allColors || data.colors.allColors.length === 0) {
        issues.push('缺少颜色列表');
      } else {
        passed.push(`识别到${data.colors.allColors.length}个颜色`);
      }
    }

    if (!data.fonts) {
      issues.push('缺少字体系统');
    } else {
      if (!data.fonts.fontFamily) {
        issues.push('缺少主字体（fontFamily）');
      } else {
        passed.push('主字体识别成功');
      }

      if (!data.fonts.fontSizes || data.fonts.fontSizes.length === 0) {
        warnings.push('缺少字号列表');
      } else {
        passed.push(`识别到${data.fonts.fontSizes.length}个字号`);
      }
    }

    if (!data.spacing) {
      issues.push('缺少间距系统');
    } else {
      if (!data.spacing.allSpacings || data.spacing.allSpacings.length === 0) {
        warnings.push('缺少间距列表');
      } else {
        passed.push(`识别到${data.spacing.allSpacings.length}个间距`);
      }
    }

    if (!data.components) {
      warnings.push('缺少组件系统');
    } else {
      passed.push(`识别到${Object.keys(data.components).length}种组件`);
    }

    if (!data.layout) {
      warnings.push('缺少布局系统');
    } else {
      passed.push('布局系统识别成功');
    }

    if (!data.cssVariables || Object.keys(data.cssVariables).length === 0) {
      warnings.push('缺少CSS变量');
    } else {
      passed.push(`识别到${Object.keys(data.cssVariables).length}个CSS变量`);
    }

    return {
      passed: issues.length === 0,
      issues,
      warnings,
      passed,
      score: this.calculateCompletenessScore(issues, warnings, passed)
    };
  }

  calculateCompletenessScore(issues, warnings, passed) {
    const total = issues.length + warnings.length + passed.length;
    if (total === 0) return 100;
    
    const passedScore = (passed.length / total) * 100;
    const warningDeduction = (warnings.length / total) * 10;
    const issueDeduction = (issues.length / total) * 30;
    
    return Math.max(0, Math.round(passedScore - warningDeduction - issueDeduction));
  }

  calculateScores(data) {
    return {
      colors: this.scoreColorSystem(data.colors),
      fonts: this.scoreFontSystem(data.fonts),
      spacing: this.scoreSpacingSystem(data.spacing),
      components: this.scoreComponentSystem(data.components),
      layout: this.scoreLayoutSystem(data.layout)
    };
  }

  scoreColorSystem(colors) {
    if (!colors) return 0;

    let score = 0;
    const maxScore = 100;

    if (colors.primaryColor) score += 20;

    if (colors.allColors && colors.allColors.length >= 10) {
      score += 15;
    } else if (colors.allColors && colors.allColors.length >= 5) {
      score += 10;
    } else if (colors.allColors && colors.allColors.length >= 3) {
      score += 5;
    }

    if (colors.functionalColors) {
      const functionalColors = ['success', 'warning', 'error', 'info'];
      const hasFunctional = functionalColors.filter(c => colors.functionalColors[c]).length;
      score += (hasFunctional / functionalColors.length) * 25;
    }

    if (colors.neutralColors) {
      const neutralColors = ['bgMain', 'bgSecondary', 'textMain', 'textSecondary', 'borderMain'];
      const hasNeutral = neutralColors.filter(c => colors.neutralColors[c]).length;
      score += (hasNeutral / neutralColors.length) * 20;
    }

    if (colors.cssVariables && Object.keys(colors.cssVariables).length > 0) {
      score += 10;
    }

    if (colors.colorUsage && Object.keys(colors.colorUsage).length > 0) {
      score += 10;
    }

    return Math.round(score);
  }

  scoreFontSystem(fonts) {
    if (!fonts) return 0;

    let score = 0;
    const maxScore = 100;

    if (fonts.fontFamily) score += 25;

    if (fonts.fontSizes && fonts.fontSizes.length >= 6) {
      score += 25;
    } else if (fonts.fontSizes && fonts.fontSizes.length >= 4) {
      score += 20;
    } else if (fonts.fontSizes && fonts.fontSizes.length >= 2) {
      score += 10;
    }

    if (fonts.fontWeights && fonts.fontWeights.length >= 5) {
      score += 20;
    } else if (fonts.fontWeights && fonts.fontWeights.length >= 3) {
      score += 15;
    } else if (fonts.fontWeights && fonts.fontWeights.length >= 1) {
      score += 10;
    }

    if (fonts.lineHeights && fonts.lineHeights.length > 0) {
      score += 15;
    }

    if (fonts.cssVariables && Object.keys(fonts.cssVariables).length > 0) {
      score += 5;
    }

    if (fonts.allFonts && fonts.allFonts.length > 0) {
      score += 10;
    }

    return Math.round(score);
  }

  scoreSpacingSystem(spacing) {
    if (!spacing) return 0;

    let score = 0;
    const maxScore = 100;

    if (spacing.allSpacings && spacing.allSpacings.length >= 7) {
      score += 25;
    } else if (spacing.allSpacings && spacing.allSpacings.length >= 5) {
      score += 20;
    } else if (spacing.allSpacings && spacing.allSpacings.length >= 3) {
      score += 15;
    }

    if (spacing.paddings && spacing.paddings.length > 0) {
      score += 15;
    }

    if (spacing.margins && spacing.margins.length > 0) {
      score += 15;
    }

    if (spacing.gaps && spacing.gaps.length > 0) {
      score += 15;
    }

    if (this.hasRegularSpacing(spacing.allSpacings)) {
      score += 20;
    } else if (spacing.allSpacings && spacing.allSpacings.length >= 3) {
      score += 10;
    }

    if (spacing.cssVariables && Object.keys(spacing.cssVariables).length > 0) {
      score += 10;
    }

    return Math.round(score);
  }

  hasRegularSpacing(spacings) {
    if (!spacings || spacings.length < 3) return false;

    const values = spacings
      .map(s => parseInt(s))
      .filter(v => !isNaN(v))
      .sort((a, b) => a - b);

    if (values.length < 3) return false;

    const base = values[0];
    const isMultiple = values.every(v => v % base === 0);

    return isMultiple;
  }

  scoreComponentSystem(components) {
    if (!components) return 0;

    let score = 0;
    const maxScore = 100;

    const componentTypes = Object.keys(components);
    if (componentTypes.length >= 3) {
      score += 25;
    } else if (componentTypes.length >= 2) {
      score += 20;
    } else if (componentTypes.length >= 1) {
      score += 15;
    }

    let componentsWithVariants = 0;
    let componentsWithStates = 0;
    let componentsWithStyle = 0;

    componentTypes.forEach(type => {
      const items = components[type];
      if (Array.isArray(items)) {
        items.forEach(item => {
          if (item.variants && item.variants.length > 0) componentsWithVariants++;
          if (item.states && item.states.length > 0) componentsWithStates++;
          if (item.style && Object.keys(item.style).length > 0) componentsWithStyle++;
        });
      }
    });

    const totalComponents = componentTypes.reduce((sum, type) => sum + (components[type]?.length || 0), 0);
    if (totalComponents > 0) {
      score += (componentsWithVariants / totalComponents) * 15;
      score += (componentsWithStates / totalComponents) * 15;
      score += (componentsWithStyle / totalComponents) * 20;
    }

    score += 25;

    return Math.round(score);
  }

  scoreLayoutSystem(layout) {
    if (!layout) return 0;

    let score = 0;
    const maxScore = 100;

    if (layout.maxWidth && layout.maxWidth.length > 0) {
      score += 25;
    }

    if (layout.display && layout.display.includes('grid')) {
      score += 25;
    } else if (layout.display && layout.display.includes('flex')) {
      score += 20;
    } else if (layout.display && layout.display.length > 0) {
      score += 15;
    }

    if (layout.grids && layout.grids.length > 0) {
      score += 25;
    }

    if (layout.flexDirections && layout.flexDirections.length > 0) {
      score += 10;
    }

    if (layout.justifies && layout.justifies.length > 0) {
      score += 5;
    }

    if (layout.aligns && layout.aligns.length > 0) {
      score += 10;
    }

    return Math.round(score);
  }

  compareWithFramework(data) {
    const missingItems = [];
    const inconsistentItems = [];

    if (!data.colors || !data.colors.functionalColors) {
      missingItems.push('功能色系统（成功、警告、错误、信息）');
    }

    if (!data.colors || !data.colors.neutralColors) {
      missingItems.push('中性色系统（背景、文字、边框）');
    }

    if (!data.fonts || !data.fonts.fontWeights || data.fonts.fontWeights.length < 3) {
      missingItems.push('完整的字重系统');
    }

    if (!data.spacing || !data.spacing.allSpacings || data.spacing.allSpacings.length < 7) {
      missingItems.push('完整的间距层次（xs/sm/md/lg/xl/2xl/3xl）');
    }

    if (!data.components || Object.keys(data.components).length < 3) {
      missingItems.push('组件样式规范');
    }

    if (!data.layout || !data.layout.grids || data.layout.grids.length === 0) {
      missingItems.push('网格系统');
    }

    if (!data.layout || !data.layout.maxWidth || data.layout.maxWidth.length === 0) {
      missingItems.push('响应式断点');
    }

    if (!data.cssVariables || Object.keys(data.cssVariables).length === 0) {
      missingItems.push('CSS变量定义');
    }

    if (data.spacing && data.spacing.allSpacings && !this.hasRegularSpacing(data.spacing.allSpacings)) {
      inconsistentItems.push('间距系统不遵循8px基准');
    }

    return {
      missingItems,
      inconsistentItems,
      completeness: this.calculateFrameworkCompleteness(missingItems)
    };
  }

  calculateFrameworkCompleteness(missingItems) {
    const totalItems = 8;
    const missingCount = missingItems.length;
    return Math.round(((totalItems - missingCount) / totalItems) * 100);
  }

  identifyIssues(data) {
    const issues = [];

    if (!data.colors || !data.colors.primaryColor) {
      issues.push({
        severity: 'high',
        category: '颜色系统',
        message: '缺少主色',
        suggestion: '手动指定主色或从颜色列表中选择最常用的颜色'
      });
    }

    if (data.colors && data.colors.allColors && data.colors.allColors.length < 5) {
      issues.push({
        severity: 'medium',
        category: '颜色系统',
        message: `颜色数量较少（${data.colors.allColors.length}个）`,
        suggestion: '检查是否遗漏了颜色，或考虑添加更多颜色'
      });
    }

    if (!data.fonts || !data.fonts.fontFamily) {
      issues.push({
        severity: 'high',
        category: '字体系统',
        message: '缺少主字体',
        suggestion: '手动指定主字体'
      });
    }

    if (data.fonts && data.fonts.fontSizes && data.fonts.fontSizes.length < 3) {
      issues.push({
        severity: 'medium',
        category: '字体系统',
        message: `字号数量较少（${data.fonts.fontSizes.length}个）`,
        suggestion: '检查是否遗漏了字号'
      });
    }

    if (data.spacing && data.spacing.allSpacings && data.spacing.allSpacings.length < 5) {
      issues.push({
        severity: 'medium',
        category: '间距系统',
        message: `间距数量较少（${data.spacing.allSpacings.length}个）`,
        suggestion: '检查是否遗漏了间距'
      });
    }

    if (data.spacing && data.spacing.allSpacings && !this.hasRegularSpacing(data.spacing.allSpacings)) {
      issues.push({
        severity: 'low',
        category: '间距系统',
        message: '间距系统不遵循规律',
        suggestion: '建议统一为4px或8px基准'
      });
    }

    if (!data.components || Object.keys(data.components).length === 0) {
      issues.push({
        severity: 'medium',
        category: '组件系统',
        message: '未识别到组件',
        suggestion: '手动添加组件样式规范'
      });
    }

    return issues;
  }

  generateRecommendations(data) {
    const recommendations = [];

    if (!data.colors || !data.colors.functionalColors) {
      recommendations.push({
        priority: 'high',
        category: '颜色系统',
        action: '补充功能色',
        description: '添加成功、警告、错误、信息等功能色'
      });
    }

    if (!data.colors || !data.colors.neutralColors) {
      recommendations.push({
        priority: 'high',
        category: '颜色系统',
        action: '补充中性色',
        description: '添加背景色、文字色、边框色等中性色'
      });
    }

    if (data.spacing && data.spacing.allSpacings && !this.hasRegularSpacing(data.spacing.allSpacings)) {
      recommendations.push({
        priority: 'medium',
        category: '间距系统',
        action: '统一间距基准',
        description: '建议将间距统一为4px或8px基准'
      });
    }

    if (!data.components || Object.keys(data.components).length < 3) {
      recommendations.push({
        priority: 'medium',
        category: '组件系统',
        action: '补充组件规范',
        description: '添加更多组件的样式规范（按钮、卡片、输入框等）'
      });
    }

    if (!data.layout || !data.layout.grids || data.layout.grids.length === 0) {
      recommendations.push({
        priority: 'medium',
        category: '布局系统',
        action: '补充网格系统',
        description: '添加网格系统规范'
      });
    }

    if (!data.cssVariables || Object.keys(data.cssVariables).length === 0) {
      recommendations.push({
        priority: 'low',
        category: '开发规范',
        action: '添加CSS变量',
        description: '将常用样式值定义为CSS变量'
      });
    }

    return recommendations;
  }

  calculateOverallScore(results) {
    const weights = {
      colors: 0.25,
      fonts: 0.20,
      spacing: 0.15,
      components: 0.25,
      layout: 0.15
    };

    const totalScore =
      results.scores.colors * weights.colors +
      results.scores.fonts * weights.fonts +
      results.scores.spacing * weights.spacing +
      results.scores.components * weights.components +
      results.scores.layout * weights.layout;

    const grade = this.getQualityGrade(totalScore);

    return {
      score: Math.round(totalScore),
      grade,
      weights,
      recommendation: this.getRecommendation(grade)
    };
  }

  getQualityGrade(score) {
    if (score >= 90) return '优秀';
    if (score >= 75) return '良好';
    if (score >= 60) return '一般';
    if (score >= 40) return '较差';
    return '极差';
  }

  getRecommendation(grade) {
    const recommendations = {
      '优秀': '质量极高，可直接使用',
      '良好': '质量较好，建议人工审核后使用',
      '一般': '质量一般，建议人工修改后使用',
      '较差': '质量较差，建议重新提取或手动创建',
      '极差': '质量极差，必须重新提取'
    };
    return recommendations[grade] || '未知';
  }

  generateQualityReport(results) {
    return `# 设计规范提取质量报告

## 基本信息
- **提取URL**: ${results.metadata.url}
- **检查时间**: ${results.metadata.checkedAt}
- **提取版本**: ${results.metadata.extractionVersion}

## 总体评分
- **总体得分**: ${results.overall.score}/100
- **质量等级**: ${results.overall.grade}
- **建议**: ${results.overall.recommendation}

## 各系统评分
| 系统 | 得分 | 等级 | 权重 |
|------|------|------|------|
| 颜色系统 | ${results.scores.colors}/100 | ${this.getQualityGrade(results.scores.colors)} | 25% |
| 字体系统 | ${results.scores.fonts}/100 | ${this.getQualityGrade(results.scores.fonts)} | 20% |
| 间距系统 | ${results.scores.spacing}/100 | ${this.getQualityGrade(results.scores.spacing)} | 15% |
| 组件系统 | ${results.scores.components}/100 | ${this.getQualityGrade(results.scores.components)} | 25% |
| 布局系统 | ${results.scores.layout}/100 | ${this.getQualityGrade(results.scores.layout)} | 15% |

## 数据完整性检查
### 通过项 ✅
${results.completeness.passed.map(item => `- ${item}`).join('\n')}

### 警告项 ⚠️
${results.completeness.warnings.map(item => `- ${item}`).join('\n')}

### 问题项 ❌
${results.completeness.issues.map(item => `- ${item}`).join('\n')}

## 框架标准对比
### 框架符合度
${results.framework.completeness}%

### 缺失内容
${results.framework.missingItems.map(item => `- ${item}`).join('\n')}

### 不符合项
${results.framework.inconsistentItems.map(item => `- ${item}`).join('\n')}

## 问题清单
${results.issues.map(issue => `
### ${issue.category} - ${issue.severity === 'high' ? '🔴' : issue.severity === 'medium' ? '🟡' : '🟢'}
- **问题**: ${issue.message}
- **建议**: ${issue.suggestion}
`).join('\n')}

## 改进建议
${results.recommendations.map(rec => `
### ${rec.category} - ${rec.priority === 'high' ? '🔴 高优先级' : rec.priority === 'medium' ? '🟡 中优先级' : '🟢 低优先级'}
- **操作**: ${rec.action}
- **描述**: ${rec.description}
`).join('\n')}
`;
  }
}

export async function checkQuality(url) {
  const checker = new QualityChecker();
  return await checker.checkQuality(url);
}
