# DaisyUI Design System

## 1. 设计风格总览（Design DNA）

**关键词：**
- 主题丰富（Theme Rich）
- Tailwind CSS 集成（Tailwind CSS Integration）
- 可访问优先（Accessibility First）
- 组件完整（Component Complete）
- 易于定制（Easy to Customize）

**适用产品类型：**
- 快速原型开发
- 中小型 Web 应用
- 个人项目
- 学习和教学项目
- 需要多主题切换的应用

**设计理念：**
DaisyUI 是基于 Tailwind CSS 的组件库，提供丰富的预设主题和完整的组件系统。强调快速开发、易于定制、主题切换，让开发者可以快速构建美观的界面。使用语义化的类名，与 Tailwind CSS 完美集成。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
DaisyUI 使用语义化的颜色变量：

```css
:root {
  /* 主色 */
  --p: 259 94% 51%;
  --pf: 259 94% 41%;
  --ps: 259 94% 61%;

  /* 辅助色 */
  --s: 314 100% 47%;
  --sf: 314 100% 37%;
  --ss: 314 100% 57%;

  /* 强调色 */
  --a: 174 60% 51%;
  --af: 174 60% 41%;
  --as: 174 60% 61%;

  /* 中性色 */
  --n: 220 8% 95%;
  --nf: 220 8% 85%;
  --ns: 220 8% 100%;
  --nc: 220 8% 90%;
  --nfc: 220 8% 80%;
  --ne: 220 8% 95%;

  /* 基础色 */
  --b1: 0 0% 100%;
  --b2: 0 0% 95%;
  --b3: 180 2% 96%;
  --bc: 220 8% 10%;

  /* 语义色 */
  --in: 202 89% 52%;
  --inc: 202 89% 92%;
  --su: 142 71% 45%;
  --suc: 142 71% 90%;
  --wa: 38 92% 50%;
  --wac: 38 92% 90%;
  --er: 354 78% 60%;
  --erc: 354 78% 90%;
}
```

### 暗色模式
```css
[data-theme="dark"] {
  --p: 259 94% 61%;
  --pf: 259 94% 71%;
  --ps: 259 94% 51%;

  --s: 314 100% 57%;
  --sf: 314 100% 67%;
  --ss: 314 100% 47%;

  --a: 174 60% 61%;
  --af: 174 60% 71%;
  --as: 174 60% 51%;

  --n: 220 8% 15%;
  --nf: 220 8% 25%;
  --ns: 220 8% 10%;
  --nc: 220 8% 20%;
  --nfc: 220 8% 30%;
  --ne: 220 8% 15%;

  --b1: 220 8% 10%;
  --b2: 220 8% 15%;
  --b3: 220 8% 20%;
  --bc: 220 8% 95%;

  --in: 202 89% 62%;
  --inc: 202 89% 22%;
  --su: 142 71% 55%;
  --suc: 142 71% 15%;
  --wa: 38 92% 60%;
  --wac: 38 92% 20%;
  --er: 354 78% 70%;
  --erc: 354 78% 20%;
}
```

### 使用场景说明
- **Primary (p)**：主要操作按钮、链接、品牌元素
- **Secondary (s)**：次要操作、补充信息
- **Accent (a)**：强调元素、高亮内容
- **Neutral (n)**：背景、边框、辅助文本
- **Base (b)**：基础背景色
- **Semantic**：成功、警告、错误、信息状态

### Design Token 命名建议
```css
--{category}{variant}
--{category}{variant}{modifier}
```

---

## 3. 字体与排版（Typography）

### 字体家族
DaisyUI 使用 Tailwind CSS 的默认字体栈：

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
  --text-xs: 0.75rem;   /* 12px */
  --text-sm: 0.875rem;  /* 14px */
  --text-base: 1rem;    /* 16px */
  --text-lg: 1.125rem;  /* 18px */
  --text-xl: 1.25rem;   /* 20px */
  --text-2xl: 1.5rem;   /* 24px */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.25rem;  /* 36px */
  --text-5xl: 3rem;     /* 48px */
}
```

### 行高与字重
```css
:root {
  /* 行高 */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
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
- **辅助文本**：使用宽松行高（1.75），字重 400
- **代码**：使用等宽字体，行高 1.5

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
:root {
  --max-w-xs: 20rem;    /* 320px */
  --max-w-sm: 24rem;    /* 384px */
  --max-w-md: 28rem;    /* 448px */
  --max-w-lg: 32rem;    /* 512px */
  --max-w-xl: 36rem;    /* 576px */
  --max-w-2xl: 42rem;   /* 672px */
  --max-w-4xl: 56rem;   /* 896px */
  --max-w-5xl: 64rem;   /* 1024px */
  --max-w-6xl: 72rem;   /* 1152px */
  --max-w-7xl: 80rem;   /* 1280px */
}
```

### 栅格系统
```css
:root {
  /* 列数 */
  --grid-cols-1: 1;
  --grid-cols-2: 2;
  --grid-cols-3: 3;
  --grid-cols-4: 4;
  --grid-cols-5: 5;
  --grid-cols-6: 6;
  --grid-cols-12: 12;

  /* 间距 */
  --gap-0: 0;
  --gap-1: 0.25rem;  /* 4px */
  --gap-2: 0.5rem;   /* 8px */
  --gap-3: 0.75rem;  /* 12px */
  --gap-4: 1rem;     /* 16px */
  --gap-5: 1.25rem;  /* 20px */
  --gap-6: 1.5rem;   /* 24px */
  --gap-8: 2rem;     /* 32px */
  --gap-10: 2.5rem;  /* 40px */
  --gap-12: 3rem;    /* 48px */
}
```

### 留白密度
- **高密度**：工具型界面，间距 4-8px
- **中密度**：标准 Web 应用，间距 8-16px
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
  --btn-lg: 1.25rem;    /* 20px */
  --btn-md: 1rem;      /* 16px */
  --btn-sm: 0.875rem;  /* 14px */
  --btn-xs: 0.75rem;   /* 12px */
}
```

**状态：**
- **Default**：主色背景，白色文字
- **Hover**：背景色变化
- **Active**：背景色进一步变化
- **Disabled**：灰色背景，不可点击

**圆角：**
```css
:root {
  --rounded-btn: 1.9rem;
  --rounded-box: 1rem;
  --rounded-badge: 1.9rem;
}
```

**变体：**
- **Primary**：主色背景
- **Secondary**：辅助色背景
- **Accent**：强调色背景
- **Ghost**：透明背景，主色文字
- **Link**：无背景，主色文字，下划线
- **Outline**：透明背景，主色边框

### Card（卡片）

**使用场景：**
- 内容分组
- 数据展示
- 功能模块

**样式：**
```css
:root {
  --card-padding: 1.5rem;
  --card-radius: 1rem;
  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

**间距：**
- 内边距：24px
- 卡片间距：16px

### Input / Form（输入框）

**尺寸：**
```css
:root {
  --input-lg: 1.25rem;
  --input-md: 1rem;
  --input-sm: 0.875rem;
  --input-xs: 0.75rem;
}
```

**状态：**
- **Default**：灰色边框
- **Focus**：主色边框，外发光
- **Error**：红色边框
- **Disabled**：灰色背景

**圆角：** 1rem

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
- **类型**：使用 Heroicons 或其他图标库
- **线条**：2px 细线
- **圆角**：轻微圆角
- **尺寸**：16px, 20px, 24px, 32px

### 插画风格
DaisyUI 不提供插画，建议：
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
- 按钮：背景色变化
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
  --p: 259 94% 51%;
  --pf: 259 94% 41%;
  --ps: 259 94% 61%;

  /* Secondary */
  --s: 314 100% 47%;
  --sf: 314 100% 37%;
  --ss: 314 100% 57%;

  /* Accent */
  --a: 174 60% 51%;
  --af: 174 60% 41%;
  --as: 174 60% 61%;

  /* Neutral */
  --n: 220 8% 95%;
  --nf: 220 8% 85%;
  --ns: 220 8% 100%;
  --nc: 220 8% 90%;
  --nfc: 220 8% 80%;
  --ne: 220 8% 95%;

  /* Base */
  --b1: 0 0% 100%;
  --b2: 0 0% 95%;
  --b3: 180 2% 96%;
  --bc: 220 8% 10%;

  /* Semantic */
  --in: 202 89% 52%;
  --inc: 202 89% 92%;
  --su: 142 71% 45%;
  --suc: 142 71% 90%;
  --wa: 38 92% 50%;
  --wac: 38 92% 90%;
  --er: 354 78% 60%;
  --erc: 354 78% 90%;
}
```

### Spacing Tokens
```css
:root {
  --p-0: 0;
  --p-1: 0.25rem;
  --p-2: 0.5rem;
  --p-3: 0.75rem;
  --p-4: 1rem;
  --p-5: 1.25rem;
  --p-6: 1.5rem;
  --p-8: 2rem;
  --p-10: 2.5rem;
  --p-12: 3rem;
}
```

### Radius Tokens
```css
:root {
  --rounded-none: 0;
  --rounded-sm: 0.125rem;
  --rounded: 0.25rem;
  --rounded-md: 0.375rem;
  --rounded-lg: 0.5rem;
  --rounded-xl: 0.75rem;
  --rounded-2xl: 1rem;
  --rounded-3xl: 1.5rem;
  --rounded-full: 9999px;
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
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
  --leading-loose: 2;
}
```

---

## 9. 合法复刻建议（Important）

### ✅ 可以学习的元素（规则 / 风格）
- **主题系统**：学习如何构建可切换的主题系统
- **语义化类名**：学习如何使用语义化的类名
- **Tailwind CSS 集成**：学习如何与 Tailwind CSS 完美集成
- **组件完整性**：学习如何提供完整的组件系统
- **快速开发**：学习如何加速开发流程

### ❌ 不应复刻的元素（品牌 / 插画 / 内容）
- **具体颜色值**：DaisyUI 使用 HSL 颜色空间，不应直接复制
- **具体组件代码**：不应直接复制组件代码，应学习设计理念
- **品牌标识**：不包含任何品牌元素
- **具体插画**：不提供插画素材
- **商业素材**：不包含任何受版权保护的内容

### 使用建议
1. **学习设计理念**：理解主题系统、语义化类名、快速开发的核心思想
2. **构建自己的组件库**：基于 DaisyUI 的理念，构建自己的组件库
3. **保持无障碍标准**：确保所有组件符合 WCAG 2.1 AA 标准
4. **尊重开源协议**：DaisyUI 使用 MIT 协议，可自由使用和修改

### 法律风险规避
- 不复制任何受版权保护的设计素材
- 不声称与 DaisyUI 有官方关联
- 在使用时遵守 MIT 开源协议
- 如需商业使用，确保符合协议要求

---

## 附录：DaisyUI 核心组件清单

### 表单组件
- `Button`：按钮
- `Input`：输入框
- `Textarea`：文本域
- `Select`：下拉选择
- `Checkbox`：复选框
- `Radio`：单选框
- `Toggle`：开关
- `Range`：滑块
- `File Input`：文件上传

### 数据展示
- `Card`：卡片
- `Badge`：徽章
- `Avatar`：头像
- `Progress`：进度条
- `Radial Progress`：环形进度条
- `Stat`：统计卡片
- `Table`：表格
- `Timeline`：时间线

### 反馈组件
- `Alert`：警告
- `Toast`：通知
- `Modal`：模态框
- `Drawer`：抽屉
- `Tooltip`：工具提示
- `Collapse`：折叠面板
- `Accordion`：手风琴

### 导航组件
- `Navbar`：导航栏
- `Breadcrumb`：面包屑
- `Pagination`：分页
- `Steps`：步骤条
- `Tabs`：标签页
- `Menu`：菜单

### 布局组件
- `Hero`：英雄区
- `Footer`：页脚
- `Divider`：分隔线
- `Join`：连接组件
- `Stack`：堆叠布局

### 其他组件
- `Chat Bubble`：聊天气泡
- `Code Mockup`：代码预览
- `Phone Mockup`：手机预览
- `Window Mockup`：窗口预览
- `Swap`：交换组件
- `Countdown`：倒计时
- `Mask`：遮罩
- `Skeleton`：骨架屏

---

**文档版本：** 1.0.0
**最后更新：** 2025-02-02
**适用框架：** Tailwind CSS
**样式系统：** Tailwind CSS
**主题数量：** 30+ 预设主题
**无障碍标准：** WCAG 2.1 AA