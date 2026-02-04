# 赛博朋克设计规范

## 1. 设计风格总览（Design DNA）

### 风格关键词
- 霓虹色彩
- 高对比度
- 未来感
- 科技感
- 反乌托邦

### 适用产品类型
- 游戏界面
- 科技产品
- 创意网站
- 音乐应用
- 视觉艺术平台
- 赛博朋克主题应用

---

## 2. 颜色系统（Color System）

### 主色（Primary）
```
主色：#00f3ff（青色）
浅色：#00ff9d（绿色）
深色：#00bcd4（深青）
```
**使用场景**：主要操作、重要信息、品牌识别

### 辅助色（Secondary）
```
颜色一：#ff00ff（洋红）
颜色二：#ffff00（黄色）
颜色三：#ff6b00（橙色）
颜色四：#9d00ff（紫色）
颜色五：#ff0055（红色）
```
**使用场景**：功能分类、视觉区分、状态标识

### 中性色（Neutral）
```
主背景：#0a0a0a（深黑）
次背景：#1a1a1a（深灰）
卡片背景：#111111
悬浮背景：#1f1f1f

主文字：#ffffff
次文字：#cccccc
禁用文字：#666666

主边框：#333333
次边框：#444444
```

### 语义色（Semantic）
```
成功：#00ff9d
警告：#ffff00
错误：#ff0055
信息：#00f3ff
```
**使用场景**：状态指示、操作反馈、表单验证

### Design Token 命名建议
```css
--color-primary: #00f3ff;
--color-primary-light: #00ff9d;
--color-primary-dark: #00bcd4;

--color-secondary-1: #ff00ff;
--color-secondary-2: #ffff00;
--color-secondary-3: #ff6b00;
--color-secondary-4: #9d00ff;
--color-secondary-5: #ff0055;

--color-text-primary: #ffffff;
--color-text-secondary: #cccccc;
--color-text-disabled: #666666;

--color-bg-primary: #0a0a0a;
--color-bg-secondary: #1a1a1a;
--color-bg-card: #111111;
--color-bg-hover: #1f1f1f;

--color-border-primary: #333333;
--color-border-secondary: #444444;

--color-success: #00ff9d;
--color-warning: #ffff00;
--color-error: #ff0055;
--color-info: #00f3ff;
```

---

## 3. 字体与排版（Typography）

### 字体家族
```
主字体：'Orbitron', 'Rajdhani', sans-serif
备用字体：'Press Start 2P', 'Courier New', monospace
```

### 字号层级
```
H1：3rem（48px）
H2：2.5rem（40px）
H3：2rem（32px）
H4：1.5rem（24px）
H5：1.25rem（20px）
H6：1rem（16px）
Body：1rem（16px）
Small：0.875rem（14px）
Tiny：0.75rem（12px）
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
标题行高：1.1
正文行高：1.5
小字行高：1.4

标题字间距：0.1em
正文字间距：0.05em
小字字间距：0.05em
```

### 排版节奏规则
- 标题层级清晰（H1-H6）
- 正文使用 Regular 字重
- 重要内容使用 Medium 字重
- 强调内容使用 SemiBold 或 Bold
- 使用科技感字体
- 大号标题增强视觉冲击力

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```
最大宽度：1440px
```

### 栅格系统
```
列数：12列
间距（gutter）：1.5rem（24px）
边距（margin）：2rem（32px）
```

### 留白密度与信息密度
- **高信息密度**：强调科技感
- **紧凑留白**：保持紧凑的布局
- **层次感**：通过颜色和发光建立层次

### 响应式断点
```
手机：< 768px
平板：768px - 1024px
桌面：> 1024px
大屏：> 1440px
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
- 悬停：发光效果增强
- 激活：发光效果进一步增强
- 禁用：灰色显示，不可点击
- 加载：显示加载指示器

#### 圆角
```
圆角：0（直角设计）
```

#### 颜色
```
主按钮：霓虹色背景 + 白色文字
次按钮：透明背景 + 霓虹色边框 + 霓虹色文字
文字按钮：透明背景 + 霓虹色文字
```

#### 霓虹效果
```
背景：#00f3ff
发光：box-shadow: 0 0 10px #00f3ff, 0 0 20px #00f3ff
边框：1px solid #00f3ff
```

### Card（卡片）

#### 使用场景
- 信息展示
- 数据展示
- 内容分组

#### 阴影
```
默认：0 0 10px rgba(0, 243, 255, 0.3)
悬停：0 0 20px rgba(0, 243, 255, 0.5)
```

#### 间距
```
内边距：1.5rem
外边距：0
```

#### 特征
- 深色背景
- 霓虹边框
- 直角设计
- 发光效果

#### 霓虹效果
```
背景：#111111
边框：1px solid #00f3ff
发光：box-shadow: 0 0 10px rgba(0, 243, 255, 0.3)
```

### Input / Upload / Form 类组件

#### Input（输入框）
```
背景：#111111
文字：#ffffff
边框：1px solid #333333
圆角：0
内边距：0.75rem 1rem
```

#### 霓虹效果
```
背景：#111111
边框：1px solid #00f3ff
发光：box-shadow: 0 0 5px rgba(0, 243, 255, 0.3)
```

#### 状态
- 默认：深色背景，深色边框
- 悬停：霓虹边框
- 焦点：霓虹边框 + 发光效果
- 错误：红色边框 + 红色发光
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
- 悬停：发光效果增强
- 激活：发光效果进一步增强
- 点击：轻微缩小（scale(0.98)）

#### 霓虹效果
```
背景：#111111
边框：1px solid #00f3ff
发光：box-shadow: 0 0 10px rgba(0, 243, 255, 0.3)
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
- **类型**：outline（线框风格）
- **线条粗细**：2px
- **圆角感**：无圆角（直角设计）
- **颜色**：霓虹色（#00f3ff、#ff00ff）

### 插画风格
- **是否统一**：统一风格插画
- **设计原则**：科技感、未来感、反乌托邦

### 设计原则
- 霓虹色彩和发光效果
- 科技感设计
- 高对比度
- 保持一致的视觉风格
- 强调未来感

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover / Active / Focus 行为

#### Hover（悬停）
```
持续时间：200ms
缓动函数：ease
效果：发光效果增强、颜色变化
```

#### Active（激活）
```
持续时间：100ms
缓动函数：ease
效果：轻微缩小（scale(0.98)）
```

#### Focus（聚焦）
```
持续时间：200ms
缓动函数：ease
效果：霓虹边框、发光效果
```

### 动效节奏
- **明显**：动画明显、科技感
- **明显度**：高（可见且突出）
- **性能优先**：使用 CSS 动画

### 操作反馈设计原则
- 视觉反馈：发光效果、颜色变化
- 触觉反馈：明显震动（移动端）
- 即时反馈：200ms 内完成

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
    --color-primary: #00f3ff;
    --color-primary-light: #00ff9d;
    --color-primary-dark: #00bcd4;

    --color-secondary-1: #ff00ff;
    --color-secondary-2: #ffff00;
    --color-secondary-3: #ff6b00;
    --color-secondary-4: #9d00ff;
    --color-secondary-5: #ff0055;

    --color-text-primary: #ffffff;
    --color-text-secondary: #cccccc;
    --color-text-disabled: #666666;

    --color-bg-primary: #0a0a0a;
    --color-bg-secondary: #1a1a1a;
    --color-bg-card: #111111;
    --color-bg-hover: #1f1f1f;

    --color-border-primary: #333333;
    --color-border-secondary: #444444;

    --color-success: #00ff9d;
    --color-warning: #ffff00;
    --color-error: #ff0055;
    --color-info: #00f3ff;
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
    --shadow-sm: 0 0 5px rgba(0, 243, 255, 0.3);
    --shadow-md: 0 0 10px rgba(0, 243, 255, 0.3);
    --shadow-lg: 0 0 20px rgba(0, 243, 255, 0.5);
    --shadow-xl: 0 0 30px rgba(0, 243, 255, 0.7);
}
```

### Neon Tokens
```css
:root {
    --neon-primary: #00f3ff;
    --neon-secondary: #ff00ff;
    --neon-success: #00ff9d;
    --neon-warning: #ffff00;
    --neon-error: #ff0055;
    --neon-glow-sm: 0 0 5px currentColor;
    --neon-glow-md: 0 0 10px currentColor;
    --neon-glow-lg: 0 0 20px currentColor;
}
```

### Typography Tokens
```css
:root {
    --font-family: 'Orbitron', 'Rajdhani', sans-serif;

    --font-size-h1: 3rem;
    --font-size-h2: 2.5rem;
    --font-size-h3: 2rem;
    --font-size-h4: 1.5rem;
    --font-size-h5: 1.25rem;
    --font-size-h6: 1rem;
    --font-size-body: 1rem;
    --font-size-small: 0.875rem;
    --font-size-tiny: 0.75rem;

    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    --line-height-heading: 1.1;
    --line-height-body: 1.5;
    --line-height-small: 1.4;

    --letter-spacing-heading: 0.1em;
    --letter-spacing-body: 0.05em;
    --letter-spacing-small: 0.05em;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）
- 霓虹色彩和发光效果
- 高对比度配色
- 科技感字体
- 直角设计
- 未来感设计
- 动态效果
- 科技感图标
- 反乌托邦美学

### 不应复刻的元素（品牌 / 插画 / 内容）
- 具体的品牌名称和标识
- 特定的产品文案内容
- 品牌相关的插画和图标
- 具体的产品功能描述
- 特定的数据展示内容
- 品牌色彩方案（如需保持品牌一致性）

---

## 适用场景

- 游戏界面
- 科技产品
- 创意网站
- 音乐应用
- 视觉艺术平台
- 赛博朋克主题应用
- 科技博客
- 创意作品集

---

## 核心设计特点

1. **霓虹色彩**：使用鲜艳的霓虹色和发光效果
2. **高对比度**：深色背景配合亮色元素
3. **科技感字体**：使用科技感强的字体
4. **直角设计**：无圆角，强调科技感
5. **未来感**：整体设计风格未来、科技
6. **动态效果**：使用发光和动画效果
7. **反乌托邦美学**：体现赛博朋克的美学风格
