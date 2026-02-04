# Lottie 动画设计系统

## 1. 设计风格总览（Design DNA）

**核心关键词**：流畅、轻量、矢量、跨平台、可交互

**设计气质**：Lottie 是 Airbnb 开源的动画库，专注于创建高质量、轻量级的矢量动画。其设计语言强调流畅的动效、精确的时序控制和跨平台的一致性体验。整体风格现代、专业，注重性能与视觉效果的平衡。

**适用产品类型**：
- 移动应用（iOS/Android）
- Web 应用
- 跨平台应用
- 需要丰富动效的 SaaS 产品
- 品牌动画展示页面
- 交互式教育工具

**设计理念**：Lottie 将 After Effects 动画导出为 JSON 格式，通过 Lottie 库在各个平台渲染，实现"一次设计，到处运行"的动画体验。

---

## 2. 颜色系统（Color System）

### 主品牌色

```css
:root {
  /* Lottie 品牌色 - 橙红色 */
  --color-primary: #FF5A5F;
  --color-primary-hover: #E0484D;
  --color-primary-active: #C7363B;
  --color-primary-light: #FF7A7F;
  --color-primary-lighter: #FF9A9F;
  --color-primary-dark: #E0484D;
  --color-primary-darker: #C7363B;
}
```

**使用场景**：
- 主按钮、CTA 按钮
- 动画播放控制元素
- 品牌标识元素
- 重要交互反馈

### 辅助色

```css
:root {
  /* 辅助色 - 蓝色 */
  --color-secondary: #008489;
  --color-secondary-hover: #006B6F;
  --color-secondary-active: #005255;
  --color-secondary-light: #33A5A9;
  --color-secondary-lighter: #66C6C9;
  --color-secondary-dark: #006B6F;
  --color-secondary-darker: #005255;

  /* 强调色 - 黄色 */
  --color-accent: #FFB400;
  --color-accent-hover: #E6A200;
  --color-accent-active: #CC9000;
  --color-accent-light: #FFC233;
  --color-accent-lighter: **FFD066**;
  --color-accent-dark: #E6A200;
  --color-accent-darker: #CC9000;
}
```

**使用场景**：
- 次级按钮
- 动画状态指示
- 进度条、加载动画
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
  --color-gray-100: #F7F7F7;
  --color-gray-200: #EBEBEB;
  --color-gray-300: #DDDDDD;
  --color-gray-400: #CCCCCC;
  --color-gray-500: #999999;
  --color-gray-600: #767676;
  --color-gray-700: #484848;
  --color-gray-800: #222222;
  --color-gray-900: #111111;
}
```

**使用场景**：
- 背景色：--color-white, --color-gray-100
- 文本色：--color-gray-700, --color-gray-800, --color-gray-900
- 边框色：--color-gray-300, --color-gray-400
- 遮罩层：--color-black-40, --color-black-60
- 动画背景：--color-white-10, --color-black-10

### 语义色

```css
:root {
  /* 成功色 */
  --color-success: #00A699;
  --color-success-hover: #008A80;
  --color-success-active: #006E66;
  --color-success-light: #33BFB8;
  --color-success-lighter: #66D8D3;
  --color-success-dark: #008A80;
  --color-success-darker: #006E66;

  /* 警告色 */
  --color-warning: #FFB400;
  --color-warning-hover: #E6A200;
  --color-warning-active: #CC9000;
  --color-warning-light: #FFC233;
  --color-warning-lighter: #FFD066;
  --color-warning-dark: #E6A200;
  --color-warning-darker: #CC9000;

  /* 错误色 */
  --color-error: #FF5A5F;
  --color-error-hover: #E0484D;
  --color-error-active: #C7363B;
  --color-error-light: #FF7A7F;
  --color-error-lighter: #FF9A9F;
  --color-error-dark: #E0484D;
  --color-error-darker: #C7363B;

  /* 信息色 */
  --color-info: #008489;
  --color-info-hover: #006B6F;
  --color-info-active: #005255;
  --color-info-light: #33A5A9;
  --color-info-lighter: #66C6C9;
  --color-info-dark: #006B6F;
  --color-info-darker: #005255;
}
```

**使用场景**：
- 成功状态：加载完成、动画播放成功
- 警告状态：动画加载慢、网络问题
- 错误状态：动画加载失败、播放错误
- 信息状态：动画说明、操作提示

### 动画专用色

```css
:root {
  /* 动画渐变色 */
  --color-gradient-start: #FF5A5F;
  --color-gradient-end: #FFB400;
  --color-gradient-mid: #FF8A5F;

  /* 动画阴影色 */
  --color-shadow-light: rgba(255, 90, 95, 0.1);
  --color-shadow-medium: rgba(255, 90, 95, 0.2);
  --color-shadow-dark: rgba(255, 90, 95, 0.3);

  /* 动画高光色 */
  --color-highlight: rgba(255, 255, 255, 0.8);
  --color-highlight-subtle: rgba(255, 255, 255, 0.4);
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
  
  /* 装饰字体 - 用于动画标题 */
  --font-family-display: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

### 字号层级

```css
:root {
  /* 标题字号 */
  --font-size-display-xl: 64px;
  --font-size-display-lg: 48px;
  --font-size-display-md: 36px;
  --font-size-display-sm: 30px;
  
  /* 标题字号 */
  --font-size-h1: 32px;
  --font-size-h2: 24px;
  --font-size-h3: 20px;
  --font-size-h4: 18px;
  
  /* 正文字号 */
  --font-size-body-lg: 18px;
  --font-size-body-md: 16px;
  --font-size-body-sm: 14px;
  
  /* 辅助字号 */
  --font-size-caption: 12px;
  --font-size-label: 14px;
  --font-size-small: 12px;
}
```

### 行高与字重

```css
:root {
  /* 行高 */
  --line-height-tight: 1.2;
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
  letter-spacing: -0.01em;
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
  letter-spacing: 0;
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
- 标题与正文间距：`--spacing-4` (16px)
- 段落间距：`--spacing-3` (12px)
- 列表项间距：`--spacing-2` (8px)
- 文本最大宽度：`--max-width-text: 680px`

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

/* Flex 布局 */
.flex {
  display: flex;
  gap: var(--spacing-4);
}

/* 动画容器布局 */
.animation-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8);
  background: var(--color-gray-100);
  border-radius: var(--radius-lg);
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
  font-weight: var(--font-weight-medium);
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
  font-weight: var(--font-weight-medium);
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
  background: var(--color-gray-200);
}

.button-ghost:active {
  background: var(--color-gray-300);
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

### Card（卡片）

**使用场景**：
- 动画展示容器
- 功能介绍卡片
- 动画控制面板
- 示例展示卡片

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

**卡片阴影**：
```css
:root {
  /* 卡片阴影 */
  --card-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --card-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --card-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --card-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
}
```

**卡片间距**：
```css
:root {
  /* 卡片内边距 */
  --card-padding-sm: var(--spacing-4);
  --card-padding-md: var(--spacing-6);
  --card-padding-lg: var(--spacing-8);
  --card-padding-xl: var(--spacing-10);
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

### Upload（上传组件）

**上传样式**：
```css
.upload {
  border: 2px dashed var(--color-gray-300);
  border-radius: var(--radius-lg);
  padding: var(--spacing-8);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.upload:hover {
  border-color: var(--color-primary);
  background: var(--color-primary-lighter);
}

.upload-dragging {
  border-color: var(--color-primary);
  background: var(--color-primary-lighter);
}

.upload-icon {
  width: 48px;
  height: 48px;
  color: var(--color-gray-500);
  margin-bottom: var(--spacing-4);
}

.upload-text {
  font-size: var(--font-size-body-md);
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-2);
}

.upload-hint {
  font-size: var(--font-size-body-sm);
  color: var(--color-gray-500);
}
```

### Form（表单组件）

**表单布局**：
```css
.form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.form-label {
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
}

.form-error {
  font-size: var(--font-size-caption);
  color: var(--color-error);
  margin-top: var(--spacing-1);
}

.form-hint {
  font-size: var(--font-size-caption);
  color: var(--color-gray-500);
  margin-top: var(--spacing-1);
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

### Animation Player（动画播放器）

**播放器样式**：
```css
.animation-player {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
}

.animation-canvas {
  width: 100%;
  height: 300px;
  background: var(--color-gray-100);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.animation-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
}

.animation-progress {
  width: 100%;
  height: 4px;
  background: var(--color-gray-300);
  border-radius: var(--radius-pill);
  overflow: hidden;
}

.animation-progress-bar {
  height: 100%;
  background: var(--color-primary);
  transition: width 0.1s linear;
}
```

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

### 动画图标

**动画图标特点**：
- **微动效**：细微的动画效果，增强交互反馈
- **流畅性**：动画流畅自然，符合物理规律
- **性能优化**：使用 Lottie 格式，保证性能

**动画图标使用场景**：
- 加载状态
- 交互反馈
- 状态切换
- 操作确认

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

### Lottie 动画规范

**动画性能**：
- 文件大小：控制在 100KB 以内
- 帧率：30-60 fps
- 持续时间：0.5-3 秒
- 复杂度：避免过多图层和效果

**动画质量**：
- 分辨率：矢量格式，可缩放
- 颜色：使用品牌色系统
- 流畅度：帧率稳定，无卡顿
- 兼容性：支持主流平台

**动画使用场景**：
- 加载动画
- 成功/失败动画
- 交互反馈动画
- 品牌展示动画

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens

```css
:root {
  /* Primary Colors */
  --color-primary: #FF5A5F;
  --color-primary-hover: #E0484D;
  --color-primary-active: #C7363B;
  --color-primary-light: #FF7A7F;
  --color-primary-lighter: #FF9A9F;
  --color-primary-dark: #E0484D;
  --color-primary-darker: #C7363B;

  /* Secondary Colors */
  --color-secondary: #008489;
  --color-secondary-hover: #006B6F;
  --color-secondary-active: #005255;
  --color-secondary-light: #33A5A9;
  --color-secondary-lighter: #66C6C9;
  --color-secondary-dark: #006B6F;
  --color-secondary-darker: #005255;

  /* Neutral Colors */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-gray-100: #F7F7F7;
  --color-gray-200: #EBEBEB;
  --color-gray-300: #DDDDDD;
  --color-gray-400: #CCCCCC;
  --color-gray-500: #999999;
  --color-gray-600: #767676;
  --color-gray-700: #484848;
  --color-gray-800: #222222;
  --color-gray-900: #111111;

  /* Semantic Colors */
  --color-success: #00A699;
  --color-success-hover: #008A80;
  --color-success-active: #006E66;
  --color-success-light: #33BFB8;
  --color-success-lighter: #66D8D3;
  --color-success-dark: #008A80;
  --color-success-darker: #006E66;

  --color-warning: #FFB400;
  --color-warning-hover: #E6A200;
  --color-warning-active: #CC9000;
  --color-warning-light: #FFC233;
  --color-warning-lighter: #FFD066;
  --color-warning-dark: #E6A200;
  --color-warning-darker: #CC9000;

  --color-error: #FF5A5F;
  --color-error-hover: #E0484D;
  --color-error-active: #C7363B;
  --color-error-light: #FF7A7F;
  --color-error-lighter: #FF9A9F;
  --color-error-dark: #E0484D;
  --color-error-darker: #C7363B;

  --color-info: #008489;
  --color-info-hover: #006B6F;
  --color-info-active: #005255;
  --color-info-light: #33A5A9;
  --color-info-lighter: #66C6C9;
  --color-info-dark: #006B6F;
  --color-info-darker: #005255;
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
  --line-height-tight: 1.2;
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
   - Button、Card、Input 等核心组件
   - 组件状态（hover、active、focus）
   - 组件尺寸与间距

5. **动效原则**：
   - 缓动函数选择
   - 动画时长控制
   - 性能优化原则

6. **Lottie 动画**：
   - 矢量动画技术
   - 跨平台动画实现
   - 动画性能优化

### 不应复刻的元素（品牌与内容）

**❌ 避免复刻**：

1. **品牌元素**：
   - Airbnb 品牌标识
   - 品牌色值（可参考配色逻辑）
   - 品牌字体

2. **具体插画**：
   - 空状态插画
   - 错误页面插画
   - 功能介绍插画

3. **Lottie 动画文件**：
   - 具体动画 JSON 文件
   - 动画内容与创意
   - 动画中的品牌元素

4. **文案内容**：
   - 产品介绍文案
   - 错误提示文案
   - 功能说明文案

### 合法使用建议

**学习思路**：
1. **理解设计逻辑**：学习设计系统的组织方式和思考逻辑
2. **参考配色方案**：参考配色思路，但使用自己的品牌色
3. **借鉴组件规范**：学习组件设计原则，但根据产品需求调整
4. **研究动效技术**：学习 Lottie 动画技术，但创作自己的动画

**实施建议**：
1. **建立自己的 Design Token**：基于产品需求创建专属 token
2. **定制组件库**：参考组件规范，但根据品牌定制
3. **创作原创动画**：使用 Lottie 技术，创作原创动画内容
4. **保持一致性**：确保所有元素符合品牌调性

**法律风险提示**：
- 不要直接复制品牌元素
- 不要使用受版权保护的素材
- 不要模仿特定的创意内容
- 确保所有内容为原创或授权使用

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

### Lottie 动画使用

```javascript
// 引入 Lottie Web 库
import lottie from 'lottie-web';

// 加载动画
const animation = lottie.loadAnimation({
  container: document.getElementById('animation-container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation.json'
});

// 控制动画
animation.play();
animation.pause();
animation.stop();
animation.setSpeed(1.5);
```

### 组件使用示例

```html
<!-- Button -->
<button class="button button-primary">Primary Button</button>
<button class="button button-secondary">Secondary Button</button>
<button class="button button-ghost">Ghost Button</button>

<!-- Card -->
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</div>

<!-- Input -->
<input type="text" class="input" placeholder="Enter text...">
```

---

**文档版本**：v1.0  
**最后更新**：2026-02-02  
**维护团队**：Design System Team