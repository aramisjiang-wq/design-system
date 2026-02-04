# 全息设计系统（Holographic Design System）

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **全息感（Holographic）**：模拟全息投影的视觉质感
- **科技感（Futuristic）**：展现未来科技氛围
- **透明度（Transparency）**：多层透明叠加效果
- **光感（Luminous）**：发光、折射、彩虹光泽
- **流动感（Fluid）**：动态变化、渐变过渡

### 适用产品类型
- **科技产品**：AR/VR应用、元宇宙平台、数字孪生系统
- **娱乐应用**：游戏界面、音乐播放器、视频平台
- **创意工具**：设计软件、3D建模工具、创意平台
- **品牌展示**：高端品牌官网、产品展示页、营销活动页面

### 设计哲学
全息设计系统通过模拟全息投影的视觉效果，创造出具有未来感和科技感的界面。核心在于利用透明度、渐变、发光效果和动态变化，营造出层次丰富、光影变幻的视觉体验。这种风格强调视觉冲击力和沉浸感，适合需要展现创新和前沿技术的产品。

---

## 2. 颜色系统（Color System）

### 主色调
```css
:root {
  /* 主色 - 全息青 */
  --hl-color-primary: #00D9FF;
  --hl-color-primary-light: #66E5FF;
  --hl-color-primary-dark: #00A8CC;
  --hl-color-primary-glow: rgba(0, 217, 255, 0.6);

  /* 辅助主色 - 全息紫 */
  --hl-color-secondary: #B866FF;
  --hl-color-secondary-light: #D499FF;
  --hl-color-secondary-dark: #8B4DCC;
  --hl-color-secondary-glow: rgba(184, 102, 255, 0.6);

  /* 强调主色 - 全息粉 */
  --hl-color-accent: #FF66B8;
  --hl-color-accent-light: #FF99D4;
  --hl-color-accent-dark: #CC4D99;
  --hl-color-accent-glow: rgba(255, 102, 184, 0.6);
}
```

**使用场景**：
- 主色：用于主要操作按钮、导航高亮、品牌标识
- 辅助色：用于次要操作、标签、装饰元素
- 强调色：用于重要提示、特殊状态、营销元素

### 中性色
```css
:root {
  /* 背景色 */
  --hl-bg-primary: #0A0E27;
  --hl-bg-secondary: #121836;
  --hl-bg-tertiary: #1A2248;
  --hl-bg-card: rgba(18, 24, 54, 0.8);

  /* 文字色 */
  --hl-text-primary: #FFFFFF;
  --hl-text-secondary: #B8C5E8;
  --hl-text-tertiary: #7A8BB8;
  --hl-text-disabled: #4A5A88;

  /* 边框色 */
  --hl-border-primary: rgba(0, 217, 255, 0.3);
  --hl-border-secondary: rgba(184, 102, 255, 0.3);
  --hl-border-tertiary: rgba(255, 102, 184, 0.3);
}
```

**使用场景**：
- 背景色：深色背景营造全息投影的暗场效果
- 文字色：高对比度文字确保可读性
- 边框色：半透明边框增强全息质感

### 语义色
```css
:root {
  /* 成功 */
  --hl-color-success: #00FF9D;
  --hl-color-success-glow: rgba(0, 255, 157, 0.5);

  /* 警告 */
  --hl-color-warning: #FFD700;
  --hl-color-warning-glow: rgba(255, 215, 0, 0.5);

  /* 错误 */
  --hl-color-error: #FF4D4D;
  --hl-color-error-glow: rgba(255, 77, 77, 0.5);

  /* 信息 */
  --hl-color-info: #4D9FFF;
  --hl-color-info-glow: rgba(77, 159, 255, 0.5);
}
```

**使用场景**：
- 成功：操作成功、完成状态
- 警告：需要注意的状态、提示信息
- 错误：操作失败、错误提示
- 信息：一般提示、引导信息

### 全息渐变色
```css
:root {
  /* 全息渐变1 - 青紫 */
  --hl-gradient-1: linear-gradient(135deg, #00D9FF 0%, #B866FF 100%);

  /* 全息渐变2 - 粉紫 */
  --hl-gradient-2: linear-gradient(135deg, #FF66B8 0%, #B866FF 100%);

  /* 全息渐变3 - 彩虹 */
  --hl-gradient-3: linear-gradient(135deg, #00D9FF 0%, #B866FF 33%, #FF66B8 66%, #FFD700 100%);

  /* 全息渐变4 - 发光 */
  --hl-gradient-4: radial-gradient(circle, rgba(0, 217, 255, 0.3) 0%, transparent 70%);
}
```

**使用场景**：
- 渐变1：主要按钮、卡片背景
- 渐变2：次要按钮、装饰元素
- 渐变3：特殊效果、营销元素
- 渐变4：发光效果、背景装饰

### Design Token 命名建议
- `--hl-color-{type}-{variant}`：颜色命名
- `--hl-bg-{level}`：背景色命名
- `--hl-text-{level}`：文字色命名
- `--hl-border-{type}`：边框色命名
- `--hl-gradient-{number}`：渐变色命名
- `--hl-{color}-glow`：发光效果命名

---

## 3. 字体与排版（Typography）

### 字体家族
```css
:root {
  /* 主字体 */
  --hl-font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  /* 数字字体 */
  --hl-font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;

  /* 装饰字体 */
  --hl-font-display: 'Orbitron', 'Rajdhani', sans-serif;
}
```

**字体选择理由**：
- Inter：现代无衬线字体，优秀的屏幕可读性
- JetBrains Mono：等宽字体，适合数字和代码显示
- Orbitron：科技感字体，适合标题和装饰文字

### 字号层级
```css
:root {
  /* 标题 */
  --hl-font-size-h1: 3rem;
  --hl-font-size-h2: 2.25rem;
  --hl-font-size-h3: 1.75rem;
  --hl-font-size-h4: 1.25rem;
  --hl-font-size-h5: 1rem;
  --hl-font-size-h6: 0.875rem;

  /* 正文 */
  --hl-font-size-body: 1rem;
  --hl-font-size-body-sm: 0.875rem;
  --hl-font-size-body-xs: 0.75rem;

  /* 标签 */
  --hl-font-size-caption: 0.75rem;
  --hl-font-size-overline: 0.625rem;
}
```

### 行高与字重
```css
:root {
  /* 行高 */
  --hl-line-height-tight: 1.2;
  --hl-line-height-normal: 1.5;
  --hl-line-height-relaxed: 1.75;

  /* 字重 */
  --hl-font-weight-light: 300;
  --hl-font-weight-regular: 400;
  --hl-font-weight-medium: 500;
  --hl-font-weight-semibold: 600;
  --hl-font-weight-bold: 700;
}
```

### 排版规则
```css
/* 标题排版 */
h1 {
  font-family: var(--hl-font-display);
  font-size: var(--hl-font-size-h1);
  font-weight: var(--hl-font-weight-bold);
  line-height: var(--hl-line-height-tight);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

h2 {
  font-family: var(--hl-font-display);
  font-size: var(--hl-font-size-h2);
  font-weight: var(--hl-font-weight-semibold);
  line-height: var(--hl-line-height-tight);
  letter-spacing: 0.01em;
  text-transform: uppercase;
}

/* 正文排版 */
p {
  font-family: var(--hl-font-primary);
  font-size: var(--hl-font-size-body);
  font-weight: var(--hl-font-weight-regular);
  line-height: var(--hl-line-height-normal);
  letter-spacing: 0;
}

/* 数字排版 */
.mono {
  font-family: var(--hl-font-mono);
  font-size: var(--hl-font-size-body);
  font-weight: var(--hl-font-weight-regular);
  line-height: var(--hl-line-height-normal);
  letter-spacing: 0;
}
```

### 响应式字体
```css
/* 移动端（< 640px） */
@media (max-width: 639px) {
  :root {
    --hl-font-size-h1: 2rem;
    --hl-font-size-h2: 1.5rem;
    --hl-font-size-h3: 1.25rem;
    --hl-font-size-body: 0.875rem;
  }
}

/* 平板端（640px - 1024px） */
@media (min-width: 640px) and (max-width: 1023px) {
  :root {
    --hl-font-size-h1: 2.5rem;
    --hl-font-size-h2: 1.875rem;
    --hl-font-size-h3: 1.5rem;
    --hl-font-size-body: 0.9375rem;
  }
}

/* 桌面端（≥ 1024px） */
@media (min-width: 1024px) {
  :root {
    --hl-font-size-h1: 3rem;
    --hl-font-size-h2: 2.25rem;
    --hl-font-size-h3: 1.75rem;
    --hl-font-size-body: 1rem;
  }
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 版心宽度
```css
:root {
  --hl-container-sm: 640px;
  --hl-container-md: 768px;
  --hl-container-lg: 1024px;
  --hl-container-xl: 1280px;
  --hl-container-2xl: 1536px;
}
```

### 栅格系统
```css
:root {
  /* 栅格列数 */
  --hl-grid-columns: 12;

  /* 间距 */
  --hl-grid-gap-xs: 0.5rem;
  --hl-grid-gap-sm: 1rem;
  --hl-grid-gap-md: 1.5rem;
  --hl-grid-gap-lg: 2rem;
  --hl-grid-gap-xl: 3rem;

  /* 边距 */
  --hl-grid-margin-sm: 1rem;
  --hl-grid-margin-md: 2rem;
  --hl-grid-margin-lg: 3rem;
}
```

### 断点系统
```css
:root {
  /* 断点 */
  --hl-breakpoint-xs: 0;
  --hl-breakpoint-sm: 640px;
  --hl-breakpoint-md: 768px;
  --hl-breakpoint-lg: 1024px;
  --hl-breakpoint-xl: 1280px;
  --hl-breakpoint-2xl: 1536px;
}
```

### 留白密度
**信息密度**：中等
- 卡片内边距：1.5rem
- 模块间距：2rem
- 章节间距：3rem
- 页面边距：2rem

**留白原则**：
- 适度留白，避免过度拥挤
- 通过透明度和发光效果创造层次感
- 保持足够的呼吸空间

### 布局模式
```css
/* 容器 */
.container {
  width: 100%;
  max-width: var(--hl-container-xl);
  margin: 0 auto;
  padding: 0 var(--hl-grid-margin-md);
}

/* 栅格 */
.grid {
  display: grid;
  grid-template-columns: repeat(var(--hl-grid-columns), 1fr);
  gap: var(--hl-grid-gap-md);
}

/* 弹性布局 */
.flex {
  display: flex;
  gap: var(--hl-grid-gap-md);
}

/* 响应式栅格 */
@media (max-width: 767px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

#### 组件变体
```css
/* 主按钮 */
.btn-primary {
  background: var(--hl-gradient-1);
  color: var(--hl-text-primary);
  border: 1px solid transparent;
  box-shadow: 0 0 20px var(--hl-color-primary-glow);
  backdrop-filter: blur(10px);
}

/* 次按钮 */
.btn-secondary {
  background: rgba(18, 24, 54, 0.6);
  color: var(--hl-text-primary);
  border: 1px solid var(--hl-border-primary);
  box-shadow: 0 0 10px var(--hl-color-primary-glow);
  backdrop-filter: blur(10px);
}

/* 文字按钮 */
.btn-text {
  background: transparent;
  color: var(--hl-color-primary);
  border: none;
  box-shadow: none;
}

/* 发光按钮 */
.btn-glow {
  background: var(--hl-gradient-3);
  color: var(--hl-text-primary);
  border: 1px solid transparent;
  box-shadow: 0 0 30px var(--hl-color-primary-glow), 0 0 60px var(--hl-color-secondary-glow);
  backdrop-filter: blur(10px);
}
```

#### 组件尺寸
```css
/* 小号 */
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: var(--hl-font-size-body-sm);
  border-radius: 0.375rem;
}

/* 中号 */
.btn-md {
  padding: 0.75rem 1.5rem;
  font-size: var(--hl-font-size-body);
  border-radius: 0.5rem;
}

/* 大号 */
.btn-lg {
  padding: 1rem 2rem;
  font-size: var(--hl-font-size-body);
  border-radius: 0.625rem;
}
```

#### 组件状态
```css
/* 悬停状态 */
.btn-primary:hover {
  box-shadow: 0 0 30px var(--hl-color-primary-glow), 0 0 60px var(--hl-color-secondary-glow);
  transform: translateY(-2px);
}

/* 激活状态 */
.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 0 10px var(--hl-color-primary-glow);
}

/* 禁用状态 */
.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}

/* 焦点状态 */
.btn-primary:focus {
  outline: 2px solid var(--hl-color-primary);
  outline-offset: 2px;
}
```

### Card（卡片）

#### 组件样式
```css
.card {
  background: var(--hl-bg-card);
  border: 1px solid var(--hl-border-primary);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 217, 255, 0.1);
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 40px rgba(0, 217, 255, 0.2);
  border-color: var(--hl-color-primary);
  transform: translateY(-4px);
}

.card-glow {
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(184, 102, 255, 0.1) 100%);
  border: 1px solid var(--hl-border-primary);
  box-shadow: 0 0 30px var(--hl-color-primary-glow);
}
```

#### 使用场景
- 信息展示：产品卡片、用户卡片
- 内容分组：模块化内容展示
- 数据展示：数据统计、图表容器

### Input（输入框）

#### 组件样式
```css
.input {
  background: rgba(18, 24, 54, 0.6);
  border: 1px solid var(--hl-border-primary);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: var(--hl-text-primary);
  font-size: var(--hl-font-size-body);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.input::placeholder {
  color: var(--hl-text-tertiary);
}

.input:hover {
  border-color: var(--hl-color-primary);
  box-shadow: 0 0 10px var(--hl-color-primary-glow);
}

.input:focus {
  outline: none;
  border-color: var(--hl-color-primary);
  box-shadow: 0 0 20px var(--hl-color-primary-glow);
}

.input-error {
  border-color: var(--hl-color-error);
  box-shadow: 0 0 10px var(--hl-color-error-glow);
}
```

#### 组件尺寸
```css
.input-sm {
  padding: 0.5rem 0.75rem;
  font-size: var(--hl-font-size-body-sm);
}

.input-md {
  padding: 0.75rem 1rem;
  font-size: var(--hl-font-size-body);
}

.input-lg {
  padding: 1rem 1.25rem;
  font-size: var(--hl-font-size-body);
}
```

### Navigation（导航）

#### 组件样式
```css
.nav {
  background: rgba(10, 14, 39, 0.8);
  border-bottom: 1px solid var(--hl-border-primary);
  backdrop-filter: blur(20px);
}

.nav-link {
  color: var(--hl-text-secondary);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--hl-color-primary);
  background: rgba(0, 217, 255, 0.1);
}

.nav-link.active {
  color: var(--hl-color-primary);
  background: rgba(0, 217, 255, 0.15);
  box-shadow: 0 0 15px var(--hl-color-primary-glow);
}
```

### Modal（模态框）

#### 组件样式
```css
.modal-overlay {
  background: rgba(10, 14, 39, 0.8);
  backdrop-filter: blur(10px);
}

.modal {
  background: var(--hl-bg-card);
  border: 1px solid var(--hl-border-primary);
  border-radius: 1rem;
  box-shadow: 0 0 40px rgba(0, 217, 255, 0.2);
  backdrop-filter: blur(20px);
}

.modal-header {
  border-bottom: 1px solid var(--hl-border-primary);
  padding: 1.5rem;
}

.modal-body {
  padding: 1.5rem;
}

.modal-footer {
  border-top: 1px solid var(--hl-border-primary);
  padding: 1.5rem;
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
```css
/* 图标基础样式 */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  stroke-width: 2;
  stroke: currentColor;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* 图标发光效果 */
.icon-glow {
  filter: drop-shadow(0 0 8px var(--hl-color-primary-glow));
}

/* 图标渐变 */
.icon-gradient {
  stroke: url(#icon-gradient);
}
```

**图标风格特点**：
- 线条风格：细线条，科技感
- 圆角处理：适度圆角，柔和感
- 发光效果：外发光，增强全息感
- 渐变填充：可选渐变，丰富视觉

### 插画风格
**插画特点**：
- 抽象几何：几何形状组合
- 透明叠加：多层透明叠加
- 发光效果：边缘发光
- 动态感：流动的线条和形状
- 色彩：全息渐变色

**设计原则**：
- 简约抽象：避免复杂细节
- 光影效果：强调发光和折射
- 层次感：通过透明度创造层次
- 动态感：流动的视觉效果

### 使用场景
- 图标：导航图标、操作图标、状态图标
- 插画：空状态、引导页、营销页面
- 装饰：背景装饰、分隔线、角标

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 行为
```css
/* 按钮悬停 */
.btn-primary:hover {
  box-shadow: 0 0 30px var(--hl-color-primary-glow), 0 0 60px var(--hl-color-secondary-glow);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

/* 卡片悬停 */
.card:hover {
  box-shadow: 0 8px 40px rgba(0, 217, 255, 0.2);
  border-color: var(--hl-color-primary);
  transform: translateY(-4px);
  transition: all 0.3s ease;
}

/* 链接悬停 */
.link:hover {
  color: var(--hl-color-primary);
  text-shadow: 0 0 10px var(--hl-color-primary-glow);
  transition: all 0.3s ease;
}
```

### Active 行为
```css
/* 按钮点击 */
.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 0 10px var(--hl-color-primary-glow);
  transition: all 0.1s ease;
}

/* 卡片点击 */
.card:active {
  transform: translateY(-2px);
  transition: all 0.1s ease;
}
```

### Focus 行为
```css
/* 焦点状态 */
.btn-primary:focus,
.input:focus {
  outline: 2px solid var(--hl-color-primary);
  outline-offset: 2px;
  box-shadow: 0 0 20px var(--hl-color-primary-glow);
  transition: all 0.3s ease;
}
```

### 动效节奏
```css
/* 标准过渡 */
.transition-standard {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 快速过渡 */
.transition-fast {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 缓慢过渡 */
.transition-slow {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 弹性过渡 */
.transition-bounce {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

**动效原则**：
- 克制明显：动效明显但不夸张
- 流畅自然：使用缓动函数
- 功能导向：动效服务于功能
- 性能优先：使用CSS动画

### 操作反馈设计
```css
/* 成功反馈 */
.feedback-success {
  animation: success-pulse 0.5s ease;
}

@keyframes success-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 255, 157, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(0, 255, 157, 0);
  }
}

/* 错误反馈 */
.feedback-error {
  animation: error-shake 0.5s ease;
}

@keyframes error-shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}

/* 加载反馈 */
.feedback-loading {
  animation: loading-spin 1s linear infinite;
}

@keyframes loading-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
  /* Primary Colors */
  --hl-color-primary: #00D9FF;
  --hl-color-primary-light: #66E5FF;
  --hl-color-primary-dark: #00A8CC;
  --hl-color-primary-glow: rgba(0, 217, 255, 0.6);

  /* Secondary Colors */
  --hl-color-secondary: #B866FF;
  --hl-color-secondary-light: #D499FF;
  --hl-color-secondary-dark: #8B4DCC;
  --hl-color-secondary-glow: rgba(184, 102, 255, 0.6);

  /* Accent Colors */
  --hl-color-accent: #FF66B8;
  --hl-color-accent-light: #FF99D4;
  --hl-color-accent-dark: #CC4D99;
  --hl-color-accent-glow: rgba(255, 102, 184, 0.6);

  /* Semantic Colors */
  --hl-color-success: #00FF9D;
  --hl-color-success-glow: rgba(0, 255, 157, 0.5);
  --hl-color-warning: #FFD700;
  --hl-color-warning-glow: rgba(255, 215, 0, 0.5);
  --hl-color-error: #FF4D4D;
  --hl-color-error-glow: rgba(255, 77, 77, 0.5);
  --hl-color-info: #4D9FFF;
  --hl-color-info-glow: rgba(77, 159, 255, 0.5);

  /* Background Colors */
  --hl-bg-primary: #0A0E27;
  --hl-bg-secondary: #121836;
  --hl-bg-tertiary: #1A2248;
  --hl-bg-card: rgba(18, 24, 54, 0.8);

  /* Text Colors */
  --hl-text-primary: #FFFFFF;
  --hl-text-secondary: #B8C5E8;
  --hl-text-tertiary: #7A8BB8;
  --hl-text-disabled: #4A5A88;

  /* Border Colors */
  --hl-border-primary: rgba(0, 217, 255, 0.3);
  --hl-border-secondary: rgba(184, 102, 255, 0.3);
  --hl-border-tertiary: rgba(255, 102, 184, 0.3);

  /* Gradient Colors */
  --hl-gradient-1: linear-gradient(135deg, #00D9FF 0%, #B866FF 100%);
  --hl-gradient-2: linear-gradient(135deg, #FF66B8 0%, #B866FF 100%);
  --hl-gradient-3: linear-gradient(135deg, #00D9FF 0%, #B866FF 33%, #FF66B8 66%, #FFD700 100%);
  --hl-gradient-4: radial-gradient(circle, rgba(0, 217, 255, 0.3) 0%, transparent 70%);
}
```

### Spacing Tokens
```css
:root {
  /* Spacing Scale */
  --hl-space-0: 0;
  --hl-space-1: 0.25rem;
  --hl-space-2: 0.5rem;
  --hl-space-3: 0.75rem;
  --hl-space-4: 1rem;
  --hl-space-5: 1.25rem;
  --hl-space-6: 1.5rem;
  --hl-space-8: 2rem;
  --hl-space-10: 2.5rem;
  --hl-space-12: 3rem;
  --hl-space-16: 4rem;
  --hl-space-20: 5rem;
  --hl-space-24: 6rem;
}
```

### Radius Tokens
```css
:root {
  /* Border Radius */
  --hl-radius-none: 0;
  --hl-radius-sm: 0.25rem;
  --hl-radius-md: 0.375rem;
  --hl-radius-lg: 0.5rem;
  --hl-radius-xl: 0.75rem;
  --hl-radius-2xl: 1rem;
  --hl-radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
  /* Shadows */
  --hl-shadow-sm: 0 1px 2px rgba(0, 217, 255, 0.05);
  --hl-shadow-md: 0 4px 6px rgba(0, 217, 255, 0.1);
  --hl-shadow-lg: 0 10px 15px rgba(0, 217, 255, 0.15);
  --hl-shadow-xl: 0 20px 25px rgba(0, 217, 255, 0.2);
  --hl-shadow-glow: 0 0 20px var(--hl-color-primary-glow);
  --hl-shadow-glow-lg: 0 0 40px var(--hl-color-primary-glow);
}
```

### Typography Tokens
```css
:root {
  /* Font Families */
  --hl-font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --hl-font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  --hl-font-display: 'Orbitron', 'Rajdhani', sans-serif;

  /* Font Sizes */
  --hl-font-size-xs: 0.75rem;
  --hl-font-size-sm: 0.875rem;
  --hl-font-size-base: 1rem;
  --hl-font-size-lg: 1.125rem;
  --hl-font-size-xl: 1.25rem;
  --hl-font-size-2xl: 1.5rem;
  --hl-font-size-3xl: 1.875rem;
  --hl-font-size-4xl: 2.25rem;
  --hl-font-size-5xl: 3rem;

  /* Font Weights */
  --hl-font-weight-light: 300;
  --hl-font-weight-normal: 400;
  --hl-font-weight-medium: 500;
  --hl-font-weight-semibold: 600;
  --hl-font-weight-bold: 700;

  /* Line Heights */
  --hl-line-height-tight: 1.2;
  --hl-line-height-normal: 1.5;
  --hl-line-height-relaxed: 1.75;
}
```

### Transition Tokens
```css
:root {
  /* Transitions */
  --hl-transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --hl-transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --hl-transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  --hl-transition-bounce: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Z-Index Tokens
```css
:root {
  /* Z-Index Scale */
  --hl-z-dropdown: 1000;
  --hl-z-sticky: 1020;
  --hl-z-fixed: 1030;
  --hl-z-modal-backdrop: 1040;
  --hl-z-modal: 1050;
  --hl-z-popover: 1060;
  --hl-z-tooltip: 1070;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则/风格）

#### 1. 设计原则
- **透明度叠加**：学习多层透明叠加的视觉效果
- **发光效果**：掌握外发光和内发光的实现方法
- **渐变运用**：理解全息渐变色的搭配原则
- **深色背景**：学习深色背景下的色彩搭配

#### 2. 技术实现
- **CSS变量**：使用CSS变量管理设计令牌
- **backdrop-filter**：使用背景模糊效果
- **box-shadow**：使用阴影创造层次感
- **gradient**：使用渐变创造全息效果

#### 3. 交互设计
- **悬停效果**：学习发光和位移的组合效果
- **焦点状态**：掌握焦点环和发光的结合
- **过渡动画**：理解缓动函数的使用

#### 4. 布局系统
- **栅格系统**：学习响应式栅格布局
- **间距系统**：掌握统一的间距规范
- **容器系统**：理解版心宽度的设置

### 不应复刻的元素（品牌/插画/内容）

#### 1. 品牌元素
- **品牌标识**：不要复制品牌Logo、名称
- **品牌色彩**：不要直接使用品牌专属色
- **品牌字体**：不要直接使用品牌定制字体

#### 2. 插画内容
- **具体插画**：不要复制具体的插画作品
- **插画风格**：可以学习风格，但不要完全复制
- **插画元素**：不要直接使用插画中的元素

#### 3. 内容素材
- **文字内容**：不要复制具体的文字内容
- **图片素材**：不要使用相同的图片素材
- **图标设计**：不要直接复制图标设计

#### 4. 功能实现
- **具体功能**：不要复制具体的功能实现
- **交互逻辑**：可以学习交互模式，但不要完全复制
- **动画效果**：可以学习动画原理，但不要完全复制

### 合法使用建议

#### 1. 学习设计原理
- 研究全息设计的设计原理
- 理解透明度、发光、渐变的运用
- 学习色彩搭配和层次营造

#### 2. 创造原创设计
- 基于学习的设计原理创造原创设计
- 使用不同的色彩搭配和渐变方案
- 创造独特的视觉效果

#### 3. 遵守版权法律
- 尊重原创设计的版权
- 不要直接复制具体的设计元素
- 在学习的基础上进行创新

#### 4. 适当引用
- 如果需要引用，请注明来源
- 遵守相关的版权法律
- 获得必要的授权

### 设计系统复刻指南

#### 可以复刻的方面
- **设计系统结构**：可以学习设计系统的组织结构
- **组件规范**：可以参考组件的命名和组织方式
- **设计令牌**：可以学习设计令牌的管理方法
- **响应式设计**：可以学习响应式设计的实现方法

#### 需要原创的方面
- **视觉风格**：需要创造独特的视觉风格
- **色彩方案**：需要设计自己的色彩方案
- **组件样式**：需要设计自己的组件样式
- **交互效果**：需要设计自己的交互效果

### 总结
全息设计系统的核心在于创造具有未来感和科技感的视觉效果。通过学习透明度叠加、发光效果、渐变运用等技术，可以创造出独特的全息风格。但需要注意的是，应该在学习的基础上进行创新，而不是直接复制具体的设计元素。只有在尊重原创版权的前提下，才能创造出既美观又合法的设计作品。
