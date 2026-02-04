# Postmodernism Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **反传统**：反对现代主义的简约和功能主义
- **多样性**：融合多种风格和元素
- **装饰性**：强调装饰和视觉冲击
- **不对称**：打破对称性和规则
- **色彩丰富**：使用鲜艳、对比强烈的色彩

### 适用产品类型
- **创意品牌**：设计工作室、创意机构、艺术品牌
- **文化活动**：艺术展览、音乐节、文化活动
- **时尚设计**：时尚品牌、潮流文化、街头风格
- **娱乐媒体**：游戏、影视、娱乐平台

### 设计哲学
Postmodernism（后现代主义）是20世纪60-70年代兴起的设计风格，反对现代主义的简约和功能主义，强调多样性、装饰性和视觉冲击。其核心理念是通过融合多种风格和元素，打破传统的设计规则，创造出独特、大胆、富有表现力的视觉体验。Postmodernism强调装饰性、不对称性和色彩丰富性，通过混合不同的设计风格、字体、色彩和形状，营造出充满活力和创意的视觉效果。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
基于Postmodernism鲜艳色彩：

```css
/* 主色 - 霓虹粉 */
--postmodern-pink-primary: #FF1493;
--postmodern-pink-light: #FF69B4;
--postmodern-pink-dark: #C71585;

/* 霓虹粉变体 */
--postmodern-pink-50: #FFF0F5;
--postmodern-pink-100: #FFE4E1;
--postmodern-pink-200: #FFB6C1;
--postmodern-pink-300: #FF69B4;
--postmodern-pink-400: #FF1493;
--postmodern-pink-500: #DB7093;
--postmodern-pink-600: #C71585;
--postmodern-pink-700: #B03060;
--postmodern-pink-800: #993366;
--postmodern-pink-900: #800040;
```

**使用场景**：
- 霓虹粉：品牌识别、主要装饰、重要元素
- 霓虹粉变体：不同深浅的背景、边框、装饰

### 辅助色（Secondary Colors）
```css
/* 辅助色 - 霓虹蓝 */
--postmodern-blue-primary: #00CED1;
--postmodern-blue-light: #40E0D0;
--postmodern-blue-dark: #008B8B;

/* 霓虹蓝变体 */
--postmodern-blue-50: #E0FFFF;
--postmodern-blue-100: #B2EBF2;
--postmodern-blue-200: #80DEEA;
--postmodern-blue-300: #4DD0E1;
--postmodern-blue-400: #26C6DA;
--postmodern-blue-500: #00BCD4;
--postmodern-blue-600: #00ACC1;
--postmodern-blue-700: #0097A7;
--postmodern-blue-800: #00838F;
--postmodern-blue-900: #006064;
```

**使用场景**：
- 霓虹蓝：强调元素、对比元素、次要装饰
- 霓虹蓝变体：不同深浅的背景、边框、装饰

### 强调色（Accent Colors）
```css
/* 霓虹绿 */
--postmodern-green-primary: #00FF00;
--postmodern-green-light: #32CD32;
--postmodern-green-dark: #228B22;

/* 霓虹黄 */
--postmodern-yellow-primary: #FFFF00;
--postmodern-yellow-light: #FFFFE0;
--postmodern-yellow-dark: #FFD700;

/* 霓虹紫 */
--postmodern-purple-primary: #9400D3;
--postmodern-purple-light: #BA55D3;
--postmodern-purple-dark: #800080;

/* 霓虹橙 */
--postmodern-orange-primary: #FF4500;
--postmodern-orange-light: #FF6347;
--postmodern-orange-dark: #FF0000;
```

**使用场景**：
- 霓虹绿：成功、完成、积极反馈
- 霓虹黄：警告、注意、次要提醒
- 霓虹紫：创意、艺术、特殊元素
- 霓虹橙：错误、危险、重要提醒

### 背景色（Background Colors）
```css
/* 背景色 - 页面和组件背景 */
--postmodern-background: #1A1A2E;
--postmodern-background-light: #16213E;
--postmodern-background-dark: #0F0F1A;

/* 表面色 - 卡片和表面 */
--postmodern-surface: #16213E;
--postmodern-surface-light: #1F2833;
--postmodern-surface-dark: #0A0A12;
```

**使用场景**：
- 背景色：页面背景、应用背景
- 表面色：卡片背景、组件背景、弹窗背景

### 语义色（Semantic Colors）
```css
/* 错误状态 */
--postmodern-error: #FF0000;
--postmodern-error-light: #FF6347;
--postmodern-error-dark: #8B0000;

/* 警告状态 */
--postmodern-warning: #FFFF00;
--postmodern-warning-light: #FFFFE0;
--postmodern-warning-dark: #FFD700;

/* 成功状态 */
--postmodern-success: #00FF00;
--postmodern-success-light: #32CD32;
--postmodern-success-dark: #228B22;

/* 信息状态 */
--postmodern-info: #00CED1;
--postmodern-info-light: #40E0D0;
--postmodern-info-dark: #008B8B;
```

**使用场景**：
- 错误：操作失败、错误提示、危险操作
- 警告：注意事项、次要提醒、待处理状态
- 成功：操作成功、完成状态、积极反馈
- 信息：一般提示、帮助信息、说明文字

### 文本色（Text Colors）
```css
/* 主要文字 */
--postmodern-text-primary: #FFFFFF;
--postmodern-text-primary-light: rgba(255, 255, 255, 0.95);
--postmodern-text-primary-dark: rgba(255, 255, 255, 0.87);

/* 次要文字 */
--postmodern-text-secondary: #E0E0E0;
--postmodern-text-secondary-light: rgba(224, 224, 224, 0.87);
--postmodern-text-secondary-dark: rgba(224, 224, 224, 0.6);

/* 禁用文字 */
--postmodern-text-disabled: #B0B0B0;
--postmodern-text-disabled-light: rgba(176, 176, 176, 0.5);
--postmodern-text-disabled-dark: rgba(176, 176, 176, 0.3);
```

**使用场景**：
- 主要文字：标题、重要内容、主要信息
- 次要文字：正文、辅助信息、次要内容
- 禁用文字：禁用状态、不可用元素

### Design Token 命名建议
```
--postmodern-{hue}-{shade}
--postmodern-{semantic}-{state}

示例：
--postmodern-pink-500
--postmodern-blue-600
--postmodern-error-dark
--postmodern-success-light
```

### 色彩使用原则
1. **鲜艳对比**：使用鲜艳、对比强烈的色彩
2. **色彩丰富**：每个页面可以使用多种色彩
3. **视觉冲击**：通过色彩搭配营造视觉冲击
4. **反传统**：打破传统的色彩使用规则
5. **装饰导向**：色彩使用服务于装饰效果

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
/* 主字体 - 无衬线字体 */
--font-primary: 'Helvetica Neue', 'Arial', 'Verdana', sans-serif;

/* 备用字体 - 衬线字体 */
--font-secondary: 'Georgia', 'Times New Roman', serif;

/* 装饰字体 - 装饰性文字 */
--font-decorative: 'Impact', 'Arial Black', sans-serif;
```

**字体选择理由**：
- Helvetica Neue：现代、清晰、易读
- Georgia：优雅的衬线字体，提供对比
- Impact：装饰性字体，适合标题和装饰文字

### 字号层级（Font Size Scale）
基于Postmodernism排版系统：

```css
/* 标题层级 */
--font-size-h1: 5rem;       /* 80px - 页面主标题 */
--font-size-h2: 4rem;       /* 64px - 章节标题 */
--font-size-h3: 3rem;       /* 48px - 子章节标题 */
--font-size-h4: 2.5rem;     /* 40px - 卡片标题 */
--font-size-h5: 2rem;       /* 32px - 小标题 */
--font-size-h6: 1.5rem;     /* 24px - 微标题 */

/* 副标题层级 */
--font-size-subtitle1: 1.25rem;  /* 20px - 副标题1 */
--font-size-subtitle2: 1.125rem;  /* 18px - 副标题2 */

/* 正文层级 */
--font-size-body1: 1rem;      /* 16px - 正文1 */
--font-size-body2: 0.875rem;  /* 14px - 正文2 */

/* 按钮层级 */
--font-size-button: 1rem;      /* 16px - 按钮 */
--font-size-caption: 0.75rem;  /* 12px - 说明文字 */
--font-size-overline: 0.625rem; /* 10px - 标签文字 */
```

### 行高（Line Height）
```css
--line-height-dense: 1.1;     /* 紧凑 - 标题 */
--line-height-normal: 1.5;    /* 标准 - 正文 */
--line-height-relaxed: 1.8;  /* 宽松 - 长文本 */
```

### 字重（Font Weight）
```css
--font-weight-light: 300;    /* 轻体 - 辅助文字 */
--font-weight-regular: 400;  /* 常规 - 正文 */
--font-weight-medium: 500;   /* 中等 - 强调文字 */
--font-weight-bold: 700;     /* 粗体 - 标题 */
--font-weight-black: 900;    /* 特粗 - 装饰文字 */
```

### 字间距（Letter Spacing）
```css
--letter-spacing-tight: -0.02em;  /* 紧凑 - 大标题 */
--letter-spacing-normal: 0;       /* 标准 - 正文 */
--letter-spacing-wide: 0.1em;     /* 宽松 - 小标题 */
--letter-spacing-wider: 0.2em;   /* 更宽 - 标签 */
```

### 排版节奏规则
1. **不对称原则**：打破对称性和规则
2. **混合字体**：混合使用不同字体
3. **装饰导向**：使用装饰元素增强视觉效果
4. **视觉冲击**：通过排版营造视觉冲击
5. **反传统**：打破传统的排版规则

### 响应式排版
```css
/* 移动端（< 600dp） */
@media (max-width: 599px) {
    --font-size-h1: 3rem;    /* 48px */
    --font-size-h2: 2.5rem;  /* 40px */
    --font-size-h3: 2rem;    /* 32px */
    --font-size-body1: 1rem;   /* 16px */
}

/* 平板端（600dp - 840dp） */
@media (min-width: 600dp) and (max-width: 839px) {
    --font-size-h1: 4rem;    /* 64px */
    --font-size-h2: 3rem;    /* 48px */
    --font-size-h3: 2.5rem;  /* 40px */
    --font-size-body1: 1rem;   /* 16px */
}

/* 桌面端（≥ 840dp） */
@media (min-width: 840px) {
    --font-size-h1: 5rem;    /* 80px */
    --font-size-h2: 4rem;    /* 64px */
    --font-size-h3: 3rem;    /* 48px */
    --font-size-body1: 1rem;   /* 16px */
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
--container-max-width: 1440px;  /* 最大宽度 */
--container-padding: 2rem;     /* 内边距 32dp */
--container-margin: 0 auto;     /* 水平居中 */
```

### 栅格系统（Grid System）
基于12列网格系统：

```css
/* 基础栅格 */
--grid-columns: 12;
--grid-gutter: 2rem;   /* 32dp - 栅格间距 */
--grid-margin: 2rem;   /* 32dp - 外边距 */

/* 响应式栅格 */
/* 移动端：4列 */
@media (max-width: 599px) {
    --grid-columns: 4;
    --grid-gutter: 1.5rem; /* 24dp */
    --grid-margin: 1.5rem; /* 24dp */
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
- 高密度：数据展示、信息列表、详细内容
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
1. **不对称布局**：打破对称性的布局方式
2. **混合布局**：混合多种布局方式
3. **装饰布局**：强调装饰元素的布局方式
4. **网格布局**：CSS Grid布局，适合复杂页面布局

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
    background-color: var(--postmodern-pink-primary);
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* 悬停状态 */
.btn-contained:hover {
    background-color: var(--postmodern-pink-light);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
}

/* 激活状态 */
.btn-contained:active {
    background-color: var(--postmodern-pink-dark);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transform: translateY(0);
}

/* 禁用状态 */
.btn-contained:disabled {
    background-color: var(--postmodern-text-disabled);
    color: var(--postmodern-text-disabled-dark);
    cursor: not-allowed;
    box-shadow: none;
}

/* 焦点状态 */
.btn-contained:focus {
    outline: 3px solid var(--postmodern-pink-light);
    outline-offset: 2px;
}
```

#### 变体规范
```css
/* 实心按钮 */
.btn-contained {
    background-color: var(--postmodern-pink-primary);
    color: #FFFFFF;
    border: none;
}

/* 文字按钮 */
.btn-text {
    background-color: transparent;
    color: var(--postmodern-pink-primary);
    border: none;
}

/* 轮廓按钮 */
.btn-outlined {
    background-color: transparent;
    color: var(--postmodern-pink-primary);
    border: 3px solid var(--postmodern-pink-primary);
}
```

#### 圆角规范
```css
/* Postmodernism：大圆角 */
.btn {
    border-radius: 8px; /* 大圆角 - Postmodernism */
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
    background-color: var(--postmodern-surface);
    border: 3px solid var(--postmodern-pink-primary);
    border-radius: 12px;
    padding: var(--spacing-4);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.card:hover {
    border-color: var(--postmodern-pink-light);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
    transform: translateY(-4px);
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
/* Postmodernism：强烈阴影 */
.shadow-1 {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.shadow-2 {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.35);
}

.shadow-3 {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.shadow-4 {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.45);
}

.shadow-5 {
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.5);
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
    color: var(--postmodern-text-primary);
    background-color: var(--postmodern-surface-light);
    border: 3px solid var(--postmodern-blue-primary);
    border-radius: 8px;
    font-weight: var(--font-weight-regular);
}

.input:hover {
    border-color: var(--postmodern-pink-primary);
}

.input:focus {
    border-color: var(--postmodern-pink-primary);
    outline: 3px solid var(--postmodern-pink-light);
    outline-offset: -2px;
}

.input-error {
    border-color: var(--postmodern-error);
}

.input-disabled {
    color: var(--postmodern-text-disabled);
    background-color: var(--postmodern-surface-dark);
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
    font-weight: var(--font-weight-bold);
    color: var(--postmodern-pink-primary);
    text-transform: uppercase;
    letter-spacing: 0.15em;
}

.form-hint {
    margin-top: var(--spacing-1);
    font-size: 0.75rem;
    color: var(--postmodern-text-secondary);
}

.form-error {
    margin-top: var(--spacing-1);
    font-size: 0.75rem;
    color: var(--postmodern-error);
}
```

### Navigation（导航）

#### 顶部导航
```css
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 var(--spacing-4);
    background-color: var(--postmodern-background);
    border-bottom: 3px solid var(--postmodern-pink-primary);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.nav-link {
    padding: 1rem 1.5rem;
    font-size: 0.875rem;
    font-weight: var(--font-weight-bold);
    color: var(--postmodern-text-primary);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-radius: 8px;
}

.nav-link:hover,
.nav-link.active {
    background-color: var(--postmodern-pink-primary);
    color: #FFFFFF;
}
```

#### 侧边导航
```css
.sidebar {
    width: 280px;
    height: 100vh;
    padding: var(--spacing-4);
    background-color: var(--postmodern-background);
    border-right: 3px solid var(--postmodern-pink-primary);
}

.sidebar-item {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    margin-bottom: var(--spacing-1);
    font-size: 0.875rem;
    font-weight: var(--font-weight-bold);
    color: var(--postmodern-text-primary);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-radius: 8px;
}

.sidebar-item:hover,
.sidebar-item.active {
    background-color: var(--postmodern-pink-primary);
    color: #FFFFFF;
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
**风格特征**：
- **多样化**：融合多种图标风格
- **装饰性**：具有装饰性细节
- **鲜艳色彩**：使用鲜艳、对比强烈的色彩
- **不规则形状**：使用不规则形状

**图标规范**：
```css
.icon {
    width: 24px;
    height: 24px;
    stroke-width: 2px;
    stroke: var(--postmodern-pink-primary);
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
    fill: var(--postmodern-pink-primary);
    stroke: none;
}
```

**图标库建议**：
- Material Icons：基础图标库，可自定义样式
- Font Awesome：丰富的图标库
- 自定义Postmodernism图标：基于Postmodernism风格自定义图标

### 插画风格
**风格特征**：
- **混合风格**：融合多种插画风格
- **鲜艳色彩**：使用鲜艳、对比强烈的色彩
- **装饰细节**：精美的装饰元素和细节
- **不规则形状**：使用不规则形状

**插画原则**：
1. **混合原则**：融合多种插画风格
2. **色彩原则**：使用鲜艳、对比强烈的色彩
3. **装饰原则**：使用精美的装饰元素和细节
4. **不规则原则**：使用不规则形状

**插画类型**：
- **混合插画**：融合多种插画风格
- **装饰插画**：强调装饰元素的插画
- **鲜艳插画**：使用鲜艳色彩的插画
- **不规则插画**：使用不规则形状的插画

### 设计原则
1. **装饰导向**：强调装饰元素和细节
2. **混合风格**：融合多种设计风格
3. **鲜艳色彩**：使用鲜艳、对比强烈的色彩
4. **视觉冲击**：营造视觉冲击

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover（悬停）行为
```css
/* 按钮悬停 */
.button:hover {
    background-color: var(--postmodern-pink-light);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
}

/* 卡片悬停 */
.card:hover {
    border-color: var(--postmodern-pink-light);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
    transform: translateY(-4px);
}

/* 链接悬停 */
.link:hover {
    color: var(--postmodern-pink-primary);
    text-decoration: underline;
}
```

### Active（激活）行为
```css
/* 按钮激活 */
.button:active {
    background-color: var(--postmodern-pink-dark);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transform: translateY(0);
}

/* 卡片激活 */
.card:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(0);
}
```

### Focus（焦点）行为
```css
/* 焦点样式 */
*:focus {
    outline: 3px solid var(--postmodern-pink-light);
    outline-offset: 2px;
}
```

### 动效节奏
```css
/* 标准缓动 */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

/* 弹性缓动 */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* 进入缓动 */
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* 退出缓动 */
--ease-out: cubic-bezier(0, 0, 0.2, 1);
```

**动效时长**：
```css
--duration-fast: 200ms;    /* 快速交互 */
--duration-normal: 300ms;  /* 标准交互 */
--duration-slow: 400ms;    /* 慢速交互 */
--duration-slower: 600ms;  /* 复杂动画 */
```

**动效原则**：
1. **视觉冲击**：动效具有视觉冲击
2. **装饰导向**：动效服务于装饰效果
3. **适度原则**：动效服务于功能，避免过度动画
4. **性能优先**：使用CSS动画，避免JavaScript动画

### 操作反馈设计原则
1. **视觉反馈**：颜色变化、边框变化、阴影变化
2. **明确状态**：清晰展示当前状态（悬停、激活、禁用）
3. **装饰效果**：通过装饰元素提供反馈
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
    --postmodern-pink-50: #FFF0F5;
    --postmodern-pink-100: #FFE4E1;
    --postmodern-pink-200: #FFB6C1;
    --postmodern-pink-300: #FF69B4;
    --postmodern-pink-400: #FF1493;
    --postmodern-pink-500: #DB7093;
    --postmodern-pink-600: #C71585;
    --postmodern-pink-700: #B03060;
    --postmodern-pink-800: #993366;
    --postmodern-pink-900: #800040;

    /* Blue Colors */
    --postmodern-blue-50: #E0FFFF;
    --postmodern-blue-100: #B2EBF2;
    --postmodern-blue-200: #80DEEA;
    --postmodern-blue-300: #4DD0E1;
    --postmodern-blue-400: #26C6DA;
    --postmodern-blue-500: #00BCD4;
    --postmodern-blue-600: #00ACC1;
    --postmodern-blue-700: #0097A7;
    --postmodern-blue-800: #00838F;
    --postmodern-blue-900: #006064;

    /* Background Colors */
    --postmodern-background: #1A1A2E;
    --postmodern-background-light: #16213E;
    --postmodern-background-dark: #0F0F1A;

    /* Surface Colors */
    --postmodern-surface: #16213E;
    --postmodern-surface-light: #1F2833;
    --postmodern-surface-dark: #0A0A12;

    /* Text Colors */
    --postmodern-text-primary: #FFFFFF;
    --postmodern-text-primary-light: rgba(255, 255, 255, 0.95);
    --postmodern-text-primary-dark: rgba(255, 255, 255, 0.87);

    --postmodern-text-secondary: #E0E0E0;
    --postmodern-text-secondary-light: rgba(224, 224, 224, 0.87);
    --postmodern-text-secondary-dark: rgba(224, 224, 224, 0.6);

    --postmodern-text-disabled: #B0B0B0;
    --postmodern-text-disabled-light: rgba(176, 176, 176, 0.5);
    --postmodern-text-disabled-dark: rgba(176, 176, 176, 0.3);

    /* Semantic Colors */
    --postmodern-error: #FF0000;
    --postmodern-error-light: #FF6347;
    --postmodern-error-dark: #8B0000;

    --postmodern-warning: #FFFF00;
    --postmodern-warning-light: #FFFFE0;
    --postmodern-warning-dark: #FFD700;

    --postmodern-success: #00FF00;
    --postmodern-success-light: #32CD32;
    --postmodern-success-dark: #228B22;

    --postmodern-info: #00CED1;
    --postmodern-info-light: #40E0D0;
    --postmodern-info-dark: #008B8B;
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
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
    --shadow-1: 0 4px 8px rgba(0, 0, 0, 0.3);
    --shadow-2: 0 6px 12px rgba(0, 0, 0, 0.35);
    --shadow-3: 0 8px 16px rgba(0, 0, 0, 0.4);
    --shadow-4: 0 12px 24px rgba(0, 0, 0, 0.45);
    --shadow-5: 0 16px 32px rgba(0, 0, 0, 0.5);
}
```

### Typography Tokens
```css
:root {
    /* Font Family */
    --font-primary: 'Helvetica Neue', 'Arial', 'Verdana', sans-serif;
    --font-secondary: 'Georgia', 'Times New Roman', serif;
    --font-decorative: 'Impact', 'Arial Black', sans-serif;

    /* Font Size */
    --font-size-h1: 5rem;
    --font-size-h2: 4rem;
    --font-size-h3: 3rem;
    --font-size-h4: 2.5rem;
    --font-size-h5: 2rem;
    --font-size-h6: 1.5rem;
    --font-size-subtitle1: 1.25rem;
    --font-size-subtitle2: 1.125rem;
    --font-size-body1: 1rem;
    --font-size-body2: 0.875rem;
    --font-size-button: 1rem;
    --font-size-caption: 0.75rem;
    --font-size-overline: 0.625rem;

    /* Line Height */
    --line-height-dense: 1.1;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.8;

    /* Font Weight */
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;
    --font-weight-black: 900;

    /* Letter Spacing */
    --letter-spacing-tight: -0.02em;
    --letter-spacing-normal: 0;
    --letter-spacing-wide: 0.1em;
    --letter-spacing-wider: 0.2em;
}
```

### Animation Tokens
```css
:root {
    /* Duration */
    --duration-fast: 200ms;
    --duration-normal: 300ms;
    --duration-slow: 400ms;
    --duration-slower: 600ms;

    /* Easing */
    --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
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
- 反传统的设计理念
- 多样性的设计语言
- 装饰性的设计思维
- 不对称的设计风格

#### 2. 色彩系统
✅ **可以学习**：
- 鲜艳、对比强烈的色彩使用方法
- 多种色彩的搭配原则
- 霓虹色彩的实现技巧
- 视觉冲击的营造方法

#### 3. 排版系统
✅ **可以学习**：
- 混合字体的使用原则
- 不对称排版系统
- 装饰元素的使用方法
- 视觉冲击的排版技巧

#### 4. 布局系统
✅ **可以学习**：
- 不对称布局的应用
- 混合布局的方法
- 装饰元素的布局技巧
- 视觉冲击的营造方法

#### 5. 组件设计
✅ **可以学习**：
- 大圆角设计语言的应用
- 鲜艳色彩的实现方法
- 装饰边框的使用技巧
- 强烈阴影的效果营造

#### 6. 图标与插画
✅ **可以学习**：
- 混合图标的设计方法
- 装饰性图标风格
- 鲜艳色彩图标设计
- 不规则形状图标实现

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 1. 品牌元素
❌ **不应复刻**：
- 特定品牌的商标和标志
- Postmodernism历史品牌的官方标识
- 特定品牌的视觉识别系统
- 任何受版权保护的品牌元素

#### 2. 插画内容
❌ **不应复刻**：
- Postmodernism历史时期的原创插画
- 特定品牌的插画内容
- 特定风格的特定插画作品
- 任何受版权保护的插画作品

#### 3. 文字内容
❌ **不应复刻**：
- Postmodernism历史时期的原始文案
- 特定品牌的官方文案
- Postmodernism历史文档
- 任何受版权保护的文字内容

#### 4. 具体设计
❌ **不应复刻**：
- Postmodernism历史时期的特定页面设计
- 特定品牌的完整视觉系统
- Postmodernism历史建筑的设计
- 任何直接复制的设计元素

### 合法使用建议

#### 1. 风格借鉴
- 学习Postmodernism的原则和方法
- 参考色彩和排版系统
- 借鉴反传统的设计理念
- 应用装饰细节的设计思维

#### 2. 原创设计
- 基于Postmodernism原则创建原创设计
- 使用Postmodernism风格但加入自己的创意
- 结合现代技术和Postmodernism理念
- 创建独特的Postmodernism风格变体

#### 3. 法律合规
- 尊重历史时期的知识产权
- 避免直接复制受保护的内容
- 注明设计灵感的来源
- 遵守相关的版权和商标法律

#### 4. 道德准则
- 诚实说明设计灵感来源
- 不声称自己是历史时期的设计
- 尊重Postmodernism历史的原创作品
- 促进Postmodernism理念的合法传播

### 总结
Postmodernism是20世纪60-70年代兴起的重要设计风格，其核心理念是通过反传统、多样性、装饰性和不对称性，创造出独特、大胆、富有表现力的视觉体验。但是，在使用Postmodernism风格时，必须遵守相关的知识产权法律，尊重历史时期的知识产权，避免直接复制受保护的内容。通过学习Postmodernism的原则和方法，结合自己的创意和现代技术，可以创建出独特而合法的Postmodernism风格设计。