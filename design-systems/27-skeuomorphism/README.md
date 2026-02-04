# 拟物化设计系统

## 1. 设计风格总览（Design DNA）

### 核心关键词
**真实感** - 模拟现实世界物体的材质、纹理和光影效果
**深度感** - 通过渐变、阴影和纹理创造三维立体感
**触觉反馈** - 按钮和交互元素看起来可触摸、可按压
**材质感** - 使用皮革、木头、金属、玻璃等真实材质纹理

### 适用产品类型
- **教育类应用** - 适合儿童教育、模拟训练等需要直观体验的产品
- **工具类应用** - 适合模拟真实工具的应用（如计算器、记事本、时钟）
- **游戏类应用** - 适合需要沉浸式体验的游戏界面
- **复古风格产品** - 适合追求怀旧感、复古风格的品牌产品
- **特定行业应用** - 适合需要模拟真实操作的专业工具（如音频编辑器、图像处理）

### 设计哲学
拟物化设计的核心是通过模仿现实世界的物理特性，降低用户的学习成本，提供直观的交互体验。每个UI元素都应该看起来像真实的物体，具有材质、重量和触感。

---

## 2. 颜色系统（Color System）

### 主色调
拟物化设计使用丰富的渐变和纹理来模拟真实材质的颜色。

```css
:root {
  /* 主色 - 金属蓝 */
  --sk-color-primary: #4A90E2;
  --sk-color-primary-light: #7BB8F0;
  --sk-color-primary-dark: #2E6DB4;
  
  /* 主色渐变 - 模拟金属光泽 */
  --sk-gradient-primary: linear-gradient(180deg, #7BB8F0 0%, #4A90E2 50%, #2E6DB4 100%);
  --sk-gradient-primary-horizontal: linear-gradient(90deg, #2E6DB4 0%, #4A90E2 50%, #7BB8F0 100%);
  
  /* 次色 - 木质棕 */
  --sk-color-secondary: #8B6914;
  --sk-color-secondary-light: #C4A045;
  --sk-color-secondary-dark: #5C4610;
  
  /* 次色渐变 - 模拟木纹 */
  --sk-gradient-secondary: linear-gradient(180deg, #C4A045 0%, #8B6914 50%, #5C4610 100%);
  
  /* 辅助色 - 皮革褐 */
  --sk-color-accent: #D4A574;
  --sk-color-accent-light: #E8C9A8;
  --sk-color-accent-dark: #B8956A;
  
  /* 辅助色渐变 - 模拟皮革 */
  --sk-gradient-accent: linear-gradient(180deg, #E8C9A8 0%, #D4A574 50%, #B8956A 100%);
}
```

### 语义色
```css
:root {
  /* 成功 - 绿色宝石 */
  --sk-color-success: #34C759;
  --sk-gradient-success: linear-gradient(180deg, #5DD67A 0%, #34C759 50%, #248A3D 100%);
  
  /* 警告 - 琥珀色 */
  --sk-color-warning: #FF9500;
  --sk-gradient-warning: linear-gradient(180deg, #FFB340 0%, #FF9500 50%, #CC7700 100%);
  
  /* 错误 - 红色 */
  --sk-color-error: #FF3B30;
  --sk-gradient-error: linear-gradient(180deg, #FF6B62 0%, #FF3B30 50%, #CC2F26 100%);
  
  /* 信息 - 蓝色 */
  --sk-color-info: #007AFF;
  --sk-gradient-info: linear-gradient(180deg, #5AC8FA 0%, #007AFF 50%, #0056B3 100%);
}
```

### 中性色 - 模拟真实材质
```css
:root {
  /* 白色 - 瓷器 */
  --sk-color-white: #FFFFFF;
  --sk-gradient-white: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%);
  
  /* 浅灰 - 银色 */
  --sk-color-gray-100: #F5F5F5;
  --sk-gradient-gray-100: linear-gradient(180deg, #FAFAFA 0%, #F0F0F0 100%);
  
  --sk-color-gray-200: #E5E5E5;
  --sk-gradient-gray-200: linear-gradient(180deg, #EEEEEE 0%, #DDDDDD 100%);
  
  --sk-color-gray-300: #D4D4D4;
  --sk-gradient-gray-300: linear-gradient(180deg, #E0E0E0 0%, #C8C8C8 100%);
  
  /* 中灰 - 不锈钢 */
  --sk-color-gray-400: #A3A3A3;
  --sk-gradient-gray-400: linear-gradient(180deg, #B8B8B8 0%, #8E8E8E 100%);
  
  --sk-color-gray-500: #737373;
  --sk-gradient-gray-500: linear-gradient(180deg, #8A8A8A 0%, #5C5C5C 100%);
  
  /* 深灰 - 铁色 */
  --sk-color-gray-600: #525252;
  --sk-gradient-gray-600: linear-gradient(180deg, #6B6B6B 0%, #393939 100%);
  
  --sk-color-gray-700: #404040;
  --sk-gradient-gray-700: linear-gradient(180deg, #525252 0%, #2E2E2E 100%);
  
  --sk-color-gray-800: #262626;
  --sk-gradient-gray-800: linear-gradient(180deg, #404040 0%, #0D0D0D 100%);
  
  /* 黑色 - 黑曜石 */
  --sk-color-black: #171717;
  --sk-gradient-black: linear-gradient(180deg, #404040 0%, #000000 100%);
}
```

### 材质纹理色
```css
:root {
  /* 皮革纹理 */
  --sk-color-leather: #8B4513;
  --sk-gradient-leather: linear-gradient(135deg, #A0522D 0%, #8B4513 50%, #6B3510 100%);
  
  /* 木纹纹理 */
  --sk-color-wood: #DEB887;
  --sk-gradient-wood: linear-gradient(135deg, #F5DEB3 0%, #DEB887 50%, #CD853F 100%);
  
  /* 金属纹理 */
  --sk-color-metal: #C0C0C0;
  --sk-gradient-metal: linear-gradient(135deg, #E8E8E8 0%, #C0C0C0 50%, #A9A9A9 100%);
  
  /* 玻璃纹理 */
  --sk-color-glass: rgba(255, 255, 255, 0.3);
  --sk-gradient-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 100%);
}
```

### 使用场景说明
- **主色**：用于主要操作按钮、导航栏、重要信息强调
- **次色**：用于次要操作、辅助信息、装饰元素
- **辅助色**：用于特殊强调、品牌元素、高亮显示
- **语义色**：用于状态指示、反馈信息（成功/警告/错误/信息）
- **中性色**：用于背景、文字、边框、分隔线
- **材质纹理色**：用于模拟真实材质的表面效果

### Design Token 命名建议
```css
/* 颜色 Token */
--sk-color-{category}-{shade}
--sk-gradient-{category}-{direction}

/* 示例 */
--sk-color-primary-light
--sk-gradient-primary-vertical
--sk-gradient-leather-diagonal
```

---

## 3. 字体与排版（Typography）

### 字体家族
拟物化设计使用经典的衬线字体，增强真实感和复古感。

```css
:root {
  /* 主字体 - 衬线字体 */
  --sk-font-family-primary: "Georgia", "Times New Roman", Times, serif;
  
  /* 次字体 - 无衬线字体 */
  --sk-font-family-secondary: "Helvetica Neue", Helvetica, Arial, sans-serif;
  
  /* 数字字体 - 等宽字体 */
  --sk-font-family-mono: "Courier New", Courier, monospace;
}
```

### 字号层级
```css
:root {
  /* 标题层级 */
  --sk-font-size-h1: 2.5rem;      /* 40px */
  --sk-font-size-h2: 2rem;        /* 32px */
  --sk-font-size-h3: 1.5rem;      /* 24px */
  --sk-font-size-h4: 1.25rem;     /* 20px */
  --sk-font-size-h5: 1.125rem;   /* 18px */
  --sk-font-size-h6: 1rem;        /* 16px */
  
  /* 正文层级 */
  --sk-font-size-body-large: 1.125rem;  /* 18px */
  --sk-font-size-body: 1rem;            /* 16px */
  --sk-font-size-body-small: 0.875rem;  /* 14px */
  
  /* 辅助文字 */
  --sk-font-size-caption: 0.75rem;     /* 12px */
  --sk-font-size-tiny: 0.625rem;       /* 10px */
}
```

### 字重
```css
:root {
  --sk-font-weight-light: 300;
  --sk-font-weight-regular: 400;
  --sk-font-weight-medium: 500;
  --sk-font-weight-semibold: 600;
  --sk-font-weight-bold: 700;
}
```

### 行高
```css
:root {
  --sk-line-height-tight: 1.2;
  --sk-line-height-normal: 1.5;
  --sk-line-height-relaxed: 1.75;
  --sk-line-height-loose: 2;
}
```

### 字间距
```css
:root {
  --sk-letter-spacing-tight: -0.02em;
  --sk-letter-spacing-normal: 0;
  --sk-letter-spacing-wide: 0.05em;
  --sk-letter-spacing-wider: 0.1em;
}
```

### 文字阴影 - 增强立体感
```css
:root {
  /* 浮雕效果 */
  --sk-text-shadow-emboss: 1px 1px 0 rgba(255, 255, 255, 0.8), -1px -1px 0 rgba(0, 0, 0, 0.2);
  
  /* 凹陷效果 */
  --sk-text-shadow-engrave: -1px -1px 0 rgba(255, 255, 255, 0.8), 1px 1px 0 rgba(0, 0, 0, 0.2);
  
  /* 投影效果 */
  --sk-text-shadow-drop: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  /* 发光效果 */
  --sk-text-shadow-glow: 0 0 10px rgba(255, 255, 255, 0.8);
}
```

### 排版节奏规则
1. **标题使用衬线字体**：H1-H6 使用 Georgia 或 Times New Roman，增强经典感
2. **正文使用无衬线字体**：提高可读性，适合屏幕阅读
3. **数字使用等宽字体**：确保数字对齐，适合数据显示
4. **行高宽松**：正文使用 1.5-1.75 的行高，提供舒适的阅读体验
5. **字间距适中**：避免过紧或过松，保持自然的阅读节奏
6. **文字阴影增强立体感**：标题使用浮雕效果，增强视觉层次

### 响应式字体
```css
/* 移动端（< 640px） */
@media (max-width: 639px) {
  :root {
    --sk-font-size-h1: 1.75rem;      /* 28px */
    --sk-font-size-h2: 1.5rem;      /* 24px */
    --sk-font-size-h3: 1.25rem;     /* 20px */
    --sk-font-size-body: 0.9375rem;  /* 15px */
  }
}

/* 平板端（640px - 1024px） */
@media (min-width: 640px) and (max-width: 1023px) {
  :root {
    --sk-font-size-h1: 2.125rem;    /* 34px */
    --sk-font-size-h2: 1.75rem;    /* 28px */
    --sk-font-size-h3: 1.375rem;   /* 22px */
    --sk-font-size-body: 1rem;      /* 16px */
  }
}

/* 桌面端（≥ 1024px） */
@media (min-width: 1024px) {
  :root {
    --sk-font-size-h1: 2.5rem;      /* 40px */
    --sk-font-size-h2: 2rem;        /* 32px */
    --sk-font-size-h3: 1.5rem;      /* 24px */
    --sk-font-size-body: 1rem;      /* 16px */
  }
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
:root {
  /* 版心宽度 */
  --sk-container-width-sm: 640px;
  --sk-container-width-md: 960px;
  --sk-container-width-lg: 1200px;
  --sk-container-width-xl: 1440px;
}
```

### 栅格系统
```css
:root {
  /* 栅格列数 */
  --sk-grid-columns: 12;
  
  /* 栅格间距 */
  --sk-gutter-sm: 1rem;      /* 16px */
  --sk-gutter-md: 1.5rem;    /* 24px */
  --sk-gutter-lg: 2rem;      /* 32px */
  
  /* 栅格边距 */
  --sk-margin-sm: 1rem;      /* 16px */
  --sk-margin-md: 2rem;      /* 32px */
  --sk-margin-lg: 3rem;      /* 48px */
}
```

### 留白密度
拟物化设计使用较宽松的留白，营造真实物体的空间感。

```css
:root {
  /* 组件内边距 */
  --sk-padding-xs: 0.5rem;   /* 8px */
  --sk-padding-sm: 0.75rem;  /* 12px */
  --sk-padding-md: 1rem;     /* 16px */
  --sk-padding-lg: 1.5rem;   /* 24px */
  --sk-padding-xl: 2rem;     /* 32px */
  --sk-padding-2xl: 3rem;    /* 48px */
  
  /* 元素间距 */
  --sk-space-xs: 0.5rem;     /* 8px */
  --sk-space-sm: 1rem;       /* 16px */
  --sk-space-md: 1.5rem;     /* 24px */
  --sk-space-lg: 2rem;       /* 32px */
  --sk-space-xl: 3rem;       /* 48px */
  --sk-space-2xl: 4rem;      /* 64px */
}
```

### 信息密度判断
- **低密度**：适合展示型页面、教育类应用
- **中密度**：适合工具类应用、管理后台
- **高密度**：适合数据密集型应用、专业工具

### 响应式断点
```css
:root {
  --sk-breakpoint-xs: 0;
  --sk-breakpoint-sm: 640px;
  --sk-breakpoint-md: 768px;
  --sk-breakpoint-lg: 1024px;
  --sk-breakpoint-xl: 1280px;
  --sk-breakpoint-2xl: 1536px;
}
```

### 布局模式
1. **固定布局**：适合模拟真实工具的应用（如计算器）
2. **流式布局**：适合内容展示型页面
3. **弹性布局**：适合组件内部布局
4. **网格布局**：适合复杂页面布局

---

## 5. 核心 UI 组件规范（Component System）

### 按钮（Button）

#### 组件概述
拟物化按钮模拟真实物理按钮，具有立体感、材质感和按压效果。

#### 组件变体
##### 主按钮 - 金属质感
```css
.sk-button-primary {
  background: var(--sk-gradient-primary);
  border: 1px solid var(--sk-color-primary-dark);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: var(--sk-font-size-body);
  font-weight: var(--sk-font-weight-semibold);
  color: var(--sk-color-white);
  text-shadow: var(--sk-text-shadow-emboss);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
}

.sk-button-primary:hover {
  background: linear-gradient(180deg, #8BC4F7 0%, #5BA0E8 50%, #3D7DC9 100%);
  box-shadow: 
    0 6px 8px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.sk-button-primary:active {
  background: linear-gradient(180deg, #2E6DB4 0%, #4A90E2 50%, #7BB8F0 100%);
  box-shadow: 
    0 2px 3px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(0, 0, 0, 0.3);
  transform: translateY(2px);
}
```

##### 次按钮 - 木质质感
```css
.sk-button-secondary {
  background: var(--sk-gradient-secondary);
  border: 1px solid var(--sk-color-secondary-dark);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: var(--sk-font-size-body);
  font-weight: var(--sk-font-weight-semibold);
  color: var(--sk-color-white);
  text-shadow: var(--sk-text-shadow-emboss);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
}
```

##### 辅助按钮 - 皮革质感
```css
.sk-button-accent {
  background: var(--sk-gradient-accent);
  border: 1px solid var(--sk-color-accent-dark);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: var(--sk-font-size-body);
  font-weight: var(--sk-font-weight-semibold);
  color: var(--sk-color-white);
  text-shadow: var(--sk-text-shadow-emboss);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
}
```

##### 文字按钮 - 扁平化
```css
.sk-button-text {
  background: transparent;
  border: none;
  padding: 0.5rem 1rem;
  font-size: var(--sk-font-size-body);
  font-weight: var(--sk-font-weight-medium);
  color: var(--sk-color-primary);
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sk-button-text:hover {
  color: var(--sk-color-primary-dark);
  text-shadow: var(--sk-text-shadow-glow);
}
```

#### 组件尺寸
```css
/* 小号按钮 */
.sk-button-small {
  padding: 0.5rem 1rem;
  font-size: var(--sk-font-size-body-small);
  border-radius: 6px;
}

/* 中号按钮（默认） */
.sk-button-medium {
  padding: 0.75rem 1.5rem;
  font-size: var(--sk-font-size-body);
  border-radius: 8px;
}

/* 大号按钮 */
.sk-button-large {
  padding: 1rem 2rem;
  font-size: var(--sk-font-size-body-large);
  border-radius: 10px;
}
```

#### 组件状态
- **默认状态**：正常显示，可点击
- **悬停状态**：阴影加深，亮度提高
- **激活状态**：按下效果，阴影减弱，位移
- **禁用状态**：灰色显示，不可点击，无阴影
- **加载状态**：显示加载指示器

---

### 卡片（Card）

#### 组件概述
拟物化卡片模拟真实物体（如纸张、木板、金属板），具有材质感和立体感。

#### 组件变体
##### 纸张卡片
```css
.sk-card-paper {
  background: var(--sk-gradient-white);
  border: 1px solid var(--sk-color-gray-300);
  border-radius: 8px;
  padding: var(--sk-padding-lg);
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.sk-card-paper:hover {
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.15),
    0 4px 8px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transform: translateY(-2px);
}
```

##### 木纹卡片
```css
.sk-card-wood {
  background: var(--sk-gradient-wood);
  border: 2px solid var(--sk-color-secondary-dark);
  border-radius: 8px;
  padding: var(--sk-padding-lg);
  box-shadow: 
    0 6px 12px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(255, 255, 255, 0.3),
    inset 0 -2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}
```

##### 金属卡片
```css
.sk-card-metal {
  background: var(--sk-gradient-metal);
  border: 1px solid var(--sk-color-gray-600);
  border-radius: 8px;
  padding: var(--sk-padding-lg);
  box-shadow: 
    0 6px 12px rgba(0, 0, 0, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.5),
    inset 0 -2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
```

##### 皮革卡片
```css
.sk-card-leather {
  background: var(--sk-gradient-leather);
  border: 2px solid var(--sk-color-leather);
  border-radius: 8px;
  padding: var(--sk-padding-lg);
  box-shadow: 
    0 6px 12px rgba(0, 0, 0, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.2),
    inset 0 -2px 4px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}
```

#### 组件使用场景
- **纸张卡片**：用于内容展示、信息卡片
- **木纹卡片**：用于装饰性内容、特色区域
- **金属卡片**：用于重要信息、强调内容
- **皮革卡片**：用于高级内容、品牌展示

---

### 输入框（Input）

#### 组件概述
拟物化输入框模拟真实物体（如纸张、金属板），具有凹陷效果和材质感。

#### 组件变体
##### 默认输入框 - 纸张质感
```css
.sk-input-default {
  background: var(--sk-gradient-white);
  border: 1px solid var(--sk-color-gray-400);
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-size: var(--sk-font-size-body);
  color: var(--sk-color-gray-800);
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.1),
    0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
}

.sk-input-default:focus {
  outline: none;
  border-color: var(--sk-color-primary);
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.1),
    0 0 0 3px rgba(74, 144, 226, 0.2);
}

.sk-input-default::placeholder {
  color: var(--sk-color-gray-400);
}
```

##### 金属输入框
```css
.sk-input-metal {
  background: var(--sk-gradient-metal);
  border: 1px solid var(--sk-color-gray-600);
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-size: var(--sk-font-size-body);
  color: var(--sk-color-gray-800);
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.3),
    0 1px 0 rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease;
}
```

##### 错误状态
```css
.sk-input-error {
  border-color: var(--sk-color-error);
  box-shadow: 
    inset 0 2px 4px rgba(255, 59, 48, 0.1),
    0 0 0 3px rgba(255, 59, 48, 0.2);
}

.sk-input-error:focus {
  border-color: var(--sk-color-error);
  box-shadow: 
    inset 0 2px 4px rgba(255, 59, 48, 0.1),
    0 0 0 3px rgba(255, 59, 48, 0.2);
}
```

##### 禁用状态
```css
.sk-input-disabled {
  background: var(--sk-gradient-gray-200);
  border-color: var(--sk-color-gray-300);
  color: var(--sk-color-gray-500);
  cursor: not-allowed;
  box-shadow: none;
}
```

#### 组件尺寸
```css
/* 小号输入框 */
.sk-input-small {
  padding: 0.5rem 0.75rem;
  font-size: var(--sk-font-size-body-small);
  border-radius: 4px;
}

/* 中号输入框（默认） */
.sk-input-medium {
  padding: 0.75rem 1rem;
  font-size: var(--sk-font-size-body);
  border-radius: 6px;
}

/* 大号输入框 */
.sk-input-large {
  padding: 1rem 1.25rem;
  font-size: var(--sk-font-size-body-large);
  border-radius: 8px;
}
```

---

### 导航（Navigation）

#### 组件概述
拟物化导航模拟真实物体（如工具栏、标签页），具有材质感和立体感。

#### 顶部导航 - 金属质感
```css
.sk-navbar {
  background: var(--sk-gradient-metal);
  border-bottom: 2px solid var(--sk-color-gray-600);
  padding: 0 var(--sk-padding-lg);
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.sk-nav-link {
  display: inline-block;
  padding: 0.75rem 1rem;
  color: var(--sk-color-gray-800);
  text-decoration: none;
  font-weight: var(--sk-font-weight-medium);
  text-shadow: var(--sk-text-shadow-emboss);
  border-radius: 4px;
  transition: all 0.2s ease;
}

.sk-nav-link:hover {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.sk-nav-link.active {
  background: var(--sk-gradient-primary);
  color: var(--sk-color-white);
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.2),
    0 1px 0 rgba(255, 255, 255, 0.3);
}
```

#### 侧边导航 - 木质质感
```css
.sk-sidebar {
  background: var(--sk-gradient-wood);
  border-right: 2px solid var(--sk-color-secondary-dark);
  padding: var(--sk-padding-md);
  box-shadow: 
    4px 0 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.sk-sidebar-link {
  display: block;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  color: var(--sk-color-white);
  text-decoration: none;
  font-weight: var(--sk-font-weight-medium);
  text-shadow: var(--sk-text-shadow-emboss);
  border-radius: 6px;
  transition: all 0.2s ease;
}

.sk-sidebar-link:hover {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.sk-sidebar-link.active {
  background: var(--sk-gradient-primary);
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.3),
    0 1px 0 rgba(255, 255, 255, 0.3);
}
```

#### 标签页导航 - 皮革质感
```css
.sk-tabs {
  background: var(--sk-gradient-leather);
  border-bottom: 2px solid var(--sk-color-leather);
  padding: 0 var(--sk-padding-md);
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.sk-tab {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin-right: 0.5rem;
  color: var(--sk-color-white);
  text-decoration: none;
  font-weight: var(--sk-font-weight-medium);
  text-shadow: var(--sk-text-shadow-emboss);
  border-radius: 6px 6px 0 0;
  transition: all 0.2s ease;
}

.sk-tab:hover {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.sk-tab.active {
  background: var(--sk-gradient-white);
  color: var(--sk-color-gray-800);
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}
```

---

### 开关（Switch）

#### 组件概述
拟物化开关模拟真实物理开关，具有按压效果和材质感。

#### 组件样式
```css
.sk-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 32px;
}

.sk-switch-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.sk-switch-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--sk-gradient-gray-300);
  border: 2px solid var(--sk-color-gray-400);
  border-radius: 16px;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.2),
    0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.sk-switch-slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 2px;
  bottom: 2px;
  background: var(--sk-gradient-white);
  border: 2px solid var(--sk-color-gray-400);
  border-radius: 50%;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.sk-switch-input:checked + .sk-switch-slider {
  background: var(--sk-gradient-primary);
  border-color: var(--sk-color-primary-dark);
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.2),
    0 1px 0 rgba(255, 255, 255, 0.3);
}

.sk-switch-input:checked + .sk-switch-slider:before {
  transform: translateX(28px);
  background: var(--sk-gradient-white);
  border-color: var(--sk-color-primary-dark);
}
```

---

### 滑块（Slider）

#### 组件概述
拟物化滑块模拟真实物理滑块，具有材质感和拖拽效果。

#### 组件样式
```css
.sk-slider {
  position: relative;
  width: 100%;
  height: 32px;
}

.sk-slider-input {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: var(--sk-gradient-gray-300);
  border: 2px solid var(--sk-color-gray-400);
  border-radius: 4px;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.2),
    0 1px 0 rgba(255, 255, 255, 0.8);
  outline: none;
}

.sk-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  background: var(--sk-gradient-white);
  border: 2px solid var(--sk-color-primary);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
}

.sk-slider-input::-webkit-slider-thumb:hover {
  background: var(--sk-gradient-primary);
  border-color: var(--sk-color-primary-dark);
  transform: scale(1.1);
}

.sk-slider-input::-webkit-slider-thumb:active {
  background: var(--sk-gradient-primary-dark);
  border-color: var(--sk-color-primary-dark);
  transform: scale(1.05);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
拟物化图标使用填充风格，具有立体感和材质感，模拟真实物体。

#### 图标特征
- **填充风格**：使用填充色，增强立体感
- **圆角感**：图标边缘使用圆角，增强柔和感
- **光影效果**：使用渐变和阴影创造立体感
- **材质感**：模拟真实材质（金属、木头、皮革）

#### 图标样式
```css
.sk-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  fill: var(--sk-color-gray-700);
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
  transition: all 0.2s ease;
}

.sk-icon:hover {
  fill: var(--sk-color-primary);
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
  transform: translateY(-1px);
}

.sk-icon:active {
  transform: translateY(1px);
}

/* 图标尺寸 */
.sk-icon-small {
  width: 16px;
  height: 16px;
}

.sk-icon-medium {
  width: 24px;
  height: 24px;
}

.sk-icon-large {
  width: 32px;
  height: 32px;
}

.sk-icon-xlarge {
  width: 48px;
  height: 48px;
}
```

### 插画风格
拟物化插画使用写实风格，模拟真实场景和物体。

#### 插画特征
- **写实风格**：模拟真实物体的外观和质感
- **材质纹理**：使用真实的材质纹理（木头、金属、皮革）
- **光影效果**：使用真实的光影效果，增强立体感
- **细节丰富**：注重细节，增强真实感

#### 插画使用原则
1. **辅助理解**：插画用于辅助理解，不作为主要内容
2. **风格统一**：所有插画保持统一的风格和质感
3. **适度使用**：避免过度使用插画，影响页面性能
4. **品牌一致**：插画风格与品牌形象保持一致

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover 行为
拟物化设计的悬停效果模拟真实物体的反应，增强触觉反馈。

#### 按钮悬停
```css
.sk-button-primary:hover {
  background: linear-gradient(180deg, #8BC4F7 0%, #5BA0E8 50%, #3D7DC9 100%);
  box-shadow: 
    0 6px 8px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}
```

#### 卡片悬停
```css
.sk-card-paper:hover {
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.15),
    0 4px 8px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transform: translateY(-2px);
}
```

### Active 行为
拟物化的激活效果模拟真实物体的按压，增强触觉反馈。

#### 按钮激活
```css
.sk-button-primary:active {
  background: linear-gradient(180deg, #2E6DB4 0%, #4A90E2 50%, #7BB8F0 100%);
  box-shadow: 
    0 2px 3px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(0, 0, 0, 0.3);
  transform: translateY(2px);
}
```

### Focus 行为
拟物化的焦点效果模拟真实物体的选中状态，增强视觉反馈。

#### 输入框焦点
```css
.sk-input-default:focus {
  outline: none;
  border-color: var(--sk-color-primary);
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.1),
    0 0 0 3px rgba(74, 144, 226, 0.2);
}
```

### 动效节奏
拟物化设计的动效节奏较慢，模拟真实物体的物理特性。

#### 标准过渡
```css
:root {
  --sk-transition-fast: 0.15s ease;
  --sk-transition-normal: 0.2s ease;
  --sk-transition-slow: 0.3s ease;
}
```

#### 缓动函数
```css
:root {
  --sk-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --sk-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --sk-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 操作反馈设计原则
1. **即时反馈**：所有操作都有即时反馈
2. **触觉反馈**：模拟真实物体的触觉反馈
3. **视觉反馈**：使用光影效果增强视觉反馈
4. **声音反馈**：可选的声音反馈，增强真实感

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
  /* 主色 */
  --sk-color-primary: #4A90E2;
  --sk-color-primary-light: #7BB8F0;
  --sk-color-primary-dark: #2E6DB4;
  
  /* 次色 */
  --sk-color-secondary: #8B6914;
  --sk-color-secondary-light: #C4A045;
  --sk-color-secondary-dark: #5C4610;
  
  /* 辅助色 */
  --sk-color-accent: #D4A574;
  --sk-color-accent-light: #E8C9A8;
  --sk-color-accent-dark: #B8956A;
  
  /* 语义色 */
  --sk-color-success: #34C759;
  --sk-color-warning: #FF9500;
  --sk-color-error: #FF3B30;
  --sk-color-info: #007AFF;
  
  /* 中性色 */
  --sk-color-white: #FFFFFF;
  --sk-color-gray-100: #F5F5F5;
  --sk-color-gray-200: #E5E5E5;
  --sk-color-gray-300: #D4D4D4;
  --sk-color-gray-400: #A3A3A3;
  --sk-color-gray-500: #737373;
  --sk-color-gray-600: #525252;
  --sk-color-gray-700: #404040;
  --sk-color-gray-800: #262626;
  --sk-color-black: #171717;
  
  /* 材质色 */
  --sk-color-leather: #8B4513;
  --sk-color-wood: #DEB887;
  --sk-color-metal: #C0C0C0;
  --sk-color-glass: rgba(255, 255, 255, 0.3);
}
```

### Gradient Tokens
```css
:root {
  /* 主色渐变 */
  --sk-gradient-primary: linear-gradient(180deg, #7BB8F0 0%, #4A90E2 50%, #2E6DB4 100%);
  --sk-gradient-primary-horizontal: linear-gradient(90deg, #2E6DB4 0%, #4A90E2 50%, #7BB8F0 100%);
  
  /* 次色渐变 */
  --sk-gradient-secondary: linear-gradient(180deg, #C4A045 0%, #8B6914 50%, #5C4610 100%);
  
  /* 辅助色渐变 */
  --sk-gradient-accent: linear-gradient(180deg, #E8C9A8 0%, #D4A574 50%, #B8956A 100%);
  
  /* 语义色渐变 */
  --sk-gradient-success: linear-gradient(180deg, #5DD67A 0%, #34C759 50%, #248A3D 100%);
  --sk-gradient-warning: linear-gradient(180deg, #FFB340 0%, #FF9500 50%, #CC7700 100%);
  --sk-gradient-error: linear-gradient(180deg, #FF6B62 0%, #FF3B30 50%, #CC2F26 100%);
  --sk-gradient-info: linear-gradient(180deg, #5AC8FA 0%, #007AFF 50%, #0056B3 100%);
  
  /* 中性色渐变 */
  --sk-gradient-white: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%);
  --sk-gradient-gray-100: linear-gradient(180deg, #FAFAFA 0%, #F0F0F0 100%);
  --sk-gradient-gray-200: linear-gradient(180deg, #EEEEEE 0%, #DDDDDD 100%);
  --sk-gradient-gray-300: linear-gradient(180deg, #E0E0E0 0%, #C8C8C8 100%);
  --sk-gradient-gray-400: linear-gradient(180deg, #B8B8B8 0%, #8E8E8E 100%);
  --sk-gradient-gray-500: linear-gradient(180deg, #8A8A8A 0%, #5C5C5C 100%);
  --sk-gradient-gray-600: linear-gradient(180deg, #6B6B6B 0%, #393939 100%);
  --sk-gradient-gray-700: linear-gradient(180deg, #525252 0%, #2E2E2E 100%);
  --sk-gradient-gray-800: linear-gradient(180deg, #404040 0%, #0D0D0D 100%);
  --sk-gradient-black: linear-gradient(180deg, #404040 0%, #000000 100%);
  
  /* 材质渐变 */
  --sk-gradient-leather: linear-gradient(135deg, #A0522D 0%, #8B4513 50%, #6B3510 100%);
  --sk-gradient-wood: linear-gradient(135deg, #F5DEB3 0%, #DEB887 50%, #CD853F 100%);
  --sk-gradient-metal: linear-gradient(135deg, #E8E8E8 0%, #C0C0C0 50%, #A9A9A9 100%);
  --sk-gradient-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 100%);
}
```

### Typography Tokens
```css
:root {
  /* 字体家族 */
  --sk-font-family-primary: "Georgia", "Times New Roman", Times, serif;
  --sk-font-family-secondary: "Helvetica Neue", Helvetica, Arial, sans-serif;
  --sk-font-family-mono: "Courier New", Courier, monospace;
  
  /* 字号 */
  --sk-font-size-h1: 2.5rem;
  --sk-font-size-h2: 2rem;
  --sk-font-size-h3: 1.5rem;
  --sk-font-size-h4: 1.25rem;
  --sk-font-size-h5: 1.125rem;
  --sk-font-size-h6: 1rem;
  --sk-font-size-body-large: 1.125rem;
  --sk-font-size-body: 1rem;
  --sk-font-size-body-small: 0.875rem;
  --sk-font-size-caption: 0.75rem;
  --sk-font-size-tiny: 0.625rem;
  
  /* 字重 */
  --sk-font-weight-light: 300;
  --sk-font-weight-regular: 400;
  --sk-font-weight-medium: 500;
  --sk-font-weight-semibold: 600;
  --sk-font-weight-bold: 700;
  
  /* 行高 */
  --sk-line-height-tight: 1.2;
  --sk-line-height-normal: 1.5;
  --sk-line-height-relaxed: 1.75;
  --sk-line-height-loose: 2;
  
  /* 字间距 */
  --sk-letter-spacing-tight: -0.02em;
  --sk-letter-spacing-normal: 0;
  --sk-letter-spacing-wide: 0.05em;
  --sk-letter-spacing-wider: 0.1em;
}
```

### Spacing Tokens
```css
:root {
  /* 组件内边距 */
  --sk-padding-xs: 0.5rem;
  --sk-padding-sm: 0.75rem;
  --sk-padding-md: 1rem;
  --sk-padding-lg: 1.5rem;
  --sk-padding-xl: 2rem;
  --sk-padding-2xl: 3rem;
  
  /* 元素间距 */
  --sk-space-xs: 0.5rem;
  --sk-space-sm: 1rem;
  --sk-space-md: 1.5rem;
  --sk-space-lg: 2rem;
  --sk-space-xl: 3rem;
  --sk-space-2xl: 4rem;
}
```

### Radius Tokens
```css
:root {
  --sk-radius-none: 0;
  --sk-radius-sm: 4px;
  --sk-radius-md: 6px;
  --sk-radius-lg: 8px;
  --sk-radius-xl: 10px;
  --sk-radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
  /* 浮雕效果 */
  --sk-shadow-emboss-sm: 1px 1px 0 rgba(255, 255, 255, 0.8), -1px -1px 0 rgba(0, 0, 0, 0.2);
  --sk-shadow-emboss-md: 2px 2px 0 rgba(255, 255, 255, 0.8), -2px -2px 0 rgba(0, 0, 0, 0.2);
  --sk-shadow-emboss-lg: 3px 3px 0 rgba(255, 255, 255, 0.8), -3px -3px 0 rgba(0, 0, 0, 0.2);
  
  /* 凹陷效果 */
  --sk-shadow-engrave-sm: -1px -1px 0 rgba(255, 255, 255, 0.8), 1px 1px 0 rgba(0, 0, 0, 0.2);
  --sk-shadow-engrave-md: -2px -2px 0 rgba(255, 255, 255, 0.8), 2px 2px 0 rgba(0, 0, 0, 0.2);
  --sk-shadow-engrave-lg: -3px -3px 0 rgba(255, 255, 255, 0.8), 3px 3px 0 rgba(0, 0, 0, 0.2);
  
  /* 投影效果 */
  --sk-shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --sk-shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15);
  --sk-shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.2);
  --sk-shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.25);
  
  /* 内阴影效果 */
  --sk-shadow-inset-sm: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  --sk-shadow-inset-md: inset 0 4px 8px rgba(0, 0, 0, 0.15);
  --sk-shadow-inset-lg: inset 0 6px 12px rgba(0, 0, 0, 0.2);
  
  /* 复合阴影效果 */
  --sk-shadow-button: 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  --sk-shadow-card: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8);
  --sk-shadow-input: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.8);
}
```

### Transition Tokens
```css
:root {
  /* 过渡时间 */
  --sk-transition-fast: 0.15s;
  --sk-transition-normal: 0.2s;
  --sk-transition-slow: 0.3s;
  
  /* 缓动函数 */
  --sk-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --sk-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --sk-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 组合过渡 */
  --sk-transition-fast-ease: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --sk-transition-normal-ease: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --sk-transition-slow-ease: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Text Shadow Tokens
```css
:root {
  /* 浮雕效果 */
  --sk-text-shadow-emboss: 1px 1px 0 rgba(255, 255, 255, 0.8), -1px -1px 0 rgba(0, 0, 0, 0.2);
  
  /* 凹陷效果 */
  --sk-text-shadow-engrave: -1px -1px 0 rgba(255, 255, 255, 0.8), 1px 1px 0 rgba(0, 0, 0, 0.2);
  
  /* 投影效果 */
  --sk-text-shadow-drop: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  /* 发光效果 */
  --sk-text-shadow-glow: 0 0 10px rgba(255, 255, 255, 0.8);
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素
1. **设计规则**：可以学习拟物化的设计规则，如渐变、阴影、纹理的使用方法
2. **风格理念**：可以学习拟物化的风格理念，如真实感、深度感、触觉反馈
3. **交互原则**：可以学习拟物化的交互原则，如悬停、激活、焦点效果
4. **材质模拟**：可以学习如何使用渐变和阴影模拟真实材质
5. **光影效果**：可以学习如何使用光影效果创造立体感

### 不应复刻的元素
1. **品牌元素**：不应复刻特定品牌的拟物化设计元素
2. **具体插画**：不应复刻具体的插画内容和风格
3. **品牌纹理**：不应复刻特定品牌的材质纹理
4. **品牌色彩**：不应复刻特定品牌的色彩方案
5. **品牌图标**：不应复刻特定品牌的图标设计

### 合法复刻建议
1. **抽象规则**：从拟物化设计中抽象出通用的设计规则和原则
2. **创造原创**：基于拟物化的设计理念，创造原创的设计元素
3. **保持原创**：确保所有设计元素都是原创的，不侵犯他人版权
4. **尊重版权**：尊重他人的知识产权，不直接复制或模仿
5. **合法使用**：确保所有设计元素的使用都是合法的

### 设计系统应用建议
1. **组件复用**：可以复用拟物化的组件结构和交互逻辑
2. **Token 系统**：可以使用拟物化的 Design Token 系统作为参考
3. **样式规范**：可以参考拟物化的样式规范，但需要原创实现
4. **交互模式**：可以学习拟物化的交互模式，但需要原创实现
5. **视觉风格**：可以借鉴拟物化的视觉风格，但需要原创实现
