# 线框设计系统（Wireframe Design System）

## 1. 设计风格总览（Design DNA）

**核心关键词：** 简洁、结构化、功能性、低保真、快速原型

**适用产品类型：**
- 产品原型设计
- UI/UX 设计流程
- 需求沟通与评审
- 开发参考文档
- 用户测试与反馈

**设计理念：**
线框设计风格以简洁的线条和结构化布局为核心，强调功能性和信息层次，去除视觉装饰，专注于内容结构和交互逻辑。通过低保真的表现形式，快速验证设计思路，促进团队沟通，降低设计成本。适合产品设计的早期阶段，帮助团队快速达成共识，明确产品功能和用户体验。

---

## 2. 颜色系统（Color System）

### 主色（Primary Colors）

```css
:root {
  /* 主色 - 线框蓝 */
  --wd-color-primary: #3B82F6;
  --wd-color-primary-light: #60A5FA;
  --wd-color-primary-dark: #2563EB;
  
  /* 主色渐变 - 线框渐变 */
  --wd-gradient-primary: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
}
```

**使用场景：**
- 主要交互元素
- 重要信息强调
- 链接和导航
- 状态指示

### 辅助色（Secondary Colors）

```css
:root {
  /* 辅助色 1 - 线框绿 */
  --wd-color-secondary-1: #10B981;
  --wd-color-secondary-1-light: #34D399;
  --wd-color-secondary-1-dark: #059669;
  
  /* 辅助色 2 - 线框黄 */
  --wd-color-secondary-2: #F59E0B;
  --wd-color-secondary-2-light: #FBBF24;
  --wd-color-secondary-2-dark: #D97706;
  
  /* 辅助色 3 - 线框红 */
  --wd-color-secondary-3: #EF4444;
  --wd-color-secondary-3-light: #F87171;
  --wd-color-secondary-3-dark: #DC2626;
  
  /* 辅助色 4 - 线框紫 */
  --wd-color-secondary-4: #8B5CF6;
  --wd-color-secondary-4-light: #A78BFA;
  --wd-color-secondary-4-dark: #7C3AED;
  
  /* 辅助色 5 - 线框粉 */
  --wd-color-secondary-5: #EC4899;
  --wd-color-secondary-5-light: #F472B6;
  --wd-color-secondary-5-dark: #DB2777;
}
```

**使用场景：**
- 状态标签
- 分类标识
- 数据可视化
- 装饰元素

### 中性色（Neutral Colors）

```css
:root {
  /* 背景 */
  --wd-color-bg-main: #FFFFFF;
  --wd-color-bg-secondary: #F9FAFB;
  --wd-color-bg-tertiary: #F3F4F6;
  --wd-color-bg-card: #FFFFFF;
  --wd-color-bg-hover: #F3F4F6;
  --wd-color-bg-active: #E5E7EB;
  
  /* 文字 */
  --wd-color-text-main: #111827;
  --wd-color-text-secondary: #6B7280;
  --wd-color-text-tertiary: #9CA3AF;
  --wd-color-text-disabled: #D1D5DB;
  
  /* 边框 */
  --wd-color-border-light: #E5E7EB;
  --wd-color-border-medium: #D1D5DB;
  --wd-color-border-dark: #9CA3AF;
  
  /* 线框色 */
  --wd-color-wireframe: #9CA3AF;
  --wd-color-wireframe-light: #D1D5DB;
  --wd-color-wireframe-dark: #6B7280;
}
```

**使用场景：**
- 页面背景、卡片背景
- 正文、说明文字
- 边框、分割线
- 线框结构线

### 语义色（Semantic Colors）

```css
:root {
  /* 成功 */
  --wd-color-success: #10B981;
  --wd-color-success-light: #D1FAE5;
  --wd-color-success-dark: #059669;
  
  /* 警告 */
  --wd-color-warning: #F59E0B;
  --wd-color-warning-light: #FEF3C7;
  --wd-color-warning-dark: #D97706;
  
  /* 错误 */
  --wd-color-error: #EF4444;
  --wd-color-error-light: #FEE2E2;
  --wd-color-error-dark: #DC2626;
  
  /* 信息 */
  --wd-color-info: #3B82F6;
  --wd-color-info-light: #DBEAFE;
  --wd-color-info-dark: #2563EB;
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
  --wd-font-family-en: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* 中文字体 */
  --wd-font-family-zh: 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif;
  
  /* 等宽字体 */
  --wd-font-family-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
}
```

### 字号层级

```css
:root {
  /* 标题 */
  --wd-font-size-h1: 32px;
  --wd-font-size-h2: 24px;
  --wd-font-size-h3: 20px;
  --wd-font-size-h4: 16px;
  --wd-font-size-h5: 14px;
  --wd-font-size-h6: 12px;
  
  /* 正文 */
  --wd-font-size-body-large: 18px;
  --wd-font-size-body: 16px;
  --wd-font-size-body-small: 14px;
  
  /* 辅助文字 */
  --wd-font-size-caption: 12px;
  --wd-font-size-label: 14px;
  --wd-font-size-overline: 11px;
}
```

### 行高与字重

```css
:root {
  /* 行高 */
  --wd-line-height-tight: 1.25;
  --wd-line-height-normal: 1.5;
  --wd-line-height-relaxed: 1.75;
  
  /* 字重 */
  --wd-font-weight-light: 300;
  --wd-font-weight-regular: 400;
  --wd-font-weight-medium: 500;
  --wd-font-weight-semibold: 600;
  --wd-font-weight-bold: 700;
}
```

### 排版规则

**标题样式：**
- H1: 32px, Bold (700), Line-height 1.25, Letter-spacing 0.05em
- H2: 24px, Semibold (600), Line-height 1.25, Letter-spacing 0.05em
- H3: 20px, Semibold (600), Line-height 1.3, Letter-spacing 0.02em
- H4: 16px, Medium (500), Line-height 1.4, Letter-spacing 0
- H5: 14px, Medium (500), Line-height 1.4, Letter-spacing 0
- H6: 12px, Medium (500), Line-height 1.5, Letter-spacing 0.05em

**正文样式：**
- Body Large: 18px, Regular (400), Line-height 1.6
- Body: 16px, Regular (400), Line-height 1.5
- Body Small: 14px, Regular (400), Line-height 1.5

**辅助文字样式：**
- Caption: 12px, Regular (400), Line-height 1.5, Letter-spacing 0.05em
- Label: 14px, Medium (500), Line-height 1.4
- Overline: 11px, Medium (500), Line-height 1.2, Letter-spacing 0.1em, Text-transform uppercase

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心

```css
:root {
  /* 版心宽度 */
  --wd-container-width-xs: 100%;
  --wd-container-width-sm: 640px;
  --wd-container-width-md: 768px;
  --wd-container-width-lg: 1024px;
  --wd-container-width-xl: 1200px;
  --wd-container-width-2xl: 1280px;
  
  /* 页面边距 */
  --wd-page-padding-xs: 16px;
  --wd-page-padding-sm: 24px;
  --wd-page-padding-md: 32px;
  --wd-page-padding-lg: 32px;
  --wd-page-padding-xl: 32px;
}
```

### 栅格系统

```css
:root {
  /* 栅格列数 */
  --wd-grid-columns: 12;
  
  /* 栅格间距 */
  --wd-grid-gutter-xs: 8px;
  --wd-grid-gutter-sm: 16px;
  --wd-grid-gutter-md: 24px;
  --wd-grid-gutter-lg: 24px;
  --wd-grid-gutter-xl: 24px;
  
  /* 栅格边距 */
  --wd-grid-margin-xs: 8px;
  --wd-grid-margin-sm: 16px;
  --wd-grid-margin-md: 24px;
  --wd-grid-margin-lg: 24px;
  --wd-grid-margin-xl: 24px;
}
```

### 响应式断点

```css
:root {
  /* 断点 */
  --wd-breakpoint-xs: 0;
  --wd-breakpoint-sm: 640px;
  --wd-breakpoint-md: 768px;
  --wd-breakpoint-lg: 1024px;
  --wd-breakpoint-xl: 1280px;
  --wd-breakpoint-2xl: 1536px;
}
```

### 留白系统

```css
:root {
  /* 基础间距 */
  --wd-space-0: 0;
  --wd-space-1: 4px;
  --wd-space-2: 8px;
  --wd-space-3: 12px;
  --wd-space-4: 16px;
  --wd-space-5: 20px;
  --wd-space-6: 24px;
  --wd-space-8: 32px;
  --wd-space-10: 40px;
  --wd-space-12: 48px;
  --wd-space-16: 64px;
  --wd-space-20: 80px;
  --wd-space-24: 96px;
  --wd-space-32: 128px;
}
```

**信息密度：** 中等，适合展示结构化信息和原型内容

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

**尺寸：**
- Extra Small: 28px height, 12px font-size, 8px padding
- Small: 32px height, 14px font-size, 12px padding
- Medium: 40px height, 16px font-size, 16px padding
- Large: 48px height, 18px font-size, 20px padding

**状态：**
- Default: 线框边框，灰色文字
- Hover: 边框加深，背景浅灰
- Active: 边框更深，背景更深
- Disabled: 灰色边框，灰色文字，不可点击
- Loading: 显示加载动画

**圆角：**
- Square: 0px
- Small: 4px
- Medium: 6px
- Large: 8px
- Pill: 9999px

**颜色变体：**
- Primary: 主色边框
- Secondary: 辅助色边框
- Outline: 透明背景，线框边框
- Ghost: 透明背景，灰色文字
- Link: 无背景，灰色文字，下划线

```css
.wd-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: 1px solid var(--wd-color-border-medium);
  border-radius: var(--wd-radius-md);
  background: transparent;
  color: var(--wd-color-text-main);
  transition: all 0.2s ease;
  cursor: pointer;
}

.wd-button:hover {
  border-color: var(--wd-color-border-dark);
  background: var(--wd-color-bg-tertiary);
}

.wd-button:active {
  border-color: var(--wd-color-border-dark);
  background: var(--wd-color-bg-active);
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
- 边框: 1px solid #E5E7EB
- 圆角: 6px - 8px
- 内边距: 16px - 24px
- 阴影: 无（线框风格）

**悬停效果：**
- 边框加深
- 背景浅灰
- 过渡时间: 0.2s

```css
.wd-card {
  background: var(--wd-color-bg-card);
  border: 1px solid var(--wd-color-border-light);
  border-radius: var(--wd-radius-lg);
  padding: var(--wd-space-6);
  transition: all 0.2s ease;
}

.wd-card:hover {
  border-color: var(--wd-color-border-medium);
  background: var(--wd-color-bg-secondary);
}
```

### Input（输入框）

**尺寸：**
- Small: 32px height, 14px font-size
- Medium: 40px height, 16px font-size
- Large: 48px height, 18px font-size

**状态：**
- Default: 灰色边框
- Focus: 主色边框，主色阴影
- Error: 红色边框，错误提示
- Disabled: 灰色背景，不可编辑
- Success: 绿色边框

**圆角：**
- Small: 4px
- Medium: 6px
- Large: 8px

```css
.wd-input {
  width: 100%;
  padding: var(--wd-space-3) var(--wd-space-4);
  font-size: var(--wd-font-size-body);
  border: 1px solid var(--wd-color-border-light);
  border-radius: var(--wd-radius-md);
  background: var(--wd-color-bg-main);
  transition: all 0.2s ease;
}

.wd-input:focus {
  outline: none;
  border-color: var(--wd-color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.wd-input-error {
  border-color: var(--wd-color-error);
}
```

### Upload（上传）

**样式规范：**
- 虚线边框: 2px dashed #D1D5DB
- 圆角: 6px - 8px
- 内边距: 32px - 48px
- 悬停: 边框加深，浅灰背景
- 拖拽: 主色边框，浅蓝背景

**图标：**
- 默认: 上传图标（outline）
- 悬停: 上传图标（outline）
- 成功: 对勾图标

```css
.wd-upload {
  border: 2px dashed var(--wd-color-border-medium);
  border-radius: var(--wd-radius-lg);
  padding: var(--wd-space-8) var(--wd-space-6);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.wd-upload:hover {
  border-color: var(--wd-color-border-dark);
  background: var(--wd-color-bg-secondary);
}

.wd-upload-dragging {
  border-color: var(--wd-color-primary);
  background: var(--wd-color-info-light);
}
```

### Navigation（导航）

**结构：**
- 顶部导航: Logo + 菜单项 + 操作按钮
- 侧边导航: Logo + 菜单项 + 用户信息
- 面包屑: 首页 > 一级 > 二级 > 当前

**交互：**
- Hover: 背景浅灰，下划线动画
- Active: 主色边框，主色文字
- 展开: 下拉菜单，平滑过渡

```css
.wd-nav-item {
  padding: var(--wd-space-3) var(--wd-space-4);
  border-radius: var(--wd-radius-md);
  transition: all 0.2s ease;
  cursor: pointer;
}

.wd-nav-item:hover {
  background: var(--wd-color-bg-tertiary);
}

.wd-nav-item-active {
  border: 1px solid var(--wd-color-primary);
  color: var(--wd-color-primary);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格

**类型：**
- Outline: 线框图标，2px 描边
- Filled: 实心图标（较少使用）

**特征：**
- 线框化: 基于线条的简洁设计
- 结构化: 强调形状和结构
- 功能性: 专注于传达功能
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
- 线框插画: 简洁的线条勾勒
- 结构化插画: 强调结构和布局
- 占位插画: 用于原型阶段的占位图

**原则：**
- 简洁: 避免过度装饰
- 结构: 强调信息结构
- 功能: 辅助理解内容
- 快速: 易于快速创建和修改

**使用场景：**
- 空状态页面
- 错误页面
- 功能介绍
- 营销页面

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 状态

**按钮：**
- 边框加深
- 背景浅灰
- 过渡时间: 0.2s

**卡片：**
- 边框加深
- 背景浅灰
- 过渡时间: 0.2s

**链接：**
- 下划线动画
- 颜色加深
- 过渡时间: 0.2s

### Active 状态

**按钮：**
- 边框更深
- 背景更深
- 过渡时间: 0.1s

**卡片：**
- 边框恢复
- 背景恢复
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
- 快速: 0.1s - 0.15s（按钮 hover、输入框 focus）
- 标准: 0.2s（卡片 hover、下拉菜单）
- 缓慢: 0.3s（页面切换、模态框）

### 操作反馈

**成功：**
- 绿色边框
- 成功提示消息
- 过渡时间: 0.2s

**错误：**
- 红色边框
- 错误提示消息
- 抖动动画（0.3s）

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
  --wd-color-primary-50: #EFF6FF;
  --wd-color-primary-100: #DBEAFE;
  --wd-color-primary-200: #BFDBFE;
  --wd-color-primary-300: #93C5FD;
  --wd-color-primary-400: #60A5FA;
  --wd-color-primary-500: #3B82F6;
  --wd-color-primary-600: #2563EB;
  --wd-color-primary-700: #1D4ED8;
  --wd-color-primary-800: #1E40AF;
  --wd-color-primary-900: #1E3A8A;
  
  /* Secondary */
  --wd-color-secondary-1-50: #D1FAE5;
  --wd-color-secondary-1-100: #A7F3D0;
  --wd-color-secondary-1-200: #6EE7B7;
  --wd-color-secondary-1-300: #34D399;
  --wd-color-secondary-1-400: #10B981;
  --wd-color-secondary-1-500: #059669;
  --wd-color-secondary-1-600: #047857;
  --wd-color-secondary-1-700: #065F46;
  --wd-color-secondary-1-800: #064E3B;
  --wd-color-secondary-1-900: #064E3B;
  
  /* Neutral */
  --wd-color-neutral-50: #F9FAFB;
  --wd-color-neutral-100: #F3F4F6;
  --wd-color-neutral-200: #E5E7EB;
  --wd-color-neutral-300: #D1D5DB;
  --wd-color-neutral-400: #9CA3AF;
  --wd-color-neutral-500: #6B7280;
  --wd-color-neutral-600: #4B5563;
  --wd-color-neutral-700: #374151;
  --wd-color-neutral-800: #1F2937;
  --wd-color-neutral-900: #111827;
  
  /* Wireframe */
  --wd-color-wireframe-50: #F3F4F6;
  --wd-color-wireframe-100: #E5E7EB;
  --wd-color-wireframe-200: #D1D5DB;
  --wd-color-wireframe-300: #9CA3AF;
  --wd-color-wireframe-400: #6B7280;
  --wd-color-wireframe-500: #4B5563;
  --wd-color-wireframe-600: #374151;
  --wd-color-wireframe-700: #1F2937;
  --wd-color-wireframe-800: #111827;
  --wd-color-wireframe-900: #000000;
}
```

### Spacing Tokens

```css
:root {
  --wd-spacing-0: 0;
  --wd-spacing-px: 1px;
  --wd-spacing-0-5: 2px;
  --wd-spacing-1: 4px;
  --wd-spacing-1-5: 6px;
  --wd-spacing-2: 8px;
  --wd-spacing-2-5: 10px;
  --wd-spacing-3: 12px;
  --wd-spacing-3-5: 14px;
  --wd-spacing-4: 16px;
  --wd-spacing-5: 20px;
  --wd-spacing-6: 24px;
  --wd-spacing-7: 28px;
  --wd-spacing-8: 32px;
  --wd-spacing-9: 36px;
  --wd-spacing-10: 40px;
  --wd-spacing-11: 44px;
  --wd-spacing-12: 48px;
  --wd-spacing-14: 56px;
  --wd-spacing-16: 64px;
  --wd-spacing-20: 80px;
  --wd-spacing-24: 96px;
  --wd-spacing-28: 112px;
  --wd-spacing-32: 128px;
  --wd-spacing-36: 144px;
  --wd-spacing-40: 160px;
  --wd-spacing-44: 176px;
  --wd-spacing-48: 192px;
  --wd-spacing-52: 208px;
  --wd-spacing-56: 224px;
  --wd-spacing-60: 240px;
  --wd-spacing-64: 256px;
  --wd-spacing-72: 288px;
  --wd-spacing-80: 320px;
  --wd-spacing-96: 384px;
}
```

### Radius Tokens

```css
:root {
  --wd-radius-none: 0;
  --wd-radius-sm: 2px;
  --wd-radius-base: 4px;
  --wd-radius-md: 6px;
  --wd-radius-lg: 8px;
  --wd-radius-xl: 12px;
  --wd-radius-2xl: 16px;
  --wd-radius-3xl: 24px;
  --wd-radius-full: 9999px;
}
```

### Border Tokens

```css
:root {
  --wd-border-none: 0;
  --wd-border-thin: 1px;
  --wd-border-base: 2px;
  --wd-border-thick: 3px;
  --wd-border-heavy: 4px;
}
```

### Typography Tokens

```css
:root {
  /* Font Family */
  --wd-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --wd-font-serif: 'Georgia', 'Cambria', 'Times New Roman', Times, serif;
  --wd-font-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
  
  /* Font Size */
  --wd-text-xs: 0.75rem; /* 12px */
  --wd-text-sm: 0.875rem; /* 14px */
  --wd-text-base: 1rem; /* 16px */
  --wd-text-lg: 1.125rem; /* 18px */
  --wd-text-xl: 1.25rem; /* 20px */
  --wd-text-2xl: 1.5rem; /* 24px */
  --wd-text-3xl: 1.875rem; /* 30px */
  --wd-text-4xl: 2.25rem; /* 36px */
  --wd-text-5xl: 3rem; /* 48px */
  --wd-text-6xl: 3.75rem; /* 60px */
  --wd-text-7xl: 4.5rem; /* 72px */
  --wd-text-8xl: 6rem; /* 96px */
  --wd-text-9xl: 8rem; /* 128px */
  
  /* Font Weight */
  --wd-font-thin: 100;
  --wd-font-extralight: 200;
  --wd-font-light: 300;
  --wd-font-normal: 400;
  --wd-font-medium: 500;
  --wd-font-semibold: 600;
  --wd-font-bold: 700;
  --wd-font-extrabold: 800;
  --wd-font-black: 900;
  
  /* Line Height */
  --wd-leading-none: 1;
  --wd-leading-tight: 1.25;
  --wd-leading-snug: 1.375;
  --wd-leading-normal: 1.5;
  --wd-leading-relaxed: 1.625;
  --wd-leading-loose: 2;
  
  /* Letter Spacing */
  --wd-tracking-tighter: -0.05em;
  --wd-tracking-tight: -0.025em;
  --wd-tracking-normal: 0;
  --wd-tracking-wide: 0.025em;
  --wd-tracking-wider: 0.05em;
  --wd-tracking-widest: 0.1em;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）

**设计原则：**
- ✅ 线框化设计语言：学习如何使用简洁的线条构建视觉系统
- ✅ 结构化布局：学习栅格系统和留白规则的应用
- ✅ 功能导向：学习如何专注于功能和信息结构
- ✅ 快速原型：学习如何快速创建和迭代设计
- ✅ 团队协作：学习如何通过线框促进团队沟通

**技术实现：**
- ✅ Design Token 系统：学习如何组织和管理设计变量
- ✅ 响应式设计：学习如何适配不同设备尺寸
- ✅ 组件化思维：学习如何构建可复用的 UI 组件
- ✅ 原型工具：学习如何使用原型工具快速验证设计

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
- 学习线框设计的设计原则和方法论
- 参考色彩系统和排版规则
- 借鉴组件结构和交互模式
- 使用自己的品牌元素和内容
- 创建独特的视觉识别系统
- 专注于功能性和信息结构
- 快速迭代和验证设计思路

---

**设计系统版本：** v1.0.0
**最后更新：** 2025-02-02
**维护者：** Design System Team