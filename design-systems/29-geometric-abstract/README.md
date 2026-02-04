# 几何抽象设计系统（Geometric Abstract Design System）

## 1. 设计风格总览（Design DNA）

**核心关键词：** 几何、抽象、现代、简洁、结构化

**适用产品类型：**
- 科技产品 / SaaS 平台
- 数据可视化工具
- 创意设计平台
- 建筑与工程类应用
- 现代品牌官网

**设计理念：**
几何抽象风格以几何形状、线条和抽象图形为核心设计元素，强调结构化、秩序感和视觉冲击力。通过基本几何形态的组合与变化，创造出富有现代感和科技感的视觉体验。色彩对比强烈，形状简洁有力，适合需要展现专业性和创新性的产品。

---

## 2. 颜色系统（Color System）

### 主色（Primary Colors）

```css
:root {
  /* 主色 - 几何蓝 */
  --ga-color-primary: #3B82F6;
  --ga-color-primary-light: #60A5FA;
  --ga-color-primary-dark: #2563EB;
  
  /* 主色渐变 - 几何对角线 */
  --ga-gradient-primary: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
  --ga-gradient-primary-diagonal: linear-gradient(45deg, #3B82F6 0%, #60A5FA 50%, #2563EB 100%);
}
```

**使用场景：**
- 主要按钮、链接
- 品牌标识元素
- 关键信息强调
- 导航激活状态

### 辅助色（Secondary Colors）

```css
:root {
  /* 辅助色 1 - 几何绿 */
  --ga-color-secondary-1: #10B981;
  --ga-color-secondary-1-light: #34D399;
  --ga-color-secondary-1-dark: #059669;
  
  /* 辅助色 2 - 几何橙 */
  --ga-color-secondary-2: #F59E0B;
  --ga-color-secondary-2-light: #FBBF24;
  --ga-color-secondary-2-dark: #D97706;
  
  /* 辅助色 3 - 几何红 */
  --ga-color-secondary-3: #EF4444;
  --ga-color-secondary-3-light: #F87171;
  --ga-color-secondary-3-dark: #DC2626;
  
  /* 辅助色 4 - 几何紫 */
  --ga-color-secondary-4: #8B5CF6;
  --ga-color-secondary-4-light: #A78BFA;
  --ga-color-secondary-4-dark: #7C3AED;
  
  /* 辅助色 5 - 几何粉 */
  --ga-color-secondary-5: #EC4899;
  --ga-color-secondary-5-light: #F472B6;
  --ga-color-secondary-5-dark: #DB2777;
  
  /* 辅助色渐变 - 几何多色 */
  --ga-gradient-secondary: linear-gradient(135deg, #10B981 0%, #F59E0B 25%, #EF4444 50%, #8B5CF6 75%, #EC4899 100%);
  --ga-gradient-secondary-radial: radial-gradient(circle, #10B981 0%, #F59E0B 25%, #EF4444 50%, #8B5CF6 75%, #EC4899 100%);
}
```

**使用场景：**
- 状态指示
- 分类标签
- 数据可视化
- 装饰性几何元素

### 中性色（Neutral Colors）

```css
:root {
  /* 背景 */
  --ga-color-bg-main: #FFFFFF;
  --ga-color-bg-secondary: #F9FAFB;
  --ga-color-bg-tertiary: #F3F4F6;
  --ga-color-bg-card: #FFFFFF;
  --ga-color-bg-hover: #F3F4F6;
  --ga-color-bg-active: #E5E7EB;
  
  /* 文字 */
  --ga-color-text-main: #111827;
  --ga-color-text-secondary: #6B7280;
  --ga-color-text-tertiary: #9CA3AF;
  --ga-color-text-disabled: #D1D5DB;
  
  /* 边框 */
  --ga-color-border-light: #E5E7EB;
  --ga-color-border-medium: #D1D5DB;
  --ga-color-border-dark: #9CA3AF;
}
```

**使用场景：**
- 页面背景、卡片背景
- 正文、说明文字
- 边框、分割线
- 占位符、禁用状态

### 语义色（Semantic Colors）

```css
:root {
  /* 成功 */
  --ga-color-success: #10B981;
  --ga-color-success-light: #D1FAE5;
  --ga-color-success-dark: #059669;
  
  /* 警告 */
  --ga-color-warning: #F59E0B;
  --ga-color-warning-light: #FEF3C7;
  --ga-color-warning-dark: #D97706;
  
  /* 错误 */
  --ga-color-error: #EF4444;
  --ga-color-error-light: #FEE2E2;
  --ga-color-error-dark: #DC2626;
  
  /* 信息 */
  --ga-color-info: #3B82F6;
  --ga-color-info-light: #DBEAFE;
  --ga-color-info-dark: #2563EB;
}
```

**使用场景：**
- 状态通知
- 表单验证
- 操作反馈
- 信息提示

---

## 3. 字体与排版（Typography）

### 字体家族

```css
:root {
  /* 英文字体 */
  --ga-font-family-en: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* 中文字体 */
  --ga-font-family-zh: 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif;
  
  /* 等宽字体 */
  --ga-font-family-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
}
```

### 字号层级

```css
:root {
  /* 标题 */
  --ga-font-size-h1: 48px;
  --ga-font-size-h2: 36px;
  --ga-font-size-h3: 30px;
  --ga-font-size-h4: 24px;
  --ga-font-size-h5: 20px;
  --ga-font-size-h6: 16px;
  
  /* 正文 */
  --ga-font-size-body-large: 18px;
  --ga-font-size-body: 16px;
  --ga-font-size-body-small: 14px;
  
  /* 辅助文字 */
  --ga-font-size-caption: 12px;
  --ga-font-size-label: 14px;
  --ga-font-size-overline: 11px;
}
```

### 行高与字重

```css
:root {
  /* 行高 */
  --ga-line-height-tight: 1.2;
  --ga-line-height-normal: 1.5;
  --ga-line-height-relaxed: 1.75;
  
  /* 字重 */
  --ga-font-weight-light: 300;
  --ga-font-weight-regular: 400;
  --ga-font-weight-medium: 500;
  --ga-font-weight-semibold: 600;
  --ga-font-weight-bold: 700;
}
```

### 排版规则

**标题样式：**
- H1: 48px, Bold (700), Line-height 1.2, Letter-spacing -0.02em
- H2: 36px, Semibold (600), Line-height 1.2, Letter-spacing -0.01em
- H3: 30px, Semibold (600), Line-height 1.3, Letter-spacing 0
- H4: 24px, Semibold (600), Line-height 1.4, Letter-spacing 0
- H5: 20px, Medium (500), Line-height 1.4, Letter-spacing 0
- H6: 16px, Medium (500), Line-height 1.5, Letter-spacing 0.01em

**正文样式：**
- Body Large: 18px, Regular (400), Line-height 1.6
- Body: 16px, Regular (400), Line-height 1.5
- Body Small: 14px, Regular (400), Line-height 1.5

**辅助文字样式：**
- Caption: 12px, Regular (400), Line-height 1.5, Letter-spacing 0.02em
- Label: 14px, Medium (500), Line-height 1.4
- Overline: 11px, Medium (500), Line-height 1.2, Letter-spacing 0.1em, Text-transform uppercase

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心

```css
:root {
  /* 版心宽度 */
  --ga-container-width-xs: 100%;
  --ga-container-width-sm: 640px;
  --ga-container-width-md: 768px;
  --ga-container-width-lg: 1024px;
  --ga-container-width-xl: 1280px;
  --ga-container-width-2xl: 1536px;
  
  /* 页面边距 */
  --ga-page-padding-xs: 16px;
  --ga-page-padding-sm: 24px;
  --ga-page-padding-md: 32px;
  --ga-page-padding-lg: 48px;
  --ga-page-padding-xl: 64px;
}
```

### 栅格系统

```css
:root {
  /* 栅格列数 */
  --ga-grid-columns: 12;
  
  /* 栅格间距 */
  --ga-grid-gutter-xs: 8px;
  --ga-grid-gutter-sm: 16px;
  --ga-grid-gutter-md: 24px;
  --ga-grid-gutter-lg: 32px;
  --ga-grid-gutter-xl: 48px;
  
  /* 栅格边距 */
  --ga-grid-margin-xs: 8px;
  --ga-grid-margin-sm: 16px;
  --ga-grid-margin-md: 24px;
  --ga-grid-margin-lg: 32px;
  --ga-grid-margin-xl: 48px;
}
```

### 响应式断点

```css
:root {
  /* 断点 */
  --ga-breakpoint-xs: 0;
  --ga-breakpoint-sm: 640px;
  --ga-breakpoint-md: 768px;
  --ga-breakpoint-lg: 1024px;
  --ga-breakpoint-xl: 1280px;
  --ga-breakpoint-2xl: 1536px;
}
```

### 留白系统

```css
:root {
  /* 基础间距 */
  --ga-space-0: 0;
  --ga-space-1: 4px;
  --ga-space-2: 8px;
  --ga-space-3: 12px;
  --ga-space-4: 16px;
  --ga-space-5: 20px;
  --ga-space-6: 24px;
  --ga-space-8: 32px;
  --ga-space-10: 40px;
  --ga-space-12: 48px;
  --ga-space-16: 64px;
  --ga-space-20: 80px;
  --ga-space-24: 96px;
  --ga-space-32: 128px;
}
```

**信息密度：** 中等偏高，适合展示结构化信息和数据内容

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

**尺寸：**
- Extra Small: 28px height, 12px font-size, 8px padding
- Small: 32px height, 14px font-size, 12px padding
- Medium: 40px height, 16px font-size, 16px padding
- Large: 48px height, 18px font-size, 20px padding
- Extra Large: 56px height, 20px font-size, 24px padding

**状态：**
- Default: 主色背景，白色文字
- Hover: 主色加深背景
- Active: 主色更深背景，轻微缩放
- Disabled: 灰色背景，灰色文字，不可点击
- Loading: 显示加载动画

**圆角：**
- Square: 0px
- Small: 4px
- Medium: 8px
- Large: 12px
- Pill: 9999px

**颜色变体：**
- Primary: 主色
- Secondary: 辅助色
- Outline: 透明背景，主色边框
- Ghost: 透明背景，主色文字
- Link: 无背景，主色文字，下划线

```css
.ga-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: var(--ga-radius-md);
  transition: all 0.2s ease;
  cursor: pointer;
}

.ga-button-primary {
  background: var(--ga-color-primary);
  color: #FFFFFF;
}

.ga-button-primary:hover {
  background: var(--ga-color-primary-dark);
  transform: translateY(-1px);
}

.ga-button-primary:active {
  background: var(--ga-color-primary-dark);
  transform: translateY(0);
}
```

### Card（卡片）

**使用场景：**
- 内容分组
- 信息展示
- 功能模块
- 数据卡片

**样式规范：**
- 背景: 白色 (#FFFFFF)
- 阴影: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)
- 圆角: 8px - 16px
- 内边距: 16px - 32px
- 边框: 1px solid #E5E7EB

**悬停效果：**
- 阴影加深: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
- 轻微上移: translateY(-2px)
- 过渡时间: 0.2s

```css
.ga-card {
  background: var(--ga-color-bg-card);
  border-radius: var(--ga-radius-lg);
  box-shadow: var(--ga-shadow-sm);
  border: 1px solid var(--ga-color-border-light);
  padding: var(--ga-space-6);
  transition: all 0.2s ease;
}

.ga-card:hover {
  box-shadow: var(--ga-shadow-md);
  transform: translateY(-2px);
}
```

### Input（输入框）

**尺寸：**
- Small: 32px height, 14px font-size
- Medium: 40px height, 16px font-size
- Large: 48px height, 18px font-size

**状态：**
- Default: 浅灰色边框
- Focus: 主色边框，主色阴影
- Error: 红色边框，错误提示
- Disabled: 灰色背景，不可编辑
- Success: 绿色边框

**圆角：**
- Small: 4px
- Medium: 8px
- Large: 12px

```css
.ga-input {
  width: 100%;
  padding: var(--ga-space-3) var(--ga-space-4);
  font-size: var(--ga-font-size-body);
  border: 1px solid var(--ga-color-border-light);
  border-radius: var(--ga-radius-md);
  transition: all 0.2s ease;
}

.ga-input:focus {
  outline: none;
  border-color: var(--ga-color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.ga-input-error {
  border-color: var(--ga-color-error);
}
```

### Upload（上传）

**样式规范：**
- 虚线边框: 2px dashed #D1D5DB
- 圆角: 8px - 12px
- 内边距: 32px - 48px
- 悬停: 主色边框，浅蓝色背景
- 拖拽: 主色边框，主色背景

**图标：**
- 默认: 上传图标（outline）
- 悬停: 上传图标（filled）
- 成功: 对勾图标

```css
.ga-upload {
  border: 2px dashed var(--ga-color-border-medium);
  border-radius: var(--ga-radius-lg);
  padding: var(--ga-space-8) var(--ga-space-6);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.ga-upload:hover {
  border-color: var(--ga-color-primary);
  background: var(--ga-color-info-light);
}

.ga-upload-dragging {
  border-color: var(--ga-color-primary);
  background: var(--ga-color-info-light);
}
```

### Navigation（导航）

**结构：**
- 顶部导航: Logo + 菜单项 + 操作按钮
- 侧边导航: Logo + 菜单项 + 用户信息
- 面包屑: 首页 > 一级 > 二级 > 当前

**交互：**
- Hover: 背景变色，下划线动画
- Active: 主色背景，白色文字
- 展开: 下拉菜单，平滑过渡

```css
.ga-nav-item {
  padding: var(--ga-space-3) var(--ga-space-4);
  border-radius: var(--ga-radius-md);
  transition: all 0.2s ease;
  cursor: pointer;
}

.ga-nav-item:hover {
  background: var(--ga-color-bg-tertiary);
}

.ga-nav-item-active {
  background: var(--ga-color-primary);
  color: #FFFFFF;
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格

**类型：**
- Outline: 线框图标，2px 描边
- Filled: 实心图标
- Duotone: 双色调图标

**特征：**
- 几何化: 基于基本几何形状
- 简洁: 去除多余细节
- 现代: 线条流畅，比例协调
- 一致: 统一的视觉语言

**尺寸：**
- Extra Small: 16px
- Small: 20px
- Medium: 24px
- Large: 32px
- Extra Large: 48px

**圆角：**
- Sharp: 0px
- Small: 2px
- Medium: 4px
- Large: 8px

### 插画风格

**类型：**
- 几何抽象: 基本几何形状组合
- 渐变填充: 多色渐变效果
- 线条装饰: 几何线条点缀

**原则：**
- 简洁: 避免过度装饰
- 抽象: 不追求写实
- 现代: 符合当代审美
- 功能: 辅助理解内容

**使用场景：**
- 空状态页面
- 错误页面
- 功能介绍
- 营销页面

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 状态

**按钮：**
- 背景加深
- 轻微上移（1-2px）
- 过渡时间: 0.2s

**卡片：**
- 阴影加深
- 轻微上移（2-4px）
- 过渡时间: 0.2s

**链接：**
- 下划线动画
- 颜色加深
- 过渡时间: 0.2s

### Active 状态

**按钮：**
- 背景更深
- 轻微下移（1-2px）
- 过渡时间: 0.1s

**卡片：**
- 阴影恢复
- 位置恢复
- 过渡时间: 0.1s

### Focus 状态

**输入框：**
- 主色边框
- 主色阴影（0 0 0 3px rgba(59, 130, 246, 0.1)）
- 过渡时间: 0.2s

**按钮：**
- 外部轮廓（outline）
- 过渡时间: 0.2s

### 动效节奏

**缓动函数：**
- Ease: cubic-bezier(0.4, 0, 0.2, 1)
- Ease In: cubic-bezier(0.4, 0, 1, 1)
- Ease Out: cubic-bezier(0, 0, 0.2, 1)
- Ease In Out: cubic-bezier(0.4, 0, 0.2, 1)

**持续时间：**
- 快速: 0.1s - 0.2s（按钮 hover、输入框 focus）
- 标准: 0.2s - 0.3s（卡片 hover、下拉菜单）
- 缓慢: 0.3s - 0.5s（页面切换、模态框）

### 操作反馈

**成功：**
- 绿色对勾动画
- 成功提示消息
- 过渡时间: 0.3s

**错误：**
- 红色错误图标
- 错误提示消息
- 抖动动画（0.5s）

**加载：**
- 旋转加载动画
- 进度条
- 骨架屏

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens

```css
:root {
  /* Primary */
  --ga-color-primary-50: #EFF6FF;
  --ga-color-primary-100: #DBEAFE;
  --ga-color-primary-200: #BFDBFE;
  --ga-color-primary-300: #93C5FD;
  --ga-color-primary-400: #60A5FA;
  --ga-color-primary-500: #3B82F6;
  --ga-color-primary-600: #2563EB;
  --ga-color-primary-700: #1D4ED8;
  --ga-color-primary-800: #1E40AF;
  --ga-color-primary-900: #1E3A8A;
  
  /* Secondary */
  --ga-color-secondary-1-50: #D1FAE5;
  --ga-color-secondary-1-100: #A7F3D0;
  --ga-color-secondary-1-200: #6EE7B7;
  --ga-color-secondary-1-300: #34D399;
  --ga-color-secondary-1-400: #10B981;
  --ga-color-secondary-1-500: #059669;
  --ga-color-secondary-1-600: #047857;
  --ga-color-secondary-1-700: #065F46;
  --ga-color-secondary-1-800: #064E3B;
  --ga-color-secondary-1-900: #064E3B;
  
  /* Neutral */
  --ga-color-neutral-50: #F9FAFB;
  --ga-color-neutral-100: #F3F4F6;
  --ga-color-neutral-200: #E5E7EB;
  --ga-color-neutral-300: #D1D5DB;
  --ga-color-neutral-400: #9CA3AF;
  --ga-color-neutral-500: #6B7280;
  --ga-color-neutral-600: #4B5563;
  --ga-color-neutral-700: #374151;
  --ga-color-neutral-800: #1F2937;
  --ga-color-neutral-900: #111827;
}
```

### Spacing Tokens

```css
:root {
  --ga-spacing-0: 0;
  --ga-spacing-px: 1px;
  --ga-spacing-0-5: 2px;
  --ga-spacing-1: 4px;
  --ga-spacing-1-5: 6px;
  --ga-spacing-2: 8px;
  --ga-spacing-2-5: 10px;
  --ga-spacing-3: 12px;
  --ga-spacing-3-5: 14px;
  --ga-spacing-4: 16px;
  --ga-spacing-5: 20px;
  --ga-spacing-6: 24px;
  --ga-spacing-7: 28px;
  --ga-spacing-8: 32px;
  --ga-spacing-9: 36px;
  --ga-spacing-10: 40px;
  --ga-spacing-11: 44px;
  --ga-spacing-12: 48px;
  --ga-spacing-14: 56px;
  --ga-spacing-16: 64px;
  --ga-spacing-20: 80px;
  --ga-spacing-24: 96px;
  --ga-spacing-28: 112px;
  --ga-spacing-32: 128px;
  --ga-spacing-36: 144px;
  --ga-spacing-40: 160px;
  --ga-spacing-44: 176px;
  --ga-spacing-48: 192px;
  --ga-spacing-52: 208px;
  --ga-spacing-56: 224px;
  --ga-spacing-60: 240px;
  --ga-spacing-64: 256px;
  --ga-spacing-72: 288px;
  --ga-spacing-80: 320px;
  --ga-spacing-96: 384px;
}
```

### Radius Tokens

```css
:root {
  --ga-radius-none: 0;
  --ga-radius-sm: 2px;
  --ga-radius-base: 4px;
  --ga-radius-md: 6px;
  --ga-radius-lg: 8px;
  --ga-radius-xl: 12px;
  --ga-radius-2xl: 16px;
  --ga-radius-3xl: 24px;
  --ga-radius-full: 9999px;
}
```

### Shadow Tokens

```css
:root {
  --ga-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ga-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --ga-shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --ga-shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --ga-shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --ga-shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --ga-shadow-2xl: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
  --ga-shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  --ga-shadow-none: 0 0 #0000;
}
```

### Typography Tokens

```css
:root {
  /* Font Family */
  --ga-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --ga-font-serif: 'Georgia', 'Cambria', 'Times New Roman', Times, serif;
  --ga-font-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
  
  /* Font Size */
  --ga-text-xs: 0.75rem; /* 12px */
  --ga-text-sm: 0.875rem; /* 14px */
  --ga-text-base: 1rem; /* 16px */
  --ga-text-lg: 1.125rem; /* 18px */
  --ga-text-xl: 1.25rem; /* 20px */
  --ga-text-2xl: 1.5rem; /* 24px */
  --ga-text-3xl: 1.875rem; /* 30px */
  --ga-text-4xl: 2.25rem; /* 36px */
  --ga-text-5xl: 3rem; /* 48px */
  --ga-text-6xl: 3.75rem; /* 60px */
  --ga-text-7xl: 4.5rem; /* 72px */
  --ga-text-8xl: 6rem; /* 96px */
  --ga-text-9xl: 8rem; /* 128px */
  
  /* Font Weight */
  --ga-font-thin: 100;
  --ga-font-extralight: 200;
  --ga-font-light: 300;
  --ga-font-normal: 400;
  --ga-font-medium: 500;
  --ga-font-semibold: 600;
  --ga-font-bold: 700;
  --ga-font-extrabold: 800;
  --ga-font-black: 900;
  
  /* Line Height */
  --ga-leading-none: 1;
  --ga-leading-tight: 1.25;
  --ga-leading-snug: 1.375;
  --ga-leading-normal: 1.5;
  --ga-leading-relaxed: 1.625;
  --ga-leading-loose: 2;
  
  /* Letter Spacing */
  --ga-tracking-tighter: -0.05em;
  --ga-tracking-tight: -0.025em;
  --ga-tracking-normal: 0;
  --ga-tracking-wide: 0.025em;
  --ga-tracking-wider: 0.05em;
  --ga-tracking-widest: 0.1em;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）

**设计原则：**
- ✅ 几何化设计语言：学习如何使用基本几何形状构建视觉系统
- ✅ 结构化布局：学习栅格系统和留白规则的应用
- ✅ 色彩对比：学习如何使用强对比色彩创造视觉冲击力
- ✅ 简洁图标：学习几何化图标的设计方法
- ✅ 渐变应用：学习多色渐变的合理使用

**技术实现：**
- ✅ Design Token 系统：学习如何组织和管理设计变量
- ✅ 响应式设计：学习如何适配不同设备尺寸
- ✅ 组件化思维：学习如何构建可复用的 UI 组件
- ✅ 动效设计：学习如何使用缓动函数和持续时间

### 不应复刻的元素（品牌 / 插画 / 内容）

**品牌元素：**
- ❌ 品牌标识和 Logo
- ❌ 品牌名称和口号
- ❌ 特定的品牌配色方案
- ❌ 品牌专属的视觉元素

**插画内容：**
- ❌ 具体的插画作品
- ❌ 插画中的具体场景
- ❌ 插画中的角色形象
- ❌ 插画中的具体故事

**内容素材：**
- ❌ 产品截图
- ❌ 用户评价
- ❌ 营销文案
- ❌ 数据和统计信息

**建议：**
- 学习几何抽象的设计原则和方法论
- 参考色彩系统和排版规则
- 借鉴组件结构和交互模式
- 使用自己的品牌元素和内容
- 创建独特的视觉识别系统

---

**设计系统版本：** v1.0.0
**最后更新：** 2025-02-02
**维护者：** Design System Team