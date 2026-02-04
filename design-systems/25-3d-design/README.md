# 3D 设计系统

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **立体感（Dimensionality）**：通过阴影、光影、透视创造深度
- **材质感（Materiality）**：模拟真实材质的纹理和质感
- **空间感（Spatiality）**：利用三维空间关系组织信息
- **动态性（Dynamism）**：通过变换和动画增强交互体验
- **沉浸感（Immersiveness）**：营造身临其境的视觉体验

### 适用产品类型
- **创意工具类**：3D建模软件、设计工具、创意平台
- **游戏类应用**：游戏界面、虚拟现实应用、元宇宙平台
- **展示类产品**：产品展示、虚拟展厅、品牌体验网站
- **教育类应用**：科学可视化、虚拟实验室、交互式教学
- **娱乐类产品**：社交媒体、短视频平台、直播应用

### 设计哲学
3D设计风格通过模拟真实世界的物理属性和空间关系，为用户提供更加直观和沉浸的交互体验。它打破了传统2D界面的限制，利用深度、光影、材质等元素创造出富有层次感和空间感的界面。

### 视觉特征
- **深度层次**：多层阴影、模糊效果、透视变换
- **材质表现**：玻璃、金属、木材、织物等材质纹理
- **光影效果**：环境光、点光源、反射、折射
- **空间布局**：三维坐标系、Z轴深度、视差效果
- **动态交互**：旋转、缩放、翻转、悬浮等3D变换

---

## 2. 颜色系统（Color System）

### 主色系
```css
/* 主色 - 深邃蓝 */
--td-primary-50: #E8F4FD;
--td-primary-100: #D0E9FB;
--td-primary-200: #A3D4F6;
--td-primary-300: #75BFF2;
--td-primary-400: #48AAF7;
--td-primary-500: #1A95FC;
--td-primary-600: #1577D9;
--td-primary-700: #1159B6;
--td-primary-800: #0D3B93;
--td-primary-900: #081D70;

/* 主色使用场景 */
--td-primary-main: var(--td-primary-500); /* 主要操作、重要按钮 */
--td-primary-hover: var(--td-primary-600); /* 悬停状态 */
--td-primary-active: var(--td-primary-700); /* 激活状态 */
```

### 次色系
```css
/* 次色 - 科技紫 */
--td-secondary-50: #F3E8FD;
--td-secondary-100: #E7D1FB;
--td-secondary-200: #D0A3F7;
--td-secondary-300: #B975F2;
--td-secondary-400: #A247EE;
--td-secondary-500: #8B19E9;
--td-secondary-600: #6F14BB;
--td-secondary-700: #530F8D;
--td-secondary-800: #370A5F;
--td-secondary-900: #1B0531;

/* 次色使用场景 */
--td-secondary-main: var(--td-secondary-500); /* 辅助元素、次要操作 */
--td-secondary-hover: var(--td-secondary-600);
--td-secondary-active: var(--td-secondary-700);
```

### 辅助色系
```css
/* 辅助色 - 活力橙 */
--td-accent-50: #FFF7ED;
--td-accent-100: #FFEDD5;
--td-accent-200: #FED7AA;
--td-accent-300: #FDBA74;
--td-accent-400: #FB923C;
--td-accent-500: #F97316;
--td-accent-600: #EA580C;
--td-accent-700: #C2410C;
--td-accent-800: #9A3412;
--td-accent-900: #7C2D12;

/* 辅助色使用场景 */
--td-accent-main: var(--td-accent-500); /* 强调元素、通知标记 */
--td-accent-hover: var(--td-accent-600);
--td-accent-active: var(--td-accent-700);
```

### 中性色系
```css
/* 浅色主题中性色 */
--td-gray-50: #F9FAFB;
--td-gray-100: #F3F4F6;
--td-gray-200: #E5E7EB;
--td-gray-300: #D1D5DB;
--td-gray-400: #9CA3AF;
--td-gray-500: #6B7280;
--td-gray-600: #4B5563;
--td-gray-700: #374151;
--td-gray-800: #1F2937;
--td-gray-900: #111827;

/* 深色主题中性色 */
--td-gray-dark-50: #111827;
--td-gray-dark-100: #1F2937;
--td-gray-dark-200: #374151;
--td-gray-dark-300: #4B5563;
--td-gray-dark-400: #6B7280;
--td-gray-dark-500: #9CA3AF;
--td-gray-dark-600: #D1D5DB;
--td-gray-dark-700: #E5E7EB;
--td-gray-dark-800: #F3F4F6;
--td-gray-dark-900: #F9FAFB;
```

### 语义色系
```css
/* 成功色 */
--td-success-50: #ECFDF5;
--td-success-100: #D1FAE5;
--td-success-200: #A7F3D0;
--td-success-300: #6EE7B7;
--td-success-400: #34D399;
--td-success-500: #10B981;
--td-success-600: #059669;
--td-success-700: #047857;
--td-success-800: #065F46;
--td-success-900: #064E3B;

/* 警告色 */
--td-warning-50: #FFFBEB;
--td-warning-100: #FEF3C7;
--td-warning-200: #FDE68A;
--td-warning-300: #FCD34D;
--td-warning-400: #FBBF24;
--td-warning-500: #F59E0B;
--td-warning-600: #D97706;
--td-warning-700: #B45309;
--td-warning-800: #92400E;
--td-warning-900: #78350F;

/* 错误色 */
--td-error-50: #FEF2F2;
--td-error-100: #FEE2E2;
--td-error-200: #FECACA;
--td-error-300: #FCA5A5;
--td-error-400: #F87171;
--td-error-500: #EF4444;
--td-error-600: #DC2626;
--td-error-700: #B91C1C;
--td-error-800: #991B1B;
--td-error-900: #7F1D1D;

/* 信息色 */
--td-info-50: #EFF6FF;
--td-info-100: #DBEAFE;
--td-info-200: #BFDBFE;
--td-info-300: #93C5FD;
--td-info-400: #60A5FA;
--td-info-500: #3B82F6;
--td-info-600: #2563EB;
--td-info-700: #1D4ED8;
--td-info-800: #1E40AF;
--td-info-900: #1E3A8A;
```

### 材质色系
```css
/* 玻璃材质 */
--td-glass-bg: rgba(255, 255, 255, 0.1);
--td-glass-border: rgba(255, 255, 255, 0.2);
--td-glass-shadow: rgba(0, 0, 0, 0.1);

/* 金属材质 */
--td-metal-light: #E8E8E8;
--td-metal-medium: #C0C0C0;
--td-metal-dark: #808080;

/* 木质材质 */
--td-wood-light: #D4A574;
--td-wood-medium: #B8956E;
--td-wood-dark: #8B5A2B;

/* 塑料材质 */
--td-plastic-white: #FFFFFF;
--td-plastic-gray: #F5F5F5;
--td-plastic-black: #1A1A1A;
```

### 渐变色系
```css
/* 主色渐变 */
--td-gradient-primary: linear-gradient(135deg, #1A95FC 0%, #8B19E9 100%);
--td-gradient-primary-hover: linear-gradient(135deg, #1577D9 0%, #6F14BB 100%);
--td-gradient-primary-active: linear-gradient(135deg, #1159B6 0%, #530F8D 100%);

/* 次色渐变 */
--td-gradient-secondary: linear-gradient(135deg, #8B19E9 0%, #F97316 100%);
--td-gradient-secondary-hover: linear-gradient(135deg, #6F14BB 0%, #EA580C 100%);
--td-gradient-secondary-active: linear-gradient(135deg, #530F8D 0%, #C2410C 100%);

/* 辅助渐变 */
--td-gradient-accent: linear-gradient(135deg, #F97316 0%, #10B981 100%);
--td-gradient-accent-hover: linear-gradient(135deg, #EA580C 0%, #059669 100%);
--td-gradient-accent-active: linear-gradient(135deg, #C2410C 0%, #047857 100%);

/* 深度渐变 */
--td-gradient-depth: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%);
--td-gradient-depth-dark: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%);

/* 玻璃渐变 */
--td-gradient-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
--td-gradient-glass-dark: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);
```

### 阴影色系
```css
/* 浅色阴影 */
--td-shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--td-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
--td-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
--td-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
--td-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
--td-shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);

/* 深色阴影 */
--td-shadow-dark-xs: 0 1px 2px rgba(0, 0, 0, 0.3);
--td-shadow-dark-sm: 0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3);
--td-shadow-dark-md: 0 4px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3);
--td-shadow-dark-lg: 0 10px 15px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.3);
--td-shadow-dark-xl: 0 20px 25px rgba(0, 0, 0, 0.4), 0 10px 10px rgba(0, 0, 0, 0.3);
--td-shadow-dark-2xl: 0 25px 50px rgba(0, 0, 0, 0.5);

/* 内阴影 */
--td-shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.06);
--td-shadow-inner-lg: inset 0 4px 8px rgba(0, 0, 0, 0.1);
```

### 颜色使用规则
1. **主色使用**：用于主要操作按钮、重要导航、关键信息强调
2. **次色使用**：用于辅助元素、次要操作、装饰性元素
3. **辅助色使用**：用于强调元素、通知标记、特殊状态
4. **中性色使用**：用于背景、文字、边框、分割线
5. **语义色使用**：用于状态指示（成功、警告、错误、信息）
6. **材质色使用**：用于模拟不同材质的视觉效果
7. **渐变色使用**：用于按钮、卡片、背景等需要层次感的元素
8. **阴影色使用**：用于创造深度感和立体感

---

## 3. 字体与排版（Typography）

### 字体家族
```css
/* 主字体 - 系统字体栈 */
--td-font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

/* 备用字体 - 中文 */
--td-font-family-chinese: "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;

/* 等宽字体 - 代码 */
--td-font-family-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;

/* 衬线字体 - 标题 */
--td-font-family-serif: Georgia, "Times New Roman", Times, serif;
```

### 字体大小
```css
/* 标题层级 */
--td-font-size-h1: 3rem; /* 48px */
--td-font-size-h2: 2.5rem; /* 40px */
--td-font-size-h3: 2rem; /* 32px */
--td-font-size-h4: 1.5rem; /* 24px */
--td-font-size-h5: 1.25rem; /* 20px */
--td-font-size-h6: 1rem; /* 16px */

/* 正文层级 */
--td-font-size-body-large: 1.125rem; /* 18px */
--td-font-size-body: 1rem; /* 16px */
--td-font-size-body-small: 0.875rem; /* 14px */

/* 辅助层级 */
--td-font-size-caption: 0.75rem; /* 12px */
--td-font-size-tiny: 0.625rem; /* 10px */
```

### 字重
```css
/* 字重层级 */
--td-font-weight-light: 300;
--td-font-weight-regular: 400;
--td-font-weight-medium: 500;
--td-font-weight-semibold: 600;
--td-font-weight-bold: 700;
--td-font-weight-extrabold: 800;
```

### 行高
```css
/* 行高层级 */
--td-line-height-tight: 1.25;
--td-line-height-normal: 1.5;
--td-line-height-relaxed: 1.75;
--td-line-height-loose: 2;
```

### 字间距
```css
/* 字间距层级 */
--td-letter-spacing-tight: -0.025em;
--td-letter-spacing-normal: 0;
--td-letter-spacing-wide: 0.025em;
--td-letter-spacing-wider: 0.05em;
--td-letter-spacing-widest: 0.1em;
```

### 排版规则
```css
/* 标题排版 */
--td-h1: {
  font-size: var(--td-font-size-h1);
  font-weight: var(--td-font-weight-bold);
  line-height: var(--td-line-height-tight);
  letter-spacing: var(--td-letter-spacing-tight);
}

--td-h2: {
  font-size: var(--td-font-size-h2);
  font-weight: var(--td-font-weight-semibold);
  line-height: var(--td-line-height-tight);
  letter-spacing: var(--td-letter-spacing-tight);
}

--td-h3: {
  font-size: var(--td-font-size-h3);
  font-weight: var(--td-font-weight-semibold);
  line-height: var(--td-line-height-normal);
  letter-spacing: var(--td-letter-spacing-normal);
}

--td-h4: {
  font-size: var(--td-font-size-h4);
  font-weight: var(--td-font-weight-medium);
  line-height: var(--td-line-height-normal);
  letter-spacing: var(--td-letter-spacing-normal);
}

--td-h5: {
  font-size: var(--td-font-size-h5);
  font-weight: var(--td-font-weight-medium);
  line-height: var(--td-line-height-normal);
  letter-spacing: var(--td-letter-spacing-normal);
}

--td-h6: {
  font-size: var(--td-font-size-h6);
  font-weight: var(--td-font-weight-semibold);
  line-height: var(--td-line-height-normal);
  letter-spacing: var(--td-letter-spacing-wide);
}

/* 正文排版 */
--td-body-large: {
  font-size: var(--td-font-size-body-large);
  font-weight: var(--td-font-weight-regular);
  line-height: var(--td-line-height-normal);
  letter-spacing: var(--td-letter-spacing-normal);
}

--td-body: {
  font-size: var(--td-font-size-body);
  font-weight: var(--td-font-weight-regular);
  line-height: var(--td-line-height-normal);
  letter-spacing: var(--td-letter-spacing-normal);
}

--td-body-small: {
  font-size: var(--td-font-size-body-small);
  font-weight: var(--td-font-weight-regular);
  line-height: var(--td-line-height-normal);
  letter-spacing: var(--td-letter-spacing-normal);
}

/* 辅助排版 */
--td-caption: {
  font-size: var(--td-font-size-caption);
  font-weight: var(--td-font-weight-regular);
  line-height: var(--td-line-height-relaxed);
  letter-spacing: var(--td-letter-spacing-wide);
}

--td-tiny: {
  font-size: var(--td-font-size-tiny);
  font-weight: var(--td-font-weight-medium);
  line-height: var(--td-line-height-loose);
  letter-spacing: var(--td-letter-spacing-wider);
}
```

### 文字阴影
```css
/* 文字阴影 - 增强立体感 */
--td-text-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
--td-text-shadow-md: 0 2px 4px rgba(0, 0, 0, 0.15);
--td-text-shadow-lg: 0 4px 8px rgba(0, 0, 0, 0.2);
--td-text-shadow-xl: 0 8px 16px rgba(0, 0, 0, 0.25);

/* 文字阴影 - 发光效果 */
--td-text-glow-primary: 0 0 10px rgba(26, 149, 252, 0.5);
--td-text-glow-secondary: 0 0 10px rgba(139, 25, 233, 0.5);
--td-text-glow-accent: 0 0 10px rgba(249, 115, 22, 0.5);
```

### 响应式字体
```css
/* 移动端字体调整 */
@media (max-width: 640px) {
  --td-font-size-h1: 2rem; /* 32px */
  --td-font-size-h2: 1.75rem; /* 28px */
  --td-font-size-h3: 1.5rem; /* 24px */
  --td-font-size-h4: 1.25rem; /* 20px */
  --td-font-size-h5: 1.125rem; /* 18px */
  --td-font-size-h6: 1rem; /* 16px */
}

/* 平板端字体调整 */
@media (min-width: 641px) and (max-width: 1024px) {
  --td-font-size-h1: 2.5rem; /* 40px */
  --td-font-size-h2: 2.25rem; /* 36px */
  --td-font-size-h3: 1.75rem; /* 28px */
  --td-font-size-h4: 1.375rem; /* 22px */
  --td-font-size-h5: 1.1875rem; /* 19px */
  --td-font-size-h6: 1rem; /* 16px */
}

/* 桌面端字体调整 */
@media (min-width: 1025px) {
  --td-font-size-h1: 3rem; /* 48px */
  --td-font-size-h2: 2.5rem; /* 40px */
  --td-font-size-h3: 2rem; /* 32px */
  --td-font-size-h4: 1.5rem; /* 24px */
  --td-font-size-h5: 1.25rem; /* 20px */
  --td-font-size-h6: 1rem; /* 16px */
}
```

### 字体使用规则
1. **标题层级**：H1用于页面主标题，H2用于章节标题，H3用于子章节标题
2. **正文规范**：正文使用Regular字重，重要内容使用Medium字重
3. **强调文字**：使用SemiBold或Bold字重强调关键信息
4. **系统字体**：优先使用系统字体，提高加载性能
5. **响应式字体**：根据屏幕大小调整字体大小
6. **文字阴影**：适当使用文字阴影增强立体感和层次感
7. **字间距**：标题使用较紧的字间距，正文使用正常字间距
8. **行高**：标题使用较紧的行高，正文使用正常的行高

---

## 4. 布局与栅格系统（Layout & Grid）

### 版心宽度
```css
/* 版心宽度 */
--td-container-sm: 640px;
--td-container-md: 768px;
--td-container-lg: 1024px;
--td-container-xl: 1280px;
--td-container-2xl: 1536px;

/* 默认版心宽度 */
--td-container-default: var(--td-container-xl);
```

### 栅格系统
```css
/* 栅格列数 */
--td-grid-columns: 12;

/* 栅格间距 */
--td-grid-gap-xs: 0.5rem; /* 8px */
--td-grid-gap-sm: 1rem; /* 16px */
--td-grid-gap-md: 1.5rem; /* 24px */
--td-grid-gap-lg: 2rem; /* 32px */
--td-grid-gap-xl: 3rem; /* 48px */

/* 默认栅格间距 */
--td-grid-gap-default: var(--td-grid-gap-md);

/* 栅格边距 */
--td-grid-margin-xs: 1rem; /* 16px */
--td-grid-margin-sm: 1.5rem; /* 24px */
--td-grid-margin-md: 2rem; /* 32px */
--td-grid-margin-lg: 3rem; /* 48px */
--td-grid-margin-xl: 4rem; /* 64px */

/* 默认栅格边距 */
--td-grid-margin-default: var(--td-grid-margin-md);
```

### 响应式断点
```css
/* 断点定义 */
--td-breakpoint-xs: 0;
--td-breakpoint-sm: 640px;
--td-breakpoint-md: 768px;
--td-breakpoint-lg: 1024px;
--td-breakpoint-xl: 1280px;
--td-breakpoint-2xl: 1536px;

/* 断点媒体查询 */
@media (min-width: var(--td-breakpoint-sm)) { /* 小屏及以上 */ }
@media (min-width: var(--td-breakpoint-md)) { /* 中屏及以上 */ }
@media (min-width: var(--td-breakpoint-lg)) { /* 大屏及以上 */ }
@media (min-width: var(--td-breakpoint-xl)) { /* 超大屏及以上 */ }
@media (min-width: var(--td-breakpoint-2xl)) { /* 特大屏及以上 */ }
```

### 间距系统
```css
/* 间距层级 */
--td-spacing-0: 0;
--td-spacing-px: 1px;
--td-spacing-0_5: 0.125rem; /* 2px */
--td-spacing-1: 0.25rem; /* 4px */
--td-spacing-1_5: 0.375rem; /* 6px */
--td-spacing-2: 0.5rem; /* 8px */
--td-spacing-2_5: 0.625rem; /* 10px */
--td-spacing-3: 0.75rem; /* 12px */
--td-spacing-3_5: 0.875rem; /* 14px */
--td-spacing-4: 1rem; /* 16px */
--td-spacing-5: 1.25rem; /* 20px */
--td-spacing-6: 1.5rem; /* 24px */
--td-spacing-7: 1.75rem; /* 28px */
--td-spacing-8: 2rem; /* 32px */
--td-spacing-9: 2.25rem; /* 36px */
--td-spacing-10: 2.5rem; /* 40px */
--td-spacing-11: 2.75rem; /* 44px */
--td-spacing-12: 3rem; /* 48px */
--td-spacing-14: 3.5rem; /* 56px */
--td-spacing-16: 4rem; /* 64px */
--td-spacing-20: 5rem; /* 80px */
--td-spacing-24: 6rem; /* 96px */
--td-spacing-28: 7rem; /* 112px */
--td-spacing-32: 8rem; /* 128px */
--td-spacing-36: 9rem; /* 144px */
--td-spacing-40: 10rem; /* 160px */
--td-spacing-44: 11rem; /* 176px */
--td-spacing-48: 12rem; /* 192px */
--td-spacing-52: 13rem; /* 208px */
--td-spacing-56: 14rem; /* 224px */
--td-spacing-60: 15rem; /* 240px */
--td-spacing-64: 16rem; /* 256px */
--td-spacing-72: 18rem; /* 288px */
--td-spacing-80: 20rem; /* 320px */
--td-spacing-96: 24rem; /* 384px */
```

### 3D布局系统
```css
/* 3D变换原点 */
--td-transform-origin: center center;

/* 3D透视 */
--td-perspective-sm: 500px;
--td-perspective-md: 1000px;
--td-perspective-lg: 2000px;
--td-perspective-xl: 3000px;

/* 默认3D透视 */
--td-perspective-default: var(--td-perspective-md);

/* 3D深度 */
--td-depth-xs: 10px;
--td-depth-sm: 20px;
--td-depth-md: 40px;
--td-depth-lg: 60px;
--td-depth-xl: 80px;

/* 默认3D深度 */
--td-depth-default: var(--td-depth-md);

/* 3D旋转 */
--td-rotate-x: 0deg;
--td-rotate-y: 0deg;
--td-rotate-z: 0deg;

/* 3D缩放 */
--td-scale-sm: 0.95;
--td-scale-md: 1;
--td-scale-lg: 1.05;

/* 3D平移 */
--td-translate-x: 0px;
--td-translate-y: 0px;
--td-translate-z: 0px;
```

### 布局模式
```css
/* 固定布局 */
.td-layout-fixed {
  width: var(--td-container-default);
  margin: 0 auto;
}

/* 流式布局 */
.td-layout-fluid {
  width: 100%;
  max-width: var(--td-container-default);
  margin: 0 auto;
}

/* 弹性布局 */
.td-layout-flex {
  display: flex;
  gap: var(--td-grid-gap-default);
}

/* 网格布局 */
.td-layout-grid {
  display: grid;
  grid-template-columns: repeat(var(--td-grid-columns), 1fr);
  gap: var(--td-grid-gap-default);
}

/* 3D布局 */
.td-layout-3d {
  perspective: var(--td-perspective-default);
  transform-style: preserve-3d;
}
```

### 信息密度
```css
/* 高密度布局 */
.td-density-high {
  --td-grid-gap: var(--td-grid-gap-xs);
  --td-spacing-4: var(--td-spacing-2);
}

/* 中密度布局 */
.td-density-medium {
  --td-grid-gap: var(--td-grid-gap-sm);
  --td-spacing-4: var(--td-spacing-4);
}

/* 低密度布局 */
.td-density-low {
  --td-grid-gap: var(--td-grid-gap-lg);
  --td-spacing-4: var(--td-spacing-6);
}
```

### 布局规则
1. **版心宽度**：桌面端使用1280px版心，移动端使用流式布局
2. **栅格系统**：使用12列栅格系统，支持灵活的列数组合
3. **间距规则**：所有间距基于4px的倍数，保持一致性
4. **响应式设计**：使用移动优先策略，从小屏幕逐步增强
5. **3D布局**：合理使用3D变换，避免过度使用影响性能
6. **信息密度**：根据内容类型和用户需求选择合适的密度
7. **留白原则**：保持足够的留白，避免拥挤感
8. **对齐方式**：使用统一的对齐方式，保持视觉一致性

---

## 5. 核心 UI 组件规范（Component System）

### 按钮（Button）

#### 组件概述
- 组件名称：3D按钮（3D Button）
- 组件描述：具有立体感和深度效果的按钮组件
- 适用场景：主要操作、次要操作、文字按钮、图标按钮

#### 组件变体
##### 主按钮（Primary）
```css
.btn-3d-primary {
  /* 基础样式 */
  background: var(--td-gradient-primary);
  color: #FFFFFF;
  border: none;
  border-radius: var(--td-radius-md);
  padding: var(--td-spacing-3) var(--td-spacing-6);
  font-size: var(--td-font-size-body);
  font-weight: var(--td-font-weight-semibold);
  cursor: pointer;
  transition: all var(--td-transition-fast) var(--td-ease-out);
  
  /* 3D效果 */
  box-shadow: 
    0 4px 6px rgba(26, 149, 252, 0.3),
    0 2px 4px rgba(26, 149, 252, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform: translateY(0);
}

/* 悬停状态 */
.btn-3d-primary:hover {
  background: var(--td-gradient-primary-hover);
  box-shadow: 
    0 6px 8px rgba(26, 149, 252, 0.4),
    0 3px 6px rgba(26, 149, 252, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* 激活状态 */
.btn-3d-primary:active {
  background: var(--td-gradient-primary-active);
  box-shadow: 
    0 2px 4px rgba(26, 149, 252, 0.3),
    0 1px 2px rgba(26, 149, 252, 0.2),
    inset 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: translateY(2px);
}

/* 禁用状态 */
.btn-3d-primary:disabled {
  background: var(--td-gray-300);
  color: var(--td-gray-500);
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
}
```

##### 次按钮（Secondary）
```css
.btn-3d-secondary {
  /* 基础样式 */
  background: var(--td-glass-bg);
  color: var(--td-primary-500);
  border: 2px solid var(--td-primary-500);
  border-radius: var(--td-radius-md);
  padding: var(--td-spacing-3) var(--td-spacing-6);
  font-size: var(--td-font-size-body);
  font-weight: var(--td-font-weight-semibold);
  cursor: pointer;
  transition: all var(--td-transition-fast) var(--td-ease-out);
  
  /* 3D效果 */
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transform: translateY(0);
}

/* 悬停状态 */
.btn-3d-secondary:hover {
  background: rgba(26, 149, 252, 0.1);
  box-shadow: 
    0 6px 8px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* 激活状态 */
.btn-3d-secondary:active {
  background: rgba(26, 149, 252, 0.2);
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(2px);
}
```

##### 文字按钮（Text）
```css
.btn-3d-text {
  /* 基础样式 */
  background: transparent;
  color: var(--td-primary-500);
  border: none;
  border-radius: var(--td-radius-sm);
  padding: var(--td-spacing-2) var(--td-spacing-4);
  font-size: var(--td-font-size-body);
  font-weight: var(--td-font-weight-medium);
  cursor: pointer;
  transition: all var(--td-transition-fast) var(--td-ease-out);
  
  /* 3D效果 */
  text-shadow: var(--td-text-shadow-sm);
  transform: translateY(0);
}

/* 悬停状态 */
.btn-3d-text:hover {
  background: rgba(26, 149, 252, 0.05);
  text-shadow: var(--td-text-glow-primary);
  transform: translateY(-1px);
}

/* 激活状态 */
.btn-3d-text:active {
  background: rgba(26, 149, 252, 0.1);
  transform: translateY(1px);
}
```

#### 组件尺寸
```css
/* 小号按钮 */
.btn-3d-small {
  padding: var(--td-spacing-2) var(--td-spacing-4);
  font-size: var(--td-font-size-body-small);
  border-radius: var(--td-radius-sm);
}

/* 中号按钮 */
.btn-3d-medium {
  padding: var(--td-spacing-3) var(--td-spacing-6);
  font-size: var(--td-font-size-body);
  border-radius: var(--td-radius-md);
}

/* 大号按钮 */
.btn-3d-large {
  padding: var(--td-spacing-4) var(--td-spacing-8);
  font-size: var(--td-font-size-body-large);
  border-radius: var(--td-radius-lg);
}
```

#### 组件API
```typescript
interface Button3DProps {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
```

### 卡片（Card）

#### 组件概述
- 组件名称：3D卡片（3D Card）
- 组件描述：具有立体感和深度效果的卡片组件
- 适用场景：信息展示、数据展示、内容分组

#### 组件变体
##### 基础卡片（Basic）
```css
.card-3d-basic {
  /* 基础样式 */
  background: var(--td-plastic-white);
  border-radius: var(--td-radius-lg);
  padding: var(--td-spacing-6);
  position: relative;
  transition: all var(--td-transition-normal) var(--td-ease-out);
  
  /* 3D效果 */
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transform-style: preserve-3d;
  transform: translateY(0);
}

/* 悬停状态 */
.card-3d-basic:hover {
  box-shadow: 
    0 10px 15px rgba(0, 0, 0, 0.15),
    0 4px 6px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  transform: translateY(-4px);
}
```

##### 玻璃卡片（Glass）
```css
.card-3d-glass {
  /* 基础样式 */
  background: var(--td-gradient-glass);
  border-radius: var(--td-radius-lg);
  padding: var(--td-spacing-6);
  border: 1px solid var(--td-glass-border);
  position: relative;
  transition: all var(--td-transition-normal) var(--td-ease-out);
  
  /* 3D效果 */
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  transform-style: preserve-3d;
  transform: translateY(0);
}

/* 悬停状态 */
.card-3d-glass:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  transform: translateY(-6px);
}
```

##### 金属卡片（Metal）
```css
.card-3d-metal {
  /* 基础样式 */
  background: linear-gradient(135deg, var(--td-metal-light) 0%, var(--td-metal-medium) 50%, var(--td-metal-dark) 100%);
  border-radius: var(--td-radius-lg);
  padding: var(--td-spacing-6);
  position: relative;
  transition: all var(--td-transition-normal) var(--td-ease-out);
  
  /* 3D效果 */
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(255, 255, 255, 0.6),
    inset 0 -2px 4px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  transform: translateY(0);
}

/* 悬停状态 */
.card-3d-metal:hover {
  box-shadow: 
    0 12px 24px rgba(0, 0, 0, 0.25),
    inset 0 2px 4px rgba(255, 255, 255, 0.7),
    inset 0 -2px 4px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}
```

#### 组件尺寸
```css
/* 小号卡片 */
.card-3d-small {
  padding: var(--td-spacing-4);
  border-radius: var(--td-radius-md);
}

/* 中号卡片 */
.card-3d-medium {
  padding: var(--td-spacing-6);
  border-radius: var(--td-radius-lg);
}

/* 大号卡片 */
.card-3d-large {
  padding: var(--td-spacing-8);
  border-radius: var(--td-radius-xl);
}
```

#### 组件API
```typescript
interface Card3DProps {
  variant?: 'basic' | 'glass' | 'metal';
  size?: 'small' | 'medium' | 'large';
  hoverable?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
```

### 输入框（Input）

#### 组件概述
- 组件名称：3D输入框（3D Input）
- 组件描述：具有立体感和深度效果的输入框组件
- 适用场景：表单输入、搜索框、文本编辑

#### 组件变体
##### 基础输入框（Basic）
```css
.input-3d-basic {
  /* 基础样式 */
  background: var(--td-plastic-white);
  color: var(--td-gray-900);
  border: 2px solid var(--td-gray-200);
  border-radius: var(--td-radius-md);
  padding: var(--td-spacing-3) var(--td-spacing-4);
  font-size: var(--td-font-size-body);
  transition: all var(--td-transition-fast) var(--td-ease-out);
  outline: none;
  
  /* 3D效果 */
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.05),
    inset 0 1px 2px rgba(0, 0, 0, 0.05);
  transform: translateY(0);
}

/* 悬停状态 */
.input-3d-basic:hover {
  border-color: var(--td-gray-300);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.08),
    inset 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* 焦点状态 */
.input-3d-basic:focus {
  border-color: var(--td-primary-500);
  box-shadow: 
    0 4px 6px rgba(26, 149, 252, 0.2),
    inset 0 1px 2px rgba(0, 0, 0, 0.05),
    0 0 0 3px rgba(26, 149, 252, 0.1);
}

/* 错误状态 */
.input-3d-basic.error {
  border-color: var(--td-error-500);
  box-shadow: 
    0 4px 6px rgba(239, 68, 68, 0.2),
    inset 0 1px 2px rgba(0, 0, 0, 0.05),
    0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* 禁用状态 */
.input-3d-basic:disabled {
  background: var(--td-gray-100);
  color: var(--td-gray-400);
  border-color: var(--td-gray-200);
  box-shadow: none;
  cursor: not-allowed;
}
```

##### 玻璃输入框（Glass）
```css
.input-3d-glass {
  /* 基础样式 */
  background: var(--td-gradient-glass);
  color: var(--td-gray-900);
  border: 2px solid var(--td-glass-border);
  border-radius: var(--td-radius-md);
  padding: var(--td-spacing-3) var(--td-spacing-4);
  font-size: var(--td-font-size-body);
  transition: all var(--td-transition-fast) var(--td-ease-out);
  outline: none;
  
  /* 3D效果 */
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.1),
    inset 0 1px 2px rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  transform: translateY(0);
}

/* 悬停状态 */
.input-3d-glass:hover {
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 
    0 6px 12px rgba(0, 0, 0, 0.12),
    inset 0 1px 2px rgba(255, 255, 255, 0.5);
}

/* 焦点状态 */
.input-3d-glass:focus {
  border-color: var(--td-primary-500);
  box-shadow: 
    0 6px 12px rgba(26, 149, 252, 0.2),
    inset 0 1px 2px rgba(255, 255, 255, 0.5),
    0 0 0 3px rgba(26, 149, 252, 0.1);
}
```

#### 组件尺寸
```css
/* 小号输入框 */
.input-3d-small {
  padding: var(--td-spacing-2) var(--td-spacing-3);
  font-size: var(--td-font-size-body-small);
  border-radius: var(--td-radius-sm);
}

/* 中号输入框 */
.input-3d-medium {
  padding: var(--td-spacing-3) var(--td-spacing-4);
  font-size: var(--td-font-size-body);
  border-radius: var(--td-radius-md);
}

/* 大号输入框 */
.input-3d-large {
  padding: var(--td-spacing-4) var(--td-spacing-6);
  font-size: var(--td-font-size-body-large);
  border-radius: var(--td-radius-lg);
}
```

#### 组件API
```typescript
interface Input3DProps {
  variant?: 'basic' | 'glass';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}
```

### 导航（Navigation）

#### 组件概述
- 组件名称：3D导航（3D Navigation）
- 组件描述：具有立体感和深度效果的导航组件
- 适用场景：主导航、侧边导航、面包屑导航

#### 组件变体
##### 顶部导航（Top Navigation）
```css
.nav-3d-top {
  /* 基础样式 */
  background: var(--td-plastic-white);
  border-bottom: 1px solid var(--td-gray-200);
  padding: var(--td-spacing-4) var(--td-spacing-6);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all var(--td-transition-normal) var(--td-ease-out);
  
  /* 3D效果 */
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}

/* 导航项 */
.nav-3d-item {
  color: var(--td-gray-600);
  padding: var(--td-spacing-2) var(--td-spacing-4);
  border-radius: var(--td-radius-md);
  transition: all var(--td-transition-fast) var(--td-ease-out);
  position: relative;
}

/* 悬停状态 */
.nav-3d-item:hover {
  color: var(--td-primary-500);
  background: rgba(26, 149, 252, 0.05);
  transform: translateY(-2px);
}

/* 激活状态 */
.nav-3d-item.active {
  color: var(--td-primary-500);
  background: rgba(26, 149, 252, 0.1);
  box-shadow: 
    0 2px 4px rgba(26, 149, 252, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}
```

##### 侧边导航（Side Navigation）
```css
.nav-3d-side {
  /* 基础样式 */
  background: var(--td-plastic-white);
  border-right: 1px solid var(--td-gray-200);
  padding: var(--td-spacing-4);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px;
  transition: all var(--td-transition-normal) var(--td-ease-out);
  
  /* 3D效果 */
  box-shadow: 
    4px 0 8px rgba(0, 0, 0, 0.05),
    inset -1px 0 0 rgba(255, 255, 255, 0.8);
}

/* 导航项 */
.nav-3d-side-item {
  color: var(--td-gray-600);
  padding: var(--td-spacing-3) var(--td-spacing-4);
  border-radius: var(--td-radius-md);
  margin-bottom: var(--td-spacing-2);
  transition: all var(--td-transition-fast) var(--td-ease-out);
  position: relative;
}

/* 悬停状态 */
.nav-3d-side-item:hover {
  color: var(--td-primary-500);
  background: rgba(26, 149, 252, 0.05);
  transform: translateX(4px);
}

/* 激活状态 */
.nav-3d-side-item.active {
  color: var(--td-primary-500);
  background: rgba(26, 149, 252, 0.1);
  box-shadow: 
    0 2px 4px rgba(26, 149, 252, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  transform: translateX(4px);
}
```

#### 组件API
```typescript
interface Navigation3DProps {
  variant?: 'top' | 'side';
  items: NavItem[];
  activeItem?: string;
  onItemClick?: (item: NavItem) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  path?: string;
}
```

### 徽章（Badge）

#### 组件概述
- 组件名称：3D徽章（3D Badge）
- 组件描述：具有立体感和深度效果的徽章组件
- 适用场景：状态显示、标签分类、数量提示

#### 组件变体
##### 基础徽章（Basic）
```css
.badge-3d-basic {
  /* 基础样式 */
  background: var(--td-gray-100);
  color: var(--td-gray-700);
  border-radius: 9999px;
  padding: var(--td-spacing-1) var(--td-spacing-3);
  font-size: var(--td-font-size-caption);
  font-weight: var(--td-font-weight-semibold);
  display: inline-flex;
  align-items: center;
  gap: var(--td-spacing-1);
  transition: all var(--td-transition-fast) var(--td-ease-out);
  
  /* 3D效果 */
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transform: translateY(0);
}

/* 悬停状态 */
.badge-3d-basic:hover {
  background: var(--td-gray-200);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  transform: translateY(-1px);
}
```

##### 成功徽章（Success）
```css
.badge-3d-success {
  /* 基础样式 */
  background: var(--td-success-500);
  color: #FFFFFF;
  border-radius: 9999px;
  padding: var(--td-spacing-1) var(--td-spacing-3);
  font-size: var(--td-font-size-caption);
  font-weight: var(--td-font-weight-semibold);
  display: inline-flex;
  align-items: center;
  gap: var(--td-spacing-1);
  transition: all var(--td-transition-fast) var(--td-ease-out);
  
  /* 3D效果 */
  box-shadow: 
    0 2px 4px rgba(16, 185, 129, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transform: translateY(0);
}

/* 悬停状态 */
.badge-3d-success:hover {
  background: var(--td-success-600);
  box-shadow: 
    0 4px 6px rgba(16, 185, 129, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transform: translateY(-1px);
}
```

#### 组件API
```typescript
interface Badge3DProps {
  variant?: 'basic' | 'success' | 'warning' | 'error' | 'info';
  count?: number;
  dot?: boolean;
  children?: React.ReactNode;
}
```

### 组件使用规则
1. **按钮组件**：根据操作重要性选择合适的变体，主按钮用于主要操作
2. **卡片组件**：根据内容类型和展示需求选择合适的材质和尺寸
3. **输入框组件**：提供清晰的占位符和错误提示，确保可访问性
4. **导航组件**：保持导航层次清晰，提供明确的视觉反馈
5. **徽章组件**：用于状态指示和数量提示，避免过度使用
6. **3D效果**：适度使用3D效果，避免影响性能和可读性
7. **交互反馈**：提供清晰的悬停、激活、禁用等状态反馈
8. **响应式设计**：确保组件在不同屏幕尺寸下都能正常工作

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格

#### 图标类型
```css
/* 填充图标 */
.icon-3d-filled {
  fill: currentColor;
  stroke: none;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

/* 描边图标 */
.icon-3d-outlined {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

/* 3D图标 */
.icon-3d {
  fill: currentColor;
  stroke: none;
  filter: 
    drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2)),
    drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  transform-style: preserve-3d;
}
```

#### 图标尺寸
```css
/* 图标尺寸 */
--td-icon-xs: 12px;
--td-icon-sm: 16px;
--td-icon-md: 20px;
--td-icon-lg: 24px;
--td-icon-xl: 32px;
--td-icon-2xl: 48px;
--td-icon-3xl: 64px;

/* 默认图标尺寸 */
--td-icon-default: var(--td-icon-lg);
```

#### 图标状态
```css
/* 悬停状态 */
.icon-3d:hover {
  transform: translateY(-2px) scale(1.05);
  filter: 
    drop-shadow(0 4px 8px rgba(0, 0, 0, 0.25)),
    drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
}

/* 激活状态 */
.icon-3d:active {
  transform: translateY(0) scale(0.95);
  filter: 
    drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2)),
    drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

/* 禁用状态 */
.icon-3d:disabled {
  opacity: 0.4;
  filter: none;
  transform: none;
  cursor: not-allowed;
}
```

### 插画风格

#### 插画类型
```css
/* 3D插画 */
.illustration-3d {
  /* 基础样式 */
  position: relative;
  transform-style: preserve-3d;
  perspective: var(--td-perspective-md);
  
  /* 3D效果 */
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15));
}

/* 玻璃插画 */
.illustration-glass {
  /* 基础样式 */
  background: var(--td-gradient-glass);
  border: 1px solid var(--td-glass-border);
  border-radius: var(--td-radius-lg);
  backdrop-filter: blur(12px);
  
  /* 3D效果 */
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

/* 金属插画 */
.illustration-metal {
  /* 基础样式 */
  background: linear-gradient(135deg, var(--td-metal-light) 0%, var(--td-metal-medium) 50%, var(--td-metal-dark) 100%);
  border-radius: var(--td-radius-lg);
  
  /* 3D效果 */
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(255, 255, 255, 0.6),
    inset 0 -2px 4px rgba(0, 0, 0, 0.1);
}
```

#### 插画动画
```css
/* 悬浮动画 */
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
  }
}

.illustration-float {
  animation: float 3s ease-in-out infinite;
}

/* 旋转动画 */
@keyframes rotate3d {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.illustration-rotate {
  animation: rotate3d 10s linear infinite;
}

/* 脉冲动画 */
@keyframes pulse3d {
  0%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15));
  }
  50% {
    transform: scale(1.05);
    filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.2));
  }
}

.illustration-pulse {
  animation: pulse3d 2s ease-in-out infinite;
}
```

### 图标与插画使用规则
1. **图标风格**：统一使用3D风格图标，保持视觉一致性
2. **图标尺寸**：根据使用场景选择合适的尺寸，保持比例协调
3. **插画风格**：根据产品定位选择合适的插画风格（3D、玻璃、金属）
4. **动画效果**：适度使用动画效果，避免过度使用影响性能
5. **材质表现**：通过光影、纹理、反射等元素模拟真实材质
6. **空间关系**：利用透视、深度、层次等元素创造空间感
7. **交互反馈**：为图标和插画提供清晰的交互反馈
8. **性能优化**：使用SVG格式，优化文件大小和加载速度

---

## 7. 交互与动效原则（Interaction & Motion）

### 交互原则

#### Hover（悬停）
```css
/* 悬停效果 */
.hover-3d {
  transition: all var(--td-transition-fast) var(--td-ease-out);
}

/* 悬停 - 提升 */
.hover-3d-lift:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 8px 12px rgba(0, 0, 0, 0.15),
    0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 悬停 - 缩放 */
.hover-3d-scale:hover {
  transform: scale(1.05);
  box-shadow: 
    0 8px 12px rgba(0, 0, 0, 0.15),
    0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 悬停 - 旋转 */
.hover-3d-rotate:hover {
  transform: rotateY(10deg) rotateX(5deg);
  box-shadow: 
    0 12px 20px rgba(0, 0, 0, 0.2),
    0 6px 12px rgba(0, 0, 0, 0.15);
}
```

#### Active（激活）
```css
/* 激活效果 */
.active-3d {
  transition: all var(--td-transition-fast) var(--td-ease-out);
}

/* 激活 - 按压 */
.active-3d-press:active {
  transform: translateY(2px) scale(0.98);
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 激活 - 深度 */
.active-3d-depth:active {
  transform: translateZ(10px);
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

#### Focus（焦点）
```css
/* 焦点效果 */
.focus-3d:focus {
  outline: none;
  box-shadow: 
    0 0 0 3px rgba(26, 149, 252, 0.2),
    0 4px 8px rgba(26, 149, 252, 0.1);
}

/* 焦点 - 发光 */
.focus-3d-glow:focus {
  outline: none;
  box-shadow: 
    0 0 0 3px rgba(26, 149, 252, 0.3),
    0 0 20px rgba(26, 149, 252, 0.2),
    0 4px 8px rgba(26, 149, 252, 0.1);
}
```

### 动效原则

#### 动效时长
```css
/* 动效时长 */
--td-transition-instant: 50ms;
--td-transition-fast: 150ms;
--td-transition-normal: 300ms;
--td-transition-slow: 500ms;
--td-transition-slower: 750ms;

/* 默认动效时长 */
--td-transition-default: var(--td-transition-normal);
```

#### 缓动函数
```css
/* 缓动函数 */
--td-ease-linear: linear;
--td-ease-in: cubic-bezier(0.4, 0, 1, 1);
--td-ease-out: cubic-bezier(0, 0, 0.2, 1);
--td-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--td-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--td-ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);

/* 默认缓动函数 */
--td-ease-default: var(--td-ease-out);
```

#### 动效类型
```css
/* 淡入淡出 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/* 滑入滑出 */
@keyframes slideInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 缩放 */
@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes scaleOut {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
}

/* 3D翻转 */
@keyframes flip3d {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

/* 3D旋转 */
@keyframes rotate3d {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
```

### 反馈机制

#### 成功反馈
```css
/* 成功反馈 */
.feedback-success {
  background: var(--td-success-500);
  color: #FFFFFF;
  padding: var(--td-spacing-3) var(--td-spacing-6);
  border-radius: var(--td-radius-md);
  box-shadow: 
    0 4px 6px rgba(16, 185, 129, 0.3),
    0 2px 4px rgba(16, 185, 129, 0.2);
  animation: slideInDown var(--td-transition-normal) var(--td-ease-out);
}

/* 成功动画 */
@keyframes successPulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 
      0 4px 6px rgba(16, 185, 129, 0.3),
      0 2px 4px rgba(16, 185, 129, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 
      0 6px 12px rgba(16, 185, 129, 0.4),
      0 3px 6px rgba(16, 185, 129, 0.3);
  }
}
```

#### 错误反馈
```css
/* 错误反馈 */
.feedback-error {
  background: var(--td-error-500);
  color: #FFFFFF;
  padding: var(--td-spacing-3) var(--td-spacing-6);
  border-radius: var(--td-radius-md);
  box-shadow: 
    0 4px 6px rgba(239, 68, 68, 0.3),
    0 2px 4px rgba(239, 68, 68, 0.2);
  animation: slideInDown var(--td-transition-normal) var(--td-ease-out);
}

/* 错误动画 */
@keyframes errorShake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
}
```

#### 警告反馈
```css
/* 警告反馈 */
.feedback-warning {
  background: var(--td-warning-500);
  color: #FFFFFF;
  padding: var(--td-spacing-3) var(--td-spacing-6);
  border-radius: var(--td-radius-md);
  box-shadow: 
    0 4px 6px rgba(245, 158, 11, 0.3),
    0 2px 4px rgba(245, 158, 11, 0.2);
  animation: slideInDown var(--td-transition-normal) var(--td-ease-out);
}
```

#### 信息反馈
```css
/* 信息反馈 */
.feedback-info {
  background: var(--td-info-500);
  color: #FFFFFF;
  padding: var(--td-spacing-3) var(--td-spacing-6);
  border-radius: var(--td-radius-md);
  box-shadow: 
    0 4px 6px rgba(59, 130, 246, 0.3),
    0 2px 4px rgba(59, 130, 246, 0.2);
  animation: slideInDown var(--td-transition-normal) var(--td-ease-out);
}
```

### 触觉反馈

#### 移动端触觉反馈
```css
/* 轻微震动 */
.haptic-light {
  animation: hapticLight 100ms ease-out;
}

@keyframes hapticLight {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.98);
  }
}

/* 中等震动 */
.haptic-medium {
  animation: hapticMedium 150ms ease-out;
}

@keyframes hapticMedium {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
}

/* 强烈震动 */
.haptic-heavy {
  animation: hapticHeavy 200ms ease-out;
}

@keyframes hapticHeavy {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
}
```

### 动效性能

#### 性能优化原则
```css
/* 使用transform和opacity */
.performance-optimized {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* 避免使用width、height、left、top */
.performance-avoid {
  /* 避免 */
  width: 100px;
  height: 100px;
  left: 0;
  top: 0;
  
  /* 推荐 */
  transform: translate(0, 0) scale(1);
}
```

#### GPU加速
```css
/* 启用GPU加速 */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}
```

### 交互与动效使用规则
1. **悬停效果**：提供清晰的悬停反馈，增强交互感知
2. **激活效果**：模拟按压效果，提供触觉反馈
3. **焦点效果**：为键盘导航用户提供明确的焦点指示
4. **动效时长**：微交互使用150ms，页面过渡使用300ms
5. **缓动函数**：默认使用ease-out，特殊场景使用弹性缓动
6. **反馈机制**：提供成功、错误、警告、信息等状态反馈
7. **触觉反馈**：移动端提供触觉反馈，增强用户体验
8. **性能优化**：使用transform和opacity，避免触发布局重排

---

## 8. 可复用 Design Token（Design Tokens）

### 颜色 Token
```css
:root {
  /* 主色 */
  --td-color-primary: #1A95FC;
  --td-color-primary-hover: #1577D9;
  --td-color-primary-active: #1159B6;
  
  /* 次色 */
  --td-color-secondary: #8B19E9;
  --td-color-secondary-hover: #6F14BB;
  --td-color-secondary-active: #530F8D;
  
  /* 辅助色 */
  --td-color-accent: #F97316;
  --td-color-accent-hover: #EA580C;
  --td-color-accent-active: #C2410C;
  
  /* 语义色 */
  --td-color-success: #10B981;
  --td-color-warning: #F59E0B;
  --td-color-error: #EF4444;
  --td-color-info: #3B82F6;
  
  /* 中性色 */
  --td-color-white: #FFFFFF;
  --td-color-black: #111827;
  --td-color-gray-100: #F3F4F6;
  --td-color-gray-200: #E5E7EB;
  --td-color-gray-300: #D1D5DB;
  --td-color-gray-400: #9CA3AF;
  --td-color-gray-500: #6B7280;
  --td-color-gray-600: #4B5563;
  --td-color-gray-700: #374151;
  --td-color-gray-800: #1F2937;
  --td-color-gray-900: #111827;
}
```

### 间距 Token
```css
:root {
  --td-spacing-0: 0;
  --td-spacing-1: 0.25rem;
  --td-spacing-2: 0.5rem;
  --td-spacing-3: 0.75rem;
  --td-spacing-4: 1rem;
  --td-spacing-5: 1.25rem;
  --td-spacing-6: 1.5rem;
  --td-spacing-8: 2rem;
  --td-spacing-10: 2.5rem;
  --td-spacing-12: 3rem;
  --td-spacing-16: 4rem;
  --td-spacing-20: 5rem;
  --td-spacing-24: 6rem;
}
```

### 圆角 Token
```css
:root {
  --td-radius-none: 0;
  --td-radius-sm: 0.25rem;
  --td-radius-md: 0.5rem;
  --td-radius-lg: 0.75rem;
  --td-radius-xl: 1rem;
  --td-radius-2xl: 1.5rem;
  --td-radius-full: 9999px;
}
```

### 阴影 Token
```css
:root {
  --td-shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --td-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --td-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  --td-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  --td-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
  --td-shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
  --td-shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.06);
}
```

### 字体 Token
```css
:root {
  /* 字体大小 */
  --td-font-size-xs: 0.75rem;
  --td-font-size-sm: 0.875rem;
  --td-font-size-base: 1rem;
  --td-font-size-lg: 1.125rem;
  --td-font-size-xl: 1.25rem;
  --td-font-size-2xl: 1.5rem;
  --td-font-size-3xl: 1.875rem;
  --td-font-size-4xl: 2.25rem;
  --td-font-size-5xl: 3rem;
  
  /* 字重 */
  --td-font-weight-light: 300;
  --td-font-weight-regular: 400;
  --td-font-weight-medium: 500;
  --td-font-weight-semibold: 600;
  --td-font-weight-bold: 700;
  --td-font-weight-extrabold: 800;
  
  /* 行高 */
  --td-line-height-none: 1;
  --td-line-height-tight: 1.25;
  --td-line-height-snug: 1.375;
  --td-line-height-normal: 1.5;
  --td-line-height-relaxed: 1.625;
  --td-line-height-loose: 2;
}
```

### 过渡 Token
```css
:root {
  /* 过渡时长 */
  --td-transition-instant: 50ms;
  --td-transition-fast: 150ms;
  --td-transition-normal: 300ms;
  --td-transition-slow: 500ms;
  --td-transition-slower: 750ms;
  
  /* 缓动函数 */
  --td-ease-linear: linear;
  --td-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --td-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --td-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --td-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --td-ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
```

### 3D Token
```css
:root {
  /* 3D透视 */
  --td-perspective-sm: 500px;
  --td-perspective-md: 1000px;
  --td-perspective-lg: 2000px;
  --td-perspective-xl: 3000px;
  
  /* 3D深度 */
  --td-depth-xs: 10px;
  --td-depth-sm: 20px;
  --td-depth-md: 40px;
  --td-depth-lg: 60px;
  --td-depth-xl: 80px;
  
  /* 3D缩放 */
  --td-scale-sm: 0.95;
  --td-scale-md: 1;
  --td-scale-lg: 1.05;
}
```

### 渐变 Token
```css
:root {
  /* 主色渐变 */
  --td-gradient-primary: linear-gradient(135deg, #1A95FC 0%, #8B19E9 100%);
  --td-gradient-primary-hover: linear-gradient(135deg, #1577D9 0%, #6F14BB 100%);
  --td-gradient-primary-active: linear-gradient(135deg, #1159B6 0%, #530F8D 100%);
  
  /* 次色渐变 */
  --td-gradient-secondary: linear-gradient(135deg, #8B19E9 0%, #F97316 100%);
  --td-gradient-secondary-hover: linear-gradient(135deg, #6F14BB 0%, #EA580C 100%);
  --td-gradient-secondary-active: linear-gradient(135deg, #530F8D 0%, #C2410C 100%);
  
  /* 玻璃渐变 */
  --td-gradient-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
}
```

### Token 使用规则
1. **颜色 Token**：使用语义化的颜色名称，便于理解和维护
2. **间距 Token**：所有间距使用统一的间距系统
3. **圆角 Token**：使用一致的圆角规范
4. **阴影 Token**：使用预定义的阴影层级
5. **字体 Token**：使用统一的字体规范
6. **过渡 Token**：使用一致的动效时长和缓动函数
7. **3D Token**：使用统一的3D变换参数
8. **渐变 Token**：使用预定义的渐变样式

---

## 9. 合法复刻建议（Legal Replication Advice）

### 可以学习的元素（规则与风格）

#### 设计原则
1. **立体感设计**：学习如何通过阴影、光影、透视创造深度感
2. **材质表现**：学习如何模拟玻璃、金属、木材等材质的视觉效果
3. **空间布局**：学习如何利用三维空间关系组织信息
4. **动态交互**：学习如何通过变换和动画增强交互体验
5. **沉浸式体验**：学习如何营造身临其境的视觉体验

#### 技术实现
1. **CSS 3D变换**：学习使用transform、perspective、transform-style等属性
2. **阴影系统**：学习使用多层阴影创造深度感
3. **渐变应用**：学习使用渐变增强视觉效果
4. **动效设计**：学习使用CSS动画和过渡效果
5. **性能优化**：学习使用GPU加速和will-change优化性能

#### 组件设计
1. **按钮设计**：学习如何设计具有立体感的按钮
2. **卡片设计**：学习如何设计具有深度感的卡片
3. **输入框设计**：学习如何设计具有3D效果的输入框
4. **导航设计**：学习如何设计具有空间感的导航
5. **徽章设计**：学习如何设计具有立体感的徽章

### 不应复刻的元素（品牌与内容）

#### 品牌元素
1. **品牌颜色**：不要直接复制品牌的主色、次色、辅助色
2. **品牌字体**：不要直接使用品牌的定制字体
3. **品牌Logo**：不要直接复制或模仿品牌Logo
4. **品牌名称**：不要使用品牌名称或相似名称
5. **品牌口号**：不要使用品牌口号或相似口号

#### 内容元素
1. **具体内容**：不要复制网站的具体文字内容
2. **图片素材**：不要使用网站的图片、插画、图标
3. **产品信息**：不要复制产品描述、功能介绍
4. **用户数据**：不要使用用户评论、评分、数据
5. **营销文案**：不要复制营销文案、广告语

#### 设计元素
1. **特定插画**：不要直接复制网站的插画作品
2. **定制图标**：不要直接使用网站的定制图标
3. **特殊纹理**：不要直接复制网站的纹理素材
4. **独特图案**：不要直接复制网站的图案设计
5. **原创图形**：不要直接使用网站的原创图形

### 合法复刻的最佳实践

#### 学习与借鉴
1. **分析设计思路**：理解设计背后的逻辑和原理
2. **提取设计模式**：总结可复用的设计模式
3. **抽象设计规则**：将具体设计抽象为通用规则
4. **应用设计原则**：在自己的产品中应用设计原则
5. **创新设计表达**：在理解基础上进行创新

#### 技术实现
1. **使用开源资源**：使用开源的图标库、字体库
2. **自己创作素材**：自己创作插画、图标、纹理
3. **使用通用素材**：使用通用的图片、图标、插画
4. **遵循设计规范**：遵循WCAG、Material Design等设计规范
5. **尊重知识产权**：尊重他人的知识产权和版权

#### 品牌建设
1. **建立独特风格**：建立自己产品的独特设计风格
2. **定义品牌色**：定义符合品牌定位的颜色系统
3. **选择品牌字体**：选择符合品牌气质的字体
4. **设计品牌元素**：设计符合品牌识别度的元素
5. **保持一致性**：保持设计风格的一致性

### 法律风险提示

#### 版权风险
1. **版权保护**：原创设计受版权法保护
2. **侵权风险**：直接复制可能构成侵权
3. **合理使用**：合理使用范围有限
4. **许可使用**：使用前需要获得许可
5. **法律后果**：侵权可能面临法律后果

#### 商标风险
1. **商标保护**：品牌名称、Logo受商标法保护
2. **混淆风险**：相似设计可能造成混淆
3. **不正当竞争**：模仿可能构成不正当竞争
4. **法律后果**：侵权可能面临法律后果
5. **赔偿风险**：可能需要承担赔偿责任

#### 建议措施
1. **咨询律师**：重要项目咨询专业律师
2. **获取许可**：使用前获取必要许可
3. **保留证据**：保留创作过程和设计文档
4. **购买保险**：购买相关保险降低风险
5. **遵守法律**：严格遵守相关法律法规

### 总结

3D设计风格通过模拟真实世界的物理属性和空间关系，为用户提供更加直观和沉浸的交互体验。在学习和借鉴这种设计风格时，我们应该：

1. **学习设计原则**：理解3D设计的基本原则和原理
2. **掌握技术实现**：掌握CSS 3D变换、阴影系统等技术
3. **应用设计模式**：在自己的产品中应用可复用的设计模式
4. **尊重知识产权**：尊重他人的知识产权和版权
5. **建立独特风格**：建立自己产品的独特设计风格

通过合法的学习和借鉴，我们可以在不侵犯他人权益的前提下，创造出优秀的3D设计作品。