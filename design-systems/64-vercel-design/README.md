# Vercel Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **极简主义**：极致简洁的设计语言
- **开发者友好**：面向开发者平台
- **高性能**：注重性能和速度
- **现代感**：现代、科技感的设计风格

### 适用产品类型
- **开发者工具**：开发者平台、工具链
- **云服务**：云服务、部署平台
- **技术文档**：技术文档、API文档
- **SaaS工具**：开发者SaaS产品

### 设计哲学
Vercel Design System强调极简主义和开发者友好，通过极致简洁的设计语言和高性能的交互体验，为开发者提供最佳的使用体验。设计风格偏向现代科技感，注重性能和速度，提供完整的组件库和设计规范。

---

## 2. 颜色系统（Color System）

### 主品牌色（Primary Colors）
```css
:root {
  /* 主品牌色 - 黑色 */
  --color-primary: #000000;
  --color-primary-hover: #111111;
  --color-primary-active: #222222;
  --color-primary-light: #333333;
  --color-primary-lighter: #666666;
  --color-primary-dark: #000000;
  --color-primary-darker: #000000;
}
```

**使用场景**：
- 主要操作按钮（提交、确认）
- 重要信息强调
- 导航激活状态
- 链接文字
- 品牌标识元素

### 辅助色板（Secondary Colors）
```css
:root {
  /* 辅助色 - 白色（背景/文字） */
  --color-white: #FFFFFF;
  --color-white-hover: #F5F5F5;
  --color-white-active: #E5E5E5;

  /* 辅助色 - 灰色（中性） */
  --color-gray-50: #FAFAFA;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #E5E5E5;
  --color-gray-300: #D4D4D4;
  --color-gray-400: #A3A3A3;
  --color-gray-500: #737373;
  --color-gray-600: #525252;
  --color-gray-700: #404040;
  --color-gray-800: #262626;
  --color-gray-900: #171717;
  --color-gray-950: #0A0A0A;

  /* 辅助色 - 蓝色（信息/链接） */
  --color-blue: #0070F3;
  --color-blue-hover: #0060D9;
  --color-blue-active: #0050BF;
  --color-blue-light: #E6F0FF;
  --color-blue-lighter: #CCE0FF;
  --color-blue-dark: #0058CC;
  --color-blue-darker: #0040A3;

  /* 辅助色 - 绿色（成功） */
  --color-green: #00DC82;
  --color-green-hover: #00C876;
  --color-green-active: #00B46A;
  --color-green-light: #E6FFF4;
  --color-green-lighter: #CCFFE9;
  --color-green-dark: #00C876;
  --color-green-darker: #00A860;

  /* 辅助色 - 红色（错误） */
  --color-red: #F92F2F;
  --color-red-hover: #E01E1E;
  --color-red-active: #C71010;
  --color-red-light: #FFE6E6;
  --color-red-lighter: #FFCCCC;
  --color-red-dark: #E01E1E;
  --color-red-darker: #C71010;

  /* 辅助色 - 黄色（警告） */
  --color-yellow: #F5A623;
  --color-yellow-hover: #E0951C;
  --color-yellow-active: #CB8415;
  --color-yellow-light: #FFF5E6;
  --color-yellow-lighter: #FFEACC;
  --color-yellow-dark: #E0951C;
  --color-yellow-darker: #CB8415;
}
```

**使用场景**：
- 白色：背景色、主要文字
- 灰色：次要文字、边框、分隔线
- 蓝色：链接、信息提示
- 绿色：成功状态、操作成功
- 红色：错误状态、操作失败
- 黄色：警告提示、注意事项

### 中性色系统（Neutral Colors）
```css
:root {
  /* 背景色 */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #FAFAFA;
  --color-bg-tertiary: #F5F5F5;
  --color-bg-elevated: #FFFFFF;
  --color-bg-overlay: rgba(0, 0, 0, 0.5);

  /* 文字色 */
  --color-text-primary: #000000;
  --color-text-regular: #171717;
  --color-text-secondary: #525252;
  --color-text-placeholder: #A3A3A3;
  --color-text-disabled: #A3A3A3;
  --color-text-inverse: #FFFFFF;

  /* 边框色 */
  --color-border-primary: #E5E5E5;
  --color-border-light: #F5F5F5;
  --color-border-lighter: #FAFAFA;
  --color-border-extra-light: #FFFFFF;
  --color-border-focus: #0070F3;
  --color-border-error: #F92F2F;
}
```

**使用场景**：
- 背景色：页面背景、卡片背景、悬浮状态
- 文字色：标题、正文、辅助文字、禁用状态
- 边框色：输入框边框、卡片边框、分隔线

### 语义色（Semantic Colors）
```css
:root {
  /* 信息色 */
  --color-info-semantic: #0070F3;
  --color-info-bg: #E6F0FF;
  --color-info-border: #CCE0FF;

  /* 成功色 */
  --color-success-semantic: #00DC82;
  --color-success-bg: #E6FFF4;
  --color-success-border: #CCFFE9;

  /* 警告色 */
  --color-warning-semantic: #F5A623;
  --color-warning-bg: #FFF5E6;
  --color-warning-border: #FFEACC;

  /* 错误色 */
  --color-danger-semantic: #F92F2F;
  --color-danger-bg: #FFE6E6;
  --color-danger-border: #FFCCCC;
}
```

**使用场景**：
- 信息色：提示信息、帮助文本
- 成功色：成功消息、操作成功反馈
- 警告色：警告提示、注意事项
- 错误色：错误消息、操作失败反馈

### Design Token 命名建议
- 颜色：`--color-{category}-{variant}-{state}`
- 示例：`--color-blue-hover`, `--color-text-regular`
- 使用语义化命名，避免直接使用颜色名称

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
:root {
  --font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-family-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
}
```

**字体选择理由**：
- 使用系统字体栈，确保最佳性能和可读性
- 跨平台一致性，避免字体加载问题
- 适合开发者平台，专业且现代

### 字号层级（Font Size Scale）
```css
:root {
  /* 标题层级 */
  --font-size-h1: 2.25rem;      /* 36px */
  --font-size-h2: 1.875rem;     /* 30px */
  --font-size-h3: 1.5rem;       /* 24px */
  --font-size-h4: 1.25rem;      /* 20px */
  --font-size-h5: 1.125rem;     /* 18px */
  --font-size-h6: 1rem;          /* 16px */

  /* 正文层级 */
  --font-size-body-large: 1.125rem;  /* 18px */
  --font-size-body: 1rem;             /* 16px */
  --font-size-body-small: 0.875rem;   /* 14px */
  --font-size-caption: 0.75rem;       /* 12px */
  --font-size-tiny: 0.625rem;         /* 10px */

  /* 代码层级 */
  --font-size-code: 0.875rem;        /* 14px */
}
```

**使用场景**：
- H1：页面主标题、仪表板标题
- H2：章节标题、卡片标题
- H3：子章节标题、表单标题
- H4：小标题、标签
- H5：辅助标题、说明文字
- H6：最小标题、元数据
- Body Large：重要正文、强调内容
- Body：常规正文、默认文字
- Body Small：次要正文、辅助说明
- Caption：图片说明、注释
- Tiny：版权信息、最小文字

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

**使用场景**：
- Light：大标题、装饰性文字
- Regular：正文、默认文字
- Medium：强调文字、重要信息
- Semibold：小标题、按钮文字
- Bold：主标题、重要强调

### 行高（Line Height）
```css
:root {
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.7;
  --line-height-loose: 2;
}
```

**使用场景**：
- Tight：标题、大号文字
- Normal：正文、默认文字
- Relaxed：长段落、说明文字
- Loose：代码块、特殊内容

### 字间距（Letter Spacing）
```css
:root {
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;
  --letter-spacing-wider: 0.05em;
  --letter-spacing-widest: 0.1em;
}
```

**使用场景**：
- Tight：大标题、紧凑布局
- Normal：正文、默认文字
- Wide：小标题、标签
- Wider：按钮文字、导航
- Widest：全大写文字、特殊强调

### 排版节奏（Typography Rhythm）
```css
:root {
  /* 垂直间距 */
  --spacing-paragraph: 1rem;      /* 16px */
  --spacing-section: 2rem;        /* 32px */
  --spacing-block: 3rem;          /* 48px */

  /* 标题间距 */
  --spacing-heading-after: 0.5rem;  /* 8px */
  --spacing-heading-before: 1.5rem; /* 24px */
}
```

**使用原则**：
- 保持一致的垂直间距
- 使用4px基准的间距系统
- 标题与内容之间保持适当间距
- 段落之间保持一致间距

### 响应式排版（Responsive Typography）
```css
@media (max-width: 640px) {
  :root {
    --font-size-h1: 1.75rem;     /* 28px */
    --font-size-h2: 1.5rem;      /* 24px */
    --font-size-h3: 1.25rem;    /* 20px */
    --font-size-body: 0.875rem;  /* 14px */
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  :root {
    --font-size-h1: 2rem;        /* 32px */
    --font-size-h2: 1.75rem;     /* 28px */
    --font-size-h3: 1.375rem;   /* 22px */
    --font-size-body: 0.9375rem; /* 15px */
  }
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心（Container Width）
```css
:root {
  --container-max-width: 1200px;
  --container-padding: 1.5rem;     /* 24px */
  --container-margin: 0 auto;
}
```

**使用场景**：
- 主要内容区域
- 仪表板容器
- 表单页面

### 栅格系统（Grid System）
```css
:root {
  /* 栅格列数 */
  --grid-columns: 12;

  /* 栅格间距 */
  --grid-gutter: 1.5rem;         /* 24px */
  --grid-gutter-sm: 1rem;       /* 16px */
  --grid-gutter-lg: 2rem;       /* 32px */

  /* 栅格边距 */
  --grid-margin: 1.5rem;        /* 24px */
}
```

**使用场景**：
- 仪表板布局
- 数据表格
- 表单布局
- 卡片网格

### 响应式断点（Breakpoints）
```css
:root {
  --breakpoint-xs: 0;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

**断点策略**：
- 移动优先（Mobile First）
- 从小屏幕开始设计，逐步增强
- 主要断点：640px、768px、1024px、1280px

### 留白密度（Whitespace Density）
```css
:root {
  /* 紧密布局 */
  --spacing-dense: 0.5rem;       /* 8px */

  /* 常规布局 */
  --spacing-normal: 1rem;       /* 16px */

  /* 宽松布局 */
  --spacing-relaxed: 1.5rem;    /* 24px */

  /* 宽大布局 */
  --spacing-spacious: 2rem;      /* 32px */
}
```

**使用场景**：
- Dense：数据密集型页面、表格
- Normal：常规页面、表单
- Relaxed：内容页面、文章
- Spacious：着陆页、营销页面

### 信息密度（Information Density）
```css
:root {
  /* 高密度 */
  --density-high: {
    --spacing-unit: 0.5rem;
    --font-size-scale: 0.875;
  };

  /* 中密度 */
  --density-medium: {
    --spacing-unit: 1rem;
    --font-size-scale: 1;
  };

  /* 低密度 */
  --density-low: {
    --spacing-unit: 1.5rem;
    --font-size-scale: 1.125;
  };
}
```

**使用场景**：
- High：数据分析页面、仪表板
- Medium：常规页面、设置页面
- Low：营销页面、介绍页面

### 布局模式（Layout Patterns）
```css
/* 固定侧边栏布局 */
.layout-sidebar-fixed {
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
}

/* 流式内容布局 */
.layout-fluid {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* 卡片网格布局 */
.layout-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--grid-gutter);
}

/* 仪表板布局 */
.layout-dashboard {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--grid-gutter);
}

/* 表单布局 */
.layout-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--grid-gutter);
}
```

---

## 5. 核心 UI 组件规范（Component System）

### 按钮（Button）

#### 组件变体
```css
/* 主按钮 */
.button-primary {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-text-inverse);
  border-radius: 6px;
  padding: 0 20px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid transparent;
}

.button-primary:hover {
  background-color: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
}

.button-primary:active {
  background-color: var(--color-primary-active);
  border-color: var(--color-primary-active);
}

/* 次按钮 */
.button-secondary {
  background-color: var(--color-bg-primary);
  border-color: var(--color-border-primary);
  color: var(--color-text-regular);
  border-radius: 6px;
  padding: 0 20px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid var(--color-border-primary);
}

.button-secondary:hover {
  background-color: var(--color-bg-secondary);
  border-color: var(--color-gray-300);
}

/* 文字按钮 */
.button-ghost {
  background-color: transparent;
  border-color: transparent;
  color: var(--color-text-regular);
  border-radius: 6px;
  padding: 0 20px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid transparent;
}

.button-ghost:hover {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
}

/* 禁用按钮 */
.button-disabled {
  background-color: var(--color-bg-tertiary);
  border-color: var(--color-border-light);
  color: var(--color-text-disabled);
  cursor: not-allowed;
  opacity: 0.6;
}
```

#### 组件尺寸
```css
/* 小号按钮 */
.button-small {
  padding: 0 16px;
  height: 32px;
  font-size: 13px;
  border-radius: 4px;
}

/* 中号按钮 */
.button-medium {
  padding: 0 20px;
  height: 40px;
  font-size: 14px;
  border-radius: 6px;
}

/* 大号按钮 */
.button-large {
  padding: 0 24px;
  height: 48px;
  font-size: 16px;
  border-radius: 8px;
}
```

#### 组件状态
- **默认**：正常显示，可点击
- **悬停**：背景色变化，边框色变化
- **激活**：背景色进一步加深
- **禁用**：灰色显示，不可点击，透明度降低
- **加载**：显示加载指示器，禁用点击
- **焦点**：显示蓝色焦点环

### 卡片（Card）

#### 组件样式
```css
.card {
  border: 1px solid var(--color-border-primary);
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  overflow: hidden;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-header {
  padding: 20px;
  border-bottom: 1px solid var(--color-border-light);
  box-sizing: border-box;
}

.card-body {
  padding: 20px;
}

.card-footer {
  padding: 20px;
  border-top: 1px solid var(--color-border-light);
  box-sizing: border-box;
}
```

#### 使用场景
- 数据展示卡片
- 信息展示
- 功能模块
- 表单容器

### 输入框（Input）

#### 组件样式
```css
.input {
  -webkit-appearance: none;
  background-color: var(--color-bg-primary);
  background-image: none;
  border-radius: 6px;
  border: 1px solid var(--color-border-primary);
  box-sizing: border-box;
  color: var(--color-text-regular);
  display: inline-block;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 12px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
}

.input:hover {
  border-color: var(--color-gray-400);
}

.input:focus {
  border-color: var(--color-blue);
  box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.1);
}

.input-disabled {
  background-color: var(--color-bg-secondary);
  border-color: var(--color-border-lighter);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}

.input-error {
  border-color: var(--color-red);
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(249, 47, 47, 0.1);
}
```

#### 组件尺寸
```css
/* 小号输入框 */
.input-small {
  height: 32px;
  line-height: 32px;
  font-size: 13px;
  padding: 0 10px;
  border-radius: 4px;
}

/* 中号输入框 */
.input-medium {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  padding: 0 12px;
  border-radius: 6px;
}

/* 大号输入框 */
.input-large {
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  padding: 0 16px;
  border-radius: 8px;
}
```

#### 组件状态
- **默认**：白色背景，灰色边框
- **悬停**：边框色加深
- **焦点**：蓝色边框 + 蓝色阴影
- **错误**：红色边框 + 红色阴影
- **禁用**：灰色背景，灰色文字

### 表格（Table）

#### 组件样式
```css
.table {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  background-color: var(--color-bg-primary);
  font-size: 14px;
  color: var(--color-text-regular);
  border-collapse: collapse;
}

.table th {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  font-weight: 600;
  text-align: left;
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-border-primary);
}

.table td {
  border-bottom: 1px solid var(--color-border-lighter);
  padding: 12px 16px;
  vertical-align: middle;
  text-align: left;
}

.table tbody tr:hover {
  background-color: var(--color-bg-secondary);
}

.table tbody tr:last-child td {
  border-bottom: none;
}
```

#### 使用场景
- 数据列表
- 报表表格
- 用户管理
- 数据分析结果

### 导航（Navigation）

#### 侧边栏导航
```css
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: var(--color-bg-primary);
  border-right: 1px solid var(--color-border-primary);
  display: flex;
  flex-direction: column;
}

.sidebar-item {
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  color: var(--color-text-regular);
  padding: 0 16px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;
}

.sidebar-item:hover {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
}

.sidebar-item-active {
  color: var(--color-blue);
  background-color: var(--color-blue-light);
}
```

#### 顶部导航
```css
.topbar {
  height: 64px;
  background-color: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border-primary);
  display: flex;
  align-items: center;
  padding: 0 24px;
}

.topbar-item {
  height: 64px;
  line-height: 64px;
  font-size: 14px;
  color: var(--color-text-regular);
  padding: 0 16px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  border-bottom: 2px solid transparent;
}

.topbar-item:hover {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
}

.topbar-item-active {
  color: var(--color-blue);
  border-bottom: 2px solid var(--color-blue);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格（Icon Style）

#### 图标类型
- **线性图标（Outline Icons）**：默认图标风格，简洁清晰
- **填充图标（Filled Icons）**：用于强调状态和选中状态
- **双色图标（Duotone Icons）**：用于特殊功能和数据可视化

#### 图标尺寸
```css
:root {
  --icon-size-xs: 12px;
  --icon-size-sm: 14px;
  --icon-size-md: 16px;
  --icon-size-lg: 18px;
  --icon-size-xl: 20px;
}
```

#### 图标规范
```css
.icon {
  display: inline-block;
  width: var(--icon-size-md);
  height: var(--icon-size-md);
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.icon-filled {
  fill: currentColor;
  stroke: none;
}
```

#### 使用场景
- **导航图标**：侧边栏、顶部导航
- **操作图标**：按钮、工具栏
- **状态图标**：成功、警告、错误
- **数据图标**：图表、指标卡片

### 插画风格（Illustration Style）

#### 插画原则
- **简洁实用**：避免过度细节，保持简洁
- **功能导向**：插画应服务于数据展示
- **一致性**：保持统一的插画风格
- **可访问性**：提供适当的替代文本

#### 使用场景
- **空状态**：无数据、无结果
- **引导页面**：产品介绍、功能说明
- **错误页面**：404、服务器错误
- **加载状态**：数据加载中

#### 插画限制
- 不使用品牌插画
- 不使用人物插画
- 不使用场景插画
- 仅使用抽象几何插画

### 设计原则

#### 图标设计原则
1. **一致性**：所有图标使用统一的线条粗细和圆角
2. **简洁性**：避免过度细节，保持简洁清晰
3. **可识别性**：图标应易于识别和理解
4. **可扩展性**：图标应在不同尺寸下保持清晰

#### 插画设计原则
1. **功能性**：插画应帮助理解内容，而非装饰
2. **简洁性**：避免过度细节，保持简洁
3. **一致性**：保持统一的插画风格
4. **可访问性**：提供适当的替代文本

---

## 7. 交互与动效原则（Interaction & Motion）

### 交互状态（Interaction States）

#### Hover 状态
```css
/* 按钮悬停 */
.button:hover {
  background-color: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
}

/* 卡片悬停 */
.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 链接悬停 */
a:hover {
  color: var(--color-blue-hover);
  text-decoration: underline;
}
```

#### Active 状态
```css
/* 按钮激活 */
.button:active {
  background-color: var(--color-primary-active);
  border-color: var(--color-primary-active);
}

/* 链接激活 */
a:active {
  color: var(--color-blue-active);
}
```

#### Focus 状态
```css
/* 输入框焦点 */
.input:focus {
  border-color: var(--color-blue);
  box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.1);
}

/* 按钮焦点 */
.button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.1);
}
```

### 动效节奏（Motion Timing）

#### 标准过渡
```css
:root {
  --transition-fast: 0.15s;
  --transition-base: 0.2s;
  --transition-slow: 0.3s;
  --easing-default: ease;
  --easing-in: ease-in;
  --easing-out: ease-out;
  --easing-in-out: ease-in-out;
}
```

#### 使用场景
- **快速过渡**（0.15s）：悬停效果、点击反馈
- **标准过渡**（0.2s）：颜色变化、边框变化
- **慢速过渡**（0.3s）：模态框、页面切换

### 操作反馈（Feedback Design）

#### 成功反馈
```css
.toast-success {
  background-color: var(--color-success-bg);
  border: 1px solid var(--color-success-border);
  color: var(--color-green);
  padding: 12px 16px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 8px;
}
```

#### 错误反馈
```css
.toast-error {
  background-color: var(--color-danger-bg);
  border: 1px solid var(--color-danger-border);
  color: var(--color-red);
  padding: 12px 16px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 8px;
}
```

#### 加载状态
```css
.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-gray-200);
  border-top-color: var(--color-blue);
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

### 动效原则

#### 基本原则
1. **功能性**：动效应服务于功能，而非装饰
2. **简洁性**：动效应简洁明了，不复杂
3. **一致性**：所有动效使用统一的缓动函数
4. **性能优先**：使用CSS动画，避免JavaScript动画

#### 性能优化
```css
/* 使用 transform 和 opacity */
.element {
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.2s ease,
              opacity 0.2s ease;
}

/* 避免使用 width、height、left、top */
.element {
  /* 不推荐 */
  width: 100px;
  transition: width 0.2s ease;

  /* 推荐 */
  transform: scaleX(1);
  transition: transform 0.2s ease;
}
```

#### 可访问性
```css
/* 尊重系统偏好设置 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. 可复用 Design Token（Design Tokens）

### Color Tokens
```css
:root {
  /* 主品牌色 */
  --color-primary: #000000;
  --color-primary-hover: #111111;
  --color-primary-active: #222222;
  --color-primary-light: #333333;
  --color-primary-lighter: #666666;
  --color-primary-dark: #000000;
  --color-primary-darker: #000000;

  /* 辅助色 */
  --color-white: #FFFFFF;
  --color-blue: #0070F3;
  --color-blue-hover: #0060D9;
  --color-blue-active: #0050BF;
  --color-blue-light: #E6F0FF;
  --color-blue-dark: #0058CC;

  --color-green: #00DC82;
  --color-green-hover: #00C876;
  --color-green-active: #00B46A;
  --color-green-light: #E6FFF4;
  --color-green-dark: #00C876;

  --color-red: #F92F2F;
  --color-red-hover: #E01E1E;
  --color-red-active: #C71010;
  --color-red-light: #FFE6E6;
  --color-red-dark: #E01E1E;

  --color-yellow: #F5A623;
  --color-yellow-hover: #E0951C;
  --color-yellow-active: #CB8415;
  --color-yellow-light: #FFF5E6;
  --color-yellow-dark: #E0951C;

  /* 中性色 - 背景 */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #FAFAFA;
  --color-bg-tertiary: #F5F5F5;
  --color-bg-elevated: #FFFFFF;
  --color-bg-overlay: rgba(0, 0, 0, 0.5);

  /* 中性色 - 文字 */
  --color-text-primary: #000000;
  --color-text-regular: #171717;
  --color-text-secondary: #525252;
  --color-text-placeholder: #A3A3A3;
  --color-text-disabled: #A3A3A3;
  --color-text-inverse: #FFFFFF;

  /* 中性色 - 边框 */
  --color-border-primary: #E5E5E5;
  --color-border-light: #F5F5F5;
  --color-border-lighter: #FAFAFA;
  --color-border-extra-light: #FFFFFF;
  --color-border-focus: #0070F3;
  --color-border-error: #F92F2F;
}
```

### Spacing Tokens
```css
:root {
  --spacing-0: 0;
  --spacing-px: 1px;
  --spacing-0_5: 0.125rem;  /* 2px */
  --spacing-1: 0.25rem;     /* 4px */
  --spacing-1_5: 0.375rem;  /* 6px */
  --spacing-2: 0.5rem;      /* 8px */
  --spacing-2_5: 0.625rem;  /* 10px */
  --spacing-3: 0.75rem;      /* 12px */
  --spacing-3_5: 0.875rem;  /* 14px */
  --spacing-4: 1rem;         /* 16px */
  --spacing-5: 1.25rem;      /* 20px */
  --spacing-6: 1.5rem;       /* 24px */
  --spacing-7: 1.75rem;      /* 28px */
  --spacing-8: 2rem;         /* 32px */
  --spacing-9: 2.25rem;      /* 36px */
  --spacing-10: 2.5rem;      /* 40px */
  --spacing-11: 2.75rem;     /* 44px */
  --spacing-12: 3rem;        /* 48px */
  --spacing-14: 3.5rem;      /* 56px */
  --spacing-16: 4rem;        /* 64px */
  --spacing-20: 5rem;        /* 80px */
  --spacing-24: 6rem;        /* 96px */
  --spacing-32: 8rem;        /* 128px */
}
```

### Radius Tokens
```css
:root {
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-base: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-base: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
  --shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.25);
  --shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.06);
}
```

### Typography Tokens
```css
:root {
  /* 字体家族 */
  --font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-family-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;

  /* 字号 */
  --font-size-xs: 0.75rem;      /* 12px */
  --font-size-sm: 0.875rem;    /* 14px */
  --font-size-base: 1rem;       /* 16px */
  --font-size-lg: 1.125rem;    /* 18px */
  --font-size-xl: 1.25rem;     /* 20px */
  --font-size-2xl: 1.5rem;     /* 24px */
  --font-size-3xl: 1.875rem;    /* 30px */
  --font-size-4xl: 2.25rem;       /* 36px */
  --font-size-5xl: 2.5rem;    /* 40px */

  /* 字重 */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* 行高 */
  --line-height-none: 1;
  --line-height-tight: 1.2;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.7;
  --line-height-loose: 2;

  /* 字间距 */
  --letter-spacing-tighter: -0.02em;
  --letter-spacing-tight: -0.01em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;
  --letter-spacing-wider: 0.05em;
  --letter-spacing-widest: 0.1em;
}
```

### Transition Tokens
```css
:root {
  /* 过渡时间 */
  --transition-fast: 0.15s;
  --transition-base: 0.2s;
  --transition-slow: 0.3s;

  /* 缓动函数 */
  --easing-linear: linear;
  --easing-in: ease-in;
  --easing-out: ease-out;
  --easing-in-out: ease-in-out;

  /* 过渡属性 */
  --transition-all: all var(--transition-base) var(--easing-in-out);
  --transition-colors: color var(--transition-base) var(--easing-in-out),
                       background-color var(--transition-base) var(--easing-in-out),
                       border-color var(--transition-base) var(--easing-in-out);
  --transition-transform: transform var(--transition-base) var(--easing-in-out);
  --transition-opacity: opacity var(--transition-base) var(--easing-in-out);
}
```

### Z-Index Tokens
```css
:root {
  --z-index-dropdown: 1000;
  --z-index-sticky: 1020;
  --z-index-fixed: 1030;
  --z-index-modal-backdrop: 2000;
  --z-index-modal: 2000;
  --z-index-popover: 2000;
  --z-index-tooltip: 2000;
  --z-index-notification: 3000;
}
```

---

## 9. 合法复刻建议（Legal Replication Advice）

### 可学习的元素（Learnable Elements）

#### 设计规则（Design Rules）
✅ **可以学习**：
- **颜色系统**：学习主色、辅助色、中性色的使用逻辑和命名规范
- **字体系统**：学习字号层级、字重、行高的使用规则
- **间距系统**：学习4px基准的间距系统和留白密度控制
- **栅格系统**：学习12列栅格、响应式断点的使用方法
- **组件规范**：学习按钮、卡片、输入框等组件的设计规范和交互状态

#### 交互模式（Interaction Patterns）
✅ **可以学习**：
- **悬停效果**：学习背景色变化、边框色变化的悬停反馈
- **焦点状态**：学习蓝色焦点环 + 蓝色阴影的焦点指示
- **加载状态**：学习旋转加载指示器的加载反馈
- **错误提示**：学习红色边框 + 红色阴影的错误反馈
- **成功提示**：学习绿色背景 + 成功文本的成功反馈

#### 布局模式（Layout Patterns）
✅ **可以学习**：
- **固定侧边栏布局**：学习250px侧边栏 + 自适应内容区的布局
- **卡片网格布局**：学习自动填充的卡片网格布局
- **仪表板布局**：学习12列栅格的仪表板布局
- **表单布局**：学习响应式表单布局

### 不应复刻的元素（Non-Replicable Elements）

#### 品牌元素（Brand Elements）
❌ **不应复刻**：
- **品牌Logo**：不应使用Vercel的品牌Logo
- **品牌名称**：不应使用Vercel的品牌名称
- **品牌口号**：不应使用Vercel的品牌口号
- **品牌标识**：不应使用Vercel的品牌标识

#### 插画内容（Illustration Content）
❌ **不应复刻**：
- **品牌插画**：不应使用Vercel的品牌插画
- **人物插画**：不应使用Vercel的人物插画
- **场景插画**：不应使用Vercel的场景插画
- **装饰插画**：不应使用Vercel的装饰插画

#### 具体内容（Specific Content）
❌ **不应复刻**：
- **文案内容**：不应直接复制Vercel的文案内容
- **数据内容**：不应使用Vercel的具体数据
- **案例内容**：不应使用Vercel的客户案例
- **功能描述**：不应直接复制Vercel的功能描述

#### 图标资源（Icon Resources）
❌ **不应复刻**：
- **品牌图标**：不应使用Vercel的品牌图标
- **自定义图标**：不应使用Vercel的自定义图标
- **图标组合**：不应直接复制Vercel的图标组合

### 合法使用建议（Legal Usage Guidelines）

#### 设计系统使用（Design System Usage）
✅ **合法使用**：
- **学习设计原则**：可以学习Vercel的设计原则和设计哲学
- **参考组件规范**：可以参考Vercel的组件规范和交互模式
- **借鉴布局模式**：可以借鉴Vercel的布局模式和响应式策略
- **使用Design Token**：可以使用类似Vercel的Design Token命名规范

#### 实现建议（Implementation Suggestions）
✅ **建议实现**：
- **创建自己的颜色系统**：基于Vercel的颜色系统逻辑，创建自己的颜色系统
- **设计自己的组件库**：参考Vercel的组件规范，设计自己的组件库
- **建立自己的设计规范**：基于Vercel的设计规范，建立自己的设计规范
- **开发自己的设计系统**：参考Vercel的设计系统，开发自己的设计系统

#### 注意事项（Important Notes）
⚠️ **注意事项**：
- **避免直接复制**：避免直接复制Vercel的设计元素和内容
- **保持原创性**：保持自己的设计原创性和品牌特色
- **尊重知识产权**：尊重Vercel的知识产权和品牌权益
- **合法使用**：确保所有使用都符合法律法规和知识产权要求

---

**维护者：** Design System Team
**最后更新：** 2024-01-01
**版本：** 1.0.0