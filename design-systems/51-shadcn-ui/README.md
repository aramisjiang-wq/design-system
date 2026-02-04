# Shadcn/ui Design System

## 1. 设计风格总览（Design DNA）

**关键词：**
- 复制粘贴友好（Copy-Paste Friendly）
- 无依赖（No Dependencies）
- 可定制（Customizable）
- 无障碍优先（Accessibility First）
- Radix UI 基础（Radix UI Powered）

**适用产品类型：**
- 现代化 SaaS 应用
- 开发者工具平台
- 快速原型项目
- 需要完全控制样式的项目
- 多品牌系统

**设计理念：**
Shadcn/ui 采用"复制粘贴"的设计哲学，提供基于 Radix UI 的可访问组件，不作为 npm 包分发，而是直接复制到项目中。强调完全控制、零依赖、可定制性，让开发者拥有代码所有权。使用 Tailwind CSS 进行样式设计，提供一致的视觉语言。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
```css
:root {
  /* 主色 - 蓝色系 */
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;

  /* 辅助色 - 灰色系 */
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;

  /* 强调色 */
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;

  /* 悬浮色 */
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;

  /* 卡片色 */
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;

  /* 弹出框色 */
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;

  /* 边框色 */
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;

  /* 背景色 */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;

  /* 语义色 */
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
}
```

### 暗色模式
```css
.dark {
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;

  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;

  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;

  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;

  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;

  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;

  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;

  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;

  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
}
```

### 使用场景说明
- **Primary**：主要操作按钮、链接、品牌元素
- **Secondary**：次要操作、补充信息
- **Accent**：强调元素、高亮内容
- **Muted**：辅助文本、次要信息
- **Destructive**：删除、取消等危险操作

### Design Token 命名建议
```css
--{category}-{variant}
--{category}-{variant}-foreground
```

---

## 3. 字体与排版（Typography）

### 字体家族
Shadcn/ui 使用 Tailwind CSS 的默认字体栈：

```css
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}
```

### 字号层级
```css
:root {
  /* 标题层级 */
  --text-base: 0.875rem;   /* 14px */
  --text-lg: 1rem;         /* 16px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
  --text-5xl: 3rem;        /* 48px */
}
```

### 行高与字重
```css
:root {
  /* 行高 */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  /* 字重 */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### 排版节奏规则
- **标题**：使用紧凑行高（1.25），字重 600-700
- **正文**：使用标准行高（1.5），字重 400-500
- **辅助文本**：使用宽松行高（1.625），字重 400
- **代码**：使用等宽字体，行高 1.5

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
:root {
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
  --gap-0: 0;
  --gap-px: 1px;
  --gap-0-5: 0.125rem;  /* 2px */
  --gap-1: 0.25rem;     /* 4px */
  --gap-1-5: 0.375rem;   /* 6px */
  --gap-2: 0.5rem;      /* 8px */
  --gap-2-5: 0.625rem;   /* 10px */
  --gap-3: 0.75rem;      /* 12px */
  --gap-3-5: 0.875rem;   /* 14px */
  --gap-4: 1rem;         /* 16px */
  --gap-5: 1.25rem;      /* 20px */
  --gap-6: 1.5rem;       /* 24px */
  --gap-7: 1.75rem;      /* 28px */
  --gap-8: 2rem;         /* 32px */
  --gap-9: 2.25rem;      /* 36px */
  --gap-10: 2.5rem;      /* 40px */
  --gap-11: 2.75rem;     /* 44px */
  --gap-12: 3rem;        /* 48px */
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
- **Hover**：背景色变化（使用 hsl 调整）
- **Active**：背景色进一步变化
- **Disabled**：灰色背景，不可点击

**圆角：**
```css
:root {
  --radius-sm: 0.375rem;  /* 6px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-full: 9999px;
}
```

**变体：**
- **Default**：主色背景
- **Secondary**：辅助色背景
- **Destructive**：红色背景
- **Outline**：透明背景，主色边框
- **Ghost**：透明背景，主色文字
- **Link**：无背景，主色文字，下划线

### Card（卡片）

**使用场景：**
- 内容分组
- 数据展示
- 功能模块

**样式：**
```css
:root {
  --card-padding: 1.5rem;
  --card-radius: 0.75rem;
  --card-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
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
- **类型**：使用 Lucide React 图标库
- **线条**：2px 细线
- **圆角**：轻微圆角
- **尺寸**：16px, 20px, 24px, 32px

### 插画风格
Shadcn/ui 不提供插画，建议：
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
- 按钮：背景色变化（使用 hsl 调整）
- 卡片：轻微上浮（2px）
- 链接：下划线或颜色变化

### Active 状态
- 按钮：背景色进一步变化
- 可点击元素：轻微缩小（1px）

### Focus 状态
- 所有可聚焦元素：外发光效果
- 输入框：边框颜色变为主色
- 键盘导航：清晰的焦点指示器

### 动效节奏
- **快速反馈**：150-200ms（按钮点击）
- **标准过渡**：200ms（悬停效果）
- **复杂动画**：300ms（页面切换）

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
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;

  /* Secondary */
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;

  /* Accent */
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;

  /* Muted */
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;

  /* Card */
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;

  /* Popover */
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;

  /* Border */
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;

  /* Background */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;

  /* Destructive */
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
}
```

### Spacing Tokens
```css
:root {
  --p-0: 0;
  --p-px: 1px;
  --p-0-5: 0.125rem;
  --p-1: 0.25rem;
  --p-1-5: 0.375rem;
  --p-2: 0.5rem;
  --p-2-5: 0.625rem;
  --p-3: 0.75rem;
  --p-3-5: 0.875rem;
  --p-4: 1rem;
  --p-5: 1.25rem;
  --p-6: 1.5rem;
  --p-7: 1.75rem;
  --p-8: 2rem;
  --p-9: 2.25rem;
  --p-10: 2.5rem;
  --p-11: 2.75rem;
  --p-12: 3rem;
}
```

### Radius Tokens
```css
:root {
  --radius-0: 0;
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}
```

### Typography Tokens
```css
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;

  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
}
```

---

## 9. 合法复刻建议（Important）

### ✅ 可以学习的元素（规则 / 风格）
- **复制粘贴理念**：学习如何提供可复制的组件代码而非 npm 包
- **Radix UI 基础**：学习如何基于 Radix UI 构建可访问组件
- **Tailwind CSS 集成**：学习如何使用 Tailwind CSS 进行样式设计
- **完全控制**：学习如何让开发者拥有代码所有权
- **零依赖**：学习如何减少外部依赖

### ❌ 不应复刻的元素（品牌 / 插画 / 内容）
- **具体颜色值**：Shadcn/ui 使用 HSL 颜色空间，不应直接复制
- **具体组件代码**：不应直接复制组件代码，应学习设计理念
- **品牌标识**：不包含任何品牌元素
- **具体插画**：不提供插画素材
- **商业素材**：不包含任何受版权保护的内容

### 使用建议
1. **学习设计理念**：理解复制粘贴、零依赖、完全控制的核心思想
2. **构建自己的组件库**：基于 Shadcn/ui 的理念，构建自己的组件库
3. **保持无障碍标准**：确保所有组件符合 WCAG 2.1 AA 标准
4. **尊重开源协议**：Shadcn/ui 使用 MIT 协议，可自由使用和修改

### 法律风险规避
- 不复制任何受版权保护的设计素材
- 不声称与 Shadcn/ui 有官方关联
- 在使用时遵守 MIT 开源协议
- 如需商业使用，确保符合协议要求

---

## 附录：Shadcn/ui 核心组件清单

### 表单组件
- `Button`：按钮
- `Input`：输入框
- `Label`：标签
- `Select`：下拉选择
- `Checkbox`：复选框
- `Radio Group`：单选组
- `Switch`：开关
- `Slider`：滑块
- `Textarea`：文本域

### 数据展示
- `Card`：卡片
- `Table`：表格
- `Badge`：徽章
- `Avatar`：头像
- `Progress`：进度条
- `Skeleton`：骨架屏

### 反馈组件
- `Dialog`：对话框
- `Popover`：弹出框
- `Tooltip`：工具提示
- `Toast`：通知
- `Alert`：警告
- `Sheet`：侧边抽屉

### 导航组件
- `Navigation Menu`：导航菜单
- `Breadcrumb`：面包屑
- `Tabs`：标签页
- `Pagination`：分页
- `Command`：命令面板

### 布局组件
- `Accordion`：手风琴
- `Collapsible`：可折叠
- `Separator`：分隔线
- `Scroll Area`：滚动区域

### 其他组件
- `Calendar`：日历
- `Date Picker`：日期选择器
- `Hover Card`：悬浮卡片
- `Menubar`：菜单栏
- `Context Menu`：上下文菜单

---

**文档版本：** 1.0.0
**最后更新：** 2025-02-02
**适用框架：** React, Next.js
**样式系统：** Tailwind CSS
**基础组件：** Radix UI
**无障碍标准：** WCAG 2.1 AA