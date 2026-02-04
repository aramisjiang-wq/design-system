# Buffer Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **友好温暖**：强调品牌亲和力和用户友好性
- **简洁高效**：社交媒体管理工具，注重操作效率
- **清晰直观**：信息层次分明，操作流程简单
- **现代清新**：使用清新的配色和简洁的设计

### 适用产品类型
- **社交媒体管理**：多平台内容发布、社交媒体分析
- **营销工具**：内容营销、社交媒体营销
- **SaaS工具**：企业级SaaS产品、后台管理系统
- **协作工具**：团队协作、内容审核

### 设计哲学
Buffer Design System强调以用户为中心的设计理念，通过友好的视觉语言和直观的交互设计，帮助用户轻松管理社交媒体内容。设计风格偏向现代清新，注重用户体验和操作效率，避免复杂的视觉干扰。

---

## 2. 颜色系统（Color System）

### 主品牌色（Primary Colors）
```css
:root {
  /* 主品牌色 - 蓝绿色 */
  --color-primary: #00B8D4;
  --color-primary-hover: #00ACC1;
  --color-primary-active: #0097A7;
  --color-primary-light: #33C9DC;
  --color-primary-lighter: #66D9E5;
  --color-primary-dark: #00838F;
  --color-primary-darker: #006064;
}
```

**使用场景**：
- 主要操作按钮（发布、分享）
- 重要信息强调
- 导航激活状态
- 链接文字
- 品牌标识元素

### 辅助色板（Secondary Colors）
```css
:root {
  /* 辅助色 - 绿色（成功/增长） */
  --color-success: #00C853;
  --color-success-light: #00E676;
  --color-success-dark: #00A844;

  /* 辅助色 - 黄色（警告/注意） */
  --color-warning: #FFD600;
  --color-warning-light: #FFEA00;
  --color-warning-dark: #FFAB00;

  /* 辅助色 - 红色（错误/下降） */
  --color-error: #FF5252;
  --color-error-light: #FF8A80;
  --color-error-dark: #D32F2F;

  /* 辅助色 - 紫色（特殊功能） */
  --color-purple: #AA00FF;
  --color-purple-light: #E040FB;
  --color-purple-dark: #7B1FA2;

  /* 辅助色 - 橙色（特殊功能） */
  --color-orange: #FF6D00;
  --color-orange-light: #FF9E80;
  --color-orange-dark: #E65100;
}
```

**使用场景**：
- 绿色：成功状态、内容发布成功、正面指标
- 黄色：警告提示、待处理状态、中性指标
- 红色：错误状态、发布失败、负面指标
- 紫色：高级功能、付费功能
- 橙色：特殊标记、次要功能

### 中性色系统（Neutral Colors）
```css
:root {
  /* 背景色 */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F7FA;
  --color-bg-tertiary: #E8EAF6;
  --color-bg-elevated: #FFFFFF;
  --color-bg-overlay: rgba(0, 0, 0, 0.5);

  /* 文字色 */
  --color-text-primary: #263238;
  --color-text-secondary: #546E7A;
  --color-text-tertiary: #90A4AE;
  --color-text-disabled: #CFD8DC;
  --color-text-inverse: #FFFFFF;

  /* 边框色 */
  --color-border-primary: #ECEFF1;
  --color-border-secondary: #CFD8DC;
  --color-border-tertiary: #B0BEC5;
  --color-border-focus: #00B8D4;
  --color-border-error: #FF5252;
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
  --color-info: #00B8D4;
  --color-info-bg: #E0F7FA;
  --color-info-border: #B2EBF2;

  /* 成功色 */
  --color-success-semantic: #00C853;
  --color-success-bg: #E8F5E9;
  --color-success-border: #C8E6C9;

  /* 警告色 */
  --color-warning-semantic: #FFD600;
  --color-warning-bg: #FFFDE7;
  --color-warning-border: #FFF9C4;

  /* 错误色 */
  --color-error-semantic: #FF5252;
  --color-error-bg: #FFEBEE;
  --color-error-border: #FFCDD2;
}
```

**使用场景**：
- 信息色：提示信息、帮助文本
- 成功色：成功消息、发布成功反馈
- 警告色：警告提示、注意事项
- 错误色：错误消息、发布失败反馈

### 社交媒体色（Social Media Colors）
```css
:root {
  /* 社交媒体品牌色 */
  --color-facebook: #1877F2;
  --color-twitter: #1DA1F2;
  --color-instagram: #E4405F;
  --color-linkedin: #0A66C2;
  --color-pinterest: #BD081C;
  --color-youtube: #FF0000;
  --color-tiktok: #000000;
}
```

**使用场景**：
- 社交媒体平台标识
- 发布渠道选择
- 数据分析图表
- 平台统计卡片

### Design Token 命名建议
- 颜色：`--color-{category}-{variant}-{state}`
- 示例：`--color-primary-hover`, `--color-text-secondary`
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
- 适合社交媒体管理工具，友好且现代

### 字号层级（Font Size Scale）
```css
:root {
  /* 标题层级 */
  --font-size-h1: 2.25rem;    /* 36px */
  --font-size-h2: 1.75rem;   /* 28px */
  --font-size-h3: 1.5rem;    /* 24px */
  --font-size-h4: 1.25rem;   /* 20px */
  --font-size-h5: 1rem;      /* 16px */
  --font-size-h6: 0.875rem;  /* 14px */

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
- H3：子章节标题、发布状态标题
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
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
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
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
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
    --font-size-h1: 1.75rem;   /* 28px */
    --font-size-h2: 1.5rem;    /* 24px */
    --font-size-h3: 1.25rem;   /* 20px */
    --font-size-body: 0.875rem;  /* 14px */
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  :root {
    --font-size-h1: 2rem;     /* 32px */
    --font-size-h2: 1.625rem;  /* 26px */
    --font-size-h3: 1.375rem;  /* 22px */
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
  --container-padding: 2rem;     /* 32px */
  --container-margin: 0 auto;
}
```

**使用场景**：
- 主要内容区域
- 仪表板容器
- 发布页面

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
  --grid-margin: 2rem;          /* 32px */
}
```

**使用场景**：
- 仪表板布局
- 内容卡片网格
- 社交媒体渠道布局
- 数据分析布局

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
- 主要断点：640px、1024px、1280px

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
- Dense：内容密集型页面、发布列表
- Normal：常规页面、设置页面
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
- High：数据分析页面、发布历史
- Medium：常规页面、设置页面
- Low：营销页面、介绍页面

### 布局模式（Layout Patterns）
```css
/* 固定侧边栏布局 */
.layout-sidebar-fixed {
  display: grid;
  grid-template-columns: 260px 1fr;
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
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--grid-gutter);
}

/* 仪表板布局 */
.layout-dashboard {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--grid-gutter);
}

/* 发布编辑器布局 */
.layout-editor {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: var(--grid-gutter);
}
```

---

## 5. 核心 UI 组件规范（Component System）

### 按钮（Button）

#### 组件变体
```css
/* 主按钮 */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  padding: 0.625rem 1.25rem;
  font-weight: var(--font-weight-medium);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 184, 212, 0.2);
}

.btn-primary:active {
  background-color: var(--color-primary-active);
  border-color: var(--color-primary-active);
  transform: translateY(0);
}

/* 次按钮 */
.btn-secondary {
  background-color: var(--color-bg-primary);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  padding: 0.5rem 1.25rem;
  font-weight: var(--font-weight-medium);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
}

/* 文字按钮 */
.btn-text {
  background-color: transparent;
  color: var(--color-primary);
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: var(--font-weight-medium);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-text:hover {
  background-color: rgba(0, 184, 212, 0.1);
}

/* 禁用按钮 */
.btn-disabled {
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-disabled);
  border: 1px solid var(--color-border-tertiary);
  border-radius: 8px;
  padding: 0.625rem 1.25rem;
  font-weight: var(--font-weight-medium);
  cursor: not-allowed;
  opacity: 0.6;
}
```

#### 组件尺寸
```css
/* 小号按钮 */
.btn-small {
  padding: 0.375rem 0.75rem;
  font-size: var(--font-size-body-small);
  height: 32px;
}

/* 中号按钮 */
.btn-medium {
  padding: 0.5rem 1rem;
  font-size: var(--font-size-body);
  height: 40px;
}

/* 大号按钮 */
.btn-large {
  padding: 0.75rem 1.5rem;
  font-size: var(--font-size-body-large);
  height: 48px;
}
```

#### 组件状态
- **默认**：正常显示，可点击
- **悬停**：背景色加深，轻微上移，阴影增强
- **激活**：背景色进一步加深，恢复原位
- **禁用**：灰色显示，不可点击，透明度降低
- **加载**：显示加载指示器，禁用点击
- **焦点**：显示蓝色焦点环

### 卡片（Card）

#### 组件样式
```css
.card {
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: var(--color-border-secondary);
  transform: translateY(-2px);
}

.card-elevated {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-interactive {
  cursor: pointer;
}

.card-interactive:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
```

#### 组件结构
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">卡片标题</h3>
    <div class="card-actions">
      <button class="btn-icon">...</button>
    </div>
  </div>
  <div class="card-body">
    <p>卡片内容</p>
  </div>
  <div class="card-footer">
    <button class="btn-primary">操作</button>
  </div>
</div>
```

#### 使用场景
- 社交媒体渠道卡片
- 发布内容预览卡片
- 数据统计卡片
- 功能模块卡片

### 输入框（Input）

#### 组件样式
```css
.input {
  width: 100%;
  padding: 0.625rem 1rem;
  font-size: var(--font-size-body);
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
  border: 2px solid var(--color-border-primary);
  border-radius: 8px;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input:hover {
  border-color: var(--color-border-secondary);
}

.input:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 4px rgba(0, 184, 212, 0.1);
}

.input-error {
  border-color: var(--color-border-error);
}

.input-error:focus {
  box-shadow: 0 0 0 4px rgba(255, 82, 82, 0.1);
}

.input-disabled {
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}
```

#### 组件尺寸
```css
/* 小号输入框 */
.input-small {
  padding: 0.375rem 0.75rem;
  font-size: var(--font-size-body-small);
  height: 32px;
}

/* 中号输入框 */
.input-medium {
  padding: 0.5rem 0.875rem;
  font-size: var(--font-size-body);
  height: 40px;
}

/* 大号输入框 */
.input-large {
  padding: 0.75rem 1.125rem;
  font-size: var(--font-size-body-large);
  height: 48px;
}
```

#### 组件状态
- **默认**：白色背景，灰色边框
- **悬停**：边框色加深
- **焦点**：蓝绿色边框 + 焦点环
- **错误**：红色边框 + 错误提示
- **禁用**：灰色背景，灰色文字

### 导航（Navigation）

#### 侧边栏导航
```css
.sidebar {
  width: 260px;
  background-color: var(--color-bg-primary);
  border-right: 1px solid var(--color-border-primary);
  padding: 1.5rem 0;
}

.sidebar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav-item {
  padding: 0.75rem 1.5rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.875rem;
  border-radius: 8px;
  margin: 0 0.75rem;
}

.sidebar-nav-item:hover {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
}

.sidebar-nav-item.active {
  background-color: rgba(0, 184, 212, 0.1);
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
}
```

#### 顶部导航
```css
.topbar {
  height: 64px;
  background-color: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border-primary);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topbar-nav {
  display: flex;
  gap: 2rem;
}

.topbar-nav-item {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
}

.topbar-nav-item:hover {
  color: var(--color-primary);
}

.topbar-nav-item.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}
```

### 社交媒体选择器（Social Media Selector）

#### 组件样式
```css
.social-selector {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.social-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border: 2px solid var(--color-border-primary);
  border-radius: 8px;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.social-option:hover {
  border-color: var(--color-border-secondary);
  background-color: var(--color-bg-secondary);
}

.social-option.selected {
  border-color: var(--color-primary);
  background-color: rgba(0, 184, 212, 0.1);
}

.social-icon {
  width: 20px;
  height: 20px;
}

.social-label {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}
```

#### 使用场景
- 发布渠道选择
- 社交媒体账号管理
- 数据分析筛选
- 内容同步设置

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格（Icon Style）

#### 图标类型
- **线性图标（Outline Icons）**：默认图标风格，简洁清晰
- **填充图标（Filled Icons）**：用于强调状态和选中状态
- **双色图标（Duotone Icons）**：用于特殊功能和社交媒体

#### 图标尺寸
```css
:root {
  --icon-size-xs: 12px;
  --icon-size-sm: 16px;
  --icon-size-md: 20px;
  --icon-size-lg: 24px;
  --icon-size-xl: 32px;
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

.icon-duotone {
  fill: currentColor;
  opacity: 0.3;
}
```

#### 使用场景
- **导航图标**：侧边栏、顶部导航
- **操作图标**：按钮、工具栏
- **状态图标**：成功、警告、错误
- **社交媒体图标**：平台标识、发布渠道

### 插画风格（Illustration Style）

#### 插画原则
- **友好温暖**：使用柔和的色彩和圆润的形状
- **简洁抽象**：避免过度细节，保持简洁
- **品牌一致**：保持与品牌风格一致的插画
- **功能性**：插画应帮助理解内容

#### 使用场景
- **空状态**：无内容、无发布记录
- **引导页面**：产品介绍、功能说明
- **错误页面**：404、服务器错误
- **加载状态**：内容加载中

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
.btn:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 184, 212, 0.2);
}

/* 卡片悬停 */
.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: var(--color-border-secondary);
  transform: translateY(-2px);
}

/* 链接悬停 */
a:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}
```

#### Active 状态
```css
/* 按钮激活 */
.btn:active {
  background-color: var(--color-primary-active);
  transform: translateY(0);
}

/* 链接激活 */
a:active {
  color: var(--color-primary-active);
}
```

#### Focus 状态
```css
/* 输入框焦点 */
.input:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 4px rgba(0, 184, 212, 0.1);
}

/* 按钮焦点 */
.btn:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(0, 184, 212, 0.3);
}
```

### 动效节奏（Motion Timing）

#### 标准过渡
```css
:root {
  --transition-fast: 150ms;
  --transition-base: 200ms;
  --transition-slow: 300ms;
  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-in: cubic-bezier(0.4, 0, 1, 1);
  --easing-out: cubic-bezier(0, 0, 0.2, 1);
  --easing-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### 使用场景
- **快速过渡**（150ms）：悬停效果、点击反馈
- **标准过渡**（200ms）：颜色变化、边框变化
- **慢速过渡**（300ms）：模态框、页面切换

### 操作反馈（Feedback Design）

#### 成功反馈
```css
.toast-success {
  background-color: var(--color-success-bg);
  border: 1px solid var(--color-success-border);
  color: var(--color-success);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: slideIn 200ms var(--easing-out);
}
```

#### 错误反馈
```css
.toast-error {
  background-color: var(--color-error-bg);
  border: 1px solid var(--color-error-border);
  color: var(--color-error);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: slideIn 200ms var(--easing-out);
}
```

#### 加载状态
```css
.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--color-border-primary);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 600ms linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
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
  transition: transform 200ms var(--easing-default),
              opacity 200ms var(--easing-default);
}

/* 避免使用 width、height、left、top */
.element {
  /* 不推荐 */
  width: 100px;
  transition: width 200ms var(--easing-default);

  /* 推荐 */
  transform: scaleX(1);
  transition: transform 200ms var(--easing-default);
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
  --color-primary: #00B8D4;
  --color-primary-hover: #00ACC1;
  --color-primary-active: #0097A7;
  --color-primary-light: #33C9DC;
  --color-primary-lighter: #66D9E5;
  --color-primary-dark: #00838F;
  --color-primary-darker: #006064;

  /* 辅助色 */
  --color-success: #00C853;
  --color-success-light: #00E676;
  --color-success-dark: #00A844;

  --color-warning: #FFD600;
  --color-warning-light: #FFEA00;
  --color-warning-dark: #FFAB00;

  --color-error: #FF5252;
  --color-error-light: #FF8A80;
  --color-error-dark: #D32F2F;

  /* 中性色 - 背景 */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F7FA;
  --color-bg-tertiary: #E8EAF6;
  --color-bg-elevated: #FFFFFF;
  --color-bg-overlay: rgba(0, 0, 0, 0.5);

  /* 中性色 - 文字 */
  --color-text-primary: #263238;
  --color-text-secondary: #546E7A;
  --color-text-tertiary: #90A4AE;
  --color-text-disabled: #CFD8DC;
  --color-text-inverse: #FFFFFF;

  /* 中性色 - 边框 */
  --color-border-primary: #ECEFF1;
  --color-border-secondary: #CFD8DC;
  --color-border-tertiary: #B0BEC5;
  --color-border-focus: #00B8D4;
  --color-border-error: #FF5252;

  /* 社交媒体色 */
  --color-facebook: #1877F2;
  --color-twitter: #1DA1F2;
  --color-instagram: #E4405F;
  --color-linkedin: #0A66C2;
  --color-pinterest: #BD081C;
  --color-youtube: #FF0000;
  --color-tiktok: #000000;
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
  --radius-sm: 0.25rem;   /* 4px */
  --radius-base: 0.5rem;  /* 8px */
  --radius-md: 0.75rem;   /* 12px */
  --radius-lg: 1rem;      /* 16px */
  --radius-xl: 1.25rem;   /* 20px */
  --radius-2xl: 1.5rem;   /* 24px */
  --radius-3xl: 2rem;     /* 32px */
  --radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.04);
  --shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
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
  --font-size-3xl: 1.875rem;   /* 30px */
  --font-size-4xl: 2.25rem;    /* 36px */
  --font-size-5xl: 3rem;       /* 48px */

  /* 字重 */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* 行高 */
  --line-height-none: 1;
  --line-height-tight: 1.25;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;

  /* 字间距 */
  --letter-spacing-tighter: -0.05em;
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  --letter-spacing-wider: 0.05em;
  --letter-spacing-widest: 0.1em;
}
```

### Transition Tokens
```css
:root {
  /* 过渡时间 */
  --transition-fast: 150ms;
  --transition-base: 200ms;
  --transition-slow: 300ms;

  /* 缓动函数 */
  --easing-linear: linear;
  --easing-in: cubic-bezier(0.4, 0, 1, 1);
  --easing-out: cubic-bezier(0, 0, 0.2, 1);
  --easing-in-out: cubic-bezier(0.4, 0, 0.2, 1);

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
  --z-index-modal-backdrop: 1040;
  --z-index-modal: 1050;
  --z-index-popover: 1060;
  --z-index-tooltip: 1070;
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
- **悬停效果**：学习背景色变化、轻微上移的悬停反馈
- **焦点状态**：学习蓝绿色焦点环的焦点指示
- **加载状态**：学习旋转加载指示器的加载反馈
- **错误提示**：学习红色边框 + 错误文本的错误反馈
- **成功提示**：学习绿色背景 + 成功文本的成功反馈

#### 布局模式（Layout Patterns）
✅ **可以学习**：
- **固定侧边栏布局**：学习260px侧边栏 + 自适应内容区的布局
- **卡片网格布局**：学习自动填充的卡片网格布局
- **仪表板布局**：学习12列栅格的仪表板布局
- **发布编辑器布局**：学习主编辑区 + 侧边栏的布局

### 不应复刻的元素（Non-Replicable Elements）

#### 品牌元素（Brand Elements）
❌ **不应复刻**：
- **品牌Logo**：不应使用Buffer的品牌Logo
- **品牌名称**：不应使用Buffer的品牌名称
- **品牌口号**：不应使用Buffer的品牌口号
- **品牌标识**：不应使用Buffer的品牌标识

#### 插画内容（Illustration Content）
❌ **不应复刻**：
- **品牌插画**：不应使用Buffer的品牌插画
- **人物插画**：不应使用Buffer的人物插画
- **场景插画**：不应使用Buffer的场景插画
- **装饰插画**：不应使用Buffer的装饰插画

#### 具体内容（Specific Content）
❌ **不应复刻**：
- **文案内容**：不应直接复制Buffer的文案内容
- **数据内容**：不应使用Buffer的具体数据
- **案例内容**：不应使用Buffer的客户案例
- **功能描述**：不应直接复制Buffer的功能描述

#### 图标资源（Icon Resources）
❌ **不应复刻**：
- **品牌图标**：不应使用Buffer的品牌图标
- **自定义图标**：不应使用Buffer的自定义图标
- **图标组合**：不应直接复制Buffer的图标组合

### 合法使用建议（Legal Usage Guidelines）

#### 设计系统使用（Design System Usage）
✅ **合法使用**：
- **学习设计原则**：可以学习Buffer的设计原则和设计哲学
- **参考组件规范**：可以参考Buffer的组件规范和交互模式
- **借鉴布局模式**：可以借鉴Buffer的布局模式和响应式策略
- **使用Design Token**：可以使用类似Buffer的Design Token命名规范

#### 实现建议（Implementation Suggestions）
✅ **建议实现**：
- **创建自己的颜色系统**：基于Buffer的颜色系统逻辑，创建自己的颜色系统
- **设计自己的组件库**：参考Buffer的组件规范，设计自己的组件库
- **建立自己的设计规范**：基于Buffer的设计规范，建立自己的设计规范
- **开发自己的设计系统**：参考Buffer的设计系统，开发自己的设计系统

#### 注意事项（Important Notes）
⚠️ **注意事项**：
- **避免直接复制**：避免直接复制Buffer的设计元素和内容
- **保持原创性**：保持自己的设计原创性和品牌特色
- **尊重知识产权**：尊重Buffer的知识产权和品牌权益
- **合法使用**：确保所有使用都符合法律法规和知识产权要求

---

**维护者：** Design System Team
**最后更新：** 2024-01-01
**版本：** 1.0.0