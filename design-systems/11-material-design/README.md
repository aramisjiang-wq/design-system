# Material Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **纸张隐喻**：基于纸张和墨水的物理隐喻
- **深度层次**：通过阴影和Z轴建立空间层次
- **波纹反馈**：使用波纹效果提供触觉反馈
- **卡片布局**：基于卡片的内容组织方式
- **动效流畅**：自然流畅的动画过渡

### 适用产品类型
- **移动应用**：Android应用、iOS应用、跨平台应用
- **Web应用**：响应式网站、PWA、Web应用
- **企业应用**：B2B SaaS、管理后台、数据分析
- **消费产品**：电商、社交、内容平台

### 设计哲学
Material Design是Google推出的设计语言，基于纸张和墨水的物理隐喻，强调通过阴影、深度、动画和色彩，创造出具有真实感和交互性的设计语言。其核心理念是"Material is the metaphor"，通过模拟物理世界的材质和交互，提供直观、一致、愉悦的用户体验。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
基于Material Design色彩系统：

```css
/* 主色 - 品牌识别 */
--material-primary: #6200EE;
--material-primary-light: #B388FF;
--material-primary-dark: #3700B3;

/* 主色变体 */
--material-primary-50: #EDE7F6;
--material-primary-100: #D1C4E9;
--material-primary-200: #B39DDB;
--material-primary-300: #9575CD;
--material-primary-400: #7E57C2;
--material-primary-500: #673AB7;
--material-primary-600: #5E35B1;
--material-primary-700: #512DA8;
--material-primary-800: #4527A0;
--material-primary-900: #311B92;
```

**使用场景**：
- 主色：品牌识别、主要操作、重要元素
- 主色变体：不同深浅的背景、边框、装饰

### 辅助色（Secondary Colors）
```css
/* 辅助色 - 强调和对比 */
--material-secondary: #03DAC6;
--material-secondary-light: #66FFF9;
--material-secondary-dark: #00BFA5;

/* 辅助色变体 */
--material-secondary-50: #E0F2F1;
--material-secondary-100: #B2DFDB;
--material-secondary-200: #80CBC4;
--material-secondary-300: #4DB6AC;
--material-secondary-400: #26A69A;
--material-secondary-500: #009688;
--material-secondary-600: #00897B;
--material-secondary-700: #00796B;
--material-secondary-800: #00695C;
--material-secondary-900: #004D40;
```

**使用场景**：
- 辅助色：强调元素、对比元素、次要操作
- 辅助色变体：不同深浅的背景、边框、装饰

### 背景色（Background Colors）
```css
/* 背景色 - 页面和组件背景 */
--material-background: #FFFFFF;
--material-background-light: #FAFAFA;
--material-background-dark: #121212;

/* 表面色 - 卡片和表面 */
--material-surface: #FFFFFF;
--material-surface-light: #F5F5F5;
--material-surface-dark: #1E1E1E;
```

**使用场景**：
- 背景色：页面背景、应用背景
- 表面色：卡片背景、组件背景、弹窗背景

### 语义色（Semantic Colors）
```css
/* 错误状态 */
--material-error: #B00020;
--material-error-light: #CF6679;
--material-error-dark: #880E4F;

/* 警告状态 */
--material-warning: #FFAB00;
--material-warning-light: #FFD740;
--material-warning-dark: #C67800;

/* 成功状态 */
--material-success: #4CAF50;
--material-success-light: #81C784;
--material-success-dark: #388E3C;

/* 信息状态 */
--material-info: #2196F3;
--material-info-light: #64B5F6;
--material-info-dark: #1976D2;
```

**使用场景**：
- 错误：操作失败、错误提示、危险操作
- 警告：注意事项、次要提醒、待处理状态
- 成功：操作成功、完成状态、积极反馈
- 信息：一般提示、帮助信息、说明文字

### 文本色（Text Colors）
```css
/* 主要文字 */
--material-text-primary: #000000;
--material-text-primary-light: rgba(0, 0, 0, 0.87);
--material-text-primary-dark: rgba(255, 255, 255, 0.87);

/* 次要文字 */
--material-text-secondary: #000000;
--material-text-secondary-light: rgba(0, 0, 0, 0.6);
--material-text-secondary-dark: rgba(255, 255, 255, 0.6);

/* 禁用文字 */
--material-text-disabled: #000000;
--material-text-disabled-light: rgba(0, 0, 0, 0.38);
--material-text-disabled-dark: rgba(255, 255, 255, 0.38);
```

**使用场景**：
- 主要文字：标题、重要内容、主要信息
- 次要文字：正文、辅助信息、次要内容
- 禁用文字：禁用状态、不可用元素

### Design Token 命名建议
```
--color-{hue}-{shade}
--color-{semantic}-{state}

示例：
--color-primary-500
--color-secondary-600
--color-error-dark
--color-success-light
```

### 色彩使用原则
1. **色彩层次**：使用500色作为主色，其他色阶用于变体
2. **对比度要求**：确保文字与背景有足够对比度（至少4.5:1）
3. **色彩限制**：每个页面中主色不超过1种，辅助色不超过2种
4. **功能导向**：颜色使用服务于功能，避免过度装饰
5. **暗色模式**：支持亮色和暗色两种主题

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
/* 主字体 - Roboto */
--font-primary: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

/* 备用字体 - 中文支持 */
--font-secondary: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;

/* 等宽字体 - 代码和技术内容 */
--font-mono: 'Roboto Mono', 'Fira Code', 'Courier New', monospace;
```

**字体选择理由**：
- Roboto：Material Design官方字体，现代、清晰、易读
- Noto Sans SC：优秀的中文显示效果，与Roboto风格统一
- Roboto Mono：专业的等宽字体，适合代码和技术内容

### 字号层级（Font Size Scale）
基于Material Design排版系统：

```css
/* 标题层级 */
--font-size-h1: 6rem;      /* 96px - 页面主标题 */
--font-size-h2: 3.75rem;   /* 60px - 章节标题 */
--font-size-h3: 3rem;       /* 48px - 子章节标题 */
--font-size-h4: 2.125rem;  /* 34px - 卡片标题 */
--font-size-h5: 1.5rem;     /* 24px - 小标题 */
--font-size-h6: 1.25rem;    /* 20px - 微标题 */

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
--line-height-dense: 1;      /* 紧凑 - 标题 */
--line-height-normal: 1.5;   /* 标准 - 正文 */
--line-height-relaxed: 2;   /* 宽松 - 长文本 */
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
--letter-spacing-tight: -0.015em;  /* 紧凑 - 大标题 */
--letter-spacing-normal: 0;         /* 标准 - 正文 */
--letter-spacing-wide: 0.015em;    /* 宽松 - 小标题 */
--letter-spacing-wider: 0.075em;   /* 更宽 - 标签 */
```

### 排版节奏规则
1. **8dp网格**：所有垂直间距为8dp的倍数
2. **视觉层次**：通过字号、字重、颜色建立清晰的层次结构
3. **对齐原则**：严格左对齐，避免居中对齐（除特殊情况）
4. **充足留白**：使用充足的留白空间，营造呼吸感
5. **一致性**：相同类型的元素使用相同的排版规则

### 响应式排版
```css
/* 移动端（< 600dp） */
@media (max-width: 599px) {
    --font-size-h1: 3.75rem;  /* 60px */
    --font-size-h2: 2.125rem; /* 34px */
    --font-size-h3: 1.75rem;   /* 28px */
    --font-size-body1: 1rem;    /* 16px */
}

/* 平板端（600dp - 840dp） */
@media (min-width: 600dp) and (max-width: 839px) {
    --font-size-h1: 4.5rem;    /* 72px */
    --font-size-h2: 2.625rem;  /* 42px */
    --font-size-h3: 2.125rem;  /* 34px */
    --font-size-body1: 1rem;    /* 16px */
}

/* 桌面端（≥ 840dp） */
@media (min-width: 840px) {
    --font-size-h1: 6rem;      /* 96px */
    --font-size-h2: 3.75rem;   /* 60px */
    --font-size-h3: 3rem;      /* 48px */
    --font-size-body1: 1rem;    /* 16px */
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
1. **固定布局**：固定宽度，适合内容密集型页面
2. **流式布局**：自适应宽度，适合响应式页面
3. **弹性布局**：Flexbox布局，适合组件内部布局
4. **网格布局**：CSS Grid布局，适合复杂页面布局

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
    background-color: var(--material-primary);
    color: #FFFFFF;
    border: none;
    border-radius: 4px;
    font-weight: var(--font-weight-medium);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                0 3px 1px -2px rgba(0, 0, 0, 0.12),
                0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

/* 悬停状态 */
.btn-contained:hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                0 4px 5px 0 rgba(0, 0, 0, 0.14),
                0 1px 10px 0 rgba(0, 0, 0, 0.12);
}

/* 激活状态 */
.btn-contained:active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                0 8px 10px 1px rgba(0, 0, 0, 0.14),
                0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

/* 禁用状态 */
.btn-contained:disabled {
    background-color: rgba(0, 0, 0, 0.12);
    color: rgba(0, 0, 0, 0.38);
    cursor: not-allowed;
    box-shadow: none;
}

/* 焦点状态 */
.btn-contained:focus {
    outline: none;
}
```

#### 变体规范
```css
/* 实心按钮 */
.btn-contained {
    background-color: var(--material-primary);
    color: #FFFFFF;
}

/* 文字按钮 */
.btn-text {
    background-color: transparent;
    color: var(--material-primary);
}

/* 轮廓按钮 */
.btn-outlined {
    background-color: transparent;
    color: var(--material-primary);
    border: 1px solid rgba(98, 0, 238, 0.5);
}
```

#### 圆角规范
```css
/* Material Design：小圆角 */
.btn {
    border-radius: 4px; /* 小圆角 - Material Design */
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
    background-color: var(--material-surface);
    border-radius: 4px;
    padding: var(--spacing-3);
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
                0 1px 1px 0 rgba(0, 0, 0, 0.14),
                0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

.card:hover {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                0 8px 10px 1px rgba(0, 0, 0, 0.14),
                0 3px 14px 2px rgba(0, 0, 0, 0.12);
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
/* Material Design：多层阴影 */
.shadow-1 {
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
                0 1px 1px 0 rgba(0, 0, 0, 0.14),
                0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

.shadow-2 {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                0 2px 2px 0 rgba(0, 0, 0, 0.14),
                0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.shadow-3 {
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
                0 3px 4px 0 rgba(0, 0, 0, 0.14),
                0 1px 8px 0 rgba(0, 0, 0, 0.12);
}

.shadow-4 {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                0 4px 5px 0 rgba(0, 0, 0, 0.14),
                0 1px 10px 0 rgba(0, 0, 0, 0.12);
}

.shadow-5 {
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
                0 6px 10px 0 rgba(0, 0, 0, 0.14),
                0 1px 18px 0 rgba(0, 0, 0, 0.12);
}
```

### Input（输入框）

#### 样式规范
```css
.input {
    width: 100%;
    height: 56px;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    color: var(--material-text-primary-light);
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    border-radius: 4px 4px 0 0;
    font-weight: var(--font-weight-regular);
}

.input:hover {
    border-bottom-color: rgba(0, 0, 0, 0.87);
}

.input:focus {
    border-bottom-color: var(--material-primary);
    border-bottom-width: 2px;
}

.input-error {
    border-bottom-color: var(--material-error);
}

.input-disabled {
    color: rgba(0, 0, 0, 0.38);
    border-bottom-style: dashed;
    cursor: not-allowed;
}
```

#### 尺寸规范
```css
.input-small {
    height: 48px;
    padding: 0.625rem 0.875rem;
    font-size: 0.875rem;
}

.input-medium {
    height: 56px;
    padding: 0.75rem 1rem;
    font-size: 1rem;
}

.input-large {
    height: 64px;
    padding: 0.875rem 1.125rem;
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
    margin-bottom: var(--spacing-1);
    font-size: 0.75rem;
    font-weight: var(--font-weight-medium);
    color: var(--material-text-secondary-light);
    text-transform: uppercase;
    letter-spacing: 0.08333em;
}

.form-hint {
    margin-top: var(--spacing-1);
    font-size: 0.75rem;
    color: var(--material-text-secondary-light);
}

.form-error {
    margin-top: var(--spacing-1);
    font-size: 0.75rem;
    color: var(--material-error);
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
    background-color: var(--material-surface);
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                0 4px 5px 0 rgba(0, 0, 0, 0.14),
                0 1px 10px 0 rgba(0, 0, 0, 0.12);
}

.nav-link {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    font-weight: var(--font-weight-medium);
    color: var(--material-text-primary-light);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.08929em;
    border-radius: 4px;
}

.nav-link:hover,
.nav-link.active {
    background-color: rgba(98, 0, 238, 0.08);
    color: var(--material-primary);
}
```

#### 侧边导航
```css
.sidebar {
    width: 256px;
    height: 100vh;
    padding: var(--spacing-3);
    background-color: var(--material-surface);
    border-right: 1px solid rgba(0, 0, 0, 0.12);
}

.sidebar-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    margin-bottom: var(--spacing-1);
    font-size: 0.875rem;
    font-weight: var(--font-weight-medium);
    color: var(--material-text-primary-light);
    text-decoration: none;
    border-radius: 4px;
}

.sidebar-item:hover,
.sidebar-item.active {
    background-color: rgba(98, 0, 238, 0.08);
    color: var(--material-primary);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
**风格特征**：
- **几何化**：基于基础几何形状
- **24dp网格**：所有图标基于24dp网格
- **2px描边**：使用2px描边宽度
- **填充和轮廓**：支持填充和轮廓两种风格

**图标规范**：
```css
.icon {
    width: 24px;
    height: 24px;
    stroke-width: 2px;
    stroke: currentColor;
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
    fill: currentColor;
    stroke: none;
}
```

**图标库建议**：
- Material Icons：Material Design官方图标库
- Material Design Icons：第三方Material图标库
- Material Symbols：新一代Material图标库

### 插画风格
**风格特征**：
- **扁平化**：避免透视和阴影，强调平面感
- **色彩限制**：使用Material Design色彩系统
- **几何构成**：使用基础几何形状
- **功能导向**：插画服务于功能，避免过度装饰

**插画原则**：
1. **扁平原则**：所有元素都是扁平的
2. **色彩原则**：严格使用Material Design色彩系统
3. **几何原则**：所有元素基于基础几何形状
4. **功能原则**：插画必须服务于功能，不能纯粹装饰

**插画类型**：
- **概念插画**：解释抽象概念
- **场景插画**：展示使用场景
- **装饰插画**：增强视觉吸引力（适度使用）

### 设计原则
1. **适度装饰**：适度使用装饰元素，避免过度
2. **辅助理解**：图标和插画必须帮助用户理解内容
3. **一致性**：所有图标和插画保持统一的风格
4. **可访问性**：提供替代文本，确保屏幕阅读器可访问

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover（悬停）行为
```css
/* 按钮悬停 */
.button:hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                0 4px 5px 0 rgba(0, 0, 0, 0.14),
                0 1px 10px 0 rgba(0, 0, 0, 0.12);
}

/* 卡片悬停 */
.card:hover {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                0 8px 10px 1px rgba(0, 0, 0, 0.14),
                0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

/* 链接悬停 */
.link:hover {
    color: var(--material-primary);
    text-decoration: underline;
}
```

### Active（激活）行为
```css
/* 按钮激活 */
.button:active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                0 8px 10px 1px rgba(0, 0, 0, 0.14),
                0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

/* 卡片激活 */
.card:active {
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
                0 3px 4px 0 rgba(0, 0, 0, 0.14),
                0 1px 8px 0 rgba(0, 0, 0, 0.12);
}
```

### Focus（焦点）行为
```css
/* 焦点样式 */
*:focus {
    outline: none;
}

/* 按钮焦点 */
.button:focus {
    outline: none;
}
```

### 波纹效果（Ripple Effect）
```css
/* 波纹效果 */
.ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple 600ms linear;
    pointer-events: none;
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
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
--duration-normal: 250ms;  /* 标准交互 */
--duration-slow: 350ms;    /* 慢速交互 */
--duration-slower: 500ms;  /* 复杂动画 */
```

**动效原则**：
1. **自然流畅**：动效自然流畅，避免突兀
2. **波纹反馈**：使用波纹效果提供触觉反馈
3. **适度原则**：动效服务于功能，避免过度动画
4. **性能优先**：使用CSS动画，避免JavaScript动画

### 操作反馈设计原则
1. **波纹反馈**：用户操作后提供波纹效果反馈
2. **明确状态**：清晰展示当前状态（悬停、激活、禁用）
3. **深度层次**：通过阴影、位移建立深度层次
4. **一致性**：相同类型的操作使用相同的反馈方式

**反馈类型**：
- **视觉反馈**：波纹效果、颜色变化、阴影变化
- **触觉反馈**：移动端震动（重要操作）
- **听觉反馈**：音效（谨慎使用，避免打扰）

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
    /* Primary Colors */
    --color-primary-50: #EDE7F6;
    --color-primary-100: #D1C4E9;
    --color-primary-200: #B39DDB;
    --color-primary-300: #9575CD;
    --color-primary-400: #7E57C2;
    --color-primary-500: #673AB7;
    --color-primary-600: #5E35B1;
    --color-primary-700: #512DA8;
    --color-primary-800: #4527A0;
    --color-primary-900: #311B92;

    /* Secondary Colors */
    --color-secondary-50: #E0F2F1;
    --color-secondary-100: #B2DFDB;
    --color-secondary-200: #80CBC4;
    --color-secondary-300: #4DB6AC;
    --color-secondary-400: #26A69A;
    --color-secondary-500: #009688;
    --color-secondary-600: #00897B;
    --color-secondary-700: #00796B;
    --color-secondary-800: #00695C;
    --color-secondary-900: #004D40;

    /* Background Colors */
    --color-background: #FFFFFF;
    --color-background-light: #FAFAFA;
    --color-background-dark: #121212;

    /* Surface Colors */
    --color-surface: #FFFFFF;
    --color-surface-light: #F5F5F5;
    --color-surface-dark: #1E1E1E;

    /* Text Colors */
    --color-text-primary: #000000;
    --color-text-primary-light: rgba(0, 0, 0, 0.87);
    --color-text-primary-dark: rgba(255, 255, 255, 0.87);

    --color-text-secondary: #000000;
    --color-text-secondary-light: rgba(0, 0, 0, 0.6);
    --color-text-secondary-dark: rgba(255, 255, 255, 0.6);

    --color-text-disabled: #000000;
    --color-text-disabled-light: rgba(0, 0, 0, 0.38);
    --color-text-disabled-dark: rgba(255, 255, 255, 0.38);

    /* Semantic Colors */
    --color-error: #B00020;
    --color-error-light: #CF6679;
    --color-error-dark: #880E4F;

    --color-warning: #FFAB00;
    --color-warning-light: #FFD740;
    --color-warning-dark: #C67800;

    --color-success: #4CAF50;
    --color-success-light: #81C784;
    --color-success-dark: #388E3C;

    --color-info: #2196F3;
    --color-info-light: #64B5F6;
    --color-info-dark: #1976D2;
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
    --radius-sm: 2px;
    --radius-md: 4px;
    --radius-lg: 8px;
    --radius-xl: 12px;
    --radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
    --shadow-1: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
                0 1px 1px 0 rgba(0, 0, 0, 0.14),
                0 1px 3px 0 rgba(0, 0, 0, 0.12);

    --shadow-2: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                0 2px 2px 0 rgba(0, 0, 0, 0.14),
                0 1px 5px 0 rgba(0, 0, 0, 0.12);

    --shadow-3: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
                0 3px 4px 0 rgba(0, 0, 0, 0.14),
                0 1px 8px 0 rgba(0, 0, 0, 0.12);

    --shadow-4: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                0 4px 5px 0 rgba(0, 0, 0, 0.14),
                0 1px 10px 0 rgba(0, 0, 0, 0.12);

    --shadow-5: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
                0 6px 10px 0 rgba(0, 0, 0, 0.14),
                0 1px 18px 0 rgba(0, 0, 0, 0.12);
}
```

### Typography Tokens
```css
:root {
    /* Font Family */
    --font-primary: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    --font-secondary: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    --font-mono: 'Roboto Mono', 'Fira Code', 'Courier New', monospace;

    /* Font Size */
    --font-size-h1: 6rem;
    --font-size-h2: 3.75rem;
    --font-size-h3: 3rem;
    --font-size-h4: 2.125rem;
    --font-size-h5: 1.5rem;
    --font-size-h6: 1.25rem;
    --font-size-subtitle1: 1rem;
    --font-size-subtitle2: 0.875rem;
    --font-size-body1: 1rem;
    --font-size-body2: 0.875rem;
    --font-size-button: 0.875rem;
    --font-size-caption: 0.75rem;
    --font-size-overline: 0.625rem;

    /* Line Height */
    --line-height-dense: 1;
    --line-height-normal: 1.5;
    --line-height-relaxed: 2;

    /* Font Weight */
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;

    /* Letter Spacing */
    --letter-spacing-tight: -0.015em;
    --letter-spacing-normal: 0;
    --letter-spacing-wide: 0.015em;
    --letter-spacing-wider: 0.075em;
}
```

### Animation Tokens
```css
:root {
    /* Duration */
    --duration-fast: 150ms;
    --duration-normal: 250ms;
    --duration-slow: 350ms;
    --duration-slower: 500ms;

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
- 纸张隐喻的设计理念
- 深度层次的设计语言
- 波纹反馈的设计思维
- 卡片布局的设计风格

#### 2. 色彩系统
✅ **可以学习**：
- 500色为主色的使用方法
- 色阶系统的搭配原则
- 语义色彩的使用方式
- 暗色模式的实现技巧

#### 3. 排版系统
✅ **可以学习**：
- Roboto字体的使用原则
- 基于8dp网格的排版系统
- 清晰的层次结构建立方法
- 严格对齐的原则

#### 4. 布局系统
✅ **可以学习**：
- 12列栅格系统的应用
- 基于断点的布局方法
- 响应式断点设置策略
- 卡片式布局的使用原则

#### 5. 组件设计
✅ **可以学习**：
- 小圆角设计语言的应用
- 多层阴影效果的使用
- 波纹反馈的组件设计
- 浮动操作按钮的设计

#### 6. 图标与插画
✅ **可以学习**：
- 24dp网格图标设计方法
- 填充和轮廓图标风格
- 扁平导向的插画设计
- 色彩限制的使用原则

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 1. 品牌元素
❌ **不应复刻**：
- Google的商标和标志
- Material Design的官方标识
- Google的品牌视觉识别系统
- 任何受版权保护的Google品牌元素

#### 2. 插画内容
❌ **不应复刻**：
- Google的原创插画
- Material Design的插画内容
- 特定风格的特定插画作品
- 任何受版权保护的插画作品

#### 3. 文字内容
❌ **不应复刻**：
- Google的官方文案
- Material Design的原始文字
- Google的历史文档
- 任何受版权保护的文字内容

#### 4. 具体设计
❌ **不应复刻**：
- Google的具体页面设计
- Material Design的特定组件设计
- Google的完整视觉系统
- 任何直接复制的设计元素

### 合法使用建议

#### 1. 风格借鉴
- 学习Material Design的原则和方法
- 参考色彩和排版系统
- 借鉴波纹反馈的设计理念
- 应用卡片布局的设计思维

#### 2. 原创设计
- 基于Material Design原则创建原创设计
- 使用Material Design风格但加入自己的创意
- 结合现代技术和Material Design理念
- 创建独特的Material Design风格变体

#### 3. 法律合规
- 尊重Google的知识产权
- 避免直接复制受保护的内容
- 注明设计灵感的来源
- 遵守相关的版权和商标法律

#### 4. 道德准则
- 诚实说明设计灵感来源
- 不声称自己是Google的设计
- 尊重Google的原创作品
- 促进Material Design理念的合法传播

### 总结
Material Design是Google推出的重要设计语言，其核心理念是通过纸张隐喻、深度层次、波纹反馈和卡片布局，创造出具有真实感和交互性的设计语言。但是，在使用Material Design风格时，必须遵守相关的知识产权法律，尊重Google的知识产权，避免直接复制受保护的内容。通过学习Material Design的原则和方法，结合自己的创意和现代技术，可以创建出独特而合法的Material Design风格设计。