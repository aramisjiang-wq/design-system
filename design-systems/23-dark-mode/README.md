# Dark Mode Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **暗黑（Dark）**：深色背景，减少眼部疲劳
- **对比（Contrast）**：高对比度文字，确保可读性
- **沉浸（Immersive）**：沉浸式体验，专注内容
- **现代（Modern）**：现代感，科技感

### 适用产品类型
- **开发者工具**：代码编辑器、终端、开发环境
- **媒体应用**：视频播放器、音乐播放器、图片查看器
- **夜间应用**：夜间阅读、夜间浏览、夜间工作
- **专业应用**：数据分析、金融交易、监控仪表盘

### 设计哲学
暗黑模式设计风格通过深色背景和高对比度文字，创造出沉浸式、专注的视觉体验。这种风格强调减少眼部疲劳、提高阅读舒适度，同时保持现代感和科技感。

---

## 2. 颜色系统（Color System）

### 主色调
```css
:root {
    /* Dark Mode 主色 */
    --dm-primary: #60A5FA;
    --dm-primary-light: #93C5FD;
    --dm-primary-dark: #3B82F6;
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
    --dm-green: #34D399;
    --dm-yellow: #FBBF24;
    --dm-red: #F87171;
    --dm-purple: #A78BFA;
    --dm-pink: #F472B6;
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
    --dm-success: #34D399;
    --dm-warning: #FBBF24;
    --dm-error: #F87171;
    --dm-info: #60A5FA;
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
    --dm-bg-main: #0F172A;
    --dm-bg-secondary: #1E293B;
    --dm-bg-tertiary: #334155;
    --dm-bg-hover: #334155;

    /* 中性色 - 文字 */
    --dm-text-primary: #F1F5F9;
    --dm-text-secondary: #CBD5E1;
    --dm-text-tertiary: #94A3B8;
    --dm-text-disabled: #64748B;

    /* 中性色 - 边框 */
    --dm-border-light: #334155;
    --dm-border-medium: #475569;
    --dm-border-dark: #64748B;

    /* 中性色 - 阴影 */
    --dm-shadow-sm: rgba(0, 0, 0, 0.3);
    --dm-shadow-md: rgba(0, 0, 0, 0.4);
    --dm-shadow-lg: rgba(0, 0, 0, 0.5);
}
```

**使用场景**：
- 背景：深色背景色，减少眼部疲劳
- 文字：高对比度文字，确保可读性
- 边框：深色边框，保持视觉一致性
- 阴影：深色阴影，增强层次感

### Design Token 命名建议
```css
/* 颜色 Token */
--dm-{color}-{shade}

/* 示例 */
--dm-primary-500: #60A5FA;
--dm-bg-secondary: #1E293B;
--dm-text-primary: #F1F5F9;
```

---

## 3. 字体与排版（Typography）

### 字体家族
```css
:root {
    --dm-font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --dm-font-family-heading: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --dm-font-family-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
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
    --dm-font-size-h1: 2rem;      /* 32px */
    --dm-font-size-h2: 1.5rem;    /* 24px */
    --dm-font-size-h3: 1.25rem;   /* 20px */
    --dm-font-size-h4: 1rem;      /* 16px */
    --dm-font-size-h5: 0.875rem;  /* 14px */
    --dm-font-size-h6: 0.75rem;  /* 12px */

    /* 正文字号 */
    --dm-font-size-body: 1rem;    /* 16px */
    --dm-font-size-small: 0.875rem;  /* 14px */
    --dm-font-size-tiny: 0.75rem;   /* 12px */
}
```

### 行高
```css
:root {
    --dm-line-height-tight: 1.25;    /* 标题 */
    --dm-line-height-normal: 1.5;     /* 正文 */
    --dm-line-height-relaxed: 1.625;  /* 长文本 */
}
```

### 字重
```css
:root {
    --dm-font-weight-light: 300;
    --dm-font-weight-regular: 400;
    --dm-font-weight-medium: 500;
    --dm-font-weight-semibold: 600;
    --dm-font-weight-bold: 700;
}
```

### 字间距
```css
:root {
    --dm-letter-spacing-tight: -0.025em;
    --dm-letter-spacing-normal: 0;
    --dm-letter-spacing-wide: 0.025em;
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
        --dm-font-size-h1: 1.5rem;   /* 24px */
        --dm-font-size-h2: 1.25rem;  /* 20px */
        --dm-font-size-h3: 1rem;     /* 16px */
        --dm-font-size-body: 0.875rem; /* 14px */
    }
}

/* 平板端（640px - 1024px） */
@media (min-width: 640px) and (max-width: 1023px) {
    :root {
        --dm-font-size-h1: 1.75rem;  /* 28px */
        --dm-font-size-h2: 1.375rem; /* 22px */
        --dm-font-size-h3: 1.125rem; /* 18px */
        --dm-font-size-body: 0.9375rem; /* 15px */
    }
}

/* 桌面端（> 1024px） */
@media (min-width: 1024px) {
    :root {
        --dm-font-size-h1: 2rem;     /* 32px */
        --dm-font-size-h2: 1.5rem;   /* 24px */
        --dm-font-size-h3: 1.25rem;  /* 20px */
        --dm-font-size-body: 1rem;   /* 16px */
    }
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
:root {
    --dm-container-max-width: 1200px;
    --dm-container-padding: 2rem;    /* 32px */
}
```

### 栅格系统
```css
:root {
    --dm-grid-columns: 12;
    --dm-grid-gutter: 1.5rem;       /* 24px */
    --dm-grid-margin: 2rem;         /* 32px */
}
```

### 栅格列宽
```css
/* 12列栅格系统 */
.dm-col-1  { width: 8.333333%; }
.dm-col-2  { width: 16.666667%; }
.dm-col-3  { width: 25%; }
.dm-col-4  { width: 33.333333%; }
.dm-col-5  { width: 41.666667%; }
.dm-col-6  { width: 50%; }
.dm-col-7  { width: 58.333333%; }
.dm-col-8  { width: 66.666667%; }
.dm-col-9  { width: 75%; }
.dm-col-10 { width: 83.333333%; }
.dm-col-11 { width: 91.666667%; }
.dm-col-12 { width: 100%; }
```

### 响应式断点
```css
:root {
    --dm-breakpoint-sm: 640px;    /* 手机 */
    --dm-breakpoint-md: 768px;    /* 平板 */
    --dm-breakpoint-lg: 1024px;   /* 桌面 */
    --dm-breakpoint-xl: 1280px;   /* 大屏 */
}
```

### 留白密度
```css
:root {
    /* 间距系统 */
    --dm-spacing-xs: 0.25rem;   /* 4px */
    --dm-spacing-sm: 0.5rem;    /* 8px */
    --dm-spacing-md: 1rem;      /* 16px */
    --dm-spacing-lg: 1.5rem;   /* 24px */
    --dm-spacing-xl: 2rem;      /* 32px */
    --dm-spacing-2xl: 3rem;     /* 48px */
    --dm-spacing-3xl: 4rem;     /* 64px */
}
```

### 信息密度判断
- **低密度**：内容稀疏，留白充足，适合展示型页面
- **中密度**：内容适中，留白合理，适合大多数页面
- **高密度**：内容密集，留白紧凑，适合数据密集型页面

### 布局模式
1. **固定布局**：固定宽度的布局，适合内容密集型页面
2. **流式布局**：自适应宽度的布局，适合响应式页面
3. **弹性布局**：使用Flexbox的布局，适合组件内部布局
4. **网格布局**：使用CSS Grid的布局，适合复杂页面布局

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

#### 组件概述
- **用途**：触发操作、提交表单、导航跳转
- **特点**：支持多种变体和状态，适应暗黑模式

#### 组件变体
```css
/* 主按钮 */
.dm-button-primary {
    background: #3B82F6;
    color: #FFFFFF;
    border: none;
    border-radius: 0.5rem;
}

/* 次按钮 */
.dm-button-secondary {
    background: #1E293B;
    color: #60A5FA;
    border: 1px solid #334155;
    border-radius: 0.5rem;
}

/* 文字按钮 */
.dm-button-text {
    background: transparent;
    color: #60A5FA;
    border: none;
}

/* 禁用按钮 */
.dm-button-disabled {
    background: #334155;
    color: #64748B;
    border: 1px solid #475569;
}
```

#### 组件尺寸
```css
/* 小号 */
.dm-button-sm {
    padding: 0.375rem 0.75rem;
    height: 32px;
    font-size: 0.875rem;
}

/* 中号 */
.dm-button-md {
    padding: 0.5rem 1rem;
    height: 40px;
    font-size: 1rem;
}

/* 大号 */
.dm-button-lg {
    padding: 0.75rem 1.5rem;
    height: 48px;
    font-size: 1.125rem;
}
```

#### 组件状态
```css
/* 悬停状态 */
.dm-button:hover {
    background: #2563EB;
    transform: translateY(-1px);
}

/* 激活状态 */
.dm-button:active {
    transform: translateY(0);
}

/* 焦点状态 */
.dm-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.3);
}
```

#### 圆角
```css
:root {
    --dm-button-radius: 0.5rem;  /* 8px */
}
```

---

### Card（卡片）

#### 组件概述
- **用途**：展示内容、数据展示、内容分组
- **特点**：暗黑模式卡片，深色背景

#### 组件样式
```css
.dm-card {
    background: #1E293B;
    border: 1px solid #334155;
    border-radius: 0.75rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.dm-card-hoverable:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
}

.dm-card-clickable {
    cursor: pointer;
    transition: all 0.2s ease;
}

.dm-card-clickable:hover {
    background: #334155;
}
```

#### 使用场景
- 信息展示：展示文章、产品、用户信息
- 数据展示：展示统计数据、图表
- 内容分组：将相关内容组织在一起

#### 阴影
```css
:root {
    --dm-card-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
    --dm-card-shadow-md: 0 1px 3px rgba(0, 0, 0, 0.4);
    --dm-card-shadow-lg: 0 4px 6px rgba(0, 0, 0, 0.5);
}
```

#### 间距
```css
:root {
    --dm-card-padding-sm: 1rem;
    --dm-card-padding-md: 1.5rem;
    --dm-card-padding-lg: 2rem;
}
```

---

### Input（输入框）

#### 组件概述
- **用途**：用户输入、表单填写、搜索
- **特点**：暗黑模式输入框，深色背景

#### 组件样式
```css
.dm-input {
    background: #1E293B;
    border: 1px solid #334155;
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
    color: #F1F5F9;
}

.dm-input:focus {
    outline: none;
    border-color: #60A5FA;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
}

.dm-input-error {
    border-color: #F87171;
}

.dm-input-disabled {
    background: #334155;
    color: #64748B;
}
```

#### 组件尺寸
```css
/* 小号 */
.dm-input-sm {
    padding: 0.375rem 0.5rem;
    height: 32px;
    font-size: 0.875rem;
}

/* 中号 */
.dm-input-md {
    padding: 0.5rem 0.75rem;
    height: 40px;
    font-size: 1rem;
}

/* 大号 */
.dm-input-lg {
    padding: 0.625rem 1rem;
    height: 48px;
    font-size: 1.125rem;
}
```

---

### Navigation（导航）

#### 组件概述
- **用途**：页面导航、菜单导航、面包屑
- **特点**：暗黑模式导航，深色背景

#### 组件样式
```css
.dm-nav {
    background: #1E293B;
    border-bottom: 1px solid #334155;
    padding: 0 2rem;
    height: 4rem;
}

.dm-nav-item {
    color: #CBD5E1;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
}

.dm-nav-item:hover {
    background: #334155;
    color: #F1F5F9;
}

.dm-nav-item-active {
    background: rgba(96, 165, 250, 0.1);
    color: #60A5FA;
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

### Upload（上传组件）

#### 组件概述
- **用途**：文件上传、图片上传
- **特点**：暗黑模式上传组件，深色背景

#### 组件样式
```css
.dm-upload {
    background: #1E293B;
    border: 2px dashed #334155;
    border-radius: 0.75rem;
    padding: 2rem;
    text-align: center;
    transition: all 0.2s ease;
}

.dm-upload:hover {
    border-color: #60A5FA;
    background: #334155;
}

.dm-upload-dragging {
    border-color: #60A5FA;
    background: rgba(96, 165, 250, 0.1);
}
```

#### 交互
- 悬停：边框颜色变化，背景色变化
- 拖拽：边框颜色高亮，背景色变化
- 上传中：显示进度条

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
```css
.dm-icon {
    /* 图标基础样式 */
    width: 1.25rem;
    height: 1.25rem;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}

/* 填充图标 */
.dm-icon-filled {
    fill: currentColor;
    stroke: none;
}

/* 线条图标 */
.dm-icon-outline {
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
    --dm-icon-xs: 0.75rem;   /* 12px */
    --dm-icon-sm: 1rem;     /* 16px */
    --dm-icon-md: 1.25rem;  /* 20px */
    --dm-icon-lg: 1.5rem;   /* 24px */
    --dm-icon-xl: 2rem;     /* 32px */
}
```

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 行为
```css
.dm-hoverable {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.dm-hoverable:hover {
    background: #334155;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
}
```

**Hover 特点**：
- 背景色变化：深色背景色轻微变化
- 位置变化：轻微向上移动
- 阴影变化：阴影加深，增强层次感
- 过渡时间：200ms

### Active 行为
```css
.dm-clickable:active {
    transform: translateY(0);
    background: #475569;
}
```

**Active 特点**：
- 位置变化：回到原位
- 背景色变化：背景色进一步加深
- 过渡时间：150ms

### Focus 行为
```css
.dm-focusable:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.3);
    border-color: #60A5FA;
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
    --dm-ease-default: cubic-bezier(0.4, 0, 0.2, 1);

    /* 快速缓动 */
    --dm-ease-in: cubic-bezier(0.4, 0, 1, 1);

    /* 慢速缓动 */
    --dm-ease-out: cubic-bezier(0, 0, 0.2, 1);

    /* 弹性缓动 */
    --dm-ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* 动效时长 */
:root {
    --dm-duration-fast: 150ms;
    --dm-duration-normal: 200ms;
    --dm-duration-slow: 300ms;
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
    --dm-primary-50: #EFF6FF;
    --dm-primary-100: #DBEAFE;
    --dm-primary-200: #BFDBFE;
    --dm-primary-300: #93C5FD;
    --dm-primary-400: #60A5FA;
    --dm-primary-500: #3B82F6;
    --dm-primary-600: #2563EB;
    --dm-primary-700: #1D4ED8;
    --dm-primary-800: #1E40AF;
    --dm-primary-900: #1E3A8A;

    /* 背景 */
    --dm-bg-main: #0F172A;
    --dm-bg-secondary: #1E293B;
    --dm-bg-tertiary: #334155;
    --dm-bg-hover: #334155;

    /* 文字颜色 */
    --dm-text-primary: #F1F5F9;
    --dm-text-secondary: #CBD5E1;
    --dm-text-tertiary: #94A3B8;
    --dm-text-disabled: #64748B;

    /* 边框颜色 */
    --dm-border-light: #334155;
    --dm-border-medium: #475569;
    --dm-border-dark: #64748B;

    /* 阴影颜色 */
    --dm-shadow-sm: rgba(0, 0, 0, 0.3);
    --dm-shadow-md: rgba(0, 0, 0, 0.4);
    --dm-shadow-lg: rgba(0, 0, 0, 0.5);
}
```

### Spacing Tokens
```css
:root {
    --dm-space-0: 0;
    --dm-space-1: 0.25rem;   /* 4px */
    --dm-space-2: 0.5rem;    /* 8px */
    --dm-space-3: 0.75rem;   /* 12px */
    --dm-space-4: 1rem;      /* 16px */
    --dm-space-5: 1.25rem;   /* 20px */
    --dm-space-6: 1.5rem;    /* 24px */
    --dm-space-7: 1.75rem;   /* 28px */
    --dm-space-8: 2rem;      /* 32px */
    --dm-space-9: 2.25rem;   /* 36px */
    --dm-space-10: 2.5rem;   /* 40px */
    --dm-space-12: 3rem;     /* 48px */
    --dm-space-16: 4rem;     /* 64px */
    --dm-space-20: 5rem;     /* 80px */
    --dm-space-24: 6rem;     /* 96px */
}
```

### Radius Tokens
```css
:root {
    --dm-radius-none: 0;
    --dm-radius-sm: 0.25rem;   /* 4px */
    --dm-radius-md: 0.5rem;    /* 8px */
    --dm-radius-lg: 0.75rem;   /* 12px */
    --dm-radius-xl: 1rem;      /* 16px */
    --dm-radius-2xl: 1.5rem;   /* 24px */
    --dm-radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
    --dm-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    --dm-shadow-md: 0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    --dm-shadow-lg: 0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
    --dm-shadow-xl: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4);
    --dm-shadow-2xl: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
    --dm-shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.4);
}
```

### Typography Tokens
```css
:root {
    /* 字体家族 */
    --dm-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --dm-font-serif: Georgia, Cambria, "Times New Roman", Times, serif;
    --dm-font-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;

    /* 字号 */
    --dm-text-xs: 0.75rem;    /* 12px */
    --dm-text-sm: 0.875rem;   /* 14px */
    --dm-text-base: 1rem;     /* 16px */
    --dm-text-lg: 1.125rem;   /* 18px */
    --dm-text-xl: 1.25rem;    /* 20px */
    --dm-text-2xl: 1.5rem;    /* 24px */
    --dm-text-3xl: 1.875rem;  /* 30px */
    --dm-text-4xl: 2.25rem;   /* 36px */
    --dm-text-5xl: 3rem;      /* 48px */

    /* 字重 */
    --dm-font-thin: 100;
    --dm-font-extralight: 200;
    --dm-font-light: 300;
    --dm-font-normal: 400;
    --dm-font-medium: 500;
    --dm-font-semibold: 600;
    --dm-font-bold: 700;
    --dm-font-extrabold: 800;
    --dm-font-black: 900;

    /* 行高 */
    --dm-leading-none: 1;
    --dm-leading-tight: 1.25;
    --dm-leading-snug: 1.375;
    --dm-leading-normal: 1.5;
    --dm-leading-relaxed: 1.625;
    --dm-leading-loose: 2;
}
```

### Animation Tokens
```css
:root {
    /* 缓动函数 */
    --dm-ease-linear: linear;
    --dm-ease-in: cubic-bezier(0.4, 0, 1, 1);
    --dm-ease-out: cubic-bezier(0, 0, 0.2, 1);
    --dm-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

    /* 动效时长 */
    --dm-duration-75: 75ms;
    --dm-duration-100: 100ms;
    --dm-duration-150: 150ms;
    --dm-duration-200: 200ms;
    --dm-duration-300: 300ms;
    --dm-duration-500: 500ms;
    --dm-duration-700: 700ms;
    --dm-duration-1000: 1000ms;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）

#### ✅ 可以学习的规则
1. **暗黑模式原理**
   - 使用深色背景减少眼部疲劳
   - 使用高对比度文字确保可读性
   - 使用深色阴影增强层次感

2. **色彩系统**
   - 主色调的选择和使用
   - 深色背景的层次变化
   - 语义色的应用场景

3. **排版系统**
   - 字体家族的选择
   - 字号层级的设计
   - 行高和字间距的控制

4. **组件设计**
   - 组件的暗黑模式适配
   - 组件的尺寸和间距规范
   - 组件的交互和动效设计

5. **布局系统**
   - 网格系统的设计
   - 响应式断点的设置
   - 暗黑模式的布局实现

#### ✅ 可以学习的风格
1. **视觉风格**
   - 暗黑模式的视觉层次
   - 深色背景的使用
   - 高对比度文字的应用

2. **交互风格**
   - 克制的动效设计
   - 清晰的反馈机制
   - 流畅的过渡效果

3. **组件风格**
   - 统一的深色背景
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
- 深入理解暗黑模式的设计原理
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
--dm-primary-500: #60A5FA;
--dm-bg-secondary: #1E293B;
--dm-text-primary: #F1F5F9;

/* 间距 */
--dm-space-4: 1rem;
--dm-space-6: 1.5rem;
--dm-space-8: 2rem;

/* 圆角 */
--dm-radius-md: 0.5rem;
--dm-radius-lg: 0.75rem;

/* 阴影 */
--dm-shadow-md: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
```

### 组件类名速查表
```css
/* 按钮 */
.dm-button-primary
.dm-button-secondary
.dm-button-text
.dm-button-disabled

/* 卡片 */
.dm-card
.dm-card-hoverable
.dm-card-clickable

/* 输入框 */
.dm-input
.dm-input-error
.dm-input-disabled

/* 导航 */
.dm-nav
.dm-nav-item
.dm-nav-item-active

/* 上传 */
.dm-upload
.dm-upload-dragging
```

### 常用代码片段
```css
/* 暗黑模式基础样式 */
.dark-mode {
    background: #0F172A;
    color: #F1F5F9;
}

/* 悬停效果 */
.dm-hoverable:hover {
    background: #334155;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
}

/* 焦点效果 */
.dm-focusable:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.3);
}
```

---

**设计系统版本**：v1.0.0
**最后更新**：2026-02-01
**维护者**：Design System Team
