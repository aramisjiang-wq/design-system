import { extractDesignSystemEnhanced as baseExtract } from './extractor-enhanced.js';

export async function extractDesignSystemAdvanced(url) {
  try {
    console.log('正在获取网页内容...');
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const html = await response.text();
    
    console.log('正在分析样式...');
    
    const baseResult = await baseExtract(url);
    
    console.log('正在获取外部 CSS 文件...');
    const externalCSS = await fetchExternalCSS(html, url);
    
    console.log('正在分析外部 CSS...');
    const cssStyles = analyzeExternalCSS(externalCSS);
    
    const extractedData = {
      metadata: {
        url: url,
        extractedAt: new Date().toISOString()
      },
      colors: mergeColors(baseResult.data.colors, cssStyles.colors),
      fonts: mergeFonts(baseResult.data.fonts, cssStyles.fonts),
      spacing: mergeSpacing(baseResult.data.spacing, cssStyles.spacing),
      components: baseResult.data.components,
      layout: mergeLayout(baseResult.data.layout, cssStyles.layout),
      cssVariables: mergeCSSVariables(baseResult.data.cssVariables, cssStyles.cssVariables),
      externalStylesheets: baseResult.data.externalStylesheets,
      theme: baseResult.data.theme,
      externalCSS: externalCSS.substring(0, 5000)
    };
    
    console.log('正在生成设计规范...');
    const markdown = generateMarkdownAdvanced(extractedData);
    
    return {
      success: true,
      markdown,
      data: extractedData
    };
    
  } catch (error) {
    console.error('提取失败:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

async function fetchExternalCSS(html, baseUrl) {
  const cssContents = [];
  
  const linkRegex = /<link[^>]*rel\s*=\s*"stylesheet"[^>]*href\s*=\s*"([^"]*)"[^>]*>/gi;
  let linkMatch;
  
  while ((linkMatch = linkRegex.exec(html)) !== null) {
    let cssUrl = linkMatch[1];
    
    if (cssUrl.startsWith('//')) {
      cssUrl = 'https:' + cssUrl;
    } else if (cssUrl.startsWith('/')) {
      const urlObj = new URL(baseUrl);
      cssUrl = urlObj.origin + cssUrl;
    } else if (!cssUrl.startsWith('http')) {
      const urlObj = new URL(baseUrl);
      cssUrl = urlObj.origin + '/' + cssUrl;
    }
    
    try {
      console.log(`正在获取 CSS: ${cssUrl}`);
      const cssResponse = await fetch(cssUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      
      if (cssResponse.ok) {
        const cssText = await cssResponse.text();
        cssContents.push(cssText);
        console.log(`成功获取 CSS: ${cssUrl} (${cssText.length} 字符)`);
      }
    } catch (error) {
      console.log(`获取 CSS 失败: ${cssUrl} - ${error.message}`);
    }
  }
  
  return cssContents.join('\n');
}

function analyzeExternalCSS(css) {
  const colors = new Map();
  const fonts = new Map();
  const fontSizes = new Map();
  const fontWeights = new Map();
  const lineHeights = new Map();
  const spacings = new Map();
  const paddings = new Map();
  const margins = new Map();
  const gaps = new Map();
  const maxWidth = new Set();
  const display = new Set();
  const flexDirections = new Set();
  const justifies = new Set();
  const aligns = new Set();
  const grids = new Set();
  const cssVariables = new Map();
  
  const colorRegex = /color\s*:\s*([^;{}]+)/gi;
  const bgRegex = /background(?:-color)?\s*:\s*([^;{}]+)/gi;
  const borderRegex = /border(?:-color)?\s*:\s*([^;{}]+)/gi;
  const shadowRegex = /box-shadow\s*:\s*([^;{}]+)/gi;
  const fontRegex = /font-family\s*:\s*([^;{}]+)/gi;
  const sizeRegex = /font-size\s*:\s*([^;{}]+)/gi;
  const weightRegex = /font-weight\s*:\s*([^;{}]+)/gi;
  const lineHeightRegex = /line-height\s*:\s*([^;{}]+)/gi;
  const paddingRegex = /padding(?:-[a-z]+)?\s*:\s*([^;{}]+)/gi;
  const marginRegex = /margin(?:-[a-z]+)?\s*:\s*([^;{}]+)/gi;
  const gapRegex = /gap(?:-[a-z]+)?\s*:\s*([^;{}]+)/gi;
  const maxWidthRegex = /max-width\s*:\s*([^;{}]+)/gi;
  const displayRegex = /display\s*:\s*([^;{}]+)/gi;
  const flexDirectionRegex = /flex-direction\s*:\s*([^;{}]+)/gi;
  const justifyRegex = /justify-content\s*:\s*([^;{}]+)/gi;
  const alignRegex = /align-items\s*:\s*([^;{}]+)/gi;
  const gridRegex = /grid-template-columns\s*:\s*([^;{}]+)/gi;
  const varRegex = /--([a-z-]+)\s*:\s*([^;{}]+)/gi;
  
  let match;
  
  while ((match = colorRegex.exec(css)) !== null) {
    const color = normalizeColor(match[1].trim());
    if (color) {
      colors.set(color, (colors.get(color) || 0) + 1);
    }
  }
  
  while ((match = bgRegex.exec(css)) !== null) {
    const color = normalizeColor(match[1].trim());
    if (color && !color.startsWith('rgba(0, 0, 0, 0)')) {
      colors.set(color, (colors.get(color) || 0) + 1);
    }
  }
  
  while ((match = borderRegex.exec(css)) !== null) {
    const color = normalizeColor(match[1].trim());
    if (color) {
      colors.set(color, (colors.get(color) || 0) + 1);
    }
  }
  
  while ((match = shadowRegex.exec(css)) !== null) {
    const shadow = match[1].trim();
    const shadowColors = extractColorsFromShadow(shadow);
    shadowColors.forEach(color => {
      if (color) {
        colors.set(color, (colors.get(color) || 0) + 1);
      }
    });
  }
  
  while ((match = fontRegex.exec(css)) !== null) {
    const font = match[1].trim();
    if (font && !font.includes('{') && !font.includes('}')) {
      fonts.set(font, (fonts.get(font) || 0) + 1);
    }
  }
  
  while ((match = sizeRegex.exec(css)) !== null) {
    const size = match[1].trim();
    if (size && !size.includes('{') && !size.includes('}')) {
      fontSizes.set(size, (fontSizes.get(size) || 0) + 1);
    }
  }
  
  while ((match = weightRegex.exec(css)) !== null) {
    const weight = match[1].trim();
    if (weight && !weight.includes('{') && !weight.includes('}')) {
      fontWeights.set(weight, (fontWeights.get(weight) || 0) + 1);
    }
  }
  
  while ((match = lineHeightRegex.exec(css)) !== null) {
    const height = match[1].trim();
    if (height && !height.includes('{') && !height.includes('}')) {
      lineHeights.set(height, (lineHeights.get(height) || 0) + 1);
    }
  }
  
  while ((match = paddingRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && value !== '0' && !value.includes('{') && !value.includes('}')) {
      paddings.set(value, (paddings.get(value) || 0) + 1);
      spacings.set(value, (spacings.get(value) || 0) + 1);
    }
  }
  
  while ((match = marginRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && value !== '0' && !value.includes('{') && !value.includes('}')) {
      margins.set(value, (margins.get(value) || 0) + 1);
      spacings.set(value, (spacings.get(value) || 0) + 1);
    }
  }
  
  while ((match = gapRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && value !== '0' && !value.includes('{') && !value.includes('}')) {
      gaps.set(value, (gaps.get(value) || 0) + 1);
      spacings.set(value, (spacings.get(value) || 0) + 1);
    }
  }
  
  while ((match = maxWidthRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && !value.includes('{') && !value.includes('}')) {
      maxWidth.add(value);
    }
  }
  
  while ((match = displayRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && !value.includes('{') && !value.includes('}')) {
      display.add(value);
    }
  }
  
  while ((match = flexDirectionRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && !value.includes('{') && !value.includes('}')) {
      flexDirections.add(value);
    }
  }
  
  while ((match = justifyRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && !value.includes('{') && !value.includes('}')) {
      justifies.add(value);
    }
  }
  
  while ((match = alignRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && !value.includes('{') && !value.includes('}')) {
      aligns.add(value);
    }
  }
  
  while ((match = gridRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && !value.includes('{') && !value.includes('}')) {
      grids.add(value);
    }
  }
  
  while ((match = varRegex.exec(css)) !== null) {
    const name = match[1].trim();
    const value = match[2].trim();
    if (name && value && !name.includes('{') && !value.includes('{')) {
      cssVariables.set(name, value);
    }
  }
  
  return {
    colors: {
      allColors: Array.from(colors.keys()),
      colorUsage: Object.fromEntries(colors)
    },
    fonts: {
      allFonts: Array.from(fonts.keys()),
      fontSizes: Array.from(fontSizes.keys()),
      fontWeights: Array.from(fontWeights.keys()),
      lineHeights: Array.from(lineHeights.keys())
    },
    spacing: {
      allSpacings: Array.from(spacings.keys()),
      paddings: Array.from(paddings.keys()),
      margins: Array.from(margins.keys()),
      gaps: Array.from(gaps.keys())
    },
    layout: {
      maxWidth: Array.from(maxWidth),
      display: Array.from(display),
      flexDirections: Array.from(flexDirections),
      justifies: Array.from(justifies),
      aligns: Array.from(aligns),
      grids: Array.from(grids)
    },
    cssVariables: Object.fromEntries(cssVariables)
  };
}

function mergeColors(baseColors, cssColors) {
  const merged = { ...baseColors };
  
  cssColors.allColors.forEach(color => {
    if (!merged.allColors.includes(color)) {
      merged.allColors.push(color);
    }
    merged.colorUsage[color] = (merged.colorUsage[color] || 0) + (cssColors.colorUsage[color] || 0);
  });
  
  merged.allColors.sort((a, b) => (merged.colorUsage[b] || 0) - (merged.colorUsage[a] || 0));
  merged.colorCount = merged.allColors.length;
  
  if (merged.colorCount > 0 && merged.allColors[0] !== '#ffffff' && merged.allColors[0] !== '#000000') {
    merged.primaryColor = merged.allColors[0];
  }
  
  return merged;
}

function mergeFonts(baseFonts, cssFonts) {
  const merged = { ...baseFonts };
  
  cssFonts.allFonts.forEach(font => {
    if (!merged.allFonts.includes(font)) {
      merged.allFonts.push(font);
    }
  });
  
  cssFonts.fontSizes.forEach(size => {
    if (!merged.fontSizes.includes(size)) {
      merged.fontSizes.push(size);
    }
  });
  
  cssFonts.fontWeights.forEach(weight => {
    if (!merged.fontWeights.includes(weight)) {
      merged.fontWeights.push(weight);
    }
  });
  
  cssFonts.lineHeights.forEach(height => {
    if (!merged.lineHeights.includes(height)) {
      merged.lineHeights.push(height);
    }
  });
  
  return merged;
}

function mergeSpacing(baseSpacing, cssSpacing) {
  const merged = { ...baseSpacing };
  
  cssSpacing.allSpacings.forEach(spacing => {
    if (!merged.allSpacings.includes(spacing)) {
      merged.allSpacings.push(spacing);
    }
  });
  
  cssSpacing.paddings.forEach(padding => {
    if (!merged.paddings.includes(padding)) {
      merged.paddings.push(padding);
    }
  });
  
  cssSpacing.margins.forEach(margin => {
    if (!merged.margins.includes(margin)) {
      merged.margins.push(margin);
    }
  });
  
  cssSpacing.gaps.forEach(gap => {
    if (!merged.gaps.includes(gap)) {
      merged.gaps.push(gap);
    }
  });
  
  return merged;
}

function mergeLayout(baseLayout, cssLayout) {
  const merged = { ...baseLayout };
  
  cssLayout.maxWidth.forEach(w => {
    if (!merged.maxWidth.includes(w)) {
      merged.maxWidth.push(w);
    }
  });
  
  cssLayout.display.forEach(d => {
    if (!merged.display.includes(d)) {
      merged.display.push(d);
    }
  });
  
  cssLayout.flexDirections.forEach(fd => {
    if (!merged.flexDirections.includes(fd)) {
      merged.flexDirections.push(fd);
    }
  });
  
  cssLayout.justifies.forEach(j => {
    if (!merged.justifies.includes(j)) {
      merged.justifies.push(j);
    }
  });
  
  cssLayout.aligns.forEach(a => {
    if (!merged.aligns.includes(a)) {
      merged.aligns.push(a);
    }
  });
  
  cssLayout.grids.forEach(g => {
    if (!merged.grids.includes(g)) {
      merged.grids.push(g);
    }
  });
  
  return merged;
}

function mergeCSSVariables(baseVars, cssVars) {
  return { ...baseVars, ...cssVars };
}

function extractColorsFromShadow(shadow) {
  const colors = [];
  const colorRegex = /rgba?\([^)]+\)|#[a-fA-F0-9]{3,8}/g;
  let match;
  while ((match = colorRegex.exec(shadow)) !== null) {
    const color = normalizeColor(match[0]);
    if (color) {
      colors.push(color);
    }
  }
  return colors;
}

function normalizeColor(color) {
  if (!color || color === 'transparent' || color === 'none' || color === 'inherit') {
    return null;
  }
  
  color = color.trim();
  
  if (color.includes('{') || color.includes('}') || color.length > 50) {
    return null;
  }
  
  if (color.startsWith('rgb')) {
    return color;
  }
  
  if (color.startsWith('#')) {
    return color;
  }
  
  const namedColors = {
    'black': '#000000',
    'white': '#ffffff',
    'red': '#ff0000',
    'green': '#00ff00',
    'blue': '#0000ff',
    'yellow': '#ffff00',
    'cyan': '#00ffff',
    'magenta': '#ff00ff',
    'gray': '#808080',
    'grey': '#808080'
  };
  
  return namedColors[color.toLowerCase()] || color;
}

function generateMarkdownAdvanced(data) {
  const { metadata, colors, fonts, spacing, components, layout, cssVariables, externalStylesheets, theme, externalCSS } = data;
  
  return `# 设计规范提取结果

## 元数据

- **网站URL**: ${metadata.url}
- **提取时间**: ${metadata.extractedAt}
- **版本**: 2.0.0 (高级版 - 包含外部 CSS 分析)

---

## 设计理念

- **风格名称**：自动提取
- **风格描述**：从网站自动提取的设计样式（包含外部 CSS 文件分析）
- **提取方式**：基于 HTML 内联样式、内部样式表和外部 CSS 文件分析

---

## 设计价值观

- **数据驱动**：基于实际网站样式数据
- **可复用性**：生成标准化的设计规范
- **可定制性**：支持自定义和扩展
- **标准化**：遵循设计规范标准

---

## 主题信息

- **暗黑模式**: ${theme.hasDarkMode ? '支持' : '不支持'}
- **亮色模式**: ${theme.hasLightMode ? '支持' : '不支持'}
- **主题变量数量**: ${Object.keys(theme.themeVariables).length}

---

## 字体系统

### 主字体
\`\`\`
字体：${fonts.fontFamily}
\`\`\`

### 字号（按使用频率排序）
${fonts.fontSizes.length > 0 ? fonts.fontSizes.slice(0, 15).map(s => `- **${s}**`).join('\n') : '未检测到字号'}

### 字重
${fonts.fontWeights.length > 0 ? fonts.fontWeights.slice(0, 10).map(w => `- **${w}**`).join('\n') : '未检测到字重'}

### 行高
${fonts.lineHeights.length > 0 ? fonts.lineHeights.slice(0, 10).map(h => `- **${h}**`).join('\n') : '未检测到行高'}

---

## 颜色系统

### 主色
\`\`\`
主色：${colors.primaryColor}
\`\`\`

### 检测到的颜色（按使用频率排序）
${colors.allColors.length > 0 ? colors.allColors.slice(0, 30).map((color, i) => `- **颜色${i + 1}**：${color}${colors.colorUsage[color] ? `（使用次数：${colors.colorUsage[color]}）` : ''}`).join('\n') : '未检测到颜色'}

### 功能色（建议）
- **成功色**：#4a9（示例）
- **警告色**：#c44（示例）
- **错误色**：#c44（示例）
- **信息色**：#4a9（示例）

---

## 间距系统

### 间距值（按使用频率排序）
${spacing.allSpacings.length > 0 ? spacing.allSpacings.slice(0, 20).map(s => `- **${s}**`).join('\n') : '未检测到间距'}

### 内边距
${spacing.paddings.length > 0 ? spacing.paddings.slice(0, 15).map(p => `- **${p}**`).join('\n') : '未检测到内边距'}

### 外边距
${spacing.margins.length > 0 ? spacing.margins.slice(0, 15).map(m => `- **${m}**`).join('\n') : '未检测到外边距'}

### 间距
${spacing.gaps.length > 0 ? spacing.gaps.slice(0, 10).map(g => `- **${g}**`).join('\n') : '未检测到间距'}

---

## 布局系统

### 最大宽度
${layout.maxWidth.length > 0 ? layout.maxWidth.slice(0, 10).map(w => `- **${w}**`).join('\n') : '未检测到最大宽度'}

### 显示方式
${layout.display.length > 0 ? layout.display.slice(0, 10).map(d => `- **${d}**`).join('\n') : '未检测到显示方式'}

### Flex 方向
${layout.flexDirections.length > 0 ? layout.flexDirections.slice(0, 10).map(fd => `- **${fd}**`).join('\n') : '未检测到 Flex 方向'}

### 对齐方式
${layout.justifies.length > 0 ? layout.justifies.slice(0, 10).map(j => `- **${j}**`).join('\n') : '未检测到对齐方式'}

### 垂直对齐
${layout.aligns.length > 0 ? layout.aligns.slice(0, 10).map(a => `- **${a}**`).join('\n') : '未检测到垂直对齐'}

### 网格布局
${layout.grids.length > 0 ? layout.grids.slice(0, 10).map(g => `- **${g}**`).join('\n') : '未检测到网格布局'}

---

## 组件规范

### 按钮
${components.buttons.length > 0 ? components.buttons.map((btn, i) => `
#### 按钮${i + 1}
- 标签：\`${btn.tag}\`
- 文本：\`${btn.text}\`
- 类名：\`${btn.className}\`
- 样式：
${Object.entries(btn.style).length > 0 ? Object.entries(btn.style).map(([k, v]) => `  - ${k}: ${v}`).join('\n') : '  无内联样式'}
`).join('\n') : '未检测到按钮样式'}

### 卡片
${components.cards.length > 0 ? components.cards.map((card, i) => `
#### 卡片${i + 1}
- 标签：\`${card.tag}\`
- 类名：\`${card.className}\`
- 样式：
${Object.entries(card.style).length > 0 ? Object.entries(card.style).map(([k, v]) => `  - ${k}: ${v}`).join('\n') : '  无内联样式'}
`).join('\n') : '未检测到卡片样式'}

### 输入框
${components.inputs.length > 0 ? components.inputs.map((input, i) => `
#### 输入框${i + 1}
- 标签：\`${input.tag}\`
- 类型：\`${input.type}\`
- 类名：\`${input.className}\`
- 样式：
${Object.entries(input.style).length > 0 ? Object.entries(input.style).map(([k, v]) => `  - ${k}: ${v}`).join('\n') : '  无内联样式'}
`).join('\n') : '未检测到输入框样式'}

### 链接
${components.links.length > 0 ? components.links.map((link, i) => `
#### 链接${i + 1}
- 标签：\`${link.tag}\`
- 文本：\`${link.text}\`
- 类名：\`${link.className}\`
- 样式：
${Object.entries(link.style).length > 0 ? Object.entries(link.style).map(([k, v]) => `  - ${k}: ${v}`).join('\n') : '  无内联样式'}
`).join('\n') : '未检测到链接样式'}

---

## CSS 变量

${Object.keys(cssVariables).length > 0 ? Object.entries(cssVariables).map(([name, value]) => `- **--${name}**: ${value}`).join('\n') : '未检测到 CSS 变量'}

---

## 外部样式表

${externalStylesheets.length > 0 ? externalStylesheets.map((sheet, i) => `- **样式表${i + 1}**: ${sheet}`).join('\n') : '未检测到外部样式表'}

---

## CSS 变量定义

\`\`\`css
:root {
  --font-family: ${fonts.fontFamily};
  --color-primary: ${colors.primaryColor};
  ${Object.entries(cssVariables).slice(0, 15).map(([name, value]) => `  --${name}: ${value};`).join('\n')}
}
\`\`\`

---

## 外部 CSS 预览

\`\`\`css
${externalCSS}
\`\`\`

---

## 可访问性要求

### 色彩对比度
- **状态**: 需要手动检查
- **建议**: 确保文字与背景的对比度至少为 4.5:1

### 字体大小
- **状态**: 需要手动检查
- **建议**: 正文文字大小不小于 14px

### 键盘导航
- **状态**: 需要手动检查
- **建议**: 确保所有交互元素可通过 Tab 键访问

### 屏幕阅读器
- **状态**: 需要手动检查
- **建议**: 为所有图片提供 alt 文本，使用语义化 HTML

---

## 注意事项

本设计规范是从网站自动提取生成的，基于 HTML 内联样式、内部样式表和外部 CSS 文件分析。

**特性**：
- 分析内联样式（inline styles）
- 分析内部样式表
- 分析外部 CSS 文件
- 合并所有样式数据

**限制**：
- 不包含 JavaScript 动态生成的样式
- 外部 CSS 文件可能受 CORS 限制
- 某些 CSS 预处理器（SASS、LESS）需要编译后才能分析

**建议**：
1. 检查所有提取的样式是否准确
2. 根据实际需求调整设计规范
3. 补充缺失的设计元素
4. 添加更多组件样式规范
5. 完善可访问性要求
6. 手动添加外部 CSS 文件中的样式
7. 检查外部样式表链接是否正确加载
`;
}
