# Radix UI Design System

## 1. 设计风格总览（Design DNA）

**关键词：**
- 无障碍优先（Accessibility First）
- 无样式化（Unstyled）
- 组合式（Composable）
- 原子组件（Atomic）
- 渐进增强（Progressive Enhancement）

**适用产品类型：**
- 企业级 SaaS 应用
- 开发者工具平台
- 需要高度可定制性的产品
- 多品牌系统
- 无障碍要求高的公共服务平台

**设计理念：**
Radix UI 采用"无样式化"设计哲学，提供原子级、可访问的组件基础，不预设视觉样式，让开发者完全掌控设计系统。强调组合优于继承，通过原子组件构建复杂交互。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
Radix UI 本身不提供预定义颜色系统，但推荐使用语义化命名：

```css
:root {
  /* 主色 - 品牌识别 */
  --color-primary: #3B82F6;
  --color-primary-hover: #2563EB;
  --color-primary-active: #1D4ED8;
  --color-primary-contrast: #FFFFFF;

  /* 辅助色 - 功能区分 */
  --color-secondary: #10B981;
  --color-secondary-hover: #059669;
  --color-secondary-active: #047857;

  /* 中性色 - 文本与背景 */
  --color-neutral-900: #111827;
  --color-neutral-800: #1F2937;
  --color-neutral-700: #374151;
  --color-neutral-600: #4B5563;
  --color-neutral-500: #6B7280;
  --color-neutral-400: #9CA3AF;
  --color-neutral-300: #D1D5DB;
  --color-neutral-200: #E5E7EB;
  --color-neutral-100: #F3F4F6;
  --color-neutral-50: #F9FAFB;

  /* 语义色 - 状态反馈 */
  --color-success: #10B981;
  --color-success-bg: #D1FAE5;
  --color-warning: #F59E0B;
  --color-warning-bg: #FEF3C7;
  --color-error: #EF4444;
  --color-error-bg: #FEE2E2;
  --color-info: #3B82F6;
  --color-info-bg: #DBEAFE;
}
```

### 使用场景说明
- **主色**：主要操作按钮、链接、品牌元素
- **辅助色**：次要操作、补充信息
- **中性色**：文本、边框、背景、分隔线
- **语义色**：成功、警告、错误、信息状态提示

### Design Token 命名建议
```css
--color-{category}-{shade}
--color-{semantic}-{variant}
```

---

## 3. 字体与排版（Typography）

### 字体家族
Radix UI 不预设字体，推荐使用系统字体栈：

```css
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
}
```

### 字号层级
```css
:root {
  /* 标题层级 */
  --font-size-h1: 2.5rem;    /* 40px */
  --font-size-h2: 2rem;      /* 32px */
  --font-size-h3: 1.5rem;    /* 24px */
  --font-size-h4: 1.25rem;   /* 20px */
  --font-size-h5: 1.125rem; /* 18px */
  --font-size-h6: 1rem;      /* 16px */

  /* 正文层级 */
  --font-size-body-lg: 1.125rem; /* 18px */
  --font-size-body: 1rem;        /* 16px */
  --font-size-body-sm: 0.875rem; /* 14px */

  /* 辅助层级 */
  --font-size-caption: 0.75rem;  /* 12px */
  --font-size-overline: 0.625rem; /* 10px */
}
```

### 行高与字重
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

### 排版节奏规则
- **标题**：使用紧凑行高（1.25），字重 600-700
- **正文**：使用标准行高（1.5），字重 400-500
- **辅助文本**：使用宽松行高（1.75），字重 400
- **代码**：使用等宽字体，行高 1.5

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
:root {
  --max-width-xs: 480px;
  --max-width-sm: 640px;
  --max-width-md: 768px;
  --max-width-lg: 1024px;
  --max-width-xl: 1280px;
  --max-width-2xl: 1536px;
}
```

### 栅格系统
```css
:root {
  /* 列数 */
  --grid-columns: 12;

  /* 间距 */
  --grid-gutter-xs: 0.5rem;  /* 8px */
  --grid-gutter-sm: 1rem;    /* 16px */
  --grid-gutter-md: 1.5rem;  /* 24px */
  --grid-gutter-lg: 2rem;    /* 32px */
  --grid-gutter-xl: 3rem;    /* 48px */

  /* 边距 */
  --spacing-0: 0;
  --spacing-1: 0.25rem;  /* 4px */
  --spacing-2: 0.5rem;   /* 8px */
  --spacing-3: 0.75rem;  /* 12px */
  --spacing-4: 1rem;     /* 16px */
  --spacing-5: 1.25rem;  /* 20px */
  --spacing-6: 1.5rem;   /* 24px */
  --spacing-8: 2rem;     /* 32px */
  --spacing-10: 2.5rem;  /* 40px */
  --spacing-12: 3rem;    /* 48px */
  --spacing-16: 4rem;    /* 64px */
  --spacing-20: 5rem;    /* 80px */
  --spacing-24: 6rem;    /* 96px */
}
```

### 留白密度
- **高密度**：工具型界面，间距 4-8px
- **中密度**：标准 SaaS 应用，间距 8-16px
- **低密度**：内容型页面，间距 16-32px

### 响应式断点
```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

**尺寸：**
```css
:root {
  --button-height-sm: 2rem;    /* 32px */
  --button-height-md: 2.5rem;  /* 40px */
  --button-height-lg: 3rem;    /* 48px */

  --button-padding-x-sm: 0.75rem;  /* 12px */
  --button-padding-x-md: 1rem;     /* 16px */
  --button-padding-x-lg: 1.5rem;   /* 24px */
}
```

**状态：**
- **Default**：主色背景，白色文字
- **Hover**：主色加深（10%）
- **Active**：主色加深（20%）
- **Disabled**：灰色背景，不可点击

**圆角：**
```css
:root {
  --radius-sm: 0.25rem;  /* 4px */
  --radius-md: 0.375rem; /* 6px */
  --radius-lg: 0.5rem;   /* 8px */
  --radius-full: 9999px;
}
```

**变体：**
- **Primary**：主色背景
- **Secondary**：中性色背景
- **Ghost**：透明背景，主色边框
- **Link**：无背景，主色文字

### Card（卡片）

**使用场景：**
- 内容分组
- 数据展示
- 功能模块

**样式：**
```css
:root {
  --card-padding: 1.5rem;
  --card-radius: 0.5rem;
  --card-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --card-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --card-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

**间距：**
- 内边距：24px
- 卡片间距：16px

### Input / Form（输入框）

**尺寸：**
```css
:root {
  --input-height-sm: 2rem;
  --input-height-md: 2.5rem;
  --input-height-lg: 3rem;
}
```

**状态：**
- **Default**：灰色边框
- **Focus**：主色边框，外发光
- **Error**：红色边框
- **Disabled**：灰色背景

**圆角：** 6px

### Navigation（导航）

**结构：**
- 侧边栏导航：垂直列表
- 顶部导航：水平菜单
- 面包屑：层级路径

**交互：**
- Hover：背景色变化
- Active：主色背景或边框
- Focus：外发光效果

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
- **类型**：Outline（轮廓）和 Filled（填充）两种
- **线条**：2px 细线
- **圆角**：轻微圆角（2px）
- **尺寸**：16px, 20px, 24px, 32px

### 插画风格
Radix UI 不提供插画，建议：
- 保持简洁、抽象风格
- 使用几何形状
- 限制调色板（3-5 色）
- 避免过于具象的元素

### 设计原则
- 图标仅辅助理解，不喧宾夺主
- 保持一致的线条粗细和圆角
- 优先使用无障碍友好的图标
- 所有图标需提供 aria-label

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 状态
- 按钮：背景色加深 10%
- 卡片：轻微上浮（2px）
- 链接：下划线或颜色变化

### Active 状态
- 按钮：背景色加深 20%
- 可点击元素：轻微缩小（1px）

### Focus 状态
- 所有可聚焦元素：外发光效果
- 输入框：边框颜色变为主色
- 键盘导航：清晰的焦点指示器

### 动效节奏
- **快速反馈**：150-200ms（按钮点击）
- **标准过渡**：300ms（悬停效果）
- **复杂动画**：500ms（页面切换）

### 动效原则
- **克制**：避免过度动画
- **有意义**：动效必须传达信息
- **可禁用**：尊重用户的动画偏好设置
- **性能优先**：使用 transform 和 opacity

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
  /* Primary */
  --color-primary: #3B82F6;
  --color-primary-50: #EFF6FF;
  --color-primary-100: #DBEAFE;
  --color-primary-200: #BFDBFE;
  --color-primary-300: #93C5FD;
  --color-primary-400: #60A5FA;
  --color-primary-500: #3B82F6;
  --color-primary-600: #2563EB;
  --color-primary-700: #1D4ED8;
  --color-primary-800: #1E40AF;
  --color-primary-900: #1E3A8A;

  /* Neutral */
  --color-slate-50: #F8FAFC;
  --color-slate-100: #F1F5F9;
  --color-slate-200: #E2E8F0;
  --color-slate-300: #CBD5E1;
  --color-slate-400: #94A3B8;
  --color-slate-500: #64748B;
  --color-slate-600: #475569;
  --color-slate-700: #334155;
  --color-slate-800: #1E293B;
  --color-slate-900: #0F172A;

  /* Semantic */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
}
```

### Spacing Tokens
```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
}
```

### Radius Tokens
```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}
```

### Typography Tokens
```css
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;

  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

---

## 9. 合法复刻建议（Important）

### ✅ 可以学习的元素（规则 / 风格）
- **无障碍优先原则**：学习 Radix UI 对 ARIA 属性、键盘导航、屏幕阅读器支持的实现
- **原子组件设计**：学习如何将复杂交互拆解为可组合的原子组件
- **无样式化理念**：学习如何提供功能基础而不预设视觉样式
- **组合优于继承**：学习如何通过组合构建复杂组件
- **渐进增强策略**：学习如何从基础功能逐步增强体验

### ❌ 不应复刻的元素（品牌 / 插画 / 内容）
- **具体颜色值**：Radix UI 不提供颜色系统，不应复制任何预设颜色
- **具体字体选择**：不预设字体，应使用系统字体栈或自定义字体
- **品牌标识**：不包含任何品牌元素
- **具体插画**：不提供插画素材
- **商业素材**：不包含任何受版权保护的内容

### 使用建议
1. **学习设计理念**：理解无障碍优先、原子组件、组合式设计的核心思想
2. **构建自己的视觉系统**：基于 Radix UI 的功能基础，添加自己的颜色、字体、样式
3. **保持无障碍标准**：确保所有组件符合 WCAG 2.1 AA 标准
4. **尊重开源协议**：Radix UI 使用 MIT 协议，可自由使用和修改

### 法律风险规避
- 不复制任何受版权保护的设计素材
- 不声称与 Radix UI 有官方关联
- 在使用时遵守 MIT 开源协议
- 如需商业使用，确保符合协议要求

---

## 附录：Radix UI 核心组件清单

### 原子组件
- `@radix-ui/react-slot`：组合式组件基础
- `@radix-ui/react-primitive`：基础 DOM 元素包装

### 表单组件
- `@radix-ui/react-checkbox`：复选框
- `@radix-ui/react-radio-group`：单选组
- `@radix-ui/react-switch`：开关
- `@radix-ui/react-slider`：滑块
- `@radix-ui/react-tabs`：标签页

### 导航组件
- `@radix-ui/react-navigation-menu`：导航菜单
- `@radix-ui/react-breadcrumb`：面包屑
- `@radix-ui/react-context-menu`：上下文菜单

### 反馈组件
- `@radix-ui/react-dialog`：对话框
- `@radix-ui/react-popover`：弹出框
- `@radix-ui/react-tooltip`：工具提示
- `@radix-ui/react-toast`：通知

### 数据展示
- `@radix-ui/react-avatar`：头像
- `@radix-ui/react-progress`：进度条
- `@radix-ui/react-separator`：分隔线

---

**文档版本：** 1.0.0
**最后更新：** 2025-02-02
**适用框架：** React, Vue, Angular（通过适配器）
**无障碍标准：** WCAG 2.1 AA