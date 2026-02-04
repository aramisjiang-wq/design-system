# 蒸汽波设计系统（Vaporwave Design System）

## 1. 设计风格总览（Design DNA）

**核心关键词：** 复古、霓虹、梦幻、怀旧、80/90年代美学

**适用产品类型：**
- 复古风格应用
- 音乐/娱乐类应用
- 艺术创意平台
- 游戏界面
- 社交媒体应用

**设计理念：**
蒸汽波设计风格以80年代和90年代的复古美学为核心，通过霓虹色彩、渐变效果、低多边形图形和复古网格创造出梦幻、怀旧的视觉体验。强调怀旧感和未来感的融合，使用希腊雕塑、棕榈树、复古科技等元素构建独特的视觉语言。色彩鲜艳对比强烈，适合需要展现复古和怀旧氛围的产品。

---

## 2. 颜色系统（Color System）

### 主色（Primary Colors）

```css
:root {
  /* 主色 - 蒸汽波粉 */
  --vw-color-primary: #FF6B9D;
  --vw-color-primary-light: #FF9DC7;
  --vw-color-primary-dark: #E84A7A;
  
  /* 主色渐变 - 蒸汽波渐变 */
  --vw-gradient-primary: linear-gradient(135deg, #FF6B9D 0%, #C44DFF 100%);
  --vw-gradient-primary-retro: linear-gradient(180deg, #FF6B9D 0%, #FFB3E6 50%, #C44DFF 100%);
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
  /* 辅助色 1 - 蒸汽波紫 */
  --vw-color-secondary-1: #C44DFF;
  --vw-color-secondary-1-light: #D989FF;
  --vw-color-secondary-1-dark: #9E3ACC;
  
  /* 辅助色 2 - 蒸汽波青 */
  --vw-color-secondary-2: #00D9FF;
  --vw-color-secondary-2-light: #66E8FF;
  --vw-color-secondary-2-dark: #00ACC9;
  
  /* 辅助色 3 - 蒸汽波蓝 */
  --vw-color-secondary-3: #6B5BFF;
  --vw-color-secondary-3-light: #9D8FFF;
  --vw-color-secondary-3-dark: #4A3ACC;
  
  /* 辅助色 4 - 蒸汽波黄 */
  --vw-color-secondary-4: #FFD93D;
  --vw-color-secondary-4-light: #FFE680;
  --vw-color-secondary-4-dark: #CCB31F;
  
  /* 辅助色 5 - 蒸汽波绿 */
  --vw-color-secondary-5: #6BFFD9;
  --vw-color-secondary-5-light: #9DFFE8;
  --vw-color-secondary-5-dark: #4ACCA9;
  
  /* 辅助色渐变 - 蒸汽波多色 */
  --vw-gradient-secondary: linear-gradient(135deg, #FF6B9D 0%, #C44DFF 25%, #00D9FF 50%, #6B5BFF 75%, #6BFFD9 100%);
  --vw-gradient-sunset: linear-gradient(180deg, #FF6B9D 0%, #FFB3E6 30%, #FFD93D 60%, #6BFFD9 100%);
}
```

**使用场景：**
- 状态指示
- 分类标签
- 数据可视化
- 装饰性蒸汽波元素

### 中性色（Neutral Colors）

```css
:root {
  /* 背景 */
  --vw-color-bg-main: #1A1A2E;
  --vw-color-bg-secondary: #16213E;
  --vw-color-bg-tertiary: #0F0F1A;
  --vw-color-bg-card: rgba(26, 26, 46, 0.9);
  --vw-color-bg-hover: rgba(38, 38, 70, 0.9);
  --vw-color-bg-active: rgba(50, 50, 90, 0.9);
  
  /* 文字 */
  --vw-color-text-main: #FFFFFF;
  --vw-color-text-secondary: #B8B8C8;
  --vw-color-text-tertiary: #787888;
  --vw-color-text-disabled: #484858;
  
  /* 边框 */
  --vw-color-border-light: rgba(255, 255, 255, 0.1);
  --vw-color-border-medium: rgba(255, 255, 255, 0.2);
  --vw-color-border-dark: rgba(255, 255, 255, 0.3);
  
  /* 蒸汽波色 */
  --vw-color-vapor-1: rgba(255, 107, 157, 0.3);
  --vw-color-vapor-2: rgba(196, 77, 255, 0.3);
  --vw-color-vapor-3: rgba(0, 217, 255, 0.3);
}
```

**使用场景：**
- 页面背景、卡片背景
- 正文、说明文字
- 边框、分割线
- 蒸汽波发光效果

### 语义色（Semantic Colors）

```css
:root {
  /* 成功 */
  --vw-color-success: #6BFFD9;
  --vw-color-success-light: rgba(107, 255, 217, 0.2);
  --vw-color-success-dark: #4ACCA9;
  
  /* 警告 */
  --vw-color-warning: #FFD93D;
  --vw-color-warning-light: rgba(255, 217, 61, 0.2);
  --vw-color-warning-dark: #CCB31F;
  
  /* 错误 */
  --vw-color-error: #FF6B9D;
  --vw-color-error-light: rgba(255, 107, 157, 0.2);
  --vw-color-error-dark: #E84A7A;
  
  /* 信息 */
  --vw-color-info: #00D9FF;
  --vw-color-info-light: rgba(0, 217, 255, 0.2);
  --vw-color-info-dark: #00ACC9;
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
  --vw-font-family-en: 'Press Start 2P', 'VT323', 'Courier New', monospace;
  
  /* 中文字体 */
  --vw-font-family-zh: 'Noto Sans SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif;
  
  /* 标题字体 */
  --vw-font-family-display: 'Press Start 2P', 'VT323', 'Courier New', monospace;
  
  /* 等宽字体 */
  --vw-font-family-mono: 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', monospace;
}
```

### 字号层级

```css
:root {
  /* 标题 */
  --vw-font-size-h1: 56px;
  --vw-font-size-h2: 42px;
  --vw-font-size-h3: 32px;
  --vw-font-size-h4: 24px;
  --vw-font-size-h5: 20px;
  --vw-font-size-h6: 16px;
  
  /* 正文 */
  --vw-font-size-body-large: 18px;
  --vw-font-size-body: 16px;
  --vw-font-size-body-small: 14px;
  
  /* 辅助文字 */
  --vw-font-size-caption: 12px;
  --vw-font-size-label: 14px;
  --vw-font-size-overline: 11px;
}
```

### 行高与字重

```css
:root {
  /* 行高 */
  --vw-line-height-tight: 1.1;
  --vw-line-height-normal: 1.4;
  --vw-line-height-relaxed: 1.6;
  
  /* 字重 */
  --vw-font-weight-light: 300;
  --vw-font-weight-regular: 400;
  --vw-font-weight-medium: 500;
  --vw-font-weight-semibold: 600;
  --vw-font-weight-bold: 700;
}
```

### 排版规则

**标题样式：**
- H1: 56px, Bold (700), Line-height 1.1, Letter-spacing 0.05em, Text-shadow: 0 0 20px rgba(255, 107, 157, 0.5)
- H2: 42px, Semibold (600), Line-height 1.1, Letter-spacing 0.03em, Text-shadow: 0 0 15px rgba(255, 107, 157, 0.4)
- H3: 32px, Semibold (600), Line-height 1.2, Letter-spacing 0.02em, Text-shadow: 0 0 10px rgba(255, 107, 157, 0.3)
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
  --vw-container-width-xs: 100%;
  --vw-container-width-sm: 640px;
  --vw-container-width-md: 768px;
  --vw-container-width-lg: 1024px;
  --vw-container-width-xl: 1280px;
  --vw-container-width-2xl: 1536px;
  
  /* 页面边距 */
  --vw-page-padding-xs: 16px;
  --vw-page-padding-sm: 24px;
  --vw-page-padding-md: 32px;
  --vw-page-padding-lg: 48px;
  --vw-page-padding-xl: 64px;
}
```

### 栅格系统

```css
:root {
  /* 栅格列数 */
  --vw-grid-columns: 12;
  
  /* 栅格间距 */
  --vw-grid-gutter-xs: 8px;
  --vw-grid-gutter-sm: 16px;
  --vw-grid-gutter-md: 24px;
  --vw-grid-gutter-lg: 32px;
  --vw-grid-gutter-xl: 48px;
  
  /* 栅格边距 */
  --vw-grid-margin-xs: 8px;
  --vw-grid-margin-sm: 16px;
  --vw-grid-margin-md: 24px;
  --vw-grid-margin-lg: 32px;
  --vw-grid-margin-xl: 48px;
}
```

### 响应式断点

```css
:root {
  /* 断点 */
  --vw-breakpoint-xs: 0;
  --vw-breakpoint-sm: 640px;
  --vw-breakpoint-md: 768px;
  --vw-breakpoint-lg: 1024px;
  --vw-breakpoint-xl: 1280px;
  --vw-breakpoint-2xl: 1536px;
}
```

### 留白系统

```css
:root {
  /* 基础间距 */
  --vw-space-0: 0;
  --vw-space-1: 4px;
  --vw-space-2: 8px;
  --vw-space-3: 12px;
  --vw-space-4: 16px;
  --vw-space-5: 20px;
  --vw-space-6: 24px;
  --vw-space-8: 32px;
  --vw-space-10: 40px;
  --vw-space-12: 48px;
  --vw-space-16: 64px;
  --vw-space-20: 80px;
  --vw-space-24: 96px;
  --vw-space-32: 128px;
}
```

**信息密度：** 中等，适合展示复古和怀旧氛围的内容

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
- Default: 蒸汽波渐变背景，白色文字，蒸汽波发光效果
- Hover: 蒸汽波渐变加深背景，蒸汽波发光效果增强
- Active: 蒸汽波渐变更深背景，轻微缩放
- Disabled: 灰色背景，灰色文字，不可点击
- Loading: 显示加载动画

**圆角：**
- Square: 0px
- Small: 4px
- Medium: 8px
- Large: 12px
- Pill: 9999px

**颜色变体：**
- Primary: 蒸汽波渐变
- Secondary: 辅助色
- Outline: 透明背景，蒸汽波边框，蒸汽波发光
- Ghost: 透明背景，蒸汽波文字，蒸汽波发光
- Link: 无背景，蒸汽波文字，下划线，蒸汽波发光

```css
.vw-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: var(--vw-radius-lg);
  background: var(--vw-gradient-primary);
  color: #FFFFFF;
  box-shadow: 0 0 20px rgba(255, 107, 157, 0.5), 0 0 40px rgba(196, 77, 255, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.vw-button:hover {
  background: var(--vw-gradient-primary-retro);
  box-shadow: 0 0 30px rgba(255, 107, 157, 0.7), 0 0 60px rgba(196, 77, 255, 0.5);
  transform: translateY(-2px);
}

.vw-button:active {
  background: var(--vw-color-primary-dark);
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
- 背景: 半透明深色 rgba(26, 26, 46, 0.9)
- 蒸汽波边框: 1px solid rgba(255, 107, 157, 0.3)
- 蒸汽波发光: 0 0 20px rgba(255, 107, 157, 0.2)
- 圆角: 12px - 16px
- 内边距: 24px - 32px

**悬停效果：**
- 蒸汽波发光增强: 0 0 30px rgba(255, 107, 157, 0.4)
- 轻微上移: translateY(-4px)
- 过渡时间: 0.3s

```css
.vw-card {
  background: var(--vw-color-bg-card);
  border: 1px solid var(--vw-color-border-medium);
  border-radius: var(--vw-radius-xl);
  box-shadow: 0 0 20px rgba(255, 107, 157, 0.2);
  padding: var(--vw-space-8);
  transition: all 0.3s ease;
}

.vw-card:hover {
  box-shadow: 0 0 30px rgba(255, 107, 157, 0.4), 0 0 60px rgba(196, 77, 255, 0.2);
  transform: translateY(-4px);
  border-color: var(--vw-color-primary);
}
```

### Input（输入框）

**尺寸：**
- Small: 32px height, 14px font-size
- Medium: 40px height, 16px font-size
- Large: 48px height, 18px font-size

**状态：**
- Default: 深色背景，浅灰色边框
- Focus: 蒸汽波边框，蒸汽波发光
- Error: 红色边框，红色蒸汽波发光，错误提示
- Disabled: 灰色背景，不可编辑
- Success: 绿色边框，绿色蒸汽波发光

**圆角：**
- Small: 8px
- Medium: 12px
- Large: 16px

```css
.vw-input {
  width: 100%;
  padding: var(--vw-space-3) var(--vw-space-4);
  font-size: var(--vw-font-size-body);
  border: 1px solid var(--vw-color-border-light);
  border-radius: var(--vw-radius-lg);
  background: var(--vw-color-bg-secondary);
  color: var(--vw-color-text-main);
  transition: all 0.3s ease;
}

.vw-input:focus {
  outline: none;
  border-color: var(--vw-color-primary);
  box-shadow: 0 0 20px rgba(255, 107, 157, 0.3), 0 0 40px rgba(196, 77, 255, 0.2);
}

.vw-input-error {
  border-color: var(--vw-color-error);
  box-shadow: 0 0 20px rgba(255, 107, 157, 0.3), 0 0 40px rgba(196, 77, 255, 0.2);
}
```

### Upload（上传）

**样式规范：**
- 虚线边框: 2px dashed rgba(255, 107, 157, 0.5)
- 圆角: 12px - 16px
- 内边距: 48px - 64px
- 背景: 深色半透明 rgba(26, 26, 46, 0.6)
- 悬停: 蒸汽波边框，蒸汽波发光
- 拖拽: 蒸汽波边框，蒸汽波背景，强蒸汽波发光

**图标：**
- 默认: 上传图标（outline）
- 悬停: 上传图标（filled，蒸汽波发光）
- 成功: 对勾图标（蒸汽波发光）

```css
.vw-upload {
  border: 2px dashed var(--vw-color-border-medium);
  border-radius: var(--vw-radius-xl);
  padding: var(--vw-space-12) var(--vw-space-8);
  background: rgba(26, 26, 46, 0.6);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.vw-upload:hover {
  border-color: var(--vw-color-primary);
  box-shadow: 0 0 20px rgba(255, 107, 157, 0.3);
}

.vw-upload-dragging {
  border-color: var(--vw-color-primary);
  background: rgba(255, 107, 157, 0.1);
  box-shadow: 0 0 30px rgba(255, 107, 157, 0.5), 0 0 60px rgba(196, 77, 255, 0.3);
}
```

### Navigation（导航）

**结构：**
- 顶部导航: Logo + 菜单项 + 操作按钮
- 侧边导航: Logo + 菜单项 + 用户信息
- 面包屑: 首页 > 一级 > 二级 > 当前

**交互：**
- Hover: 背景蒸汽波发光，下划线动画
- Active: 蒸汽波背景，白色文字，强蒸汽波发光
- 展开: 下拉菜单，平滑过渡，蒸汽波发光

```css
.vw-nav-item {
  padding: var(--vw-space-3) var(--vw-space-4);
  border-radius: var(--vw-radius-lg);
  transition: all 0.3s ease;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.vw-nav-item:hover {
  background: rgba(255, 107, 157, 0.1);
  box-shadow: 0 0 20px rgba(255, 107, 157, 0.2);
}

.vw-nav-item-active {
  background: var(--vw-gradient-primary);
  color: #FFFFFF;
  box-shadow: 0 0 20px rgba(255, 107, 157, 0.5), 0 0 40px rgba(196, 77, 255, 0.3);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格

**类型：**
- Outline: 线框图标，2px 描边，蒸汽波发光
- Filled: 实心图标，蒸汽波发光
- Vaporwave: 蒸汽波图标，强发光效果

**特征：**
- 蒸汽波: 使用蒸汽波色彩和发光效果
- 复古: 80/90年代复古风格
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
- 蒸汽波插画: 蒸汽波色彩和发光效果
- 复古插画: 80/90年代复古风格
- 抽象插画: 抽象的蒸汽波形状

**原则：**
- 蒸汽波: 使用蒸汽波色彩和发光效果
- 复古: 80/90年代复古美学
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
- 蒸汽波发光增强
- 轻微上移（2-4px）
- 过渡时间: 0.3s

**卡片：**
- 蒸汽波发光增强
- 轻微上移（4-6px）
- 过渡时间: 0.3s

**链接：**
- 下划线动画
- 颜色加深
- 蒸汽波发光
- 过渡时间: 0.3s

### Active 状态

**按钮：**
- 背景更深
- 轻微下移（2-4px）
- 过渡时间: 0.15s

**卡片：**
- 蒸汽波发光恢复
- 位置恢复
- 过渡时间: 0.15s

### Focus 状态

**输入框：**
- 蒸汽波边框
- 蒸汽波发光（0 0 20px rgba(255, 107, 157, 0.3), 0 0 40px rgba(196, 77, 255, 0.2)）
- 过渡时间: 0.3s

**按钮：**
- 外部蒸汽波轮廓（outline）
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
- 绿色蒸汽波发光
- 成功提示消息
- 过渡时间: 0.3s

**错误：**
- 红色蒸汽波发光
- 错误提示消息
- 抖动动画（0.4s）

**加载：**
- 旋转蒸汽波加载动画
- 进度条
- 骨架屏

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens

```css
:root {
  /* Primary */
  --vw-color-primary-50: #FFE6F0;
  --vw-color-primary-100: #FFB3D9;
  --vw-color-primary-200: #FF80C2;
  --vw-color-primary-300: #FF4DAB;
  --vw-color-primary-400: #FF1A94;
  --vw-color-primary-500: #FF6B9D;
  --vw-color-primary-600: #E84A7A;
  --vw-color-primary-700: #B83A62;
  --vw-color-primary-800: #882A4A;
  --vw-color-primary-900: #581A32;
  
  /* Secondary */
  --vw-color-secondary-1-50: #F5E6FF;
  --vw-color-secondary-1-100: #E6B3FF;
  --vw-color-secondary-1-200: #D680FF;
  --vw-color-secondary-1-300: #C64DFF;
  --vw-color-secondary-1-400: #B61AFF;
  --vw-color-secondary-1-500: #C44DFF;
  --vw-color-secondary-1-600: #9E3ACC;
  --vw-color-secondary-1-700: #782D99;
  --vw-color-secondary-1-800: #521E66;
  --vw-color-secondary-1-900: #2C0F33;
  
  /* Neutral */
  --vw-color-neutral-50: #F5F5F7;
  --vw-color-neutral-100: #E0E0E8;
  --vw-color-neutral-200: #C0C0D0;
  --vw-color-neutral-300: #A0A0B8;
  --vw-color-neutral-400: #8080A0;
  --vw-color-neutral-500: #606088;
  --vw-color-neutral-600: #404070;
  --vw-color-neutral-700: #303060;
  --vw-color-neutral-800: #202050;
  --vw-color-neutral-900: #101040;
}
```

### Spacing Tokens

```css
:root {
  --vw-spacing-0: 0;
  --vw-spacing-px: 1px;
  --vw-spacing-0-5: 2px;
  --vw-spacing-1: 4px;
  --vw-spacing-1-5: 6px;
  --vw-spacing-2: 8px;
  --vw-spacing-2-5: 10px;
  --vw-spacing-3: 12px;
  --vw-spacing-3-5: 14px;
  --vw-spacing-4: 16px;
  --vw-spacing-5: 20px;
  --vw-spacing-6: 24px;
  --vw-spacing-7: 28px;
  --vw-spacing-8: 32px;
  --vw-spacing-9: 36px;
  --vw-spacing-10: 40px;
  --vw-spacing-11: 44px;
  --vw-spacing-12: 48px;
  --vw-spacing-14: 56px;
  --vw-spacing-16: 64px;
  --vw-spacing-20: 80px;
  --vw-spacing-24: 96px;
  --vw-spacing-28: 112px;
  --vw-spacing-32: 128px;
  --vw-spacing-36: 144px;
  --vw-spacing-40: 160px;
  --vw-spacing-44: 176px;
  --vw-spacing-48: 192px;
  --vw-spacing-52: 208px;
  --vw-spacing-56: 224px;
  --vw-spacing-60: 240px;
  --vw-spacing-64: 256px;
  --vw-spacing-72: 288px;
  --vw-spacing-80: 320px;
  --vw-spacing-96: 384px;
}
```

### Radius Tokens

```css
:root {
  --vw-radius-none: 0;
  --vw-radius-sm: 4px;
  --vw-radius-base: 8px;
  --vw-radius-md: 12px;
  --vw-radius-lg: 16px;
  --vw-radius-xl: 24px;
  --vw-radius-2xl: 32px;
  --vw-radius-3xl: 48px;
  --vw-radius-full: 9999px;
}
```

### Shadow Tokens

```css
:root {
  --vw-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
  --vw-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --vw-shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  --vw-shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
  --vw-shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  --vw-shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  --vw-shadow-2xl: 0 35px 60px -15px rgba(0, 0, 0, 0.5);
  --vw-shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  --vw-shadow-none: 0 0 #0000;
}
```

### Glow Tokens

```css
:root {
  --vw-glow-xs: 0 0 5px rgba(255, 107, 157, 0.3);
  --vw-glow-sm: 0 0 10px rgba(255, 107, 157, 0.4);
  --vw-glow-base: 0 0 15px rgba(255, 107, 157, 0.5);
  --vw-glow-md: 0 0 20px rgba(255, 107, 157, 0.5), 0 0 40px rgba(196, 77, 255, 0.3);
  --vw-glow-lg: 0 0 30px rgba(255, 107, 157, 0.6), 0 0 60px rgba(196, 77, 255, 0.4);
  --vw-glow-xl: 0 0 40px rgba(255, 107, 157, 0.7), 0 0 80px rgba(196, 77, 255, 0.5);
  --vw-glow-2xl: 0 0 50px rgba(255, 107, 157, 0.8), 0 0 100px rgba(196, 77, 255, 0.6);
}
```

### Typography Tokens

```css
:root {
  /* Font Family */
  --vw-font-sans: 'Press Start 2P', 'VT323', 'Courier New', monospace;
  --vw-font-serif: 'Georgia', 'Cambria', 'Times New Roman', Times, serif;
  --vw-font-mono: 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', monospace;
  
  /* Font Size */
  --vw-text-xs: 0.75rem; /* 12px */
  --vw-text-sm: 0.875rem; /* 14px */
  --vw-text-base: 1rem; /* 16px */
  --vw-text-lg: 1.125rem; /* 18px */
  --vw-text-xl: 1.25rem; /* 20px */
  --vw-text-2xl: 1.5rem; /* 24px */
  --vw-text-3xl: 1.875rem; /* 30px */
  --vw-text-4xl: 2.25rem; /* 36px */
  --vw-text-5xl: 3rem; /* 48px */
  --vw-text-6xl: 3.75rem; /* 60px */
  --vw-text-7xl: 4.5rem; /* 72px */
  --vw-text-8xl: 6rem; /* 96px */
  --vw-text-9xl: 8rem; /* 128px */
  
  /* Font Weight */
  --vw-font-thin: 100;
  --vw-font-extralight: 200;
  --vw-font-light: 300;
  --vw-font-normal: 400;
  --vw-font-medium: 500;
  --vw-font-semibold: 600;
  --vw-font-bold: 700;
  --vw-font-extrabold: 800;
  --vw-font-black: 900;
  
  /* Line Height */
  --vw-leading-none: 1;
  --vw-leading-tight: 1.1;
  --vw-leading-snug: 1.2;
  --vw-leading-normal: 1.4;
  --vw-leading-relaxed: 1.6;
  --vw-leading-loose: 2;
  
  /* Letter Spacing */
  --vw-tracking-tighter: -0.05em;
  --vw-tracking-tight: -0.025em;
  --vw-tracking-normal: 0;
  --vw-tracking-wide: 0.025em;
  --vw-tracking-wider: 0.05em;
  --vw-tracking-widest: 0.1em;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）

**设计原则：**
- ✅ 蒸汽波化设计语言：学习如何使用蒸汽波色彩和发光效果
- ✅ 复古美学：学习如何使用80/90年代复古美学
- ✅ 发光效果：学习如何使用 box-shadow 创造蒸汽波发光
- ✅ 暗色背景：学习如何使用暗色背景突出蒸汽波效果
- ✅ 怀旧氛围：学习如何创造怀旧和梦幻的氛围

**技术实现：**
- ✅ Design Token 系统：学习如何组织和管理设计变量
- ✅ 响应式设计：学习如何适配不同设备尺寸
- ✅ 组件化思维：学习如何构建可复用的 UI 组件
- ✅ 蒸汽波效果：学习如何使用 box-shadow 和发光效果

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
- 学习蒸汽波设计的设计原则和方法论
- 参考色彩系统和排版规则
- 借鉴组件结构和交互模式
- 使用自己的品牌元素和内容
- 创建独特的视觉识别系统
- 注意蒸汽波效果的性能影响
- 合理使用发光效果，避免过度使用

---

**设计系统版本：** v1.0.0
**最后更新：** 2025-02-02
**维护者：** Design System Team