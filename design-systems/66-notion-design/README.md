# Notion Design System

## 1. 设计风格总览（Design DNA）

**核心关键词**：极简主义、模块化、知识驱动、灵活性、生产力工具

**适用产品类型**：知识管理工具、协作平台、生产力应用、文档管理系统、笔记应用

**设计哲学**：
- 强调内容优先，界面隐形
- 模块化设计，高度可定制
- 清晰的信息层级和视觉节奏
- 极简的视觉语言，减少认知负担
- 支持多种内容类型的统一呈现

---

## 2. 颜色系统（Color System）

### 主品牌色
```css
:root {
  /* 主品牌色 - 蓝色 */
  --color-primary: #2383E2;
  --color-primary-hover: #1A6BC0;
  --color-primary-active: #145296;
  --color-primary-light: #5BA8F0;
  --color-primary-lighter: #93C9F7;
  --color-primary-dark: #1A6BC0;
  --color-primary-darker: #145296;
}
```

**使用场景**：
- 主要操作按钮
- 重要链接
- 选中状态
- 强调元素

### 辅助色
```css
:root {
  /* 辅助色 - 灰色系 */
  --color-secondary: #37352F;
  --color-secondary-hover: #2F2D28;
  --color-secondary-active: #272521;
  --color-secondary-light: #787774;
  --color-secondary-lighter: #9B9A97;
  --color-secondary-dark: #2F2D28;
  --color-secondary-darker: #272521;
}
```

**使用场景**：
- 次要操作
- 文本内容
- 边框线条
- 装饰元素

### 中性色
```css
:root {
  /* 中性色 - 灰度系统 */
  --color-neutral-50: #FFFFFF;
  --color-neutral-100: #F7F6F3;
  --color-neutral-200: #EFECE6;
  --color-neutral-300: #E3E0DA;
  --color-neutral-400: #D3D0CB;
  --color-neutral-500: #9B9A97;
  --color-neutral-600: #787774;
  --color-neutral-700: #5F5E5B;
  --color-neutral-800: #37352F;
  --color-neutral-900: #2F2D28;
}
```

**使用场景**：
- 背景色：neutral-50, neutral-100
- 文本：neutral-800, neutral-600
- 边框：neutral-300, neutral-400
- 禁用状态：neutral-500

### 语义色
```css
:root {
  /* 成功色 */
  --color-success: #0F7B6C;
  --color-success-light: #E6F4F2;
  --color-success-dark: #0A5A4F;

  /* 警告色 */
  --color-warning: #D9730D;
  --color-warning-light: #FEF3E7;
  --color-warning-dark: #A8580A;

  /* 错误色 */
  --color-error: #E03E3E;
  --color-error-light: #FEECEC;
  --color-error-dark: #B03030;

  /* 信息色 */
  --color-info: #2383E2;
  --color-info-light: #E8F4FD;
  --color-info-dark: #1A6BC0;
}
```

**使用场景**：
- 成功状态：任务完成、操作成功
- 警告状态：需要注意的信息
- 错误状态：操作失败、验证错误
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
  --neutral-bg-primary: var(--color-neutral-50);
  --neutral-bg-secondary: var(--color-neutral-100);
  --neutral-text-primary: var(--color-neutral-800);
  --neutral-text-secondary: var(--color-neutral-600);
  --neutral-border: var(--color-neutral-300);
}
```

---

## 3. 字体与排版（Typography）

### 字体家族
```css
:root {
  /* 英文字体 */
  --font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  
  /* 等宽字体（代码） */
  --font-family-mono: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
}
```

### 字号层级
```css
:root {
  /* 标题层级 */
  --font-size-h1: 40px;
  --font-size-h2: 32px;
  --font-size-h3: 24px;
  --font-size-h4: 20px;
  --font-size-h5: 18px;
  --font-size-h6: 16px;

  /* 正文层级 */
  --font-size-body-large: 16px;
  --font-size-body: 14px;
  --font-size-body-small: 13px;

  /* 辅助文本 */
  --font-size-caption: 12px;
  --font-size-label: 11px;
}
```

### 行高系统
```css
:root {
  --line-height-tight: 1.2;
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
}

/* H2 - 区块标题 */
.typography-h2 {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: -0.01em;
}

/* H3 - 小节标题 */
.typography-h3 {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
}

/* Body Large - 主要内容 */
.typography-body-large {
  font-size: var(--font-size-body-large);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
}

/* Body - 标准正文 */
.typography-body {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
}

/* Caption - 辅助说明 */
.typography-caption {
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-600);
}

/* Label - 标签文本 */
.typography-label {
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### 排版节奏
- 标题与正文之间：24px 间距
- 段落之间：16px 间距
- 列表项之间：8px 间距
- 标题层级递减：8px 字号差

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心
```css
:root {
  /* 版心宽度 */
  --page-width-narrow: 768px;
  --page-width-normal: 900px;
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
  --grid-gutter: 16px;
  --grid-gutter-large: 24px;
  
  /* 栅格边距 */
  --grid-margin: 24px;
  --grid-margin-large: 48px;
}
```

### 留白系统
```css
:root {
  /* 基础间距单位 */
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
}
```

### 布局密度
- **高密度**：列表视图、表格、紧凑型卡片
- **中密度**：标准内容页面、文档编辑器
- **低密度**：欢迎页面、设置页面、空状态

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
  grid-template-columns: 240px 1fr;
  gap: var(--space-6);
}

/* 三栏布局 */
.layout-three-column {
  display: grid;
  grid-template-columns: 240px 1fr 280px;
  gap: var(--space-6);
}

/* 内容居中 */
.layout-centered {
  max-width: var(--page-width-normal);
  margin: 0 auto;
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
  --button-height-small: 28px;
  --button-height-medium: 32px;
  --button-height-large: 40px;

  /* 按钮内边距 */
  --button-padding-small: 0 12px;
  --button-padding-medium: 0 16px;
  --button-padding-large: 0 20px;
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
  transition: background 0.15s ease;
}

.button-primary:hover {
  background: var(--color-primary-hover);
}

.button-primary:active {
  background: var(--color-primary-active);
}

/* 次要按钮 */
.button-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  font-weight: var(--font-weight-medium);
  transition: all 0.15s ease;
}

.button-secondary:hover {
  background: var(--color-primary-lighter);
}

/* 文本按钮 */
.button-text {
  background: transparent;
  color: var(--color-primary);
  border: none;
  font-weight: var(--font-weight-medium);
  transition: color 0.15s ease;
}

.button-text:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}
```

#### 圆角规范
- 小按钮：3px
- 中按钮：4px
- 大按钮：6px

### Card（卡片）

#### 使用场景
- 页面区块容器
- 内容展示单元
- 功能模块包装
- 信息卡片

#### 卡片样式
```css
.card {
  background: var(--color-neutral-50);
  border: 1px solid var(--color-neutral-300);
  border-radius: 6px;
  padding: var(--space-4);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.card:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.card-elevated {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

#### 阴影系统
```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 2px 4px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

#### 间距规范
- 卡片内边距：16px（标准）、24px（宽松）
- 卡片间距：16px
- 卡片内元素间距：12px

### Input / Form（输入框与表单）

#### 输入框样式
```css
.input {
  width: 100%;
  height: 32px;
  padding: 0 12px;
  border: 1px solid var(--color-neutral-300);
  border-radius: 4px;
  font-size: var(--font-size-body);
  color: var(--color-neutral-800);
  background: var(--color-neutral-50);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.input:hover {
  border-color: var(--color-neutral-400);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-lighter);
}

.input::placeholder {
  color: var(--color-neutral-500);
}

.input-error {
  border-color: var(--color-error);
}

.input-error:focus {
  box-shadow: 0 0 0 2px var(--color-error-light);
}
```

#### 表单标签
```css
.form-label {
  display: block;
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-800);
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
  gap: var(--space-1);
  font-size: var(--font-size-caption);
  color: var(--color-error);
  margin-top: var(--space-1);
}
```

### Navigation（导航）

#### 侧边栏导航
```css
.sidebar {
  width: 240px;
  background: var(--color-neutral-50);
  border-right: 1px solid var(--color-neutral-300);
  padding: var(--space-4);
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  border-radius: 4px;
  color: var(--color-neutral-800);
  font-size: var(--font-size-body);
  cursor: pointer;
  transition: background 0.15s ease;
}

.sidebar-item:hover {
  background: var(--color-neutral-200);
}

.sidebar-item-active {
  background: var(--color-primary-lighter);
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
}
```

#### 顶部导航
```css
.topbar {
  height: 48px;
  background: var(--color-neutral-50);
  border-bottom: 1px solid var(--color-neutral-300);
  padding: 0 var(--space-6);
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
  gap: var(--space-4);
}

.topbar-nav-item {
  color: var(--color-neutral-600);
  font-size: var(--font-size-body);
  cursor: pointer;
  transition: color 0.15s ease;
}

.topbar-nav-item:hover {
  color: var(--color-neutral-800);
}

.topbar-nav-item-active {
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
- **风格类型**：线性图标（Outline）
- **线条粗细**：1.5px - 2px
- **圆角处理**：轻微圆角（2px）
- **尺寸规格**：16px, 20px, 24px
- **颜色规范**：使用中性色或品牌色

### 图标使用规范
```css
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-neutral-600);
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

.icon-primary {
  color: var(--color-primary);
}

.icon-hover:hover {
  color: var(--color-neutral-800);
}
```

### 插画风格
- **风格定位**：极简、抽象、几何化
- **色彩使用**：单色或双色，与品牌色协调
- **设计原则**：
  - 弱化视觉干扰，不抢夺内容注意力
  - 仅用于辅助理解，不作为装饰元素
  - 保持简洁，避免过度细节
  - 与整体设计语言一致

### 图标库建议
- 使用线性图标库（如 Heroicons、Lucide Icons）
- 保持图标风格统一
- 避免混合使用不同风格的图标

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
  border-color: var(--color-neutral-400);
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
  box-shadow: 0 0 0 2px var(--color-primary-lighter);
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

### 操作反馈设计
```css
/* 成功反馈 */
.feedback-success {
  animation: slideIn var(--duration-normal) var(--ease-out);
  background: var(--color-success-light);
  color: var(--color-success);
  border: 1px solid var(--color-success);
}

/* 错误反馈 */
.feedback-error {
  animation: shake var(--duration-fast) var(--ease-in-out);
  background: var(--color-error-light);
  color: var(--color-error);
  border: 1px solid var(--color-error);
}

/* 加载状态 */
.loading {
  animation: spin 1s linear infinite;
}
```

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
  /* 品牌色 */
  --color-brand-primary: #2383E2;
  --color-brand-primary-hover: #1A6BC0;
  --color-brand-primary-active: #145296;

  /* 功能色 */
  --color-success: #0F7B6C;
  --color-warning: #D9730D;
  --color-error: #E03E3E;
  --color-info: #2383E2;

  /* 中性色 */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F7F6F3;
  --color-bg-tertiary: #EFECE6;

  --color-text-primary: #37352F;
  --color-text-secondary: #787774;
  --color-text-tertiary: #9B9A97;

  --color-border-default: #E3E0DA;
  --color-border-hover: #D3D0CB;
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
  --radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.12);
}
```

### Typography Tokens
```css
:root {
  --font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  
  --text-xs: 11px;
  --text-sm: 12px;
  --text-base: 14px;
  --text-lg: 16px;
  --text-xl: 18px;
  --text-2xl: 20px;
  --text-3xl: 24px;
  --text-4xl: 32px;
  --text-5xl: 40px;

  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  --leading-tight: 1.2;
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

---

## 9. 合法复刻建议（Important）

### ✅ 可以学习的元素

**设计规则与原则**：
- 极简主义的设计哲学
- 内容优先的布局策略
- 模块化的组件设计
- 清晰的信息层级
- 一致的间距系统
- 克制的色彩使用
- 简洁的图标风格

**交互模式**：
- 悬停状态的微妙反馈
- 聚焦状态的清晰指示
- 快速流畅的动效节奏
- 直观的导航结构
- 灵活的布局系统

**系统架构**：
- Design Token 的命名规范
- 组件的复用性设计
- 响应式布局策略
- 无障碍设计考虑

### ❌ 不应复刻的元素

**品牌元素**：
- Notion 的品牌 Logo
- 特定的品牌色彩组合
- 品牌字体（如果使用定制字体）
- 品牌插画和图形

**具体内容**：
- Notion 的产品截图
- 官方文档内容
- 营销素材和文案
- 客户案例和评价

**受保护素材**：
- 官方图标库的特定图标
- 品牌相关的视觉资产
- 商业插画和摄影作品

### 🎯 实施建议

**学习重点**：
1. **设计思维**：理解 Notion 如何通过极简设计提升生产力
2. **系统构建**：学习其 Design Token 的组织方式
3. **组件设计**：研究其组件的可复用性和灵活性
4. **交互细节**：观察其微交互和反馈机制

**创新方向**：
- 在保持极简风格的基础上，加入自己的品牌特色
- 优化 Notion 的某些设计缺陷
- 适应特定用户群体的需求
- 结合新的设计趋势和技术

**合规操作**：
- 使用开源图标库（如 Heroicons、Lucide Icons）
- 选择免费或授权的字体
- 创建原创插画和图形
- 编写原创文案和内容
- 参考而非复制具体实现

---

## 附录：快速参考

### 常用颜色
- 主色：`#2383E2`
- 文本：`#37352F`
- 边框：`#E3E0DA`
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
- 小阴影：`0 1px 2px rgba(0, 0, 0, 0.04)`
- 中阴影：`0 4px 6px rgba(0, 0, 0, 0.1)`
- 大阴影：`0 10px 15px rgba(0, 0, 0, 0.1)`

---

**设计系统版本**：1.0.0  
**最后更新**：2024  
**维护者**：Design System Team