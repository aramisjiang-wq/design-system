# Fluent Design 设计系统

## 1. 设计风格总览（Design DNA）

### 风格关键词
- **自然**：模拟自然界的物理特性和光影效果
- **沉浸式**：提供深度、运动、材质、缩放和光影的沉浸式体验
- **一致性**：跨设备、跨平台保持统一的视觉语言和交互模式
- **可访问性**：优先考虑可访问性，遵循WCAG 2.1 AA标准

### 适用产品类型
- **Windows应用**：桌面应用、UWP应用
- **Web应用**：现代Web应用、企业级产品
- **移动应用**：iOS、Android、Windows Phone应用
- **跨平台应用**：跨设备、跨平台的统一体验

### 设计价值观
- **光**：使用光线、深度、运动、材质、缩放创造沉浸式体验
- **深度**：通过层次、阴影、透视建立空间感
- **运动**：自然、流畅的动画和过渡效果
- **材质**：模拟真实世界的材质和纹理
- **缩放**：适应不同设备和屏幕尺寸

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
```css
:root {
  /* 品牌蓝 */
  --fluent-color-primary: #0078D4;
  --fluent-color-primary-hover: #106EBE;
  --fluent-color-primary-active: #005A9E;
  --fluent-color-primary-bg: #F3F9FD;
  --fluent-color-primary-border: #8AABCD;

  /* 功能蓝 */
  --fluent-color-primary-light: #60CDFF;
  --fluent-color-primary-lighter: #C7E0F4;
}
```

**使用场景**：
- 主色：主要操作按钮、链接、选中状态
- 主色-hover：鼠标悬停状态
- 主色-active：点击/激活状态
- 主色-bg：背景色、标签背景
- 主色-border：边框色、分割线

### 辅助色板（Auxiliary Colors）
```css
:root {
  /* 成功色 */
  --fluent-color-success: #107C10;
  --fluent-color-success-hover: #0B5A0B;
  --fluent-color-success-active: #083D08;
  --fluent-color-success-bg: #DFF6DD;
  --fluent-color-success-border: #8BCF8C;

  /* 警告色 */
  --fluent-color-warning: #797775;
  --fluent-color-warning-hover: #605E5C;
  --fluent-color-warning-active: #484644;
  --fluent-color-warning-bg: #FDE7E9;
  --fluent-color-warning-border: #F2B8B5;

  /* 错误色 */
  --fluent-color-error: #A80000;
  --fluent-color-error-hover: #8A0000;
  --fluent-color-error-active: #6B0000;
  --fluent-color-error-bg: #FDE7E9;
  --fluent-color-error-border: #F2B8B5;

  /* 信息色 */
  --fluent-color-info: #0078D4;
  --fluent-color-info-hover: #106EBE;
  --fluent-color-info-active: #005A9E;
  --fluent-color-info-bg: #F3F9FD;
  --fluent-color-info-border: #8AABCD;
}
```

**使用场景**：
- 成功色：操作成功、状态正常、正向反馈
- 警告色：注意事项、警告提示、需要用户关注
- 错误色：操作失败、错误提示、危险操作
- 信息色：一般提示、信息展示、中性反馈

### 中性色（Neutral Colors）
```css
:root {
  /* 文字颜色 */
  --fluent-color-text-primary: #201F1E;
  --fluent-color-text-secondary: #605E5C;
  --fluent-color-text-tertiary: #A19F9D;
  --fluent-color-text-disabled: #BDBBBB;

  /* 背景颜色 */
  --fluent-color-bg-base: #FFFFFF;
  --fluent-color-bg-layout: #F3F2F1;
  --fluent-color-bg-container: #FFFFFF;
  --fluent-color-bg-elevated: #FFFFFF;
  --fluent-color-bg-spotlight: #201F1E;
  --fluent-color-bg-text-hover: #F3F2F1;
  --fluent-color-bg-mask: rgba(32, 31, 30, 0.4);

  /* 边框颜色 */
  --fluent-color-border: #8A8886;
  --fluent-color-border-secondary: #E1DFDD;
}

/* 暗色模式 */
[data-theme='dark'] {
  --fluent-color-text-primary: #FFFFFF;
  --fluent-color-text-secondary: #D2D0CE;
  --fluent-color-text-tertiary: #8A8886;
  --fluent-color-text-disabled: #605E5C;

  --fluent-color-bg-base: #202020;
  --fluent-color-bg-layout: #1B1A19;
  --fluent-color-bg-container: #2B2B2B;
  --fluent-color-bg-elevated: #333333;
  --fluent-color-bg-spotlight: #FFFFFF;
  --fluent-color-bg-text-hover: #333333;
  --fluent-color-bg-mask: rgba(255, 255, 255, 0.4);

  --fluent-color-border: #605E5C;
  --fluent-color-border-secondary: #3B3A39;
}
```

**使用场景**：
- 文字颜色：主要文字、次要文字、辅助文字、禁用文字
- 背景颜色：基础背景、布局背景、容器背景、遮罩层
- 边框颜色：常规边框、分割线

### Design Token 命名建议
```css
/* 颜色 Token 命名规范 */
--fluent-{category}-{variant}-{state}

/* 示例 */
--fluent-color-primary-hover
--fluent-color-success-bg
--fluent-color-text-secondary
--fluent-color-bg-container
```

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
:root {
  /* 系统字体栈 */
  --fluent-font-family: 'Segoe UI', 'Segoe UI Web (West European)', -apple-system,
    BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;

  /* 代码字体 */
  --fluent-font-family-code: 'Consolas', 'Courier New', monospace;

  /* 等宽字体 */
  --fluent-font-family-mono: 'Consolas', 'Courier New', monospace;
}
```

### 字号层级（Font Size Scale）
```css
:root {
  /* 标题字号 */
  --fluent-font-size-hero: 68px;
  --fluent-font-size-heading-1: 46px;
  --fluent-font-size-heading-2: 34px;
  --fluent-font-size-heading-3: 28px;
  --fluent-font-size-heading-4: 24px;
  --fluent-font-size-heading-5: 20px;
  --fluent-font-size-heading-6: 18px;

  /* 正文字号 */
  --fluent-font-size-base: 14px;
  --fluent-font-size-large: 16px;
  --fluent-font-size-medium: 14px;
  --fluent-font-size-small: 12px;

  /* 代码字号 */
  --fluent-font-size-code: 14px;

  /* 标签字号 */
  --fluent-font-size-label: 14px;
}
```

**使用场景**：
- Hero：页面主标题
- Heading 1：章节标题
- Heading 2：子章节标题
- Heading 3：卡片标题
- Heading 4：小组件标题
- Heading 5：副标题
- Heading 6：小标题
- Base：正文内容
- Large：重要正文
- Medium：次要正文
- Small：辅助文字
- Code：代码块、行内代码
- Label：表单标签

### 行高（Line Height）
```css
:root {
  --fluent-line-height-hero: 92px;
  --fluent-line-height-heading-1: 56px;
  --fluent-line-height-heading-2: 44px;
  --fluent-line-height-heading-3: 36px;
  --fluent-line-height-heading-4: 32px;
  --fluent-line-height-heading-5: 28px;
  --fluent-line-height-heading-6: 24px;
  --fluent-line-height-base: 20px;
  --fluent-line-height-large: 22px;
  --fluent-line-height-medium: 20px;
  --fluent-line-height-small: 16px;
  --fluent-line-height-code: 20px;
  --fluent-line-height-label: 20px;
}
```

### 字重（Font Weight）
```css
:root {
  --fluent-font-weight-regular: 400;
  --fluent-font-weight-semibold: 600;
  --fluent-font-weight-bold: 700;
}
```

**使用场景**：
- Regular：正文内容
- Semibold：重要标题、强调文字
- Bold：主标题、关键信息

### 排版规则
```css
:root {
  /* 字间距 */
  --fluent-letter-spacing: 0px;

  /* 段落间距 */
  --fluent-paragraph-spacing: 1rem;

  /* 标题间距 */
  --fluent-heading-spacing: 0.5rem;
}
```

### 响应式排版
```css
/* 移动端 */
@media (max-width: 639px) {
  :root {
    --fluent-font-size-hero: 42px;
    --fluent-font-size-heading-1: 34px;
    --fluent-font-size-heading-2: 28px;
    --fluent-font-size-base: 14px;
  }
}

/* 平板端 */
@media (min-width: 640px) and (max-width: 1023px) {
  :root {
    --fluent-font-size-hero: 56px;
    --fluent-font-size-heading-1: 40px;
    --fluent-font-size-heading-2: 32px;
    --fluent-font-size-base: 15px;
  }
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心（Container Width）
```css
:root {
  /* 版心宽度 */
  --fluent-screen-xs: 320px;
  --fluent-screen-sm: 640px;
  --fluent-screen-md: 1024px;
  --fluent-screen-lg: 1366px;
  --fluent-screen-xl: 1920px;

  /* 内容最大宽度 */
  --fluent-content-max-width: 1366px;
}
```

### 栅格系统（Grid System）
```css
:root {
  /* 栅格列数 */
  --fluent-grid-columns: 12;

  /* 栅格间距 */
  --fluent-grid-gutter-xs: 8px;
  --fluent-grid-gutter-sm: 12px;
  --fluent-grid-gutter-md: 16px;
  --fluent-grid-gutter-lg: 24px;
  --fluent-grid-gutter-xl: 32px;

  /* 栅格边距 */
  --fluent-grid-margin: 24px;
}
```

**栅格使用规则**：
- 12列栅格系统，支持灵活的列组合
- 响应式断点：xs（<640px）、sm（≥640px）、md（≥1024px）、lg（≥1366px）、xl（≥1920px）
- 栅格间距：xs（8px）、sm（12px）、md（16px）、lg（24px）、xl（32px）

### 间距系统（Spacing System）
```css
:root {
  /* 间距单位 */
  --fluent-spacing-unit: 4px;

  /* 间距层级 */
  --fluent-spacing-0: 0px;
  --fluent-spacing-1: 4px;
  --fluent-spacing-2: 8px;
  --fluent-spacing-3: 12px;
  --fluent-spacing-4: 16px;
  --fluent-spacing-5: 20px;
  --fluent-spacing-6: 24px;
  --fluent-spacing-7: 28px;
  --fluent-spacing-8: 32px;
  --fluent-spacing-9: 36px;
  --fluent-spacing-10: 40px;
  --fluent-spacing-11: 44px;
  --fluent-spacing-12: 48px;
}
```

**使用场景**：
- Spacing 0：无间距
- Spacing 1-2：细边框、分割线
- Spacing 3-4：小元素间距、图标与文字间距
- Spacing 5-6：常规元素间距、按钮内边距
- Spacing 7-8：卡片内边距、模块间距
- Spacing 9-10：大模块间距、章节间距
- Spacing 11-12：页面级间距、主要分区间距

### 留白密度（White Space Density）
```css
:root {
  /* 紧凑模式 */
  --fluent-padding-compact: 8px;

  /* 默认模式 */
  --fluent-padding-default: 16px;

  /* 宽松模式 */
  --fluent-padding-loose: 24px;
}
```

**信息密度判断**：
- 紧凑模式：数据密集型页面、表格、列表
- 默认模式：常规页面、表单、卡片
- 宽松模式：展示型页面、营销页面

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

#### 组件概述
- 组件名称：按钮（Button）
- 组件描述：触发操作的主要交互组件
- 适用场景：表单提交、操作触发、导航跳转

#### 组件变体
```css
/* 主按钮 */
.ms-Button--primary {
  background: var(--fluent-color-primary);
  border-color: var(--fluent-color-primary);
  color: #FFFFFF;
}

/* 次按钮 */
.ms-Button--standard {
  background: var(--fluent-color-bg-container);
  border-color: var(--fluent-color-border-secondary);
  color: var(--fluent-color-text-primary);
}

/* 文字按钮 */
.ms-Button--command {
  background: transparent;
  border-color: transparent;
  color: var(--fluent-color-text-primary);
}

/* 图标按钮 */
.ms-Button--icon {
  background: transparent;
  border-color: transparent;
  color: var(--fluent-color-text-primary);
}
```

#### 组件尺寸
```css
/* 小号按钮 */
.ms-Button--small {
  height: 24px;
  padding: 0 8px;
  font-size: var(--fluent-font-size-small);
}

/* 中号按钮（默认） */
.ms-Button {
  height: 32px;
  padding: 0 16px;
  font-size: var(--fluent-font-size-base);
}

/* 大号按钮 */
.ms-Button--large {
  height: 40px;
  padding: 0 20px;
  font-size: var(--fluent-font-size-large);
}
```

#### 组件状态
```css
/* 悬停状态 */
.ms-Button:hover {
  background: var(--fluent-color-primary-hover);
  border-color: var(--fluent-color-primary-hover);
}

/* 激活状态 */
.ms-Button:active {
  background: var(--fluent-color-primary-active);
  border-color: var(--fluent-color-primary-active);
}

/* 禁用状态 */
.ms-Button:disabled {
  background: var(--fluent-color-text-disabled);
  border-color: var(--fluent-color-text-disabled);
  color: var(--fluent-color-text-disabled);
  cursor: not-allowed;
}

/* 加载状态 */
.ms-Button--loading {
  position: relative;
  pointer-events: none;
}
```

#### 组件圆角
```css
:root {
  --fluent-border-radius: 4px;
}
```

### Card（卡片）

#### 组件概述
- 组件名称：卡片（Card）
- 组件描述：内容容器组件，用于分组展示信息
- 适用场景：信息展示、数据展示、内容分组

#### 组件样式
```css
.ms-Card {
  background: var(--fluent-color-bg-container);
  border: 1px solid var(--fluent-color-border-secondary);
  border-radius: var(--fluent-border-radius);
  padding: var(--fluent-spacing-6);
}

.ms-Card--clickable:hover {
  background: var(--fluent-color-bg-text-hover);
  cursor: pointer;
}
```

#### 组件阴影
```css
:root {
  --fluent-shadow-4: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132),
    0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);
  --fluent-shadow-8: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132),
    0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
  --fluent-shadow-16: 0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132),
    0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108);
  --fluent-shadow-28: 0 12.8px 28.8px 0 rgba(0, 0, 0, 0.132),
    0 2.4px 7.2px 0 rgba(0, 0, 0, 0.108);
}
```

### Input（输入框）

#### 组件概述
- 组件名称：输入框（Input）
- 组件描述：文本输入组件，用于用户输入
- 适用场景：表单输入、搜索框、文本编辑

#### 组件样式
```css
.ms-TextField-field {
  background: var(--fluent-color-bg-container);
  border: 1px solid var(--fluent-color-border-secondary);
  border-radius: var(--fluent-border-radius);
  padding: var(--fluent-spacing-1) var(--fluent-spacing-2);
  font-size: var(--fluent-font-size-base);
  color: var(--fluent-color-text-primary);
  line-height: var(--fluent-line-height-base);
}

.ms-TextField-field:hover {
  border-color: var(--fluent-color-border);
}

.ms-TextField-field:focus {
  border-color: var(--fluent-color-primary);
  outline: 1px solid var(--fluent-color-primary);
}

.ms-TextField-field:disabled {
  background: var(--fluent-color-bg-text-hover);
  border-color: var(--fluent-color-border-secondary);
  color: var(--fluent-color-text-disabled);
  cursor: not-allowed;
}
```

#### 组件尺寸
```css
/* 小号输入框 */
.ms-TextField--small .ms-TextField-field {
  height: 24px;
  padding: var(--fluent-spacing-1) var(--fluent-spacing-2);
  font-size: var(--fluent-font-size-small);
}

/* 中号输入框（默认） */
.ms-TextField-field {
  height: 32px;
  padding: var(--fluent-spacing-1) var(--fluent-spacing-2);
  font-size: var(--fluent-font-size-base);
}

/* 大号输入框 */
.ms-TextField--large .ms-TextField-field {
  height: 40px;
  padding: var(--fluent-spacing-2) var(--fluent-spacing-3);
  font-size: var(--fluent-font-size-large);
}
```

### Form（表单）

#### 组件概述
- 组件名称：表单（Form）
- 组件描述：表单容器组件，用于组织表单元素
- 适用场景：数据录入、用户注册、设置配置

#### 组件样式
```css
.ms-Label {
  display: block;
  margin-bottom: var(--fluent-spacing-1);
  color: var(--fluent-color-text-primary);
  font-size: var(--fluent-font-size-label);
  font-weight: var(--fluent-font-weight-regular);
  line-height: var(--fluent-line-height-label);
}

.ms-Label--required::after {
  content: '*';
  margin-left: var(--fluent-spacing-1);
  color: var(--fluent-color-error);
}

.ms-TextField-errorMessage {
  display: block;
  margin-top: var(--fluent-spacing-1);
  color: var(--fluent-color-error);
  font-size: var(--fluent-font-size-small);
  line-height: var(--fluent-line-height-small);
}
```

### Navigation（导航）

#### 组件概述
- 组件名称：导航（Navigation）
- 组件描述：页面导航组件，用于页面切换
- 适用场景：侧边栏导航、顶部导航、面包屑

#### 组件样式
```css
/* 菜单项 */
.ms-Nav-link {
  display: flex;
  align-items: center;
  padding: var(--fluent-spacing-2) var(--fluent-spacing-3);
  color: var(--fluent-color-text-primary);
  font-size: var(--fluent-font-size-base);
  line-height: var(--fluent-line-height-base);
  text-decoration: none;
  transition: background-color 0.2s cubic-bezier(0.33, 1, 0.68, 1);
}

.ms-Nav-link:hover {
  background-color: var(--fluent-color-bg-text-hover);
}

.ms-Nav-link--selected {
  background-color: var(--fluent-color-primary-bg);
  color: var(--fluent-color-primary);
}

/* 面包屑 */
.ms-Breadcrumb {
  display: flex;
  align-items: center;
  color: var(--fluent-color-text-secondary);
  font-size: var(--fluent-font-size-base);
  line-height: var(--fluent-line-height-base);
}

.ms-Breadcrumb-item a {
  color: var(--fluent-color-primary);
  text-decoration: none;
  transition: color 0.2s cubic-bezier(0.33, 1, 0.68, 1);
}

.ms-Breadcrumb-item a:hover {
  color: var(--fluent-color-primary-hover);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格（Icon Style）

#### 图标类型
```css
/* 线性图标 */
.ms-Icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: currentColor;
  vertical-align: middle;
}

/* 填充图标 */
.ms-Icon--filled {
  /* 使用填充风格的图标 */
}

/* 描边图标 */
.ms-Icon--outline {
  /* 使用描边风格的图标 */
}
```

#### 图标尺寸
```css
:root {
  --fluent-icon-size-8: 8px;
  --fluent-icon-size-10: 10px;
  --fluent-icon-size-12: 12px;
  --fluent-icon-size-16: 16px;
  --fluent-icon-size-20: 20px;
  --fluent-icon-size-24: 24px;
  --fluent-icon-size-32: 32px;
  --fluent-icon-size-48: 48px;
}
```

**使用场景**：
- Size 8-10：按钮内小图标
- Size 12-16：文字前缀图标
- Size 20-24：常规图标
- Size 32：重要操作图标
- Size 48：展示型图标

### 插画风格（Illustration Style）

#### 插画原则
- **自然性**：模拟自然界的物理特性和光影效果
- **一致性**：保持统一的视觉风格
- **功能性**：插画服务于功能，不装饰
- **可扩展性**：支持不同尺寸和场景

#### 插画使用场景
- **空状态**：无数据、无结果
- **错误状态**：操作失败、系统错误
- **引导状态**：首次使用、功能介绍
- **庆祝状态**：操作成功、任务完成

#### 插画设计原则
- 使用Fluent Design的调色板
- 保持1px的描边宽度
- 使用圆角连接（4px）
- 模拟真实世界的材质和纹理
- 保持简洁明了

---

## 7. 交互与动效原则（Interaction & Motion）

### 交互行为（Interaction Behavior）

#### Hover（悬停状态）
```css
/* 按钮悬停 */
.ms-Button:hover {
  background: var(--fluent-color-primary-hover);
  border-color: var(--fluent-color-primary-hover);
  transition: background-color 0.2s cubic-bezier(0.33, 1, 0.68, 1);
}

/* 输入框悬停 */
.ms-TextField-field:hover {
  border-color: var(--fluent-color-border);
  transition: border-color 0.2s cubic-bezier(0.33, 1, 0.68, 1);
}
```

#### Active（激活状态）
```css
/* 按钮激活 */
.ms-Button:active {
  background: var(--fluent-color-primary-active);
  border-color: var(--fluent-color-primary-active);
  transition: background-color 0.1s cubic-bezier(0.33, 1, 0.68, 1);
}
```

#### Focus（焦点状态）
```css
/* 输入框焦点 */
.ms-TextField-field:focus {
  border-color: var(--fluent-color-primary);
  outline: 1px solid var(--fluent-color-primary);
  transition: border-color 0.2s cubic-bezier(0.33, 1, 0.68, 1);
}

/* 按钮焦点 */
.ms-Button:focus {
  outline: 1px solid var(--fluent-color-primary);
  outline-offset: 2px;
}
```

### 动效节奏（Motion Timing）

#### 缓动函数（Easing Functions）
```css
:root {
  /* 标准缓动 */
  --fluent-motion-standard: cubic-bezier(0.33, 1, 0.68, 1);

  /* 进入缓动 */
  --fluent-motion-enter: cubic-bezier(0, 0, 0.33, 1);

  /* 离开缓动 */
  --fluent-motion-exit: cubic-bezier(0.33, 1, 0.68, 1);
}
```

#### 动效时长（Motion Duration）
```css
:root {
  /* 快速动效 */
  --fluent-duration-fast: 0.1s;

  /* 标准动效 */
  --fluent-duration-base: 0.2s;

  /* 慢速动效 */
  --fluent-duration-slow: 0.3s;

  /* 极慢动效 */
  --fluent-duration-slower: 0.5s;
}
```

### 操作反馈（Feedback）

#### 成功反馈
```css
/* 成功提示 */
.ms-MessageBar--success {
  background: var(--fluent-color-success-bg);
  border: 1px solid var(--fluent-color-success-border);
  color: var(--fluent-color-success);
  padding: var(--fluent-spacing-2) var(--fluent-spacing-3);
  animation: fluentSlideUp 0.2s var(--fluent-motion-enter);
}
```

#### 错误反馈
```css
/* 错误提示 */
.ms-MessageBar--error {
  background: var(--fluent-color-error-bg);
  border: 1px solid var(--fluent-color-error-border);
  color: var(--fluent-color-error);
  padding: var(--fluent-spacing-2) var(--fluent-spacing-3);
  animation: fluentSlideUp 0.2s var(--fluent-motion-enter);
}
```

#### 警告反馈
```css
/* 警告提示 */
.ms-MessageBar--warning {
  background: var(--fluent-color-warning-bg);
  border: 1px solid var(--fluent-color-warning-border);
  color: var(--fluent-color-warning);
  padding: var(--fluent-spacing-2) var(--fluent-spacing-3);
  animation: fluentSlideUp 0.2s var(--fluent-motion-enter);
}
```

### 动效原则（Motion Principles）
- **自然性**：动效模拟自然界的物理特性
- **简洁性**：动效简洁明了，不复杂
- **一致性**：保持统一的动效风格
- **性能优先**：使用CSS动画，避免JavaScript动画
- **可预测性**：动效可预测，不意外

---

## 8. 可复用 Design Token（Design Tokens）

### Color Tokens
```css
:root {
  /* Primary Colors */
  --fluent-color-primary: #0078D4;
  --fluent-color-primary-hover: #106EBE;
  --fluent-color-primary-active: #005A9E;
  --fluent-color-primary-bg: #F3F9FD;
  --fluent-color-primary-border: #8AABCD;

  /* Success Colors */
  --fluent-color-success: #107C10;
  --fluent-color-success-hover: #0B5A0B;
  --fluent-color-success-active: #083D08;
  --fluent-color-success-bg: #DFF6DD;
  --fluent-color-success-border: #8BCF8C;

  /* Warning Colors */
  --fluent-color-warning: #797775;
  --fluent-color-warning-hover: #605E5C;
  --fluent-color-warning-active: #484644;
  --fluent-color-warning-bg: #FDE7E9;
  --fluent-color-warning-border: #F2B8B5;

  /* Error Colors */
  --fluent-color-error: #A80000;
  --fluent-color-error-hover: #8A0000;
  --fluent-color-error-active: #6B0000;
  --fluent-color-error-bg: #FDE7E9;
  --fluent-color-error-border: #F2B8B5;

  /* Info Colors */
  --fluent-color-info: #0078D4;
  --fluent-color-info-hover: #106EBE;
  --fluent-color-info-active: #005A9E;
  --fluent-color-info-bg: #F3F9FD;
  --fluent-color-info-border: #8AABCD;

  /* Text Colors */
  --fluent-color-text-primary: #201F1E;
  --fluent-color-text-secondary: #605E5C;
  --fluent-color-text-tertiary: #A19F9D;
  --fluent-color-text-disabled: #BDBBBB;

  /* Background Colors */
  --fluent-color-bg-base: #FFFFFF;
  --fluent-color-bg-layout: #F3F2F1;
  --fluent-color-bg-container: #FFFFFF;
  --fluent-color-bg-elevated: #FFFFFF;
  --fluent-color-bg-spotlight: #201F1E;
  --fluent-color-bg-text-hover: #F3F2F1;
  --fluent-color-bg-mask: rgba(32, 31, 30, 0.4);

  /* Border Colors */
  --fluent-color-border: #8A8886;
  --fluent-color-border-secondary: #E1DFDD;
}
```

### Spacing Tokens
```css
:root {
  --fluent-spacing-unit: 4px;
  --fluent-spacing-0: 0px;
  --fluent-spacing-1: 4px;
  --fluent-spacing-2: 8px;
  --fluent-spacing-3: 12px;
  --fluent-spacing-4: 16px;
  --fluent-spacing-5: 20px;
  --fluent-spacing-6: 24px;
  --fluent-spacing-7: 28px;
  --fluent-spacing-8: 32px;
  --fluent-spacing-9: 36px;
  --fluent-spacing-10: 40px;
  --fluent-spacing-11: 44px;
  --fluent-spacing-12: 48px;
}
```

### Radius Tokens
```css
:root {
  --fluent-border-radius: 4px;
}
```

### Shadow Tokens
```css
:root {
  --fluent-shadow-4: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132),
    0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);
  --fluent-shadow-8: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132),
    0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
  --fluent-shadow-16: 0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132),
    0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108);
  --fluent-shadow-28: 0 12.8px 28.8px 0 rgba(0, 0, 0, 0.132),
    0 2.4px 7.2px 0 rgba(0, 0, 0, 0.108);
}
```

### Typography Tokens
```css
:root {
  /* Font Family */
  --fluent-font-family: 'Segoe UI', 'Segoe UI Web (West European)', -apple-system,
    BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;

  /* Font Size */
  --fluent-font-size-hero: 68px;
  --fluent-font-size-heading-1: 46px;
  --fluent-font-size-heading-2: 34px;
  --fluent-font-size-heading-3: 28px;
  --fluent-font-size-heading-4: 24px;
  --fluent-font-size-heading-5: 20px;
  --fluent-font-size-heading-6: 18px;
  --fluent-font-size-base: 14px;
  --fluent-font-size-large: 16px;
  --fluent-font-size-medium: 14px;
  --fluent-font-size-small: 12px;
  --fluent-font-size-code: 14px;
  --fluent-font-size-label: 14px;

  /* Line Height */
  --fluent-line-height-hero: 92px;
  --fluent-line-height-heading-1: 56px;
  --fluent-line-height-heading-2: 44px;
  --fluent-line-height-heading-3: 36px;
  --fluent-line-height-heading-4: 32px;
  --fluent-line-height-heading-5: 28px;
  --fluent-line-height-heading-6: 24px;
  --fluent-line-height-base: 20px;
  --fluent-line-height-large: 22px;
  --fluent-line-height-medium: 20px;
  --fluent-line-height-small: 16px;
  --fluent-line-height-code: 20px;
  --fluent-line-height-label: 20px;

  /* Font Weight */
  --fluent-font-weight-regular: 400;
  --fluent-font-weight-semibold: 600;
  --fluent-font-weight-bold: 700;
}
```

### Motion Tokens
```css
:root {
  /* Easing Functions */
  --fluent-motion-standard: cubic-bezier(0.33, 1, 0.68, 1);
  --fluent-motion-enter: cubic-bezier(0, 0, 0.33, 1);
  --fluent-motion-exit: cubic-bezier(0.33, 1, 0.68, 1);

  /* Duration */
  --fluent-duration-fast: 0.1s;
  --fluent-duration-base: 0.2s;
  --fluent-duration-slow: 0.3s;
  --fluent-duration-slower: 0.5s;
}
```

---

## 9. 合法复刻建议（Legal Replication Advice）

### 可学习的元素（Learnable Elements）

#### 设计原则
✅ **可以学习**：
- 自然设计原则：模拟自然界的物理特性和光影效果
- 沉浸式体验：通过深度、运动、材质、缩放创造沉浸式体验
- 一致性设计原则：跨产品保持统一的视觉语言
- 组件化设计思想：可复用、可组合的组件系统
- 响应式设计方法：多端适配的设计策略

#### 颜色系统
✅ **可以学习**：
- 主色、辅助色、中性色的色彩体系
- 功能色的使用场景和语义化
- 暗色模式的色彩适配方案
- 色彩对比度的可访问性要求
- Design Token的命名规范

#### 字体系统
✅ **可以学习**：
- Segoe UI字体家族的使用
- 字号层级的设计方法
- 行高、字重的使用规则
- 系统字体栈的构建方式
- 响应式排版的实现策略

#### 布局系统
✅ **可以学习**：
- 12列栅格系统的设计思路
- 响应式断点的设置策略
- 间距系统的建立方法
- 信息密度的控制原则
- 版心宽度的确定方法

#### 组件规范
✅ **可以学习**：
- 组件变体的设计方法
- 组件状态的交互设计
- 组件尺寸的规范制定
- 组件圆角的统一原则（4px）
- 组件阴影的使用规则

#### 交互设计
✅ **可以学习**：
- Hover、Active、Focus的交互状态
- 动效节奏的缓动函数
- 操作反馈的设计原则
- 微交互的实现方法
- 动效性能的优化策略

### 不应复刻的元素（Non-Replicable Elements）

#### 品牌元素
❌ **不应复刻**：
- Fluent Design的品牌标识和Logo
- Fluent Design的品牌色彩（#0078D4）
- Fluent Design的品牌字体（Segoe UI）
- Fluent Design的品牌插画和图标
- Fluent Design的品牌名称和口号

#### 具体内容
❌ **不应复刻**：
- Fluent Design的具体组件代码
- Fluent Design的具体文案内容
- Fluent Design的具体插画作品
- Fluent Design的具体图标设计
- Fluent Design的具体页面布局

#### 知识产权
❌ **不应复刻**：
- Fluent Design的版权材料
- Fluent Design的专利技术
- Fluent Design的商标和标识
- Fluent Design的商业素材
- Fluent Design的专有设计

### 合法复刻建议

#### 设计系统构建
✅ **建议做法**：
- 学习Fluent Design的设计系统构建方法
- 参考Fluent Design的组件化设计思想
- 借鉴Fluent Design的Design Token体系
- 采用Fluent Design的响应式设计策略
- 遵循Fluent Design的可访问性标准

#### 风格复刻
✅ **建议做法**：
- 创建自己的品牌色彩体系
- 设计自己的组件规范
- 建立自己的Design Token系统
- 制定自己的交互设计原则
- 开发自己的动效规范

#### 法律合规
✅ **建议做法**：
- 确保所有设计元素都是原创
- 避免直接复制Fluent Design的代码
- 不要使用Fluent Design的品牌标识
- 尊重Fluent Design的知识产权
- 遵守开源协议的要求

#### 最佳实践
✅ **建议做法**：
- 学习Fluent Design的设计思想和方法
- 理解Fluent Design的设计原则和价值观
- 借鉴Fluent Design的组件化设计思路
- 参考Fluent Design的Design Token体系
- 建立自己的设计系统和规范

---

## 附录：完整 Design Token 参考

### CSS Variables 完整定义
```css
:root {
  /* Primary Colors */
  --fluent-color-primary: #0078D4;
  --fluent-color-primary-hover: #106EBE;
  --fluent-color-primary-active: #005A9E;
  --fluent-color-primary-bg: #F3F9FD;
  --fluent-color-primary-border: #8AABCD;

  /* Success Colors */
  --fluent-color-success: #107C10;
  --fluent-color-success-hover: #0B5A0B;
  --fluent-color-success-active: #083D08;
  --fluent-color-success-bg: #DFF6DD;
  --fluent-color-success-border: #8BCF8C;

  /* Warning Colors */
  --fluent-color-warning: #797775;
  --fluent-color-warning-hover: #605E5C;
  --fluent-color-warning-active: #484644;
  --fluent-color-warning-bg: #FDE7E9;
  --fluent-color-warning-border: #F2B8B5;

  /* Error Colors */
  --fluent-color-error: #A80000;
  --fluent-color-error-hover: #8A0000;
  --fluent-color-error-active: #6B0000;
  --fluent-color-error-bg: #FDE7E9;
  --fluent-color-error-border: #F2B8B5;

  /* Info Colors */
  --fluent-color-info: #0078D4;
  --fluent-color-info-hover: #106EBE;
  --fluent-color-info-active: #005A9E;
  --fluent-color-info-bg: #F3F9FD;
  --fluent-color-info-border: #8AABCD;

  /* Text Colors */
  --fluent-color-text-primary: #201F1E;
  --fluent-color-text-secondary: #605E5C;
  --fluent-color-text-tertiary: #A19F9D;
  --fluent-color-text-disabled: #BDBBBB;

  /* Background Colors */
  --fluent-color-bg-base: #FFFFFF;
  --fluent-color-bg-layout: #F3F2F1;
  --fluent-color-bg-container: #FFFFFF;
  --fluent-color-bg-elevated: #FFFFFF;
  --fluent-color-bg-spotlight: #201F1E;
  --fluent-color-bg-text-hover: #F3F2F1;
  --fluent-color-bg-mask: rgba(32, 31, 30, 0.4);

  /* Border Colors */
  --fluent-color-border: #8A8886;
  --fluent-color-border-secondary: #E1DFDD;

  /* Spacing */
  --fluent-spacing-unit: 4px;
  --fluent-spacing-0: 0px;
  --fluent-spacing-1: 4px;
  --fluent-spacing-2: 8px;
  --fluent-spacing-3: 12px;
  --fluent-spacing-4: 16px;
  --fluent-spacing-5: 20px;
  --fluent-spacing-6: 24px;
  --fluent-spacing-7: 28px;
  --fluent-spacing-8: 32px;
  --fluent-spacing-9: 36px;
  --fluent-spacing-10: 40px;
  --fluent-spacing-11: 44px;
  --fluent-spacing-12: 48px;

  /* Border Radius */
  --fluent-border-radius: 4px;

  /* Shadow */
  --fluent-shadow-4: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132),
    0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);
  --fluent-shadow-8: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132),
    0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
  --fluent-shadow-16: 0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132),
    0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108);
  --fluent-shadow-28: 0 12.8px 28.8px 0 rgba(0, 0, 0, 0.132),
    0 2.4px 7.2px 0 rgba(0, 0, 0, 0.108);

  /* Font Family */
  --fluent-font-family: 'Segoe UI', 'Segoe UI Web (West European)', -apple-system,
    BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;

  /* Font Size */
  --fluent-font-size-hero: 68px;
  --fluent-font-size-heading-1: 46px;
  --fluent-font-size-heading-2: 34px;
  --fluent-font-size-heading-3: 28px;
  --fluent-font-size-heading-4: 24px;
  --fluent-font-size-heading-5: 20px;
  --fluent-font-size-heading-6: 18px;
  --fluent-font-size-base: 14px;
  --fluent-font-size-large: 16px;
  --fluent-font-size-medium: 14px;
  --fluent-font-size-small: 12px;
  --fluent-font-size-code: 14px;
  --fluent-font-size-label: 14px;

  /* Line Height */
  --fluent-line-height-hero: 92px;
  --fluent-line-height-heading-1: 56px;
  --fluent-line-height-heading-2: 44px;
  --fluent-line-height-heading-3: 36px;
  --fluent-line-height-heading-4: 32px;
  --fluent-line-height-heading-5: 28px;
  --fluent-line-height-heading-6: 24px;
  --fluent-line-height-base: 20px;
  --fluent-line-height-large: 22px;
  --fluent-line-height-medium: 20px;
  --fluent-line-height-small: 16px;
  --fluent-line-height-code: 20px;
  --fluent-line-height-label: 20px;

  /* Font Weight */
  --fluent-font-weight-regular: 400;
  --fluent-font-weight-semibold: 600;
  --fluent-font-weight-bold: 700;

  /* Easing Functions */
  --fluent-motion-standard: cubic-bezier(0.33, 1, 0.68, 1);
  --fluent-motion-enter: cubic-bezier(0, 0, 0.33, 1);
  --fluent-motion-exit: cubic-bezier(0.33, 1, 0.68, 1);

  /* Duration */
  --fluent-duration-fast: 0.1s;
  --fluent-duration-base: 0.2s;
  --fluent-duration-slow: 0.3s;
  --fluent-duration-slower: 0.5s;

  /* Screen Breakpoints */
  --fluent-screen-xs: 320px;
  --fluent-screen-sm: 640px;
  --fluent-screen-md: 1024px;
  --fluent-screen-lg: 1366px;
  --fluent-screen-xl: 1920px;

  /* Grid */
  --fluent-grid-columns: 12;
  --fluent-grid-gutter-xs: 8px;
  --fluent-grid-gutter-sm: 12px;
  --fluent-grid-gutter-md: 16px;
  --fluent-grid-gutter-lg: 24px;
  --fluent-grid-gutter-xl: 32px;
  --fluent-grid-margin: 24px;

  /* Icon Size */
  --fluent-icon-size-8: 8px;
  --fluent-icon-size-10: 10px;
  --fluent-icon-size-12: 12px;
  --fluent-icon-size-16: 16px;
  --fluent-icon-size-20: 20px;
  --fluent-icon-size-24: 24px;
  --fluent-icon-size-32: 32px;
  --fluent-icon-size-48: 48px;
}
```

---

## 结语

本设计系统文档基于Fluent Design的设计规范进行了全面的重新优化，涵盖了设计风格总览、颜色系统、字体与排版、布局与栅格系统、核心UI组件规范、图标与插画风格、交互与动效原则、可复用Design Token以及合法复刻建议等9个核心部分。

该设计系统旨在为跨设备、跨平台的应用提供一致、自然、沉浸式的设计语言，帮助设计师和开发者快速构建高质量的用户界面。通过使用本设计系统，可以确保产品在视觉和交互上的一致性，提升用户体验，降低开发和维护成本。

请注意，本设计系统仅作为学习参考，实际使用时应根据自身品牌和产品需求进行调整和定制，确保符合法律法规和知识产权要求。