# 新拟态设计规范

## 1. 设计风格总览（Design DNA）

### 风格关键词
- 柔和阴影
- 立体感
- 极简
- 统一色调
- 触感设计

### 适用产品类型
- 现代移动应用
- 智能家居控制
- 音乐播放器
- 计时器应用
- 健康应用
- 工具类应用

---

## 2. 颜色系统（Color System）

### 主色（Primary）
```
主色：#e0e5ec
浅色：#f0f3f7
深色：#d1d9e6
```
**使用场景**：主要操作、重要信息、品牌识别

### 辅助色（Secondary）
```
颜色一：#a8d8ea（浅蓝）
颜色二：#aa96da（浅紫）
颜色三：#fcbad3（浅粉）
颜色四：#ffffd2（浅黄）
颜色五：#a8e6cf（浅绿）
```
**使用场景**：功能分类、视觉区分、状态标识

### 中性色（Neutral）
```
主背景：#e0e5ec
次背景：#d1d9e6
卡片背景：#e0e5ec
悬浮背景：#d1d9e6

主文字：#4a5568
次文字：#718096
禁用文字：#a0aec0

主边框：#e0e5ec
次边框：#d1d9e6
```

### 语义色（Semantic）
```
成功：#a8e6cf
警告：#fcbad3
错误：#fcbad3
信息：#a8d8ea
```
**使用场景**：状态指示、操作反馈、表单验证

### Design Token 命名建议
```css
--color-primary: #e0e5ec;
--color-primary-light: #f0f3f7;
--color-primary-dark: #d1d9e6;

--color-secondary-1: #a8d8ea;
--color-secondary-2: #aa96da;
--color-secondary-3: #fcbad3;
--color-secondary-4: #ffffd2;
--color-secondary-5: #a8e6cf;

--color-text-primary: #4a5568;
--color-text-secondary: #718096;
--color-text-disabled: #a0aec0;

--color-bg-primary: #e0e5ec;
--color-bg-secondary: #d1d9e6;
--color-bg-card: #e0e5ec;
--color-bg-hover: #d1d9e6;

--color-border-primary: #e0e5ec;
--color-border-secondary: #d1d9e6;

--color-success: #a8e6cf;
--color-warning: #fcbad3;
--color-error: #fcbad3;
--color-info: #a8d8ea;
```

---

## 3. 字体与排版（Typography）

### 字体家族
```
主字体：'Nunito', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
备用字体：'Quicksand', 'Poppins', sans-serif
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
- 强调内容使用 Bold
- 使用圆润的无衬线字体
- 保持柔和的视觉风格

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```
最大宽度：1200px
```

### 栅格系统
```
列数：12列
间距（gutter）：2rem（32px）
边距（margin）：2rem（32px）
```

### 留白密度与信息密度
- **低信息密度**：强调视觉效果
- **充足留白**：保持视觉呼吸感
- **层次感**：通过阴影建立层次

### 响应式断点
```
手机：< 768px
平板：768px - 1024px
桌面：> 1024px
大屏：> 1200px
```

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

#### 尺寸
```
小号：0.75rem 1.5rem（高度：40px）
中号：1rem 2rem（高度：48px）
大号：1.25rem 2.5rem（高度：56px）
```

#### 状态
- 默认：正常显示，可点击
- 悬停：阴影变化
- 激活：阴影反转
- 禁用：灰色显示，不可点击
- 加载：显示加载指示器

#### 圆角
```
圆角：1rem（16px）
```

#### 颜色
```
主按钮：背景色 + 柔和阴影
次按钮：背景色 + 柔和阴影
文字按钮：透明背景 + 文字颜色
```

#### 新拟态效果
```
背景：#e0e5ec
阴影：9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)
```

### Card（卡片）

#### 使用场景
- 信息展示
- 数据展示
- 内容分组

#### 阴影
```
默认：9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)
悬停：12px 12px 20px rgba(163, 177, 198, 0.6), -12px -12px 20px rgba(255, 255, 255, 0.5)
```

#### 间距
```
内边距：2rem
外边距：0
```

#### 特征
- 统一背景色
- 柔和阴影
- 圆角设计（16px）
- 立体感

#### 新拟态效果
```
背景：#e0e5ec
阴影：9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)
```

### Input / Upload / Form 类组件

#### Input（输入框）
```
背景：#e0e5ec
文字：#4a5568
边框：none
圆角：0.75rem（12px）
内边距：1rem 1.25rem
```

#### 新拟态效果
```
背景：#e0e5ec
阴影：inset 6px 6px 10px rgba(163, 177, 198, 0.6), inset -6px -6px 10px rgba(255, 255, 255, 0.5)
```

#### 状态
- 默认：统一背景，内阴影
- 悬停：阴影变化
- 焦点：阴影加深
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
- 悬停：阴影变化
- 激活：阴影反转
- 点击：轻微缩小（scale(0.98)）

#### 新拟态效果
```
背景：#e0e5ec
阴影：9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
- **类型**：filled（填充风格）
- **线条粗细**：无（填充风格）
- **圆角感**：圆润（4px）
- **颜色**：单色或双色

### 插画风格
- **是否统一**：统一风格插画
- **设计原则**：柔和、圆润、立体

### 设计原则
- 柔和的色彩和阴影
- 圆润的形状
- 统一的背景色
- 保持一致的视觉风格
- 避免过度装饰

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover / Active / Focus 行为

#### Hover（悬停）
```
持续时间：300ms
缓动函数：cubic-bezier(0.4, 0, 0.2, 1)
效果：阴影变化
```

#### Active（激活）
```
持续时间：150ms
缓动函数：cubic-bezier(0.4, 0, 0.2, 1)
效果：阴影反转（inset）
```

#### Focus（聚焦）
```
持续时间：300ms
缓动函数：cubic-bezier(0.4, 0, 0.2, 1)
效果：阴影加深
```

### 动效节奏
- **柔和**：动画流畅、优雅
- **明显度**：中等（可见但不突兀）
- **性能优先**：使用 CSS 动画

### 操作反馈设计原则
- 视觉反馈：阴影变化
- 触觉反馈：轻微震动（移动端）
- 即时反馈：300ms 内完成

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
    --color-primary: #e0e5ec;
    --color-primary-light: #f0f3f7;
    --color-primary-dark: #d1d9e6;

    --color-secondary-1: #a8d8ea;
    --color-secondary-2: #aa96da;
    --color-secondary-3: #fcbad3;
    --color-secondary-4: #ffffd2;
    --color-secondary-5: #a8e6cf;

    --color-text-primary: #4a5568;
    --color-text-secondary: #718096;
    --color-text-disabled: #a0aec0;

    --color-bg-primary: #e0e5ec;
    --color-bg-secondary: #d1d9e6;
    --color-bg-card: #e0e5ec;
    --color-bg-hover: #d1d9e6;

    --color-border-primary: #e0e5ec;
    --color-border-secondary: #d1d9e6;

    --color-success: #a8e6cf;
    --color-warning: #fcbad3;
    --color-error: #fcbad3;
    --color-info: #a8d8ea;
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
    --radius-sm: 0.5rem;
    --radius-md: 0.75rem;
    --radius-lg: 1rem;
    --radius-xl: 1.25rem;
    --radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
    --shadow-none: none;
    --shadow-sm: 4px 4px 8px rgba(163, 177, 198, 0.6), -4px -4px 8px rgba(255, 255, 255, 0.5);
    --shadow-md: 6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.5);
    --shadow-lg: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
    --shadow-xl: 12px 12px 20px rgba(163, 177, 198, 0.6), -12px -12px 20px rgba(255, 255, 255, 0.5);
    --shadow-inset: inset 6px 6px 10px rgba(163, 177, 198, 0.6), inset -6px -6px 10px rgba(255, 255, 255, 0.5);
}
```

### Typography Tokens
```css
:root {
    --font-family: 'Nunito', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

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
- 柔和的双阴影设计
- 统一的背景色
- 圆润的形状设计
- 立体感营造
- 柔和的色彩
- 触感设计
- 极简风格
- 一致的视觉语言

### 不应复刻的元素（品牌 / 插画 / 内容）
- 具体的品牌名称和标识
- 特定的产品文案内容
- 品牌相关的插画和图标
- 具体的产品功能描述
- 特定的数据展示内容
- 品牌色彩方案（如需保持品牌一致性）

---

## 适用场景

- 现代移动应用
- 智能家居控制
- 音乐播放器
- 计时器应用
- 健康应用
- 工具类应用
- 设置界面
- 控制面板

---

## 核心设计特点

1. **柔和阴影**：使用双阴影营造立体感
2. **统一背景**：所有元素使用相同的背景色
3. **圆润形状**：使用大圆角增强柔和感
4. **立体感**：通过阴影建立深度
5. **柔和色彩**：使用柔和的浅色调
6. **触感设计**：模拟真实物体的触感
7. **极简风格**：整体设计简洁、优雅
