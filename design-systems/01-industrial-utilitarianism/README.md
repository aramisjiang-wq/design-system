# 工业实用主义设计规范

## 1. 设计风格总览（Design DNA）

### 风格关键词
- 极简高效
- 技术专业
- 功能至上
- 单色系
- 精准清晰

### 适用产品类型
- 技术文档系统
- 开发者工具
- 数据仪表板
- 监控系统
- API 文档
- 终端应用
- 系统管理工具

---

## 2. 颜色系统（Color System）

### 主色（Primary）
```
主色：#0d0d0d
浅色：#1a1a1a
深色：#000000
```
**使用场景**：主背景、卡片背景、主要界面元素

### 辅助色（Secondary）
```
颜色一：#e8e8e8
颜色二：#666666
颜色三：#4a4a4a
颜色四：#333333
颜色五：#1a1a1a
```
**使用场景**：文字层级、边框、分隔线

### 中性色（Neutral）
```
主背景：#0d0d0d
次背景：#1a1a1a
卡片背景：#0d0d0d
悬浮背景：#1a1a1a

主文字：#e8e8e8
次文字：#666666
禁用文字：#4a4a4a

主边框：#333333
次边框：#1a1a1a
```

### 语义色（Semantic）
```
成功：#4a9
警告：#c44
错误：#c44
信息：#4a9
```
**使用场景**：状态指示、操作反馈

### Design Token 命名建议
```css
--color-primary: #0d0d0d
--color-primary-light: #1a1a1a
--color-primary-dark: #000000

--color-text-primary: #e8e8e8
--color-text-secondary: #666666
--color-text-disabled: #4a4a4a

--color-bg-primary: #0d0d0d
--color-bg-secondary: #1a1a1a

--color-border-primary: #333333
--color-border-secondary: #1a1a1a

--color-success: #4a9
--color-warning: #c44
--color-error: #c44
--color-info: #4a9
```

---

## 3. 字体与排版（Typography）

### 字体家族
```
主字体：JetBrains Mono, 'Courier New', monospace
备用字体：'Fira Code', 'Source Code Pro'
```

### 字号层级
```
H1：1.5rem（24px）
H2：1.25rem（20px）
H3：1rem（16px）
Body：0.875rem（14px）
Small：0.75rem（12px）
Tiny：0.65rem（10.4px）
```

### 字重
```
Light：300
Regular：400
Medium：500
SemiBold：600
Bold：700
```

### 行高与字间距
```
标题行高：1.2
正文行高：1.6
小字行高：1.4

标题字间距：0.1em
正文字间距：0.05em
小字字间距：0.05em
```

### 排版节奏规则
- 标题使用大写字母
- 按钮和标签使用大写字母
- 正文使用 Regular 字重
- 强调内容使用 SemiBold 或 Bold
- 所有文本使用等宽字体

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```
最大宽度：1400px
```

### 栅格系统
```
列数：12列
间距（gutter）：1.5rem（24px）
边距（margin）：2rem（32px）
```

### 留白密度与信息密度
- **高信息密度**：适合技术文档和数据展示
- **紧凑留白**：最小化空白，最大化信息展示
- **模块化布局**：清晰的模块边界

### 响应式断点
```
手机：< 640px
平板：640px - 1024px
桌面：> 1024px
大屏：> 1400px
```

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

#### 尺寸
```
小号：0.5rem 0.75rem
中号：0.5rem 1rem
大号：0.75rem 1.5rem
```

#### 状态
- 默认：深灰背景 + 浅灰文字
- 悬停：背景色变浅
- 激活：背景色加深
- 禁用：中灰背景 + 中灰文字
- 加载：显示加载指示器

#### 圆角
```
圆角：0（直角设计）
```

#### 颜色
```
背景：var(--bg-secondary)
文字：var(--text-primary)
边框：1px solid var(--border-color)
```

### Card（卡片）

#### 使用场景
- 信息展示
- 数据展示
- 内容分组

#### 阴影
```
默认：none
悬停：none
```

#### 间距
```
内边距：1.5rem
外边距：0
```

#### 特征
- 顶部装饰线（2px 高）
- 直角设计（无圆角）
- 细边框（1px）

### Input / Upload / Form 类组件

#### Input（输入框）
```
背景：#0d0d0d
文字：#e8e8e8
边框：1px solid #333333
圆角：0
内边距：0.5rem 0.75rem
```

#### 状态
- 默认：深灰背景，灰色边框
- 悬停：边框色变浅
- 焦点：边框色变浅
- 错误：红色边框
- 禁用：灰色背景，灰色文字

### Navigation（导航）

#### 结构
- 顶部导航栏
- 侧边栏（可选）
- 面包屑导航

#### 交互
- 悬停：背景色变化
- 激活：背景色加深
- 点击：轻微缩小（scale(0.98)）

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
- **类型**：outline（线框风格）
- **线条粗细**：1.5px
- **圆角感**：无圆角（直角设计）
- **颜色**：单色（#e8e8e8）

### 插画风格
- **是否统一**：无插画（极简设计）
- **设计原则**：弱化装饰，仅辅助理解

### 设计原则
- 功能优先，装饰弱化
- 仅在必要时使用图标辅助理解
- 保持一致的线条粗细和风格
- 避免复杂插画

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover / Active / Focus 行为

#### Hover（悬停）
```
持续时间：150ms
缓动函数：ease
效果：背景色变化、边框色变化
```

#### Active（激活）
```
持续时间：100ms
缓动函数：ease
效果：轻微缩小（scale(0.98)）
```

#### Focus（聚焦）
```
持续时间：150ms
缓动函数：ease
效果：边框色变化
```

### 动效节奏
- **克制**：动画快速、简洁
- **明显度**：低（几乎不可察觉）
- **性能优先**：使用 CSS 动画

### 操作反馈设计原则
- 视觉反馈：颜色变化
- 触觉反馈：轻微震动（移动端）
- 即时反馈：150ms 内完成

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
    --color-primary: #0d0d0d;
    --color-primary-light: #1a1a1a;
    --color-primary-dark: #000000;

    --color-text-primary: #e8e8e8;
    --color-text-secondary: #666666;
    --color-text-disabled: #4a4a4a;

    --color-bg-primary: #0d0d0d;
    --color-bg-secondary: #1a1a1a;
    --color-bg-card: #0d0d0d;
    --color-bg-hover: #1a1a1a;

    --color-border-primary: #333333;
    --color-border-secondary: #1a1a1a;

    --color-success: #4a9;
    --color-warning: #c44;
    --color-error: #c44;
    --color-info: #4a9;
}
```

### Spacing Tokens
```css
:root {
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
}
```

### Radius Tokens
```css
:root {
    --radius-none: 0;
    --radius-sm: 0;
    --radius-md: 0;
    --radius-lg: 0;
}
```

### Shadow Tokens
```css
:root {
    --shadow-none: none;
    --shadow-sm: none;
    --shadow-md: none;
    --shadow-lg: none;
}
```

### Typography Tokens
```css
:root {
    --font-family: 'JetBrains Mono', 'Courier New', monospace;

    --font-size-h1: 1.5rem;
    --font-size-h2: 1.25rem;
    --font-size-h3: 1rem;
    --font-size-body: 0.875rem;
    --font-size-small: 0.75rem;
    --font-size-tiny: 0.65rem;

    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    --line-height-heading: 1.2;
    --line-height-body: 1.6;
    --line-height-small: 1.4;

    --letter-spacing-heading: 0.1em;
    --letter-spacing-body: 0.05em;
    --letter-spacing-small: 0.05em;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）
- 单色系配色方案
- 等宽字体的使用
- 直角设计（无圆角）
- 极简边框和分隔线
- 快速过渡动画（150ms）
- 高信息密度布局
- 功能优先的设计理念
- 清晰的信息层级

### 不应复刻的元素（品牌 / 插画 / 内容）
- 具体的品牌名称和标识
- 特定的产品文案内容
- 具体的数据展示内容
- 特定的技术文档内容
- 品牌相关的插画和图标
- 具体的产品功能描述

---

## 适用场景

- 技术文档和开发者工具
- 数据仪表板和监控系统
- 代码编辑器和 IDE
- 命令行界面（CLI）
- 系统管理工具
- 日志查看器
- API 文档
- 终端应用
- 服务器管理界面
- 网络监控工具

---

## 核心设计特点

1. **单色系配色**：避免鲜艳色彩，使用灰色系为主
2. **等宽字体**：营造技术感和专业感
3. **大写字母**：大量使用大写字母和字母间距
4. **极简边框**：使用细边框和分隔线
5. **无装饰**：无阴影、无渐变、无圆角
6. **快速过渡**：使用 150ms 的快速过渡动画
7. **功能优先**：强调功能性和可读性
