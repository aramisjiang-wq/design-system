# 极光设计（Aurora Design）

---

## 1. 设计风格总览（Design DNA）

### 风格关键词
- **流动感**：模拟极光流动的视觉效果，使用柔和渐变和动态色彩
- **发光**：运用光晕和发光效果，营造梦幻氛围
- **半透明**：大量使用半透明层，创造深度和层次感
- **梦幻**：整体色调柔和，营造浪漫、神秘的视觉体验

### 适用产品类型
- **创意类产品**：艺术作品展示、创意设计平台
- **娱乐类应用**：音乐播放器、视频平台、游戏界面
- **生活方式应用**：冥想应用、健康管理、旅行规划
- **品牌官网**：需要营造高端、梦幻感的品牌展示页面

### 设计原则
1. **自然流动**：色彩过渡自然，避免生硬的边界
2. **层次分明**：通过透明度和模糊效果建立视觉层次
3. **适度发光**：发光效果服务于功能，不过度装饰
4. **保持可读性**：在追求视觉效果的同时确保内容可读性

---

## 2. 颜色系统（Color System）

### 主色（Primary Colors）
极光设计的主色以自然极光的色彩为灵感，包括绿、蓝、紫、粉等柔和色调。

```css
/* 主色 - 极光绿 */
--ad-color-primary: #00FF88;
--ad-color-primary-light: #66FFB3;
--ad-color-primary-dark: #00CC6A;

/* 主色 - 极光蓝 */
--ad-color-secondary: #00D4FF;
--ad-color-secondary-light: #66E5FF;
--ad-color-secondary-dark: #00A8CC;

/* 主色 - 极光紫 */
--ad-color-accent: #B366FF;
--ad-color-accent-light: #CCA3FF;
--ad-color-accent-dark: #9052CC;
```

**使用场景**：
- 主色（绿）：用于主要操作按钮、重要信息强调
- 次色（蓝）：用于次要操作、信息展示
- 强调色（紫）：用于特殊状态、品牌元素

### 渐变色（Gradient Colors）
极光设计的核心特色是柔和的渐变效果。

```css
/* 主渐变 - 极光渐变 */
--ad-gradient-primary: linear-gradient(135deg, #00FF88 0%, #00D4FF 50%, #B366FF 100%);

/* 次渐变 - 梦幻渐变 */
--ad-gradient-secondary: linear-gradient(90deg, #00FF88 0%, #B366FF 100%);

/* 强调渐变 - 发光渐变 */
--ad-gradient-accent: radial-gradient(circle, #00FF88 0%, transparent 70%);
```

**使用场景**：
- 主渐变：用于页面背景、大按钮、重要卡片
- 次渐变：用于装饰性元素、次要背景
- 强调渐变：用于发光效果、焦点指示

### 中性色（Neutral Colors）
中性色采用低饱和度的色调，以配合极光主题。

```css
/* 背景 */
--ad-color-bg-primary: #0A0E1A;
--ad-color-bg-secondary: #111827;
--ad-color-bg-tertiary: #1F2937;

/* 文字 */
--ad-color-text-primary: #F9FAFB;
--ad-color-text-secondary: #D1D5DB;
--ad-color-text-tertiary: #9CA3AF;

/* 边框 */
--ad-color-border: rgba(255, 255, 255, 0.1);
--ad-color-border-hover: rgba(255, 255, 255, 0.2);
```

**使用场景**：
- 背景：深色背景以突出发光效果
- 文字：白色系文字确保在深色背景上的可读性
- 边框：半透明边框保持整体通透感

### 语义色（Semantic Colors）
语义色保持极光主题的柔和特性。

```css
/* 成功 */
--ad-color-success: #10B981;
--ad-color-success-bg: rgba(16, 185, 129, 0.1);

/* 警告 */
--ad-color-warning: #F59E0B;
--ad-color-warning-bg: rgba(245, 158, 11, 0.1);

/* 错误 */
--ad-color-error: #EF4444;
--ad-color-error-bg: rgba(239, 68, 68, 0.1);

/* 信息 */
--ad-color-info: #3B82F6;
--ad-color-info-bg: rgba(59, 130, 246, 0.1);
```

**使用场景**：
- 成功：操作成功、状态正常
- 警告：需要注意的状态
- 错误：操作失败、错误提示
- 信息：一般信息提示

### Design Token 命名建议
```css
/* 颜色 Token */
--ad-color-{category}-{shade}-{variant}
/* 示例 */
--ad-color-primary-light
--ad-color-bg-secondary
--ad-color-success-bg
```

---

## 3. 字体与排版（Typography）

### 字体家族
极光设计使用现代无衬线字体，配合柔和的视觉效果。

```css
/* 主字体 */
--ad-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

/* 备用字体 */
--ad-font-family-fallback: "PingFang SC", "Microsoft YaHei", sans-serif;
```

**字体选择理由**：
- 系统字体：提高加载性能，确保跨平台一致性
- 无衬线字体：现代感强，与极光主题契合

### 字号层级
```css
/* 标题 */
--ad-font-size-h1: 3rem (48px);
--ad-font-size-h2: 2.25rem (36px);
--ad-font-size-h3: 1.75rem (28px);
--ad-font-size-h4: 1.5rem (24px);
--ad-font-size-h5: 1.25rem (20px);
--ad-font-size-h6: 1rem (16px);

/* 正文 */
--ad-font-size-body: 1rem (16px);
--ad-font-size-body-large: 1.125rem (18px);
--ad-font-size-body-small: 0.875rem (14px);

/* 辅助文字 */
--ad-font-size-caption: 0.75rem (12px);
--ad-font-size-overline: 0.625rem (10px);
```

### 行高与字重
```css
/* 行高 */
--ad-line-height-tight: 1.25;
--ad-line-height-normal: 1.5;
--ad-line-height-relaxed: 1.75;

/* 字重 */
--ad-font-weight-light: 300;
--ad-font-weight-regular: 400;
--ad-font-weight-medium: 500;
--ad-font-weight-semibold: 600;
--ad-font-weight-bold: 700;
```

### 排版规则
1. **标题层级**：
   - H1：页面主标题，使用Bold字重
   - H2：章节标题，使用Semibold字重
   - H3：子章节标题，使用Medium字重
   - H4-H6：小标题，使用Regular字重

2. **正文规范**：
   - 常规正文：Regular字重，1.5行高
   - 强调内容：Medium字重
   - 重要信息：Semibold字重

3. **字间距**：
   - 标题：-0.02em（紧凑）
   - 正文：0em（正常）
   - 小字：0.01em（略微宽松）

4. **排版节奏**：
   - 保持一致的垂直间距（使用8px倍数）
   - 标题与正文之间使用较大的间距
   - 段落之间使用1.5倍行高

### 响应式字体
```css
/* 移动端（< 640px） */
--ad-font-size-h1-mobile: 2rem (32px);
--ad-font-size-h2-mobile: 1.5rem (24px);
--ad-font-size-h3-mobile: 1.25rem (20px);
--ad-font-size-body-mobile: 0.875rem (14px);

/* 平板端（640px - 1024px） */
--ad-font-size-h1-tablet: 2.5rem (40px);
--ad-font-size-h2-tablet: 1.75rem (28px);
--ad-font-size-h3-tablet: 1.5rem (24px);
--ad-font-size-body-tablet: 0.9375rem (15px);

/* 桌面端（> 1024px） */
--ad-font-size-h1-desktop: 3rem (48px);
--ad-font-size-h2-desktop: 2.25rem (36px);
--ad-font-size-h3-desktop: 1.75rem (28px);
--ad-font-size-body-desktop: 1rem (16px);
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
/* 版心宽度 */
--ad-container-max-width: 1280px;
--ad-container-medium-width: 1024px;
--ad-container-small-width: 768px;

/* 页面边距 */
--ad-page-padding: 2rem (32px);
--ad-page-padding-mobile: 1rem (16px);
```

### 栅格系统
```css
/* 栅格列数 */
--ad-grid-columns: 12;

/* 栅格间距 */
--ad-grid-gutter: 1.5rem (24px);
--ad-grid-gutter-mobile: 1rem (16px);

/* 栅格边距 */
--ad-grid-margin: 2rem (32px);
--ad-grid-margin-mobile: 1rem (16px);
```

### 响应式断点
```css
/* 断点定义 */
--ad-breakpoint-mobile: 640px;
--ad-breakpoint-tablet: 768px;
--ad-breakpoint-desktop: 1024px;
--ad-breakpoint-large: 1280px;
--ad-breakpoint-xlarge: 1536px;
```

### 留白密度
极光设计采用**中等留白密度**，在保持通透感的同时确保信息密度。

```css
/* 间距系统 */
--ad-spacing-xs: 0.5rem (8px);
--ad-spacing-sm: 1rem (16px);
--ad-spacing-md: 1.5rem (24px);
--ad-spacing-lg: 2rem (32px);
--ad-spacing-xl: 3rem (48px);
--ad-spacing-2xl: 4rem (64px);
--ad-spacing-3xl: 6rem (96px);
```

**使用场景**：
- xs：元素内部间距、图标与文字间距
- sm：小元素间距、标签内边距
- md：常规元素间距、卡片内边距
- lg：模块间距、章节间距
- xl：大模块间距、主要分区间距
- 2xl：页面级间距
- 3xl：顶级间距

### 布局模式
1. **固定布局**：用于内容密集型页面，最大宽度1280px
2. **流式布局**：用于响应式页面，自适应屏幕宽度
3. **弹性布局**：用于组件内部布局，使用Flexbox
4. **网格布局**：用于复杂页面布局，使用CSS Grid

### 信息密度判断
极光设计采用**中等信息密度**，在保持视觉美感的同时确保信息传达效率。

---

## 5. 核心 UI 组件规范（Component System）

### 按钮（Button）

#### 组件概述
按钮是极光设计的核心交互组件，采用发光效果和渐变背景。

#### 尺寸规范
```css
/* 小号按钮 */
--ad-button-small-height: 32px;
--ad-button-small-padding: 0.5rem 1rem;
--ad-button-small-font-size: 0.875rem;

/* 中号按钮 */
--ad-button-medium-height: 40px;
--ad-button-medium-padding: 0.625rem 1.25rem;
--ad-button-medium-font-size: 1rem;

/* 大号按钮 */
--ad-button-large-height: 48px;
--ad-button-large-padding: 0.75rem 1.5rem;
--ad-button-large-font-size: 1.125rem;
```

#### 状态规范
```css
/* 主按钮 */
--ad-button-primary-bg: var(--ad-gradient-primary);
--ad-button-primary-text: #FFFFFF;
--ad-button-primary-border: transparent;
--ad-button-primary-radius: 9999px;
--ad-button-primary-shadow: 0 0 20px rgba(0, 255, 136, 0.3);

/* 次按钮 */
--ad-button-secondary-bg: rgba(255, 255, 255, 0.1);
--ad-button-secondary-text: #FFFFFF;
--ad-button-secondary-border: rgba(255, 255, 255, 0.2);
--ad-button-secondary-radius: 9999px;

/* 文字按钮 */
--ad-button-text-bg: transparent;
--ad-button-text-text: var(--ad-color-primary);
--ad-button-text-border: transparent;
```

#### 交互状态
```css
/* 悬停状态 */
--ad-button-primary-hover-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
--ad-button-secondary-hover-bg: rgba(255, 255, 255, 0.2);
--ad-button-text-hover-text: var(--ad-color-primary-light);

/* 激活状态 */
--ad-button-primary-active-shadow: 0 0 15px rgba(0, 255, 136, 0.4);
--ad-button-secondary-active-bg: rgba(255, 255, 255, 0.3);

/* 禁用状态 */
--ad-button-disabled-bg: rgba(255, 255, 255, 0.05);
--ad-button-disabled-text: rgba(255, 255, 255, 0.3);
--ad-button-disabled-shadow: none;
```

#### 过渡动画
```css
--ad-button-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

---

### 卡片（Card）

#### 组件概述
卡片采用半透明背景和模糊效果，营造极光主题的通透感。

#### 基础样式
```css
/* 卡片背景 */
--ad-card-bg: rgba(17, 24, 39, 0.6);
--ad-card-backdrop-filter: blur(20px);

/* 卡片边框 */
--ad-card-border: 1px solid rgba(255, 255, 255, 0.1);
--ad-card-border-radius: 1rem (16px);

/* 卡片阴影 */
--ad-card-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

/* 卡片内边距 */
--ad-card-padding: 1.5rem (24px);
```

#### 悬浮效果
```css
/* 悬浮状态 */
--ad-card-hover-bg: rgba(17, 24, 39, 0.8);
--ad-card-hover-border: 1px solid rgba(255, 255, 255, 0.2);
--ad-card-hover-shadow: 0 12px 48px rgba(0, 0, 0, 0.4);
--ad-card-hover-transform: translateY(-4px);
```

#### 使用场景
- 信息展示：用于展示产品、服务、文章等
- 数据展示：用于展示统计数据、图表等
- 内容分组：用于组织相关内容

---

### 输入框（Input）

#### 组件概述
输入框采用半透明背景和发光焦点效果，保持极光主题的一致性。

#### 基础样式
```css
/* 输入框背景 */
--ad-input-bg: rgba(255, 255, 255, 0.05);
--ad-input-border: 1px solid rgba(255, 255, 255, 0.1);
--ad-input-border-radius: 0.5rem (8px);

/* 输入框文字 */
--ad-input-text: #FFFFFF;
--ad-input-placeholder: rgba(255, 255, 255, 0.4);

/* 输入框内边距 */
--ad-input-padding: 0.75rem 1rem;
```

#### 焦点状态
```css
/* 焦点边框 */
--ad-input-focus-border: var(--ad-color-primary);
--ad-input-focus-shadow: 0 0 0 3px rgba(0, 255, 136, 0.2), 0 0 20px rgba(0, 255, 136, 0.3);
```

#### 错误状态
```css
/* 错误边框 */
--ad-input-error-border: var(--ad-color-error);
--ad-input-error-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
```

#### 禁用状态
```css
/* 禁用背景 */
--ad-input-disabled-bg: rgba(255, 255, 255, 0.02);
--ad-input-disabled-text: rgba(255, 255, 255, 0.3);
```

---

### 导航（Navigation）

#### 组件概述
导航采用半透明背景和模糊效果，保持页面通透感。

#### 顶部导航
```css
/* 导航背景 */
--ad-nav-bg: rgba(10, 14, 26, 0.8);
--ad-nav-backdrop-filter: blur(20px);
--ad-nav-border: 1px solid rgba(255, 255, 255, 0.1);

/* 导航高度 */
--ad-nav-height: 4rem (64px);
--ad-nav-padding: 0 2rem;

/* 导航链接 */
--ad-nav-link-text: rgba(255, 255, 255, 0.7);
--ad-nav-link-hover-text: #FFFFFF;
--ad-nav-link-active-text: var(--ad-color-primary);
```

#### 侧边导航
```css
/* 侧边栏背景 */
--ad-sidebar-bg: rgba(10, 14, 26, 0.95);
--ad-sidebar-width: 16rem (256px);

/* 侧边栏链接 */
--ad-sidebar-link-padding: 0.75rem 1.5rem;
--ad-sidebar-link-hover-bg: rgba(255, 255, 255, 0.1);
--ad-sidebar-link-active-bg: rgba(0, 255, 136, 0.1);
--ad-sidebar-link-active-text: var(--ad-color-primary);
```

---

### 模态框（Modal）

#### 组件概述
模态框采用半透明背景和模糊效果，营造沉浸式体验。

#### 基础样式
```css
/* 遮罩层 */
--ad-modal-overlay-bg: rgba(0, 0, 0, 0.7);
--ad-modal-overlay-backdrop-filter: blur(8px);

/* 模态框 */
--ad-modal-bg: rgba(17, 24, 39, 0.95);
--ad-modal-border: 1px solid rgba(255, 255, 255, 0.1);
--ad-modal-border-radius: 1rem (16px);
--ad-modal-shadow: 0 20px 64px rgba(0, 0, 0, 0.5);

/* 模态框内边距 */
--ad-modal-padding: 2rem;
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
极光设计的图标采用**线性图标**风格，配合发光效果。

```css
/* 图标颜色 */
--ad-icon-color: rgba(255, 255, 255, 0.8);
--ad-icon-hover-color: #FFFFFF;
--ad-icon-active-color: var(--ad-color-primary);

/* 图标发光 */
--ad-icon-glow: 0 0 10px rgba(0, 255, 136, 0.3);
```

**图标特点**：
- 线条粗细：2px
- 圆角：2px
- 风格：简洁、现代
- 效果：悬停时发光

### 插画风格
极光设计的插画采用**抽象风格**，强调色彩流动和光影效果。

**插画特点**：
- 风格：抽象、梦幻
- 色彩：渐变、发光
- 构图：流动、有机
- 用途：装饰、氛围营造

**设计原则**：
1. **弱化内容**：插画不干扰主要内容，仅作为背景装饰
2. **辅助理解**：插画用于营造氛围，不传达具体信息
3. **保持一致性**：所有插画遵循相同的色彩和风格
4. **适度使用**：避免过度使用插画，保持页面简洁

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 行为
极光设计的悬停效果强调发光和色彩变化。

```css
/* 按钮悬停 */
--ad-button-hover-duration: 0.3s;
--ad-button-hover-easing: cubic-bezier(0.4, 0, 0.2, 1);
--ad-button-hover-effect: 增强发光效果;

/* 卡片悬停 */
--ad-card-hover-duration: 0.3s;
--ad-card-hover-easing: cubic-bezier(0.4, 0, 0.2, 1);
--ad-card-hover-effect: 上移 + 增强阴影;

/* 链接悬停 */
--ad-link-hover-duration: 0.2s;
--ad-link-hover-easing: ease-out;
--ad-link-hover-effect: 颜色变化 + 下划线;
```

### Active 行为
激活状态采用轻微的缩小效果，提供触觉反馈。

```css
/* 按钮激活 */
--ad-button-active-duration: 0.15s;
--ad-button-active-easing: ease-out;
--ad-button-active-effect: scale(0.98);

/* 卡片激活 */
--ad-card-active-duration: 0.15s;
--ad-card-active-easing: ease-out;
--ad-card-active-effect: scale(0.99);
```

### Focus 行为
焦点状态采用明显的发光效果，确保可访问性。

```css
/* 焦点环 */
--ad-focus-ring: 0 0 0 3px rgba(0, 255, 136, 0.3), 0 0 20px rgba(0, 255, 136, 0.4);
--ad-focus-ring-duration: 0.2s;
--ad-focus-ring-easing: ease-out;
```

### 动效节奏
极光设计的动效采用**柔和流畅**的节奏。

```css
/* 标准动效 */
--ad-animation-duration: 0.3s;
--ad-animation-easing: cubic-bezier(0.4, 0, 0.2, 1);

/* 快速动效 */
--ad-animation-fast-duration: 0.2s;
--ad-animation-fast-easing: ease-out;

/* 慢速动效 */
--ad-animation-slow-duration: 0.5s;
--ad-animation-slow-easing: cubic-bezier(0.4, 0, 0.2, 1);
```

### 操作反馈设计原则
1. **即时反馈**：所有操作在200ms内提供视觉反馈
2. **明显反馈**：反馈效果明显，用户能够清晰感知
3. **柔和反馈**：反馈效果柔和，不刺眼
4. **一致反馈**：相同类型的操作使用相同的反馈效果

### 特殊动效
#### 极光流动效果
```css
/* 背景流动动画 */
@keyframes aurora-flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 应用 */
.aurora-bg {
  background: var(--ad-gradient-primary);
  background-size: 200% 200%;
  animation: aurora-flow 15s ease infinite;
}
```

#### 发光脉冲效果
```css
/* 发光脉冲动画 */
@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
  }
}

/* 应用 */
.glow-pulse {
  animation: glow-pulse 3s ease-in-out infinite;
}
```

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
  /* 主色 */
  --ad-color-primary: #00FF88;
  --ad-color-primary-light: #66FFB3;
  --ad-color-primary-dark: #00CC6A;
  
  --ad-color-secondary: #00D4FF;
  --ad-color-secondary-light: #66E5FF;
  --ad-color-secondary-dark: #00A8CC;
  
  --ad-color-accent: #B366FF;
  --ad-color-accent-light: #CCA3FF;
  --ad-color-accent-dark: #9052CC;
  
  /* 渐变 */
  --ad-gradient-primary: linear-gradient(135deg, #00FF88 0%, #00D4FF 50%, #B366FF 100%);
  --ad-gradient-secondary: linear-gradient(90deg, #00FF88 0%, #B366FF 100%);
  --ad-gradient-accent: radial-gradient(circle, #00FF88 0%, transparent 70%);
  
  /* 中性色 */
  --ad-color-bg-primary: #0A0E1A;
  --ad-color-bg-secondary: #111827;
  --ad-color-bg-tertiary: #1F2937;
  
  --ad-color-text-primary: #F9FAFB;
  --ad-color-text-secondary: #D1D5DB;
  --ad-color-text-tertiary: #9CA3AF;
  
  --ad-color-border: rgba(255, 255, 255, 0.1);
  --ad-color-border-hover: rgba(255, 255, 255, 0.2);
  
  /* 语义色 */
  --ad-color-success: #10B981;
  --ad-color-success-bg: rgba(16, 185, 129, 0.1);
  
  --ad-color-warning: #F59E0B;
  --ad-color-warning-bg: rgba(245, 158, 11, 0.1);
  
  --ad-color-error: #EF4444;
  --ad-color-error-bg: rgba(239, 68, 68, 0.1);
  
  --ad-color-info: #3B82F6;
  --ad-color-info-bg: rgba(59, 130, 246, 0.1);
}
```

### Spacing Tokens
```css
:root {
  --ad-spacing-xs: 0.5rem;
  --ad-spacing-sm: 1rem;
  --ad-spacing-md: 1.5rem;
  --ad-spacing-lg: 2rem;
  --ad-spacing-xl: 3rem;
  --ad-spacing-2xl: 4rem;
  --ad-spacing-3xl: 6rem;
}
```

### Radius Tokens
```css
:root {
  --ad-radius-sm: 0.375rem;
  --ad-radius-md: 0.5rem;
  --ad-radius-lg: 0.75rem;
  --ad-radius-xl: 1rem;
  --ad-radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
  --ad-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --ad-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --ad-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --ad-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  --ad-shadow-glow: 0 0 20px rgba(0, 255, 136, 0.3);
  --ad-shadow-glow-strong: 0 0 30px rgba(0, 255, 136, 0.5);
}
```

### Typography Tokens
```css
:root {
  --ad-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  
  --ad-font-size-h1: 3rem;
  --ad-font-size-h2: 2.25rem;
  --ad-font-size-h3: 1.75rem;
  --ad-font-size-h4: 1.5rem;
  --ad-font-size-h5: 1.25rem;
  --ad-font-size-h6: 1rem;
  
  --ad-font-size-body: 1rem;
  --ad-font-size-body-large: 1.125rem;
  --ad-font-size-body-small: 0.875rem;
  
  --ad-font-size-caption: 0.75rem;
  --ad-font-size-overline: 0.625rem;
  
  --ad-line-height-tight: 1.25;
  --ad-line-height-normal: 1.5;
  --ad-line-height-relaxed: 1.75;
  
  --ad-font-weight-light: 300;
  --ad-font-weight-regular: 400;
  --ad-font-weight-medium: 500;
  --ad-font-weight-semibold: 600;
  --ad-font-weight-bold: 700;
}
```

### Animation Tokens
```css
:root {
  --ad-animation-duration: 0.3s;
  --ad-animation-easing: cubic-bezier(0.4, 0, 0.2, 1);
  
  --ad-animation-fast-duration: 0.2s;
  --ad-animation-fast-easing: ease-out;
  
  --ad-animation-slow-duration: 0.5s;
  --ad-animation-slow-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Breakpoint Tokens
```css
:root {
  --ad-breakpoint-mobile: 640px;
  --ad-breakpoint-tablet: 768px;
  --ad-breakpoint-desktop: 1024px;
  --ad-breakpoint-large: 1280px;
  --ad-breakpoint-xlarge: 1536px;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）

#### 1. 色彩系统
✅ **可以学习**：
- 柔和的渐变配色方案
- 半透明背景的使用
- 发光效果的实现方式
- 深色背景与浅色文字的对比

**实现建议**：
- 使用CSS渐变创建柔和的色彩过渡
- 使用rgba和backdrop-filter实现半透明效果
- 使用box-shadow实现发光效果
- 确保文字与背景有足够的对比度

#### 2. 布局系统
✅ **可以学习**：
- 中等留白密度的布局
- 响应式栅格系统
- 半透明卡片的使用
- 模糊背景的应用

**实现建议**：
- 使用8px倍数的间距系统
- 使用CSS Grid和Flexbox实现响应式布局
- 使用backdrop-filter实现模糊效果
- 保持一致的间距和边距

#### 3. 交互设计
✅ **可以学习**：
- 柔和的悬停效果
- 明显的焦点状态
- 流畅的过渡动画
- 即时的操作反馈

**实现建议**：
- 使用CSS transition实现平滑过渡
- 使用box-shadow实现焦点环
- 使用cubic-bezier缓动函数
- 确保所有交互都有视觉反馈

#### 4. 动效设计
✅ **可以学习**：
- 流动的背景动画
- 发光脉冲效果
- 柔和的动画节奏
- 一致的动画时长

**实现建议**：
- 使用CSS keyframes实现背景流动
- 使用animation实现发光脉冲
- 使用300ms的标准动画时长
- 保持所有动画的一致性

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 1. 品牌元素
❌ **不应复刻**：
- 特定的品牌标识
- 品牌名称和标语
- 品牌特定的图标和符号
- 品牌特定的字体

**替代方案**：
- 创建自己的品牌标识
- 使用通用的图标库（如Material Icons、Feather Icons）
- 使用系统字体或开源字体

#### 2. 插画内容
❌ **不应复刻**：
- 特定的插画作品
- 插画中的具体元素
- 插画的构图和细节
- 插画的色彩组合

**替代方案**：
- 创建自己的抽象插画
- 使用开源插画库（如Undraw、Humaaans）
- 使用渐变和几何图形创建装饰性背景

#### 3. 具体内容
❌ **不应复刻**：
- 文字内容
- 图片素材
- 数据和统计信息
- 用户生成内容

**替代方案**：
- 创建自己的内容
- 使用免费的图片素材网站（如Unsplash、Pexels）
- 使用占位符数据
- 鼓励用户生成内容

### 法律合规建议

#### 1. 版权保护
- 确保所有使用的素材都有合法的使用权
- 遵守开源协议（如MIT、Apache、GPL）
- 为原创作品添加版权声明
- 尊重他人的知识产权

#### 2. 商标保护
- 避免使用他人的商标
- 创建自己的品牌标识
- 注册自己的商标（如需要）
- 避免混淆用户

#### 3. 设计保护
- 创建原创的设计元素
- 避免直接复制他人的设计
- 记录设计过程和灵感来源
- 为原创设计申请设计专利（如需要）

#### 4. 数据保护
- 遵守数据保护法规（如GDPR、CCPA）
- 保护用户隐私
- 明确数据使用政策
- 提供数据删除选项

### 最佳实践

#### 1. 原创设计
- 从极光设计中汲取灵感，但创建原创作品
- 结合自己的品牌和产品特点
- 保持设计的一致性和连贯性
- 持续迭代和优化设计

#### 2. 用户体验
- 优先考虑用户体验
- 确保设计符合可访问性标准
- 进行用户测试和反馈收集
- 根据用户反馈优化设计

#### 3. 技术实现
- 使用现代前端技术（如React、Vue、Svelte）
- 使用CSS预处理器（如Sass、Less）
- 使用设计系统工具（如Figma、Sketch）
- 使用组件库（如Material-UI、Ant Design）

#### 4. 文档和规范
- 创建详细的设计文档
- 建立设计规范和指南
- 提供代码示例和最佳实践
- 保持文档的更新和维护

---

## 附录

### 参考资源
- [极光设计灵感](https://www.pinterest.com/search/pins/?q=aurora%20design)
- [CSS渐变生成器](https://cssgradient.io/)
- [backdrop-filter兼容性](https://caniuse.com/backdrop-filter)
- [Web动画最佳实践](https://web.dev/animations-guide/)

### 工具推荐
- [Figma](https://www.figma.com/) - 设计工具
- [Coolors](https://coolors.co/) - 配色工具
- [CSS Tricks](https://css-tricks.com/) - CSS学习资源
- [MDN Web Docs](https://developer.mozilla.org/) - Web开发文档

### 社区资源
- [Dribbble](https://dribbble.com/) - 设计灵感
- [Behance](https://www.behance.net/) - 设计作品展示
- [Awwwards](https://www.awwwards.com/) - 网站设计奖项
- [CSS Awards](https://www.cssdesignawards.com/) - CSS设计奖项

---

**版本**：1.0.0  
**最后更新**：2026-02-02  
**维护者**：设计团队
