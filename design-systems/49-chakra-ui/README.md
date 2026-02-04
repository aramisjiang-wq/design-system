# Chakra UI

## 1. 设计风格总览

### Design DNA
- **Composable**: 基于组合的设计理念,通过组合简单组件构建复杂界面
- **Accessible**: 内置可访问性支持,遵循WCAG 2.1 AA级标准
- **Themeable**: 强大的主题系统,支持深度定制
- **Type-Safe**: TypeScript优先,提供完整的类型支持
- **Performance**: 优化的渲染性能,按需加载

### 适用产品类型
- **SaaS产品**: 企业级应用、协作工具、项目管理
- **数据密集型应用**: 仪表盘、数据可视化、分析平台
- **内容平台**: 博客、文档系统、知识库
- **电商系统**: 商品展示、购物流程、订单管理

### 设计特征
- 信息密度: 中等,适合复杂业务场景
- 视觉层次: 清晰,通过颜色、间距、字体建立层次
- 交互反馈: 明确,所有交互都有视觉反馈
- 动效节奏: 克制,使用200ms标准过渡时间

---

## 2. 颜色系统

### 主色调
```css
/* Primary Colors - 蓝色系 */
--chakra-colors-blue-50: #ebf8ff;
--chakra-colors-blue-100: #bee3f8;
--chakra-colors-blue-200: #90cdf4;
--chakra-colors-blue-300: #63b3ed;
--chakra-colors-blue-400: #4299e1;
--chakra-colors-blue-500: #3182ce;
--chakra-colors-blue-600: #2b6cb0;
--chakra-colors-blue-700: #2c5282;
--chakra-colors-blue-800: #2a4365;
--chakra-colors-blue-900: #1a365d;
```

**使用场景**:
- 主色: 主要操作按钮、导航激活状态、重要信息
- 浅色: 悬停状态、背景装饰
- 深色: 按下状态、深色主题

### 辅助色
```css
/* Secondary Colors */
--chakra-colors-green-50: #f0fff4;
--chakra-colors-green-100: #c6f6d5;
--chakra-colors-green-200: #9ae6b4;
--chakra-colors-green-300: #68d391;
--chakra-colors-green-400: #48bb78;
--chakra-colors-green-500: #38a169;
--chakra-colors-green-600: #2f855a;
--chakra-colors-green-700: #276749;
--chakra-colors-green-800: #22543d;
--chakra-colors-green-900: #1c4532;

--chakra-colors-yellow-50: #fffff0;
--chakra-colors-yellow-100: #fefcbf;
--chakra-colors-yellow-200: #faf089;
--chakra-colors-yellow-300: #f6e05e;
--chakra-colors-yellow-400: #ecc94b;
--chakra-colors-yellow-500: #d69e2e;
--chakra-colors-yellow-600: #b7791f;
--chakra-colors-yellow-700: #975a16;
--chakra-colors-yellow-800: #744210;
--chakra-colors-yellow-900: #5f370e;

--chakra-colors-red-50: #fff5f5;
--chakra-colors-red-100: #fed7d7;
--chakra-colors-red-200: #feb2b2;
--chakra-colors-red-300: #fc8181;
--chakra-colors-red-400: #f56565;
--chakra-colors-red-500: #e53e3e;
--chakra-colors-red-600: #c53030;
--chakra-colors-red-700: #9b2c2c;
--chakra-colors-red-800: #822727;
--chakra-colors-red-900: #63171b;

--chakra-colors-purple-50: #faf5ff;
--chakra-colors-purple-100: #e9d8fd;
--chakra-colors-purple-200: #d6bcfa;
--chakra-colors-purple-300: #b794f4;
--chakra-colors-purple-400: #9f7aea;
--chakra-colors-purple-500: #805ad5;
--chakra-colors-purple-600: #6b46c1;
--chakra-colors-purple-700: #553c9a;
--chakra-colors-purple-800: #44337a;
--chakra-colors-purple-900: #322659;

--chakra-colors-pink-50: #fff5f7;
--chakra-colors-pink-100: #fed7e2;
--chakra-colors-pink-200: #feb2b2;
--chakra-colors-pink-300: #fc8181;
--chakra-colors-pink-400: #f687b3;
--chakra-colors-pink-500: #d53f8c;
--chakra-colors-pink-600: #b83280;
--chakra-colors-pink-700: #97266d;
--chakra-colors-pink-800: #702459;
--chakra-colors-pink-900: #521b41;
```

**使用场景**:
- 绿色: 成功状态、完成状态、积极反馈
- 黄色: 警告状态、待处理状态、注意提示
- 红色: 错误状态、危险操作、删除确认
- 紫色: 特殊标签、高级功能、会员标识
- 粉色: 营销标签、限时活动、女性向内容

### 语义色
```css
/* Semantic Colors */
--chakra-colors-success: #48bb78;
--chakra-colors-warning: #ecc94b;
--chakra-colors-error: #f56565;
--chakra-colors-info: #4299e1;
```

**使用场景**:
- 成功: 操作成功、任务完成、验证通过
- 警告: 注意事项、待处理、需要确认
- 错误: 操作失败、验证失败、系统错误
- 信息: 提示信息、帮助说明、状态通知

### 中性色
```css
/* Neutral Colors - Gray Scale */
--chakra-colors-gray-50: #f7fafc;
--chakra-colors-gray-100: #edf2f7;
--chakra-colors-gray-200: #e2e8f0;
--chakra-colors-gray-300: #cbd5e0;
--chakra-colors-gray-400: #a0aec0;
--chakra-colors-gray-500: #718096;
--chakra-colors-gray-600: #4a5568;
--chakra-colors-gray-700: #2d3748;
--chakra-colors-gray-800: #1a202c;
--chakra-colors-gray-900: #171923;
```

**使用场景**:
- 背景: 页面背景、卡片背景、组件背景
- 文字: 标题、正文、辅助文字、禁用文字
- 边框: 组件边框、分割线、焦点状态

### Design Token 命名建议
```css
/* 命名规则: --chakra-colors-{色相}-{明度} */
--chakra-colors-blue-500: #3182ce;
--chakra-colors-green-500: #38a169;
--chakra-colors-red-500: #e53e3e;

/* 语义化命名 */
--chakra-colors-primary: #3182ce;
--chakra-colors-success: #48bb78;
--chakra-colors-warning: #ecc94b;
--chakra-colors-error: #f56565;
--chakra-colors-info: #4299e1;
```

---

## 3. 字体与排版

### 字体家族
```css
/* Primary Font Family */
--chakra-fonts-heading: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
--chakra-fonts-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
--chakra-fonts-mono: "SFMono-Regular", Consolas, "Liberation Mono", "Menlo", Courier, monospace;
```

### 字号层级
```css
/* Font Sizes */
--chakra-fontSizes-xs: 0.75rem;      /* 12px */
--chakra-fontSizes-sm: 0.875rem;     /* 14px */
--chakra-fontSizes-md: 1rem;         /* 16px */
--chakra-fontSizes-lg: 1.125rem;      /* 18px */
--chakra-fontSizes-xl: 1.25rem;       /* 20px */
--chakra-fontSizes-2xl: 1.5rem;      /* 24px */
--chakra-fontSizes-3xl: 1.875rem;    /* 30px */
--chakra-fontSizes-4xl: 2.25rem;     /* 36px */
--chakra-fontSizes-5xl: 3rem;        /* 48px */
--chakra-fontSizes-6xl: 3.75rem;     /* 60px */
--chakra-fontSizes-7xl: 4.5rem;      /* 72px */
--chakra-fontSizes-8xl: 6rem;        /* 96px */
--chakra-fontSizes-9xl: 8rem;        /* 128px */
```

### 字重
```css
/* Font Weights */
--chakra-fontWeights-hairline: 100;
--chakra-fontWeights-thin: 200;
--chakra-fontWeights-light: 300;
--chakra-fontWeights-normal: 400;
--chakra-fontWeights-medium: 500;
--chakra-fontWeights-semibold: 600;
--chakra-fontWeights-bold: 700;
--chakra-fontWeights-extrabold: 800;
--chakra-fontWeights-black: 900;
```

### 行高
```css
/* Line Heights */
--chakra-lineHeights-tighter: 1;
--chakra-lineHeights-tight: 1.25;
--chakra-lineHeights-normal: 1.5;
--chakra-lineHeights-relaxed: 1.625;
--chakra-lineHeights-loose: 2;
```

### 字间距
```css
/* Letter Spacing */
--chakra-letterSpacings-tighter: -0.05em;
--chakra-letterSpacings-tight: -0.025em;
--chakra-letterSpacings-normal: 0;
--chakra-letterSpacings-wide: 0.025em;
--chakra-letterSpacings-wider: 0.05em;
--chakra-letterSpacings-widest: 0.1em;
```

### 排版使用规则
1. **标题层级**: H1用于页面主标题,H2用于章节标题,H3-H6用于子标题
2. **正文规范**: 正文使用Normal字重(400),重要内容使用Medium字重(500)
3. **强调文字**: 使用SemiBold(600)或Bold(700)强调关键信息
4. **系统字体**: 优先使用系统字体栈,提高加载性能
5. **行高控制**: 标题使用1.25,正文使用1.5,小字使用1.625
6. **字间距调整**: 大号标题可适当收紧字间距(-0.025em),小号文字可适当加宽(0.025em)

---

## 4. 布局与栅格系统

### 页面版心
```css
/* Container Widths */
--chakra-sizes-container-sm: 640px;
--chakra-sizes-container-md: 768px;
--chakra-sizes-container-lg: 1024px;
--chakra-sizes-container-xl: 1280px;
```

### 栅格系统
```css
/* Grid Columns */
--chakra-space-1: 0.25rem;     /* 4px */
--chakra-space-2: 0.5rem;      /* 8px */
--chakra-space-3: 0.75rem;     /* 12px */
--chakra-space-4: 1rem;        /* 16px */
--chakra-space-5: 1.25rem;     /* 20px */
--chakra-space-6: 1.5rem;      /* 24px */
--chakra-space-8: 2rem;        /* 32px */
--chakra-space-10: 2.5rem;     /* 40px */
--chakra-space-12: 3rem;       /* 48px */
--chakra-space-16: 4rem;       /* 64px */
--chakra-space-20: 5rem;       /* 80px */
--chakra-space-24: 6rem;       /* 96px */
--chakra-space-32: 8rem;       /* 128px */
--chakra-space-40: 10rem;      /* 160px */
--chakra-space-48: 12rem;      /* 192px */
--chakra-space-56: 14rem;      /* 224px */
--chakra-space-64: 16rem;      /* 256px */
--chakra-space-72: 18rem;      /* 288px */
--chakra-space-80: 20rem;      /* 320px */
--chakra-space-96: 24rem;      /* 384px */
```

### 响应式断点
```css
/* Breakpoints */
--chakra-breakpoints-sm: 30em;   /* 480px */
--chakra-breakpoints-md: 48em;   /* 768px */
--chakra-breakpoints-lg: 62em;   /* 992px */
--chakra-breakpoints-xl: 80em;   /* 1280px */
```

### 留白密度
- **高密度**: 数据密集型页面,使用较小间距(4-8px)
- **中密度**: 常规页面,使用标准间距(8-16px)
- **低密度**: 营销页面,使用较大间距(16-32px)

### 布局模式
```css
/* Flexbox Layout */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-row { flex-direction: row; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }

/* Grid Layout */
.grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
```

---

## 5. 核心 UI 组件规范

### Button（按钮）

#### 组件变体
```css
/* Primary Button */
.chakra-button--variant-solid {
  background-color: var(--chakra-colors-blue-500);
  color: white;
}

.chakra-button--variant-solid:hover {
  background-color: var(--chakra-colors-blue-600);
}

.chakra-button--variant-solid:active {
  background-color: var(--chakra-colors-blue-700);
}

/* Outline Button */
.chakra-button--variant-outline {
  background-color: transparent;
  border: 1px solid var(--chakra-colors-blue-500);
  color: var(--chakra-colors-blue-500);
}

.chakra-button--variant-outline:hover {
  background-color: var(--chakra-colors-blue-50);
}

/* Ghost Button */
.chakra-button--variant-ghost {
  background-color: transparent;
  color: var(--chakra-colors-blue-500);
}

.chakra-button--variant-ghost:hover {
  background-color: var(--chakra-colors-blue-50);
}

/* Link Button */
.chakra-button--variant-link {
  background-color: transparent;
  color: var(--chakra-colors-blue-500);
  padding: 0;
}

.chakra-button--variant-link:hover {
  text-decoration: underline;
}
```

#### 组件尺寸
```css
/* Button Sizes */
.chakra-button--size-xs {
  height: 1.5rem;
  min-width: 1.5rem;
  padding: 0 0.5rem;
  font-size: var(--chakra-fontSizes-xs);
}

.chakra-button--size-sm {
  height: 2rem;
  min-width: 2rem;
  padding: 0 0.75rem;
  font-size: var(--chakra-fontSizes-sm);
}

.chakra-button--size-md {
  height: 2.5rem;
  min-width: 2.5rem;
  padding: 0 1rem;
  font-size: var(--chakra-fontSizes-md);
}

.chakra-button--size-lg {
  height: 3rem;
  min-width: 3rem;
  padding: 0 1.5rem;
  font-size: var(--chakra-fontSizes-lg);
}
```

#### 组件圆角
```css
/* Button Radius */
.chakra-button--rounded-none { border-radius: 0; }
.chakra-button--rounded-sm { border-radius: 0.125rem; }
.chakra-button--rounded-md { border-radius: 0.375rem; }
.chakra-button--rounded-lg { border-radius: 0.5rem; }
.chakra-button--rounded-full { border-radius: 9999px; }
```

---

### Input（输入框）

#### 基础输入框
```css
.chakra-input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: var(--chakra-fontSizes-md);
  line-height: var(--chakra-lineHeights-normal);
  color: var(--chakra-colors-gray-800);
  background-color: white;
  border: 1px solid var(--chakra-colors-gray-200);
  border-radius: var(--chakra-radii-md);
  transition: border-color 0.2s;
}

.chakra-input:hover {
  border-color: var(--chakra-colors-gray-300);
}

.chakra-input:focus {
  outline: none;
  border-color: var(--chakra-colors-blue-500);
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}

.chakra-input--error {
  border-color: var(--chakra-colors-red-500);
}

.chakra-input--disabled {
  background-color: var(--chakra-colors-gray-100);
  color: var(--chakra-colors-gray-400);
  cursor: not-allowed;
}
```

#### 输入框尺寸
```css
/* Input Sizes */
.chakra-input--size-xs {
  height: 1.5rem;
  padding: 0 0.5rem;
  font-size: var(--chakra-fontSizes-xs);
}

.chakra-input--size-sm {
  height: 2rem;
  padding: 0 0.625rem;
  font-size: var(--chakra-fontSizes-sm);
}

.chakra-input--size-md {
  height: 2.5rem;
  padding: 0 0.75rem;
  font-size: var(--chakra-fontSizes-md);
}

.chakra-input--size-lg {
  height: 3rem;
  padding: 0 1rem;
  font-size: var(--chakra-fontSizes-lg);
}
```

---

### Card（卡片）

#### 基础卡片
```css
.chakra-card {
  background-color: white;
  border: 1px solid var(--chakra-colors-gray-200);
  border-radius: var(--chakra-radii-md);
  padding: var(--chakra-space-6);
  box-shadow: var(--chakra-shadows-sm);
}

.chakra-card:hover {
  box-shadow: var(--chakra-shadows-md);
}

.chakra-card__header {
  padding-bottom: var(--chakra-space-4);
  border-bottom: 1px solid var(--chakra-colors-gray-200);
  margin-bottom: var(--chakra-space-4);
}

.chakra-card__body {
  padding: var(--chakra-space-4) 0;
}

.chakra-card__footer {
  padding-top: var(--chakra-space-4);
  border-top: 1px solid var(--chakra-colors-gray-200);
  margin-top: var(--chakra-space-4);
}
```

#### 卡片阴影
```css
/* Card Shadows */
--chakra-shadows-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);
--chakra-shadows-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--chakra-shadows-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--chakra-shadows-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--chakra-shadows-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--chakra-shadows-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--chakra-shadows-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--chakra-shadows-outline: 0 0 0 3px rgba(66, 153, 225, 0.6);
--chakra-shadows-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
```

---

### Badge（徽章）
```css
.chakra-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-size: var(--chakra-fontSizes-xs);
  font-weight: var(--chakra-fontWeights-medium);
  border-radius: var(--chakra-radii-md);
}

.chakra-badge--subtle {
  background-color: var(--chakra-colors-gray-100);
  color: var(--chakra-colors-gray-700);
}

.chakra-badge--solid {
  background-color: var(--chakra-colors-blue-500);
  color: white;
}

.chakra-badge--outline {
  background-color: transparent;
  border: 1px solid var(--chakra-colors-blue-500);
  color: var(--chakra-colors-blue-500);
}
```

---

### Avatar（头像）
```css
.chakra-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--chakra-colors-gray-200);
  overflow: hidden;
}

.chakra-avatar--size-xs {
  width: 1.5rem;
  height: 1.5rem;
}

.chakra-avatar--size-sm {
  width: 2rem;
  height: 2rem;
}

.chakra-avatar--size-md {
  width: 2.5rem;
  height: 2.5rem;
}

.chakra-avatar--size-lg {
  width: 3rem;
  height: 3rem;
}

.chakra-avatar--size-xl {
  width: 4rem;
  height: 4rem;
}

.chakra-avatar--size-2xl {
  width: 5rem;
  height: 5rem;
}

.chakra-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

### Modal（模态框）
```css
.chakra-modal__overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1400;
}

.chakra-modal__content {
  background-color: white;
  border-radius: var(--chakra-radii-lg);
  box-shadow: var(--chakra-shadows-xl);
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
}

.chakra-modal__content--size-xs { max-width: 320px; }
.chakra-modal__content--size-sm { max-width: 384px; }
.chakra-modal__content--size-md { max-width: 512px; }
.chakra-modal__content--size-lg { max-width: 768px; }
.chakra-modal__content--size-xl { max-width: 1024px; }
.chakra-modal__content--size-full { max-width: 100%; }

.chakra-modal__header {
  padding: var(--chakra-space-6);
  border-bottom: 1px solid var(--chakra-colors-gray-200);
}

.chakra-modal__body {
  padding: var(--chakra-space-6);
}

.chakra-modal__footer {
  padding: var(--chakra-space-6);
  border-top: 1px solid var(--chakra-colors-gray-200);
  display: flex;
  justify-content: flex-end;
  gap: var(--chakra-space-3);
}
```

---

### Menu（菜单）
```css
.chakra-menu {
  position: relative;
  display: inline-block;
}

.chakra-menu__list {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background-color: white;
  border: 1px solid var(--chakra-colors-gray-200);
  border-radius: var(--chakra-radii-md);
  box-shadow: var(--chakra-shadows-lg);
  padding: var(--chakra-space-1);
  z-index: 1400;
}

.chakra-menu__item {
  display: block;
  padding: var(--chakra-space-2) var(--chakra-space-3);
  color: var(--chakra-colors-gray-700);
  text-decoration: none;
  border-radius: var(--chakra-radii-sm);
  transition: all 0.2s;
}

.chakra-menu__item:hover {
  background-color: var(--chakra-colors-gray-100);
}

.chakra-menu__divider {
  height: 1px;
  background-color: var(--chakra-colors-gray-200);
  margin: var(--chakra-space-1) 0;
}
```

---

## 6. 图标与插画风格

### 图标风格
```css
/* Icon System */
.chakra-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

/* Icon Sizes */
.chakra-icon--size-xs { width: 0.75rem; height: 0.75rem; }
.chakra-icon--size-sm { width: 1rem; height: 1rem; }
.chakra-icon--size-md { width: 1.25rem; height: 1.25rem; }
.chakra-icon--size-lg { width: 1.5rem; height: 1.5rem; }
.chakra-icon--size-xl { width: 2rem; height: 2rem; }
```

**图标风格特征**:
- **类型**: Outline（线框）和Filled（填充）两种风格
- **线条**: 统一2px线宽,圆角端点
- **圆角**: 适度圆角,保持现代感
- **比例**: 24x24px基准网格,可缩放
- **对齐**: 视觉居中,保持平衡

**图标使用规则**:
1. **功能图标**: 使用Outline风格,保持简洁
2. **品牌图标**: 使用Filled风格,增强识别度
3. **状态图标**: 根据语义色调整颜色
4. **图标对齐**: 使用flexbox垂直居中对齐

### 插画风格
- **风格类型**: 扁平化插画,适度渐变
- **色彩使用**: 基于品牌色板,保持一致性
- **线条处理**: 无描边,纯色填充
- **细节程度**: 中等细节,避免过度装饰
- **使用场景**: 空状态、引导页、营销页面

**插画原则**:
1. **弱化装饰**: 插画仅辅助理解,不喧宾夺主
2. **一致性**: 保持统一的插画风格和色彩
3. **可复用**: 插画元素可组合使用
4. **性能优化**: 使用SVG格式,支持缩放

---

## 7. 交互与动效原则

### Hover（悬停）行为
```css
/* Standard Hover */
.chakra-hoverable {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Color Hover */
.chakra-hoverable:hover {
  opacity: 0.8;
}

/* Background Hover */
.chakra-hoverable--bg:hover {
  background-color: var(--chakra-colors-gray-100);
}

/* Scale Hover */
.chakra-hoverable--scale:hover {
  transform: scale(1.05);
}
```

### Active（激活）行为
```css
/* Active State */
.chakra-activeable {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Scale Active */
.chakra-activeable:active {
  transform: scale(0.98);
}
```

### Focus（焦点）行为
```css
/* Focus State */
.chakra-focusable {
  outline: none;
  transition: box-shadow 0.2s;
}

.chakra-focusable:focus {
  box-shadow: var(--chakra-shadows-outline);
}

/* Focus Ring */
.chakra-focusable--ring:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
}
```

### 动效节奏
```css
/* Timing Functions */
--chakra-transition-easing-ease: ease;
--chakra-transition-easing-ease-in: cubic-bezier(0.4, 0, 1, 1);
--chakra-transition-easing-ease-out: cubic-bezier(0, 0, 0.2, 1);
--chakra-transition-easing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

/* Duration */
--chakra-transition-duration-ultra-fast: 50ms;
--chakra-transition-duration-faster: 100ms;
--chakra-transition-duration-fast: 150ms;
--chakra-transition-duration-normal: 200ms;
--chakra-transition-duration-slow: 300ms;
--chakra-transition-duration-slower: 400ms;
--chakra-transition-duration-ultra-slow: 500ms;
```

**动效原则**:
1. **克制**: 动效服务于功能,不装饰
2. **快速**: 标准过渡200ms,快速操作150ms
3. **流畅**: 使用cubic-bezier缓动函数
4. **一致**: 相同类型交互使用相同动效

### 加载动画
```css
/* Spinner */
.chakra-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--chakra-colors-gray-200);
  border-top-color: var(--chakra-colors-blue-500);
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Skeleton Loading */
.chakra-skeleton {
  background: linear-gradient(
    90deg,
    var(--chakra-colors-gray-100) 0%,
    var(--chakra-colors-gray-200) 50%,
    var(--chakra-colors-gray-100) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## 8. 可复用 Design Token

### Color Tokens
```css
:root {
  /* Primary Colors */
  --chakra-colors-blue-50: #ebf8ff;
  --chakra-colors-blue-100: #bee3f8;
  --chakra-colors-blue-200: #90cdf4;
  --chakra-colors-blue-300: #63b3ed;
  --chakra-colors-blue-400: #4299e1;
  --chakra-colors-blue-500: #3182ce;
  --chakra-colors-blue-600: #2b6cb0;
  --chakra-colors-blue-700: #2c5282;
  --chakra-colors-blue-800: #2a4365;
  --chakra-colors-blue-900: #1a365d;

  /* Semantic Colors */
  --chakra-colors-success: #48bb78;
  --chakra-colors-warning: #ecc94b;
  --chakra-colors-error: #f56565;
  --chakra-colors-info: #4299e1;

  /* Neutral Colors */
  --chakra-colors-gray-50: #f7fafc;
  --chakra-colors-gray-100: #edf2f7;
  --chakra-colors-gray-200: #e2e8f0;
  --chakra-colors-gray-300: #cbd5e0;
  --chakra-colors-gray-400: #a0aec0;
  --chakra-colors-gray-500: #718096;
  --chakra-colors-gray-600: #4a5568;
  --chakra-colors-gray-700: #2d3748;
  --chakra-colors-gray-800: #1a202c;
  --chakra-colors-gray-900: #171923;
}
```

### Spacing Tokens
```css
:root {
  --chakra-space-0: 0;
  --chakra-space-1: 0.25rem;     /* 4px */
  --chakra-space-2: 0.5rem;      /* 8px */
  --chakra-space-3: 0.75rem;     /* 12px */
  --chakra-space-4: 1rem;        /* 16px */
  --chakra-space-5: 1.25rem;     /* 20px */
  --chakra-space-6: 1.5rem;      /* 24px */
  --chakra-space-8: 2rem;        /* 32px */
  --chakra-space-10: 2.5rem;     /* 40px */
  --chakra-space-12: 3rem;       /* 48px */
  --chakra-space-16: 4rem;       /* 64px */
  --chakra-space-20: 5rem;       /* 80px */
  --chakra-space-24: 6rem;       /* 96px */
  --chakra-space-32: 8rem;       /* 128px */
  --chakra-space-40: 10rem;      /* 160px */
  --chakra-space-48: 12rem;      /* 192px */
  --chakra-space-56: 14rem;      /* 224px */
  --chakra-space-64: 16rem;      /* 256px */
}
```

### Radius Tokens
```css
:root {
  --chakra-radii-none: 0;
  --chakra-radii-sm: 0.125rem;    /* 2px */
  --chakra-radii-base: 0.25rem;  /* 4px */
  --chakra-radii-md: 0.375rem;   /* 6px */
  --chakra-radii-lg: 0.5rem;    /* 8px */
  --chakra-radii-xl: 0.75rem;    /* 12px */
  --chakra-radii-2xl: 1rem;      /* 16px */
  --chakra-radii-3xl: 1.5rem;    /* 24px */
  --chakra-radii-full: 9999px;   /* 全圆角 */
}
```

### Shadow Tokens
```css
:root {
  --chakra-shadows-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --chakra-shadows-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --chakra-shadows-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --chakra-shadows-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --chakra-shadows-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --chakra-shadows-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --chakra-shadows-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --chakra-shadows-outline: 0 0 0 3px rgba(66, 153, 225, 0.6);
  --chakra-shadows-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}
```

### Typography Tokens
```css
:root {
  /* Font Families */
  --chakra-fonts-heading: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  --chakra-fonts-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  --chakra-fonts-mono: "SFMono-Regular", Consolas, "Liberation Mono", "Menlo", Courier, monospace;

  /* Font Sizes */
  --chakra-fontSizes-xs: 0.75rem;      /* 12px */
  --chakra-fontSizes-sm: 0.875rem;     /* 14px */
  --chakra-fontSizes-md: 1rem;         /* 16px */
  --chakra-fontSizes-lg: 1.125rem;     /* 18px */
  --chakra-fontSizes-xl: 1.25rem;      /* 20px */
  --chakra-fontSizes-2xl: 1.5rem;      /* 24px */
  --chakra-fontSizes-3xl: 1.875rem;    /* 30px */
  --chakra-fontSizes-4xl: 2.25rem;     /* 36px */
  --chakra-fontSizes-5xl: 3rem;        /* 48px */
  --chakra-fontSizes-6xl: 3.75rem;    /* 60px */

  /* Font Weights */
  --chakra-fontWeights-light: 300;
  --chakra-fontWeights-normal: 400;
  --chakra-fontWeights-medium: 500;
  --chakra-fontWeights-semibold: 600;
  --chakra-fontWeights-bold: 700;

  /* Line Heights */
  --chakra-lineHeights-tight: 1.25;
  --chakra-lineHeights-normal: 1.5;
  --chakra-lineHeights-relaxed: 1.625;

  /* Letter Spacing */
  --chakra-letterSpacings-tighter: -0.05em;
  --chakra-letterSpacings-tight: -0.025em;
  --chakra-letterSpacings-normal: 0;
  --chakra-letterSpacings-wide: 0.025em;
  --chakra-letterSpacings-wider: 0.05em;
}
```

### Transition Tokens
```css
:root {
  /* Duration */
  --chakra-transition-duration-ultra-fast: 50ms;
  --chakra-transition-duration-faster: 100ms;
  --chakra-transition-duration-fast: 150ms;
  --chakra-transition-duration-normal: 200ms;
  --chakra-transition-duration-slow: 300ms;
  --chakra-transition-duration-slower: 400ms;
  --chakra-transition-duration-ultra-slow: 500ms;

  /* Timing Functions */
  --chakra-transition-easing-ease: ease;
  --chakra-transition-easing-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --chakra-transition-easing-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --chakra-transition-easing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Z-Index Tokens
```css
:root {
  --chakra-zIndices-hide: -1;
  --chakra-zIndices-base: 0;
  --chakra-zIndices-docked: 10;
  --chakra-zIndices-dropdown: 1000;
  --chakra-zIndices-sticky: 1100;
  --chakra-zIndices-banner: 1200;
  --chakra-zIndices-overlay: 1300;
  --chakra-zIndices-modal: 1400;
  --chakra-zIndices-popover: 1500;
  --chakra-zIndices-skipLink: 1600;
  --chakra-zIndices-toast: 1700;
  --chakra-zIndices-tooltip: 1800;
}
```

### Breakpoint Tokens
```css
:root {
  --chakra-breakpoints-sm: 30em;   /* 480px */
  --chakra-breakpoints-md: 48em;   /* 768px */
  --chakra-breakpoints-lg: 62em;   /* 992px */
  --chakra-breakpoints-xl: 80em;   /* 1280px */
}
```

---

## 9. 合法复刻建议

### 可以学习的元素

#### 设计规则
✅ **可以学习**:
- Composable设计理念: 通过组合简单组件构建复杂界面
- 主题系统: 强大的主题系统,支持深度定制
- 可访问性优先: 内置可访问性支持
- TypeScript优先: 完整的类型支持
- 响应式设计: 移动优先,适配多端设备

#### 颜色系统
✅ **可以学习**:
- 50-900色阶系统: 完整的颜色明度层级
- 语义化颜色命名: success/warning/error/info
- 中性色灰阶: 50-900的完整灰阶
- 对比度控制: 确保文字与背景对比度≥4.5:1

#### 字体系统
✅ **可以学习**:
- 系统字体栈: 优先使用系统字体
- 模块化字号: xs/sm/md/lg/xl/2xl等
- 标准化行高: tight/normal/relaxed
- 响应式排版: 根据屏幕尺寸调整字号

#### 组件规范
✅ **可以学习**:
- 组件变体设计: solid/outline/ghost/link
- 组件尺寸规范: xs/sm/md/lg
- 统一圆角规范: none/sm/base/md/lg/xl/2xl/3xl/full
- 状态管理: hover/active/focus/disabled
- 过渡动画: 200ms标准过渡时间

#### 交互设计
✅ **可以学习**:
- 克制的动效: 动效服务于功能
- 明确的反馈: 所有交互都有视觉反馈
- 焦点管理: 明显的焦点环
- 加载状态: 统一的加载动画

### 不应复刻的元素

#### 品牌元素
❌ **不应复刻**:
- Chakra UI品牌色: #3182ce蓝色
- Chakra UI品牌标识: Logo、图标
- Chakra UI品牌名称: "Chakra UI"
- Chakra UI品牌字体: 特殊字体样式

#### 插画内容
❌ **不应复刻**:
- Chakra UI官方插画: 具体的插画内容
- 插画风格细节: 过度装饰的细节
- 插画色彩方案: 特定的配色组合
- 插画元素: 具体的图形元素

#### 文案内容
❌ **不应复刻**:
- Chakra UI官方文案: 官方网站文案
- 示例文本: 具体的示例内容
- 营销文案: 品牌营销文字
- 技术文档: 官方文档内容

#### 代码实现
❌ **不应复刻**:
- Chakra UI框架: 完整的框架代码
- Chakra UI组件: 官方组件代码
- Chakra UI配置: 完整的配置文件
- Chakra UI工具函数: 内部工具函数

### 合法复刻建议

#### 设计理念
1. **学习Composable思想**: 理解组合式设计理念,但使用自己的实现
2. **建立自己的设计系统**: 基于业务需求建立设计系统
3. **保持一致性**: 在自己的产品中保持设计一致性
4. **优化用户体验**: 以用户为中心优化设计

#### 技术实现
1. **使用CSS Variables**: 使用CSS变量管理设计Token
2. **组件化开发**: 建立可复用的组件库
3. **响应式设计**: 移动优先,适配多端设备
4. **性能优化**: 优化加载性能和渲染性能

#### 法律合规
1. **避免侵权**: 不复制品牌元素和受版权保护的内容
2. **开源许可**: 遵守开源协议(MIT License)
3. **商业使用**: 确认商业使用许可
4. **Attribution**: 如使用开源代码,提供适当的署名

#### 最佳实践
1. **建立自己的设计语言**: 基于业务需求建立独特的设计语言
2. **持续迭代**: 根据用户反馈持续优化设计
3. **团队协作**: 建立设计规范,促进团队协作
4. **文档完善**: 完善设计文档,便于维护和扩展

---

## 附录

### 快速参考

#### 颜色速查
```css
/* Primary */
--chakra-colors-blue-500: #3182ce;

/* Semantic */
--chakra-colors-success: #48bb78;
--chakra-colors-warning: #ecc94b;
--chakra-colors-error: #f56565;
--chakra-colors-info: #4299e1;

/* Neutral */
--chakra-colors-gray-500: #718096;
--chakra-colors-gray-800: #1a202c;
```

#### 间距速查
```css
--chakra-space-1: 4px;
--chakra-space-2: 8px;
--chakra-space-4: 16px;
--chakra-space-6: 24px;
--chakra-space-8: 32px;
```

#### 字号速查
```css
--chakra-fontSizes-xs: 12px;
--chakra-fontSizes-sm: 14px;
--chakra-fontSizes-md: 16px;
--chakra-fontSizes-lg: 18px;
--chakra-fontSizes-xl: 20px;
--chakra-fontSizes-2xl: 24px;
```

#### 圆角速查
```css
--chakra-radii-sm: 2px;
--chakra-radii-md: 6px;
--chakra-radii-lg: 8px;
--chakra-radii-full: 9999px;
```

### 常用组件类名

#### 按钮
```html
<button class="chakra-button chakra-button--variant-solid chakra-button--size-md">Primary Button</button>
<button class="chakra-button chakra-button--variant-outline chakra-button--size-md">Outline Button</button>
<button class="chakra-button chakra-button--variant-ghost chakra-button--size-md">Ghost Button</button>
```

#### 输入框
```html
<input class="chakra-input chakra-input--size-md" placeholder="Enter text">
<input class="chakra-input chakra-input--size-md chakra-input--error" placeholder="Error state">
```

#### 卡片
```html
<div class="chakra-card">
  <div class="chakra-card__header">
    <h3>Card Title</h3>
  </div>
  <div class="chakra-card__body">
    <p>Card content goes here.</p>
  </div>
</div>
```

#### 徽章
```html
<span class="chakra-badge chakra-badge--subtle">Default</span>
<span class="chakra-badge chakra-badge--solid">Solid</span>
<span class="chakra-badge chakra-badge--outline">Outline</span>
```

---

## 版本信息

- **版本**: 1.0.0
- **更新日期**: 2026-02-02
- **维护者**: Design System Team
