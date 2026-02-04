# Ant Design 设计系统

## 1. 设计风格总览（Design DNA）

### 风格关键词
- **企业级**：面向复杂业务场景的企业级应用设计语言
- **一致性**：跨产品、跨平台保持统一的视觉语言和交互模式
- **确定性**：提供可预测的用户体验，降低学习成本
- **可扩展性**：组件化设计，支持灵活组合和扩展

### 适用产品类型
- **企业级SaaS产品**：CRM、ERP、OA系统等
- **管理后台**：数据管理、内容管理系统
- **B2B应用**：复杂业务流程应用
- **数据可视化平台**：报表、仪表盘类应用

### 设计价值观
- **用户优先**：以用户需求为中心，提供流畅体验
- **确定性**：清晰的信息架构和交互反馈
- **自然**：符合用户心理模型，降低认知负担
- **有意义**：每个设计元素都有明确的目的和意义
- **生长**：可持续演进的设计系统

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
```css
:root {
  /* 品牌蓝 */
  --ant-color-primary: #1890FF;
  --ant-color-primary-hover: #40A9FF;
  --ant-color-primary-active: #096DD9;
  --ant-color-primary-bg: #E6F7FF;
  --ant-color-primary-border: #91D5FF;

  /* 功能蓝 */
  --ant-color-primary-light: #69C0FF;
  --ant-color-primary-lighter: #BAE7FF;
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
  --ant-color-success: #52C41A;
  --ant-color-success-hover: #73D13D;
  --ant-color-success-active: #389E0D;
  --ant-color-success-bg: #F6FFED;
  --ant-color-success-border: #B7EB8F;

  /* 警告色 */
  --ant-color-warning: #FAAD14;
  --ant-color-warning-hover: #FFEC3D;
  --ant-color-warning-active: #D48806;
  --ant-color-warning-bg: #FFFBE6;
  --ant-color-warning-border: #FFE58F;

  /* 错误色 */
  --ant-color-error: #F5222D;
  --ant-color-error-hover: #FF4D4F;
  --ant-color-error-active: #CF1322;
  --ant-color-error-bg: #FFF1F0;
  --ant-color-error-border: #FFA39E;

  /* 信息色 */
  --ant-color-info: #1890FF;
  --ant-color-info-hover: #40A9FF;
  --ant-color-info-active: #096DD9;
  --ant-color-info-bg: #E6F7FF;
  --ant-color-info-border: #91D5FF;
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
  --ant-color-text-primary: rgba(0, 0, 0, 0.85);
  --ant-color-text-secondary: rgba(0, 0, 0, 0.65);
  --ant-color-text-tertiary: rgba(0, 0, 0, 0.45);
  --ant-color-text-quaternary: rgba(0, 0, 0, 0.25);
  --ant-color-text-disabled: rgba(0, 0, 0, 0.25);

  /* 背景颜色 */
  --ant-color-bg-base: #FFFFFF;
  --ant-color-bg-layout: #F0F2F5;
  --ant-color-bg-container: #FFFFFF;
  --ant-color-bg-elevated: #FFFFFF;
  --ant-color-bg-spotlight: rgba(0, 0, 0, 0.85);
  --ant-color-bg-text-hover: rgba(0, 0, 0, 0.06);
  --ant-color-bg-mask: rgba(0, 0, 0, 0.45);

  /* 边框颜色 */
  --ant-color-border: #D9D9D9;
  --ant-color-border-secondary: #F0F0F0;
}

/* 暗色模式 */
[data-theme='dark'] {
  --ant-color-text-primary: rgba(255, 255, 255, 0.85);
  --ant-color-text-secondary: rgba(255, 255, 255, 0.65);
  --ant-color-text-tertiary: rgba(255, 255, 255, 0.45);
  --ant-color-text-quaternary: rgba(255, 255, 255, 0.25);
  --ant-color-text-disabled: rgba(255, 255, 255, 0.25);

  --ant-color-bg-base: #141414;
  --ant-color-bg-layout: #000000;
  --ant-color-bg-container: #1F1F1F;
  --ant-color-bg-elevated: #262626;
  --ant-color-bg-spotlight: rgba(255, 255, 255, 0.85);
  --ant-color-bg-text-hover: rgba(255, 255, 255, 0.08);
  --ant-color-bg-mask: rgba(0, 0, 0, 0.45);

  --ant-color-border: #434343;
  --ant-color-border-secondary: #303030;
}
```

**使用场景**：
- 文字颜色：主要文字、次要文字、辅助文字、禁用文字
- 背景颜色：基础背景、布局背景、容器背景、遮罩层
- 边框颜色：常规边框、分割线

### Design Token 命名建议
```css
/* 颜色 Token 命名规范 */
--ant-{category}-{variant}-{state}

/* 示例 */
--ant-color-primary-hover
--ant-color-success-bg
--ant-color-text-secondary
--ant-color-bg-container
```

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
:root {
  /* 系统字体栈 */
  --ant-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';

  /* 代码字体 */
  --ant-font-family-code: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
    Courier, monospace;
}
```

### 字号层级（Font Size Scale）
```css
:root {
  /* 标题字号 */
  --ant-font-size-heading-1: 38px;
  --ant-font-size-heading-2: 30px;
  --ant-font-size-heading-3: 24px;
  --ant-font-size-heading-4: 20px;
  --ant-font-size-heading-5: 16px;

  /* 正文字号 */
  --ant-font-size-base: 14px;
  --ant-font-size-lg: 16px;
  --ant-font-size-sm: 12px;
  --ant-font-size-xs: 10px;
}
```

**使用场景**：
- Heading 1：页面主标题
- Heading 2：章节标题
- Heading 3：子章节标题
- Heading 4：卡片标题
- Heading 5：小组件标题
- Base：正文内容
- LG：重要正文
- SM：辅助文字
- XS：标签、徽章

### 行高（Line Height）
```css
:root {
  --ant-line-height-heading-1: 1.23;
  --ant-line-height-heading-2: 1.35;
  --ant-line-height-heading-3: 1.35;
  --ant-line-height-heading-4: 1.4;
  --ant-line-height-heading-5: 1.5;
  --ant-line-height-base: 1.5715;
  --ant-line-height-lg: 1.5;
  --ant-line-height-sm: 1.6667;
}
```

### 字重（Font Weight）
```css
:root {
  --ant-font-weight-light: 300;
  --ant-font-weight-normal: 400;
  --ant-font-weight-medium: 500;
  --ant-font-weight-semibold: 600;
  --ant-font-weight-bold: 700;
}
```

**使用场景**：
- Light：装饰性文字
- Normal：正文内容
- Medium：强调文字
- Semibold：重要标题
- Bold：主标题、关键信息

### 排版规则
```css
:root {
  /* 字间距 */
  --ant-character-spacing-base: 0;
  --ant-character-spacing-wide: 0.05em;

  /* 段落间距 */
  --ant-margin-bottom-base: 1em;
  --ant-margin-bottom-lg: 1.5em;

  /* 标题间距 */
  --ant-heading-margin-bottom: 0.5em;
}
```

### 响应式排版
```css
/* 移动端 */
@media (max-width: 575px) {
  :root {
    --ant-font-size-heading-1: 30px;
    --ant-font-size-heading-2: 24px;
    --ant-font-size-heading-3: 20px;
    --ant-font-size-base: 13px;
  }
}

/* 平板端 */
@media (min-width: 576px) and (max-width: 767px) {
  :root {
    --ant-font-size-heading-1: 34px;
    --ant-font-size-heading-2: 28px;
    --ant-font-size-heading-3: 22px;
    --ant-font-size-base: 14px;
  }
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心（Container Width）
```css
:root {
  /* 版心宽度 */
  --ant-screen-xs: 480px;
  --ant-screen-sm: 576px;
  --ant-screen-md: 768px;
  --ant-screen-lg: 992px;
  --ant-screen-xl: 1200px;
  --ant-screen-xxl: 1600px;

  /* 内容最大宽度 */
  --ant-content-max-width: 1200px;
}
```

### 栅格系统（Grid System）
```css
:root {
  /* 栅格列数 */
  --ant-grid-columns: 24;

  /* 栅格间距 */
  --ant-grid-gutter-xs: 8px;
  --ant-grid-gutter-sm: 12px;
  --ant-grid-gutter-md: 16px;
  --ant-grid-gutter-lg: 24px;
  --ant-grid-gutter-xl: 32px;
  --ant-grid-gutter-xxl: 48px;

  /* 栅格边距 */
  --ant-grid-margin: 24px;
}
```

**栅格使用规则**：
- 24列栅格系统，支持灵活的列组合
- 响应式断点：xs（<576px）、sm（≥576px）、md（≥768px）、lg（≥992px）、xl（≥1200px）、xxl（≥1600px）
- 栅格间距：xs（8px）、sm（12px）、md（16px）、lg（24px）、xl（32px）、xxl（48px）

### 间距系统（Spacing System）
```css
:root {
  /* 间距单位 */
  --ant-space-unit: 8px;

  /* 间距层级 */
  --ant-space-1: 8px;
  --ant-space-2: 12px;
  --ant-space-3: 16px;
  --ant-space-4: 20px;
  --ant-space-5: 24px;
  --ant-space-6: 28px;
  --ant-space-7: 32px;
  --ant-space-8: 36px;
  --ant-space-9: 40px;
  --ant-space-10: 48px;
}
```

**使用场景**：
- Space 1-3：组件内部间距、小元素间距
- Space 4-6：常规元素间距、模块间距
- Space 7-9：大模块间距、章节间距
- Space 10：页面级间距、主要分区间距

### 留白密度（White Space Density）
```css
:root {
  /* 紧凑模式 */
  --ant-padding-compact: 8px;

  /* 默认模式 */
  --ant-padding-default: 16px;

  /* 宽松模式 */
  --ant-padding-loose: 24px;
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
.ant-btn-primary {
  background: var(--ant-color-primary);
  border-color: var(--ant-color-primary);
  color: #FFFFFF;
}

/* 次按钮 */
.ant-btn-default {
  background: var(--ant-color-bg-container);
  border-color: var(--ant-color-border);
  color: var(--ant-color-text-primary);
}

/* 虚线按钮 */
.ant-btn-dashed {
  background: var(--ant-color-bg-container);
  border-color: var(--ant-color-border);
  border-style: dashed;
  color: var(--ant-color-text-primary);
}

/* 文字按钮 */
.ant-btn-link {
  background: transparent;
  border-color: transparent;
  color: var(--ant-color-primary);
}
```

#### 组件尺寸
```css
/* 小号按钮 */
.ant-btn-sm {
  height: 24px;
  padding: 0 7px;
  font-size: var(--ant-font-size-sm);
  border-radius: 2px;
}

/* 中号按钮（默认） */
.ant-btn {
  height: 32px;
  padding: 4px 15px;
  font-size: var(--ant-font-size-base);
  border-radius: 2px;
}

/* 大号按钮 */
.ant-btn-lg {
  height: 40px;
  padding: 6.4px 15px;
  font-size: var(--ant-font-size-lg);
  border-radius: 2px;
}
```

#### 组件状态
```css
/* 悬停状态 */
.ant-btn:hover {
  background: var(--ant-color-primary-hover);
  border-color: var(--ant-color-primary-hover);
}

/* 激活状态 */
.ant-btn:active {
  background: var(--ant-color-primary-active);
  border-color: var(--ant-color-primary-active);
}

/* 禁用状态 */
.ant-btn[disabled] {
  background: var(--ant-color-text-disabled);
  border-color: var(--ant-color-text-disabled);
  color: var(--ant-color-text-disabled);
  cursor: not-allowed;
}

/* 加载状态 */
.ant-btn-loading {
  position: relative;
  pointer-events: none;
}
```

#### 组件圆角
```css
:root {
  --ant-border-radius-base: 2px;
  --ant-border-radius-sm: 2px;
  --ant-border-radius-lg: 2px;
}
```

### Card（卡片）

#### 组件概述
- 组件名称：卡片（Card）
- 组件描述：内容容器组件，用于分组展示信息
- 适用场景：信息展示、数据展示、内容分组

#### 组件样式
```css
.ant-card {
  background: var(--ant-color-bg-container);
  border: 1px solid var(--ant-color-border-secondary);
  border-radius: var(--ant-border-radius-base);
  padding: 24px;
}

.ant-card-head {
  border-bottom: 1px solid var(--ant-color-border-secondary);
  padding: 16px 24px;
  font-size: var(--ant-font-size-lg);
  font-weight: var(--ant-font-weight-medium);
}

.ant-card-body {
  padding: 24px;
}
```

#### 组件阴影
```css
:root {
  --ant-shadow-1: 0 1px 2px -2px rgba(0, 0, 0, 0.16),
    0 3px 6px 0 rgba(0, 0, 0, 0.12),
    0 5px 12px 4px rgba(0, 0, 0, 0.09);
  --ant-shadow-2: 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
  --ant-shadow-3: 0 9px 28px 8px rgba(0, 0, 0, 0.15),
    0 6px 16px 0 rgba(0, 0, 0, 0.12),
    0 3px 6px -4px rgba(0, 0, 0, 0.2);
}
```

### Input（输入框）

#### 组件概述
- 组件名称：输入框（Input）
- 组件描述：文本输入组件，用于用户输入
- 适用场景：表单输入、搜索框、文本编辑

#### 组件样式
```css
.ant-input {
  background: var(--ant-color-bg-container);
  border: 1px solid var(--ant-color-border);
  border-radius: var(--ant-border-radius-base);
  padding: 4px 11px;
  font-size: var(--ant-font-size-base);
  color: var(--ant-color-text-primary);
  line-height: 1.5715;
}

.ant-input:hover {
  border-color: var(--ant-color-primary-hover);
}

.ant-input:focus {
  border-color: var(--ant-color-primary-hover);
  box-shadow: 0 0 0 2px var(--ant-color-primary-bg);
}

.ant-input[disabled] {
  background: var(--ant-color-text-disabled);
  border-color: var(--ant-color-border);
  color: var(--ant-color-text-disabled);
  cursor: not-allowed;
}
```

#### 组件尺寸
```css
/* 小号输入框 */
.ant-input-sm {
  height: 24px;
  padding: 0 7px;
  font-size: var(--ant-font-size-sm);
}

/* 中号输入框（默认） */
.ant-input {
  height: 32px;
  padding: 4px 11px;
  font-size: var(--ant-font-size-base);
}

/* 大号输入框 */
.ant-input-lg {
  height: 40px;
  padding: 6.4px 11px;
  font-size: var(--ant-font-size-lg);
}
```

### Form（表单）

#### 组件概述
- 组件名称：表单（Form）
- 组件描述：表单容器组件，用于组织表单元素
- 适用场景：数据录入、用户注册、设置配置

#### 组件样式
```css
.ant-form-item {
  margin-bottom: 24px;
}

.ant-form-item-label {
  padding: 0 0 8px;
  color: var(--ant-color-text-primary);
  font-size: var(--ant-font-size-base);
  line-height: 1.5715;
}

.ant-form-item-required::before {
  display: inline-block;
  margin-right: 4px;
  color: var(--ant-color-error);
  font-size: var(--ant-font-size-base);
  font-family: SimSun, sans-serif;
  line-height: 1;
  content: '*';
}

.ant-form-item-explain-error {
  color: var(--ant-color-error);
  font-size: var(--ant-font-size-sm);
  line-height: 1.5715;
  margin-top: 4px;
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
.ant-menu-item {
  padding: 0 16px;
  height: 40px;
  line-height: 40px;
  color: var(--ant-color-text-primary);
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

.ant-menu-item:hover {
  color: var(--ant-color-primary);
}

.ant-menu-item-selected {
  background: var(--ant-color-primary-bg);
  color: var(--ant-color-primary);
}

/* 面包屑 */
.ant-breadcrumb {
  color: var(--ant-color-text-secondary);
  font-size: var(--ant-font-size-base);
}

.ant-breadcrumb a {
  color: var(--ant-color-text-secondary);
  transition: color 0.3s;
}

.ant-breadcrumb a:hover {
  color: var(--ant-color-primary);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格（Icon Style）

#### 图标类型
```css
/* 线性图标 */
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
}

/* 填充图标 */
.anticon-filled {
  /* 使用填充风格的图标 */
}

/* 双色图标 */
.anticon-two-tone {
  /* 使用双色风格的图标 */
}
```

#### 图标尺寸
```css
:root {
  --ant-icon-size-xs: 12px;
  --ant-icon-size-sm: 14px;
  --ant-icon-size-base: 16px;
  --ant-icon-size-lg: 18px;
  --ant-icon-size-xl: 24px;
}
```

**使用场景**：
- XS：按钮内小图标
- SM：文字前缀图标
- Base：常规图标
- LG：重要操作图标
- XL：展示型图标

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
- 使用Ant Design的调色板
- 保持2px的描边宽度
- 使用圆角连接（2px）
- 避免过度装饰
- 保持简洁明了

---

## 7. 交互与动效原则（Interaction & Motion）

### 交互行为（Interaction Behavior）

#### Hover（悬停状态）
```css
/* 按钮悬停 */
.ant-btn:hover {
  background: var(--ant-color-primary-hover);
  border-color: var(--ant-color-primary-hover);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

/* 输入框悬停 */
.ant-input:hover {
  border-color: var(--ant-color-primary-hover);
  transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
```

#### Active（激活状态）
```css
/* 按钮激活 */
.ant-btn:active {
  background: var(--ant-color-primary-active);
  border-color: var(--ant-color-primary-active);
  transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
```

#### Focus（焦点状态）
```css
/* 输入框焦点 */
.ant-input:focus {
  border-color: var(--ant-color-primary-hover);
  box-shadow: 0 0 0 2px var(--ant-color-primary-bg);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

/* 按钮焦点 */
.ant-btn:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--ant-color-primary-bg);
}
```

### 动效节奏（Motion Timing）

#### 缓动函数（Easing Functions）
```css
:root {
  /* 标准缓动 */
  --ant-ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);

  /* 进入缓动 */
  --ant-ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);

  /* 离开缓动 */
  --ant-ease-in: cubic-bezier(0.55, 0.055, 0.675, 0.19);

  /* 弹性缓动 */
  --ant-ease-out-back: cubic-bezier(0.215, 0.61, 0.355, 1);
}
```

#### 动效时长（Motion Duration）
```css
:root {
  /* 快速动效 */
  --ant-duration-fast: 0.1s;

  /* 标准动效 */
  --ant-duration-base: 0.2s;

  /* 慢速动效 */
  --ant-duration-slow: 0.3s;

  /* 极慢动效 */
  --ant-duration-slower: 0.5s;
}
```

### 操作反馈（Feedback）

#### 成功反馈
```css
/* 成功提示 */
.ant-message-success {
  background: var(--ant-color-success-bg);
  border: 1px solid var(--ant-color-success-border);
  color: var(--ant-color-success);
  padding: 10px 16px;
  border-radius: 2px;
  animation: antSlideUp 0.3s var(--ant-ease-out);
}
```

#### 错误反馈
```css
/* 错误提示 */
.ant-message-error {
  background: var(--ant-color-error-bg);
  border: 1px solid var(--ant-color-error-border);
  color: var(--ant-color-error);
  padding: 10px 16px;
  border-radius: 2px;
  animation: antSlideUp 0.3s var(--ant-ease-out);
}
```

#### 警告反馈
```css
/* 警告提示 */
.ant-message-warning {
  background: var(--ant-color-warning-bg);
  border: 1px solid var(--ant-color-warning-border);
  color: var(--ant-color-warning);
  padding: 10px 16px;
  border-radius: 2px;
  animation: antSlideUp 0.3s var(--ant-ease-out);
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
  --ant-color-primary: #1890FF;
  --ant-color-primary-hover: #40A9FF;
  --ant-color-primary-active: #096DD9;
  --ant-color-primary-bg: #E6F7FF;
  --ant-color-primary-border: #91D5FF;

  /* Success Colors */
  --ant-color-success: #52C41A;
  --ant-color-success-hover: #73D13D;
  --ant-color-success-active: #389E0D;
  --ant-color-success-bg: #F6FFED;
  --ant-color-success-border: #B7EB8F;

  /* Warning Colors */
  --ant-color-warning: #FAAD14;
  --ant-color-warning-hover: #FFEC3D;
  --ant-color-warning-active: #D48806;
  --ant-color-warning-bg: #FFFBE6;
  --ant-color-warning-border: #FFE58F;

  /* Error Colors */
  --ant-color-error: #F5222D;
  --ant-color-error-hover: #FF4D4F;
  --ant-color-error-active: #CF1322;
  --ant-color-error-bg: #FFF1F0;
  --ant-color-error-border: #FFA39E;

  /* Info Colors */
  --ant-color-info: #1890FF;
  --ant-color-info-hover: #40A9FF;
  --ant-color-info-active: #096DD9;
  --ant-color-info-bg: #E6F7FF;
  --ant-color-info-border: #91D5FF;

  /* Text Colors */
  --ant-color-text-primary: rgba(0, 0, 0, 0.85);
  --ant-color-text-secondary: rgba(0, 0, 0, 0.65);
  --ant-color-text-tertiary: rgba(0, 0, 0, 0.45);
  --ant-color-text-quaternary: rgba(0, 0, 0, 0.25);
  --ant-color-text-disabled: rgba(0, 0, 0, 0.25);

  /* Background Colors */
  --ant-color-bg-base: #FFFFFF;
  --ant-color-bg-layout: #F0F2F5;
  --ant-color-bg-container: #FFFFFF;
  --ant-color-bg-elevated: #FFFFFF;
  --ant-color-bg-spotlight: rgba(0, 0, 0, 0.85);
  --ant-color-bg-text-hover: rgba(0, 0, 0, 0.06);
  --ant-color-bg-mask: rgba(0, 0, 0, 0.45);

  /* Border Colors */
  --ant-color-border: #D9D9D9;
  --ant-color-border-secondary: #F0F0F0;
}
```

### Spacing Tokens
```css
:root {
  --ant-space-unit: 8px;
  --ant-space-1: 8px;
  --ant-space-2: 12px;
  --ant-space-3: 16px;
  --ant-space-4: 20px;
  --ant-space-5: 24px;
  --ant-space-6: 28px;
  --ant-space-7: 32px;
  --ant-space-8: 36px;
  --ant-space-9: 40px;
  --ant-space-10: 48px;
}
```

### Radius Tokens
```css
:root {
  --ant-border-radius-base: 2px;
  --ant-border-radius-sm: 2px;
  --ant-border-radius-lg: 2px;
}
```

### Shadow Tokens
```css
:root {
  --ant-shadow-1: 0 1px 2px -2px rgba(0, 0, 0, 0.16),
    0 3px 6px 0 rgba(0, 0, 0, 0.12),
    0 5px 12px 4px rgba(0, 0, 0, 0.09);
  --ant-shadow-2: 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
  --ant-shadow-3: 0 9px 28px 8px rgba(0, 0, 0, 0.15),
    0 6px 16px 0 rgba(0, 0, 0, 0.12),
    0 3px 6px -4px rgba(0, 0, 0, 0.2);
}
```

### Typography Tokens
```css
:root {
  /* Font Family */
  --ant-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';

  /* Font Size */
  --ant-font-size-heading-1: 38px;
  --ant-font-size-heading-2: 30px;
  --ant-font-size-heading-3: 24px;
  --ant-font-size-heading-4: 20px;
  --ant-font-size-heading-5: 16px;
  --ant-font-size-base: 14px;
  --ant-font-size-lg: 16px;
  --ant-font-size-sm: 12px;
  --ant-font-size-xs: 10px;

  /* Line Height */
  --ant-line-height-heading-1: 1.23;
  --ant-line-height-heading-2: 1.35;
  --ant-line-height-heading-3: 1.35;
  --ant-line-height-heading-4: 1.4;
  --ant-line-height-heading-5: 1.5;
  --ant-line-height-base: 1.5715;
  --ant-line-height-lg: 1.5;
  --ant-line-height-sm: 1.6667;

  /* Font Weight */
  --ant-font-weight-light: 300;
  --ant-font-weight-normal: 400;
  --ant-font-weight-medium: 500;
  --ant-font-weight-semibold: 600;
  --ant-font-weight-bold: 700;
}
```

### Motion Tokens
```css
:root {
  /* Easing Functions */
  --ant-ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
  --ant-ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ant-ease-in: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  --ant-ease-out-back: cubic-bezier(0.215, 0.61, 0.355, 1);

  /* Duration */
  --ant-duration-fast: 0.1s;
  --ant-duration-base: 0.2s;
  --ant-duration-slow: 0.3s;
  --ant-duration-slower: 0.5s;
}
```

---

## 9. 合法复刻建议（Legal Replication Advice）

### 可学习的元素（Learnable Elements）

#### 设计原则
✅ **可以学习**：
- 确定性设计原则：提供可预测的用户体验
- 一致性设计原则：跨产品保持统一的视觉语言
- 组件化设计思想：可复用、可组合的组件系统
- 响应式设计方法：多端适配的设计策略
- 可访问性标准：WCAG 2.1 AA级合规

#### 颜色系统
✅ **可以学习**：
- 主色、辅助色、中性色的色彩体系
- 功能色的使用场景和语义化
- 暗色模式的色彩适配方案
- 色彩对比度的可访问性要求
- Design Token的命名规范

#### 字体系统
✅ **可以学习**：
- 字号层级的设计方法
- 行高、字重的使用规则
- 系统字体栈的构建方式
- 响应式排版的实现策略
- 排版节奏的建立方法

#### 布局系统
✅ **可以学习**：
- 24列栅格系统的设计思路
- 响应式断点的设置策略
- 间距系统的建立方法
- 信息密度的控制原则
- 版心宽度的确定方法

#### 组件规范
✅ **可以学习**：
- 组件变体的设计方法
- 组件状态的交互设计
- 组件尺寸的规范制定
- 组件圆角的统一原则
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
- Ant Design的品牌标识和Logo
- Ant Design的品牌色彩（#1890FF）
- Ant Design的品牌字体和排版
- Ant Design的品牌插画和图标
- Ant Design的品牌名称和口号

#### 具体内容
❌ **不应复刻**：
- Ant Design的具体组件代码
- Ant Design的具体文案内容
- Ant Design的具体插画作品
- Ant Design的具体图标设计
- Ant Design的具体页面布局

#### 知识产权
❌ **不应复刻**：
- Ant Design的版权材料
- Ant Design的专利技术
- Ant Design的商标和标识
- Ant Design的商业素材
- Ant Design的专有设计

### 合法复刻建议

#### 设计系统构建
✅ **建议做法**：
- 学习Ant Design的设计系统构建方法
- 参考Ant Design的组件化设计思想
- 借鉴Ant Design的Design Token体系
- 采用Ant Design的响应式设计策略
- 遵循Ant Design的可访问性标准

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
- 避免直接复制Ant Design的代码
- 不要使用Ant Design的品牌标识
- 尊重Ant Design的知识产权
- 遵守开源协议的要求

#### 最佳实践
✅ **建议做法**：
- 学习Ant Design的设计思想和方法
- 理解Ant Design的设计原则和价值观
- 借鉴Ant Design的组件化设计思路
- 参考Ant Design的Design Token体系
- 建立自己的设计系统和规范

---

## 附录：完整 Design Token 参考

### CSS Variables 完整定义
```css
:root {
  /* Primary Colors */
  --ant-color-primary: #1890FF;
  --ant-color-primary-hover: #40A9FF;
  --ant-color-primary-active: #096DD9;
  --ant-color-primary-bg: #E6F7FF;
  --ant-color-primary-border: #91D5FF;
  --ant-color-primary-light: #69C0FF;
  --ant-color-primary-lighter: #BAE7FF;

  /* Success Colors */
  --ant-color-success: #52C41A;
  --ant-color-success-hover: #73D13D;
  --ant-color-success-active: #389E0D;
  --ant-color-success-bg: #F6FFED;
  --ant-color-success-border: #B7EB8F;

  /* Warning Colors */
  --ant-color-warning: #FAAD14;
  --ant-color-warning-hover: #FFEC3D;
  --ant-color-warning-active: #D48806;
  --ant-color-warning-bg: #FFFBE6;
  --ant-color-warning-border: #FFE58F;

  /* Error Colors */
  --ant-color-error: #F5222D;
  --ant-color-error-hover: #FF4D4F;
  --ant-color-error-active: #CF1322;
  --ant-color-error-bg: #FFF1F0;
  --ant-color-error-border: #FFA39E;

  /* Info Colors */
  --ant-color-info: #1890FF;
  --ant-color-info-hover: #40A9FF;
  --ant-color-info-active: #096DD9;
  --ant-color-info-bg: #E6F7FF;
  --ant-color-info-border: #91D5FF;

  /* Text Colors */
  --ant-color-text-primary: rgba(0, 0, 0, 0.85);
  --ant-color-text-secondary: rgba(0, 0, 0, 0.65);
  --ant-color-text-tertiary: rgba(0, 0, 0, 0.45);
  --ant-color-text-quaternary: rgba(0, 0, 0, 0.25);
  --ant-color-text-disabled: rgba(0, 0, 0, 0.25);

  /* Background Colors */
  --ant-color-bg-base: #FFFFFF;
  --ant-color-bg-layout: #F0F2F5;
  --ant-color-bg-container: #FFFFFF;
  --ant-color-bg-elevated: #FFFFFF;
  --ant-color-bg-spotlight: rgba(0, 0, 0, 0.85);
  --ant-color-bg-text-hover: rgba(0, 0, 0, 0.06);
  --ant-color-bg-mask: rgba(0, 0, 0, 0.45);

  /* Border Colors */
  --ant-color-border: #D9D9D9;
  --ant-color-border-secondary: #F0F0F0;

  /* Spacing */
  --ant-space-unit: 8px;
  --ant-space-1: 8px;
  --ant-space-2: 12px;
  --ant-space-3: 16px;
  --ant-space-4: 20px;
  --ant-space-5: 24px;
  --ant-space-6: 28px;
  --ant-space-7: 32px;
  --ant-space-8: 36px;
  --ant-space-9: 40px;
  --ant-space-10: 48px;

  /* Border Radius */
  --ant-border-radius-base: 2px;
  --ant-border-radius-sm: 2px;
  --ant-border-radius-lg: 2px;

  /* Shadow */
  --ant-shadow-1: 0 1px 2px -2px rgba(0, 0, 0, 0.16),
    0 3px 6px 0 rgba(0, 0, 0, 0.12),
    0 5px 12px 4px rgba(0, 0, 0, 0.09);
  --ant-shadow-2: 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
  --ant-shadow-3: 0 9px 28px 8px rgba(0, 0, 0, 0.15),
    0 6px 16px 0 rgba(0, 0, 0, 0.12),
    0 3px 6px -4px rgba(0, 0, 0, 0.2);

  /* Font Family */
  --ant-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';

  /* Font Size */
  --ant-font-size-heading-1: 38px;
  --ant-font-size-heading-2: 30px;
  --ant-font-size-heading-3: 24px;
  --ant-font-size-heading-4: 20px;
  --ant-font-size-heading-5: 16px;
  --ant-font-size-base: 14px;
  --ant-font-size-lg: 16px;
  --ant-font-size-sm: 12px;
  --ant-font-size-xs: 10px;

  /* Line Height */
  --ant-line-height-heading-1: 1.23;
  --ant-line-height-heading-2: 1.35;
  --ant-line-height-heading-3: 1.35;
  --ant-line-height-heading-4: 1.4;
  --ant-line-height-heading-5: 1.5;
  --ant-line-height-base: 1.5715;
  --ant-line-height-lg: 1.5;
  --ant-line-height-sm: 1.6667;

  /* Font Weight */
  --ant-font-weight-light: 300;
  --ant-font-weight-normal: 400;
  --ant-font-weight-medium: 500;
  --ant-font-weight-semibold: 600;
  --ant-font-weight-bold: 700;

  /* Easing Functions */
  --ant-ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
  --ant-ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ant-ease-in: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  --ant-ease-out-back: cubic-bezier(0.215, 0.61, 0.355, 1);

  /* Duration */
  --ant-duration-fast: 0.1s;
  --ant-duration-base: 0.2s;
  --ant-duration-slow: 0.3s;
  --ant-duration-slower: 0.5s;

  /* Screen Breakpoints */
  --ant-screen-xs: 480px;
  --ant-screen-sm: 576px;
  --ant-screen-md: 768px;
  --ant-screen-lg: 992px;
  --ant-screen-xl: 1200px;
  --ant-screen-xxl: 1600px;

  /* Grid */
  --ant-grid-columns: 24;
  --ant-grid-gutter-xs: 8px;
  --ant-grid-gutter-sm: 12px;
  --ant-grid-gutter-md: 16px;
  --ant-grid-gutter-lg: 24px;
  --ant-grid-gutter-xl: 32px;
  --ant-grid-gutter-xxl: 48px;
  --ant-grid-margin: 24px;

  /* Icon Size */
  --ant-icon-size-xs: 12px;
  --ant-icon-size-sm: 14px;
  --ant-icon-size-base: 16px;
  --ant-icon-size-lg: 18px;
  --ant-icon-size-xl: 24px;
}
```

---

## 结语

本设计系统文档基于Ant Design的设计规范进行了全面的重新优化，涵盖了设计风格总览、颜色系统、字体与排版、布局与栅格系统、核心UI组件规范、图标与插画风格、交互与动效原则、可复用Design Token以及合法复刻建议等9个核心部分。

该设计系统旨在为企业级SaaS产品提供一致、可预测、可扩展的设计语言，帮助设计师和开发者快速构建高质量的用户界面。通过使用本设计系统，可以确保产品在视觉和交互上的一致性，提升用户体验，降低开发和维护成本。

请注意，本设计系统仅作为学习参考，实际使用时应根据自身品牌和产品需求进行调整和定制，确保符合法律法规和知识产权要求。