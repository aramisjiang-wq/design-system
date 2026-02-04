export class DesignSystemGenerator {
  constructor() {
    this.timestamp = new Date().toISOString();
  }

  generate(analyzedStyles) {
    return {
      metadata: this.generateMetadata(analyzedStyles),
      fontSystem: this.generateFontSystem(analyzedStyles.fontSystem),
      colorSystem: this.generateColorSystem(analyzedStyles.colorSystem),
      spacingSystem: this.generateSpacingSystem(analyzedStyles.spacingSystem),
      componentStyles: this.generateComponentStyles(analyzedStyles.componentStyles),
      cssVariables: this.generateCSSVariables(analyzedStyles),
      accessibility: this.generateAccessibilityChecklist(analyzedStyles)
    };
  }

  generateMetadata(analyzedStyles) {
    return {
      name: 'Extracted Design System',
      version: '1.0.0',
      createdAt: this.timestamp,
      description: '从网站自动提取的设计规范'
    };
  }

  generateFontSystem(fontSystem) {
    return {
      fontFamily: fontSystem.primaryFont,
      fontScale: fontSystem.fontScale,
      lineHeightScale: fontSystem.lineHeightScale,
      letterSpacingScale: fontSystem.letterSpacingScale
    };
  }

  generateColorSystem(colorSystem) {
    return {
      primaryColor: colorSystem.primaryColor,
      colorPalette: colorSystem.colorPalette,
      colorContrast: colorSystem.colorContrast
    };
  }

  generateSpacingSystem(spacingSystem) {
    return {
      spacingScale: spacingSystem.spacingScale,
      spacingPattern: spacingSystem.spacingPattern
    };
  }

  generateComponentStyles(analyzedStyles) {
    return analyzedStyles.componentStyles;
  }

  generateCSSVariables(analyzedStyles) {
    const variables = {};
    
    // 字体变量
    variables['--font-family'] = analyzedStyles.fontSystem.primaryFont;
    
    // 颜色变量
    const palette = analyzedStyles.colorSystem.colorPalette;
    variables['--color-primary'] = palette.primary;
    variables['--color-success'] = palette.success;
    variables['--color-warning'] = palette.warning;
    variables['--color-error'] = palette.error;
    variables['--color-info'] = palette.info;
    
    // 中性色变量
    palette.neutrals.forEach((color, index) => {
      variables[`--color-neutral-${index + 1}`] = color;
    });
    
    // 背景色变量
    palette.backgrounds.forEach((color, index) => {
      variables[`--color-bg-${index + 1}`] = color;
    });
    
    // 文字色变量
    palette.textColors.forEach((color, index) => {
      variables[`--color-text-${index + 1}`] = color;
    });
    
    // 边框色变量
    palette.borderColors.forEach((color, index) => {
      variables[`--color-border-${index + 1}`] = color;
    });
    
    // 间距变量
    const spacing = analyzedStyles.spacingSystem.spacingScale;
    Object.entries(spacing).forEach(([name, value]) => {
      variables[`--spacing-${name}`] = value.rem;
    });
    
    return variables;
  }

  generateAccessibilityChecklist(analyzedStyles) {
    const checklist = {
      colorContrast: this.checkColorContrast(analyzedStyles.colorSystem),
      fontSize: this.checkFontSize(analyzedStyles.fontSystem),
      keyboardNavigation: this.checkKeyboardNavigation(),
      screenReader: this.checkScreenReader(),
      motion: this.checkMotion()
    };
    
    return checklist;
  }

  checkColorContrast(colorSystem) {
    const issues = [];
    const contrasts = colorSystem.colorContrast;
    
    Object.entries(contrasts).forEach(([key, ratio]) => {
      const value = parseFloat(ratio);
      if (value < 3) {
        issues.push(`${key}: 对比度 ${ratio} 低于最低要求 (3:1)`);
      } else if (value < 4.5) {
        issues.push(`${key}: 对比度 ${ratio} 低于推荐标准 (4.5:1)`);
      }
    });
    
    return {
      status: issues.length === 0 ? 'pass' : 'warning',
      issues
    };
  }

  checkFontSize(fontSystem) {
    const issues = [];
    const scale = fontSystem.fontScale;
    
    Object.entries(scale).forEach(([name, value]) => {
      const size = parseFloat(value.size);
      if (size < 12) {
        issues.push(`${name}: 字号 ${value.size} 小于最小推荐值 (12px)`);
      }
    });
    
    return {
      status: issues.length === 0 ? 'pass' : 'warning',
      issues
    };
  }

  checkKeyboardNavigation() {
    return {
      status: 'unknown',
      issues: ['需要手动检查键盘导航'],
      recommendations: [
        '确保所有交互元素可通过Tab键访问',
        '提供清晰的焦点指示器',
        '支持Enter/Space键激活按钮和链接'
      ]
    };
  }

  checkScreenReader() {
    return {
      status: 'unknown',
      issues: ['需要手动检查屏幕阅读器支持'],
      recommendations: [
        '为所有图片提供alt文本',
        '为表单元素提供label',
        '使用语义化HTML',
        '正确使用ARIA属性'
      ]
    };
  }

  checkMotion() {
    return {
      status: 'unknown',
      issues: ['需要手动检查动画和运动效果'],
      recommendations: [
        '提供动画开关选项',
        '遵循prefers-reduced-motion设置',
        '避免闪烁和快速移动的内容'
      ]
    };
  }

  generateMarkdown(designSystem) {
    return `# ${designSystem.metadata.name}

## 元数据

- **名称**: ${designSystem.metadata.name}
- **版本**: ${designSystem.metadata.version}
- **创建时间**: ${designSystem.metadata.createdAt}
- **描述**: ${designSystem.metadata.description}

---

## 设计理念

**风格定位**：从网站自动提取的设计规范

**核心原则**：
- 数据驱动（Data-driven）
- 可复用（Reusable）
- 可定制（Customizable）
- 标准化（Standardized）

---

## 设计价值观

- 数据驱动：基于实际网站样式数据
- 可复用性：生成标准化的设计规范
- 可定制性：支持自定义和扩展
- 标准化：遵循设计规范标准

---

## 字体系统

### 主字体
\`\`\`
字体：${designSystem.fontSystem.fontFamily}
\`\`\`

### 字体使用规则

#### 标题层级
${this.generateFontScaleMarkdown(designSystem.fontSystem.fontScale)}

#### 行高规则
${this.generateLineHeightMarkdown(designSystem.fontSystem.lineHeightScale)}

#### 字间距规则
${this.generateLetterSpacingMarkdown(designSystem.fontSystem.letterSpacingScale)}

---

## 颜色系统

### 主色
\`\`\`
主色：${designSystem.colorSystem.primaryColor}
\`\`\`

### 功能色
${this.generateFunctionalColorsMarkdown(designSystem.colorSystem.colorPalette)}

### 中性色
${this.generateNeutralColorsMarkdown(designSystem.colorSystem.colorPalette.neutrals)}

### 背景色
${this.generateBackgroundColorsMarkdown(designSystem.colorSystem.colorPalette.backgrounds)}

### 文字色
${this.generateTextColorsMarkdown(designSystem.colorSystem.colorPalette.textColors)}

### 边框色
${this.generateBorderColorsMarkdown(designSystem.colorSystem.colorPalette.borderColors)}

---

## 间距系统

${this.generateSpacingScaleMarkdown(designSystem.spacingSystem.spacingScale)}

---

## 组件规范

### 按钮
${this.generateButtonStylesMarkdown(designSystem.componentStyles.buttons)}

### 卡片
${this.generateCardStylesMarkdown(designSystem.componentStyles.cards)}

### 输入框
${this.generateInputStylesMarkdown(designSystem.componentStyles.inputs)}

### 导航栏
${this.generateNavigationStylesMarkdown(designSystem.componentStyles.navigation)}

---

## CSS 变量定义

\`\`\`css
${this.generateCSSVariablesMarkdown(designSystem.cssVariables)}
\`\`\`

---

## 可访问性要求

### 色彩对比度
${this.generateAccessibilityMarkdown(designSystem.accessibility.colorContrast)}

### 字体大小
${this.generateAccessibilityMarkdown(designSystem.accessibility.fontSize)}

### 键盘导航
${this.generateAccessibilityMarkdown(designSystem.accessibility.keyboardNavigation)}

### 屏幕阅读器
${this.generateAccessibilityMarkdown(designSystem.accessibility.screenReader)}

### 动画与运动
${this.generateAccessibilityMarkdown(designSystem.accessibility.motion)}

---

## 注意事项

本设计规范是从网站自动提取生成的，可能需要根据实际情况进行调整和优化。

建议：
1. 检查所有提取的样式是否准确
2. 根据实际需求调整设计规范
3. 补充缺失的设计元素
4. 添加更多组件样式规范
5. 完善可访问性要求
`;
  }

  generateFontScaleMarkdown(fontScale) {
    let markdown = '';
    Object.entries(fontScale).forEach(([name, value]) => {
      markdown += `- **${name}（${value.size}）**：${value.rem}\n`;
    });
    return markdown;
  }

  generateLineHeightMarkdown(lineHeightScale) {
    let markdown = '';
    Object.entries(lineHeightScale).forEach(([name, value]) => {
      markdown += `- **${name}**：${value}\n`;
    });
    return markdown;
  }

  generateLetterSpacingMarkdown(letterSpacingScale) {
    let markdown = '';
    Object.entries(letterSpacingScale).forEach(([name, value]) => {
      markdown += `- **${name}**：${value}\n`;
    });
    return markdown;
  }

  generateFunctionalColorsMarkdown(palette) {
    return `
- **成功色**：${palette.success}
- **警告色**：${palette.warning}
- **错误色**：${palette.error}
- **信息色**：${palette.info}
`;
  }

  generateNeutralColorsMarkdown(neutrals) {
    let markdown = '\n';
    neutrals.forEach((color, index) => {
      markdown += `- **中性色${index + 1}**：${color}\n`;
    });
    return markdown;
  }

  generateBackgroundColorsMarkdown(backgrounds) {
    let markdown = '\n';
    backgrounds.forEach((color, index) => {
      markdown += `- **背景色${index + 1}**：${color}\n`;
    });
    return markdown;
  }

  generateTextColorsMarkdown(textColors) {
    let markdown = '\n';
    textColors.forEach((color, index) => {
      markdown += `- **文字色${index + 1}**：${color}\n`;
    });
    return markdown;
  }

  generateBorderColorsMarkdown(borderColors) {
    let markdown = '\n';
    borderColors.forEach((color, index) => {
      markdown += `- **边框色${index + 1}**：${color}\n`;
    });
    return markdown;
  }

  generateSpacingScaleMarkdown(spacingScale) {
    let markdown = '';
    Object.entries(spacingScale).forEach(([name, value]) => {
      markdown += `- **${name}**：${value.rem}（${value.px}）\n`;
    });
    return markdown;
  }

  generateButtonStylesMarkdown(buttonStyles) {
    let markdown = '\n';
    if (buttonStyles.length === 0) {
      markdown += '未检测到按钮样式\n';
    } else {
      buttonStyles.forEach((style, index) => {
        markdown += `#### 按钮${index + 1}\n`;
        markdown += `- 标签：${style.tag}\n`;
        markdown += `- 背景色：${style.backgroundColor}\n`;
        markdown += `- 文字色：${style.color}\n`;
        markdown += `- 圆角：${style.borderRadius}\n`;
        markdown += `- 内边距：${style.padding}\n\n`;
      });
    }
    return markdown;
  }

  generateCardStylesMarkdown(cardStyles) {
    let markdown = '\n';
    if (cardStyles.length === 0) {
      markdown += '未检测到卡片样式\n';
    } else {
      cardStyles.forEach((style, index) => {
        markdown += `#### 卡片${index + 1}\n`;
        markdown += `- 标签：${style.tag}\n`;
        markdown += `- 背景色：${style.backgroundColor}\n`;
        markdown += `- 圆角：${style.borderRadius}\n`;
        markdown += `- 内边距：${style.padding}\n`;
        markdown += `- 外边距：${style.margin}\n\n`;
      });
    }
    return markdown;
  }

  generateInputStylesMarkdown(inputStyles) {
    let markdown = '\n';
    if (inputStyles.length === 0) {
      markdown += '未检测到输入框样式\n';
    } else {
      inputStyles.forEach((style, index) => {
        markdown += `#### 输入框${index + 1}\n`;
        markdown += `- 标签：${style.tag}\n`;
        markdown += `- 背景色：${style.backgroundColor}\n`;
        markdown += `- 文字色：${style.color}\n`;
        markdown += `- 圆角：${style.borderRadius}\n`;
        markdown += `- 内边距：${style.padding}\n`;
        markdown += `- 边框色：${style.borderColor}\n\n`;
      });
    }
    return markdown;
  }

  generateNavigationStylesMarkdown(navStyles) {
    let markdown = '\n';
    if (navStyles.length === 0) {
      markdown += '未检测到导航栏样式\n';
    } else {
      navStyles.forEach((style, index) => {
        markdown += `#### 导航栏${index + 1}\n`;
        markdown += `- 标签：${style.tag}\n`;
        markdown += `- 背景色：${style.backgroundColor}\n`;
        markdown += `- 文字色：${style.color}\n`;
        markdown += `- 内边距：${style.padding}\n\n`;
      });
    }
    return markdown;
  }

  generateCSSVariablesMarkdown(cssVariables) {
    let markdown = ':root {\n';
    Object.entries(cssVariables).forEach(([name, value]) => {
      markdown += `  ${name}: ${value};\n`;
    });
    markdown += '}';
    return markdown;
  }

  generateAccessibilityMarkdown(accessibility) {
    let markdown = `\n**状态**: ${accessibility.status}\n\n`;
    
    if (accessibility.issues && accessibility.issues.length > 0) {
      markdown += '**问题**:\n';
      accessibility.issues.forEach(issue => {
        markdown += `- ${issue}\n`;
      });
      markdown += '\n';
    }
    
    if (accessibility.recommendations && accessibility.recommendations.length > 0) {
      markdown += '**建议**:\n';
      accessibility.recommendations.forEach(rec => {
        markdown += `- ${rec}\n`;
      });
    }
    
    return markdown;
  }
}
