# Apple HIG 设计系统（Apple Human Interface Guidelines）

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **简洁（Simplicity）**：去除多余元素，突出核心功能
- **优雅（Elegance）**：精致的视觉设计和流畅的交互
- **直观（Intuitive）**：用户无需学习即可理解和使用
- **一致（Consistency）**：跨平台保持统一的视觉和交互体验
- **可访问性（Accessibility）**：确保所有用户都能使用

### 适用产品类型
- **iOS应用**：iPhone、iPad应用
- **macOS应用**：桌面应用
- **Web应用**：响应式网页应用
- **跨平台应用**：多平台统一体验

### 设计哲学
Apple HIG 设计系统强调以用户为中心的设计理念，通过简洁、优雅、直观的设计语言，创造出流畅、高效的用户体验。核心在于去除不必要的元素，突出核心功能，使用户能够专注于内容本身。这种风格强调一致性和可访问性，适合需要提供高质量用户体验的产品。

---

## 2. 颜色系统（Color System）

### 主色调
```css
:root {
  /* 主色 - 苹果蓝 */
  --apple-color-primary: #007AFF;
  --apple-color-primary-light: #5AC8FA;
  --apple-color-primary-dark: #0051D5;

  /* 辅助主色 - 苹果绿 */
  --apple-color-secondary: #34C759;
  --apple-color-secondary-light: #30D158;
  --apple-color-secondary-dark: #248A3D;

  /* 强调主色 - 苹果橙 */
  --apple-color-accent: #FF9500;
  --apple-color-accent-light: #FF9F0A;
  --apple-color-accent-dark: #C77200;
}
```

**使用场景**：
- 主色：用于主要操作按钮、导航高亮、品牌标识
- 辅助色：用于次要操作、标签、装饰元素
- 强调色：用于重要提示、特殊状态、营销元素

### 中性色
```css
:root {
  /* 背景色 - 亮色主题 */
  --apple-bg-primary: #FFFFFF;
  --apple-bg-secondary: #F2F2F7;
  --apple-bg-tertiary: #FFFFFF;
  --apple-bg-card: #FFFFFF;

  /* 背景色 - 暗色主题 */
  --apple-bg-primary-dark: #000000;
  --apple-bg-secondary-dark: #1C1C1E;
  --apple-bg-tertiary-dark: #2C2C2E;
  --apple-bg-card-dark: #1C1C1E;

  /* 文字色 - 亮色主题 */
  --apple-text-primary: #000000;
  --apple-text-secondary: #8E8E93;
  --apple-text-tertiary: #C7C7CC;
  --apple-text-disabled: #D1D1D6;

  /* 文字色 - 暗色主题 */
  --apple-text-primary-dark: #FFFFFF;
  --apple-text-secondary-dark: #98989D;
  --apple-text-tertiary-dark: #636366;
  --apple-text-disabled-dark: #48484A;

  /* 边框色 */
  --apple-border-primary: rgba(60, 60, 67, 0.12);
  --apple-border-secondary: rgba(60, 60, 67, 0.18);
  --apple-border-tertiary: rgba(60, 60, 67, 0.24);
}
```

**使用场景**：
- 背景色：浅色背景营造简洁清爽的效果
- 文字色：高对比度文字确保可读性
- 边框色：细微边框增强层次感

### 语义色
```css
:root {
  /* 成功 */
  --apple-color-success: #34C759;

  /* 警告 */
  --apple-color-warning: #FF9500;

  /* 错误 */
  --apple-color-error: #FF3B30;

  /* 信息 */
  --apple-color-info: #007AFF;
}
```

**使用场景**：
- 成功：操作成功、完成状态
- 警告：需要注意的状态、提示信息
- 错误：操作失败、错误提示
- 信息：一般提示、引导信息

### Design Token 命名建议
- `--apple-color-{type}-{variant}`：颜色命名
- `--apple-bg-{level}`：背景色命名
- `--apple-text-{level}`：文字色命名
- `--apple-border-{type}`：边框色命名
- `--apple-{color}-dark`：暗色主题命名

---

## 3. 字体与排版（Typography）

### 字体家族
```css
:root {
  /* 主字体 - San Francisco */
  --apple-font-primary: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  /* 数字字体 */
  --apple-font-mono: 'SF Mono', 'Menlo', 'Monaco', 'Courier New', monospace;

  /* 装饰字体 */
  --apple-font-display: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
}
```

**字体选择理由**：
- San Francisco：苹果系统字体，优秀的屏幕可读性
- SF Mono：等宽字体，适合数字和代码显示
- SF Pro Display：适合标题和装饰文字

### 字号层级
```css
:root {
  /* 标题 */
  --apple-font-size-large-title: 34px;
  --apple-font-size-title-1: 28px;
  --apple-font-size-title-2: 22px;
  --apple-font-size-title-3: 20px;
  --apple-font-size-headline: 17px;

  /* 正文 */
  --apple-font-size-body: 17px;
  --apple-font-size-callout: 16px;
  --apple-font-size-subheadline: 15px;
  --apple-font-size-footnote: 13px;

  /* 标签 */
  --apple-font-size-caption-1: 12px;
  --apple-font-size-caption-2: 11px;
}
```

### 行高与字重
```css
:root {
  /* 行高 */
  --apple-line-height-tight: 1.2;
  --apple-line-height-normal: 1.4;
  --apple-line-height-relaxed: 1.5;

  /* 字重 */
  --apple-font-weight-light: 300;
  --apple-font-weight-regular: 400;
  --apple-font-weight-medium: 500;
  --apple-font-weight-semibold: 600;
  --apple-font-weight-bold: 700;
}
```

### 排版规则
```css
/* 标题排版 */
h1 {
  font-family: var(--apple-font-display);
  font-size: var(--apple-font-size-large-title);
  font-weight: var(--apple-font-weight-bold);
  line-height: var(--apple-line-height-tight);
  letter-spacing: 0.01em;
}

h2 {
  font-family: var(--apple-font-display);
  font-size: var(--apple-font-size-title-1);
  font-weight: var(--apple-font-weight-semibold);
  line-height: var(--apple-line-height-tight);
  letter-spacing: 0.005em;
}

/* 正文排版 */
p {
  font-family: var(--apple-font-primary);
  font-size: var(--apple-font-size-body);
  font-weight: var(--apple-font-weight-regular);
  line-height: var(--apple-line-height-normal);
  letter-spacing: 0;
}

/* 数字排版 */
.mono {
  font-family: var(--apple-font-mono);
  font-size: var(--apple-font-size-body);
  font-weight: var(--apple-font-weight-regular);
  line-height: var(--apple-line-height-normal);
  letter-spacing: 0;
}
```

### 响应式字体
```css
/* 移动端（< 375px） */
@media (max-width: 374px) {
  :root {
    --apple-font-size-large-title: 28px;
    --apple-font-size-title-1: 22px;
    --apple-font-size-title-2: 20px;
    --apple-font-size-body: 17px;
  }
}

/* 平板端（375px - 768px） */
@media (min-width: 375px) and (max-width: 767px) {
  :root {
    --apple-font-size-large-title: 34px;
    --apple-font-size-title-1: 28px;
    --apple-font-size-title-2: 22px;
    --apple-font-size-body: 17px;
  }
}

/* 桌面端（≥ 768px） */
@media (min-width: 768px) {
  :root {
    --apple-font-size-large-title: 34px;
    --apple-font-size-title-1: 28px;
    --apple-font-size-title-2: 22px;
    --apple-font-size-body: 17px;
  }
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 版心宽度
```css
:root {
  --apple-container-sm: 375px;
  --apple-container-md: 768px;
  --apple-container-lg: 1024px;
  --apple-container-xl: 1280px;
  --apple-container-2xl: 1536px;
}
```

### 栅格系统
```css
:root {
  /* 栅格列数 */
  --apple-grid-columns: 12;

  /* 间距 */
  --apple-grid-gap-xs: 8px;
  --apple-grid-gap-sm: 12px;
  --apple-grid-gap-md: 16px;
  --apple-grid-gap-lg: 20px;
  --apple-grid-gap-xl: 24px;

  /* 边距 */
  --apple-grid-margin-sm: 16px;
  --apple-grid-margin-md: 20px;
  --apple-grid-margin-lg: 24px;
}
```

### 断点系统
```css
:root {
  /* 断点 */
  --apple-breakpoint-xs: 0;
  --apple-breakpoint-sm: 375px;
  --apple-breakpoint-md: 768px;
  --apple-breakpoint-lg: 1024px;
  --apple-breakpoint-xl: 1280px;
  --apple-breakpoint-2xl: 1536px;
}
```

### 留白密度
**信息密度**：中等
- 卡片内边距：16px
- 模块间距：20px
- 章节间距：24px
- 页面边距：20px

**留白原则**：
- 适度留白，避免过度拥挤
- 通过间距建立视觉层次
- 保持足够的呼吸空间

### 布局模式
```css
/* 容器 */
.container {
  width: 100%;
  max-width: var(--apple-container-xl);
  margin: 0 auto;
  padding: 0 var(--apple-grid-margin-md);
}

/* 栅格 */
.grid {
  display: grid;
  grid-template-columns: repeat(var(--apple-grid-columns), 1fr);
  gap: var(--apple-grid-gap-md);
}

/* 弹性布局 */
.flex {
  display: flex;
  gap: var(--apple-grid-gap-md);
}

/* 响应式栅格 */
@media (max-width: 767px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

#### 组件变体
```css
/* 主按钮 */
.btn-primary {
  background: var(--apple-color-primary);
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-weight: var(--apple-font-weight-medium);
  transition: all 0.2s ease;
}

/* 次按钮 */
.btn-secondary {
  background: rgba(118, 118, 128, 0.12);
  color: var(--apple-color-primary);
  border: none;
  border-radius: 8px;
  font-weight: var(--apple-font-weight-medium);
  transition: all 0.2s ease;
}

/* 文字按钮 */
.btn-text {
  background: transparent;
  color: var(--apple-color-primary);
  border: none;
  font-weight: var(--apple-font-weight-medium);
  transition: all 0.2s ease;
}

/* 胶囊按钮 */
.btn-capsule {
  background: var(--apple-color-primary);
  color: #FFFFFF;
  border: none;
  border-radius: 20px;
  font-weight: var(--apple-font-weight-medium);
  transition: all 0.2s ease;
}
```

#### 组件尺寸
```css
/* 小号 */
.btn-sm {
  padding: 6px 12px;
  font-size: var(--apple-font-size-caption-1);
  border-radius: 6px;
}

/* 中号 */
.btn-md {
  padding: 8px 16px;
  font-size: var(--apple-font-size-body);
  border-radius: 8px;
}

/* 大号 */
.btn-lg {
  padding: 12px 24px;
  font-size: var(--apple-font-size-body);
  border-radius: 10px;
}
```

#### 组件状态
```css
/* 悬停状态 */
.btn-primary:hover {
  background: var(--apple-color-primary-dark);
}

/* 激活状态 */
.btn-primary:active {
  background: var(--apple-color-primary-dark);
  transform: scale(0.98);
}

/* 禁用状态 */
.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 焦点状态 */
.btn-primary:focus {
  outline: 2px solid var(--apple-color-primary);
  outline-offset: 2px;
}
```

### Card（卡片）

#### 组件样式
```css
.card {
  background: var(--apple-bg-card);
  border: 1px solid var(--apple-border-primary);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--apple-border-secondary);
}

.card-elevated {
  background: var(--apple-bg-card);
  border: none;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
}

.card-elevated:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}
```

#### 使用场景
- 信息展示：产品卡片、用户卡片
- 内容分组：模块化内容展示
- 数据展示：数据统计、图表容器

### Input（输入框）

#### 组件样式
```css
.input {
  background: var(--apple-bg-secondary);
  border: none;
  border-radius: 10px;
  padding: 10px 12px;
  color: var(--apple-text-primary);
  font-size: var(--apple-font-size-body);
  transition: all 0.2s ease;
}

.input::placeholder {
  color: var(--apple-text-tertiary);
}

.input:hover {
  background: var(--apple-bg-tertiary);
}

.input:focus {
  outline: none;
  background: var(--apple-bg-tertiary);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.3);
}

.input-error {
  border: 1px solid var(--apple-color-error);
}
```

#### 组件尺寸
```css
.input-sm {
  padding: 8px 10px;
  font-size: var(--apple-font-size-callout);
}

.input-md {
  padding: 10px 12px;
  font-size: var(--apple-font-size-body);
}

.input-lg {
  padding: 12px 14px;
  font-size: var(--apple-font-size-body);
}
```

### Navigation（导航）

#### 组件样式
```css
.nav {
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid var(--apple-border-primary);
  backdrop-filter: blur(20px);
}

.nav-link {
  color: var(--apple-text-secondary);
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--apple-text-primary);
  background: rgba(118, 118, 128, 0.08);
}

.nav-link.active {
  color: var(--apple-color-primary);
  background: rgba(0, 122, 255, 0.1);
}
```

### Modal（模态框）

#### 组件样式
```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
}

.modal {
  background: var(--apple-bg-card);
  border: none;
  border-radius: 14px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.modal-header {
  border-bottom: 1px solid var(--apple-border-primary);
  padding: 16px;
}

.modal-body {
  padding: 16px;
}

.modal-footer {
  border-top: 1px solid var(--apple-border-primary);
  padding: 16px;
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
```css
/* 图标基础样式 */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  stroke-width: 2;
  stroke: currentColor;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* 图标填充风格 */
.icon-filled {
  fill: currentColor;
  stroke: none;
}

/* 图标SF Symbols风格 */
.icon-sf {
  stroke-width: 1.5;
  stroke: currentColor;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}
```

**图标风格特点**：
- 线条风格：细线条，简洁优雅
- 填充风格：填充图标，视觉冲击力强
- 圆角处理：适度圆角，柔和感
- SF Symbols风格：苹果官方图标风格

### 插画风格
**插画特点**：
- 简约抽象：几何形状组合
- 扁平化：无阴影、无渐变
- 柔和色彩：低饱和度色彩
- 留白：足够的留白空间
- 一致性：统一的视觉风格

**设计原则**：
- 简约至上：去除不必要的细节
- 功能导向：插画服务于功能
- 一致性：保持统一的视觉风格
- 可访问性：确保所有用户都能理解

### 使用场景
- 图标：导航图标、操作图标、状态图标
- 插画：空状态、引导页、营销页面
- 装饰：背景装饰、分隔线、角标

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 行为
```css
/* 按钮悬停 */
.btn-primary:hover {
  background: var(--apple-color-primary-dark);
  transition: all 0.2s ease;
}

/* 卡片悬停 */
.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--apple-border-secondary);
  transition: all 0.2s ease;
}

/* 链接悬停 */
.link:hover {
  color: var(--apple-color-primary);
  text-decoration: underline;
  transition: all 0.2s ease;
}
```

### Active 行为
```css
/* 按钮点击 */
.btn-primary:active {
  background: var(--apple-color-primary-dark);
  transform: scale(0.98);
  transition: all 0.1s ease;
}

/* 卡片点击 */
.card:active {
  transform: scale(0.99);
  transition: all 0.1s ease;
}
```

### Focus 行为
```css
/* 焦点状态 */
.btn-primary:focus,
.input:focus {
  outline: 2px solid var(--apple-color-primary);
  outline-offset: 2px;
  transition: all 0.2s ease;
}
```

### 动效节奏
```css
/* 标准过渡 */
.transition-standard {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 快速过渡 */
.transition-fast {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 缓慢过渡 */
.transition-slow {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 弹性过渡 */
.transition-bounce {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

**动效原则**：
- 简洁克制：动效简洁，不夸张
- 流畅自然：使用缓动函数
- 功能导向：动效服务于功能
- 性能优先：使用CSS动画

### 操作反馈设计
```css
/* 成功反馈 */
.feedback-success {
  animation: success-pulse 0.3s ease;
}

@keyframes success-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* 错误反馈 */
.feedback-error {
  animation: error-shake 0.4s ease;
}

@keyframes error-shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-4px);
  }
  75% {
    transform: translateX(4px);
  }
}

/* 加载反馈 */
.feedback-loading {
  animation: loading-spin 1s linear infinite;
}

@keyframes loading-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
  /* Primary Colors */
  --apple-color-primary: #007AFF;
  --apple-color-primary-light: #5AC8FA;
  --apple-color-primary-dark: #0051D5;

  /* Secondary Colors */
  --apple-color-secondary: #34C759;
  --apple-color-secondary-light: #30D158;
  --apple-color-secondary-dark: #248A3D;

  /* Accent Colors */
  --apple-color-accent: #FF9500;
  --apple-color-accent-light: #FF9F0A;
  --apple-color-accent-dark: #C77200;

  /* Semantic Colors */
  --apple-color-success: #34C759;
  --apple-color-warning: #FF9500;
  --apple-color-error: #FF3B30;
  --apple-color-info: #007AFF;

  /* Background Colors - Light */
  --apple-bg-primary: #FFFFFF;
  --apple-bg-secondary: #F2F2F7;
  --apple-bg-tertiary: #FFFFFF;
  --apple-bg-card: #FFFFFF;

  /* Background Colors - Dark */
  --apple-bg-primary-dark: #000000;
  --apple-bg-secondary-dark: #1C1C1E;
  --apple-bg-tertiary-dark: #2C2C2E;
  --apple-bg-card-dark: #1C1C1E;

  /* Text Colors - Light */
  --apple-text-primary: #000000;
  --apple-text-secondary: #8E8E93;
  --apple-text-tertiary: #C7C7CC;
  --apple-text-disabled: #D1D1D6;

  /* Text Colors - Dark */
  --apple-text-primary-dark: #FFFFFF;
  --apple-text-secondary-dark: #98989D;
  --apple-text-tertiary-dark: #636366;
  --apple-text-disabled-dark: #48484A;

  /* Border Colors */
  --apple-border-primary: rgba(60, 60, 67, 0.12);
  --apple-border-secondary: rgba(60, 60, 67, 0.18);
  --apple-border-tertiary: rgba(60, 60, 67, 0.24);
}
```

### Spacing Tokens
```css
:root {
  /* Spacing Scale */
  --apple-space-0: 0;
  --apple-space-1: 4px;
  --apple-space-2: 8px;
  --apple-space-3: 12px;
  --apple-space-4: 16px;
  --apple-space-5: 20px;
  --apple-space-6: 24px;
  --apple-space-8: 32px;
  --apple-space-10: 40px;
  --apple-space-12: 48px;
}
```

### Radius Tokens
```css
:root {
  /* Border Radius */
  --apple-radius-none: 0;
  --apple-radius-sm: 4px;
  --apple-radius-md: 6px;
  --apple-radius-lg: 8px;
  --apple-radius-xl: 10px;
  --apple-radius-2xl: 12px;
  --apple-radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
  /* Shadows */
  --apple-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --apple-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --apple-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
  --apple-shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.2);
}
```

### Typography Tokens
```css
:root {
  /* Font Families */
  --apple-font-primary: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --apple-font-mono: 'SF Mono', 'Menlo', 'Monaco', 'Courier New', monospace;
  --apple-font-display: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;

  /* Font Sizes */
  --apple-font-size-large-title: 34px;
  --apple-font-size-title-1: 28px;
  --apple-font-size-title-2: 22px;
  --apple-font-size-title-3: 20px;
  --apple-font-size-headline: 17px;
  --apple-font-size-body: 17px;
  --apple-font-size-callout: 16px;
  --apple-font-size-subheadline: 15px;
  --apple-font-size-footnote: 13px;
  --apple-font-size-caption-1: 12px;
  --apple-font-size-caption-2: 11px;

  /* Font Weights */
  --apple-font-weight-light: 300;
  --apple-font-weight-regular: 400;
  --apple-font-weight-medium: 500;
  --apple-font-weight-semibold: 600;
  --apple-font-weight-bold: 700;

  /* Line Heights */
  --apple-line-height-tight: 1.2;
  --apple-line-height-normal: 1.4;
  --apple-line-height-relaxed: 1.5;
}
```

### Transition Tokens
```css
:root {
  /* Transitions */
  --apple-transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --apple-transition-base: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --apple-transition-slow: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --apple-transition-bounce: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Z-Index Tokens
```css
:root {
  /* Z-Index Scale */
  --apple-z-dropdown: 1000;
  --apple-z-sticky: 1020;
  --apple-z-fixed: 1030;
  --apple-z-modal-backdrop: 1040;
  --apple-z-modal: 1050;
  --apple-z-popover: 1060;
  --apple-z-tooltip: 1070;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则/风格）

#### 1. 设计原则
- **简洁至上**：学习去除不必要元素的设计方法
- **一致性**：掌握跨平台保持一致性的原则
- **可访问性**：理解可访问性设计的重要性
- **用户体验**：学习以用户为中心的设计思维

#### 2. 技术实现
- **CSS变量**：使用CSS变量管理设计令牌
- **backdrop-filter**：使用背景模糊效果
- **box-shadow**：使用细微阴影创造层次感
- **border-radius**：使用圆角创造柔和感

#### 3. 交互设计
- **悬停效果**：学习简洁的悬停效果
- **焦点状态**：掌握焦点环的设计
- **过渡动画**：理解缓动函数的使用
- **操作反馈**：学习清晰的操作反馈设计

#### 4. 布局系统
- **栅格系统**：学习响应式栅格布局
- **间距系统**：掌握统一的间距规范
- **容器系统**：理解版心宽度的设置

### 不应复刻的元素（品牌/插画/内容）

#### 1. 品牌元素
- **品牌标识**：不要复制苹果Logo、名称
- **品牌色彩**：不要直接使用苹果专属色
- **品牌字体**：不要直接使用苹果定制字体

#### 2. 插画内容
- **具体插画**：不要复制具体的插画作品
- **插画风格**：可以学习风格，但不要完全复制
- **插画元素**：不要直接使用插画中的元素

#### 3. 内容素材
- **文字内容**：不要复制具体的文字内容
- **图片素材**：不要使用相同的图片素材
- **图标设计**：不要直接复制SF Symbols图标

#### 4. 功能实现
- **具体功能**：不要复制具体的功能实现
- **交互逻辑**：可以学习交互模式，但不要完全复制
- **动画效果**：可以学习动画原理，但不要完全复制

### 合法使用建议

#### 1. 学习设计原理
- 研究Apple HIG的设计原理
- 理解简洁、一致、可访问性的重要性
- 学习以用户为中心的设计思维

#### 2. 创造原创设计
- 基于学习的设计原理创造原创设计
- 使用不同的色彩搭配和设计方案
- 创造独特的视觉效果

#### 3. 遵守版权法律
- 尊重原创设计的版权
- 不要直接复制具体的设计元素
- 在学习的基础上进行创新

#### 4. 适当引用
- 如果需要引用，请注明来源
- 遵守相关的版权法律
- 获得必要的授权

### 设计系统复刻指南

#### 可以复刻的方面
- **设计系统结构**：可以学习设计系统的组织结构
- **组件规范**：可以参考组件的命名和组织方式
- **设计令牌**：可以学习设计令牌的管理方法
- **响应式设计**：可以学习响应式设计的实现方法

#### 需要原创的方面
- **视觉风格**：需要创造独特的视觉风格
- **色彩方案**：需要设计自己的色彩方案
- **组件样式**：需要设计自己的组件样式
- **交互效果**：需要设计自己的交互效果

### 总结
Apple HIG 设计系统的核心在于创造简洁、优雅、直观的用户体验。通过学习简洁至上、一致性、可访问性等设计原则，可以创造出高质量的用户体验。但需要注意的是，应该在学习的基础上进行创新，而不是直接复制具体的设计元素。只有在尊重原创版权的前提下，才能创造出既美观又合法的设计作品。
