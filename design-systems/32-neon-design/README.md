# 霓虹设计系统（Neon Design System）

## 1. 设计风格总览（Design DNA）

**核心关键词：** 霓虹、发光、赛博、高对比、视觉冲击

**适用产品类型：**
- 赛博朋克风格应用
- 游戏界面
- 夜间模式应用
- 创意设计平台
- 音乐/娱乐类应用

**设计理念：**
霓虹设计风格以发光效果和高对比色彩为核心，通过强烈的视觉冲击力和赛博朋克美学创造出独特的视觉体验。强调发光效果、霓虹色彩和暗色背景的对比，使用渐变、阴影和发光效果来构建空间关系。色彩鲜艳对比强烈，适合需要展现科技感和未来感的产品。

---

## 2. 颜色系统（Color System）

### 主色（Primary Colors）

```css
:root {
  /* 主色 - 霓虹蓝 */
  --nd-color-primary: #00F0FF;
  --nd-color-primary-light: #5FFFFF;
  --nd-color-primary-dark: #00C8D6;
  
  /* 主色渐变 - 霓虹渐变 */
  --nd-gradient-primary: linear-gradient(135deg, #00F0FF 0%, #00C8D6 100%);
  --nd-gradient-primary-glow: radial-gradient(ellipse at center, #00F0FF 0%, rgba(0, 240, 255, 0.5) 50%, transparent 100%);
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
  /* 辅助色 1 - 霓虹粉 */
  --nd-color-secondary-1: #FF00FF;
  --nd-color-secondary-1-light: #FF66FF;
  --nd-color-secondary-1-dark: #CC00CC;
  
  /* 辅助色 2 - 霓虹绿 */
  --nd-color-secondary-2: #00FF00;
  --nd-color-secondary-2-light: #66FF66;
  --nd-color-secondary-2-dark: #00CC00;
  
  /* 辅助色 3 - 霓虹黄 */
  --nd-color-secondary-3: #FFFF00;
  --nd-color-secondary-3-light: #FFFF66;
  --nd-color-secondary-3-dark: #CCCC00;
  
  /* 辅助色 4 - 霓虹紫 */
  --nd-color-secondary-4: #9D00FF;
  --nd-color-secondary-4-light: #B366FF;
  --nd-color-secondary-4-dark: #7A00CC;
  
  /* 辅助色 5 - 霓虹红 */
  --nd-color-secondary-5: #FF0055;
  --nd-color-secondary-5-light: #FF6688;
  --nd-color-secondary-5-dark: #CC0044;
  
  /* 辅助色渐变 - 霓虹多色 */
  --nd-gradient-secondary: linear-gradient(135deg, #FF00FF 0%, #00FF00 25%, #FFFF00 50%, #9D00FF 75%, #FF0055 100%);
  --nd-gradient-secondary-glow: radial-gradient(ellipse at center, #FF00FF 0%, #00FF00 25%, #FFFF00 50%, #9D00FF 75%, #FF0055 100%);
}
```

**使用场景：**
- 状态指示
- 分类标签
- 数据可视化
- 装饰性霓虹元素

### 中性色（Neutral Colors）

```css
:root {
  /* 背景 */
  --nd-color-bg-main: #0A0A0F;
  --nd-color-bg-secondary: #12121A;
  --nd-color-bg-tertiary: #1A1A26;
  --nd-color-bg-card: rgba(26, 26, 38, 0.8);
  --nd-color-bg-hover: rgba(26, 26, 38, 0.9);
  --nd-color-bg-active: rgba(38, 38, 54, 0.9);
  
  /* 文字 */
  --nd-color-text-main: #FFFFFF;
  --nd-color-text-secondary: #B8B8C8;
  --nd-color-text-tertiary: #787888;
  --nd-color-text-disabled: #484858;
  
  /* 边框 */
  --nd-color-border-light: rgba(255, 255, 255, 0.1);
  --nd-color-border-medium: rgba(255, 255, 255, 0.2);
  --nd-color-border-dark: rgba(255, 255, 255, 0.3);
  
  /* 霓虹色 */
  --nd-color-neon-1: rgba(0, 240, 255, 0.3);
  --nd-color-neon-2: rgba(255, 0, 255, 0.3);
  --nd-color-neon-3: rgba(0, 255, 0, 0.3);
}
```

**使用场景：**
- 页面背景、卡片背景
- 正文、说明文字
- 边框、分割线
- 霓虹发光效果

### 语义色（Semantic Colors）

```css
:root {
  /* 成功 */
  --nd-color-success: #00FF00;
  --nd-color-success-light: rgba(0, 255, 0, 0.2);
  --nd-color-success-dark: #00CC00;
  
  /* 警告 */
  --nd-color-warning: #FFFF00;
  --nd-color-warning-light: rgba(255, 255, 0, 0.2);
  --nd-color-warning-dark: #CCCC00;
  
  /* 错误 */
  --nd-color-error: #FF0055;
  --nd-color-error-light: rgba(255, 0, 85, 0.2);
  --nd-color-error-dark: #CC0044;
  
  /* 信息 */
  --nd-color-info: #00F0FF;
  --nd-color-info-light: rgba(0, 240, 255, 0.2);
  --nd-color-info-dark: #00C8D6;
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
  --nd-font-family-en: 'Orbitron', 'Rajdhani', 'Roboto', sans-serif;
  
  /* 中文字体 */
  --nd-font-family-zh: 'Noto Sans SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif;
  
  /* 等宽字体 */
  --nd-font-family-mono: 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', monospace;
}
```

### 字号层级

```css
:root {
  /* 标题 */
  --nd-font-size-h1: 56px;
  --nd-font-size-h2: 42px;
  --nd-font-size-h3: 32px;
  --nd-font-size-h4: 24px;
  --nd-font-size-h5: 20px;
  --nd-font-size-h6: 16px;
  
  /* 正文 */
  --nd-font-size-body-large: 18px;
  --nd-font-size-body: 16px;
  --nd-font-size-body-small: 14px;
  
  /* 辅助文字 */
  --nd-font-size-caption: 12px;
  --nd-font-size-label: 14px;
  --nd-font-size-overline: 11px;
}
```

### 行高与字重

```css
:root {
  /* 行高 */
  --nd-line-height-tight: 1.1;
  --nd-line-height-normal: 1.4;
  --nd-line-height-relaxed: 1.6;
  
  /* 字重 */
  --nd-font-weight-light: 300;
  --nd-font-weight-regular: 400;
  --nd-font-weight-medium: 500;
  --nd-font-weight-semibold: 600;
  --nd-font-weight-bold: 700;
}
```

### 排版规则

**标题样式：**
- H1: 56px, Bold (700), Line-height 1.1, Letter-spacing 0.05em, Text-shadow: 0 0 20px rgba(0, 240, 255, 0.5)
- H2: 42px, Semibold (600), Line-height 1.1, Letter-spacing 0.03em, Text-shadow: 0 0 15px rgba(0, 240, 255, 0.4)
- H3: 32px, Semibold (600), Line-height 1.2, Letter-spacing 0.02em, Text-shadow: 0 0 10px rgba(0, 240, 255, 0.3)
- H4: 24px, Semibold (600), Line-height 1.3, Letter-spacing 0.01em
- H5: 20px, Medium (500), Line-height 1.4, Letter-spacing 0
- H6: 16px, Medium (500), Line-height 1.5, Letter-spacing 0.01em

**正文样式：**
- Body Large: 18px, Regular (400), Line-height 1.5
- Body: 16px, Regular (400), Line-height 1.4
- Body Small: 14px, Regular (400), Line-height 1.4

**辅助文字样式：**
- Caption: 12px, Regular (400), Line-height 1.4, Letter-spacing 0.03em
- Label: 14px, Medium (500), Line-height 1.3
- Overline: 11px, Medium (500), Line-height 1.2, Letter-spacing 0.1em, Text-transform uppercase

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心

```css
:root {
  /* 版心宽度 */
  --nd-container-width-xs: 100%;
  --nd-container-width-sm: 640px;
  --nd-container-width-md: 768px;
  --nd-container-width-lg: 1024px;
  --nd-container-width-xl: 1280px;
  --nd-container-width-2xl: 1536px;
  
  /* 页面边距 */
  --nd-page-padding-xs: 16px;
  --nd-page-padding-sm: 24px;
  --nd-page-padding-md: 32px;
  --nd-page-padding-lg: 48px;
  --nd-page-padding-xl: 64px;
}
```

### 栅格系统

```css
:root {
  /* 栅格列数 */
  --nd-grid-columns: 12;
  
  /* 栅格间距 */
  --nd-grid-gutter-xs: 8px;
  --nd-grid-gutter-sm: 16px;
  --nd-grid-gutter-md: 24px;
  --nd-grid-gutter-lg: 32px;
  --nd-grid-gutter-xl: 48px;
  
  /* 栅格边距 */
  --nd-grid-margin-xs: 8px;
  --nd-grid-margin-sm: 16px;
  --nd-grid-margin-md: 24px;
  --nd-grid-margin-lg: 32px;
  --nd-grid-margin-xl: 48px;
}
```

### 响应式断点

```css
:root {
  /* 断点 */
  --nd-breakpoint-xs: 0;
  --nd-breakpoint-sm: 640px;
  --nd-breakpoint-md: 768px;
  --nd-breakpoint-lg: 1024px;
  --nd-breakpoint-xl: 1280px;
  --nd-breakpoint-2xl: 1536px;
}
```

### 留白系统

```css
:root {
  /* 基础间距 */
  --nd-space-0: 0;
  --nd-space-1: 4px;
  --nd-space-2: 8px;
  --nd-space-3: 12px;
  --nd-space-4: 16px;
  --nd-space-5: 20px;
  --nd-space-6: 24px;
  --nd-space-8: 32px;
  --nd-space-10: 40px;
  --nd-space-12: 48px;
  --nd-space-16: 64px;
  --nd-space-20: 80px;
  --nd-space-24: 96px;
  --nd-space-32: 128px;
}
```

**信息密度：** 中等偏高，适合展示高对比度和视觉冲击力的内容

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
- Default: 主色背景，白色文字，霓虹发光效果
- Hover: 主色加深背景，霓虹发光效果增强
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
- Outline: 透明背景，主色边框，霓虹发光
- Ghost: 透明背景，主色文字，霓虹发光
- Link: 无背景，主色文字，下划线，霓虹发光

```css
.nd-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: var(--nd-radius-lg);
  background: var(--nd-color-primary);
  color: #000000;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nd-button:hover {
  background: var(--nd-color-primary-light);
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.7), 0 0 60px rgba(0, 240, 255, 0.5);
  transform: translateY(-2px);
}

.nd-button:active {
  background: var(--nd-color-primary-dark);
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
- 背景: 半透明深色 rgba(26, 26, 38, 0.8)
- 霓虹边框: 1px solid rgba(0, 240, 255, 0.3)
- 霓虹发光: 0 0 20px rgba(0, 240, 255, 0.2)
- 圆角: 12px - 16px
- 内边距: 24px - 32px

**悬停效果：**
- 霓虹发光增强: 0 0 30px rgba(0, 240, 255, 0.4)
- 轻微上移: translateY(-4px)
- 过渡时间: 0.3s

```css
.nd-card {
  background: var(--nd-color-bg-card);
  border: 1px solid var(--nd-color-border-medium);
  border-radius: var(--nd-radius-xl);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
  padding: var(--nd-space-8);
  transition: all 0.3s ease;
}

.nd-card:hover {
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.4), 0 0 60px rgba(0, 240, 255, 0.2);
  transform: translateY(-4px);
  border-color: var(--nd-color-primary);
}
```

### Input（输入框）

**尺寸：**
- Small: 32px height, 14px font-size
- Medium: 40px height, 16px font-size
- Large: 48px height, 18px font-size

**状态：**
- Default: 深色背景，浅灰色边框
- Focus: 主色边框，主色霓虹发光
- Error: 红色边框，红色霓虹发光，错误提示
- Disabled: 灰色背景，不可编辑
- Success: 绿色边框，绿色霓虹发光

**圆角：**
- Small: 8px
- Medium: 12px
- Large: 16px

```css
.nd-input {
  width: 100%;
  padding: var(--nd-space-3) var(--nd-space-4);
  font-size: var(--nd-font-size-body);
  border: 1px solid var(--nd-color-border-light);
  border-radius: var(--nd-radius-lg);
  background: var(--nd-color-bg-secondary);
  color: var(--nd-color-text-main);
  transition: all 0.3s ease;
}

.nd-input:focus {
  outline: none;
  border-color: var(--nd-color-primary);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.3), 0 0 40px rgba(0, 240, 255, 0.2);
}

.nd-input-error {
  border-color: var(--nd-color-error);
  box-shadow: 0 0 20px rgba(255, 0, 85, 0.3), 0 0 40px rgba(255, 0, 85, 0.2);
}
```

### Upload（上传）

**样式规范：**
- 虚线边框: 2px dashed rgba(0, 240, 255, 0.5)
- 圆角: 12px - 16px
- 内边距: 48px - 64px
- 背景: 深色半透明 rgba(26, 26, 38, 0.6)
- 悬停: 主色边框，主色霓虹发光
- 拖拽: 主色边框，主色背景，强霓虹发光

**图标：**
- 默认: 上传图标（outline）
- 悬停: 上传图标（filled，霓虹发光）
- 成功: 对勾图标（霓虹发光）

```css
.nd-upload {
  border: 2px dashed var(--nd-color-border-medium);
  border-radius: var(--nd-radius-xl);
  padding: var(--nd-space-12) var(--nd-space-8);
  background: rgba(26, 26, 38, 0.6);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nd-upload:hover {
  border-color: var(--nd-color-primary);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
}

.nd-upload-dragging {
  border-color: var(--nd-color-primary);
  background: rgba(0, 240, 255, 0.1);
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.5), 0 0 60px rgba(0, 240, 255, 0.3);
}
```

### Navigation（导航）

**结构：**
- 顶部导航: Logo + 菜单项 + 操作按钮
- 侧边导航: Logo + 菜单项 + 用户信息
- 面包屑: 首页 > 一级 > 二级 > 当前

**交互：**
- Hover: 背景霓虹发光，下划线动画
- Active: 主色背景，黑色文字，强霓虹发光
- 展开: 下拉菜单，平滑过渡，霓虹发光

```css
.nd-nav-item {
  padding: var(--nd-space-3) var(--nd-space-4);
  border-radius: var(--nd-radius-lg);
  transition: all 0.3s ease;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nd-nav-item:hover {
  background: rgba(0, 240, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
}

.nd-nav-item-active {
  background: var(--nd-color-primary);
  color: #000000;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格

**类型：**
- Outline: 线框图标，2px 描边，霓虹发光
- Filled: 实心图标，霓虹发光
- Neon: 霓虹图标，强发光效果

**特征：**
- 霓虹: 使用霓虹色彩和发光效果
- 高对比: 强烈的色彩对比
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
- 霓虹插画: 霓虹色彩和发光效果
- 赛博插画: 赛博朋克风格
- 抽象插画: 抽象的霓虹形状

**原则：**
- 霓虹: 使用霓虹色彩和发光效果
- 高对比: 强烈的色彩对比
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
- 霓虹发光增强
- 轻微上移（2-4px）
- 过渡时间: 0.3s

**卡片：**
- 霓虹发光增强
- 轻微上移（4-6px）
- 过渡时间: 0.3s

**链接：**
- 下划线动画
- 颜色加深
- 霓虹发光
- 过渡时间: 0.3s

### Active 状态

**按钮：**
- 背景更深
- 轻微下移（2-4px）
- 过渡时间: 0.15s

**卡片：**
- 霓虹发光恢复
- 位置恢复
- 过渡时间: 0.15s

### Focus 状态

**输入框：**
- 主色边框
- 主色霓虹发光（0 0 20px rgba(0, 240, 255, 0.3), 0 0 40px rgba(0, 240, 255, 0.2)）
- 过渡时间: 0.3s

**按钮：**
- 外部霓虹轮廓（outline）
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
- 绿色霓虹发光
- 成功提示消息
- 过渡时间: 0.3s

**错误：**
- 红色霓虹发光
- 错误提示消息
- 抖动动画（0.4s）

**加载：**
- 旋转霓虹加载动画
- 进度条
- 骨架屏

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens

```css
:root {
  /* Primary */
  --nd-color-primary-50: #E6FFFF;
  --nd-color-primary-100: #B3FFFF;
  --nd-color-primary-200: #80FFFF;
  --nd-color-primary-300: #4DFFFF;
  --nd-color-primary-400: #1AFFFF;
  --nd-color-primary-500: #00F0FF;
  --nd-color-primary-600: #00C8D6;
  --nd-color-primary-700: #00A0AD;
  --nd-color-primary-800: #007884;
  --nd-color-primary-900: #00505C;
  
  /* Secondary */
  --nd-color-secondary-1-50: #FFE6FF;
  --nd-color-secondary-1-100: #FFB3FF;
  --nd-color-secondary-1-200: #FF80FF;
  --nd-color-secondary-1-300: #FF4DFF;
  --nd-color-secondary-1-400: #FF1AFF;
  --nd-color-secondary-1-500: #FF00FF;
  --nd-color-secondary-1-600: #CC00CC;
  --nd-color-secondary-1-700: #A300A3;
  --nd-color-secondary-1-800: #7A007A;
  --nd-color-secondary-1-900: #510051;
  
  /* Neutral */
  --nd-color-neutral-50: #F5F5F7;
  --nd-color-neutral-100: #E0E0E8;
  --nd-color-neutral-200: #C0C0D0;
  --nd-color-neutral-300: #A0A0B8;
  --nd-color-neutral-400: #8080A0;
  --nd-color-neutral-500: #606088;
  --nd-color-neutral-600: #404070;
  --nd-color-neutral-700: #303060;
  --nd-color-neutral-800: #202050;
  --nd-color-neutral-900: #101040;
}
```

### Spacing Tokens

```css
:root {
  --nd-spacing-0: 0;
  --nd-spacing-px: 1px;
  --nd-spacing-0-5: 2px;
  --nd-spacing-1: 4px;
  --nd-spacing-1-5: 6px;
  --nd-spacing-2: 8px;
  --nd-spacing-2-5: 10px;
  --nd-spacing-3: 12px;
  --nd-spacing-3-5: 14px;
  --nd-spacing-4: 16px;
  --nd-spacing-5: 20px;
  --nd-spacing-6: 24px;
  --nd-spacing-7: 28px;
  --nd-spacing-8: 32px;
  --nd-spacing-9: 36px;
  --nd-spacing-10: 40px;
  --nd-spacing-11: 44px;
  --nd-spacing-12: 48px;
  --nd-spacing-14: 56px;
  --nd-spacing-16: 64px;
  --nd-spacing-20: 80px;
  --nd-spacing-24: 96px;
  --nd-spacing-28: 112px;
  --nd-spacing-32: 128px;
  --nd-spacing-36: 144px;
  --nd-spacing-40: 160px;
  --nd-spacing-44: 176px;
  --nd-spacing-48: 192px;
  --nd-spacing-52: 208px;
  --nd-spacing-56: 224px;
  --nd-spacing-60: 240px;
  --nd-spacing-64: 256px;
  --nd-spacing-72: 288px;
  --nd-spacing-80: 320px;
  --nd-spacing-96: 384px;
}
```

### Radius Tokens

```css
:root {
  --nd-radius-none: 0;
  --nd-radius-sm: 4px;
  --nd-radius-base: 8px;
  --nd-radius-md: 12px;
  --nd-radius-lg: 16px;
  --nd-radius-xl: 24px;
  --nd-radius-2xl: 32px;
  --nd-radius-3xl: 48px;
  --nd-radius-full: 9999px;
}
```

### Shadow Tokens

```css
:root {
  --nd-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
  --nd-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --nd-shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  --nd-shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
  --nd-shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  --nd-shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  --nd-shadow-2xl: 0 35px 60px -15px rgba(0, 0, 0, 0.5);
  --nd-shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  --nd-shadow-none: 0 0 #0000;
}
```

### Glow Tokens

```css
:root {
  --nd-glow-xs: 0 0 5px rgba(0, 240, 255, 0.3);
  --nd-glow-sm: 0 0 10px rgba(0, 240, 255, 0.4);
  --nd-glow-base: 0 0 15px rgba(0, 240, 255, 0.5);
  --nd-glow-md: 0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3);
  --nd-glow-lg: 0 0 30px rgba(0, 240, 255, 0.6), 0 0 60px rgba(0, 240, 255, 0.4);
  --nd-glow-xl: 0 0 40px rgba(0, 240, 255, 0.7), 0 0 80px rgba(0, 240, 255, 0.5);
  --nd-glow-2xl: 0 0 50px rgba(0, 240, 255, 0.8), 0 0 100px rgba(0, 240, 255, 0.6);
}
```

### Typography Tokens

```css
:root {
  /* Font Family */
  --nd-font-sans: 'Orbitron', 'Rajdhani', 'Roboto', sans-serif;
  --nd-font-serif: 'Georgia', 'Cambria', 'Times New Roman', Times, serif;
  --nd-font-mono: 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', monospace;
  
  /* Font Size */
  --nd-text-xs: 0.75rem; /* 12px */
  --nd-text-sm: 0.875rem; /* 14px */
  --nd-text-base: 1rem; /* 16px */
  --nd-text-lg: 1.125rem; /* 18px */
  --nd-text-xl: 1.25rem; /* 20px */
  --nd-text-2xl: 1.5rem; /* 24px */
  --nd-text-3xl: 1.875rem; /* 30px */
  --nd-text-4xl: 2.25rem; /* 36px */
  --nd-text-5xl: 3rem; /* 48px */
  --nd-text-6xl: 3.75rem; /* 60px */
  --nd-text-7xl: 4.5rem; /* 72px */
  --nd-text-8xl: 6rem; /* 96px */
  --nd-text-9xl: 8rem; /* 128px */
  
  /* Font Weight */
  --nd-font-thin: 100;
  --nd-font-extralight: 200;
  --nd-font-light: 300;
  --nd-font-normal: 400;
  --nd-font-medium: 500;
  --nd-font-semibold: 600;
  --nd-font-bold: 700;
  --nd-font-extrabold: 800;
  --nd-font-black: 900;
  
  /* Line Height */
  --nd-leading-none: 1;
  --nd-leading-tight: 1.1;
  --nd-leading-snug: 1.2;
  --nd-leading-normal: 1.4;
  --nd-leading-relaxed: 1.6;
  --nd-leading-loose: 2;
  
  /* Letter Spacing */
  --nd-tracking-tighter: -0.05em;
  --nd-tracking-tight: -0.025em;
  --nd-tracking-normal: 0;
  --nd-tracking-wide: 0.025em;
  --nd-tracking-wider: 0.05em;
  --nd-tracking-widest: 0.1em;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）

**设计原则：**
- ✅ 霓虹化设计语言：学习如何使用霓虹色彩和发光效果
- ✅ 高对比色彩：学习如何使用强对比色彩创造视觉冲击力
- ✅ 发光效果：学习如何使用 box-shadow 创造霓虹发光
- ✅ 暗色背景：学习如何使用暗色背景突出霓虹效果
- ✅ 赛博美学：学习赛博朋克风格的设计原则

**技术实现：**
- ✅ Design Token 系统：学习如何组织和管理设计变量
- ✅ 响应式设计：学习如何适配不同设备尺寸
- ✅ 组件化思维：学习如何构建可复用的 UI 组件
- ✅ 霓虹效果：学习如何使用 box-shadow 和发光效果

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
- 学习霓虹设计的设计原则和方法论
- 参考色彩系统和排版规则
- 借鉴组件结构和交互模式
- 使用自己的品牌元素和内容
- 创建独特的视觉识别系统
- 注意霓虹效果的性能影响
- 合理使用发光效果，避免过度使用

---

**设计系统版本：** v1.0.0
**最后更新：** 2025-02-02
**维护者：** Design System Team