# Futurism Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **未来感**：基于未来主义风格
- **科技感**：强调科技和未来感
- **动态性**：强调动态和速度感
- **几何化**：使用几何形状
- **创新性**：强调创新和前沿感

### 适用产品类型
- **科技产品**：科技、创新、前沿产品
- **游戏应用**：游戏、娱乐、互动平台
- **创新平台**：创新、前沿、科技展示
- **营销活动**：活动页面、营销活动、品牌宣传

### 设计哲学
Futurism（未来主义）基于20世纪初的未来主义艺术运动，强调速度、动态、科技和未来感。其核心理念是"未来即现在"，通过动态的线条、几何形状和科技元素，创造出具有未来感和科技感的视觉体验。Futurism强调科技感、动态性和创新性，通过几何形状和科技元素，提供独特而前沿的视觉体验。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
基于Futurism科技调色板：

```css
/* 主色 - 蓝色 */
--futurism-blue-primary: #00D9FF;
--futurism-blue-light: #5BE0FF;
--futurism-blue-dark: #0099CC;

/* 蓝色变体 */
--futurism-blue-50: #E0F7FF;
--futurism-blue-100: #B3E5FF;
--futurism-blue-200: #66D3FF;
--futurism-blue-300: #00D9FF;
--futurism-blue-400: #00C4E6;
--futurism-blue-500: #00A8CC;
--futurism-blue-600: #008CB3;
--futurism-blue-700: #007099;
--futurism-blue-800: #005480;
--futurism-blue-900: #003966;
```

**使用场景**：
- 蓝色：品牌识别、主要元素、科技元素
- 蓝色变体：不同深浅的背景、边框、装饰

### 辅助色（Secondary Colors）
```css
/* 辅助色 - 紫色 */
--futurism-purple-primary: #9D00FF;
--futurism-purple-light: #B833FF;
--futurism-purple-dark: #6B00B3;

/* 紫色变体 */
--futurism-purple-50: #F5E0FF;
--futurism-purple-100: #E6B3FF;
--futurism-purple-200: #CC80FF;
--futurism-purple-300: #B34DFF;
--futurism-purple-400: #9D00FF;
--futurism-purple-500: #8800E6;
--futurism-purple-600: #7300CC;
--futurism-purple-700: #5E00B3;
--futurism-purple-800: #490099;
--futurism-purple-900: #340080;

/* 辅助色 - 青色 */
--futurism-cyan-primary: #00FFCC;
--futurism-cyan-light: #33FFD9;
--futurism-cyan-dark: #00CC99;

/* 青色变体 */
--futurism-cyan-50: #E0FFF5;
--futurism-cyan-100: #B3FFEB;
--futurism-cyan-200: #66FFE0;
--futurism-cyan-300: #00FFCC;
--futurism-cyan-400: #00E6B8;
--futurism-cyan-500: #00CCA3;
--futurism-cyan-600: #00B389;
--futurism-cyan-700: #009970;
--futurism-cyan-800: #008056;
--futurism-cyan-900: #00663D;

/* 辅助色 - 橙色 */
--futurism-orange-primary: #FF6600;
--futurism-orange-light: #FF8533;
--futurism-orange-dark: #CC5200;

/* 橙色变体 */
--futurism-orange-50: #FFF0E0;
--futurism-orange-100: #FFE0B3;
--futurism-orange-200: #FFC280;
--futurism-orange-300: #FFA34D;
--futurism-orange-400: #FF6600;
--futurism-orange-500: #E65C00;
--futurism-orange-600: #CC5200;
--futurism-orange-700: #B34700;
--futurism-orange-800: #993D00;
--futurism-orange-900: #803300;
```

**使用场景**：
- 紫色：科技元素、强调元素、未来感
- 青色：科技元素、强调元素、创新感
- 橙色：科技元素、强调元素、活力感

### 背景色（Background Colors）
```css
/* 背景色 - 深色背景 */
--futurism-background: #0A0E27;
--futurism-background-light: #1A1F3A;
--futurism-background-dark: #050818;

/* 表面色 - 深色表面 */
--futurism-surface: #12183A;
--futurism-surface-light: #1A224A;
--futurism-surface-dark: #0A0E27;
```

**使用场景**：
- 背景色：页面背景、应用背景、科技背景
- 表面色：卡片背景、组件背景、弹窗背景

### 语义色（Semantic Colors）
```css
/* 错误状态 */
--futurism-error: #FF0044;
--futurism-error-light: #FF4466;
--futurism-error-dark: #CC0036;

/* 警告状态 */
--futurism-warning: #FFCC00;
--futurism-warning-light: #FFDD33;
--futurism-warning-dark: #CCA300;

/* 成功状态 */
--futurism-success: #00FF66;
--futurism-success-light: #33FF88;
--futurism-success-dark: #00CC52;

/* 信息状态 */
--futurism-info: #00D9FF;
--futurism-info-light: #5BE0FF;
--futurism-info-dark: #0099CC;
```

**使用场景**：
- 错误：操作失败、错误提示、危险操作
- 警告：注意事项、次要提醒、待处理状态
- 成功：操作成功、完成状态、积极反馈
- 信息：一般提示、帮助信息、说明文字

### 文本色（Text Colors）
```css
/* 主要文字 */
--futurism-text-primary: #FFFFFF;
--futurism-text-primary-light: rgba(255, 255, 255, 0.95);
--futurism-text-primary-dark: rgba(255, 255, 255, 0.87);

/* 次要文字 */
--futurism-text-secondary: #B8C5D6;
--futurism-text-secondary-light: rgba(184, 197, 214, 0.87);
--futurism-text-secondary-dark: rgba(184, 197, 214, 0.6);

/* 禁用文字 */
--futurism-text-disabled: #5A6B7F;
--futurism-text-disabled-light: rgba(90, 107, 127, 0.5);
--futurism-text-disabled-dark: rgba(90, 107, 127, 0.3);
```

**使用场景**：
- 主要文字：标题、重要内容、主要信息
- 次要文字：正文、辅助信息、次要内容
- 禁用文字：禁用状态、不可用元素

### Design Token 命名建议
```
--futurism-{hue}-{shade}
--futurism-{semantic}-{state}

示例：
--futurism-blue-500
--futurism-purple-600
--futurism-error-dark
--futurism-success-light
```

### 色彩使用原则
1. **科技色彩**：使用科技、未来感的色彩，创造科技感
2. **高对比度**：使用高对比度，增强可读性
3. **未来主义**：颜色使用服务于未来主义风格
4. **对比度要求**：确保文字与背景有足够对比度（至少4.5:1）
5. **科技感**：通过科技色彩创造未来感

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
/* 主字体 - 科技字体 */
--font-primary: 'Orbitron', 'Rajdhani', 'Roboto', sans-serif;

/* 备用字体 - 无衬线字体 */
--font-secondary: 'Exo 2', 'Roboto', 'Helvetica Neue', sans-serif;

/* 装饰字体 - 未来字体 */
--font-display: 'Michroma', 'Orbitron', sans-serif;
```

**字体选择理由**：
- Orbitron：未来主义字体，适合标题和装饰
- Exo 2：现代的无衬线字体，适合正文
- Michroma：未来字体，适合装饰和表达科技感

### 字号层级（Font Size Scale）
基于Futurism排版系统：

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
--line-height-normal: 1.6;    /* 标准 - 正文 */
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
--letter-spacing-tight: -0.01em;  /* 紧凑 - 大标题 */
--letter-spacing-normal: 0;        /* 标准 - 正文 */
--letter-spacing-wide: 0.05em;     /* 宽松 - 小标题 */
--letter-spacing-wider: 0.1em;   /* 更宽 - 标签 */
--letter-spacing-widest: 0.15em;  /* 最宽 - 装饰文字 */
```

### 排版节奏规则
1. **未来原则**：通过未来字体和排版创造科技感
2. **动态原则**：使用动态的排版方式，创造速度感
3. **层次清晰**：通过字号、字重、颜色建立清晰的层次结构
4. **几何化**：使用几何化的排版元素，营造未来主义效果
5. **科技表达**：通过独特的排版方式表达科技感

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
--container-max-width: 1440px;  /* 最大宽度 */
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
1. **未来布局**：基于未来主义元素的布局方式
2. **动态布局**：基于动态线条的布局方式
3. **几何布局**：基于几何形状的布局方式
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
    background: linear-gradient(135deg, #00D9FF 0%, #00A8CC 100%);
    color: #FFFFFF;
    border: 2px solid #00D9FF;
    border-radius: 4px;
    font-weight: var(--font-weight-bold);
    box-shadow: 0 4px 12px rgba(0, 217, 255, 0.4);
}

/* 悬停状态 */
.btn-contained:hover {
    background: linear-gradient(135deg, #5BE0FF 0%, #00D9FF 100%);
    box-shadow: 0 6px 16px rgba(0, 217, 255, 0.6);
    transform: translateY(-2px);
}

/* 激活状态 */
.btn-contained:active {
    background: linear-gradient(135deg, #00A8CC 0%, #008CB3 100%);
    box-shadow: 0 2px 8px rgba(0, 217, 255, 0.4);
    transform: translateY(0);
}

/* 禁用状态 */
.btn-contained:disabled {
    background: #2A3B55;
    color: #5A6B7F;
    cursor: not-allowed;
    box-shadow: none;
}

/* 焦点状态 */
.btn-contained:focus {
    outline: 3px solid #00D9FF;
    outline-offset: 2px;
}
```

#### 变体规范
```css
/* 实心按钮 */
.btn-contained {
    background: linear-gradient(135deg, #00D9FF 0%, #00A8CC 100%);
    color: #FFFFFF;
    border: 2px solid #00D9FF;
}

/* 文字按钮 */
.btn-text {
    background: transparent;
    color: #00D9FF;
    border: none;
    text-decoration: none;
}

/* 轮廓按钮 */
.btn-outlined {
    background: transparent;
    color: #00D9FF;
    border: 2px solid #00D9FF;
}
```

#### 圆角规范
```css
/* Futurism：小圆角设计 */
.btn {
    border-radius: 4px; /* 小圆角 - Futurism */
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
    background: linear-gradient(180deg, #12183A 0%, #0A0E27 100%);
    border: 1px solid rgba(0, 217, 255, 0.3);
    border-radius: 8px;
    padding: var(--spacing-4);
    box-shadow: 0 8px 24px rgba(0, 217, 255, 0.2);
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 217, 255, 0.3);
    border-color: rgba(0, 217, 255, 0.5);
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
/* Futurism：发光阴影 */
.shadow-1 {
    box-shadow: 0 4px 12px rgba(0, 217, 255, 0.2);
}

.shadow-2 {
    box-shadow: 0 6px 16px rgba(0, 217, 255, 0.3);
}

.shadow-3 {
    box-shadow: 0 8px 24px rgba(0, 217, 255, 0.4);
}

.shadow-4 {
    box-shadow: 0 12px 32px rgba(0, 217, 255, 0.5);
}

.shadow-5 {
    box-shadow: 0 16px 40px rgba(0, 217, 255, 0.6);
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
    color: #FFFFFF;
    background: rgba(18, 24, 58, 0.8);
    border: 2px solid rgba(0, 217, 255, 0.3);
    border-radius: 4px;
    font-weight: var(--font-weight-regular);
}

.input:hover {
    border-color: rgba(0, 217, 255, 0.5);
    box-shadow: 0 4px 12px rgba(0, 217, 255, 0.2);
}

.input:focus {
    border-color: #00D9FF;
    outline: 3px solid rgba(0, 217, 255, 0.3);
    outline-offset: -2px;
    box-shadow: 0 6px 16px rgba(0, 217, 255, 0.3);
}

.input-error {
    border-color: #FF0044;
}

.input-disabled {
    color: #5A6B7F;
    background: rgba(42, 59, 85, 0.5);
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
    color: #FFFFFF;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.form-hint {
    margin-top: var(--spacing-2);
    font-size: 0.875rem;
    color: #B8C5D6;
}

.form-error {
    margin-top: var(--spacing-2);
    font-size: 0.875rem;
    color: #FF0044;
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
    background: linear-gradient(180deg, #12183A 0%, #0A0E27 100%);
    border-bottom: 1px solid rgba(0, 217, 255, 0.3);
    box-shadow: 0 4px 12px rgba(0, 217, 255, 0.2);
}

.nav-link {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
    color: #FFFFFF;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 4px;
}

.nav-link:hover,
.nav-link.active {
    background: linear-gradient(135deg, rgba(0, 217, 255, 0.2) 0%, rgba(0, 168, 204, 0.2) 100%);
    color: #00D9FF;
}
```

#### 侧边导航
```css
.sidebar {
    width: 280px;
    height: 100vh;
    padding: var(--spacing-4);
    background: linear-gradient(180deg, #12183A 0%, #0A0E27 100%);
    border-right: 1px solid rgba(0, 217, 255, 0.3);
    box-shadow: 4px 0 12px rgba(0, 217, 255, 0.2);
}

.sidebar-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    margin-bottom: var(--spacing-2);
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
    color: #FFFFFF;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 4px;
}

.sidebar-item:hover,
.sidebar-item.active {
    background: linear-gradient(135deg, rgba(0, 217, 255, 0.2) 0%, rgba(0, 168, 204, 0.2) 100%);
    color: #00D9FF;
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
**风格特征**：
- **未来化**：基于未来主义风格
- **几何化**：使用几何形状
- **科技化**：科技风格的图标
- **高对比度**：高对比度的图标

**图标规范**：
```css
.icon {
    width: 32px;
    height: 32px;
    stroke-width: 2px;
    stroke: #00D9FF;
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
    fill: #00D9FF;
    stroke: none;
}
```

**图标库建议**：
- Material Icons：基础图标库，可自定义样式
- Heroicons：简约的图标库
- 自定义未来图标：基于未来主义风格自定义图标

### 插画风格
**风格特征**：
- **未来构成**：使用未来主义构成插画
- **几何化**：使用几何形状
- **科技色彩**：使用科技色彩
- **动态感**：具有动态感的插画

**插画原则**：
1. **未来原则**：所有元素都是未来主义风格
2. **几何原则**：所有元素基于几何形状
3. **科技色彩**：使用科技色彩
4. **动态原则**：插画必须具有动态感

**插画类型**：
- **未来插画**：基于未来主义的插画
- **科技插画**：强调科技的插画
- **几何插画**：具有几何形状的插画
- **信息插画**：提供信息的插画

### 设计原则
1. **未来导向**：通过未来主义元素创造科技感
2. **科技导向**：所有设计必须具有科技风格
3. **几何化**：所有元素保持几何化
4. **动态感**：确保所有元素具有动态感

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover（悬停）行为
```css
/* 按钮悬停 */
.button:hover {
    background: linear-gradient(135deg, #5BE0FF 0%, #00D9FF 100%);
    box-shadow: 0 6px 16px rgba(0, 217, 255, 0.6);
    transform: translateY(-2px);
}

/* 卡片悬停 */
.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 217, 255, 0.3);
    border-color: rgba(0, 217, 255, 0.5);
}

/* 链接悬停 */
.link:hover {
    color: #00D9FF;
    text-shadow: 0 0 8px rgba(0, 217, 255, 0.6);
}
```

### Active（激活）行为
```css
/* 按钮激活 */
.button:active {
    background: linear-gradient(135deg, #00A8CC 0%, #008CB3 100%);
    box-shadow: 0 2px 8px rgba(0, 217, 255, 0.4);
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
    outline: 3px solid #00D9FF;
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
1. **未来动画**：动效基于未来主义风格
2. **科技化**：动效具有科技风格
3. **适度原则**：动效服务于功能，避免过度动画
4. **性能优先**：使用CSS动画，避免JavaScript动画

### 操作反馈设计原则
1. **视觉反馈**：颜色变化、边框变化、阴影变化
2. **明确状态**：清晰展示当前状态（悬停、激活、禁用）
3. **未来效果**：通过未来元素提供反馈
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
    --futurism-blue-50: #E0F7FF;
    --futurism-blue-100: #B3E5FF;
    --futurism-blue-200: #66D3FF;
    --futurism-blue-300: #00D9FF;
    --futurism-blue-400: #00C4E6;
    --futurism-blue-500: #00A8CC;
    --futurism-blue-600: #008CB3;
    --futurism-blue-700: #007099;
    --futurism-blue-800: #005480;
    --futurism-blue-900: #003966;

    /* Purple Colors */
    --futurism-purple-50: #F5E0FF;
    --futurism-purple-100: #E6B3FF;
    --futurism-purple-200: #CC80FF;
    --futurism-purple-300: #B34DFF;
    --futurism-purple-400: #9D00FF;
    --futurism-purple-500: #8800E6;
    --futurism-purple-600: #7300CC;
    --futurism-purple-700: #5E00B3;
    --futurism-purple-800: #490099;
    --futurism-purple-900: #340080;

    /* Cyan Colors */
    --futurism-cyan-50: #E0FFF5;
    --futurism-cyan-100: #B3FFEB;
    --futurism-cyan-200: #66FFE0;
    --futurism-cyan-300: #00FFCC;
    --futurism-cyan-400: #00E6B8;
    --futurism-cyan-500: #00CCA3;
    --futurism-cyan-600: #00B389;
    --futurism-cyan-700: #009970;
    --futurism-cyan-800: #008056;
    --futurism-cyan-900: #00663D;

    /* Orange Colors */
    --futurism-orange-50: #FFF0E0;
    --futurism-orange-100: #FFE0B3;
    --futurism-orange-200: #FFC280;
    --futurism-orange-300: #FFA34D;
    --futurism-orange-400: #FF6600;
    --futurism-orange-500: #E65C00;
    --futurism-orange-600: #CC5200;
    --futurism-orange-700: #B34700;
    --futurism-orange-800: #993D00;
    --futurism-orange-900: #803300;

    /* Background Colors */
    --futurism-background: #0A0E27;
    --futurism-background-light: #1A1F3A;
    --futurism-background-dark: #050818;

    /* Surface Colors */
    --futurism-surface: #12183A;
    --futurism-surface-light: #1A224A;
    --futurism-surface-dark: #0A0E27;

    /* Text Colors */
    --futurism-text-primary: #FFFFFF;
    --futurism-text-primary-light: rgba(255, 255, 255, 0.95);
    --futurism-text-primary-dark: rgba(255, 255, 255, 0.87);

    --futurism-text-secondary: #B8C5D6;
    --futurism-text-secondary-light: rgba(184, 197, 214, 0.87);
    --futurism-text-secondary-dark: rgba(184, 197, 214, 0.6);

    --futurism-text-disabled: #5A6B7F;
    --futurism-text-disabled-light: rgba(90, 107, 127, 0.5);
    --futurism-text-disabled-dark: rgba(90, 107, 127, 0.3);

    /* Semantic Colors */
    --futurism-error: #FF0044;
    --futurism-error-light: #FF4466;
    --futurism-error-dark: #CC0036;

    --futurism-warning: #FFCC00;
    --futurism-warning-light: #FFDD33;
    --futurism-warning-dark: #CCA300;

    --futurism-success: #00FF66;
    --futurism-success-light: #33FF88;
    --futurism-success-dark: #00CC52;

    --futurism-info: #00D9FF;
    --futurism-info-light: #5BE0FF;
    --futurism-info-dark: #0099CC;
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
    --radius-sm: 2px;
    --radius-md: 4px;
    --radius-lg: 8px;
    --radius-xl: 12px;
    --radius-2xl: 16px;
    --radius-3xl: 24px;
}
```

### Shadow Tokens
```css
:root {
    --shadow-1: 0 4px 12px rgba(0, 217, 255, 0.2);
    --shadow-2: 0 6px 16px rgba(0, 217, 255, 0.3);
    --shadow-3: 0 8px 24px rgba(0, 217, 255, 0.4);
    --shadow-4: 0 12px 32px rgba(0, 217, 255, 0.5);
    --shadow-5: 0 16px 40px rgba(0, 217, 255, 0.6);
}
```

### Typography Tokens
```css
:root {
    /* Font Family */
    --font-primary: 'Orbitron', 'Rajdhani', 'Roboto', sans-serif;
    --font-secondary: 'Exo 2', 'Roboto', 'Helvetica Neue', sans-serif;
    --font-display: 'Michroma', 'Orbitron', sans-serif;

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
    --line-height-normal: 1.6;
    --line-height-relaxed: 1.8;

    /* Font Weight */
    --font-weight-regular: 400;
    --font-weight-bold: 700;
    --font-weight-black: 900;

    /* Letter Spacing */
    --letter-spacing-tight: -0.01em;
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
- 未来主义的设计理念
- 科技感的设计语言
- 动态性的设计思维
- 创新性的设计风格

#### 2. 色彩系统
✅ **可以学习**：
- 科技色彩的使用方法
- 高对比度的搭配原则
- 鲜艳色彩的实现技巧
- 视觉冲击力的营造方法

#### 3. 排版系统
✅ **可以学习**：
- 未来字体的使用原则
- 基于动态的排版系统
- 清晰层次结构的建立方法
- 科技感的原则

#### 4. 布局系统
✅ **可以学习**：
- 未来布局的应用
- 基于动态线条的布局方法
- 几何布局的技巧
- 视觉冲击力的营造方法

#### 5. 组件设计
✅ **可以学习**：
- 小圆角设计语言的应用
- 发光阴影的实现方法
- 渐变边框的使用技巧
- 深色背景的效果营造

#### 6. 图标与插画
✅ **可以学习**：
- 未来图标的设计方法
- 几何图标风格
- 科技图标设计
- 鲜艳色彩图标实现

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 1. 品牌元素
❌ **不应复刻**：
- 特定品牌的商标和标志
- Futurism历史品牌的官方标识
- 特定品牌的视觉识别系统
- 任何受版权保护的品牌元素

#### 2. 插画内容
❌ **不应复刻**：
- Futurism历史时期的原创插画
- 特定品牌的插画内容
- 特定风格的特定插画作品
- 任何受版权保护的插画作品

#### 3. 文字内容
❌ **不应复刻**：
- Futurism历史时期的原始文案
- 特定品牌的官方文案
- Futurism历史文档
- 任何受版权保护的文字内容

#### 4. 具体设计
❌ **不应复刻**：
- Futurism历史时期的特定页面设计
- 特定品牌的完整视觉系统
- Futurism历史艺术作品的设计
- 任何直接复制的设计元素

### 合法使用建议

#### 1. 风格借鉴
- 学习Futurism的原则和方法
- 参考色彩和排版系统
- 借鉴未来主义的设计理念
- 应用科技感的设计思维

#### 2. 原创设计
- 基于Futurism原则创建原创设计
- 使用Futurism风格但加入自己的创意
- 结合现代技术和Futurism理念
- 创建独特的Futurism风格变体

#### 3. 法律合规
- 尊重历史时期的知识产权
- 避免直接复制受保护的内容
- 注明设计灵感的来源
- 遵守相关的版权和商标法律

#### 4. 道德准则
- 诚实说明设计灵感来源
- 不声称自己是历史时期的设计
- 尊重Futurism历史的原创作品
- 促进Futurism理念的合法传播

### 总结
Futurism（未来主义）基于20世纪初的未来主义艺术运动，强调速度、动态、科技和未来感。其核心理念是"未来即现在"，通过动态的线条、几何形状和科技元素，创造出具有未来感和科技感的视觉体验。Futurism强调科技感、动态性和创新性，通过几何形状和科技元素，提供独特而前沿的视觉体验。但是，在使用Futurism风格时，必须遵守相关的知识产权法律，尊重历史时期的知识产权，避免直接复制受保护的内容。通过学习Futurism的原则和方法，结合自己的创意和现代技术，可以创建出独特而合法的Futurism风格设计。