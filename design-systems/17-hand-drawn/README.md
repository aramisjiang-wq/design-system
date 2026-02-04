# Hand Drawn Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **手绘感**：模拟手绘笔触和纹理
- **自然感**：自然、有机的视觉效果
- **不规则性**：不规则的形状和线条
- **温暖感**：温暖、亲切的视觉体验
- **个性表达**：通过手绘元素表达个性

### 适用产品类型
- **创意平台**：艺术展示、创意作品、设计作品
- **教育应用**：儿童教育、在线课程、学习平台
- **生活方式**：个人博客、生活分享、社区平台
- **营销页面**：活动页面、营销活动、品牌宣传

### 设计哲学
Hand Drawn（手绘风格）模拟手绘笔触和纹理，强调自然、有机和温暖的视觉效果。其核心理念是"自然即美"，通过不规则的形状、手绘的线条和温暖的色彩，创造出亲切而独特的视觉体验。Hand Drawn强调个性表达、自然感和温暖感，通过手绘的元素和有机的形状，提供独特而亲切的视觉体验。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
基于Hand Drawn温暖色彩：

```css
/* 主色 - 暖蓝色 */
--handdrawn-blue-primary: #5D9CEC;
--handdrawn-blue-light: #AAB2BD;
--handdrawn-blue-dark: #4A89DC;

/* 暖蓝色变体 */
--handdrawn-blue-50: #F5F7FA;
--handdrawn-blue-100: #E6E9ED;
--handdrawn-blue-200: #CCD1D9;
--handdrawn-blue-300: #AAB2BD;
--handdrawn-blue-400: #656D78;
--handdrawn-blue-500: #434A54;
--handdrawn-blue-600: #5D9CEC;
--handdrawn-blue-700: #4A89DC;
--handdrawn-blue-800: #3C8DBC;
--handdrawn-blue-900: #367FA9;
```

**使用场景**：
- 暖蓝色：品牌识别、主要元素、重要装饰
- 暖蓝色变体：不同深浅的背景、边框、装饰

### 辅助色（Secondary Colors）
```css
/* 辅助色 - 暖粉色 */
--handdrawn-pink-primary: #D770AD;
--handdrawn-pink-light: #EC87C0;
--handdrawn-pink-dark: #D770AD;

/* 暖粉色变体 */
--handdrawn-pink-50: #F5E6F0;
--handdrawn-pink-100: #F2D0E6;
--handdrawn-pink-200: #E8B8D6;
--handdrawn-pink-300: #EC87C0;
--handdrawn-pink-400: #D770AD;
--handdrawn-pink-500: #C05A8F;
--handdrawn-pink-600: #B04D7D;
--handdrawn-pink-700: #9D416B;
--handdrawn-pink-800: #8A3459;
--handdrawn-pink-900: #772747;

/* 辅助色 - 暖绿色 */
--handdrawn-green-primary: #8CC152;
--handdrawn-green-light: #A0D468;
--handdrawn-green-dark: #8CC152;

/* 暖绿色变体 */
--handdrawn-green-50: #F5F8F0;
--handdrawn-green-100: #E8F2E0;
--handdrawn-green-200: #D5E5C5;
--handdrawn-green-300: #A0D468;
--handdrawn-green-400: #8CC152;
--handdrawn-green-500: #7FB03E;
--handdrawn-green-600: #6D9B33;
--handdrawn-green-700: #5B8628;
--handdrawn-green-800: #49711D;
--handdrawn-green-900: #375C12;

/* 辅助色 - 暖橙色 */
--handdrawn-orange-primary: #FC6E51;
--handdrawn-orange-light: #FFCE54;
--handdrawn-orange-dark: #E9573F;

/* 暖橙色变体 */
--handdrawn-orange-50: #FFF5F0;
--handdrawn-orange-100: #FFE8DC;
--handdrawn-orange-200: #FFD4C0;
--handdrawn-orange-300: #FFCE54;
--handdrawn-orange-400: #FC6E51;
--handdrawn-orange-500: #E9573F;
--handdrawn-orange-600: #D9452D;
--handdrawn-orange-700: #C9331B;
--handdrawn-orange-800: #B92109;
--handdrawn-orange-900: #A90F00;
```

**使用场景**：
- 暖粉色：装饰元素、强调元素、情感表达
- 暖绿色：装饰元素、对比元素、视觉冲击
- 暖橙色：装饰元素、强调元素、活力表达

### 背景色（Background Colors）
```css
/* 背景色 - 纸质背景 */
--handdrawn-background: #FAFAFA;
--handdrawn-background-light: #FFFFFF;
--handdrawn-background-dark: #F5F5F5;

/* 表面色 - 纸质表面 */
--handdrawn-surface: #FFFFFF;
--handdrawn-surface-light: #FAFAFA;
--handdrawn-surface-dark: #F5F5F5;
```

**使用场景**：
- 背景色：页面背景、应用背景、装饰背景
- 表面色：卡片背景、组件背景、弹窗背景

### 语义色（Semantic Colors）
```css
/* 错误状态 */
--handdrawn-error: #DA4453;
--handdrawn-error-light: #ED5565;
--handdrawn-error-dark: #DA4453;

/* 警告状态 */
--handdrawn-warning: #F6BB42;
--handdrawn-warning-light: #FFCE54;
--handdrawn-warning-dark: #F6BB42;

/* 成功状态 */
--handdrawn-success: #8CC152;
--handdrawn-success-light: #A0D468;
--handdrawn-success-dark: #8CC152;

/* 信息状态 */
--handdrawn-info: #4A89DC;
--handdrawn-info-light: #5D9CEC;
--handdrawn-info-dark: #4A89DC;
```

**使用场景**：
- 错误：操作失败、错误提示、危险操作
- 警告：注意事项、次要提醒、待处理状态
- 成功：操作成功、完成状态、积极反馈
- 信息：一般提示、帮助信息、说明文字

### 文本色（Text Colors）
```css
/* 主要文字 */
--handdrawn-text-primary: #434A54;
--handdrawn-text-primary-light: rgba(67, 74, 84, 0.87);
--handdrawn-text-primary-dark: rgba(67, 74, 84, 0.95);

/* 次要文字 */
--handdrawn-text-secondary: #656D78;
--handdrawn-text-secondary-light: rgba(101, 109, 120, 0.87);
--handdrawn-text-secondary-dark: rgba(101, 109, 120, 0.6);

/* 禁用文字 */
--handdrawn-text-disabled: #AAB2BD;
--handdrawn-text-disabled-light: rgba(170, 178, 189, 0.5);
--handdrawn-text-disabled-dark: rgba(170, 178, 189, 0.3);
```

**使用场景**：
- 主要文字：标题、重要内容、主要信息
- 次要文字：正文、辅助信息、次要内容
- 禁用文字：禁用状态、不可用元素

### Design Token 命名建议
```
--handdrawn-{hue}-{shade}
--handdrawn-{semantic}-{state}

示例：
--handdrawn-blue-500
--handdrawn-pink-600
--handdrawn-error-dark
--handdrawn-success-light
```

### 色彩使用原则
1. **温暖色调**：使用温暖的色调，创造亲切感
2. **自然色彩**：使用自然的色彩，创造有机感
3. **柔和对比**：使用柔和的对比，增强可读性
4. **手绘质感**：通过色彩创造手绘质感
5. **温暖感**：通过温暖的色彩创造温暖感

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
/* 主字体 - 手写字体 */
--font-primary: 'Patrick Hand', 'Comic Sans MS', 'Chalkboard SE', cursive;

/* 备用字体 - 无衬线字体 */
--font-secondary: 'Open Sans', 'Helvetica Neue', 'Arial', sans-serif;

/* 装饰字体 - 手绘字体 */
--font-display: 'Indie Flower', 'Amatic SC', 'Shadows Into Light', cursive;
```

**字体选择理由**：
- Patrick Hand：温暖的手写字体，适合标题和装饰
- Open Sans：现代的无衬线字体，适合正文
- Indie Flower：艺术手写字体，适合装饰和表达个性

### 字号层级（Font Size Scale）
基于Hand Drawn排版系统：

```css
/* 标题层级 */
--font-size-h1: 3.5rem;      /* 56px - 页面主标题 */
--font-size-h2: 2.75rem;       /* 44px - 章节标题 */
--font-size-h3: 2.125rem;         /* 34px - 子章节标题 */
--font-size-h4: 1.75rem;       /* 28px - 卡片标题 */
--font-size-h5: 1.375rem;      /* 22px - 小标题 */
--font-size-h6: 1.125rem;         /* 18px - 微标题 */

/* 副标题层级 */
--font-size-subtitle1: 1.125rem;      /* 18px - 副标题1 */
--font-size-subtitle2: 1rem;  /* 16px - 副标题2 */

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
--line-height-dense: 1.2;    /* 紧凑 - 标题 */
--line-height-normal: 1.6;    /* 标准 - 正文 */
--line-height-relaxed: 1.8;  /* 宽松 - 长文本 */
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
--letter-spacing-wide: 0.02em;     /* 宽松 - 小标题 */
--letter-spacing-wider: 0.05em;   /* 更宽 - 标签 */
--letter-spacing-widest: 0.1em;  /* 最宽 - 装饰文字 */
```

### 排版节奏规则
1. **手绘原则**：通过手写字体和排版创造温暖感
2. **自然原则**：使用自然的排版方式，创造有机感
3. **层次清晰**：通过字号、字重、颜色建立清晰的层次结构
4. **温暖留白**：使用温暖的留白，营造亲切的视觉效果
5. **个性表达**：通过独特的排版方式表达个性

### 响应式排版
```css
/* 移动端（< 600dp） */
@media (max-width: 599px) {
    --font-size-h1: 2.5rem;  /* 40px */
    --font-size-h2: 2rem; /* 32px */
    --font-size-h3: 1.625rem; /* 26px */
    --font-size-body1: 1rem;   /* 16px */
}

/* 平板端（600dp - 840dp） */
@media (min-width: 600dp) and (max-width: 839px) {
    --font-size-h1: 3rem;    /* 48px */
    --font-size-h2: 2.375rem; /* 38px */
    --font-size-h3: 1.875rem; /* 30px */
    --font-size-body1: 1.0625rem;   /* 17px */
}

/* 桌面端（≥ 840dp） */
@media (min-width: 840px) {
    --font-size-h1: 3.5rem;  /* 56px */
    --font-size-h2: 2.75rem;  /* 44px */
    --font-size-h3: 2.125rem;    /* 34px */
    --font-size-body1: 1.125rem;   /* 18px */
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
--container-max-width: 1280px;  /* 最大宽度 */
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
1. **自然布局**：基于自然元素的布局方式
2. **有机布局**：基于有机形状的布局方式
3. **不规则布局**：不规则、不规则的布局方式
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
    background: #5D9CEC;
    color: #FFFFFF;
    border: 2px solid #4A89DC;
    border-radius: 8px;
    font-weight: var(--font-weight-bold);
    box-shadow: 0 4px 8px rgba(93, 156, 236, 0.2);
}

/* 悬停状态 */
.btn-contained:hover {
    background: #4A89DC;
    box-shadow: 0 6px 12px rgba(93, 156, 236, 0.3);
    transform: translateY(-2px);
}

/* 激活状态 */
.btn-contained:active {
    background: #3C8DBC;
    box-shadow: 0 2px 4px rgba(93, 156, 236, 0.2);
    transform: translateY(0);
}

/* 禁用状态 */
.btn-contained:disabled {
    background: #AAB2BD;
    color: #FFFFFF;
    cursor: not-allowed;
    box-shadow: none;
}

/* 焦点状态 */
.btn-contained:focus {
    outline: 3px solid #5D9CEC;
    outline-offset: 2px;
}
```

#### 变体规范
```css
/* 实心按钮 */
.btn-contained {
    background: #5D9CEC;
    color: #FFFFFF;
    border: 2px solid #4A89DC;
}

/* 文字按钮 */
.btn-text {
    background: transparent;
    color: #5D9CEC;
    border: none;
    text-decoration: underline;
}

/* 轮廓按钮 */
.btn-outlined {
    background: transparent;
    color: #5D9CEC;
    border: 2px solid #5D9CEC;
}
```

#### 圆角规范
```css
/* Hand Drawn：圆角设计 */
.btn {
    border-radius: 8px; /* 圆角 - Hand Drawn */
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
    border: 2px solid #E6E9ED;
    border-radius: 12px;
    padding: var(--spacing-4);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
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
/* Hand Drawn：柔和阴影 */
.shadow-1 {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.shadow-2 {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
}

.shadow-3 {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.16);
}

.shadow-4 {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.shadow-5 {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.24);
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
    color: #434A54;
    background: #FFFFFF;
    border: 2px solid #E6E9ED;
    border-radius: 8px;
    font-weight: var(--font-weight-regular);
}

.input:hover {
    border-color: #AAB2BD;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.input:focus {
    border-color: #5D9CEC;
    outline: 3px solid #E6E9ED;
    outline-offset: -2px;
    box-shadow: 0 4px 8px rgba(93, 156, 236, 0.2);
}

.input-error {
    border-color: #DA4453;
}

.input-disabled {
    color: #AAB2BD;
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
    color: #434A54;
    text-transform: none;
    letter-spacing: 0.02em;
}

.form-hint {
    margin-top: var(--spacing-2);
    font-size: 0.875rem;
    color: #656D78;
}

.form-error {
    margin-top: var(--spacing-2);
    font-size: 0.875rem;
    color: #DA4453;
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
    border-bottom: 2px solid #E6E9ED;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.nav-link {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
    color: #434A54;
    text-decoration: none;
    text-transform: none;
    letter-spacing: 0.02em;
    border-radius: 8px;
}

.nav-link:hover,
.nav-link.active {
    background: #5D9CEC;
    color: #FFFFFF;
}
```

#### 侧边导航
```css
.sidebar {
    width: 260px;
    height: 100vh;
    padding: var(--spacing-4);
    background: #FFFFFF;
    border-right: 2px solid #E6E9ED;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);
}

.sidebar-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    margin-bottom: var(--spacing-2);
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
    color: #434A54;
    text-decoration: none;
    text-transform: none;
    letter-spacing: 0.02em;
    border-radius: 8px;
}

.sidebar-item:hover,
.sidebar-item.active {
    background: #5D9CEC;
    color: #FFFFFF;
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
**风格特征**：
- **手绘化**：基于手绘笔触
- **自然化**：使用自然的形状
- **不规则性**：不规则的线条
- **温暖感**：温暖的图标风格

**图标规范**：
```css
.icon {
    width: 32px;
    height: 32px;
    stroke-width: 2px;
    stroke: #5D9CEC;
    fill: #E6E9ED;
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
    fill: #5D9CEC;
    stroke: none;
}
```

**图标库建议**：
- Material Icons：基础图标库，可自定义样式
- Heroicons：简约的图标库
- 自定义手绘图标：基于手绘风格自定义图标

### 插画风格
**风格特征**：
- **手绘构成**：使用手绘笔触构成插画
- **自然化**：使用自然的形状
- **温暖色彩**：使用温暖的色彩
- **温暖感**：插画必须具有温暖感

**插画原则**：
1. **手绘原则**：所有元素都是手绘的
2. **自然原则**：所有元素基于自然形状
3. **温暖色彩**：使用温暖的色彩
4. **温暖原则**：插画必须具有温暖感

**插画类型**：
- **手绘插画**：基于手绘笔触的插画
- **自然插画**：强调自然性的插画
- **温暖插画**：具有温暖感的插画
- **信息插画**：提供信息的插画

### 设计原则
1. **手绘导向**：通过手绘元素创造温暖感
2. **自然导向**：所有设计必须具有自然感
3. **温暖感**：所有元素保持温暖感
4. **个性表达**：确保所有元素具有个性

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover（悬停）行为
```css
/* 按钮悬停 */
.button:hover {
    background: #4A89DC;
    box-shadow: 0 6px 12px rgba(93, 156, 236, 0.3);
    transform: translateY(-2px);
}

/* 卡片悬停 */
.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
}

/* 链接悬停 */
.link:hover {
    color: #5D9CEC;
    text-decoration: underline;
}
```

### Active（激活）行为
```css
/* 按钮激活 */
.button:active {
    background: #3C8DBC;
    box-shadow: 0 2px 4px rgba(93, 156, 236, 0.2);
    transform: translateY(0);
}

/* 卡片激活 */
.card:active {
    transform: translateY(-2px);
}
```

### Focus（焦点）行为
```css
/* 焦点样式 */
*:focus {
    outline: 3px solid #5D9CEC;
    outline-offset: 2px;
}
```

### 动效节奏
```css
/* 标准缓动 */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

/* 弹性缓动 */
--ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);

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
1. **自然流畅**：动效自然流畅，创造温暖感
2. **温暖导向**：动效具有温暖感，创造独特的体验
3. **适度原则**：动效服务于功能，避免过度动画
4. **性能优先**：使用CSS动画，避免JavaScript动画

### 操作反馈设计原则
1. **视觉反馈**：颜色变化、边框变化、阴影变化
2. **明确状态**：清晰展示当前状态（悬停、激活、禁用）
3. **温暖效果**：通过温暖元素提供反馈
4. **一致性**：相同类型的操作使用相同的反馈方式

**反馈类型**：
- **视觉反馈**：颜色变化、边框变化、阴影变化
- **触觉反馈**：移动端震动（重要操作）
- **听觉反馈**：音效（谨慎使用，避免打扰）

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
    /* Blue Colors */
    --handdrawn-blue-50: #F5F7FA;
    --handdrawn-blue-100: #E6E9ED;
    --handdrawn-blue-200: #CCD1D9;
    --handdrawn-blue-300: #AAB2BD;
    --handdrawn-blue-400: #656D78;
    --handdrawn-blue-500: #434A54;
    --handdrawn-blue-600: #5D9CEC;
    --handdrawn-blue-700: #4A89DC;
    --handdrawn-blue-800: #3C8DBC;
    --handdrawn-blue-900: #367FA9;

    /* Pink Colors */
    --handdrawn-pink-50: #F5E6F0;
    --handdrawn-pink-100: #F2D0E6;
    --handdrawn-pink-200: #E8B8D6;
    --handdrawn-pink-300: #EC87C0;
    --handdrawn-pink-400: #D770AD;
    --handdrawn-pink-500: #C05A8F;
    --handdrawn-pink-600: #B04D7D;
    --handdrawn-pink-700: #9D416B;
    --handdrawn-pink-800: #8A3459;
    --handdrawn-pink-900: #772747;

    /* Green Colors */
    --handdrawn-green-50: #F5F8F0;
    --handdrawn-green-100: #E8F2E0;
    --handdrawn-green-200: #D5E5C5;
    --handdrawn-green-300: #A0D468;
    --handdrawn-green-400: #8CC152;
    --handdrawn-green-500: #7FB03E;
    --handdrawn-green-600: #6D9B33;
    --handdrawn-green-700: #5B8628;
    --handdrawn-green-800: #49711D;
    --handdrawn-green-900: #375C12;

    /* Orange Colors */
    --handdrawn-orange-50: #FFF5F0;
    --handdrawn-orange-100: #FFE8DC;
    --handdrawn-orange-200: #FFD4C0;
    --handdrawn-orange-300: #FFCE54;
    --handdrawn-orange-400: #FC6E51;
    --handdrawn-orange-500: #E9573F;
    --handdrawn-orange-600: #D9452D;
    --handdrawn-orange-700: #C9331B;
    --handdrawn-orange-800: #B92109;
    --handdrawn-orange-900: #A90F00;

    /* Background Colors */
    --handdrawn-background: #FAFAFA;
    --handdrawn-background-light: #FFFFFF;
    --handdrawn-background-dark: #F5F5F5;

    /* Surface Colors */
    --handdrawn-surface: #FFFFFF;
    --handdrawn-surface-light: #FAFAFA;
    --handdrawn-surface-dark: #F5F5F5;

    /* Text Colors */
    --handdrawn-text-primary: #434A54;
    --handdrawn-text-primary-light: rgba(67, 74, 84, 0.87);
    --handdrawn-text-primary-dark: rgba(67, 74, 84, 0.95);

    --handdrawn-text-secondary: #656D78;
    --handdrawn-text-secondary-light: rgba(101, 109, 120, 0.87);
    --handdrawn-text-secondary-dark: rgba(101, 109, 120, 0.6);

    --handdrawn-text-disabled: #AAB2BD;
    --handdrawn-text-disabled-light: rgba(170, 178, 189, 0.5);
    --handdrawn-text-disabled-dark: rgba(170, 178, 189, 0.3);

    /* Semantic Colors */
    --handdrawn-error: #DA4453;
    --handdrawn-error-light: #ED5565;
    --handdrawn-error-dark: #DA4453;

    --handdrawn-warning: #F6BB42;
    --handdrawn-warning-light: #FFCE54;
    --handdrawn-warning-dark: #F6BB42;

    --handdrawn-success: #8CC152;
    --handdrawn-success-light: #A0D468;
    --handdrawn-success-dark: #8CC152;

    --handdrawn-info: #4A89DC;
    --handdrawn-info-light: #5D9CEC;
    --handdrawn-info-dark: #4A89DC;
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
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-2xl: 20px;
    --radius-3xl: 24px;
}
```

### Shadow Tokens
```css
:root {
    --shadow-1: 0 2px 4px rgba(0, 0, 0, 0.08);
    --shadow-2: 0 4px 8px rgba(0, 0, 0, 0.12);
    --shadow-3: 0 6px 12px rgba(0, 0, 0, 0.16);
    --shadow-4: 0 8px 16px rgba(0, 0, 0, 0.2);
    --shadow-5: 0 12px 24px rgba(0, 0, 0, 0.24);
}
```

### Typography Tokens
```css
:root {
    /* Font Family */
    --font-primary: 'Patrick Hand', 'Comic Sans MS', 'Chalkboard SE', cursive;
    --font-secondary: 'Open Sans', 'Helvetica Neue', 'Arial', sans-serif;
    --font-display: 'Indie Flower', 'Amatic SC', 'Shadows Into Light', cursive;

    /* Font Size */
    --font-size-h1: 3.5rem;
    --font-size-h2: 2.75rem;
    --font-size-h3: 2.125rem;
    --font-size-h4: 1.75rem;
    --font-size-h5: 1.375rem;
    --font-size-h6: 1.125rem;
    --font-size-subtitle1: 1.125rem;
    --font-size-subtitle2: 1rem;
    --font-size-body1: 1.125rem;
    --font-size-body2: 1rem;
    --font-size-button: 1rem;
    --font-size-caption: 0.875rem;
    --font-size-overline: 0.75rem;

    /* Line Height */
    --line-height-dense: 1.2;
    --line-height-normal: 1.6;
    --line-height-relaxed: 1.8;

    /* Font Weight */
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;

    /* Letter Spacing */
    --letter-spacing-tight: -0.01em;
    --letter-spacing-normal: 0;
    --letter-spacing-wide: 0.02em;
    --letter-spacing-wider: 0.05em;
    --letter-spacing-widest: 0.1em;
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
    --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
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
- 手绘化的设计理念
- 自然化的设计语言
- 不规则性的设计思维
- 温暖感的设计风格

#### 2. 色彩系统
✅ **可以学习**：
- 温暖色调的使用方法
- 自然色彩的搭配原则
- 柔和对比的实现技巧
- 温暖感的营造方法

#### 3. 排版系统
✅ **可以学习**：
- 手写字体的使用原则
- 基于自然的排版系统
- 清晰层次结构的建立方法
- 温暖感的原则

#### 4. 布局系统
✅ **可以学习**：
- 自然布局的应用
- 基于有机形状的布局方法
- 不规则布局的技巧
- 温暖感的营造方法

#### 5. 组件设计
✅ **可以学习**：
- 圆角设计语言的应用
- 柔和阴影的实现方法
- 手绘边框的使用技巧
- 纯色背景的效果营造

#### 6. 图标与插画
✅ **可以学习**：
- 手绘图标的设计方法
- 自然图标风格
- 不规则图标设计
- 温暖色彩图标实现

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 1. 品牌元素
❌ **不应复刻**：
- 特定品牌的商标和标志
- Hand Drawn历史品牌的官方标识
- 特定品牌的视觉识别系统
- 任何受版权保护的品牌元素

#### 2. 插画内容
❌ **不应复刻**：
- Hand Drawn历史时期的原创插画
- 特定品牌的插画内容
- 特定风格的特定插画作品
- 任何受版权保护的插画作品

#### 3. 文字内容
❌ **不应复刻**：
- Hand Drawn历史时期的原始文案
- 特定品牌的官方文案
- Hand Drawn历史文档
- 任何受版权保护的文字内容

#### 4. 具体设计
❌ **不应复刻**：
- Hand Drawn历史时期的特定页面设计
- 特定品牌的完整视觉系统
- Hand Drawn历史建筑的设计
- 任何直接复制的设计元素

### 合法使用建议

#### 1. 风格借鉴
- 学习Hand Drawn的原则和方法
- 参考色彩和排版系统
- 借鉴手绘化的设计理念
- 应用自然化的设计思维

#### 2. 原创设计
- 基于Hand Drawn原则创建原创设计
- 使用Hand Drawn风格但加入自己的创意
- 结合现代技术和Hand Drawn理念
- 创建独特的Hand Drawn风格变体

#### 3. 法律合规
- 尊重历史时期的知识产权
- 避免直接复制受保护的内容
- 注明设计灵感的来源
- 遵守相关的版权和商标法律

#### 4. 道德准则
- 诚实说明设计灵感来源
- 不声称自己是历史时期的设计
- 尊重Hand Drawn历史的原创作品
- 促进Hand Drawn理念的合法传播

### 总结
Hand Drawn（手绘风格）模拟手绘笔触和纹理，强调自然、有机和温暖的视觉效果。其核心理念是"自然即美"，通过不规则的形状、手绘的线条和温暖的色彩，创造出亲切而独特的视觉体验。Hand Drawn强调个性表达、自然感和温暖感，通过手绘的元素和有机的形状，提供独特而亲切的视觉体验。但是，在使用Hand Drawn风格时，必须遵守相关的知识产权法律，尊重历史时期的知识产权，避免直接复制受保护的内容。通过学习Hand Drawn的原则和方法，结合自己的创意和现代技术，可以创建出独特而合法的Hand Drawn风格设计。