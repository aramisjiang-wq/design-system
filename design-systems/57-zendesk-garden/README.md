# Zendesk Garden Design System

## 1. 设计风格总览（Design DNA）

**核心关键词：**
- **Clean & Professional** - 干净专业
- **Accessible** - 无障碍优先
- **Scalable** - 可扩展性强
- **Customer-Centric** - 以客户为中心

**适用产品类型：**
- 客户支持系统
- SaaS 平台
- 企业级应用
- 帮助中心
- 知识库系统

**设计哲学：**
Zendesk Garden 强调清晰、可访问性和一致性。设计风格注重用户体验，通过简洁的界面和直观的交互，帮助用户快速完成任务。色彩系统温和而不失专业感，字体排版注重可读性，组件系统遵循原子设计原则。

---

## 2. 颜色系统（Color System）

### 2.1 品牌色（Brand Colors）

```css
:root {
  /* 主品牌色 - 蓝色 */
  --color-primary: #3B82F6;
  --color-primary-hover: #2563EB;
  --color-primary-active: #1D4ED8;
  --color-primary-light: #60A5FA;
  --color-primary-lighter: #93C5FD;
  --color-primary-dark: #1E40AF;
  --color-primary-darker: #1E3A8A;
}
```

**使用场景：**
- 主要操作按钮
- 重要链接
- 导航激活状态
- 关键交互元素

### 2.2 辅助色（Secondary Colors）

```css
:root {
  /* 辅助色板 */
  --color-secondary-1: #10B981;  /* 绿色 */
  --color-secondary-2: #F59E0B;  /* 橙色 */
  --color-secondary-3: #EF4444;  /* 红色 */
  --color-secondary-4: #8B5CF6;  /* 紫色 */
  --color-secondary-5: #EC4899;  /* 粉色 */
}
```

**使用场景：**
- 功能区分
- 标签分类
- 视觉层次
- 装饰元素

### 2.3 语义色（Semantic Colors）

```css
:root {
  /* 成功状态 */
  --color-success: #10B981;
  --color-success-hover: #059669;
  --color-success-light: #D1FAE5;
  --color-success-dark: #047857;

  /* 警告状态 */
  --color-warning: #F59E0B;
  --color-warning-hover: #D97706;
  --color-warning-light: #FEF3C7;
  --color-warning-dark: #B45309;

  /* 错误状态 */
  --color-error: #EF4444;
  --color-error-hover: #DC2626;
  --color-error-light: #FEE2E2;
  --color-error-dark: #B91C1C;

  /* 信息状态 */
  --color-info: #3B82F6;
  --color-info-hover: #2563EB;
  --color-info-light: #DBEAFE;
  --color-info-dark: #1E40AF;
}
```

**使用场景：**
- 表单验证反馈
- 通知提示
- 状态指示器
- 操作结果展示

### 2.4 中性色（Neutral Colors）

```css
:root {
  /* 背景色 */
  --color-bg-main: #FFFFFF;
  --color-bg-secondary: #F9FAFB;
  --color-bg-tertiary: #F3F4F6;
  --color-bg-inverse: #111827;
  --color-bg-overlay: rgba(0, 0, 0, 0.5);

  /* 文字色 */
  --color-text-main: #111827;
  --color-text-secondary: #4B5563;
  --color-text-tertiary: #9CA3AF;
  --color-text-inverse: #FFFFFF;
  --color-text-disabled: #D1D5DB;

  /* 边框色 */
  --color-border-main: #E5E7EB;
  --color-border-secondary: #D1D5DB;
  --color-border-tertiary: #F3F4F6;
  --color-border-inverse: #FFFFFF;
  --color-border-active: #3B82F6;

  /* 分隔线 */
  --color-divider: #E5E7EB;
}
```

**使用场景：**
- 页面背景
- 文字层次
- 边框和分隔线
- 禁用状态

### 2.5 Design Token 命名建议

```css
/* 颜色 Token 命名规范 */
--color-{brand}-{variant}-{shade}
--color-{semantic}-{state}-{shade}
--color-{category}-{type}-{shade}

/* 示例 */
--color-brand-primary-base
--color-semantic-success-light
--color-neutral-bg-secondary
```

---

## 3. 字体与排版（Typography）

### 3.1 字体家族

```css
:root {
  /* 主要字体 */
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  
  /* 代码字体 */
  --font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  
  /* 标题字体 */
  --font-family-heading: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

### 3.2 字号层级

```css
:root {
  /* 标题字号 */
  --font-size-h1: 2.5rem;      /* 40px */
  --font-size-h2: 2rem;        /* 32px */
  --font-size-h3: 1.5rem;      /* 24px */
  --font-size-h4: 1.25rem;     /* 20px */
  --font-size-h5: 1.125rem;    /* 18px */
  --font-size-h6: 1rem;        /* 16px */
  
  /* 正文字号 */
  --font-size-body-lg: 1.125rem;  /* 18px */
  --font-size-body: 1rem;          /* 16px */
  --font-size-body-sm: 0.875rem;   /* 14px */
  
  /* 辅助字号 */
  --font-size-caption: 0.75rem;    /* 12px */
  --font-size-overline: 0.625rem;  /* 10px */
}
```

### 3.3 行高与字重

```css
:root {
  /* 行高 */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  
  /* 字重 */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### 3.4 排版规则

**标题层级：**
- H1: 页面主标题，使用 40px，字重 600，行高 1.25
- H2: 章节标题，使用 32px，字重 600，行高 1.25
- H3: 小节标题，使用 24px，字重 600，行高 1.5
- H4: 卡片标题，使用 20px，字重 600，行高 1.5
- H5: 小标题，使用 18px，字重 500，行高 1.5
- H6: 副标题，使用 16px，字重 500，行高 1.5

**正文排版：**
- Body Large: 18px，字重 400，行高 1.5
- Body: 16px，字重 400，行高 1.5
- Body Small: 14px，字重 400，行高 1.5

**辅助文字：**
- Caption: 12px，字重 400，行高 1.5
- Overline: 10px，字重 500，行高 1.25，全大写

**排版节奏：**
- 标题与正文间距: 1rem (16px)
- 段落间距: 1.5rem (24px)
- 列表项间距: 0.5rem (8px)

---

## 4. 布局与栅格系统（Layout & Grid）

### 4.1 页面版心

```css
:root {
  /* 版心宽度 */
  --container-xs: 480px;
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
}
```

**使用场景：**
- XS: 移动设备（< 480px）
- SM: 小型平板（480px - 640px）
- MD: 平板设备（640px - 768px）
- LG: 桌面设备（768px - 1024px）
- XL: 大型桌面（1024px - 1280px）
- 2XL: 超大屏幕（> 1280px）

### 4.2 栅格系统

```css
:root {
  /* 栅格列数 */
  --grid-columns: 12;
  
  /* 间距 */
  --grid-gutter: 1.5rem;  /* 24px */
  --grid-margin: 1.5rem;  /* 24px */
  
  /* 列宽 */
  --grid-column-width: calc((100% - (var(--grid-gutter) * (var(--grid-columns) - 1))) / var(--grid-columns));
}
```

**栅格断点：**
```css
/* 响应式断点 */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### 4.3 间距系统

```css
:root {
  /* 基础间距单位 */
  --space-0: 0;
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.25rem;  /* 20px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-10: 2.5rem;  /* 40px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-20: 5rem;    /* 80px */
  --space-24: 6rem;    /* 96px */
}
```

### 4.4 留白与信息密度

**留白密度：**
- 页面顶部留白: 2rem (32px)
- 卡片内边距: 1.5rem (24px)
- 组件间距: 1rem (16px)
- 紧凑模式: 减少间距 25%

**信息密度：**
- 标准模式: 适中密度，平衡留白与信息
- 紧凑模式: 高密度，减少留白
- 宽松模式: 低密度，增加留白

---

## 5. 核心 UI 组件规范（Component System）

### 5.1 Button（按钮）

**尺寸规范：**
```css
:root {
  /* 按钮尺寸 */
  --button-height-sm: 2rem;    /* 32px */
  --button-height-md: 2.5rem;  /* 40px */
  --button-height-lg: 3rem;    /* 48px */
  
  /* 按钮内边距 */
  --button-padding-sm: 0.5rem 1rem;
  --button-padding-md: 0.75rem 1.5rem;
  --button-padding-lg: 1rem 2rem;
  
  /* 按钮圆角 */
  --button-radius: 0.375rem;  /* 6px */
}
```

**按钮状态：**
```css
/* 主要按钮 */
.button-primary {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  border: none;
}

.button-primary:hover {
  background-color: var(--color-primary-hover);
}

.button-primary:active {
  background-color: var(--color-primary-active);
}

.button-primary:disabled {
  background-color: var(--color-text-disabled);
  cursor: not-allowed;
}

/* 次要按钮 */
.button-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-border-main);
}

.button-secondary:hover {
  background-color: var(--color-bg-secondary);
  border-color: var(--color-border-active);
}

/* 文字按钮 */
.button-ghost {
  background-color: transparent;
  color: var(--color-primary);
  border: none;
}

.button-ghost:hover {
  background-color: var(--color-bg-secondary);
}
```

### 5.2 Card（卡片）

**卡片规范：**
```css
:root {
  /* 卡片尺寸 */
  --card-padding: 1.5rem;
  --card-radius: 0.5rem;
  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --card-shadow-hover: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
```

**使用场景：**
- 内容展示
- 信息聚合
- 功能模块
- 数据展示

**卡片结构：**
- 卡片头部: 标题 + 操作按钮
- 卡片主体: 主要内容区域
- 卡片底部: 附加信息或操作

### 5.3 Input（输入框）

**输入框规范：**
```css
:root {
  /* 输入框尺寸 */
  --input-height-sm: 2rem;
  --input-height-md: 2.5rem;
  --input-height-lg: 3rem;
  
  /* 输入框内边距 */
  --input-padding-sm: 0.375rem 0.75rem;
  --input-padding-md: 0.5rem 1rem;
  --input-padding-lg: 0.75rem 1.25rem;
  
  /* 输入框圆角 */
  --input-radius: 0.375rem;
  
  /* 输入框边框 */
  --input-border: 1px solid var(--color-border-main);
  --input-border-focus: 2px solid var(--color-primary);
}
```

**输入框状态：**
```css
/* 默认状态 */
.input {
  border: var(--input-border);
  background-color: var(--color-bg-main);
}

/* 聚焦状态 */
.input:focus {
  border: var(--input-border-focus);
  outline: none;
}

/* 错误状态 */
.input-error {
  border-color: var(--color-error);
}

/* 禁用状态 */
.input-disabled {
  background-color: var(--color-bg-secondary);
  cursor: not-allowed;
}
```

### 5.4 Form（表单）

**表单规范：**
```css
:root {
  /* 表单间距 */
  --form-item-margin-bottom: 1.5rem;
  --form-label-margin-bottom: 0.5rem;
  --form-help-margin-top: 0.5rem;
}
```

**表单元素：**
- 标签: 14px，字重 500，颜色 var(--color-text-main)
- 输入框: 16px，字重 400
- 帮助文本: 12px，字重 400，颜色 var(--color-text-tertiary)
- 错误提示: 12px，字重 400，颜色 var(--color-error)

### 5.5 Navigation（导航）

**导航结构：**
```css
:root {
  /* 导航高度 */
  --nav-height: 4rem;
  
  /* 导航内边距 */
  --nav-padding: 0 1.5rem;
  
  /* 导航项间距 */
  --nav-item-spacing: 1rem;
}
```

**导航类型：**
- 顶部导航: 固定在页面顶部
- 侧边导航: 固定在页面左侧
- 面包屑: 显示当前页面路径

**导航状态：**
- 默认: 颜色 var(--color-text-secondary)
- 悬停: 颜色 var(--color-text-main)
- 激活: 颜色 var(--color-primary)，加下划线或背景

---

## 6. 图标与插画风格（Icon & Illustration）

### 6.1 图标风格

**图标特征：**
- 风格: Outline（轮廓线）风格为主
- 线条: 细线条，1.5px - 2px
- 圆角: 轻微圆角，2px - 3px
- 尺寸: 16px, 20px, 24px, 32px

**图标使用原则：**
- 保持一致性: 同一功能使用相同图标
- 语义清晰: 图标含义直观易懂
- 适当使用: 避免过度装饰

### 6.2 插画风格

**插画特征：**
- 风格: 简约扁平风格
- 色彩: 使用品牌色和中性色
- 形状: 几何形状，简洁明了
- 用途: 辅助理解，增强视觉吸引力

**插画使用场景：**
- 空状态页面
- 错误页面
- 引导页面
- 营销页面

### 6.3 设计原则

**图标设计原则：**
- 功能优先: 图标服务于功能，不是装饰
- 一致性: 保持统一的视觉风格
- 可访问性: 确保图标有文字说明

**插画设计原则：**
- 简洁明了: 避免复杂细节
- 品牌一致: 使用品牌色和风格
- 辅助理解: 帮助用户理解内容

---

## 7. 交互与动效原则（Interaction & Motion）

### 7.1 Hover 状态

**悬停行为：**
- 按钮: 背景色加深 10%
- 链接: 下划线或颜色变化
- 卡片: 阴影加深，轻微上移
- 输入框: 边框颜色变化

**过渡时间：**
```css
:root {
  --transition-fast: 150ms;
  --transition-normal: 200ms;
  --transition-slow: 300ms;
}
```

### 7.2 Active 状态

**激活行为：**
- 按钮: 背景色加深 20%，轻微下移
- 链接: 颜色加深
- 导航项: 背景色或下划线

### 7.3 Focus 状态

**聚焦行为：**
- 输入框: 2px 蓝色边框
- 按钮: 2px 蓝色外框
- 可聚焦元素: 清晰的焦点指示器

**焦点环样式：**
```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### 7.4 动效节奏

**动效原则：**
- 克制: 避免过度动画
- 自然: 使用缓动函数
- 快速: 保持响应迅速

**缓动函数：**
```css
:root {
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 7.5 操作反馈

**反馈类型：**
- 即时反馈: 按钮点击、悬停
- 延迟反馈: 表单提交、数据加载
- 持续反馈: 加载动画、进度条

**反馈方式：**
- 视觉反馈: 颜色变化、动画
- 文字反馈: 提示信息、确认消息
- 触觉反馈: 震动（移动端）

---

## 8. 可复用 Design Token（工程友好）

### 8.1 Color Tokens

```css
:root {
  /* Brand Colors */
  --brand-primary: #3B82F6;
  --brand-primary-hover: #2563EB;
  --brand-primary-active: #1D4ED8;
  --brand-primary-light: #60A5FA;
  --brand-primary-lighter: #93C5FD;
  --brand-primary-dark: #1E40AF;
  --brand-primary-darker: #1E3A8A;

  /* Semantic Colors */
  --semantic-success: #10B981;
  --semantic-success-hover: #059669;
  --semantic-success-light: #D1FAE5;
  --semantic-success-dark: #047857;

  --semantic-warning: #F59E0B;
  --semantic-warning-hover: #D97706;
  --semantic-warning-light: #FEF3C7;
  --semantic-warning-dark: #B45309;

  --semantic-error: #EF4444;
  --semantic-error-hover: #DC2626;
  --semantic-error-light: #FEE2E2;
  --semantic-error-dark: #B91C1C;

  --semantic-info: #3B82F6;
  --semantic-info-hover: #2563EB;
  --semantic-info-light: #DBEAFE;
  --semantic-info-dark: #1E40AF;

  /* Neutral Colors */
  --neutral-bg-main: #FFFFFF;
  --neutral-bg-secondary: #F9FAFB;
  --neutral-bg-tertiary: #F3F4F6;
  --neutral-bg-inverse: #111827;

  --neutral-text-main: #111827;
  --neutral-text-secondary: #4B5563;
  --neutral-text-tertiary: #9CA3AF;
  --neutral-text-inverse: #FFFFFF;

  --neutral-border-main: #E5E7EB;
  --neutral-border-secondary: #D1D5DB;
  --neutral-border-tertiary: #F3F4F6;
}
```

### 8.2 Spacing Tokens

```css
:root {
  --spacing-0: 0;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;
}
```

### 8.3 Radius Tokens

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.125rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-full: 9999px;
}
```

### 8.4 Shadow Tokens

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

### 8.5 Typography Tokens

```css
:root {
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', monospace;
  
  --font-size-h1: 2.5rem;
  --font-size-h2: 2rem;
  --font-size-h3: 1.5rem;
  --font-size-h4: 1.25rem;
  --font-size-h5: 1.125rem;
  --font-size-h6: 1rem;
  --font-size-body: 1rem;
  --font-size-caption: 0.75rem;
  
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}
```

---

## 9. 合法复刻建议（Important）

### 9.1 可以学习的元素

**设计规则与原则：**
- ✅ 颜色系统的层次结构和命名规范
- ✅ 间距系统的倍数关系（4px 基础单位）
- ✅ 字体排版的层级和比例
- ✅ 组件的状态管理（hover, active, focus, disabled）
- ✅ 响应式设计的断点设置
- ✅ Design Token 的命名和组织方式
- ✅ 无障碍设计原则（焦点环、对比度）
- ✅ 动效的克制使用和缓动函数

**设计模式：**
- ✅ 卡片式布局
- ✅ 栅格系统
- ✅ 表单验证反馈
- ✅ 导航结构
- ✅ 按钮尺寸和状态

### 9.2 不应复刻的元素

**品牌相关：**
- ❌ Zendesk 的品牌标识和 Logo
- ❌ 具体的品牌色彩值（可参考但不应完全复制）
- ❌ 品牌字体（使用系统字体或开源替代）
- ❌ 品牌插画和图标（创建原创内容）

**内容相关：**
- ❌ 具体的文案和内容
- ❌ 产品截图和演示
- ❌ 客户案例和评价
- ❌ 营销素材和广告

**技术相关：**
- ❌ 专有的组件库代码
- ❌ 内部工具和系统
- ❌ 商业化的设计资产

### 9.3 合法复刻的最佳实践

**创建原创设计系统：**
1. 学习 Zendesk Garden 的设计原则和逻辑
2. 使用自己的品牌色彩和字体
3. 创建原创的图标和插画
4. 调整组件以适应自己的产品需求
5. 保持设计系统的一致性和可扩展性

**参考与学习：**
- 研究设计系统的组织结构
- 学习组件的交互模式
- 理解 Design Token 的应用
- 借鉴无障碍设计的最佳实践
- 参考响应式设计的实现方式

**避免侵权：**
- 不直接复制设计资产
- 不使用受版权保护的素材
- 不模仿品牌标识
- 创建原创的设计内容
- 遵守开源协议（如果使用开源组件）

---

## 附录：快速参考

### 常用组件尺寸

| 组件 | 小号 | 中号 | 大号 |
|------|------|------|------|
| Button | 32px | 40px | 48px |
| Input | 32px | 40px | 48px |
| Card | - | 24px padding | - |

### 常用间距

| 用途 | 间距 |
|------|------|
| 组件间距 | 16px |
| 卡片内边距 | 24px |
| 页面边距 | 24px |
| 章节间距 | 32px |

### 常用颜色

| 用途 | 颜色 |
|------|------|
| 主色 | #3B82F6 |
| 成功 | #10B981 |
| 警告 | #F59E0B |
| 错误 | #EF4444 |
| 信息 | #3B82F6 |

---

*本设计系统文档基于 Zendesk Garden 的设计原则和最佳实践整理，旨在帮助理解和学习现代设计系统的构建方法。*