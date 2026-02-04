# Segment Design

Segment 官方设计系统，数据分析平台设计规范

---

## 1. 设计风格总览（Design DNA）

**核心关键词**：数据驱动、专业、简洁、一致性、可访问

**适用产品类型**：
- 数据分析平台
- 商业智能工具
- 数据可视化应用
- 客户数据平台
- 营销分析工具

**设计哲学**：
Segment Design 是 Segment 的官方设计系统，专为数据分析和商业智能而设计。其设计理念强调数据驱动的决策、专业性和一致性，通过清晰、直观的界面设计提升数据分析效率和用户体验。Segment Design 注重可访问性和国际化，确保全球用户都能轻松使用 Segment 的产品和服务。设计风格偏向实用主义，避免过度装饰，专注于提供清晰的信息和高效的操作。

---

## 2. 颜色系统（Color System）

### 2.1 品牌主色

```css
:root {
  /* Segment Design 品牌主色 - 紫色系 */
  --color-primary: #5B4BFF;
  --color-primary-hover: #4A3BD9;
  --color-primary-active: #3F31B3;
  --color-primary-light: #7C6DFF;
  --color-primary-lighter: #9E91FF;
  --color-primary-dark: #4A3BD9;
  --color-primary-darker: #3F31B3;
  
  /* 辅助主色 - 蓝色 */
  --color-secondary: #00A3FF;
  --color-secondary-hover: #0085D1;
  --color-secondary-active: #0066A3;
  --color-secondary-light: #33B5FF;
  --color-secondary-lighter: #66C7FF;
  --color-secondary-dark: #0085D1;
  --color-secondary-darker: #0066A3;
}
```

**使用场景**：
- 主色：用于主要操作按钮、链接、重要交互元素
- 辅助主色：用于次要操作、品牌元素、装饰性元素

### 2.2 中性色系统

```css
:root {
  /* 中性色 - 灰色系 */
  --color-gray-0: #FFFFFF;
  --color-gray-100: #F8F9FA;
  --color-gray-200: #E9ECEF;
  --color-gray-300: #DEE2E6;
  --color-gray-400: #CED4DA;
  --color-gray-500: #ADB5BD;
  --color-gray-600: #6C757D;
  --color-gray-700: #495057;
  --color-gray-800: #343A40;
  --color-gray-900: #212529;
}
```

**使用场景**：
- Gray-0/100：背景色、浅色分割线
- Gray-200/300：边框、禁用状态
- Gray-400/500：次要文本、占位符
- Gray-600/700：主要文本
- Gray-800/900：标题、强调文本

### 2.3 语义色系统

```css
:root {
  /* 成功色 - 绿色 */
  --color-success: #28A745;
  --color-success-hover: #218838;
  --color-success-active: #1E7E34;
  --color-success-light: #34CE57;
  --color-success-lighter: #40E06A;
  
  /* 警告色 - 黄色 */
  --color-warning: #FFC107;
  --color-warning-hover: #E0A800;
  --color-warning-active: #D39E00;
  --color-warning-light: #FFCA2C;
  --color-warning-lighter: #FFD54F;
  
  /* 错误色 - 红色 */
  --color-error: #DC3545;
  --color-error-hover: #C82333;
  --color-error-active: #BD2130;
  --color-error-light: #E4606D;
  --color-error-lighter: #EC8C95;
  
  /* 信息色 - 蓝色 */
  --color-info: #17A2B8;
  --color-info-hover: #138496;
  --color-info-active: #117A8B;
  --color-info-light: #36B9CC;
  --color-info-lighter: #55D0E0;
}
```

**使用场景**：
- 成功色：成功提示、完成状态、积极反馈
- 警告色：警告提示、需要注意的状态
- 错误色：错误提示、失败状态
- 信息色：信息提示、中性状态

### 2.4 Design Token 命名建议

```css
/* 颜色 Token 命名规范 */
--color-{purpose}-{variant}-{state}

/* 示例 */
--color-primary-default
--color-primary-hover
--color-primary-active
--color-primary-disabled
--color-text-primary
--color-text-secondary
--color-background-default
--color-background-elevated
--color-border-default
--color-border-subtle
```

---

## 3. 字体与排版（Typography）

### 3.1 字体家族

```css
:root {
  /* Segment Design 字体家族 */
  --font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-family-mono: 'SF Mono', 'Roboto Mono', 'Courier New', Courier, monospace;
}
```

**字体选择**：
- Inter：现代无衬线字体，用于正文和 UI 文本
- SF Mono/Roboto Mono：等宽字体，用于代码和技术内容
- 系统字体：作为后备方案，确保跨平台一致性

### 3.2 字号层级

```css
:root {
  /* 标题字号 */
  --font-size-h1: 32px;
  --font-size-h2: 28px;
  --font-size-h3: 24px;
  --font-size-h4: 20px;
  --font-size-h5: 18px;
  --font-size-h6: 16px;
  
  /* 正文字号 */
  --font-size-body-large: 16px;
  --font-size-body: 14px;
  --font-size-body-small: 12px;
  
  /* 辅助字号 */
  --font-size-caption: 11px;
  --font-size-overline: 10px;
}
```

**使用场景**：
- H1：页面主标题
- H2：章节标题
- H3：子章节标题
- H4：卡片标题
- H5：小组件标题
- H6：小标题
- Body Large：重要正文
- Body：标准正文
- Body Small：次要正文
- Caption：说明文本
- Overline：标签、分类

### 3.3 行高与字重

```css
:root {
  /* 行高 */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  
  /* 字重 */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

**排版规则**：
- 标题：使用较紧的行高（1.25）和较重的字重（600-700）
- 正文：使用标准行高（1.5）和常规字重（400-500）
- 代码：使用等宽字体和标准行高（1.5）

### 3.4 排版节奏

```css
/* 排版间距系统 */
--spacing-text-tight: 4px;
--spacing-text-normal: 8px;
--spacing-text-relaxed: 16px;
--spacing-text-loose: 24px;
```

**排版原则**：
- 标题与内容之间：使用 loose 间距（24px）
- 段落之间：使用 relaxed 间距（16px）
- 行内元素：使用 normal 间距（8px）
- 紧密关联元素：使用 tight 间距（4px）

---

## 4. 布局与栅格系统（Layout & Grid）

### 4.1 页面版心

```css
:root {
  /* 版心宽度 */
  --container-width-small: 768px;
  --container-width-medium: 1024px;
  --container-width-large: 1280px;
  --container-width-xlarge: 1440px;
}
```

**响应式断点**：
- Mobile：< 768px
- Tablet：768px - 1024px
- Desktop：1024px - 1280px
- Large Desktop：1280px - 1440px
- Extra Large：> 1440px

### 4.2 栅格系统

```css
:root {
  /* 栅格配置 */
  --grid-columns: 12;
  --grid-gutter: 16px;
  --grid-margin: 16px;
  --grid-max-width: 1280px;
}
```

**栅格结构**：
- 12 列栅格系统
- 标准间距：16px
- 可变边距：根据屏幕尺寸调整

### 4.3 留白密度

```css
:root {
  /* 间距系统 */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
}
```

**信息密度判断**：
- 高密度：使用 xs/sm 间距（4-8px）
- 中等密度：使用 md/lg 间距（16-24px）
- 低密度：使用 xl/2xl 间距（32-48px）
- 超低密度：使用 3xl 间距（64px）

---

## 5. 核心 UI 组件规范（Component System）

### 5.1 Button（按钮）

```css
:root {
  /* 按钮尺寸 */
  --button-height-small: 28px;
  --button-height-medium: 32px;
  --button-height-large: 40px;
  --button-height-xlarge: 48px;
  
  /* 按钮圆角 */
  --button-radius-small: 4px;
  --button-radius-medium: 4px;
  --button-radius-large: 4px;
  --button-radius-xlarge: 4px;
  
  /* 按钮内边距 */
  --button-padding-small: 8px 16px;
  --button-padding-medium: 10px 20px;
  --button-padding-large: 12px 24px;
  --button-padding-xlarge: 14px 28px;
}
```

**按钮状态**：
- Default：默认状态
- Hover：鼠标悬停状态
- Active：点击激活状态
- Focus：键盘聚焦状态
- Disabled：禁用状态

**按钮变体**：
- Primary：主要操作按钮
- Secondary：次要操作按钮
- Tertiary：第三级按钮
- Destructive：破坏性操作按钮
- Link：链接按钮

### 5.2 Card（卡片）

```css
:root {
  /* 卡片配置 */
  --card-border-radius: 4px;
  --card-border-width: 1px;
  --card-padding: 16px;
  --card-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --card-shadow-md: 0 3px 6px rgba(0, 0, 0, 0.1);
  --card-shadow-lg: 0 8px 12px rgba(0, 0, 0, 0.1);
}
```

**卡片使用场景**：
- 内容分组
- 信息展示
- 功能模块
- 数据可视化

**卡片样式**：
- 标准卡片：带边框和阴影
- 升级卡片：带阴影和悬停效果
- 简约卡片：无边框，仅内边距

### 5.3 Input / Upload / Form 类组件

```css
:root {
  /* 输入框配置 */
  --input-height: 32px;
  --input-border-radius: 4px;
  --input-border-width: 1px;
  --input-padding: 8px 12px;
  --input-border-color: var(--color-gray-300);
  --input-border-focus: var(--color-primary);
  --input-background: #FFFFFF;
  --input-error-border: var(--color-error);
}
```

**表单组件**：
- Text Input：文本输入框
- Textarea：多行文本框
- Select：下拉选择框
- Checkbox：复选框
- Radio：单选框
- Switch：开关
- Upload：文件上传
- Date Picker：日期选择器

**表单状态**：
- Default：默认状态
- Focus：聚焦状态
- Error：错误状态
- Success：成功状态
- Disabled：禁用状态

### 5.4 Navigation（导航）

```css
:root {
  /* 导航配置 */
  --nav-height: 52px;
  --nav-item-padding: 8px 16px;
  --nav-item-radius: 4px;
  --nav-border-width: 0;
}
```

**导航类型**：
- Top Navigation：顶部导航栏
- Side Navigation：侧边导航栏
- Breadcrumb：面包屑导航
- Tabs：标签页导航
- Stepper：步骤导航

**导航交互**：
- Hover：悬停高亮
- Active：当前页面高亮
- Focus：键盘聚焦
- Disabled：禁用状态

---

## 6. 图标与插画风格（Icon & Illustration）

### 6.1 图标风格

```css
:root {
  /* 图标尺寸 */
  --icon-size-xs: 12px;
  --icon-size-sm: 16px;
  --icon-size-md: 20px;
  --icon-size-lg: 24px;
  --icon-size-xl: 32px;
  
  /* 图标颜色 */
  --icon-color-default: var(--color-gray-500);
  --icon-color-hover: var(--color-gray-700);
  --icon-color-active: var(--color-primary);
}
```

**图标风格特点**：
- Outline：线性图标，用于次要操作
- Filled：填充图标，用于主要操作
- 圆角感：适度的圆角，保持专业感
- 统一线宽：1.5px 线宽，确保一致性

### 6.2 插画风格

**插画原则**：
- 功能性：插画主要用于辅助理解，而非装饰
- 简洁性：避免过度复杂的插画，保持清晰
- 数据主题：插画风格与数据分析主题一致
- 品牌一致：插画颜色与品牌色系统一

**插画类型**：
- 空状态插画：用于无数据或空页面
- 错误状态插画：用于错误页面
- 成功状态插画：用于成功提示
- 引导插画：用于用户引导

### 6.3 设计原则

**图标设计原则**：
- 清晰可辨：图标含义明确，易于理解
- 一致性：所有图标遵循相同的设计语言
- 可扩展：图标在不同尺寸下保持清晰
- 可访问：图标配合文本使用，确保可访问性

**插画设计原则**：
- 弱化装饰：插画不喧宾夺主
- 辅助理解：插画帮助用户理解内容
- 数据主题：插画风格与数据分析主题保持一致
- 适度使用：不过度使用插画，保持界面简洁

---

## 7. 交互与动效原则（Interaction & Motion）

### 7.1 Hover / Active / Focus 行为

```css
:root {
  /* 交互时长 */
  --transition-duration-fast: 150ms;
  --transition-duration-normal: 300ms;
  --transition-duration-slow: 500ms;
  
  /* 缓动函数 */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
}
```

**Hover 状态**：
- 按钮：背景色变化，轻微阴影
- 链接：颜色变化，下划线
- 卡片：轻微上浮，阴影增强
- 图标：颜色变化，轻微缩放

**Active 状态**：
- 按钮：背景色加深，内阴影
- 链接：颜色加深
- 卡片：轻微下沉
- 图标：轻微缩小

**Focus 状态**：
- 所有可交互元素：明显的焦点环
- 焦点环颜色：主色或蓝色
- 焦点环宽度：2px
- 焦点环偏移：2px

### 7.2 动效节奏

**动效原则**：
- 克制：动效不喧宾夺主
- 流畅：动效流畅自然
- 有意义：动效有明确目的
- 可预测：动效符合用户预期

**动效类型**：
- 淡入淡出：用于页面切换、元素显示/隐藏
- 滑动：用于抽屉、侧边栏
- 缩放：用于模态框、弹窗
- 旋转：用于加载状态
- 弹跳：用于成功提示

### 7.3 操作反馈设计原则

**反馈类型**：
- 即时反馈：按钮点击、表单提交
- 延迟反馈：数据加载、文件上传
- 成功反馈：操作成功提示
- 错误反馈：操作失败提示
- 警告反馈：需要注意的操作

**反馈方式**：
- 视觉反馈：颜色变化、图标显示
- 文本反馈：提示信息、状态文本
- 动效反馈：加载动画、成功动画
- 声音反馈：可选的声音提示

---

## 8. 可复用 Design Token（工程友好）

### 8.1 Color Tokens

```css
:root {
  /* 品牌色 */
  --color-brand-primary: #5B4BFF;
  --color-brand-secondary: #00A3FF;
  
  /* 中性色 */
  --color-neutral-0: #FFFFFF;
  --color-neutral-100: #F8F9FA;
  --color-neutral-200: #E9ECEF;
  --color-neutral-300: #DEE2E6;
  --color-neutral-400: #CED4DA;
  --color-neutral-500: #ADB5BD;
  --color-neutral-600: #6C757D;
  --color-neutral-700: #495057;
  --color-neutral-800: #343A40;
  --color-neutral-900: #212529;
  
  /* 语义色 */
  --color-semantic-success: #28A745;
  --color-semantic-warning: #FFC107;
  --color-semantic-error: #DC3545;
  --color-semantic-info: #17A2B8;
}
```

### 8.2 Spacing Tokens

```css
:root {
  /* 间距 Token */
  --space-0: 0;
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

### 8.3 Radius Tokens

```css
:root {
  /* 圆角 Token */
  --radius-none: 0;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-xl: 8px;
  --radius-2xl: 12px;
  --radius-3xl: 16px;
  --radius-full: 9999px;
}
```

### 8.4 Shadow Tokens

```css
:root {
  /* 阴影 Token */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 3px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 12px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 16px 24px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 24px 32px rgba(0, 0, 0, 0.15);
}
```

### 8.5 Typography Tokens

```css
:root {
  /* 字体 Token */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'SF Mono', 'Roboto Mono', 'Courier New', Courier, monospace;
  
  /* 字号 Token */
  --text-xs: 11px;
  --text-sm: 12px;
  --text-base: 14px;
  --text-lg: 16px;
  --text-xl: 18px;
  --text-2xl: 20px;
  --text-3xl: 24px;
  --text-4xl: 28px;
  --text-5xl: 32px;
  
  /* 字重 Token */
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* 行高 Token */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
  --leading-loose: 2;
}
```

---

## 9. 合法复刻建议（Important）

### 9.1 可以学习的元素

**设计规则**：
- 数据分析平台的设计方法：学习如何为数据分析工具构建易用的界面
- 一致性原则：学习如何在不同产品中保持一致的设计语言
- 组件化思维：学习如何将 UI 拆解为可复用的组件
- Token 系统：学习如何使用 Design Token 管理设计变量
- 响应式设计：学习如何构建适应不同屏幕的布局
- 可访问性：学习如何确保设计对所有用户友好

**风格特征**：
- 简洁、专业的视觉风格
- 清晰的层次结构
- 合理的留白和间距
- 统一的圆角和阴影
- 克制的动效设计

### 9.2 不应复刻的元素

**品牌元素**：
- Segment 品牌标识和 Logo
- Segment Design 品牌名称
- Segment 官方插画和图标
- Segment 产品特定的视觉元素

**具体内容**：
- Segment 产品界面截图
- Segment 官方文档内容
- Segment 商标和版权材料
- Segment 特定的产品功能描述

**法律建议**：
- 可以学习和参考设计系统的结构和方法论
- 可以使用相似的设计原则和最佳实践
- 不应直接复制 Segment 的品牌元素和视觉资产
- 不应声称是 Segment Design 或与 Segment 有官方关联
- 建议创建自己的品牌标识和视觉风格
- 确保所有设计元素都是原创或来自合法来源

---

**文档版本**: v1.0
**最后更新**: 2026-02-02
**适用范围**: 数据分析平台、商业智能工具、数据可视化应用