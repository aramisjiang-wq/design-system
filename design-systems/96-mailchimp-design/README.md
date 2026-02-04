# Mailchimp Design

## 1. 设计风格总览（Design DNA）

**核心关键词**：友好、专业、可信赖、温暖、清晰

**适合产品类型**：
- SaaS 营销平台
- 邮件营销工具
- CRM 系统
- 数据分析平台
- 中小企业服务工具

**设计哲学**：
Mailchimp 的设计语言强调友好性和专业性并重，通过温暖的色彩、清晰的排版和直观的交互，降低用户使用门槛，同时保持专业可信的品牌形象。设计注重可访问性和包容性，确保所有用户都能轻松使用。

---

## 2. 颜色系统（Color System）

### 主色系统（Primary Colors）

**品牌主色 - 黄色系**
```css
:root {
  /* Mailchimp 品牌主色 - 黄色 */
  --color-primary: #FFE01B;
  --color-primary-hover: #E6CA18;
  --color-primary-active: #CCB415;
  --color-primary-light: #FFE84D;
  --color-primary-lighter: #FFF080;
  --color-primary-dark: #E6CA18;
  --color-primary-darker: #CCB415;
}
```

**使用场景**：
- 主要按钮（CTA）
- 品牌标识
- 重要强调元素
- 导航高亮状态
- 成功提示

### 辅助色系统（Secondary Colors）

**辅助主色 - 蓝色系**
```css
:root {
  /* 辅助主色 - 蓝色 */
  --color-secondary: #007C89;
  --color-secondary-hover: #006670;
  --color-secondary-active: #004F57;
  --color-secondary-light: #3399A3;
  --color-secondary-lighter: #66B6BD;
  --color-secondary-dark: #006670;
  --color-secondary-darker: #004F57;
}
```

**使用场景**：
- 次要按钮
- 信息提示
- 链接状态
- 数据可视化
- 辅助交互元素

### 中性色系统（Neutral Colors）

```css
:root {
  /* 中性色 - 灰色系 */
  --color-neutral-900: #241C15;
  --color-neutral-800: #40332A;
  --color-neutral-700: #5C4A3E;
  --color-neutral-600: #786253;
  --color-neutral-500: #947E6D;
  --color-neutral-400: #B09A87;
  --color-neutral-300: #CCB6A1;
  --color-neutral-200: #E8D2BB;
  --color-neutral-100: #F4E8DD;
  --color-neutral-50: #FAF6F2;
  
  /* 文本颜色 */
  --color-text-primary: #241C15;
  --color-text-secondary: #5C4A3E;
  --color-text-tertiary: #947E6D;
  --color-text-disabled: #CCB6A1;
  
  /* 背景颜色 */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #FAF6F2;
  --color-bg-tertiary: #F4E8DD;
  --color-bg-elevated: #FFFFFF;
  
  /* 边框颜色 */
  --color-border-primary: #E8D2BB;
  --color-border-secondary: #CCB6A1;
  --color-border-focus: #007C89;
}
```

**使用场景**：
- 文本层级（主要/次要/第三级）
- 背景层级（主要/次要/第三级）
- 边框和分隔线
- 禁用状态
- 悬浮层和卡片

### 语义色系统（Semantic Colors）

```css
:root {
  /* 成功色 - 绿色 */
  --color-success: #2F9F5B;
  --color-success-light: #52B37A;
  --color-success-dark: #268049;
  --color-success-bg: #E8F5E9;
  
  /* 警告色 - 橙色 */
  --color-warning: #FF8A00;
  --color-warning-light: #FFA333;
  --color-warning-dark: #E67A00;
  --color-warning-bg: #FFF3E0;
  
  /* 错误色 - 红色 */
  --color-error: #D32F2F;
  --color-error-light: #EF5350;
  --color-error-dark: #C62828;
  --color-error-bg: #FFEBEE;
  
  /* 信息色 - 蓝色 */
  --color-info: #007C89;
  --color-info-light: #3399A3;
  --color-info-dark: #006670;
  --color-info-bg: #E0F7FA;
}
```

**使用场景**：
- 成功状态和确认操作
- 警告提示和注意事项
- 错误提示和失败状态
- 信息提示和帮助说明

### Design Token 命名建议

```css
/* 颜色 Token */
--color-brand-primary: #FFE01B;
--color-brand-secondary: #007C89;
--color-semantic-success: #2F9F5B;
--color-semantic-warning: #FF8A00;
--color-semantic-error: #D32F2F;
--color-semantic-info: #007C89;
--color-neutral-100: #F4E8DD;
--color-neutral-200: #E8D2BB;
--color-neutral-300: #CCB6A1;
--color-neutral-400: #B09A87;
--color-neutral-500: #947E6D;
--color-neutral-600: #786253;
--color-neutral-700: #5C4A3E;
--color-neutral-800: #40332A;
--color-neutral-900: #241C15;
```

---

## 3. 字体与排版（Typography）

### 字体家族

```css
:root {
  /* 主字体 */
  --font-family-primary: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  
  /* 代码字体 */
  --font-family-mono: 'Courier New', Courier, monospace;
  
  /* 字体权重 */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

**字体选择说明**：
- 主字体使用 Helvetica Neue，确保跨平台一致性
- 优先使用系统字体栈，提升加载性能
- 字体权重分级明确，保持视觉层级

### 字号层级

```css
:root {
  /* 标题字号 */
  --font-size-h1: 48px;
  --font-size-h2: 36px;
  --font-size-h3: 28px;
  --font-size-h4: 24px;
  --font-size-h5: 20px;
  --font-size-h6: 16px;
  
  /* 正文字号 */
  --font-size-body-large: 18px;
  --font-size-body: 16px;
  --font-size-body-small: 14px;
  
  /* 辅助字号 */
  --font-size-caption: 12px;
  --font-size-overline: 10px;
}
```

### 行高与字间距

```css
:root {
  /* 行高 */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  
  /* 字间距 */
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.05em;
}
```

### 排版规则

**标题层级**：
```css
h1 {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-text-primary);
}

h2 {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-text-primary);
}

h3 {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
  color: var(--color-text-primary);
}

h4 {
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
  color: var(--color-text-primary);
}

h5 {
  font-size: var(--font-size-h5);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
  color: var(--color-text-primary);
}

h6 {
  font-size: var(--font-size-h6);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
  color: var(--color-text-primary);
}
```

**正文排版**：
```css
body {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
  color: var(--color-text-primary);
}

.body-large {
  font-size: var(--font-size-body-large);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}

.body-small {
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}
```

**辅助文本**：
```css
.caption {
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  color: var(--color-text-tertiary);
}

.overline {
  font-size: var(--font-size-overline);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--color-text-secondary);
}
```

### 排版节奏规则

1. **信息密度**：保持适度信息密度，避免过度拥挤
2. **视觉层级**：通过字号、字重、颜色建立清晰层级
3. **阅读体验**：行高 1.5-1.75 确保良好阅读体验
4. **对齐方式**：左对齐为主，特殊情况居中对齐
5. **最大宽度**：正文最大宽度 75ch，确保可读性

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度

```css
:root {
  /* 版心宽度 */
  --container-width-xs: 100%;
  --container-width-sm: 640px;
  --container-width-md: 768px;
  --container-width-lg: 1024px;
  --container-width-xl: 1200px;
  --container-width-xxl: 1400px;
  
  /* 页面边距 */
  --page-padding-xs: 16px;
  --page-padding-sm: 24px;
  --page-padding-md: 32px;
  --page-padding-lg: 48px;
  --page-padding-xl: 64px;
}
```

### 栅格系统

```css
:root {
  /* 栅格列数 */
  --grid-columns: 12;
  
  /* 栅格间距 */
  --grid-gutter-xs: 8px;
  --grid-gutter-sm: 16px;
  --grid-gutter-md: 24px;
  --grid-gutter-lg: 32px;
  --grid-gutter-xl: 40px;
  
  /* 栅格边距 */
  --grid-margin-xs: 16px;
  --grid-margin-sm: 24px;
  --grid-margin-md: 32px;
  --grid-margin-lg: 48px;
  --grid-margin-xl: 64px;
}
```

### 响应式断点

```css
:root {
  /* 断点定义 */
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --breakpoint-xxl: 1400px;
}
```

**响应式规则**：
- 移动优先设计（Mobile First）
- 断点基于内容而非设备
- 流式布局 + 固定断点结合
- 确保跨设备一致性体验

### 间距系统

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
  --space-7: 28px;
  --space-8: 32px;
  --space-9: 36px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
}
```

### 留白密度

**信息密度判断**：
- 低密度：营销页面、引导页面
- 中密度：仪表盘、列表页面
- 高密度：数据表格、配置页面

**留白原则**：
1. 组件内部间距：8-16px
2. 组件之间间距：16-32px
3. 区块之间间距：32-64px
4. 页面边距：16-64px（响应式）

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

**尺寸规范**：
```css
:root {
  /* 按钮尺寸 */
  --button-height-xs: 28px;
  --button-height-sm: 32px;
  --button-height-md: 40px;
  --button-height-lg: 48px;
  --button-height-xl: 56px;
  
  /* 按钮内边距 */
  --button-padding-x-xs: 8px;
  --button-padding-x-sm: 12px;
  --button-padding-x-md: 16px;
  --button-padding-x-lg: 20px;
  --button-padding-x-xl: 24px;
  
  /* 按钮圆角 */
  --button-radius-xs: 4px;
  --button-radius-sm: 4px;
  --button-radius-md: 6px;
  --button-radius-lg: 8px;
  --button-radius-xl: 8px;
}
```

**按钮状态**：
```css
/* 主要按钮 */
.button-primary {
  background-color: var(--color-primary);
  color: var(--color-text-primary);
  border: none;
  border-radius: var(--button-radius-md);
  padding: 0 var(--button-padding-x-md);
  height: var(--button-height-md);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
}

.button-primary:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 224, 27, 0.3);
}

.button-primary:active {
  background-color: var(--color-primary-active);
  transform: translateY(0);
}

.button-primary:disabled {
  background-color: var(--color-neutral-300);
  color: var(--color-text-disabled);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* 次要按钮 */
.button-secondary {
  background-color: var(--color-secondary);
  color: #FFFFFF;
  border: none;
  border-radius: var(--button-radius-md);
  padding: 0 var(--button-padding-x-md);
  height: var(--button-height-md);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
}

.button-secondary:hover {
  background-color: var(--color-secondary-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 124, 137, 0.3);
}

.button-secondary:active {
  background-color: var(--color-secondary-active);
  transform: translateY(0);
}

/* 幽灵按钮 */
.button-ghost {
  background-color: transparent;
  color: var(--color-secondary);
  border: 2px solid var(--color-secondary);
  border-radius: var(--button-radius-md);
  padding: 0 var(--button-padding-x-md);
  height: var(--button-height-md);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
}

.button-ghost:hover {
  background-color: var(--color-secondary);
  color: #FFFFFF;
  transform: translateY(-1px);
}

.button-ghost:active {
  background-color: var(--color-secondary-active);
  transform: translateY(0);
}

/* 文本按钮 */
.button-text {
  background-color: transparent;
  color: var(--color-secondary);
  border: none;
  border-radius: var(--button-radius-md);
  padding: 0 var(--button-padding-x-sm);
  height: var(--button-height-md);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
}

.button-text:hover {
  background-color: rgba(0, 124, 137, 0.08);
}

.button-text:active {
  background-color: rgba(0, 124, 137, 0.16);
}
```

### Card（卡片）

**卡片规范**：
```css
:root {
  /* 卡片圆角 */
  --card-radius-sm: 8px;
  --card-radius-md: 12px;
  --card-radius-lg: 16px;
  
  /* 卡片阴影 */
  --card-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --card-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.12);
  --card-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.16);
  --card-shadow-hover: 0 12px 32px rgba(0, 0, 0, 0.2);
  
  /* 卡片内边距 */
  --card-padding-sm: 16px;
  --card-padding-md: 24px;
  --card-padding-lg: 32px;
}
```

**卡片样式**：
```css
.card {
  background-color: var(--color-bg-primary);
  border-radius: var(--card-radius-md);
  box-shadow: var(--card-shadow-md);
  padding: var(--card-padding-md);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--card-shadow-hover);
  transform: translateY(-2px);
}

.card-elevated {
  box-shadow: var(--card-shadow-lg);
}

.card-bordered {
  border: 1px solid var(--color-border-primary);
  box-shadow: none;
}

.card-interactive {
  cursor: pointer;
}

.card-interactive:hover {
  box-shadow: var(--card-shadow-hover);
  transform: translateY(-4px);
}
```

**使用场景**：
- 内容展示卡片
- 数据统计卡片
- 功能入口卡片
- 列表项卡片
- 仪表盘卡片

### Input / Form 组件

**输入框规范**：
```css
:root {
  /* 输入框高度 */
  --input-height-sm: 32px;
  --input-height-md: 40px;
  --input-height-lg: 48px;
  
  /* 输入框内边距 */
  --input-padding-x: 12px;
  --input-padding-y: 8px;
  
  /* 输入框圆角 */
  --input-radius: 6px;
  
  /* 输入框边框 */
  --input-border-width: 2px;
  --input-border-color: var(--color-border-primary);
  --input-border-focus: var(--color-border-focus);
  
  /* 输入框阴影 */
  --input-shadow-focus: 0 0 0 3px rgba(0, 124, 137, 0.2);
}
```

**输入框样式**：
```css
.input {
  width: 100%;
  height: var(--input-height-md);
  padding: var(--input-padding-y) var(--input-padding-x);
  border: var(--input-border-width) solid var(--input-border-color);
  border-radius: var(--input-radius);
  font-size: var(--font-size-body);
  font-family: var(--font-family-primary);
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
  transition: all 0.2s ease;
}

.input::placeholder {
  color: var(--color-text-tertiary);
}

.input:hover {
  border-color: var(--color-neutral-400);
}

.input:focus {
  outline: none;
  border-color: var(--input-border-focus);
  box-shadow: var(--input-shadow-focus);
}

.input:disabled {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}

.input-error {
  border-color: var(--color-error);
}

.input-error:focus {
  border-color: var(--color-error);
  box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.2);
}

.input-success {
  border-color: var(--color-success);
}

.input-success:focus {
  border-color: var(--color-success);
  box-shadow: 0 0 0 3px rgba(47, 159, 91, 0.2);
}
```

**表单布局**：
```css
.form-group {
  margin-bottom: var(--space-6);
}

.form-label {
  display: block;
  margin-bottom: var(--space-2);
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}

.form-hint {
  margin-top: var(--space-2);
  font-size: var(--font-size-caption);
  color: var(--color-text-tertiary);
}

.form-error {
  margin-top: var(--space-2);
  font-size: var(--font-size-caption);
  color: var(--color-error);
}
```

### Navigation（导航）

**导航规范**：
```css
:root {
  /* 导航高度 */
  --nav-height-sm: 48px;
  --nav-height-md: 56px;
  --nav-height-lg: 64px;
  
  /* 导航内边距 */
  --nav-padding-x: 24px;
  --nav-padding-y: 12px;
  
  /* 导航项间距 */
  --nav-item-spacing: 8px;
  
  /* 导航圆角 */
  --nav-item-radius: 6px;
}
```

**主导航样式**：
```css
.nav {
  display: flex;
  align-items: center;
  height: var(--nav-height-md);
  padding: 0 var(--nav-padding-x);
  background-color: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border-primary);
}

.nav-brand {
  display: flex;
  align-items: center;
  margin-right: var(--space-8);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--nav-item-spacing);
}

.nav-item {
  display: flex;
  align-items: center;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--nav-item-radius);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-item:hover {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
}

.nav-item.active {
  background-color: rgba(0, 124, 137, 0.08);
  color: var(--color-secondary);
}
```

**侧边栏导航**：
```css
.sidebar {
  width: 240px;
  height: 100%;
  background-color: var(--color-bg-secondary);
  border-right: 1px solid var(--color-border-primary);
}

.sidebar-nav {
  padding: var(--space-4);
}

.sidebar-item {
  display: flex;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--nav-item-radius);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
}

.sidebar-item:hover {
  background-color: rgba(0, 124, 137, 0.08);
  color: var(--color-text-primary);
}

.sidebar-item.active {
  background-color: rgba(0, 124, 137, 0.12);
  color: var(--color-secondary);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格

**图标特征**：
- 风格：线性图标（Outline）为主，填充图标（Filled）为辅
- 线条：2px 线宽，圆角端点
- 圆角：适度圆角，保持友好感
- 比例：24x24px 标准网格，可扩展至 16px、32px、48px

**图标使用规范**：
```css
:root {
  /* 图标尺寸 */
  --icon-size-xs: 12px;
  --icon-size-sm: 16px;
  --icon-size-md: 20px;
  --icon-size-lg: 24px;
  --icon-size-xl: 32px;
  --icon-size-2xl: 48px;
  
  /* 图标颜色 */
  --icon-color-primary: var(--color-text-primary);
  --icon-color-secondary: var(--color-text-secondary);
  --icon-color-tertiary: var(--color-text-tertiary);
  --icon-color-brand: var(--color-primary);
}
```

**图标状态**：
```css
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--icon-color-primary);
  transition: all 0.2s ease;
}

.icon-primary {
  color: var(--icon-color-brand);
}

.icon-secondary {
  color: var(--icon-color-secondary);
}

.icon-tertiary {
  color: var(--icon-color-tertiary);
}

.icon-hover:hover {
  color: var(--icon-color-brand);
  transform: scale(1.1);
}
```

### 插画风格

**插画特征**：
- 风格：扁平化插画，适度渐变
- 色彩：温暖、友好的配色
- 形状：圆润的几何形状
- 细节：适度细节，避免过度复杂
- 情感：积极、友好的情感表达

**插画使用原则**：
1. **辅助理解**：插画用于辅助说明复杂概念
2. **情感连接**：通过插画建立情感连接
3. **品牌一致**：插画风格与品牌形象保持一致
4. **适度使用**：避免过度使用，保持页面简洁
5. **可访问性**：提供 alt 文本，确保可访问性

**插画场景**：
- 空状态（Empty State）
- 错误页面（Error Page）
- 引导页面（Onboarding）
- 功能介绍（Feature Introduction）
- 营销页面（Marketing Page）

---

## 7. 交互与动效原则（Interaction & Motion）

### 交互状态

**Hover 状态**：
- 按钮：背景色变化 + 轻微上移（1-2px）+ 阴影增强
- 卡片：阴影增强 + 轻微上移（2-4px）
- 链接：颜色变化 + 下划线
- 图标：颜色变化 + 轻微放大（1.1x）

**Active 状态**：
- 按钮：背景色加深 + 位置复原
- 卡片：位置复原
- 链接：颜色加深
- 图标：颜色加深 + 缩放复原

**Focus 状态**：
- 输入框：边框颜色变化 + 外发光（3px）
- 按钮：外发光（3px）
- 链接：外发光（2px）

**Disabled 状态**：
- 按钮：降低不透明度 + 禁用光标
- 输入框：背景色变化 + 禁用光标
- 链接：降低不透明度 + 禁用光标

### 动效节奏

**动效时长**：
```css
:root {
  /* 动效时长 */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;
}
```

**缓动函数**：
```css
:root {
  /* 缓动函数 */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

**动效原则**：
1. **克制使用**：动效服务于功能，避免过度使用
2. **自然流畅**：使用自然的缓动函数，避免突兀
3. **性能优先**：使用 CSS transform 和 opacity，避免重排重绘
4. **可访问性**：尊重用户的减少动效偏好设置
5. **一致性**：保持动效风格和时长的一致性

### 操作反馈设计

**即时反馈**：
- 按钮点击：视觉反馈（颜色变化、缩放）
- 输入框：实时验证（边框颜色变化）
- 加载状态：加载指示器（Spinner）
- 成功操作：成功提示（Toast）

**延迟反馈**：
- 表单提交：成功/失败提示
- 数据保存：保存确认
- 异步操作：进度指示器

**反馈形式**：
```css
/* Toast 提示 */
.toast {
  position: fixed;
  top: 24px;
  right: 24px;
  padding: 16px 24px;
  background-color: var(--color-bg-primary);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  gap: 12px;
  animation: slideIn 0.3s ease-out;
}

.toast-success {
  border-left: 4px solid var(--color-success);
}

.toast-error {
  border-left: 4px solid var(--color-error);
}

.toast-warning {
  border-left: 4px solid var(--color-warning);
}

.toast-info {
  border-left: 4px solid var(--color-info);
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
```

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens

```css
:root {
  /* 品牌色 */
  --color-brand-primary: #FFE01B;
  --color-brand-primary-hover: #E6CA18;
  --color-brand-primary-active: #CCB415;
  --color-brand-secondary: #007C89;
  --color-brand-secondary-hover: #006670;
  --color-brand-secondary-active: #004F57;
  
  /* 语义色 */
  --color-semantic-success: #2F9F5B;
  --color-semantic-success-light: #52B37A;
  --color-semantic-success-dark: #268049;
  --color-semantic-success-bg: #E8F5E9;
  --color-semantic-warning: #FF8A00;
  --color-semantic-warning-light: #FFA333;
  --color-semantic-warning-dark: #E67A00;
  --color-semantic-warning-bg: #FFF3E0;
  --color-semantic-error: #D32F2F;
  --color-semantic-error-light: #EF5350;
  --color-semantic-error-dark: #C62828;
  --color-semantic-error-bg: #FFEBEE;
  --color-semantic-info: #007C89;
  --color-semantic-info-light: #3399A3;
  --color-semantic-info-dark: #006670;
  --color-semantic-info-bg: #E0F7FA;
  
  /* 中性色 */
  --color-neutral-50: #FAF6F2;
  --color-neutral-100: #F4E8DD;
  --color-neutral-200: #E8D2BB;
  --color-neutral-300: #CCB6A1;
  --color-neutral-400: #B09A87;
  --color-neutral-500: #947E6D;
  --color-neutral-600: #786253;
  --color-neutral-700: #5C4A3E;
  --color-neutral-800: #40332A;
  --color-neutral-900: #241C15;
  
  /* 文本色 */
  --color-text-primary: #241C15;
  --color-text-secondary: #5C4A3E;
  --color-text-tertiary: #947E6D;
  --color-text-disabled: #CCB6A1;
  
  /* 背景色 */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #FAF6F2;
  --color-bg-tertiary: #F4E8DD;
  --color-bg-elevated: #FFFFFF;
  
  /* 边框色 */
  --color-border-primary: #E8D2BB;
  --color-border-secondary: #CCB6A1;
  --color-border-focus: #007C89;
}
```

### Spacing Tokens

```css
:root {
  /* 间距 */
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 28px;
  --space-8: 32px;
  --space-9: 36px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
}
```

### Radius Tokens

```css
:root {
  /* 圆角 */
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 9999px;
}
```

### Shadow Tokens

```css
:root {
  /* 阴影 */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.16);
  --shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.2);
  --shadow-2xl: 0 16px 48px rgba(0, 0, 0, 0.24);
  
  /* 内阴影 */
  --shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.06);
}
```

### Typography Tokens

```css
:root {
  /* 字体家族 */
  --font-family-primary: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-family-mono: 'Courier New', Courier, monospace;
  
  /* 字体权重 */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* 字号 */
  --font-size-xs: 10px;
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-md: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  --font-size-3xl: 28px;
  --font-size-4xl: 36px;
  --font-size-5xl: 48px;
  
  /* 行高 */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  
  /* 字间距 */
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.05em;
}
```

### Motion Tokens

```css
:root {
  /* 动效时长 */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;
  
  /* 缓动函数 */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Z-Index Tokens

```css
:root {
  /* 层级 */
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

### 可以学习的元素（规则 / 风格）

**✅ 推荐学习**：

1. **色彩系统**：
   - 温暖友好的主色调（黄色）搭配专业辅助色（蓝色）
   - 清晰的语义色系统（成功/警告/错误/信息）
   - 完整的中性色色阶（50-900）

2. **排版系统**：
   - 清晰的字号层级（10px-48px）
   - 合理的行高设置（1.2-1.75）
   - 统一的字体权重分级（400/500/600/700）

3. **间距系统**：
   - 4px 基础单位的倍数系统
   - 一致的组件内边距（8-32px）
   - 合理的组件间距（16-64px）

4. **组件设计**：
   - 清晰的按钮状态（正常/悬停/激活/禁用）
   - 统一的卡片样式（圆角/阴影/内边距）
   - 一致的输入框交互（悬停/聚焦/错误）

5. **交互动效**：
   - 克制的动效使用（100-700ms）
   - 自然的缓动函数
   - 即时的操作反馈

6. **设计原则**：
   - 友好性与专业性并重
   - 清晰的信息层级
   - 良好的可访问性

### 不应复刻的元素（品牌 / 插画 / 内容）

**❌ 禁止复刻**：

1. **品牌元素**：
   - Mailchimp 品牌标识（Logo）
   - 品牌专属插画
   - 品牌专属配色方案（完全一致）
   - 品牌专属字体（如有）

2. **具体内容**：
   - 产品文案和文案风格
   - 具体功能描述
   - 用户案例和评价
   - 营销材料和广告语

3. **视觉素材**：
   - 原始插画作品
   - 原始图标设计
   - 原始摄影作品
   - 原始视频素材

4. **代码实现**：
   - 完整的组件库代码
   - 具体的实现细节
   - 第三方库的集成方式
   - 性能优化技巧

### 合法复刻建议

**设计思路**：
1. **学习原则，而非复制**：理解 Mailchimp 的设计原则，而非直接复制具体实现
2. **建立自己的系统**：基于学习到的原则，建立适合自己产品的设计系统
3. **保持原创性**：在色彩、排版、组件等方面保持原创性
4. **尊重知识产权**：不复制受版权保护的品牌元素和素材

**实施建议**：
1. **色彩系统**：学习 Mailchimp 的色彩搭配逻辑，使用不同的具体色值
2. **排版系统**：学习字号层级和行高设置，使用不同的字体家族
3. **间距系统**：学习 4px 基础单位的倍数系统，调整具体间距值
4. **组件设计**：学习组件状态和交互，设计不同的视觉风格
5. **交互动效**：学习动效原则和时长，调整具体的动效参数

**法律合规**：
1. **商标法**：不使用 Mailchimp 的注册商标和品牌标识
2. **著作权法**：不复制受著作权保护的原创作品
3. **反不正当竞争法**：不进行可能导致混淆的相似设计
4. **商业道德**：尊重原创，保持诚信

---

**总结**：Mailchimp Design 的核心优势在于友好性与专业性的完美平衡，通过温暖的色彩、清晰的排版和直观的交互，降低用户使用门槛，同时保持专业可信的品牌形象。学习其设计原则和系统化思维，建立适合自己产品的设计系统，而非直接复制具体实现。