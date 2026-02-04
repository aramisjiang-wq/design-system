# Bootstrap 设计系统

## 1. 设计风格总览（Design DNA）

### 风格关键词
- **移动优先**：从小屏幕开始设计，逐步增强到大屏幕
- **响应式**：自适应不同设备和屏幕尺寸
- **实用性**：提供开箱即用的组件和样式
- **一致性**：跨浏览器、跨设备保持统一的视觉语言

### 适用产品类型
- **Web应用**：现代Web应用、企业级产品
- **移动应用**：移动端网站、混合应用
- **快速原型**：快速构建原型和MVP
- **企业后台**：管理后台、数据仪表盘

### 设计价值观
- **移动优先**：优先考虑移动端体验
- **渐进增强**：从小屏幕开始，逐步增强
- **实用性至上**：提供实用的组件和工具
- **社区驱动**：开源社区共同维护和改进

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
```css
:root {
  /* 蓝色主色 */
  --bs-primary: #0d6efd;
  --bs-primary-rgb: 13, 110, 253;
  --bs-primary-text-emphasis: #052c65;
  --bs-primary-bg-subtle: #cfe2ff;
  --bs-primary-border-subtle: #9ec5fe;

  /* 悬停和激活状态 */
  --bs-primary-hover: #0b5ed7;
  --bs-primary-active: #0a58ca;
}
```

**使用场景**：
- 主色：主要操作按钮、链接、选中状态
- 主色-hover：鼠标悬停状态
- 主色-active：点击/激活状态
- 主色-bg-subtle：背景色、标签背景
- 主色-border-subtle：边框色、分割线

### 辅助色板（Auxiliary Colors）
```css
:root {
  /* 成功色 */
  --bs-success: #198754;
  --bs-success-rgb: 25, 135, 84;
  --bs-success-text-emphasis: #0a3622;
  --bs-success-bg-subtle: #d1e7dd;
  --bs-success-border-subtle: #a3cfbb;

  /* 信息色 */
  --bs-info: #0dcaf0;
  --bs-info-rgb: 13, 202, 240;
  --bs-info-text-emphasis: #055160;
  --bs-info-bg-subtle: #cff4fc;
  --bs-info-border-subtle: #9eeaf9;

  /* 警告色 */
  --bs-warning: #ffc107;
  --bs-warning-rgb: 255, 193, 7;
  --bs-warning-text-emphasis: #664d03;
  --bs-warning-bg-subtle: #fff3cd;
  --bs-warning-border-subtle: #ffecb5;

  /* 危险色 */
  --bs-danger: #dc3545;
  --bs-danger-rgb: 220, 53, 69;
  --bs-danger-text-emphasis: #58151c;
  --bs-danger-bg-subtle: #f8d7da;
  --bs-danger-border-subtle: #f1aeb5;

  /* 浅色 */
  --bs-light: #f8f9fa;
  --bs-light-rgb: 248, 249, 250;
  --bs-light-text-emphasis: #495057;
  --bs-light-bg-subtle: #fcfcfd;
  --bs-light-border-subtle: #e9ecef;

  /* 深色 */
  --bs-dark: #212529;
  --bs-dark-rgb: 33, 37, 41;
  --bs-dark-text-emphasis: #495057;
  --bs-dark-bg-subtle: #ced4da;
  --bs-dark-border-subtle: #adb5bd;
}
```

**使用场景**：
- 成功色：操作成功、状态正常、正向反馈
- 信息色：一般提示、信息展示、中性反馈
- 警告色：注意事项、警告提示、需要用户关注
- 危险色：操作失败、错误提示、危险操作
- 浅色：背景色、辅助背景
- 深色：文字色、强调文字

### 中性色（Neutral Colors）
```css
:root {
  /* 文字颜色 */
  --bs-body-color: #212529;
  --bs-body-color-rgb: 33, 37, 41;

  /* 背景颜色 */
  --bs-body-bg: #ffffff;
  --bs-body-bg-rgb: 255, 255, 255;

  /* 边框颜色 */
  --bs-border-color: #dee2e6;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);

  /* 次要文字 */
  --bs-secondary-color: rgba(33, 37, 41, 0.75);

  /* 强调文字 */
  --bs-emphasis-color: #000000;

  /* 链接颜色 */
  --bs-link-color: #0d6efd;
  --bs-link-hover-color: #0a58ca;
}
```

**使用场景**：
- 文字颜色：主要文字、正文内容
- 背景颜色：基础背景、页面背景
- 边框颜色：常规边框、分割线
- 次要文字：辅助文字、次要信息
- 强调文字：重要信息、强调内容
- 链接颜色：链接文字、可点击元素

### Design Token 命名建议
```css
/* 颜色 Token 命名规范 */
--bs-{category}-{variant}-{state}

/* 示例 */
--bs-primary
--bs-success-bg-subtle
--bs-body-color
--bs-border-color
```

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
:root {
  /* 系统字体栈 */
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

  /* 等宽字体 */
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}
```

### 字号层级（Font Size Scale）
```css
:root {
  /* 根字号 */
  --bs-font-size-base: 1rem;

  /* 标题字号 */
  --bs-h1-font-size: calc(1.375rem + 1.5vw);
  --bs-h2-font-size: calc(1.325rem + 0.9vw);
  --bs-h3-font-size: calc(1.3rem + 0.6vw);
  --bs-h4-font-size: calc(1.275rem + 0.3vw);
  --bs-h5-font-size: 1.25rem;
  --bs-h6-font-size: 1rem;

  /* 其他字号 */
  --bs-small-font-size: 0.875em;
  --bs-sub-sup-font-size: 0.75em;
}
```

**使用场景**：
- H1：页面主标题
- H2：章节标题
- H3：子章节标题
- H4：小组件标题
- H5：副标题
- H6：小标题
- Base：正文内容
- Small：辅助文字
- Sub/Sup：上标、下标

### 行高（Line Height）
```css
:root {
  --bs-line-height-base: 1.5;
  --bs-line-height-sm: 1.25;
  --bs-line-height-lg: 2;
}
```

**使用场景**：
- Base：正文内容
- Sm：标题、紧凑内容
- Lg：宽松内容、大段文字

### 字重（Font Weight）
```css
:root {
  --bs-font-weight-lighter: lighter;
  --bs-font-weight-light: 300;
  --bs-font-weight-normal: 400;
  --bs-font-weight-bold: 700;
  --bs-font-weight-bolder: 900;
}
```

**使用场景**：
- Lighter：极轻字重
- Light：轻字重
- Normal：正常字重（默认）
- Bold：粗字重
- Bolder：极粗字重

### 排版规则
```css
:root {
  /* 字间距 */
  --bs-letter-spacing-base: 0;

  /* 段落间距 */
  --bs-paragraph-margin-bottom: 1rem;

  /* 标题间距 */
  --bs-headings-margin-bottom: 0.5rem;
  --bs-headings-font-weight: 500;
  --bs-headings-line-height: 1.2;
}
```

### 响应式排版
```css
/* 响应式标题字号 */
@media (min-width: 1200px) {
  :root {
    --bs-h1-font-size: 2.5rem;
    --bs-h2-font-size: 2rem;
    --bs-h3-font-size: 1.75rem;
    --bs-h4-font-size: 1.5rem;
  }
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心（Container Width）
```css
:root {
  /* 容器最大宽度 */
  --bs-breakpoint-xs: 0;
  --bs-breakpoint-sm: 576px;
  --bs-breakpoint-md: 768px;
  --bs-breakpoint-lg: 992px;
  --bs-breakpoint-xl: 1200px;
  --bs-breakpoint-xxl: 1400px;
}
```

### 栅格系统（Grid System）
```css
:root {
  /* 栅格列数 */
  --bs-grid-columns: 12;

  /* 栅格间距 */
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;

  /* 容器内边距 */
  --bs-container-padding-x: 1.5rem;
}
```

**栅格使用规则**：
- 12列栅格系统，支持灵活的列组合
- 响应式断点：xs（<576px）、sm（≥576px）、md（≥768px）、lg（≥992px）、xl（≥1200px）、xxl（≥1400px）
- 栅格间距：1.5rem（24px）
- 容器内边距：1.5rem（24px）

### 间距系统（Spacing System）
```css
:root {
  /* 间距单位 */
  --bs-spacer: 1rem;

  /* 间距层级 */
  --bs-0: 0;
  --bs-1: 0.25rem;
  --bs-2: 0.5rem;
  --bs-3: 1rem;
  --bs-4: 1.5rem;
  --bs-5: 3rem;
}
```

**使用场景**：
- 0：无间距
- 1：细边框、分割线（4px）
- 2：小元素间距、图标与文字间距（8px）
- 3：常规元素间距、按钮内边距（16px）
- 4：卡片内边距、模块间距（24px）
- 5：大模块间距、章节间距（48px）

### 留白密度（White Space Density）
```css
:root {
  /* 内边距 */
  --bs-padding-y: 0.5rem;
  --bs-padding-x: 0.75rem;

  /* 边距 */
  --bs-margin-y: 0.5rem;
  --bs-margin-x: 0.75rem;
}
```

**信息密度判断**：
- 紧凑模式：数据密集型页面、表格、列表
- 默认模式：常规页面、表单、卡片
- 宽松模式：展示型页面、营销页面

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

#### 组件概述
- 组件名称：按钮（Button）
- 组件描述：触发操作的主要交互组件
- 适用场景：表单提交、操作触发、导航跳转

#### 组件变体
```css
/* 主按钮 */
.btn-primary {
  color: #fff;
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

/* 次按钮 */
.btn-secondary {
  color: #fff;
  background-color: var(--bs-secondary);
  border-color: var(--bs-secondary);
}

/* 成功按钮 */
.btn-success {
  color: #fff;
  background-color: var(--bs-success);
  border-color: var(--bs-success);
}

/* 危险按钮 */
.btn-danger {
  color: #fff;
  background-color: var(--bs-danger);
  border-color: var(--bs-danger);
}

/* 警告按钮 */
.btn-warning {
  color: #000;
  background-color: var(--bs-warning);
  border-color: var(--bs-warning);
}

/* 信息按钮 */
.btn-info {
  color: #000;
  background-color: var(--bs-info);
  border-color: var(--bs-info);
}

/* 浅色按钮 */
.btn-light {
  color: #000;
  background-color: var(--bs-light);
  border-color: var(--bs-light);
}

/* 深色按钮 */
.btn-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-dark);
}

/* 链接按钮 */
.btn-link {
  color: var(--bs-link-color);
  background-color: transparent;
  border-color: transparent;
}
```

#### 组件尺寸
```css
/* 小号按钮 */
.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

/* 中号按钮（默认） */
.btn {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
}

/* 大号按钮 */
.btn-lg {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
}
```

#### 组件状态
```css
/* 悬停状态 */
.btn:hover {
  color: #fff;
  background-color: var(--bs-primary-hover);
  border-color: var(--bs-primary-hover);
}

/* 激活状态 */
.btn:active {
  color: #fff;
  background-color: var(--bs-primary-active);
  border-color: var(--bs-primary-active);
}

/* 禁用状态 */
.btn:disabled {
  pointer-events: none;
  opacity: 0.65;
}
```

#### 组件圆角
```css
:root {
  --bs-btn-border-radius: 0.375rem;
}
```

### Card（卡片）

#### 组件概述
- 组件名称：卡片（Card）
- 组件描述：内容容器组件，用于分组展示信息
- 适用场景：信息展示、数据展示、内容分组

#### 组件样式
```css
.card {
  background-color: var(--bs-body-bg);
  border: 1px solid var(--bs-border-color);
  border-radius: var(--bs-card-border-radius);
}

.card-body {
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
}

.card-title {
  margin-bottom: var(--bs-card-title-spacer-y);
}

.card-text {
  margin-bottom: var(--bs-card-spacer-y);
}
```

#### 组件圆角
```css
:root {
  --bs-card-border-radius: 0.375rem;
  --bs-card-inner-border-radius: calc(0.375rem - 1px);
  --bs-card-cap-padding-y: 0.5rem;
  --bs-card-cap-padding-x: 1rem;
  --bs-card-cap-bg: rgba(0, 0, 0, 0.03);
  --bs-card-cap-color: ;
  --bs-card-height: ;
  --bs-card-color: ;
  --bs-card-bg: var(--bs-body-bg);
  --bs-card-img-overlay-padding: 1rem;
  --bs-card-group-margin: 0.75rem;
  --bs-card-spacer-y: 1rem;
  --bs-card-spacer-x: 1rem;
  --bs-card-title-spacer-y: 0.5rem;
  --bs-card-subtitle-color: ;
  --bs-card-border-width: var(--bs-border-width);
  --bs-card-border-color: var(--bs-border-color-translucent);
  --bs-card-border-radius: var(--bs-border-radius);
  --bs-card-box-shadow: ;
  --bs-card-cap-radius: var(--bs-inner-border-radius);
}
```

### Input（输入框）

#### 组件概述
- 组件名称：输入框（Input）
- 组件描述：文本输入组件，用于用户输入
- 适用场景：表单输入、搜索框、文本编辑

#### 组件样式
```css
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
  background-clip: padding-box;
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.form-control:disabled {
  background-color: var(--bs-secondary-bg);
  opacity: 1;
}
```

#### 组件尺寸
```css
/* 小号输入框 */
.form-control-sm {
  min-height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

/* 中号输入框（默认） */
.form-control {
  min-height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
}

/* 大号输入框 */
.form-control-lg {
  min-height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
}
```

### Form（表单）

#### 组件概述
- 组件名称：表单（Form）
- 组件描述：表单容器组件，用于组织表单元素
- 适用场景：数据录入、用户注册、设置配置

#### 组件样式
```css
.form-label {
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-secondary-color);
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-success-text);
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-danger-text);
}
```

### Navigation（导航）

#### 组件概述
- 组件名称：导航（Navigation）
- 组件描述：页面导航组件，用于页面切换
- 适用场景：侧边栏导航、顶部导航、面包屑

#### 组件样式
```css
/* 导航链接 */
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: var(--bs-nav-link-color);
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
}

.nav-link:hover {
  color: var(--bs-nav-link-hover-color);
}

.nav-link:focus-visible {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

/* 面包屑 */
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-bottom: 1rem;
  list-style: none;
}

.breadcrumb-item a {
  color: var(--bs-primary);
  text-decoration: none;
}

.breadcrumb-item a:hover {
  text-decoration: underline;
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格（Icon Style）

#### 图标类型
```css
/* Bootstrap Icons */
.bi {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: -0.125em;
  fill: currentcolor;
}
```

#### 图标尺寸
```css
:root {
  --bs-icon-size-1: 1rem;
  --bs-icon-size-2: 1.5rem;
  --bs-icon-size-3: 2rem;
  --bs-icon-size-4: 2.5rem;
  --bs-icon-size-5: 3rem;
}
```

**使用场景**：
- Size 1：按钮内小图标（16px）
- Size 2：文字前缀图标（24px）
- Size 3：常规图标（32px）
- Size 4：重要操作图标（40px）
- Size 5：展示型图标（48px）

### 插画风格（Illustration Style）

#### 插画原则
- **简洁性**：保持简洁明了的设计风格
- **一致性**：保持统一的视觉风格
- **功能性**：插画服务于功能，不装饰
- **可扩展性**：支持不同尺寸和场景

#### 插画使用场景
- **空状态**：无数据、无结果
- **错误状态**：操作失败、系统错误
- **引导状态**：首次使用、功能介绍
- **庆祝状态**：操作成功、任务完成

#### 插画设计原则
- 使用Bootstrap的调色板
- 保持简洁的线条和形状
- 使用适当的圆角（4px）
- 保持一致的视觉风格
- 避免过度装饰

---

## 7. 交互与动效原则（Interaction & Motion）

### 交互行为（Interaction Behavior）

#### Hover（悬停状态）
```css
/* 按钮悬停 */
.btn:hover {
  color: #fff;
  background-color: var(--bs-primary-hover);
  border-color: var(--bs-primary-hover);
}

/* 链接悬停 */
a:hover {
  color: var(--bs-link-hover-color);
}
```

#### Active（激活状态）
```css
/* 按钮激活 */
.btn:active {
  color: #fff;
  background-color: var(--bs-primary-active);
  border-color: var(--bs-primary-active);
}
```

#### Focus（焦点状态）
```css
/* 输入框焦点 */
.form-control:focus {
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

/* 按钮焦点 */
.btn:focus-visible {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
```

### 动效节奏（Motion Timing）

#### 缓动函数（Easing Functions）
```css
:root {
  /* 标准缓动 */
  --bs-transition-base: all 0.2s ease-in-out;

  /* 快速缓动 */
  --bs-transition-fade: opacity 0.15s linear;

  /* 慢速缓动 */
  --bs-transition-collapse: height 0.35s ease;
}
```

#### 动效时长（Motion Duration）
```css
:root {
  /* 快速动效 */
  --bs-duration-fast: 0.15s;

  /* 标准动效 */
  --bs-duration-base: 0.2s;

  /* 慢速动效 */
  --bs-duration-slow: 0.35s;
}
```

### 操作反馈（Feedback）

#### 成功反馈
```css
/* 成功提示 */
.alert-success {
  color: var(--bs-success-text);
  background-color: var(--bs-success-bg-subtle);
  border-color: var(--bs-success-border-subtle);
}
```

#### 错误反馈
```css
/* 错误提示 */
.alert-danger {
  color: var(--bs-danger-text);
  background-color: var(--bs-danger-bg-subtle);
  border-color: var(--bs-danger-border-subtle);
}
```

#### 警告反馈
```css
/* 警告提示 */
.alert-warning {
  color: var(--bs-warning-text);
  background-color: var(--bs-warning-bg-subtle);
  border-color: var(--bs-warning-border-subtle);
}
```

### 动效原则（Motion Principles）
- **简洁性**：动效简洁明了，不复杂
- **一致性**：保持统一的动效风格
- **性能优先**：使用CSS动画，避免JavaScript动画
- **可预测性**：动效可预测，不意外

---

## 8. 可复用 Design Token（Design Tokens）

### Color Tokens
```css
:root {
  /* Primary Colors */
  --bs-primary: #0d6efd;
  --bs-primary-rgb: 13, 110, 253;
  --bs-primary-text-emphasis: #052c65;
  --bs-primary-bg-subtle: #cfe2ff;
  --bs-primary-border-subtle: #9ec5fe;

  /* Success Colors */
  --bs-success: #198754;
  --bs-success-rgb: 25, 135, 84;
  --bs-success-text-emphasis: #0a3622;
  --bs-success-bg-subtle: #d1e7dd;
  --bs-success-border-subtle: #a3cfbb;

  /* Info Colors */
  --bs-info: #0dcaf0;
  --bs-info-rgb: 13, 202, 240;
  --bs-info-text-emphasis: #055160;
  --bs-info-bg-subtle: #cff4fc;
  --bs-info-border-subtle: #9eeaf9;

  /* Warning Colors */
  --bs-warning: #ffc107;
  --bs-warning-rgb: 255, 193, 7;
  --bs-warning-text-emphasis: #664d03;
  --bs-warning-bg-subtle: #fff3cd;
  --bs-warning-border-subtle: #ffecb5;

  /* Danger Colors */
  --bs-danger: #dc3545;
  --bs-danger-rgb: 220, 53, 69;
  --bs-danger-text-emphasis: #58151c;
  --bs-danger-bg-subtle: #f8d7da;
  --bs-danger-border-subtle: #f1aeb5;

  /* Light Colors */
  --bs-light: #f8f9fa;
  --bs-light-rgb: 248, 249, 250;
  --bs-light-text-emphasis: #495057;
  --bs-light-bg-subtle: #fcfcfd;
  --bs-light-border-subtle: #e9ecef;

  /* Dark Colors */
  --bs-dark: #212529;
  --bs-dark-rgb: 33, 37, 41;
  --bs-dark-text-emphasis: #495057;
  --bs-dark-bg-subtle: #ced4da;
  --bs-dark-border-subtle: #adb5bd;

  /* Text Colors */
  --bs-body-color: #212529;
  --bs-body-color-rgb: 33, 37, 41;
  --bs-secondary-color: rgba(33, 37, 41, 0.75);
  --bs-emphasis-color: #000000;

  /* Background Colors */
  --bs-body-bg: #ffffff;
  --bs-body-bg-rgb: 255, 255, 255;

  /* Border Colors */
  --bs-border-color: #dee2e6;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);

  /* Link Colors */
  --bs-link-color: #0d6efd;
  --bs-link-hover-color: #0a58ca;
}
```

### Spacing Tokens
```css
:root {
  --bs-spacer: 1rem;
  --bs-0: 0;
  --bs-1: 0.25rem;
  --bs-2: 0.5rem;
  --bs-3: 1rem;
  --bs-4: 1.5rem;
  --bs-5: 3rem;
}
```

### Radius Tokens
```css
:root {
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-pill: 50rem;
}
```

### Typography Tokens
```css
:root {
  /* Font Family */
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;

  /* Font Size */
  --bs-font-size-base: 1rem;
  --bs-h1-font-size: calc(1.375rem + 1.5vw);
  --bs-h2-font-size: calc(1.325rem + 0.9vw);
  --bs-h3-font-size: calc(1.3rem + 0.6vw);
  --bs-h4-font-size: calc(1.275rem + 0.3vw);
  --bs-h5-font-size: 1.25rem;
  --bs-h6-font-size: 1rem;
  --bs-small-font-size: 0.875em;
  --bs-sub-sup-font-size: 0.75em;

  /* Line Height */
  --bs-line-height-base: 1.5;
  --bs-line-height-sm: 1.25;
  --bs-line-height-lg: 2;

  /* Font Weight */
  --bs-font-weight-lighter: lighter;
  --bs-font-weight-light: 300;
  --bs-font-weight-normal: 400;
  --bs-font-weight-bold: 700;
  --bs-font-weight-bolder: 900;
}
```

### Motion Tokens
```css
:root {
  /* Transition */
  --bs-transition-base: all 0.2s ease-in-out;
  --bs-transition-fade: opacity 0.15s linear;
  --bs-transition-collapse: height 0.35s ease;

  /* Duration */
  --bs-duration-fast: 0.15s;
  --bs-duration-base: 0.2s;
  --bs-duration-slow: 0.35s;
}
```

---

## 9. 合法复刻建议（Legal Replication Advice）

### 可学习的元素（Learnable Elements）

#### 设计原则
✅ **可以学习**：
- 移动优先设计原则：从小屏幕开始设计，逐步增强
- 响应式设计方法：多端适配的设计策略
- 组件化设计思想：可复用、可组合的组件系统
- 实用性设计原则：提供开箱即用的组件和样式
- 社区驱动的设计模式：开源社区共同维护和改进

#### 颜色系统
✅ **可以学习**：
- 主色、辅助色、中性色的色彩体系
- 功能色的使用场景和语义化
- 色彩对比度的可访问性要求
- Design Token的命名规范
- RGB值的定义和使用

#### 字体系统
✅ **可以学习**：
- 系统字体栈的使用
- 字号层级的设计方法
- 行高、字重的使用规则
- 响应式排版的实现策略
- 计算属性的使用（calc()）

#### 布局系统
✅ **可以学习**：
- 12列栅格系统的设计思路
- 响应式断点的设置策略
- 间距系统的建立方法
- 容器系统的设计方法
- 移动优先的布局策略

#### 组件规范
✅ **可以学习**：
- 组件变体的设计方法
- 组件状态的交互设计
- 组件尺寸的规范制定
- 组件圆角的统一原则（4px）
- 组件边框和阴影的使用规则

#### 交互设计
✅ **可以学习**：
- Hover、Active、Focus的交互状态
- 动效节奏的缓动函数
- 操作反馈的设计原则
- 微交互的实现方法
- 动效性能的优化策略

### 不应复刻的元素（Non-Replicable Elements）

#### 品牌元素
❌ **不应复刻**：
- Bootstrap的品牌标识和Logo
- Bootstrap的品牌色彩（#0d6efd）
- Bootstrap的品牌字体（system-ui）
- Bootstrap的品牌插画和图标
- Bootstrap的品牌名称和口号

#### 具体内容
❌ **不应复刻**：
- Bootstrap的具体组件代码
- Bootstrap的具体文案内容
- Bootstrap的具体插画作品
- Bootstrap的具体图标设计
- Bootstrap的具体页面布局

#### 知识产权
❌ **不应复刻**：
- Bootstrap的版权材料
- Bootstrap的专利技术
- Bootstrap的商标和标识
- Bootstrap的商业素材
- Bootstrap的专有设计

### 合法复刻建议

#### 设计系统构建
✅ **建议做法**：
- 学习Bootstrap的设计系统构建方法
- 参考Bootstrap的组件化设计思想
- 借鉴Bootstrap的Design Token体系
- 采用Bootstrap的响应式设计策略
- 遵循Bootstrap的可访问性标准

#### 风格复刻
✅ **建议做法**：
- 创建自己的品牌色彩体系
- 设计自己的组件规范
- 建立自己的Design Token系统
- 制定自己的交互设计原则
- 开发自己的动效规范

#### 法律合规
✅ **建议做法**：
- 确保所有设计元素都是原创
- 避免直接复制Bootstrap的代码
- 不要使用Bootstrap的品牌标识
- 尊重Bootstrap的知识产权
- 遵守MIT开源协议的要求

#### 最佳实践
✅ **建议做法**：
- 学习Bootstrap的设计思想和方法
- 理解Bootstrap的设计原则和价值观
- 借鉴Bootstrap的组件化设计思路
- 参考Bootstrap的Design Token体系
- 建立自己的设计系统和规范

---

## 附录：完整 Design Token 参考

### CSS Variables 完整定义
```css
:root {
  /* Primary Colors */
  --bs-primary: #0d6efd;
  --bs-primary-rgb: 13, 110, 253;
  --bs-primary-text-emphasis: #052c65;
  --bs-primary-bg-subtle: #cfe2ff;
  --bs-primary-border-subtle: #9ec5fe;

  /* Success Colors */
  --bs-success: #198754;
  --bs-success-rgb: 25, 135, 84;
  --bs-success-text-emphasis: #0a3622;
  --bs-success-bg-subtle: #d1e7dd;
  --bs-success-border-subtle: #a3cfbb;

  /* Info Colors */
  --bs-info: #0dcaf0;
  --bs-info-rgb: 13, 202, 240;
  --bs-info-text-emphasis: #055160;
  --bs-info-bg-subtle: #cff4fc;
  --bs-info-border-subtle: #9eeaf9;

  /* Warning Colors */
  --bs-warning: #ffc107;
  --bs-warning-rgb: 255, 193, 7;
  --bs-warning-text-emphasis: #664d03;
  --bs-warning-bg-subtle: #fff3cd;
  --bs-warning-border-subtle: #ffecb5;

  /* Danger Colors */
  --bs-danger: #dc3545;
  --bs-danger-rgb: 220, 53, 69;
  --bs-danger-text-emphasis: #58151c;
  --bs-danger-bg-subtle: #f8d7da;
  --bs-danger-border-subtle: #f1aeb5;

  /* Light Colors */
  --bs-light: #f8f9fa;
  --bs-light-rgb: 248, 249, 250;
  --bs-light-text-emphasis: #495057;
  --bs-light-bg-subtle: #fcfcfd;
  --bs-light-border-subtle: #e9ecef;

  /* Dark Colors */
  --bs-dark: #212529;
  --bs-dark-rgb: 33, 37, 41;
  --bs-dark-text-emphasis: #495057;
  --bs-dark-bg-subtle: #ced4da;
  --bs-dark-border-subtle: #adb5bd;

  /* Text Colors */
  --bs-body-color: #212529;
  --bs-body-color-rgb: 33, 37, 41;
  --bs-secondary-color: rgba(33, 37, 41, 0.75);
  --bs-emphasis-color: #000000;

  /* Background Colors */
  --bs-body-bg: #ffffff;
  --bs-body-bg-rgb: 255, 255, 255;

  /* Border Colors */
  --bs-border-color: #dee2e6;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);

  /* Link Colors */
  --bs-link-color: #0d6efd;
  --bs-link-hover-color: #0a58ca;

  /* Spacing */
  --bs-spacer: 1rem;
  --bs-0: 0;
  --bs-1: 0.25rem;
  --bs-2: 0.5rem;
  --bs-3: 1rem;
  --bs-4: 1.5rem;
  --bs-5: 3rem;

  /* Border Radius */
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-pill: 50rem;

  /* Font Family */
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;

  /* Font Size */
  --bs-font-size-base: 1rem;
  --bs-h1-font-size: calc(1.375rem + 1.5vw);
  --bs-h2-font-size: calc(1.325rem + 0.9vw);
  --bs-h3-font-size: calc(1.3rem + 0.6vw);
  --bs-h4-font-size: calc(1.275rem + 0.3vw);
  --bs-h5-font-size: 1.25rem;
  --bs-h6-font-size: 1rem;
  --bs-small-font-size: 0.875em;
  --bs-sub-sup-font-size: 0.75em;

  /* Line Height */
  --bs-line-height-base: 1.5;
  --bs-line-height-sm: 1.25;
  --bs-line-height-lg: 2;

  /* Font Weight */
  --bs-font-weight-lighter: lighter;
  --bs-font-weight-light: 300;
  --bs-font-weight-normal: 400;
  --bs-font-weight-bold: 700;
  --bs-font-weight-bolder: 900;

  /* Transition */
  --bs-transition-base: all 0.2s ease-in-out;
  --bs-transition-fade: opacity 0.15s linear;
  --bs-transition-collapse: height 0.35s ease;

  /* Duration */
  --bs-duration-fast: 0.15s;
  --bs-duration-base: 0.2s;
  --bs-duration-slow: 0.35s;

  /* Breakpoints */
  --bs-breakpoint-xs: 0;
  --bs-breakpoint-sm: 576px;
  --bs-breakpoint-md: 768px;
  --bs-breakpoint-lg: 992px;
  --bs-breakpoint-xl: 1200px;
  --bs-breakpoint-xxl: 1400px;

  /* Grid */
  --bs-grid-columns: 12;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  --bs-container-padding-x: 1.5rem;

  /* Card */
  --bs-card-border-radius: 0.375rem;
  --bs-card-inner-border-radius: calc(0.375rem - 1px);
  --bs-card-cap-padding-y: 0.5rem;
  --bs-card-cap-padding-x: 1rem;
  --bs-card-cap-bg: rgba(0, 0, 0, 0.03);
  --bs-card-cap-color: ;
  --bs-card-height: ;
  --bs-card-color: ;
  --bs-card-bg: var(--bs-body-bg);
  --bs-card-img-overlay-padding: 1rem;
  --bs-card-group-margin: 0.75rem;
  --bs-card-spacer-y: 1rem;
  --bs-card-spacer-x: 1rem;
  --bs-card-title-spacer-y: 0.5rem;
  --bs-card-subtitle-color: ;
  --bs-card-border-width: var(--bs-border-width);
  --bs-card-border-color: var(--bs-border-color-translucent);
  --bs-card-border-radius: var(--bs-border-radius);
  --bs-card-box-shadow: ;
  --bs-card-cap-radius: var(--bs-inner-border-radius);

  /* Button */
  --bs-btn-border-radius: 0.375rem;

  /* Icon Size */
  --bs-icon-size-1: 1rem;
  --bs-icon-size-2: 1.5rem;
  --bs-icon-size-3: 2rem;
  --bs-icon-size-4: 2.5rem;
  --bs-icon-size-5: 3rem;
}
```

---

## 结语

本设计系统文档基于Bootstrap的设计规范进行了全面的重新优化，涵盖了设计风格总览、颜色系统、字体与排版、布局与栅格系统、核心UI组件规范、图标与插画风格、交互与动效原则、可复用Design Token以及合法复刻建议等9个核心部分。

该设计系统旨在为Web应用提供移动优先、响应式、实用的设计语言，帮助设计师和开发者快速构建高质量的用户界面。通过使用本设计系统，可以确保产品在视觉和交互上的一致性，提升用户体验，降低开发和维护成本。

请注意，本设计系统仅作为学习参考，实际使用时应根据自身品牌和产品需求进行调整和定制，确保符合法律法规和知识产权要求。