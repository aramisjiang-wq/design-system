# Framer Motion Design System

React 动画库，声明式动画设计规范

## 1. 设计风格总览（Design DNA）

**核心关键词：** 流畅、自然、交互、响应、现代

**适用产品类型：**
- React 应用
- 交互式网站
- 动画展示平台
- 现代化 Web 应用

**设计理念：**
- 以用户为中心的动画体验
- 流畅自然的过渡效果
- 响应式的交互反馈
- 现代化的视觉表现

---

## 2. 颜色系统（Color System）

### 主品牌色（Primary Colors）
```css
:root {
  /* 主品牌色 - 蓝色 */
  --color-primary: #0055FF;
  --color-primary-hover: #0044CC;
  --color-primary-active: #003399;
  --color-primary-light: #3377FF;
  --color-primary-lighter: #6699FF;
  --color-primary-dark: #0044CC;
  --color-primary-darker: #003399;
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
  --color-secondary: #8B5CF6;
  --color-secondary-hover: #7C3AED;
  --color-secondary-active: #6D28D9;
  --color-secondary-light: #A78BFA;
  --color-secondary-lighter: #C4B5FD;
  --color-secondary-dark: #7C3AED;
  --color-secondary-darker: #6D28D9;
}
```

**使用场景：**
- 次要操作
- 强调元素
- 动画过渡
- 插画点缀

### 中性色（Neutral Colors）
```css
:root {
  /* 中性色 - 灰色系 */
  --color-neutral-900: #111827;
  --color-neutral-800: #1F2937;
  --color-neutral-700: #374151;
  --color-neutral-600: #4B5563;
  --color-neutral-500: #6B7280;
  --color-neutral-400: #9CA3AF;
  --color-neutral-300: #D1D5DB;
  --color-neutral-200: #E5E7EB;
  --color-neutral-100: #F3F4F6;
  --color-neutral-50: #F9FAFB;
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
  --color-success: #10B981;
  --color-success-light: #34D399;
  --color-success-dark: #059669;
  
  /* 警告色 */
  --color-warning: #F59E0B;
  --color-warning-light: #FBBF24;
  --color-warning-dark: #D97706;
  
  /* 错误色 */
  --color-error: #EF4444;
  --color-error-light: #F87171;
  --color-error-dark: #DC2626;
  
  /* 信息色 */
  --color-info: #3B82F6;
  --color-info-light: #60A5FA;
  --color-info-dark: #2563EB;
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
  --font-family-mono: 'Fira Code', 'JetBrains Mono', 'Roboto Mono', monospace;
}
```

### 字号层级
```css
:root {
  /* 标题字号 */
  --font-size-h1: 36px;
  --font-size-h2: 30px;
  --font-size-h3: 24px;
  --font-size-h4: 20px;
  
  /* 正文字号 */
  --font-size-body-large: 18px;
  --font-size-body: 16px;
  --font-size-body-small: 14px;
  
  /* 辅助字号 */
  --font-size-caption: 12px;
  --font-size-label: 11px;
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
  --line-height-tight: 1.25;
  --line-height-normal: 1.6;
  --line-height-relaxed: 1.8;
}
```

### 排版规则
- **标题：** 使用 H1-H4，字重 600-700，行高 1.25
- **正文：** 使用 16-18px，字重 400-500，行高 1.6
- **辅助文本：** 使用 11-14px，字重 400，行高 1.6
- **代码：** 使用等宽字体，字重 400，行高 1.6

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
  --button-size-small: 36px;
  --button-size-medium: 44px;
  --button-size-large: 52px;
  
  /* 按钮圆角 */
  --button-radius-small: 8px;
  --button-radius-medium: 12px;
  --button-radius-large: 16px;
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
  padding: 0 24px;
  height: var(--button-size-medium);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.button-primary:hover {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 85, 255, 0.3);
}

.button-primary:active {
  background: var(--color-primary-active);
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 85, 255, 0.2);
}

/* 次要按钮 */
.button-secondary {
  background: var(--color-neutral-100);
  color: var(--color-neutral-900);
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--button-radius-medium);
  padding: 0 24px;
  height: var(--button-size-medium);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.button-secondary:hover {
  background: var(--color-neutral-200);
  border-color: var(--color-neutral-300);
  transform: translateY(-2px);
}

/* 文字按钮 */
.button-ghost {
  background: transparent;
  color: var(--color-primary);
  border: none;
  border-radius: var(--button-radius-medium);
  padding: 0 16px;
  height: var(--button-size-medium);
  font-weight: var(--font-weight-medium);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.button-ghost:hover {
  background: var(--color-primary-lighter);
  transform: translateY(-2px);
}
```

### Card（卡片）

```css
.card {
  background: var(--color-neutral-0);
  border: 1px solid var(--color-neutral-200);
  border-radius: 16px;
  padding: var(--space-6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-color: var(--color-neutral-300);
  transform: translateY(-4px);
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
  padding: 12px 16px;
  font-size: var(--font-size-body);
  font-family: var(--font-family-primary);
  color: var(--color-neutral-900);
  background: var(--color-neutral-0);
  border: 2px solid var(--color-neutral-300);
  border-radius: 12px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.input:hover {
  border-color: var(--color-neutral-400);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px rgba(0, 85, 255, 0.1);
}

.input::placeholder {
  color: var(--color-neutral-400);
}

.input-error {
  border-color: var(--color-error);
}

.input-error:focus {
  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
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
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: var(--font-weight-medium);
}

.nav-item:hover {
  background: var(--color-neutral-100);
  color: var(--color-neutral-900);
  transform: translateY(-2px);
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
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
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

.icon:hover {
  transform: scale(1.1);
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
- **按钮：** 背景色加深，上移（2px），阴影增强
- **链接：** 颜色加深，下划线显示
- **卡片：** 阴影加深，边框颜色变化，上移（4px）
- **输入框：** 边框颜色加深
- **图标：** 放大（1.1倍）

### Active 状态
- **按钮：** 背景色进一步加深，位置恢复，阴影减弱
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
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  
  /* 缓动函数 */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
```

### 动画原则
- **流畅性：** 所有动画应使用 60fps 的帧率
- **自然性：** 使用自然的缓动函数，避免机械感
- **响应性：** 动画应对用户操作做出即时响应
- **性能：** 使用 transform 和 opacity 属性，避免重排重绘
- **可访问性：** 尊重用户的减少动画偏好设置

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
  --color-primary-50: #EFF6FF;
  --color-primary-100: #DBEAFE;
  --color-primary-200: #BFDBFE;
  --color-primary-300: #93C5FD;
  --color-primary-400: #60A5FA;
  --color-primary-500: #3B82F6;
  --color-primary-600: #0055FF;
  --color-primary-700: #0044CC;
  --color-primary-800: #003399;
  --color-primary-900: #002266;
  
  /* Secondary */
  --color-secondary-50: #F5F3FF;
  --color-secondary-100: #EDE9FE;
  --color-secondary-200: #DDD6FE;
  --color-secondary-300: #C4B5FD;
  --color-secondary-400: #A78BFA;
  --color-secondary-500: #8B5CF6;
  --color-secondary-600: #7C3AED;
  --color-secondary-700: #6D28D9;
  --color-secondary-800: #5B21B6;
  --color-secondary-900: #4C1D95;
  
  /* Neutral */
  --color-neutral-50: #F9FAFB;
  --color-neutral-100: #F3F4F6;
  --color-neutral-200: #E5E7EB;
  --color-neutral-300: #D1D5DB;
  --color-neutral-400: #9CA3AF;
  --color-neutral-500: #6B7280;
  --color-neutral-600: #4B5563;
  --color-neutral-700: #374151;
  --color-neutral-800: #1F2937;
  --color-neutral-900: #111827;
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
  --shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}
```

### Typography Tokens
```css
:root {
  --font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-mono: 'Fira Code', 'JetBrains Mono', 'Roboto Mono', monospace;
  
  --text-xs: 11px;
  --text-sm: 12px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 30px;
  --text-4xl: 36px;
  
  --leading-tight: 1.25;
  --leading-normal: 1.6;
  --leading-relaxed: 1.8;
  
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### Animation Tokens
```css
:root {
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);
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
- **动效节奏：** 学习其 100-500ms 的动效时长和缓动函数选择
- **留白原则：** 学习其 4px 基础间距单位的倍数关系
- **图标风格：** 学习其线框图标的设计规范
- **动画原则：** 学习其流畅、自然、响应的动画设计理念

### 不应复刻的元素（品牌 / 插画 / 内容）

❌ **不应复刻：**
- **品牌标识：** 不应使用 Framer Motion 的 logo、品牌名称
- **品牌色彩：** 不应直接复制其特定的品牌色值（#0055FF）
- **插画内容：** 不应复制其具体的插画作品和视觉元素
- **文案内容：** 不应复制其产品文案、营销内容
- **界面布局：** 不应完全复制其产品界面的具体布局
- **功能设计：** 不应复制其产品的功能特性和交互流程

### 合法复刻建议

1. **学习设计系统方法论：** 学习其如何构建完整的设计系统，包括色彩、排版、组件、交互、动画等
2. **参考设计原则：** 学习其流畅、自然、现代的设计理念
3. **应用设计模式：** 学习其组件化、模块化的设计方法
4. **借鉴技术实现：** 学习其使用 CSS Variables 实现 Design Token 的方法
5. **遵循设计规范：** 学习其如何制定和执行设计规范
6. **学习动画设计：** 学习其如何设计流畅、自然的动画效果

**重要提醒：**
- 本设计系统仅用于学习参考，不应直接用于商业产品
- 如需用于商业产品，请确保进行充分的差异化设计
- 尊重原创知识产权，避免侵权风险
- 建议在此基础上进行创新和改进，形成自己的设计风格

---

## 附录：快速参考

### 常用颜色
- 主色：#0055FF
- 辅助色：#8B5CF6
- 成功色：#10B981
- 警告色：#F59E0B
- 错误色：#EF4444

### 常用字号
- H1：36px
- H2：30px
- H3：24px
- Body：16px
- Caption：12px

### 常用间距
- 小间距：8px
- 中间距：16px
- 大间距：24px
- 超大间距：48px

### 常用圆角
- 小圆角：4px
- 中圆角：8px
- 大圆角：12px

### 常用动效
- 即时：100ms
- 快速：200ms
- 正常：300ms
- 慢速：500ms

---

*本设计系统基于 Framer Motion 官方设计规范整理，仅供学习参考使用。*