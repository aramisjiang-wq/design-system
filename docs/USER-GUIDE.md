# 设计规范网站 - 使用指南

## 🎯 快速开始

### 方式一：一键启动（推荐）

```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS
./start-services.sh
```

这将同时启动：
- 设计规范网站（端口8082）
- 样式提取服务（端口3000）

访问：
- 设计规范网站：http://localhost:8082/
- 样式提取工具：http://localhost:8082/extractor.html

### 方式二：分别启动

#### 启动设计规范网站
```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS
python3 -m http.server 8082
```

#### 启动样式提取服务
```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS/style-extractor
npm run server
```

---

## 📊 设计规范库

### 统计信息
- **总计**：52个设计规范
- **平均质量分**：79.4%
- **优秀 (90-100%)**：16个
- **良好 (70-89%)**：35个
- **一般 (50-69%)**：1个

### 分类

#### 1. 极简与实用（5个）
- 01. 工业实用主义
- 02. 极简主义
- 03. 扁平化设计
- 14. 国际主义风格
- 20. 瑞士风格

#### 2. 现代与科技（5个）
- 04. 玻璃拟态
- 05. 新拟态
- 06. 赛博朋克
- 11. Material Design
- 19. 未来主义

#### 3. 复古与怀旧（4个）
- 07. 复古未来主义
- 12. 装饰艺术
- 16. 复古像素
- 18. 复古波普

#### 4. 艺术与表现（多个）
- 08. 包豪斯
- 09. 有机设计
- 10. 粗野主义
- 13. 后现代主义
- 15. 极繁主义
- 17. 手绘风格
- 等等...

#### 5. 未来科技（3个）
- 40. 赛博格
- 41. 全息设计
- 42. 元宇宙风格

#### 6. 组件库与工具（11个）
- 43. Apple Human Interface Guidelines
- 44. Ant Design
- 45. Carbon Design
- 46. Fluent Design
- 47. Bootstrap
- 48. Tailwind Utility
- 49. Chakra UI
- 50. Radix UI
- 51. Shadcn/ui
- 52. DaisyUI
- 🛠️ 网站样式提取工具

---

## 🛠️ 网站样式提取工具

### 功能特性
- ✅ 自动抓取网站样式
- ✅ 提取字体系统
- ✅ 提取颜色系统
- ✅ 提取间距系统
- ✅ 提取组件样式
- ✅ 生成标准化设计规范文档
- ✅ 分析可访问性

### 使用方法

#### 网页界面
1. 访问 http://localhost:8082/extractor.html
2. 输入网站URL（如：https://www.google.com）
3. 点击"提取样式"按钮
4. 等待提取完成
5. 查看或复制生成的Markdown文档

#### 命令行
```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS/style-extractor

# 基本使用
node index.js <网站URL>

# 指定输出路径
node index.js <网站URL> <输出路径>

# 示例
node index.js https://www.google.com ./google-design-system.md
```

### 首次使用
```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS/style-extractor
npm install
npx playwright install chromium
```

### 输出格式
生成的Markdown文档包含：
1. 元数据（名称、版本、创建时间）
2. 设计理念
3. 字体系统（主字体、标题层级、行高规则、字间距规则）
4. 颜色系统（主色、功能色、中性色、背景色、文字色、边框色）
5. 间距系统（间距值、间距命名）
6. 组件规范（按钮、卡片、输入框、导航栏）
7. CSS变量定义
8. 可访问性要求（色彩对比度、字体大小、键盘导航等）

---

## 📋 质量检查

### 运行质量检查
```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS/style-extractor
node quality-check.js
```

### 检查标准
- **元数据**：设计理念、设计价值观
- **字体系统**：主字体、字体使用规则、标题层级、行高规则、字间距规则
- **颜色系统**：主色、功能色、中性色、背景色、文字色、边框色
- **间距系统**：间距系统
- **组件规范**：按钮、卡片、输入框、导航栏
- **CSS变量**：CSS变量定义
- **可访问性**：可访问性要求、色彩对比度、字体大小、键盘导航、屏幕阅读器

### 质量报告
检查完成后，报告将保存到 `style-extractor/quality-report.txt`

---

## 🔧 工具脚本

### 1. fix-google-fonts.js
移除所有example.html中的Google Fonts引用，解决ORB错误。

```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS/style-extractor
node fix-google-fonts.js
```

### 2. generate-examples.js
批量生成设计规范的example.html文件。

```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS/style-extractor
node generate-examples.js
```

### 3. quality-check.js
检查所有设计规范的质量。

```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS/style-extractor
node quality-check.js
```

---

## 📁 文件结构

```
DESIGN-SYSTEMS/
├── 01-industrial-utilitarianism/
│   ├── README.md
│   └── example.html
├── 02-minimalism/
│   ├── README.md
│   └── example.html
├── ...
├── 52-daisyui/
│   ├── README.md
│   └── example.html
├── DESIGN-SYSTEM-FRAMEWORK.md
├── index.html
├── extractor.html
├── start-services.sh
├── COMPLETION-SUMMARY.md
├── UPDATE-SUMMARY.md
└── style-extractor/
    ├── package.json
    ├── README.md
    ├── index.js
    ├── server.js
    ├── web-scraper.js
    ├── style-extractor.js
    ├── style-analyzer.js
    ├── design-system-generator.js
    ├── test.js
    ├── fix-google-fonts.js
    ├── generate-examples.js
    ├── quality-check.js
    └── extracted-systems/
```

---

## 🎨 网站特性

### 响应式设计
- 桌面端：一排4个卡片
- 移动端：单列布局

### 预览功能
- 每个设计规范都有iframe预览
- 支持懒加载，提升性能
- 已修复Google Fonts ORB错误

### 分类展示
- 按设计风格分类
- 清晰的视觉层次
- 优雅的卡片设计

### 交互效果
- 悬停时卡片上浮
- 平滑的过渡动画
- 清晰的视觉反馈

---

## ⚠️ 注意事项

1. **浏览器缓存**
   - 如果页面没有更新，请清除浏览器缓存或强制刷新（Cmd+Shift+R）

2. **Playwright浏览器**
   - 首次使用样式提取工具需要下载Playwright浏览器
   - 可能需要较长时间，请耐心等待
   - 确保网络连接稳定

3. **端口占用**
   - 8082端口用于设计规范网站
   - 3000端口用于样式提取服务
   - 如果端口被占用，请修改对应的配置

4. **字体显示**
   - 所有设计规范使用系统字体
   - 确保在各平台上都有良好的显示效果

5. **样式提取**
   - 某些网站可能有反爬虫机制
   - JavaScript渲染的网站需要更长时间
   - 提取的样式可能需要根据实际情况调整

---

## 🚀 快速链接

- 设计规范网站：http://localhost:8082/
- 样式提取工具：http://localhost:8082/extractor.html
- 样式提取服务：http://localhost:3000/health
- 质量检查报告：`style-extractor/quality-report.txt`

---

## 📞 支持

如有问题，请查看：
- `DESIGN-SYSTEM-FRAMEWORK.md` - 设计规范质量标准
- `style-extractor/README.md` - 样式提取工具文档
- `COMPLETION-SUMMARY.md` - 完成总结
- `UPDATE-SUMMARY.md` - 更新总结

---

**最后更新**：2024-01-31
**版本**：v3.0
