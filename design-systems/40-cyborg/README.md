# Cyborg Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
**未来科技、金属质感、数字融合、高对比度、赛博美学**

### 风格定位
Cyborg（赛博格）风格是融合人类与机器的视觉语言，强调科技感、未来感和数字化特征。这种风格通过金属质感、霓虹色彩、几何形状和电路纹理，创造出强烈的科技氛围和视觉冲击力。

### 适用产品类型
- **科技产品**：AI工具、数据分析平台、开发者工具
- **SaaS产品**：云服务、企业级软件、技术平台
- **游戏应用**：科幻游戏、虚拟现实、元宇宙应用
- **创新品牌**：初创科技公司、数字创意平台
- **金融科技**：区块链、加密货币、智能投顾

### 设计哲学
- **人机融合**：体现有机与机械的和谐统一
- **未来导向**：传达前沿科技和创新精神
- **功能美学**：技术美感与实用性的平衡
- **数字原生**：适应数字化时代的视觉语言

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
```css
:root {
  /* 核心主色 - 赛博蓝 */
  --cb-color-primary: #00D4FF;
  --cb-color-primary-light: #4DE1FF;
  --cb-color-primary-dark: #00A8CC;
  --cb-color-primary-glow: rgba(0, 212, 255, 0.5);

  /* 辅助主色 - 赛博紫 */
  --cb-color-secondary: #9D00FF;
  --cb-color-secondary-light: #BD33FF;
  --cb-color-secondary-dark: #7A00CC;
  --cb-color-secondary-glow: rgba(157, 0, 255, 0.5);

  /* 强调主色 - 赛博粉 */
  --cb-color-accent: #FF006E;
  --cb-color-accent-light: #FF3385;
  --cb-color-accent-dark: #CC0058;
  --cb-color-accent-glow: rgba(255, 0, 110, 0.5);
}
```

**使用场景**：
- 赛博蓝：主要操作按钮、核心功能入口、重要数据展示
- 赛博紫：辅助操作、次级信息、装饰元素
- 赛博粉：警告提示、特殊状态、品牌强调

### 金属色系（Metallic Colors）
```css
:root {
  /* 金属银 */
  --cb-metal-silver: #C0C0C0;
  --cb-metal-silver-light: #E0E0E0;
  --cb-metal-silver-dark: #A0A0A0;

  /* 金属金 */
  --cb-metal-gold: #FFD700;
  --cb-metal-gold-light: #FFE44D;
  --cb-metal-gold-dark: #CCAA00;

  /* 金属铜 */
  --cb-metal-copper: #B87333;
  --cb-metal-copper-light: #D4955C;
  --cb-metal-copper-dark: #945A28;
}
```

**使用场景**：
- 金属银：边框、分隔线、装饰线条
- 金属金：高级功能、VIP标识、特殊成就
- 金属铜：历史数据、归档内容、次要装饰

### 中性色系（Neutral Colors）
```css
:root {
  /* 深色背景 - 核心背景 */
  --cb-bg-primary: #0A0A0F;
  --cb-bg-secondary: #12121A;
  --cb-bg-tertiary: #1A1A26;
  --cb-bg-elevated: #222230;

  /* 浅色文字 */
  --cb-text-primary: #FFFFFF;
  --cb-text-secondary: #B0B0C0;
  --cb-text-tertiary: #707080;
  --cb-text-disabled: #404050;

  /* 边框与分隔 */
  --cb-border-primary: #2A2A3A;
  --cb-border-secondary: #3A3A4A;
  --cb-border-accent: #00D4FF;
}
```

**使用场景**：
- 深色背景：页面背景、卡片背景、组件背景
- 浅色文字：主要文字、次要文字、说明文字
- 边框与分隔：组件边框、分隔线、装饰线条

### 语义色系（Semantic Colors）
```css
:root {
  /* 成功 - 赛博绿 */
  --cb-color-success: #00FF94;
  --cb-color-success-light: #33FFAD;
  --cb-color-success-dark: #00CC76;
  --cb-color-success-glow: rgba(0, 255, 148, 0.4);

  /* 警告 - 赛博黄 */
  --cb-color-warning: #FFD600;
  --cb-color-warning-light: #FFDF33;
  --cb-color-warning-dark: #CCAB00;
  --cb-color-warning-glow: rgba(255, 214, 0, 0.4);

  /* 错误 - 赛博红 */
  --cb-color-error: #FF2A2A;
  --cb-color-error-light: #FF5555;
  --cb-color-error-dark: #CC2222;
  --cb-color-error-glow: rgba(255, 42, 42, 0.4);

  /* 信息 - 赛博青 */
  --cb-color-info: #00E5FF;
  --cb-color-info-light: #33EBFF;
  --cb-color-info-dark: #00B8CC;
  --cb-color-info-glow: rgba(0, 229, 255, 0.4);
}
```

**使用场景**：
- 成功：操作成功、状态正常、数据验证通过
- 警告：注意事项、待处理状态、潜在风险
- 错误：操作失败、系统错误、数据异常
- 信息：提示信息、帮助说明、状态更新

### 渐变色系（Gradient Colors）
```css
:root {
  /* 赛博渐变 - 蓝紫 */
  --cb-gradient-cyber: linear-gradient(135deg, #00D4FF 0%, #9D00FF 100%);

  /* 霓虹渐变 - 粉紫 */
  --cb-gradient-neon: linear-gradient(135deg, #FF006E 0%, #9D00FF 100%);

  /* 极光渐变 - 青蓝 */
  --cb-gradient-aurora: linear-gradient(135deg, #00E5FF 0%, #00D4FF 100%);

  /* 金属渐变 - 银灰 */
  --cb-gradient-metal: linear-gradient(135deg, #C0C0C0 0%, #808080 100%);

  /* 深空渐变 - 深蓝紫 */
  --cb-gradient-deep: linear-gradient(135deg, #0A0A0F 0%, #1A1A26 100%);
}
```

**使用场景**：
- 赛博渐变：主按钮、核心功能、品牌标识
- 霓虹渐变：装饰元素、背景图案、特殊效果
- 极光渐变：数据可视化、图表、进度指示
- 金属渐变：边框装饰、分隔线、纹理背景
- 深空渐变：页面背景、卡片背景、容器背景

### Design Token 命名建议
```css
/* 颜色命名规范 */
--cb-{color-type}-{shade}-{variant}

/* 示例 */
--cb-color-primary-light
--cb-color-secondary-glow
--cb-bg-primary
--cb-text-secondary
--cb-border-accent
--cb-gradient-cyber
```

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
:root {
  /* 主字体 - 科技感无衬线字体 */
  --cb-font-primary: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* 等宽字体 - 代码和技术展示 */
  --cb-font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', monospace;

  /* 装饰字体 - 标题和特殊文字 */
  --cb-font-display: 'Orbitron', 'Rajdhani', 'Exo 2', sans-serif;
}
```

**字体选择理由**：
- Inter：现代、清晰、可读性强，适合正文和技术文档
- JetBrains Mono：专为编程设计，等宽、清晰，适合代码展示
- Orbitron：未来感、科技感强，适合标题和品牌文字

### 字号层级（Font Size Scale）
```css
:root {
  /* 超大标题 - Hero Title */
  --cb-font-size-hero: 4rem (64px);

  /* 大标题 - Page Title */
  --cb-font-size-h1: 3rem (48px);

  /* 中标题 - Section Title */
  --cb-font-size-h2: 2.25rem (36px);

  /* 小标题 - Subsection Title */
  --cb-font-size-h3: 1.75rem (28px);

  /* 四级标题 - Component Title */
  --cb-font-size-h4: 1.5rem (24px);

  /* 五级标题 - Small Title */
  --cb-font-size-h5: 1.25rem (20px);

  /* 正文 - Body Text */
  --cb-font-size-body: 1rem (16px);

  /* 小字 - Small Text */
  --cb-font-size-small: 0.875rem (14px);

  /* 微小字 - Tiny Text */
  --cb-font-size-tiny: 0.75rem (12px);
}
```

### 行高（Line Height）
```css
:root {
  /* 标题行高 - 紧凑 */
  --cb-line-height-tight: 1.1;

  /* 正文行高 - 标准 */
  --cb-line-height-normal: 1.5;

  /* 小字行高 - 舒适 */
  --cb-line-height-relaxed: 1.6;

  /* 代码行高 - 宽松 */
  --cb-line-height-loose: 1.8;
}
```

### 字重（Font Weight）
```css
:root {
  /* 细体 - Light */
  --cb-font-weight-light: 300;

  /* 常规 - Regular */
  --cb-font-weight-regular: 400;

  /* 中等 - Medium */
  --cb-font-weight-medium: 500;

  /* 半粗 - SemiBold */
  --cb-font-weight-semibold: 600;

  /* 粗体 - Bold */
  --cb-font-weight-bold: 700;
}
```

### 字间距（Letter Spacing）
```css
:root {
  /* 紧凑 - Tight */
  --cb-letter-spacing-tight: -0.02em;

  /* 标准 - Normal */
  --cb-letter-spacing-normal: 0;

  /* 宽松 - Wide */
  --cb-letter-spacing-wide: 0.05em;

  /* 极宽 - Extra Wide */
  --cb-letter-spacing-wider: 0.1em;
}
```

### 排版规则（Typography Rules）

#### 标题排版
- **H1（Hero Title）**：使用装饰字体，字重700，字间距0.05em，行高1.1
- **H2（Page Title）**：使用装饰字体，字重600，字间距0.02em，行高1.1
- **H3（Section Title）**：使用主字体，字重600，字间距0，行高1.2
- **H4（Component Title）**：使用主字体，字重500，字间距0，行高1.3

#### 正文排版
- **Body Text**：使用主字体，字重400，字间距0，行高1.5
- **Small Text**：使用主字体，字重400，字间距0.02em，行高1.6
- **Tiny Text**：使用主字体，字重500，字间距0.05em，行高1.4

#### 代码排版
- **Code Block**：使用等宽字体，字重400，字间距0，行高1.8
- **Inline Code**：使用等宽字体，字重500，字间距0，行高1.5

#### 强调文字
- **Bold Text**：字重700，用于重要信息
- **Medium Text**：字重500，用于次要强调
- **Uppercase Text**：全大写，字间距0.1em，用于标签和按钮

### 响应式字体（Responsive Typography）
```css
/* 移动端（< 640px） */
--cb-font-size-hero: 2.5rem (40px);
--cb-font-size-h1: 2rem (32px);
--cb-font-size-h2: 1.5rem (24px);
--cb-font-size-h3: 1.25rem (20px);
--cb-font-size-body: 0.9375rem (15px);

/* 平板端（640px - 1024px） */
--cb-font-size-hero: 3rem (48px);
--cb-font-size-h1: 2.5rem (40px);
--cb-font-size-h2: 1.75rem (28px);
--cb-font-size-h3: 1.5rem (24px);
--cb-font-size-body: 1rem (16px);

/* 桌面端（> 1024px） */
--cb-font-size-hero: 4rem (64px);
--cb-font-size-h1: 3rem (48px);
--cb-font-size-h2: 2.25rem (36px);
--cb-font-size-h3: 1.75rem (28px);
--cb-font-size-body: 1rem (16px);
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 版心宽度（Container Width）
```css
:root {
  /* 移动端 */
  --cb-container-mobile: 100%;
  --cb-container-padding-mobile: 1rem (16px);

  /* 平板端 */
  --cb-container-tablet: 100%;
  --cb-container-padding-tablet: 1.5rem (24px);

  /* 桌面端 */
  --cb-container-desktop: 1200px;
  --cb-container-padding-desktop: 2rem (32px);

  /* 大屏端 */
  --cb-container-large: 1400px;
  --cb-container-padding-large: 2.5rem (40px);
}
```

### 栅格系统（Grid System）
```css
:root {
  /* 栅格列数 */
  --cb-grid-columns: 12;

  /* 栅格间距 */
  --cb-grid-gutter: 1.5rem (24px);

  /* 栅格边距 */
  --cb-grid-margin: 2rem (32px);

  /* 栅格断点 */
  --cb-grid-breakpoint-mobile: 640px;
  --cb-grid-breakpoint-tablet: 1024px;
  --cb-grid-breakpoint-desktop: 1280px;
}
```

### 布局模式（Layout Patterns）

#### 卡片式布局（Card Layout）
- **描述**：模块化卡片排列，每个卡片独立展示内容
- **使用场景**：功能展示、数据展示、内容分组
- **间距规则**：卡片间距1.5rem，内边距1.5rem
- **圆角规则**：卡片圆角0.5rem（8px）

#### 网格布局（Grid Layout）
- **描述**：基于12列栅格的灵活布局
- **使用场景**：仪表盘、数据面板、复杂页面
- **间距规则**：列间距1.5rem，行间距1.5rem
- **响应式**：移动端1列，平板端2-3列，桌面端3-4列

#### 分栏布局（Column Layout）
- **描述**：左右分栏或三栏布局
- **使用场景**：文档页面、设置页面、详情页面
- **间距规则**：主栏与侧栏间距2rem
- **响应式**：移动端单栏，平板端双栏，桌面端三栏

#### 全屏布局（Full-width Layout）
- **描述**：内容占满整个屏幕宽度
- **使用场景**：Hero区域、着陆页、营销页面
- **间距规则**：内容区域最大宽度1200px，居中显示
- **背景处理**：使用渐变或图案背景

### 留白密度（Spacing Density）

#### 高密度（High Density）
- **描述**：紧凑布局，信息密度高
- **使用场景**：数据仪表盘、监控面板、技术文档
- **间距规则**：元素间距0.75rem（12px），内边距1rem（16px）

#### 标准密度（Standard Density）
- **描述**：标准布局，信息密度适中
- **使用场景**：常规页面、表单页面、设置页面
- **间距规则**：元素间距1rem（16px），内边距1.5rem（24px）

#### 低密度（Low Density）
- **描述**：宽松布局，信息密度低
- **使用场景**：营销页面、着陆页、品牌展示
- **间距规则**：元素间距1.5rem（24px），内边距2rem（32px）

### 响应式断点（Responsive Breakpoints）
```css
:root {
  /* 移动端 */
  --cb-breakpoint-mobile: 640px;

  /* 平板端 */
  --cb-breakpoint-tablet: 1024px;

  /* 桌面端 */
  --cb-breakpoint-desktop: 1280px;

  /* 大屏端 */
  --cb-breakpoint-large: 1536px;
}
```

### 断点策略（Breakpoint Strategy）

#### 移动优先（Mobile First）
- **策略描述**：从小屏幕开始设计，逐步增强
- **优势**：更好的移动端体验，代码更简洁
- **实现方式**：使用min-width媒体查询

#### 桌面优先（Desktop First）
- **策略描述**：从大屏幕开始设计，逐步降级
- **优势**：更好的桌面端体验，适合复杂应用
- **实现方式**：使用max-width媒体查询

---

## 5. 核心 UI 组件规范（Component System）

### 按钮（Button）

#### 组件概述
- **组件名称**：按钮（Button）
- **组件描述**：赛博风格按钮，支持发光效果和渐变背景
- **适用场景**：主要操作、次要操作、文本链接

#### 组件变体
##### 主按钮（Primary Button）
- **使用场景**：主要操作、提交表单、确认操作
- **视觉描述**：赛博渐变背景 + 白色文字 + 发光效果 + 圆角
- **尺寸规格**：
  - 小号：高度32px，内边距0.5rem 1rem
  - 中号：高度40px，内边距0.625rem 1.25rem
  - 大号：高度48px，内边距0.75rem 1.5rem
- **样式代码**：
```css
.btn-primary {
  background: var(--cb-gradient-cyber);
  color: #FFFFFF;
  border: 1px solid var(--cb-color-primary);
  border-radius: 0.375rem (6px);
  box-shadow: 0 0 20px var(--cb-color-primary-glow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  box-shadow: 0 0 30px var(--cb-color-primary-glow);
  transform: translateY(-2px);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 0 15px var(--cb-color-primary-glow);
}
```

##### 次按钮（Secondary Button）
- **使用场景**：次要操作、取消操作、返回操作
- **视觉描述**：透明背景 + 赛博蓝边框 + 赛博蓝文字 + 发光效果
- **尺寸规格**：同主按钮
- **样式代码**：
```css
.btn-secondary {
  background: transparent;
  color: var(--cb-color-primary);
  border: 1px solid var(--cb-color-primary);
  border-radius: 0.375rem (6px);
  box-shadow: 0 0 10px var(--cb-color-primary-glow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  background: rgba(0, 212, 255, 0.1);
  box-shadow: 0 0 20px var(--cb-color-primary-glow);
}
```

##### 文字按钮（Text Button）
- **使用场景**：轻量操作、链接式按钮、辅助操作
- **视觉描述**：透明背景 + 赛博蓝文字 + 下划线效果
- **尺寸规格**：同主按钮
- **样式代码**：
```css
.btn-text {
  background: transparent;
  color: var(--cb-color-primary);
  border: none;
  border-radius: 0;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-text:hover {
  color: var(--cb-color-primary-light);
  text-decoration: underline;
  text-shadow: 0 0 10px var(--cb-color-primary-glow);
}
```

##### 禁用按钮（Disabled Button）
- **使用场景**：不可点击状态、加载中状态
- **视觉描述**：灰色背景 + 灰色文字 + 无发光效果
- **尺寸规格**：同主按钮
- **样式代码**：
```css
.btn-disabled {
  background: var(--cb-text-disabled);
  color: var(--cb-text-tertiary);
  border: 1px solid var(--cb-border-primary);
  border-radius: 0.375rem (6px);
  cursor: not-allowed;
  opacity: 0.6;
}
```

#### 组件状态
- **默认状态**：正常显示，可点击
- **悬停状态**：发光效果增强，轻微上移
- **激活状态**：发光效果减弱，轻微下移
- **禁用状态**：灰色显示，不可点击
- **加载状态**：显示加载动画
- **焦点状态**：显示焦点环

#### 组件API
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}
```

### 卡片（Card）

#### 组件概述
- **组件名称**：卡片（Card）
- **组件描述**：赛博风格卡片，支持金属边框和发光效果
- **适用场景**：信息展示、数据展示、内容分组

#### 组件变体
##### 基础卡片（Basic Card）
- **使用场景**：常规内容展示
- **视觉描述**：深色背景 + 金属边框 + 圆角 + 轻微阴影
- **尺寸规格**：
  - 内边距：1.5rem（24px）
  - 圆角：0.5rem（8px）
  - 边框：1px solid var(--cb-metal-silver)
- **样式代码**：
```css
.card-basic {
  background: var(--cb-bg-secondary);
  border: 1px solid var(--cb-metal-silver);
  border-radius: 0.5rem (8px);
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-basic:hover {
  border-color: var(--cb-color-primary);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4), 0 0 20px var(--cb-color-primary-glow);
}
```

##### 发光卡片（Glow Card）
- **使用场景**：需要强调的卡片、重要信息展示
- **视觉描述**：深色背景 + 赛博蓝边框 + 发光效果 + 圆角
- **尺寸规格**：同基础卡片
- **样式代码**：
```css
.card-glow {
  background: var(--cb-bg-secondary);
  border: 1px solid var(--cb-color-primary);
  border-radius: 0.5rem (8px);
  padding: 1.5rem;
  box-shadow: 0 0 20px var(--cb-color-primary-glow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-glow:hover {
  box-shadow: 0 0 30px var(--cb-color-primary-glow);
  transform: translateY(-2px);
}
```

##### 金属卡片（Metal Card）
- **使用场景**：高级功能展示、VIP内容、特殊成就
- **视觉描述**：金属渐变背景 + 金属边框 + 圆角 + 金属质感
- **尺寸规格**：同基础卡片
- **样式代码**：
```css
.card-metal {
  background: var(--cb-gradient-metal);
  border: 1px solid var(--cb-metal-gold);
  border-radius: 0.5rem (8px);
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-metal:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
  transform: translateY(-2px);
}
```

#### 组件状态
- **默认状态**：正常显示
- **悬停状态**：边框发光，轻微上移
- **激活状态**：边框发光增强

#### 组件API
```typescript
interface CardProps {
  variant?: 'basic' | 'glow' | 'metal';
  hoverable?: boolean;
  children?: React.ReactNode;
}
```

### 输入框（Input）

#### 组件概述
- **组件名称**：输入框（Input）
- **组件描述**：赛博风格输入框，支持发光效果和金属边框
- **适用场景**：表单输入、搜索框、文本编辑

#### 组件变体
##### 默认输入框（Default Input）
- **使用场景**：常规文本输入
- **视觉描述**：深色背景 + 金属边框 + 圆角
- **尺寸规格**：
  - 小号：高度32px，内边距0.375rem 0.75rem
  - 中号：高度40px，内边距0.5rem 1rem
  - 大号：高度48px，内边距0.625rem 1.25rem
  - 圆角：0.375rem（6px）
- **样式代码**：
```css
.input-default {
  background: var(--cb-bg-tertiary);
  border: 1px solid var(--cb-metal-silver);
  border-radius: 0.375rem (6px);
  color: var(--cb-text-primary);
  padding: 0.5rem 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.input-default:focus {
  border-color: var(--cb-color-primary);
  box-shadow: 0 0 10px var(--cb-color-primary-glow);
  outline: none;
}

.input-default:hover {
  border-color: var(--cb-metal-silver-light);
}
```

##### 错误输入框（Error Input）
- **使用场景**：输入验证失败
- **视觉描述**：深色背景 + 赛博红边框 + 发光效果 + 错误提示
- **尺寸规格**：同默认输入框
- **样式代码**：
```css
.input-error {
  background: var(--cb-bg-tertiary);
  border: 1px solid var(--cb-color-error);
  border-radius: 0.375rem (6px);
  color: var(--cb-text-primary);
  padding: 0.5rem 1rem;
  box-shadow: 0 0 10px var(--cb-color-error-glow);
}

.input-error:focus {
  box-shadow: 0 0 15px var(--cb-color-error-glow);
  outline: none;
}
```

##### 禁用输入框（Disabled Input）
- **使用场景**：不可编辑状态
- **视觉描述**：灰色背景 + 灰色边框 + 灰色文字
- **尺寸规格**：同默认输入框
- **样式代码**：
```css
.input-disabled {
  background: var(--cb-text-disabled);
  border: 1px solid var(--cb-border-primary);
  border-radius: 0.375rem (6px);
  color: var(--cb-text-tertiary);
  padding: 0.5rem 1rem;
  cursor: not-allowed;
  opacity: 0.6;
}
```

#### 组件状态
- **默认状态**：深色背景，金属边框
- **悬停状态**：边框色变亮
- **焦点状态**：赛博蓝边框 + 发光效果
- **错误状态**：赛博红边框 + 发光效果
- **禁用状态**：灰色背景，灰色边框

#### 组件API
```typescript
interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  size?: 'small' | 'medium' | 'large';
  onChange?: (value: string) => void;
}
```

### 导航（Navigation）

#### 组件概述
- **组件名称**：导航（Navigation）
- **组件描述**：赛博风格导航，支持发光效果和金属质感
- **适用场景**：页面导航、菜单导航、面包屑

#### 组件变体
##### 顶部导航（Top Navigation）
- **使用场景**：主要导航、页面顶部导航
- **视觉描述**：深色背景 + 金属边框 + 发光效果
- **尺寸规格**：
  - 高度：64px
  - 内边距：0 2rem
  - 间距：1.5rem
- **样式代码**：
```css
.nav-top {
  background: var(--cb-bg-secondary);
  border-bottom: 1px solid var(--cb-metal-silver);
  height: 64px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.nav-item {
  color: var(--cb-text-secondary);
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 0.25rem;
}

.nav-item:hover {
  color: var(--cb-color-primary);
  background: rgba(0, 212, 255, 0.1);
}

.nav-item.active {
  color: var(--cb-color-primary);
  background: rgba(0, 212, 255, 0.15);
  box-shadow: 0 0 10px var(--cb-color-primary-glow);
}
```

##### 侧边导航（Side Navigation）
- **使用场景**：侧边栏导航、设置导航
- **视觉描述**：深色背景 + 金属边框 + 发光效果
- **尺寸规格**：
  - 宽度：240px
  - 内边距：1rem
  - 间距：0.5rem
- **样式代码**：
```css
.nav-side {
  background: var(--cb-bg-secondary);
  border-right: 1px solid var(--cb-metal-silver);
  width: 240px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.3);
}

.nav-side-item {
  color: var(--cb-text-secondary);
  padding: 0.75rem 1rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
}

.nav-side-item:hover {
  color: var(--cb-color-primary);
  background: rgba(0, 212, 255, 0.1);
}

.nav-side-item.active {
  color: var(--cb-color-primary);
  background: rgba(0, 212, 255, 0.15);
  box-shadow: 0 0 10px var(--cb-color-primary-glow);
}
```

##### 面包屑（Breadcrumb）
- **使用场景**：页面层级导航
- **视觉描述**：深色背景 + 金属分隔符 + 发光效果
- **尺寸规格**：
  - 高度：32px
  - 内边距：0.5rem 1rem
  - 间距：0.5rem
- **样式代码**：
```css
.breadcrumb {
  background: var(--cb-bg-tertiary);
  border: 1px solid var(--cb-metal-silver);
  border-radius: 0.375rem (6px);
  height: 32px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
}

.breadcrumb-item {
  color: var(--cb-text-secondary);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.breadcrumb-item:hover {
  color: var(--cb-color-primary);
  text-shadow: 0 0 5px var(--cb-color-primary-glow);
}

.breadcrumb-separator {
  color: var(--cb-metal-silver);
  margin: 0 0.5rem;
}

.breadcrumb-item.active {
  color: var(--cb-text-primary);
  font-weight: 500;
}
```

#### 组件状态
- **默认状态**：正常显示
- **悬停状态**：颜色变化，背景发光
- **激活状态**：发光效果增强

#### 组件API
```typescript
interface NavigationProps {
  type?: 'top' | 'side' | 'breadcrumb';
  items?: NavItem[];
  activeItem?: string;
  onItemClick?: (item: NavItem) => void;
}

interface NavItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格（Icon Style）

#### 图标特征
- **风格描述**：赛博风格图标，线条简洁、几何感强、科技感明显
- **线条特征**：1.5px粗细，圆角端点，等宽线条
- **填充特征**：主色填充，发光效果，金属质感
- **圆角特征**：0.25rem（4px）圆角，柔和过渡

#### 图标变体
##### 线性图标（Outline Icon）
- **使用场景**：导航图标、功能图标、状态图标
- **视觉描述**：1.5px粗细线条，赛博蓝颜色，发光效果
- **尺寸规格**：
  - 小号：16x16px
  - 中号：24x24px
  - 大号：32x32px
- **样式代码**：
```css
.icon-outline {
  stroke: var(--cb-color-primary);
  stroke-width: 1.5px;
  fill: none;
  filter: drop-shadow(0 0 3px var(--cb-color-primary-glow));
}
```

##### 填充图标（Filled Icon）
- **使用场景**：强调图标、品牌图标、特殊状态
- **视觉描述**：赛博蓝填充，发光效果，金属质感
- **尺寸规格**：同线性图标
- **样式代码**：
```css
.icon-filled {
  fill: var(--cb-color-primary);
  filter: drop-shadow(0 0 5px var(--cb-color-primary-glow));
}
```

##### 双色图标（Duotone Icon）
- **使用场景**：复杂图标、数据图标、技术图标
- **视觉描述**：赛博蓝和赛博紫双色填充，渐变效果
- **尺寸规格**：同线性图标
- **样式代码**：
```css
.icon-duotone {
  fill: var(--cb-gradient-cyber);
  filter: drop-shadow(0 0 5px var(--cb-color-primary-glow));
}
```

#### 图标使用规则
1. **一致性**：同一功能使用相同图标
2. **可识别性**：图标含义清晰，易于理解
3. **可访问性**：提供替代文本
4. **响应式**：根据屏幕大小调整图标尺寸
5. **状态变化**：不同状态使用不同颜色和效果

### 插画风格（Illustration Style）

#### 插画特征
- **风格描述**：赛博风格插画，未来科技感、金属质感、发光效果
- **色彩特征**：赛博蓝、赛博紫、赛博粉为主色调，金属色为辅助色
- **形状特征**：几何形状、电路纹理、全息效果
- **质感特征**：金属质感、发光效果、全息投影

#### 插画类型
##### 抽象插画（Abstract Illustration）
- **使用场景**：背景装饰、品牌展示、页面装饰
- **视觉描述**：几何形状、电路纹理、发光效果
- **色彩规则**：赛博蓝、赛博紫、赛博粉渐变
- **尺寸规格**：根据容器大小自适应

##### 功能插画（Functional Illustration）
- **使用场景**：功能说明、操作引导、错误提示
- **视觉描述**：具象化图标、赛博风格、发光效果
- **色彩规则**：主色填充，金属边框
- **尺寸规格**：200x200px、400x400px

##### 品牌插画（Brand Illustration）
- **使用场景**：品牌展示、营销页面、着陆页
- **视觉描述**：品牌元素、赛博风格、发光效果
- **色彩规则**：品牌色为主，金属色为辅
- **尺寸规格**：根据设计需求确定

#### 插画使用规则
1. **风格统一**：所有插画保持赛博风格
2. **色彩协调**：使用统一的色彩系统
3. **功能导向**：插画服务于功能，不装饰
4. **性能优化**：使用SVG格式，优化文件大小
5. **可访问性**：提供替代文本

### 设计原则（Design Principles）

#### 图标设计原则
1. **简洁性**：图标设计简洁明了，易于识别
2. **一致性**：图标风格保持一致
3. **可扩展性**：图标可缩放不失真
4. **可访问性**：提供替代文本
5. **性能优先**：使用SVG格式，优化文件大小

#### 插画设计原则
1. **功能性**：插画服务于功能，不装饰
2. **一致性**：插画风格保持一致
3. **品牌性**：插画体现品牌特征
4. **性能优化**：使用SVG格式，优化文件大小
5. **可访问性**：提供替代文本

---

## 7. 交互与动效原则（Interaction & Motion）

### 交互行为（Interaction Behavior）

#### 悬停行为（Hover Behavior）
- **持续时间**：300ms
- **缓动函数**：cubic-bezier(0.4, 0, 0.2, 1)
- **效果描述**：颜色变化、发光效果增强、轻微上移
- **适用组件**：按钮、卡片、导航、链接
- **样式代码**：
```css
.hover-effect {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-effect:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px var(--cb-color-primary-glow);
}
```

#### 激活行为（Active Behavior）
- **持续时间**：150ms
- **缓动函数**：cubic-bezier(0.4, 0, 0.2, 1)
- **效果描述**：轻微缩小、发光效果减弱
- **适用组件**：按钮、卡片、导航
- **样式代码**：
```css
.active-effect {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.active-effect:active {
  transform: translateY(0);
  box-shadow: 0 0 10px var(--cb-color-primary-glow);
}
```

#### 焦点行为（Focus Behavior）
- **持续时间**：200ms
- **缓动函数**：cubic-bezier(0.4, 0, 0.2, 1)
- **效果描述**：边框发光、焦点环显示
- **适用组件**：输入框、按钮、导航
- **样式代码**：
```css
.focus-effect {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.focus-effect:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--cb-color-primary-glow);
}
```

### 动效原则（Motion Principles）

#### 动效节奏（Motion Rhythm）
- **快速动效**：150ms - 200ms，用于微交互
- **标准动效**：300ms - 400ms，用于常规交互
- **慢速动效**：500ms - 600ms，用于页面切换
- **缓动函数**：cubic-bezier(0.4, 0, 0.2, 1)

#### 动效类型
##### 淡入淡出（Fade In/Out）
- **使用场景**：页面切换、模态框、提示信息
- **持续时间**：300ms
- **缓动函数**：cubic-bezier(0.4, 0, 0.2, 1)
- **样式代码**：
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

##### 滑动（Slide）
- **使用场景**：侧边栏、抽屉、导航
- **持续时间**：400ms
- **缓动函数**：cubic-bezier(0.4, 0, 0.2, 1)
- **样式代码**：
```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.slide-in {
  animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

##### 缩放（Scale）
- **使用场景**：模态框、弹窗、提示信息
- **持续时间**：300ms
- **缓动函数**：cubic-bezier(0.4, 0, 0.2, 1)
- **样式代码**：
```css
@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.scale-in {
  animation: scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

##### 发光（Glow）
- **使用场景**：按钮悬停、卡片悬停、输入框焦点
- **持续时间**：300ms
- **缓动函数**：cubic-bezier(0.4, 0, 0.2, 1)
- **样式代码**：
```css
@keyframes glow {
  from {
    box-shadow: 0 0 10px var(--cb-color-primary-glow);
  }
  to {
    box-shadow: 0 0 30px var(--cb-color-primary-glow);
  }
}

.glow-effect {
  animation: glow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 操作反馈（Feedback Design）

#### 成功反馈（Success Feedback）
- **视觉反馈**：赛博绿文字或图标 + 发光效果
- **触觉反馈**：轻微震动（移动端）
- **持续时间**：2000ms
- **样式代码**：
```css
.feedback-success {
  color: var(--cb-color-success);
  text-shadow: 0 0 10px var(--cb-color-success-glow);
}
```

#### 错误反馈（Error Feedback）
- **视觉反馈**：赛博红文字或图标 + 发光效果
- **触觉反馈**：明显震动（移动端）
- **持续时间**：3000ms
- **样式代码**：
```css
.feedback-error {
  color: var(--cb-color-error);
  text-shadow: 0 0 10px var(--cb-color-error-glow);
}
```

#### 警告反馈（Warning Feedback）
- **视觉反馈**：赛博黄文字或图标 + 发光效果
- **触觉反馈**：中等震动（移动端）
- **持续时间**：2500ms
- **样式代码**：
```css
.feedback-warning {
  color: var(--cb-color-warning);
  text-shadow: 0 0 10px var(--cb-color-warning-glow);
}
```

#### 信息反馈（Info Feedback）
- **视觉反馈**：赛博青文字或图标 + 发光效果
- **触觉反馈**：轻微震动（移动端）
- **持续时间**：2000ms
- **样式代码**：
```css
.feedback-info {
  color: var(--cb-color-info);
  text-shadow: 0 0 10px var(--cb-color-info-glow);
}
```

### 动效性能（Motion Performance）

#### 性能优化原则
1. **使用CSS动画**：优先使用CSS动画而非JavaScript动画
2. **使用transform和opacity**：使用transform和opacity属性，避免使用width、height、left、top属性
3. **使用will-change**：使用will-change属性优化性能
4. **避免强制同步布局**：避免强制同步布局（Force Synchronous Layout）
5. **使用requestAnimationFrame**：使用requestAnimationFrame进行动画控制

#### 性能优化代码
```css
/* 使用transform和opacity */
.optimized-animation {
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 使用will-change */
.will-change-transform {
  will-change: transform;
}

/* 避免强制同步布局 */
.avoid-layout-thrashing {
  /* 使用transform而非left/top */
  transform: translateX(100px);
  /* 使用opacity而非display */
  opacity: 0;
  pointer-events: none;
}
```

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
  /* 主色调 */
  --cb-color-primary: #00D4FF;
  --cb-color-primary-light: #4DE1FF;
  --cb-color-primary-dark: #00A8CC;
  --cb-color-primary-glow: rgba(0, 212, 255, 0.5);

  --cb-color-secondary: #9D00FF;
  --cb-color-secondary-light: #BD33FF;
  --cb-color-secondary-dark: #7A00CC;
  --cb-color-secondary-glow: rgba(157, 0, 255, 0.5);

  --cb-color-accent: #FF006E;
  --cb-color-accent-light: #FF3385;
  --cb-color-accent-dark: #CC0058;
  --cb-color-accent-glow: rgba(255, 0, 110, 0.5);

  /* 金属色系 */
  --cb-metal-silver: #C0C0C0;
  --cb-metal-silver-light: #E0E0E0;
  --cb-metal-silver-dark: #A0A0A0;

  --cb-metal-gold: #FFD700;
  --cb-metal-gold-light: #FFE44D;
  --cb-metal-gold-dark: #CCAA00;

  --cb-metal-copper: #B87333;
  --cb-metal-copper-light: #D4955C;
  --cb-metal-copper-dark: #945A28;

  /* 中性色系 */
  --cb-bg-primary: #0A0A0F;
  --cb-bg-secondary: #12121A;
  --cb-bg-tertiary: #1A1A26;
  --cb-bg-elevated: #222230;

  --cb-text-primary: #FFFFFF;
  --cb-text-secondary: #B0B0C0;
  --cb-text-tertiary: #707080;
  --cb-text-disabled: #404050;

  --cb-border-primary: #2A2A3A;
  --cb-border-secondary: #3A3A4A;
  --cb-border-accent: #00D4FF;

  /* 语义色系 */
  --cb-color-success: #00FF94;
  --cb-color-success-light: #33FFAD;
  --cb-color-success-dark: #00CC76;
  --cb-color-success-glow: rgba(0, 255, 148, 0.4);

  --cb-color-warning: #FFD600;
  --cb-color-warning-light: #FFDF33;
  --cb-color-warning-dark: #CCAB00;
  --cb-color-warning-glow: rgba(255, 214, 0, 0.4);

  --cb-color-error: #FF2A2A;
  --cb-color-error-light: #FF5555;
  --cb-color-error-dark: #CC2222;
  --cb-color-error-glow: rgba(255, 42, 42, 0.4);

  --cb-color-info: #00E5FF;
  --cb-color-info-light: #33EBFF;
  --cb-color-info-dark: #00B8CC;
  --cb-color-info-glow: rgba(0, 229, 255, 0.4);

  /* 渐变色系 */
  --cb-gradient-cyber: linear-gradient(135deg, #00D4FF 0%, #9D00FF 100%);
  --cb-gradient-neon: linear-gradient(135deg, #FF006E 0%, #9D00FF 100%);
  --cb-gradient-aurora: linear-gradient(135deg, #00E5FF 0%, #00D4FF 100%);
  --cb-gradient-metal: linear-gradient(135deg, #C0C0C0 0%, #808080 100%);
  --cb-gradient-deep: linear-gradient(135deg, #0A0A0F 0%, #1A1A26 100%);
}
```

### Spacing Tokens
```css
:root {
  /* 间距系统 */
  --cb-spacing-xs: 0.25rem (4px);
  --cb-spacing-sm: 0.5rem (8px);
  --cb-spacing-md: 1rem (16px);
  --cb-spacing-lg: 1.5rem (24px);
  --cb-spacing-xl: 2rem (32px);
  --cb-spacing-2xl: 3rem (48px);
  --cb-spacing-3xl: 4rem (64px);

  /* 容器间距 */
  --cb-container-padding-mobile: 1rem (16px);
  --cb-container-padding-tablet: 1.5rem (24px);
  --cb-container-padding-desktop: 2rem (32px);
  --cb-container-padding-large: 2.5rem (40px);

  /* 栅格间距 */
  --cb-grid-gutter: 1.5rem (24px);
  --cb-grid-margin: 2rem (32px);
}
```

### Radius Tokens
```css
:root {
  /* 圆角系统 */
  --cb-radius-none: 0;
  --cb-radius-sm: 0.25rem (4px);
  --cb-radius-md: 0.375rem (6px);
  --cb-radius-lg: 0.5rem (8px);
  --cb-radius-xl: 0.75rem (12px);
  --cb-radius-2xl: 1rem (16px);
  --cb-radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
  /* 阴影系统 */
  --cb-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --cb-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
  --cb-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.3);
  --cb-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.3);

  /* 发光效果 */
  --cb-glow-primary: 0 0 20px var(--cb-color-primary-glow);
  --cb-glow-secondary: 0 0 20px var(--cb-color-secondary-glow);
  --cb-glow-accent: 0 0 20px var(--cb-color-accent-glow);
  --cb-glow-success: 0 0 20px var(--cb-color-success-glow);
  --cb-glow-warning: 0 0 20px var(--cb-color-warning-glow);
  --cb-glow-error: 0 0 20px var(--cb-color-error-glow);
  --cb-glow-info: 0 0 20px var(--cb-color-info-glow);
}
```

### Typography Tokens
```css
:root {
  /* 字体家族 */
  --cb-font-primary: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --cb-font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', monospace;
  --cb-font-display: 'Orbitron', 'Rajdhani', 'Exo 2', sans-serif;

  /* 字号系统 */
  --cb-font-size-hero: 4rem (64px);
  --cb-font-size-h1: 3rem (48px);
  --cb-font-size-h2: 2.25rem (36px);
  --cb-font-size-h3: 1.75rem (28px);
  --cb-font-size-h4: 1.5rem (24px);
  --cb-font-size-h5: 1.25rem (20px);
  --cb-font-size-body: 1rem (16px);
  --cb-font-size-small: 0.875rem (14px);
  --cb-font-size-tiny: 0.75rem (12px);

  /* 行高系统 */
  --cb-line-height-tight: 1.1;
  --cb-line-height-normal: 1.5;
  --cb-line-height-relaxed: 1.6;
  --cb-line-height-loose: 1.8;

  /* 字重系统 */
  --cb-font-weight-light: 300;
  --cb-font-weight-regular: 400;
  --cb-font-weight-medium: 500;
  --cb-font-weight-semibold: 600;
  --cb-font-weight-bold: 700;

  /* 字间距系统 */
  --cb-letter-spacing-tight: -0.02em;
  --cb-letter-spacing-normal: 0;
  --cb-letter-spacing-wide: 0.05em;
  --cb-letter-spacing-wider: 0.1em;
}
```

### Transition Tokens
```css
:root {
  /* 过渡持续时间 */
  --cb-transition-fast: 150ms;
  --cb-transition-normal: 300ms;
  --cb-transition-slow: 500ms;

  /* 缓动函数 */
  --cb-ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --cb-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --cb-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --cb-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Z-Index Tokens
```css
:root {
  /* 层级系统 */
  --cb-z-dropdown: 1000;
  --cb-z-sticky: 1020;
  --cb-z-fixed: 1030;
  --cb-z-modal-backdrop: 1040;
  --cb-z-modal: 1050;
  --cb-z-popover: 1060;
  --cb-z-tooltip: 1070;
}
```

### Breakpoint Tokens
```css
:root {
  /* 断点系统 */
  --cb-breakpoint-mobile: 640px;
  --cb-breakpoint-tablet: 1024px;
  --cb-breakpoint-desktop: 1280px;
  --cb-breakpoint-large: 1536px;
}
```

---

## 9. 合法复刻建议（Important）

### 可学习的元素（Learnable Elements）

#### 设计规则（Design Rules）
✅ **可以学习**：
- **色彩系统**：主色、辅助色、中性色的使用规则和命名规范
- **字体系统**：字体家族、字号层级、行高、字重的使用规则
- **间距系统**：4px基准的间距规则，留白密度的控制
- **圆角系统**：统一圆角的使用规则（0.25rem、0.375rem、0.5rem）
- **阴影系统**：阴影层级的控制，发光效果的实现方式
- **渐变系统**：渐变色的使用规则，渐变角度的控制

#### 组件规范（Component Specifications）
✅ **可以学习**：
- **按钮组件**：不同变体（主按钮、次按钮、文字按钮）的设计规范
- **卡片组件**：不同变体（基础卡片、发光卡片、金属卡片）的设计规范
- **输入框组件**：不同状态（默认、错误、禁用）的设计规范
- **导航组件**：不同类型（顶部导航、侧边导航、面包屑）的设计规范
- **图标组件**：不同变体（线性图标、填充图标、双色图标）的设计规范

#### 交互原则（Interaction Principles）
✅ **可以学习**：
- **悬停行为**：悬停效果的设计规则（颜色变化、发光效果、轻微上移）
- **激活行为**：激活效果的设计规则（轻微缩小、发光效果减弱）
- **焦点行为**：焦点效果的设计规则（边框发光、焦点环显示）
- **动效节奏**：不同动效的持续时间（快速150ms、标准300ms、慢速500ms）
- **反馈机制**：不同反馈的设计规则（成功、错误、警告、信息）

#### 布局规则（Layout Rules）
✅ **可以学习**：
- **栅格系统**：12列栅格的使用规则，间距和边距的控制
- **版心宽度**：不同屏幕尺寸的版心宽度控制
- **响应式断点**：断点的设置规则（640px、1024px、1280px、1536px）
- **布局模式**：不同布局模式的使用场景（卡片式、网格式、分栏式、全屏式）

### 不应复刻的元素（Non-Replicable Elements）

❌ **不应复刻**：
- **品牌元素**：品牌Logo、品牌名称、品牌口号
- **具体插画**：插画的具体内容、人物形象、场景设计
- **具体图标**：图标的具体形状、设计细节
- **文案内容**：具体的文字内容、标语、说明文字
- **图片素材**：具体的图片、照片、素材
- **音频素材**：具体的音频、音效、背景音乐
- **视频素材**：具体的视频、动画片段

### 合法使用建议（Legal Usage Guidelines）

#### 风格复刻（Style Replication）
✅ **可以复刻**：
- **设计语言**：赛博风格的设计语言和视觉特征
- **设计原则**：清晰性、一致性、可访问性、可扩展性
- **设计系统**：组件系统、色彩系统、字体系统、间距系统
- **交互模式**：悬停、激活、焦点等交互模式
- **动效规则**：动效节奏、缓动函数、过渡效果

#### 内容创作（Content Creation）
✅ **可以创作**：
- **原创插画**：基于赛博风格的原创插画
- **原创图标**：基于赛博风格的原创图标
- **原创文案**：符合赛博风格的原创文案
- **原创图片**：符合赛博风格的原创图片
- **原创音频**：符合赛博风格的原创音频

#### 版权保护（Copyright Protection）
❌ **禁止使用**：
- **受版权保护的材料**：未经授权使用受版权保护的材料
- **商标元素**：未经授权使用商标元素
- **专利设计**：未经授权使用专利设计
- **商业秘密**：未经授权使用商业秘密

### 最佳实践（Best Practices）

#### 设计实践（Design Practices）
1. **原创设计**：基于赛博风格进行原创设计，避免直接复制
2. **风格借鉴**：借鉴赛博风格的设计语言和视觉特征
3. **系统化设计**：建立完整的设计系统，确保一致性
4. **可访问性**：遵循WCAG 2.1 AA标准，确保可访问性
5. **性能优化**：优化设计资源，提高加载性能

#### 开发实践（Development Practices）
1. **使用Design Token**：使用Design Token管理设计变量
2. **组件化开发**：基于组件进行开发，提高复用性
3. **响应式设计**：实现响应式设计，适配不同屏幕
4. **性能优化**：优化代码和资源，提高性能
5. **可维护性**：编写清晰的代码，提高可维护性

#### 法律实践（Legal Practices）
1. **版权意识**：尊重版权，避免侵权
2. **商标意识**：尊重商标，避免混淆
3. **专利意识**：尊重专利，避免侵权
4. **合规使用**：遵守相关法律法规
5. **合法授权**：获取必要的授权和许可

---

## 附录（Appendix）

### 资源链接（Resources）
- **字体资源**：Inter、JetBrains Mono、Orbitron
- **图标资源**：Heroicons、Lucide Icons、Tabler Icons
- **色彩工具**：Coolors、Adobe Color、Paletton
- **设计工具**：Figma、Sketch、Adobe XD
- **开发工具**：VS Code、WebStorm、Sublime Text

### 参考案例（References）
- **科技产品**：Stripe、Vercel、Linear
- **SaaS产品**：Notion、Slack、Figma
- **游戏应用**：Cyberpunk 2077、Deus Ex、Mass Effect
- **创新品牌**：Tesla、SpaceX、Neuralink

### 更新日志（Changelog）
- **v1.0.0** (2024-01-01)：初始版本发布
- **v1.1.0** (2024-02-01)：新增组件规范
- **v1.2.0** (2024-03-01)：优化动效系统
- **v1.3.0** (2024-04-01)：完善Design Token

### 贡献指南（Contributing）
欢迎贡献和反馈！请通过以下方式参与：
- 提交Issue报告问题
- 提交Pull Request改进文档
- 分享使用经验和最佳实践

### 许可证（License）
本设计系统遵循MIT许可证，允许自由使用和修改。

---

**Cyborg Design System** - 赛博风格设计系统，为未来科技产品而生。
