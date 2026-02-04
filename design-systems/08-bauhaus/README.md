# Bauhaus Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **几何构成**：基于基础几何形状（圆形、正方形、三角形）的设计语言
- **原色主义**：使用红、黄、蓝三原色 + 黑、白、灰中性色
- **功能至上**：形式追随功能，强调实用性和功能性
- **网格系统**：基于严格数学比例的网格布局
- **无衬线字体**：使用现代无衬线字体，强调可读性

### 适用产品类型
- **教育平台**：在线教育、知识管理、学术研究
- **设计工具**：创意工具、设计软件、协作平台
- **企业应用**：B2B SaaS、项目管理、数据分析
- **文化机构**：博物馆、艺术馆、文化展示平台

### 设计哲学
包豪斯风格起源于1919年的德国包豪斯学院，强调艺术与技术的统一。其核心理念是"形式追随功能"，通过简洁的几何形状、鲜明的色彩对比和严格的网格系统，创造出既美观又实用的设计语言。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
基于包豪斯经典三原色系统：

```css
/* 红色 - 活力与能量 */
--bauhaus-red: #E63946;
--bauhaus-red-light: #FF6B7A;
--bauhaus-red-dark: #C1121F;

/* 黄色 - 明亮与乐观 */
--bauhaus-yellow: #FFD166;
--bauhaus-yellow-light: #FFE066;
--bauhaus-yellow-dark: #F4A261;

/* 蓝色 - 理性与秩序 */
--bauhaus-blue: #457B9D;
--bauhaus-blue-light: #A8DADC;
--bauhaus-blue-dark: #1D3557;
```

**使用场景**：
- 红色：主要操作按钮、重要提示、强调元素
- 黄色：次要操作、警告信息、高亮内容
- 蓝色：导航元素、信息展示、链接文本

### 中性色（Neutral Colors）
```css
/* 黑色 - 强调与对比 */
--bauhaus-black: #1A1A1A;
--bauhaus-black-light: #2D2D2D;
--bauhaus-black-dark: #000000;

/* 白色 - 纯净与空间 */
--bauhaus-white: #FFFFFF;
--bauhaus-white-off: #F8F8F8;

/* 灰色 - 平衡与过渡 */
--bauhaus-gray-100: #F5F5F5;
--bauhaus-gray-200: #E0E0E0;
--bauhaus-gray-300: #BDBDBD;
--bauhaus-gray-400: #9E9E9E;
--bauhaus-gray-500: #757575;
--bauhaus-gray-600: #616161;
--bauhaus-gray-700: #424242;
--bauhaus-gray-800: #212121;
--bauhaus-gray-900: #121212;
```

**使用场景**：
- 黑色：主要文字、重要标题、边框线条
- 白色：背景、卡片、内容区域
- 灰色：次要文字、分割线、背景层次

### 语义色（Semantic Colors）
```css
/* 成功状态 */
--bauhaus-success: #2A9D8F;
--bauhaus-success-light: #48CA96;
--bauhaus-success-dark: #1E7A6F;

/* 警告状态 */
--bauhaus-warning: #E9C46A;
--bauhaus-warning-light: #F4D35E;
--bauhaus-warning-dark: #D4A373;

/* 错误状态 */
--bauhaus-error: #E76F51;
--bauhaus-error-light: #F4A261;
--bauhaus-error-dark: #C44536;

/* 信息状态 */
--bauhaus-info: #457B9D;
--bauhaus-info-light: #A8DADC;
--bauhaus-info-dark: #1D3557;
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
--color-red-primary
--color-blue-dark
--color-success-light
--color-error-dark
```

### 色彩使用原则
1. **三原色主导**：以红、黄、蓝三原色为核心，避免过度使用其他颜色
2. **高对比度**：确保文字与背景有足够对比度（至少4.5:1）
3. **色彩平衡**：每个页面中主色不超过2种，辅助色不超过3种
4. **功能导向**：颜色使用服务于功能，避免过度装饰
5. **几何搭配**：颜色与几何形状结合使用，强化视觉层次

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
/* 主字体 - 现代无衬线字体 */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

/* 备用字体 - 中文支持 */
--font-secondary: 'PingFang SC', 'Microsoft YaHei', 'SimHei', sans-serif;

/* 等宽字体 - 代码和技术内容 */
--font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
```

**字体选择理由**：
- Inter：现代、清晰、可读性强，符合包豪斯功能主义理念
- PingFang SC：优秀的中文显示效果，与Inter风格统一
- JetBrains Mono：专业的等宽字体，适合代码和技术内容

### 字号层级（Font Size Scale）
基于8pt网格系统：

```css
/* 标题层级 */
--font-size-h1: 3rem;      /* 48px - 页面主标题 */
--font-size-h2: 2.25rem;   /* 36px - 章节标题 */
--font-size-h3: 1.75rem;   /* 28px - 子章节标题 */
--font-size-h4: 1.5rem;    /* 24px - 卡片标题 */
--font-size-h5: 1.25rem;   /* 20px - 小标题 */
--font-size-h6: 1rem;      /* 16px - 微标题 */

/* 正文层级 */
--font-size-body-large: 1.125rem;  /* 18px - 大正文 */
--font-size-body: 1rem;            /* 16px - 标准正文 */
--font-size-body-small: 0.875rem;  /* 14px - 小正文 */

/* 辅助层级 */
--font-size-caption: 0.75rem;      /* 12px - 说明文字 */
--font-size-overline: 0.625rem;   /* 10px - 标签文字 */
```

### 行高（Line Height）
```css
--line-height-tight: 1.2;    /* 紧凑 - 标题 */
--line-height-normal: 1.5;   /* 标准 - 正文 */
--line-height-relaxed: 1.75; /* 宽松 - 长文本 */
```

### 字重（Font Weight）
```css
--font-weight-light: 300;    /* 轻体 - 辅助文字 */
--font-weight-regular: 400;  /* 常规 - 正文 */
--font-weight-medium: 500;   /* 中等 - 强调文字 */
--font-weight-semibold: 600; /* 半粗 - 小标题 */
--font-weight-bold: 700;     /* 粗体 - 标题 */
```

### 字间距（Letter Spacing）
```css
--letter-spacing-tight: -0.02em;  /* 紧凑 - 大标题 */
--letter-spacing-normal: 0;      /* 标准 - 正文 */
--letter-spacing-wide: 0.05em;   /* 宽松 - 小标题 */
--letter-spacing-wider: 0.1em;   /* 更宽 - 标签 */
```

### 排版节奏规则
1. **垂直韵律**：基于8pt网格，所有垂直间距为8的倍数
2. **视觉层次**：通过字号、字重、颜色建立清晰的层次结构
3. **对齐原则**：严格左对齐，避免居中对齐（除特殊情况）
4. **留白运用**：充足的留白空间，避免拥挤感
5. **一致性**：相同类型的元素使用相同的排版规则

### 响应式排版
```css
/* 移动端（< 640px） */
@media (max-width: 639px) {
    --font-size-h1: 2rem;      /* 32px */
    --font-size-h2: 1.5rem;    /* 24px */
    --font-size-h3: 1.25rem;   /* 20px */
    --font-size-body: 0.875rem; /* 14px */
}

/* 平板端（640px - 1024px） */
@media (min-width: 640px) and (max-width: 1023px) {
    --font-size-h1: 2.5rem;    /* 40px */
    --font-size-h2: 1.75rem;   /* 28px */
    --font-size-h3: 1.5rem;    /* 24px */
    --font-size-body: 0.9375rem; /* 15px */
}

/* 桌面端（≥ 1024px） */
@media (min-width: 1024px) {
    --font-size-h1: 3rem;      /* 48px */
    --font-size-h2: 2.25rem;   /* 36px */
    --font-size-h3: 1.75rem;   /* 28px */
    --font-size-body: 1rem;    /* 16px */
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
--container-max-width: 1280px;  /* 最大宽度 */
--container-padding: 2rem;     /* 内边距 32px */
--container-margin: 0 auto;     /* 水平居中 */
```

### 栅格系统（Grid System）
基于12列网格系统：

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
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
}

/* 中号按钮（默认） */
.btn-medium {
    height: 40px;
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
}

/* 大号按钮 */
.btn-large {
    height: 48px;
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
}
```

#### 状态规范
```css
/* 默认状态 */
.btn-primary {
    background-color: var(--bauhaus-red);
    color: var(--bauhaus-white);
    border: none;
    border-radius: 0; /* 包豪斯风格：直角 */
}

/* 悬停状态 */
.btn-primary:hover {
    background-color: var(--bauhaus-red-dark);
}

/* 激活状态 */
.btn-primary:active {
    background-color: var(--bauhaus-red-dark);
    transform: scale(0.98);
}

/* 禁用状态 */
.btn-primary:disabled {
    background-color: var(--bauhaus-gray-300);
    color: var(--bauhaus-gray-500);
    cursor: not-allowed;
}

/* 焦点状态 */
.btn-primary:focus {
    outline: 2px solid var(--bauhaus-black);
    outline-offset: 2px;
}
```

#### 变体规范
```css
/* 主按钮 */
.btn-primary {
    background-color: var(--bauhaus-red);
    color: var(--bauhaus-white);
}

/* 次按钮 */
.btn-secondary {
    background-color: var(--bauhaus-black);
    color: var(--bauhaus-white);
}

/* 文字按钮 */
.btn-text {
    background-color: transparent;
    color: var(--bauhaus-black);
    border: 2px solid var(--bauhaus-black);
}

/* 幽灵按钮 */
.btn-ghost {
    background-color: transparent;
    color: var(--bauhaus-black);
}
```

#### 圆角规范
```css
/* 包豪斯风格：直角或小圆角 */
.btn {
    border-radius: 0; /* 直角 - 经典包豪斯 */
}

/* 现代包豪斯：小圆角 */
.btn-modern {
    border-radius: 4px; /* 小圆角 */
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
    background-color: var(--bauhaus-white);
    border: 2px solid var(--bauhaus-black);
    border-radius: 0;
    padding: var(--spacing-4);
    box-shadow: 4px 4px 0 var(--bauhaus-black);
}

.card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--bauhaus-black);
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
/* 包豪斯风格：硬阴影 */
.shadow-bauhaus {
    box-shadow: 4px 4px 0 var(--bauhaus-black);
}

/* 悬浮状态 */
.shadow-bauhaus-hover {
    box-shadow: 6px 6px 0 var(--bauhaus-black);
}

/* 激活状态 */
.shadow-bauhaus-active {
    box-shadow: 2px 2px 0 var(--bauhaus-black);
}
```

### Input（输入框）

#### 样式规范
```css
.input {
    width: 100%;
    height: 40px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: var(--bauhaus-black);
    background-color: var(--bauhaus-white);
    border: 2px solid var(--bauhaus-gray-300);
    border-radius: 0;
}

.input:hover {
    border-color: var(--bauhaus-gray-500);
}

.input:focus {
    border-color: var(--bauhaus-blue);
    outline: none;
}

.input-error {
    border-color: var(--bauhaus-error);
}

.input-disabled {
    background-color: var(--bauhaus-gray-100);
    color: var(--bauhaus-gray-500);
    cursor: not-allowed;
}
```

#### 尺寸规范
```css
.input-small {
    height: 32px;
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
}

.input-medium {
    height: 40px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
}

.input-large {
    height: 48px;
    padding: 0.625rem 1.25rem;
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
    font-size: 0.875rem;
    font-weight: var(--font-weight-medium);
    color: var(--bauhaus-black);
}

.form-hint {
    margin-top: var(--spacing-1);
    font-size: 0.75rem;
    color: var(--bauhaus-gray-500);
}

.form-error {
    margin-top: var(--spacing-1);
    font-size: 0.75rem;
    color: var(--bauhaus-error);
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
    background-color: var(--bauhaus-white);
    border-bottom: 2px solid var(--bauhaus-black);
}

.nav-link {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: var(--font-weight-medium);
    color: var(--bauhaus-black);
    text-decoration: none;
    border-bottom: 2px solid transparent;
}

.nav-link:hover,
.nav-link.active {
    border-bottom-color: var(--bauhaus-red);
}
```

#### 侧边导航
```css
.sidebar {
    width: 240px;
    height: 100vh;
    padding: var(--spacing-4);
    background-color: var(--bauhaus-white);
    border-right: 2px solid var(--bauhaus-black);
}

.sidebar-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    margin-bottom: var(--spacing-1);
    font-size: 0.875rem;
    color: var(--bauhaus-black);
    border-left: 4px solid transparent;
}

.sidebar-item:hover,
.sidebar-item.active {
    background-color: var(--bauhaus-gray-100);
    border-left-color: var(--bauhaus-red);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
**风格特征**：
- **几何化**：基于基础几何形状（圆形、正方形、三角形）
- **线条化**：使用简洁的线条，避免复杂细节
- **直角化**：避免圆角，强调直角和直线
- **单色化**：使用单色填充，避免渐变和阴影

**图标规范**：
```css
.icon {
    width: 24px;
    height: 24px;
    stroke-width: 2px;
    stroke: var(--bauhaus-black);
    fill: none;
}

.icon-small {
    width: 16px;
    height: 16px;
}

.icon-large {
    width: 32px;
    height: 32px;
}

.icon-filled {
    fill: var(--bauhaus-black);
    stroke: none;
}
```

**图标库建议**：
- Heroicons：简洁的线条图标
- Material Icons：功能性强，适合包豪斯风格
- Phosphor Icons：现代几何风格

### 插画风格
**风格特征**：
- **几何构成**：使用基础几何形状构建插画
- **扁平化**：避免透视和阴影，强调平面感
- **色彩限制**：使用包豪斯三原色 + 黑白灰
- **功能导向**：插画服务于功能，避免过度装饰

**插画原则**：
1. **简化原则**：用最简单的形状表达最复杂的概念
2. **几何原则**：所有元素基于基础几何形状
3. **色彩原则**：严格使用包豪斯色彩系统
4. **功能原则**：插画必须服务于功能，不能纯粹装饰

**插画类型**：
- **概念插画**：解释抽象概念
- **场景插画**：展示使用场景
- **装饰插画**：增强视觉吸引力（适度使用）

### 设计原则
1. **弱化装饰**：避免过度装饰，强调功能性
2. **辅助理解**：图标和插画必须帮助用户理解内容
3. **一致性**：所有图标和插画保持统一的风格
4. **可访问性**：提供替代文本，确保屏幕阅读器可访问

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover（悬停）行为
```css
/* 按钮悬停 */
.button:hover {
    background-color: var(--bauhaus-red-dark);
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0 var(--bauhaus-black);
}

/* 卡片悬停 */
.card:hover {
    transform: translate(-4px, -4px);
    box-shadow: 8px 8px 0 var(--bauhaus-black);
}

/* 链接悬停 */
.link:hover {
    color: var(--bauhaus-red);
    text-decoration: underline;
}
```

### Active（激活）行为
```css
/* 按钮激活 */
.button:active {
    transform: translate(0, 0);
    box-shadow: 2px 2px 0 var(--bauhaus-black);
}

/* 卡片激活 */
.card:active {
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0 var(--bauhaus-black);
}
```

### Focus（焦点）行为
```css
/* 焦点样式 */
*:focus {
    outline: 2px solid var(--bauhaus-black);
    outline-offset: 2px;
}

/* 按钮焦点 */
.button:focus {
    outline: 3px solid var(--bauhaus-yellow);
    outline-offset: 2px;
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
--duration-fast: 150ms;    /* 快速交互 */
--duration-normal: 200ms;  /* 标准交互 */
--duration-slow: 300ms;    /* 慢速交互 */
--duration-slower: 500ms;  /* 复杂动画 */
```

**动效原则**：
1. **克制原则**：动效服务于功能，避免过度动画
2. **快速响应**：所有动效在300ms内完成
3. **自然流畅**：使用自然的缓动函数
4. **性能优先**：使用CSS动画，避免JavaScript动画

### 操作反馈设计原则
1. **即时反馈**：用户操作后立即提供视觉反馈
2. **明确状态**：清晰展示当前状态（悬停、激活、禁用）
3. **视觉层次**：通过颜色、阴影、位移建立视觉层次
4. **一致性**：相同类型的操作使用相同的反馈方式

**反馈类型**：
- **视觉反馈**：颜色变化、阴影变化、位移变化
- **触觉反馈**：移动端震动（重要操作）
- **听觉反馈**：音效（谨慎使用，避免打扰）

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
    /* Primary Colors */
    --color-red-primary: #E63946;
    --color-red-light: #FF6B7A;
    --color-red-dark: #C1121F;

    --color-yellow-primary: #FFD166;
    --color-yellow-light: #FFE066;
    --color-yellow-dark: #F4A261;

    --color-blue-primary: #457B9D;
    --color-blue-light: #A8DADC;
    --color-blue-dark: #1D3557;

    /* Neutral Colors */
    --color-black-primary: #1A1A1A;
    --color-black-light: #2D2D2D;
    --color-black-dark: #000000;

    --color-white-primary: #FFFFFF;
    --color-white-off: #F8F8F8;

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
    --color-success-primary: #2A9D8F;
    --color-success-light: #48CA96;
    --color-success-dark: #1E7A6F;

    --color-warning-primary: #E9C46A;
    --color-warning-light: #F4D35E;
    --color-warning-dark: #D4A373;

    --color-error-primary: #E76F51;
    --color-error-light: #F4A261;
    --color-error-dark: #C44536;

    --color-info-primary: #457B9D;
    --color-info-light: #A8DADC;
    --color-info-dark: #1D3557;
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
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
    --shadow-none: none;
    --shadow-sm: 2px 2px 0 var(--color-black-primary);
    --shadow-md: 4px 4px 0 var(--color-black-primary);
    --shadow-lg: 6px 6px 0 var(--color-black-primary);
    --shadow-xl: 8px 8px 0 var(--color-black-primary);
}
```

### Typography Tokens
```css
:root {
    /* Font Family */
    --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    --font-secondary: 'PingFang SC', 'Microsoft YaHei', 'SimHei', sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;

    /* Font Size */
    --font-size-h1: 3rem;
    --font-size-h2: 2.25rem;
    --font-size-h3: 1.75rem;
    --font-size-h4: 1.5rem;
    --font-size-h5: 1.25rem;
    --font-size-h6: 1rem;
    --font-size-body-large: 1.125rem;
    --font-size-body: 1rem;
    --font-size-body-small: 0.875rem;
    --font-size-caption: 0.75rem;
    --font-size-overline: 0.625rem;

    /* Line Height */
    --line-height-tight: 1.2;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.75;

    /* Font Weight */
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

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
    --duration-fast: 150ms;
    --duration-normal: 200ms;
    --duration-slow: 300ms;
    --duration-slower: 500ms;

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
- 形式追随功能的设计理念
- 几何构成的设计语言
- 功能主义的设计思维
- 简洁高效的设计风格

#### 2. 色彩系统
✅ **可以学习**：
- 三原色色彩系统的使用方法
- 高对比度色彩搭配原则
- 色彩功能化使用方式
- 色彩与几何形状的结合技巧

#### 3. 排版系统
✅ **可以学习**：
- 无衬线字体的使用原则
- 基于8pt网格的排版系统
- 清晰的层次结构建立方法
- 严格的对齐原则

#### 4. 布局系统
✅ **可以学习**：
- 12列栅格系统的应用
- 基于数学比例的布局方法
- 响应式断点设置策略
- 留白与信息密度的平衡

#### 5. 组件设计
✅ **可以学习**：
- 直角设计语言的应用
- 硬阴影效果的使用
- 功能导向的组件设计
- 一致的交互行为

#### 6. 图标与插画
✅ **可以学习**：
- 几何化图标设计方法
- 简洁线条图标风格
- 功能导向的插画设计
- 色彩限制的使用原则

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 1. 品牌元素
❌ **不应复刻**：
- 包豪斯学院的商标和标志
- 包豪斯学院的名称和标识
- 包豪斯学院的官方视觉识别系统
- 任何受版权保护的包豪斯品牌元素

#### 2. 插画内容
❌ **不应复刻**：
- 包豪斯学院的历史插画
- 包豪斯大师的原创作品
- 包豪斯风格的特定插画内容
- 任何受版权保护的插画作品

#### 3. 文字内容
❌ **不应复刻**：
- 包豪斯学院的官方文案
- 包豪斯大师的原始文字
- 包豪斯学院的历史文档
- 任何受版权保护的文字内容

#### 4. 具体设计
❌ **不应复刻**：
- 包豪斯学院的具体页面设计
- 包豪斯学院的特定组件设计
- 包豪斯学院的完整视觉系统
- 任何直接复制的设计元素

### 合法使用建议

#### 1. 风格借鉴
- 学习包豪斯的设计原则和方法
- 参考包豪斯的色彩和排版系统
- 借鉴包豪斯的几何构成理念
- 应用包豪斯的功能主义思维

#### 2. 原创设计
- 基于包豪斯原则创建原创设计
- 使用包豪斯风格但加入自己的创意
- 结合现代技术和包豪斯理念
- 创建独特的包豪斯风格变体

#### 3. 法律合规
- 尊重包豪斯学院的知识产权
- 避免直接复制受保护的内容
- 注明设计灵感的来源
- 遵守相关的版权和商标法律

#### 4. 道德准则
- 诚实说明设计灵感来源
- 不声称自己是包豪斯官方设计
- 尊重包豪斯的历史和文化价值
- 促进包豪斯理念的合法传播

### 总结
包豪斯风格是一种重要的设计运动和设计理念，其核心原则和方法可以为现代设计提供宝贵的参考。但是，在使用包豪斯风格时，必须遵守相关的知识产权法律，尊重包豪斯学院的知识产权，避免直接复制受保护的内容。通过学习包豪斯的设计原则和方法，结合自己的创意和现代技术，可以创建出独特而合法的包豪斯风格设计。