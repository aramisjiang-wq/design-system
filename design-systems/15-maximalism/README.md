# Maximalism Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **丰富多样**：使用多种色彩、形状和元素
- **装饰性**：强调装饰性和视觉冲击力
- **复杂层次**：多层次、多元素的视觉层次
- **强烈对比**：强烈的色彩和形状对比
- **个性表达**：通过丰富的元素表达个性

### 适用产品类型
- **创意平台**：艺术展示、创意作品、设计作品
- **娱乐应用**：游戏、娱乐、音乐、视频
- **时尚品牌**：时尚、奢侈品、潮流品牌
- **营销页面**：活动页面、营销活动、品牌宣传

### 设计哲学
Maximalism（极繁主义）是Minimalism（极简主义）的反面，强调丰富、复杂、多样和装饰。其核心理念是"更多即更好"，通过丰富的色彩、复杂的装饰、多样的元素和强烈的对比，创造出视觉冲击力强、个性鲜明的视觉体验。Maximalism强调装饰性、表现力和个性表达，通过多层次、多元素的视觉效果，提供独特而丰富的用户体验。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
基于Maximalism丰富色彩：

```css
/* 主色 - 紫色 */
--maximal-purple-primary: #9C27B0;
--maximal-purple-light: #BA68C8;
--maximal-purple-dark: #7B1FA2;

/* 紫色变体 */
--maximal-purple-50: #F3E5F5;
--maximal-purple-100: #E1BEE7;
--maximal-purple-200: #CE93D8;
--maximal-purple-300: #BA68C8;
--maximal-purple-400: #AB47BC;
--maximal-purple-500: #9C27B0;
--maximal-purple-600: #8E24AA;
--maximal-purple-700: #7B1FA2;
--maximal-purple-800: #6A1B9A;
--maximal-purple-900: #4A148C;
```

**使用场景**：
- 紫色：品牌识别、主要元素、重要装饰
- 紫色变体：不同深浅的背景、边框、装饰

### 辅助色（Secondary Colors）
```css
/* 辅助色 - 粉色 */
--maximal-pink-primary: #E91E63;
--maximal-pink-light: #F06292;
--maximal-pink-dark: #C2185B;

/* 粉色变体 */
--maximal-pink-50: #FCE4EC;
--maximal-pink-100: #F8BBD0;
--maximal-pink-200: #F48FB1;
--maximal-pink-300: #F06292;
--maximal-pink-400: #EC407A;
--maximal-pink-500: #E91E63;
--maximal-pink-600: #D81B60;
--maximal-pink-700: #C2185B;
--maximal-pink-800: #AD1457;
--maximal-pink-900: #880E4F;

/* 辅助色 - 青色 */
--maximal-cyan-primary: #00BCD4;
--maximal-cyan-light: #4DD0E1;
--maximal-cyan-dark: #0097A7;

/* 青色变体 */
--maximal-cyan-50: #E0F7FA;
--maximal-cyan-100: #B2EBF2;
--maximal-cyan-200: #80DEEA;
--maximal-cyan-300: #4DD0E1;
--maximal-cyan-400: #26C6DA;
--maximal-cyan-500: #00BCD4;
--maximal-cyan-600: #00ACC1;
--maximal-cyan-700: #0097A7;
--maximal-cyan-800: #00838F;
--maximal-cyan-900: #006064;

/* 辅助色 - 橙色 */
--maximal-orange-primary: #FF9800;
--maximal-orange-light: #FFB74D;
--maximal-orange-dark: #F57C00;

/* 橙色变体 */
--maximal-orange-50: #FFF3E0;
--maximal-orange-100: #FFE0B2;
--maximal-orange-200: #FFCC80;
--maximal-orange-300: #FFB74D;
--maximal-orange-400: #FFA726;
--maximal-orange-500: #FF9800;
--maximal-orange-600: #FB8C00;
--maximal-orange-700: #F57C00;
--maximal-orange-800: #EF6C00;
--maximal-orange-900: #E65100;
```

**使用场景**：
- 粉色：装饰元素、强调元素、情感表达
- 青色：装饰元素、对比元素、视觉冲击
- 橙色：装饰元素、强调元素、活力表达

### 背景色（Background Colors）
```css
/* 背景色 - 渐变背景 */
--maximal-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--maximal-background-light: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--maximal-background-dark: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

/* 表面色 - 渐变表面 */
--maximal-surface: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
--maximal-surface-light: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
--maximal-surface-dark: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**使用场景**：
- 背景色：页面背景、应用背景、装饰背景
- 表面色：卡片背景、组件背景、弹窗背景

### 语义色（Semantic Colors）
```css
/* 错误状态 */
--maximal-error: #FF1744;
--maximal-error-light: #FF5252;
--maximal-error-dark: #D50000;

/* 警告状态 */
--maximal-warning: #FFD600;
--maximal-warning-light: #FFEA00;
--maximal-warning-dark: #FFAB00;

/* 成功状态 */
--maximal-success: #00E676;
--maximal-success-light: #69F0AE;
--maximal-success-dark: #00C853;

/* 信息状态 */
--maximal-info: #2979FF;
--maximal-info-light: #448AFF;
--maximal-info-dark: #2962FF;
```

**使用场景**：
- 错误：操作失败、错误提示、危险操作
- 警告：注意事项、次要提醒、待处理状态
- 成功：操作成功、完成状态、积极反馈
- 信息：一般提示、帮助信息、说明文字

### 文本色（Text Colors）
```css
/* 主要文字 */
--maximal-text-primary: #212121;
--maximal-text-primary-light: rgba(33, 33, 33, 0.87);
--maximal-text-primary-dark: rgba(33, 33, 33, 0.95);

/* 次要文字 */
--maximal-text-secondary: #757575;
--maximal-text-secondary-light: rgba(117, 117, 117, 0.87);
--maximal-text-secondary-dark: rgba(117, 117, 117, 0.6);

/* 禁用文字 */
--maximal-text-disabled: #BDBDBD;
--maximal-text-disabled-light: rgba(189, 189, 189, 0.5);
--maximal-text-disabled-dark: rgba(189, 189, 189, 0.3);
```

**使用场景**：
- 主要文字：标题、重要内容、主要信息
- 次要文字：正文、辅助信息、次要内容
- 禁用文字：禁用状态、不可用元素

### Design Token 命名建议
```
--maximal-{hue}-{shade}
--maximal-{semantic}-{state}

示例：
--maximal-purple-500
--maximal-pink-600
--maximal-error-dark
--maximal-success-light
```

### 色彩使用原则
1. **丰富多样**：使用多种色彩，创造丰富的视觉效果
2. **强烈对比**：使用强烈的色彩对比，增强视觉冲击力
3. **装饰导向**：颜色使用服务于装饰，创造视觉冲击力
4. **对比度要求**：确保文字与背景有足够对比度（至少4.5:1）
5. **装饰原则**：通过丰富的色彩装饰，创造独特的视觉体验

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
/* 主字体 - 装饰性字体 */
--font-primary: 'Playfair Display', 'Georgia', 'Times New Roman', serif;

/* 备用字体 - 无衬线字体 */
--font-secondary: 'Montserrat', 'Helvetica Neue', 'Arial', sans-serif;

/* 装饰字体 - 艺术字体 */
--font-display: 'Pacifico', 'Dancing Script', cursive;
```

**字体选择理由**：
- Playfair Display：优雅的衬线字体，适合标题和装饰
- Montserrat：现代的无衬线字体，适合正文
- Pacifico：艺术字体，适合装饰和表达个性

### 字号层级（Font Size Scale）
基于Maximalism排版系统：

```css
/* 标题层级 */
--font-size-h1: 4.5rem;      /* 72px - 页面主标题 */
--font-size-h2: 3.5rem;       /* 56px - 章节标题 */
--font-size-h3: 2.5rem;         /* 40px - 子章节标题 */
--font-size-h4: 2rem;       /* 32px - 卡片标题 */
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
--line-height-normal: 1.6;    /* 标准 - 正文 */
--line-height-relaxed: 1.8;  /* 宽松 - 长文本 */
```

### 字重（Font Weight）
```css
--font-weight-light: 300;    /* 轻体 - 辅助文字 */
--font-weight-regular: 400;  /* 常规 - 正文 */
--font-weight-medium: 500;   /* 中等 - 强调文字 */
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
1. **装饰原则**：通过装饰性字体和排版创造视觉冲击力
2. **多样性原则**：使用多种字体和排版方式，创造多样性
3. **层次丰富**：通过字号、字重、颜色建立丰富的层次结构
4. **装饰留白**：使用装饰性留白，营造独特的视觉效果
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
    --font-size-h1: 3.75rem;    /* 60px */
    --font-size-h2: 2.75rem; /* 44px */
    --font-size-h3: 2.125rem; /* 34px */
    --font-size-body1: 1.0625rem;   /* 17px */
}

/* 桌面端（≥ 840dp） */
@media (min-width: 840px) {
    --font-size-h1: 4.5rem;  /* 72px */
    --font-size-h2: 3.5rem;  /* 56px */
    --font-size-h3: 2.5rem;    /* 40px */
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
基于16列网格系统：

```css
/* 基础栅格 */
--grid-columns: 16;
--grid-gutter: 2rem;  /* 32dp - 栅格间距 */
--grid-margin: 2rem;  /* 32dp - 外边距 */

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
    --grid-gutter: 1.5rem; /* 24dp */
    --grid-margin: 1.5rem; /* 24dp */
}

/* 桌面端：16列 */
@media (min-width: 840px) {
    --grid-columns: 16;
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
1. **装饰布局**：基于装饰性元素的布局方式
2. **复杂布局**：多层次、多元素的复杂布局
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
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #FFFFFF;
    border: 2px solid transparent;
    border-radius: 24px;
    font-weight: var(--font-weight-bold);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

/* 悬停状态 */
.btn-contained:hover {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    transform: translateY(-2px);
}

/* 激活状态 */
.btn-contained:active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 2px 10px rgba(102, 126, 234, 0.4);
    transform: translateY(0);
}

/* 禁用状态 */
.btn-contained:disabled {
    background: linear-gradient(135deg, #E0E0E0 0%, #BDBDBD 100%);
    color: var(--maximal-text-disabled);
    cursor: not-allowed;
    box-shadow: none;
}

/* 焦点状态 */
.btn-contained:focus {
    outline: 3px solid var(--maximal-purple-300);
    outline-offset: 2px;
}
```

#### 变体规范
```css
/* 实心按钮 */
.btn-contained {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #FFFFFF;
    border: 2px solid transparent;
}

/* 文字按钮 */
.btn-text {
    background: transparent;
    color: var(--maximal-purple-primary);
    border: none;
    text-decoration: underline;
}

/* 轮廓按钮 */
.btn-outlined {
    background: transparent;
    color: var(--maximal-purple-primary);
    border: 2px solid var(--maximal-purple-primary);
}
```

#### 圆角规范
```css
/* Maximalism：圆角设计 */
.btn {
    border-radius: 24px; /* 圆角 - Maximalism */
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
    background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
    border: 3px solid var(--maximal-purple-200);
    border-radius: 20px;
    padding: var(--spacing-4);
    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 50px rgba(102, 126, 234, 0.4);
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
/* Maximalism：丰富阴影 */
.shadow-1 {
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.shadow-2 {
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.shadow-3 {
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
}

.shadow-4 {
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
}

.shadow-5 {
    box-shadow: 0 20px 50px rgba(102, 126, 234, 0.7);
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
    color: var(--maximal-text-primary-light);
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border: 2px solid var(--maximal-purple-200);
    border-radius: 12px;
    font-weight: var(--font-weight-regular);
}

.input:hover {
    border-color: var(--maximal-purple-400);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
}

.input:focus {
    border-color: var(--maximal-purple-primary);
    outline: 3px solid var(--maximal-purple-200);
    outline-offset: -2px;
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
}

.input-error {
    border-color: var(--maximal-error);
}

.input-disabled {
    color: var(--maximal-text-disabled);
    background: linear-gradient(135deg, #E0E0E0 0%, #BDBDBD 100%);
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
    color: var(--maximal-purple-primary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.form-hint {
    margin-top: var(--spacing-2);
    font-size: 0.875rem;
    color: var(--maximal-text-secondary-light);
}

.form-error {
    margin-top: var(--spacing-2);
    font-size: 0.875rem;
    color: var(--maximal-error);
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
    height: 80px;
    padding: 0 var(--spacing-4);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-bottom: 3px solid var(--maximal-purple-300);
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
}

.nav-link {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
    color: #FFFFFF;
    text-decoration: none;
    text-transform: none;
    letter-spacing: 0.05em;
    border-radius: 12px;
}

.nav-link:hover,
.nav-link.active {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}
```

#### 侧边导航
```css
.sidebar {
    width: 280px;
    height: 100vh;
    padding: var(--spacing-4);
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    border-right: 3px solid var(--maximal-purple-300);
    box-shadow: 4px 0 20px rgba(102, 126, 234, 0.3);
}

.sidebar-item {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    margin-bottom: var(--spacing-2);
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
    color: #FFFFFF;
    text-decoration: none;
    text-transform: none;
    letter-spacing: 0.05em;
    border-radius: 12px;
}

.sidebar-item:hover,
.sidebar-item.active {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
**风格特征**：
- **装饰化**：基于装饰性形状
- **丰富化**：使用丰富的细节
- **填充化**：使用填充图标
- **多样性**：所有图标保持多样性

**图标规范**：
```css
.icon {
    width: 32px;
    height: 32px;
    stroke-width: 2px;
    stroke: var(--maximal-purple-primary);
    fill: var(--maximal-purple-100);
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
    fill: var(--maximal-purple-primary);
    stroke: none;
}
```

**图标库建议**：
- Material Icons：基础图标库，可自定义样式
- Heroicons：简约的图标库
- 自定义Maximalism图标：基于Maximalism风格自定义图标

### 插画风格
**风格特征**：
- **丰富构成**：使用丰富的形状构成插画
- **装饰化**：使用丰富的装饰元素
- **丰富色彩**：使用丰富的色彩
- **表现力**：插画必须具有表现力

**插画原则**：
1. **丰富原则**：所有元素都是丰富的
2. **装饰原则**：所有元素基于装饰性形状
3. **丰富色彩**：使用丰富的色彩
4. **表现原则**：插画必须具有表现力

**插画类型**：
- **丰富插画**：基于丰富形状的插画
- **装饰插画**：强调装饰性的插画
- **表现插画**：具有表现力的插画
- **信息插画**：提供信息的插画

### 设计原则
1. **装饰导向**：通过装饰性元素创造视觉冲击力
2. **表现导向**：所有设计必须具有表现力
3. **多样性**：所有元素保持多样性
4. **丰富度**：确保所有元素丰富多样

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover（悬停）行为
```css
/* 按钮悬停 */
.button:hover {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    transform: translateY(-2px);
}

/* 卡片悬停 */
.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 50px rgba(102, 126, 234, 0.4);
}

/* 链接悬停 */
.link:hover {
    color: var(--maximal-purple-primary);
    text-decoration: underline;
}
```

### Active（激活）行为
```css
/* 按钮激活 */
.button:active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 2px 10px rgba(102, 126, 234, 0.4);
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
    outline: 3px solid var(--maximal-purple-300);
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
1. **丰富流畅**：动效丰富流畅，创造视觉冲击力
2. **表现导向**：动效具有表现力，创造独特的体验
3. **适度原则**：动效服务于功能，避免过度动画
4. **性能优先**：使用CSS动画，避免JavaScript动画

### 操作反馈设计原则
1. **视觉反馈**：颜色变化、边框变化、阴影变化
2. **明确状态**：清晰展示当前状态（悬停、激活、禁用）
3. **丰富效果**：通过丰富元素提供反馈
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
    /* Purple Colors */
    --maximal-purple-50: #F3E5F5;
    --maximal-purple-100: #E1BEE7;
    --maximal-purple-200: #CE93D8;
    --maximal-purple-300: #BA68C8;
    --maximal-purple-400: #AB47BC;
    --maximal-purple-500: #9C27B0;
    --maximal-purple-600: #8E24AA;
    --maximal-purple-700: #7B1FA2;
    --maximal-purple-800: #6A1B9A;
    --maximal-purple-900: #4A148C;

    /* Pink Colors */
    --maximal-pink-50: #FCE4EC;
    --maximal-pink-100: #F8BBD0;
    --maximal-pink-200: #F48FB1;
    --maximal-pink-300: #F06292;
    --maximal-pink-400: #EC407A;
    --maximal-pink-500: #E91E63;
    --maximal-pink-600: #D81B60;
    --maximal-pink-700: #C2185B;
    --maximal-pink-800: #AD1457;
    --maximal-pink-900: #880E4F;

    /* Cyan Colors */
    --maximal-cyan-50: #E0F7FA;
    --maximal-cyan-100: #B2EBF2;
    --maximal-cyan-200: #80DEEA;
    --maximal-cyan-300: #4DD0E1;
    --maximal-cyan-400: #26C6DA;
    --maximal-cyan-500: #00BCD4;
    --maximal-cyan-600: #00ACC1;
    --maximal-cyan-700: #0097A7;
    --maximal-cyan-800: #00838F;
    --maximal-cyan-900: #006064;

    /* Orange Colors */
    --maximal-orange-50: #FFF3E0;
    --maximal-orange-100: #FFE0B2;
    --maximal-orange-200: #FFCC80;
    --maximal-orange-300: #FFB74D;
    --maximal-orange-400: #FFA726;
    --maximal-orange-500: #FF9800;
    --maximal-orange-600: #FB8C00;
    --maximal-orange-700: #F57C00;
    --maximal-orange-800: #EF6C00;
    --maximal-orange-900: #E65100;

    /* Background Colors */
    --maximal-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --maximal-background-light: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --maximal-background-dark: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

    /* Surface Colors */
    --maximal-surface: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
    --maximal-surface-light: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
    --maximal-surface-dark: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

    /* Text Colors */
    --maximal-text-primary: #212121;
    --maximal-text-primary-light: rgba(33, 33, 33, 0.87);
    --maximal-text-primary-dark: rgba(33, 33, 33, 0.95);

    --maximal-text-secondary: #757575;
    --maximal-text-secondary-light: rgba(117, 117, 117, 0.87);
    --maximal-text-secondary-dark: rgba(117, 117, 117, 0.6);

    --maximal-text-disabled: #BDBDBD;
    --maximal-text-disabled-light: rgba(189, 189, 189, 0.5);
    --maximal-text-disabled-dark: rgba(189, 189, 189, 0.3);

    /* Semantic Colors */
    --maximal-error: #FF1744;
    --maximal-error-light: #FF5252;
    --maximal-error-dark: #D50000;

    --maximal-warning: #FFD600;
    --maximal-warning-light: #FFEA00;
    --maximal-warning-dark: #FFAB00;

    --maximal-success: #00E676;
    --maximal-success-light: #69F0AE;
    --maximal-success-dark: #00C853;

    --maximal-info: #2979FF;
    --maximal-info-light: #448AFF;
    --maximal-info-dark: #2962FF;
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
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --radius-2xl: 24px;
    --radius-3xl: 32px;
}
```

### Shadow Tokens
```css
:root {
    --shadow-1: 0 4px 15px rgba(102, 126, 234, 0.3);
    --shadow-2: 0 6px 20px rgba(102, 126, 234, 0.4);
    --shadow-3: 0 10px 30px rgba(102, 126, 234, 0.5);
    --shadow-4: 0 15px 40px rgba(102, 126, 234, 0.6);
    --shadow-5: 0 20px 50px rgba(102, 126, 234, 0.7);
}
```

### Typography Tokens
```css
:root {
    /* Font Family */
    --font-primary: 'Playfair Display', 'Georgia', 'Times New Roman', serif;
    --font-secondary: 'Montserrat', 'Helvetica Neue', 'Arial', sans-serif;
    --font-display: 'Pacifico', 'Dancing Script', cursive;

    /* Font Size */
    --font-size-h1: 4.5rem;
    --font-size-h2: 3.5rem;
    --font-size-h3: 2.5rem;
    --font-size-h4: 2rem;
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
    --line-height-normal: 1.6;
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
- 丰富多样的设计理念
- 装饰性的设计语言
- 复杂层次的设计思维
- 强烈对比的设计风格

#### 2. 色彩系统
✅ **可以学习**：
- 多种色彩的使用方法
- 强烈对比的搭配原则
- 丰富色彩的实现技巧
- 视觉冲击力的营造方法

#### 3. 排版系统
✅ **可以学习**：
- 装饰性字体的使用原则
- 基于多样性的排版系统
- 丰富层次结构的建立方法
- 个性表达的原则

#### 4. 布局系统
✅ **可以学习**：
- 复杂布局的应用
- 基于装饰的布局方法
- 不对称布局的技巧
- 视觉冲击力的营造方法

#### 5. 组件设计
✅ **可以学习**：
- 圆角设计语言的应用
- 装饰性的实现方法
- 丰富阴影的使用技巧
- 渐变背景的效果营造

#### 6. 图标与插画
✅ **可以学习**：
- 装饰图标的设计方法
- 丰富图标风格
- 填充图标设计
- 丰富色彩图标实现

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 1. 品牌元素
❌ **不应复刻**：
- 特定品牌的商标和标志
- Maximalism历史品牌的官方标识
- 特定品牌的视觉识别系统
- 任何受版权保护的品牌元素

#### 2. 插画内容
❌ **不应复刻**：
- Maximalism历史时期的原创插画
- 特定品牌的插画内容
- 特定风格的特定插画作品
- 任何受版权保护的插画作品

#### 3. 文字内容
❌ **不应复刻**：
- Maximalism历史时期的原始文案
- 特定品牌的官方文案
- Maximalism历史文档
- 任何受版权保护的文字内容

#### 4. 具体设计
❌ **不应复刻**：
- Maximalism历史时期的特定页面设计
- 特定品牌的完整视觉系统
- Maximalism历史建筑的设计
- 任何直接复制的设计元素

### 合法使用建议

#### 1. 风格借鉴
- 学习Maximalism的原则和方法
- 参考色彩和排版系统
- 借鉴装饰性的设计理念
- 应用表现导向的设计思维

#### 2. 原创设计
- 基于Maximalism原则创建原创设计
- 使用Maximalism风格但加入自己的创意
- 结合现代技术和Maximalism理念
- 创建独特的Maximalism风格变体

#### 3. 法律合规
- 尊重历史时期的知识产权
- 避免直接复制受保护的内容
- 注明设计灵感的来源
- 遵守相关的版权和商标法律

#### 4. 道德准则
- 诚实说明设计灵感来源
- 不声称自己是历史时期的设计
- 尊重Maximalism历史的原创作品
- 促进Maximalism理念的合法传播

### 总结
Maximalism是Minimalism的反面，强调丰富、复杂、多样和装饰。其核心理念是"更多即更好"，通过丰富的色彩、复杂的装饰、多样的元素和强烈的对比，创造出视觉冲击力强、个性鲜明的视觉体验。但是，在使用Maximalism风格时，必须遵守相关的知识产权法律，尊重历史时期的知识产权，避免直接复制受保护的内容。通过学习Maximalism的原则和方法，结合自己的创意和现代技术，可以创建出独特而合法的Maximalism风格设计。