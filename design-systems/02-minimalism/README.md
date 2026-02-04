# 极简主义设计规范

## 1. 设计风格总览（Design DNA）

### 风格关键词
- 极简纯粹
- 清晰直观
- 一致性
- 高效
- 可访问

### 适用产品类型
- 现代 Web 应用
- 企业级 SaaS 产品
- 移动端应用
- 内容管理系统
- 电商平台
- 社交媒体应用

---

## 2. 颜色系统（Color System）

### 主色（Primary）
```
主色：#3B82F6
浅色：#60A5FA
深色：#2563EB
```
**使用场景**：主要操作、重要信息、品牌识别

### 辅助色（Secondary）
```
颜色一：#10B981（绿色）
颜色二：#F59E0B（黄色）
颜色三：#EF4444（红色）
颜色四：#8B5CF6（紫色）
颜色五：#EC4899（粉色）
```
**使用场景**：功能分类、视觉区分、状态标识

### 中性色（Neutral）
```
主背景：#FFFFFF
次背景：#F9FAFB
卡片背景：#FFFFFF
悬浮背景：#F3F4F6

主文字：#111827
次文字：#6B7280
禁用文字：#9CA3AF

主边框：#E5E7EB
次边框：#D1D5DB
```

### 语义色（Semantic）
```
成功：#10B981
警告：#F59E0B
错误：#EF4444
信息：#3B82F6
```
**使用场景**：状态指示、操作反馈、表单验证

### Design Token 命名建议
```css
--color-primary: #3B82F6;
--color-primary-light: #60A5FA;
--color-primary-dark: #2563EB;

--color-secondary-1: #10B981;
--color-secondary-2: #F59E0B;
--color-secondary-3: #EF4444;
--color-secondary-4: #8B5CF6;
--color-secondary-5: #EC4899;

--color-text-primary: #111827;
--color-text-secondary: #6B7280;
--color-text-disabled: #9CA3AF;

--color-bg-primary: #FFFFFF;
--color-bg-secondary: #F9FAFB;
--color-bg-card: #FFFFFF;
--color-bg-hover: #F3F4F6;

--color-border-primary: #E5E7EB;
--color-border-secondary: #D1D5DB;

--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #3B82F6;
```

---

## 3. 字体与排版（Typography）

### 字体家族
```
主字体：-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
备用字体："PingFang SC", "Microsoft YaHei", sans-serif
```

### 字号层级
```
H1：2rem（32px）
H2：1.5rem（24px）
H3：1.25rem（20px）
H4：1rem（16px）
H5：0.875rem（14px）
H6：0.75rem（12px）
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
标题行高：1.25
正文行高：1.5
小字行高：1.4

标题字间距：0.05em
正文字间距：0em
小字字间距：0.05em
```

### 排版节奏规则
- 标题层级清晰（H1-H6）
- 正文使用 Regular 字重
- 重要内容使用 Medium 字重
- 强调内容使用 SemiBold 或 Bold
- 优先使用系统字体，提高加载性能
- 响应式字体调整

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```
最大宽度：1200px
```

### 栅格系统
```
列数：12列
间距（gutter）：1.5rem（24px）
边距（margin）：2rem（32px）
```

### 留白密度与信息密度
- **中等信息密度**：平衡信息展示与留白
- **充足留白**：保持视觉呼吸感
- **清晰层次**：通过留白建立视觉层次

### 响应式断点
```
手机：< 640px
平板：640px - 1024px
桌面：> 1024px
大屏：> 1280px
```

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

#### 尺寸
```
小号：0.375rem 0.75rem（高度：32px）
中号：0.5rem 1rem（高度：40px）
大号：0.75rem 1.5rem（高度：48px）
```

#### 状态
- 默认：正常显示，可点击
- 悬停：背景色加深，边框色加深
- 激活：背景色进一步加深
- 禁用：灰色显示，不可点击
- 加载：显示加载指示器
- 焦点：显示焦点环

#### 圆角
```
圆角：0.375rem（6px）
```

#### 颜色
```
主按钮：蓝色背景 + 白色文字
次按钮：白色背景 + 蓝色边框 + 蓝色文字
文字按钮：透明背景 + 蓝色文字
```

### Card（卡片）

#### 使用场景
- 信息展示
- 数据展示
- 内容分组

#### 阴影
```
默认：0 1px 3px rgba(0, 0, 0, 0.1)
悬停：0 4px 6px rgba(0, 0, 0, 0.1)
```

#### 间距
```
内边距：1.5rem
外边距：0
```

#### 特征
- 白色背景
- 灰色边框
- 圆角设计（8px）
- 悬停效果

### Input / Upload / Form 类组件

#### Input（输入框）
```
背景：#FFFFFF
文字：#111827
边框：1px solid #E5E7EB
圆角：0.375rem（6px）
内边距：0.5rem 0.75rem
```

#### 状态
- 默认：白色背景，灰色边框
- 悬停：边框色加深
- 焦点：蓝色边框 + 焦点环
- 错误：红色边框 + 错误提示
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
- 焦点：显示焦点环

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
- **类型**：outline（线框风格）和 filled（填充风格）
- **线条粗细**：2px
- **圆角感**：轻微圆角（2px）
- **颜色**：单色（#6B7280）

### 插画风格
- **是否统一**：统一风格插画
- **设计原则**：辅助理解，不喧宾夺主

### 设计原则
- 简洁明了，易于理解
- 保持一致的线条粗细和风格
- 使用柔和的色彩
- 避免过度装饰
- 功能优先，装饰弱化

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover / Active / Focus 行为

#### Hover（悬停）
```
持续时间：200ms
缓动函数：cubic-bezier(0.4, 0, 0.2, 1)
效果：背景色变化、边框色变化
```

#### Active（激活）
```
持续时间：150ms
缓动函数：cubic-bezier(0.4, 0, 0.2, 1)
效果：轻微缩小（scale(0.98)）
```

#### Focus（聚焦）
```
持续时间：200ms
缓动函数：cubic-bezier(0.4, 0, 0.2, 1)
效果：边框色变化、焦点环
```

### 动效节奏
- **克制**：动画简洁、流畅
- **明显度**：中等（可见但不突兀）
- **性能优先**：使用 CSS 动画

### 操作反馈设计原则
- 视觉反馈：颜色变化、图标变化
- 触觉反馈：轻微震动（移动端）
- 即时反馈：200ms 内完成

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
    --color-primary: #3B82F6;
    --color-primary-light: #60A5FA;
    --color-primary-dark: #2563EB;

    --color-secondary-1: #10B981;
    --color-secondary-2: #F59E0B;
    --color-secondary-3: #EF4444;
    --color-secondary-4: #8B5CF6;
    --color-secondary-5: #EC4899;

    --color-text-primary: #111827;
    --color-text-secondary: #6B7280;
    --color-text-disabled: #9CA3AF;

    --color-bg-primary: #FFFFFF;
    --color-bg-secondary: #F9FAFB;
    --color-bg-card: #FFFFFF;
    --color-bg-hover: #F3F4F6;

    --color-border-primary: #E5E7EB;
    --color-border-secondary: #D1D5DB;

    --color-success: #10B981;
    --color-warning: #F59E0B;
    --color-error: #EF4444;
    --color-info: #3B82F6;
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
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### Typography Tokens
```css
:root {
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

    --font-size-h1: 2rem;
    --font-size-h2: 1.5rem;
    --font-size-h3: 1.25rem;
    --font-size-h4: 1rem;
    --font-size-h5: 0.875rem;
    --font-size-h6: 0.75rem;
    --font-size-body: 1rem;
    --font-size-small: 0.875rem;
    --font-size-tiny: 0.75rem;

    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    --line-height-heading: 1.25;
    --line-height-body: 1.5;
    --line-height-small: 1.4;

    --letter-spacing-heading: 0.05em;
    --letter-spacing-body: 0em;
    --letter-spacing-small: 0.05em;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）
- 极简配色方案
- 清晰的信息层级
- 一致的圆角设计
- 标准化的间距系统
- 流畅的过渡动画
- 系统字体优先
- 响应式设计
- 可访问性优先

### 不应复刻的元素（品牌 / 插画 / 内容）
- 具体的品牌名称和标识
- 特定的产品文案内容
- 品牌相关的插画和图标
- 具体的产品功能描述
- 特定的数据展示内容
- 品牌色彩方案（如需保持品牌一致性）

---

## 适用场景

- 现代 Web 应用
- 企业级 SaaS 产品
- 移动端应用
- 内容管理系统
- 电商平台
- 社交媒体应用
- 数据分析平台
- 在线教育平台

---

## 核心设计特点

1. **极简配色**：使用简洁的色彩方案，避免过度装饰
2. **清晰层级**：通过字体大小、颜色、间距建立清晰的信息层级
3. **一致设计**：所有组件遵循统一的设计语言
4. **流畅动画**：使用流畅的过渡动画，提升用户体验
5. **系统字体**：优先使用系统字体，提高加载性能
6. **响应式设计**：适配各种屏幕尺寸
7. **可访问性**：遵循 WCAG 2.1 AA 标准
