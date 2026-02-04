# 故障艺术设计系统（Glitch Art Design System）

## 1. 设计风格总览（Design DNA）

**核心关键词：** 故障、错位、像素化、数字噪音、赛博朋克

**适用产品类型：**
- 赛博朋克风格应用
- 游戏界面
- 创意设计平台
- 音乐/娱乐类应用
- 实验性网站

**设计理念：**
故障艺术设计风格以数字故障和错误效果为核心，通过像素化、错位、色彩分离和数字噪音创造出独特的视觉体验。强调数字时代的错误美学，使用故障效果、像素化处理和色彩偏移来构建空间关系。色彩鲜艳对比强烈，适合需要展现科技感和未来感的产品。

---

## 2. 颜色系统（Color System）

### 主色（Primary Colors）

```css
:root {
  /* 主色 - 故障红 */
  --ga-color-primary: #FF0040;
  --ga-color-primary-light: #FF3370;
  --ga-color-primary-dark: #CC0033;
  
  /* 主色渐变 - 故障渐变 */
  --ga-gradient-primary: linear-gradient(135deg, #FF0040 0%, #CC0033 100%);
  --ga-gradient-primary-glitch: linear-gradient(90deg, #FF0040 0%, #00FF80 33%, #00FFFF 66%, #FF0040 100%);
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
  /* 辅助色 1 - 故障绿 */
  --ga-color-secondary-1: #00FF80;
  --ga-color-secondary-1-light: #66FFAA;
  --ga-color-secondary-1-dark: #00CC66;
  
  /* 辅助色 2 - 故障青 */
  --ga-color-secondary-2: #00FFFF;
  --ga-color-secondary-2-light: #66FFFF;
  --ga-color-secondary-2-dark: #00CCCC;
  
  /* 辅助色 3 - 故障黄 */
  --ga-color-secondary-3: #FFFF00;
  --ga-color-secondary-3-light: #FFFF66;
  --ga-color-secondary-3-dark: #CCCC00;
  
  /* 辅助色 4 - 故障紫 */
  --ga-color-secondary-4: #FF00FF;
  --ga-color-secondary-4-light: #FF66FF;
  --ga-color-secondary-4-dark: #CC00CC;
  
  /* 辅助色 5 - 故障蓝 */
  --ga-color-secondary-5: #0080FF;
  --ga-color-secondary-5-light: #66AAFF;
  --ga-color-secondary-5-dark: #0066CC;
  
  /* 辅助色渐变 - 故障多色 */
  --ga-gradient-secondary: linear-gradient(135deg, #FF0040 0%, #00FF80 25%, #00FFFF 50%, #FF00FF 75%, #0080FF 100%);
  --ga-gradient-glitch: linear-gradient(90deg, #FF0040 0%, #00FF80 20%, #00FFFF 40%, #FFFF00 60%, #FF00FF 80%, #0080FF 100%);
}
```

**使用场景：**
- 状态指示
- 分类标签
- 数据可视化
- 装饰性故障元素

### 中性色（Neutral Colors）

```css
:root {
  /* 背景 */
  --ga-color-bg-main: #0A0A0F;
  --ga-color-bg-secondary: #12121A;
  --ga-color-bg-tertiary: #1A1A26;
  --ga-color-bg-card: rgba(26, 26, 38, 0.9);
  --ga-color-bg-hover: rgba(38, 38, 70, 0.9);
  --ga-color-bg-active: rgba(50, 50, 90, 0.9);
  
  /* 文字 */
  --ga-color-text-main: #FFFFFF;
  --ga-color-text-secondary: #B8B8C8;
  --ga-color-text-tertiary: #787888;
  --ga-color-text-disabled: #484858;
  
  /* 边框 */
  --ga-color-border-light: rgba(255, 255, 255, 0.1);
  --ga-color-border-medium: rgba(255, 255, 255, 0.2);
  --ga-color-border-dark: rgba(255, 255, 255, 0.3);
  
  /* 故障色 */
  --ga-color-glitch-1: rgba(255, 0, 64, 0.3);
  --ga-color-glitch-2: rgba(0, 255, 128, 0.3);
  --ga-color-glitch-3: rgba(0, 255, 255, 0.3);
}
```

**使用场景：**
- 页面背景、卡片背景
- 正文、说明文字
- 边框、分割线
- 故障发光效果

### 语义色（Semantic Colors）

```css
:root {
  /* 成功 */
  --ga-color-success: #00FF80;
  --ga-color-success-light: rgba(0, 255, 128, 0.2);
  --ga-color-success-dark: #00CC66;
  
  /* 警告 */
  --ga-color-warning: #FFFF00;
  --ga-color-warning-light: rgba(255, 255, 0, 0.2);
  --ga-color-warning-dark: #CCCC00;
  
  /* 错误 */
  --ga-color-error: #FF0040;
  --ga-color-error-light: rgba(255, 0, 64, 0.2);
  --ga-color-error-dark: #CC0033;
  
  /* 信息 */
  --ga-color-info: #00FFFF;
  --ga-color-info-light: rgba(0, 255, 255, 0.2);
  --ga-color-info-dark: #00CCCC;
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
  --ga-font-family-en: 'Press Start 2P', 'VT323', 'Courier New', monospace;
  
  /* 中文字体 */
  --ga-font-family-zh: 'Noto Sans SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif;
  
  /* 标题字体 */
  --ga-font-family-display: 'Press Start 2P', 'VT323', 'Courier New', monospace;
  
  /* 等宽字体 */
  --ga-font-family-mono: 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', monospace;
}
```

### 字号层级

```css
:root {
  /* 标题 */
  --ga-font-size-h1: 56px;
  --ga-font-size-h2: 42px;
  --ga-font-size-h3: 32px;
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
  --ga-line-height-tight: 1.1;
  --ga-line-height-normal: 1.4;
  --ga-line-height-relaxed: 1.6;
  
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
- H1: 56px, Bold (700), Line-height 1.1, Letter-spacing 0.05em, Text-shadow: 2px 0 #FF0040, -2px 0 #00FF80
- H2: 42px, Semibold (600), Line-height 1.1, Letter-spacing 0.03em, Text-shadow: 1.5px 0 #FF0040, -1.5px 0 #00FF80
- H3: 32px, Semibold (600), Line-height 1.2, Letter-spacing 0.02em, Text-shadow: 1px 0 #FF0040, -1px 0 #00FF80
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

**信息密度：** 中等偏高，适合展示高对比度和故障效果的内容

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
- Default: 故障渐变背景，白色文字，故障发光效果
- Hover: 故障渐变加深背景，故障发光效果增强，故障抖动
- Active: 故障渐变更深背景，轻微缩放，故障错位
- Disabled: 灰色背景，灰色文字，不可点击
- Loading: 显示加载动画

**圆角：**
- Square: 0px
- Small: 4px
- Medium: 8px
- Large: 12px
- Pill: 9999px

**颜色变体：**
- Primary: 故障渐变
- Secondary: 辅助色
- Outline: 透明背景，故障边框，故障发光
- Ghost: 透明背景，故障文字，故障发光
- Link: 无背景，故障文字，下划线，故障发光

```css
.ga-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: var(--ga-radius-lg);
  background: var(--ga-gradient-primary);
  color: #FFFFFF;
  box-shadow: 2px 0 #FF0040, -2px 0 #00FF80;
  transition: all 0.3s ease;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.ga-button:hover {
  background: var(--ga-gradient-primary-glitch);
  box-shadow: 3px 0 #FF0040, -3px 0 #00FF80;
  transform: translateY(-2px);
  animation: glitch-shake 0.3s infinite;
}

.ga-button:active {
  background: var(--ga-color-primary-dark);
  transform: translateY(0);
}

@keyframes glitch-shake {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}
```

### Card（卡片）

**使用场景：**
- 内容分组
- 信息展示
- 功能模块
- 数据卡片

**样式规范：**
- 背景: 半透明深色 rgba(26, 26, 38, 0.9)
- 故障边框: 1px solid rgba(255, 0, 64, 0.3)
- 故障发光: 2px 0 rgba(255, 0, 64, 0.2), -2px 0 rgba(0, 255, 128, 0.2)
- 圆角: 12px - 16px
- 内边距: 24px - 32px

**悬停效果：**
- 故障发光增强: 3px 0 rgba(255, 0, 64, 0.4), -3px 0 rgba(0, 255, 128, 0.4)
- 轻微上移: translateY(-4px)
- 故障抖动: 0.3s
- 过渡时间: 0.3s

```css
.ga-card {
  background: var(--ga-color-bg-card);
  border: 1px solid var(--ga-color-border-medium);
  border-radius: var(--ga-radius-xl);
  box-shadow: 2px 0 rgba(255, 0, 64, 0.2), -2px 0 rgba(0, 255, 128, 0.2);
  padding: var(--ga-space-8);
  transition: all 0.3s ease;
}

.ga-card:hover {
  box-shadow: 3px 0 rgba(255, 0, 64, 0.4), -3px 0 rgba(0, 255, 128, 0.4);
  transform: translateY(-4px);
  border-color: var(--ga-color-primary);
  animation: glitch-shake 0.3s infinite;
}
```

### Input（输入框）

**尺寸：**
- Small: 32px height, 14px font-size
- Medium: 40px height, 16px font-size
- Large: 48px height, 18px font-size

**状态：**
- Default: 深色背景，浅灰色边框
- Focus: 故障边框，故障发光
- Error: 红色边框，红色故障发光，错误提示
- Disabled: 灰色背景，不可编辑
- Success: 绿色边框，绿色故障发光

**圆角：**
- Small: 8px
- Medium: 12px
- Large: 16px

```css
.ga-input {
  width: 100%;
  padding: var(--ga-space-3) var(--ga-space-4);
  font-size: var(--ga-font-size-body);
  border: 1px solid var(--ga-color-border-light);
  border-radius: var(--ga-radius-lg);
  background: var(--ga-color-bg-secondary);
  color: var(--ga-color-text-main);
  transition: all 0.3s ease;
}

.ga-input:focus {
  outline: none;
  border-color: var(--ga-color-primary);
  box-shadow: 2px 0 rgba(255, 0, 64, 0.3), -2px 0 rgba(0, 255, 128, 0.3);
}

.ga-input-error {
  border-color: var(--ga-color-error);
  box-shadow: 2px 0 rgba(255, 0, 64, 0.3), -2px 0 rgba(0, 255, 128, 0.3);
}
```

### Upload（上传）

**样式规范：**
- 虚线边框: 2px dashed rgba(255, 0, 64, 0.5)
- 圆角: 12px - 16px
- 内边距: 48px - 64px
- 背景: 深色半透明 rgba(26, 26, 38, 0.6)
- 悬停: 故障边框，故障发光
- 拖拽: 故障边框，故障背景，强故障发光

**图标：**
- 默认: 上传图标（outline）
- 悬停: 上传图标（filled，故障发光）
- 成功: 对勾图标（故障发光）

```css
.ga-upload {
  border: 2px dashed var(--ga-color-border-medium);
  border-radius: var(--ga-radius-xl);
  padding: var(--ga-space-12) var(--ga-space-8);
  background: rgba(26, 26, 38, 0.6);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ga-upload:hover {
  border-color: var(--ga-color-primary);
  box-shadow: 2px 0 rgba(255, 0, 64, 0.3), -2px 0 rgba(0, 255, 128, 0.3);
}

.ga-upload-dragging {
  border-color: var(--ga-color-primary);
  background: rgba(255, 0, 64, 0.1);
  box-shadow: 3px 0 rgba(255, 0, 64, 0.5), -3px 0 rgba(0, 255, 128, 0.5);
  animation: glitch-shake 0.3s infinite;
}
```

### Navigation（导航）

**结构：**
- 顶部导航: Logo + 菜单项 + 操作按钮
- 侧边导航: Logo + 菜单项 + 用户信息
- 面包屑: 首页 > 一级 > 二级 > 当前

**交互：**
- Hover: 背景故障发光，下划线动画
- Active: 故障背景，白色文字，强故障发光
- 展开: 下拉菜单，平滑过渡，故障发光

```css
.ga-nav-item {
  padding: var(--ga-space-3) var(--ga-space-4);
  border-radius: var(--ga-radius-lg);
  transition: all 0.3s ease;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.ga-nav-item:hover {
  background: rgba(255, 0, 64, 0.1);
  box-shadow: 2px 0 rgba(255, 0, 64, 0.2), -2px 0 rgba(0, 255, 128, 0.2);
}

.ga-nav-item-active {
  background: var(--ga-gradient-primary);
  color: #FFFFFF;
  box-shadow: 2px 0 rgba(255, 0, 64, 0.5), -2px 0 rgba(0, 255, 128, 0.5);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格

**类型：**
- Outline: 线框图标，2px 描边，故障发光
- Filled: 实心图标，故障发光
- Glitch: 故障图标，强发光效果，像素化

**特征：**
- 故障: 使用故障色彩和发光效果
- 像素化: 像素化处理
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
- 故障插画: 故障色彩和发光效果
- 像素插画: 像素化处理
- 抽象插画: 抽象的故障形状

**原则：**
- 故障: 使用故障色彩和发光效果
- 像素化: 像素化处理
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
- 故障发光增强
- 轻微上移（2-4px）
- 故障抖动（0.3s）
- 过渡时间: 0.3s

**卡片：**
- 故障发光增强
- 轻微上移（4-6px）
- 故障抖动（0.3s）
- 过渡时间: 0.3s

**链接：**
- 下划线动画
- 颜色加深
- 故障发光
- 过渡时间: 0.3s

### Active 状态

**按钮：**
- 背景更深
- 轻微下移（2-4px）
- 故障错位
- 过渡时间: 0.15s

**卡片：**
- 故障发光恢复
- 位置恢复
- 过渡时间: 0.15s

### Focus 状态

**输入框：**
- 故障边框
- 故障发光（2px 0 rgba(255, 0, 64, 0.3), -2px 0 rgba(0, 255, 128, 0.3)）
- 过渡时间: 0.3s

**按钮：**
- 外部故障轮廓（outline）
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
- 绿色故障发光
- 成功提示消息
- 过渡时间: 0.3s

**错误：**
- 红色故障发光
- 错误提示消息
- 抖动动画（0.4s）

**加载：**
- 旋转故障加载动画
- 进度条
- 骨架屏

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens

```css
:root {
  /* Primary */
  --ga-color-primary-50: #FFE6F0;
  --ga-color-primary-100: #FFB3D9;
  --ga-color-primary-200: #FF80C2;
  --ga-color-primary-300: #FF4DAB;
  --ga-color-primary-400: #FF1A94;
  --ga-color-primary-500: #FF0040;
  --ga-color-primary-600: #CC0033;
  --ga-color-primary-700: #990028;
  --ga-color-primary-800: #66001D;
  --ga-color-primary-900: #33000F;
  
  /* Secondary */
  --ga-color-secondary-1-50: #E6FFE6;
  --ga-color-secondary-1-100: #B3FFB3;
  --ga-color-secondary-1-200: #80FF80;
  --ga-color-secondary-1-300: #4DFF4D;
  --ga-color-secondary-1-400: #1AFF1A;
  --ga-color-secondary-1-500: #00FF80;
  --ga-color-secondary-1-600: #00CC66;
  --ga-color-secondary-1-700: #00994D;
  --ga-color-secondary-1-800: #006633;
  --ga-color-secondary-1-900: #003319;
  
  /* Neutral */
  --ga-color-neutral-50: #F5F5F7;
  --ga-color-neutral-100: #E0E0E8;
  --ga-color-neutral-200: #C0C0D0;
  --ga-color-neutral-300: #A0A0B8;
  --ga-color-neutral-400: #8080A0;
  --ga-color-neutral-500: #606088;
  --ga-color-neutral-600: #404070;
  --ga-color-neutral-700: #303060;
  --ga-color-neutral-800: #202050;
  --ga-color-neutral-900: #101040;
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
  --ga-radius-sm: 4px;
  --ga-radius-base: 8px;
  --ga-radius-md: 12px;
  --ga-radius-lg: 16px;
  --ga-radius-xl: 24px;
  --ga-radius-2xl: 32px;
  --ga-radius-3xl: 48px;
  --ga-radius-full: 9999px;
}
```

### Shadow Tokens

```css
:root {
  --ga-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
  --ga-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --ga-shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  --ga-shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
  --ga-shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  --ga-shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  --ga-shadow-2xl: 0 35px 60px -15px rgba(0, 0, 0, 0.5);
  --ga-shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  --ga-shadow-none: 0 0 #0000;
}
```

### Glitch Tokens

```css
:root {
  --ga-glitch-xs: 1px 0 rgba(255, 0, 64, 0.3), -1px 0 rgba(0, 255, 128, 0.3);
  --ga-glitch-sm: 1.5px 0 rgba(255, 0, 64, 0.4), -1.5px 0 rgba(0, 255, 128, 0.4);
  --ga-glitch-base: 2px 0 rgba(255, 0, 64, 0.5), -2px 0 rgba(0, 255, 128, 0.5);
  --ga-glitch-md: 2.5px 0 rgba(255, 0, 64, 0.5), -2.5px 0 rgba(0, 255, 128, 0.5);
  --ga-glitch-lg: 3px 0 rgba(255, 0, 64, 0.6), -3px 0 rgba(0, 255, 128, 0.6);
  --ga-glitch-xl: 4px 0 rgba(255, 0, 64, 0.7), -4px 0 rgba(0, 255, 128, 0.7);
  --ga-glitch-2xl: 5px 0 rgba(255, 0, 64, 0.8), -5px 0 rgba(0, 255, 128, 0.8);
}
```

### Typography Tokens

```css
:root {
  /* Font Family */
  --ga-font-sans: 'Press Start 2P', 'VT323', 'Courier New', monospace;
  --ga-font-serif: 'Georgia', 'Cambria', 'Times New Roman', Times, serif;
  --ga-font-mono: 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', monospace;
  
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
  --ga-leading-tight: 1.1;
  --ga-leading-snug: 1.2;
  --ga-leading-normal: 1.4;
  --ga-leading-relaxed: 1.6;
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
- ✅ 故障化设计语言：学习如何使用故障色彩和发光效果
- ✅ 像素化处理：学习如何使用像素化处理
- ✅ 故障效果：学习如何使用 text-shadow 创造故障效果
- ✅ 暗色背景：学习如何使用暗色背景突出故障效果
- ✅ 赛博美学：学习赛博朋克风格的设计原则

**技术实现：**
- ✅ Design Token 系统：学习如何组织和管理设计变量
- ✅ 响应式设计：学习如何适配不同设备尺寸
- ✅ 组件化思维：学习如何构建可复用的 UI 组件
- ✅ 故障效果：学习如何使用 text-shadow 和故障效果

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
- 学习故障设计的设计原则和方法论
- 参考色彩系统和排版规则
- 借鉴组件结构和交互模式
- 使用自己的品牌元素和内容
- 创建独特的视觉识别系统
- 注意故障效果的性能影响
- 合理使用故障效果，避免过度使用

---

**设计系统版本：** v1.0.0
**最后更新：** 2025-02-02
**维护者：** Design System Team