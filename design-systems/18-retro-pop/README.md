# Retro Pop Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **波普艺术**：基于波普艺术风格
- **复古感**：1960s/1970s时代的怀旧感
- **大胆色彩**：使用大胆、鲜艳的色彩
- **重复图案**：重复的图案和元素
- **流行文化**：流行文化风格的视觉元素

### 适用产品类型
- **时尚品牌**：时尚、潮流、年轻品牌
- **娱乐应用**：音乐、视频、娱乐平台
- **创意平台**：艺术展示、创意作品、设计作品
- **营销活动**：活动页面、营销活动、品牌宣传

### 设计哲学
Retro Pop（复古波普）基于1960s/1970s的波普艺术风格，使用大胆、鲜艳的色彩、重复的图案和流行文化元素。其核心理念是"流行即艺术"，通过大胆的色彩、重复的图案和流行文化元素，创造出视觉冲击力强、个性鲜明的视觉体验。Retro Pop强调流行文化、大胆色彩和重复图案，通过波普艺术的元素和复古的色彩，提供独特而流行的视觉体验。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
基于Retro Pop波普艺术调色板：

```css
/* 主色 - 粉红色 */
--retpop-pink-primary: #FF1493;
--retpop-pink-light: #FF69B4;
--retpop-pink-dark: #C71585;

/* 粉红色变体 */
--retpop-pink-50: #FFF0F5;
--retpop-pink-100: #FFE4E1;
--retpop-pink-200: #FFB6C1;
--retpop-pink-300: #FF69B4;
--retpop-pink-400: #FF1493;
--retpop-pink-500: #DB7093;
--retpop-pink-600: #C71585;
--retpop-pink-700: #B03060;
--retpop-pink-800: #993366;
--retpop-pink-900: #800040;
```

**使用场景**：
- 粉红色：品牌识别、主要元素、重要装饰
- 粉红色变体：不同深浅的背景、边框、装饰

### 辅助色（Secondary Colors）
```css
/* 辅助色 - 青色 */
--retpop-cyan-primary: #00CED1;
--retpop-cyan-light: #40E0D0;
--retpop-cyan-dark: #008B8B;

/* 青色变体 */
--retpop-cyan-50: #E0FFFF;
--retpop-cyan-100: #B2EBF2;
--retpop-cyan-200: #80DEEA;
--retpop-cyan-300: #4DD0E1;
--retpop-cyan-400: #26C6DA;
--retpop-cyan-500: #00BCD4;
--retpop-cyan-600: #00ACC1;
--retpop-cyan-700: #0097A7;
--retpop-cyan-800: #00838F;
--retpop-cyan-900: #006064;

/* 辅助色 - 黄色 */
--retpop-yellow-primary: #FFD700;
--retpop-yellow-light: #FFFF00;
--retpop-yellow-dark: #FFA500;

/* 黄色变体 */
--retpop-yellow-50: #FFFFE0;
--retpop-yellow-100: #FFFFD0;
--retpop-yellow-200: #FFFF00;
--retpop-yellow-300: #FFD700;
--retpop-yellow-400: #FFC107;
--retpop-yellow-500: #FFB300;
--retpop-yellow-600: #FFA500;
--retpop-yellow-700: #FF8C00;
--retpop-yellow-800: #FF6F00;
--retpop-yellow-900: #FF4500;

/* 辅助色 - 紫色 */
--retpop-purple-primary: #9370DB;
--retpop-purple-light: #BA55D3;
--retpop-purple-dark: #8A2BE2;

/* 紫色变体 */
--retpop-purple-50: #F3E5F5;
--retpop-purple-100: #E1BEE7;
--retpop-purple-200: #CE93D8;
--retpop-purple-300: #BA68C8;
--retpop-purple-400: #AB47BC;
--retpop-purple-500: #9C27B0;
--retpop-purple-600: #8E24AA;
--retpop-purple-700: #7B1FA2;
--retpop-purple-800: #6A1B9A;
--retpop-purple-900: #4A148C;
```

**使用场景**：
- 青色：装饰元素、强调元素、视觉冲击
- 黄色：装饰元素、强调元素、活力表达
- 紫色：装饰元素、强调元素、个性表达

### 背景色（Background Colors）
```css
/* 背景色 - 纯色背景 */
--retpop-background: #FFFFFF;
--retpop-background-light: #FAFAFA;
--retpop-background-dark: #F5F5F5;

/* 表面色 - 纯色表面 */
--retpop-surface: #FFFFFF;
--retpop-surface-light: #FAFAFA;
--retpop-surface-dark: #F5F5F5;
```

**使用场景**：
- 背景色：页面背景、应用背景、装饰背景
- 表面色：卡片背景、组件背景、弹窗背景

### 语义色（Semantic Colors）
```css
/* 错误状态 */
--retpop-error: #FF0000;
--retpop-error-light: #FF6347;
--retpop-error-dark: #8B0000;

/* 警告状态 */
--retpop-warning: #FFD700;
--retpop-warning-light: #FFFF00;
--retpop-warning-dark: #FFA500;

/* 成功状态 */
--retpop-success: #32CD32;
--retpop-success-light: #00FF00;
--retpop-success-dark: #228B22;

/* 信息状态 */
--retpop-info: #1E90FF;
--retpop-info-light: #00BFFF;
--retpop-info-dark: #0000CD;
```

**使用场景**：
- 错误：操作失败、错误提示、危险操作
- 警告：注意事项、次要提醒、待处理状态
- 成功：操作成功、完成状态、积极反馈
- 信息：一般提示、帮助信息、说明文字

### 文本色（Text Colors）
```css
/* 主要文字 */
--retpop-text-primary: #000000;
--retpop-text-primary-light: rgba(0, 0, 0, 0.87);
--retpop-text-primary-dark: rgba(0, 0, 0, 0.95);

/* 次要文字 */
--retpop-text-secondary: #424242;
--retpop-text-secondary-light: rgba(66, 66, 66, 0.87);
--retpop-text-secondary-dark: rgba(66, 66, 66, 0.6);

/* 禁用文字 */
--retpop-text-disabled: #9E9E9E;
--retpop-text-disabled-light: rgba(158, 158, 158, 0.5);
--retpop-text-disabled-dark: rgba(158, 158, 158, 0.3);
```

**使用场景**：
- 主要文字：标题、重要内容、主要信息
- 次要文字：正文、辅助信息、次要内容
- 禁用文字：禁用状态、不可用元素

### Design Token 命名建议
```
--retpop-{hue}-{shade}
--retpop-{semantic}-{state}

示例：
--retpop-pink-500
--retpop-cyan-600
--retpop-error-dark
--retpop-success-light
```

### 色彩使用原则
1. **大胆色彩**：使用大胆、鲜艳的色彩，创造视觉冲击力
2. **高对比度**：使用高对比度，增强可读性
3. **波普艺术**：颜色使用服务于波普艺术风格
4. **对比度要求**：确保文字与背景有足够对比度（至少4.5:1）
5. **流行感**：通过大胆的色彩创造流行感

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
/* 主字体 - 波普字体 */
--font-primary: 'Bangers', 'Impact', 'Arial Black', sans-serif;

/* 备用字体 - 无衬线字体 */
--font-secondary: 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;

/* 装饰字体 - 艺术字体 */
--font-display: 'Permanent Marker', 'Comic Sans MS', cursive;
```

**字体选择理由**：
- Bangers：波普艺术字体，适合标题和装饰
- Roboto：现代的无衬线字体，适合正文
- Permanent Marker：艺术字体，适合装饰和表达个性

### 字号层级（Font Size Scale）
基于Retro Pop排版系统：

```css
/* 标题层级 */
--font-size-h1: 4rem;      /* 64px - 页面主标题 */
--font-size-h2: 3rem;       /* 48px - 章节标题 */
--font-size-h3: 2.25rem;         /* 36px - 子章节标题 */
--font-size-h4: 1.75rem;       /* 28px - 卡片标题 */
--font-size-h5: 1.5rem;      /* 24px - 小标题 */
--font-size-h6: 1.25rem;         /* 20px - 微标题 */

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
1. **波普原则**：通过波普字体和排版创造视觉冲击力
2. **大胆原则**：使用大胆的排版方式，创造流行感
3. **层次清晰**：通过字号、字重、颜色建立清晰的层次结构
4. **重复图案**：使用重复的排版元素，营造波普艺术效果
5. **个性表达**：通过独特的排版方式表达个性

### 响应式排版
```css
/* 移动端（< 600dp） */
@media (max-width: 599px) {
    --font-size-h1: 3rem;  /* 48px */
    --font-size-h2: 2.25rem; /* 36px */
    --font-size-h3: 1.75rem; /* 28px */
    --font-size-body1: 1rem;   /* 16px */
}

/* 平板端（600dp - 840dp） */
@media (min-width: 600dp) and (max-width: 839px) {
    --font-size-h1: 3.5rem;    /* 56px */
    --font-size-h2: 2.625rem; /* 42px */
    --font-size-h3: 2rem; /* 32px */
    --font-size-body1: 1.0625rem;   /* 17px */
}

/* 桌面端（≥ 840dp） */
@media (min-width: 840px) {
    --font-size-h1: 4rem;  /* 64px */
    --font-size-h2: 3rem;  /* 48px */
    --font-size-h3: 2.25rem;    /* 36px */
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
1. **波普布局**：基于波普艺术元素的布局方式
2. **重复布局**：基于重复图案的布局方式
3. **不对称布局**：不对称、不规则的布局方式
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
    background: #FF1493;
    color: #FFFFFF;
    border: 3px solid #C71585;
    border-radius: 0;
    font-weight: var(--font-weight-bold);
    box-shadow: 4px 4px 0 #C71585;
}

/* 悬停状态 */
.btn-contained:hover {
    background: #FF69B4;
    box-shadow: 6px 6px 0 #C71585;
    transform: translate(-2px, -2px);
}

/* 激活状态 */
.btn-contained:active {
    background: #FF1493;
    box-shadow: 2px 2px 0 #C71585;
    transform: translate(2px, 2px);
}

/* 禁用状态 */
.btn-contained:disabled {
    background: #9E9E9E;
    color: #FFFFFF;
    cursor: not-allowed;
    box-shadow: none;
}

/* 焦点状态 */
.btn-contained:focus {
    outline: 3px solid #FF69B4;
    outline-offset: 2px;
}
```

#### 变体规范
```css
/* 实心按钮 */
.btn-contained {
    background: #FF1493;
    color: #FFFFFF;
    border: 3px solid #C71585;
}

/* 文字按钮 */
.btn-text {
    background: transparent;
    color: #FF1493;
    border: none;
    text-decoration: underline;
}

/* 轮廓按钮 */
.btn-outlined {
    background: transparent;
    color: #FF1493;
    border: 3px solid #FF1493;
}
```

#### 圆角规范
```css
/* Retro Pop：无圆角设计 */
.btn {
    border-radius: 0; /* 无圆角 - Retro Pop */
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
    border: 4px solid #000000;
    border-radius: 0;
    padding: var(--spacing-4);
    box-shadow: 8px 8px 0 #000000;
}

.card:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 #000000;
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
/* Retro Pop：块状阴影 */
.shadow-1 {
    box-shadow: 4px 4px 0 #000000;
}

.shadow-2 {
    box-shadow: 6px 6px 0 #000000;
}

.shadow-3 {
    box-shadow: 8px 8px 0 #000000;
}

.shadow-4 {
    box-shadow: 12px 12px 0 #000000;
}

.shadow-5 {
    box-shadow: 16px 16px 0 #000000;
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
    border: 3px solid #000000;
    border-radius: 0;
    font-weight: var(--font-weight-regular);
}

.input:hover {
    border-color: #FF1493;
    box-shadow: 4px 4px 0 #FF1493;
}

.input:focus {
    border-color: #FF1493;
    outline: 3px solid #FF69B4;
    outline-offset: -2px;
    box-shadow: 6px 6px 0 #FF1493;
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
    letter-spacing: 0.1em;
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
    border-bottom: 4px solid #000000;
    box-shadow: 4px 4px 0 #000000;
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
    background: #FF1493;
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
    border-right: 4px solid #000000;
    box-shadow: 4px 0 0 #000000;
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
    background: #FF1493;
    color: #FFFFFF;
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
**风格特征**：
- **波普化**：基于波普艺术风格
- **大胆化**：使用大胆的形状
- **填充化**：使用填充图标
- **高对比度**：高对比度的图标

**图标规范**：
```css
.icon {
    width: 32px;
    height: 32px;
    stroke-width: 2px;
    stroke: #FF1493;
    fill: #000000;
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
    fill: #FF1493;
    stroke: none;
}
```

**图标库建议**：
- Material Icons：基础图标库，可自定义样式
- Heroicons：简约的图标库
- 自定义波普图标：基于波普艺术风格自定义图标

### 插画风格
**风格特征**：
- **波普构成**：使用波普艺术构成插画
- **大胆化**：使用大胆的形状
- **鲜艳色彩**：使用鲜艳的色彩
- **流行文化**：流行文化风格的插画

**插画原则**：
1. **波普原则**：所有元素都是波普艺术风格
2. **大胆原则**：所有元素基于大胆形状
3. **鲜艳色彩**：使用鲜艳的色彩
4. **流行文化原则**：插画必须具有流行文化风格

**插画类型**：
- **波普插画**：基于波普艺术的插画
- **流行插画**：强调流行文化的插画
- **重复插画**：具有重复图案的插画
- **信息插画**：提供信息的插画

### 设计原则
1. **波普导向**：通过波普艺术元素创造视觉冲击力
2. **流行导向**：所有设计必须具有流行文化风格
3. **大胆化**：所有元素保持大胆化
4. **视觉冲击**：确保所有元素具有视觉冲击力

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover（悬停）行为
```css
/* 按钮悬停 */
.button:hover {
    background: #FF69B4;
    box-shadow: 6px 6px 0 #C71585;
    transform: translate(-2px, -2px);
}

/* 卡片悬停 */
.card:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 #000000;
}

/* 链接悬停 */
.link:hover {
    color: #FF1493;
    text-decoration: underline;
}
```

### Active（激活）行为
```css
/* 按钮激活 */
.button:active {
    background: #FF1493;
    box-shadow: 2px 2px 0 #C71585;
    transform: translate(2px, 2px);
}

/* 卡片激活 */
.card:active {
    transform: translate(-2px, -2px);
}
```

### Focus（焦点）行为
```css
/* 焦点样式 */
*:focus {
    outline: 3px solid #FF69B4;
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
1. **波普动画**：动效基于波普艺术风格
2. **流行化**：动效具有流行文化风格
3. **适度原则**：动效服务于功能，避免过度动画
4. **性能优先**：使用CSS动画，避免JavaScript动画

### 操作反馈设计原则
1. **视觉反馈**：颜色变化、边框变化、阴影变化
2. **明确状态**：清晰展示当前状态（悬停、激活、禁用）
3. **波普效果**：通过波普元素提供反馈
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
    /* Pink Colors */
    --retpop-pink-50: #FFF0F5;
    --retpop-pink-100: #FFE4E1;
    --retpop-pink-200: #FFB6C1;
    --retpop-pink-300: #FF69B4;
    --retpop-pink-400: #FF1493;
    --retpop-pink-500: #DB7093;
    --retpop-pink-600: #C71585;
    --retpop-pink-700: #B03060;
    --retpop-pink-800: #993366;
    --retpop-pink-900: #800040;

    /* Cyan Colors */
    --retpop-cyan-50: #E0FFFF;
    --retpop-cyan-100: #B2EBF2;
    --retpop-cyan-200: #80DEEA;
    --retpop-cyan-300: #4DD0E1;
    --retpop-cyan-400: #26C6DA;
    --retpop-cyan-500: #00BCD4;
    --retpop-cyan-600: #00ACC1;
    --retpop-cyan-700: #0097A7;
    --retpop-cyan-800: #00838F;
    --retpop-cyan-900: #006064;

    /* Yellow Colors */
    --retpop-yellow-50: #FFFFE0;
    --retpop-yellow-100: #FFFFD0;
    --retpop-yellow-200: #FFFF00;
    --retpop-yellow-300: #FFD700;
    --retpop-yellow-400: #FFC107;
    --retpop-yellow-500: #FFB300;
    --retpop-yellow-600: #FFA500;
    --retpop-yellow-700: #FF8C00;
    --retpop-yellow-800: #FF6F00;
    --retpop-yellow-900: #FF4500;

    /* Purple Colors */
    --retpop-purple-50: #F3E5F5;
    --retpop-purple-100: #E1BEE7;
    --retpop-purple-200: #CE93D8;
    --retpop-purple-300: #BA68C8;
    --retpop-purple-400: #AB47BC;
    --retpop-purple-500: #9C27B0;
    --retpop-purple-600: #8E24AA;
    --retpop-purple-700: #7B1FA2;
    --retpop-purple-800: #6A1B9A;
    --retpop-purple-900: #4A148C;

    /* Background Colors */
    --retpop-background: #FFFFFF;
    --retpop-background-light: #FAFAFA;
    --retpop-background-dark: #F5F5F5;

    /* Surface Colors */
    --retpop-surface: #FFFFFF;
    --retpop-surface-light: #FAFAFA;
    --retpop-surface-dark: #F5F5F5;

    /* Text Colors */
    --retpop-text-primary: #000000;
    --retpop-text-primary-light: rgba(0, 0, 0, 0.87);
    --retpop-text-primary-dark: rgba(0, 0, 0, 0.95);

    --retpop-text-secondary: #424242;
    --retpop-text-secondary-light: rgba(66, 66, 66, 0.87);
    --retpop-text-secondary-dark: rgba(66, 66, 66, 0.6);

    --retpop-text-disabled: #9E9E9E;
    --retpop-text-disabled-light: rgba(158, 158, 158, 0.5);
    --retpop-text-disabled-dark: rgba(158, 158, 158, 0.3);

    /* Semantic Colors */
    --retpop-error: #FF0000;
    --retpop-error-light: #FF6347;
    --retpop-error-dark: #8B0000;

    --retpop-warning: #FFD700;
    --retpop-warning-light: #FFFF00;
    --retpop-warning-dark: #FFA500;

    --retpop-success: #32CD32;
    --retpop-success-light: #00FF00;
    --retpop-success-dark: #228B22;

    --retpop-info: #1E90FF;
    --retpop-info-light: #00BFFF;
    --retpop-info-dark: #0000CD;
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
    --shadow-1: 4px 4px 0 #000000;
    --shadow-2: 6px 6px 0 #000000;
    --shadow-3: 8px 8px 0 #000000;
    --shadow-4: 12px 12px 0 #000000;
    --shadow-5: 16px 16px 0 #000000;
}
```

### Typography Tokens
```css
:root {
    /* Font Family */
    --font-primary: 'Bangers', 'Impact', 'Arial Black', sans-serif;
    --font-secondary: 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
    --font-display: 'Permanent Marker', 'Comic Sans MS', cursive;

    /* Font Size */
    --font-size-h1: 4rem;
    --font-size-h2: 3rem;
    --font-size-h3: 2.25rem;
    --font-size-h4: 1.75rem;
    --font-size-h5: 1.5rem;
    --font-size-h6: 1.25rem;
    --font-size-subtitle1: 1.125rem;
    --font-size-subtitle2: 1rem;
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
- 波普艺术的设计理念
- 大胆色彩的设计语言
- 重复图案的设计思维
- 流行文化的设计风格

#### 2. 色彩系统
✅ **可以学习**：
- 大胆色彩的使用方法
- 高对比度的搭配原则
- 鲜艳色彩的实现技巧
- 视觉冲击力的营造方法

#### 3. 排版系统
✅ **可以学习**：
- 波普字体的使用原则
- 基于大胆的排版系统
- 清晰层次结构的建立方法
- 流行感的原则

#### 4. 布局系统
✅ **可以学习**：
- 波普布局的应用
- 基于重复图案的布局方法
- 不对称布局的技巧
- 视觉冲击力的营造方法

#### 5. 组件设计
✅ **可以学习**：
- 无圆角设计语言的应用
- 块状阴影的实现方法
- 粗边框的使用技巧
- 纯色背景的效果营造

#### 6. 图标与插画
✅ **可以学习**：
- 波普图标的设计方法
- 大胆图标风格
- 填充图标设计
- 鲜艳色彩图标实现

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 1. 品牌元素
❌ **不应复刻**：
- 特定品牌的商标和标志
- Retro Pop历史品牌的官方标识
- 特定品牌的视觉识别系统
- 任何受版权保护的品牌元素

#### 2. 插画内容
❌ **不应复刻**：
- Retro Pop历史时期的原创插画
- 特定品牌的插画内容
- 特定风格的特定插画作品
- 任何受版权保护的插画作品

#### 3. 文字内容
❌ **不应复刻**：
- Retro Pop历史时期的原始文案
- 特定品牌的官方文案
- Retro Pop历史文档
- 任何受版权保护的文字内容

#### 4. 具体设计
❌ **不应复刻**：
- Retro Pop历史时期的特定页面设计
- 特定品牌的完整视觉系统
- Retro Pop历史艺术作品的设计
- 任何直接复制的设计元素

### 合法使用建议

#### 1. 风格借鉴
- 学习Retro Pop的原则和方法
- 参考色彩和排版系统
- 借鉴波普艺术的设计理念
- 应用流行文化的设计思维

#### 2. 原创设计
- 基于Retro Pop原则创建原创设计
- 使用Retro Pop风格但加入自己的创意
- 结合现代技术和Retro Pop理念
- 创建独特的Retro Pop风格变体

#### 3. 法律合规
- 尊重历史时期的知识产权
- 避免直接复制受保护的内容
- 注明设计灵感的来源
- 遵守相关的版权和商标法律

#### 4. 道德准则
- 诚实说明设计灵感来源
- 不声称自己是历史时期的设计
- 尊重Retro Pop历史的原创作品
- 促进Retro Pop理念的合法传播

### 总结
Retro Pop（复古波普）基于1960s/1970s的波普艺术风格，使用大胆、鲜艳的色彩、重复的图案和流行文化元素。其核心理念是"流行即艺术"，通过大胆的色彩、重复的图案和流行文化元素，创造出视觉冲击力强、个性鲜明的视觉体验。Retro Pop强调流行文化、大胆色彩和重复图案，通过波普艺术的元素和复古的色彩，提供独特而流行的视觉体验。但是，在使用Retro Pop风格时，必须遵守相关的知识产权法律，尊重历史时期的知识产权，避免直接复制受保护的内容。通过学习Retro Pop的原则和方法，结合自己的创意和现代技术，可以创建出独特而合法的Retro Pop风格设计。