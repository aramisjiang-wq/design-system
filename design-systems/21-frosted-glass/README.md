# Frosted Glass Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **透明感（Transparency）**：通过毛玻璃效果创造层次感和深度
- **模糊（Blur）**：使用背景模糊效果增强视觉层次
- **现代感（Modern）**：简洁、流畅、富有科技感
- **轻盈（Lightweight）**：视觉上轻盈、通透、不沉重

### 适用产品类型
- **SaaS产品**：企业级应用、协作工具、数据可视化平台
- **内容平台**：媒体网站、博客平台、内容管理系统
- **社交应用**：社交网络、即时通讯、社区平台
- **创意工具**：设计工具、编辑器、创作平台

### 设计哲学
毛玻璃效果设计风格通过半透明背景和背景模糊效果，创造出独特的视觉层次感和深度感。这种风格强调内容的可读性和视觉的层次性，同时保持界面的现代感和科技感。

---

## 2. 颜色系统（Color System）

### 主色调
```css
:root {
    /* Frosted Glass 主色 */
    --frosted-glass-primary: #3B82F6;
    --frosted-glass-primary-light: #60A5FA;
    --frosted-glass-primary-dark: #2563EB;
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
    --frosted-glass-green: #10B981;
    --frosted-glass-yellow: #F59E0B;
    --frosted-glass-red: #EF4444;
    --frosted-glass-purple: #8B5CF6;
    --frosted-glass-pink: #EC4899;
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
    --frosted-glass-success: #10B981;
    --frosted-glass-warning: #F59E0B;
    --frosted-glass-error: #EF4444;
    --frosted-glass-info: #3B82F6;
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
    --frosted-glass-bg: rgba(255, 255, 255, 0.7);
    --frosted-glass-bg-light: rgba(255, 255, 255, 0.5);
    --frosted-glass-bg-dark: rgba(255, 255, 255, 0.85);
    --frosted-glass-bg-hover: rgba(255, 255, 255, 0.8);

    /* 中性色 - 文字 */
    --frosted-glass-text-primary: rgba(17, 24, 39, 0.9);
    --frosted-glass-text-secondary: rgba(107, 114, 128, 0.8);
    --frosted-glass-text-tertiary: rgba(156, 163, 175, 0.6);
    --frosted-glass-text-disabled: rgba(156, 163, 175, 0.4);

    /* 中性色 - 边框 */
    --frosted-glass-border: rgba(255, 255, 255, 0.3);
    --frosted-glass-border-light: rgba(255, 255, 255, 0.2);
    --frosted-glass-border-dark: rgba(255, 255, 255, 0.4);

    /* 中性色 - 阴影 */
    --frosted-glass-shadow: rgba(0, 0, 0, 0.1);
    --frosted-glass-shadow-light: rgba(0, 0, 0, 0.05);
    --frosted-glass-shadow-dark: rgba(0, 0, 0, 0.15);
}
```

**使用场景**：
- 背景：毛玻璃效果的基础背景色
- 文字：不同层级的文字颜色
- 边框：毛玻璃效果的边框颜色
- 阴影：增强层次感的阴影效果

### Design Token 命名建议
```css
/* 颜色 Token */
--fg-{color}-{shade}

/* 示例 */
--fg-primary-500: #3B82F6;
--fg-bg-light: rgba(255, 255, 255, 0.5);
--fg-text-primary: rgba(17, 24, 39, 0.9);
```

---

## 3. 字体与排版（Typography）

### 字体家族
```css
:root {
    --fg-font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --fg-font-family-heading: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --fg-font-family-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
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
    --fg-font-size-h1: 2rem;      /* 32px */
    --fg-font-size-h2: 1.5rem;    /* 24px */
    --fg-font-size-h3: 1.25rem;   /* 20px */
    --fg-font-size-h4: 1rem;      /* 16px */
    --fg-font-size-h5: 0.875rem;  /* 14px */
    --fg-font-size-h6: 0.75rem;  /* 12px */

    /* 正文字号 */
    --fg-font-size-body: 1rem;    /* 16px */
    --fg-font-size-small: 0.875rem;  /* 14px */
    --fg-font-size-tiny: 0.75rem;   /* 12px */
}
```

### 行高
```css
:root {
    --fg-line-height-tight: 1.25;    /* 标题 */
    --fg-line-height-normal: 1.5;     /* 正文 */
    --fg-line-height-relaxed: 1.625;  /* 长文本 */
}
```

### 字重
```css
:root {
    --fg-font-weight-light: 300;
    --fg-font-weight-regular: 400;
    --fg-font-weight-medium: 500;
    --fg-font-weight-semibold: 600;
    --fg-font-weight-bold: 700;
}
```

### 字间距
```css
:root {
    --fg-letter-spacing-tight: -0.025em;
    --fg-letter-spacing-normal: 0;
    --fg-letter-spacing-wide: 0.025em;
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
        --fg-font-size-h1: 1.5rem;   /* 24px */
        --fg-font-size-h2: 1.25rem;  /* 20px */
        --fg-font-size-h3: 1rem;     /* 16px */
        --fg-font-size-body: 0.875rem; /* 14px */
    }
}

/* 平板端（640px - 1024px） */
@media (min-width: 640px) and (max-width: 1023px) {
    :root {
        --fg-font-size-h1: 1.75rem;  /* 28px */
        --fg-font-size-h2: 1.375rem; /* 22px */
        --fg-font-size-h3: 1.125rem; /* 18px */
        --fg-font-size-body: 0.9375rem; /* 15px */
    }
}

/* 桌面端（> 1024px） */
@media (min-width: 1024px) {
    :root {
        --fg-font-size-h1: 2rem;     /* 32px */
        --fg-font-size-h2: 1.5rem;   /* 24px */
        --fg-font-size-h3: 1.25rem;  /* 20px */
        --fg-font-size-body: 1rem;   /* 16px */
    }
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
:root {
    --fg-container-max-width: 1200px;
    --fg-container-padding: 2rem;    /* 32px */
}
```

### 栅格系统
```css
:root {
    --fg-grid-columns: 12;
    --fg-grid-gutter: 1.5rem;       /* 24px */
    --fg-grid-margin: 2rem;         /* 32px */
}
```

### 栅格列宽
```css
/* 12列栅格系统 */
.fg-col-1  { width: 8.333333%; }
.fg-col-2  { width: 16.666667%; }
.fg-col-3  { width: 25%; }
.fg-col-4  { width: 33.333333%; }
.fg-col-5  { width: 41.666667%; }
.fg-col-6  { width: 50%; }
.fg-col-7  { width: 58.333333%; }
.fg-col-8  { width: 66.666667%; }
.fg-col-9  { width: 75%; }
.fg-col-10 { width: 83.333333%; }
.fg-col-11 { width: 91.666667%; }
.fg-col-12 { width: 100%; }
```

### 响应式断点
```css
:root {
    --fg-breakpoint-sm: 640px;    /* 手机 */
    --fg-breakpoint-md: 768px;    /* 平板 */
    --fg-breakpoint-lg: 1024px;   /* 桌面 */
    --fg-breakpoint-xl: 1280px;   /* 大屏 */
}
```

### 留白密度
```css
:root {
    /* 间距系统 */
    --fg-spacing-xs: 0.25rem;   /* 4px */
    --fg-spacing-sm: 0.5rem;    /* 8px */
    --fg-spacing-md: 1rem;      /* 16px */
    --fg-spacing-lg: 1.5rem;   /* 24px */
    --fg-spacing-xl: 2rem;      /* 32px */
    --fg-spacing-2xl: 3rem;     /* 48px */
    --fg-spacing-3xl: 4rem;     /* 64px */
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
- **特点**：支持多种变体和状态，具有毛玻璃效果

#### 组件变体
```css
/* 主按钮 */
.fg-button-primary {
    background: rgba(59, 130, 246, 0.9);
    backdrop-filter: blur(20px);
    color: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

/* 次按钮 */
.fg-button-secondary {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    color: #3B82F6;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

/* 文字按钮 */
.fg-button-text {
    background: transparent;
    color: #3B82F6;
    border: none;
}

/* 禁用按钮 */
.fg-button-disabled {
    background: rgba(229, 231, 235, 0.5);
    color: rgba(156, 163, 175, 0.6);
    border: 1px solid rgba(229, 231, 235, 0.3);
}
```

#### 组件尺寸
```css
/* 小号 */
.fg-button-sm {
    padding: 0.375rem 0.75rem;
    height: 32px;
    font-size: 0.875rem;
}

/* 中号 */
.fg-button-md {
    padding: 0.5rem 1rem;
    height: 40px;
    font-size: 1rem;
}

/* 大号 */
.fg-button-lg {
    padding: 0.75rem 1.5rem;
    height: 48px;
    font-size: 1.125rem;
}
```

#### 组件状态
```css
/* 悬停状态 */
.fg-button:hover {
    background: rgba(59, 130, 246, 1);
    transform: translateY(-1px);
}

/* 激活状态 */
.fg-button:active {
    transform: translateY(0);
}

/* 焦点状态 */
.fg-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}
```

#### 圆角
```css
:root {
    --fg-button-radius: 0.375rem;  /* 6px */
}
```

---

### Card（卡片）

#### 组件概述
- **用途**：展示内容、数据展示、内容分组
- **特点**：毛玻璃效果背景，增强层次感

#### 组件样式
```css
.fg-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.fg-card-hoverable:hover {
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}
```

#### 使用场景
- 信息展示：展示文章、产品、用户信息
- 数据展示：展示统计数据、图表
- 内容分组：将相关内容组织在一起

#### 阴影
```css
:root {
    --fg-card-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --fg-card-shadow-md: 0 1px 3px rgba(0, 0, 0, 0.1);
    --fg-card-shadow-lg: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

#### 间距
```css
:root {
    --fg-card-padding-sm: 1rem;
    --fg-card-padding-md: 1.5rem;
    --fg-card-padding-lg: 2rem;
}
```

---

### Input（输入框）

#### 组件概述
- **用途**：用户输入、表单填写、搜索
- **特点**：毛玻璃效果背景，清晰的焦点状态

#### 组件样式
```css
.fg-input {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(229, 231, 235, 0.5);
    border-radius: 0.375rem;
    padding: 0.5rem 0.75rem;
    color: rgba(17, 24, 39, 0.9);
}

.fg-input:focus {
    outline: none;
    border-color: rgba(59, 130, 246, 0.8);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.fg-input-error {
    border-color: rgba(239, 68, 68, 0.8);
}

.fg-input-disabled {
    background: rgba(229, 231, 235, 0.5);
    color: rgba(156, 163, 175, 0.6);
}
```

#### 组件尺寸
```css
/* 小号 */
.fg-input-sm {
    padding: 0.375rem 0.5rem;
    height: 32px;
    font-size: 0.875rem;
}

/* 中号 */
.fg-input-md {
    padding: 0.5rem 0.75rem;
    height: 40px;
    font-size: 1rem;
}

/* 大号 */
.fg-input-lg {
    padding: 0.625rem 1rem;
    height: 48px;
    font-size: 1.125rem;
}
```

---

### Navigation（导航）

#### 组件概述
- **用途**：页面导航、菜单导航、面包屑
- **特点**：毛玻璃效果背景，清晰的视觉层次

#### 组件样式
```css
.fg-nav {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding: 0 2rem;
    height: 4rem;
}

.fg-nav-item {
    color: rgba(107, 114, 128, 0.8);
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    transition: all 0.2s ease;
}

.fg-nav-item:hover {
    background: rgba(255, 255, 255, 0.5);
    color: rgba(17, 24, 39, 0.9);
}

.fg-nav-item-active {
    background: rgba(59, 130, 246, 0.1);
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

### Upload（上传组件）

#### 组件概述
- **用途**：文件上传、图片上传
- **特点**：毛玻璃效果背景，拖拽上传支持

#### 组件样式
```css
.fg-upload {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border: 2px dashed rgba(229, 231, 235, 0.5);
    border-radius: 0.5rem;
    padding: 2rem;
    text-align: center;
    transition: all 0.2s ease;
}

.fg-upload:hover {
    border-color: rgba(59, 130, 246, 0.5);
    background: rgba(255, 255, 255, 0.8);
}

.fg-upload-dragging {
    border-color: #3B82F6;
    background: rgba(59, 130, 246, 0.1);
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
.fg-icon {
    /* 图标基础样式 */
    width: 1.25rem;
    height: 1.25rem;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}

/* 填充图标 */
.fg-icon-filled {
    fill: currentColor;
    stroke: none;
}

/* 线条图标 */
.fg-icon-outline {
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
    --fg-icon-xs: 0.75rem;   /* 12px */
    --fg-icon-sm: 1rem;     /* 16px */
    --fg-icon-md: 1.25rem;  /* 20px */
    --fg-icon-lg: 1.5rem;   /* 24px */
    --fg-icon-xl: 2rem;     /* 32px */
}
```

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 行为
```css
.fg-hoverable {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.fg-hoverable:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

**Hover 特点**：
- 背景色变化：毛玻璃效果背景色加深
- 位置变化：轻微向上移动
- 阴影变化：阴影加深，增强层次感
- 过渡时间：200ms

### Active 行为
```css
.fg-clickable:active {
    transform: translateY(0);
    background: rgba(255, 255, 255, 0.9);
}
```

**Active 特点**：
- 位置变化：回到原位
- 背景色变化：背景色进一步加深
- 过渡时间：150ms

### Focus 行为
```css
.fg-focusable:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    border-color: rgba(59, 130, 246, 0.8);
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
    --fg-ease-default: cubic-bezier(0.4, 0, 0.2, 1);

    /* 快速缓动 */
    --fg-ease-in: cubic-bezier(0.4, 0, 1, 1);

    /* 慢速缓动 */
    --fg-ease-out: cubic-bezier(0, 0, 0.2, 1);

    /* 弹性缓动 */
    --fg-ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* 动效时长 */
:root {
    --fg-duration-fast: 150ms;
    --fg-duration-normal: 200ms;
    --fg-duration-slow: 300ms;
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
    --fg-primary-50: #EFF6FF;
    --fg-primary-100: #DBEAFE;
    --fg-primary-200: #BFDBFE;
    --fg-primary-300: #93C5FD;
    --fg-primary-400: #60A5FA;
    --fg-primary-500: #3B82F6;
    --fg-primary-600: #2563EB;
    --fg-primary-700: #1D4ED8;
    --fg-primary-800: #1E40AF;
    --fg-primary-900: #1E3A8A;

    /* 毛玻璃背景 */
    --fg-bg-100: rgba(255, 255, 255, 0.5);
    --fg-bg-200: rgba(255, 255, 255, 0.7);
    --fg-bg-300: rgba(255, 255, 255, 0.85);
    --fg-bg-400: rgba(255, 255, 255, 0.95);

    /* 文字颜色 */
    --fg-text-100: rgba(17, 24, 39, 0.4);
    --fg-text-200: rgba(17, 24, 39, 0.6);
    --fg-text-300: rgba(17, 24, 39, 0.8);
    --fg-text-400: rgba(17, 24, 39, 0.9);
    --fg-text-500: rgba(17, 24, 39, 1);

    /* 边框颜色 */
    --fg-border-100: rgba(255, 255, 255, 0.2);
    --fg-border-200: rgba(255, 255, 255, 0.3);
    --fg-border-300: rgba(255, 255, 255, 0.4);
    --fg-border-400: rgba(255, 255, 255, 0.5);

    /* 阴影颜色 */
    --fg-shadow-100: rgba(0, 0, 0, 0.05);
    --fg-shadow-200: rgba(0, 0, 0, 0.1);
    --fg-shadow-300: rgba(0, 0, 0, 0.15);
    --fg-shadow-400: rgba(0, 0, 0, 0.2);
}
```

### Spacing Tokens
```css
:root {
    --fg-space-0: 0;
    --fg-space-1: 0.25rem;   /* 4px */
    --fg-space-2: 0.5rem;    /* 8px */
    --fg-space-3: 0.75rem;   /* 12px */
    --fg-space-4: 1rem;      /* 16px */
    --fg-space-5: 1.25rem;   /* 20px */
    --fg-space-6: 1.5rem;    /* 24px */
    --fg-space-7: 1.75rem;   /* 28px */
    --fg-space-8: 2rem;      /* 32px */
    --fg-space-9: 2.25rem;   /* 36px */
    --fg-space-10: 2.5rem;   /* 40px */
    --fg-space-12: 3rem;     /* 48px */
    --fg-space-16: 4rem;     /* 64px */
    --fg-space-20: 5rem;     /* 80px */
    --fg-space-24: 6rem;     /* 96px */
}
```

### Radius Tokens
```css
:root {
    --fg-radius-none: 0;
    --fg-radius-sm: 0.125rem;   /* 2px */
    --fg-radius-md: 0.25rem;    /* 4px */
    --fg-radius-lg: 0.375rem;   /* 6px */
    --fg-radius-xl: 0.5rem;     /* 8px */
    --fg-radius-2xl: 0.75rem;   /* 12px */
    --fg-radius-3xl: 1rem;      /* 16px */
    --fg-radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
    --fg-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --fg-shadow-md: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --fg-shadow-lg: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --fg-shadow-xl: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --fg-shadow-2xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --fg-shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}
```

### Typography Tokens
```css
:root {
    /* 字体家族 */
    --fg-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --fg-font-serif: Georgia, Cambria, "Times New Roman", Times, serif;
    --fg-font-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;

    /* 字号 */
    --fg-text-xs: 0.75rem;    /* 12px */
    --fg-text-sm: 0.875rem;   /* 14px */
    --fg-text-base: 1rem;     /* 16px */
    --fg-text-lg: 1.125rem;   /* 18px */
    --fg-text-xl: 1.25rem;    /* 20px */
    --fg-text-2xl: 1.5rem;    /* 24px */
    --fg-text-3xl: 1.875rem;  /* 30px */
    --fg-text-4xl: 2.25rem;   /* 36px */
    --fg-text-5xl: 3rem;      /* 48px */

    /* 字重 */
    --fg-font-thin: 100;
    --fg-font-extralight: 200;
    --fg-font-light: 300;
    --fg-font-normal: 400;
    --fg-font-medium: 500;
    --fg-font-semibold: 600;
    --fg-font-bold: 700;
    --fg-font-extrabold: 800;
    --fg-font-black: 900;

    /* 行高 */
    --fg-leading-none: 1;
    --fg-leading-tight: 1.25;
    --fg-leading-snug: 1.375;
    --fg-leading-normal: 1.5;
    --fg-leading-relaxed: 1.625;
    --fg-leading-loose: 2;
}
```

### Animation Tokens
```css
:root {
    /* 缓动函数 */
    --fg-ease-linear: linear;
    --fg-ease-in: cubic-bezier(0.4, 0, 1, 1);
    --fg-ease-out: cubic-bezier(0, 0, 0.2, 1);
    --fg-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

    /* 动效时长 */
    --fg-duration-75: 75ms;
    --fg-duration-100: 100ms;
    --fg-duration-150: 150ms;
    --fg-duration-200: 200ms;
    --fg-duration-300: 300ms;
    --fg-duration-500: 500ms;
    --fg-duration-700: 700ms;
    --fg-duration-1000: 1000ms;
}
```

### Blur Tokens
```css
:root {
    /* 背景模糊 */
    --fg-blur-sm: 4px;
    --fg-blur-md: 8px;
    --fg-blur-lg: 12px;
    --fg-blur-xl: 16px;
    --fg-blur-2xl: 24px;
    --fg-blur-3xl: 40px;
    --fg-blur-full: 64px;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）

#### ✅ 可以学习的规则
1. **毛玻璃效果原理**
   - 使用 `backdrop-filter: blur()` 实现背景模糊
   - 使用半透明背景色 `rgba()` 或 `hsla()`
   - 结合边框和阴影增强层次感

2. **色彩系统**
   - 主色调的选择和使用
   - 中性色的透明度变化
   - 语义色的应用场景

3. **排版系统**
   - 字体家族的选择
   - 字号层级的设计
   - 行高和字间距的控制

4. **组件设计**
   - 组件的变体和状态设计
   - 组件的尺寸和间距规范
   - 组件的交互和动效设计

5. **布局系统**
   - 栅格系统的设计
   - 响应式断点的设置
   - 间距系统的应用

#### ✅ 可以学习的风格
1. **视觉风格**
   - 毛玻璃效果的视觉层次
   - 半透明背景的使用
   - 轻盈、通透的视觉感受

2. **交互风格**
   - 克制的动效设计
   - 清晰的反馈机制
   - 流畅的过渡效果

3. **组件风格**
   - 统一的圆角处理
   - 一致的阴影效果
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
- 深入理解毛玻璃效果的设计原理
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
--fg-primary-500: #3B82F6;
--fg-bg-200: rgba(255, 255, 255, 0.7);
--fg-text-400: rgba(17, 24, 39, 0.9);

/* 间距 */
--fg-space-4: 1rem;
--fg-space-6: 1.5rem;
--fg-space-8: 2rem;

/* 圆角 */
--fg-radius-lg: 0.375rem;
--fg-radius-xl: 0.5rem;

/* 阴影 */
--fg-shadow-md: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

/* 模糊 */
--fg-blur-2xl: 24px;
```

### 组件类名速查表
```css
/* 按钮 */
.fg-button-primary
.fg-button-secondary
.fg-button-text
.fg-button-disabled

/* 卡片 */
.fg-card
.fg-card-hoverable

/* 输入框 */
.fg-input
.fg-input-error
.fg-input-disabled

/* 导航 */
.fg-nav
.fg-nav-item
.fg-nav-item-active

/* 上传 */
.fg-upload
.fg-upload-dragging
```

### 常用代码片段
```css
/* 毛玻璃效果基础样式 */
.frosted-glass {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* 悬停效果 */
.frosted-glass:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 焦点效果 */
.frosted-glass:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}
```

---

**设计系统版本**：v1.0.0
**最后更新**：2026-02-01
**维护者**：Design System Team
