# 微交互设计系统

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **即时反馈（Immediate Feedback）**：为用户操作提供即时的视觉反馈
- **流畅过渡（Smooth Transitions）**：使用流畅的动画过渡增强体验
- **微妙细节（Subtle Details）**：通过微小的细节提升用户体验
- **情感连接（Emotional Connection）**：通过微交互建立情感连接
- **自然直觉（Natural Intuition）**：符合用户直觉的交互方式

### 适用产品类型
- **社交应用**：社交媒体、聊天应用、社区平台
- **内容平台**：视频平台、音乐平台、阅读应用
- **工具应用**：生产力工具、协作工具、管理工具
- **电商应用**：购物平台、支付应用、订单管理
- **游戏应用**：休闲游戏、益智游戏、互动应用

### 设计哲学
微交互设计风格关注用户与界面之间的每一个微小交互，通过精心设计的动画、过渡和反馈，创造出流畅、自然、愉悦的用户体验。它不仅仅是视觉装饰，更是功能性的增强，帮助用户理解界面状态、操作结果和系统反馈。

### 视觉特征
- **流畅动画**：平滑的过渡动画，无卡顿感
- **即时反馈**：操作后立即提供视觉反馈
- **微妙变化**：细微的颜色、大小、位置变化
- **自然动效**：符合物理规律的动画效果
- **情感化设计**：通过动效传达情感和状态

---

## 2. 颜色系统（Color System）

### 主色系
```css
/* 主色 - 活力蓝 */
--mi-primary-50: #E0F2FE;
--mi-primary-100: #BAE6FD;
--mi-primary-200: #7DD3FC;
--mi-primary-300: #38BDF8;
--mi-primary-400: #0EA5E9;
--mi-primary-500: #0284C7;
--mi-primary-600: #0369A1;
--mi-primary-700: #075985;
--mi-primary-800: #0C4A6E;
--mi-primary-900: #082F49;

/* 主色使用场景 */
--mi-primary-main: var(--mi-primary-500); /* 主要操作、重要按钮 */
--mi-primary-hover: var(--mi-primary-600); /* 悬停状态 */
--mi-primary-active: var(--mi-primary-700); /* 激活状态 */
```

### 次色系
```css
/* 次色 - 活力紫 */
--mi-secondary-50: #F3E8FF;
--mi-secondary-100: #E9D5FF;
--mi-secondary-200: #D8B4FE;
--mi-secondary-300: #C084FC;
--mi-secondary-400: #A855F7;
--mi-secondary-500: #9333EA;
--mi-secondary-600: #7E22CE;
--mi-secondary-700: #6B21A8;
--mi-secondary-800: #581C87;
--mi-secondary-900: #3B0764;

/* 次色使用场景 */
--mi-secondary-main: var(--mi-secondary-500); /* 辅助元素、次要操作 */
--mi-secondary-hover: var(--mi-secondary-600);
--mi-secondary-active: var(--mi-secondary-700);
```

### 辅助色系
```css
/* 辅助色 - 活力粉 */
--mi-accent-50: #FDF2F8;
--mi-accent-100: #FCE7F3;
--mi-accent-200: #FBCFE8;
--mi-accent-300: #F9A8D4;
--mi-accent-400: #F472B6;
--mi-accent-500: #EC4899;
--mi-accent-600: #DB2777;
--mi-accent-700: #BE185D;
--mi-accent-800: #9D174D;
--mi-accent-900: #831843;

/* 辅助色使用场景 */
--mi-accent-main: var(--mi-accent-500); /* 强调元素、通知标记 */
--mi-accent-hover: var(--mi-accent-600);
--mi-accent-active: var(--mi-accent-700);
```

### 中性色系
```css
/* 浅色主题中性色 */
--mi-gray-50: #FAFAFA;
--mi-gray-100: #F4F4F5;
--mi-gray-200: #E4E4E7;
--mi-gray-300: #D4D4D8;
--mi-gray-400: #A1A1AA;
--mi-gray-500: #71717A;
--mi-gray-600: #52525B;
--mi-gray-700: #3F3F46;
--mi-gray-800: #27272A;
--mi-gray-900: #18181B;

/* 深色主题中性色 */
--mi-gray-dark-50: #18181B;
--mi-gray-dark-100: #27272A;
--mi-gray-dark-200: #3F3F46;
--mi-gray-dark-300: #52525B;
--mi-gray-dark-400: #71717A;
--mi-gray-dark-500: #A1A1AA;
--mi-gray-dark-600: #D4D4D8;
--mi-gray-dark-700: #E4E4E7;
--mi-gray-dark-800: #F4F4F5;
--mi-gray-dark-900: #FAFAFA;
```

### 语义色系
```css
/* 成功色 */
--mi-success-50: #F0FDF4;
--mi-success-100: #DCFCE7;
--mi-success-200: #BBF7D0;
--mi-success-300: #86EFAC;
--mi-success-400: #4ADE80;
--mi-success-500: #22C55E;
--mi-success-600: #16A34A;
--mi-success-700: #15803D;
--mi-success-800: #166534;
--mi-success-900: #14532D;

/* 警告色 */
--mi-warning-50: #FFFBEB;
--mi-warning-100: #FEF3C7;
--mi-warning-200: #FDE68A;
--mi-warning-300: #FCD34D;
--mi-warning-400: #FBBF24;
--mi-warning-500: #F59E0B;
--mi-warning-600: #D97706;
--mi-warning-700: #B45309;
--mi-warning-800: #92400E;
--mi-warning-900: #78350F;

/* 错误色 */
--mi-error-50: #FEF2F2;
--mi-error-100: #FEE2E2;
--mi-error-200: #FECACA;
--mi-error-300: #FCA5A5;
--mi-error-400: #F87171;
--mi-error-500: #EF4444;
--mi-error-600: #DC2626;
--mi-error-700: #B91C1C;
--mi-error-800: #991B1B;
--mi-error-900: #7F1D1D;

/* 信息色 */
--mi-info-50: #EFF6FF;
--mi-info-100: #DBEAFE;
--mi-info-200: #BFDBFE;
--mi-info-300: #93C5FD;
--mi-info-400: #60A5FA;
--mi-info-500: #3B82F6;
--mi-info-600: #2563EB;
--mi-info-700: #1D4ED8;
--mi-info-800: #1E40AF;
--mi-info-900: #1E3A8A;
```

### 渐变色系
```css
/* 主色渐变 */
--mi-gradient-primary: linear-gradient(135deg, #0284C7 0%, #9333EA 100%);
--mi-gradient-primary-hover: linear-gradient(135deg, #0369A1 0%, #7E22CE 100%);
--mi-gradient-primary-active: linear-gradient(135deg, #075985 0%, #6B21A8 100%);

/* 次色渐变 */
--mi-gradient-secondary: linear-gradient(135deg, #9333EA 0%, #EC4899 100%);
--mi-gradient-secondary-hover: linear-gradient(135deg, #7E22CE 0%, #DB2777 100%);
--mi-gradient-secondary-active: linear-gradient(135deg, #6B21A8 0%, #BE185D 100%);

/* 辅助渐变 */
--mi-gradient-accent: linear-gradient(135deg, #EC4899 0%, #22C55E 100%);
--mi-gradient-accent-hover: linear-gradient(135deg, #DB2777 0%, #16A34A 100%);
--mi-gradient-accent-active: linear-gradient(135deg, #BE185D 0%, #15803D 100%);

/* 成功渐变 */
--mi-gradient-success: linear-gradient(135deg, #22C55E 0%, #16A34A 100%);

/* 警告渐变 */
--mi-gradient-warning: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);

/* 错误渐变 */
--mi-gradient-error: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
```

### 阴影色系
```css
/* 浅色阴影 */
--mi-shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--mi-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
--mi-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
--mi-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
--mi-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
--mi-shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);

/* 深色阴影 */
--mi-shadow-dark-xs: 0 1px 2px rgba(0, 0, 0, 0.3);
--mi-shadow-dark-sm: 0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3);
--mi-shadow-dark-md: 0 4px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3);
--mi-shadow-dark-lg: 0 10px 15px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.3);
--mi-shadow-dark-xl: 0 20px 25px rgba(0, 0, 0, 0.4), 0 10px 10px rgba(0, 0, 0, 0.3);
--mi-shadow-dark-2xl: 0 25px 50px rgba(0, 0, 0, 0.5);

/* 内阴影 */
--mi-shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.06);
--mi-shadow-inner-lg: inset 0 4px 8px rgba(0, 0, 0, 0.1);
```

### 颜色使用规则
1. **主色使用**：用于主要操作按钮、重要导航、关键信息强调
2. **次色使用**：用于辅助元素、次要操作、装饰性元素
3. **辅助色使用**：用于强调元素、通知标记、特殊状态
4. **中性色使用**：用于背景、文字、边框、分割线
5. **语义色使用**：用于状态指示（成功、警告、错误、信息）
6. **渐变色使用**：用于按钮、卡片、背景等需要层次感的元素
7. **阴影色使用**：用于创造深度感和立体感
8. **颜色过渡**：使用平滑的颜色过渡，避免突兀的颜色变化

---

## 3. 字体与排版（Typography）

### 字体家族
```css
/* 主字体 - 系统字体栈 */
--mi-font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

/* 备用字体 - 中文 */
--mi-font-family-chinese: "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;

/* 等宽字体 - 代码 */
--mi-font-family-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;

/* 衬线字体 - 标题 */
--mi-font-family-serif: Georgia, "Times New Roman", Times, serif;
```

### 字体大小
```css
/* 标题层级 */
--mi-font-size-h1: 2.5rem; /* 40px */
--mi-font-size-h2: 2rem; /* 32px */
--mi-font-size-h3: 1.5rem; /* 24px */
--mi-font-size-h4: 1.25rem; /* 20px */
--mi-font-size-h5: 1.125rem; /* 18px */
--mi-font-size-h6: 1rem; /* 16px */

/* 正文层级 */
--mi-font-size-body-large: 1.125rem; /* 18px */
--mi-font-size-body: 1rem; /* 16px */
--mi-font-size-body-small: 0.875rem; /* 14px */

/* 辅助层级 */
--mi-font-size-caption: 0.75rem; /* 12px */
--mi-font-size-tiny: 0.625rem; /* 10px */
```

### 字重
```css
/* 字重层级 */
--mi-font-weight-light: 300;
--mi-font-weight-regular: 400;
--mi-font-weight-medium: 500;
--mi-font-weight-semibold: 600;
--mi-font-weight-bold: 700;
--mi-font-weight-extrabold: 800;
```

### 行高
```css
/* 行高层级 */
--mi-line-height-tight: 1.25;
--mi-line-height-normal: 1.5;
--mi-line-height-relaxed: 1.75;
--mi-line-height-loose: 2;
```

### 字间距
```css
/* 字间距层级 */
--mi-letter-spacing-tight: -0.025em;
--mi-letter-spacing-normal: 0;
--mi-letter-spacing-wide: 0.025em;
--mi-letter-spacing-wider: 0.05em;
--mi-letter-spacing-widest: 0.1em;
```

### 排版规则
```css
/* 标题排版 */
--mi-h1: {
  font-size: var(--mi-font-size-h1);
  font-weight: var(--mi-font-weight-bold);
  line-height: var(--mi-line-height-tight);
  letter-spacing: var(--mi-letter-spacing-tight);
}

--mi-h2: {
  font-size: var(--mi-font-size-h2);
  font-weight: var(--mi-font-weight-semibold);
  line-height: var(--mi-line-height-tight);
  letter-spacing: var(--mi-letter-spacing-tight);
}

--mi-h3: {
  font-size: var(--mi-font-size-h3);
  font-weight: var(--mi-font-weight-semibold);
  line-height: var(--mi-line-height-normal);
  letter-spacing: var(--mi-letter-spacing-normal);
}

--mi-h4: {
  font-size: var(--mi-font-size-h4);
  font-weight: var(--mi-font-weight-medium);
  line-height: var(--mi-line-height-normal);
  letter-spacing: var(--mi-letter-spacing-normal);
}

--mi-h5: {
  font-size: var(--mi-font-size-h5);
  font-weight: var(--mi-font-weight-medium);
  line-height: var(--mi-line-height-normal);
  letter-spacing: var(--mi-letter-spacing-normal);
}

--mi-h6: {
  font-size: var(--mi-font-size-h6);
  font-weight: var(--mi-font-weight-semibold);
  line-height: var(--mi-line-height-normal);
  letter-spacing: var(--mi-letter-spacing-wide);
}

/* 正文排版 */
--mi-body-large: {
  font-size: var(--mi-font-size-body-large);
  font-weight: var(--mi-font-weight-regular);
  line-height: var(--mi-line-height-normal);
  letter-spacing: var(--mi-letter-spacing-normal);
}

--mi-body: {
  font-size: var(--mi-font-size-body);
  font-weight: var(--mi-font-weight-regular);
  line-height: var(--mi-line-height-normal);
  letter-spacing: var(--mi-letter-spacing-normal);
}

--mi-body-small: {
  font-size: var(--mi-font-size-body-small);
  font-weight: var(--mi-font-weight-regular);
  line-height: var(--mi-line-height-normal);
  letter-spacing: var(--mi-letter-spacing-normal);
}

/* 辅助排版 */
--mi-caption: {
  font-size: var(--mi-font-size-caption);
  font-weight: var(--mi-font-weight-regular);
  line-height: var(--mi-line-height-relaxed);
  letter-spacing: var(--mi-letter-spacing-wide);
}

--mi-tiny: {
  font-size: var(--mi-font-size-tiny);
  font-weight: var(--mi-font-weight-medium);
  line-height: var(--mi-line-height-loose);
  letter-spacing: var(--mi-letter-spacing-wider);
}
```

### 响应式字体
```css
/* 移动端字体调整 */
@media (max-width: 640px) {
  --mi-font-size-h1: 1.75rem; /* 28px */
  --mi-font-size-h2: 1.5rem; /* 24px */
  --mi-font-size-h3: 1.25rem; /* 20px */
  --mi-font-size-h4: 1.125rem; /* 18px */
  --mi-font-size-h5: 1rem; /* 16px */
  --mi-font-size-h6: 0.875rem; /* 14px */
}

/* 平板端字体调整 */
@media (min-width: 641px) and (max-width: 1024px) {
  --mi-font-size-h1: 2rem; /* 32px */
  --mi-font-size-h2: 1.75rem; /* 28px */
  --mi-font-size-h3: 1.375rem; /* 22px */
  --mi-font-size-h4: 1.1875rem; /* 19px */
  --mi-font-size-h5: 1.0625rem; /* 17px */
  --mi-font-size-h6: 0.9375rem; /* 15px */
}

/* 桌面端字体调整 */
@media (min-width: 1025px) {
  --mi-font-size-h1: 2.5rem; /* 40px */
  --mi-font-size-h2: 2rem; /* 32px */
  --mi-font-size-h3: 1.5rem; /* 24px */
  --mi-font-size-h4: 1.25rem; /* 20px */
  --mi-font-size-h5: 1.125rem; /* 18px */
  --mi-font-size-h6: 1rem; /* 16px */
}
```

### 字体使用规则
1. **标题层级**：H1用于页面主标题，H2用于章节标题，H3用于子章节标题
2. **正文规范**：正文使用Regular字重，重要内容使用Medium字重
3. **强调文字**：使用SemiBold或Bold字重强调关键信息
4. **系统字体**：优先使用系统字体，提高加载性能
5. **响应式字体**：根据屏幕大小调整字体大小
6. **字间距**：标题使用较紧的字间距，正文使用正常字间距
7. **行高**：标题使用较紧的行高，正文使用正常的行高
8. **字体动画**：使用平滑的字体过渡动画，避免突兀的变化

---

## 4. 布局与栅格系统（Layout & Grid）

### 版心宽度
```css
/* 版心宽度 */
--mi-container-sm: 640px;
--mi-container-md: 768px;
--mi-container-lg: 1024px;
--mi-container-xl: 1280px;
--mi-container-2xl: 1536px;

/* 默认版心宽度 */
--mi-container-default: var(--mi-container-xl);
```

### 栅格系统
```css
/* 栅格列数 */
--mi-grid-columns: 12;

/* 栅格间距 */
--mi-grid-gap-xs: 0.5rem; /* 8px */
--mi-grid-gap-sm: 1rem; /* 16px */
--mi-grid-gap-md: 1.5rem; /* 24px */
--mi-grid-gap-lg: 2rem; /* 32px */
--mi-grid-gap-xl: 3rem; /* 48px */

/* 默认栅格间距 */
--mi-grid-gap-default: var(--mi-grid-gap-md);

/* 栅格边距 */
--mi-grid-margin-xs: 1rem; /* 16px */
--mi-grid-margin-sm: 1.5rem; /* 24px */
--mi-grid-margin-md: 2rem; /* 32px */
--mi-grid-margin-lg: 3rem; /* 48px */
--mi-grid-margin-xl: 4rem; /* 64px */

/* 默认栅格边距 */
--mi-grid-margin-default: var(--mi-grid-margin-md);
```

### 响应式断点
```css
/* 断点定义 */
--mi-breakpoint-xs: 0;
--mi-breakpoint-sm: 640px;
--mi-breakpoint-md: 768px;
--mi-breakpoint-lg: 1024px;
--mi-breakpoint-xl: 1280px;
--mi-breakpoint-2xl: 1536px;

/* 断点媒体查询 */
@media (min-width: var(--mi-breakpoint-sm)) { /* 小屏及以上 */ }
@media (min-width: var(--mi-breakpoint-md)) { /* 中屏及以上 */ }
@media (min-width: var(--mi-breakpoint-lg)) { /* 大屏及以上 */ }
@media (min-width: var(--mi-breakpoint-xl)) { /* 超大屏及以上 */ }
@media (min-width: var(--mi-breakpoint-2xl)) { /* 特大屏及以上 */ }
```

### 间距系统
```css
/* 间距层级 */
--mi-spacing-0: 0;
--mi-spacing-px: 1px;
--mi-spacing-0_5: 0.125rem; /* 2px */
--mi-spacing-1: 0.25rem; /* 4px */
--mi-spacing-1_5: 0.375rem; /* 6px */
--mi-spacing-2: 0.5rem; /* 8px */
--mi-spacing-2_5: 0.625rem; /* 10px */
--mi-spacing-3: 0.75rem; /* 12px */
--mi-spacing-3_5: 0.875rem; /* 14px */
--mi-spacing-4: 1rem; /* 16px */
--mi-spacing-5: 1.25rem; /* 20px */
--mi-spacing-6: 1.5rem; /* 24px */
--mi-spacing-7: 1.75rem; /* 28px */
--mi-spacing-8: 2rem; /* 32px */
--mi-spacing-9: 2.25rem; /* 36px */
--mi-spacing-10: 2.5rem; /* 40px */
--mi-spacing-11: 2.75rem; /* 44px */
--mi-spacing-12: 3rem; /* 48px */
--mi-spacing-14: 3.5rem; /* 56px */
--mi-spacing-16: 4rem; /* 64px */
--mi-spacing-20: 5rem; /* 80px */
--mi-spacing-24: 6rem; /* 96px */
```

### 布局模式
```css
/* 固定布局 */
.mi-layout-fixed {
  width: var(--mi-container-default);
  margin: 0 auto;
}

/* 流式布局 */
.mi-layout-fluid {
  width: 100%;
  max-width: var(--mi-container-default);
  margin: 0 auto;
}

/* 弹性布局 */
.mi-layout-flex {
  display: flex;
  gap: var(--mi-grid-gap-default);
}

/* 网格布局 */
.mi-layout-grid {
  display: grid;
  grid-template-columns: repeat(var(--mi-grid-columns), 1fr);
  gap: var(--mi-grid-gap-default);
}
```

### 信息密度
```css
/* 高密度布局 */
.mi-density-high {
  --mi-grid-gap: var(--mi-grid-gap-xs);
  --mi-spacing-4: var(--mi-spacing-2);
}

/* 中密度布局 */
.mi-density-medium {
  --mi-grid-gap: var(--mi-grid-gap-sm);
  --mi-spacing-4: var(--mi-spacing-4);
}

/* 低密度布局 */
.mi-density-low {
  --mi-grid-gap: var(--mi-grid-gap-lg);
  --mi-spacing-4: var(--mi-spacing-6);
}
```

### 布局规则
1. **版心宽度**：桌面端使用1280px版心，移动端使用流式布局
2. **栅格系统**：使用12列栅格系统，支持灵活的列数组合
3. **间距规则**：所有间距基于4px的倍数，保持一致性
4. **响应式设计**：使用移动优先策略，从小屏幕逐步增强
5. **信息密度**：根据内容类型和用户需求选择合适的密度
6. **留白原则**：保持足够的留白，避免拥挤感
7. **对齐方式**：使用统一的对齐方式，保持视觉一致性
8. **布局过渡**：使用平滑的布局过渡动画

---

## 5. 核心 UI 组件规范（Component System）

### 按钮（Button）

#### 组件概述
- 组件名称：微交互按钮（Micro-Interaction Button）
- 组件描述：具有丰富微交互效果的按钮组件
- 适用场景：主要操作、次要操作、文字按钮、图标按钮

#### 组件变体
##### 主按钮（Primary）
```css
.btn-mi-primary {
  /* 基础样式 */
  background: var(--mi-gradient-primary);
  color: #FFFFFF;
  border: none;
  border-radius: var(--mi-radius-md);
  padding: var(--mi-spacing-3) var(--mi-spacing-6);
  font-size: var(--mi-font-size-body);
  font-weight: var(--mi-font-weight-semibold);
  cursor: pointer;
  transition: all var(--mi-transition-fast) var(--mi-ease-out);
  position: relative;
  overflow: hidden;
}

/* 悬停状态 */
.btn-mi-primary:hover {
  background: var(--mi-gradient-primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--mi-shadow-lg);
}

/* 激活状态 */
.btn-mi-primary:active {
  background: var(--mi-gradient-primary-active);
  transform: translateY(0) scale(0.98);
  box-shadow: var(--mi-shadow-md);
}

/* 点击波纹效果 */
.btn-mi-primary::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease-out, height 0.6s ease-out;
}

.btn-mi-primary:active::after {
  width: 300px;
  height: 300px;
}
```

##### 次按钮（Secondary）
```css
.btn-mi-secondary {
  /* 基础样式 */
  background: var(--mi-gray-100);
  color: var(--mi-gray-900);
  border: 2px solid var(--mi-gray-200);
  border-radius: var(--mi-radius-md);
  padding: var(--mi-spacing-3) var(--mi-spacing-6);
  font-size: var(--mi-font-size-body);
  font-weight: var(--mi-font-weight-semibold);
  cursor: pointer;
  transition: all var(--mi-transition-fast) var(--mi-ease-out);
  position: relative;
  overflow: hidden;
}

/* 悬停状态 */
.btn-mi-secondary:hover {
  background: var(--mi-gray-200);
  border-color: var(--mi-gray-300);
  transform: translateY(-2px);
  box-shadow: var(--mi-shadow-md);
}

/* 激活状态 */
.btn-mi-secondary:active {
  background: var(--mi-gray-300);
  border-color: var(--mi-gray-400);
  transform: translateY(0) scale(0.98);
  box-shadow: var(--mi-shadow-sm);
}
```

##### 文字按钮（Text）
```css
.btn-mi-text {
  /* 基础样式 */
  background: transparent;
  color: var(--mi-primary-500);
  border: none;
  border-radius: var(--mi-radius-sm);
  padding: var(--mi-spacing-2) var(--mi-spacing-4);
  font-size: var(--mi-font-size-body);
  font-weight: var(--mi-font-weight-medium);
  cursor: pointer;
  transition: all var(--mi-transition-fast) var(--mi-ease-out);
  position: relative;
}

/* 悬停状态 */
.btn-mi-text:hover {
  background: rgba(2, 132, 199, 0.1);
  transform: translateY(-1px);
}

/* 激活状态 */
.btn-mi-text:active {
  background: rgba(2, 132, 199, 0.2);
  transform: translateY(0) scale(0.98);
}

/* 下划线动画 */
.btn-mi-text::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--mi-primary-500);
  transition: width var(--mi-transition-normal) var(--mi-ease-out);
}

.btn-mi-text:hover::before {
  width: 100%;
}
```

#### 组件尺寸
```css
/* 小号按钮 */
.btn-mi-small {
  padding: var(--mi-spacing-2) var(--mi-spacing-4);
  font-size: var(--mi-font-size-body-small);
  border-radius: var(--mi-radius-sm);
}

/* 中号按钮 */
.btn-mi-medium {
  padding: var(--mi-spacing-3) var(--mi-spacing-6);
  font-size: var(--mi-font-size-body);
  border-radius: var(--mi-radius-md);
}

/* 大号按钮 */
.btn-mi-large {
  padding: var(--mi-spacing-4) var(--mi-spacing-8);
  font-size: var(--mi-font-size-body-large);
  border-radius: var(--mi-radius-lg);
}
```

#### 组件API
```typescript
interface ButtonMIProps {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  ripple?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
```

### 卡片（Card）

#### 组件概述
- 组件名称：微交互卡片（Micro-Interaction Card）
- 组件描述：具有丰富微交互效果的卡片组件
- 适用场景：信息展示、数据展示、内容分组

#### 组件变体
##### 基础卡片（Basic）
```css
.card-mi-basic {
  /* 基础样式 */
  background: var(--mi-gray-50);
  border-radius: var(--mi-radius-lg);
  padding: var(--mi-spacing-6);
  position: relative;
  transition: all var(--mi-transition-normal) var(--mi-ease-out);
  cursor: pointer;
  overflow: hidden;
}

/* 悬停状态 */
.card-mi-basic:hover {
  background: var(--mi-gray-100);
  transform: translateY(-4px);
  box-shadow: var(--mi-shadow-xl);
}

/* 悬停光效 */
.card-mi-basic::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity var(--mi-transition-normal) var(--mi-ease-out);
  pointer-events: none;
}

.card-mi-basic:hover::before {
  opacity: 1;
}
```

##### 悬浮卡片（Hover）
```css
.card-mi-hover {
  /* 基础样式 */
  background: var(--mi-gray-50);
  border-radius: var(--mi-radius-lg);
  padding: var(--mi-spacing-6);
  position: relative;
  transition: all var(--mi-transition-normal) var(--mi-ease-out);
  cursor: pointer;
  overflow: hidden;
  border: 1px solid transparent;
}

/* 悬停状态 */
.card-mi-hover:hover {
  background: #FFFFFF;
  border-color: var(--mi-primary-200);
  transform: translateY(-6px) scale(1.02);
  box-shadow: var(--mi-shadow-2xl);
}

/* 悬停边框动画 */
.card-mi-hover::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: var(--mi-radius-lg);
  border: 2px solid var(--mi-primary-500);
  opacity: 0;
  transform: scale(0.95);
  transition: all var(--mi-transition-normal) var(--mi-ease-out);
  pointer-events: none;
}

.card-mi-hover:hover::after {
  opacity: 1;
  transform: scale(1);
}
```

#### 组件尺寸
```css
/* 小号卡片 */
.card-mi-small {
  padding: var(--mi-spacing-4);
  border-radius: var(--mi-radius-md);
}

/* 中号卡片 */
.card-mi-medium {
  padding: var(--mi-spacing-6);
  border-radius: var(--mi-radius-lg);
}

/* 大号卡片 */
.card-mi-large {
  padding: var(--mi-spacing-8);
  border-radius: var(--mi-radius-xl);
}
```

#### 组件API
```typescript
interface CardMIProps {
  variant?: 'basic' | 'hover';
  size?: 'small' | 'medium' | 'large';
  hoverable?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
```

### 输入框（Input）

#### 组件概述
- 组件名称：微交互输入框（Micro-Interaction Input）
- 组件描述：具有丰富微交互效果的输入框组件
- 适用场景：表单输入、搜索框、文本编辑

#### 组件变体
##### 基础输入框（Basic）
```css
.input-mi-basic {
  /* 基础样式 */
  background: var(--mi-gray-50);
  color: var(--mi-gray-900);
  border: 2px solid var(--mi-gray-200);
  border-radius: var(--mi-radius-md);
  padding: var(--mi-spacing-3) var(--mi-spacing-4);
  font-size: var(--mi-font-size-body);
  transition: all var(--mi-transition-fast) var(--mi-ease-out);
  outline: none;
  position: relative;
}

/* 悬停状态 */
.input-mi-basic:hover {
  border-color: var(--mi-gray-300);
  background: var(--mi-gray-100);
}

/* 焦点状态 */
.input-mi-basic:focus {
  border-color: var(--mi-primary-500);
  background: #FFFFFF;
  box-shadow: 
    0 0 0 3px rgba(2, 132, 199, 0.1),
    0 4px 6px rgba(2, 132, 199, 0.1);
}

/* 焦点动画 */
.input-mi-basic:focus::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--mi-primary-500);
  transition: width var(--mi-transition-normal) var(--mi-ease-out);
}

.input-mi-basic:focus::before {
  width: 100%;
}

/* 错误状态 */
.input-mi-basic.error {
  border-color: var(--mi-error-500);
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

/* 禁用状态 */
.input-mi-basic:disabled {
  background: var(--mi-gray-100);
  color: var(--mi-gray-400);
  border-color: var(--mi-gray-200);
  cursor: not-allowed;
}
```

##### 搜索输入框（Search）
```css
.input-mi-search {
  /* 基础样式 */
  background: var(--mi-gray-50);
  color: var(--mi-gray-900);
  border: 2px solid var(--mi-gray-200);
  border-radius: 9999px;
  padding: var(--mi-spacing-3) var(--mi-spacing-4) var(--mi-spacing-3) var(--mi-spacing-12);
  font-size: var(--mi-font-size-body);
  transition: all var(--mi-transition-normal) var(--mi-ease-out);
  outline: none;
  position: relative;
  width: 200px;
}

/* 悬停状态 */
.input-mi-search:hover {
  border-color: var(--mi-gray-300);
  width: 250px;
}

/* 焦点状态 */
.input-mi-search:focus {
  border-color: var(--mi-primary-500);
  background: #FFFFFF;
  width: 300px;
  box-shadow: 
    0 0 0 3px rgba(2, 132, 199, 0.1),
    0 4px 12px rgba(2, 132, 199, 0.15);
}

/* 搜索图标动画 */
.input-mi-search + .search-icon {
  transition: all var(--mi-transition-normal) var(--mi-ease-out);
}

.input-mi-search:focus + .search-icon {
  color: var(--mi-primary-500);
  transform: scale(1.1);
}
```

#### 组件尺寸
```css
/* 小号输入框 */
.input-mi-small {
  padding: var(--mi-spacing-2) var(--mi-spacing-3);
  font-size: var(--mi-font-size-body-small);
  border-radius: var(--mi-radius-sm);
}

/* 中号输入框 */
.input-mi-medium {
  padding: var(--mi-spacing-3) var(--mi-spacing-4);
  font-size: var(--mi-font-size-body);
  border-radius: var(--mi-radius-md);
}

/* 大号输入框 */
.input-mi-large {
  padding: var(--mi-spacing-4) var(--mi-spacing-6);
  font-size: var(--mi-font-size-body-large);
  border-radius: var(--mi-radius-lg);
}
```

#### 组件API
```typescript
interface InputMIProps {
  variant?: 'basic' | 'search';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}
```

### 开关（Switch）

#### 组件概述
- 组件名称：微交互开关（Micro-Interaction Switch）
- 组件描述：具有丰富微交互效果的开关组件
- 适用场景：设置切换、状态切换、选项开关

#### 组件变体
##### 基础开关（Basic）
```css
.switch-mi-basic {
  /* 基础样式 */
  position: relative;
  width: 48px;
  height: 24px;
  background: var(--mi-gray-300);
  border-radius: 9999px;
  cursor: pointer;
  transition: background var(--mi-transition-normal) var(--mi-ease-out);
}

/* 开关滑块 */
.switch-mi-basic::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: #FFFFFF;
  border-radius: 50%;
  transition: all var(--mi-transition-normal) var(--mi-ease-out);
  box-shadow: var(--mi-shadow-sm);
}

/* 激活状态 */
.switch-mi-basic.active {
  background: var(--mi-primary-500);
}

.switch-mi-basic.active::before {
  transform: translateX(24px);
}

/* 悬停效果 */
.switch-mi-basic:hover {
  background: var(--mi-gray-400);
}

.switch-mi-basic.active:hover {
  background: var(--mi-primary-600);
}

/* 点击动画 */
.switch-mi-basic:active::before {
  transform: scale(0.9);
}

.switch-mi-basic.active:active::before {
  transform: translateX(24px) scale(0.9);
}
```

#### 组件尺寸
```css
/* 小号开关 */
.switch-mi-small {
  width: 36px;
  height: 18px;
}

.switch-mi-small::before {
  width: 14px;
  height: 14px;
}

.switch-mi-small.active::before {
  transform: translateX(18px);
}

/* 中号开关 */
.switch-mi-medium {
  width: 48px;
  height: 24px;
}

.switch-mi-medium::before {
  width: 20px;
  height: 20px;
}

.switch-mi-medium.active::before {
  transform: translateX(24px);
}

/* 大号开关 */
.switch-mi-large {
  width: 60px;
  height: 30px;
}

.switch-mi-large::before {
  width: 26px;
  height: 26px;
}

.switch-mi-large.active::before {
  transform: translateX(30px);
}
```

#### 组件API
```typescript
interface SwitchMIProps {
  size?: 'small' | 'medium' | 'large';
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}
```

### 组件使用规则
1. **按钮组件**：根据操作重要性选择合适的变体，主按钮用于主要操作
2. **卡片组件**：根据内容类型和展示需求选择合适的尺寸和交互效果
3. **输入框组件**：提供清晰的占位符和错误提示，确保可访问性
4. **开关组件**：用于设置切换和状态切换，提供清晰的视觉反馈
5. **微交互效果**：适度使用微交互效果，避免过度使用影响性能
6. **交互反馈**：提供清晰的悬停、激活、禁用等状态反馈
7. **动画时长**：微交互使用150ms，页面过渡使用300ms
8. **响应式设计**：确保组件在不同屏幕尺寸下都能正常工作

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格

#### 图标类型
```css
/* 填充图标 */
.icon-mi-filled {
  fill: currentColor;
  stroke: none;
  transition: all var(--mi-transition-fast) var(--mi-ease-out);
}

/* 描边图标 */
.icon-mi-outlined {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: all var(--mi-transition-fast) var(--mi-ease-out);
}

/* 双色图标 */
.icon-mi-duotone {
  fill: currentColor;
  opacity: 0.8;
  transition: all var(--mi-transition-fast) var(--mi-ease-out);
}
```

#### 图标尺寸
```css
/* 图标尺寸 */
--mi-icon-xs: 12px;
--mi-icon-sm: 16px;
--mi-icon-md: 20px;
--mi-icon-lg: 24px;
--mi-icon-xl: 32px;
--mi-icon-2xl: 48px;

/* 默认图标尺寸 */
--mi-icon-default: var(--mi-icon-lg);
```

#### 图标状态
```css
/* 悬停状态 */
.icon-mi:hover {
  transform: translateY(-2px) scale(1.1);
  color: var(--mi-primary-500);
}

/* 激活状态 */
.icon-mi:active {
  transform: translateY(0) scale(0.95);
}

/* 禁用状态 */
.icon-mi:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

/* 加载状态 */
.icon-mi.loading {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### 插画风格

#### 插画类型
```css
/* 简约插画 */
.illustration-mi-minimal {
  /* 基础样式 */
  position: relative;
  transition: all var(--mi-transition-normal) var(--mi-ease-out);
}

/* 悬浮插画 */
.illustration-mi-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* 脉冲插画 */
.illustration-mi-pulse {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}
```

#### 插画动画
```css
/* 淡入动画 */
.illustration-mi-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 滑入动画 */
.illustration-mi-slide-in {
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 缩放动画 */
.illustration-mi-scale-in {
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### 图标与插画使用规则
1. **图标风格**：统一使用简约风格图标，保持视觉一致性
2. **图标尺寸**：根据使用场景选择合适的尺寸，保持比例协调
3. **插画风格**：根据产品定位选择合适的插画风格
4. **动画效果**：适度使用动画效果，避免过度使用影响性能
5. **交互反馈**：为图标和插画提供清晰的交互反馈
6. **性能优化**：使用SVG格式，优化文件大小和加载速度
7. **动画时长**：微交互动画使用150ms，插画动画使用300ms
8. **缓动函数**：默认使用ease-out，特殊场景使用弹性缓动

---

## 7. 交互与动效原则（Interaction & Motion）

### 交互原则

#### Hover（悬停）
```css
/* 悬停效果 */
.hover-mi {
  transition: all var(--mi-transition-fast) var(--mi-ease-out);
}

/* 悬停 - 提升 */
.hover-mi-lift:hover {
  transform: translateY(-2px);
  box-shadow: var(--mi-shadow-lg);
}

/* 悬停 - 缩放 */
.hover-mi-scale:hover {
  transform: scale(1.05);
}

/* 悬停 - 旋转 */
.hover-mi-rotate:hover {
  transform: rotate(5deg);
}

/* 悬停 - 颜色 */
.hover-mi-color:hover {
  color: var(--mi-primary-500);
}
```

#### Active（激活）
```css
/* 激活效果 */
.active-mi {
  transition: all var(--mi-transition-fast) var(--mi-ease-out);
}

/* 激活 - 按压 */
.active-mi-press:active {
  transform: scale(0.98);
}

/* 激活 - 深度 */
.active-mi-depth:active {
  transform: translateY(2px);
}
```

#### Focus（焦点）
```css
/* 焦点效果 */
.focus-mi:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.2);
}

/* 焦点 - 发光 */
.focus-mi-glow:focus {
  outline: none;
  box-shadow: 
    0 0 0 3px rgba(2, 132, 199, 0.2),
    0 0 20px rgba(2, 132, 199, 0.1);
}
```

### 动效原则

#### 动效时长
```css
/* 动效时长 */
--mi-transition-instant: 50ms;
--mi-transition-fast: 150ms;
--mi-transition-normal: 300ms;
--mi-transition-slow: 500ms;

/* 默认动效时长 */
--mi-transition-default: var(--mi-transition-normal);
```

#### 缓动函数
```css
/* 缓动函数 */
--mi-ease-linear: linear;
--mi-ease-in: cubic-bezier(0.4, 0, 1, 1);
--mi-ease-out: cubic-bezier(0, 0, 0.2, 1);
--mi-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--mi-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--mi-ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);

/* 默认缓动函数 */
--mi-ease-default: var(--mi-ease-out);
```

#### 动效类型
```css
/* 淡入淡出 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
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

/* 弹跳 */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* 旋转 */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

### 反馈机制

#### 成功反馈
```css
/* 成功反馈 */
.feedback-mi-success {
  background: var(--mi-success-500);
  color: #FFFFFF;
  padding: var(--mi-spacing-3) var(--mi-spacing-6);
  border-radius: var(--mi-radius-md);
  box-shadow: var(--mi-shadow-lg);
  animation: slideInDown var(--mi-transition-normal) var(--mi-ease-out);
}

/* 成功动画 */
@keyframes successPulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: var(--mi-shadow-lg);
  }
  50% {
    transform: scale(1.05);
    box-shadow: var(--mi-shadow-xl);
  }
}
```

#### 错误反馈
```css
/* 错误反馈 */
.feedback-mi-error {
  background: var(--mi-error-500);
  color: #FFFFFF;
  padding: var(--mi-spacing-3) var(--mi-spacing-6);
  border-radius: var(--mi-radius-md);
  box-shadow: var(--mi-shadow-lg);
  animation: slideInDown var(--mi-transition-normal) var(--mi-ease-out);
}

/* 错误动画 */
@keyframes errorShake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}
```

### 触觉反馈

#### 移动端触觉反馈
```css
/* 轻微震动 */
.haptic-mi-light {
  animation: hapticLight 100ms ease-out;
}

@keyframes hapticLight {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.98); }
}

/* 中等震动 */
.haptic-mi-medium {
  animation: hapticMedium 150ms ease-out;
}

@keyframes hapticMedium {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
}

/* 强烈震动 */
.haptic-mi-heavy {
  animation: hapticHeavy 200ms ease-out;
}

@keyframes hapticHeavy {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.9); }
}
```

### 动效性能

#### 性能优化原则
```css
/* 使用transform和opacity */
.performance-mi-optimized {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* 避免使用width、height、left、top */
.performance-mi-avoid {
  /* 避免 */
  width: 100px;
  height: 100px;
  left: 0;
  top: 0;
  
  /* 推荐 */
  transform: translate(0, 0) scale(1);
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
  --mi-color-primary: #0284C7;
  --mi-color-primary-hover: #0369A1;
  --mi-color-primary-active: #075985;
  
  /* 次色 */
  --mi-color-secondary: #9333EA;
  --mi-color-secondary-hover: #7E22CE;
  --mi-color-secondary-active: #6B21A8;
  
  /* 辅助色 */
  --mi-color-accent: #EC4899;
  --mi-color-accent-hover: #DB2777;
  --mi-color-accent-active: #BE185D;
  
  /* 语义色 */
  --mi-color-success: #22C55E;
  --mi-color-warning: #F59E0B;
  --mi-color-error: #EF4444;
  --mi-color-info: #3B82F6;
  
  /* 中性色 */
  --mi-color-white: #FFFFFF;
  --mi-color-black: #18181B;
  --mi-color-gray-100: #F4F4F5;
  --mi-color-gray-200: #E4E4E7;
  --mi-color-gray-300: #D4D4D8;
  --mi-color-gray-400: #A1A1AA;
  --mi-color-gray-500: #71717A;
  --mi-color-gray-600: #52525B;
  --mi-color-gray-700: #3F3F46;
  --mi-color-gray-800: #27272A;
  --mi-color-gray-900: #18181B;
}
```

### 间距 Token
```css
:root {
  --mi-spacing-0: 0;
  --mi-spacing-1: 0.25rem;
  --mi-spacing-2: 0.5rem;
  --mi-spacing-3: 0.75rem;
  --mi-spacing-4: 1rem;
  --mi-spacing-5: 1.25rem;
  --mi-spacing-6: 1.5rem;
  --mi-spacing-8: 2rem;
  --mi-spacing-10: 2.5rem;
  --mi-spacing-12: 3rem;
  --mi-spacing-16: 4rem;
  --mi-spacing-20: 5rem;
  --mi-spacing-24: 6rem;
}
```

### 圆角 Token
```css
:root {
  --mi-radius-none: 0;
  --mi-radius-sm: 0.25rem;
  --mi-radius-md: 0.5rem;
  --mi-radius-lg: 0.75rem;
  --mi-radius-xl: 1rem;
  --mi-radius-2xl: 1.5rem;
  --mi-radius-full: 9999px;
}
```

### 阴影 Token
```css
:root {
  --mi-shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --mi-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --mi-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  --mi-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  --mi-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
  --mi-shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
  --mi-shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.06);
}
```

### 字体 Token
```css
:root {
  /* 字体大小 */
  --mi-font-size-xs: 0.75rem;
  --mi-font-size-sm: 0.875rem;
  --mi-font-size-base: 1rem;
  --mi-font-size-lg: 1.125rem;
  --mi-font-size-xl: 1.25rem;
  --mi-font-size-2xl: 1.5rem;
  --mi-font-size-3xl: 1.875rem;
  --mi-font-size-4xl: 2.25rem;
  --mi-font-size-5xl: 3rem;
  
  /* 字重 */
  --mi-font-weight-light: 300;
  --mi-font-weight-regular: 400;
  --mi-font-weight-medium: 500;
  --mi-font-weight-semibold: 600;
  --mi-font-weight-bold: 700;
  --mi-font-weight-extrabold: 800;
  
  /* 行高 */
  --mi-line-height-none: 1;
  --mi-line-height-tight: 1.25;
  --mi-line-height-snug: 1.375;
  --mi-line-height-normal: 1.5;
  --mi-line-height-relaxed: 1.625;
  --mi-line-height-loose: 2;
}
```

### 过渡 Token
```css
:root {
  /* 过渡时长 */
  --mi-transition-instant: 50ms;
  --mi-transition-fast: 150ms;
  --mi-transition-normal: 300ms;
  --mi-transition-slow: 500ms;
  
  /* 缓动函数 */
  --mi-ease-linear: linear;
  --mi-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --mi-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --mi-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --mi-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --mi-ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
```

### Token 使用规则
1. **颜色 Token**：使用语义化的颜色名称，便于理解和维护
2. **间距 Token**：所有间距使用统一的间距系统
3. **圆角 Token**：使用一致的圆角规范
4. **阴影 Token**：使用预定义的阴影层级
5. **字体 Token**：使用统一的字体规范
6. **过渡 Token**：使用一致的动效时长和缓动函数
7. **命名规范**：使用一致的命名规范，便于团队协作
8. **文档化**：为每个Token提供清晰的文档说明

---

## 9. 合法复刻建议（Legal Replication Advice）

### 可以学习的元素（规则与风格）

#### 设计原则
1. **即时反馈**：学习如何为用户操作提供即时的视觉反馈
2. **流畅过渡**：学习如何使用流畅的动画过渡增强体验
3. **微妙细节**：学习如何通过微小的细节提升用户体验
4. **情感连接**：学习如何通过微交互建立情感连接
5. **自然直觉**：学习如何设计符合用户直觉的交互方式

#### 技术实现
1. **CSS动画**：学习使用CSS动画和过渡效果
2. **JavaScript交互**：学习使用JavaScript实现复杂的交互效果
3. **性能优化**：学习如何优化动画性能，避免卡顿
4. **响应式设计**：学习如何在不同设备上实现一致的微交互体验
5. **可访问性**：学习如何确保微交互对所有人都是可访问的

#### 组件设计
1. **按钮设计**：学习如何设计具有丰富微交互效果的按钮
2. **卡片设计**：学习如何设计具有悬停效果的卡片
3. **输入框设计**：学习如何设计具有焦点动画的输入框
4. **开关设计**：学习如何设计具有流畅动画的开关
5. **导航设计**：学习如何设计具有过渡效果的导航

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

微交互设计风格通过精心设计的动画、过渡和反馈，创造出流畅、自然、愉悦的用户体验。在学习和借鉴这种设计风格时，我们应该：

1. **学习设计原则**：理解微交互设计的基本原则和原理
2. **掌握技术实现**：掌握CSS动画、JavaScript交互等技术
3. **应用设计模式**：在自己的产品中应用可复用的设计模式
4. **尊重知识产权**：尊重他人的知识产权和版权
5. **建立独特风格**：建立自己产品的独特设计风格

通过合法的学习和借鉴，我们可以在不侵犯他人权益的前提下，创造出优秀的微交互设计作品。
