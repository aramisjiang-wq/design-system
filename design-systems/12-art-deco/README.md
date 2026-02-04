# Art Deco Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **几何对称**：基于几何形状的对称布局
- **金属光泽**：金色、银色等金属质感的色彩
- **奢华质感**：华丽、精致、优雅的视觉感受
- **流线造型**：流畅的线条和曲线造型
- **装饰细节**：精美的装饰元素和细节

### 适用产品类型
- **高端品牌**：奢侈品、珠宝、高端酒店
- **文化活动**：艺术展览、博物馆、文化活动
- **餐饮娱乐**：高端餐厅、酒吧、娱乐场所
- **时尚设计**：时尚品牌、设计工作室、创意机构

### 设计哲学
Art Deco（装饰艺术）是20世纪20-30年代兴起的一种设计风格，融合了现代主义和装饰主义的特点。其核心理念是通过几何形状、对称性、金属质感和装饰细节，创造出华丽、精致、优雅的视觉体验。Art Deco强调几何形状的运用，如三角形、梯形、圆形等，同时注重对称性和重复性，营造出秩序感和节奏感。色彩上常用金色、银色、黑色、深蓝色等，营造出奢华、精致的质感。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
基于Art Deco金属质感色彩：

```css
/* 主色 - 金色 */
--artdeco-gold-primary: #D4AF37;
--artdeco-gold-light: #F4D03F;
--artdeco-gold-dark: #B7950B;

/* 金色变体 */
--artdeco-gold-50: #FEF9E7;
--artdeco-gold-100: #FCF3CF;
--artdeco-gold-200: #F9E79F;
--artdeco-gold-300: #F7DC6F;
--artdeco-gold-400: #F4D03F;
--artdeco-gold-500: #D4AF37;
--artdeco-gold-600: #B7950B;
--artdeco-gold-700: #9A7B0A;
--artdeco-gold-800: #7D6209;
--artdeco-gold-900: #604907;
```

**使用场景**：
- 金色：品牌识别、主要装饰、重要元素
- 金色变体：不同深浅的背景、边框、装饰

### 辅助色（Secondary Colors）
```css
/* 辅助色 - 银色 */
--artdeco-silver-primary: #C0C0C0;
--artdeco-silver-light: #E5E5E5;
--artdeco-silver-dark: #A9A9A9;

/* 银色变体 */
--artdeco-silver-50: #FAFAFA;
--artdeco-silver-100: #F0F0F0;
--artdeco-silver-200: #E0E0E0;
--artdeco-silver-300: #D0D0D0;
--artdeco-silver-400: #C0C0C0;
--artdeco-silver-500: #B0B0B0;
--artdeco-silver-600: #A0A0A0;
--artdeco-silver-700: #909090;
--artdeco-silver-800: #808080;
--artdeco-silver-900: #707070;
```

**使用场景**：
- 银色：强调元素、对比元素、次要装饰
- 银色变体：不同深浅的背景、边框、装饰

### 背景色（Background Colors）
```css
/* 背景色 - 页面和组件背景 */
--artdeco-background: #1A1A1A;
--artdeco-background-light: #2D2D2D;
--artdeco-background-dark: #000000;

/* 表面色 - 卡片和表面 */
--artdeco-surface: #2D2D2D;
--artdeco-surface-light: #404040;
--artdeco-surface-dark: #1A1A1A;
```

**使用场景**：
- 背景色：页面背景、应用背景
- 表面色：卡片背景、组件背景、弹窗背景

### 强调色（Accent Colors）
```css
/* 深蓝色 - Art Deco经典色彩 */
--artdeco-navy-primary: #1B3B5F;
--artdeco-navy-light: #2E5A8C;
--artdeco-navy-dark: #0F263D;

/* 红色 - 强调色 */
--artdeco-red-primary: #8B0000;
--artdeco-red-light: #B22222;
--artdeco-red-dark: #5C0000;

/* 绿色 - 强调色 */
--artdeco-green-primary: #006400;
--artdeco-green-light: #228B22;
--artdeco-green-dark: #004400;
```

**使用场景**：
- 深蓝色：背景、装饰元素、强调区域
- 红色：警告、错误、重要提醒
- 绿色：成功、完成、积极反馈

### 语义色（Semantic Colors）
```css
/* 错误状态 */
--artdeco-error: #8B0000;
--artdeco-error-light: #B22222;
--artdeco-error-dark: #5C0000;

/* 警告状态 */
--artdeco-warning: #D4AF37;
--artdeco-warning-light: #F4D03F;
--artdeco-warning-dark: #B7950B;

/* 成功状态 */
--artdeco-success: #228B22;
--artdeco-success-light: #32CD32;
--artdeco-success-dark: #006400;

/* 信息状态 */
--artdeco-info: #1B3B5F;
--artdeco-info-light: #2E5A8C;
--artdeco-info-dark: #0F263D;
```

**使用场景**：
- 错误：操作失败、错误提示、危险操作
- 警告：注意事项、次要提醒、待处理状态
- 成功：操作成功、完成状态、积极反馈
- 信息：一般提示、帮助信息、说明文字

### 文本色（Text Colors）
```css
/* 主要文字 */
--artdeco-text-primary: #FFFFFF;
--artdeco-text-primary-light: rgba(255, 255, 255, 0.95);
--artdeco-text-primary-dark: rgba(255, 255, 255, 0.87);

/* 次要文字 */
--artdeco-text-secondary: #C0C0C0;
--artdeco-text-secondary-light: rgba(192, 192, 192, 0.87);
--artdeco-text-secondary-dark: rgba(192, 192, 192, 0.6);

/* 禁用文字 */
--artdeco-text-disabled: #808080;
--artdeco-text-disabled-light: rgba(128, 128, 128, 0.5);
--artdeco-text-disabled-dark: rgba(128, 128, 128, 0.3);
```

**使用场景**：
- 主要文字：标题、重要内容、主要信息
- 次要文字：正文、辅助信息、次要内容
- 禁用文字：禁用状态、不可用元素

### Design Token 命名建议
```
--artdeco-{hue}-{shade}
--artdeco-{semantic}-{state}

示例：
--artdeco-gold-500
--artdeco-silver-600
--artdeco-error-dark
--artdeco-success-light
```

### 色彩使用原则
1. **金属质感**：大量使用金色、银色等金属质感的色彩
2. **对比强烈**：深色背景与金色、银色形成强烈对比
3. **色彩限制**：每个页面中主色不超过1种，辅助色不超过2种
4. **奢华感**：通过色彩搭配营造奢华、精致的质感
5. **装饰导向**：色彩使用服务于装饰效果，强调视觉冲击力

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
/* 主字体 - 衬线字体 */
--font-primary: 'Playfair Display', 'Didot', 'Bodoni MT', 'Times New Roman', serif;

/* 备用字体 - 无衬线字体 */
--font-secondary: 'Montserrat', 'Helvetica Neue', 'Arial', sans-serif;

/* 装饰字体 - 装饰性文字 */
--font-decorative: 'Cinzel', 'Trajan Pro', serif;
```

**字体选择理由**：
- Playfair Display：优雅的衬线字体，适合Art Deco风格
- Montserrat：现代的无衬线字体，提供良好的可读性
- Cinzel：装饰性字体，适合标题和装饰文字

### 字号层级（Font Size Scale）
基于Art Deco排版系统：

```css
/* 标题层级 */
--font-size-h1: 4.5rem;      /* 72px - 页面主标题 */
--font-size-h2: 3.5rem;       /* 56px - 章节标题 */
--font-size-h3: 2.5rem;       /* 40px - 子章节标题 */
--font-size-h4: 2rem;         /* 32px - 卡片标题 */
--font-size-h5: 1.5rem;       /* 24px - 小标题 */
--font-size-h6: 1.25rem;      /* 20px - 微标题 */

/* 副标题层级 */
--font-size-subtitle1: 1.125rem;  /* 18px - 副标题1 */
--font-size-subtitle2: 1rem;      /* 16px - 副标题2 */

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
--line-height-dense: 1.1;     /* 紧凑 - 标题 */
--line-height-normal: 1.4;    /* 标准 - 正文 */
--line-height-relaxed: 1.6;  /* 宽松 - 长文本 */
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
--letter-spacing-tight: 0.02em;   /* 紧凑 - 大标题 */
--letter-spacing-normal: 0.05em;  /* 标准 - 正文 */
--letter-spacing-wide: 0.1em;     /* 宽松 - 小标题 */
--letter-spacing-wider: 0.15em;   /* 更宽 - 标签 */
```

### 排版节奏规则
1. **对称原则**：基于对称性和重复性建立排版节奏
2. **几何布局**：使用几何形状的排版布局
3. **装饰元素**：使用装饰元素增强视觉效果
4. **充足留白**：使用充足的留白空间，营造奢华感
5. **一致性**：相同类型的元素使用相同的排版规则

### 响应式排版
```css
/* 移动端（< 600dp） */
@media (max-width: 599px) {
    --font-size-h1: 2.5rem;   /* 40px */
    --font-size-h2: 2rem;     /* 32px */
    --font-size-h3: 1.5rem;   /* 24px */
    --font-size-body1: 1rem;   /* 16px */
}

/* 平板端（600dp - 840dp） */
@media (min-width: 600dp) and (max-width: 839px) {
    --font-size-h1: 3.5rem;   /* 56px */
    --font-size-h2: 2.5rem;   /* 40px */
    --font-size-h3: 2rem;     /* 32px */
    --font-size-body1: 1rem;   /* 16px */
}

/* 桌面端（≥ 840dp） */
@media (min-width: 840px) {
    --font-size-h1: 4.5rem;   /* 72px */
    --font-size-h2: 3.5rem;   /* 56px */
    --font-size-h3: 2.5rem;   /* 40px */
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
1. **对称布局**：基于对称性的布局方式
2. **几何布局**：基于几何形状的布局方式
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
    font-size: 0.8125rem;
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
    font-size: 0.9375rem;
}
```

#### 状态规范
```css
/* 默认状态 */
.btn-contained {
    background-color: var(--artdeco-gold-primary);
    color: #000000;
    border: 2px solid var(--artdeco-gold-primary);
    border-radius: 0;
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* 悬停状态 */
.btn-contained:hover {
    background-color: var(--artdeco-gold-light);
    border-color: var(--artdeco-gold-light);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
}

/* 激活状态 */
.btn-contained:active {
    background-color: var(--artdeco-gold-dark);
    border-color: var(--artdeco-gold-dark);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* 禁用状态 */
.btn-contained:disabled {
    background-color: var(--artdeco-silver-400);
    border-color: var(--artdeco-silver-400);
    color: var(--artdeco-text-disabled);
    cursor: not-allowed;
    box-shadow: none;
}

/* 焦点状态 */
.btn-contained:focus {
    outline: 2px solid var(--artdeco-gold-light);
    outline-offset: 2px;
}
```

#### 变体规范
```css
/* 实心按钮 */
.btn-contained {
    background-color: var(--artdeco-gold-primary);
    color: #000000;
    border: 2px solid var(--artdeco-gold-primary);
}

/* 文字按钮 */
.btn-text {
    background-color: transparent;
    color: var(--artdeco-gold-primary);
    border: none;
}

/* 轮廓按钮 */
.btn-outlined {
    background-color: transparent;
    color: var(--artdeco-gold-primary);
    border: 2px solid var(--artdeco-gold-primary);
}
```

#### 圆角规范
```css
/* Art Deco：直角设计 */
.btn {
    border-radius: 0; /* 直角 - Art Deco */
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
    background-color: var(--artdeco-surface);
    border: 2px solid var(--artdeco-gold-primary);
    border-radius: 0;
    padding: var(--spacing-4);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.card:hover {
    border-color: var(--artdeco-gold-light);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
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
/* Art Deco：强烈阴影 */
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
    color: var(--artdeco-text-primary);
    background-color: var(--artdeco-surface-light);
    border: 2px solid var(--artdeco-silver-600);
    border-radius: 0;
    font-weight: var(--font-weight-regular);
}

.input:hover {
    border-color: var(--artdeco-gold-primary);
}

.input:focus {
    border-color: var(--artdeco-gold-primary);
    outline: 2px solid var(--artdeco-gold-light);
    outline-offset: -2px;
}

.input-error {
    border-color: var(--artdeco-error);
}

.input-disabled {
    color: var(--artdeco-text-disabled);
    background-color: var(--artdeco-surface-dark);
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
    color: var(--artdeco-gold-primary);
    text-transform: uppercase;
    letter-spacing: 0.15em;
}

.form-hint {
    margin-top: var(--spacing-1);
    font-size: 0.75rem;
    color: var(--artdeco-text-secondary);
}

.form-error {
    margin-top: var(--spacing-1);
    font-size: 0.75rem;
    color: var(--artdeco-error);
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
    background-color: var(--artdeco-background);
    border-bottom: 2px solid var(--artdeco-gold-primary);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.nav-link {
    padding: 1rem 1.5rem;
    font-size: 0.875rem;
    font-weight: var(--font-weight-bold);
    color: var(--artdeco-text-primary);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border: none;
}

.nav-link:hover,
.nav-link.active {
    color: var(--artdeco-gold-primary);
    border-bottom: 2px solid var(--artdeco-gold-primary);
}
```

#### 侧边导航
```css
.sidebar {
    width: 280px;
    height: 100vh;
    padding: var(--spacing-4);
    background-color: var(--artdeco-background);
    border-right: 2px solid var(--artdeco-gold-primary);
}

.sidebar-item {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    margin-bottom: var(--spacing-1);
    font-size: 0.875rem;
    font-weight: var(--font-weight-bold);
    color: var(--artdeco-text-primary);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border: none;
}

.sidebar-item:hover,
.sidebar-item.active {
    color: var(--artdeco-gold-primary);
    border-left: 4px solid var(--artdeco-gold-primary);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
**风格特征**：
- **几何化**：基于基础几何形状
- **对称性**：强调对称性和重复性
- **装饰性**：具有装饰性细节
- **金属质感**：使用金色、银色等金属质感

**图标规范**：
```css
.icon {
    width: 24px;
    height: 24px;
    stroke-width: 2px;
    stroke: var(--artdeco-gold-primary);
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
    fill: var(--artdeco-gold-primary);
    stroke: none;
}
```

**图标库建议**：
- Material Icons：基础图标库，可自定义样式
- Font Awesome：丰富的图标库
- 自定义Art Deco图标：基于Art Deco风格自定义图标

### 插画风格
**风格特征**：
- **几何构成**：使用几何形状构成插画
- **对称布局**：强调对称性和重复性
- **金属质感**：使用金色、银色等金属质感
- **装饰细节**：精美的装饰元素和细节

**插画原则**：
1. **几何原则**：所有元素基于基础几何形状
2. **对称原则**：强调对称性和重复性
3. **金属原则**：使用金色、银色等金属质感
4. **装饰原则**：使用精美的装饰元素和细节

**插画类型**：
- **几何插画**：基于几何形状的插画
- **装饰插画**：强调装饰元素的插画
- **对称插画**：强调对称性的插画
- **金属插画**：使用金属质感的插画

### 设计原则
1. **装饰导向**：强调装饰元素和细节
2. **几何对称**：基于几何形状和对称性
3. **金属质感**：使用金色、银色等金属质感
4. **奢华感**：营造奢华、精致的质感

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover（悬停）行为
```css
/* 按钮悬停 */
.button:hover {
    background-color: var(--artdeco-gold-light);
    border-color: var(--artdeco-gold-light);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
}

/* 卡片悬停 */
.card:hover {
    border-color: var(--artdeco-gold-light);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
}

/* 链接悬停 */
.link:hover {
    color: var(--artdeco-gold-primary);
    text-decoration: underline;
}
```

### Active（激活）行为
```css
/* 按钮激活 */
.button:active {
    background-color: var(--artdeco-gold-dark);
    border-color: var(--artdeco-gold-dark);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* 卡片激活 */
.card:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
```

### Focus（焦点）行为
```css
/* 焦点样式 */
*:focus {
    outline: 2px solid var(--artdeco-gold-light);
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
--duration-fast: 200ms;    /* 快速交互 */
--duration-normal: 300ms;  /* 标准交互 */
--duration-slow: 400ms;    /* 慢速交互 */
--duration-slower: 600ms;  /* 复杂动画 */
```

**动效原则**：
1. **优雅流畅**：动效优雅流畅，避免突兀
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
    /* Gold Colors */
    --artdeco-gold-50: #FEF9E7;
    --artdeco-gold-100: #FCF3CF;
    --artdeco-gold-200: #F9E79F;
    --artdeco-gold-300: #F7DC6F;
    --artdeco-gold-400: #F4D03F;
    --artdeco-gold-500: #D4AF37;
    --artdeco-gold-600: #B7950B;
    --artdeco-gold-700: #9A7B0A;
    --artdeco-gold-800: #7D6209;
    --artdeco-gold-900: #604907;

    /* Silver Colors */
    --artdeco-silver-50: #FAFAFA;
    --artdeco-silver-100: #F0F0F0;
    --artdeco-silver-200: #E0E0E0;
    --artdeco-silver-300: #D0D0D0;
    --artdeco-silver-400: #C0C0C0;
    --artdeco-silver-500: #B0B0B0;
    --artdeco-silver-600: #A0A0A0;
    --artdeco-silver-700: #909090;
    --artdeco-silver-800: #808080;
    --artdeco-silver-900: #707070;

    /* Background Colors */
    --artdeco-background: #1A1A1A;
    --artdeco-background-light: #2D2D2D;
    --artdeco-background-dark: #000000;

    /* Surface Colors */
    --artdeco-surface: #2D2D2D;
    --artdeco-surface-light: #404040;
    --artdeco-surface-dark: #1A1A1A;

    /* Text Colors */
    --artdeco-text-primary: #FFFFFF;
    --artdeco-text-primary-light: rgba(255, 255, 255, 0.95);
    --artdeco-text-primary-dark: rgba(255, 255, 255, 0.87);

    --artdeco-text-secondary: #C0C0C0;
    --artdeco-text-secondary-light: rgba(192, 192, 192, 0.87);
    --artdeco-text-secondary-dark: rgba(192, 192, 192, 0.6);

    --artdeco-text-disabled: #808080;
    --artdeco-text-disabled-light: rgba(128, 128, 128, 0.5);
    --artdeco-text-disabled-dark: rgba(128, 128, 128, 0.3);

    /* Semantic Colors */
    --artdeco-error: #8B0000;
    --artdeco-error-light: #B22222;
    --artdeco-error-dark: #5C0000;

    --artdeco-warning: #D4AF37;
    --artdeco-warning-light: #F4D03F;
    --artdeco-warning-dark: #B7950B;

    --artdeco-success: #228B22;
    --artdeco-success-light: #32CD32;
    --artdeco-success-dark: #006400;

    --artdeco-info: #1B3B5F;
    --artdeco-info-light: #2E5A8C;
    --artdeco-info-dark: #0F263D;
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
    --font-primary: 'Playfair Display', 'Didot', 'Bodoni MT', 'Times New Roman', serif;
    --font-secondary: 'Montserrat', 'Helvetica Neue', 'Arial', sans-serif;
    --font-decorative: 'Cinzel', 'Trajan Pro', serif;

    /* Font Size */
    --font-size-h1: 4.5rem;
    --font-size-h2: 3.5rem;
    --font-size-h3: 2.5rem;
    --font-size-h4: 2rem;
    --font-size-h5: 1.5rem;
    --font-size-h6: 1.25rem;
    --font-size-subtitle1: 1.125rem;
    --font-size-subtitle2: 1rem;
    --font-size-body1: 1rem;
    --font-size-body2: 0.875rem;
    --font-size-button: 0.875rem;
    --font-size-caption: 0.75rem;
    --font-size-overline: 0.625rem;

    /* Line Height */
    --line-height-dense: 1.1;
    --line-height-normal: 1.4;
    --line-height-relaxed: 1.6;

    /* Font Weight */
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;

    /* Letter Spacing */
    --letter-spacing-tight: 0.02em;
    --letter-spacing-normal: 0.05em;
    --letter-spacing-wide: 0.1em;
    --letter-spacing-wider: 0.15em;
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
- 几何对称的设计理念
- 金属质感的设计语言
- 装饰细节的设计思维
- 奢华质感的设计风格

#### 2. 色彩系统
✅ **可以学习**：
- 金色、银色的使用方法
- 深色背景与金属质感的搭配原则
- 金属质感的实现技巧
- 奢华感的营造方法

#### 3. 排版系统
✅ **可以学习**：
- 衬线字体的使用原则
- 基于对称性的排版系统
- 装饰元素的使用方法
- 大写字母的应用技巧

#### 4. 布局系统
✅ **可以学习**：
- 对称布局的应用
- 几何形状的布局方法
- 装饰元素的布局技巧
- 奢华感的营造方法

#### 5. 组件设计
✅ **可以学习**：
- 直角设计语言的应用
- 金属质感的实现方法
- 装饰边框的使用技巧
- 强烈阴影的效果营造

#### 6. 图标与插画
✅ **可以学习**：
- 几何图标的设计方法
- 对称性图标风格
- 装饰性图标设计
- 金属质感图标实现

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 1. 品牌元素
❌ **不应复刻**：
- 特定品牌的商标和标志
- Art Deco历史品牌的官方标识
- 特定品牌的视觉识别系统
- 任何受版权保护的品牌元素

#### 2. 插画内容
❌ **不应复刻**：
- Art Deco历史时期的原创插画
- 特定品牌的插画内容
- 特定风格的特定插画作品
- 任何受版权保护的插画作品

#### 3. 文字内容
❌ **不应复刻**：
- Art Deco历史时期的原始文案
- 特定品牌的官方文案
- Art Deco历史文档
- 任何受版权保护的文字内容

#### 4. 具体设计
❌ **不应复刻**：
- Art Deco历史时期的特定页面设计
- 特定品牌的完整视觉系统
- Art Deco历史建筑的设计
- 任何直接复制的设计元素

### 合法使用建议

#### 1. 风格借鉴
- 学习Art Deco的原则和方法
- 参考色彩和排版系统
- 借鉴几何对称的设计理念
- 应用装饰细节的设计思维

#### 2. 原创设计
- 基于Art Deco原则创建原创设计
- 使用Art Deco风格但加入自己的创意
- 结合现代技术和Art Deco理念
- 创建独特的Art Deco风格变体

#### 3. 法律合规
- 尊重历史时期的知识产权
- 避免直接复制受保护的内容
- 注明设计灵感的来源
- 遵守相关的版权和商标法律

#### 4. 道德准则
- 诚实说明设计灵感来源
- 不声称自己是历史时期的设计
- 尊重Art Deco历史的原创作品
- 促进Art Deco理念的合法传播

### 总结
Art Deco是20世纪20-30年代兴起的重要设计风格，其核心理念是通过几何对称、金属质感、装饰细节和奢华质感，创造出华丽、精致、优雅的视觉体验。但是，在使用Art Deco风格时，必须遵守相关的知识产权法律，尊重历史时期的知识产权，避免直接复制受保护的内容。通过学习Art Deco的原则和方法，结合自己的创意和现代技术，可以创建出独特而合法的Art Deco风格设计。