# 液体设计系统

## 1. 设计风格总览（Design DNA）

### 核心关键词
**流动性** - 使用有机形状和曲线，模拟液体的流动特性
**有机性** - 强调自然、有机的形态，避免僵硬的几何形状
**动态性** - 元素具有动态效果，仿佛在流动和变化
**柔和感** - 使用柔和的色彩和过渡，营造温和的视觉体验

### 适用产品类型
- **创意类应用** - 适合艺术创作、设计工具等需要创意表达的产品
- **娱乐类应用** - 适合游戏、音乐、视频等娱乐类产品
- **生活方式应用** - 适合健康、美食、旅行等生活方式类应用
- **教育类应用** - 适合儿童教育、语言学习等需要趣味性的产品
- **品牌展示网站** - 适合需要展示品牌个性和创意的网站

### 设计哲学
液体设计的核心是通过流动的形态和动态效果，创造出有机、自然的视觉体验。设计元素应该像液体一样流动、变化，给用户带来柔和、舒适的感受。这种设计风格强调自然、有机的美学，避免僵硬的几何形状和直线。

---

## 2. 颜色系统（Color System）

### 主色调
液体设计使用柔和、流动的色彩，模拟液体的透明感和光泽感。

```css
:root {
  /* 主色 - 海洋蓝 */
  --ld-color-primary: #4A90E2;
  --ld-color-primary-light: #7BB8F0;
  --ld-color-primary-dark: #2E6DB4;
  
  /* 主色渐变 - 模拟液体流动 */
  --ld-gradient-primary: linear-gradient(135deg, #7BB8F0 0%, #4A90E2 50%, #2E6DB4 100%);
  --ld-gradient-primary-flow: radial-gradient(ellipse at top left, #7BB8F0 0%, #4A90E2 50%, #2E6DB4 100%);
  
  /* 次色 - 珊瑚粉 */
  --ld-color-secondary: #FF6B9D;
  --ld-color-secondary-light: #FFA0C4;
  --ld-color-secondary-dark: #E85A8A;
  
  /* 次色渐变 - 模拟液体流动 */
  --ld-gradient-secondary: linear-gradient(135deg, #FFA0C4 0%, #FF6B9D 50%, #E85A8A 100%);
  --ld-gradient-secondary-flow: radial-gradient(ellipse at top right, #FFA0C4 0%, #FF6B9D 50%, #E85A8A 100%);
  
  /* 辅助色 - 薄荷绿 */
  --ld-color-accent: #50E3C2;
  --ld-color-accent-light: #7FF0D6;
  --ld-color-accent-dark: #3DD1B0;
  
  /* 辅助色渐变 - 模拟液体流动 */
  --ld-gradient-accent: linear-gradient(135deg, #7FF0D6 0%, #50E3C2 50%, #3DD1B0 100%);
  --ld-gradient-accent-flow: radial-gradient(ellipse at bottom left, #7FF0D6 0%, #50E3C2 50%, #3DD1B0 100%);
}
```

### 语义色
```css
:root {
  /* 成功 - 翠绿色 */
  --ld-color-success: #34C759;
  --ld-gradient-success: linear-gradient(135deg, #5DD67A 0%, #34C759 50%, #248A3D 100%);
  --ld-gradient-success-flow: radial-gradient(ellipse at center, #5DD67A 0%, #34C759 50%, #248A3D 100%);
  
  /* 警告 - 橙黄色 */
  --ld-color-warning: #FF9500;
  --ld-gradient-warning: linear-gradient(135deg, #FFB340 0%, #FF9500 50%, #CC7700 100%);
  --ld-gradient-warning-flow: radial-gradient(ellipse at center, #FFB340 0%, #FF9500 50%, #CC7700 100%);
  
  /* 错误 - 玫瑰红 */
  --ld-color-error: #FF3B30;
  --ld-gradient-error: linear-gradient(135deg, #FF6B62 0%, #FF3B30 50%, #CC2F26 100%);
  --ld-gradient-error-flow: radial-gradient(ellipse at center, #FF6B62 0%, #FF3B30 50%, #CC2F26 100%);
  
  /* 信息 - 天蓝色 */
  --ld-color-info: #007AFF;
  --ld-gradient-info: linear-gradient(135deg, #5AC8FA 0%, #007AFF 50%, #0056B3 100%);
  --ld-gradient-info-flow: radial-gradient(ellipse at center, #5AC8FA 0%, #007AFF 50%, #0056B3 100%);
}
```

### 中性色 - 柔和中性色
```css
:root {
  /* 白色 - 云白色 */
  --ld-color-white: #FFFFFF;
  --ld-gradient-white: linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%);
  
  /* 浅灰 - 雾灰色 */
  --ld-color-gray-100: #F5F5F5;
  --ld-gradient-gray-100: linear-gradient(135deg, #FAFAFA 0%, #F0F0F0 100%);
  
  --ld-color-gray-200: #E5E5E5;
  --ld-gradient-gray-200: linear-gradient(135deg, #EEEEEE 0%, #DDDDDD 100%);
  
  --ld-color-gray-300: #D4D4D4;
  --ld-gradient-gray-300: linear-gradient(135deg, #E0E0E0 0%, #C8C8C8 100%);
  
  /* 中灰 - 水灰色 */
  --ld-color-gray-400: #A3A3A3;
  --ld-gradient-gray-400: linear-gradient(135deg, #B8B8B8 0%, #8E8E8E 100%);
  
  --ld-color-gray-500: #737373;
  --ld-gradient-gray-500: linear-gradient(135deg, #8A8A8A 0%, #5C5C5C 100%);
  
  /* 深灰 - 墨灰色 */
  --ld-color-gray-600: #525252;
  --ld-gradient-gray-600: linear-gradient(135deg, #6B6B6B 0%, #393939 100%);
  
  --ld-color-gray-700: #404040;
  --ld-gradient-gray-700: linear-gradient(135deg, #525252 0%, #2E2E2E 100%);
  
  --ld-color-gray-800: #262626;
  --ld-gradient-gray-800: linear-gradient(135deg, #404040 0%, #0D0D0D 100%);
  
  /* 黑色 - 深黑色 */
  --ld-color-black: #171717;
  --ld-gradient-black: linear-gradient(135deg, #404040 0%, #000000 100%);
}
```

### 液体效果色
```css
:root {
  /* 透明液体 */
  --ld-color-liquid-clear: rgba(255, 255, 255, 0.3);
  --ld-gradient-liquid-clear: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 100%);
  
  /* 蓝色液体 */
  --ld-color-liquid-blue: rgba(74, 144, 226, 0.3);
  --ld-gradient-liquid-blue: linear-gradient(135deg, rgba(123, 184, 240, 0.4) 0%, rgba(74, 144, 226, 0.3) 50%, rgba(46, 109, 180, 0.2) 100%);
  
  /* 粉色液体 */
  --ld-color-liquid-pink: rgba(255, 107, 157, 0.3);
  --ld-gradient-liquid-pink: linear-gradient(135deg, rgba(255, 160, 196, 0.4) 0%, rgba(255, 107, 157, 0.3) 50%, rgba(232, 90, 138, 0.2) 100%);
  
  /* 绿色液体 */
  --ld-color-liquid-green: rgba(80, 227, 194, 0.3);
  --ld-gradient-liquid-green: linear-gradient(135deg, rgba(127, 240, 214, 0.4) 0%, rgba(80, 227, 194, 0.3) 50%, rgba(61, 209, 176, 0.2) 100%);
}
```

### 使用场景说明
- **主色**：用于主要操作按钮、导航栏、重要信息强调
- **次色**：用于次要操作、辅助信息、装饰元素
- **辅助色**：用于特殊强调、品牌元素、高亮显示
- **语义色**：用于状态指示、反馈信息（成功/警告/错误/信息）
- **中性色**：用于背景、文字、边框、分隔线
- **液体效果色**：用于模拟液体效果、背景装饰、透明效果

### Design Token 命名建议
```css
/* 颜色 Token */
--ld-color-{category}-{shade}
--ld-gradient-{category}-{direction}
--ld-gradient-{category}-flow

/* 示例 */
--ld-color-primary-light
--ld-gradient-primary-diagonal
--ld-gradient-primary-flow
```

---

## 3. 字体与排版（Typography）

### 字体家族
液体设计使用圆润、柔和的字体，增强流动感和有机感。

```css
:root {
  /* 主字体 - 圆润无衬线字体 */
  --ld-font-family-primary: "Nunito", "Quicksand", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  
  /* 次字体 - 现代无衬线字体 */
  --ld-font-family-secondary: "Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  
  /* 数字字体 - 等宽字体 */
  --ld-font-family-mono: "JetBrains Mono", "Fira Code", "Courier New", monospace;
}
```

### 字号层级
```css
:root {
  /* 标题层级 */
  --ld-font-size-h1: 2.5rem;      /* 40px */
  --ld-font-size-h2: 2rem;        /* 32px */
  --ld-font-size-h3: 1.5rem;      /* 24px */
  --ld-font-size-h4: 1.25rem;     /* 20px */
  --ld-font-size-h5: 1.125rem;   /* 18px */
  --ld-font-size-h6: 1rem;        /* 16px */
  
  /* 正文层级 */
  --ld-font-size-body-large: 1.125rem;  /* 18px */
  --ld-font-size-body: 1rem;            /* 16px */
  --ld-font-size-body-small: 0.875rem;  /* 14px */
  
  /* 辅助文字 */
  --ld-font-size-caption: 0.75rem;     /* 12px */
  --ld-font-size-tiny: 0.625rem;       /* 10px */
}
```

### 字重
```css
:root {
  --ld-font-weight-light: 300;
  --ld-font-weight-regular: 400;
  --ld-font-weight-medium: 500;
  --ld-font-weight-semibold: 600;
  --ld-font-weight-bold: 700;
}
```

### 行高
```css
:root {
  --ld-line-height-tight: 1.2;
  --ld-line-height-normal: 1.5;
  --ld-line-height-relaxed: 1.75;
  --ld-line-height-loose: 2;
}
```

### 字间距
```css
:root {
  --ld-letter-spacing-tight: -0.02em;
  --ld-letter-spacing-normal: 0;
  --ld-letter-spacing-wide: 0.05em;
  --ld-letter-spacing-wider: 0.1em;
}
```

### 文字效果 - 增强流动感
```css
:root {
  /* 柔和阴影 */
  --ld-text-shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  /* 发光效果 */
  --ld-text-shadow-glow: 0 0 20px rgba(74, 144, 226, 0.5);
  
  /* 液体效果 */
  --ld-text-shadow-liquid: 0 4px 12px rgba(74, 144, 226, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### 排版节奏规则
1. **标题使用圆润字体**：H1-H6 使用 Nunito 或 Quicksand，增强柔和感
2. **正文使用现代字体**：提高可读性，适合屏幕阅读
3. **数字使用等宽字体**：确保数字对齐，适合数据显示
4. **行高宽松**：正文使用 1.5-1.75 的行高，提供舒适的阅读体验
5. **字间距适中**：避免过紧或过松，保持自然的阅读节奏
6. **文字效果增强流动感**：标题使用柔和阴影，增强视觉层次

### 响应式字体
```css
/* 移动端（< 640px） */
@media (max-width: 639px) {
  :root {
    --ld-font-size-h1: 1.75rem;      /* 28px */
    --ld-font-size-h2: 1.5rem;      /* 24px */
    --ld-font-size-h3: 1.25rem;     /* 20px */
    --ld-font-size-body: 0.9375rem;  /* 15px */
  }
}

/* 平板端（640px - 1024px） */
@media (min-width: 640px) and (max-width: 1023px) {
  :root {
    --ld-font-size-h1: 2.125rem;    /* 34px */
    --ld-font-size-h2: 1.75rem;    /* 28px */
    --ld-font-size-h3: 1.375rem;   /* 22px */
    --ld-font-size-body: 1rem;      /* 16px */
  }
}

/* 桌面端（≥ 1024px） */
@media (min-width: 1024px) {
  :root {
    --ld-font-size-h1: 2.5rem;      /* 40px */
    --ld-font-size-h2: 2rem;        /* 32px */
    --ld-font-size-h3: 1.5rem;      /* 24px */
    --ld-font-size-body: 1rem;      /* 16px */
  }
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
:root {
  /* 版心宽度 */
  --ld-container-width-sm: 640px;
  --ld-container-width-md: 960px;
  --ld-container-width-lg: 1200px;
  --ld-container-width-xl: 1440px;
}
```

### 栅格系统
```css
:root {
  /* 栅格列数 */
  --ld-grid-columns: 12;
  
  /* 栅格间距 */
  --ld-gutter-sm: 1rem;      /* 16px */
  --ld-gutter-md: 1.5rem;    /* 24px */
  --ld-gutter-lg: 2rem;      /* 32px */
  
  /* 栅格边距 */
  --ld-margin-sm: 1rem;      /* 16px */
  --ld-margin-md: 2rem;      /* 32px */
  --ld-margin-lg: 3rem;      /* 48px */
}
```

### 留白密度
液体设计使用较宽松的留白，营造流动的空间感。

```css
:root {
  /* 组件内边距 */
  --ld-padding-xs: 0.5rem;   /* 8px */
  --ld-padding-sm: 0.75rem;  /* 12px */
  --ld-padding-md: 1rem;     /* 16px */
  --ld-padding-lg: 1.5rem;   /* 24px */
  --ld-padding-xl: 2rem;     /* 32px */
  --ld-padding-2xl: 3rem;    /* 48px */
  
  /* 元素间距 */
  --ld-space-xs: 0.5rem;     /* 8px */
  --ld-space-sm: 1rem;       /* 16px */
  --ld-space-md: 1.5rem;     /* 24px */
  --ld-space-lg: 2rem;       /* 32px */
  --ld-space-xl: 3rem;       /* 48px */
  --ld-space-2xl: 4rem;      /* 64px */
}
```

### 信息密度判断
- **低密度**：适合展示型页面、创意类应用
- **中密度**：适合工具类应用、管理后台
- **高密度**：适合数据密集型应用、专业工具

### 响应式断点
```css
:root {
  --ld-breakpoint-xs: 0;
  --ld-breakpoint-sm: 640px;
  --ld-breakpoint-md: 768px;
  --ld-breakpoint-lg: 1024px;
  --ld-breakpoint-xl: 1280px;
  --ld-breakpoint-2xl: 1536px;
}
```

### 布局模式
1. **流动布局**：适合液体设计，元素自然流动
2. **弹性布局**：适合组件内部布局
3. **网格布局**：适合复杂页面布局
4. **绝对布局**：适合特殊效果的元素

---

## 5. 核心 UI 组件规范（Component System）

### 按钮（Button）

#### 组件概述
液体按钮具有流动的形态和动态效果，模拟液体的流动特性。

#### 组件变体
##### 主按钮 - 液体蓝色
```css
.ld-button-primary {
  background: var(--ld-gradient-primary-flow);
  border: none;
  border-radius: 50px;
  padding: 0.75rem 2rem;
  font-size: var(--ld-font-size-body);
  font-weight: var(--ld-font-weight-semibold);
  color: var(--ld-color-white);
  text-shadow: var(--ld-text-shadow-soft);
  box-shadow: 
    0 4px 12px rgba(74, 144, 226, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.ld-button-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.ld-button-primary:hover::before {
  left: 100%;
}

.ld-button-primary:hover {
  box-shadow: 
    0 6px 16px rgba(74, 144, 226, 0.4),
    0 3px 6px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.ld-button-primary:active {
  box-shadow: 
    0 2px 6px rgba(74, 144, 226, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
}
```

##### 次按钮 - 液体粉色
```css
.ld-button-secondary {
  background: var(--ld-gradient-secondary-flow);
  border: none;
  border-radius: 50px;
  padding: 0.75rem 2rem;
  font-size: var(--ld-font-size-body);
  font-weight: var(--ld-font-weight-semibold);
  color: var(--ld-color-white);
  text-shadow: var(--ld-text-shadow-soft);
  box-shadow: 
    0 4px 12px rgba(255, 107, 157, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.ld-button-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.ld-button-secondary:hover::before {
  left: 100%;
}
```

##### 辅助按钮 - 液体绿色
```css
.ld-button-accent {
  background: var(--ld-gradient-accent-flow);
  border: none;
  border-radius: 50px;
  padding: 0.75rem 2rem;
  font-size: var(--ld-font-size-body);
  font-weight: var(--ld-font-weight-semibold);
  color: var(--ld-color-white);
  text-shadow: var(--ld-text-shadow-soft);
  box-shadow: 
    0 4px 12px rgba(80, 227, 194, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.ld-button-accent::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.ld-button-accent:hover::before {
  left: 100%;
}
```

##### 文字按钮 - 透明液体
```css
.ld-button-text {
  background: var(--ld-gradient-liquid-clear);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  font-size: var(--ld-font-size-body);
  font-weight: var(--ld-font-weight-medium);
  color: var(--ld-color-primary);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.ld-button-text:hover {
  background: var(--ld-gradient-liquid-blue);
  border-color: var(--ld-color-primary);
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.2);
}
```

#### 组件尺寸
```css
/* 小号按钮 */
.ld-button-small {
  padding: 0.5rem 1.5rem;
  font-size: var(--ld-font-size-body-small);
  border-radius: 40px;
}

/* 中号按钮（默认） */
.ld-button-medium {
  padding: 0.75rem 2rem;
  font-size: var(--ld-font-size-body);
  border-radius: 50px;
}

/* 大号按钮 */
.ld-button-large {
  padding: 1rem 2.5rem;
  font-size: var(--ld-font-size-body-large);
  border-radius: 60px;
}
```

#### 组件状态
- **默认状态**：正常显示，可点击
- **悬停状态**：阴影加深，位移，光泽效果
- **激活状态**：阴影减弱，位移归零
- **禁用状态**：灰色显示，不可点击，无阴影
- **加载状态**：显示液体流动的加载指示器

---

### 卡片（Card）

#### 组件概述
液体卡片具有流动的形态和动态效果，模拟液体的流动特性。

#### 组件变体
##### 基础卡片 - 云白色
```css
.ld-card-basic {
  background: var(--ld-gradient-white);
  border: none;
  border-radius: 24px;
  padding: var(--ld-padding-lg);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.08),
    0 4px 12px rgba(0, 0, 0, 0.04);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.ld-card-basic::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(74, 144, 226, 0.03) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.ld-card-basic:hover::before {
  opacity: 1;
}

.ld-card-basic:hover {
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.12),
    0 6px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}
```

##### 液体卡片 - 蓝色液体
```css
.ld-card-liquid {
  background: var(--ld-gradient-liquid-blue);
  border: none;
  border-radius: 24px;
  padding: var(--ld-padding-lg);
  box-shadow: 
    0 8px 24px rgba(74, 144, 226, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.ld-card-liquid::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.ld-card-liquid:hover::before {
  opacity: 1;
}

.ld-card-liquid:hover {
  box-shadow: 
    0 12px 32px rgba(74, 144, 226, 0.3),
    0 6px 16px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}
```

##### 渐变卡片 - 流动渐变
```css
.ld-card-gradient {
  background: var(--ld-gradient-primary-flow);
  border: none;
  border-radius: 24px;
  padding: var(--ld-padding-lg);
  box-shadow: 
    0 8px 24px rgba(74, 144, 226, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.ld-card-gradient::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.ld-card-gradient:hover::before {
  opacity: 1;
}

.ld-card-gradient:hover {
  box-shadow: 
    0 12px 32px rgba(74, 144, 226, 0.4),
    0 6px 16px rgba(0, 0, 0, 0.2);
  transform: translateY(-4px);
}
```

#### 组件使用场景
- **基础卡片**：用于内容展示、信息卡片
- **液体卡片**：用于装饰性内容、特色区域
- **渐变卡片**：用于重要信息、强调内容

---

### 输入框（Input）

#### 组件概述
液体输入框具有流动的形态和动态效果，模拟液体的流动特性。

#### 组件变体
##### 默认输入框 - 云白色
```css
.ld-input-default {
  background: var(--ld-gradient-white);
  border: 2px solid var(--ld-color-gray-200);
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-size: var(--ld-font-size-body);
  color: var(--ld-color-gray-800);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.05),
    inset 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.ld-input-default:focus {
  outline: none;
  border-color: var(--ld-color-primary);
  box-shadow: 
    0 4px 12px rgba(74, 144, 226, 0.2),
    inset 0 2px 4px rgba(0, 0, 0, 0.02),
    0 0 0 4px rgba(74, 144, 226, 0.1);
}

.ld-input-default::placeholder {
  color: var(--ld-color-gray-400);
}
```

##### 液体输入框 - 蓝色液体
```css
.ld-input-liquid {
  background: var(--ld-gradient-liquid-blue);
  border: 2px solid rgba(74, 144, 226, 0.3);
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-size: var(--ld-font-size-body);
  color: var(--ld-color-gray-800);
  box-shadow: 
    0 4px 12px rgba(74, 144, 226, 0.15),
    inset 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.ld-input-liquid:focus {
  outline: none;
  border-color: var(--ld-color-primary);
  box-shadow: 
    0 4px 12px rgba(74, 144, 226, 0.3),
    inset 0 2px 4px rgba(0, 0, 0, 0.02),
    0 0 0 4px rgba(74, 144, 226, 0.2);
}
```

##### 错误状态
```css
.ld-input-error {
  border-color: var(--ld-color-error);
  box-shadow: 
    0 4px 12px rgba(255, 59, 48, 0.15),
    inset 0 2px 4px rgba(0, 0, 0, 0.02),
    0 0 0 4px rgba(255, 59, 48, 0.1);
}

.ld-input-error:focus {
  border-color: var(--ld-color-error);
  box-shadow: 
    0 4px 12px rgba(255, 59, 48, 0.2),
    inset 0 2px 4px rgba(0, 0, 0, 0.02),
    0 0 0 4px rgba(255, 59, 48, 0.15);
}
```

##### 禁用状态
```css
.ld-input-disabled {
  background: var(--ld-gradient-gray-200);
  border-color: var(--ld-color-gray-300);
  color: var(--ld-color-gray-500);
  cursor: not-allowed;
  box-shadow: none;
}
```

#### 组件尺寸
```css
/* 小号输入框 */
.ld-input-small {
  padding: 0.5rem 1.25rem;
  font-size: var(--ld-font-size-body-small);
  border-radius: 40px;
}

/* 中号输入框（默认） */
.ld-input-medium {
  padding: 0.75rem 1.5rem;
  font-size: var(--ld-font-size-body);
  border-radius: 50px;
}

/* 大号输入框 */
.ld-input-large {
  padding: 1rem 2rem;
  font-size: var(--ld-font-size-body-large);
  border-radius: 60px;
}
```

---

### 导航（Navigation）

#### 组件概述
液体导航具有流动的形态和动态效果，模拟液体的流动特性。

#### 顶部导航 - 液体蓝色
```css
.ld-navbar {
  background: var(--ld-gradient-liquid-blue);
  border-bottom: none;
  padding: 0 var(--ld-padding-lg);
  box-shadow: 
    0 4px 16px rgba(74, 144, 226, 0.15),
    0 2px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.ld-nav-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  color: var(--ld-color-gray-800);
  text-decoration: none;
  font-weight: var(--ld-font-weight-medium);
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.ld-nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--ld-gradient-primary);
  border-radius: 50px;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.ld-nav-link:hover::before {
  opacity: 0.1;
  transform: scale(1);
}

.ld-nav-link.active {
  color: var(--ld-color-white);
  background: var(--ld-gradient-primary);
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
}

.ld-nav-link.active::before {
  opacity: 0;
}
```

#### 侧边导航 - 液体粉色
```css
.ld-sidebar {
  background: var(--ld-gradient-liquid-pink);
  border-right: none;
  padding: var(--ld-padding-md);
  box-shadow: 
    4px 0 16px rgba(255, 107, 157, 0.15),
    2px 0 8px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.ld-sidebar-link {
  display: block;
  padding: 0.75rem 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--ld-color-white);
  text-decoration: none;
  font-weight: var(--ld-font-weight-medium);
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.ld-sidebar-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.ld-sidebar-link:hover::before {
  opacity: 1;
  transform: scale(1);
}

.ld-sidebar-link.active {
  background: var(--ld-gradient-white);
  color: var(--ld-color-secondary);
  box-shadow: 0 4px 12px rgba(255, 107, 157, 0.3);
}

.ld-sidebar-link.active::before {
  opacity: 0;
}
```

#### 标签页导航 - 液体绿色
```css
.ld-tabs {
  background: var(--ld-gradient-liquid-green);
  border-bottom: none;
  padding: 0 var(--ld-padding-md);
  box-shadow: 
    0 4px 16px rgba(80, 227, 194, 0.15),
    0 2px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.ld-tab {
  display: inline-block;
  padding: 0.75rem 2rem;
  margin-right: 0.5rem;
  color: var(--ld-color-gray-800);
  text-decoration: none;
  font-weight: var(--ld-font-weight-medium);
  border-radius: 50px 50px 0 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.ld-tab::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--ld-gradient-accent);
  border-radius: 50px 50px 0 0;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.ld-tab:hover::before {
  opacity: 0.1;
  transform: scale(1);
}

.ld-tab.active {
  background: var(--ld-gradient-white);
  color: var(--ld-color-accent);
  box-shadow: 0 4px 12px rgba(80, 227, 194, 0.3);
}

.ld-tab.active::before {
  opacity: 0;
}
```

---

### 开关（Switch）

#### 组件概述
液体开关具有流动的形态和动态效果，模拟液体的流动特性。

#### 组件样式
```css
.ld-switch {
  position: relative;
  display: inline-block;
  width: 64px;
  height: 36px;
}

.ld-switch-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.ld-switch-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--ld-gradient-gray-200);
  border-radius: 36px;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.1),
    inset 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.ld-switch-slider:before {
  position: absolute;
  content: "";
  height: 28px;
  width: 28px;
  left: 4px;
  bottom: 4px;
  background: var(--ld-gradient-white);
  border-radius: 50%;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.15),
    inset 0 2px 4px rgba(255, 255, 255, 0.8);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.ld-switch-input:checked + .ld-switch-slider {
  background: var(--ld-gradient-primary);
  box-shadow: 
    0 4px 12px rgba(74, 144, 226, 0.3),
    inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.ld-switch-input:checked + .ld-switch-slider:before {
  transform: translateX(28px);
  background: var(--ld-gradient-white);
  box-shadow: 
    0 4px 12px rgba(74, 144, 226, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.8);
}
```

---

### 滑块（Slider）

#### 组件概述
液体滑块具有流动的形态和动态效果，模拟液体的流动特性。

#### 组件样式
```css
.ld-slider {
  position: relative;
  width: 100%;
  height: 36px;
}

.ld-slider-input {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: var(--ld-gradient-gray-200);
  border-radius: 8px;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.1),
    inset 0 2px 4px rgba(0, 0, 0, 0.05);
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.ld-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 28px;
  height: 28px;
  background: var(--ld-gradient-primary);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 
    0 4px 12px rgba(74, 144, 226, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.ld-slider-input::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 
    0 6px 16px rgba(74, 144, 226, 0.4),
    inset 0 2px 4px rgba(255, 255, 255, 0.4);
}

.ld-slider-input::-webkit-slider-thumb:active {
  transform: scale(1.05);
  box-shadow: 
    0 4px 12px rgba(74, 144, 226, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
液体图标使用圆润、流动的风格，具有有机感和动态感。

#### 图标特征
- **圆润风格**：使用圆润的线条和形状，增强柔和感
- **流动感**：图标具有流动的形态，模拟液体的流动
- **动态效果**：图标具有动态效果，仿佛在流动和变化
- **柔和色彩**：使用柔和的色彩，营造温和的视觉体验

#### 图标样式
```css
.ld-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  fill: var(--ld-color-gray-700);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.ld-icon:hover {
  fill: var(--ld-color-primary);
  filter: drop-shadow(0 4px 8px rgba(74, 144, 226, 0.3));
  transform: translateY(-2px);
}

.ld-icon:active {
  transform: translateY(0);
}

/* 图标尺寸 */
.ld-icon-small {
  width: 16px;
  height: 16px;
}

.ld-icon-medium {
  width: 24px;
  height: 24px;
}

.ld-icon-large {
  width: 32px;
  height: 32px;
}

.ld-icon-xlarge {
  width: 48px;
  height: 48px;
}
```

### 插画风格
液体插画使用流动、有机的风格，模拟液体的流动特性。

#### 插画特征
- **流动形态**：插画具有流动的形态，模拟液体的流动
- **有机形状**：使用有机的形状，避免僵硬的几何形状
- **柔和色彩**：使用柔和的色彩，营造温和的视觉体验
- **动态效果**：插画具有动态效果，仿佛在流动和变化

#### 插画使用原则
1. **辅助理解**：插画用于辅助理解，不作为主要内容
2. **风格统一**：所有插画保持统一的风格和质感
3. **适度使用**：避免过度使用插画，影响页面性能
4. **品牌一致**：插画风格与品牌形象保持一致

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 行为
液体设计的悬停效果模拟液体的流动，增强流动感。

#### 按钮悬停
```css
.ld-button-primary:hover {
  box-shadow: 
    0 6px 16px rgba(74, 144, 226, 0.4),
    0 3px 6px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.ld-button-primary::before {
  left: 100%;
}
```

#### 卡片悬停
```css
.ld-card-basic:hover {
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.12),
    0 6px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}

.ld-card-basic::before {
  opacity: 1;
}
```

### Active 行为
液体设计的激活效果模拟液体的流动，增强流动感。

#### 按钮激活
```css
.ld-button-primary:active {
  box-shadow: 
    0 2px 6px rgba(74, 144, 226, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
}
```

### Focus 行为
液体设计的焦点效果模拟液体的流动，增强流动感。

#### 输入框焦点
```css
.ld-input-default:focus {
  outline: none;
  border-color: var(--ld-color-primary);
  box-shadow: 
    0 4px 12px rgba(74, 144, 226, 0.2),
    inset 0 2px 4px rgba(0, 0, 0, 0.02),
    0 0 0 4px rgba(74, 144, 226, 0.1);
}
```

### 动效节奏
液体设计的动效节奏较慢，模拟液体的流动特性。

#### 标准过渡
```css
:root {
  --ld-transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --ld-transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --ld-transition-slow: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### 缓动函数
```css
:root {
  --ld-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ld-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ld-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ld-ease-liquid: cubic-bezier(0.4, 0.2, 0.2, 1);
}
```

### 操作反馈设计原则
1. **即时反馈**：所有操作都有即时反馈
2. **流动反馈**：模拟液体的流动反馈
3. **柔和反馈**：使用柔和的色彩和过渡
4. **动态反馈**：使用动态效果增强反馈

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
  /* 主色 */
  --ld-color-primary: #4A90E2;
  --ld-color-primary-light: #7BB8F0;
  --ld-color-primary-dark: #2E6DB4;
  
  /* 次色 */
  --ld-color-secondary: #FF6B9D;
  --ld-color-secondary-light: #FFA0C4;
  --ld-color-secondary-dark: #E85A8A;
  
  /* 辅助色 */
  --ld-color-accent: #50E3C2;
  --ld-color-accent-light: #7FF0D6;
  --ld-color-accent-dark: #3DD1B0;
  
  /* 语义色 */
  --ld-color-success: #34C759;
  --ld-color-warning: #FF9500;
  --ld-color-error: #FF3B30;
  --ld-color-info: #007AFF;
  
  /* 中性色 */
  --ld-color-white: #FFFFFF;
  --ld-color-gray-100: #F5F5F5;
  --ld-color-gray-200: #E5E5E5;
  --ld-color-gray-300: #D4D4D4;
  --ld-color-gray-400: #A3A3A3;
  --ld-color-gray-500: #737373;
  --ld-color-gray-600: #525252;
  --ld-color-gray-700: #404040;
  --ld-color-gray-800: #262626;
  --ld-color-black: #171717;
  
  /* 液体色 */
  --ld-color-liquid-clear: rgba(255, 255, 255, 0.3);
  --ld-color-liquid-blue: rgba(74, 144, 226, 0.3);
  --ld-color-liquid-pink: rgba(255, 107, 157, 0.3);
  --ld-color-liquid-green: rgba(80, 227, 194, 0.3);
}
```

### Gradient Tokens
```css
:root {
  /* 主色渐变 */
  --ld-gradient-primary: linear-gradient(135deg, #7BB8F0 0%, #4A90E2 50%, #2E6DB4 100%);
  --ld-gradient-primary-flow: radial-gradient(ellipse at top left, #7BB8F0 0%, #4A90E2 50%, #2E6DB4 100%);
  
  /* 次色渐变 */
  --ld-gradient-secondary: linear-gradient(135deg, #FFA0C4 0%, #FF6B9D 50%, #E85A8A 100%);
  --ld-gradient-secondary-flow: radial-gradient(ellipse at top right, #FFA0C4 0%, #FF6B9D 50%, #E85A8A 100%);
  
  /* 辅助色渐变 */
  --ld-gradient-accent: linear-gradient(135deg, #7FF0D6 0%, #50E3C2 50%, #3DD1B0 100%);
  --ld-gradient-accent-flow: radial-gradient(ellipse at bottom left, #7FF0D6 0%, #50E3C2 50%, #3DD1B0 100%);
  
  /* 语义色渐变 */
  --ld-gradient-success: linear-gradient(135deg, #5DD67A 0%, #34C759 50%, #248A3D 100%);
  --ld-gradient-success-flow: radial-gradient(ellipse at center, #5DD67A 0%, #34C759 50%, #248A3D 100%);
  --ld-gradient-warning: linear-gradient(135deg, #FFB340 0%, #FF9500 50%, #CC7700 100%);
  --ld-gradient-warning-flow: radial-gradient(ellipse at center, #FFB340 0%, #FF9500 50%, #CC7700 100%);
  --ld-gradient-error: linear-gradient(135deg, #FF6B62 0%, #FF3B30 50%, #CC2F26 100%);
  --ld-gradient-error-flow: radial-gradient(ellipse at center, #FF6B62 0%, #FF3B30 50%, #CC2F26 100%);
  --ld-gradient-info: linear-gradient(135deg, #5AC8FA 0%, #007AFF 50%, #0056B3 100%);
  --ld-gradient-info-flow: radial-gradient(ellipse at center, #5AC8FA 0%, #007AFF 50%, #0056B3 100%);
  
  /* 中性色渐变 */
  --ld-gradient-white: linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%);
  --ld-gradient-gray-100: linear-gradient(135deg, #FAFAFA 0%, #F0F0F0 100%);
  --ld-gradient-gray-200: linear-gradient(135deg, #EEEEEE 0%, #DDDDDD 100%);
  --ld-gradient-gray-300: linear-gradient(135deg, #E0E0E0 0%, #C8C8C8 100%);
  --ld-gradient-gray-400: linear-gradient(135deg, #B8B8B8 0%, #8E8E8E 100%);
  --ld-gradient-gray-500: linear-gradient(135deg, #8A8A8A 0%, #5C5C5C 100%);
  --ld-gradient-gray-600: linear-gradient(135deg, #6B6B6B 0%, #393939 100%);
  --ld-gradient-gray-700: linear-gradient(135deg, #525252 0%, #2E2E2E 100%);
  --ld-gradient-gray-800: linear-gradient(135deg, #404040 0%, #0D0D0D 100%);
  --ld-gradient-black: linear-gradient(135deg, #404040 0%, #000000 100%);
  
  /* 液体渐变 */
  --ld-gradient-liquid-clear: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 100%);
  --ld-gradient-liquid-blue: linear-gradient(135deg, rgba(123, 184, 240, 0.4) 0%, rgba(74, 144, 226, 0.3) 50%, rgba(46, 109, 180, 0.2) 100%);
  --ld-gradient-liquid-pink: linear-gradient(135deg, rgba(255, 160, 196, 0.4) 0%, rgba(255, 107, 157, 0.3) 50%, rgba(232, 90, 138, 0.2) 100%);
  --ld-gradient-liquid-green: linear-gradient(135deg, rgba(127, 240, 214, 0.4) 0%, rgba(80, 227, 194, 0.3) 50%, rgba(61, 209, 176, 0.2) 100%);
}
```

### Typography Tokens
```css
:root {
  /* 字体家族 */
  --ld-font-family-primary: "Nunito", "Quicksand", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --ld-font-family-secondary: "Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --ld-font-family-mono: "JetBrains Mono", "Fira Code", "Courier New", monospace;
  
  /* 字号 */
  --ld-font-size-h1: 2.5rem;
  --ld-font-size-h2: 2rem;
  --ld-font-size-h3: 1.5rem;
  --ld-font-size-h4: 1.25rem;
  --ld-font-size-h5: 1.125rem;
  --ld-font-size-h6: 1rem;
  --ld-font-size-body-large: 1.125rem;
  --ld-font-size-body: 1rem;
  --ld-font-size-body-small: 0.875rem;
  --ld-font-size-caption: 0.75rem;
  --ld-font-size-tiny: 0.625rem;
  
  /* 字重 */
  --ld-font-weight-light: 300;
  --ld-font-weight-regular: 400;
  --ld-font-weight-medium: 500;
  --ld-font-weight-semibold: 600;
  --ld-font-weight-bold: 700;
  
  /* 行高 */
  --ld-line-height-tight: 1.2;
  --ld-line-height-normal: 1.5;
  --ld-line-height-relaxed: 1.75;
  --ld-line-height-loose: 2;
  
  /* 字间距 */
  --ld-letter-spacing-tight: -0.02em;
  --ld-letter-spacing-normal: 0;
  --ld-letter-spacing-wide: 0.05em;
  --ld-letter-spacing-wider: 0.1em;
}
```

### Spacing Tokens
```css
:root {
  /* 组件内边距 */
  --ld-padding-xs: 0.5rem;
  --ld-padding-sm: 0.75rem;
  --ld-padding-md: 1rem;
  --ld-padding-lg: 1.5rem;
  --ld-padding-xl: 2rem;
  --ld-padding-2xl: 3rem;
  
  /* 元素间距 */
  --ld-space-xs: 0.5rem;
  --ld-space-sm: 1rem;
  --ld-space-md: 1.5rem;
  --ld-space-lg: 2rem;
  --ld-space-xl: 3rem;
  --ld-space-2xl: 4rem;
}
```

### Radius Tokens
```css
:root {
  --ld-radius-none: 0;
  --ld-radius-sm: 8px;
  --ld-radius-md: 16px;
  --ld-radius-lg: 24px;
  --ld-radius-xl: 32px;
  --ld-radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
  /* 柔和阴影 */
  --ld-shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  /* 发光效果 */
  --ld-shadow-glow: 0 0 20px rgba(74, 144, 226, 0.5);
  
  /* 液体效果 */
  --ld-shadow-liquid: 0 4px 12px rgba(74, 144, 226, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1);
  
  /* 投影效果 */
  --ld-shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --ld-shadow-md: 0 4px 8px rgba(0, 0, 0, 0.12);
  --ld-shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.15);
  --ld-shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.2);
  
  /* 内阴影效果 */
  --ld-shadow-inset-sm: inset 0 2px 4px rgba(0, 0, 0, 0.05);
  --ld-shadow-inset-md: inset 0 4px 8px rgba(0, 0, 0, 0.08);
  --ld-shadow-inset-lg: inset 0 6px 12px rgba(0, 0, 0, 0.1);
  
  /* 复合阴影效果 */
  --ld-shadow-button: 0 4px 12px rgba(74, 144, 226, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1);
  --ld-shadow-card: 0 8px 24px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04);
  --ld-shadow-input: 0 4px 12px rgba(0, 0, 0, 0.05), inset 0 2px 4px rgba(0, 0, 0, 0.02);
}
```

### Transition Tokens
```css
:root {
  /* 过渡时间 */
  --ld-transition-fast: 0.2s;
  --ld-transition-normal: 0.3s;
  --ld-transition-slow: 0.4s;
  
  /* 缓动函数 */
  --ld-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ld-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ld-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ld-ease-liquid: cubic-bezier(0.4, 0.2, 0.2, 1);
  
  /* 组合过渡 */
  --ld-transition-fast-ease: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --ld-transition-normal-ease: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --ld-transition-slow-ease: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  --ld-transition-liquid: 0.4s cubic-bezier(0.4, 0.2, 0.2, 1);
}
```

### Text Shadow Tokens
```css
:root {
  /* 柔和阴影 */
  --ld-text-shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  /* 发光效果 */
  --ld-text-shadow-glow: 0 0 20px rgba(74, 144, 226, 0.5);
  
  /* 液体效果 */
  --ld-text-shadow-liquid: 0 4px 12px rgba(74, 144, 226, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素
1. **设计规则**：可以学习液体的设计规则，如流动形态、动态效果的使用方法
2. **风格理念**：可以学习液体的风格理念，如流动性、有机性、动态性
3. **交互原则**：可以学习液体的交互原则，如悬停、激活、焦点效果
4. **色彩运用**：可以学习如何使用柔和的色彩和渐变
5. **动画效果**：可以学习如何使用流动的动画效果

### 不应复刻的元素
1. **品牌元素**：不应复刻特定品牌的液体设计元素
2. **具体插画**：不应复刻具体的插画内容和风格
3. **品牌色彩**：不应复刻特定品牌的色彩方案
4. **品牌图标**：不应复刻特定品牌的图标设计
5. **品牌动画**：不应复刻特定品牌的动画效果

### 合法复刻建议
1. **抽象规则**：从液体设计中抽象出通用的设计规则和原则
2. **创造原创**：基于液体的设计理念，创造原创的设计元素
3. **保持原创**：确保所有设计元素都是原创的，不侵犯他人版权
4. **尊重版权**：尊重他人的知识产权，不直接复制或模仿
5. **合法使用**：确保所有设计元素的使用都是合法的

### 设计系统应用建议
1. **组件复用**：可以复用液体的组件结构和交互逻辑
2. **Token 系统**：可以使用液体的 Design Token 系统作为参考
3. **样式规范**：可以参考液体的样式规范，但需要原创实现
4. **交互模式**：可以学习液体的交互模式，但需要原创实现
5. **视觉风格**：可以借鉴液体的视觉风格，但需要原创实现
