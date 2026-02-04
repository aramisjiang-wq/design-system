# Dribbble Shots 设计系统

## 1. 设计风格总览（Design DNA）

**核心关键词**：创意、展示、视觉冲击、灵感、社区

**设计气质**：Dribbble 是全球领先的设计师作品展示平台，其设计语言强调视觉冲击力、创意表达和作品展示效果。整体风格现代、时尚，注重视觉层次和品牌识别度，同时保持良好的用户体验和内容可读性。

**适用产品类型**：
- 作品集展示平台
- 创意社区网站
- 设计师社交平台
- 视觉内容展示应用
- 品牌展示页面
- 创意灵感收集工具

**设计理念**：Dribbble 专注于为设计师提供一个展示和发现创意作品的平台，其设计强调作品本身的价值，通过简洁的界面和精致的视觉效果，让设计师的作品成为焦点。

---

## 2. 颜色系统（Color System）

### 主品牌色

```css
:root {
  /* Dribbble 品牌色 - 粉红色 */
  --color-primary: #EA4C89;
  --color-primary-hover: #D63D7A;
  --color-primary-active: #C0306B;
  --color-primary-light: #F06B9D;
  --color-primary-lighter: #F58AB1;
  --color-primary-dark: #D63D7A;
  --color-primary-darker: #C0306B;
}
```

**使用场景**：
- 主按钮、CTA 按钮
- 品牌标识元素
- 重要交互反馈
- 强调内容标记

### 辅助色

```css
:root {
  /* 辅助色 - 蓝色 */
  --color-secondary: #0096E6;
  --color-secondary-hover: #007ACC;
  --color-secondary-active: #0066B3;
  --color-secondary-light: #33A8ED;
  --color-secondary-lighter: #66BAF4;
  --color-secondary-dark: #007ACC;
  --color-secondary-darker: #0066B3;

  /* 强调色 - 紫色 */
  --color-accent: #9B5DE5;
  --color-accent-hover: #844FD0;
  --color-accent-active: #6D41BB;
  --color-accent-light: #B07AEB;
  --color-accent-lighter: #C597F0;
  --color-accent-dark: #844FD0;
  --color-accent-darker: #6D41BB;
}
```

**使用场景**：
- 次级按钮
- 分类标签
- 链接高亮
- 信息提示

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
  --color-gray-100: #F3F3F3;
  --color-gray-200: #E5E5E5;
  --color-gray-300: #D4D4D4;
  --color-gray-400: #A3A3A3;
  --color-gray-500: #737373;
  --color-gray-600: #525252;
  --color-gray-700: #404040;
  --color-gray-800: #262626;
  --color-gray-900: #171717;
}
```

**使用场景**：
- 背景色：--color-white, --color-gray-50, --color-gray-100
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
  --color-warning: #FFAB00;
  --color-warning-hover: #E69900;
  --color-warning-active: #CC8800;
  --color-warning-light: #FFBD33;
  --color-warning-lighter: **FFD066**;
  --color-warning-dark: #E69900;
  --color-warning-darker: #CC8800;

  /* 错误色 */
  --color-error: #FF1744;
  --color-error-hover: #E6003D;
  --color-error-active: #CC0036;
  --color-error-light: #FF4766;
  --color-error-lighter: #FF7788;
  --color-error-dark: #E6003D;
  --color-error-darker: #CC0036;

  /* 信息色 */
  --color-info: #0096E6;
  --color-info-hover: #007ACC;
  --color-info-active: #0066B3;
  --color-info-light: #33A8ED;
  --color-info-lighter: #66BAF4;
  --color-info-dark: #007ACC;
  --color-info-darker: #0066B3;
}
```

**使用场景**：
- 成功状态：作品上传成功、关注成功
- 警告状态：内容审核中、需要确认
- 错误状态：上传失败、操作错误
- 信息状态：系统通知、操作提示

### 作品展示专用色

```css
:root {
  /* 作品卡片背景 */
  --color-shot-bg: #FFFFFF;
  --color-shot-bg-hover: #F9F9F9;
  
  /* 作品遮罩 */
  --color-shot-overlay: rgba(0, 0, 0, 0.4);
  --color-shot-overlay-hover: rgba(0, 0, 0, 0.6);
  
  /* 作品标签 */
  --color-tag-bg: #F3F3F3;
  --color-tag-text: #525252;
  --color-tag-hover: #E5E5E5;
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

### 作品展示网格

```css
:root {
  /* 作品网格列数 */
  --shots-grid-columns-sm: 1;
  --shots-grid-columns-md: 2;
  --shots-grid-columns-lg: 3;
  --shots-grid-columns-xl: 4;
  --shots-grid-columns-xxl: 5;
  
  /* 作品网格间距 */
  --shots-grid-gap: 24px;
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

/* 作品网格布局 */
.shots-grid {
  display: grid;
  grid-template-columns: repeat(var(--shots-grid-columns-lg), 1fr);
  gap: var(--shots-grid-gap);
}

/* Flex 布局 */
.flex {
  display: flex;
  gap: var(--spacing-4);
}

/* 作品卡片布局 */
.shot-card {
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
  border-radius: var(--radius-md);
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
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: 0 var(--button-padding-x-md);
  height: var(--button-height-md);
  font-weight: var(--font-weight-semibold);
  transition: all 0.2s ease;
}

.button-secondary:hover {
  background: var(--color-primary-lighter);
  transform: translateY(-1px);
}

.button-secondary:active {
  background: var(--color-primary-light);
  transform: translateY(0);
}

/* Ghost Button */
.button-ghost {
  background: transparent;
  color: var(--color-gray-700);
  border: none;
  border-radius: var(--radius-md);
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

### Shot Card（作品卡片）

**使用场景**：
- 作品展示
- 作品列表
- 作品推荐
- 作品搜索结果

**卡片样式**：
```css
.shot-card {
  background: var(--color-shot-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.shot-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.shot-card-image {
  width: 100%;
  aspect-ratio: 4/3;
  background: var(--color-gray-100);
  position: relative;
  overflow: hidden;
}

.shot-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.shot-card:hover .shot-card-image img {
  transform: scale(1.05);
}

.shot-card-overlay {
  position: absolute;
  inset: 0;
  background: var(--color-shot-overlay);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-3);
}

.shot-card:hover .shot-card-overlay {
  opacity: 1;
}

.shot-card-content {
  padding: var(--spacing-4);
}

.shot-card-title {
  font-size: var(--font-size-body-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-2);
}

.shot-card-author {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.shot-card-avatar {
  width: 24px;
  height: 24px;
  border-radius: var(--radius-full);
  background: var(--color-gray-300);
}

.shot-card-author-name {
  font-size: var(--font-size-body-sm);
  color: var(--color-gray-600);
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
  border-radius: var(--radius-md);
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
  border-radius: var(--radius-md);
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
  border-radius: var(--radius-md);
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
  background: var(--color-primary-lighter);
  color: var(--color-primary);
}

.nav-item-active:hover {
  background: var(--color-primary-light);
}
```

**导航交互**：
- Hover 状态：背景色变化，文字颜色加深
- Active 状态：品牌色背景，品牌色文字
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

### 作品展示图片

**图片规格**：
```css
:root {
  /* 作品图片尺寸 */
  --shot-width: 400px;
  --shot-height: 300px;
  --shot-aspect-ratio: 4/3;
  
  /* 作品缩略图尺寸 */
  --shot-thumbnail-width: 200px;
  --shot-thumbnail-height: 150px;
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

**作品卡片 Hover**：
```css
.shot-card {
  transition: all 0.3s ease;
}

.shot-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.shot-card-image img {
  transition: transform 0.3s ease;
}

.shot-card:hover .shot-card-image img {
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

### 作品展示动效

**作品加载动画**：
- 淡入效果
- 图片缩放效果
- 遮罩层渐变

**作品交互动效**：
- Hover 时图片放大
- 遮罩层渐入
- 操作按钮显示

**作品切换动效**：
- 平滑过渡
- 保持上下文
- 性能优化

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens

```css
:root {
  /* Primary Colors */
  --color-primary: #EA4C89;
  --color-primary-hover: #D63D7A;
  --color-primary-active: #C0306B;
  --color-primary-light: #F06B9D;
  --color-primary-lighter: #F58AB1;
  --color-primary-dark: #D63D7A;
  --color-primary-darker: #C0306B;

  /* Secondary Colors */
  --color-secondary: #0096E6;
  --color-secondary-hover: #007ACC;
  --color-secondary-active: #0066B3;
  --color-secondary-light: #33A8ED;
  --color-secondary-lighter: #66BAF4;
  --color-secondary-dark: #007ACC;
  --color-secondary-darker: #0066B3;

  /* Neutral Colors */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-gray-50: #F9F9F9;
  --color-gray-100: #F3F3F3;
  --color-gray-200: #E5E5E5;
  --color-gray-300: #D4D4D4;
  --color-gray-400: #A3A3A3;
  --color-gray-500: #737373;
  --color-gray-600: #525252;
  --color-gray-700: #404040;
  --color-gray-800: #262626;
  --color-gray-900: #171717;

  /* Semantic Colors */
  --color-success: #00C853;
  --color-success-hover: #00B048;
  --color-success-active: #00963D;
  --color-success-light: #33D474;
  --color-success-lighter: #66DF96;
  --color-success-dark: #00B048;
  --color-success-darker: #00963D;

  --color-warning: #FFAB00;
  --color-warning-hover: #E69900;
  --color-warning-active: #CC8800;
  --color-warning-light: #FFBD33;
  --color-warning-lighter: #FFD066;
  --color-warning-dark: #E69900;
  --color-warning-darker: #CC8800;

  --color-error: #FF1744;
  --color-error-hover: #E6003D;
  --color-error-active: #CC0036;
  --color-error-light: #FF4766;
  --color-error-lighter: #FF7788;
  --color-error-dark: #E6003D;
  --color-error-darker: #CC0036;

  --color-info: #0096E6;
  --color-info-hover: #007ACC;
  --color-info-active: #0066B3;
  --color-info-light: #33A8ED;
  --color-info-lighter: #66BAF4;
  --color-info-dark: #007ACC;
  --color-info-darker: #0066B3;
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
   - Button、Card、Shot Card 等核心组件
   - 组件状态（hover、active、focus）
   - 组件尺寸与间距

5. **作品展示设计**：
   - 作品卡片设计
   - 作品网格布局
   - 作品交互动效

6. **动效原则**：
   - 缓动函数选择
   - 动画时长控制
   - 性能优化原则

### 不应复刻的元素（品牌与内容）

**❌ 避免复刻**：

1. **品牌元素**：
   - Dribbble 品牌标识
   - 品牌色值（可参考配色逻辑）
   - 品牌字体

2. **具体作品**：
   - 平台上的具体设计作品
   - 设计师的原创内容
   - 受版权保护的作品

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
4. **研究展示设计**：学习作品展示的设计思路，但创作自己的内容

**实施建议**：
1. **建立自己的 Design Token**：基于产品需求创建专属 token
2. **定制组件库**：参考组件规范，但根据品牌定制
3. **创作原创内容**：展示自己的原创作品，不抄袭他人
4. **保持一致性**：确保所有元素符合品牌调性

**法律风险提示**：
- 不要直接复制品牌元素
- 不要使用受版权保护的作品
- 不要模仿特定的创意内容
- 确保所有内容为原创或授权使用
- 尊重设计师的知识产权

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

<!-- Shot Card -->
<div class="shot-card">
  <div class="shot-card-image">
    <img src="shot-image.jpg" alt="Shot">
    <div class="shot-card-overlay">
      <button class="button button-primary">Like</button>
      <button class="button button-secondary">View</button>
    </div>
  </div>
  <div class="shot-card-content">
    <h3 class="shot-card-title">Shot Title</h3>
    <div class="shot-card-author">
      <div class="shot-card-avatar"></div>
      <span class="shot-card-author-name">Author Name</span>
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