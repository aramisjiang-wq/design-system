# 模糊设计系统（Blur Design System）

## 1. 设计风格总览（Design DNA）

**核心关键词：** 模糊、柔和、梦幻、现代、层次感

**适用产品类型：**
- 现代化 Web 应用
- 移动端应用
- 创意设计平台
- 品牌官网
- 营销页面

**设计理念：**
模糊设计风格以模糊效果和柔和的视觉层次为核心，通过背景模糊、前景清晰的手法创造出梦幻般的视觉体验。强调层次感和深度感，使用渐变、阴影和模糊效果来构建空间关系。色彩柔和过渡，形状圆润，适合需要展现现代感和优雅气质的产品。

---

## 2. 颜色系统（Color System）

### 主色（Primary Colors）

```css
:root {
  /* 主色 - 模糊蓝 */
  --bd-color-primary: #6366F1;
  --bd-color-primary-light: #818CF8;
  --bd-color-primary-dark: #4F46E5;
  
  /* 主色渐变 - 模糊渐变 */
  --bd-gradient-primary: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%);
  --bd-gradient-primary-soft: linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(79, 70, 229, 0.8) 100%);
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
  /* 辅助色 1 - 模糊粉 */
  --bd-color-secondary-1: #EC4899;
  --bd-color-secondary-1-light: #F472B6;
  --bd-color-secondary-1-dark: #DB2777;
  
  /* 辅助色 2 - 模糊紫 */
  --bd-color-secondary-2: #8B5CF6;
  --bd-color-secondary-2-light: #A78BFA;
  --bd-color-secondary-2-dark: #7C3AED;
  
  /* 辅助色 3 - 模糊青 */
  --bd-color-secondary-3: #06B6D4;
  --bd-color-secondary-3-light: #22D3EE;
  --bd-color-secondary-3-dark: #0891B2;
  
  /* 辅助色 4 - 模糊橙 */
  --bd-color-secondary-4: #F59E0B;
  --bd-color-secondary-4-light: #FBBF24;
  --bd-color-secondary-4-dark: #D97706;
  
  /* 辅助色 5 - 模糊绿 */
  --bd-color-secondary-5: #10B981;
  --bd-color-secondary-5-light: #34D399;
  --bd-color-secondary-5-dark: #059669;
  
  /* 辅助色渐变 - 模糊多色 */
  --bd-gradient-secondary: linear-gradient(135deg, #EC4899 0%, #8B5CF6 25%, #06B6D4 50%, #F59E0B 75%, #10B981 100%);
  --bd-gradient-secondary-soft: linear-gradient(135deg, rgba(236, 72, 153, 0.7) 0%, rgba(139, 92, 246, 0.7) 25%, rgba(6, 182, 212, 0.7) 50%, rgba(245, 158, 11, 0.7) 75%, rgba(16, 185, 129, 0.7) 100%);
}
```

**使用场景：**
- 状态指示
- 分类标签
- 数据可视化
- 装饰性模糊元素

### 中性色（Neutral Colors）

```css
:root {
  /* 背景 */
  --bd-color-bg-main: #FFFFFF;
  --bd-color-bg-secondary: #F8FAFC;
  --bd-color-bg-tertiary: #F1F5F9;
  --bd-color-bg-card: rgba(255, 255, 255, 0.8);
  --bd-color-bg-hover: rgba(241, 245, 249, 0.8);
  --bd-color-bg-active: rgba(226, 232, 240, 0.8);
  
  /* 文字 */
  --bd-color-text-main: #1E293B;
  --bd-color-text-secondary: #64748B;
  --bd-color-text-tertiary: #94A3B8;
  --bd-color-text-disabled: #CBD5E1;
  
  /* 边框 */
  --bd-color-border-light: rgba(226, 232, 240, 0.5);
  --bd-color-border-medium: rgba(203, 213, 225, 0.5);
  --bd-color-border-dark: rgba(148, 163, 184, 0.5);
  
  /* 模糊色 */
  --bd-color-blur-1: rgba(99, 102, 241, 0.1);
  --bd-color-blur-2: rgba(236, 72, 153, 0.1);
  --bd-color-blur-3: rgba(139, 92, 246, 0.1);
}
```

**使用场景：**
- 页面背景、卡片背景
- 正文、说明文字
- 边框、分割线
- 模糊背景效果

### 语义色（Semantic Colors）

```css
:root {
  /* 成功 */
  --bd-color-success: #10B981;
  --bd-color-success-light: rgba(16, 185, 129, 0.1);
  --bd-color-success-dark: #059669;
  
  /* 警告 */
  --bd-color-warning: #F59E0B;
  --bd-color-warning-light: rgba(245, 158, 11, 0.1);
  --bd-color-warning-dark: #D97706;
  
  /* 错误 */
  --bd-color-error: #EF4444;
  --bd-color-error-light: rgba(239, 68, 68, 0.1);
  --bd-color-error-dark: #DC2626;
  
  /* 信息 */
  --bd-color-info: #6366F1;
  --bd-color-info-light: rgba(99, 102, 241, 0.1);
  --bd-color-info-dark: #4F46E5;
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
  --bd-font-family-en: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* 中文字体 */
  --bd-font-family-zh: 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif;
  
  /* 等宽字体 */
  --bd-font-family-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
}
```

### 字号层级

```css
:root {
  /* 标题 */
  --bd-font-size-h1: 48px;
  --bd-font-size-h2: 36px;
  --bd-font-size-h3: 30px;
  --bd-font-size-h4: 24px;
  --bd-font-size-h5: 20px;
  --bd-font-size-h6: 16px;
  
  /* 正文 */
  --bd-font-size-body-large: 18px;
  --bd-font-size-body: 16px;
  --bd-font-size-body-small: 14px;
  
  /* 辅助文字 */
  --bd-font-size-caption: 12px;
  --bd-font-size-label: 14px;
  --bd-font-size-overline: 11px;
}
```

### 行高与字重

```css
:root {
  /* 行高 */
  --bd-line-height-tight: 1.2;
  --bd-line-height-normal: 1.5;
  --bd-line-height-relaxed: 1.75;
  
  /* 字重 */
  --bd-font-weight-light: 300;
  --bd-font-weight-regular: 400;
  --bd-font-weight-medium: 500;
  --bd-font-weight-semibold: 600;
  --bd-font-weight-bold: 700;
}
```

### 排版规则

**标题样式：**
- H1: 48px, Bold (700), Line-height 1.2, Letter-spacing -0.02em, Text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
- H2: 36px, Semibold (600), Line-height 1.2, Letter-spacing -0.01em, Text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1)
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
  --bd-container-width-xs: 100%;
  --bd-container-width-sm: 640px;
  --bd-container-width-md: 768px;
  --bd-container-width-lg: 1024px;
  --bd-container-width-xl: 1280px;
  --bd-container-width-2xl: 1536px;
  
  /* 页面边距 */
  --bd-page-padding-xs: 16px;
  --bd-page-padding-sm: 24px;
  --bd-page-padding-md: 32px;
  --bd-page-padding-lg: 48px;
  --bd-page-padding-xl: 64px;
}
```

### 栅格系统

```css
:root {
  /* 栅格列数 */
  --bd-grid-columns: 12;
  
  /* 栅格间距 */
  --bd-grid-gutter-xs: 8px;
  --bd-grid-gutter-sm: 16px;
  --bd-grid-gutter-md: 24px;
  --bd-grid-gutter-lg: 32px;
  --bd-grid-gutter-xl: 48px;
  
  /* 栅格边距 */
  --bd-grid-margin-xs: 8px;
  --bd-grid-margin-sm: 16px;
  --bd-grid-margin-md: 24px;
  --bd-grid-margin-lg: 32px;
  --bd-grid-margin-xl: 48px;
}
```

### 响应式断点

```css
:root {
  /* 断点 */
  --bd-breakpoint-xs: 0;
  --bd-breakpoint-sm: 640px;
  --bd-breakpoint-md: 768px;
  --bd-breakpoint-lg: 1024px;
  --bd-breakpoint-xl: 1280px;
  --bd-breakpoint-2xl: 1536px;
}
```

### 留白系统

```css
:root {
  /* 基础间距 */
  --bd-space-0: 0;
  --bd-space-1: 4px;
  --bd-space-2: 8px;
  --bd-space-3: 12px;
  --bd-space-4: 16px;
  --bd-space-5: 20px;
  --bd-space-6: 24px;
  --bd-space-8: 32px;
  --bd-space-10: 40px;
  --bd-space-12: 48px;
  --bd-space-16: 64px;
  --bd-space-20: 80px;
  --bd-space-24: 96px;
  --bd-space-32: 128px;
}
```

**信息密度：** 中等偏低，适合展示柔和、优雅的内容

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
- Default: 主色背景，白色文字，轻微模糊阴影
- Hover: 主色加深背景，模糊阴影加深
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
.bd-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: var(--bd-radius-lg);
  background: var(--bd-color-primary);
  color: #FFFFFF;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(99, 102, 241, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
}

.bd-button:hover {
  background: var(--bd-color-primary-dark);
  box-shadow: 0 6px 12px rgba(99, 102, 241, 0.3);
  transform: translateY(-2px);
}

.bd-button:active {
  background: var(--bd-color-primary-dark);
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
- 背景: 半透明白色 rgba(255, 255, 255, 0.8)
- 模糊: backdrop-filter: blur(20px)
- 阴影: 0 8px 32px rgba(0, 0, 0, 0.1)
- 圆角: 16px - 24px
- 内边距: 24px - 32px
- 边框: 1px solid rgba(255, 255, 255, 0.2)

**悬停效果：**
- 阴影加深: 0 12px 48px rgba(0, 0, 0, 0.15)
- 轻微上移: translateY(-4px)
- 过渡时间: 0.3s

```css
.bd-card {
  background: var(--bd-color-bg-card);
  backdrop-filter: blur(20px);
  border-radius: var(--bd-radius-2xl);
  box-shadow: var(--bd-shadow-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: var(--bd-space-8);
  transition: all 0.3s ease;
}

.bd-card:hover {
  box-shadow: var(--bd-shadow-xl);
  transform: translateY(-4px);
}
```

### Input（输入框）

**尺寸：**
- Small: 32px height, 14px font-size
- Medium: 40px height, 16px font-size
- Large: 48px height, 18px font-size

**状态：**
- Default: 半透明白色背景，浅灰色边框
- Focus: 主色边框，主色模糊阴影
- Error: 红色边框，错误提示
- Disabled: 灰色背景，不可编辑
- Success: 绿色边框

**圆角：**
- Small: 8px
- Medium: 12px
- Large: 16px

```css
.bd-input {
  width: 100%;
  padding: var(--bd-space-3) var(--bd-space-4);
  font-size: var(--bd-font-size-body);
  border: 1px solid var(--bd-color-border-light);
  border-radius: var(--bd-radius-lg);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.bd-input:focus {
  outline: none;
  border-color: var(--bd-color-primary);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.bd-input-error {
  border-color: var(--bd-color-error);
}
```

### Upload（上传）

**样式规范：**
- 虚线边框: 2px dashed rgba(203, 213, 225, 0.5)
- 圆角: 16px - 24px
- 内边距: 48px - 64px
- 背景: 半透明白色 rgba(255, 255, 255, 0.6)
- 悬停: 主色边框，浅蓝背景
- 拖拽: 主色边框，主色背景

**图标：**
- 默认: 上传图标（outline）
- 悬停: 上传图标（filled）
- 成功: 对勾图标

```css
.bd-upload {
  border: 2px dashed var(--bd-color-border-medium);
  border-radius: var(--bd-radius-2xl);
  padding: var(--bd-space-12) var(--bd-space-8);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.bd-upload:hover {
  border-color: var(--bd-color-primary);
  background: rgba(99, 102, 241, 0.1);
}

.bd-upload-dragging {
  border-color: var(--bd-color-primary);
  background: rgba(99, 102, 241, 0.2);
}
```

### Navigation（导航）

**结构：**
- 顶部导航: Logo + 菜单项 + 操作按钮
- 侧边导航: Logo + 菜单项 + 用户信息
- 面包屑: 首页 > 一级 > 二级 > 当前

**交互：**
- Hover: 背景模糊变色，下划线动画
- Active: 主色背景，白色文字
- 展开: 下拉菜单，平滑过渡

```css
.bd-nav-item {
  padding: var(--bd-space-3) var(--bd-space-4);
  border-radius: var(--bd-radius-lg);
  transition: all 0.3s ease;
  cursor: pointer;
}

.bd-nav-item:hover {
  background: rgba(99, 102, 241, 0.1);
  backdrop-filter: blur(10px);
}

.bd-nav-item-active {
  background: var(--bd-color-primary);
  color: #FFFFFF;
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格

**类型：**
- Outline: 线框图标，2px 描边
- Filled: 实心图标
- Soft: 柔和图标，半透明填充

**特征：**
- 柔和: 使用柔和的色彩和渐变
- 模糊: 轻微的模糊效果
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
- 模糊插画: 柔和的色彩和渐变
- 梦幻插画: 梦幻般的视觉效果
- 抽象插画: 抽象的形状和色彩

**原则：**
- 柔和: 使用柔和的色彩和渐变
- 模糊: 轻微的模糊效果
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
- 模糊阴影加深
- 轻微上移（2-4px）
- 过渡时间: 0.3s

**卡片：**
- 模糊阴影加深
- 轻微上移（4-6px）
- 过渡时间: 0.3s

**链接：**
- 下划线动画
- 颜色加深
- 过渡时间: 0.3s

### Active 状态

**按钮：**
- 背景更深
- 轻微下移（2-4px）
- 过渡时间: 0.15s

**卡片：**
- 模糊阴影恢复
- 位置恢复
- 过渡时间: 0.15s

### Focus 状态

**输入框：**
- 主色边框
- 主色模糊阴影（0 0 0 4px rgba(99, 102, 241, 0.1)）
- 过渡时间: 0.3s

**按钮：**
- 外部模糊轮廓（outline）
- 过渡时间: 0.3s

### 动效节奏

**缓动函数：**
- Ease: cubic-bezier(0.4, 0, 0.2, 1)
- Ease In: cubic-bezier(0.4, 0, 1, 1)
- Ease Out: cubic-bezier(0, 0, 0.2, 1)
- Ease In Out: cubic-bezier(0.4, 0, 0.2, 1)

**持续时间：**
- 快速: 0.15s - 0.2s（按钮 hover、输入框 focus）
- 标准: 0.3s（卡片 hover、下拉菜单）
- 缓慢: 0.4s - 0.5s（页面切换、模态框）

### 操作反馈

**成功：**
- 绿色模糊背景
- 成功提示消息
- 过渡时间: 0.3s

**错误：**
- 红色模糊背景
- 错误提示消息
- 抖动动画（0.4s）

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
  --bd-color-primary-50: #EEF2FF;
  --bd-color-primary-100: #E0E7FF;
  --bd-color-primary-200: #C7D2FE;
  --bd-color-primary-300: #A5B4FC;
  --bd-color-primary-400: #818CF8;
  --bd-color-primary-500: #6366F1;
  --bd-color-primary-600: #4F46E5;
  --bd-color-primary-700: #4338CA;
  --bd-color-primary-800: #3730A3;
  --bd-color-primary-900: #312E81;
  
  /* Secondary */
  --bd-color-secondary-1-50: #FDF2F8;
  --bd-color-secondary-1-100: #FCE7F3;
  --bd-color-secondary-1-200: #FBCFE8;
  --bd-color-secondary-1-300: #F9A8D4;
  --bd-color-secondary-1-400: #F472B6;
  --bd-color-secondary-1-500: #EC4899;
  --bd-color-secondary-1-600: #DB2777;
  --bd-color-secondary-1-700: #BE185D;
  --bd-color-secondary-1-800: #9D174D;
  --bd-color-secondary-1-900: #831843;
  
  /* Neutral */
  --bd-color-neutral-50: #F8FAFC;
  --bd-color-neutral-100: #F1F5F9;
  --bd-color-neutral-200: #E2E8F0;
  --bd-color-neutral-300: #CBD5E1;
  --bd-color-neutral-400: #94A3B8;
  --bd-color-neutral-500: #64748B;
  --bd-color-neutral-600: #475569;
  --bd-color-neutral-700: #334155;
  --bd-color-neutral-800: #1E293B;
  --bd-color-neutral-900: #0F172A;
}
```

### Spacing Tokens

```css
:root {
  --bd-spacing-0: 0;
  --bd-spacing-px: 1px;
  --bd-spacing-0-5: 2px;
  --bd-spacing-1: 4px;
  --bd-spacing-1-5: 6px;
  --bd-spacing-2: 8px;
  --bd-spacing-2-5: 10px;
  --bd-spacing-3: 12px;
  --bd-spacing-3-5: 14px;
  --bd-spacing-4: 16px;
  --bd-spacing-5: 20px;
  --bd-spacing-6: 24px;
  --bd-spacing-7: 28px;
  --bd-spacing-8: 32px;
  --bd-spacing-9: 36px;
  --bd-spacing-10: 40px;
  --bd-spacing-11: 44px;
  --bd-spacing-12: 48px;
  --bd-spacing-14: 56px;
  --bd-spacing-16: 64px;
  --bd-spacing-20: 80px;
  --bd-spacing-24: 96px;
  --bd-spacing-28: 112px;
  --bd-spacing-32: 128px;
  --bd-spacing-36: 144px;
  --bd-spacing-40: 160px;
  --bd-spacing-44: 176px;
  --bd-spacing-48: 192px;
  --bd-spacing-52: 208px;
  --bd-spacing-56: 224px;
  --bd-spacing-60: 240px;
  --bd-spacing-64: 256px;
  --bd-spacing-72: 288px;
  --bd-spacing-80: 320px;
  --bd-spacing-96: 384px;
}
```

### Radius Tokens

```css
:root {
  --bd-radius-none: 0;
  --bd-radius-sm: 4px;
  --bd-radius-base: 8px;
  --bd-radius-md: 12px;
  --bd-radius-lg: 16px;
  --bd-radius-xl: 24px;
  --bd-radius-2xl: 32px;
  --bd-radius-3xl: 48px;
  --bd-radius-full: 9999px;
}
```

### Shadow Tokens

```css
:root {
  --bd-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --bd-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --bd-shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --bd-shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --bd-shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --bd-shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --bd-shadow-2xl: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
  --bd-shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  --bd-shadow-none: 0 0 #0000;
}
```

### Blur Tokens

```css
:root {
  --bd-blur-xs: blur(4px);
  --bd-blur-sm: blur(8px);
  --bd-blur-base: blur(12px);
  --bd-blur-md: blur(16px);
  --bd-blur-lg: blur(20px);
  --bd-blur-xl: blur(24px);
  --bd-blur-2xl: blur(32px);
  --bd-blur-3xl: blur(48px);
}
```

### Typography Tokens

```css
:root {
  /* Font Family */
  --bd-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --bd-font-serif: 'Georgia', 'Cambria', 'Times New Roman', Times, serif;
  --bd-font-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
  
  /* Font Size */
  --bd-text-xs: 0.75rem; /* 12px */
  --bd-text-sm: 0.875rem; /* 14px */
  --bd-text-base: 1rem; /* 16px */
  --bd-text-lg: 1.125rem; /* 18px */
  --bd-text-xl: 1.25rem; /* 20px */
  --bd-text-2xl: 1.5rem; /* 24px */
  --bd-text-3xl: 1.875rem; /* 30px */
  --bd-text-4xl: 2.25rem; /* 36px */
  --bd-text-5xl: 3rem; /* 48px */
  --bd-text-6xl: 3.75rem; /* 60px */
  --bd-text-7xl: 4.5rem; /* 72px */
  --bd-text-8xl: 6rem; /* 96px */
  --bd-text-9xl: 8rem; /* 128px */
  
  /* Font Weight */
  --bd-font-thin: 100;
  --bd-font-extralight: 200;
  --bd-font-light: 300;
  --bd-font-normal: 400;
  --bd-font-medium: 500;
  --bd-font-semibold: 600;
  --bd-font-bold: 700;
  --bd-font-extrabold: 800;
  --bd-font-black: 900;
  
  /* Line Height */
  --bd-leading-none: 1;
  --bd-leading-tight: 1.25;
  --bd-leading-snug: 1.375;
  --bd-leading-normal: 1.5;
  --bd-leading-relaxed: 1.625;
  --bd-leading-loose: 2;
  
  /* Letter Spacing */
  --bd-tracking-tighter: -0.05em;
  --bd-tracking-tight: -0.025em;
  --bd-tracking-normal: 0;
  --bd-tracking-wide: 0.025em;
  --bd-tracking-wider: 0.05em;
  --bd-tracking-widest: 0.1em;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）

**设计原则：**
- ✅ 模糊化设计语言：学习如何使用模糊效果创造层次感
- ✅ 柔和色彩：学习如何使用柔和的色彩和渐变
- ✅ 半透明背景：学习如何使用半透明背景和 backdrop-filter
- ✅ 柔和阴影：学习如何使用柔和的阴影创造深度感
- ✅ 圆润形状：学习如何使用圆润的形状创造柔和感

**技术实现：**
- ✅ Design Token 系统：学习如何组织和管理设计变量
- ✅ 响应式设计：学习如何适配不同设备尺寸
- ✅ 组件化思维：学习如何构建可复用的 UI 组件
- ✅ 模糊效果：学习如何使用 backdrop-filter 和模糊效果

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
- 学习模糊设计的设计原则和方法论
- 参考色彩系统和排版规则
- 借鉴组件结构和交互模式
- 使用自己的品牌元素和内容
- 创建独特的视觉识别系统
- 注意模糊效果的性能影响
- 合理使用半透明背景和模糊效果

---

**设计系统版本：** v1.0.0
**最后更新：** 2025-02-02
**维护者：** Design System Team