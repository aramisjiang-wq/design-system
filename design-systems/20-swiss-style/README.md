# Swiss Style Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **功能性**：强调功能和实用性
- **简洁性**：简洁、清晰的设计
- **网格化**：基于网格系统的设计
- **无衬线**：使用无衬线字体
- **客观性**：客观、中立的设计风格

### 适用产品类型
- **企业产品**：企业级、专业、正式产品
- **媒体平台**：新闻、杂志、媒体平台
- **教育应用**：教育、学习、知识平台
- **政府机构**：政府、公共、官方平台

### 设计哲学
Swiss Style（瑞士风格）是20世纪50年代在瑞士发展起来的国际主义设计风格，强调功能性、简洁性和客观性。其核心理念是"形式追随功能"，通过网格系统、无衬线字体和不对称布局，创造出清晰、客观、功能性的视觉体验。Swiss Style强调网格化、简洁性和客观性，通过无衬线字体和网格系统，提供清晰而专业的视觉体验。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
基于Swiss Style调色板：

```css
/* 主色 - 红色 */
--swiss-red-primary: #FF0000;
--swiss-red-light: #FF4D4D;
--swiss-red-dark: #CC0000;

/* 红色变体 */
--swiss-red-50: #FFF0F0;
--swiss-red-100: #FFE0E0;
--swiss-red-200: #FFC0C0;
--swiss-red-300: #FF8080;
--swiss-red-400: #FF4040;
--swiss-red-500: #FF0000;
--swiss-red-600: #CC0000;
--swiss-red-700: #990000;
--swiss-red-800: #660000;
--swiss-red-900: #330000;
```

**使用场景**：
- 红色：品牌识别、主要元素、强调元素
- 红色变体：不同深浅的背景、边框、装饰

### 辅助色（Secondary Colors）
```css
/* 辅助色 - 黑色 */
--swiss-black-primary: #000000;
--swiss-black-light: #333333;
--swiss-black-dark: #000000;

/* 黑色变体 */
--swiss-black-50: #F5F5F5;
--swiss-black-100: #E0E0E0;
--swiss-black-200: #BDBDBD;
--swiss-black-300: #9E9E9E;
--swiss-black-400: #757575;
--swiss-black-500: #616161;
--swiss-black-600: #424242;
--swiss-black-700: #212121;
--swiss-black-800: #000000;
--swiss-black-900: #000000;

/* 辅助色 - 白色 */
--swiss-white-primary: #FFFFFF;
--swiss-white-light: #FFFFFF;
--swiss-white-dark: #F5F5F5;

/* 白色变体 */
--swiss-white-50: #FFFFFF;
--swiss-white-100: #FAFAFA;
--swiss-white-200: #F5F5F5;
--swiss-white-300: #EEEEEE;
--swiss-white-400: #E0E0E0;
--swiss-white-500: #BDBDBD;
--swiss-white-600: #9E9E9E;
--swiss-white-700: #757575;
--swiss-white-800: #616161;
--swiss-white-900: #424242;
```

**使用场景**：
- 黑色：文字、边框、强调元素
- 白色：背景、表面、装饰元素

### 背景色（Background Colors）
```css
/* 背景色 - 纯色背景 */
--swiss-background: #FFFFFF;
--swiss-background-light: #FAFAFA;
--swiss-background-dark: #F5F5F5;

/* 表面色 - 纯色表面 */
--swiss-surface: #FFFFFF;
--swiss-surface-light: #FAFAFA;
--swiss-surface-dark: #F5F5F5;
```

**使用场景**：
- 背景色：页面背景、应用背景、装饰背景
- 表面色：卡片背景、组件背景、弹窗背景

### 语义色（Semantic Colors）
```css
/* 错误状态 */
--swiss-error: #FF0000;
--swiss-error-light: #FF4D4D;
--swiss-error-dark: #CC0000;

/* 警告状态 */
--swiss-warning: #FFA500;
--swiss-warning-light: #FFB84D;
--swiss-warning-dark: #CC8400;

/* 成功状态 */
--swiss-success: #00AA00;
--swiss-success-light: #4DCC4D;
--swiss-success-dark: #008800;

/* 信息状态 */
--swiss-info: #0000FF;
--swiss-info-light: #4D4DFF;
--swiss-info-dark: #0000CC;
```

**使用场景**：
- 错误：操作失败、错误提示、危险操作
- 警告：注意事项、次要提醒、待处理状态
- 成功：操作成功、完成状态、积极反馈
- 信息：一般提示、帮助信息、说明文字

### 文本色（Text Colors）
```css
/* 主要文字 */
--swiss-text-primary: #000000;
--swiss-text-primary-light: rgba(0, 0, 0, 0.87);
--swiss-text-primary-dark: rgba(0, 0, 0, 0.95);

/* 次要文字 */
--swiss-text-secondary: #424242;
--swiss-text-secondary-light: rgba(66, 66, 66, 0.87);
--swiss-text-secondary-dark: rgba(66, 66, 66, 0.6);

/* 禁用文字 */
--swiss-text-disabled: #9E9E9E;
--swiss-text-disabled-light: rgba(158, 158, 158, 0.5);
--swiss-text-disabled-dark: rgba(158, 158, 158, 0.3);
```

**使用场景**：
- 主要文字：标题、重要内容、主要信息
- 次要文字：正文、辅助信息、次要内容
- 禁用文字：禁用状态、不可用元素

### Design Token 命名建议
```
--swiss-{hue}-{shade}
--swiss-{semantic}-{state}

示例：
--swiss-red-500
--swiss-black-600
--swiss-error-dark
--swiss-success-light
```

### 色彩使用原则
1. **简洁色彩**：使用简洁的色彩，创造清晰感
2. **高对比度**：使用高对比度，增强可读性
3. **功能性**：颜色使用服务于功能性
4. **对比度要求**：确保文字与背景有足够对比度（至少4.5:1）
5. **客观性**：通过简洁色彩创造客观感

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
/* 主字体 - 无衬线字体 */
--font-primary: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;

/* 备用字体 - 无衬线字体 */
--font-secondary: 'Inter', 'Roboto', 'Helvetica Neue', sans-serif;

/* 装饰字体 - 无衬线字体 */
--font-display: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
```

**字体选择理由**：
- Helvetica Neue：瑞士风格经典字体，适合标题和正文
- Inter：现代的无衬线字体，适合正文
- Helvetica：经典的无衬线字体，适合装饰和表达专业性

### 字号层级（Font Size Scale）
基于Swiss Style排版系统：

```css
/* 标题层级 */
--font-size-h1: 4.5rem;      /* 72px - 页面主标题 */
--font-size-h2: 3.5rem;       /* 56px - 章节标题 */
--font-size-h3: 2.75rem;         /* 44px - 子章节标题 */
--font-size-h4: 2.25rem;       /* 36px - 卡片标题 */
--font-size-h5: 1.75rem;      /* 28px - 小标题 */
--font-size-h6: 1.5rem;         /* 24px - 微标题 */

/* 副标题层级 */
--font-size-subtitle1: 1.25rem;      /* 20px - 副标题1 */
--font-size-subtitle2: 1.125rem;  /* 18px - 副标题2 */

/* 正文层级 */
--font-size-body1: 1.125rem;      /* 18px - 正文1 */
--font-size-body2: 1rem;  /* 16px - 正文2 */

/* 按钮层级 */
--font-size-button: 1rem;  /* 16px - 按钮 */
--font-size-caption: 0.875rem; /* 14px - 说明文字 */
--font-size-overline: 0.75rem; /* 12px - 标签文字 */
```

### 行高（Line Height）
```css
--line-height-dense: 1.1;    /* 紧凑 - 标题 */
--line-height-normal: 1.5;    /* 标准 - 正文 */
--line-height-relaxed: 1.8;  /* 宽松 - 长文本 */
```

### 字重（Font Weight）
```css
--font-weight-regular: 400;  /* 常规 - 正文 */
--font-weight-bold: 700;     /* 粗体 - 标题 */
--font-weight-black: 900;    /* 极粗 - 装饰标题 */
```

### 字间距（Letter Spacing）
```css
--letter-spacing-tight: -0.02em;  /* 紧凑 - 大标题 */
--letter-spacing-normal: 0;        /* 标准 - 正文 */
--letter-spacing-wide: 0.05em;     /* 宽松 - 小标题 */
--letter-spacing-wider: 0.1em;   /* 更宽 - 标签 */
--letter-spacing-widest: 0.15em;  /* 最宽 - 装饰文字 */
```

### 排版节奏规则
1. **简洁原则**：通过简洁字体和排版创造清晰感
2. **功能性原则**：使用功能性的排版方式，创造专业性
3. **层次清晰**：通过字号、字重、颜色建立清晰的层次结构
4. **网格化**：使用网格化的排版元素，营造瑞士风格效果
5. **客观表达**：通过独特的排版方式表达客观性

### 响应式排版
```css
/* 移动端（< 600dp） */
@media (max-width: 599px) {
    --font-size-h1: 3.5rem;  /* 56px */
    --font-size-h2: 2.75rem; /* 44px */
    --font-size-h3: 2.25rem; /* 36px */
    --font-size-body1: 1rem;   /* 16px */
}

/* 平板端（600dp - 840dp） */
@media (min-width: 600dp) and (max-width: 839px) {
    --font-size-h1: 4rem;    /* 64px */
    --font-size-h2: 3.125rem; /* 50px */
    --font-size-h3: 2.5rem; /* 40px */
    --font-size-body1: 1.0625rem;   /* 17px */
}

/* 桌面端（≥ 840dp） */
@media (min-width: 840px) {
    --font-size-h1: 4.5rem;  /* 72px */
    --font-size-h2: 3.5rem;  /* 56px */
    --font-size-h3: 2.75rem;    /* 44px */
    --font-size-body1: 1.125rem;   /* 18px */
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
--container-max-width: 1200px;  /* 最大宽度 */
--container-padding: 2rem;   /* 内边距 32dp */
--container-margin: 0 auto;     /* 水平居中 */
```

### 栅格系统（Grid System）
基于12列网格系统：

```css
/* 基础栅格 */
--grid-columns: 12;
--grid-gutter: 2rem;  /* 32dp - 栅格间距 */
--grid-margin: 2rem;  /* 32dp - 外边距 */

/* 响应式栅格 */
/* 移动端：4列 */
@media (max-width: 599px) {
    --grid-columns: 4;
    --grid-gutter: 1.5rem;  /* 24dp */
    --grid-margin: 1.5rem;  /* 24dp */
}

/* 平板端：8列 */
@media (min-width: 600px) and (max-width: 839px) {
    --grid-columns: 8;
    --grid-gutter: 1.75rem; /* 28dp */
    --grid-margin: 1.75rem; /* 28dp */
}

/* 桌面端：12列 */
@media (min-width: 840px) {
    --grid-columns: 12;
    --grid-gutter: 2rem; /* 32dp */
    --grid-margin: 2rem; /* 32dp */
}
```

### 留白密度与信息密度
**信息密度判断**：
- 高密度：信息丰富的页面、展示页面、画廊页面
- 中密度：内容页面、列表页面、详情页面
- 低密度：营销页面、着陆页、介绍页面

**留白规范**：
```css
/* 基础间距 - 基于8dp网格 */
--spacing-0: 0;
--spacing-1: 0.5rem;   /* 8dp */
--spacing-2: 1rem;     /* 16dp */
--spacing-3: 1.5rem;   /* 24dp */
--spacing-4: 2rem;     /* 32dp */
--spacing-5: 2.5rem;   /* 40dp */
--spacing-6: 3rem;     /* 48dp */
--spacing-8: 4rem;     /* 64dp */
--spacing-10: 5rem;    /* 80dp */
--spacing-12: 6rem;    /* 96dp */
--spacing-16: 8rem;    /* 128dp */
--spacing-20: 10rem;   /* 160dp */
--spacing-24: 12rem;   /* 192dp */
```

**使用场景**：
- `--spacing-1`：元素内部间距、图标与文字间距
- `--spacing-2`：小元素间距、标签内边距
- `--spacing-3`：常规元素间距、卡片内边距
- `--spacing-4`：模块间距、章节间距
- `--spacing-6`：大模块间距、主要分区间距
- `--spacing-8`：页面级间距、页面边距
- `--spacing-12`：超大间距、装饰性留白

### 断点系统（Breakpoints）
```css
/* 断点定义 */
--breakpoint-xs: 0;
--breakpoint-sm: 600px;   /* 手机横屏 */
--breakpoint-md: 840px;   /* 平板竖屏 */
--breakpoint-lg: 1024px;  /* 平板横屏 */
--breakpoint-xl: 1280px;  /* 桌面 */
--breakpoint-2xl: 1440px; /* 大屏 */
```

### 布局模式
1. **网格布局**：基于网格系统的布局方式
2. **不对称布局**：不对称、不规则的布局方式
3. **模块化布局**：基于模块化的布局方式
4. **响应式布局**：CSS Grid布局，适合复杂页面布局

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

#### 尺寸规范
```css
/* 小号按钮 */
.btn-small {
    height: 40px;
    padding: 0 1.5rem;
    font-size: 0.875rem;
}

/* 中号按钮（默认） */
.btn-medium {
    height: 48px;
    padding: 0 2rem;
    font-size: 1rem;
}

/* 大号按钮 */
.btn-large {
    height: 56px;
    padding: 0 2.5rem;
    font-size: 1.125rem;
}
```

#### 状态规范
```css
/* 默认状态 */
.btn-contained {
    background: #FF0000;
    color: #FFFFFF;
    border: 2px solid #FF0000;
    border-radius: 0;
    font-weight: var(--font-weight-bold);
}

/* 悬停状态 */
.btn-contained:hover {
    background: #CC0000;
    border-color: #CC0000;
}

/* 激活状态 */
.btn-contained:active {
    background: #990000;
    border-color: #990000;
}

/* 禁用状态 */
.btn-contained:disabled {
    background: #E0E0E0;
    color: #9E9E9E;
    cursor: not-allowed;
    border-color: #E0E0E0;
}

/* 焦点状态 */
.btn-contained:focus {
    outline: 2px solid #FF0000;
    outline-offset: 2px;
}
```

#### 变体规范
```css
/* 实心按钮 */
.btn-contained {
    background: #FF0000;
    color: #FFFFFF;
    border: 2px solid #FF0000;
}

/* 文字按钮 */
.btn-text {
    background: transparent;
    color: #FF0000;
    border: none;
    text-decoration: underline;
}

/* 轮廓按钮 */
.btn-outlined {
    background: transparent;
    color: #FF0000;
    border: 2px solid #FF0000;
}
```

#### 圆角规范
```css
/* Swiss Style：无圆角设计 */
.btn {
    border-radius: 0; /* 无圆角 - Swiss Style */
}
```

### Card（卡片）

#### 使用场景
- 内容展示：文章、新闻、公告
- 数据展示：统计卡片、信息卡片
- 功能入口：功能卡片、操作卡片

#### 样式规范
```css
.card {
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 0;
    padding: var(--spacing-4);
}

.card:hover {
    border-color: #FF0000;
}

.card-compact {
    padding: var(--spacing-3);
}

.card-spacious {
    padding: var(--spacing-6);
}
```

#### 阴影规范
```css
/* Swiss Style：无阴影设计 */
.shadow-1 {
    box-shadow: none;
}

.shadow-2 {
    box-shadow: none;
}

.shadow-3 {
    box-shadow: none;
}

.shadow-4 {
    box-shadow: none;
}

.shadow-5 {
    box-shadow: none;
}
```

### Input（输入框）

#### 样式规范
```css
.input {
    width: 100%;
    height: 48px;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    color: #000000;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 0;
    font-weight: var(--font-weight-regular);
}

.input:hover {
    border-color: #FF0000;
}

.input:focus {
    border-color: #FF0000;
    outline: 2px solid #FF0000;
    outline-offset: -1px;
}

.input-error {
    border-color: #FF0000;
}

.input-disabled {
    color: #9E9E9E;
    background: #F5F5F5;
    cursor: not-allowed;
}
```

#### 尺寸规范
```css
.input-small {
    height: 40px;
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
}

.input-medium {
    height: 48px;
    padding: 0.75rem 1rem;
    font-size: 1rem;
}

.input-large {
    height: 56px;
    padding: 1rem 1.25rem;
    font-size: 1.125rem;
}
```

### Form（表单）

#### 表单布局
```css
.form-group {
    margin-bottom: var(--spacing-4);
}

.form-label {
    display: block;
    margin-bottom: var(--spacing-2);
    font-size: 0.875rem;
    font-weight: var(--font-weight-bold);
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.form-hint {
    margin-top: var(--spacing-2);
    font-size: 0.875rem;
    color: #424242;
}

.form-error {
    margin-top: var(--spacing-2);
    font-size: 0.875rem;
    color: #FF0000;
    font-weight: var(--font-weight-bold);
}
```

### Navigation（导航）

#### 顶部导航
```css
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    padding: 0 var(--spacing-4);
    background: #FFFFFF;
    border-bottom: 1px solid #000000;
}

.nav-link {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
    color: #000000;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 0;
}

.nav-link:hover,
.nav-link.active {
    color: #FF0000;
    text-decoration: underline;
}
```

#### 侧边导航
```css
.sidebar {
    width: 260px;
    height: 100vh;
    padding: var(--spacing-4);
    background: #FFFFFF;
    border-right: 1px solid #000000;
}

.sidebar-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    margin-bottom: var(--spacing-2);
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
    color: #000000;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 0;
}

.sidebar-item:hover,
.sidebar-item.active {
    color: #FF0000;
    text-decoration: underline;
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
**风格特征**：
- **简洁化**：基于简洁风格
- **几何化**：使用几何形状
- **线条化**：使用线条图标
- **高对比度**：高对比度的图标

**图标规范**：
```css
.icon {
    width: 32px;
    height: 32px;
    stroke-width: 2px;
    stroke: #000000;
    fill: none;
}

.icon-small {
    width: 24px;
    height: 24px;
}

.icon-large {
    width: 48px;
    height: 48px;
}

.icon-filled {
    fill: #000000;
    stroke: none;
}
```

**图标库建议**：
- Material Icons：基础图标库，可自定义样式
- Heroicons：简约的图标库
- 自定义简洁图标：基于简洁风格自定义图标

### 插画风格
**风格特征**：
- **简洁构成**：使用简洁构成插画
- **几何化**：使用几何形状
- **简洁色彩**：使用简洁色彩
- **客观感**：具有客观感的插画

**插画原则**：
1. **简洁原则**：所有元素都是简洁风格
2. **几何原则**：所有元素基于几何形状
3. **简洁色彩**：使用简洁色彩
4. **客观原则**：插画必须具有客观感

**插画类型**：
- **简洁插画**：基于简洁的插画
- **几何插画**：强调几何的插画
- **信息插画**：具有信息的插画
- **信息插画**：提供信息的插画

### 设计原则
1. **简洁导向**：通过简洁元素创造清晰感
2. **功能导向**：所有设计必须具有功能性
3. **几何化**：所有元素保持几何化
4. **客观感**：确保所有元素具有客观感

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover（悬停）行为
```css
/* 按钮悬停 */
.button:hover {
    background: #CC0000;
    border-color: #CC0000;
}

/* 卡片悬停 */
.card:hover {
    border-color: #FF0000;
}

/* 链接悬停 */
.link:hover {
    color: #FF0000;
    text-decoration: underline;
}
```

### Active（激活）行为
```css
/* 按钮激活 */
.button:active {
    background: #990000;
    border-color: #990000;
}

/* 卡片激活 */
.card:active {
    border-color: #CC0000;
}
```

### Focus（焦点）行为
```css
/* 焦点样式 */
*:focus {
    outline: 2px solid #FF0000;
    outline-offset: 2px;
}
```

### 动效节奏
```css
/* 标准缓动 */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

/* 线性缓动 */
--ease-linear: linear;

/* 进入缓动 */
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* 退出缓动 */
--ease-out: cubic-bezier(0, 0, 0.2, 1);

/* 进入退出缓动 */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

**动效时长**：
```css
--duration-fast: 200ms;    /* 快速交互 */
--duration-normal: 300ms;  /* 标准交互 */
--duration-slow: 400ms;    /* 慢速交互 */
--duration-slower: 500ms;  /* 复杂动画 */
```

**动效原则**：
1. **简洁动画**：动效基于简洁风格
2. **功能化**：动效具有功能性
3. **适度原则**：动效服务于功能，避免过度动画
4. **性能优先**：使用CSS动画，避免JavaScript动画

### 操作反馈设计原则
1. **视觉反馈**：颜色变化、边框变化、文字变化
2. **明确状态**：清晰展示当前状态（悬停、激活、禁用）
3. **简洁效果**：通过简洁元素提供反馈
4. **一致性**：相同类型的操作使用相同的反馈方式

**反馈类型**：
- **视觉反馈**：颜色变化、边框变化、文字变化
- **触觉反馈**：移动端震动（重要操作）
- **听觉反馈**：音效（谨慎使用，避免打扰）

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
    /* Red Colors */
    --swiss-red-50: #FFF0F0;
    --swiss-red-100: #FFE0E0;
    --swiss-red-200: #FFC0C0;
    --swiss-red-300: #FF8080;
    --swiss-red-400: #FF4040;
    --swiss-red-500: #FF0000;
    --swiss-red-600: #CC0000;
    --swiss-red-700: #990000;
    --swiss-red-800: #660000;
    --swiss-red-900: #330000;

    /* Black Colors */
    --swiss-black-50: #F5F5F5;
    --swiss-black-100: #E0E0E0;
    --swiss-black-200: #BDBDBD;
    --swiss-black-300: #9E9E9E;
    --swiss-black-400: #757575;
    --swiss-black-500: #616161;
    --swiss-black-600: #424242;
    --swiss-black-700: #212121;
    --swiss-black-800: #000000;
    --swiss-black-900: #000000;

    /* White Colors */
    --swiss-white-50: #FFFFFF;
    --swiss-white-100: #FAFAFA;
    --swiss-white-200: #F5F5F5;
    --swiss-white-300: #EEEEEE;
    --swiss-white-400: #E0E0E0;
    --swiss-white-500: #BDBDBD;
    --swiss-white-600: #9E9E9E;
    --swiss-white-700: #757575;
    --swiss-white-800: #616161;
    --swiss-white-900: #424242;

    /* Background Colors */
    --swiss-background: #FFFFFF;
    --swiss-background-light: #FAFAFA;
    --swiss-background-dark: #F5F5F5;

    /* Surface Colors */
    --swiss-surface: #FFFFFF;
    --swiss-surface-light: #FAFAFA;
    --swiss-surface-dark: #F5F5F5;

    /* Text Colors */
    --swiss-text-primary: #000000;
    --swiss-text-primary-light: rgba(0, 0, 0, 0.87);
    --swiss-text-primary-dark: rgba(0, 0, 0, 0.95);

    --swiss-text-secondary: #424242;
    --swiss-text-secondary-light: rgba(66, 66, 66, 0.87);
    --swiss-text-secondary-dark: rgba(66, 66, 66, 0.6);

    --swiss-text-disabled: #9E9E9E;
    --swiss-text-disabled-light: rgba(158, 158, 158, 0.5);
    --swiss-text-disabled-dark: rgba(158, 158, 158, 0.3);

    /* Semantic Colors */
    --swiss-error: #FF0000;
    --swiss-error-light: #FF4D4D;
    --swiss-error-dark: #CC0000;

    --swiss-warning: #FFA500;
    --swiss-warning-light: #FFB84D;
    --swiss-warning-dark: #CC8400;

    --swiss-success: #00AA00;
    --swiss-success-light: #4DCC4D;
    --swiss-success-dark: #008800;

    --swiss-info: #0000FF;
    --swiss-info-light: #4D4DFF;
    --swiss-info-dark: #0000CC;
}
```

### Spacing Tokens
```css
:root {
    --spacing-0: 0;
    --spacing-1: 0.5rem;   /* 8dp */
    --spacing-2: 1rem;     /* 16dp */
    --spacing-3: 1.5rem;   /* 24dp */
    --spacing-4: 2rem;     /* 32dp */
    --spacing-5: 2.5rem;   /* 40dp */
    --spacing-6: 3rem;     /* 48dp */
    --spacing-8: 4rem;     /* 64dp */
    --spacing-10: 5rem;    /* 80dp */
    --spacing-12: 6rem;    /* 96dp */
    --spacing-16: 8rem;    /* 128dp */
    --spacing-20: 10rem;   /* 160dp */
    --spacing-24: 12rem;   /* 192dp */
}
```

### Radius Tokens
```css
:root {
    --radius-none: 0;
    --radius-sm: 0;
    --radius-md: 0;
    --radius-lg: 0;
    --radius-xl: 0;
    --radius-2xl: 0;
    --radius-3xl: 0;
}
```

### Shadow Tokens
```css
:root {
    --shadow-1: none;
    --shadow-2: none;
    --shadow-3: none;
    --shadow-4: none;
    --shadow-5: none;
}
```

### Typography Tokens
```css
:root {
    /* Font Family */
    --font-primary: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    --font-secondary: 'Inter', 'Roboto', 'Helvetica Neue', sans-serif;
    --font-display: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;

    /* Font Size */
    --font-size-h1: 4.5rem;
    --font-size-h2: 3.5rem;
    --font-size-h3: 2.75rem;
    --font-size-h4: 2.25rem;
    --font-size-h5: 1.75rem;
    --font-size-h6: 1.5rem;
    --font-size-subtitle1: 1.25rem;
    --font-size-subtitle2: 1.125rem;
    --font-size-body1: 1.125rem;
    --font-size-body2: 1rem;
    --font-size-button: 1rem;
    --font-size-caption: 0.875rem;
    --font-size-overline: 0.75rem;

    /* Line Height */
    --line-height-dense: 1.1;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.8;

    /* Font Weight */
    --font-weight-regular: 400;
    --font-weight-bold: 700;
    --font-weight-black: 900;

    /* Letter Spacing */
    --letter-spacing-tight: -0.02em;
    --letter-spacing-normal: 0;
    --letter-spacing-wide: 0.05em;
    --letter-spacing-wider: 0.1em;
    --letter-spacing-widest: 0.15em;
}
```

### Animation Tokens
```css
:root {
    /* Duration */
    --duration-fast: 200ms;
    --duration-normal: 300ms;
    --duration-slow: 400ms;
    --duration-slower: 500ms;

    /* Easing */
    --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-linear: linear;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Z-Index Tokens
```css
:root {
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

#### 1. 设计原则
✅ **可以学习**：
- 瑞士风格的设计理念
- 功能性的设计语言
- 简洁性的设计思维
- 客观性的设计风格

#### 2. 色彩系统
✅ **可以学习**：
- 简洁色彩的使用方法
- 高对比度的搭配原则
- 简洁色彩的实现技巧
- 视觉清晰度的营造方法

#### 3. 排版系统
✅ **可以学习**：
- 无衬线字体的使用原则
- 基于网格的排版系统
- 清晰层次结构的建立方法
- 客观性的原则

#### 4. 布局系统
✅ **可以学习**：
- 网格布局的应用
- 基于网格系统的布局方法
- 不对称布局的技巧
- 视觉清晰度的营造方法

#### 5. 组件设计
✅ **可以学习**：
- 无圆角设计语言的应用
- 无阴影的实现方法
- 简洁边框的使用技巧
- 纯色背景的效果营造

#### 6. 图标与插画
✅ **可以学习**：
- 简洁图标的设计方法
- 几何图标风格
- 线条图标设计
- 简洁色彩图标实现

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 1. 品牌元素
❌ **不应复刻**：
- 特定品牌的商标和标志
- Swiss Style历史品牌的官方标识
- 特定品牌的视觉识别系统
- 任何受版权保护的品牌元素

#### 2. 插画内容
❌ **不应复刻**：
- Swiss Style历史时期的原创插画
- 特定品牌的插画内容
- 特定风格的特定插画作品
- 任何受版权保护的插画作品

#### 3. 文字内容
❌ **不应复刻**：
- Swiss Style历史时期的原始文案
- 特定品牌的官方文案
- Swiss Style历史文档
- 任何受版权保护的文字内容

#### 4. 具体设计
❌ **不应复刻**：
- Swiss Style历史时期的特定页面设计
- 特定品牌的完整视觉系统
- Swiss Style历史艺术作品的设计
- 任何直接复制的设计元素

### 合法使用建议

#### 1. 风格借鉴
- 学习Swiss Style的原则和方法
- 参考色彩和排版系统
- 借鉴瑞士风格的设计理念
- 应用功能性的设计思维

#### 2. 原创设计
- 基于Swiss Style原则创建原创设计
- 使用Swiss Style风格但加入自己的创意
- 结合现代技术和Swiss Style理念
- 创建独特的Swiss Style风格变体

#### 3. 法律合规
- 尊重历史时期的知识产权
- 避免直接复制受保护的内容
- 注明设计灵感的来源
- 遵守相关的版权和商标法律

#### 4. 道德准则
- 诚实说明设计灵感来源
- 不声称自己是历史时期的设计
- 尊重Swiss Style历史的原创作品
- 促进Swiss Style理念的合法传播

### 总结
Swiss Style（瑞士风格）是20世纪50年代在瑞士发展起来的国际主义设计风格，强调功能性、简洁性和客观性。其核心理念是"形式追随功能"，通过网格系统、无衬线字体和不对称布局，创造出清晰、客观、功能性的视觉体验。Swiss Style强调网格化、简洁性和客观性，通过无衬线字体和网格系统，提供清晰而专业的视觉体验。但是，在使用Swiss Style风格时，必须遵守相关的知识产权法律，尊重历史时期的知识产权，避免直接复制受保护的内容。通过学习Swiss Style的原则和方法，结合自己的创意和现代技术，可以创建出独特而合法的Swiss Style风格设计。