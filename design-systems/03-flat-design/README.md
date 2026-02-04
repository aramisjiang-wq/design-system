# 扁平化设计规范

## 1. 设计风格总览（Design DNA）

### 风格关键词
- 扁平简洁
- 高对比度
- 鲜艳色彩
- 无阴影
- 现代感

### 适用产品类型
- 移动应用
- 现代 Web 应用
- 品牌官网
- 创意类产品
- 营销页面
- 游戏界面

---

## 2. 颜色系统（Color System）

### 主色（Primary）
```
主色：#3498db
浅色：#5dade2
深色：#2980b9
```
**使用场景**：主要操作、重要信息、品牌识别

### 辅助色（Secondary）
```
颜色一：#2ecc71（绿色）
颜色二：#f1c40f（黄色）
颜色三：#e74c3c（红色）
颜色四：#9b59b6（紫色）
颜色五：#e67e22（橙色）
```
**使用场景**：功能分类、视觉区分、状态标识

### 中性色（Neutral）
```
主背景：#ecf0f1
次背景：#bdc3c7
卡片背景：#ffffff
悬浮背景：#d5dbdb

主文字：#2c3e50
次文字：#7f8c8d
禁用文字：#95a5a6

主边框：#bdc3c7
次边框：#95a5a6
```

### 语义色（Semantic）
```
成功：#2ecc71
警告：#f1c40f
错误：#e74c3c
信息：#3498db
```
**使用场景**：状态指示、操作反馈、表单验证

### Design Token 命名建议
```css
--color-primary: #3498db;
--color-primary-light: #5dade2;
--color-primary-dark: #2980b9;

--color-secondary-1: #2ecc71;
--color-secondary-2: #f1c40f;
--color-secondary-3: #e74c3c;
--color-secondary-4: #9b59b6;
--color-secondary-5: #e67e22;

--color-text-primary: #2c3e50;
--color-text-secondary: #7f8c8d;
--color-text-disabled: #95a5a6;

--color-bg-primary: #ecf0f1;
--color-bg-secondary: #bdc3c7;
--color-bg-card: #ffffff;
--color-bg-hover: #d5dbdb;

--color-border-primary: #bdc3c7;
--color-border-secondary: #95a5a6;

--color-success: #2ecc71;
--color-warning: #f1c40f;
--color-error: #e74c3c;
--color-info: #3498db;
```

---

## 3. 字体与排版（Typography）

### 字体家族
```
主字体：'Open Sans', 'Helvetica Neue', Arial, sans-serif
备用字体：'Roboto', 'Segoe UI', sans-serif
```

### 字号层级
```
H1：2.5rem（40px）
H2：2rem（32px）
H3：1.5rem（24px）
H4：1.25rem（20px）
H5：1rem（16px）
H6：0.875rem（14px）
Body：1rem（16px）
Small：0.875rem（14px）
Tiny：0.75rem（12px）
```

### 字重
```
Light：300
Regular：400
SemiBold：600
Bold：700
ExtraBold：800
```

### 行高与字间距
```
标题行高：1.2
正文行高：1.6
小字行高：1.4

标题字间距：0em
正文字间距：0em
小字字间距：0em
```

### 排版节奏规则
- 标题层级清晰（H1-H6）
- 正文使用 Regular 字重
- 重要内容使用 SemiBold 字重
- 强调内容使用 Bold 或 ExtraBold
- 使用无衬线字体
- 大号标题增强视觉冲击力

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```
最大宽度：1280px
```

### 栅格系统
```
列数：12列
间距（gutter）：2rem（32px）
边距（margin）：2rem（32px）
```

### 留白密度与信息密度
- **中等信息密度**：平衡信息展示与留白
- **充足留白**：保持视觉呼吸感
- **模块化布局**：清晰的模块边界

### 响应式断点
```
手机：< 768px
平板：768px - 1024px
桌面：> 1024px
大屏：> 1280px
```

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

#### 尺寸
```
小号：0.5rem 1rem（高度：36px）
中号：0.75rem 1.5rem（高度：44px）
大号：1rem 2rem（高度：52px）
```

#### 状态
- 默认：正常显示，可点击
- 悬停：背景色加深
- 激活：背景色进一步加深
- 禁用：灰色显示，不可点击
- 加载：显示加载指示器

#### 圆角
```
圆角：0.25rem（4px）
```

#### 颜色
```
主按钮：蓝色背景 + 白色文字
次按钮：灰色背景 + 深色文字
文字按钮：透明背景 + 蓝色文字
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
内边距：2rem
外边距：0
```

#### 特征
- 白色背景
- 灰色边框
- 圆角设计（4px）
- 无阴影效果

### Input / Upload / Form 类组件

#### Input（输入框）
```
背景：#ffffff
文字：#2c3e50
边框：1px solid #bdc3c7
圆角：0.25rem（4px）
内边距：0.75rem 1rem
```

#### 状态
- 默认：白色背景，灰色边框
- 悬停：边框色加深
- 焦点：蓝色边框
- 错误：红色边框
- 禁用：灰色背景，灰色文字

#### Upload（上传组件）
- 拖拽上传区域
- 文件列表展示
- 上传进度显示
- 错误提示

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
- **类型**：filled（填充风格）
- **线条粗细**：无（填充风格）
- **圆角感**：无圆角（直角设计）
- **颜色**：单色或双色

### 插画风格
- **是否统一**：统一风格插画
- **设计原则**：扁平化、简洁、现代

### 设计原则
- 扁平化设计，无阴影和渐变
- 使用鲜艳的色彩
- 简洁明了，易于理解
- 保持一致的视觉风格
- 避免过度装饰

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover / Active / Focus 行为

#### Hover（悬停）
```
持续时间：200ms
缓动函数：ease
效果：背景色变化
```

#### Active（激活）
```
持续时间：150ms
缓动函数：ease
效果：轻微缩小（scale(0.98)）
```

#### Focus（聚焦）
```
持续时间：200ms
缓动函数：ease
效果：边框色变化
```

### 动效节奏
- **克制**：动画简洁、快速
- **明显度**：中等（可见但不突兀）
- **性能优先**：使用 CSS 动画

### 操作反馈设计原则
- 视觉反馈：颜色变化
- 触觉反馈：轻微震动（移动端）
- 即时反馈：200ms 内完成

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
    --color-primary: #3498db;
    --color-primary-light: #5dade2;
    --color-primary-dark: #2980b9;

    --color-secondary-1: #2ecc71;
    --color-secondary-2: #f1c40f;
    --color-secondary-3: #e74c3c;
    --color-secondary-4: #9b59b6;
    --color-secondary-5: #e67e22;

    --color-text-primary: #2c3e50;
    --color-text-secondary: #7f8c8d;
    --color-text-disabled: #95a5a6;

    --color-bg-primary: #ecf0f1;
    --color-bg-secondary: #bdc3c7;
    --color-bg-card: #ffffff;
    --color-bg-hover: #d5dbdb;

    --color-border-primary: #bdc3c7;
    --color-border-secondary: #95a5a6;

    --color-success: #2ecc71;
    --color-warning: #f1c40f;
    --color-error: #e74c3c;
    --color-info: #3498db;
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
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-full: 9999px;
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
    --font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;

    --font-size-h1: 2.5rem;
    --font-size-h2: 2rem;
    --font-size-h3: 1.5rem;
    --font-size-h4: 1.25rem;
    --font-size-h5: 1rem;
    --font-size-h6: 0.875rem;
    --font-size-body: 1rem;
    --font-size-small: 0.875rem;
    --font-size-tiny: 0.75rem;

    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;

    --line-height-heading: 1.2;
    --line-height-body: 1.6;
    --line-height-small: 1.4;

    --letter-spacing-heading: 0em;
    --letter-spacing-body: 0em;
    --letter-spacing-small: 0em;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）
- 扁平化设计原则
- 高对比度配色
- 鲜艳的色彩使用
- 无阴影设计
- 简洁的图标风格
- 大号标题设计
- 模块化布局
- 快速过渡动画

### 不应复刻的元素（品牌 / 插画 / 内容）
- 具体的品牌名称和标识
- 特定的产品文案内容
- 品牌相关的插画和图标
- 具体的产品功能描述
- 特定的数据展示内容
- 品牌色彩方案（如需保持品牌一致性）

---

## 适用场景

- 移动应用
- 现代 Web 应用
- 品牌官网
- 创意类产品
- 营销页面
- 游戏界面
- 教育平台
- 娱乐应用

---

## 核心设计特点

1. **扁平化设计**：无阴影、无渐变、无立体效果
2. **高对比度配色**：使用鲜艳的色彩，增强视觉冲击力
3. **简洁图标**：使用填充风格图标，简洁明了
4. **大号标题**：使用大号标题增强视觉冲击力
5. **模块化布局**：清晰的模块边界，易于理解
6. **快速过渡**：使用快速的过渡动画，提升响应速度
7. **现代感**：整体设计风格现代、简洁、时尚
