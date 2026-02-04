# Figma Design System

Figma 官方设计系统，协作设计工具设计规范

## 1. 设计风格总览（Design DNA）

**核心关键词：** 协作、现代、简洁、专业、高效

**适用产品类型：**
- SaaS 协作工具
- 设计工具
- 团队协作平台
- 创意软件

**设计理念：**
- 以用户为中心的协作体验
- 简洁直观的界面设计
- 高效的工作流程
- 专业的视觉表现

---

## 2. 颜色系统（Color System）

### 主品牌色（Primary Colors）
```css
:root {
  /* 主品牌色 - 蓝色 */
  --color-primary: #18A0FB;
  --color-primary-hover: #0D8CE8;
  --color-primary-active: #0B7BCF;
  --color-primary-light: #5BC2FF;
  --color-primary-lighter: #9ED9FF;
  --color-primary-dark: #0D8CE8;
  --color-primary-darker: #0B7BCF;
}
```

**使用场景：**
- 主要操作按钮
- 重要链接
- 选中状态
- 品牌标识

### 辅助色（Secondary Colors）
```css
:root {
  /* 辅助色 - 紫色 */
  --color-secondary: #A259FF;
  --color-secondary-hover: #8E44E6;
  --color-secondary-active: #7A3BC7;
  --color-secondary-light: #BB8AFF;
  --color-secondary-lighter: #D4BBFF;
  --color-secondary-dark: #8E44E6;
  --color-secondary-darker: #7A3BC7;
}
```

**使用场景：**
- 次要操作
- 强调元素
- 插画点缀

### 中性色（Neutral Colors）
```css
:root {
  /* 中性色 - 灰色系 */
  --color-neutral-900: #0D0D0D;
  --color-neutral-800: #1E1E1E;
  --color-neutral-700: #2C2C2C;
  --color-neutral-600: #3E3E3E;
  --color-neutral-500: #525252;
  --color-neutral-400: #737373;
  --color-neutral-300: #A3A3A3;
  --color-neutral-200: #D4D4D4;
  --color-neutral-100: #E5E5E5;
  --color-neutral-50: #F5F5F5;
  --color-neutral-0: #FFFFFF;
}
```

**使用场景：**
- 文字内容
- 边框线条
- 背景色
- 分隔线

### 语义色（Semantic Colors）
```css
:root {
  /* 成功色 */
  --color-success: #00C853;
  --color-success-light: #69F0AE;
  --color-success-dark: #009624;
  
  /* 警告色 */
  --color-warning: #FFAB00;
  --color-warning-light: #FFD54F;
  --color-warning-dark: #FF6F00;
  
  /* 错误色 */
  --color-error: #FF3D00;
  --color-error-light: #FF8A65;
  --color-error-dark: #DD2C00;
  
  /* 信息色 */
  --color-info: #2979FF;
  --color-info-light: #82B1FF;
  --color-info-dark: #2962FF;
}
```

**使用场景：**
- 状态指示
- 反馈消息
- 警告提示
- 信息通知

---

## 3. 字体与排版（Typography）

### 字体家族
```css
:root {
  /* 主字体 */
  --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* 等宽字体 */
  --font-family-mono: 'JetBrains Mono', 'Fira Code', 'Roboto Mono', monospace;
}
```

### 字号层级
```css
:root {
  /* 标题字号 */
  --font-size-h1: 32px;
  --font-size-h2: 24px;
  --font-size-h3: 20px;
  --font-size-h4: 16px;
  
  /* 正文字号 */
  --font-size-body-large: 16px;
  --font-size-body: 14px;
  --font-size-body-small: 12px;
  
  /* 辅助字号 */
  --font-size-caption: 11px;
  --font-size-label: 10px;
}
```

### 字重
```css
:root {
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### 行高
```css
:root {
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}
```

### 排版规则
- **标题：** 使用 H1-H4，字重 600-700，行高 1.2
- **正文：** 使用 14-16px，字重 400-500，行高 1.5
- **辅助文本：** 使用 11-12px，字重 400，行高 1.5
- **代码：** 使用等宽字体，字重 400，行高 1.5

---

## 4. 布局与栅格系统（Layout & Grid）

### 版心宽度
```css
:root {
  --page-width-max: 1440px;
  --page-width-large: 1280px;
  --page-width-medium: 1024px;
  --page-width-small: 768px;
}
```

### 栅格系统
```css
:root {
  /* 栅格列数 */
  --grid-columns: 12;
  
  /* 间距 */
  --grid-gutter: 24px;
  --grid-margin: 32px;
  
  /* 响应式断点 */
  --breakpoint-mobile: 640px;
  --breakpoint-tablet: 768px;
  --breakpoint-desktop: 1024px;
  --breakpoint-large: 1280px;
}
```

### 留白系统
```css
:root {
  /* 基础间距单位 */
  --space-0: 0px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
}
```

### 布局原则
- **信息密度：** 中等密度，平衡信息展示与视觉舒适度
- **留白使用：** 充足留白，提升可读性
- **对齐方式：** 左对齐为主，保持一致性
- **响应式设计：** 移动优先，渐进增强

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

#### 尺寸规格
```css
:root {
  /* 按钮尺寸 */
  --button-size-small: 32px;
  --button-size-medium: 40px;
  --button-size-large: 48px;
  
  /* 按钮圆角 */
  --button-radius-small: 6px;
  --button-radius-medium: 8px;
  --button-radius-large: 10px;
}
```

#### 按钮状态
```css
/* 主按钮 */
.button-primary {
  background: var(--color-primary);
  color: var(--color-neutral-0);
  border: none;
  border-radius: var(--button-radius-medium);
  padding: 0 20px;
  height: var(--button-size-medium);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
}

.button-primary:hover {
  background: var(--color-primary-hover);
  transform: translateY(-1px);
}

.button-primary:active {
  background: var(--color-primary-active);
  transform: translateY(0);
}

/* 次要按钮 */
.button-secondary {
  background: var(--color-neutral-100);
  color: var(--color-neutral-900);
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--button-radius-medium);
  padding: 0 20px;
  height: var(--button-size-medium);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
}

.button-secondary:hover {
  background: var(--color-neutral-200);
  border-color: var(--color-neutral-300);
}

/* 文字按钮 */
.button-ghost {
  background: transparent;
  color: var(--color-primary);
  border: none;
  border-radius: var(--button-radius-medium);
  padding: 0 12px;
  height: var(--button-size-medium);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s ease;
}

.button-ghost:hover {
  background: var(--color-primary-lighter);
}
```

### Card（卡片）

```css
.card {
  background: var(--color-neutral-0);
  border: 1px solid var(--color-neutral-200);
  border-radius: 12px;
  padding: var(--space-6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-color: var(--color-neutral-300);
}

.card-header {
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-neutral-100);
}

.card-body {
  margin-bottom: var(--space-4);
}

.card-footer {
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-neutral-100);
}
```

**使用场景：**
- 内容展示
- 功能模块
- 信息卡片
- 数据展示

### Input（输入框）

```css
.input {
  width: 100%;
  padding: 10px 14px;
  font-size: var(--font-size-body);
  font-family: var(--font-family-primary);
  color: var(--color-neutral-900);
  background: var(--color-neutral-0);
  border: 1px solid var(--color-neutral-300);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.input:hover {
  border-color: var(--color-neutral-400);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(24, 160, 251, 0.1);
}

.input::placeholder {
  color: var(--color-neutral-400);
}

.input-error {
  border-color: var(--color-error);
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(255, 61, 0, 0.1);
}
```

### Navigation（导航）

```css
.nav {
  display: flex;
  align-items: center;
  padding: var(--space-4) var(--space-6);
  background: var(--color-neutral-0);
  border-bottom: 1px solid var(--color-neutral-200);
}

.nav-item {
  display: flex;
  align-items: center;
  padding: var(--space-2) var(--space-3);
  color: var(--color-neutral-600);
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-weight: var(--font-weight-medium);
}

.nav-item:hover {
  background: var(--color-neutral-100);
  color: var(--color-neutral-900);
}

.nav-item-active {
  background: var(--color-primary-lighter);
  color: var(--color-primary);
}

.nav-item-active:hover {
  background: var(--color-primary-light);
  color: var(--color-primary-dark);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
- **风格类型：** Outline（线框）为主，Filled（填充）为辅
- **线条粗细：** 1.5px - 2px
- **圆角处理：** 轻微圆角，2px - 3px
- **尺寸规范：** 16px, 20px, 24px, 32px

### 图标使用原则
```css
.icon {
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
}

.icon-small {
  width: 16px;
  height: 16px;
}

.icon-medium {
  width: 20px;
  height: 20px;
}

.icon-large {
  width: 24px;
  height: 24px;
}
```

### 插画风格
- **风格类型：** 扁平插画，简洁现代
- **色彩使用：** 品牌色为主，中性色辅助
- **表现手法：** 几何图形，抽象表达
- **使用原则：** 弱化处理，仅辅助理解

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 状态
- **按钮：** 背景色加深，轻微上移（1px）
- **链接：** 颜色加深，下划线显示
- **卡片：** 阴影加深，边框颜色变化
- **输入框：** 边框颜色加深

### Active 状态
- **按钮：** 背景色进一步加深，位置恢复
- **链接：** 颜色变深
- **输入框：** 边框颜色变深

### Focus 状态
- **输入框：** 边框变为主色，添加外发光效果
- **按钮：** 添加键盘焦点指示器
- **链接：** 添加键盘焦点指示器

### 动效节奏
```css
:root {
  /* 动效时长 */
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  
  /* 缓动函数 */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
}
```

### 操作反馈原则
- **即时反馈：** 所有操作应在 100ms 内提供视觉反馈
- **状态指示：** 清晰显示当前状态（加载、成功、错误）
- **错误处理：** 友好的错误提示，提供解决方案
- **确认操作：** 重要操作需要二次确认

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
  /* Primary */
  --color-primary-50: #E3F2FD;
  --color-primary-100: #BBDEFB;
  --color-primary-200: #90CAF9;
  --color-primary-300: #64B5F6;
  --color-primary-400: #42A5F5;
  --color-primary-500: #2196F3;
  --color-primary-600: #1E88E5;
  --color-primary-700: #1976D2;
  --color-primary-800: #1565C0;
  --color-primary-900: #0D47A1;
  
  /* Secondary */
  --color-secondary-50: #F3E5F5;
  --color-secondary-100: #E1BEE7;
  --color-secondary-200: #CE93D8;
  --color-secondary-300: #BA68C8;
  --color-secondary-400: #AB47BC;
  --color-secondary-500: #9C27B0;
  --color-secondary-600: #8E24AA;
  --color-secondary-700: #7B1FA2;
  --color-secondary-800: #6A1B9A;
  --color-secondary-900: #4A148C;
  
  /* Neutral */
  --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F5F5F5;
  --color-neutral-200: #EEEEEE;
  --color-neutral-300: #E0E0E0;
  --color-neutral-400: #BDBDBD;
  --color-neutral-500: #9E9E9E;
  --color-neutral-600: #757575;
  --color-neutral-700: #616161;
  --color-neutral-800: #424242;
  --color-neutral-900: #212121;
}
```

### Spacing Tokens
```css
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
}
```

### Radius Tokens
```css
:root {
  --radius-none: 0px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
}
```

### Typography Tokens
```css
:root {
  --font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-mono: 'JetBrains Mono', 'Fira Code', 'Roboto Mono', monospace;
  
  --text-xs: 11px;
  --text-sm: 12px;
  --text-base: 14px;
  --text-lg: 16px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 32px;
  
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
  
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）

✅ **可以学习：**
- **色彩系统：** 学习其主色、辅助色、中性色的搭配逻辑
- **排版系统：** 学习其字号层级、字重、行高的设置规则
- **栅格系统：** 学习其 12 列栅格和响应式断点设计
- **组件规范：** 学习按钮、卡片、输入框等组件的尺寸和状态设计
- **交互原则：** 学习其 hover、active、focus 状态的处理方式
- **动效节奏：** 学习其 150-300ms 的动效时长和缓动函数选择
- **留白原则：** 学习其 4px 基础间距单位的倍数关系
- **图标风格：** 学习其线框图标的设计规范

### 不应复刻的元素（品牌 / 插画 / 内容）

❌ **不应复刻：**
- **品牌标识：** 不应使用 Figma 的 logo、品牌名称
- **品牌色彩：** 不应直接复制其特定的品牌色值（#18A0FB）
- **插画内容：** 不应复制其具体的插画作品和视觉元素
- **文案内容：** 不应复制其产品文案、营销内容
- **界面布局：** 不应完全复制其产品界面的具体布局
- **功能设计：** 不应复制其产品的功能特性和交互流程

### 合法复刻建议

1. **学习设计系统方法论：** 学习其如何构建完整的设计系统，包括色彩、排版、组件、交互等
2. **参考设计原则：** 学习其简洁、现代、专业的设计理念
3. **应用设计模式：** 学习其组件化、模块化的设计方法
4. **借鉴技术实现：** 学习其使用 CSS Variables 实现 Design Token 的方法
5. **遵循设计规范：** 学习其如何制定和执行设计规范

**重要提醒：**
- 本设计系统仅用于学习参考，不应直接用于商业产品
- 如需用于商业产品，请确保进行充分的差异化设计
- 尊重原创知识产权，避免侵权风险
- 建议在此基础上进行创新和改进，形成自己的设计风格

---

## 附录：快速参考

### 常用颜色
- 主色：#18A0FB
- 辅助色：#A259FF
- 成功色：#00C853
- 警告色：#FFAB00
- 错误色：#FF3D00

### 常用字号
- H1：32px
- H2：24px
- H3：20px
- Body：14px
- Caption：11px

### 常用间距
- 小间距：8px
- 中间距：16px
- 大间距：24px
- 超大间距：48px

### 常用圆角
- 小圆角：4px
- 中圆角：8px
- 大圆角：12px

---

*本设计系统基于 Figma 官方设计规范整理，仅供学习参考使用。*