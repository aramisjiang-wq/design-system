# Stripe Design System

## 1. 设计风格总览（Design DNA）

**核心关键词**：专业、信任、清晰、现代、金融科技

**适用产品类型**：金融科技、支付平台、SaaS应用、企业级应用、开发者工具

**设计哲学**：
- 强调信任与专业性
- 清晰的信息层级和可读性
- 现代简约的视觉语言
- 强调数据可视化和信息密度
- 优雅的微交互和动效
- 无障碍优先的设计理念

---

## 2. 颜色系统（Color System）

### 主品牌色
```css
:root {
  /* 主品牌色 - 蓝紫色 */
  --color-primary: #635BFF;
  --color-primary-hover: #4B45D4;
  --color-primary-active: #3A35A8;
  --color-primary-light: #8B85FF;
  --color-primary-lighter: #B8B4FF;
  --color-primary-dark: #4B45D4;
  --color-primary-darker: #3A35A8;
}
```

**使用场景**：
- 主要操作按钮
- 重要链接和导航
- 选中状态
- 品牌元素
- 强调元素

### 辅助色
```css
:root {
  /* 辅助色 - 深色系 */
  --color-secondary: #0A2540;
  --color-secondary-hover: #081D33;
  --color-secondary-active: #061626;
  --color-secondary-light: #1A3A5C;
  --color-secondary-lighter: #2E4F78;
  --color-secondary-dark: #081D33;
  --color-secondary-darker: #061626;
}
```

**使用场景**：
- 次要操作
- 文本内容
- 标题和重要文本
- 边框线条
- 装饰元素

### 中性色
```css
:root {
  /* 中性色 - 灰度系统 */
  --color-neutral-0: #FFFFFF;
  --color-neutral-50: #F7F9FC;
  --color-neutral-100: #EEF2F6;
  --color-neutral-200: #E3E8EE;
  --color-neutral-300: #C1C9D2;
  --color-neutral-400: #8792A2;
  --color-neutral-500: #697386;
  --color-neutral-600: #42526E;
  --color-neutral-700: #32325D;
  --color-neutral-800: #0A2540;
  --color-neutral-900: #061626;
}
```

**使用场景**：
- 背景色：neutral-0, neutral-50
- 文本：neutral-800, neutral-600
- 边框：neutral-200, neutral-300
- 禁用状态：neutral-400
- 分隔线：neutral-200

### 语义色
```css
:root {
  /* 成功色 */
  --color-success: #2E7D32;
  --color-success-light: #E8F5E9;
  --color-success-dark: #1B5E20;

  /* 警告色 */
  --color-warning: #F57C00;
  --color-warning-light: #FFF3E0;
  --color-warning-dark: #E65100;

  /* 错误色 */
  --color-error: #D32F2F;
  --color-error-light: #FFEBEE;
  --color-error-dark: #B71C1C;

  /* 信息色 */
  --color-info: #1976D2;
  --color-info-light: #E3F2FD;
  --color-info-dark: #0D47A1;
}
```

**使用场景**：
- 成功状态：支付成功、操作成功
- 警告状态：需要注意的信息、风险提示
- 错误状态：支付失败、验证错误
- 信息状态：提示信息、帮助文本

### Design Token 命名建议
```css
:root {
  /* 品牌色 */
  --brand-primary: var(--color-primary);
  --brand-primary-hover: var(--color-primary-hover);
  --brand-primary-active: var(--color-primary-active);

  /* 功能色 */
  --functional-success: var(--color-success);
  --functional-warning: var(--color-warning);
  --functional-error: var(--color-error);
  --functional-info: var(--color-info);

  /* 中性色 */
  --neutral-bg-primary: var(--color-neutral-0);
  --neutral-bg-secondary: var(--color-neutral-50);
  --neutral-text-primary: var(--color-neutral-800);
  --neutral-text-secondary: var(--color-neutral-600);
  --neutral-border: var(--color-neutral-200);
}
```

---

## 3. 字体与排版（Typography）

### 字体家族
```css
:root {
  /* 英文字体 */
  --font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  
  /* 等宽字体（代码） */
  --font-family-mono: "SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace;
}
```

### 字号层级
```css
:root {
  /* 标题层级 */
  --font-size-h1: 48px;
  --font-size-h2: 40px;
  --font-size-h3: 32px;
  --font-size-h4: 24px;
  --font-size-h5: 20px;
  --font-size-h6: 16px;

  /* 正文层级 */
  --font-size-body-large: 18px;
  --font-size-body: 16px;
  --font-size-body-small: 14px;

  /* 辅助文本 */
  --font-size-caption: 13px;
  --font-size-label: 12px;
  --font-size-code: 13px;
}
```

### 行高系统
```css
:root {
  --line-height-tight: 1.1;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  --line-height-loose: 2;
}
```

### 字重系统
```css
:root {
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### 排版规则
```css
/* H1 - 页面主标题 */
.typography-h1 {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: -0.02em;
  color: var(--color-neutral-800);
}

/* H2 - 区块标题 */
.typography-h2 {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: -0.01em;
  color: var(--color-neutral-800);
}

/* H3 - 小节标题 */
.typography-h3 {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: -0.005em;
  color: var(--color-neutral-800);
}

/* H4 - 子标题 */
.typography-h4 {
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-800);
}

/* Body Large - 主要内容 */
.typography-body-large {
  font-size: var(--font-size-body-large);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-600);
}

/* Body - 标准正文 */
.typography-body {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-600);
}

/* Body Small - 小号正文 */
.typography-body-small {
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-600);
}

/* Caption - 辅助说明 */
.typography-caption {
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-500);
}

/* Label - 标签文本 */
.typography-label {
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-neutral-500);
}

/* Code - 代码文本 */
.typography-code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-code);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-700);
  background: var(--color-neutral-100);
  padding: 2px 6px;
  border-radius: 3px;
}
```

### 排版节奏
- 标题与正文之间：24px 间距
- 段落之间：16px 间距
- 列表项之间：8px 间距
- 标题层级递减：8px 字号差
- 代码块与正文之间：16px 间距

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心
```css
:root {
  /* 版心宽度 */
  --page-width-narrow: 768px;
  --page-width-normal: 980px;
  --page-width-wide: 1200px;
  --page-width-full: 1440px;

  /* 页面边距 */
  --page-margin: 24px;
  --page-margin-large: 48px;
}
```

### 栅格系统
```css
:root {
  /* 栅格列数 */
  --grid-columns: 12;
  
  /* 栅格间距 */
  --grid-gutter: 20px;
  --grid-gutter-large: 32px;
  
  /* 栅格边距 */
  --grid-margin: 24px;
  --grid-margin-large: 48px;
}
```

### 留白系统
```css
:root {
  /* 基础间距单位 */
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
}
```

### 布局密度
- **高密度**：数据表格、交易记录、API 文档
- **中密度**：标准内容页面、表单页面
- **低密度**：欢迎页面、营销页面、空状态

### 响应式断点
```css
:root {
  --breakpoint-xs: 375px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

### 布局模式
```css
/* 侧边栏布局 */
.layout-sidebar {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-8);
}

/* 三栏布局 */
.layout-three-column {
  display: grid;
  grid-template-columns: 280px 1fr 320px;
  gap: var(--space-8);
}

/* 内容居中 */
.layout-centered {
  max-width: var(--page-width-normal);
  margin: 0 auto;
  padding: 0 var(--page-margin);
}

/* 全宽布局 */
.layout-full {
  width: 100%;
  padding: 0 var(--page-margin);
}
```

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

#### 尺寸规格
```css
:root {
  /* 按钮高度 */
  --button-height-small: 32px;
  --button-height-medium: 40px;
  --button-height-large: 48px;

  /* 按钮内边距 */
  --button-padding-small: 0 16px;
  --button-padding-medium: 0 20px;
  --button-padding-large: 0 24px;
}
```

#### 按钮状态
```css
/* 主要按钮 */
.button-primary {
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-body);
  padding: var(--button-padding-medium);
  height: var(--button-height-medium);
  transition: background 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 2px 5px rgba(99, 91, 255, 0.3);
}

.button-primary:hover {
  background: var(--color-primary-hover);
  box-shadow: 0 4px 8px rgba(99, 91, 255, 0.4);
}

.button-primary:active {
  background: var(--color-primary-active);
  box-shadow: 0 1px 3px rgba(99, 91, 255, 0.3);
}

/* 次要按钮 */
.button-secondary {
  background: white;
  color: var(--color-primary);
  border: 1px solid var(--color-neutral-200);
  border-radius: 4px;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-body);
  padding: var(--button-padding-medium);
  height: var(--button-height-medium);
  transition: all 0.15s ease;
}

.button-secondary:hover {
  border-color: var(--color-neutral-300);
  background: var(--color-neutral-50);
}

/* 文本按钮 */
.button-text {
  background: transparent;
  color: var(--color-primary);
  border: none;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-body);
  padding: 0;
  height: auto;
  transition: color 0.15s ease;
}

.button-text:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

/* 危险按钮 */
.button-danger {
  background: var(--color-error);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-body);
  padding: var(--button-padding-medium);
  height: var(--button-height-medium);
  transition: background 0.15s ease;
}

.button-danger:hover {
  background: var(--color-error-dark);
}
```

#### 圆角规范
- 小按钮：3px
- 中按钮：4px
- 大按钮：6px

### Card（卡片）

#### 使用场景
- 交易记录展示
- 功能模块包装
- 信息卡片
- 数据展示

#### 卡片样式
```css
.card {
  background: white;
  border: 1px solid var(--color-neutral-200);
  border-radius: 8px;
  padding: var(--space-6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.15s ease, border-color 0.15s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  border-color: var(--color-neutral-300);
}

.card-elevated {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.card-compact {
  padding: var(--space-4);
}
```

#### 阴影系统
```css
:root {
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.08);
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 16px 32px rgba(0, 0, 0, 0.18);
}
```

#### 间距规范
- 卡片内边距：24px（标准）、16px（紧凑）
- 卡片间距：24px
- 卡片内元素间距：16px

### Input / Form（输入框与表单）

#### 输入框样式
```css
.input {
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border: 1px solid var(--color-neutral-200);
  border-radius: 4px;
  font-size: var(--font-size-body);
  color: var(--color-neutral-800);
  background: white;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.input:hover {
  border-color: var(--color-neutral-300);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(99, 91, 255, 0.15);
}

.input::placeholder {
  color: var(--color-neutral-400);
}

.input-error {
  border-color: var(--color-error);
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.15);
}

.input-disabled {
  background: var(--color-neutral-50);
  cursor: not-allowed;
  opacity: 0.6;
}
```

#### 表单标签
```css
.form-label {
  display: block;
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-700);
  margin-bottom: var(--space-2);
}

.form-label-required::after {
  content: "*";
  color: var(--color-error);
  margin-left: 2px;
}
```

#### 表单验证
```css
.form-error {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-caption);
  color: var(--color-error);
  margin-top: var(--space-2);
}
```

### Navigation（导航）

#### 侧边栏导航
```css
.sidebar {
  width: 280px;
  background: white;
  border-right: 1px solid var(--color-neutral-200);
  padding: var(--space-6);
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-radius: 4px;
  color: var(--color-neutral-600);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.15s ease;
}

.sidebar-item:hover {
  background: var(--color-neutral-50);
  color: var(--color-neutral-800);
}

.sidebar-item-active {
  background: var(--color-primary-lighter);
  color: var(--color-primary);
}
```

#### 顶部导航
```css
.topbar {
  height: 64px;
  background: white;
  border-bottom: 1px solid var(--color-neutral-200);
  padding: 0 var(--space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topbar-logo {
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-bold);
  color: var(--color-neutral-800);
}

.topbar-nav {
  display: flex;
  gap: var(--space-6);
}

.topbar-nav-item {
  color: var(--color-neutral-600);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: color 0.15s ease;
  padding: var(--space-2) 0;
  border-bottom: 2px solid transparent;
}

.topbar-nav-item:hover {
  color: var(--color-neutral-800);
}

.topbar-nav-item-active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
- **风格类型**：线性图标（Outline）和填充图标（Filled）混合使用
- **线条粗细**：1.5px - 2px
- **圆角处理**：轻微圆角（2px）
- **尺寸规格**：16px, 20px, 24px, 32px
- **颜色规范**：使用中性色或品牌色

### 图标使用规范
```css
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-neutral-500);
}

.icon-small {
  width: 16px;
  height: 16px;
}

.icon-medium {
  width: 20px;
  height: 20px;
}

.icon-large {
  width: 24px;
  height: 24px;
}

.icon-extra-large {
  width: 32px;
  height: 32px;
}

.icon-primary {
  color: var(--color-primary);
}

.icon-success {
  color: var(--color-success);
}

.icon-warning {
  color: var(--color-warning);
}

.icon-error {
  color: var(--color-error);
}

.icon-hover:hover {
  color: var(--color-neutral-700);
}
```

### 插画风格
- **风格定位**：现代、简洁、专业
- **色彩使用**：品牌色为主，辅以中性色
- **设计原则**：
  - 强调专业性和可信度
  - 保持简洁，避免过度装饰
  - 与整体设计语言一致
  - 支持深色模式

### 图标库建议
- 使用自定义图标库
- 保持图标风格统一
- 避免混合使用不同风格的图标
- 优先使用线性图标，填充图标用于强调

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 状态
```css
/* 按钮悬停 */
.button:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

/* 卡片悬停 */
.card:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--color-neutral-300);
}

/* 链接悬停 */
.link:hover {
  color: var(--color-primary);
  text-decoration: underline;
}
```

### Active 状态
```css
/* 按钮按下 */
.button:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

/* 输入框聚焦 */
.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(99, 91, 255, 0.15);
}
```

### Focus 状态
```css
/* 可聚焦元素 */
.focus-visible:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### 动效节奏
```css
:root {
  /* 动效时长 */
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;

  /* 缓动函数 */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 动效原则
- **克制性**：动效应快速、流畅，不干扰用户操作
- **功能性**：动效应服务于功能，提供清晰的反馈
- **一致性**：相同类型的交互应使用相同的动效
- **可预测性**：动效应符合用户预期，不产生困惑
- **优雅性**：动效应平滑、自然，避免突兀

### 操作反馈设计
```css
/* 成功反馈 */
.feedback-success {
  animation: slideIn var(--duration-normal) var(--ease-out);
  background: var(--color-success-light);
  color: var(--color-success);
  border: 1px solid var(--color-success);
  border-radius: 4px;
  padding: var(--space-3) var(--space-4);
}

/* 错误反馈 */
.feedback-error {
  animation: shake var(--duration-fast) var(--ease-in-out);
  background: var(--color-error-light);
  color: var(--color-error);
  border: 1px solid var(--color-error);
  border-radius: 4px;
  padding: var(--space-3) var(--space-4);
}

/* 加载状态 */
.loading {
  animation: spin 1s linear infinite;
}

/* 淡入动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 滑入动画 */
@keyframes slideIn {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 抖动动画 */
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}

/* 旋转动画 */
@keyframes spin {
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
  /* 品牌色 */
  --color-brand-primary: #635BFF;
  --color-brand-primary-hover: #4B45D4;
  --color-brand-primary-active: #3A35A8;

  /* 功能色 */
  --color-success: #2E7D32;
  --color-warning: #F57C00;
  --color-error: #D32F2F;
  --color-info: #1976D2;

  /* 中性色 */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F7F9FC;
  --color-bg-tertiary: #EEF2F6;

  --color-text-primary: #0A2540;
  --color-text-secondary: #42526E;
  --color-text-tertiary: #697386;

  --color-border-default: #E3E8EE;
  --color-border-hover: #C1C9D2;
}
```

### Spacing Tokens
```css
:root {
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
  --spacing-32: 128px;
}
```

### Radius Tokens
```css
:root {
  --radius-none: 0;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-xl: 8px;
  --radius-2xl: 12px;
  --radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.08);
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 16px 32px rgba(0, 0, 0, 0.18);
}
```

### Typography Tokens
```css
:root {
  --font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-family-mono: "SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace;
  
  --text-xs: 12px;
  --text-sm: 13px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 32px;
  --text-4xl: 40px;
  --text-5xl: 48px;

  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  --leading-tight: 1.1;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

### Z-Index Tokens
```css
:root {
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
}
```

### Transition Tokens
```css
:root {
  --transition-fast: 150ms;
  --transition-normal: 200ms;
  --transition-slow: 300ms;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 9. 合法复刻建议（Important）

### ✅ 可以学习的元素

**设计规则与原则**：
- 专业可信的设计哲学
- 清晰的信息层级
- 一致的间距系统
- 克制的色彩使用
- 简洁的图标风格
- 优雅的动效设计
- 无障碍优先的设计理念

**交互模式**：
- 悬停状态的微妙反馈
- 聚焦状态的清晰指示
- 快速流畅的动效节奏
- 直观的导航结构
- 灵活的布局系统
- 完善的表单验证

**系统架构**：
- Design Token 的命名规范
- 组件的复用性设计
- 响应式布局策略
- 无障碍设计考虑
- 深色模式支持

### ❌ 不应复刻的元素

**品牌元素**：
- Stripe 的品牌 Logo
- 特定的品牌色彩组合
- 品牌字体（如果使用定制字体）
- 品牌插画和图形
- 品牌营销素材

**具体内容**：
- Stripe 的产品截图
- 官方文档内容
- 营销素材和文案
- 客户案例和评价
- API 文档内容

**受保护素材**：
- 官方图标库的特定图标
- 品牌相关的视觉资产
- 商业插画和摄影作品
- 专有组件设计

### 🎯 实施建议

**学习重点**：
1. **设计思维**：理解 Stripe 如何通过设计建立信任
2. **系统构建**：学习其 Design Token 的组织方式
3. **组件设计**：研究其组件的可复用性和灵活性
4. **交互细节**：观察其微交互和反馈机制
5. **无障碍设计**：学习其无障碍最佳实践

**创新方向**：
- 在保持专业风格的基础上，加入自己的品牌特色
- 优化 Stripe 的某些设计缺陷
- 适应特定用户群体的需求
- 结合新的设计趋势和技术
- 增强深色模式体验

**合规操作**：
- 使用开源图标库（如 Heroicons、Lucide Icons）
- 选择免费或授权的字体
- 创建原创插画和图形
- 编写原创文案和内容
- 参考而非复制具体实现
- 遵守知识产权法律法规

---

## 附录：快速参考

### 常用颜色
- 主色：`#635BFF`
- 文本：`#0A2540`
- 边框：`#E3E8EE`
- 背景：`#FFFFFF`

### 常用间距
- 小间距：8px
- 标准间距：16px
- 大间距：24px

### 常用圆角
- 小圆角：4px
- 中圆角：6px
- 大圆角：8px

### 常用阴影
- 小阴影：`0 1px 2px rgba(0, 0, 0, 0.08)`
- 中阴影：`0 4px 8px rgba(0, 0, 0, 0.12)`
- 大阴影：`0 8px 16px rgba(0, 0, 0, 0.15)`

---

**设计系统版本**：1.0.0  
**最后更新**：2024  
**维护者**：Design System Team