# Bento Box Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **模块化（Modular）**：基于网格的模块化布局，每个模块独立且可组合
- **网格化（Grid-based）**：使用统一的网格系统，保持视觉一致性
- **灵活性（Flexible）**：模块大小可调整，适应不同内容需求
- **清晰性（Clarity）**：信息层次清晰，易于浏览和理解

### 适用产品类型
- **仪表盘**：数据可视化、统计面板、管理后台
- **内容聚合**：新闻聚合、社交媒体、内容平台
- **产品展示**：产品特性展示、功能介绍、营销页面
- **个人主页**：个人作品集、简历、社交媒体主页

### 设计哲学
Bento Box布局风格源自日本便当盒的分区设计理念，通过统一的网格系统和模块化的卡片设计，创造出清晰、有序且富有层次感的视觉体验。这种风格强调内容的组织性和可读性，同时保持设计的灵活性和可扩展性。

---

## 2. 颜色系统（Color System）

### 主色调
```css
:root {
    /* Bento Box 主色 */
    --bento-primary: #3B82F6;
    --bento-primary-light: #60A5FA;
    --bento-primary-dark: #2563EB;
}
```

**使用场景**：
- 主按钮、主要操作
- 重要信息强调
- 状态指示

### 辅助色板
```css
:root {
    /* 辅助色 */
    --bento-green: #10B981;
    --bento-yellow: #F59E0B;
    --bento-red: #EF4444;
    --bento-purple: #8B5CF6;
    --bento-pink: #EC4899;
}
```

**使用场景**：
- 绿色：成功状态、完成标记
- 黄色：警告提示、待处理状态
- 红色：错误提示、危险操作
- 紫色：特殊功能、高级功能
- 粉色：社交互动、用户反馈

### 语义色
```css
:root {
    /* 语义色 */
    --bento-success: #10B981;
    --bento-warning: #F59E0B;
    --bento-error: #EF4444;
    --bento-info: #3B82F6;
}
```

**使用场景**：
- 成功：操作成功、任务完成
- 警告：需要注意的信息
- 错误：操作失败、输入错误
- 信息：一般提示、帮助信息

### 中性色
```css
:root {
    /* 中性色 - 背景 */
    --bento-bg-main: #FFFFFF;
    --bento-bg-secondary: #F9FAFB;
    --bento-bg-tertiary: #F3F4F6;
    --bento-bg-hover: #F9FAFB;

    /* 中性色 - 文字 */
    --bento-text-primary: #111827;
    --bento-text-secondary: #6B7280;
    --bento-text-tertiary: #9CA3AF;
    --bento-text-disabled: #D1D5DB;

    /* 中性色 - 边框 */
    --bento-border-light: #E5E7EB;
    --bento-border-medium: #D1D5DB;
    --bento-border-dark: #9CA3AF;

    /* 中性色 - 阴影 */
    --bento-shadow-sm: rgba(0, 0, 0, 0.05);
    --bento-shadow-md: rgba(0, 0, 0, 0.1);
    --bento-shadow-lg: rgba(0, 0, 0, 0.15);
}
```

**使用场景**：
- 背景：模块背景色、页面背景色
- 文字：不同层级的文字颜色
- 边框：模块边框、分隔线
- 阴影：增强层次感的阴影效果

### Design Token 命名建议
```css
/* 颜色 Token */
--bento-{color}-{shade}

/* 示例 */
--bento-primary-500: #3B82F6;
--bento-bg-secondary: #F9FAFB;
--bento-text-primary: #111827;
```

---

## 3. 字体与排版（Typography）

### 字体家族
```css
:root {
    --bento-font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --bento-font-family-heading: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --bento-font-family-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
}
```

**字体选择理由**：
- 使用系统字体栈，确保最佳性能和可读性
- 支持中文字体（PingFang SC、Microsoft YaHei）
- 等宽字体用于代码和数据展示

### 字号层级
```css
:root {
    /* 标题字号 */
    --bento-font-size-h1: 2rem;      /* 32px */
    --bento-font-size-h2: 1.5rem;    /* 24px */
    --bento-font-size-h3: 1.25rem;   /* 20px */
    --bento-font-size-h4: 1rem;      /* 16px */
    --bento-font-size-h5: 0.875rem;  /* 14px */
    --bento-font-size-h6: 0.75rem;  /* 12px */

    /* 正文字号 */
    --bento-font-size-body: 1rem;    /* 16px */
    --bento-font-size-small: 0.875rem;  /* 14px */
    --bento-font-size-tiny: 0.75rem;   /* 12px */
}
```

### 行高
```css
:root {
    --bento-line-height-tight: 1.25;    /* 标题 */
    --bento-line-height-normal: 1.5;     /* 正文 */
    --bento-line-height-relaxed: 1.625;  /* 长文本 */
}
```

### 字重
```css
:root {
    --bento-font-weight-light: 300;
    --bento-font-weight-regular: 400;
    --bento-font-weight-medium: 500;
    --bento-font-weight-semibold: 600;
    --bento-font-weight-bold: 700;
}
```

### 字间距
```css
:root {
    --bento-letter-spacing-tight: -0.025em;
    --bento-letter-spacing-normal: 0;
    --bento-letter-spacing-wide: 0.025em;
}
```

### 排版节奏规则
1. **标题层级**：使用H1-H6建立清晰的信息层次
2. **行高比例**：标题使用1.25，正文使用1.5，长文本使用1.625
3. **字重对比**：使用字重变化而非字号变化来强调内容
4. **留白控制**：标题与正文之间保持适当的留白
5. **对齐方式**：左对齐为主，特殊情况使用居中对齐

### 响应式排版
```css
/* 移动端（< 640px） */
@media (max-width: 639px) {
    :root {
        --bento-font-size-h1: 1.5rem;   /* 24px */
        --bento-font-size-h2: 1.25rem;  /* 20px */
        --bento-font-size-h3: 1rem;     /* 16px */
        --bento-font-size-body: 0.875rem; /* 14px */
    }
}

/* 平板端（640px - 1024px） */
@media (min-width: 640px) and (max-width: 1023px) {
    :root {
        --bento-font-size-h1: 1.75rem;  /* 28px */
        --bento-font-size-h2: 1.375rem; /* 22px */
        --bento-font-size-h3: 1.125rem; /* 18px */
        --bento-font-size-body: 0.9375rem; /* 15px */
    }
}

/* 桌面端（> 1024px） */
@media (min-width: 1024px) {
    :root {
        --bento-font-size-h1: 2rem;     /* 32px */
        --bento-font-size-h2: 1.5rem;   /* 24px */
        --bento-font-size-h3: 1.25rem;  /* 20px */
        --bento-font-size-body: 1rem;   /* 16px */
    }
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
:root {
    --bento-container-max-width: 1400px;
    --bento-container-padding: 2rem;    /* 32px */
}
```

### 栅格系统
```css
:root {
    --bento-grid-columns: 12;
    --bento-grid-gutter: 1.5rem;       /* 24px */
    --bento-grid-margin: 2rem;         /* 32px */
}
```

### Bento Box 模块尺寸
```css
/* 基础模块 */
.bento-module {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* 模块尺寸变体 */
.bento-module-sm {
    grid-column: span 2;
    grid-row: span 1;
}

.bento-module-md {
    grid-column: span 3;
    grid-row: span 2;
}

.bento-module-lg {
    grid-column: span 4;
    grid-row: span 2;
}

.bento-module-xl {
    grid-column: span 6;
    grid-row: span 2;
}

.bento-module-full {
    grid-column: span 12;
    grid-row: span 1;
}
```

### 响应式断点
```css
:root {
    --bento-breakpoint-sm: 640px;    /* 手机 */
    --bento-breakpoint-md: 768px;    /* 平板 */
    --bento-breakpoint-lg: 1024px;   /* 桌面 */
    --bento-breakpoint-xl: 1280px;   /* 大屏 */
}
```

### 留白密度
```css
:root {
    /* 间距系统 */
    --bento-spacing-xs: 0.25rem;   /* 4px */
    --bento-spacing-sm: 0.5rem;    /* 8px */
    --bento-spacing-md: 1rem;      /* 16px */
    --bento-spacing-lg: 1.5rem;   /* 24px */
    --bento-spacing-xl: 2rem;      /* 32px */
    --bento-spacing-2xl: 3rem;     /* 48px */
    --bento-spacing-3xl: 4rem;     /* 64px */
}
```

### 信息密度判断
- **低密度**：内容稀疏，留白充足，适合展示型页面
- **中密度**：内容适中，留白合理，适合大多数页面
- **高密度**：内容密集，留白紧凑，适合数据密集型页面

### 布局模式
1. **网格布局**：使用CSS Grid的布局，适合Bento Box模块化设计
2. **弹性布局**：使用Flexbox的布局，适合模块内部布局
3. **流式布局**：自适应宽度的布局，适合响应式页面
4. **固定布局**：固定宽度的布局，适合内容密集型页面

### Bento Grid 布局示例
```css
.bento-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    gap: 1.5rem;
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
}

/* 响应式布局 */
@media (max-width: 1023px) {
    .bento-grid {
        grid-template-columns: repeat(6, 1fr);
    }
}

@media (max-width: 639px) {
    .bento-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

#### 组件概述
- **用途**：触发操作、提交表单、导航跳转
- **特点**：支持多种变体和状态，适应Bento Box布局

#### 组件变体
```css
/* 主按钮 */
.bento-button-primary {
    background: #3B82F6;
    color: #FFFFFF;
    border: none;
    border-radius: 0.5rem;
}

/* 次按钮 */
.bento-button-secondary {
    background: #FFFFFF;
    color: #3B82F6;
    border: 1px solid #E5E7EB;
    border-radius: 0.5rem;
}

/* 文字按钮 */
.bento-button-text {
    background: transparent;
    color: #3B82F6;
    border: none;
}

/* 禁用按钮 */
.bento-button-disabled {
    background: #F3F4F6;
    color: #9CA3AF;
    border: 1px solid #E5E7EB;
}
```

#### 组件尺寸
```css
/* 小号 */
.bento-button-sm {
    padding: 0.375rem 0.75rem;
    height: 32px;
    font-size: 0.875rem;
}

/* 中号 */
.bento-button-md {
    padding: 0.5rem 1rem;
    height: 40px;
    font-size: 1rem;
}

/* 大号 */
.bento-button-lg {
    padding: 0.75rem 1.5rem;
    height: 48px;
    font-size: 1.125rem;
}
```

#### 组件状态
```css
/* 悬停状态 */
.bento-button:hover {
    background: #2563EB;
    transform: translateY(-1px);
}

/* 激活状态 */
.bento-button:active {
    transform: translateY(0);
}

/* 焦点状态 */
.bento-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}
```

#### 圆角
```css
:root {
    --bento-button-radius: 0.5rem;  /* 8px */
}
```

---

### Card（卡片）

#### 组件概述
- **用途**：展示内容、数据展示、内容分组
- **特点**：Bento Box模块的基础组件

#### 组件样式
```css
.bento-card {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.bento-card-hoverable:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.bento-card-clickable {
    cursor: pointer;
    transition: all 0.2s ease;
}

.bento-card-clickable:hover {
    background: #F9FAFB;
}
```

#### 使用场景
- 信息展示：展示文章、产品、用户信息
- 数据展示：展示统计数据、图表
- 内容分组：将相关内容组织在一起

#### 阴影
```css
:root {
    --bento-card-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --bento-card-shadow-md: 0 1px 3px rgba(0, 0, 0, 0.1);
    --bento-card-shadow-lg: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

#### 间距
```css
:root {
    --bento-card-padding-sm: 1rem;
    --bento-card-padding-md: 1.5rem;
    --bento-card-padding-lg: 2rem;
}
```

---

### Input（输入框）

#### 组件概述
- **用途**：用户输入、表单填写、搜索
- **特点**：适应Bento Box模块的输入框

#### 组件样式
```css
.bento-input {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
    color: #111827;
}

.bento-input:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.bento-input-error {
    border-color: #EF4444;
}

.bento-input-disabled {
    background: #F3F4F6;
    color: #9CA3AF;
}
```

#### 组件尺寸
```css
/* 小号 */
.bento-input-sm {
    padding: 0.375rem 0.5rem;
    height: 32px;
    font-size: 0.875rem;
}

/* 中号 */
.bento-input-md {
    padding: 0.5rem 0.75rem;
    height: 40px;
    font-size: 1rem;
}

/* 大号 */
.bento-input-lg {
    padding: 0.625rem 1rem;
    height: 48px;
    font-size: 1.125rem;
}
```

---

### Navigation（导航）

#### 组件概述
- **用途**：页面导航、菜单导航、面包屑
- **特点**：适应Bento Box布局的导航

#### 组件样式
```css
.bento-nav {
    background: #FFFFFF;
    border-bottom: 1px solid #E5E7EB;
    padding: 0 2rem;
    height: 4rem;
}

.bento-nav-item {
    color: #6B7280;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
}

.bento-nav-item:hover {
    background: #F9FAFB;
    color: #111827;
}

.bento-nav-item-active {
    background: #EFF6FF;
    color: #3B82F6;
}
```

#### 结构
- 水平导航：顶部导航栏
- 垂直导航：侧边导航栏
- 面包屑：页面层级导航

#### 交互
- 悬停：背景色变化，文字颜色变化
- 激活：背景色高亮，文字颜色变化
- 点击：页面跳转或内容切换

---

### Bento Module（便当盒模块）

#### 组件概述
- **用途**：Bento Box布局的核心模块
- **特点**：可调整大小、可组合、可嵌套

#### 组件样式
```css
.bento-module {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
}

.bento-module-header {
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #E5E7EB;
}

.bento-module-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
}

.bento-module-content {
    flex: 1;
    overflow: auto;
}

.bento-module-footer {
    margin-top: 1rem;
    padding-top: 0.75rem;
    border-top: 1px solid #E5E7EB;
}
```

#### 模块尺寸变体
```css
/* 小模块 */
.bento-module-sm {
    grid-column: span 2;
    grid-row: span 1;
}

/* 中模块 */
.bento-module-md {
    grid-column: span 3;
    grid-row: span 2;
}

/* 大模块 */
.bento-module-lg {
    grid-column: span 4;
    grid-row: span 2;
}

/* 超大模块 */
.bento-module-xl {
    grid-column: span 6;
    grid-row: span 2;
}

/* 全宽模块 */
.bento-module-full {
    grid-column: span 12;
    grid-row: span 1;
}
```

#### 使用场景
- 仪表盘：数据展示、统计图表
- 内容聚合：新闻、文章、社交媒体
- 产品展示：特性介绍、功能演示
- 个人主页：作品集、简历、社交信息

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
```css
.bento-icon {
    /* 图标基础样式 */
    width: 1.25rem;
    height: 1.25rem;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}

/* 填充图标 */
.bento-icon-filled {
    fill: currentColor;
    stroke: none;
}

/* 线条图标 */
.bento-icon-outline {
    fill: none;
    stroke: currentColor;
}
```

**图标特点**：
- 风格：线条图标为主，填充图标为辅
- 圆角：图标线条使用圆角，增强柔和感
- 一致性：所有图标保持统一的线条粗细和风格
- 语义：图标含义清晰，易于理解

### 插画风格
- **风格**：简洁、现代、扁平化
- **色彩**：使用主色调和中性色
- **线条**：简洁的线条，适度的细节
- **用途**：辅助理解、增强视觉吸引力

### 设计原则
1. **弱化原则**：图标和插画不应喧宾夺主，应服务于内容
2. **辅助理解**：图标和插画应帮助用户理解内容，而非装饰
3. **一致性**：所有图标和插画保持统一的风格和色彩
4. **可访问性**：提供替代文本，确保屏幕阅读器可访问

### 图标尺寸
```css
:root {
    --bento-icon-xs: 0.75rem;   /* 12px */
    --bento-icon-sm: 1rem;     /* 16px */
    --bento-icon-md: 1.25rem;  /* 20px */
    --bento-icon-lg: 1.5rem;   /* 24px */
    --bento-icon-xl: 2rem;     /* 32px */
}
```

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 行为
```css
.bento-hoverable {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.bento-hoverable:hover {
    background: #F9FAFB;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

**Hover 特点**：
- 背景色变化：背景色轻微变化
- 位置变化：轻微向上移动
- 阴影变化：阴影加深，增强层次感
- 过渡时间：200ms

### Active 行为
```css
.bento-clickable:active {
    transform: translateY(0);
    background: #F3F4F6;
}
```

**Active 特点**：
- 位置变化：回到原位
- 背景色变化：背景色进一步加深
- 过渡时间：150ms

### Focus 行为
```css
.bento-focusable:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    border-color: #3B82F6;
}
```

**Focus 特点**：
- 焦点环：显示明显的焦点环
- 边框变化：边框颜色变化
- 过渡时间：200ms

### 动效节奏
```css
:root {
    /* 标准缓动 */
    --bento-ease-default: cubic-bezier(0.4, 0, 0.2, 1);

    /* 快速缓动 */
    --bento-ease-in: cubic-bezier(0.4, 0, 1, 1);

    /* 慢速缓动 */
    --bento-ease-out: cubic-bezier(0, 0, 0.2, 1);

    /* 弹性缓动 */
    --bento-ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* 动效时长 */
:root {
    --bento-duration-fast: 150ms;
    --bento-duration-normal: 200ms;
    --bento-duration-slow: 300ms;
}
```

**动效特点**：
- 克制：动效简洁，不过度
- 明显：动效清晰可见，易于感知
- 流畅：动效流畅自然，不卡顿
- 功能导向：动效服务于功能，不装饰

### 操作反馈设计原则
1. **即时反馈**：操作后立即给予视觉反馈
2. **清晰明确**：反馈信息清晰明确，易于理解
3. **适度克制**：反馈不过度，不干扰用户
4. **多感官**：结合视觉、触觉等多种反馈方式

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
    /* 主色 */
    --bento-primary-50: #EFF6FF;
    --bento-primary-100: #DBEAFE;
    --bento-primary-200: #BFDBFE;
    --bento-primary-300: #93C5FD;
    --bento-primary-400: #60A5FA;
    --bento-primary-500: #3B82F6;
    --bento-primary-600: #2563EB;
    --bento-primary-700: #1D4ED8;
    --bento-primary-800: #1E40AF;
    --bento-primary-900: #1E3A8A;

    /* 背景 */
    --bento-bg-main: #FFFFFF;
    --bento-bg-secondary: #F9FAFB;
    --bento-bg-tertiary: #F3F4F6;
    --bento-bg-hover: #F9FAFB;

    /* 文字颜色 */
    --bento-text-primary: #111827;
    --bento-text-secondary: #6B7280;
    --bento-text-tertiary: #9CA3AF;
    --bento-text-disabled: #D1D5DB;

    /* 边框颜色 */
    --bento-border-light: #E5E7EB;
    --bento-border-medium: #D1D5DB;
    --bento-border-dark: #9CA3AF;

    /* 阴影颜色 */
    --bento-shadow-sm: rgba(0, 0, 0, 0.05);
    --bento-shadow-md: rgba(0, 0, 0, 0.1);
    --bento-shadow-lg: rgba(0, 0, 0, 0.15);
}
```

### Spacing Tokens
```css
:root {
    --bento-space-0: 0;
    --bento-space-1: 0.25rem;   /* 4px */
    --bento-space-2: 0.5rem;    /* 8px */
    --bento-space-3: 0.75rem;   /* 12px */
    --bento-space-4: 1rem;      /* 16px */
    --bento-space-5: 1.25rem;   /* 20px */
    --bento-space-6: 1.5rem;    /* 24px */
    --bento-space-7: 1.75rem;   /* 28px */
    --bento-space-8: 2rem;      /* 32px */
    --bento-space-9: 2.25rem;   /* 36px */
    --bento-space-10: 2.5rem;   /* 40px */
    --bento-space-12: 3rem;     /* 48px */
    --bento-space-16: 4rem;     /* 64px */
    --bento-space-20: 5rem;     /* 80px */
    --bento-space-24: 6rem;     /* 96px */
}
```

### Radius Tokens
```css
:root {
    --bento-radius-none: 0;
    --bento-radius-sm: 0.25rem;   /* 4px */
    --bento-radius-md: 0.5rem;    /* 8px */
    --bento-radius-lg: 0.75rem;   /* 12px */
    --bento-radius-xl: 1rem;      /* 16px */
    --bento-radius-2xl: 1.5rem;   /* 24px */
    --bento-radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
    --bento-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --bento-shadow-md: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --bento-shadow-lg: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --bento-shadow-xl: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --bento-shadow-2xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --bento-shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}
```

### Typography Tokens
```css
:root {
    /* 字体家族 */
    --bento-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --bento-font-serif: Georgia, Cambria, "Times New Roman", Times, serif;
    --bento-font-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;

    /* 字号 */
    --bento-text-xs: 0.75rem;    /* 12px */
    --bento-text-sm: 0.875rem;   /* 14px */
    --bento-text-base: 1rem;     /* 16px */
    --bento-text-lg: 1.125rem;   /* 18px */
    --bento-text-xl: 1.25rem;    /* 20px */
    --bento-text-2xl: 1.5rem;    /* 24px */
    --bento-text-3xl: 1.875rem;  /* 30px */
    --bento-text-4xl: 2.25rem;   /* 36px */
    --bento-text-5xl: 3rem;      /* 48px */

    /* 字重 */
    --bento-font-thin: 100;
    --bento-font-extralight: 200;
    --bento-font-light: 300;
    --bento-font-normal: 400;
    --bento-font-medium: 500;
    --bento-font-semibold: 600;
    --bento-font-bold: 700;
    --bento-font-extrabold: 800;
    --bento-font-black: 900;

    /* 行高 */
    --bento-leading-none: 1;
    --bento-leading-tight: 1.25;
    --bento-leading-snug: 1.375;
    --bento-leading-normal: 1.5;
    --bento-leading-relaxed: 1.625;
    --bento-leading-loose: 2;
}
```

### Animation Tokens
```css
:root {
    /* 缓动函数 */
    --bento-ease-linear: linear;
    --bento-ease-in: cubic-bezier(0.4, 0, 1, 1);
    --bento-ease-out: cubic-bezier(0, 0, 0.2, 1);
    --bento-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

    /* 动效时长 */
    --bento-duration-75: 75ms;
    --bento-duration-100: 100ms;
    --bento-duration-150: 150ms;
    --bento-duration-200: 200ms;
    --bento-duration-300: 300ms;
    --bento-duration-500: 500ms;
    --bento-duration-700: 700ms;
    --bento-duration-1000: 1000ms;
}
```

### Grid Tokens
```css
:root {
    /* 栅格系统 */
    --bento-grid-columns: 12;
    --bento-grid-gutter: 1.5rem;
    --bento-grid-margin: 2rem;

    /* 模块尺寸 */
    --bento-module-sm: span 2;
    --bento-module-md: span 3;
    --bento-module-lg: span 4;
    --bento-module-xl: span 6;
    --bento-module-full: span 12;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）

#### ✅ 可以学习的规则
1. **网格布局原理**
   - 使用 CSS Grid 实现模块化布局
   - 使用统一的栅格系统和间距
   - 模块大小可调整，适应不同内容需求

2. **色彩系统**
   - 主色调的选择和使用
   - 中性色的层次变化
   - 语义色的应用场景

3. **排版系统**
   - 字体家族的选择
   - 字号层级的设计
   - 行高和字间距的控制

4. **组件设计**
   - 组件的模块化设计
   - 组件的尺寸和间距规范
   - 组件的交互和动效设计

5. **布局系统**
   - 网格系统的设计
   - 响应式断点的设置
   - 模块化布局的实现

#### ✅ 可以学习的风格
1. **视觉风格**
   - 模块化的视觉层次
   - 统一的圆角处理
   - 清晰的边框和阴影

2. **交互风格**
   - 克制的动效设计
   - 清晰的反馈机制
   - 流畅的过渡效果

3. **组件风格**
   - 统一的模块样式
   - 一致的间距和圆角
   - 协调的色彩搭配

### 不应复刻的元素（品牌 / 插画 / 内容）

#### ❌ 不应复刻的品牌元素
1. **品牌标识**
   - Logo、商标、品牌名称
   - 品牌专属的图形元素
   - 品牌专属的色彩组合

2. **品牌资产**
   - 品牌专属的插画
   - 品牌专属的图标
   - 品牌专属的图片

#### ❌ 不应复刻的内容
1. **文案内容**
   - 具体的文字内容
   - 产品描述
   - 营销文案

2. **数据内容**
   - 具体的数据展示
   - 统计数据
   - 用户信息

3. **功能内容**
   - 具体的功能实现
   - 业务逻辑
   - 数据处理

### 合法复刻的最佳实践

#### 1. 理解设计原则
- 深入理解Bento Box布局的设计原理
- 学习色彩、排版、布局的设计规则
- 掌握组件设计和交互设计的方法

#### 2. 创建自己的设计系统
- 基于学习到的规则创建自己的设计系统
- 使用自己的品牌色彩和字体
- 设计符合自己产品需求的组件

#### 3. 尊重知识产权
- 不复制具体的品牌元素和内容
- 不使用受版权保护的图片和插画
- 遵守相关法律法规

#### 4. 持续创新
- 在学习的基础上进行创新
- 结合自己的产品特点进行优化
- 创造独特的设计风格

### 法律风险提示

#### ⚠️ 版权风险
- 避免复制受版权保护的设计元素
- 不使用未经授权的图片和插画
- 尊重原创设计

#### ⚠️ 商标风险
- 不使用他人的商标和品牌标识
- 避免混淆用户的产品识别
- 建立自己的品牌识别

#### ⚠️ 专利风险
- 注意设计专利和外观专利
- 避免侵犯他人的专利权
- 进行专利检索和咨询

---

## 附录：快速参考

### CSS 变量速查表
```css
/* 颜色 */
--bento-primary-500: #3B82F6;
--bento-bg-secondary: #F9FAFB;
--bento-text-primary: #111827;

/* 间距 */
--bento-space-4: 1rem;
--bento-space-6: 1.5rem;
--bento-space-8: 2rem;

/* 圆角 */
--bento-radius-md: 0.5rem;
--bento-radius-lg: 0.75rem;

/* 阴影 */
--bento-shadow-md: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

/* 栅格 */
--bento-grid-columns: 12;
--bento-grid-gutter: 1.5rem;
```

### 组件类名速查表
```css
/* 按钮 */
.bento-button-primary
.bento-button-secondary
.bento-button-text
.bento-button-disabled

/* 卡片 */
.bento-card
.bento-card-hoverable
.bento-card-clickable

/* 输入框 */
.bento-input
.bento-input-error
.bento-input-disabled

/* 导航 */
.bento-nav
.bento-nav-item
.bento-nav-item-active

/* 便当盒模块 */
.bento-module
.bento-module-sm
.bento-module-md
.bento-module-lg
.bento-module-xl
.bento-module-full
```

### 常用代码片段
```css
/* 便当盒网格布局 */
.bento-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    gap: 1.5rem;
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
}

/* 便当盒模块 */
.bento-module {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* 悬停效果 */
.bento-hoverable:hover {
    background: #F9FAFB;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 焦点效果 */
.bento-focusable:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}
```

---

**设计系统版本**：v1.0.0
**最后更新**：2026-02-01
**维护者**：Design System Team
