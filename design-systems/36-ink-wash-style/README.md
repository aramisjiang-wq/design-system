# 水墨风格（Ink Wash Style）

---

## 1. 设计风格总览（Design DNA）

### 风格关键词
- **水墨晕染**：模拟水墨在宣纸上晕染的效果，使用柔和的渐变和模糊
- **留白艺术**：大量使用留白，营造禅意和呼吸感
- **自然流动**：线条和色彩自然流动，避免生硬的边界
- **黑白层次**：通过黑白灰的层次建立视觉深度

### 适用产品类型
- **文化类产品**：艺术展览、传统文化平台、博物馆网站
- **生活方式应用**：茶文化、冥想应用、健康管理
- **品牌官网**：需要营造高端、文化感的品牌展示页面
- **教育类应用**：在线教育、知识分享平台

### 设计原则
1. **留白为美**：大量使用留白，营造禅意氛围
2. **自然流动**：色彩和线条自然流动，避免生硬边界
3. **层次分明**：通过黑白灰的层次建立视觉深度
4. **简洁克制**：保持简洁，避免过度装饰

---

## 2. 颜色系统（Color System）

### 主色（Primary Colors）
水墨风格的主色以中国传统水墨画的色彩为灵感，包括黑、白、灰以及传统色彩。

```css
/* 主色 - 墨黑 */
--iws-color-primary: #1A1A1A;
--iws-color-primary-light: #333333;
--iws-color-primary-dark: #000000;

/* 主色 - 宣白 */
--iws-color-secondary: #FAFAFA;
--iws-color-secondary-light: #FFFFFF;
--iws-color-secondary-dark: #E5E5E5;

/* 主色 - 朱砂红 */
--iws-color-accent: #C83030;
--iws-color-accent-light: #E55C5C;
--iws-color-accent-dark: #A82525;
```

**使用场景**：
- 主色（黑）：用于主要文字、边框、强调元素
- 次色（白）：用于背景、卡片、容器
- 强调色（红）：用于重要信息、品牌元素、装饰点缀

### 渐变色（Gradient Colors）
水墨风格的渐变强调自然晕染效果。

```css
/* 主渐变 - 水墨晕染 */
--iws-gradient-primary: linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.8) 50%, transparent 100%);

/* 次渐变 - 墨色流动 */
--iws-gradient-secondary: radial-gradient(circle, rgba(26, 26, 26, 0.1) 0%, transparent 70%);

/* 强调渐变 - 朱砂晕染 */
--iws-gradient-accent: linear-gradient(135deg, #C83030 0%, rgba(200, 48, 48, 0.6) 100%);
```

**使用场景**：
- 主渐变：用于背景装饰、阴影效果
- 次渐变：用于柔和的背景装饰
- 强调渐变：用于装饰性元素、品牌元素

### 中性色（Neutral Colors）
中性色采用不同深浅的灰色，模拟水墨的层次。

```css
/* 背景 */
--iws-color-bg-primary: #FAFAFA;
--iws-color-bg-secondary: #F5F5F5;
--iws-color-bg-tertiary: #E8E8E8;

/* 文字 */
--iws-color-text-primary: #1A1A1A;
--iws-color-text-secondary: #666666;
--iws-color-text-tertiary: #999999;

/* 边框 */
--iws-color-border: rgba(26, 26, 26, 0.1);
--iws-color-border-hover: rgba(26, 26, 26, 0.2);
```

**使用场景**：
- 背景：浅色背景营造留白效果
- 文字：黑色系文字确保在浅色背景上的可读性
- 边框：半透明边框保持整体柔和感

### 语义色（Semantic Colors）
语义色保持水墨主题的克制特性。

```css
/* 成功 */
--iws-color-success: #2E7D32;
--iws-color-success-bg: rgba(46, 125, 50, 0.1);

/* 警告 */
--iws-color-warning: #F57C00;
--iws-color-warning-bg: rgba(245, 124, 0, 0.1);

/* 错误 */
--iws-color-error: #C62828;
--iws-color-error-bg: rgba(198, 40, 40, 0.1);

/* 信息 */
--iws-color-info: #1565C0;
--iws-color-info-bg: rgba(21, 101, 192, 0.1);
```

**使用场景**：
- 成功：操作成功、状态正常
- 警告：需要注意的状态
- 错误：操作失败、错误提示
- 信息：一般信息提示

### Design Token 命名建议
```css
/* 颜色 Token */
--iws-color-{category}-{shade}-{variant}
/* 示例 */
--iws-color-primary-light
--iws-color-bg-secondary
--iws-color-success-bg
```

---

## 3. 字体与排版（Typography）

### 字体家族
水墨风格使用衬线字体，配合传统书法风格。

```css
/* 主字体 - 衬线字体 */
--iws-font-family: "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "Times New Roman", serif;

/* 备用字体 - 无衬线字体 */
--iws-font-family-fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

/* 书法字体 - 用于标题 */
--iws-font-family-calligraphy: "Ma Shan Zheng", "ZCOOL XiaoWei", "STKaiti", "KaiTi", serif;
```

**字体选择理由**：
- 衬线字体：体现传统文化韵味
- 书法字体：用于标题，增强艺术感
- 系统字体：确保跨平台兼容性

### 字号层级
```css
/* 标题 */
--iws-font-size-h1: 3.5rem (56px);
--iws-font-size-h2: 2.75rem (44px);
--iws-font-size-h3: 2.25rem (36px);
--iws-font-size-h4: 1.75rem (28px);
--iws-font-size-h5: 1.5rem (24px);
--iws-font-size-h6: 1.25rem (20px);

/* 正文 */
--iws-font-size-body: 1.125rem (18px);
--iws-font-size-body-large: 1.25rem (20px);
--iws-font-size-body-small: 1rem (16px);

/* 辅助文字 */
--iws-font-size-caption: 0.875rem (14px);
--iws-font-size-overline: 0.75rem (12px);
```

### 行高与字重
```css
/* 行高 */
--iws-line-height-tight: 1.4;
--iws-line-height-normal: 1.8;
--iws-line-height-relaxed: 2.2;

/* 字重 */
--iws-font-weight-light: 300;
--iws-font-weight-regular: 400;
--iws-font-weight-medium: 500;
--iws-font-weight-semibold: 600;
--iws-font-weight-bold: 700;
```

### 排版规则
1. **标题层级**：
   - H1：页面主标题，使用书法字体，Bold字重
   - H2：章节标题，使用衬线字体，Semibold字重
   - H3：子章节标题，使用衬线字体，Medium字重
   - H4-H6：小标题，使用衬线字体，Regular字重

2. **正文规范**：
   - 常规正文：Regular字重，1.8行高
   - 强调内容：Medium字重
   - 重要信息：Semibold字重

3. **字间距**：
   - 标题：0.02em（略微宽松）
   - 正文：0.05em（宽松）
   - 小字：0.1em（更宽松）

4. **排版节奏**：
   - 保持宽松的垂直间距（使用12px倍数）
   - 标题与正文之间使用更大的间距
   - 段落之间使用2倍行高

5. **竖排文字**：
   - 特殊场景可使用竖排文字（writing-mode: vertical-rl）
   - 用于装饰性标题或传统元素

### 响应式字体
```css
/* 移动端（< 640px） */
--iws-font-size-h1-mobile: 2.5rem (40px);
--iws-font-size-h2-mobile: 2rem (32px);
--iws-font-size-h3-mobile: 1.5rem (24px);
--iws-font-size-body-mobile: 1rem (16px);

/* 平板端（640px - 1024px） */
--iws-font-size-h1-tablet: 3rem (48px);
--iws-font-size-h2-tablet: 2.25rem (36px);
--iws-font-size-h3-tablet: 1.75rem (28px);
--iws-font-size-body-tablet: 1.0625rem (17px);

/* 桌面端（> 1024px） */
--iws-font-size-h1-desktop: 3.5rem (56px);
--iws-font-size-h2-desktop: 2.75rem (44px);
--iws-font-size-h3-desktop: 2.25rem (36px);
--iws-font-size-body-desktop: 1.125rem (18px);
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
/* 版心宽度 */
--iws-container-max-width: 1200px;
--iws-container-medium-width: 960px;
--iws-container-small-width: 720px;

/* 页面边距 */
--iws-page-padding: 4rem (64px);
--iws-page-padding-mobile: 2rem (32px);
```

### 栅格系统
```css
/* 栅格列数 */
--iws-grid-columns: 12;

/* 栅格间距 */
--iws-grid-gutter: 3rem (48px);
--iws-grid-gutter-mobile: 2rem (32px);

/* 栅格边距 */
--iws-grid-margin: 4rem (64px);
--iws-grid-margin-mobile: 2rem (32px);
```

### 响应式断点
```css
/* 断点定义 */
--iws-breakpoint-mobile: 640px;
--iws-breakpoint-tablet: 768px;
--iws-breakpoint-desktop: 1024px;
--iws-breakpoint-large: 1280px;
--iws-breakpoint-xlarge: 1536px;
```

### 留白密度
水墨风格采用**大量留白**，营造禅意和呼吸感。

```css
/* 间距系统 */
--iws-spacing-xs: 1rem (16px);
--iws-spacing-sm: 2rem (32px);
--iws-spacing-md: 3rem (48px);
--iws-spacing-lg: 4rem (64px);
--iws-spacing-xl: 6rem (96px);
--iws-spacing-2xl: 8rem (128px);
--iws-spacing-3xl: 12rem (192px);
```

**使用场景**：
- xs：元素内部间距、图标与文字间距
- sm：小元素间距、标签内边距
- md：常规元素间距、卡片内边距
- lg：模块间距、章节间距
- xl：大模块间距、主要分区间距
- 2xl：页面级间距
- 3xl：顶级间距、页面边距

### 布局模式
1. **固定布局**：用于内容密集型页面，最大宽度1200px
2. **流式布局**：用于响应式页面，自适应屏幕宽度
3. **弹性布局**：用于组件内部布局，使用Flexbox
4. **网格布局**：用于复杂页面布局，使用CSS Grid

### 信息密度判断
水墨风格采用**低信息密度**，通过大量留白营造禅意氛围。

---

## 5. 核心 UI 组件规范（Component System）

### 按钮（Button）

#### 组件概述
按钮采用简洁的方形设计，配合水墨晕染效果。

#### 尺寸规范
```css
/* 小号按钮 */
--iws-button-small-height: 40px;
--iws-button-small-padding: 0.75rem 1.5rem;
--iws-button-small-font-size: 0.875rem;

/* 中号按钮 */
--iws-button-medium-height: 48px;
--iws-button-medium-padding: 1rem 2rem;
--iws-button-medium-font-size: 1rem;

/* 大号按钮 */
--iws-button-large-height: 56px;
--iws-button-large-padding: 1.25rem 2.5rem;
--iws-button-large-font-size: 1.125rem;
```

#### 状态规范
```css
/* 主按钮 */
--iws-button-primary-bg: #1A1A1A;
--iws-button-primary-text: #FFFFFF;
--iws-button-primary-border: 1px solid #1A1A1A;
--iws-button-primary-radius: 0;
--iws-button-primary-shadow: none;

/* 次按钮 */
--iws-button-secondary-bg: transparent;
--iws-button-secondary-text: #1A1A1A;
--iws-button-secondary-border: 1px solid rgba(26, 26, 26, 0.3);
--iws-button-secondary-radius: 0;

/* 文字按钮 */
--iws-button-text-bg: transparent;
--iws-button-text-text: #1A1A1A;
--iws-button-text-border: transparent;
```

#### 交互状态
```css
/* 悬停状态 */
--iws-button-primary-hover-bg: #333333;
--iws-button-secondary-hover-bg: rgba(26, 26, 26, 0.05);
--iws-button-text-hover-text: #C83030;

/* 激活状态 */
--iws-button-primary-active-bg: #000000;
--iws-button-secondary-active-bg: rgba(26, 26, 26, 0.1);

/* 禁用状态 */
--iws-button-disabled-bg: #E5E5E5;
--iws-button-disabled-text: #999999;
--iws-button-disabled-border: 1px solid #E5E5E5;
```

#### 过渡动画
```css
--iws-button-transition: all 0.3s ease-out;
```

---

### 卡片（Card）

#### 组件概述
卡片采用简洁的方形设计，配合水墨晕染效果。

#### 基础样式
```css
/* 卡片背景 */
--iws-card-bg: #FFFFFF;
--iws-card-backdrop-filter: none;

/* 卡片边框 */
--iws-card-border: 1px solid rgba(26, 26, 26, 0.1);
--iws-card-border-radius: 0;

/* 卡片阴影 */
--iws-card-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

/* 卡片内边距 */
--iws-card-padding: 3rem (48px);
```

#### 悬浮效果
```css
/* 悬浮状态 */
--iws-card-hover-bg: #FFFFFF;
--iws-card-hover-border: 1px solid rgba(26, 26, 26, 0.2);
--iws-card-hover-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
--iws-card-hover-transform: translateY(-2px);
```

#### 使用场景
- 信息展示：用于展示产品、服务、文章等
- 数据展示：用于展示统计数据、图表等
- 内容分组：用于组织相关内容

---

### 输入框（Input）

#### 组件概述
输入框采用简洁的方形设计，配合水墨晕染效果。

#### 基础样式
```css
/* 输入框背景 */
--iws-input-bg: #FFFFFF;
--iws-input-border: 1px solid rgba(26, 26, 26, 0.2);
--iws-input-border-radius: 0;

/* 输入框文字 */
--iws-input-text: #1A1A1A;
--iws-input-placeholder: #999999;

/* 输入框内边距 */
--iws-input-padding: 1rem 1.5rem;
```

#### 焦点状态
```css
/* 焦点边框 */
--iws-input-focus-border: #1A1A1A;
--iws-input-focus-shadow: 0 0 0 2px rgba(26, 26, 26, 0.1);
```

#### 错误状态
```css
/* 错误边框 */
--iws-input-error-border: #C62828;
--iws-input-error-shadow: 0 0 0 2px rgba(198, 40, 40, 0.1);
```

#### 禁用状态
```css
/* 禁用背景 */
--iws-input-disabled-bg: #F5F5F5;
--iws-input-disabled-text: #999999;
--iws-input-disabled-border: 1px solid #E5E5E5;
```

---

### 导航（Navigation）

#### 组件概述
导航采用简洁的横向布局，配合水墨晕染效果。

#### 顶部导航
```css
/* 导航背景 */
--iws-nav-bg: rgba(250, 250, 250, 0.95);
--iws-nav-backdrop-filter: blur(10px);
--iws-nav-border: 1px solid rgba(26, 26, 26, 0.1);

/* 导航高度 */
--iws-nav-height: 5rem (80px);
--iws-nav-padding: 0 4rem;

/* 导航链接 */
--iws-nav-link-text: #666666;
--iws-nav-link-hover-text: #1A1A1A;
--iws-nav-link-active-text: #1A1A1A;
```

#### 侧边导航
```css
/* 侧边栏背景 */
--iws-sidebar-bg: #FAFAFA;
--iws-sidebar-width: 20rem (320px);

/* 侧边栏链接 */
--iws-sidebar-link-padding: 1.25rem 2rem;
--iws-sidebar-link-hover-bg: rgba(26, 26, 26, 0.05);
--iws-sidebar-link-active-bg: rgba(26, 26, 26, 0.1);
--iws-sidebar-link-active-text: #1A1A1A;
```

---

### 模态框（Modal）

#### 组件概述
模态框采用简洁的方形设计，配合水墨晕染效果。

#### 基础样式
```css
/* 遮罩层 */
--iws-modal-overlay-bg: rgba(0, 0, 0, 0.6);
--iws-modal-overlay-backdrop-filter: blur(4px);

/* 模态框 */
--iws-modal-bg: #FFFFFF;
--iws-modal-border: 1px solid rgba(26, 26, 26, 0.1);
--iws-modal-border-radius: 0;
--iws-modal-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);

/* 模态框内边距 */
--iws-modal-padding: 4rem;
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
水墨风格的图标采用**线性图标**风格，配合书法笔触。

```css
/* 图标颜色 */
--iws-icon-color: #1A1A1A;
--iws-icon-hover-color: #C83030;
--iws-icon-active-color: #C83030;

/* 图标样式 */
--iws-icon-stroke-width: 1.5px;
--iws-icon-linecap: round;
--iws-icon-linejoin: round;
```

**图标特点**：
- 线条粗细：1.5px
- 端点：圆角
- 连接点：圆角
- 风格：简洁、书法感
- 效果：悬停时颜色变化

### 插画风格
水墨风格的插画采用**传统水墨画风格**，强调笔触和留白。

**插画特点**：
- 风格：传统水墨画
- 色彩：黑白灰为主，点缀朱砂红
- 笔触：书法笔触
- 构图：留白艺术
- 用途：装饰、氛围营造

**设计原则**：
1. **弱化内容**：插画不干扰主要内容，仅作为背景装饰
2. **辅助理解**：插画用于营造氛围，不传达具体信息
3. **保持一致性**：所有插画遵循相同的风格和笔触
4. **适度使用**：避免过度使用插画，保持页面简洁

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 行为
水墨风格的悬停效果强调柔和的色彩变化。

```css
/* 按钮悬停 */
--iws-button-hover-duration: 0.3s;
--iws-button-hover-easing: ease-out;
--iws-button-hover-effect: 背景色变化;

/* 卡片悬停 */
--iws-card-hover-duration: 0.3s;
--iws-card-hover-easing: ease-out;
--iws-card-hover-effect: 轻微上移 + 阴影增强;

/* 链接悬停 */
--iws-link-hover-duration: 0.2s;
--iws-link-hover-easing: ease-out;
--iws-link-hover-effect: 颜色变化;
```

### Active 行为
激活状态采用轻微的缩小效果，提供触觉反馈。

```css
/* 按钮激活 */
--iws-button-active-duration: 0.15s;
--iws-button-active-easing: ease-out;
--iws-button-active-effect: scale(0.98);

/* 卡片激活 */
--iws-card-active-duration: 0.15s;
--iws-card-active-easing: ease-out;
--iws-card-active-effect: scale(0.99);
```

### Focus 行为
焦点状态采用明显的边框变化，确保可访问性。

```css
/* 焦点环 */
--iws-focus-ring: 0 0 0 2px rgba(26, 26, 26, 0.2);
--iws-focus-ring-duration: 0.2s;
--iws-focus-ring-easing: ease-out;
```

### 动效节奏
水墨风格的动效采用**柔和缓慢**的节奏。

```css
/* 标准动效 */
--iws-animation-duration: 0.4s;
--iws-animation-easing: ease-out;

/* 快速动效 */
--iws-animation-fast-duration: 0.3s;
--iws-animation-fast-easing: ease-out;

/* 慢速动效 */
--iws-animation-slow-duration: 0.6s;
--iws-animation-slow-easing: ease-out;
```

### 操作反馈设计原则
1. **即时反馈**：所有操作在300ms内提供视觉反馈
2. **柔和反馈**：反馈效果柔和，不刺眼
3. **克制反馈**：反馈效果克制，不过度
4. **一致反馈**：相同类型的操作使用相同的反馈效果

### 特殊动效
#### 水墨晕染效果
```css
/* 水墨晕染动画 */
@keyframes ink-wash {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* 应用 */
.ink-wash {
  animation: ink-wash 0.6s ease-out;
}
```

#### 笔触流动效果
```css
/* 笔触流动动画 */
@keyframes brush-flow {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

/* 应用 */
.brush-flow {
  stroke-dasharray: 1000;
  animation: brush-flow 1s ease-out;
}
```

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
  /* 主色 */
  --iws-color-primary: #1A1A1A;
  --iws-color-primary-light: #333333;
  --iws-color-primary-dark: #000000;
  
  --iws-color-secondary: #FAFAFA;
  --iws-color-secondary-light: #FFFFFF;
  --iws-color-secondary-dark: #E5E5E5;
  
  --iws-color-accent: #C83030;
  --iws-color-accent-light: #E55C5C;
  --iws-color-accent-dark: #A82525;
  
  /* 渐变 */
  --iws-gradient-primary: linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.8) 50%, transparent 100%);
  --iws-gradient-secondary: radial-gradient(circle, rgba(26, 26, 26, 0.1) 0%, transparent 70%);
  --iws-gradient-accent: linear-gradient(135deg, #C83030 0%, rgba(200, 48, 48, 0.6) 100%);
  
  /* 中性色 */
  --iws-color-bg-primary: #FAFAFA;
  --iws-color-bg-secondary: #F5F5F5;
  --iws-color-bg-tertiary: #E8E8E8;
  
  --iws-color-text-primary: #1A1A1A;
  --iws-color-text-secondary: #666666;
  --iws-color-text-tertiary: #999999;
  
  --iws-color-border: rgba(26, 26, 26, 0.1);
  --iws-color-border-hover: rgba(26, 26, 26, 0.2);
  
  /* 语义色 */
  --iws-color-success: #2E7D32;
  --iws-color-success-bg: rgba(46, 125, 50, 0.1);
  
  --iws-color-warning: #F57C00;
  --iws-color-warning-bg: rgba(245, 124, 0, 0.1);
  
  --iws-color-error: #C62828;
  --iws-color-error-bg: rgba(198, 40, 40, 0.1);
  
  --iws-color-info: #1565C0;
  --iws-color-info-bg: rgba(21, 101, 192, 0.1);
}
```

### Spacing Tokens
```css
:root {
  --iws-spacing-xs: 1rem;
  --iws-spacing-sm: 2rem;
  --iws-spacing-md: 3rem;
  --iws-spacing-lg: 4rem;
  --iws-spacing-xl: 6rem;
  --iws-spacing-2xl: 8rem;
  --iws-spacing-3xl: 12rem;
}
```

### Radius Tokens
```css
:root {
  --iws-radius-none: 0;
  --iws-radius-sm: 0.25rem;
  --iws-radius-md: 0.5rem;
  --iws-radius-lg: 0.75rem;
}
```

### Shadow Tokens
```css
:root {
  --iws-shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
  --iws-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --iws-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
  --iws-shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.16);
}
```

### Typography Tokens
```css
:root {
  --iws-font-family: "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", "Times New Roman", serif;
  --iws-font-family-fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --iws-font-family-calligraphy: "Ma Shan Zheng", "ZCOOL XiaoWei", "STKaiti", "KaiTi", serif;
  
  --iws-font-size-h1: 3.5rem;
  --iws-font-size-h2: 2.75rem;
  --iws-font-size-h3: 2.25rem;
  --iws-font-size-h4: 1.75rem;
  --iws-font-size-h5: 1.5rem;
  --iws-font-size-h6: 1.25rem;
  
  --iws-font-size-body: 1.125rem;
  --iws-font-size-body-large: 1.25rem;
  --iws-font-size-body-small: 1rem;
  
  --iws-font-size-caption: 0.875rem;
  --iws-font-size-overline: 0.75rem;
  
  --iws-line-height-tight: 1.4;
  --iws-line-height-normal: 1.8;
  --iws-line-height-relaxed: 2.2;
  
  --iws-font-weight-light: 300;
  --iws-font-weight-regular: 400;
  --iws-font-weight-medium: 500;
  --iws-font-weight-semibold: 600;
  --iws-font-weight-bold: 700;
}
```

### Animation Tokens
```css
:root {
  --iws-animation-duration: 0.4s;
  --iws-animation-easing: ease-out;
  
  --iws-animation-fast-duration: 0.3s;
  --iws-animation-fast-easing: ease-out;
  
  --iws-animation-slow-duration: 0.6s;
  --iws-animation-slow-easing: ease-out;
}
```

### Breakpoint Tokens
```css
:root {
  --iws-breakpoint-mobile: 640px;
  --iws-breakpoint-tablet: 768px;
  --iws-breakpoint-desktop: 1024px;
  --iws-breakpoint-large: 1280px;
  --iws-breakpoint-xlarge: 1536px;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）

#### 1. 色彩系统
✅ **可以学习**：
- 黑白灰的层次运用
- 大量留白的布局方式
- 柔和的色彩过渡
- 克制的色彩使用

**实现建议**：
- 使用不同深浅的灰色建立层次
- 保持大面积的留白
- 使用CSS渐变实现柔和过渡
- 限制色彩数量，保持克制

#### 2. 布局系统
✅ **可以学习**：
- 大量留白的布局
- 宽松的间距系统
- 简洁的方形设计
- 禅意的空间感

**实现建议**：
- 使用12px倍数的间距系统
- 保持大面积的留白
- 使用方形设计，避免圆角
- 营造禅意的空间感

#### 3. 交互设计
✅ **可以学习**：
- 柔和的悬停效果
- 克制的动画节奏
- 简洁的反馈机制
- 流畅的过渡动画

**实现建议**：
- 使用ease-out缓动函数
- 使用400ms的标准动画时长
- 保持反馈效果简洁
- 确保所有交互都有视觉反馈

#### 4. 动效设计
✅ **可以学习**：
- 水墨晕染效果
- 笔触流动效果
- 柔和的动画节奏
- 克制的动效使用

**实现建议**：
- 使用CSS keyframes实现水墨晕染
- 使用SVG stroke动画实现笔触流动
- 使用400ms的标准动画时长
- 保持动效使用的克制

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 1. 品牌元素
❌ **不应复刻**：
- 特定的品牌标识
- 品牌名称和标语
- 品牌特定的图标和符号
- 品牌特定的字体

**替代方案**：
- 创建自己的品牌标识
- 使用通用的图标库（如Material Icons、Feather Icons）
- 使用开源字体（如Noto Serif SC）

#### 2. 插画内容
❌ **不应复刻**：
- 特定的水墨画作品
- 插画中的具体元素
- 插画的构图和细节
- 插画的笔触和风格

**替代方案**：
- 创建自己的水墨风格插画
- 使用开源插画库（如Undraw、Humaaans）
- 使用简单的几何图形和线条

#### 3. 具体内容
❌ **不应复刻**：
- 文字内容
- 图片素材
- 数据和统计信息
- 用户生成内容

**替代方案**：
- 创建自己的内容
- 使用免费的图片素材网站（如Unsplash、Pexels）
- 使用占位符数据
- 鼓励用户生成内容

### 法律合规建议

#### 1. 版权保护
- 确保所有使用的素材都有合法的使用权
- 遵守开源协议（如MIT、Apache、GPL）
- 为原创作品添加版权声明
- 尊重他人的知识产权

#### 2. 商标保护
- 避免使用他人的商标
- 创建自己的品牌标识
- 注册自己的商标（如需要）
- 避免混淆用户

#### 3. 设计保护
- 创建原创的设计元素
- 避免直接复制他人的设计
- 记录设计过程和灵感来源
- 为原创设计申请设计专利（如需要）

#### 4. 数据保护
- 遵守数据保护法规（如GDPR、CCPA）
- 保护用户隐私
- 明确数据使用政策
- 提供数据删除选项

### 最佳实践

#### 1. 原创设计
- 从水墨风格中汲取灵感，但创建原创作品
- 结合自己的品牌和产品特点
- 保持设计的一致性和连贯性
- 持续迭代和优化设计

#### 2. 用户体验
- 优先考虑用户体验
- 确保设计符合可访问性标准
- 进行用户测试和反馈收集
- 根据用户反馈优化设计

#### 3. 技术实现
- 使用现代前端技术（如React、Vue、Svelte）
- 使用CSS预处理器（如Sass、Less）
- 使用设计系统工具（如Figma、Sketch）
- 使用组件库（如Material-UI、Ant Design）

#### 4. 文档和规范
- 创建详细的设计文档
- 建立设计规范和指南
- 提供代码示例和最佳实践
- 保持文档的更新和维护

---

## 附录

### 参考资源
- [水墨画灵感](https://www.pinterest.com/search/pins/?q=ink%20wash%20painting)
- [中国传统色彩](https://zh.wikipedia.org/wiki/中国传统色彩)
- [衬线字体选择](https://fonts.google.com/?category=Serif)
- [Web动画最佳实践](https://web.dev/animations-guide/)

### 工具推荐
- [Figma](https://www.figma.com/) - 设计工具
- [Coolors](https://coolors.co/) - 配色工具
- [CSS Tricks](https://css-tricks.com/) - CSS学习资源
- [MDN Web Docs](https://developer.mozilla.org/) - Web开发文档

### 社区资源
- [Dribbble](https://dribbble.com/) - 设计灵感
- [Behance](https://www.behance.net/) - 设计作品展示
- [Awwwards](https://www.awwwards.com/) - 网站设计奖项
- [CSS Awards](https://www.cssdesignawards.com/) - CSS设计奖项

---

**版本**：1.0.0  
**最后更新**：2026-02-02  
**维护者**：设计团队
