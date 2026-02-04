# Brutalism Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **原始粗犷**：强调原始、未修饰的设计语言
- **高对比度**：使用强烈的色彩对比和黑白对比
- **粗边框**：使用粗壮的黑色边框线条
- **大胆排版**：使用超大字号和粗体字重
- **几何构成**：基于基础几何形状的布局

### 适用产品类型
- **创意机构**：设计工作室、创意公司、艺术机构
- **时尚品牌**：时尚电商、潮流品牌、设计师品牌
- **音乐娱乐**：音乐平台、娱乐应用、演出票务
- **艺术展览**：艺术展览、画廊、文化展示

### 设计哲学
野兽派风格起源于20世纪中期的建筑运动，强调原始、粗犷、不加修饰的设计美学。其核心理念是通过大胆的色彩、粗壮的边框、超大排版和几何构成，创造出强烈、直接、具有冲击力的设计语言，打破传统设计规范。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
基于高对比度的鲜艳色彩：

```css
/* 霓虹黄 - 强烈与活力 */
--brutal-yellow: #FFD93D;
--brutal-yellow-light: #FFE566;
--brutal-yellow-dark: #E6C229;

/* 霓虹粉 - 激情与能量 */
--brutal-pink: #FF6B6B;
--brutal-pink-light: #FF8E8E;
--brutal-pink-dark: #EE5A5A;

/* 霓虹蓝 - 冷酷与科技 */
--brutal-blue: #4ECDC4;
--brutal-blue-light: #7EDDD6;
--brutal-blue-dark: #3DB5AC;
```

**使用场景**：
- 霓虹黄：主要操作按钮、高亮内容、强调元素
- 霓虹粉：次要操作、警告信息、活力元素
- 霓虹蓝：导航元素、信息展示、链接文本

### 辅助色（Secondary Colors）
```css
/* 霓虹绿 - 活力与生机 */
--brutal-green: #95E1D3;
--brutal-green-light: #B8F0E5;
--brutal-green-dark: #7DD1C1;

/* 霓虹紫 - 神秘与创意 */
--brutal-purple: #A29BFE;
--brutal-purple-light: #BDB8FE;
--brutal-purple-dark: #8C85F3;

/* 霓虹橙 - 温暖与热情 */
--brutal-orange: #FF9F43;
--brutal-orange-light: #FFB876;
--brutal-orange-dark: #E68B2A;
```

**使用场景**：
- 霓虹绿：成功状态、积极反馈、清新元素
- 霓虹紫：装饰元素、创意内容、神秘元素
- 霓虹橙：强调元素、高亮内容、热情元素

### 中性色（Neutral Colors）
```css
/* 纯白色 - 纯净与对比 */
--brutal-white: #FFFFFF;
--brutal-white-off: #FAFAFA;

/* 纯黑色 - 强调与对比 */
--brutal-black: #000000;
--brutal-black-light: #1A1A1A;
--brutal-black-dark: #000000;

/* 纯灰色 - 中性与平衡 */
--brutal-gray-100: #F5F5F5;
--brutal-gray-200: #E0E0E0;
--brutal-gray-300: #BDBDBD;
--brutal-gray-400: #9E9E9E;
--brutal-gray-500: #757575;
--brutal-gray-600: #616161;
--brutal-gray-700: #424242;
--brutal-gray-800: #212121;
--brutal-gray-900: #121212;
```

**使用场景**：
- 纯白色：背景、卡片、内容区域
- 纯黑色：主要文字、重要标题、边框线条
- 纯灰色：次要文字、分割线、背景层次

### 语义色（Semantic Colors）
```css
/* 成功状态 */
--brutal-success: #95E1D3;
--brutal-success-light: #B8F0E5;
--brutal-success-dark: #7DD1C1;

/* 警告状态 */
--brutal-warning: #FFD93D;
--brutal-warning-light: #FFE566;
--brutal-warning-dark: #E6C229;

/* 错误状态 */
--brutal-error: #FF6B6B;
--brutal-error-light: #FF8E8E;
--brutal-error-dark: #EE5A5A;

/* 信息状态 */
--brutal-info: #4ECDC4;
--brutal-info-light: #7EDDD6;
--brutal-info-dark: #3DB5AC;
```

**使用场景**：
- 成功：操作成功、完成状态、积极反馈
- 警告：注意事项、次要提醒、待处理状态
- 错误：操作失败、错误提示、危险操作
- 信息：一般提示、帮助信息、说明文字

### Design Token 命名建议
```
--color-{hue}-{shade}
--color-{semantic}-{state}

示例：
--color-yellow-primary
--color-pink-dark
--color-success-light
--color-error-dark
```

### 色彩使用原则
1. **高对比度**：使用强烈的色彩对比，确保视觉冲击力
2. **鲜艳色彩**：使用鲜艳、饱和的色彩，避免柔和色调
3. **黑白对比**：强调黑白对比，增强视觉层次
4. **色彩冲突**：有意使用色彩冲突，创造视觉张力
5. **功能导向**：颜色使用服务于功能，避免过度装饰

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
/* 主字体 - 粗壮无衬线字体 */
--font-primary: 'Archivo Black', 'Oswald', 'Roboto Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

/* 备用字体 - 中文支持 */
--font-secondary: 'PingFang SC', 'Microsoft YaHei', 'SimHei', sans-serif;

/* 等宽字体 - 代码和技术内容 */
--font-mono: 'Space Mono', 'Fira Code', 'Courier New', monospace;
```

**字体选择理由**：
- Archivo Black：粗壮、有力、冲击力强，符合野兽派理念
- Oswald：现代、粗体、简洁，适合野兽派风格
- Space Mono：专业的等宽字体，适合代码和技术内容

### 字号层级（Font Size Scale）
基于超大字号系统：

```css
/* 标题层级 */
--font-size-h1: 5rem;      /* 80px - 页面主标题 */
--font-size-h2: 4rem;       /* 64px - 章节标题 */
--font-size-h3: 3rem;       /* 48px - 子章节标题 */
--font-size-h4: 2rem;       /* 32px - 卡片标题 */
--font-size-h5: 1.5rem;     /* 24px - 小标题 */
--font-size-h6: 1.25rem;    /* 20px - 微标题 */

/* 正文层级 */
--font-size-body-large: 1.25rem;  /* 20px - 大正文 */
--font-size-body: 1rem;            /* 16px - 标准正文 */
--font-size-body-small: 0.875rem;  /* 14px - 小正文 */

/* 辅助层级 */
--font-size-caption: 0.75rem;      /* 12px - 说明文字 */
--font-size-overline: 0.625rem;   /* 10px - 标签文字 */
```

### 行高（Line Height）
```css
--line-height-tight: 1;      /* 紧凑 - 标题 */
--line-height-normal: 1.4;   /* 标准 - 正文 */
--line-height-relaxed: 1.6; /* 宽松 - 长文本 */
```

### 字重（Font Weight）
```css
--font-weight-regular: 400;  /* 常规 - 正文 */
--font-weight-medium: 500;   /* 中等 - 强调文字 */
--font-weight-semibold: 600; /* 半粗 - 小标题 */
--font-weight-bold: 700;     /* 粗体 - 标题 */
--font-weight-black: 900;    /* 超粗 - 主标题 */
```

### 字间距（Letter Spacing）
```css
--letter-spacing-tight: -0.02em;  /* 紧凑 - 大标题 */
--letter-spacing-normal: 0;        /* 标准 - 正文 */
--letter-spacing-wide: 0.05em;     /* 宽松 - 小标题 */
--letter-spacing-wider: 0.1em;     /* 更宽 - 标签 */
```

### 排版节奏规则
1. **超大字号**：使用超大字号，增强视觉冲击力
2. **粗体字重**：使用粗体字重，强调重要内容
3. **严格对齐**：严格左对齐，避免居中对齐
4. **紧凑间距**：使用紧凑的间距，增强密度感
5. **一致性**：相同类型的元素使用相同的排版规则

### 响应式排版
```css
/* 移动端（< 640px） */
@media (max-width: 639px) {
    --font-size-h1: 3rem;      /* 48px */
    --font-size-h2: 2.5rem;    /* 40px */
    --font-size-h3: 2rem;      /* 32px */
    --font-size-body: 0.9375rem; /* 15px */
}

/* 平板端（640px - 1024px） */
@media (min-width: 640px) and (max-width: 1023px) {
    --font-size-h1: 4rem;      /* 64px */
    --font-size-h2: 3rem;      /* 48px */
    --font-size-h3: 2.5rem;    /* 40px */
    --font-size-body: 0.9375rem; /* 15px */
}

/* 桌面端（≥ 1024px） */
@media (min-width: 1024px) {
    --font-size-h1: 5rem;      /* 80px */
    --font-size-h2: 4rem;      /* 64px */
    --font-size-h3: 3rem;      /* 48px */
    --font-size-body: 1rem;    /* 16px */
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
--container-max-width: 1400px;  /* 最大宽度 */
--container-padding: 2rem;     /* 内边距 32px */
--container-margin: 0 auto;     /* 水平居中 */
```

### 栅格系统（Grid System）
基于12列网格系统，但允许不对称布局：

```css
/* 基础栅格 */
--grid-columns: 12;
--grid-gutter: 1.5rem;  /* 24px - 栅格间距 */
--grid-margin: 2rem;    /* 32px - 外边距 */

/* 响应式栅格 */
/* 移动端：4列 */
@media (max-width: 639px) {
    --grid-columns: 4;
    --grid-gutter: 1rem;  /* 16px */
    --grid-margin: 1rem;  /* 16px */
}

/* 平板端：8列 */
@media (min-width: 640px) and (max-width: 1023px) {
    --grid-columns: 8;
    --grid-gutter: 1.25rem; /* 20px */
    --grid-margin: 1.5rem;  /* 24px */
}

/* 桌面端：12列 */
@media (min-width: 1024px) {
    --grid-columns: 12;
    --grid-gutter: 1.5rem; /* 24px */
    --grid-margin: 2rem;   /* 32px */
}
```

### 留白密度与信息密度
**信息密度判断**：
- 高密度：数据仪表盘、管理后台、表格视图
- 中密度：内容页面、列表页面、详情页面
- 低密度：营销页面、着陆页、介绍页面

**留白规范**：
```css
/* 基础间距 - 基于8pt网格 */
--spacing-0: 0;
--spacing-1: 0.5rem;   /* 8px */
--spacing-2: 1rem;     /* 16px */
--spacing-3: 1.5rem;   /* 24px */
--spacing-4: 2rem;     /* 32px */
--spacing-5: 2.5rem;   /* 40px */
--spacing-6: 3rem;     /* 48px */
--spacing-8: 4rem;     /* 64px */
--spacing-10: 5rem;    /* 80px */
--spacing-12: 6rem;    /* 96px */
--spacing-16: 8rem;    /* 128px */
--spacing-20: 10rem;   /* 160px */
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
--breakpoint-sm: 640px;   /* 手机横屏 */
--breakpoint-md: 768px;   /* 平板竖屏 */
--breakpoint-lg: 1024px;  /* 平板横屏 */
--breakpoint-xl: 1280px;  /* 桌面 */
--breakpoint-2xl: 1536px; /* 大屏 */
```

### 布局模式
1. **不对称布局**：不对称的布局，创造视觉张力
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
    height: 40px;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
}

/* 中号按钮（默认） */
.btn-medium {
    height: 48px;
    padding: 0.75rem 2rem;
    font-size: 1.125rem;
}

/* 大号按钮 */
.btn-large {
    height: 56px;
    padding: 1rem 2.5rem;
    font-size: 1.25rem;
}
```

#### 状态规范
```css
/* 默认状态 */
.btn-primary {
    background-color: var(--brutal-yellow);
    color: var(--brutal-black);
    border: 4px solid var(--brutal-black);
    border-radius: 0; /* 野兽派风格：直角 */
    font-weight: var(--font-weight-bold);
    box-shadow: 8px 8px 0 var(--brutal-black);
}

/* 悬停状态 */
.btn-primary:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 var(--brutal-black);
}

/* 激活状态 */
.btn-primary:active {
    transform: translate(0, 0);
    box-shadow: 4px 4px 0 var(--brutal-black);
}

/* 禁用状态 */
.btn-primary:disabled {
    background-color: var(--brutal-gray-300);
    color: var(--brutal-gray-500);
    border-color: var(--brutal-gray-400);
    cursor: not-allowed;
    box-shadow: none;
}

/* 焦点状态 */
.btn-primary:focus {
    outline: 4px solid var(--brutal-black);
    outline-offset: 4px;
}
```

#### 变体规范
```css
/* 主按钮 */
.btn-primary {
    background-color: var(--brutal-yellow);
    color: var(--brutal-black);
    border-color: var(--brutal-black);
}

/* 次按钮 */
.btn-secondary {
    background-color: var(--brutal-pink);
    color: var(--brutal-black);
    border-color: var(--brutal-black);
}

/* 文字按钮 */
.btn-text {
    background-color: var(--brutal-white);
    color: var(--brutal-black);
    border: 4px solid var(--brutal-black);
}

/* 幽灵按钮 */
.btn-ghost {
    background-color: transparent;
    color: var(--brutal-black);
    border: 4px solid var(--brutal-black);
}
```

#### 圆角规范
```css
/* 野兽派风格：直角 */
.btn {
    border-radius: 0; /* 直角 - 野兽派风格 */
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
    background-color: var(--brutal-white);
    border: 4px solid var(--brutal-black);
    border-radius: 0;
    padding: var(--spacing-4);
    box-shadow: 8px 8px 0 var(--brutal-black);
}

.card:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 var(--brutal-black);
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
/* 野兽派风格：硬阴影 */
.shadow-brutal {
    box-shadow: 8px 8px 0 var(--brutal-black);
}

/* 悬浮状态 */
.shadow-brutal-hover {
    box-shadow: 12px 12px 0 var(--brutal-black);
}

/* 激活状态 */
.shadow-brutal-active {
    box-shadow: 4px 4px 0 var(--brutal-black);
}
```

### Input（输入框）

#### 样式规范
```css
.input {
    width: 100%;
    height: 48px;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    color: var(--brutal-black);
    background-color: var(--brutal-white);
    border: 4px solid var(--brutal-black);
    border-radius: 0;
    font-weight: var(--font-weight-medium);
}

.input:hover {
    border-color: var(--brutal-black);
}

.input:focus {
    border-color: var(--brutal-black);
    outline: none;
    box-shadow: 4px 4px 0 var(--brutal-black);
}

.input-error {
    border-color: var(--brutal-error);
    background-color: var(--brutal-error-light);
}

.input-disabled {
    background-color: var(--brutal-gray-100);
    color: var(--brutal-gray-500);
    border-color: var(--brutal-gray-300);
    cursor: not-allowed;
}
```

#### 尺寸规范
```css
.input-small {
    height: 40px;
    padding: 0.625rem 1rem;
    font-size: 0.9375rem;
}

.input-medium {
    height: 48px;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
}

.input-large {
    height: 56px;
    padding: 1rem 1.5rem;
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
    font-size: 1.125rem;
    font-weight: var(--font-weight-bold);
    color: var(--brutal-black);
    text-transform: uppercase;
}

.form-hint {
    margin-top: var(--spacing-2);
    font-size: 0.875rem;
    color: var(--brutal-gray-600);
}

.form-error {
    margin-top: var(--spacing-2);
    font-size: 0.875rem;
    color: var(--brutal-error);
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
    background-color: var(--brutal-white);
    border-bottom: 4px solid var(--brutal-black);
}

.nav-link {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
    color: var(--brutal-black);
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 4px solid transparent;
}

.nav-link:hover,
.nav-link.active {
    border-bottom-color: var(--brutal-yellow);
    background-color: var(--brutal-yellow);
}
```

#### 侧边导航
```css
.sidebar {
    width: 280px;
    height: 100vh;
    padding: var(--spacing-4);
    background-color: var(--brutal-white);
    border-right: 4px solid var(--brutal-black);
}

.sidebar-item {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    margin-bottom: var(--spacing-2);
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
    color: var(--brutal-black);
    text-transform: uppercase;
    border-left: 4px solid transparent;
}

.sidebar-item:hover,
.sidebar-item.active {
    background-color: var(--brutal-yellow);
    border-left-color: var(--brutal-black);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
**风格特征**：
- **粗线条**：使用粗壮的线条和形状
- **直角化**：避免圆角，强调直角和直线
- **高对比度**：使用高对比度的色彩
- **几何化**：基于基础几何形状

**图标规范**：
```css
.icon {
    width: 32px;
    height: 32px;
    stroke-width: 3px;
    stroke: var(--brutal-black);
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
    fill: var(--brutal-black);
    stroke: none;
}
```

**图标库建议**：
- Heroicons：简洁、粗线条、高对比度
- Material Icons：功能性强，适合野兽派风格
- Phosphor Icons：现代几何风格

### 插画风格
**风格特征**：
- **粗犷形态**：使用粗犷、原始的形态
- **高对比度**：使用高对比度的色彩
- **几何构成**：使用基础几何形状
- **原始质感**：强调原始、未修饰的质感

**插画原则**：
1. **粗犷原则**：所有元素都是粗犷、原始的
2. **高对比原则**：使用高对比度的色彩
3. **几何原则**：所有元素基于基础几何形状
4. **原始原则**：强调原始、未修饰的质感

**插画类型**：
- **几何插画**：基于几何形状的插画
- **抽象插画**：抽象的粗犷形态
- **文字插画**：文字与图形结合的插画

### 设计原则
1. **粗犷装饰**：使用粗犷的装饰元素
2. **辅助理解**：图标和插画必须帮助用户理解内容
3. **一致性**：所有图标和插画保持统一的风格
4. **可访问性**：提供替代文本，确保屏幕阅读器可访问

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover（悬停）行为
```css
/* 按钮悬停 */
.button:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 var(--brutal-black);
}

/* 卡片悬停 */
.card:hover {
    transform: translate(-4px, -4px);
    box-shadow: 12px 12px 0 var(--brutal-black);
}

/* 链接悬停 */
.link:hover {
    color: var(--brutal-yellow);
    text-decoration: underline;
    text-decoration-thickness: 4px;
}
```

### Active（激活）行为
```css
/* 按钮激活 */
.button:active {
    transform: translate(0, 0);
    box-shadow: 4px 4px 0 var(--brutal-black);
}

/* 卡片激活 */
.card:active {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--brutal-black);
}
```

### Focus（焦点）行为
```css
/* 焦点样式 */
*:focus {
    outline: 4px solid var(--brutal-black);
    outline-offset: 4px;
}

/* 按钮焦点 */
.button:focus {
    outline: 6px solid var(--brutal-yellow);
    outline-offset: 4px;
}
```

### 动效节奏
```css
/* 标准缓动 */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

/* 快速缓动 */
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* 慢速缓动 */
--ease-out: cubic-bezier(0, 0, 0.2, 1);

/* 弹性缓动 */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

**动效时长**：
```css
--duration-fast: 100ms;    /* 快速交互 */
--duration-normal: 150ms;  /* 标准交互 */
--duration-slow: 200ms;    /* 慢速交互 */
--duration-slower: 300ms;  /* 复杂动画 */
```

**动效原则**：
1. **快速原则**：动效快速直接，避免缓慢
2. **粗犷原则**：动效粗犷有力，避免柔和
3. **直接原则**：动效直接明确，避免复杂
4. **性能优先**：使用CSS动画，避免JavaScript动画

### 操作反馈设计原则
1. **直接反馈**：用户操作后提供直接的视觉反馈
2. **明确状态**：清晰展示当前状态（悬停、激活、禁用）
3. **粗犷层次**：通过颜色、阴影、位移建立粗犷的视觉层次
4. **一致性**：相同类型的操作使用相同的反馈方式

**反馈类型**：
- **视觉反馈**：颜色变化、阴影变化、位移变化
- **触觉反馈**：移动端强烈震动（重要操作）
- **听觉反馈**：强烈音效（谨慎使用，避免打扰）

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
    /* Primary Colors */
    --color-yellow-primary: #FFD93D;
    --color-yellow-light: #FFE566;
    --color-yellow-dark: #E6C229;

    --color-pink-primary: #FF6B6B;
    --color-pink-light: #FF8E8E;
    --color-pink-dark: #EE5A5A;

    --color-blue-primary: #4ECDC4;
    --color-blue-light: #7EDDD6;
    --color-blue-dark: #3DB5AC;

    /* Secondary Colors */
    --color-green-primary: #95E1D3;
    --color-green-light: #B8F0E5;
    --color-green-dark: #7DD1C1;

    --color-purple-primary: #A29BFE;
    --color-purple-light: #BDB8FE;
    --color-purple-dark: #8C85F3;

    --color-orange-primary: #FF9F43;
    --color-orange-light: #FFB876;
    --color-orange-dark: #E68B2A;

    /* Neutral Colors */
    --color-white-primary: #FFFFFF;
    --color-white-off: #FAFAFA;

    --color-black-primary: #000000;
    --color-black-light: #1A1A1A;
    --color-black-dark: #000000;

    --color-gray-100: #F5F5F5;
    --color-gray-200: #E0E0E0;
    --color-gray-300: #BDBDBD;
    --color-gray-400: #9E9E9E;
    --color-gray-500: #757575;
    --color-gray-600: #616161;
    --color-gray-700: #424242;
    --color-gray-800: #212121;
    --color-gray-900: #121212;

    /* Semantic Colors */
    --color-success-primary: #95E1D3;
    --color-success-light: #B8F0E5;
    --color-success-dark: #7DD1C1;

    --color-warning-primary: #FFD93D;
    --color-warning-light: #FFE566;
    --color-warning-dark: #E6C229;

    --color-error-primary: #FF6B6B;
    --color-error-light: #FF8E8E;
    --color-error-dark: #EE5A5A;

    --color-info-primary: #4ECDC4;
    --color-info-light: #7EDDD6;
    --color-info-dark: #3DB5AC;
}
```

### Spacing Tokens
```css
:root {
    --spacing-0: 0;
    --spacing-1: 0.5rem;   /* 8px */
    --spacing-2: 1rem;     /* 16px */
    --spacing-3: 1.5rem;   /* 24px */
    --spacing-4: 2rem;     /* 32px */
    --spacing-5: 2.5rem;   /* 40px */
    --spacing-6: 3rem;     /* 48px */
    --spacing-8: 4rem;     /* 64px */
    --spacing-10: 5rem;    /* 80px */
    --spacing-12: 6rem;    /* 96px */
    --spacing-16: 8rem;    /* 128px */
    --spacing-20: 10rem;   /* 160px */
}
```

### Radius Tokens
```css
:root {
    --radius-none: 0;
    --radius-sm: 0;
    --radius-md: 0;
    --radius-lg: 0;
    --radius-full: 0;
}
```

### Shadow Tokens
```css
:root {
    --shadow-none: none;
    --shadow-sm: 4px 4px 0 var(--color-black-primary);
    --shadow-md: 8px 8px 0 var(--color-black-primary);
    --shadow-lg: 12px 12px 0 var(--color-black-primary);
    --shadow-xl: 16px 16px 0 var(--color-black-primary);
}
```

### Typography Tokens
```css
:root {
    /* Font Family */
    --font-primary: 'Archivo Black', 'Oswald', 'Roboto Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    --font-secondary: 'PingFang SC', 'Microsoft YaHei', 'SimHei', sans-serif;
    --font-mono: 'Space Mono', 'Fira Code', 'Courier New', monospace;

    /* Font Size */
    --font-size-h1: 5rem;
    --font-size-h2: 4rem;
    --font-size-h3: 3rem;
    --font-size-h4: 2rem;
    --font-size-h5: 1.5rem;
    --font-size-h6: 1.25rem;
    --font-size-body-large: 1.25rem;
    --font-size-body: 1rem;
    --font-size-body-small: 0.875rem;
    --font-size-caption: 0.75rem;
    --font-size-overline: 0.625rem;

    /* Line Height */
    --line-height-tight: 1;
    --line-height-normal: 1.4;
    --line-height-relaxed: 1.6;

    /* Font Weight */
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-black: 900;

    /* Letter Spacing */
    --letter-spacing-tight: -0.02em;
    --letter-spacing-normal: 0;
    --letter-spacing-wide: 0.05em;
    --letter-spacing-wider: 0.1em;
}
```

### Animation Tokens
```css
:root {
    /* Duration */
    --duration-fast: 100ms;
    --duration-normal: 150ms;
    --duration-slow: 200ms;
    --duration-slower: 300ms;

    /* Easing */
    --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
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
- 原始粗犷的设计理念
- 高对比度的设计语言
- 粗壮边框的设计思维
- 大胆排版的设计风格

#### 2. 色彩系统
✅ **可以学习**：
- 高对比度色彩系统的使用方法
- 鲜艳色彩搭配原则
- 黑白对比使用方式
- 色彩冲突的创造技巧

#### 3. 排版系统
✅ **可以学习**：
- 粗壮字体的使用原则
- 超大字号的排版系统
- 粗体字重的层次结构建立方法
- 严格对齐的原则

#### 4. 布局系统
✅ **可以学习**：
- 不对称布局系统的应用
- 基于几何形状的布局方法
- 响应式断点设置策略
- 紧凑间距的使用原则

#### 5. 组件设计
✅ **可以学习**：
- 直角设计语言的应用
- 粗壮边框效果的使用
- 硬阴影的组件设计
- 快速直接的交互行为

#### 6. 图标与插画
✅ **可以学习**：
- 粗线条图标设计方法
- 高对比度图标风格
- 几何导向的插画设计
- 原始质感的使用原则

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 1. 品牌元素
❌ **不应复刻**：
- 特定品牌的商标和标志
- 特定品牌的名称和标识
- 特定品牌的官方视觉识别系统
- 任何受版权保护的品牌元素

#### 2. 插画内容
❌ **不应复刻**：
- 特定设计师的原创插画
- 特定品牌的插画内容
- 特定风格的特定插画作品
- 任何受版权保护的插画作品

#### 3. 文字内容
❌ **不应复刻**：
- 特定品牌的官方文案
- 特定设计师的原始文字
- 特定品牌的历史文档
- 任何受版权保护的文字内容

#### 4. 具体设计
❌ **不应复刻**：
- 特定品牌的具体页面设计
- 特定品牌的特定组件设计
- 特定品牌的完整视觉系统
- 任何直接复制的设计元素

### 合法使用建议

#### 1. 风格借鉴
- 学习野兽派设计的原则和方法
- 参考高对比度色彩和排版系统
- 借鉴粗壮边框的设计理念
- 应用大胆排版的设计思维

#### 2. 原创设计
- 基于野兽派原则创建原创设计
- 使用野兽派风格但加入自己的创意
- 结合现代技术和野兽派理念
- 创建独特的野兽派风格变体

#### 3. 法律合规
- 尊重设计师和品牌的知识产权
- 避免直接复制受保护的内容
- 注明设计灵感的来源
- 遵守相关的版权和商标法律

#### 4. 道德准则
- 诚实说明设计灵感来源
- 不声称自己是特定品牌的设计
- 尊重设计师的原创作品
- 促进野兽派设计理念的合法传播

### 总结
野兽派风格是一种重要的设计风格，其核心理念是通过原始粗犷、高对比度、粗壮边框和大胆排版，创造出强烈、直接、具有冲击力的设计语言。但是，在使用野兽派风格时，必须遵守相关的知识产权法律，尊重设计师和品牌的知识产权，避免直接复制受保护的内容。通过学习野兽派设计的原则和方法，结合自己的创意和现代技术，可以创建出独特而合法的野兽派风格设计。