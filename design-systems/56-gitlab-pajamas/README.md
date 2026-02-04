# GitLab Pajamas

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **开发者友好**：面向开发者和DevOps团队，强调效率和实用性
- **简洁实用**：信息密度适中，突出功能性和可操作性
- **一致性**：跨产品保持统一的视觉语言和交互模式
- **可访问性**：严格遵循WCAG 2.1 AA标准
- **开源精神**：体现开源社区的协作和透明

### 适用产品类型
- **代码托管平台**：Git仓库管理、代码协作
- **DevOps工具**：CI/CD流水线、部署管理
- **项目管理**：Issue跟踪、项目管理
- **企业协作**：团队协作、文档管理
- **监控分析**：性能监控、日志分析

### 设计价值观
- **效率优先**：简化复杂操作，提升开发效率
- **清晰透明**：信息展示清晰，状态明确
- **用户中心**：以开发者需求为核心设计决策
- **持续迭代**：基于社区反馈不断优化

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）

#### GitLab Orange
```css
/* 主橙色 */
--brand-primary: #5B3637;
--brand-primary-hover: #4A2B2C;
--brand-primary-active: #3A2021;

/* 浅橙色 */
--brand-primary-light: #7B4B4C;
--brand-primary-lighter: #9B6061;

/* 深橙色 */
--brand-primary-dark: #3A2021;
--brand-primary-darker: #2A1516;
```

**使用场景**：
- 主按钮、重要操作
- 链接、导航激活状态
- 主要数据可视化
- 品牌元素

### 辅助色板（Secondary Colors）

#### 成功色（Success）
```css
--success-base: #108548;
--success-light: #2DA160;
--success-lighter: #5CBD79;
--success-dark: #0A5A2F;
```

#### 警告色（Warning）
```css
--warning-base: #C38000;
--warning-light: #D99000;
--warning-lighter: #E6A333;
--warning-dark: #8A5600;
```

#### 错误色（Error）
```css
--error-base: #DB3B21;
--error-light: #E65D49;
--error-lighter: #F07E6D;
--error-dark: #9D2815;
```

#### 信息色（Info）
```css
--info-base: #1068BF;
--info-light: #2B7FD9;
--info-lighter: #5596E3;
--info-dark: #0A4A8A;
```

**使用场景**：
- Success：成功状态、完成操作
- Warning：警告提示、注意事项
- Error：错误状态、验证失败
- Info：信息提示、帮助说明

### 中性色（Neutral Colors）

#### 背景色（Background）
```css
--bg-primary: #FFFFFF;
--bg-secondary: #FBFBFC;
--bg-tertiary: #F5F5F6;
--bg-inverse: #292961;
--bg-overlay: rgba(41, 41, 97, 0.4);
```

#### 文字色（Text）
```css
--text-primary: #333238;
--text-secondary: #666;
--text-tertiary: #999;
--text-inverse: #FFFFFF;
--text-disabled: #BFBFBF;
```

#### 边框色（Border）
```css
--border-primary: #DBDBDB;
--border-secondary: #E5E5E5;
--border-tertiary: #F0F0F0;
--border-inverse: #FFFFFF;
--border-active: #5B3637;
```

### 语义色（Semantic Colors）

#### 状态色
```css
--status-online: #108548;
--status-offline: #666;
--status-busy: #C38000;
--status-away: #1068BF;
```

#### 优先级色
```css
--priority-high: #DB3B21;
--priority-medium: #C38000;
--priority-low: #108548;
```

### Design Token 命名建议
```css
/* 颜色命名规则：--{category}-{variant}-{shade} */
/* category: brand, success, warning, error, info, text, bg, border */
/* variant: primary, secondary, tertiary */
/* shade: base, light, lighter, dark, darker */

/* 示例 */
--brand-primary-base: #5B3637;
--success-light: #2DA160;
--text-primary: #333238;
--bg-secondary: #FBFBFC;
```

### 色彩使用规则
1. **主色限制**：主色使用不超过页面面积的10-15%
2. **功能色专用**：功能色仅用于状态指示，不用于装饰
3. **中性色主导**：中性色占页面面积的70-80%
4. **对比度要求**：确保文字与背景对比度至少4.5:1
5. **主题支持**：支持亮色和暗色主题切换

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）

#### 主字体
```css
--font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
--font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
```

#### 字体栈优先级
1. -apple-system（macOS系统字体）
2. BlinkMacSystemFont（Chrome系统字体）
3. Segoe UI（Windows系统字体）
4. Roboto（Android系统字体）
5. Helvetica Neue（经典无衬线字体）
6. Arial（Windows备用字体）
7. sans-serif（系统默认无衬线字体）

### 字号层级（Font Size Scale）

```css
/* 标题层级 */
--font-size-h1: 2.25rem;      /* 36px - 页面主标题 */
--font-size-h2: 1.75rem;      /* 28px - 章节标题 */
--font-size-h3: 1.5rem;       /* 24px - 子章节标题 */
--font-size-h4: 1.25rem;      /* 20px - 卡片标题 */
--font-size-h5: 1rem;         /* 16px - 小标题 */
--font-size-h6: 0.875rem;     /* 14px - 标签标题 */

/* 正文层级 */
--font-size-body: 0.875rem;   /* 14px - 正文 */
--font-size-body-small: 0.8125rem;  /* 13px - 小正文 */
--font-size-body-tiny: 0.75rem;    /* 12px - 微正文 */

/* 辅助文字 */
--font-size-caption: 0.75rem;     /* 12px - 说明文字 */
--font-size-label: 0.8125rem;      /* 13px - 标签文字 */
--font-size-button: 0.8125rem;     /* 13px - 按钮文字 */
```

### 字重（Font Weight）

```css
--font-weight-light: 300;    /* Light - 轻量级标题 */
--font-weight-regular: 400;  /* Regular - 正文 */
--font-weight-medium: 500;   /* Medium - 强调文字 */
--font-weight-semibold: 600; /* SemiBold - 重要标题 */
--font-weight-bold: 700;     /* Bold - 核心标题 */
```

### 行高（Line Height）

```css
--line-height-tight: 1.25;   /* 紧凑 - 标题 */
--line-height-normal: 1.5;   /* 正常 - 正文 */
--line-height-relaxed: 1.75; /* 宽松 - 长文本 */
--line-height-loose: 2;      /* 极宽 - 说明文字 */
```

### 字间距（Letter Spacing）

```css
--letter-spacing-tight: -0.025em;  /* 紧凑 - 大标题 */
--letter-spacing-normal: 0;        /* 正常 - 正文 */
--letter-spacing-wide: 0.025em;    /* 宽松 - 标签 */
--letter-spacing-wider: 0.05em;    /* 极宽 - 按钮 */
```

### 排版节奏规则

#### 标题层级使用
- **H1（36px）**：页面主标题，每个页面仅一个
- **H2（28px）**：主要章节标题，用于区分内容区块
- **H3（24px）**：子章节标题，用于细分内容
- **H4（20px）**：卡片标题，用于组件内标题
- **H5（16px）**：小标题，用于次要标题
- **H6（14px）**：标签标题，用于分类标签

#### 正文排版
- **正文（14px）**：主要内容文字，使用Regular字重
- **小正文（13px）**：次要内容文字，使用Regular字重
- **微正文（12px）**：辅助说明文字，使用Regular字重

#### 强调文字
- **Medium（500）**：一般强调，用于重要信息
- **SemiBold（600）**：重要强调，用于关键信息
- **Bold（700）**：核心强调，用于标题和品牌元素

#### 信息密度
- **高密度**：代码密集型页面，使用较小字号和紧凑行高
- **中密度**：常规页面，使用标准字号和正常行高
- **低密度**：营销页面，使用较大字号和宽松行高

### 响应式字体

#### 移动端（< 640px）
```css
--font-size-h1: 1.75rem;      /* 28px */
--font-size-h2: 1.5rem;      /* 24px */
--font-size-h3: 1.25rem;     /* 20px */
--font-size-body: 0.8125rem;  /* 13px */
```

#### 平板端（640px - 1024px）
```css
--font-size-h1: 2rem;         /* 32px */
--font-size-h2: 1.625rem;     /* 26px */
--font-size-h3: 1.375rem;     /* 22px */
--font-size-body: 0.84375rem;  /* 13.5px */
```

#### 桌面端（> 1024px）
```css
--font-size-h1: 2.25rem;      /* 36px */
--font-size-h2: 1.75rem;      /* 28px */
--font-size-h3: 1.5rem;       /* 24px */
--font-size-body: 0.875rem;   /* 14px */
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 版心宽度（Container Width）

```css
--container-max-width: 1280px;  /* 最大版心宽度 */
--container-wide: 1200px;      /* 宽版心 */
--container-medium: 1024px;     /* 中版心 */
--container-narrow: 960px;     /* 窄版心 */
--container-fluid: 100%;       /* 流式版心 */
```

### 栅格系统（Grid System）

#### 12列栅格
```css
--grid-columns: 12;              /* 列数 */
--grid-gutter: 1rem;             /* 间距（16px） */
--grid-gutter-mobile: 0.75rem;  /* 移动端间距（12px） */
--grid-margin: 1.5rem;           /* 页面边距（24px） */
--grid-margin-mobile: 1rem;      /* 移动端边距（16px） */
```

#### 栅格断点
```css
--breakpoint-xs: 0px;           /* 超小屏 */
--breakpoint-sm: 576px;         /* 小屏 */
--breakpoint-md: 768px;         /* 中屏 */
--breakpoint-lg: 992px;         /* 大屏 */
--breakpoint-xl: 1200px;        /* 超大屏 */
--breakpoint-xxl: 1440px;       /* 特大屏 */
```

### 间距系统（Spacing Scale）

```css
--space-0: 0;           /* 0px */
--space-1: 0.25rem;     /* 4px */
--space-2: 0.5rem;      /* 8px */
--space-3: 0.75rem;     /* 12px */
--space-4: 1rem;        /* 16px */
--space-5: 1.25rem;     /* 20px */
--space-6: 1.5rem;      /* 24px */
--space-7: 1.75rem;     /* 28px */
--space-8: 2rem;        /* 32px */
--space-9: 2.25rem;     /* 36px */
--space-10: 2.5rem;     /* 40px */
--space-12: 3rem;       /* 48px */
--space-16: 4rem;       /* 64px */
--space-20: 5rem;       /* 80px */
--space-24: 6rem;       /* 96px */
```

### 留白密度

#### 高密度（Data Dense）
- 使用场景：代码编辑器、日志查看
- 间距：space-2（8px）到 space-4（16px）
- 行高：line-height-tight（1.25）

#### 中密度（Medium Density）
- 使用场景：常规页面、项目列表
- 间距：space-4（16px）到 space-6（24px）
- 行高：line-height-normal（1.5）

#### 低密度（Low Density）
- 使用场景：营销页面、引导页面
- 间距：space-6（24px）到 space-12（48px）
- 行高：line-height-relaxed（1.75）

### 布局模式

#### 固定布局（Fixed Layout）
```css
.container-fixed {
  max-width: var(--container-medium);
  margin: 0 auto;
  padding: 0 var(--grid-margin);
}
```

#### 流式布局（Fluid Layout）
```css
.container-fluid {
  width: 100%;
  padding: 0 var(--grid-margin);
}
```

#### 弹性布局（Flex Layout）
```css
.container-flex {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}
```

#### 网格布局（Grid Layout）
```css
.container-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--grid-gutter);
}
```

### 响应式策略

#### 移动优先（Mobile First）
- 从小屏幕开始设计
- 逐步增强到大屏幕
- 使用min-width媒体查询

#### 断点使用
```css
/* 移动端（默认） */
.element { }

/* 平板端（>= 768px） */
@media (min-width: 768px) {
  .element { }
}

/* 桌面端（>= 1024px） */
@media (min-width: 1024px) {
  .element { }
}

/* 大屏端（>= 1280px） */
@media (min-width: 1280px) {
  .element { }
}
```

---

## 5. 核心 UI 组件规范（Component System）

### 按钮（Button）

#### 尺寸规范
```css
/* 小号按钮 */
--button-small-height: 32px;
--button-small-padding: 0.375rem 0.75rem;
--button-small-font-size: 0.75rem;

/* 中号按钮（默认） */
--button-medium-height: 36px;
--button-medium-padding: 0.5rem 1rem;
--button-medium-font-size: 0.8125rem;

/* 大号按钮 */
--button-large-height: 44px;
--button-large-padding: 0.75rem 1.5rem;
--button-large-font-size: 0.875rem;
```

#### 圆角规范
```css
--button-border-radius: 4px;
--button-border-radius-pill: 9999px;  /* 全圆角 */
```

#### 变体样式

##### 主按钮（Primary）
```css
.button-primary {
  background-color: var(--brand-primary);
  color: var(--text-inverse);
  border: 1px solid var(--brand-primary);
}

.button-primary:hover {
  background-color: var(--brand-primary-hover);
  border-color: var(--brand-primary-hover);
}

.button-primary:active {
  background-color: var(--brand-primary-active);
  border-color: var(--brand-primary-active);
}
```

##### 次按钮（Secondary）
```css
.button-secondary {
  background-color: var(--bg-primary);
  color: var(--brand-primary);
  border: 1px solid var(--brand-primary);
}

.button-secondary:hover {
  background-color: var(--bg-secondary);
  border-color: var(--brand-primary-hover);
  color: var(--brand-primary-hover);
}
```

##### 文字按钮（Text）
```css
.button-text {
  background-color: transparent;
  color: var(--brand-primary);
  border: 1px solid transparent;
}

.button-text:hover {
  background-color: var(--bg-secondary);
  color: var(--brand-primary-hover);
}
```

##### 禁用按钮（Disabled）
```css
.button-disabled {
  background-color: var(--bg-tertiary);
  color: var(--text-disabled);
  border: 1px solid var(--border-primary);
  cursor: not-allowed;
  opacity: 0.5;
}
```

#### 状态样式
```css
/* 悬停状态 */
.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 激活状态 */
.button:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 焦点状态 */
.button:focus {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

/* 加载状态 */
.button-loading {
  position: relative;
  pointer-events: none;
}

.button-loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid var(--text-inverse);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
```

### 卡片（Card）

#### 基础样式
```css
.card {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-base);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: var(--space-6);
  transition: all 0.2s ease;
}
```

#### 圆角规范
```css
--border-radius-base: 4px;
--border-radius-large: 8px;
--border-radius-xl: 12px;
```

#### 阴影规范
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-base: 0 1px 3px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
```

#### 变体样式

##### 基础卡片
```css
.card-basic {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-base);
  box-shadow: var(--shadow-base);
}
```

##### 悬浮卡片
```css
.card-hoverable:hover {
  border-color: var(--brand-primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

##### 可点击卡片
```css
.card-clickable {
  cursor: pointer;
  transition: all 0.2s ease;
}

.card-clickable:hover {
  border-color: var(--brand-primary);
  box-shadow: var(--shadow-md);
}

.card-clickable:active {
  transform: scale(0.98);
}
```

#### 内边距规范
```css
--card-padding-sm: var(--space-4);    /* 16px */
--card-padding-md: var(--space-6);    /* 24px */
--card-padding-lg: var(--space-8);    /* 32px */
--card-padding-xl: var(--space-10);   /* 40px */
```

### 输入框（Input）

#### 基础样式
```css
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-size: var(--font-size-body);
  line-height: var(--line-height-normal);
  color: var(--text-primary);
  background-color: var(--bg-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-base);
  transition: all 0.2s ease;
}
```

#### 尺寸规范
```css
/* 小号输入框 */
.input-small {
  height: 32px;
  padding: 0.25rem 0.75rem;
  font-size: var(--font-size-body-tiny);
}

/* 中号输入框（默认） */
.input-medium {
  height: 36px;
  padding: 0.5rem 1rem;
  font-size: var(--font-size-body-small);
}

/* 大号输入框 */
.input-large {
  height: 44px;
  padding: 0.75rem 1.25rem;
  font-size: var(--font-size-body);
}
```

#### 状态样式

##### 默认状态
```css
.input {
  border-color: var(--border-primary);
  background-color: var(--bg-primary);
}
```

##### 悬停状态
```css
.input:hover {
  border-color: var(--border-secondary);
}
```

##### 焦点状态
```css
.input:focus {
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px rgba(91, 54, 55, 0.1);
  outline: none;
}
```

##### 错误状态
```css
.input-error {
  border-color: var(--error-base);
  background-color: rgba(219, 59, 33, 0.02);
}

.input-error:focus {
  border-color: var(--error-base);
  box-shadow: 0 0 0 3px rgba(219, 59, 33, 0.1);
}
```

##### 禁用状态
```css
.input-disabled {
  border-color: var(--border-tertiary);
  background-color: var(--bg-secondary);
  color: var(--text-disabled);
  cursor: not-allowed;
}
```

### 导航（Navigation）

#### 侧边栏导航
```css
.sidebar {
  width: 280px;
  background-color: var(--bg-primary);
  border-right: 1px solid var(--border-primary);
  padding: var(--space-6) 0;
}

.sidebar-item {
  display: flex;
  align-items: center;
  padding: var(--space-3) var(--space-6);
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
}

.sidebar-item:hover {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
}

.sidebar-item.active {
  background-color: rgba(91, 54, 55, 0.1);
  color: var(--brand-primary);
  border-left: 3px solid var(--brand-primary);
}
```

#### 顶部导航
```css
.navbar {
  height: 64px;
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-primary);
  padding: 0 var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-item {
  padding: var(--space-2) var(--space-4);
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: var(--border-radius-base);
  transition: all 0.2s ease;
}

.navbar-item:hover {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
}

.navbar-item.active {
  color: var(--brand-primary);
  background-color: rgba(91, 54, 55, 0.1);
}
```

#### 面包屑导航
```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4) 0;
}

.breadcrumb-item {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: var(--font-size-body-small);
}

.breadcrumb-item:hover {
  color: var(--brand-primary);
}

.breadcrumb-separator {
  color: var(--text-tertiary);
}

.breadcrumb-item.active {
  color: var(--text-primary);
  font-weight: var(--font-weight-medium);
}
```

### 表单组件（Form Components）

#### 标签（Label）
```css
.label {
  display: block;
  margin-bottom: var(--space-2);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
}

.label-required::after {
  content: '*';
  color: var(--error-base);
  margin-left: var(--space-1);
}
```

#### 帮助文本（Help Text）
```css
.help-text {
  margin-top: var(--space-2);
  font-size: var(--font-size-caption);
  color: var(--text-tertiary);
}

.help-text-error {
  color: var(--error-base);
}
```

#### 下拉选择（Select）
```css
.select {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-size: var(--font-size-body);
  line-height: var(--line-height-normal);
  color: var(--text-primary);
  background-color: var(--bg-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--border-radius-base);
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}
```

#### 复选框（Checkbox）
```css
.checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.checkbox-input {
  width: 18px;
  height: 18px;
  border: 2px solid var(--border-primary);
  border-radius: 2px;
  background-color: var(--bg-primary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.checkbox-input:checked {
  background-color: var(--brand-primary);
  border-color: var(--brand-primary);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23FFFFFF' d='M10 3L4.5 8.5L2 6' stroke='%23FFFFFF' stroke-width='2' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}

.checkbox-label {
  margin-left: var(--space-2);
  font-size: var(--font-size-body);
  color: var(--text-primary);
}
```

#### 单选框（Radio）
```css
.radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.radio-input {
  width: 18px;
  height: 18px;
  border: 2px solid var(--border-primary);
  border-radius: 50%;
  background-color: var(--bg-primary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.radio-input:checked {
  border-color: var(--brand-primary);
  background-color: var(--bg-primary);
  position: relative;
}

.radio-input:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--brand-primary);
}

.radio-label {
  margin-left: var(--space-2);
  font-size: var(--font-size-body);
  color: var(--text-primary);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格（Icon Style）

#### 图标类型
- **轮廓图标（Outline）**：主要图标风格，用于常规操作
- **填充图标（Filled）**：用于激活状态和重要操作
- **双色图标（Duotone）**：用于强调和特殊状态

#### 图标尺寸
```css
--icon-size-xs: 12px;
--icon-size-sm: 16px;
--icon-size-md: 20px;
--icon-size-lg: 24px;
--icon-size-xl: 32px;
--icon-size-2xl: 48px;
--icon-size-3xl: 64px;
```

#### 图标颜色
```css
/* 默认图标 */
--icon-color-default: var(--text-secondary);

/* 激活图标 */
--icon-color-active: var(--brand-primary);

/* 禁用图标 */
--icon-color-disabled: var(--text-disabled);

/* 成功图标 */
--icon-color-success: var(--success-base);

/* 警告图标 */
--icon-color-warning: var(--warning-base);

/* 错误图标 */
--icon-color-error: var(--error-base);
```

#### 图标使用规则
1. **一致性**：同一功能使用相同图标
2. **可识别性**：图标含义清晰，易于理解
3. **尺寸适配**：根据使用场景选择合适尺寸
4. **颜色语义**：使用语义化颜色传达状态
5. **可访问性**：提供替代文本（aria-label）

### 插画风格（Illustration Style）

#### 插画类型
- **功能性插画**：用于空状态、错误状态
- **装饰性插画**：用于营销页面、引导页面
- **信息性插画**：用于帮助文档、教程

#### 插画原则
1. **简洁性**：插画风格简洁，不喧宾夺主
2. **品牌一致**：插画风格与品牌形象一致
3. **功能性**：插画服务于功能，不纯粹装饰
4. **可访问性**：提供替代文本描述
5. **性能优化**：使用SVG格式，优化文件大小

#### 插画使用场景
- **空状态**：无数据、无结果时显示
- **错误状态**：错误提示、失败状态
- **成功状态**：操作成功、完成状态
- **引导页面**：首次使用、功能介绍
- **营销页面**：产品介绍、价值传达

---

## 7. 交互与动效原则（Interaction & Motion）

### 交互原则

#### Hover 行为
```css
/* 按钮悬停 */
.button:hover {
  background-color: var(--brand-primary-hover);
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 卡片悬停 */
.card:hover {
  border-color: var(--brand-primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

/* 链接悬停 */
.link:hover {
  color: var(--brand-primary);
  text-decoration: underline;
}
```

#### Active 行为
```css
/* 按钮激活 */
.button:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 卡片激活 */
.card:active {
  transform: scale(0.98);
}
```

#### Focus 行为
```css
/* 焦点样式 */
.button:focus,
.input:focus,
.card:focus {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

/* 焦点环 */
.input:focus {
  box-shadow: 0 0 0 3px rgba(91, 54, 55, 0.1);
}
```

### 动效原则

#### 动效节奏
```css
/* 快速动效 */
--duration-fast: 150ms;

/* 标准动效 */
--duration-base: 200ms;

/* 慢速动效 */
--duration-slow: 300ms;

/* 极慢动效 */
--duration-slower: 500ms;
```

#### 缓动函数
```css
/* 线性缓动 */
--ease-linear: linear;

/* 标准缓动 */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

/* 入场缓动 */
--ease-out: cubic-bezier(0, 0, 0.2, 1);

/* 出场缓动 */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

#### 动效类型

##### 淡入淡出（Fade）
```css
.fade-in {
  animation: fadeIn var(--duration-base) var(--ease-in-out);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

##### 滑动（Slide）
```css
.slide-up {
  animation: slideUp var(--duration-base) var(--ease-out);
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

##### 缩放（Scale）
```css
.scale-in {
  animation: scaleIn var(--duration-base) var(--ease-out);
}

@keyframes scaleIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
```

##### 旋转（Rotate）
```css
.rotate {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

### 操作反馈设计原则

#### 成功反馈
- **视觉反馈**：绿色文字或图标
- **动效反馈**：成功动画（如对勾动画）
- **触觉反馈**：轻微震动（移动端）
- **文字反馈**：明确的成功提示文字

#### 错误反馈
- **视觉反馈**：红色文字或图标
- **动效反馈**：错误动画（如抖动动画）
- **触觉反馈**：明显震动（移动端）
- **文字反馈**：清晰的错误说明

#### 警告反馈
- **视觉反馈**：黄色文字或图标
- **动效反馈**：警告动画（如闪烁动画）
- **文字反馈**：详细的警告说明

#### 加载反馈
- **视觉反馈**：加载指示器（旋转动画）
- **文字反馈**：加载提示文字
- **进度反馈**：进度条显示

### 动效性能优化

#### 性能原则
1. **使用CSS动画**：优先使用CSS动画而非JavaScript动画
2. **使用transform和opacity**：使用transform和opacity属性，避免使用width、height、left、top
3. **使用will-change**：对频繁动画的元素使用will-change属性
4. **减少重排重绘**：避免触发布局重排和重绘
5. **使用requestAnimationFrame**：JavaScript动画使用requestAnimationFrame

#### 性能优化示例
```css
/* 优化前 */
.bad-performance {
  width: 100px;
  height: 100px;
  left: 0;
  top: 0;
  transition: all 0.3s ease;
}

/* 优化后 */
.good-performance {
  width: 100px;
  height: 100px;
  transform: translate(0, 0);
  transition: transform 0.3s ease;
  will-change: transform;
}
```

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens

```css
:root {
  /* Brand Colors */
  --brand-primary: #5B3637;
  --brand-primary-hover: #4A2B2C;
  --brand-primary-active: #3A2021;
  --brand-primary-light: #7B4B4C;
  --brand-primary-lighter: #9B6061;
  --brand-primary-dark: #3A2021;
  --brand-primary-darker: #2A1516;

  /* Success Colors */
  --success-base: #108548;
  --success-light: #2DA160;
  --success-lighter: #5CBD79;
  --success-dark: #0A5A2F;

  /* Warning Colors */
  --warning-base: #C38000;
  --warning-light: #D99000;
  --warning-lighter: #E6A333;
  --warning-dark: #8A5600;

  /* Error Colors */
  --error-base: #DB3B21;
  --error-light: #E65D49;
  --error-lighter: #F07E6D;
  --error-dark: #9D2815;

  /* Info Colors */
  --info-base: #1068BF;
  --info-light: #2B7FD9;
  --info-lighter: #5596E3;
  --info-dark: #0A4A8A;

  /* Background Colors */
  --bg-primary: #FFFFFF;
  --bg-secondary: #FBFBFC;
  --bg-tertiary: #F5F5F6;
  --bg-inverse: #292961;
  --bg-overlay: rgba(41, 41, 97, 0.4);

  /* Text Colors */
  --text-primary: #333238;
  --text-secondary: #666;
  --text-tertiary: #999;
  --text-inverse: #FFFFFF;
  --text-disabled: #BFBFBF;

  /* Border Colors */
  --border-primary: #DBDBDB;
  --border-secondary: #E5E5E5;
  --border-tertiary: #F0F0F0;
  --border-inverse: #FFFFFF;
  --border-active: #5B3637;

  /* Status Colors */
  --status-online: #108548;
  --status-offline: #666;
  --status-busy: #C38000;
  --status-away: #1068BF;

  /* Priority Colors */
  --priority-high: #DB3B21;
  --priority-medium: #C38000;
  --priority-low: #108548;
}
```

### Spacing Tokens

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;     /* 4px */
  --space-2: 0.5rem;      /* 8px */
  --space-3: 0.75rem;     /* 12px */
  --space-4: 1rem;        /* 16px */
  --space-5: 1.25rem;     /* 20px */
  --space-6: 1.5rem;      /* 24px */
  --space-7: 1.75rem;     /* 28px */
  --space-8: 2rem;        /* 32px */
  --space-9: 2.25rem;     /* 36px */
  --space-10: 2.5rem;     /* 40px */
  --space-12: 3rem;       /* 48px */
  --space-16: 4rem;       /* 64px */
  --space-20: 5rem;       /* 80px */
  --space-24: 6rem;       /* 96px */
}
```

### Typography Tokens

```css
:root {
  /* Font Family */
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;

  /* Font Size */
  --font-size-h1: 2.25rem;          /* 36px */
  --font-size-h2: 1.75rem;          /* 28px */
  --font-size-h3: 1.5rem;           /* 24px */
  --font-size-h4: 1.25rem;          /* 20px */
  --font-size-h5: 1rem;            /* 16px */
  --font-size-h6: 0.875rem;        /* 14px */
  --font-size-body: 0.875rem;       /* 14px */
  --font-size-body-small: 0.8125rem;  /* 13px */
  --font-size-body-tiny: 0.75rem;    /* 12px */
  --font-size-caption: 0.75rem;       /* 12px */
  --font-size-label: 0.8125rem;        /* 13px */
  --font-size-button: 0.8125rem;       /* 13px */

  /* Font Weight */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Line Height */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  --line-height-loose: 2;

  /* Letter Spacing */
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  --letter-spacing-wider: 0.05em;
}
```

### Border Radius Tokens

```css
:root {
  --border-radius-none: 0;
  --border-radius-sm: 2px;
  --border-radius-base: 4px;
  --border-radius-md: 6px;
  --border-radius-lg: 8px;
  --border-radius-xl: 12px;
  --border-radius-2xl: 16px;
  --border-radius-full: 9999px;
}
```

### Shadow Tokens

```css
:root {
  --shadow-none: none;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-base: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
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

### Transition Tokens

```css
:root {
  /* Duration */
  --duration-fast: 150ms;
  --duration-base: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 500ms;

  /* Easing */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Breakpoint Tokens

```css
:root {
  --breakpoint-xs: 0px;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --breakpoint-xxl: 1440px;
}
```

### Container Tokens

```css
:root {
  --container-max-width: 1280px;
  --container-wide: 1200px;
  --container-medium: 1024px;
  --container-narrow: 960px;
  --container-fluid: 100%;
}
```

---

## 9. 合法复刻建议（Important）

### 可学习的元素（规则 / 风格）

#### 设计系统架构
- **组件化思维**：学习如何构建可复用的组件系统
- **Design Token**：学习如何使用设计令牌管理设计变量
- **响应式设计**：学习如何构建响应式布局系统
- **可访问性**：学习如何遵循WCAG标准进行设计

#### 视觉设计
- **色彩系统**：学习如何构建语义化的色彩系统
- **字体系统**：学习如何建立清晰的字体层级
- **间距系统**：学习如何使用一致的间距规范
- **圆角系统**：学习如何使用统一的圆角规范

#### 交互设计
- **状态管理**：学习如何设计清晰的交互状态
- **动效原则**：学习如何使用动效提升用户体验
- **反馈机制**：学习如何提供及时的操作反馈
- **错误处理**：学习如何设计友好的错误提示

#### 布局设计
- **栅格系统**：学习如何使用12列栅格系统
- **容器规范**：学习如何定义版心宽度
- **响应式策略**：学习如何实现移动优先的响应式设计

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 品牌元素
- **品牌字体**：GitLab的品牌字体是品牌特色，不应直接使用
- **品牌Logo**：GitLab Logo是品牌资产，不应复刻
- **品牌名称**：GitLab是注册商标，不应使用

#### 插画内容
- **插画风格**：GitLab的插画风格是品牌特色，不应直接复刻
- **插画内容**：插画中的具体内容是品牌资产，不应使用
- **插画元素**：插画中的特定元素是品牌特色，不应复刻

#### 文字内容
- **文案内容**：GitLab的文案是品牌资产，不应直接使用
- **产品名称**：GitLab的产品名称是商标，不应使用
- **营销内容**：GitLab的营销内容是品牌资产，不应复刻

#### 图标内容
- **图标设计**：GitLab的图标设计是品牌特色，不应直接复刻
- **图标风格**：GitLab的图标风格是品牌特色，应学习但不应完全复刻
- **图标内容**：特定业务图标是品牌资产，不应使用

### 合法使用建议

#### 学习原则
1. **学习设计方法**：学习GitLab的设计方法和原则
2. **理解设计系统**：理解如何构建和管理设计系统
3. **应用设计思维**：将设计思维应用到自己的产品中

#### 避免侵权
1. **不使用品牌资产**：不使用GitLab的品牌字体、Logo、名称
2. **不复制具体内容**：不复制GitLab的具体文案、插画、图标
3. **不模仿品牌特色**：不完全模仿GitLab的品牌特色

#### 创新应用
1. **结合自身品牌**：将学习到的设计原则与自身品牌结合
2. **创造独特风格**：在理解的基础上创造自己的独特风格
3. **持续优化迭代**：基于用户反馈持续优化设计系统

### 法律声明

本设计规范仅供参考学习使用，GitLab及其相关商标、版权、品牌资产归GitLab所有。在使用本设计规范时，请确保遵守相关法律法规，避免侵犯GitLab的知识产权。本设计规范不代表GitLab官方立场，也不构成任何法律建议。

---

## 附录：快速参考

### 常用颜色速查

| 颜色名称 | Hex值 | 使用场景 |
|---------|-------|---------|
| 主色 | #5B3637 | 主要操作、重要信息 |
| 成功色 | #108548 | 成功状态 |
| 警告色 | #C38000 | 警告提示 |
| 错误色 | #DB3B21 | 错误状态 |
| 主文字 | #333238 | 主要文字 |
| 次文字 | #666 | 次要文字 |
| 主背景 | #FFFFFF | 主要背景 |
| 次背景 | #FBFBFC | 次要背景 |

### 常用间距速查

| 间距名称 | 值 | 使用场景 |
|---------|-----|---------|
| space-1 | 4px | 极小间距 |
| space-2 | 8px | 小间距 |
| space-4 | 16px | 常规间距 |
| space-6 | 24px | 中等间距 |
| space-8 | 32px | 大间距 |
| space-12 | 48px | 特大间距 |

### 常用字号速查

| 字号名称 | 值 | 使用场景 |
|---------|-----|---------|
| h1 | 36px | 页面主标题 |
| h2 | 28px | 章节标题 |
| h3 | 24px | 子章节标题 |
| body | 14px | 正文 |
| caption | 12px | 说明文字 |

### 常用圆角速查

| 圆角名称 | 值 | 使用场景 |
|---------|-----|---------|
| base | 4px | 按钮、输入框 |
| lg | 8px | 卡片 |
| xl | 12px | 大卡片 |
| full | 9999px | 标签、头像 |

### 常用阴影速查

| 阴影名称 | 值 | 使用场景 |
|---------|-----|---------|
| sm | 0 1px 2px | 小元素 |
| base | 0 1px 3px | 常规元素 |
| md | 0 4px 6px | 卡片 |
| lg | 0 10px 15px | 悬浮卡片 |
| xl | 0 20px 25px | 模态框 |
