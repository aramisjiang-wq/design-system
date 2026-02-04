# InVision Design System

## 1. 设计风格总览（Design DNA）

**核心关键词**：协作、原型、用户中心、专业、创新

**适合产品类型**：
- 原型设计工具
- 设计协作平台
- 用户测试工具
- 设计系统管理
- 产品设计应用

**设计哲学**：
InVision的设计系统强调"设计即协作"的理念，通过直观的原型工具、强大的协作功能和无缝的用户测试，让设计团队能够快速创建和验证产品原型。整体风格专业但不失亲和力，注重设计的精确性和协作的流畅性，强调从设计到开发的无缝衔接。

---

## 2. 颜色系统（Color System）

### 品牌主色（Primary Colors）

```css
:root {
  /* InVision 品牌色 - 蓝色 */
  --color-primary: #007AFF;
  --color-primary-hover: #0062CC;
  --color-primary-active: #004B99;
  --color-primary-light: #3391FF;
  --color-primary-lighter: #66A8FF;
  --color-primary-dark: #0062CC;
  --color-primary-darker: #004B99;
}
```

**使用场景**：
- 主要按钮和CTA元素
- 重要操作和功能入口
- 品牌标识和关键视觉元素
- 用户选择的激活状态

### 辅助色（Secondary Colors）

```css
:root {
  /* 紫色系 - 创意与灵感 */
  --color-purple: #7B61FF;
  --color-purple-light: #9D8AFF;
  --color-purple-lighter: #BFB3FF;
  --color-purple-dark: #5E4ACC;

  /* 青色系 - 科技与未来 */
  --color-cyan: #00D4FF;
  --color-cyan-light: #33DDFF;
  --color-cyan-lighter: #66E6FF;
  --color-cyan-dark: #00A8CC;

  /* 绿色系 - 成功与完成 */
  --color-green: #00D68F;
  --color-green-light: #33E0A8;
  --color-green-lighter: #66EAC2;
  --color-green-dark: #00A872;

  /* 橙色系 - 警告与注意 */
  --color-orange: #FF9500;
  --color-orange-light: #FFAD33;
  --color-orange-lighter: #FFC566;
  --color-orange-dark: #E08500;
}
```

**使用场景**：
- 功能分类和模块区分
- 状态指示和反馈
- 用户个性化设置
- 协作和分享功能

### 中性色（Neutral Colors）

```css
:root {
  /* 灰色系 - 基础和背景 */
  --color-gray-50: #FAFAFA;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #EEEEEE;
  --color-gray-300: #E0E0E0;
  --color-gray-400: #BDBDBD;
  --color-gray-500: #9E9E9E;
  --color-gray-600: #757575;
  --color-gray-700: #616161;
  --color-gray-800: #424242;
  --color-gray-900: #212121;
}
```

**使用场景**：
- 页面背景和容器
- 文本内容
- 边框和分隔线
- 禁用状态

### 语义色（Semantic Colors）

```css
:root {
  /* 成功色 */
  --color-success: #00D68F;
  --color-success-light: #33E0A8;
  --color-success-lighter: #66EAC2;
  --color-success-dark: #00A872;

  /* 警告色 */
  --color-warning: #FF9500;
  --color-warning-light: #FFAD33;
  --color-warning-lighter: #FFC566;
  --color-warning-dark: #E08500;

  /* 错误色 */
  --color-error: #FF3B30;
  --color-error-light: #FF6B63;
  --color-error-lighter: #FF9B96;
  --color-error-dark: #E03026;

  /* 信息色 */
  --color-info: #007AFF;
  --color-info-light: #3391FF;
  --color-info-lighter: #66A8FF;
  --color-info-dark: #0062CC;
}
```

**使用场景**：
- 状态提示和反馈
- 表单验证
- 通知和提醒
- 操作结果指示

### Design Token 命名建议

```css
/* 颜色 Token 命名规范 */
--color-{category}-{shade}-{state}

/* 示例 */
--color-primary-base: #007AFF;
--color-primary-hover: #0062CC;
--color-primary-active: #004B99;
--color-purple-base: #7B61FF;
--color-gray-100: #F5F5F5;
--color-success-base: #00D68F;
```

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）

```css
:root {
  /* 主字体 - Inter（系统字体替代） */
  --font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;

  /* 代码字体 */
  --font-family-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;

  /* 标题字体 - 用于大标题 */
  --font-family-display: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
```

### 字号层级（Font Size Scale）

```css
:root {
  /* 标题层级 */
  --font-size-h1: 48px;
  --font-size-h2: 36px;
  --font-size-h3: 28px;
  --font-size-h4: 22px;
  --font-size-h5: 18px;
  --font-size-h6: 16px;

  /* 正文层级 */
  --font-size-body-large: 18px;
  --font-size-body-base: 16px;
  --font-size-body-small: 14px;

  /* 辅助文本 */
  --font-size-caption: 12px;
  --font-size-overline: 10px;
}
```

### 行高（Line Height）

```css
:root {
  /* 标题行高 - 较紧凑 */
  --line-height-h1: 1.2;
  --line-height-h2: 1.25;
  --line-height-h3: 1.3;
  --line-height-h4: 1.35;
  --line-height-h5: 1.4;
  --line-height-h6: 1.5;

  /* 正文行高 - 适中 */
  --line-height-body: 1.6;
  --line-height-caption: 1.4;
}
```

### 字重（Font Weight）

```css
:root {
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### 排版规则（Typography Rules）

**标题使用规范**：
- H1：页面主标题，用于重要页面和着陆页
- H2：章节标题，用于内容区块划分
- H3：子章节标题，用于详细内容组织
- H4-H6：小标题和标签，用于卡片和组件内部

**正文使用规范**：
- Body Large：重要说明和引导文本
- Body Base：标准正文内容
- Body Small：次要信息和说明文字

**间距规则**：
- 标题与正文间距：16-24px
- 段落间距：16-20px
- 列表项间距：8-12px

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心（Container Width）

```css
:root {
  /* 最大版心宽度 */
  --container-max-width: 1440px;

  /* 标准版心宽度 */
  --container-width: 1200px;

  /* 窄版心宽度 */
  --container-narrow: 960px;

  /* 移动端版心宽度 */
  --container-mobile: 100%;
  --container-mobile-padding: 16px;
}
```

### 栅格系统（Grid System）

```css
:root {
  /* 栅格列数 */
  --grid-columns: 12;

  /* 栅格间距（Gutter） */
  --grid-gutter: 24px;
  --grid-gutter-large: 32px;
  --grid-gutter-small: 16px;

  /* 页面边距（Margin） */
  --page-margin: 32px;
  --page-margin-large: 48px;
  --page-margin-small: 24px;
}
```

**栅格断点（Breakpoints）**：

```css
:root {
  /* 移动端 */
  --breakpoint-mobile: 0px;

  /* 平板竖屏 */
  --breakpoint-tablet: 768px;

  /* 平板横屏 */
  --breakpoint-tablet-lg: 1024px;

  /* 桌面端 */
  --breakpoint-desktop: 1280px;

  /* 大屏 */
  --breakpoint-desktop-lg: 1440px;
}
```

### 留白密度（Spacing Density）

**宽松间距（Relaxed Spacing）**：
- 适用于：首页、着陆页、展示页面
- 特点：大量留白，强调视觉呼吸感
- 间距范围：32-64px

**标准间距（Standard Spacing）**：
- 适用于：功能页面、工具页面
- 特点：平衡留白与信息密度
- 间距范围：16-32px

**紧凑间距（Compact Spacing）**：
- 适用于：编辑器界面、属性面板
- 特点：高信息密度，最小化留白
- 间距范围：8-16px

### 信息密度判断

**低密度页面**：
- 首页和营销页面
- 模板浏览页面
- 教程和帮助页面

**中密度页面**：
- 项目管理页面
- 用户设置页面
- 协作页面

**高密度页面**：
- 原型编辑器
- 图层面板
- 属性编辑面板
- 用户测试面板

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

**尺寸规范**：

```css
:root {
  /* 按钮尺寸 */
  --button-height-small: 32px;
  --button-height-medium: 40px;
  --button-height-large: 48px;

  /* 按钮内边距 */
  --button-padding-horizontal: 24px;
  --button-padding-horizontal-small: 16px;
  --button-padding-horizontal-large: 32px;
}
```

**按钮类型**：

1. **Primary Button（主要按钮）**
   - 背景：主色（#007AFF）
   - 文字：白色
   - 圆角：8px
   - 使用场景：主要操作、CTA

2. **Secondary Button（次要按钮）**
   - 背景：白色或灰色
   - 文字：主色或深灰色
   - 边框：1px solid 主色或灰色
   - 圆角：8px
   - 使用场景：次要操作、取消

3. **Ghost Button（幽灵按钮）**
   - 背景：透明
   - 文字：主色
   - 无边框
   - 圆角：8px
   - 使用场景：辅助操作、链接

4. **Icon Button（图标按钮）**
   - 背景：透明或浅灰色
   - 图标：主色或深灰色
   - 尺寸：32-48px
   - 圆角：8px
   - 使用场景：工具栏、操作栏

**按钮状态**：

```css
/* Hover 状态 */
.button:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-1px);
}

/* Active 状态 */
.button:active {
  background-color: var(--color-primary-active);
  transform: translateY(0);
}

/* Focus 状态 */
.button:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Disabled 状态 */
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Card（卡片）

**使用场景**：
- 项目展示
- 组件预览
- 功能介绍
- 内容区块

**卡片样式**：

```css
:root {
  /* 卡片圆角 */
  --card-radius: 12px;
  --card-radius-large: 16px;

  /* 卡片阴影 */
  --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  --card-shadow-hover: 0 4px 16px rgba(0, 0, 0, 0.12);
  --card-shadow-elevated: 0 8px 24px rgba(0, 0, 0, 0.16);

  /* 卡片内边距 */
  --card-padding: 24px;
  --card-padding-large: 32px;
  --card-padding-small: 16px;
}
```

**卡片类型**：

1. **Basic Card（基础卡片）**
   - 背景：白色
   - 阴影：轻微阴影
   - 边框：无
   - 使用场景：内容展示

2. **Elevated Card（提升卡片）**
   - 背景：白色
   - 阴影：明显阴影
   - 边框：无
   - 使用场景：重要内容、交互元素

3. **Outlined Card（轮廓卡片）**
   - 背景：白色
   - 阴影：无
   - 边框：1px solid 灰色
   - 使用场景：分组内容

### Input / Upload / Form 类组件

**Input（输入框）**：

```css
:root {
  /* 输入框尺寸 */
  --input-height-small: 32px;
  --input-height-medium: 40px;
  --input-height-large: 48px;

  /* 输入框圆角 */
  --input-radius: 8px;

  /* 输入框内边距 */
  --input-padding-horizontal: 16px;

  /* 输入框边框 */
  --input-border: 1px solid var(--color-gray-300);
  --input-border-focus: 2px solid var(--color-primary);
}
```

**输入框状态**：
- Default：灰色边框
- Focus：主色边框，外发光效果
- Error：红色边框，错误提示
- Disabled：灰色背景，禁用状态

**Upload（上传组件）**：
- 拖拽上传区域
- 进度指示器
- 文件预览
- 多文件上传支持

**Form（表单）**：
- 表单标签：顶部对齐或左侧对齐
- 表单间距：16-24px
- 表单验证：实时验证或提交验证
- 表单反馈：成功/错误提示

### Navigation（导航）

**主导航（Main Navigation）**：
- 位置：顶部或左侧
- 样式：水平菜单或垂直菜单
- 交互：Hover 下拉或点击展开
- 状态：激活状态高亮显示

**面包屑导航（Breadcrumb）**：
- 分隔符：">" 或 "/"
- 样式：灰色文本，链接可点击
- 位置：页面顶部

**标签页导航（Tabs）**：
- 样式：下划线或背景色切换
- 动画：平滑过渡效果
- 状态：激活标签高亮

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格（Icon Style）

**图标类型**：
1. **Filled Icons（填充图标）**
   - 风格：实心填充
   - 使用场景：主要操作、重要功能
   - 特点：视觉重量强，易于识别

2. **Outlined Icons（轮廓图标）**
   - 风格：线条轮廓
   - 使用场景：次要操作、辅助功能
   - 特点：视觉重量轻，简洁优雅

3. **Duotone Icons（双色图标）**
   - 风格：双色渐变
   - 使用场景：品牌元素、装饰图标
   - 特点：现代感强，视觉丰富

**图标规范**：
- 图标尺寸：16px、24px、32px、48px
- 图标圆角：2px
- 图标线条：2px
- 图标颜色：主色或深灰色

### 插画风格（Illustration Style）

**插画特点**：
- 风格：扁平化、简洁、专业
- 色彩：使用品牌色，简洁明快
- 形状：几何形状，简洁有力
- 细节：适度，不过于复杂

**插画使用场景**：
- 空状态（Empty State）
- 引导页面（Onboarding）
- 错误页面（Error Page）
- 营销页面（Landing Page）

**插画原则**：
- 辅助理解：帮助用户理解概念和功能
- 情感连接：传递专业、友好的情感
- 品牌一致：保持与品牌风格一致
- 性能优化：文件大小适中，加载快速

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover（悬停）行为

**按钮 Hover**：
- 背景色变化：主色加深
- 轻微上移：1-2px
- 阴影增强：更明显的阴影
- 过渡时间：200ms

**卡片 Hover**：
- 阴影增强：更明显的阴影
- 轻微上移：2-4px
- 边框高亮：主色边框
- 过渡时间：300ms

**链接 Hover**：
- 颜色变化：主色
- 下划线出现：主色下划线
- 过渡时间：150ms

### Active（点击）行为

**按钮 Active**：
- 背景色变化：主色进一步加深
- 轻微下移：1px
- 过渡时间：100ms

**卡片 Active**：
- 阴影减弱：轻微阴影
- 轻微下移：1-2px
- 过渡时间：100ms

### Focus（聚焦）行为

**可聚焦元素**：
- 外轮廓：2px 主色轮廓
- 轮廓偏移：2px
- 过渡时间：150ms
- 可访问性：键盘导航友好

### 动效节奏（Motion Timing）

**缓动函数（Easing Functions）**：

```css
:root {
  /* 标准缓动 */
  --easing-standard: cubic-bezier(0.4, 0.0, 0.2, 1);

  /* 进入缓动 */
  --easing-enter: cubic-bezier(0.0, 0.0, 0.2, 1);

  /* 退出缓动 */
  --easing-exit: cubic-bezier(0.4, 0.0, 1, 1);

  /* 弹性缓动 */
  --easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

**动效时长（Duration）**：

```css
:root {
  /* 快速动效 */
  --duration-fast: 150ms;

  /* 标准动效 */
  --duration-standard: 300ms;

  /* 慢速动效 */
  --duration-slow: 500ms;

  /* 页面过渡 */
  --duration-page: 600ms;
}
```

### 操作反馈设计原则

**即时反馈**：
- 按钮点击：立即视觉反馈
- 表单提交：加载状态显示
- 操作完成：成功提示

**渐进反馈**：
- 长时间操作：进度条显示
- 异步操作：加载动画
- 批量操作：进度指示

**错误反馈**：
- 表单验证：实时错误提示
- 操作失败：错误消息
- 系统错误：友好错误页面

**成功反馈**：
- 操作成功：成功提示
- 完成任务：庆祝动画
- 达成目标：成就提示

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens（颜色 Token）

```css
:root {
  /* 品牌色 */
  --color-primary: #007AFF;
  --color-primary-hover: #0062CC;
  --color-primary-active: #004B99;
  --color-primary-light: #3391FF;
  --color-primary-lighter: #66A8FF;
  --color-primary-dark: #0062CC;
  --color-primary-darker: #004B99;

  /* 辅助色 */
  --color-purple: #7B61FF;
  --color-cyan: #00D4FF;
  --color-green: #00D68F;
  --color-orange: #FF9500;

  /* 中性色 */
  --color-gray-50: #FAFAFA;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #EEEEEE;
  --color-gray-300: #E0E0E0;
  --color-gray-400: #BDBDBD;
  --color-gray-500: #9E9E9E;
  --color-gray-600: #757575;
  --color-gray-700: #616161;
  --color-gray-800: #424242;
  --color-gray-900: #212121;

  /* 语义色 */
  --color-success: #00D68F;
  --color-warning: #FF9500;
  --color-error: #FF3B30;
  --color-info: #007AFF;
}
```

### Spacing Tokens（间距 Token）

```css
:root {
  /* 基础间距单位 */
  --spacing-0: 0;
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-7: 28px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  --spacing-24: 96px;
}
```

### Radius Tokens（圆角 Token）

```css
:root {
  /* 圆角尺寸 */
  --radius-none: 0;
  --radius-small: 4px;
  --radius-medium: 8px;
  --radius-large: 12px;
  --radius-xlarge: 16px;
  --radius-xxlarge: 24px;
  --radius-full: 9999px;
}
```

### Shadow Tokens（阴影 Token）

```css
:root {
  /* 阴影层级 */
  --shadow-none: none;
  --shadow-small: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-medium: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-large: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-xlarge: 0 8px 24px rgba(0, 0, 0, 0.16);
  --shadow-xxlarge: 0 16px 48px rgba(0, 0, 0, 0.24);
}
```

### Typography Tokens（排版 Token）

```css
:root {
  /* 字体家族 */
  --font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  --font-family-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;

  /* 字号 */
  --font-size-h1: 48px;
  --font-size-h2: 36px;
  --font-size-h3: 28px;
  --font-size-h4: 22px;
  --font-size-h5: 18px;
  --font-size-h6: 16px;
  --font-size-body-large: 18px;
  --font-size-body-base: 16px;
  --font-size-body-small: 14px;
  --font-size-caption: 12px;

  /* 字重 */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* 行高 */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}
```

### Motion Tokens（动效 Token）

```css
:root {
  /* 缓动函数 */
  --easing-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
  --easing-enter: cubic-bezier(0.0, 0.0, 0.2, 1);
  --easing-exit: cubic-bezier(0.4, 0.0, 1, 1);
  --easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

  /* 动效时长 */
  --duration-fast: 150ms;
  --duration-standard: 300ms;
  --duration-slow: 500ms;
  --duration-page: 600ms;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）

**可以学习的设计规则**：
1. **色彩系统**：学习InVision如何使用专业色彩创造专业感，同时保持视觉和谐
2. **字体层级**：学习清晰的字体层级系统，确保信息层次分明
3. **组件规范**：学习组件的一致性设计，包括尺寸、间距、圆角等
4. **交互反馈**：学习即时、清晰的交互反馈机制
5. **动效原则**：学习克制但有意义的动效使用

**可以学习的风格特征**：
1. **专业感**：学习如何通过简洁的设计创造专业感
2. **协作性**：学习如何通过设计支持团队协作
3. **用户中心**：学习如何通过设计提升用户体验
4. **一致性**：学习如何在整个产品中保持设计一致性

### 不应复刻的元素（品牌 / 插画 / 内容）

**不应复刻的品牌元素**：
1. **品牌标识**：InVision的logo、品牌名称、品牌标语
2. **品牌色彩**：特定的品牌色值和色彩组合
3. **品牌字体**：InVision专有的字体和字体使用方式
4. **品牌图案**：InVision特有的图案和纹理

**不应复刻的插画内容**：
1. **具体插画**：InVision的原创插画作品
2. **插画风格细节**：过于相似的插画风格和表现手法
3. **插画内容**：特定的插画主题和内容

**不应复刻的内容**：
1. **模板内容**：InVision的设计模板内容
2. **素材库**：InVision的图片、图标、插画素材
3. **文案内容**：InVision的文案和营销内容
4. **功能描述**：InVision的功能介绍和说明文字

### 合法复刻的最佳实践

**如何合法使用InVision的设计理念**：
1. **抽象原则**：从InVision的设计中抽象出通用的设计原则
2. **创造独特**：基于这些原则创造自己独特的设计风格
3. **保持原创**：确保所有视觉元素都是原创的
4. **尊重版权**：尊重InVision的知识产权和品牌资产

**如何避免侵权**：
1. **不直接复制**：不要直接复制InVision的视觉元素
2. **不使用素材**：不要使用InVision的素材库内容
3. **不模仿品牌**：不要过度模仿InVision的品牌特征
4. **创造差异**：在设计中创造明显的差异和独特性

**建议的学习路径**：
1. **分析设计系统**：深入分析InVision的设计系统架构
2. **理解设计原则**：理解InVision背后的设计原则和理念
3. **应用原则**：将这些原则应用到自己的设计中
4. **创造风格**：基于这些原则创造自己独特的设计风格

---

## 总结

InVision设计系统的核心在于"设计即协作"，通过专业的界面、强大的功能、清晰的组件规范和流畅的交互，让设计团队能够快速创建和验证产品原型。学习InVision的设计系统时，应该关注其设计原则和理念，而不是直接复制其视觉元素和品牌资产。通过抽象和应用这些原则，可以创造出既专业又协作的设计系统。