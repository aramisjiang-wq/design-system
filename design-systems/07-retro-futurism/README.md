# 复古未来主义设计规范

## 1. 设计风格总览（Design DNA）

### 风格关键词
- 复古未来
- 科技复古
- 色彩鲜艳
- 几何形状
- 怀旧感

### 适用产品类型
- 复古主题应用
- 创意网站
- 艺术平台
- 音乐应用
- 游戏界面
- 怀旧风格产品

---

## 2. 颜色系统（Color System）

### 主色（Primary）
```
主色：#ff6b6b（珊瑚红）
浅色：#ff8e8e
深色：#ee5a5a
```
**使用场景**：主要操作、重要信息、品牌识别

### 辅助色（Secondary）
```
颜色一：#4ecdc4（青绿色）
颜色二：#ffe66d（黄色）
颜色三：#95e1d3（薄荷绿）
颜色四：#f38181（粉色）
颜色五：#aa96da（紫色）
```
**使用场景**：功能分类、视觉区分、状态标识

### 中性色（Neutral）
```
主背景：#f7f7f7
次背景：#e8e8e8
卡片背景：#ffffff
悬浮背景：#f0f0f0

主文字：#2d3436
次文字：#636e72
禁用文字：#b2bec3

主边框：#dfe6e9
次边框：#b2bec3
```

### 语义色（Semantic）
```
成功：#4ecdc4
警告：#ffe66d
错误：#ff6b6b
信息：#aa96da
```
**使用场景**：状态指示、操作反馈、表单验证

### Design Token 命名建议
```css
--color-primary: #ff6b6b;
--color-primary-light: #ff8e8e;
--color-primary-dark: #ee5a5a;

--color-secondary-1: #4ecdc4;
--color-secondary-2: #ffe66d;
--color-secondary-3: #95e1d3;
--color-secondary-4: #f38181;
--color-secondary-5: #aa96da;

--color-text-primary: #2d3436;
--color-text-secondary: #636e72;
--color-text-disabled: #b2bec3;

--color-bg-primary: #f7f7f7;
--color-bg-secondary: #e8e8e8;
--color-bg-card: #ffffff;
--color-bg-hover: #f0f0f0;

--color-border-primary: #dfe6e9;
--color-border-secondary: #b2bec3;

--color-success: #4ecdc4;
--color-warning: #ffe66d;
--color-error: #ff6b6b;
--color-info: #aa96da;
```

---

## 3. 字体与排版（Typography）

### 字体家族
```
主字体：'Space Grotesk', 'Outfit', sans-serif
备用字体：'Poppins', 'Montserrat', sans-serif
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
正文行高：1.6
小字行高：1.4

标题字间距：0.05em
正文字间距：0em
小字字间距：0em
```

### 排版节奏规则
- 标题层级清晰（H1-H6）
- 正文使用 Regular 字重
- 重要内容使用 Medium 字重
- 强调内容使用 SemiBold 或 Bold
- 使用现代感字体
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
- **层次感**：通过颜色和形状建立层次

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
圆角：0.5rem（8px）
```

#### 颜色
```
主按钮：珊瑚红背景 + 白色文字
次按钮：白色背景 + 珊瑚红边框 + 珊瑚红文字
文字按钮：透明背景 + 珊瑚红文字
```

### Card（卡片）

#### 使用场景
- 信息展示
- 数据展示
- 内容分组

#### 阴影
```
默认：0 4px 12px rgba(0, 0, 0, 0.1)
悬停：0 8px 24px rgba(0, 0, 0, 0.15)
```

#### 间距
```
内边距：2rem
外边距：0
```

#### 特征
- 白色背景
- 彩色边框
- 圆角设计（8px）
- 柔和阴影

### Input / Upload / Form 类组件

#### Input（输入框）
```
背景：#ffffff
文字：#2d3436
边框：1px solid #dfe6e9
圆角：0.5rem（8px）
内边距：0.75rem 1rem
```

#### 状态
- 默认：白色背景，灰色边框
- 悬停：边框色加深
- 焦点：珊瑚红边框
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
- **圆角感**：圆润（4px）
- **颜色**：鲜艳色彩

### 插画风格
- **是否统一**：统一风格插画
- **设计原则**：复古、未来、色彩鲜艳

### 设计原则
- 鲜艳的色彩
- 几何形状
- 复古未来感
- 保持一致的视觉风格
- 强调怀旧感

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover / Active / Focus 行为

#### Hover（悬停）
```
持续时间：250ms
缓动函数：cubic-bezier(0.4, 0, 0.2, 1)
效果：背景色变化、轻微缩放
```

#### Active（激活）
```
持续时间：150ms
缓动函数：cubic-bezier(0.4, 0, 0.2, 1)
效果：轻微缩小（scale(0.98)）
```

#### Focus（聚焦）
```
持续时间：250ms
缓动函数：cubic-bezier(0.4, 0, 0.2, 1)
效果：边框色变化
```

### 动效节奏
- **活泼**：动画活泼、有趣
- **明显度**：中等（可见但不突兀）
- **性能优先**：使用 CSS 动画

### 操作反馈设计原则
- 视觉反馈：颜色变化、缩放
- 触觉反馈：轻微震动（移动端）
- 即时反馈：250ms 内完成

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
    --color-primary: #ff6b6b;
    --color-primary-light: #ff8e8e;
    --color-primary-dark: #ee5a5a;

    --color-secondary-1: #4ecdc4;
    --color-secondary-2: #ffe66d;
    --color-secondary-3: #95e1d3;
    --color-secondary-4: #f38181;
    --color-secondary-5: #aa96da;

    --color-text-primary: #2d3436;
    --color-text-secondary: #636e72;
    --color-text-disabled: #b2bec3;

    --color-bg-primary: #f7f7f7;
    --color-bg-secondary: #e8e8e8;
    --color-bg-card: #ffffff;
    --color-bg-hover: #f0f0f0;

    --color-border-primary: #dfe6e9;
    --color-border-secondary: #b2bec3;

    --color-success: #4ecdc4;
    --color-warning: #ffe66d;
    --color-error: #ff6b6b;
    --color-info: #aa96da;
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
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
    --shadow-none: none;
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.15);
    --shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.2);
}
```

### Typography Tokens
```css
:root {
    --font-family: 'Space Grotesk', 'Outfit', sans-serif;

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
    --line-height-body: 1.6;
    --line-height-small: 1.4;

    --letter-spacing-heading: 0.05em;
    --letter-spacing-body: 0em;
    --letter-spacing-small: 0em;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）
- 鲜艳的色彩搭配
- 复古未来感设计
- 几何形状使用
- 圆润的圆角
- 活泼的动画
- 怀旧感营造
- 现代字体
- 色彩丰富的视觉

### 不应复刻的元素（品牌 / 插画 / 内容）
- 具体的品牌名称和标识
- 特定的产品文案内容
- 品牌相关的插画和图标
- 具体的产品功能描述
- 特定的数据展示内容
- 品牌色彩方案（如需保持品牌一致性）

---

## 适用场景

- 复古主题应用
- 创意网站
- 艺术平台
- 音乐应用
- 游戏界面
- 怀旧风格产品
- 创意作品集
- 设计博客

---

## 核心设计特点

1. **鲜艳色彩**：使用鲜艳的色彩搭配
2. **复古未来感**：融合复古和未来元素
3. **几何形状**：使用几何形状增强设计感
4. **圆润圆角**：使用圆润的圆角
5. **活泼动画**：使用活泼的动画效果
6. **怀旧感**：营造怀旧的氛围
7. **现代字体**：使用现代感强的字体
