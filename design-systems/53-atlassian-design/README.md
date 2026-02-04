# Atlassian Design System

## 1. 设计风格总览（Design DNA）

**关键词：**
- 协作优先（Collaboration First）
- 清晰简洁（Clear & Simple）
- 可访问性（Accessibility）
- 一致性（Consistency）
- 可扩展性（Scalability）

**适用产品类型：**
- 团队协作工具
- 项目管理平台
- 知识管理系统
- 开发者工具
- 企业级 SaaS 应用

**设计理念：**
Atlassian Design 专注于团队协作和生产力，强调清晰、简洁、一致的用户体验。设计系统支持 Jira、Confluence、Trello 等多个产品，提供统一的视觉语言和交互模式。注重可访问性和包容性设计，确保所有用户都能高效使用。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
```css
:root {
  /* 蓝色系 - 品牌主色 */
  --blue-50: #DEEBFF;
  --blue-75: #B3D4FF;
  --blue-100: #9AC0FF;
  --blue-200: #6598FF;
  --blue-300: #4C7FE1;
  --blue-400: #2684FF;
  --blue-500: #0052CC;
  --blue-600: #0747A6;
  --blue-700: #0065FF;

  /* 靛蓝色 - 辅助色 */
  --indigo-50: #E6EFFC;
  --indigo-75: #B3D4FF;
  --indigo-100: #9AC0FF;
  --indigo-200: #6598FF;
  --indigo-300: #4C7FE1;
  --indigo-400: #2684FF;
  --indigo-500: #0052CC;
  --indigo-600: #0747A6;
  --indigo-700: #0065FF;
}
```

### 语义色（Semantic Colors）
```css
:root {
  /* 成功色 */
  --success-50: #E3FCEF;
  --success-75: #ABF5D1;
  --success-100: #79F2C0;
  --success-200: #57D9A3;
  --success-300: #36B37E;
  --success-400: #00875A;
  --success-500: #006644;
  --success-600: #005233;

  /* 警告色 */
  --warning-50: #FFFAE6;
  --warning-75: #FFF0B3;
  --warning-100: #FFDEAB;
  --warning-200: #FFC400;
  --warning-300: #FFAB00;
  --warning-400: #FF991F;
  --warning-500: #FF8B00;
  --warning-600: #DE350B;

  /* 错误色 */
  --error-50: #FFEBE6;
  --error-75: #FFBDAD;
  --error-100: #FF8F73;
  --error-200: #FF7452;
  --error-300: #FF5630;
  --error-400: #DE350B;
  --error-500: #BF2600;
  --error-600: #A4180C;

  /* 信息色 */
  --info-50: #DEEBFF;
  --info-75: #B3D4FF;
  --info-100: #9AC0FF;
  --info-200: #6598FF;
  --info-300: #4C7FE1;
  --info-400: #2684FF;
  --info-500: #0052CC;
  --info-600: #0747A6;
}
```

### 中性色（Neutral Colors）
```css
:root {
  /* 文字色 */
  --text-0: #172B4D;
  --text-1: #253858;
  --text-2: #42526E;
  --text-3: #5E6C84;
  --text-4: #6B778C;
  --text-5: #97A0AF;
  --text-6: #B3BAC5;
  --text-7: #DFE1E6;
  --text-8: #EBECF0;
  --text-9: #F4F5F7;

  /* 背景色 */
  --background-0: #FAFBFC;
  --background-1: #EBECF0;
  --background-2: #DFE1E6;
  --background-3: #C1C7D0;
  --background-4: #A5ADBA;
  --background-5: #6B778C;
  --background-6: #42526E;
  --background-7: #091E42;
  --background-8: #0747A6;
  --background-9: #0052CC;
}
```

### 使用场景说明
- **蓝色系**：品牌识别、主要操作、链接
- **成功色**：成功状态、完成状态
- **警告色**：警告提示、注意事项
- **错误色**：错误状态、危险操作
- **信息色**：信息提示、帮助信息
- **中性色**：文字、背景、边框

### Design Token 命名建议
```css
--{color}-{shade}
--{semantic}-{shade}
```

---

## 3. 字体与排版（Typography）

### 字体家族
Atlassian Design 使用系统字体栈：

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
  --font-size-h1: 2.25rem;    /* 36px */
  --font-size-h2: 1.75rem;    /* 28px */
  --font-size-h3: 1.5rem;     /* 24px */
  --font-size-h4: 1.25rem;    /* 20px */
  --font-size-h5: 1rem;       /* 16px */
  --font-size-h6: 0.875rem;   /* 14px */

  /* 正文层级 */
  --font-size-body-lg: 1rem;        /* 16px */
  --font-size-body: 0.875rem;        /* 14px */
  --font-size-body-sm: 0.75rem;      /* 12px */

  /* 辅助层级 */
  --font-size-caption: 0.75rem;     /* 12px */
  --font-size-overline: 0.625rem;   /* 10px */
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
- **Default**：蓝色背景，白色文字
- **Hover**：背景色加深（#0747A6）
- **Active**：背景色进一步加深（#0052CC）
- **Disabled**：灰色背景，不可点击

**圆角：**
```css
:root {
  --radius-sm: 0.1875rem;  /* 3px */
  --radius-md: 0.25rem;    /* 4px */
  --radius-lg: 0.375rem;   /* 6px */
  --radius-full: 9999px;
}
```

**变体：**
- **Primary**：蓝色背景
- **Secondary**：灰色背景
- **Link**：无背景，蓝色文字
- **Subtle**：透明背景，灰色文字

### Card（卡片）

**使用场景：**
- 内容分组
- 数据展示
- 功能模块

**样式：**
```css
:root {
  --card-padding: 1.5rem;
  --card-radius: 0.375rem;
  --card-shadow-sm: 0 1px 2px 0 rgba(9, 30, 66, 0.25);
  --card-shadow-md: 0 4px 8px -2px rgba(9, 30, 66, 0.25);
  --card-shadow-lg: 0 8px 16px -4px rgba(9, 30, 66, 0.25);
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
- **Default**：灰色边框（#DFE1E6）
- **Focus**：蓝色边框（#2684FF），外发光
- **Error**：红色边框（#FF5630）
- **Disabled**：灰色背景（#F4F5F7）

**圆角：** 3px

### Navigation（导航）

**结构：**
- 侧边栏导航：垂直列表
- 顶部导航：水平菜单
- 面包屑：层级路径

**交互：**
- Hover：背景色变化（#EBECF0）
- Active：蓝色背景（#E6EFFC）
- Focus：外发光效果

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
- **类型**：Outline（轮廓）和 Filled（填充）两种
- **线条**：2px 细线
- **圆角**：轻微圆角（1-2px）
- **尺寸**：16px, 20px, 24px, 32px

### 插画风格
Atlassian Design 使用简洁、友好的插画风格：
- 保持简洁、抽象风格
- 使用几何形状
- 限制调色板（3-5 色）
- 避免过于具象的元素
- 强调协作和团队精神

### 设计原则
- 图标仅辅助理解，不喧宾夺主
- 保持一致的线条粗细和圆角
- 优先使用无障碍友好的图标
- 所有图标需提供 aria-label

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 状态
- 按钮：背景色加深（#0747A6）
- 卡片：轻微上浮（2px）
- 链接：下划线或颜色变化

### Active 状态
- 按钮：背景色进一步加深（#0052CC）
- 可点击元素：轻微缩小（1px）

### Focus 状态
- 所有可聚焦元素：外发光效果（#2684FF）
- 输入框：边框颜色变为蓝色（#2684FF）
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
  /* Blue */
  --blue-50: #DEEBFF;
  --blue-75: #B3D4FF;
  --blue-100: #9AC0FF;
  --blue-200: #6598FF;
  --blue-300: #4C7FE1;
  --blue-400: #2684FF;
  --blue-500: #0052CC;
  --blue-600: #0747A6;
  --blue-700: #0065FF;

  /* Success */
  --success-50: #E3FCEF;
  --success-75: #ABF5D1;
  --success-100: #79F2C0;
  --success-200: #57D9A3;
  --success-300: #36B37E;
  --success-400: #00875A;
  --success-500: #006644;
  --success-600: #005233;

  /* Warning */
  --warning-50: #FFFAE6;
  --warning-75: #FFF0B3;
  --warning-100: #FFDEAB;
  --warning-200: #FFC400;
  --warning-300: #FFAB00;
  --warning-400: #FF991F;
  --warning-500: #FF8B00;
  --warning-600: #DE350B;

  /* Error */
  --error-50: #FFEBE6;
  --error-75: #FFBDAD;
  --error-100: #FF8F73;
  --error-200: #FF7452;
  --error-300: #FF5630;
  --error-400: #DE350B;
  --error-500: #BF2600;
  --error-600: #A4180C;

  /* Neutral */
  --text-0: #172B4D;
  --text-1: #253858;
  --text-2: #42526E;
  --text-3: #5E6C84;
  --text-4: #6B778C;
  --text-5: #97A0AF;
  --text-6: #B3BAC5;
  --text-7: #DFE1E6;
  --text-8: #EBECF0;
  --text-9: #F4F5F7;

  --background-0: #FAFBFC;
  --background-1: #EBECF0;
  --background-2: #DFE1E6;
  --background-3: #C1C7D0;
  --background-4: #A5ADBA;
  --background-5: #6B778C;
  --background-6: #42526E;
  --background-7: #091E42;
  --background-8: #0747A6;
  --background-9: #0052CC;
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
  --radius-sm: 0.1875rem;
  --radius-md: 0.25rem;
  --radius-lg: 0.375rem;
  --radius-xl: 0.5rem;
  --radius-2xl: 0.75rem;
  --radius-3xl: 1rem;
  --radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(9, 30, 66, 0.25);
  --shadow-md: 0 4px 8px -2px rgba(9, 30, 66, 0.25);
  --shadow-lg: 0 8px 16px -4px rgba(9, 30, 66, 0.25);
  --shadow-xl: 0 16px 32px -8px rgba(9, 30, 66, 0.25);
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
- **协作优先理念**：学习如何为团队协作设计界面
- **清晰简洁原则**：学习如何保持界面简洁清晰
- **可访问性标准**：学习如何实现高可访问性
- **一致性设计**：学习如何保持跨产品的一致性
- **组件系统**：学习如何构建可扩展的组件系统

### ❌ 不应复刻的元素（品牌 / 插画 / 内容）
- **具体颜色值**：Atlassian 使用特定的蓝色系，不应直接复制
- **具体插画**：不应复制 Atlassian 的插画素材
- **品牌标识**：不包含任何品牌元素
- **商业素材**：不包含任何受版权保护的内容
- **产品名称**：不应使用 Jira、Confluence 等产品名称

### 使用建议
1. **学习设计理念**：理解协作优先、清晰简洁、可访问性的核心思想
2. **构建自己的视觉系统**：基于 Atlassian Design 的理念，添加自己的颜色、字体、样式
3. **保持无障碍标准**：确保所有组件符合 WCAG 2.1 AA 标准
4. **尊重知识产权**：不复制任何受版权保护的内容

### 法律风险规避
- 不复制任何受版权保护的设计素材
- 不声称与 Atlassian 有官方关联
- 不使用 Atlassian 的品牌标识
- 如需商业使用，确保符合相关法律法规

---

## 附录：Atlassian Design 核心组件清单

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
- `Table`：表格
- `Tag`：标签
- `Lozenge`：药丸形标签

### 反馈组件
- `Alert`：警告
- `Toast`：通知
- `Modal`：模态框
- `Drawer`：抽屉
- `Tooltip`：工具提示
- `Banner`：横幅
- `Flag`：标志

### 导航组件
- `Navigation`：导航
- `Breadcrumb`：面包屑
- `Pagination`：分页
- `Tabs`：标签页
- `Menu`：菜单
- `Sidebar`：侧边栏

### 布局组件
- `Grid`：网格
- `Container`：容器
- `Divider`：分隔线
- `Section`：区块
- `Page`：页面

### 其他组件
- `Dropdown`：下拉菜单
- `Dropdown Menu`：下拉菜单
- `Context Menu`：上下文菜单
- `Popover`：弹出框
- `Dialog`：对话框
- `Skeleton`：骨架屏

---

**文档版本：** 1.0.0
**最后更新：** 2025-02-02
**适用产品：** Jira, Confluence, Trello, Bitbucket, Jira Align
**无障碍标准：** WCAG 2.1 AA
**设计原则：** Open, Curious, Constructive, Practical