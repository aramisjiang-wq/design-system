import http from 'http';

const PORT = 3001;

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', message: '样式提取服务运行正常（原生版）' }));
    return;
  }

  if (req.url === '/extract' && req.method === 'POST') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const { url } = JSON.parse(body);

        if (!url) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'URL不能为空' }));
          return;
        }

        console.log(`开始提取: ${url}`);
        const result = await extractDesignSystem(url);

        if (result.success) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: true,
            markdown: result.markdown,
            url: url,
            extractedAt: new Date().toISOString()
          }));
        } else {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: false,
            error: result.error
          }));
        }
      } catch (error) {
        console.error('提取错误:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: false,
          error: error.message
        }));
      }
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not Found' }));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`========================================`);
  console.log(`样式提取服务已启动（原生版）`);
  console.log(`========================================`);
  console.log(`服务地址: http://localhost:${PORT}`);
  console.log(`健康检查: http://localhost:${PORT}/health`);
  console.log(`提取接口: http://localhost:${PORT}/extract`);
  console.log(`========================================`);
});

export async function extractDesignSystem(url) {
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
    
    const extractedData = {
      metadata: {
        url: url,
        extractedAt: new Date().toISOString()
      },
      colors: extractColors(html),
      fonts: extractFonts(html),
      spacing: extractSpacing(html),
      components: extractComponents(html)
    };
    
    console.log('正在生成设计规范...');
    const markdown = generateMarkdown(extractedData);
    
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

function extractColors(html) {
  const colors = new Set();
  const colorMap = new Map();
  
  const styleRegex = /style="([^"]*)"/gi;
  const colorRegex = /color:\s*([^;]+)/gi;
  const bgRegex = /background(?:-color)?:\s*([^;]+)/gi;
  const borderRegex = /border(?:-color)?:\s*([^;]+)/gi;
  
  let styleMatch;
  while ((styleMatch = styleRegex.exec(html)) !== null) {
    const style = styleMatch[1];
    
    let match;
    while ((match = colorRegex.exec(style)) !== null) {
      const color = normalizeColor(match[1].trim());
      if (color) {
        colors.add(color);
        colorMap.set(color, (colorMap.get(color) || 0) + 1);
      }
    }
    
    colorRegex.lastIndex = 0;
    while ((match = bgRegex.exec(style)) !== null) {
      const color = normalizeColor(match[1].trim());
      if (color && !color.startsWith('rgba(0, 0, 0, 0)')) {
        colors.add(color);
        colorMap.set(color, (colorMap.get(color) || 0) + 1);
      }
    }
    
    bgRegex.lastIndex = 0;
    while ((match = borderRegex.exec(style)) !== null) {
      const color = normalizeColor(match[1].trim());
      if (color) {
        colors.add(color);
        colorMap.set(color, (colorMap.get(color) || 0) + 1);
      }
    }
  }
  
  const styleTagRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let styleTagMatch;
  while ((styleTagMatch = styleTagRegex.exec(html)) !== null) {
    const styleContent = styleTagMatch[1];
    
    let match;
    while ((match = colorRegex.exec(styleContent)) !== null) {
      const color = normalizeColor(match[1].trim());
      if (color) {
        colors.add(color);
        colorMap.set(color, (colorMap.get(color) || 0) + 1);
      }
    }
    
    colorRegex.lastIndex = 0;
    while ((match = bgRegex.exec(styleContent)) !== null) {
      const color = normalizeColor(match[1].trim());
      if (color && !color.startsWith('rgba(0, 0, 0, 0)')) {
        colors.add(color);
        colorMap.set(color, (colorMap.get(color) || 0) + 1);
      }
    }
    
    bgRegex.lastIndex = 0;
    while ((match = borderRegex.exec(styleContent)) !== null) {
      const color = normalizeColor(match[1].trim());
      if (color) {
        colors.add(color);
        colorMap.set(color, (colorMap.get(color) || 0) + 1);
      }
    }
  }
  
  const sortedColors = Array.from(colorMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([color]) => color);
  
  return {
    allColors: sortedColors,
    primaryColor: sortedColors[0] || '#000000',
    colorCount: sortedColors.length
  };
}

function extractFonts(html) {
  const fonts = new Set();
  const fontSizes = new Set();
  const fontWeights = new Set();
  
  const styleRegex = /style="([^"]*)"/gi;
  const fontRegex = /font-family:\s*([^;]+)/gi;
  const sizeRegex = /font-size:\s*([^;]+)/gi;
  const weightRegex = /font-weight:\s*([^;]+)/gi;
  
  let styleMatch;
  while ((styleMatch = styleRegex.exec(html)) !== null) {
    const style = styleMatch[1];
    
    let match;
    while ((match = fontRegex.exec(style)) !== null) {
      fonts.add(match[1].trim());
    }
    
    while ((match = sizeRegex.exec(style)) !== null) {
      fontSizes.add(match[1].trim());
    }
    
    while ((match = weightRegex.exec(style)) !== null) {
      fontWeights.add(match[1].trim());
    }
  }
  
  const styleTagRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let styleTagMatch;
  while ((styleTagMatch = styleTagRegex.exec(html)) !== null) {
    const styleContent = styleTagMatch[1];
    
    let match;
    while ((match = fontRegex.exec(styleContent)) !== null) {
      fonts.add(match[1].trim());
    }
    
    while ((match = sizeRegex.exec(styleContent)) !== null) {
      fontSizes.add(match[1].trim());
    }
    
    while ((match = weightRegex.exec(styleContent)) !== null) {
      fontWeights.add(match[1].trim());
    }
  }
  
  const fontArray = Array.from(fonts);
  const sizeArray = Array.from(fontSizes).sort((a, b) => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    return aNum - bNum;
  });
  
  return {
    fontFamily: fontArray[0] || 'sans-serif',
    allFonts: fontArray,
    fontSizes: sizeArray,
    fontWeights: Array.from(fontWeights)
  };
}

function extractSpacing(html) {
  const spacings = new Set();
  const paddings = new Set();
  const margins = new Set();
  
  const styleRegex = /style="([^"]*)"/gi;
  const paddingRegex = /padding(?:-[a-z]+)?:\s*([^;]+)/gi;
  const marginRegex = /margin(?:-[a-z]+)?:\s*([^;]+)/gi;
  
  let styleMatch;
  while ((styleMatch = styleRegex.exec(html)) !== null) {
    const style = styleMatch[1];
    
    let match;
    while ((match = paddingRegex.exec(style)) !== null) {
      const value = match[1].trim();
      if (value !== '0') {
        paddings.add(value);
        spacings.add(value);
      }
    }
    
    while ((match = marginRegex.exec(style)) !== null) {
      const value = match[1].trim();
      if (value !== '0') {
        margins.add(value);
        spacings.add(value);
      }
    }
  }
  
  const styleTagRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let styleTagMatch;
  while ((styleTagMatch = styleTagRegex.exec(html)) !== null) {
    const styleContent = styleTagMatch[1];
    
    let match;
    while ((match = paddingRegex.exec(styleContent)) !== null) {
      const value = match[1].trim();
      if (value !== '0') {
        paddings.add(value);
        spacings.add(value);
      }
    }
    
    while ((match = marginRegex.exec(styleContent)) !== null) {
      const value = match[1].trim();
      if (value !== '0') {
        margins.add(value);
        spacings.add(value);
      }
    }
  }
  
  return {
    allSpacings: Array.from(spacings),
    paddings: Array.from(paddings),
    margins: Array.from(margins)
  };
}

function extractComponents(html) {
  const buttons = [];
  const cards = [];
  const inputs = [];
  
  const buttonRegex = /<(button|a[^>]*(?:role="button"|class="[^"]*btn[^"]*"))[^>]*>([^<]*)<\/\1>/gi;
  let buttonMatch;
  let buttonCount = 0;
  while ((buttonMatch = buttonRegex.exec(html)) !== null && buttonCount < 5) {
    const tag = buttonMatch[1];
    const text = buttonMatch[2].trim().substring(0, 50);
    
    buttons.push({
      tag: tag.toLowerCase(),
      text: text,
      className: '',
      style: {}
    });
    buttonCount++;
  }
  
  const cardRegex = /<div[^>]*class="[^"]*card[^"]*"[^>]*>/gi;
  let cardMatch;
  let cardCount = 0;
  while ((cardMatch = cardRegex.exec(html)) !== null && cardCount < 5) {
    cards.push({
      tag: 'div',
      className: cardMatch[0].match(/class="([^"]*)"/)?.[1] || '',
      style: {}
    });
    cardCount++;
  }
  
  const inputRegex = /<(input|textarea|select)[^>]*(?:type="([^"]*)")?[^>]*>/gi;
  let inputMatch;
  let inputCount = 0;
  while ((inputMatch = inputRegex.exec(html)) !== null && inputCount < 5) {
    const tag = inputMatch[1];
    const type = inputMatch[2] || 'text';
    
    inputs.push({
      tag: tag.toLowerCase(),
      type: type,
      className: '',
      style: {}
    });
    inputCount++;
  }
  
  return {
    buttons,
    cards,
    inputs
  };
}

function normalizeColor(color) {
  if (!color || color === 'transparent' || color === 'none') {
    return null;
  }
  
  color = color.trim();
  
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
    'magenta': '#ff00ff'
  };
  
  return namedColors[color.toLowerCase()] || color;
}

function generateMarkdown(data) {
  const { metadata, colors, fonts, spacing, components } = data;
  
  return `# 设计规范提取结果

## 元数据

- **网站URL**: ${metadata.url}
- **提取时间**: ${metadata.extractedAt}
- **版本**: 1.0.0

---

## 设计理念

- **风格名称**：自动提取
- **风格描述**：从网站自动提取的设计样式
- **提取方式**：基于 HTML 内联样式和内部样式表分析

---

## 设计价值观

- **数据驱动**：基于实际网站样式数据
- **可复用性**：生成标准化的设计规范
- **可定制性**：支持自定义和扩展
- **标准化**：遵循设计规范标准

---

## 字体系统

### 主字体
\`\`\`
字体：${fonts.fontFamily}
\`\`\`

### 字体使用规则

#### 标题层级
${fonts.fontSizes.map((size, i) => `- **H${i + 1}**：${size}`).join('\n')}

#### 字重
${fonts.fontWeights.map(weight => `- **${weight}**`).join('\n')}

---

## 颜色系统

### 主色
\`\`\`
主色：${colors.primaryColor}
\`\`\`

### 检测到的颜色（按使用频率排序）
${colors.allColors.slice(0, 10).map((color, i) => `- **颜色${i + 1}**：${color}`).join('\n')}

### 功能色
- **成功色**：#4a9（示例）
- **警告色**：#c44（示例）
- **错误色**：#c44（示例）
- **信息色**：#4a9（示例）

---

## 间距系统

### 间距值
${spacing.allSpacings.slice(0, 10).map(s => `- **${s}**`).join('\n')}

### 内边距
${spacing.paddings.slice(0, 5).map(p => `- **${p}**`).join('\n')}

### 外边距
${spacing.margins.slice(0, 5).map(m => `- **${m}**`).join('\n')}

---

## 组件规范

### 按钮
${components.buttons.length > 0 ? components.buttons.map((btn, i) => `
#### 按钮${i + 1}
- 标签：${btn.tag}
- 文本：${btn.text}
- 类名：${btn.className}
- 样式：
${Object.entries(btn.style).map(([k, v]) => `  - ${k}: ${v}`).join('\n')}
`).join('\n') : '未检测到按钮样式'}

### 卡片
${components.cards.length > 0 ? components.cards.map((card, i) => `
#### 卡片${i + 1}
- 标签：${card.tag}
- 类名：${card.className}
- 样式：
${Object.entries(card.style).map(([k, v]) => `  - ${k}: ${v}`).join('\n')}
`).join('\n') : '未检测到卡片样式'}

### 输入框
${components.inputs.length > 0 ? components.inputs.map((input, i) => `
#### 输入框${i + 1}
- 标签：${input.tag}
- 类型：${input.type}
- 类名：${input.className}
- 样式：
${Object.entries(input.style).map(([k, v]) => `  - ${k}: ${v}`).join('\n')}
`).join('\n') : '未检测到输入框样式'}

---

## CSS 变量定义

\`\`\`css
:root {
  --font-family: ${fonts.fontFamily};
  --color-primary: ${colors.primaryColor};
  ${colors.allColors.slice(0, 5).map((c, i) => `  --color-${i + 1}: ${c};`).join('\n')}
}
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

本设计规范是从网站自动提取生成的，基于 HTML 内联样式和内部样式表分析。

**限制**：
- 仅分析内联样式（inline styles）和内部样式表
- 不包含外部 CSS 文件
- 不包含 JavaScript 动态生成的样式

**建议**：
1. 检查所有提取的样式是否准确
2. 根据实际需求调整设计规范
3. 补充缺失的设计元素
4. 添加更多组件样式规范
5. 完善可访问性要求
6. 手动添加外部 CSS 文件中的样式
`;
}
