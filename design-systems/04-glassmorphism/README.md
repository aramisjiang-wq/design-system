# 玻璃拟态设计规范

## 1. 设计风格总览（Design DNA）

### 风格关键词
- 半透明
- 模糊效果
- 柔和光影
- 现代感
- 深度感

### 适用产品类型
- 现代移动应用
- 创意网站
- 品牌展示页面
- 艺术类应用
- 社交媒体应用
- 音乐播放器

---

## 2. 颜色系统（Color System）

### 主色（Primary）
```
主色：#667eea
浅色：#764ba2
深色：#4c51bf
```
**使用场景**：主要操作、重要信息、品牌识别

### 辅助色（Secondary）
```
颜色一：#f093fb（粉色）
颜色二：#f5576c（红色）
颜色三：#4facfe（蓝色）
颜色四：#00f2fe（青色）
颜色五：#43e97b（绿色）
```
**使用场景**：功能分类、视觉区分、状态标识

### 中性色（Neutral）
```
主背景：#1a1a2e（深色背景）
次背景：#16213e
卡片背景：rgba(255, 255, 255, 0.1)
悬浮背景：rgba(255, 255, 255, 0.15)

主文字：#ffffff
次文字：#a0a0a0
禁用文字：#666666

主边框：rgba(255, 255, 255, 0.2)
次边框：rgba(255, 255, 255, 0.1)
```

### 语义色（Semantic）
```
成功：#43e97b
警告：#f5576c
错误：#f5576c
信息：#4facfe
```
**使用场景**：状态指示、操作反馈、表单验证

### Design Token 命名建议
```css
--color-primary: #667eea;
--color-primary-light: #764ba2;
--color-primary-dark: #4c51bf;

--color-secondary-1: #f093fb;
--color-secondary-2: #f5576c;
--color-secondary-3: #4facfe;
--color-secondary-4: #00f2fe;
--color-secondary-5: #43e97b;

--color-text-primary: #ffffff;
--color-text-secondary: #a0a0a0;
--color-text-disabled: #666666;

--color-bg-primary: #1a1a2e;
--color-bg-secondary: #16213e;
--color-bg-card: rgba(255, 255, 255, 0.1);
--color-bg-hover: rgba(255, 255, 255, 0.15);

--color-border-primary: rgba(255, 255, 255, 0.2);
--color-border-secondary: rgba(255, 255, 255, 0.1);

--color-success: #43e97b;
--color-warning: #f5576c;
--color-error: #f5576c;
--color-info: #4facfe;
```

---

## 3. 字体与排版（Typography）

### 字体家族
```
主字体：'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
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
- 重要内容使用 Medium 字重
- 强调内容使用 SemiBold 或 Bold
- 使用无衬线字体
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
间距（gutter）：2rem（32px）
边距（margin）：2rem（32px）
```

### 留白密度与信息密度
- **低信息密度**：强调视觉效果
- **充足留白**：保持视觉呼吸感
- **层次感**：通过透明度和模糊建立层次

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
- 悬停：背景色加深，透明度变化
- 激活：背景色进一步加深
- 禁用：灰色显示，不可点击
- 加载：显示加载指示器

#### 圆角
```
圆角：1rem（16px）
```

#### 颜色
```
主按钮：渐变背景 + 白色文字
次按钮：半透明背景 + 白色文字
文字按钮：透明背景 + 白色文字
```

#### 玻璃效果
```
背景：rgba(255, 255, 255, 0.1)
模糊：backdrop-filter: blur(10px)
边框：1px solid rgba(255, 255, 255, 0.2)
```

### Card（卡片）

#### 使用场景
- 信息展示
- 数据展示
- 内容分组

#### 阴影
```
默认：0 8px 32px rgba(0, 0, 0, 0.1)
悬停：0 12px 48px rgba(0, 0, 0, 0.15)
```

#### 间距
```
内边距：2rem
外边距：0
```

#### 特征
- 半透明背景
- 模糊效果
- 圆角设计（16px）
- 柔和阴影

#### 玻璃效果
```
背景：rgba(255, 255, 255, 0.1)
模糊：backdrop-filter: blur(20px)
边框：1px solid rgba(255, 255, 255, 0.2)
```

### Input / Upload / Form 类组件

#### Input（输入框）
```
背景：rgba(255, 255, 255, 0.1)
文字：#ffffff
边框：1px solid rgba(255, 255, 255, 0.2)
圆角：0.75rem（12px）
内边距：0.75rem 1rem
```

#### 玻璃效果
```
背景：rgba(255, 255, 255, 0.1)
模糊：backdrop-filter: blur(10px)
边框：1px solid rgba(255, 255, 255, 0.2)
```

#### 状态
- 默认：半透明背景，半透明边框
- 悬停：背景色加深
- 焦点：边框色加深，模糊效果增强
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
- 悬停：背景色变化，透明度变化
- 激活：背景色加深
- 点击：轻微缩小（scale(0.98)）

#### 玻璃效果
```
背景：rgba(255, 255, 255, 0.1)
模糊：backdrop-filter: blur(20px)
边框：1px solid rgba(255, 255, 255, 0.2)
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
- **类型**：outline（线框风格）
- **线条粗细**：1.5px
- **圆角感**：轻微圆角（2px）
- **颜色**：白色或浅色

### 插画风格
- **是否统一**：统一风格插画
- **设计原则**：柔和、现代、梦幻

### 设计原则
- 柔和的色彩和光影
- 半透明效果
- 模糊背景
- 保持一致的视觉风格
- 避免过度装饰

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover / Active / Focus 行为

#### Hover（悬停）
```
持续时间：300ms
缓动函数：cubic-bezier(0.4, 0, 0.2, 1)
效果：背景色变化、透明度变化、模糊效果增强
```

#### Active（激活）
```
持续时间：150ms
缓动函数：cubic-bezier(0.4, 0, 0.2, 1)
效果：轻微缩小（scale(0.98)）
```

#### Focus（聚焦）
```
持续时间：300ms
缓动函数：cubic-bezier(0.4, 0, 0.2, 1)
效果：边框色变化、模糊效果增强
```

### 动效节奏
- **柔和**：动画流畅、优雅
- **明显度**：中等（可见但不突兀）
- **性能优先**：使用 CSS 动画

### 操作反馈设计原则
- 视觉反馈：颜色变化、透明度变化
- 触觉反馈：轻微震动（移动端）
- 即时反馈：300ms 内完成

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
    --color-primary: #667eea;
    --color-primary-light: #764ba2;
    --color-primary-dark: #4c51bf;

    --color-secondary-1: #f093fb;
    --color-secondary-2: #f5576c;
    --color-secondary-3: #4facfe;
    --color-secondary-4: #00f2fe;
    --color-secondary-5: #43e97b;

    --color-text-primary: #ffffff;
    --color-text-secondary: #a0a0a0;
    --color-text-disabled: #666666;

    --color-bg-primary: #1a1a2e;
    --color-bg-secondary: #16213e;
    --color-bg-card: rgba(255, 255, 255, 0.1);
    --color-bg-hover: rgba(255, 255, 255, 0.15);

    --color-border-primary: rgba(255, 255, 255, 0.2);
    --color-border-secondary: rgba(255, 255, 255, 0.1);

    --color-success: #43e97b;
    --color-warning: #f5576c;
    --color-error: #f5576c;
    --color-info: #4facfe;
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
    --radius-xl: 1.5rem;
    --radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
    --shadow-none: none;
    --shadow-sm: 0 4px 16px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 8px 32px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 12px 48px rgba(0, 0, 0, 0.15);
    --shadow-xl: 0 20px 64px rgba(0, 0, 0, 0.2);
}
```

### Glass Tokens
```css
:root {
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-bg-hover: rgba(255, 255, 255, 0.15);
    --glass-border: rgba(255, 255, 255, 0.2);
    --glass-blur: blur(10px);
    --glass-blur-lg: blur(20px);
}
```

### Typography Tokens
```css
:root {
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

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
- 半透明背景设计
- 模糊效果（backdrop-filter）
- 柔和的光影效果
- 渐变色彩使用
- 大圆角设计
- 柔和的阴影
- 现代感设计
- 深度感营造

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
- 创意网站
- 品牌展示页面
- 艺术类应用
- 社交媒体应用
- 音乐播放器
- 视频播放器
- 摄影应用

---

## 核心设计特点

1. **半透明背景**：使用 rgba 颜色和透明度
2. **模糊效果**：使用 backdrop-filter 实现模糊背景
3. **柔和光影**：使用柔和的阴影和渐变
4. **大圆角**：使用大圆角增强现代感
5. **渐变色彩**：使用渐变色彩增强视觉效果
6. **深度感**：通过透明度和模糊建立层次
7. **现代感**：整体设计风格现代、梦幻、优雅
