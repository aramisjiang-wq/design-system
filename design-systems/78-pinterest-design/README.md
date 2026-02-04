# Pinterest 设计系统

## 1. 设计风格总览（Design DNA）

**核心关键词**：瀑布流、视觉发现、灵感收集、简洁、优雅

**设计气质**：Pinterest 是全球领先的图片分享和灵感发现平台，其设计语言强调视觉内容的发现和收集。整体风格简洁、优雅，注重视觉层次和用户体验，通过瀑布流布局和精致的卡片设计，让用户能够轻松发现和收集灵感。

**适用产品类型**：
- 图片分享平台
- 灵感收集应用
- 视觉内容展示网站
- 电商产品展示
- 创意灵感工具
- 社交媒体平台

**设计理念**：Pinterest 专注于帮助用户发现和收集灵感，其设计强调内容的视觉呈现，通过瀑布流布局和智能推荐算法，让用户能够轻松浏览和发现感兴趣的内容。

---

## 2. 颜色系统（Color System）

### 主品牌色

```css
:root {
  /* Pinterest 品牌色 - 红色 */
  --color-primary: #E60023;
  --color-primary-hover: #CC0020;
  --color-primary-active: #B3001C;
  --color-primary-light: #F0334D;
  --color-primary-lighter: #F4667A;
  --color-primary-dark: #CC0020;
  --color-primary-darker: #B3001C;
}
```

**使用场景**：
- 主按钮、CTA 按钮
- 品牌标识元素
- 重要交互反馈
- 收藏/保存操作

### 辅助色

```css
:root {
  /* 辅助色 - 黑色 */
  --color-secondary: #111111;
  --color-secondary-hover: #000000;
  --color-secondary-active: #1A1A1A;
  --color-secondary-light: #333333;
  --color-secondary-lighter: #555555;
  --color-secondary-dark: #000000;
  --color-secondary-darker: #000000;

  /* 强调色 - 蓝色 */
  --color-accent: #0077B5;
  --color-accent-hover: #006699;
  --color-accent-active: #005577;
  --color-accent-light: #3399CC;
  --color-accent-lighter: #66BBDD;
  --color-accent-dark: #006699;
  --color-accent-darker: #005577;
}
```

**使用场景**：
- 次级按钮
- 链接高亮
- 信息提示
- 导航元素

### 中性色

```css
:root {
  /* 白色系 */
  --color-white: #FFFFFF;
  --color-white-90: rgba(255, 255, 255, 0.9);
  --color-white-80: rgba(255, 255, 255, 0.8);
  --color-white-60: rgba(255, 255, 255, 0.6);
  --color-white-40: rgba(255, 255, 255, 0.4);
  --color-white-20: rgba(255, 255, 255, 0.2);
  --color-white-10: rgba(255, 255, 255, 0.1);

  /* 黑色系 */
  --color-black: #000000;
  --color-black-90: rgba(0, 0, 0, 0.9);
  --color-black-80: rgba(0, 0, 0, 0.8);
  --color-black-60: rgba(0, 0, 0, 0.6);
  --color-black-40: rgba(0, 0, 0, 0.4);
  --color-black-20: rgba(0, 0, 0, 0.2);
  --color-black-10: rgba(0, 0, 0, 0.1);

  /* 灰色系 */
  --color-gray-50: #F9F9F9;
  --color-gray-100: #EFEFEF;
  --color-gray-200: #E0E0E0;
  --color-gray-300: #CCCCCC;
  --color-gray-400: #999999;
  --color-gray-500: #767676;
  --color-gray-600: #5A5A5A;
  --color-gray-700: #404040;
  --color-gray-800: #262626;
  --color-gray-900: #111111;
}
```

**使用场景**：
- 背景色：--color-white, --color-gray-50
- 文本色：--color-gray-700, --color-gray-800, --color-gray-900
- 边框色：--color-gray-200, --color-gray-300
- 遮罩层：--color-black-40, --color-black-60
- 悬停背景：--color-gray-100, --color-gray-200

### 语义色

```css
:root {
  /* 成功色 */
  --color-success: #00C853;
  --color-success-hover: #00B048;
  --color-success-active: #00963D;
  --color-success-light: #33D474;
  --color-success-lighter: #66DF96;
  --color-success-dark: #00B048;
  --color-success-darker: #00963D;

  /* 警告色 */
  --color-warning: #FF9800;
  --color-warning-hover: #E68900;
  --color-warning-active: #CC7A00;
  --color-warning-light: #FFAD33;
  --color-warning-lighter: #FFC266;
  --color-warning-dark: #E68900;
  --color-warning-darker: #CC7A00;

  /* 错误色 */
  --color-error: #D32F2F;
  --color-error-hover: #C62828;
  --color-error-active: #B71C1C;
  --color-error-light: #E57373;
  --color-error-lighter: #EF9A9A;
  --color-error-dark: #C62828;
  --color-error-darker: #B71C1C;

  /* 信息色 */
  --color-info: #0288D1;
  --color-info-hover: #0277BD;
  --color-info-active: #01579B;
  --color-info-light: #4FC3F7;
  --color-info-lighter: #81D4FA;
  --color-info-dark: #0277BD;
  --color-info-darker: #01579B;
}
```

**使用场景**：
- 成功状态：保存成功、创建成功
- 警告状态：内容审核中、需要确认
- 错误状态：保存失败、操作错误
- 信息状态：系统通知、操作提示

### Pin 卡片专用色

```css
:root {
  /* Pin 卡片背景 */
  --color-pin-bg: #FFFFFF;
  --color-pin-bg-hover: #F9F9F9;
  
  /* Pin 遮罩 */
  --color-pin-overlay: rgba(0, 0, 0, 0.3);
  --color-pin-overlay-hover: rgba(0, 0, 0, 0.5);
  
  /* Pin 标签 */
  --color-tag-bg: #EFEFEF;
  --color-tag-text: #5A5A5A;
  --color-tag-hover: #E0E0E0;
}
```

**Design Token 命名建议**：
- `--color-{category}-{variant}-{state}`
- 示例：`--color-primary-hover`, `--color-success-light`

---

## 3. 字体与排版（Typography）

### 字体家族

```css
:root {
  /* 主要字体 - 系统字体栈 */
  --font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  
  /* 代码字体 - 等宽字体 */
  --font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  
  /* 装饰字体 - 用于标题和展示 */
  --font-family-display: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

### 字号层级

```css
:root {
  /* 标题字号 */
  --font-size-display-xl: 72px;
  --font-size-display-lg: 56px;
  --font-size-display-md: 48px;
  --font-size-display-sm: 40px;
  
  /* 标题字号 */
  --font-size-h1: 36px;
  --font-size-h2: 30px;
  --font-size-h3: 24px;
  --font-size-h4: 20px;
  
  /* 正文字号 */
  --font-size-body-lg: 18px;
  --font-size-body-md: 16px;
  --font-size-body-sm: 14px;
  
  /* 辅助字号 */
  --font-size-caption: 12px;
  --font-size-label: 13px;
  --font-size-small: 11px;
}
```

### 行高与字重

```css
:root {
  /* 行高 */
  --line-height-tight: 1.1;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  --line-height-loose: 2;
  
  /* 字重 */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### 排版规则

**标题层级**：
```css
/* Display XL */
.display-xl {
  font-size: var(--font-size-display-xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: -0.02em;
}

/* Display LG */
.display-lg {
  font-size: var(--font-size-display-lg);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: -0.015em;
}

/* H1 */
h1 {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: -0.01em;
}

/* H2 */
h2 {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
  letter-spacing: -0.005em;
}

/* H3 */
h3 {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
  letter-spacing: 0;
}

/* H4 */
h4 {
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  letter-spacing: 0;
}
```

**正文排版**：
```css
/* Body Large */
.body-lg {
  font-size: var(--font-size-body-lg);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-relaxed);
  letter-spacing: 0;
}

/* Body Medium */
.body-md {
  font-size: var(--font-size-body-md);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  letter-spacing: 0;
}

/* Body Small */
.body-sm {
  font-size: var(--font-size-body-sm);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  letter-spacing: 0;
}
```

**辅助文本**：
```css
/* Caption */
.caption {
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  letter-spacing: 0;
}

/* Label */
.label {
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);
  letter-spacing: 0.01em;
  text-transform: uppercase;
}
```

**排版节奏**：
- 标题与正文间距：`--spacing-6` (24px)
- 段落间距：`--spacing-4` (16px)
- 列表项间距：`--spacing-3` (12px)
- 文本最大宽度：`--max-width-text: 720px`

---

## 4. 布局与栅格系统（Layout & Grid）

### 版心宽度

```css
:root {
  /* 版心宽度 */
  --container-width-xs: 320px;
  --container-width-sm: 640px;
  --container-width-md: 960px;
  --container-width-lg: 1200px;
  --container-width-xl: 1440px;
  --container-width-xxl: 1600px;
  
  /* 默认版心 */
  --container-width: var(--container-width-lg);
}
```

### 栅格系统

```css
:root {
  /* 栅格列数 */
  --grid-columns: 12;
  
  /* 栅格间距 */
  --grid-gutter-xs: 8px;
  --grid-gutter-sm: 12px;
  --grid-gutter-md: 16px;
  --grid-gutter-lg: 24px;
  --grid-gutter-xl: 32px;
  --grid-gutter-xxl: 48px;
  
  /* 默认栅格间距 */
  --grid-gutter: var(--grid-gutter-md);
}
```

### 瀑布流布局

```css
:root {
  /* 瀑布流列数 */
  --masonry-columns-sm: 2;
  --masonry-columns-md: 3;
  --masonry-columns-lg: 4;
  --masonry-columns-xl: 5;
  --masonry-columns-xxl: 6;
  
  /* 瀑布流间距 */
  --masonry-gap: 16px;
}
```

### 页面边距

```css
:root {
  /* 页面边距 */
  --page-margin-xs: 16px;
  --page-margin-sm: 24px;
  --page-margin-md: 32px;
  --page-margin-lg: 48px;
  --page-margin-xl: 64px;
  --page-margin-xxl: 96px;
  
  /* 默认页面边距 */
  --page-margin: var(--page-margin-md);
}
```

### 响应式断点

```css
:root {
  /* 断点 */
  --breakpoint-xs: 320px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-xxl: 1536px;
}
```

### 留白密度

```css
:root {
  /* 间距系统 */
  --spacing-0: 0;
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  --spacing-24: 96px;
}
```

**信息密度**：
- 低密度：`--spacing-8` (32px) 以上间距
- 中密度：`--spacing-4` (16px) - `--spacing-6` (24px) 间距
- 高密度：`--spacing-2` (8px) - `--spacing-3` (12px) 间距

### 布局示例

```css
/* 容器布局 */
.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--page-margin);
}

/* 栅格布局 */
.grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--grid-gutter);
}

/* 瀑布流布局 */
.masonry {
  column-count: var(--masonry-columns-lg);
  column-gap: var(--masonry-gap);
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: var(--masonry-gap);
}

/* Flex 布局 */
.flex {
  display: flex;
  gap: var(--spacing-4);
}

/* Pin 卡片布局 */
.pin-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}
```

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

**尺寸规格**：
```css
:root {
  /* 按钮尺寸 */
  --button-height-xs: 28px;
  --button-height-sm: 32px;
  --button-height-md: 40px;
  --button-height-lg: 48px;
  --button-height-xl: 56px;
  
  /* 按钮内边距 */
  --button-padding-x-sm: 12px;
  --button-padding-x-md: 16px;
  --button-padding-x-lg: 20px;
}
```

**按钮状态**：
```css
/* Primary Button */
.button-primary {
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-full);
  padding: 0 var(--button-padding-x-md);
  height: var(--button-height-md);
  font-weight: var(--font-weight-semibold);
  transition: all 0.2s ease;
}

.button-primary:hover {
  background: var(--color-primary-hover);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.button-primary:active {
  background: var(--color-primary-active);
  transform: translateY(0);
}

.button-primary:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Secondary Button */
.button-secondary {
  background: transparent;
  color: var(--color-secondary);
  border: 2px solid var(--color-secondary);
  border-radius: var(--radius-full);
  padding: 0 var(--button-padding-x-md);
  height: var(--button-height-md);
  font-weight: var(--font-weight-semibold);
  transition: all 0.2s ease;
}

.button-secondary:hover {
  background: var(--color-gray-100);
  transform: translateY(-1px);
}

.button-secondary:active {
  background: var(--color-gray-200);
  transform: translateY(0);
}

/* Ghost Button */
.button-ghost {
  background: transparent;
  color: var(--color-gray-700);
  border: none;
  border-radius: var(--radius-full);
  padding: 0 var(--button-padding-x-md);
  height: var(--button-height-md);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
}

.button-ghost:hover {
  background: var(--color-gray-100);
}

.button-ghost:active {
  background: var(--color-gray-200);
}
```

**按钮圆角**：
```css
:root {
  /* 按钮圆角 */
  --button-radius-sm: 4px;
  --button-radius-md: 8px;
  --button-radius-lg: 12px;
  --button-radius-pill: 9999px;
}
```

### Pin Card（Pin 卡片）

**使用场景**：
- Pin 展示
- Pin 列表
- Pin 推荐
- Pin 搜索结果

**卡片样式**：
```css
.pin-card {
  background: var(--color-pin-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.pin-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.pin-card-image {
  width: 100%;
  background: var(--color-gray-100);
  position: relative;
  overflow: hidden;
}

.pin-card-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.pin-card:hover .pin-card-image img {
  transform: scale(1.05);
}

.pin-card-overlay {
  position: absolute;
  inset: 0;
  background: var(--color-pin-overlay);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-3);
}

.pin-card:hover .pin-card-overlay {
  opacity: 1;
}

.pin-card-content {
  padding: var(--spacing-4);
}

.pin-card-title {
  font-size: var(--font-size-body-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.pin-card-author {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.pin-card-avatar {
  width: 24px;
  height: 24px;
  border-radius: var(--radius-full);
  background: var(--color-gray-300);
}

.pin-card-author-name {
  font-size: var(--font-size-body-sm);
  color: var(--color-gray-600);
}

.pin-card-save {
  position: absolute;
  top: var(--spacing-3);
  right: var(--spacing-3);
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-full);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: all 0.2s ease;
}

.pin-card:hover .pin-card-save {
  opacity: 1;
}

.pin-card-save:hover {
  background: var(--color-primary-hover);
  transform: scale(1.1);
}
```

### Card（通用卡片）

**使用场景**：
- 功能介绍
- 信息展示
- 数据统计
- 操作面板

**卡片样式**：
```css
.card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-6);
  border: 1px solid var(--color-gray-200);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.card-elevated {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-8);
  border: 1px solid var(--color-gray-200);
}

.card-flat {
  background: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: none;
  padding: var(--spacing-4);
  border: 1px solid var(--color-gray-300);
}
```

### Input（输入框）

**输入框样式**：
```css
.input {
  width: 100%;
  height: var(--input-height-md);
  padding: 0 var(--spacing-4);
  border: 2px solid var(--color-gray-300);
  border-radius: var(--radius-full);
  font-size: var(--font-size-body-md);
  font-family: var(--font-family-primary);
  color: var(--color-gray-800);
  background: var(--color-white);
  transition: all 0.2s ease;
}

.input:hover {
  border-color: var(--color-gray-400);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-lighter);
}

.input::placeholder {
  color: var(--color-gray-500);
}

.input-error {
  border-color: var(--color-error);
}

.input-error:focus {
  border-color: var(--color-error);
  box-shadow: 0 0 0 3px var(--color-error-lighter);
}
```

**输入框尺寸**：
```css
:root {
  /* 输入框高度 */
  --input-height-sm: 32px;
  --input-height-md: 40px;
  --input-height-lg: 48px;
}
```

### Tag（标签）

**标签样式**：
```css
.tag {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-1) var(--spacing-3);
  background: var(--color-tag-bg);
  color: var(--color-tag-text);
  border-radius: var(--radius-full);
  font-size: var(--font-size-body-sm);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
  cursor: pointer;
}

.tag:hover {
  background: var(--color-tag-hover);
}

.tag-primary {
  background: var(--color-primary-lighter);
  color: var(--color-primary);
}

.tag-primary:hover {
  background: var(--color-primary-light);
}
```

### Avatar（头像）

**头像样式**：
```css
.avatar {
  width: var(--avatar-size-md);
  height: var(--avatar-size-md);
  border-radius: var(--radius-full);
  background: var(--color-gray-300);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-xs {
  width: var(--avatar-size-xs);
  height: var(--avatar-size-xs);
}

.avatar-sm {
  width: var(--avatar-size-sm);
  height: var(--avatar-size-sm);
}

.avatar-lg {
  width: var(--avatar-size-lg);
  height: var(--avatar-size-lg);
}

.avatar-xl {
  width: var(--avatar-size-xl);
  height: var(--avatar-size-xl);
}
```

**头像尺寸**：
```css
:root {
  /* 头像尺寸 */
  --avatar-size-xs: 24px;
  --avatar-size-sm: 32px;
  --avatar-size-md: 40px;
  --avatar-size-lg: 48px;
  --avatar-size-xl: 64px;
}
```

### Navigation（导航组件）

**导航结构**：
```css
.nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-4) var(--spacing-6);
  background: var(--color-white);
  border-bottom: 1px solid var(--color-gray-200);
}

.nav-item {
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-full);
  color: var(--color-gray-600);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
  cursor: pointer;
}

.nav-item:hover {
  background: var(--color-gray-100);
  color: var(--color-gray-800);
}

.nav-item-active {
  background: var(--color-gray-200);
  color: var(--color-gray-900);
}

.nav-item-active:hover {
  background: var(--color-gray-300);
}
```

**导航交互**：
- Hover 状态：背景色变化，文字颜色加深
- Active 状态：灰色背景，深色文字
- Focus 状态：显示焦点轮廓
- 过渡动画：0.2s ease

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格

**图标类型**：
- **Outline 图标**：线性风格，用于次要操作
- **Filled 图标**：填充风格，用于主要操作
- **Duotone 图标**：双色风格，用于状态指示

**图标规格**：
```css
:root {
  /* 图标尺寸 */
  --icon-size-xs: 16px;
  --icon-size-sm: 20px;
  --icon-size-md: 24px;
  --icon-size-lg: 32px;
  --icon-size-xl: 48px;
  --icon-size-xxl: 64px;
  
  /* 图标颜色 */
  --icon-color-primary: var(--color-primary);
  --icon-color-secondary: var(--color-gray-600);
  --icon-color-disabled: var(--color-gray-400);
}
```

**图标使用规范**：
- 主要操作：使用 Filled 图标，品牌色
- 次要操作：使用 Outline 图标，灰色
- 状态指示：使用 Duotone 图标，语义色
- 禁用状态：使用 Outline 图标，禁用色

### 插画风格

**插画特点**：
- **风格**：扁平化、简洁、现代
- **色彩**：使用品牌色系统，色彩饱和度适中
- **线条**：圆润、流畅，避免尖锐角度
- **细节**：适度细节，不喧宾夺主

**插画使用场景**：
- 空状态插画
- 错误页面插画
- 成功状态插画
- 功能介绍插画

**插画设计原则**：
- **弱化处理**：插画作为辅助元素，不应干扰主要内容
- **统一风格**：所有插画保持一致的视觉风格
- **品牌一致**：使用品牌色系统，强化品牌识别
- **简洁明了**：避免过度细节，保持简洁

### Pin 图片

**图片规格**：
```css
:root {
  /* Pin 图片尺寸 */
  --pin-width: 236px;
  --pin-height: auto;
  --pin-aspect-ratio: auto;
  
  /* Pin 缩略图尺寸 */
  --pin-thumbnail-width: 150px;
  --pin-thumbnail-height: auto;
}
```

**图片处理原则**：
- 保持原始比例
- 适当裁剪以适应布局
- 使用高质量图片
- 优化加载性能

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 行为

**按钮 Hover**：
```css
.button {
  transition: all 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
```

**卡片 Hover**：
```css
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

**Pin 卡片 Hover**：
```css
.pin-card {
  transition: all 0.3s ease;
}

.pin-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.pin-card-image img {
  transition: transform 0.3s ease;
}

.pin-card:hover .pin-card-image img {
  transform: scale(1.05);
}
```

**链接 Hover**：
```css
.link {
  color: var(--color-primary);
  transition: color 0.2s ease;
}

.link:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}
```

### Active 行为

**按钮 Active**：
```css
.button:active {
  transform: translateY(0);
  box-shadow: none;
}
```

**输入框 Active**：
```css
.input:active {
  border-color: var(--color-primary);
}
```

### Focus 行为

**通用 Focus**：
```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

**按钮 Focus**：
```css
.button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

**输入框 Focus**：
```css
.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-lighter);
}
```

### 动效节奏

**缓动函数**：
```css
:root {
  /* 缓动函数 */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
```

**动画时长**：
```css
:root {
  /* 动画时长 */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;
}
```

**动效原则**：
- **克制使用**：动效应服务于功能，不喧宾夺主
- **流畅自然**：动画流畅自然，符合用户预期
- **性能优先**：使用硬件加速，保证性能
- **可预测性**：动画效果可预测，不令人困惑

### 操作反馈设计

**成功反馈**：
- 绿色指示器
- 成功动画
- 简短成功消息

**错误反馈**：
- 红色指示器
- 错误动画
- 详细错误信息

**警告反馈**：
- 黄色指示器
- 警告动画
- 警告提示信息

**信息反馈**：
- 蓝色指示器
- 信息动画
- 补充说明信息

### Pin 展示动效

**Pin 加载动画**：
- 淡入效果
- 图片缩放效果
- 遮罩层渐变

**Pin 交互动效**：
- Hover 时图片放大
- 遮罩层渐入
- 保存按钮显示

**Pin 切换动效**：
- 平滑过渡
- 保持上下文
- 性能优化

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens

```css
:root {
  /* Primary Colors */
  --color-primary: #E60023;
  --color-primary-hover: #CC0020;
  --color-primary-active: #B3001C;
  --color-primary-light: #F0334D;
  --color-primary-lighter: #F4667A;
  --color-primary-dark: #CC0020;
  --color-primary-darker: #B3001C;

  /* Secondary Colors */
  --color-secondary: #111111;
  --color-secondary-hover: #000000;
  --color-secondary-active: #1A1A1A;
  --color-secondary-light: #333333;
  --color-secondary-lighter: #555555;
  --color-secondary-dark: #000000;
  --color-secondary-darker: #000000;

  /* Neutral Colors */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-gray-50: #F9F9F9;
  --color-gray-100: #EFEFEF;
  --color-gray-200: #E0E0E0;
  --color-gray-300: #CCCCCC;
  --color-gray-400: #999999;
  --color-gray-500: #767676;
  --color-gray-600: #5A5A5A;
  --color-gray-700: #404040;
  --color-gray-800: #262626;
  --color-gray-900: #111111;

  /* Semantic Colors */
  --color-success: #00C853;
  --color-success-hover: #00B048;
  --color-success-active: #00963D;
  --color-success-light: #33D474;
  --color-success-lighter: #66DF96;
  --color-success-dark: #00B048;
  --color-success-darker: #00963D;

  --color-warning: #FF9800;
  --color-warning-hover: #E68900;
  --color-warning-active: #CC7A00;
  --color-warning-light: #FFAD33;
  --color-warning-lighter: #FFC266;
  --color-warning-dark: #E68900;
  --color-warning-darker: #CC7A00;

  --color-error: #D32F2F;
  --color-error-hover: #C62828;
  --color-error-active: #B71C1C;
  --color-error-light: #E57373;
  --color-error-lighter: #EF9A9A;
  --color-error-dark: #C62828;
  --color-error-darker: #B71C1C;

  --color-info: #0288D1;
  --color-info-hover: #0277BD;
  --color-info-active: #01579B;
  --color-info-light: #4FC3F7;
  --color-info-lighter: #81D4FA;
  --color-info-dark: #0277BD;
  --color-info-darker: #01579B;
}
```

### Spacing Tokens

```css
:root {
  /* Spacing Scale */
  --spacing-0: 0;
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  --spacing-24: 96px;
}
```

### Radius Tokens

```css
:root {
  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
}
```

### Shadow Tokens

```css
:root {
  /* Box Shadow */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.15);
}
```

### Typography Tokens

```css
:root {
  /* Font Family */
  --font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  --font-family-display: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  /* Font Size */
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  --font-size-3xl: 30px;
  --font-size-4xl: 36px;
  --font-size-5xl: 48px;
  --font-size-6xl: 64px;

  /* Font Weight */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Line Height */
  --line-height-tight: 1.1;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  --line-height-loose: 2;
}
```

### Animation Tokens

```css
:root {
  /* Duration */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;

  /* Easing */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
```

### Z-Index Tokens

```css
:root {
  /* Z-Index */
  --z-index-dropdown: 1000;
  --z-index-sticky: 1020;
  --z-index-fixed: 1030;
  --z-index-modal-backdrop: 1040;
  --z-index-modal: 1050;
  --z-index-popover: 1060;
  --z-index-tooltip: 1070;
}
```

---

## 9. 合法复刻建议（Important）

### 可学习的元素（规则与风格）

**✅ 推荐学习**：

1. **设计系统结构**：
   - 9 部分结构化文档
   - Design Token 命名规范
   - 组件化设计思维

2. **颜色系统**：
   - 主色、辅助色、中性色、语义色的分类
   - 颜色变体（hover、active、light、dark）
   - 颜色使用场景规范

3. **排版系统**：
   - 字号层级规范
   - 行高与字重搭配
   - 排版节奏控制

4. **组件规范**：
   - Button、Card、Pin Card 等核心组件
   - 组件状态（hover、active、focus）
   - 组件尺寸与间距

5. **瀑布流设计**：
   - 瀑布流布局实现
   - Pin 卡片设计
   - 响应式列数控制

6. **动效原则**：
   - 缓动函数选择
   - 动画时长控制
   - 性能优化原则

### 不应复刻的元素（品牌与内容）

**❌ 避免复刻**：

1. **品牌元素**：
   - Pinterest 品牌标识
   - 品牌色值（可参考配色逻辑）
   - 品牌字体

2. **具体 Pin 内容**：
   - 平台上的具体 Pin
   - 用户的原创内容
   - 受版权保护的图片

3. **插画素材**：
   - 空状态插画
   - 错误页面插画
   - 功能介绍插画

4. **文案内容**：
   - 产品介绍文案
   - 错误提示文案
   - 功能说明文案

### 合法使用建议

**学习思路**：
1. **理解设计逻辑**：学习设计系统的组织方式和思考逻辑
2. **参考配色方案**：参考配色思路，但使用自己的品牌色
3. **借鉴组件规范**：学习组件设计原则，但根据产品需求调整
4. **研究瀑布流设计**：学习瀑布流布局的设计思路，但创作自己的内容

**实施建议**：
1. **建立自己的 Design Token**：基于产品需求创建专属 token
2. **定制组件库**：参考组件规范，但根据品牌定制
3. **创作原创内容**：展示自己的原创内容，不抄袭他人
4. **保持一致性**：确保所有元素符合品牌调性

**法律风险提示**：
- 不要直接复制品牌元素
- 不要使用受版权保护的图片
- 不要模仿特定的创意内容
- 确保所有内容为原创或授权使用
- 尊重用户的知识产权

---

## 附录：快速开始

### CSS 变量引入

```css
/* 引入 Design Token */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* 使用 Design Token */
:root {
  /* 在这里定义你的 Design Token */
}
```

### 组件使用示例

```html
<!-- Button -->
<button class="button button-primary">Primary Button</button>
<button class="button button-secondary">Secondary Button</button>
<button class="button button-ghost">Ghost Button</button>

<!-- Pin Card -->
<div class="pin-card">
  <div class="pin-card-image">
    <img src="pin-image.jpg" alt="Pin">
    <button class="pin-card-save">Save</button>
    <div class="pin-card-overlay">
      <button class="button button-primary">Save</button>
    </div>
  </div>
  <div class="pin-card-content">
    <h3 class="pin-card-title">Pin Title</h3>
    <div class="pin-card-author">
      <div class="pin-card-avatar"></div>
      <span class="pin-card-author-name">Author Name</span>
    </div>
  </div>
</div>

<!-- Card -->
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</div>

<!-- Tag -->
<span class="tag">Design</span>
<span class="tag tag-primary">Featured</span>

<!-- Avatar -->
<div class="avatar">
  <img src="avatar.jpg" alt="Avatar">
</div>
```

---

**文档版本**：v1.0  
**最后更新**：2026-02-02  
**维护团队**：Design System Team