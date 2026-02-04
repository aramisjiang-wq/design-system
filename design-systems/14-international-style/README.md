# International Style Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **简约主义**：去除一切不必要的装饰
- **功能导向**：形式追随功能
- **网格系统**：基于严格的网格布局
- **无衬线字体**：使用清晰的无衬线字体
- **中性色彩**：使用黑、白、灰等中性色

### 适用产品类型
- **企业应用**：B2B SaaS、管理后台、数据分析
- **专业工具**：设计工具、开发工具、生产力工具
- **信息平台**：新闻网站、信息门户、知识平台
- **教育平台**：在线教育、培训平台、知识分享

### 设计哲学
International Style（国际主义风格）是20世纪中期兴起的设计风格，强调简约、功能性和无装饰。其核心理念是"形式追随功能"，通过严格的网格系统、清晰的无衬线字体和中性色彩，创造出简洁、高效、专业的视觉体验。International Style强调理性、秩序和清晰度，通过去除一切不必要的装饰，专注于内容和功能，提供最佳的用户体验。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
基于International Style中性色彩：

```css
/* 主色 - 黑色 */
--international-black-primary: #000000;
--international-black-light: #1A1A1A;
--international-black-dark: #000000;

/* 黑色变体 */
--international-black-50: #F5F5F5;
--international-black-100: #E0E0E0;
--international-black-200: #BDBDBD;
--international-black-300: #9E9E9E;
--international-black-400: #757575;
--international-black-500: #616161;
--international-black-600: #424242;
--international-black-700: #212121;
--international-black-800: #121212;
--international-black-900: #000000;
```

**使用场景**：
- 黑色：品牌识别、主要文字、重要元素
- 黑色变体：不同深浅的背景、边框、装饰

### 辅助色（Secondary Colors）
```css
/* 辅助色 - 白色 */
--international-white-primary: #FFFFFF;
--international-white-light: #FFFFFF;
--international-white-dark: #FAFAFA;

/* 白色变体 */
--international-white-50: #FFFFFF;
--international-white-100: #FAFAFA;
--international-white-200: #F5F5F5;
--international-white-300: #EEEEEE;
--international-white-400: #E0E0E0;
--international-white-500: #BDBDBD;
--international-white-600: #9E9E9E;
--international-white-700: #757575;
--international-white-800: #616161;
--international-white-900: #424242;
```

**使用场景**：
- 白色：背景、卡片、表面
- 白色变体：不同深浅的背景、边框、装饰

### 背景色（Background Colors）
```css
/* 背景色 - 页面和组件背景 */
--international-background: #FFFFFF;
--international-background-light: #FAFAFA;
--international-background-dark: #F5F5F5;

/* 表面色 - 卡片和表面 */
--international-surface: #FFFFFF;
--international-surface-light: #FAFAFA;
--international-surface-dark: #F5F5F5;
```

**使用场景**：
- 背景色：页面背景、应用背景
- 表面色：卡片背景、组件背景、弹窗背景

### 语义色（Semantic Colors）
```css
/* 错误状态 */
--international-error: #D32F2F;
--international-error-light: #EF5350;
--international-error-dark: #C62828;

/* 警告状态 */
--international-warning: #F57C00;
--international-warning-light: #FF9800;
--international-warning-dark: #E65100;

/* 成功状态 */
--international-success: #388E3C;
--international-success-light: #4CAF50;
--international-success-dark: #2E7D32;

/* 信息状态 */
--international-info: #1976D2;
--international-info-light: #2196F3;
--international-info-dark: #1565C0;
```

**使用场景**：
- 错误：操作失败、错误提示、危险操作
- 警告：注意事项、次要提醒、待处理状态
- 成功：操作成功、完成状态、积极反馈
- 信息：一般提示、帮助信息、说明文字

### 文本色（Text Colors）
```css
/* 主要文字 */
--international-text-primary: #000000;
--international-text-primary-light: rgba(0, 0, 0, 0.87);
--international-text-primary-dark: rgba(0, 0, 0, 0.95);

/* 次要文字 */
--international-text-secondary: #424242;
--international-text-secondary-light: rgba(66, 66, 66, 0.87);
--international-text-secondary-dark: rgba(66, 66, 66, 0.6);

/* 禁用文字 */
--international-text-disabled: #9E9E9E;
--international-text-disabled-light: rgba(158, 158, 158, 0.5);
--international-text-disabled-dark: rgba(158, 158, 158, 0.3);
```

**使用场景**：
- 主要文字：标题、重要内容、主要信息
- 次要文字：正文、辅助信息、次要内容
- 禁用文字：禁用状态、不可用元素

### Design Token 命名建议
```
--international-{hue}-{shade}
--international-{semantic}-{state}

示例：
--international-black-500
--international-white-600
--international-error-dark
--international-success-light
```

### 色彩使用原则
1. **中性色彩**：主要使用黑、白、灰等中性色
2. **色彩限制**：每个页面中主色不超过1种，辅助色不超过2种
3. **功能导向**：颜色使用服务于功能，避免过度装饰
4. **对比度要求**：确保文字与背景有足够对比度（至少4.5:1）
5. **简约原则**：去除一切不必要的色彩装饰

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
/* 主字体 - 无衬线字体 */
--font-primary: 'Helvetica Neue', 'Arial', 'Verdana', sans-serif;

/* 备用字体 - 系统字体 */
--font-secondary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;

/* 等宽字体 - 代码和技术内容 */
--font-mono: 'Monaco', 'Menlo', 'Consolas', 'Courier New', monospace;
```

**字体选择理由**：
- Helvetica Neue：经典的无衬线字体，清晰、易读
- 系统字体：优先使用系统字体，提高加载性能
- Monaco：专业的等宽字体，适合代码和技术内容

### 字号层级（Font Size Scale）
基于International Style排版系统：

```css
/* 标题层级 */
--font-size-h1: 3.5rem;      /* 56px - 页面主标题 */
--font-size-h2: 2.5rem;       /* 40px - 章节标题 */
--font-size-h3: 2rem;         /* 32px - 子章节标题 */
--font-size-h4: 1.5rem;       /* 24px - 卡片标题 */
--font-size-h5: 1.25rem;      /* 20px - 小标题 */
--font-size-h6: 1rem;         /* 16px - 微标题 */

/* 副标题层级 */
--font-size-subtitle1: 1rem;      /* 16px - 副标题1 */
--font-size-subtitle2: 0.875rem;  /* 14px - 副标题2 */

/* 正文层级 */
--font-size-body1: 1rem;      /* 16px - 正文1 */
--font-size-body2: 0.875rem;  /* 14px - 正文2 */

/* 按钮层级 */
--font-size-button: 0.875rem;  /* 14px - 按钮 */
--font-size-caption: 0.75rem; /* 12px - 说明文字 */
--font-size-overline: 0.625rem; /* 10px - 标签文字 */
```

### 行高（Line Height）
```css
--line-height-dense: 1.25;    /* 紧凑 - 标题 */
--line-height-normal: 1.5;    /* 标准 - 正文 */
--line-height-relaxed: 1.75;  /* 宽松 - 长文本 */
```

### 字重（Font Weight）
```css
--font-weight-light: 300;    /* 轻体 - 辅助文字 */
--font-weight-regular: 400;  /* 常规 - 正文 */
--font-weight-medium: 500;   /* 中等 - 强调文字 */
--font-weight-bold: 700;     /* 粗体 - 标题 */
```

### 字间距（Letter Spacing）
```css
--letter-spacing-tight: -0.01em;  /* 紧凑 - 大标题 */
--letter-spacing-normal: 0;        /* 标准 - 正文 */
--letter-spacing-wide: 0.01em;     /* 宽松 - 小标题 */
--letter-spacing-wider: 0.05em;   /* 更宽 - 标签 */
```

### 排版节奏规则
1. **网格原则**：基于严格的网格系统
2. **对齐原则**：严格左对齐，避免居中对齐
3. **层次清晰**：通过字号、字重、颜色建立清晰的层次结构
4. **充足留白**：使用充足的留白空间，营造呼吸感
5. **一致性**：相同类型的元素使用相同的排版规则

### 响应式排版
```css
/* 移动端（< 600dp） */
@media (max-width: 599px) {
    --font-size-h1: 2.5rem;  /* 40px */
    --font-size-h2: 2rem;    /* 32px */
    --font-size-h3: 1.5rem;  /* 24px */
    --font-size-body1: 1rem;   /* 16px */
}

/* 平板端（600dp - 840dp） */
@media (min-width: 600dp) and (max-width: 839px) {
    --font-size-h1: 3rem;    /* 48px */
    --font-size-h2: 2.25rem; /* 36px */
    --font-size-h3: 1.75rem; /* 28px */
    --font-size-body1: 1rem;   /* 16px */
}

/* 桌面端（≥ 840dp） */
@media (min-width: 840px) {
    --font-size-h1: 3.5rem;  /* 56px */
    --font-size-h2: 2.5rem;  /* 40px */
    --font-size-h3: 2rem;    /* 32px */
    --font-size-body1: 1rem;   /* 16px */
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
--container-max-width: 1280px;  /* 最大宽度 */
--container-padding: 1.5rem;   /* 内边距 24dp */
--container-margin: 0 auto;     /* 水平居中 */
```

### 栅格系统（Grid System）
基于12列网格系统：

```css
/* 基础栅格 */
--grid-columns: 12;
--grid-gutter: 1.5rem;  /* 24dp - 栅格间距 */
--grid-margin: 1.5rem;  /* 24dp - 外边距 */

/* 响应式栅格 */
/* 移动端：4列 */
@media (max-width: 599px) {
    --grid-columns: 4;
    --grid-gutter: 1rem;  /* 16dp */
    --grid-margin: 1rem;  /* 16dp */
}

/* 平板端：8列 */
@media (min-width: 600px) and (max-width: 839px) {
    --grid-columns: 8;
    --grid-gutter: 1.25rem; /* 20dp */
    --grid-margin: 1.25rem; /* 20dp */
}

/* 桌面端：12列 */
@media (min-width: 840px) {
    --grid-columns: 12;
    --grid-gutter: 1.5rem; /* 24dp */
    --grid-margin: 1.5rem; /* 24dp */
}
```

### 留白密度与信息密度
**信息密度判断**：
- 高密度：数据仪表盘、管理后台、表格视图
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
```

**使用场景**：
- `--spacing-1`：元素内部间距、图标与文字间距
- `--spacing-2`：小元素间距、标签内边距
- `--spacing-3`：常规元素间距、卡片内边距
- `--spacing-4`：模块间距、章节间距
- `--spacing-6`：大模块间距、主要分区间距
- `--spacing-8`：页面级间距、页面边距

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
1. **网格布局**：基于严格的网格系统
2. **对齐布局**：严格对齐，避免随意布局
3. **功能布局**：基于功能需求的布局方式
4. **响应式布局**：CSS Grid布局，适合复杂页面布局

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

#### 尺寸规范
```css
/* 小号按钮 */
.btn-small {
    height: 32px;
    padding: 0 1rem;
    font-size: 0.8125rem;
}

/* 中号按钮（默认） */
.btn-medium {
    height: 36px;
    padding: 0 1.5rem;
    font-size: 0.875rem;
}

/* 大号按钮 */
.btn-large {
    height: 40px;
    padding: 0 2rem;
    font-size: 0.9375rem;
}
```

#### 状态规范
```css
/* 默认状态 */
.btn-contained {
    background-color: var(--international-black-primary);
    color: #FFFFFF;
    border: 1px solid var(--international-black-primary);
    border-radius: 0;
    font-weight: var(--font-weight-medium);
    box-shadow: none;
}

/* 悬停状态 */
.btn-contained:hover {
    background-color: var(--international-black-light);
    border-color: var(--international-black-light);
}

/* 激活状态 */
.btn-contained:active {
    background-color: var(--international-black-dark);
    border-color: var(--international-black-dark);
}

/* 禁用状态 */
.btn-contained:disabled {
    background-color: var(--international-black-200);
    border-color: var(--international-black-200);
    color: var(--international-text-disabled);
    cursor: not-allowed;
}

/* 焦点状态 */
.btn-contained:focus {
    outline: 2px solid var(--international-black-400);
    outline-offset: 2px;
}
```

#### 变体规范
```css
/* 实心按钮 */
.btn-contained {
    background-color: var(--international-black-primary);
    color: #FFFFFF;
    border: 1px solid var(--international-black-primary);
}

/* 文字按钮 */
.btn-text {
    background-color: transparent;
    color: var(--international-black-primary);
    border: none;
}

/* 轮廓按钮 */
.btn-outlined {
    background-color: transparent;
    color: var(--international-black-primary);
    border: 1px solid var(--international-black-primary);
}
```

#### 圆角规范
```css
/* International Style：直角设计 */
.btn {
    border-radius: 0; /* 直角 - International Style */
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
    background-color: var(--international-surface);
    border: 1px solid var(--international-black-200);
    border-radius: 0;
    padding: var(--spacing-3);
    box-shadow: none;
}

.card:hover {
    border-color: var(--international-black-400);
}

.card-compact {
    padding: var(--spacing-2);
}

.card-spacious {
    padding: var(--spacing-4);
}
```

#### 阴影规范
```css
/* International Style：无阴影或极简阴影 */
.shadow-1 {
    box-shadow: none;
}

.shadow-2 {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.shadow-3 {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.shadow-4 {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.shadow-5 {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
```

### Input（输入框）

#### 样式规范
```css
.input {
    width: 100%;
    height: 40px;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    color: var(--international-text-primary-light);
    background-color: var(--international-surface-light);
    border: 1px solid var(--international-black-200);
    border-radius: 0;
    font-weight: var(--font-weight-regular);
}

.input:hover {
    border-color: var(--international-black-400);
}

.input:focus {
    border-color: var(--international-black-primary);
    outline: 2px solid var(--international-black-200);
    outline-offset: -2px;
}

.input-error {
    border-color: var(--international-error);
}

.input-disabled {
    color: var(--international-text-disabled);
    background-color: var(--international-black-100);
    cursor: not-allowed;
}
```

#### 尺寸规范
```css
.input-small {
    height: 32px;
    padding: 0.375rem 0.625rem;
    font-size: 0.875rem;
}

.input-medium {
    height: 40px;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
}

.input-large {
    height: 48px;
    padding: 0.625rem 0.875rem;
    font-size: 1.125rem;
}
```

### Form（表单）

#### 表单布局
```css
.form-group {
    margin-bottom: var(--spacing-3);
}

.form-label {
    display: block;
    margin-bottom: var(--spacing-1);
    font-size: 0.75rem;
    font-weight: var(--font-weight-medium);
    color: var(--international-text-secondary-light);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.form-hint {
    margin-top: var(--spacing-1);
    font-size: 0.75rem;
    color: var(--international-text-secondary-light);
}

.form-error {
    margin-top: var(--spacing-1);
    font-size: 0.75rem;
    color: var(--international-error);
}
```

### Navigation（导航）

#### 顶部导航
```css
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 0 var(--spacing-3);
    background-color: var(--international-surface);
    border-bottom: 1px solid var(--international-black-200);
    box-shadow: none;
}

.nav-link {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    font-weight: var(--font-weight-medium);
    color: var(--international-text-primary-light);
    text-decoration: none;
    text-transform: none;
    letter-spacing: 0;
    border-radius: 0;
}

.nav-link:hover,
.nav-link.active {
    color: var(--international-black-primary);
    border-bottom: 2px solid var(--international-black-primary);
}
```

#### 侧边导航
```css
.sidebar {
    width: 240px;
    height: 100vh;
    padding: var(--spacing-3);
    background-color: var(--international-surface);
    border-right: 1px solid var(--international-black-200);
}

.sidebar-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    margin-bottom: var(--spacing-1);
    font-size: 0.875rem;
    font-weight: var(--font-weight-medium);
    color: var(--international-text-primary-light);
    text-decoration: none;
    text-transform: none;
    letter-spacing: 0;
    border-radius: 0;
}

.sidebar-item:hover,
.sidebar-item.active {
    color: var(--international-black-primary);
    background-color: var(--international-black-100);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
**风格特征**：
- **几何化**：基于基础几何形状
- **简约化**：去除一切不必要的细节
- **线性化**：使用线性图标
- **统一性**：所有图标保持统一的风格

**图标规范**：
```css
.icon {
    width: 24px;
    height: 24px;
    stroke-width: 1.5px;
    stroke: var(--international-black-primary);
    fill: none;
}

.icon-small {
    width: 18px;
    height: 18px;
}

.icon-large {
    width: 36px;
    height: 36px;
}

.icon-filled {
    fill: var(--international-black-primary);
    stroke: none;
}
```

**图标库建议**：
- Material Icons：基础图标库，可自定义样式
- Heroicons：简约的图标库
- 自定义International Style图标：基于International Style风格自定义图标

### 插画风格
**风格特征**：
- **几何构成**：使用几何形状构成插画
- **简约化**：去除一切不必要的细节
- **中性色彩**：使用黑、白、灰等中性色
- **功能性**：插画必须服务于功能

**插画原则**：
1. **简约原则**：所有元素都是简约的
2. **几何原则**：所有元素基于基础几何形状
3. **中性原则**：使用黑、白、灰等中性色
4. **功能原则**：插画必须服务于功能，不能纯粹装饰

**插画类型**：
- **几何插画**：基于几何形状的插画
- **简约插画**：强调简约性的插画
- **功能插画**：服务于功能的插画
- **信息插画**：提供信息的插画

### 设计原则
1. **简约导向**：去除一切不必要的装饰
2. **功能导向**：所有设计必须服务于功能
3. **统一性**：所有元素保持统一的风格
4. **清晰度**：确保所有元素清晰易读

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover（悬停）行为
```css
/* 按钮悬停 */
.button:hover {
    background-color: var(--international-black-light);
    border-color: var(--international-black-light);
}

/* 卡片悬停 */
.card:hover {
    border-color: var(--international-black-400);
}

/* 链接悬停 */
.link:hover {
    color: var(--international-black-primary);
    text-decoration: underline;
}
```

### Active（激活）行为
```css
/* 按钮激活 */
.button:active {
    background-color: var(--international-black-dark);
    border-color: var(--international-black-dark);
}

/* 卡片激活 */
.card:active {
    border-color: var(--international-black-primary);
}
```

### Focus（焦点）行为
```css
/* 焦点样式 */
*:focus {
    outline: 2px solid var(--international-black-400);
    outline-offset: 2px;
}
```

### 动效节奏
```css
/* 标准缓动 */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

/* 进入缓动 */
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* 退出缓动 */
--ease-out: cubic-bezier(0, 0, 0.2, 1);

/* 进入退出缓动 */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

**动效时长**：
```css
--duration-fast: 150ms;    /* 快速交互 */
--duration-normal: 200ms;  /* 标准交互 */
--duration-slow: 300ms;    /* 慢速交互 */
--duration-slower: 400ms;  /* 复杂动画 */
```

**动效原则**：
1. **简约流畅**：动效简约流畅，避免突兀
2. **功能导向**：动效服务于功能，避免过度动画
3. **适度原则**：动效服务于功能，避免过度动画
4. **性能优先**：使用CSS动画，避免JavaScript动画

### 操作反馈设计原则
1. **视觉反馈**：颜色变化、边框变化
2. **明确状态**：清晰展示当前状态（悬停、激活、禁用）
3. **简约效果**：通过简约元素提供反馈
4. **一致性**：相同类型的操作使用相同的反馈方式

**反馈类型**：
- **视觉反馈**：颜色变化、边框变化
- **触觉反馈**：移动端震动（重要操作）
- **听觉反馈**：音效（谨慎使用，避免打扰）

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
    /* Black Colors */
    --international-black-50: #F5F5F5;
    --international-black-100: #E0E0E0;
    --international-black-200: #BDBDBD;
    --international-black-300: #9E9E9E;
    --international-black-400: #757575;
    --international-black-500: #616161;
    --international-black-600: #424242;
    --international-black-700: #212121;
    --international-black-800: #121212;
    --international-black-900: #000000;

    /* White Colors */
    --international-white-50: #FFFFFF;
    --international-white-100: #FAFAFA;
    --international-white-200: #F5F5F5;
    --international-white-300: #EEEEEE;
    --international-white-400: #E0E0E0;
    --international-white-500: #BDBDBD;
    --international-white-600: #9E9E9E;
    --international-white-700: #757575;
    --international-white-800: #616161;
    --international-white-900: #424242;

    /* Background Colors */
    --international-background: #FFFFFF;
    --international-background-light: #FAFAFA;
    --international-background-dark: #F5F5F5;

    /* Surface Colors */
    --international-surface: #FFFFFF;
    --international-surface-light: #FAFAFA;
    --international-surface-dark: #F5F5F5;

    /* Text Colors */
    --international-text-primary: #000000;
    --international-text-primary-light: rgba(0, 0, 0, 0.87);
    --international-text-primary-dark: rgba(0, 0, 0, 0.95);

    --international-text-secondary: #424242;
    --international-text-secondary-light: rgba(66, 66, 66, 0.87);
    --international-text-secondary-dark: rgba(66, 66, 66, 0.6);

    --international-text-disabled: #9E9E9E;
    --international-text-disabled-light: rgba(158, 158, 158, 0.5);
    --international-text-disabled-dark: rgba(158, 158, 158, 0.3);

    /* Semantic Colors */
    --international-error: #D32F2F;
    --international-error-light: #EF5350;
    --international-error-dark: #C62828;

    --international-warning: #F57C00;
    --international-warning-light: #FF9800;
    --international-warning-dark: #E65100;

    --international-success: #388E3C;
    --international-success-light: #4CAF50;
    --international-success-dark: #2E7D32;

    --international-info: #1976D2;
    --international-info-light: #2196F3;
    --international-info-dark: #1565C0;
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
}
```

### Radius Tokens
```css
:root {
    --radius-none: 0;
    --radius-sm: 2px;
    --radius-md: 4px;
    --radius-lg: 8px;
    --radius-xl: 12px;
}
```

### Shadow Tokens
```css
:root {
    --shadow-1: none;
    --shadow-2: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-3: 0 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-4: 0 4px 8px rgba(0, 0, 0, 0.15);
    --shadow-5: 0 6px 12px rgba(0, 0, 0, 0.2);
}
```

### Typography Tokens
```css
:root {
    /* Font Family */
    --font-primary: 'Helvetica Neue', 'Arial', 'Verdana', sans-serif;
    --font-secondary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    --font-mono: 'Monaco', 'Menlo', 'Consolas', 'Courier New', monospace;

    /* Font Size */
    --font-size-h1: 3.5rem;
    --font-size-h2: 2.5rem;
    --font-size-h3: 2rem;
    --font-size-h4: 1.5rem;
    --font-size-h5: 1.25rem;
    --font-size-h6: 1rem;
    --font-size-subtitle1: 1rem;
    --font-size-subtitle2: 0.875rem;
    --font-size-body1: 1rem;
    --font-size-body2: 0.875rem;
    --font-size-button: 0.875rem;
    --font-size-caption: 0.75rem;
    --font-size-overline: 0.625rem;

    /* Line Height */
    --line-height-dense: 1.25;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.75;

    /* Font Weight */
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;

    /* Letter Spacing */
    --letter-spacing-tight: -0.01em;
    --letter-spacing-normal: 0;
    --letter-spacing-wide: 0.01em;
    --letter-spacing-wider: 0.05em;
}
```

### Animation Tokens
```css
:root {
    /* Duration */
    --duration-fast: 150ms;
    --duration-normal: 200ms;
    --duration-slow: 300ms;
    --duration-slower: 400ms;

    /* Easing */
    --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
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
- 简约主义的设计理念
- 功能导向的设计语言
- 网格系统的设计思维
- 无装饰的设计风格

#### 2. 色彩系统
✅ **可以学习**：
- 黑、白、灰等中性色的使用方法
- 色彩限制的搭配原则
- 中性色彩的实现技巧
- 简约感的营造方法

#### 3. 排版系统
✅ **可以学习**：
- 无衬线字体的使用原则
- 基于网格系统的排版系统
- 清晰层次结构的建立方法
- 严格对齐的原则

#### 4. 布局系统
✅ **可以学习**：
- 严格网格系统的应用
- 基于对齐的布局方法
- 功能导向的布局技巧
- 简约感的营造方法

#### 5. 组件设计
✅ **可以学习**：
- 直角设计语言的应用
- 无装饰的实现方法
- 简约边框的使用技巧
- 无阴影或极简阴影的效果营造

#### 6. 图标与插画
✅ **可以学习**：
- 几何图标的设计方法
- 简约图标风格
- 线性图标设计
- 中性色彩图标实现

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 1. 品牌元素
❌ **不应复刻**：
- 特定品牌的商标和标志
- International Style历史品牌的官方标识
- 特定品牌的视觉识别系统
- 任何受版权保护的品牌元素

#### 2. 插画内容
❌ **不应复刻**：
- International Style历史时期的原创插画
- 特定品牌的插画内容
- 特定风格的特定插画作品
- 任何受版权保护的插画作品

#### 3. 文字内容
❌ **不应复刻**：
- International Style历史时期的原始文案
- 特定品牌的官方文案
- International Style历史文档
- 任何受版权保护的文字内容

#### 4. 具体设计
❌ **不应复刻**：
- International Style历史时期的特定页面设计
- 特定品牌的完整视觉系统
- International Style历史建筑的设计
- 任何直接复制的设计元素

### 合法使用建议

#### 1. 风格借鉴
- 学习International Style的原则和方法
- 参考色彩和排版系统
- 借鉴简约主义的设计理念
- 应用功能导向的设计思维

#### 2. 原创设计
- 基于International Style原则创建原创设计
- 使用International Style风格但加入自己的创意
- 结合现代技术和International Style理念
- 创建独特的International Style风格变体

#### 3. 法律合规
- 尊重历史时期的知识产权
- 避免直接复制受保护的内容
- 注明设计灵感的来源
- 遵守相关的版权和商标法律

#### 4. 道德准则
- 诚实说明设计灵感来源
- 不声称自己是历史时期的设计
- 尊重International Style历史的原创作品
- 促进International Style理念的合法传播

### 总结
International Style是20世纪中期兴起的重要设计风格，其核心理念是通过简约主义、功能导向、网格系统和无装饰，创造出简洁、高效、专业的视觉体验。但是，在使用International Style风格时，必须遵守相关的知识产权法律，尊重历史时期的知识产权，避免直接复制受保护的内容。通过学习International Style的原则和方法，结合自己的创意和现代技术，可以创建出独特而合法的International Style风格设计。