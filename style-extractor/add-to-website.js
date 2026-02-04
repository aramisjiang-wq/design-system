import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function addToMainWebsite(extractedData, markdown) {
  try {
    console.log('正在添加到主网站...');

    const designSystemsDir = path.join(__dirname, '..');
    const url = extractedData.metadata.url;
    const timestamp = new Date().toISOString().slice(0, 10);
    const folderName = `extracted-${timestamp}-${Math.random().toString(36).substr(2, 9)}`;
    const folderPath = path.join(designSystemsDir, folderName);

    console.log(`创建文件夹: ${folderName}`);
    fs.mkdirSync(folderPath, { recursive: true });

    const primaryColor = extractedData.colors.primaryColor;
    const fontFamily = extractedData.fonts.fontFamily || 'sans-serif';

    const readmeContent = generateReadme(extractedData, markdown, folderName);
    const exampleContent = generateExample(extractedData, primaryColor, fontFamily);

    fs.writeFileSync(path.join(folderPath, 'README.md'), readmeContent, 'utf8');
    fs.writeFileSync(path.join(folderPath, 'example.html'), exampleContent, 'utf8');

    console.log('更新 index.html...');
    await updateIndexHtml(folderName, extractedData, primaryColor);

    console.log('✓ 成功添加到主网站！');
    console.log(`新设计规范: ${folderName}`);
    console.log(`访问地址: http://localhost:8082/`);

    return {
      success: true,
      folderName,
      path: folderPath,
      url: `http://localhost:8082/`
    };
  } catch (error) {
    console.error('添加到主网站失败:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

function generateReadme(extractedData, markdown, folderName) {
  const primaryColor = extractedData.colors.primaryColor;
  const fontFamily = extractedData.fonts.fontFamily || 'sans-serif';

  return `# ${folderName}

## 设计理念

- **风格名称**：自动提取
- **风格描述**：从 ${extractedData.metadata.url} 自动提取的设计样式
- **提取时间**：${extractedData.metadata.extractedAt}
- **来源网站**：${extractedData.metadata.url}

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
字体：${fontFamily}
\`\`\`

### 字号（按使用频率排序）
${extractedData.fonts.fontSizes.slice(0, 10).map((size, i) => `- **${size}**`).join('\n')}

### 字重
${extractedData.fonts.fontWeights.slice(0, 10).map(weight => `- **${weight}**`).join('\n')}

---

## 颜色系统

### 主色
\`\`\`
主色：${primaryColor}
\`\`\`

### 检测到的颜色（按使用频率排序）
${extractedData.colors.allColors.slice(0, 20).map((color, i) => `- **颜色${i + 1}**：${color}（使用次数：${extractedData.colors.colorUsage[color]}）`).join('\n')}

---

## 间距系统

### 间距值（按使用频率排序）
${extractedData.spacing.allSpacings.slice(0, 20).map(s => `- **${s}**`).join('\n')}

---

## 组件规范

### 按钮
${extractedData.components.buttons.length > 0 ? extractedData.components.buttons.map((btn, i) => `
#### 按钮${i + 1}
- 标签：\`${btn.tag}\`
- 文本：\`${btn.text}\`
- 类名：\`${btn.className}\`
- 样式：
${Object.entries(btn.style).length > 0 ? Object.entries(btn.style).map(([k, v]) => `  - ${k}: ${v}`).join('\n') : '  无内联样式'}
`).join('\n') : '未检测到按钮样式'}

---

## 布局系统

### 显示方式
${extractedData.layout.display.slice(0, 10).map(d => `- **${d}**`).join('\n')}

---

## 注意事项

本设计规范是从网站自动提取生成的。

**限制**：
- 仅分析内联样式（inline styles）和内部样式表
- 不包含外部 CSS 文件的详细内容
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

function generateExample(extractedData, primaryColor, fontFamily) {
  const colors = extractedData.colors.allColors.slice(0, 5);
  const spacing = extractedData.spacing.allSpacings.slice(0, 3);

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>设计规范示例</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: ${fontFamily}, sans-serif;
            background: #ffffff;
            color: #000000;
            line-height: 1.6;
            padding: 2rem;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: ${primaryColor};
        }

        h2 {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
            margin-top: 2rem;
        }

        .section {
            margin-bottom: 3rem;
        }

        .color-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }

        .color-card {
            padding: 1rem;
            border-radius: 0.5rem;
            text-align: center;
        }

        .button-group {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-top: 1rem;
        }

        button {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 0.25rem;
            font-family: ${fontFamily}, sans-serif;
            cursor: pointer;
            transition: all 0.2s;
        }

        button:hover {
            opacity: 0.8;
        }

        .primary-button {
            background: ${primaryColor};
            color: #ffffff;
        }

        .secondary-button {
            background: #f5f5f5;
            color: #000000;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>设计规范示例</h1>
        <p>从网站自动提取的设计样式</p>

        <div class="section">
            <h2>颜色系统</h2>
            <div class="color-grid">
                ${colors.map(color => {
                    const hex = color.replace('#', '');
                    const r = parseInt(hex.substr(0, 2), 16);
                    const g = parseInt(hex.substr(2, 2), 16);
                    const b = parseInt(hex.substr(4, 2), 16);
                    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
                    const contrastColor = (yiq >= 128) ? '#000000' : '#ffffff';
                    return `
                <div class="color-card" style="background: ${color}; color: ${contrastColor}">
                    <div>${color}</div>
                </div>
                `;
                }).join('')}
            </div>
        </div>

        <div class="section">
            <h2>按钮样式</h2>
            <div class="button-group">
                <button class="primary-button">主要按钮</button>
                <button class="secondary-button">次要按钮</button>
            </div>
        </div>

        <div class="section">
            <h2>间距示例</h2>
            <div style="margin-bottom: ${spacing[0] || '1rem'}">
                间距 1: ${spacing[0] || '1rem'}
            </div>
            <div style="margin-bottom: ${spacing[1] || '2rem'}">
                间距 2: ${spacing[1] || '2rem'}
            </div>
            <div style="margin-bottom: ${spacing[2] || '3rem'}">
                间距 3: ${spacing[2] || '3rem'}
            </div>
        </div>
    </div>
</body>
</html>`;
}

async function updateIndexHtml(folderName, extractedData, primaryColor) {
  const indexPath = path.join(__dirname, '..', 'index.html');
  let indexContent = fs.readFileSync(indexPath, 'utf8');

  const newCard = generateCardHtml(folderName, extractedData, primaryColor);

  const extractedGridRegex = /<div id="extracted-grid"[^>]*>([\s\S]*?)<\/div>/;
  const gridMatch = indexContent.match(extractedGridRegex);

  if (gridMatch) {
    const beforeGrid = indexContent.substring(0, gridMatch.index);
    const afterGrid = indexContent.substring(gridMatch.index + gridMatch[0].length);
    const updatedGrid = gridMatch[1] + newCard;
    const updatedContent = beforeGrid + `<div id="extracted-grid" class="grid">` + updatedGrid + '</div>' + afterGrid;

    const updatedWithSection = updatedContent.replace(
      /<div id="extracted-section"[^>]* style="display: none;">/,
      '<div id="extracted-section" class="category">'
    );

    fs.writeFileSync(indexPath, updatedWithSection, 'utf8');
    console.log('✓ index.html 已更新（添加到自动提取部分）');
  } else {
    console.error('未找到自动提取部分');
  }
}

function generateCardHtml(folderName, extractedData, primaryColor) {
  const description = `从 ${extractedData.metadata.url} 提取`;

  return `
                <div class="card">
                    <div class="preview-container">
                        <div class="preview-loading"></div>
                        <iframe class="preview" src="${folderName}/example.html" loading="lazy" onload="this.parentElement.classList.add('preview-loaded')"></iframe>
                    </div>
                    <div class="card-content">
                        <div class="card-number">Auto</div>
                        <h3 class="card-title">${folderName}</h3>
                        <p class="card-description">${description}</p>
                        <div class="card-links">
                            <a href="${folderName}/README.md" class="card-link">文档</a>
                            <a href="${folderName}/example.html" class="card-link preview-link">预览</a>
                            <button class="card-link delete-link" onclick="deleteDesignSystem('${folderName}', this)">删除</button>
                        </div>
                    </div>
                </div>`;
}
