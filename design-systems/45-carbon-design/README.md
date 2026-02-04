# Carbon Design 设计系统

## 1. 设计风格总览（Design DNA）

### 风格关键词
- **企业级**：面向复杂业务场景的企业级应用设计语言
- **一致性**：跨产品、跨平台保持统一的视觉语言和交互模式
- **可访问性**：优先考虑可访问性，遵循WCAG 2.1 AA标准
- **可扩展性**：组件化设计，支持灵活组合和扩展

### 适用产品类型
- **企业级SaaS产品**：CRM、ERP、OA系统等
- **管理后台**：数据管理、内容管理系统
- **B2B应用**：复杂业务流程应用
- **数据可视化平台**：报表、仪表盘类应用

### 设计价值观
- **用户优先**：以用户需求为中心，提供流畅体验
- **一致性**：清晰的信息架构和交互反馈
- **可访问性**：确保所有用户都能使用产品
- **有意义**：每个设计元素都有明确的目的和意义
- **开放**：开放的设计系统，促进知识共享

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
```css
:root {
  /* 品牌蓝 */
  --cds-color-primary: #0F62FE;
  --cds-color-primary-hover: #0353E9;
  --cds-color-primary-active: #002D9C;
  --cds-color-primary-bg: #E5F0FF;
  --cds-color-primary-border: #8AB6FF;

  /* 功能蓝 */
  --cds-color-primary-light: #4589FF;
  --cds-color-primary-lighter: #A6C8FF;
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
  --cds-color-success: #24A148;
  --cds-color-success-hover: #1E8E3D;
  --cds-color-success-active: #157326;
  --cds-color-success-bg: #DEFBE6;
  --cds-color-success-border: #6FDC8C;

  /* 警告色 */
  --cds-color-warning: #F1C21B;
  --cds-color-warning-hover: #D4A017;
  --cds-color-warning-active: #B58B0D;
  --cds-color-warning-bg: #FDE68A;
  --cds-color-warning-border: #FDD870;

  /* 错误色 */
  --cds-color-error: #DA1E28;
  --cds-color-error-hover: #C61C25;
  --cds-color-error-active: #A21920;
  --cds-color-error-bg: #FFD7D9;
  --cds-color-error-border: #FF8389;

  /* 信息色 */
  --cds-color-info: #0F62FE;
  --cds-color-info-hover: #0353E9;
  --cds-color-info-active: #002D9C;
  --cds-color-info-bg: #E5F0FF;
  --cds-color-info-border: #8AB6FF;
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
  --cds-color-text-primary: #161616;
  --cds-color-text-secondary: #525252;
  --cds-color-text-tertiary: #A8A8A8;
  --cds-color-text-disabled: #C6C6C6;

  /* 背景颜色 */
  --cds-color-bg-base: #FFFFFF;
  --cds-color-bg-layout: #F4F4F4;
  --cds-color-bg-container: #FFFFFF;
  --cds-color-bg-elevated: #FFFFFF;
  --cds-color-bg-spotlight: #161616;
  --cds-color-bg-text-hover: #E0E0E0;
  --cds-color-bg-mask: rgba(22, 22, 22, 0.5);

  /* 边框颜色 */
  --cds-color-border: #8D8D8D;
  --cds-color-border-secondary: #E0E0E0;
}

/* 暗色模式 */
[data-theme='dark'] {
  --cds-color-text-primary: #FFFFFF;
  --cds-color-text-secondary: #C6C6C6;
  --cds-color-text-tertiary: #6F6F6F;
  --cds-color-text-disabled: #393939;

  --cds-color-bg-base: #161616;
  --cds-color-bg-layout: #262626;
  --cds-color-bg-container: #262626;
  --cds-color-bg-elevated: #353535;
  --cds-color-bg-spotlight: #FFFFFF;
  --cds-color-bg-text-hover: #353535;
  --cds-color-bg-mask: rgba(255, 255, 255, 0.5);

  --cds-color-border: #525252;
  --cds-color-border-secondary: #393939;
}
```

**使用场景**：
- 文字颜色：主要文字、次要文字、辅助文字、禁用文字
- 背景颜色：基础背景、布局背景、容器背景、遮罩层
- 边框颜色：常规边框、分割线

### Design Token 命名建议
```css
/* 颜色 Token 命名规范 */
--cds-{category}-{variant}-{state}

/* 示例 */
--cds-color-primary-hover
--cds-color-success-bg
--cds-color-text-secondary
--cds-color-bg-container
```

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
:root {
  /* 系统字体栈 */
  --cds-font-family: 'IBM Plex Sans', 'IBM Plex Sans Arabic', 'IBM Plex Sans Hebrew',
    'IBM Plex Sans Thai', 'IBM Plex Sans Devanagari', 'Helvetica Neue', Arial, sans-serif;

  /* 代码字体 */
  --cds-font-family-code: 'IBM Plex Mono', 'Menlo', 'Consolas', 'Monaco', monospace;

  /* 等宽字体 */
  --cds-font-family-mono: 'IBM Plex Mono', 'Menlo', 'Consolas', 'Monaco', monospace;
}
```

### 字号层级（Font Size Scale）
```css
:root {
  /* 标题字号 */
  --cds-font-size-heading-01: 42px;
  --cds-font-size-heading-02: 36px;
  --cds-font-size-heading-03: 30px;
  --cds-font-size-heading-04: 24px;
  --cds-font-size-heading-05: 20px;
  --cds-font-size-heading-06: 18px;
  --cds-font-size-heading-07: 16px;

  /* 正文字号 */
  --cds-font-size-body-01: 16px;
  --cds-font-size-body-02: 14px;
  --cds-font-size-body-03: 12px;
  --cds-font-size-body-04: 10px;

  /* 代码字号 */
  --cds-font-size-code-01: 14px;
  --cds-font-size-code-02: 12px;
  --cds-font-size-code-03: 10px;

  /* 标签字号 */
  --cds-font-size-label-01: 14px;
  --cds-font-size-label-02: 12px;
}
```

**使用场景**：
- Heading 01：页面主标题
- Heading 02：章节标题
- Heading 03：子章节标题
- Heading 04：卡片标题
- Heading 05：小组件标题
- Heading 06：副标题
- Heading 07：小标题
- Body 01：正文内容
- Body 02：次要正文
- Body 03：辅助文字
- Body 04：标签、徽章
- Code 01：代码块
- Code 02：行内代码
- Code 03：小号代码
- Label 01：表单标签
- Label 02：小号标签

### 行高（Line Height）
```css
:root {
  --cds-line-height-heading-01: 50px;
  --cds-line-height-heading-02: 42px;
  --cds-line-height-heading-03: 36px;
  --cds-line-height-heading-04: 30px;
  --cds-line-height-heading-05: 26px;
  --cds-line-height-heading-06: 24px;
  --cds-line-height-heading-07: 22px;
  --cds-line-height-body-01: 24px;
  --cds-line-height-body-02: 20px;
  --cds-line-height-body-03: 18px;
  --cds-line-height-body-04: 16px;
  --cds-line-height-code-01: 20px;
  --cds-line-height-code-02: 18px;
  --cds-line-height-code-03: 16px;
  --cds-line-height-label-01: 18px;
  --cds-line-height-label-02: 16px;
}
```

### 字重（Font Weight）
```css
:root {
  --cds-font-weight-light: 300;
  --cds-font-weight-regular: 400;
  --cds-font-weight-semibold: 600;
}
```

**使用场景**：
- Light：装饰性文字
- Regular：正文内容
- Semibold：重要标题、强调文字

### 排版规则
```css
:root {
  /* 字间距 */
  --cds-letter-spacing: 0px;

  /* 段落间距 */
  --cds-paragraph-spacing: 1rem;

  /* 标题间距 */
  --cds-heading-spacing: 0.5rem;
}
```

### 响应式排版
```css
/* 移动端 */
@media (max-width: 669px) {
  :root {
    --cds-font-size-heading-01: 36px;
    --cds-font-size-heading-02: 30px;
    --cds-font-size-heading-03: 24px;
    --cds-font-size-body-01: 14px;
  }
}

/* 平板端 */
@media (min-width: 670px) and (max-width: 1055px) {
  :root {
    --cds-font-size-heading-01: 40px;
    --cds-font-size-heading-02: 34px;
    --cds-font-size-heading-03: 28px;
    --cds-font-size-body-01: 15px;
  }
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心（Container Width）
```css
:root {
  /* 版心宽度 */
  --cds-screen-xs: 320px;
  --cds-screen-sm: 672px;
  --cds-screen-md: 1056px;
  --cds-screen-lg: 1312px;
  --cds-screen-xlg: 1584px;
  --cds-screen-max: 1920px;

  /* 内容最大宽度 */
  --cds-content-max-width: 1312px;
}
```

### 栅格系统（Grid System）
```css
:root {
  /* 栅格列数 */
  --cds-grid-columns: 16;

  /* 栅格间距 */
  --cds-grid-gutter-xs: 16px;
  --cds-grid-gutter-sm: 16px;
  --cds-grid-gutter-md: 16px;
  --cds-grid-gutter-lg: 16px;
  --cds-grid-gutter-xlg: 16px;
  --cds-grid-gutter-max: 16px;

  /* 栅格边距 */
  --cds-grid-margin: 32px;
}
```

**栅格使用规则**：
- 16列栅格系统，支持灵活的列组合
- 响应式断点：xs（<672px）、sm（≥672px）、md（≥1056px）、lg（≥1312px）、xlg（≥1584px）、max（≥1920px）
- 栅格间距：统一使用16px

### 间距系统（Spacing System）
```css
:root {
  /* 间距单位 */
  --cds-spacing-unit: 1px;

  /* 间距层级 */
  --cds-spacing-01: 1px;
  --cds-spacing-02: 2px;
  --cds-spacing-03: 4px;
  --cds-spacing-04: 6px;
  --cds-spacing-05: 8px;
  --cds-spacing-06: 10px;
  --cds-spacing-07: 12px;
  --cds-spacing-08: 16px;
  --cds-spacing-09: 20px;
  --cds-spacing-10: 24px;
  --cds-spacing-11: 32px;
  --cds-spacing-12: 40px;
  --cds-spacing-13: 48px;
  --cds-spacing-14: 64px;
  --cds-spacing-15: 80px;
  --cds-spacing-16: 96px;
}
```

**使用场景**：
- Spacing 01-03：细边框、分割线
- Spacing 04-06：小元素间距、图标与文字间距
- Spacing 07-09：常规元素间距、按钮内边距
- Spacing 10-12：卡片内边距、模块间距
- Spacing 13-14：大模块间距、章节间距
- Spacing 15-16：页面级间距、主要分区间距

### 留白密度（White Space Density）
```css
:root {
  /* 紧凑模式 */
  --cds-padding-compact: 8px;

  /* 默认模式 */
  --cds-padding-default: 16px;

  /* 宽松模式 */
  --cds-padding-loose: 24px;
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
.cds--btn--primary {
  background: var(--cds-color-primary);
  border-color: var(--cds-color-primary);
  color: #FFFFFF;
}

/* 次按钮 */
.cds--btn--secondary {
  background: var(--cds-color-bg-container);
  border-color: var(--cds-color-border);
  color: var(--cds-color-text-primary);
}

/* 危险按钮 */
.cds--btn--danger {
  background: var(--cds-color-error);
  border-color: var(--cds-color-error);
  color: #FFFFFF;
}

/* 幽灵按钮 */
.cds--btn--ghost {
  background: transparent;
  border-color: var(--cds-color-border);
  color: var(--cds-color-text-primary);
}

/* 文字按钮 */
.cds--btn--ghost.cds--btn--tertiary {
  background: transparent;
  border-color: transparent;
  color: var(--cds-color-primary);
}
```

#### 组件尺寸
```css
/* 小号按钮 */
.cds--btn--sm {
  height: 32px;
  padding: 0 16px;
  font-size: var(--cds-font-size-body-03);
}

/* 中号按钮（默认） */
.cds--btn--md {
  height: 40px;
  padding: 0 16px;
  font-size: var(--cds-font-size-body-02);
}

/* 大号按钮 */
.cds--btn--lg {
  height: 48px;
  padding: 0 16px;
  font-size: var(--cds-font-size-body-01);
}

/* 特大号按钮 */
.cds--btn--xl {
  height: 48px;
  padding: 0 16px;
  font-size: var(--cds-font-size-body-01);
}
```

#### 组件状态
```css
/* 悬停状态 */
.cds--btn:hover {
  background: var(--cds-color-primary-hover);
  border-color: var(--cds-color-primary-hover);
}

/* 激活状态 */
.cds--btn:active {
  background: var(--cds-color-primary-active);
  border-color: var(--cds-color-primary-active);
}

/* 禁用状态 */
.cds--btn:disabled {
  background: var(--cds-color-text-disabled);
  border-color: var(--cds-color-text-disabled);
  color: var(--cds-color-text-disabled);
  cursor: not-allowed;
}

/* 加载状态 */
.cds--btn--loading {
  position: relative;
  pointer-events: none;
}
```

#### 组件圆角
```css
:root {
  --cds-border-radius: 0px;
}
```

### Card（卡片）

#### 组件概述
- 组件名称：卡片（Card）
- 组件描述：内容容器组件，用于分组展示信息
- 适用场景：信息展示、数据展示、内容分组

#### 组件样式
```css
.cds--tile {
  background: var(--cds-color-bg-container);
  border: 1px solid var(--cds-color-border-secondary);
  border-radius: var(--cds-border-radius);
  padding: var(--cds-spacing-10);
}

.cds--tile--clickable:hover {
  background: var(--cds-color-bg-text-hover);
  cursor: pointer;
}
```

#### 组件阴影
```css
:root {
  --cds-shadow-01: 0 1px 2px rgba(0, 0, 0, 0.12);
  --cds-shadow-02: 0 2px 6px rgba(0, 0, 0, 0.12);
  --cds-shadow-03: 0 4px 12px rgba(0, 0, 0, 0.12);
}
```

### Input（输入框）

#### 组件概述
- 组件名称：输入框（Input）
- 组件描述：文本输入组件，用于用户输入
- 适用场景：表单输入、搜索框、文本编辑

#### 组件样式
```css
.cds--text-input {
  background: var(--cds-color-bg-container);
  border: 1px solid var(--cds-color-border);
  border-radius: var(--cds-border-radius);
  padding: var(--cds-spacing-05) var(--cds-spacing-07);
  font-size: var(--cds-font-size-body-02);
  color: var(--cds-color-text-primary);
  line-height: var(--cds-line-height-body-02);
}

.cds--text-input:hover {
  border-color: var(--cds-color-border);
}

.cds--text-input:focus {
  border-color: var(--cds-color-primary);
  outline: 2px solid var(--cds-color-primary-bg);
  outline-offset: -2px;
}

.cds--text-input:disabled {
  background: var(--cds-color-bg-text-hover);
  border-color: var(--cds-color-border-secondary);
  color: var(--cds-color-text-disabled);
  cursor: not-allowed;
}
```

#### 组件尺寸
```css
/* 小号输入框 */
.cds--text-input--sm {
  height: 32px;
  padding: var(--cds-spacing-04) var(--cds-spacing-06);
  font-size: var(--cds-font-size-body-03);
}

/* 中号输入框（默认） */
.cds--text-input--md {
  height: 40px;
  padding: var(--cds-spacing-05) var(--cds-spacing-07);
  font-size: var(--cds-font-size-body-02);
}

/* 大号输入框 */
.cds--text-input--lg {
  height: 48px;
  padding: var(--cds-spacing-06) var(--cds-spacing-08);
  font-size: var(--cds-font-size-body-01);
}
```

### Form（表单）

#### 组件概述
- 组件名称：表单（Form）
- 组件描述：表单容器组件，用于组织表单元素
- 适用场景：数据录入、用户注册、设置配置

#### 组件样式
```css
.cds--form-item {
  margin-bottom: var(--cds-spacing-10);
}

.cds--label {
  display: block;
  margin-bottom: var(--cds-spacing-04);
  color: var(--cds-color-text-primary);
  font-size: var(--cds-font-size-label-01);
  font-weight: var(--cds-font-weight-regular);
  line-height: var(--cds-line-height-label-01);
}

.cds--label--required::after {
  content: '*';
  margin-left: var(--cds-spacing-02);
  color: var(--cds-color-error);
}

.cds--form-requirement {
  display: block;
  margin-top: var(--cds-spacing-04);
  color: var(--cds-color-error);
  font-size: var(--cds-font-size-body-03);
  line-height: var(--cds-line-height-body-03);
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
.cds--side-nav__link {
  display: flex;
  align-items: center;
  padding: var(--cds-spacing-07) var(--cds-spacing-08);
  color: var(--cds-color-text-primary);
  font-size: var(--cds-font-size-body-02);
  line-height: var(--cds-line-height-body-02);
  text-decoration: none;
  transition: background-color 70ms cubic-bezier(0, 0, 0.38, 0.9);
}

.cds--side-nav__link:hover {
  background-color: var(--cds-color-bg-text-hover);
}

.cds--side-nav__link--current {
  background-color: var(--cds-color-primary-bg);
  color: var(--cds-color-primary);
}

/* 面包屑 */
.cds--breadcrumb {
  display: flex;
  align-items: center;
  color: var(--cds-color-text-secondary);
  font-size: var(--cds-font-size-body-02);
  line-height: var(--cds-line-height-body-02);
}

.cds--breadcrumb-item a {
  color: var(--cds-color-primary);
  text-decoration: none;
  transition: color 70ms cubic-bezier(0, 0, 0.38, 0.9);
}

.cds--breadcrumb-item a:hover {
  color: var(--cds-color-primary-hover);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格（Icon Style）

#### 图标类型
```css
/* 线性图标 */
.cds--icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: currentColor;
  vertical-align: middle;
}

/* 填充图标 */
.cds--icon--filled {
  /* 使用填充风格的图标 */
}

/* 描边图标 */
.cds--icon--outline {
  /* 使用描边风格的图标 */
}
```

#### 图标尺寸
```css
:root {
  --cds-icon-size-01: 16px;
  --cds-icon-size-02: 20px;
  --cds-icon-size-03: 24px;
  --cds-icon-size-04: 32px;
  --cds-icon-size-05: 48px;
  --cds-icon-size-06: 64px;
}
```

**使用场景**：
- Size 01：按钮内小图标
- Size 02：文字前缀图标
- Size 03：常规图标
- Size 04：重要操作图标
- Size 05：展示型图标
- Size 06：大型展示图标

### 插画风格（Illustration Style）

#### 插画原则
- **简洁性**：使用简洁的线条和形状
- **一致性**：保持统一的视觉风格
- **功能性**：插画服务于功能，不装饰
- **可扩展性**：支持不同尺寸和场景

#### 插画使用场景
- **空状态**：无数据、无结果
- **错误状态**：操作失败、系统错误
- **引导状态**：首次使用、功能介绍
- **庆祝状态**：操作成功、任务完成

#### 插画设计原则
- 使用Carbon Design的调色板
- 保持2px的描边宽度
- 使用直角连接（0px）
- 避免过度装饰
- 保持简洁明了

---

## 7. 交互与动效原则（Interaction & Motion）

### 交互行为（Interaction Behavior）

#### Hover（悬停状态）
```css
/* 按钮悬停 */
.cds--btn:hover {
  background: var(--cds-color-primary-hover);
  border-color: var(--cds-color-primary-hover);
  transition: background-color 70ms cubic-bezier(0, 0, 0.38, 0.9);
}

/* 输入框悬停 */
.cds--text-input:hover {
  border-color: var(--cds-color-border);
  transition: border-color 70ms cubic-bezier(0, 0, 0.38, 0.9);
}
```

#### Active（激活状态）
```css
/* 按钮激活 */
.cds--btn:active {
  background: var(--cds-color-primary-active);
  border-color: var(--cds-color-primary-active);
  transition: background-color 70ms cubic-bezier(0, 0, 0.38, 0.9);
}
```

#### Focus（焦点状态）
```css
/* 输入框焦点 */
.cds--text-input:focus {
  border-color: var(--cds-color-primary);
  outline: 2px solid var(--cds-color-primary-bg);
  outline-offset: -2px;
  transition: border-color 70ms cubic-bezier(0, 0, 0.38, 0.9);
}

/* 按钮焦点 */
.cds--btn:focus {
  outline: 2px solid var(--cds-color-primary);
  outline-offset: -2px;
}
```

### 动效节奏（Motion Timing）

#### 缓动函数（Easing Functions）
```css
:root {
  /* 标准缓动 */
  --cds-motion-standard: cubic-bezier(0.2, 0, 0.38, 0.9);

  /* 进入缓动 */
  --cds-motion-enter: cubic-bezier(0, 0, 0.38, 0.9);

  /* 离开缓动 */
  --cds-motion-exit: cubic-bezier(0.2, 0, 1, 0.9);
}
```

#### 动效时长（Motion Duration）
```css
:root {
  /* 快速动效 */
  --cds-duration-fast: 70ms;

  /* 标准动效 */
  --cds-duration-base: 150ms;

  /* 慢速动效 */
  --cds-duration-slow: 240ms;

  /* 极慢动效 */
  --cds-duration-slower: 500ms;
}
```

### 操作反馈（Feedback）

#### 成功反馈
```css
/* 成功提示 */
.cds--toast--success {
  background: var(--cds-color-success-bg);
  border: 1px solid var(--cds-color-success-border);
  color: var(--cds-color-success);
  padding: var(--cds-spacing-07) var(--cds-spacing-08);
  animation: cdsSlideUp 150ms var(--cds-motion-enter);
}
```

#### 错误反馈
```css
/* 错误提示 */
.cds--toast--error {
  background: var(--cds-color-error-bg);
  border: 1px solid var(--cds-color-error-border);
  color: var(--cds-color-error);
  padding: var(--cds-spacing-07) var(--cds-spacing-08);
  animation: cdsSlideUp 150ms var(--cds-motion-enter);
}
```

#### 警告反馈
```css
/* 警告提示 */
.cds--toast--warning {
  background: var(--cds-color-warning-bg);
  border: 1px solid var(--cds-color-warning-border);
  color: var(--cds-color-warning);
  padding: var(--cds-spacing-07) var(--cds-spacing-08);
  animation: cdsSlideUp 150ms var(--cds-motion-enter);
}
```

### 动效原则（Motion Principles）
- **功能性**：动效服务于功能，不装饰
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
  --cds-color-primary: #0F62FE;
  --cds-color-primary-hover: #0353E9;
  --cds-color-primary-active: #002D9C;
  --cds-color-primary-bg: #E5F0FF;
  --cds-color-primary-border: #8AB6FF;

  /* Success Colors */
  --cds-color-success: #24A148;
  --cds-color-success-hover: #1E8E3D;
  --cds-color-success-active: #157326;
  --cds-color-success-bg: #DEFBE6;
  --cds-color-success-border: #6FDC8C;

  /* Warning Colors */
  --cds-color-warning: #F1C21B;
  --cds-color-warning-hover: #D4A017;
  --cds-color-warning-active: #B58B0D;
  --cds-color-warning-bg: #FDE68A;
  --cds-color-warning-border: #FDD870;

  /* Error Colors */
  --cds-color-error: #DA1E28;
  --cds-color-error-hover: #C61C25;
  --cds-color-error-active: #A21920;
  --cds-color-error-bg: #FFD7D9;
  --cds-color-error-border: #FF8389;

  /* Info Colors */
  --cds-color-info: #0F62FE;
  --cds-color-info-hover: #0353E9;
  --cds-color-info-active: #002D9C;
  --cds-color-info-bg: #E5F0FF;
  --cds-color-info-border: #8AB6FF;

  /* Text Colors */
  --cds-color-text-primary: #161616;
  --cds-color-text-secondary: #525252;
  --cds-color-text-tertiary: #A8A8A8;
  --cds-color-text-disabled: #C6C6C6;

  /* Background Colors */
  --cds-color-bg-base: #FFFFFF;
  --cds-color-bg-layout: #F4F4F4;
  --cds-color-bg-container: #FFFFFF;
  --cds-color-bg-elevated: #FFFFFF;
  --cds-color-bg-spotlight: #161616;
  --cds-color-bg-text-hover: #E0E0E0;
  --cds-color-bg-mask: rgba(22, 22, 22, 0.5);

  /* Border Colors */
  --cds-color-border: #8D8D8D;
  --cds-color-border-secondary: #E0E0E0;
}
```

### Spacing Tokens
```css
:root {
  --cds-spacing-unit: 1px;
  --cds-spacing-01: 1px;
  --cds-spacing-02: 2px;
  --cds-spacing-03: 4px;
  --cds-spacing-04: 6px;
  --cds-spacing-05: 8px;
  --cds-spacing-06: 10px;
  --cds-spacing-07: 12px;
  --cds-spacing-08: 16px;
  --cds-spacing-09: 20px;
  --cds-spacing-10: 24px;
  --cds-spacing-11: 32px;
  --cds-spacing-12: 40px;
  --cds-spacing-13: 48px;
  --cds-spacing-14: 64px;
  --cds-spacing-15: 80px;
  --cds-spacing-16: 96px;
}
```

### Radius Tokens
```css
:root {
  --cds-border-radius: 0px;
}
```

### Shadow Tokens
```css
:root {
  --cds-shadow-01: 0 1px 2px rgba(0, 0, 0, 0.12);
  --cds-shadow-02: 0 2px 6px rgba(0, 0, 0, 0.12);
  --cds-shadow-03: 0 4px 12px rgba(0, 0, 0, 0.12);
}
```

### Typography Tokens
```css
:root {
  /* Font Family */
  --cds-font-family: 'IBM Plex Sans', 'IBM Plex Sans Arabic', 'IBM Plex Sans Hebrew',
    'IBM Plex Sans Thai', 'IBM Plex Sans Devanagari', 'Helvetica Neue', Arial, sans-serif;

  /* Font Size */
  --cds-font-size-heading-01: 42px;
  --cds-font-size-heading-02: 36px;
  --cds-font-size-heading-03: 30px;
  --cds-font-size-heading-04: 24px;
  --cds-font-size-heading-05: 20px;
  --cds-font-size-heading-06: 18px;
  --cds-font-size-heading-07: 16px;
  --cds-font-size-body-01: 16px;
  --cds-font-size-body-02: 14px;
  --cds-font-size-body-03: 12px;
  --cds-font-size-body-04: 10px;
  --cds-font-size-code-01: 14px;
  --cds-font-size-code-02: 12px;
  --cds-font-size-code-03: 10px;
  --cds-font-size-label-01: 14px;
  --cds-font-size-label-02: 12px;

  /* Line Height */
  --cds-line-height-heading-01: 50px;
  --cds-line-height-heading-02: 42px;
  --cds-line-height-heading-03: 36px;
  --cds-line-height-heading-04: 30px;
  --cds-line-height-heading-05: 26px;
  --cds-line-height-heading-06: 24px;
  --cds-line-height-heading-07: 22px;
  --cds-line-height-body-01: 24px;
  --cds-line-height-body-02: 20px;
  --cds-line-height-body-03: 18px;
  --cds-line-height-body-04: 16px;
  --cds-line-height-code-01: 20px;
  --cds-line-height-code-02: 18px;
  --cds-line-height-code-03: 16px;
  --cds-line-height-label-01: 18px;
  --cds-line-height-label-02: 16px;

  /* Font Weight */
  --cds-font-weight-light: 300;
  --cds-font-weight-regular: 400;
  --cds-font-weight-semibold: 600;
}
```

### Motion Tokens
```css
:root {
  /* Easing Functions */
  --cds-motion-standard: cubic-bezier(0.2, 0, 0.38, 0.9);
  --cds-motion-enter: cubic-bezier(0, 0, 0.38, 0.9);
  --cds-motion-exit: cubic-bezier(0.2, 0, 1, 0.9);

  /* Duration */
  --cds-duration-fast: 70ms;
  --cds-duration-base: 150ms;
  --cds-duration-slow: 240ms;
  --cds-duration-slower: 500ms;
}
```

---

## 9. 合法复刻建议（Legal Replication Advice）

### 可学习的元素（Learnable Elements）

#### 设计原则
✅ **可以学习**：
- 可访问性优先原则：WCAG 2.1 AA级合规
- 一致性设计原则：跨产品保持统一的视觉语言
- 组件化设计思想：可复用、可组合的组件系统
- 响应式设计方法：多端适配的设计策略
- 开放式设计系统：促进知识共享和协作

#### 颜色系统
✅ **可以学习**：
- 主色、辅助色、中性色的色彩体系
- 功能色的使用场景和语义化
- 暗色模式的色彩适配方案
- 色彩对比度的可访问性要求
- Design Token的命名规范

#### 字体系统
✅ **可以学习**：
- IBM Plex Sans字体家族的使用
- 字号层级的设计方法
- 行高、字重的使用规则
- 系统字体栈的构建方式
- 响应式排版的实现策略

#### 布局系统
✅ **可以学习**：
- 16列栅格系统的设计思路
- 响应式断点的设置策略
- 间距系统的建立方法
- 信息密度的控制原则
- 版心宽度的确定方法

#### 组件规范
✅ **可以学习**：
- 组件变体的设计方法
- 组件状态的交互设计
- 组件尺寸的规范制定
- 组件圆角的统一原则（0px直角）
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
- Carbon Design的品牌标识和Logo
- Carbon Design的品牌色彩（#0F62FE）
- Carbon Design的品牌字体（IBM Plex Sans）
- Carbon Design的品牌插画和图标
- Carbon Design的品牌名称和口号

#### 具体内容
❌ **不应复刻**：
- Carbon Design的具体组件代码
- Carbon Design的具体文案内容
- Carbon Design的具体插画作品
- Carbon Design的具体图标设计
- Carbon Design的具体页面布局

#### 知识产权
❌ **不应复刻**：
- Carbon Design的版权材料
- Carbon Design的专利技术
- Carbon Design的商标和标识
- Carbon Design的商业素材
- Carbon Design的专有设计

### 合法复刻建议

#### 设计系统构建
✅ **建议做法**：
- 学习Carbon Design的设计系统构建方法
- 参考Carbon Design的组件化设计思想
- 借鉴Carbon Design的Design Token体系
- 采用Carbon Design的响应式设计策略
- 遵循Carbon Design的可访问性标准

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
- 避免直接复制Carbon Design的代码
- 不要使用Carbon Design的品牌标识
- 尊重Carbon Design的知识产权
- 遵守开源协议的要求

#### 最佳实践
✅ **建议做法**：
- 学习Carbon Design的设计思想和方法
- 理解Carbon Design的设计原则和价值观
- 借鉴Carbon Design的组件化设计思路
- 参考Carbon Design的Design Token体系
- 建立自己的设计系统和规范

---

## 附录：完整 Design Token 参考

### CSS Variables 完整定义
```css
:root {
  /* Primary Colors */
  --cds-color-primary: #0F62FE;
  --cds-color-primary-hover: #0353E9;
  --cds-color-primary-active: #002D9C;
  --cds-color-primary-bg: #E5F0FF;
  --cds-color-primary-border: #8AB6FF;

  /* Success Colors */
  --cds-color-success: #24A148;
  --cds-color-success-hover: #1E8E3D;
  --cds-color-success-active: #157326;
  --cds-color-success-bg: #DEFBE6;
  --cds-color-success-border: #6FDC8C;

  /* Warning Colors */
  --cds-color-warning: #F1C21B;
  --cds-color-warning-hover: #D4A017;
  --cds-color-warning-active: #B58B0D;
  --cds-color-warning-bg: #FDE68A;
  --cds-color-warning-border: #FDD870;

  /* Error Colors */
  --cds-color-error: #DA1E28;
  --cds-color-error-hover: #C61C25;
  --cds-color-error-active: #A21920;
  --cds-color-error-bg: #FFD7D9;
  --cds-color-error-border: #FF8389;

  /* Info Colors */
  --cds-color-info: #0F62FE;
  --cds-color-info-hover: #0353E9;
  --cds-color-info-active: #002D9C;
  --cds-color-info-bg: #E5F0FF;
  --cds-color-info-border: #8AB6FF;

  /* Text Colors */
  --cds-color-text-primary: #161616;
  --cds-color-text-secondary: #525252;
  --cds-color-text-tertiary: #A8A8A8;
  --cds-color-text-disabled: #C6C6C6;

  /* Background Colors */
  --cds-color-bg-base: #FFFFFF;
  --cds-color-bg-layout: #F4F4F4;
  --cds-color-bg-container: #FFFFFF;
  --cds-color-bg-elevated: #FFFFFF;
  --cds-color-bg-spotlight: #161616;
  --cds-color-bg-text-hover: #E0E0E0;
  --cds-color-bg-mask: rgba(22, 22, 22, 0.5);

  /* Border Colors */
  --cds-color-border: #8D8D8D;
  --cds-color-border-secondary: #E0E0E0;

  /* Spacing */
  --cds-spacing-unit: 1px;
  --cds-spacing-01: 1px;
  --cds-spacing-02: 2px;
  --cds-spacing-03: 4px;
  --cds-spacing-04: 6px;
  --cds-spacing-05: 8px;
  --cds-spacing-06: 10px;
  --cds-spacing-07: 12px;
  --cds-spacing-08: 16px;
  --cds-spacing-09: 20px;
  --cds-spacing-10: 24px;
  --cds-spacing-11: 32px;
  --cds-spacing-12: 40px;
  --cds-spacing-13: 48px;
  --cds-spacing-14: 64px;
  --cds-spacing-15: 80px;
  --cds-spacing-16: 96px;

  /* Border Radius */
  --cds-border-radius: 0px;

  /* Shadow */
  --cds-shadow-01: 0 1px 2px rgba(0, 0, 0, 0.12);
  --cds-shadow-02: 0 2px 6px rgba(0, 0, 0, 0.12);
  --cds-shadow-03: 0 4px 12px rgba(0, 0, 0, 0.12);

  /* Font Family */
  --cds-font-family: 'IBM Plex Sans', 'IBM Plex Sans Arabic', 'IBM Plex Sans Hebrew',
    'IBM Plex Sans Thai', 'IBM Plex Sans Devanagari', 'Helvetica Neue', Arial, sans-serif;

  /* Font Size */
  --cds-font-size-heading-01: 42px;
  --cds-font-size-heading-02: 36px;
  --cds-font-size-heading-03: 30px;
  --cds-font-size-heading-04: 24px;
  --cds-font-size-heading-05: 20px;
  --cds-font-size-heading-06: 18px;
  --cds-font-size-heading-07: 16px;
  --cds-font-size-body-01: 16px;
  --cds-font-size-body-02: 14px;
  --cds-font-size-body-03: 12px;
  --cds-font-size-body-04: 10px;
  --cds-font-size-code-01: 14px;
  --cds-font-size-code-02: 12px;
  --cds-font-size-code-03: 10px;
  --cds-font-size-label-01: 14px;
  --cds-font-size-label-02: 12px;

  /* Line Height */
  --cds-line-height-heading-01: 50px;
  --cds-line-height-heading-02: 42px;
  --cds-line-height-heading-03: 36px;
  --cds-line-height-heading-04: 30px;
  --cds-line-height-heading-05: 26px;
  --cds-line-height-heading-06: 24px;
  --cds-line-height-heading-07: 22px;
  --cds-line-height-body-01: 24px;
  --cds-line-height-body-02: 20px;
  --cds-line-height-body-03: 18px;
  --cds-line-height-body-04: 16px;
  --cds-line-height-code-01: 20px;
  --cds-line-height-code-02: 18px;
  --cds-line-height-code-03: 16px;
  --cds-line-height-label-01: 18px;
  --cds-line-height-label-02: 16px;

  /* Font Weight */
  --cds-font-weight-light: 300;
  --cds-font-weight-regular: 400;
  --cds-font-weight-semibold: 600;

  /* Easing Functions */
  --cds-motion-standard: cubic-bezier(0.2, 0, 0.38, 0.9);
  --cds-motion-enter: cubic-bezier(0, 0, 0.38, 0.9);
  --cds-motion-exit: cubic-bezier(0.2, 0, 1, 0.9);

  /* Duration */
  --cds-duration-fast: 70ms;
  --cds-duration-base: 150ms;
  --cds-duration-slow: 240ms;
  --cds-duration-slower: 500ms;

  /* Screen Breakpoints */
  --cds-screen-xs: 320px;
  --cds-screen-sm: 672px;
  --cds-screen-md: 1056px;
  --cds-screen-lg: 1312px;
  --cds-screen-xlg: 1584px;
  --cds-screen-max: 1920px;

  /* Grid */
  --cds-grid-columns: 16;
  --cds-grid-gutter-xs: 16px;
  --cds-grid-gutter-sm: 16px;
  --cds-grid-gutter-md: 16px;
  --cds-grid-gutter-lg: 16px;
  --cds-grid-gutter-xlg: 16px;
  --cds-grid-gutter-max: 16px;
  --cds-grid-margin: 32px;

  /* Icon Size */
  --cds-icon-size-01: 16px;
  --cds-icon-size-02: 20px;
  --cds-icon-size-03: 24px;
  --cds-icon-size-04: 32px;
  --cds-icon-size-05: 48px;
  --cds-icon-size-06: 64px;
}
```

---

## 结语

本设计系统文档基于Carbon Design的设计规范进行了全面的重新优化，涵盖了设计风格总览、颜色系统、字体与排版、布局与栅格系统、核心UI组件规范、图标与插画风格、交互与动效原则、可复用Design Token以及合法复刻建议等9个核心部分。

该设计系统旨在为企业级SaaS产品提供一致、可预测、可扩展的设计语言，帮助设计师和开发者快速构建高质量的用户界面。通过使用本设计系统，可以确保产品在视觉和交互上的一致性，提升用户体验，降低开发和维护成本。

请注意，本设计系统仅作为学习参考，实际使用时应根据自身品牌和产品需求进行调整和定制，确保符合法律法规和知识产权要求。