# 设计规范提取工具 - 使用指南

## 概述

这是一个从网站自动提取设计规范的工具，可以分析网站的样式并生成标准化的设计规范文档。

## 功能特点

- ✅ 提取颜色系统（主色、辅助色、功能色）
- ✅ 提取字体系统（字体家族、字号、字重）
- ✅ 提取间距系统（内边距、外边距）
- ✅ 提取组件规范（按钮、卡片、输入框）
- ✅ 生成标准化的 Markdown 设计规范文档
- ✅ 支持内联样式和内部样式表分析

## 使用方法

### 方法 1：命令行测试（推荐用于验证）

```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS/style-extractor
node test-simple.js
```

### 方法 2：使用后端服务（推荐用于生产）

#### 步骤 1：启动后端服务

```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS/style-extractor
node server.js
```

服务将在 `http://localhost:3001` 启动。

#### 步骤 2：使用 Web 界面

访问：`http://localhost:8082/extractor-test.html`

#### 步骤 3：输入 URL 并提取

在输入框中输入网站 URL，点击"提取设计规范"按钮。

### 方法 3：直接调用 API

```bash
curl -X POST http://localhost:3001/extract \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
```

## 提取质量说明

### 高质量提取的网站

这些网站通常使用内联样式或内部样式表：

- ✅ **w3schools.com** - 使用内联样式，提取质量 ⭐⭐⭐⭐⭐
- ✅ **CodePen** - 使用内联样式，提取质量 ⭐⭐⭐⭐⭐
- ✅ **JSFiddle** - 使用内联样式，提取质量 ⭐⭐⭐⭐⭐
- ✅ **现代前端框架应用** - React/Vue 等通常内联样式，提取质量 ⭐⭐⭐⭐

### 低质量提取的网站

这些网站主要使用外部 CSS 文件：

- ❌ **example.com** - 使用外部 CSS，提取质量 ⭐⭐
- ❌ **editor.islenote.com** - 使用外部 CSS，提取质量 ⭐

### 提取质量对比

| 网站 | 字体 | 颜色 | 间距 | 组件 | 质量评级 |
|------|------|------|------|----------|----------|
| w3schools.com | ✅ | ✅ (10种) | ✅ (9种) | ✅ | ⭐⭐⭐⭐⭐ |
| example.com | ✅ | ✅ (2种) | ✅ (1种) | ❌ | ⭐⭐ |
| editor.islenote.com | ✅ | ❌ | ❌ | ❌ | ⭐ |

## 技术限制

### 当前限制

1. **仅支持内联样式和内部样式表**
   - 可以提取：`style="color: red;"`
   - 可以提取：`<style>div { color: red; }</style>`
   - 不能提取：`<link rel="stylesheet" href="style.css">`

2. **不支持 JavaScript 动态样式**
   - 不能提取通过 JS 动态添加的样式

3. **不支持外部 CSS 文件**
   - 需要手动补充外部 CSS 中的样式

### 解决方案

#### 方案 1：使用支持 CORS 的代理服务

如果需要提取外部 CSS 文件，可以使用代理服务。

#### 方案 2：手动补充样式

提取后，手动将外部 CSS 中的样式添加到设计规范中。

#### 方案 3：使用 Playwright 浏览器（高级）

使用 Playwright 获取完整的计算样式：

```bash
npx playwright install chromium
```

然后修改提取逻辑使用 Playwright。

## API 接口

### 健康检查

```http
GET http://localhost:3001/health
```

响应：
```json
{
  "status": "ok",
  "message": "样式提取服务运行正常"
}
```

### 提取设计规范

```http
POST http://localhost:3001/extract
Content-Type: application/json

{
  "url": "https://example.com"
}
```

成功响应：
```json
{
  "success": true,
  "markdown": "# 设计规范提取结果\n...",
  "url": "https://example.com",
  "extractedAt": "2026-01-31T00:35:00.488Z"
}
```

失败响应：
```json
{
  "success": false,
  "error": "错误信息"
}
```

## 文件结构

```
style-extractor/
├── extractor.js          # 核心提取模块
├── server.js            # 后端服务器
├── test-simple.js       # 简单测试脚本
├── test-full.js         # 完整测试脚本
├── package.json         # 依赖配置
└── README.md            # 使用说明
```

## 常见问题

### Q: 提取失败，提示 CORS 错误

A: 使用后端服务而不是纯前端版本。后端服务可以绕过 CORS 限制。

### Q: 提取的内容很少

A: 这是因为目标网站主要使用外部 CSS 文件。建议：
1. 使用更多内联样式的网站进行测试
2. 手动补充外部 CSS 中的样式

### Q: 如何启动后端服务

A:
```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS/style-extractor
node server.js
```

### Q: 端口 3001 被占用

A:
```bash
lsof -ti:3001 | xargs kill -9
```

### Q: 如何测试提取功能

A:
```bash
node test-simple.js
```

## 最佳实践

1. **选择合适的网站**
   - 优先选择使用内联样式的网站
   - 避免主要使用外部 CSS 的网站

2. **验证提取结果**
   - 检查提取的颜色、字体、间距是否准确
   - 补充缺失的设计元素

3. **完善设计规范**
   - 添加更多组件样式规范
   - 完善可访问性要求
   - 添加设计原则和价值观

4. **持续优化**
   - 根据实际需求调整提取逻辑
   - 添加更多样式属性的支持

## 示例输出

### 成功提取的示例

```
# 设计规范提取结果

## 元数据

- **网站URL**: https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default
- **提取时间**: 2026-01-31T00:35:13.249Z
- **版本**: 1.0.0

---

## 字体系统

### 主字体
```
字体：'Montserrat', 'Source Sans Pro', sans-serif
```

### 字体使用规则

#### 标题层级
- **H1**：10px
- **H2**：12px
- **H3**：14px
...

---

## 颜色系统

### 主色
```
主色：#E7E9EB
```

### 检测到的颜色（按使用频率排序）
- **颜色1**：#E7E9EB
- **颜色2**：#38444d
- **颜色3**：#ffffff
...

---

## 间距系统

### 间距值
- **8px 8px 8px 8px**
- **8px 16px 8px 0**
- **4px**
...

---

## 组件规范

### 按钮

#### 按钮1
- 标签：button
- 文本：Run &#10095;
...
```

## 技术支持

如有问题，请检查：
1. 后端服务是否正常运行
2. 目标网站是否可访问
3. 网络连接是否正常
4. URL 格式是否正确

## 更新日志

### v1.0.0 (2026-01-31)
- 初始版本
- 支持内联样式和内部样式表提取
- 支持颜色、字体、间距、组件提取
- 生成标准化 Markdown 设计规范
