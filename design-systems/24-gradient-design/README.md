# 渐变设计（Gradient Design）设计规范

---

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **色彩流动**（Color Flow）- 通过渐变色彩创造视觉流动感
- **现代感**（Modern）- 体现当代设计趋势
- **层次感**（Depth）- 通过色彩渐变建立空间层次
- **活力**（Vibrant）- 充满生命力和动感
- **简洁**（Clean）- 保持整体视觉的简洁性

### 适用产品类型
- **创意类产品**：设计工具、创意平台、艺术应用
- **消费类应用**：时尚电商、生活方式、娱乐内容
- **品牌展示**：企业官网、产品落地页、品牌宣传
- **社交媒体**：用户生成内容平台、图片分享应用
- **教育科技**：在线学习平台、知识分享社区

### 设计哲学
渐变设计通过色彩的自然过渡创造视觉吸引力，强调色彩的情感表达和视觉冲击力。它打破了传统单色设计的限制，通过色彩渐变建立空间层次和视觉焦点，同时保持整体设计的简洁性和现代感。

---

## 2. 颜色系统（Color System）

### 主色渐变（Primary Gradients）

#### 主渐变 - 蓝紫系
```css
/* 主渐变 - 蓝紫系 */
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-primary-hover: linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%);
--gradient-primary-active: linear-gradient(135deg, #4e5fc2 0%, #5e377e 100%);

/* 使用场景 */
- 主要按钮背景
- 重要操作区域
- 品牌标识元素
- 页面主视觉区域
```

#### 次渐变 - 粉橙系
```css
/* 次渐变 - 粉橙系 */
--gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--gradient-secondary-hover: linear-gradient(135deg, #d37ee3 0%, #d94c5f 100%);
--gradient-secondary-active: linear-gradient(135deg, #b669d0 0%, #bd4152 100%);

/* 使用场景 */
- 次要按钮背景
- 强调元素
- 标签和徽章
- 装饰性元素
```

#### 辅助渐变 - 青绿系
```css
/* 辅助渐变 - 青绿系 */
--gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
--gradient-accent-hover: linear-gradient(135deg, #4395e0 0%, #00d9e3 100%);
--gradient-accent-active: linear-gradient(135deg, #3688c2 0%, #00c0c8 100%);

/* 使用场景 */
- 信息提示
- 成功状态
- 辅助功能
- 数据可视化
```

### 中性色渐变（Neutral Gradients）

#### 浅色渐变
```css
/* 浅色渐变 - 用于背景 */
--gradient-bg-light: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
--gradient-bg-light-alt: linear-gradient(135deg, #fafbfc 0%, #f0f1f3 100%);

/* 使用场景 */
- 页面主背景
- 卡片背景
- 模态框背景
- 浅色主题
```

#### 深色渐变
```css
/* 深色渐变 - 用于深色模式 */
--gradient-bg-dark: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
--gradient-bg-dark-alt: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);

/* 使用场景 */
- 深色模式背景
- 夜间模式
- 暗色主题
- 沉浸式体验
```

### 语义色渐变（Semantic Gradients）

#### 成功渐变
```css
/* 成功渐变 */
--gradient-success: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
--gradient-success-light: linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%);

/* 使用场景 */
- 成功提示
- 完成状态
- 积极反馈
- 成功操作
```

#### 警告渐变
```css
/* 警告渐变 */
--gradient-warning: linear-gradient(135deg, #f2994a 0%, #f2c94c 100%);
--gradient-warning-light: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);

/* 使用场景 */
- 警告提示
- 注意事项
- 待处理状态
- 潜在风险
```

#### 错误渐变
```css
/* 错误渐变 */
--gradient-error: linear-gradient(135deg, #eb3349 0%, #f45c43 100%);
--gradient-error-light: linear-gradient(135deg, #ff7675 0%, #d63031 100%);

/* 使用场景 */
- 错误提示
- 失败状态
- 危险操作
- 负面反馈
```

#### 信息渐变
```css
/* 信息渐变 */
--gradient-info: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
--gradient-info-light: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);

/* 使用场景 */
- 信息提示
- 帮助说明
- 一般通知
- 提示信息
```

### 特殊渐变效果（Special Gradients）

#### 玻璃态渐变
```css
/* 玻璃态渐变 */
--gradient-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
--gradient-glass-dark: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);

/* 使用场景 */
- 玻璃态卡片
- 毛玻璃效果
- 半透明元素
- 现代UI组件
```

#### 霓虹渐变
```css
/* 霓虹渐变 */
--gradient-neon: linear-gradient(135deg, #00f260 0%, #0575e6 100%);
--gradient-neon-alt: linear-gradient(135deg, #f857a6 0%, #ff5858 100%);

/* 使用场景 */
- 夜间模式
- 赛博朋克风格
- 暗色主题
- 创意设计
```

#### 极光渐变
```css
/* 极光渐变 */
--gradient-aurora: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
--gradient-aurora-alt: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%);

/* 使用场景 */
- 柔和背景
- 创意设计
- 品牌展示
- 艺术效果
```

### 渐变使用原则

#### 渐变角度
```css
/* 推荐渐变角度 */
--gradient-angle-45: 45deg;      /* 45度 - 动感 */
--gradient-angle-90: 90deg;      /* 90度 - 垂直 */
--gradient-angle-135: 135deg;    /* 135度 - 标准 */
--gradient-angle-180: 180deg;    /* 180度 - 水平 */

/* 使用建议 */
- 135度：最常用，自然流动感
- 45度：动感强烈，适合强调
- 90度/180度：简洁稳重，适合背景
```

#### 渐变色彩数量
```css
/* 双色渐变 - 最常用 */
--gradient-2-color: linear-gradient(135deg, #color1 0%, #color2 100%);

/* 三色渐变 - 丰富层次 */
--gradient-3-color: linear-gradient(135deg, #color1 0%, #color2 50%, #color3 100%);

/* 多色渐变 - 创意效果 */
--gradient-multi-color: linear-gradient(135deg, #color1 0%, #color2 25%, #color3 50%, #color4 75%, #color5 100%);

/* 使用建议 */
- 双色：简洁清晰，适合UI组件
- 三色：层次丰富，适合背景
- 多色：创意效果，适合特殊场景
```

#### 渐变色彩分布
```css
/* 均匀分布 */
--gradient-even: linear-gradient(135deg, #color1 0%, #color2 100%);

/* 不均匀分布 */
--gradient-asymmetric: linear-gradient(135deg, #color1 0%, #color1 30%, #color2 100%);

/* 使用建议 */
- 均匀：平衡稳定，适合常规使用
- 不均匀：视觉焦点，适合强调重点
```

### Design Token 命名建议

```css
/* 命名规则：--gradient-{category}-{variant}-{state} */

/* 类别 */
- primary: 主色
- secondary: 次色
- accent: 辅助色
- success: 成功
- warning: 警告
- error: 错误
- info: 信息
- bg: 背景
- glass: 玻璃态
- neon: 霓虹
- aurora: 极光

/* 变体 */
- default: 默认
- light: 浅色
- dark: 深色
- alt: 备选

/* 状态 */
- default: 默认
- hover: 悬停
- active: 激活
- disabled: 禁用

/* 示例 */
--gradient-primary-default
--gradient-primary-hover
--gradient-bg-light
--gradient-success-light
```

---

## 3. 字体与排版（Typography）

### 字体家族

#### 主字体
```css
/* 英文主字体 */
--font-family-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

/* 中文主字体 */
--font-family-primary-zh: "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif;

/* 组合字体 */
--font-family-base: var(--font-family-primary), var(--font-family-primary-zh);

/* 使用场景 */
- 页面正文
- UI组件文字
- 常规文本内容
```

#### 标题字体
```css
/* 标题字体 */
--font-family-heading: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

/* 使用场景 */
- 页面标题
- 章节标题
- 品牌标识
```

#### 代码字体
```css
/* 代码字体 */
--font-family-mono: "SF Mono", "Monaco", "Inconsolata", "Fira Code", "Droid Sans Mono", "Source Code Pro", monospace;

/* 使用场景 */
- 代码展示
- 技术文档
- 数据显示
```

### 字号层级

#### 标题字号
```css
/* H1 - 页面主标题 */
--font-size-h1: 2.5rem;      /* 40px */
--font-size-h1-mobile: 2rem;  /* 32px */

/* H2 - 章节标题 */
--font-size-h2: 2rem;         /* 32px */
--font-size-h2-mobile: 1.5rem; /* 24px */

/* H3 - 子章节标题 */
--font-size-h3: 1.5rem;       /* 24px */
--font-size-h3-mobile: 1.25rem; /* 20px */

/* H4 - 小标题 */
--font-size-h4: 1.25rem;      /* 20px */
--font-size-h4-mobile: 1rem;   /* 16px */

/* H5 - 标签标题 */
--font-size-h5: 1rem;         /* 16px */
--font-size-h5-mobile: 0.875rem; /* 14px */

/* H6 - 小标签标题 */
--font-size-h6: 0.875rem;     /* 14px */
--font-size-h6-mobile: 0.75rem; /* 12px */
```

#### 正文字号
```css
/* Body - 正文 */
--font-size-body: 1rem;         /* 16px */
--font-size-body-mobile: 0.9375rem; /* 15px */

/* Small - 小字 */
--font-size-small: 0.875rem;     /* 14px */
--font-size-small-mobile: 0.8125rem; /* 13px */

/* Tiny - 极小字 */
--font-size-tiny: 0.75rem;       /* 12px */
--font-size-tiny-mobile: 0.6875rem; /* 11px */

/* Caption - 说明文字 */
--font-size-caption: 0.8125rem; /* 13px */
--font-size-caption-mobile: 0.75rem; /* 12px */
```

### 字重系统

```css
/* Light - 细体 */
--font-weight-light: 300;
/* 使用场景：辅助说明、次要信息 */

/* Regular - 常规 */
--font-weight-regular: 400;
/* 使用场景：正文内容、常规文字 */

/* Medium - 中等 */
--font-weight-medium: 500;
/* 使用场景：强调文字、重要信息 */

/* SemiBold - 半粗 */
--font-weight-semibold: 600;
/* 使用场景：小标题、按钮文字 */

/* Bold - 粗体 */
--font-weight-bold: 700;
/* 使用场景：大标题、强调内容 */

/* ExtraBold - 特粗 */
--font-weight-extrabold: 800;
/* 使用场景：品牌标识、特殊强调 */
```

### 行高系统

```css
/* 标题行高 */
--line-height-heading: 1.25;
--line-height-heading-tight: 1.15;

/* 正文行高 */
--line-height-body: 1.5;
--line-height-body-relaxed: 1.625;

/* 小字行高 */
--line-height-small: 1.4;
--line-height-small-relaxed: 1.5;

/* 单行行高 */
--line-height-single: 1;
```

### 字间距系统

```css
/* 标题字间距 */
--letter-spacing-heading: -0.02em;
--letter-spacing-heading-wide: 0.05em;

/* 正文字间距 */
--letter-spacing-body: 0;
--letter-spacing-body-wide: 0.01em;

/* 大写字间距 */
--letter-spacing-uppercase: 0.05em;
--letter-spacing-uppercase-wide: 0.1em;

/* 代码字间距 */
--letter-spacing-mono: 0;
```

### 排版节奏

#### 段落间距
```css
/* 段落间距 */
--spacing-paragraph: 1.5rem;     /* 24px */
--spacing-paragraph-mobile: 1.25rem; /* 20px */

/* 列表间距 */
--spacing-list: 0.75rem;         /* 12px */
--spacing-list-mobile: 0.625rem; /* 10px */
```

#### 标题间距
```css
/* 标题下间距 */
--spacing-heading-bottom: 1rem;  /* 16px */
--spacing-heading-bottom-mobile: 0.75rem; /* 12px */

/* 标题上间距 */
--spacing-heading-top: 2rem;     /* 32px */
--spacing-heading-top-mobile: 1.5rem; /* 24px */
```

### 响应式排版

```css
/* 移动端（< 640px） */
@media (max-width: 639px) {
    html {
        font-size: 14px;
    }
}

/* 平板端（640px - 1024px） */
@media (min-width: 640px) and (max-width: 1023px) {
    html {
        font-size: 15px;
    }
}

/* 桌面端（≥ 1024px） */
@media (min-width: 1024px) {
    html {
        font-size: 16px;
    }
}
```

### 文字渐变效果

```css
/* 渐变文字 */
.text-gradient {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* 渐变文字变体 */
.text-gradient-primary {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.text-gradient-secondary {
    background: var(--gradient-secondary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.text-gradient-accent {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* 使用场景 */
- 页面主标题
- 品牌标识
- 强调文字
- 创意设计
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度

```css
/* 版心宽度 */
--container-width-sm: 640px;    /* 小屏幕 */
--container-width-md: 768px;    /* 中等屏幕 */
--container-width-lg: 1024px;   /* 大屏幕 */
--container-width-xl: 1280px;   /* 超大屏幕 */
--container-width-2xl: 1536px;  /* 特大屏幕 */

/* 容器最大宽度 */
--container-max-width: 1400px;

/* 使用场景 */
- 内容容器
- 页面布局
- 响应式设计
```

### 栅格系统

#### 12列栅格
```css
/* 栅格列数 */
--grid-columns: 12;

/* 栅格间距 */
--grid-gap-xs: 0.5rem;   /* 8px */
--grid-gap-sm: 0.75rem;  /* 12px */
--grid-gap-md: 1rem;     /* 16px */
--grid-gap-lg: 1.5rem;   /* 24px */
--grid-gap-xl: 2rem;     /* 32px */
--grid-gap-2xl: 3rem;    /* 48px */

/* 栅格边距 */
--grid-margin-xs: 0.5rem;   /* 8px */
--grid-margin-sm: 1rem;     /* 16px */
--grid-margin-md: 1.5rem;   /* 24px */
--grid-margin-lg: 2rem;     /* 32px */
--grid-margin-xl: 2.5rem;   /* 40px */
--grid-margin-2xl: 3rem;    /* 48px */
```

#### 栅格断点
```css
/* 断点定义 */
--breakpoint-xs: 480px;    /* 超小屏幕 */
--breakpoint-sm: 640px;    /* 小屏幕 */
--breakpoint-md: 768px;    /* 中等屏幕 */
--breakpoint-lg: 1024px;   /* 大屏幕 */
--breakpoint-xl: 1280px;   /* 超大屏幕 */
--breakpoint-2xl: 1536px;  /* 特大屏幕 */

/* 响应式断点 */
@media (max-width: 479px) { /* 超小屏幕 */ }
@media (min-width: 480px) and (max-width: 639px) { /* 小屏幕 */ }
@media (min-width: 640px) and (max-width: 767px) { /* 中等屏幕 */ }
@media (min-width: 768px) and (max-width: 1023px) { /* 大屏幕 */ }
@media (min-width: 1024px) and (max-width: 1279px) { /* 超大屏幕 */ }
@media (min-width: 1280px) { /* 特大屏幕 */ }
```

### 间距系统

#### 基础间距
```css
/* 间距基准：4px */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-7: 1.75rem;   /* 28px */
--space-8: 2rem;      /* 32px */
--space-9: 2.25rem;   /* 36px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-14: 3.5rem;   /* 56px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-28: 7rem;     /* 112px */
--space-32: 8rem;     /* 128px */
```

#### 间距使用场景
```css
/* 元素内边距 */
--padding-xs: var(--space-1);   /* 4px */
--padding-sm: var(--space-2);   /* 8px */
--padding-md: var(--space-3);   /* 12px */
--padding-lg: var(--space-4);   /* 16px */
--padding-xl: var(--space-6);   /* 24px */
--padding-2xl: var(--space-8);  /* 32px */

/* 元素外边距 */
--margin-xs: var(--space-1);    /* 4px */
--margin-sm: var(--space-2);    /* 8px */
--margin-md: var(--space-3);    /* 12px */
--margin-lg: var(--space-4);    /* 16px */
--margin-xl: var(--space-6);    /* 24px */
--margin-2xl: var(--space-8);   /* 32px */
```

### 留白密度

#### 信息密度判断
```css
/* 高密度 - 信息密集型 */
--spacing-density-high: var(--space-2);  /* 8px */

/* 中密度 - 常规信息 */
--spacing-density-medium: var(--space-4); /* 16px */

/* 低密度 - 轻松阅读 */
--spacing-density-low: var(--space-6);   /* 24px */

/* 使用场景 */
- 高密度：数据表格、列表视图
- 中密度：常规内容、表单
- 低密度：营销页面、品牌展示
```

### 布局模式

#### 固定布局
```css
.container-fixed {
    width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--grid-margin-lg);
}

/* 使用场景 */
- 内容密集型页面
- 固定宽度设计
- 品牌展示页面
```

#### 流式布局
```css
.container-fluid {
    width: 100%;
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--grid-margin-lg);
}

/* 使用场景 */
- 响应式页面
- 自适应设计
- 多设备兼容
```

#### 弹性布局
```css
.container-flex {
    display: flex;
    flex-direction: column;
    gap: var(--grid-gap-md);
}

/* 使用场景 */
- 组件内部布局
- 灵活排列
- 响应式调整
```

#### 网格布局
```css
.container-grid {
    display: grid;
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    gap: var(--grid-gap-md);
}

/* 使用场景 */
- 复杂页面布局
- 多列布局
- 响应式网格
```

### 渐变背景布局

#### 全屏渐变背景
```css
/* 全屏渐变背景 */
.background-gradient-full {
    background: var(--gradient-primary);
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}

/* 使用场景 */
- 营销页面
- 品牌展示
- 创意设计
```

#### 区域渐变背景
```css
/* 区域渐变背景 */
.background-gradient-section {
    background: var(--gradient-bg-light);
    padding: var(--space-16) 0;
}

/* 使用场景 */
- 章节背景
- 内容分区
- 视觉分隔
```

#### 卡片渐变背景
```css
/* 卡片渐变背景 */
.background-gradient-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
    backdrop-filter: blur(10px);
}

/* 使用场景 */
- 玻璃态卡片
- 半透明元素
- 现代UI组件
```

---

## 5. 核心 UI 组件规范（Component System）

### 按钮（Button）

#### 组件概述
- 组件名称：按钮（Button）
- 组件描述：支持渐变背景的按钮组件，提供多种变体和状态
- 适用场景：表单提交、操作触发、导航跳转

#### 组件变体

##### 主按钮（Primary）
```css
.btn-primary {
    background: var(--gradient-primary);
    color: #FFFFFF;
    border: none;
    border-radius: var(--radius-md);
    padding: var(--padding-md) var(--padding-lg);
    font-weight: var(--font-weight-semibold);
    transition: all var(--transition-fast);
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover {
    background: var(--gradient-primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-primary:active {
    background: var(--gradient-primary-active);
    transform: translateY(0);
}

/* 使用场景 */
- 主要操作
- 提交表单
- 确认操作
```

##### 次按钮（Secondary）
```css
.btn-secondary {
    background: var(--gradient-secondary);
    color: #FFFFFF;
    border: none;
    border-radius: var(--radius-md);
    padding: var(--padding-md) var(--padding-lg);
    font-weight: var(--font-weight-semibold);
    transition: all var(--transition-fast);
    box-shadow: 0 2px 8px rgba(240, 147, 251, 0.3);
}

.btn-secondary:hover {
    background: var(--gradient-secondary-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(240, 147, 251, 0.4);
}

.btn-secondary:active {
    background: var(--gradient-secondary-active);
    transform: translateY(0);
}

/* 使用场景 */
- 次要操作
- 强调操作
- 创意设计
```

##### 渐变边框按钮（Gradient Border）
```css
.btn-gradient-border {
    background: transparent;
    color: var(--color-primary);
    border: 2px solid;
    border-image: var(--gradient-primary) 1;
    border-radius: var(--radius-md);
    padding: calc(var(--padding-md) - 2px) calc(var(--padding-lg) - 2px);
    font-weight: var(--font-weight-semibold);
    transition: all var(--transition-fast);
}

.btn-gradient-border:hover {
    background: var(--gradient-primary);
    color: #FFFFFF;
    border-image: none;
    border: 2px solid transparent;
}

/* 使用场景 */
- 轻量操作
- 创意设计
- 视觉强调
```

##### 文字按钮（Text）
```css
.btn-text {
    background: transparent;
    color: var(--color-primary);
    border: none;
    padding: var(--padding-sm) var(--padding-md);
    font-weight: var(--font-weight-medium);
    transition: all var(--transition-fast);
}

.btn-text:hover {
    background: rgba(102, 126, 234, 0.1);
}

/* 使用场景 */
- 轻量操作
- 链接式按钮
- 辅助操作
```

##### 禁用按钮（Disabled）
```css
.btn-disabled {
    background: var(--color-gray-200);
    color: var(--color-gray-400);
    border: none;
    border-radius: var(--radius-md);
    padding: var(--padding-md) var(--padding-lg);
    font-weight: var(--font-weight-semibold);
    cursor: not-allowed;
    opacity: 0.6;
}

/* 使用场景 */
- 不可点击状态
- 禁用操作
- 等待状态
```

#### 组件尺寸
```css
/* 小号按钮 */
.btn-small {
    padding: var(--padding-sm) var(--padding-md);
    font-size: var(--font-size-small);
    border-radius: var(--radius-sm);
}

/* 中号按钮 */
.btn-medium {
    padding: var(--padding-md) var(--padding-lg);
    font-size: var(--font-size-body);
    border-radius: var(--radius-md);
}

/* 大号按钮 */
.btn-large {
    padding: var(--padding-lg) var(--padding-xl);
    font-size: var(--font-size-h5);
    border-radius: var(--radius-lg);
}

/* 超大按钮 */
.btn-xlarge {
    padding: var(--padding-xl) var(--padding-2xl);
    font-size: var(--font-size-h4);
    border-radius: var(--radius-lg);
}
```

#### 组件状态
```css
/* 默认状态 */
.btn-default {
    /* 默认样式 */
}

/* 悬停状态 */
.btn-hover {
    /* 悬停样式 */
}

/* 激活状态 */
.btn-active {
    /* 激活样式 */
}

/* 焦点状态 */
.btn-focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

/* 加载状态 */
.btn-loading {
    position: relative;
    pointer-events: none;
    opacity: 0.8;
}

.btn-loading::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    top: 50%;
    left: 50%;
    margin-left: -8px;
    margin-top: -8px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: #FFFFFF;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
}
```

#### 组件API
```typescript
interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'gradient-border' | 'text' | 'disabled';
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
}
```

### 卡片（Card）

#### 组件概述
- 组件名称：卡片（Card）
- 组件描述：支持渐变背景的卡片组件，提供多种变体和效果
- 适用场景：信息展示、数据展示、内容分组

#### 组件变体

##### 基础卡片（Basic）
```css
.card-basic {
    background: #FFFFFF;
    border: 1px solid var(--color-gray-200);
    border-radius: var(--radius-lg);
    padding: var(--padding-xl);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all var(--transition-fast);
}

.card-basic:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
}

/* 使用场景 */
- 常规内容展示
- 信息分组
- 数据展示
```

##### 渐变卡片（Gradient）
```css
.card-gradient {
    background: var(--gradient-primary);
    color: #FFFFFF;
    border-radius: var(--radius-lg);
    padding: var(--padding-xl);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    transition: all var(--transition-fast);
}

.card-gradient:hover {
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
    transform: translateY(-4px);
}

/* 使用场景 */
- 强调内容
- 品牌展示
- 创意设计
```

##### 玻璃态卡片（Glass）
```css
.card-glass {
    background: var(--gradient-glass);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-lg);
    padding: var(--padding-xl);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transition: all var(--transition-fast);
}

.card-glass:hover {
    background: var(--gradient-glass-hover);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
}

/* 使用场景 */
- 现代UI设计
- 半透明效果
- 创意展示
```

##### 悬浮卡片（Hover）
```css
.card-hover {
    background: #FFFFFF;
    border: 1px solid var(--color-gray-200);
    border-radius: var(--radius-lg);
    padding: var(--padding-xl);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all var(--transition-fast);
    cursor: pointer;
}

.card-hover:hover {
    background: var(--gradient-bg-light);
    border-color: var(--color-primary);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
    transform: translateY(-4px);
}

/* 使用场景 */
- 可交互卡片
- 导航卡片
- 选择卡片
```

#### 组件尺寸
```css
/* 小号卡片 */
.card-small {
    padding: var(--padding-md);
    border-radius: var(--radius-md);
}

/* 中号卡片 */
.card-medium {
    padding: var(--padding-lg);
    border-radius: var(--radius-lg);
}

/* 大号卡片 */
.card-large {
    padding: var(--padding-2xl);
    border-radius: var(--radius-xl);
}
```

#### 组件API
```typescript
interface CardProps {
    variant?: 'basic' | 'gradient' | 'glass' | 'hover';
    size?: 'small' | 'medium' | 'large';
    hoverable?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
}
```

### 输入框（Input）

#### 组件概述
- 组件名称：输入框（Input）
- 组件描述：支持渐变边框和背景的输入框组件
- 适用场景：表单输入、搜索框、文本编辑

#### 组件变体

##### 默认输入框（Default）
```css
.input-default {
    width: 100%;
    padding: var(--padding-md) var(--padding-lg);
    background: #FFFFFF;
    border: 1px solid var(--color-gray-300);
    border-radius: var(--radius-md);
    font-size: var(--font-size-body);
    transition: all var(--transition-fast);
}

.input-default:hover {
    border-color: var(--color-primary);
}

.input-default:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* 使用场景 */
- 常规文本输入
- 表单字段
- 搜索框
```

##### 渐变边框输入框（Gradient Border）
```css
.input-gradient-border {
    width: 100%;
    padding: var(--padding-md) var(--padding-lg);
    background: #FFFFFF;
    border: 2px solid transparent;
    border-radius: var(--radius-md);
    font-size: var(--font-size-body);
    transition: all var(--transition-fast);
    background-clip: padding-box;
    position: relative;
}

.input-gradient-border::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
    background: var(--gradient-primary);
}

.input-gradient-border:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* 使用场景 */
- 强调输入框
- 创意设计
- 视觉强调
```

##### 错误输入框（Error）
```css
.input-error {
    width: 100%;
    padding: var(--padding-md) var(--padding-lg);
    background: #FFFFFF;
    border: 2px solid var(--color-error);
    border-radius: var(--radius-md);
    font-size: var(--font-size-body);
    transition: all var(--transition-fast);
}

.input-error:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(235, 51, 73, 0.1);
}

/* 使用场景 */
- 输入验证失败
- 错误状态
- 警告提示
```

##### 禁用输入框（Disabled）
```css
.input-disabled {
    width: 100%;
    padding: var(--padding-md) var(--padding-lg);
    background: var(--color-gray-100);
    border: 1px solid var(--color-gray-200);
    border-radius: var(--radius-md);
    font-size: var(--font-size-body);
    color: var(--color-gray-400);
    cursor: not-allowed;
}

/* 使用场景 */
- 不可编辑状态
- 禁用字段
- 只读内容
```

#### 组件尺寸
```css
/* 小号输入框 */
.input-small {
    padding: var(--padding-sm) var(--padding-md);
    font-size: var(--font-size-small);
    border-radius: var(--radius-sm);
}

/* 中号输入框 */
.input-medium {
    padding: var(--padding-md) var(--padding-lg);
    font-size: var(--font-size-body);
    border-radius: var(--radius-md);
}

/* 大号输入框 */
.input-large {
    padding: var(--padding-lg) var(--padding-xl);
    font-size: var(--font-size-h5);
    border-radius: var(--radius-lg);
}
```

#### 组件API
```typescript
interface InputProps {
    variant?: 'default' | 'gradient-border' | 'error' | 'disabled';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    error?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}
```

### 导航（Navigation）

#### 组件概述
- 组件名称：导航（Navigation）
- 组件描述：支持渐变背景的导航组件
- 适用场景：页面导航、菜单导航、标签导航

#### 组件变体

##### 顶部导航（Top Navigation）
```css
.nav-top {
    background: var(--gradient-primary);
    color: #FFFFFF;
    padding: var(--padding-md) var(--padding-lg);
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.nav-top-item {
    color: rgba(255, 255, 255, 0.8);
    padding: var(--padding-sm) var(--padding-md);
    border-radius: var(--radius-sm);
    transition: all var(--transition-fast);
}

.nav-top-item:hover,
.nav-top-item.active {
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.1);
}

/* 使用场景 */
- 页面顶部导航
- 主要导航
- 品牌导航
```

##### 侧边导航（Side Navigation）
```css
.nav-side {
    background: var(--gradient-bg-light);
    border-right: 1px solid var(--color-gray-200);
    padding: var(--padding-lg);
}

.nav-side-item {
    color: var(--color-text-secondary);
    padding: var(--padding-md) var(--padding-lg);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    display: flex;
    align-items: center;
    gap: var(--space-3);
}

.nav-side-item:hover {
    background: var(--gradient-primary);
    color: #FFFFFF;
}

.nav-side-item.active {
    background: var(--gradient-primary);
    color: #FFFFFF;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

/* 使用场景 */
- 侧边栏导航
- 多级导航
- 复杂导航
```

##### 标签导航（Tab Navigation）
```css
.nav-tabs {
    display: flex;
    gap: var(--space-2);
    padding: var(--padding-sm);
    background: var(--color-gray-100);
    border-radius: var(--radius-md);
}

.nav-tab-item {
    padding: var(--padding-sm) var(--padding-md);
    border-radius: var(--radius-sm);
    color: var(--color-text-secondary);
    transition: all var(--transition-fast);
}

.nav-tab-item:hover {
    background: rgba(102, 126, 234, 0.1);
    color: var(--color-primary);
}

.nav-tab-item.active {
    background: var(--gradient-primary);
    color: #FFFFFF;
    box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
}

/* 使用场景 */
- 标签切换
- 内容分类
- 快速导航
```

#### 组件API
```typescript
interface NavigationProps {
    variant?: 'top' | 'side' | 'tabs';
    items: NavItem[];
    activeItem?: string;
    onItemClick?: (item: NavItem) => void;
}

interface NavItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格

#### 图标类型
```css
/* 线性图标（Outline） */
.icon-outline {
    stroke-width: 1.5px;
    stroke: currentColor;
    fill: none;
}

/* 使用场景 */
- 次要图标
- 轻量设计
- 简洁风格
```

#### 图标尺寸
```css
/* 图标尺寸 */
--icon-size-xs: 12px;
--icon-size-sm: 16px;
--icon-size-md: 20px;
--icon-size-lg: 24px;
--icon-size-xl: 32px;
--icon-size-2xl: 48px;
--icon-size-3xl: 64px;

/* 使用场景 */
- xs：极小图标、徽章
- sm：小图标、按钮
- md：常规图标、列表
- lg：大图标、卡片
- xl：超大图标、展示
- 2xl：特大图标、品牌
- 3xl：超特大图标、创意
```

#### 图标渐变
```css
/* 渐变图标 */
.icon-gradient {
    fill: url(#gradient);
    stroke: url(#gradient);
}

/* 渐变定义 */
<svg>
    <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea" />
            <stop offset="100%" style="stop-color:#764ba2" />
        </linearGradient>
    </defs>
</svg>

/* 使用场景 */
- 品牌图标
- 强调图标
- 创意设计
```

#### 图标状态
```css
/* 默认状态 */
.icon-default {
    color: var(--color-text-secondary);
}

/* 悬停状态 */
.icon-hover {
    color: var(--color-primary);
    transform: scale(1.1);
}

/* 激活状态 */
.icon-active {
    color: var(--color-primary);
    fill: var(--color-primary);
}

/* 禁用状态 */
.icon-disabled {
    color: var(--color-gray-300);
    opacity: 0.5;
}
```

### 插画风格

#### 插画类型
```css
/* 抽象插画 */
.illustration-abstract {
    /* 抽象几何形状 */
    /* 渐变色彩 */
    /* 简洁线条 */
}

/* 使用场景 */
- 品牌展示
- 创意设计
- 现代UI
```

#### 插画渐变
```css
/* 渐变插画 */
.illustration-gradient {
    background: var(--gradient-primary);
    /* 渐变色彩 */
    /* 流畅过渡 */
}

/* 使用场景 */
- 营销页面
- 品牌展示
- 创意设计
```

#### 插画原则
```css
/* 设计原则 */
- 色彩流动：使用渐变色彩创造视觉流动感
- 简洁明了：保持插画简洁，避免过度复杂
- 品牌一致：与品牌色彩和风格保持一致
- 情感表达：通过色彩和形状传达情感
- 功能导向：插画服务于功能，不装饰
```

### 图标与插画使用规范

#### 图标使用规范
```css
/* 使用场景 */
- 导航图标：简洁线性图标
- 操作图标：填充或线性图标
- 状态图标：语义化颜色
- 品牌图标：渐变色彩

/* 使用原则 */
- 一致性：保持图标风格一致
- 可识别：图标含义清晰明确
- 可访问：提供文字标签
- 响应式：根据屏幕调整大小
```

#### 插画使用规范
```css
/* 使用场景 */
- 空状态：友好的插画提示
- 引导页：创意插画引导
- 营销页：品牌插画展示
- 错误页：友好的错误插画

/* 使用原则 */
- 品牌一致：与品牌色彩和风格保持一致
- 情感表达：传达正确的情感
- 功能导向：服务于功能需求
- 性能优化：优化插画文件大小
```

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 行为

#### 按钮 Hover
```css
/* 主按钮 Hover */
.btn-primary:hover {
    background: var(--gradient-primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* 次按钮 Hover */
.btn-secondary:hover {
    background: var(--gradient-secondary-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(240, 147, 251, 0.4);
}

/* 文字按钮 Hover */
.btn-text:hover {
    background: rgba(102, 126, 234, 0.1);
}

/* 渐变边框按钮 Hover */
.btn-gradient-border:hover {
    background: var(--gradient-primary);
    color: #FFFFFF;
}
```

#### 卡片 Hover
```css
/* 基础卡片 Hover */
.card-basic:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
}

/* 渐变卡片 Hover */
.card-gradient:hover {
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
    transform: translateY(-4px);
}

/* 玻璃态卡片 Hover */
.card-glass:hover {
    background: var(--gradient-glass-hover);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
}

/* 悬浮卡片 Hover */
.card-hover:hover {
    background: var(--gradient-bg-light);
    border-color: var(--color-primary);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
    transform: translateY(-4px);
}
```

#### 输入框 Hover
```css
/* 默认输入框 Hover */
.input-default:hover {
    border-color: var(--color-primary);
}

/* 渐变边框输入框 Hover */
.input-gradient-border:hover {
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);
}
```

### Active 行为

#### 按钮 Active
```css
/* 主按钮 Active */
.btn-primary:active {
    background: var(--gradient-primary-active);
    transform: translateY(0);
}

/* 次按钮 Active */
.btn-secondary:active {
    background: var(--gradient-secondary-active);
    transform: translateY(0);
}

/* 点击效果 */
.btn-click {
    transform: scale(0.98);
}
```

### Focus 行为

#### 输入框 Focus
```css
/* 默认输入框 Focus */
.input-default:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* 渐变边框输入框 Focus */
.input-gradient-border:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* 错误输入框 Focus */
.input-error:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(235, 51, 73, 0.1);
}
```

### 动效节奏

#### 标准过渡
```css
/* 标准过渡 */
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);

/* 使用场景 */
- fast：快速交互、微交互
- base：常规过渡、状态变化
- slow：复杂动画、页面过渡
```

#### 缓动函数
```css
/* 缓动函数 */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* 使用场景 */
- ease-in：进入动画
- ease-out：退出动画
- ease-in-out：常规动画
- ease-bounce：弹性动画
```

### 操作反馈设计原则

#### 成功反馈
```css
/* 成功提示 */
.feedback-success {
    background: var(--gradient-success);
    color: #FFFFFF;
    padding: var(--padding-md) var(--padding-lg);
    border-radius: var(--radius-md);
    box-shadow: 0 4px 12px rgba(17, 153, 142, 0.3);
    animation: slideIn 0.3s ease-out;
}

/* 成功动画 */
@keyframes slideIn {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* 使用场景 */
- 操作成功
- 完成任务
- 积极反馈
```

#### 错误反馈
```css
/* 错误提示 */
.feedback-error {
    background: var(--gradient-error);
    color: #FFFFFF;
    padding: var(--padding-md) var(--padding-lg);
    border-radius: var(--radius-md);
    box-shadow: 0 4px 12px rgba(235, 51, 73, 0.3);
    animation: shake 0.5s ease-in-out;
}

/* 错误动画 */
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

/* 使用场景 */
- 操作失败
- 错误提示
- 负面反馈
```

#### 警告反馈
```css
/* 警告提示 */
.feedback-warning {
    background: var(--gradient-warning);
    color: #FFFFFF;
    padding: var(--padding-md) var(--padding-lg);
    border-radius: var(--radius-md);
    box-shadow: 0 4px 12px rgba(242, 153, 74, 0.3);
    animation: pulse 2s infinite;
}

/* 警告动画 */
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

/* 使用场景 */
- 注意事项
- 警告提示
- 待处理状态
```

### 动效原则

#### 动效设计原则
```css
/* 设计原则 */
1. 快速响应：所有动画在300ms内完成
2. 简洁明了：动画效果简单直接，不复杂
3. 功能导向：动画服务于功能，不装饰
4. 性能优先：使用CSS动画，避免JavaScript动画
5. 可访问性：尊重系统偏好设置，支持减少动画
```

#### 动效使用场景
```css
/* 使用场景 */
- 页面加载：渐变背景淡入
- 状态变化：平滑过渡效果
- 交互反馈：微交互动画
- 数据更新：渐进式更新
- 导航切换：流畅的页面过渡
```

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens

```css
:root {
    /* 主色渐变 */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-primary-hover: linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%);
    --gradient-primary-active: linear-gradient(135deg, #4e5fc2 0%, #5e377e 100%);

    /* 次色渐变 */
    --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --gradient-secondary-hover: linear-gradient(135deg, #d37ee3 0%, #d94c5f 100%);
    --gradient-secondary-active: linear-gradient(135deg, #b669d0 0%, #bd4152 100%);

    /* 辅助色渐变 */
    --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --gradient-accent-hover: linear-gradient(135deg, #4395e0 0%, #00d9e3 100%);
    --gradient-accent-active: linear-gradient(135deg, #3688c2 0%, #00c0c8 100%);

    /* 成功渐变 */
    --gradient-success: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    --gradient-success-light: linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%);

    /* 警告渐变 */
    --gradient-warning: linear-gradient(135deg, #f2994a 0%, #f2c94c 100%);
    --gradient-warning-light: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);

    /* 错误渐变 */
    --gradient-error: linear-gradient(135deg, #eb3349 0%, #f45c43 100%);
    --gradient-error-light: linear-gradient(135deg, #ff7675 0%, #d63031 100%);

    /* 信息渐变 */
    --gradient-info: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --gradient-info-light: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);

    /* 背景渐变 */
    --gradient-bg-light: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
    --gradient-bg-light-alt: linear-gradient(135deg, #fafbfc 0%, #f0f1f3 100%);
    --gradient-bg-dark: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
    --gradient-bg-dark-alt: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);

    /* 特殊渐变 */
    --gradient-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    --gradient-glass-dark: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);
    --gradient-neon: linear-gradient(135deg, #00f260 0%, #0575e6 100%);
    --gradient-neon-alt: linear-gradient(135deg, #f857a6 0%, #ff5858 100%);
    --gradient-aurora: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
    --gradient-aurora-alt: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%);

    /* 单色 */
    --color-primary: #667eea;
    --color-secondary: #f093fb;
    --color-accent: #4facfe;
    --color-success: #11998e;
    --color-warning: #f2994a;
    --color-error: #eb3349;
    --color-info: #4facfe;

    /* 中性色 */
    --color-gray-50: #f9fafb;
    --color-gray-100: #f3f4f6;
    --color-gray-200: #e5e7eb;
    --color-gray-300: #d1d5db;
    --color-gray-400: #9ca3af;
    --color-gray-500: #6b7280;
    --color-gray-600: #4b5563;
    --color-gray-700: #374151;
    --color-gray-800: #1f2937;
    --color-gray-900: #111827;

    /* 文字颜色 */
    --color-text-primary: #111827;
    --color-text-secondary: #6b7280;
    --color-text-tertiary: #9ca3af;
    --color-text-disabled: #d1d5db;
}
```

### Spacing Tokens

```css
:root {
    /* 间距 */
    --space-0: 0;
    --space-1: 0.25rem;   /* 4px */
    --space-2: 0.5rem;    /* 8px */
    --space-3: 0.75rem;   /* 12px */
    --space-4: 1rem;      /* 16px */
    --space-5: 1.25rem;   /* 20px */
    --space-6: 1.5rem;    /* 24px */
    --space-7: 1.75rem;   /* 28px */
    --space-8: 2rem;      /* 32px */
    --space-9: 2.25rem;   /* 36px */
    --space-10: 2.5rem;   /* 40px */
    --space-12: 3rem;     /* 48px */
    --space-14: 3.5rem;   /* 56px */
    --space-16: 4rem;     /* 64px */
    --space-20: 5rem;     /* 80px */
    --space-24: 6rem;     /* 96px */
    --space-28: 7rem;     /* 112px */
    --space-32: 8rem;     /* 128px */

    /* 内边距 */
    --padding-xs: var(--space-1);
    --padding-sm: var(--space-2);
    --padding-md: var(--space-3);
    --padding-lg: var(--space-4);
    --padding-xl: var(--space-6);
    --padding-2xl: var(--space-8);

    /* 外边距 */
    --margin-xs: var(--space-1);
    --margin-sm: var(--space-2);
    --margin-md: var(--space-3);
    --margin-lg: var(--space-4);
    --margin-xl: var(--space-6);
    --margin-2xl: var(--space-8);
}
```

### Radius Tokens

```css
:root {
    /* 圆角 */
    --radius-none: 0;
    --radius-sm: 0.25rem;   /* 4px */
    --radius-md: 0.375rem;  /* 6px */
    --radius-lg: 0.5rem;    /* 8px */
    --radius-xl: 0.75rem;   /* 12px */
    --radius-2xl: 1rem;     /* 16px */
    --radius-3xl: 1.5rem;   /* 24px */
    --radius-full: 9999px;
}
```

### Shadow Tokens

```css
:root {
    /* 阴影 */
    --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
    --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.15);

    /* 渐变阴影 */
    --shadow-gradient-primary: 0 4px 12px rgba(102, 126, 234, 0.3);
    --shadow-gradient-secondary: 0 4px 12px rgba(240, 147, 251, 0.3);
    --shadow-gradient-accent: 0 4px 12px rgba(79, 172, 254, 0.3);
    --shadow-gradient-success: 0 4px 12px rgba(17, 153, 142, 0.3);
    --shadow-gradient-warning: 0 4px 12px rgba(242, 153, 74, 0.3);
    --shadow-gradient-error: 0 4px 12px rgba(235, 51, 73, 0.3);
}
```

### Typography Tokens

```css
:root {
    /* 字体家族 */
    --font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-family-heading: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --font-family-mono: "SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace;

    /* 字号 */
    --font-size-xs: 0.75rem;      /* 12px */
    --font-size-sm: 0.875rem;     /* 14px */
    --font-size-base: 1rem;       /* 16px */
    --font-size-lg: 1.125rem;     /* 18px */
    --font-size-xl: 1.25rem;      /* 20px */
    --font-size-2xl: 1.5rem;      /* 24px */
    --font-size-3xl: 1.875rem;    /* 30px */
    --font-size-4xl: 2.25rem;     /* 36px */
    --font-size-5xl: 3rem;        /* 48px */

    /* 字重 */
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;

    /* 行高 */
    --line-height-none: 1;
    --line-height-tight: 1.25;
    --line-height-snug: 1.375;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.625;
    --line-height-loose: 2;

    /* 字间距 */
    --letter-spacing-tighter: -0.05em;
    --letter-spacing-tight: -0.025em;
    --letter-spacing-normal: 0;
    --letter-spacing-wide: 0.025em;
    --letter-spacing-wider: 0.05em;
    --letter-spacing-widest: 0.1em;
}
```

### Transition Tokens

```css
:root {
    /* 过渡时间 */
    --transition-instant: 50ms;
    --transition-fast: 150ms;
    --transition-base: 200ms;
    --transition-slow: 300ms;
    --transition-slower: 500ms;

    /* 缓动函数 */
    --ease-linear: linear;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

    /* 组合过渡 */
    --transition-all: all var(--transition-base) var(--ease-in-out);
    --transition-colors: color var(--transition-base) var(--ease-in-out);
    --transition-opacity: opacity var(--transition-base) var(--ease-in-out);
    --transition-shadow: box-shadow var(--transition-base) var(--ease-in-out);
    --transition-transform: transform var(--transition-base) var(--ease-in-out);
}
```

### Z-Index Tokens

```css
:root {
    /* 层级 */
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

#### 设计规则
```css
/* 可以学习的规则 */
1. 渐变色彩系统
   - 学习渐变色彩的搭配原则
   - 学习渐变角度和分布的规律
   - 学习渐变色彩的情感表达

2. 渐变应用场景
   - 学习渐变在UI组件中的应用
   - 学习渐变在背景中的应用
   - 学习渐变在文字中的应用

3. 渐变与层次
   - 学习如何通过渐变建立视觉层次
   - 学习如何通过渐变创造空间感
   - 学习如何通过渐变引导视觉焦点

4. 渐变与品牌
   - 学习如何将渐变与品牌色彩结合
   - 学习如何通过渐变强化品牌识别
   - 学习如何保持渐变风格的一致性
```

#### 风格特征
```css
/* 可以学习的风格特征 */
1. 色彩流动感
   - 学习如何创造自然的色彩流动
   - 学习如何控制渐变的平滑度
   - 学习如何避免渐变的突兀感

2. 现代感
   - 学习如何通过渐变体现现代感
   - 学习如何平衡渐变与简洁性
   - 学习如何避免过度装饰

3. 层次感
   - 学习如何通过渐变建立层次
   - 学习如何使用渐变创造深度
   - 学习如何控制渐变的强度

4. 活力感
   - 学习如何通过渐变传达活力
   - 学习如何选择充满活力的渐变
   - 学习如何控制渐变的动感
```

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 不应复刻的元素
```css
/* 不应复刻的元素 */
1. 品牌特定元素
   - 不要复刻特定品牌的渐变色彩组合
   - 不要复刻特定品牌的Logo和标识
   - 不要复刻特定品牌的视觉元素

2. 插画内容
   - 不要复刻特定的插画作品
   - 不要复刻插画中的具体形象
   - 不要复刻插画的创意概念

3. 文字内容
   - 不要复刻特定的文案内容
   - 不要复刻品牌的标语和口号
   - 不要复刻产品的描述文字

4. 图片素材
   - 不要复刻特定的图片素材
   - 不要复刻摄影作品
   - 不要复刻品牌图片

5. 代码实现
   - 不要直接复制粘贴代码
   - 不要复刻特定的实现细节
   - 不要使用受版权保护的代码
```

#### 合法使用建议
```css
/* 合法使用建议 */
1. 学习设计原则
   - 理解渐变设计的基本原理
   - 掌握色彩搭配的规律
   - 学习渐变应用的最佳实践

2. 创造独特风格
   - 基于学习创建自己的渐变系统
   - 结合品牌特色设计独特的渐变
   - 保持原创性和独特性

3. 遵守版权法律
   - 尊重原创作品的版权
   - 避免直接复制受保护的内容
   - 在学习的基础上进行创新

4. 建立自己的设计系统
   - 创建符合品牌需求的渐变系统
   - 建立一致的设计语言
   - 形成独特的设计风格
```

---

## 版本信息

- **版本号**：v2.0
- **最后更新**：2026-02-01
- **维护者**：设计团队