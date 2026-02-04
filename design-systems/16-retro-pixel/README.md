# Retro Pixel Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **像素化**：基于像素网格的设计
- **复古感**：8-bit/16-bit时代的怀旧感
- **块状结构**：明确的块状元素和边界
- **限制色彩**：有限的调色板
- **游戏化**：电子游戏风格的视觉元素

### 适用产品类型
- **游戏应用**：复古游戏、像素游戏、独立游戏
- **娱乐平台**：游戏社区、游戏直播、游戏资讯
- **创意工具**：像素编辑器、复古设计工具
- **营销活动**：复古主题活动、怀旧营销

### 设计哲学
Retro Pixel（复古像素风）基于早期电子游戏的像素艺术风格，使用有限的调色板、像素化的图形和块状的布局结构。其核心理念是"限制创造美"，通过技术限制（低分辨率、有限色彩）创造出独特的视觉风格。Retro Pixel强调怀旧感、游戏化和明确的视觉边界，通过像素化的元素和复古的色彩，提供独特而怀旧的视觉体验。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
基于8-bit/16-bit游戏调色板：

```css
/* 主色 - 蓝色 */
--pixel-blue-primary: #0000FF;
--pixel-blue-light: #4169E1;
--pixel-blue-dark: #00008B;

/* 蓝色变体 - 4色调色板 */
--pixel-blue-0: #000000;
--pixel-blue-1: #000080;
--pixel-blue-2: #0000FF;
--pixel-blue-3: #4169E1;
```

**使用场景**：
- 蓝色：品牌识别、主要元素、重要装饰
- 蓝色变体：不同深浅的背景、边框、装饰

### 辅助色（Secondary Colors）
```css
/* 辅助色 - 红色 */
--pixel-red-primary: #FF0000;
--pixel-red-light: #FF6347;
--pixel-red-dark: #8B0000;

/* 红色变体 - 4色调色板 */
--pixel-red-0: #000000;
--pixel-red-1: #8B0000;
--pixel-red-2: #FF0000;
--pixel-red-3: #FF6347;

/* 辅助色 - 绿色 */
--pixel-green-primary: #00FF00;
--pixel-green-light: #32CD32;
--pixel-green-dark: #006400;

/* 绿色变体 - 4色调色板 */
--pixel-green-0: #000000;
--pixel-green-1: #006400;
--pixel-green-2: #00FF00;
--pixel-green-3: #32CD32;

/* 辅助色 - 黄色 */
--pixel-yellow-primary: #FFFF00;
--pixel-yellow-light: #FFD700;
--pixel-yellow-dark: #B8860B;

/* 黄色变体 - 4色调色板 */
--pixel-yellow-0: #000000;
--pixel-yellow-1: #B8860B;
--pixel-yellow-2: #FFFF00;
--pixel-yellow-3: #FFD700;
```

**使用场景**：
- 红色：装饰元素、强调元素、情感表达
- 绿色：装饰元素、对比元素、视觉冲击
- 黄色：装饰元素、强调元素、活力表达

### 背景色（Background Colors）
```css
/* 背景色 - 纯色背景 */
--pixel-background: #000000;
--pixel-background-light: #1A1A1A;
--pixel-background-dark: #000000;

/* 表面色 - 纯色表面 */
--pixel-surface: #1A1A1A;
--pixel-surface-light: #2A2A2A;
--pixel-surface-dark: #0A0A0A;
```

**使用场景**：
- 背景色：页面背景、应用背景、装饰背景
- 表面色：卡片背景、组件背景、弹窗背景

### 语义色（Semantic Colors）
```css
/* 错误状态 */
--pixel-error: #FF0000;
--pixel-error-light: #FF6347;
--pixel-error-dark: #8B0000;

/* 警告状态 */
--pixel-warning: #FFFF00;
--pixel-warning-light: #FFD700;
--pixel-warning-dark: #B8860B;

/* 成功状态 */
--pixel-success: #00FF00;
--pixel-success-light: #32CD32;
--pixel-success-dark: #006400;

/* 信息状态 */
--pixel-info: #0000FF;
--pixel-info-light: #4169E1;
--pixel-info-dark: #00008B;
```

**使用场景**：
- 错误：操作失败、错误提示、危险操作
- 警告：注意事项、次要提醒、待处理状态
- 成功：操作成功、完成状态、积极反馈
- 信息：一般提示、帮助信息、说明文字

### 文本色（Text Colors）
```css
/* 主要文字 */
--pixel-text-primary: #FFFFFF;
--pixel-text-primary-light: rgba(255, 255, 255, 0.95);
--pixel-text-primary-dark: rgba(255, 255, 255, 0.87);

/* 次要文字 */
--pixel-text-secondary: #CCCCCC;
--pixel-text-secondary-light: rgba(204, 204, 204, 0.87);
--pixel-text-secondary-dark: rgba(204, 204, 204, 0.6);

/* 禁用文字 */
--pixel-text-disabled: #666666;
--pixel-text-disabled-light: rgba(102, 102, 102, 0.5);
--pixel-text-disabled-dark: rgba(102, 102, 102, 0.3);
```

**使用场景**：
- 主要文字：标题、重要内容、主要信息
- 次要文字：正文、辅助信息、次要内容
- 禁用文字：禁用状态、不可用元素

### Design Token 命名建议
```
--pixel-{hue}-{shade}
--pixel-{semantic}-{state}

示例：
--pixel-blue-2
--pixel-red-primary
--pixel-error-dark
--pixel-success-light
```

### 色彩使用原则
1. **限制调色板**：使用有限的调色板，通常每个颜色只有4个深浅
2. **纯色优先**：优先使用纯色，避免渐变
3. **高对比度**：使用高对比度，增强可读性
4. **像素边界**：颜色变化基于像素边界
5. **复古感**：通过有限的色彩创造复古感

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
/* 主字体 - 像素字体 */
--font-primary: 'Press Start 2P', 'VT323', 'Courier New', monospace;

/* 备用字体 - 等宽字体 */
--font-secondary: 'Courier New', 'Monaco', 'Menlo', monospace;

/* 装饰字体 - 复古字体 */
--font-display: 'Press Start 2P', 'VT323', monospace;
```

**字体选择理由**：
- Press Start 2P：经典的8-bit像素字体，适合标题和装饰
- VT323：复古的终端字体，适合正文
- Courier New：等宽字体，适合代码和复古风格

### 字号层级（Font Size Scale）
基于Retro Pixel排版系统：

```css
/* 标题层级 */
--font-size-h1: 2.5rem;      /* 40px - 页面主标题 */
--font-size-h2: 2rem;       /* 32px - 章节标题 */
--font-size-h3: 1.5rem;         /* 24px - 子章节标题 */
--font-size-h4: 1.25rem;       /* 20px - 卡片标题 */
--font-size-h5: 1rem;      /* 16px - 小标题 */
--font-size-h6: 0.875rem;         /* 14px - 微标题 */

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
--line-height-dense: 1.2;    /* 紧凑 - 标题 */
--line-height-normal: 1.5;    /* 标准 - 正文 */
--line-height-relaxed: 1.8;  /* 宽松 - 长文本 */
```

### 字重（Font Weight）
```css
--font-weight-regular: 400;  /* 常规 - 正文 */
--font-weight-bold: 700;     /* 粗体 - 标题 */
```

### 字间距（Letter Spacing）
```css
--letter-spacing-normal: 0;        /* 标准 - 正文 */
--letter-spacing-wide: 0.05em;     /* 宽松 - 小标题 */
```

### 排版节奏规则
1. **像素对齐**：所有文字基于像素网格对齐
2. **等宽原则**：使用等宽字体，保持一致的字符宽度
3. **复古感**：通过像素字体和等宽排版创造复古感
4. **清晰易读**：确保文字在小尺寸下仍然清晰可读
5. **游戏化**：通过排版创造游戏化的视觉体验

### 响应式排版
```css
/* 移动端（< 600dp） */
@media (max-width: 599px) {
    --font-size-h1: 1.75rem;  /* 28px */
    --font-size-h2: 1.5rem; /* 24px */
    --font-size-h3: 1.25rem; /* 20px */
    --font-size-body1: 0.875rem;   /* 14px */
}

/* 平板端（600dp - 840dp） */
@media (min-width: 600dp) and (max-width: 839px) {
    --font-size-h1: 2.125rem;    /* 34px */
    --font-size-h2: 1.75rem; /* 28px */
    --font-size-h3: 1.375rem; /* 22px */
    --font-size-body1: 0.9375rem;   /* 15px */
}

/* 桌面端（≥ 840dp） */
@media (min-width: 840px) {
    --font-size-h1: 2.5rem;  /* 40px */
    --font-size-h2: 2rem;  /* 32px */
    --font-size-h3: 1.5rem;    /* 24px */
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
基于8像素网格系统：

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
- 高密度：游戏界面、数据展示、信息密集页面
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
1. **块状布局**：基于块状元素的布局方式
2. **网格布局**：基于像素网格的布局方式
3. **游戏布局**：基于游戏界面的布局方式
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
    font-size: 0.875rem;
}

/* 大号按钮 */
.btn-large {
    height: 56px;
    padding: 0 2.5rem;
    font-size: 1rem;
}
```

#### 状态规范
```css
/* 默认状态 */
.btn-contained {
    background: #0000FF;
    color: #FFFFFF;
    border: 4px solid #00008B;
    border-radius: 0;
    font-weight: var(--font-weight-bold);
    box-shadow: 4px 4px 0 #00008B;
}

/* 悬停状态 */
.btn-contained:hover {
    background: #4169E1;
    box-shadow: 6px 6px 0 #00008B;
    transform: translate(-2px, -2px);
}

/* 激活状态 */
.btn-contained:active {
    background: #0000FF;
    box-shadow: 2px 2px 0 #00008B;
    transform: translate(2px, 2px);
}

/* 禁用状态 */
.btn-contained:disabled {
    background: #666666;
    color: #999999;
    border-color: #444444;
    cursor: not-allowed;
    box-shadow: none;
}

/* 焦点状态 */
.btn-contained:focus {
    outline: 4px solid #FFFF00;
    outline-offset: 2px;
}
```

#### 变体规范
```css
/* 实心按钮 */
.btn-contained {
    background: #0000FF;
    color: #FFFFFF;
    border: 4px solid #00008B;
}

/* 文字按钮 */
.btn-text {
    background: transparent;
    color: #0000FF;
    border: none;
    text-decoration: underline;
}

/* 轮廓按钮 */
.btn-outlined {
    background: transparent;
    color: #0000FF;
    border: 4px solid #0000FF;
}
```

#### 圆角规范
```css
/* Retro Pixel：无圆角设计 */
.btn {
    border-radius: 0; /* 无圆角 - Retro Pixel */
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
    background: #1A1A1A;
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
/* Retro Pixel：块状阴影 */
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
    font-size: 0.875rem;
    color: #FFFFFF;
    background: #1A1A1A;
    border: 4px solid #000000;
    border-radius: 0;
    font-weight: var(--font-weight-regular);
}

.input:hover {
    border-color: #0000FF;
}

.input:focus {
    border-color: #0000FF;
    outline: 4px solid #FFFF00;
    outline-offset: -2px;
}

.input-error {
    border-color: #FF0000;
}

.input-disabled {
    color: #666666;
    background: #0A0A0A;
    cursor: not-allowed;
}
```

#### 尺寸规范
```css
.input-small {
    height: 40px;
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
}

.input-medium {
    height: 48px;
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
}

.input-large {
    height: 56px;
    padding: 1rem 1.25rem;
    font-size: 1rem;
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
    letter-spacing: 0.05em;
}

.form-hint {
    margin-top: var(--spacing-2);
    font-size: 0.75rem;
    color: #CCCCCC;
}

.form-error {
    margin-top: var(--spacing-2);
    font-size: 0.75rem;
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
    height: 64px;
    padding: 0 var(--spacing-4);
    background: #000000;
    border-bottom: 4px solid #0000FF;
    box-shadow: 4px 4px 0 #000000;
}

.nav-link {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    font-weight: var(--font-weight-bold);
    color: #FFFFFF;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 0;
}

.nav-link:hover,
.nav-link.active {
    background: #0000FF;
    color: #FFFFFF;
}
```

#### 侧边导航
```css
.sidebar {
    width: 240px;
    height: 100vh;
    padding: var(--spacing-4);
    background: #000000;
    border-right: 4px solid #0000FF;
    box-shadow: 4px 0 0 #000000;
}

.sidebar-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    margin-bottom: var(--spacing-2);
    font-size: 0.875rem;
    font-weight: var(--font-weight-bold);
    color: #FFFFFF;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 0;
}

.sidebar-item:hover,
.sidebar-item.active {
    background: #0000FF;
    color: #FFFFFF;
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
**风格特征**：
- **像素化**：基于像素网格
- **块状**：使用块状形状
- **8-bit风格**：8-bit时代的图标风格
- **高对比度**：高对比度的图标

**图标规范**：
```css
.icon {
    width: 32px;
    height: 32px;
    stroke-width: 2px;
    stroke: #0000FF;
    fill: #000000;
    image-rendering: pixelated;
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
    fill: #0000FF;
    stroke: none;
}
```

**图标库建议**：
- Material Icons：基础图标库，可自定义样式
- 自定义像素图标：基于像素网格自定义图标
- 8-bit图标库：使用8-bit风格的图标库

### 插画风格
**风格特征**：
- **像素构成**：使用像素构成插画
- **块状化**：使用块状形状
- **有限色彩**：使用有限的调色板
- **游戏化**：游戏风格的插画

**插画原则**：
1. **像素原则**：所有元素都是基于像素网格
2. **块状原则**：所有元素基于块状形状
3. **有限色彩**：使用有限的调色板
4. **游戏化原则**：插画必须具有游戏化风格

**插画类型**：
- **像素插画**：基于像素网格的插画
- **游戏插画**：游戏风格的插画
- **复古插画**：复古风格的插画
- **信息插画**：提供信息的插画

### 设计原则
1. **像素导向**：通过像素化元素创造复古感
2. **游戏导向**：所有设计必须具有游戏化风格
3. **块状化**：所有元素保持块状化
4. **复古感**：确保所有元素具有复古感

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover（悬停）行为
```css
/* 按钮悬停 */
.button:hover {
    background: #4169E1;
    box-shadow: 6px 6px 0 #00008B;
    transform: translate(-2px, -2px);
}

/* 卡片悬停 */
.card:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 #000000;
}

/* 链接悬停 */
.link:hover {
    color: #0000FF;
    text-decoration: underline;
}
```

### Active（激活）行为
```css
/* 按钮激活 */
.button:active {
    background: #0000FF;
    box-shadow: 2px 2px 0 #00008B;
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
    outline: 4px solid #FFFF00;
    outline-offset: 2px;
}
```

### 动效节奏
```css
/* 标准缓动 */
--ease-standard: steps(4, end);

/* 弹性缓动 */
--ease-elastic: steps(6, end);

/* 进入缓动 */
--ease-in: steps(2, end);

/* 退出缓动 */
--ease-out: steps(2, end);

/* 进入退出缓动 */
--ease-in-out: steps(4, end);
```

**动效时长**：
```css
--duration-fast: 100ms;    /* 快速交互 */
--duration-normal: 200ms;  /* 标准交互 */
--duration-slow: 300ms;    /* 慢速交互 */
--duration-slower: 400ms;  /* 复杂动画 */
```

**动效原则**：
1. **像素动画**：动效基于像素动画
2. **游戏化**：动效具有游戏化风格
3. **适度原则**：动效服务于功能，避免过度动画
4. **性能优先**：使用CSS动画，避免JavaScript动画

### 操作反馈设计原则
1. **视觉反馈**：颜色变化、边框变化、阴影变化
2. **明确状态**：清晰展示当前状态（悬停、激活、禁用）
3. **块状效果**：通过块状元素提供反馈
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
    --pixel-blue-0: #000000;
    --pixel-blue-1: #000080;
    --pixel-blue-2: #0000FF;
    --pixel-blue-3: #4169E1;

    /* Red Colors */
    --pixel-red-0: #000000;
    --pixel-red-1: #8B0000;
    --pixel-red-2: #FF0000;
    --pixel-red-3: #FF6347;

    /* Green Colors */
    --pixel-green-0: #000000;
    --pixel-green-1: #006400;
    --pixel-green-2: #00FF00;
    --pixel-green-3: #32CD32;

    /* Yellow Colors */
    --pixel-yellow-0: #000000;
    --pixel-yellow-1: #B8860B;
    --pixel-yellow-2: #FFFF00;
    --pixel-yellow-3: #FFD700;

    /* Background Colors */
    --pixel-background: #000000;
    --pixel-background-light: #1A1A1A;
    --pixel-background-dark: #000000;

    /* Surface Colors */
    --pixel-surface: #1A1A1A;
    --pixel-surface-light: #2A2A2A;
    --pixel-surface-dark: #0A0A0A;

    /* Text Colors */
    --pixel-text-primary: #FFFFFF;
    --pixel-text-primary-light: rgba(255, 255, 255, 0.95);
    --pixel-text-primary-dark: rgba(255, 255, 255, 0.87);

    --pixel-text-secondary: #CCCCCC;
    --pixel-text-secondary-light: rgba(204, 204, 204, 0.87);
    --pixel-text-secondary-dark: rgba(204, 204, 204, 0.6);

    --pixel-text-disabled: #666666;
    --pixel-text-disabled-light: rgba(102, 102, 102, 0.5);
    --pixel-text-disabled-dark: rgba(102, 102, 102, 0.3);

    /* Semantic Colors */
    --pixel-error: #FF0000;
    --pixel-error-light: #FF6347;
    --pixel-error-dark: #8B0000;

    --pixel-warning: #FFFF00;
    --pixel-warning-light: #FFD700;
    --pixel-warning-dark: #B8860B;

    --pixel-success: #00FF00;
    --pixel-success-light: #32CD32;
    --pixel-success-dark: #006400;

    --pixel-info: #0000FF;
    --pixel-info-light: #4169E1;
    --pixel-info-dark: #00008B;
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
    --font-primary: 'Press Start 2P', 'VT323', 'Courier New', monospace;
    --font-secondary: 'Courier New', 'Monaco', 'Menlo', monospace;
    --font-display: 'Press Start 2P', 'VT323', monospace;

    /* Font Size */
    --font-size-h1: 2.5rem;
    --font-size-h2: 2rem;
    --font-size-h3: 1.5rem;
    --font-size-h4: 1.25rem;
    --font-size-h5: 1rem;
    --font-size-h6: 0.875rem;
    --font-size-subtitle1: 1rem;
    --font-size-subtitle2: 0.875rem;
    --font-size-body1: 1rem;
    --font-size-body2: 0.875rem;
    --font-size-button: 0.875rem;
    --font-size-caption: 0.75rem;
    --font-size-overline: 0.625rem;

    /* Line Height */
    --line-height-dense: 1.2;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.8;

    /* Font Weight */
    --font-weight-regular: 400;
    --font-weight-bold: 700;

    /* Letter Spacing */
    --letter-spacing-normal: 0;
    --letter-spacing-wide: 0.05em;
}
```

### Animation Tokens
```css
:root {
    /* Duration */
    --duration-fast: 100ms;
    --duration-normal: 200ms;
    --duration-slow: 300ms;
    --duration-slower: 400ms;

    /* Easing */
    --ease-standard: steps(4, end);
    --ease-elastic: steps(6, end);
    --ease-in: steps(2, end);
    --ease-out: steps(2, end);
    --ease-in-out: steps(4, end);
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
- 像素化的设计理念
- 限制调色板的设计语言
- 块状结构的设计思维
- 游戏化的设计风格

#### 2. 色彩系统
✅ **可以学习**：
- 有限调色板的使用方法
- 高对比度的搭配原则
- 纯色的实现技巧
- 复古感的营造方法

#### 3. 排版系统
✅ **可以学习**：
- 像素字体的使用原则
- 基于等宽的排版系统
- 块状结构的建立方法
- 复古感的原则

#### 4. 布局系统
✅ **可以学习**：
- 块状布局的应用
- 基于像素网格的布局方法
- 游戏化布局的技巧
- 复古感的营造方法

#### 5. 组件设计
✅ **可以学习**：
- 无圆角设计语言的应用
- 块状阴影的实现方法
- 像素边框的使用技巧
- 纯色背景的效果营造

#### 6. 图标与插画
✅ **可以学习**：
- 像素图标的设计方法
- 块状图标风格
- 8-bit图标设计
- 有限色彩图标实现

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 1. 品牌元素
❌ **不应复刻**：
- 特定品牌的商标和标志
- Retro Pixel历史品牌的官方标识
- 特定品牌的视觉识别系统
- 任何受版权保护的品牌元素

#### 2. 插画内容
❌ **不应复刻**：
- Retro Pixel历史时期的原创插画
- 特定品牌的插画内容
- 特定风格的特定插画作品
- 任何受版权保护的插画作品

#### 3. 文字内容
❌ **不应复刻**：
- Retro Pixel历史时期的原始文案
- 特定品牌的官方文案
- Retro Pixel历史文档
- 任何受版权保护的文字内容

#### 4. 具体设计
❌ **不应复刻**：
- Retro Pixel历史时期的特定页面设计
- 特定品牌的完整视觉系统
- Retro Pixel历史游戏的设计
- 任何直接复制的设计元素

### 合法使用建议

#### 1. 风格借鉴
- 学习Retro Pixel的原则和方法
- 参考色彩和排版系统
- 借鉴像素化的设计理念
- 应用游戏化的设计思维

#### 2. 原创设计
- 基于Retro Pixel原则创建原创设计
- 使用Retro Pixel风格但加入自己的创意
- 结合现代技术和Retro Pixel理念
- 创建独特的Retro Pixel风格变体

#### 3. 法律合规
- 尊重历史时期的知识产权
- 避免直接复制受保护的内容
- 注明设计灵感的来源
- 遵守相关的版权和商标法律

#### 4. 道德准则
- 诚实说明设计灵感来源
- 不声称自己是历史时期的设计
- 尊重Retro Pixel历史的原创作品
- 促进Retro Pixel理念的合法传播

### 总结
Retro Pixel（复古像素风）基于早期电子游戏的像素艺术风格，使用有限的调色板、像素化的图形和块状的布局结构。其核心理念是"限制创造美"，通过技术限制（低分辨率、有限色彩）创造出独特的视觉风格。Retro Pixel强调怀旧感、游戏化和明确的视觉边界，通过像素化的元素和复古的色彩，提供独特而怀旧的视觉体验。但是，在使用Retro Pixel风格时，必须遵守相关的知识产权法律，尊重历史时期的知识产权，避免直接复制受保护的内容。通过学习Retro Pixel的原则和方法，结合自己的创意和现代技术，可以创建出独特而合法的Retro Pixel风格设计。