# 元宇宙风格设计系统（Metaverse Style Design System）

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **沉浸感（Immersive）**：创造身临其境的视觉体验
- **虚拟化（Virtual）**：模拟虚拟世界的视觉效果
- **3D感（3D Spatial）**：强调三维空间感
- **交互性（Interactive）**：丰富的交互体验
- **未来感（Futuristic）**：展现未来科技氛围

### 适用产品类型
- **元宇宙平台**：虚拟社交、虚拟活动、虚拟展览
- **游戏应用**：游戏界面、游戏社区、游戏商城
- **VR/AR应用**：虚拟现实、增强现实、混合现实
- **数字藏品**：NFT平台、数字艺术、虚拟资产

### 设计哲学
元宇宙风格设计系统通过模拟虚拟世界的视觉效果，创造出具有沉浸感和未来感的界面。核心在于利用3D效果、空间感、动态交互和虚拟化元素，营造出超越现实的视觉体验。这种风格强调沉浸式体验和丰富的交互，适合需要展现虚拟世界和未来科技的产品。

---

## 2. 颜色系统（Color System）

### 主色调
```css
:root {
  /* 主色 - 元宇宙紫 */
  --mv-color-primary: #8B5CF6;
  --mv-color-primary-light: #A78BFA;
  --mv-color-primary-dark: #7C3AED;
  --mv-color-primary-glow: rgba(139, 92, 246, 0.6);

  /* 辅助主色 - 赛博蓝 */
  --mv-color-secondary: #06B6D4;
  --mv-color-secondary-light: #22D3EE;
  --mv-color-secondary-dark: #0891B2;
  --mv-color-secondary-glow: rgba(6, 182, 212, 0.6);

  /* 强调主色 - 霓虹粉 */
  --mv-color-accent: #F472B6;
  --mv-color-accent-light: #F9A8D4;
  --mv-color-accent-dark: #DB2777;
  --mv-color-accent-glow: rgba(244, 114, 182, 0.6);
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
  --mv-bg-primary: #0F0F1A;
  --mv-bg-secondary: #1A1A2E;
  --mv-bg-tertiary: #252542;
  --mv-bg-card: rgba(26, 26, 46, 0.9);

  /* 文字色 */
  --mv-text-primary: #FFFFFF;
  --mv-text-secondary: #C4C4E0;
  --mv-text-tertiary: #8A8AA8;
  --mv-text-disabled: #5A5A78;

  /* 边框色 */
  --mv-border-primary: rgba(139, 92, 246, 0.3);
  --mv-border-secondary: rgba(6, 182, 212, 0.3);
  --mv-border-tertiary: rgba(244, 114, 182, 0.3);
}
```

**使用场景**：
- 背景色：深色背景营造虚拟世界的暗场效果
- 文字色：高对比度文字确保可读性
- 边框色：半透明边框增强虚拟质感

### 语义色
```css
:root {
  /* 成功 */
  --mv-color-success: #10B981;
  --mv-color-success-glow: rgba(16, 185, 129, 0.5);

  /* 警告 */
  --mv-color-warning: #F59E0B;
  --mv-color-warning-glow: rgba(245, 158, 11, 0.5);

  /* 错误 */
  --mv-color-error: #EF4444;
  --mv-color-error-glow: rgba(239, 68, 68, 0.5);

  /* 信息 */
  --mv-color-info: #3B82F6;
  --mv-color-info-glow: rgba(59, 130, 246, 0.5);
}
```

**使用场景**：
- 成功：操作成功、完成状态
- 警告：需要注意的状态、提示信息
- 错误：操作失败、错误提示
- 信息：一般提示、引导信息

### 元宇宙渐变色
```css
:root {
  /* 元宇宙渐变1 - 紫蓝 */
  --mv-gradient-1: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%);

  /* 元宇宙渐变2 - 粉紫 */
  --mv-gradient-2: linear-gradient(135deg, #F472B6 0%, #8B5CF6 100%);

  /* 元宇宙渐变3 - 彩虹 */
  --mv-gradient-3: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 33%, #F472B6 66%, #F59E0B 100%);

  /* 元宇宙渐变4 - 空间 */
  --mv-gradient-4: radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
}
```

**使用场景**：
- 渐变1：主要按钮、卡片背景
- 渐变2：次要按钮、装饰元素
- 渐变3：特殊效果、营销元素
- 渐变4：空间效果、背景装饰

### Design Token 命名建议
- `--mv-color-{type}-{variant}`：颜色命名
- `--mv-bg-{level}`：背景色命名
- `--mv-text-{level}`：文字色命名
- `--mv-border-{type}`：边框色命名
- `--mv-gradient-{number}`：渐变色命名
- `--mv-{color}-glow`：发光效果命名

---

## 3. 字体与排版（Typography）

### 字体家族
```css
:root {
  /* 主字体 */
  --mv-font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  /* 数字字体 */
  --mv-font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;

  /* 装饰字体 */
  --mv-font-display: 'Rajdhani', 'Orbitron', sans-serif;
}
```

**字体选择理由**：
- Inter：现代无衬线字体，优秀的屏幕可读性
- JetBrains Mono：等宽字体，适合数字和代码显示
- Rajdhani：科技感字体，适合标题和装饰文字

### 字号层级
```css
:root {
  /* 标题 */
  --mv-font-size-h1: 3.5rem;
  --mv-font-size-h2: 2.75rem;
  --mv-font-size-h3: 2rem;
  --mv-font-size-h4: 1.5rem;
  --mv-font-size-h5: 1.125rem;
  --mv-font-size-h6: 0.875rem;

  /* 正文 */
  --mv-font-size-body: 1rem;
  --mv-font-size-body-sm: 0.875rem;
  --mv-font-size-body-xs: 0.75rem;

  /* 标签 */
  --mv-font-size-caption: 0.75rem;
  --mv-font-size-overline: 0.625rem;
}
```

### 行高与字重
```css
:root {
  /* 行高 */
  --mv-line-height-tight: 1.15;
  --mv-line-height-normal: 1.6;
  --mv-line-height-relaxed: 1.8;

  /* 字重 */
  --mv-font-weight-light: 300;
  --mv-font-weight-regular: 400;
  --mv-font-weight-medium: 500;
  --mv-font-weight-semibold: 600;
  --mv-font-weight-bold: 700;
}
```

### 排版规则
```css
/* 标题排版 */
h1 {
  font-family: var(--mv-font-display);
  font-size: var(--mv-font-size-h1);
  font-weight: var(--mv-font-weight-bold);
  line-height: var(--mv-line-height-tight);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-shadow: 0 0 20px var(--mv-color-primary-glow);
}

h2 {
  font-family: var(--mv-font-display);
  font-size: var(--mv-font-size-h2);
  font-weight: var(--mv-font-weight-semibold);
  line-height: var(--mv-line-height-tight);
  letter-spacing: 0.01em;
  text-transform: uppercase;
  text-shadow: 0 0 15px var(--mv-color-primary-glow);
}

/* 正文排版 */
p {
  font-family: var(--mv-font-primary);
  font-size: var(--mv-font-size-body);
  font-weight: var(--mv-font-weight-regular);
  line-height: var(--mv-line-height-normal);
  letter-spacing: 0;
}

/* 数字排版 */
.mono {
  font-family: var(--mv-font-mono);
  font-size: var(--mv-font-size-body);
  font-weight: var(--mv-font-weight-regular);
  line-height: var(--mv-line-height-normal);
  letter-spacing: 0;
}
```

### 响应式字体
```css
/* 移动端（< 640px） */
@media (max-width: 639px) {
  :root {
    --mv-font-size-h1: 2.25rem;
    --mv-font-size-h2: 1.75rem;
    --mv-font-size-h3: 1.375rem;
    --mv-font-size-body: 0.875rem;
  }
}

/* 平板端（640px - 1024px） */
@media (min-width: 640px) and (max-width: 1023px) {
  :root {
    --mv-font-size-h1: 2.875rem;
    --mv-font-size-h2: 2.25rem;
    --mv-font-size-h3: 1.625rem;
    --mv-font-size-body: 0.9375rem;
  }
}

/* 桌面端（≥ 1024px） */
@media (min-width: 1024px) {
  :root {
    --mv-font-size-h1: 3.5rem;
    --mv-font-size-h2: 2.75rem;
    --mv-font-size-h3: 2rem;
    --mv-font-size-body: 1rem;
  }
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 版心宽度
```css
:root {
  --mv-container-sm: 640px;
  --mv-container-md: 768px;
  --mv-container-lg: 1024px;
  --mv-container-xl: 1280px;
  --mv-container-2xl: 1536px;
}
```

### 栅格系统
```css
:root {
  /* 栅格列数 */
  --mv-grid-columns: 12;

  /* 间距 */
  --mv-grid-gap-xs: 0.5rem;
  --mv-grid-gap-sm: 1rem;
  --mv-grid-gap-md: 1.5rem;
  --mv-grid-gap-lg: 2rem;
  --mv-grid-gap-xl: 3rem;

  /* 边距 */
  --mv-grid-margin-sm: 1rem;
  --mv-grid-margin-md: 2rem;
  --mv-grid-margin-lg: 3rem;
}
```

### 断点系统
```css
:root {
  /* 断点 */
  --mv-breakpoint-xs: 0;
  --mv-breakpoint-sm: 640px;
  --mv-breakpoint-md: 768px;
  --mv-breakpoint-lg: 1024px;
  --mv-breakpoint-xl: 1280px;
  --mv-breakpoint-2xl: 1536px;
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
  max-width: var(--mv-container-xl);
  margin: 0 auto;
  padding: 0 var(--mv-grid-margin-md);
}

/* 栅格 */
.grid {
  display: grid;
  grid-template-columns: repeat(var(--mv-grid-columns), 1fr);
  gap: var(--mv-grid-gap-md);
}

/* 弹性布局 */
.flex {
  display: flex;
  gap: var(--mv-grid-gap-md);
}

/* 3D布局 */
.spatial {
  display: grid;
  grid-template-columns: repeat(var(--mv-grid-columns), 1fr);
  gap: var(--mv-grid-gap-md);
  perspective: 1000px;
  transform-style: preserve-3d;
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
  background: var(--mv-gradient-1);
  color: var(--mv-text-primary);
  border: 1px solid transparent;
  box-shadow: 0 0 20px var(--mv-color-primary-glow);
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: all 0.3s ease;
}

/* 次按钮 */
.btn-secondary {
  background: rgba(26, 26, 46, 0.8);
  color: var(--mv-text-primary);
  border: 1px solid var(--mv-border-primary);
  box-shadow: 0 0 10px var(--mv-color-primary-glow);
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: all 0.3s ease;
}

/* 文字按钮 */
.btn-text {
  background: transparent;
  color: var(--mv-color-primary);
  border: none;
  box-shadow: none;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
}

/* 3D按钮 */
.btn-3d {
  background: var(--mv-gradient-3);
  color: var(--mv-text-primary);
  border: 1px solid transparent;
  box-shadow: 0 0 30px var(--mv-color-primary-glow), 0 0 60px var(--mv-color-secondary-glow);
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: all 0.3s ease;
}

.btn-3d:hover {
  transform: translateY(-4px) rotateX(5deg);
  box-shadow: 0 0 40px var(--mv-color-primary-glow), 0 0 80px var(--mv-color-secondary-glow);
}
```

#### 组件尺寸
```css
/* 小号 */
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: var(--mv-font-size-body-sm);
  border-radius: 0.5rem;
}

/* 中号 */
.btn-md {
  padding: 0.75rem 1.5rem;
  font-size: var(--mv-font-size-body);
  border-radius: 0.625rem;
}

/* 大号 */
.btn-lg {
  padding: 1rem 2rem;
  font-size: var(--mv-font-size-body);
  border-radius: 0.75rem;
}
```

#### 组件状态
```css
/* 悬停状态 */
.btn-primary:hover {
  box-shadow: 0 0 30px var(--mv-color-primary-glow), 0 0 60px var(--mv-color-secondary-glow);
  transform: translateY(-2px);
}

/* 激活状态 */
.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 0 10px var(--mv-color-primary-glow);
}

/* 禁用状态 */
.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}

/* 焦点状态 */
.btn-primary:focus {
  outline: 2px solid var(--mv-color-primary);
  outline-offset: 2px;
}
```

### Card（卡片）

#### 组件样式
```css
.card {
  background: var(--mv-bg-card);
  border: 1px solid var(--mv-border-primary);
  border-radius: 1.25rem;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.1);
  backdrop-filter: blur(20px);
  transform-style: preserve-3d;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 40px rgba(139, 92, 246, 0.2);
  border-color: var(--mv-color-primary);
  transform: translateY(-4px) rotateX(2deg);
}

.card-3d {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
  border: 1px solid var(--mv-border-primary);
  box-shadow: 0 0 30px var(--mv-color-primary-glow);
  transform-style: preserve-3d;
  transition: all 0.3s ease;
}

.card-3d:hover {
  transform: translateY(-8px) rotateX(5deg) rotateY(5deg);
  box-shadow: 0 0 50px var(--mv-color-primary-glow);
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
  background: rgba(26, 26, 46, 0.8);
  border: 1px solid var(--mv-border-primary);
  border-radius: 0.625rem;
  padding: 0.75rem 1rem;
  color: var(--mv-text-primary);
  font-size: var(--mv-font-size-body);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.input::placeholder {
  color: var(--mv-text-tertiary);
}

.input:hover {
  border-color: var(--mv-color-primary);
  box-shadow: 0 0 10px var(--mv-color-primary-glow);
}

.input:focus {
  outline: none;
  border-color: var(--mv-color-primary);
  box-shadow: 0 0 20px var(--mv-color-primary-glow);
}

.input-error {
  border-color: var(--mv-color-error);
  box-shadow: 0 0 10px var(--mv-color-error-glow);
}
```

#### 组件尺寸
```css
.input-sm {
  padding: 0.5rem 0.75rem;
  font-size: var(--mv-font-size-body-sm);
}

.input-md {
  padding: 0.75rem 1rem;
  font-size: var(--mv-font-size-body);
}

.input-lg {
  padding: 1rem 1.25rem;
  font-size: var(--mv-font-size-body);
}
```

### Navigation（导航）

#### 组件样式
```css
.nav {
  background: rgba(15, 15, 26, 0.9);
  border-bottom: 1px solid var(--mv-border-primary);
  backdrop-filter: blur(20px);
}

.nav-link {
  color: var(--mv-text-secondary);
  padding: 0.75rem 1rem;
  border-radius: 0.625rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--mv-color-primary);
  background: rgba(139, 92, 246, 0.1);
}

.nav-link.active {
  color: var(--mv-color-primary);
  background: rgba(139, 92, 246, 0.15);
  box-shadow: 0 0 15px var(--mv-color-primary-glow);
}
```

### Modal（模态框）

#### 组件样式
```css
.modal-overlay {
  background: rgba(15, 15, 26, 0.9);
  backdrop-filter: blur(10px);
}

.modal {
  background: var(--mv-bg-card);
  border: 1px solid var(--mv-border-primary);
  border-radius: 1.25rem;
  box-shadow: 0 0 40px rgba(139, 92, 246, 0.2);
  backdrop-filter: blur(20px);
  transform-style: preserve-3d;
}

.modal-header {
  border-bottom: 1px solid var(--mv-border-primary);
  padding: 1.5rem;
}

.modal-body {
  padding: 1.5rem;
}

.modal-footer {
  border-top: 1px solid var(--mv-border-primary);
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
  filter: drop-shadow(0 0 8px var(--mv-color-primary-glow));
}

/* 图标3D效果 */
.icon-3d {
  transform: translateZ(10px);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

/* 图标渐变 */
.icon-gradient {
  stroke: url(#icon-gradient);
}
```

**图标风格特点**：
- 线条风格：细线条，科技感
- 圆角处理：适度圆角，柔和感
- 发光效果：外发光，增强虚拟感
- 3D效果：空间层次感
- 渐变填充：可选渐变，丰富视觉

### 插画风格
**插画特点**：
- 3D空间：三维空间效果
- 虚拟元素：虚拟化、数字化元素
- 发光效果：边缘发光
- 动态感：流动的线条和形状
- 色彩：元宇宙渐变色

**设计原则**：
- 空间感：创造三维空间感
- 虚拟化：模拟虚拟世界
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
  box-shadow: 0 0 30px var(--mv-color-primary-glow), 0 0 60px var(--mv-color-secondary-glow);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

/* 卡片悬停 */
.card:hover {
  box-shadow: 0 8px 40px rgba(139, 92, 246, 0.2);
  border-color: var(--mv-color-primary);
  transform: translateY(-4px) rotateX(2deg);
  transition: all 0.3s ease;
}

/* 链接悬停 */
.link:hover {
  color: var(--mv-color-primary);
  text-shadow: 0 0 10px var(--mv-color-primary-glow);
  transition: all 0.3s ease;
}
```

### Active 行为
```css
/* 按钮点击 */
.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 0 10px var(--mv-color-primary-glow);
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
  outline: 2px solid var(--mv-color-primary);
  outline-offset: 2px;
  box-shadow: 0 0 20px var(--mv-color-primary-glow);
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

/* 3D过渡 */
.transition-3d {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}
```

**动效原则**：
- 沉浸感：动效增强沉浸感
- 流畅自然：使用缓动函数
- 功能导向：动效服务于功能
- 性能优先：使用CSS动画
- 3D效果：增强空间感

### 操作反馈设计
```css
/* 成功反馈 */
.feedback-success {
  animation: success-pulse 0.5s ease;
}

@keyframes success-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
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

/* 3D进入动画 */
.enter-3d {
  animation: enter-3d 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes enter-3d {
  from {
    opacity: 0;
    transform: translateY(20px) rotateX(10deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}
```

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
  /* Primary Colors */
  --mv-color-primary: #8B5CF6;
  --mv-color-primary-light: #A78BFA;
  --mv-color-primary-dark: #7C3AED;
  --mv-color-primary-glow: rgba(139, 92, 246, 0.6);

  /* Secondary Colors */
  --mv-color-secondary: #06B6D4;
  --mv-color-secondary-light: #22D3EE;
  --mv-color-secondary-dark: #0891B2;
  --mv-color-secondary-glow: rgba(6, 182, 212, 0.6);

  /* Accent Colors */
  --mv-color-accent: #F472B6;
  --mv-color-accent-light: #F9A8D4;
  --mv-color-accent-dark: #DB2777;
  --mv-color-accent-glow: rgba(244, 114, 182, 0.6);

  /* Semantic Colors */
  --mv-color-success: #10B981;
  --mv-color-success-glow: rgba(16, 185, 129, 0.5);
  --mv-color-warning: #F59E0B;
  --mv-color-warning-glow: rgba(245, 158, 11, 0.5);
  --mv-color-error: #EF4444;
  --mv-color-error-glow: rgba(239, 68, 68, 0.5);
  --mv-color-info: #3B82F6;
  --mv-color-info-glow: rgba(59, 130, 246, 0.5);

  /* Background Colors */
  --mv-bg-primary: #0F0F1A;
  --mv-bg-secondary: #1A1A2E;
  --mv-bg-tertiary: #252542;
  --mv-bg-card: rgba(26, 26, 46, 0.9);

  /* Text Colors */
  --mv-text-primary: #FFFFFF;
  --mv-text-secondary: #C4C4E0;
  --mv-text-tertiary: #8A8AA8;
  --mv-text-disabled: #5A5A78;

  /* Border Colors */
  --mv-border-primary: rgba(139, 92, 246, 0.3);
  --mv-border-secondary: rgba(6, 182, 212, 0.3);
  --mv-border-tertiary: rgba(244, 114, 182, 0.3);

  /* Gradient Colors */
  --mv-gradient-1: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%);
  --mv-gradient-2: linear-gradient(135deg, #F472B6 0%, #8B5CF6 100%);
  --mv-gradient-3: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 33%, #F472B6 66%, #F59E0B 100%);
  --mv-gradient-4: radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
}
```

### Spacing Tokens
```css
:root {
  /* Spacing Scale */
  --mv-space-0: 0;
  --mv-space-1: 0.25rem;
  --mv-space-2: 0.5rem;
  --mv-space-3: 0.75rem;
  --mv-space-4: 1rem;
  --mv-space-5: 1.25rem;
  --mv-space-6: 1.5rem;
  --mv-space-8: 2rem;
  --mv-space-10: 2.5rem;
  --mv-space-12: 3rem;
  --mv-space-16: 4rem;
  --mv-space-20: 5rem;
  --mv-space-24: 6rem;
}
```

### Radius Tokens
```css
:root {
  /* Border Radius */
  --mv-radius-none: 0;
  --mv-radius-sm: 0.25rem;
  --mv-radius-md: 0.375rem;
  --mv-radius-lg: 0.5rem;
  --mv-radius-xl: 0.75rem;
  --mv-radius-2xl: 1rem;
  --mv-radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
  /* Shadows */
  --mv-shadow-sm: 0 1px 2px rgba(139, 92, 246, 0.05);
  --mv-shadow-md: 0 4px 6px rgba(139, 92, 246, 0.1);
  --mv-shadow-lg: 0 10px 15px rgba(139, 92, 246, 0.15);
  --mv-shadow-xl: 0 20px 25px rgba(139, 92, 246, 0.2);
  --mv-shadow-glow: 0 0 20px var(--mv-color-primary-glow);
  --mv-shadow-glow-lg: 0 0 40px var(--mv-color-primary-glow);
}
```

### Typography Tokens
```css
:root {
  /* Font Families */
  --mv-font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --mv-font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  --mv-font-display: 'Rajdhani', 'Orbitron', sans-serif;

  /* Font Sizes */
  --mv-font-size-xs: 0.75rem;
  --mv-font-size-sm: 0.875rem;
  --mv-font-size-base: 1rem;
  --mv-font-size-lg: 1.125rem;
  --mv-font-size-xl: 1.25rem;
  --mv-font-size-2xl: 1.5rem;
  --mv-font-size-3xl: 1.875rem;
  --mv-font-size-4xl: 2.25rem;
  --mv-font-size-5xl: 3rem;
  --mv-font-size-6xl: 3.5rem;

  /* Font Weights */
  --mv-font-weight-light: 300;
  --mv-font-weight-normal: 400;
  --mv-font-weight-medium: 500;
  --mv-font-weight-semibold: 600;
  --mv-font-weight-bold: 700;

  /* Line Heights */
  --mv-line-height-tight: 1.15;
  --mv-line-height-normal: 1.6;
  --mv-line-height-relaxed: 1.8;
}
```

### Transition Tokens
```css
:root {
  /* Transitions */
  --mv-transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --mv-transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --mv-transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  --mv-transition-bounce: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --mv-transition-3d: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Z-Index Tokens
```css
:root {
  /* Z-Index Scale */
  --mv-z-dropdown: 1000;
  --mv-z-sticky: 1020;
  --mv-z-fixed: 1030;
  --mv-z-modal-backdrop: 1040;
  --mv-z-modal: 1050;
  --mv-z-popover: 1060;
  --mv-z-tooltip: 1070;
}
```

### 3D Tokens
```css
:root {
  /* 3D Transforms */
  --mv-perspective: 1000px;
  --mv-rotate-x: 0deg;
  --mv-rotate-y: 0deg;
  --mv-rotate-z: 0deg;
  --mv-translate-z: 0px;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则/风格）

#### 1. 设计原则
- **3D空间感**：学习三维空间效果的实现方法
- **虚拟化元素**：掌握虚拟化、数字化元素的设计
- **发光效果**：理解外发光和内发光的实现方法
- **渐变运用**：学习元宇宙渐变色的搭配原则

#### 2. 技术实现
- **CSS变量**：使用CSS变量管理设计令牌
- **backdrop-filter**：使用背景模糊效果
- **box-shadow**：使用阴影创造层次感
- **transform-style**：使用3D变换创造空间感
- **perspective**：使用透视效果增强3D感

#### 3. 交互设计
- **悬停效果**：学习发光和3D变换的组合效果
- **焦点状态**：掌握焦点环和发光的结合
- **过渡动画**：理解缓动函数的使用
- **3D动画**：学习3D动画的实现方法

#### 4. 布局系统
- **栅格系统**：学习响应式栅格布局
- **间距系统**：掌握统一的间距规范
- **容器系统**：理解版心宽度的设置
- **3D布局**：学习3D空间布局的实现

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
- 研究元宇宙设计的设计原理
- 理解3D空间、虚拟化、发光的运用
- 学习色彩搭配和空间营造

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
- **3D效果**：可以学习3D效果的实现方法

#### 需要原创的方面
- **视觉风格**：需要创造独特的视觉风格
- **色彩方案**：需要设计自己的色彩方案
- **组件样式**：需要设计自己的组件样式
- **交互效果**：需要设计自己的交互效果
- **3D效果**：需要设计自己的3D效果

### 总结
元宇宙风格设计系统的核心在于创造具有沉浸感和未来感的视觉效果。通过学习3D空间效果、虚拟化元素、发光效果、渐变运用等技术，可以创造出独特的元宇宙风格。但需要注意的是，应该在学习的基础上进行创新，而不是直接复制具体的设计元素。只有在尊重原创版权的前提下，才能创造出既美观又合法的设计作品。
