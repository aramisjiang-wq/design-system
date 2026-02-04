# Tailwind Utility

## 1. 设计风格总览

### Design DNA
- **Utility-First**: 基于原子类的设计理念,通过组合实用类快速构建界面
- **Responsive**: 移动优先的响应式设计,适配多端设备
- **Accessible**: 遵循WCAG 2.1 AA级可访问性标准
- **Composable**: 组件可复用和组合,支持灵活扩展
- **Performance**: 优化加载性能,使用系统字体和CSS动画

### 适用产品类型
- **工具类产品**: 仪表盘、管理后台、数据可视化平台
- **SaaS产品**: 企业级应用、协作工具、项目管理
- **内容平台**: 博客、文档系统、知识库
- **电商系统**: 商品展示、购物流程、订单管理

### 设计特征
- 信息密度: 中等偏上,适合复杂业务场景
- 视觉层次: 清晰,通过颜色、间距、字体建立层次
- 交互反馈: 明确,所有交互都有视觉反馈
- 动效节奏: 克制,使用200ms标准过渡时间

---

## 2. 颜色系统

### 主色调
```css
/* Primary Colors - 蓝色系 */
--color-primary: #3B82F6;          /* 主色 */
--color-primary-light: #60A5FA;    /* 浅色 */
--color-primary-dark: #2563EB;      /* 深色 */
--color-primary-50: #EFF6FF;
--color-primary-100: #DBEAFE;
--color-primary-200: #BFDBFE;
--color-primary-300: #93C5FD;
--color-primary-400: #60A5FA;
--color-primary-500: #3B82F6;
--color-primary-600: #2563EB;
--color-primary-700: #1D4ED8;
--color-primary-800: #1E40AF;
--color-primary-900: #1E3A8A;
--color-primary-950: #172554;
```

**使用场景**:
- 主色: 主要操作按钮、导航激活状态、重要信息
- 浅色: 悬停状态、背景装饰
- 深色: 按下状态、深色主题

### 辅助色
```css
/* Secondary Colors */
--color-green: #10B981;            /* 绿色 */
--color-yellow: #F59E0B;           /* 黄色 */
--color-red: #EF4444;              /* 红色 */
--color-purple: #8B5CF6;           /* 紫色 */
--color-pink: #EC4899;             /* 粉色 */

/* Green Scale */
--color-green-50: #ECFDF5;
--color-green-100: #D1FAE5;
--color-green-200: #A7F3D0;
--color-green-300: #6EE7B7;
--color-green-400: #34D399;
--color-green-500: #10B981;
--color-green-600: #059669;
--color-green-700: #047857;
--color-green-800: #065F46;
--color-green-900: #064E3B;
--color-green-950: #022C22;

/* Yellow Scale */
--color-yellow-50: #FFFBEB;
--color-yellow-100: #FEF3C7;
--color-yellow-200: #FDE68A;
--color-yellow-300: #FCD34D;
--color-yellow-400: #FBBF24;
--color-yellow-500: #F59E0B;
--color-yellow-600: #D97706;
--color-yellow-700: #B45309;
--color-yellow-800: #92400E;
--color-yellow-900: #78350F;
--color-yellow-950: #451A03;

/* Red Scale */
--color-red-50: #FEF2F2;
--color-red-100: #FEE2E2;
--color-red-200: #FECACA;
--color-red-300: #FCA5A5;
--color-red-400: #F87171;
--color-red-500: #EF4444;
--color-red-600: #DC2626;
--color-red-700: #B91C1C;
--color-red-800: #991B1B;
--color-red-900: #7F1D1D;
--color-red-950: #450A0A;

/* Purple Scale */
--color-purple-50: #F5F3FF;
--color-purple-100: #EDE9FE;
--color-purple-200: #DDD6FE;
--color-purple-300: #C4B5FD;
--color-purple-400: #A78BFA;
--color-purple-500: #8B5CF6;
--color-purple-600: #7C3AED;
--color-purple-700: #6D28D9;
--color-purple-800: #5B21B6;
--color-purple-900: #4C1D95;
--color-purple-950: #2E1065;

/* Pink Scale */
--color-pink-50: #FDF2F8;
--color-pink-100: #FCE7F3;
--color-pink-200: #FBCFE8;
--color-pink-300: #F9A8D4;
--color-pink-400: #F472B6;
--color-pink-500: #EC4899;
--color-pink-600: #DB2777;
--color-pink-700: #BE185D;
--color-pink-800: #9D174D;
--color-pink-900: #831843;
--color-pink-950: #500724;
```

**使用场景**:
- 绿色: 成功状态、完成状态、积极反馈
- 黄色: 警告状态、待处理状态、注意提示
- 红色: 错误状态、危险操作、删除确认
- 紫色: 特殊标签、高级功能、会员标识
- 粉色: 营销标签、限时活动、女性向内容

### 语义色
```css
/* Semantic Colors */
--color-success: #10B981;          /* 成功 */
--color-success-bg: #D1FAE5;       /* 成功背景 */
--color-success-border: #34D399;   /* 成功边框 */

--color-warning: #F59E0B;          /* 警告 */
--color-warning-bg: #FEF3C7;       /* 警告背景 */
--color-warning-border: #FBBF24;   /* 警告边框 */

--color-error: #EF4444;            /* 错误 */
--color-error-bg: #FEE2E2;         /* 错误背景 */
--color-error-border: #F87171;     /* 错误边框 */

--color-info: #3B82F6;             /* 信息 */
--color-info-bg: #DBEAFE;          /* 信息背景 */
--color-info-border: #60A5FA;      /* 信息边框 */
```

**使用场景**:
- 成功: 操作成功、任务完成、验证通过
- 警告: 注意事项、待处理、需要确认
- 错误: 操作失败、验证失败、系统错误
- 信息: 提示信息、帮助说明、状态通知

### 中性色
```css
/* Neutral Colors - Gray Scale */
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;
--color-gray-500: #6B7280;
--color-gray-600: #4B5563;
--color-gray-700: #374151;
--color-gray-800: #1F2937;
--color-gray-900: #111827;
--color-gray-950: #030712;

/* Background Colors */
--color-bg-primary: #FFFFFF;       /* 主背景 */
--color-bg-secondary: #F9FAFB;     /* 次背景 */
--color-bg-tertiary: #F3F4F6;      /* 三级背景 */
--color-bg-hover: #F3F4F6;         /* 悬停背景 */
--color-bg-active: #E5E7EB;        /* 激活背景 */
--color-bg-disabled: #F3F4F6;      /* 禁用背景 */

/* Text Colors */
--color-text-primary: #111827;     /* 主文字 */
--color-text-secondary: #6B7280;   /* 次文字 */
--color-text-tertiary: #9CA3AF;    /* 三级文字 */
--color-text-disabled: #D1D5DB;    /* 禁用文字 */
--color-text-inverse: #FFFFFF;     /* 反色文字 */

/* Border Colors */
--color-border-primary: #E5E7EB;   /* 主边框 */
--color-border-secondary: #D1D5DB; /* 次边框 */
--color-border-tertiary: #9CA3AF;  /* 三级边框 */
--color-border-focus: #3B82F6;     /* 焦点边框 */
--color-border-error: #EF4444;     /* 错误边框 */
```

**使用场景**:
- 背景: 页面背景、卡片背景、组件背景
- 文字: 标题、正文、辅助文字、禁用文字
- 边框: 组件边框、分割线、焦点状态

### Design Token 命名建议
```css
/* 命名规则: --color-{用途}-{色相}-{明度} */
--color-primary-500: #3B82F6;
--color-success-500: #10B981;
--color-text-primary: #111827;
--color-bg-primary: #FFFFFF;
--color-border-primary: #E5E7EB;

/* 语义化命名 */
--color-brand-primary: #3B82F6;
--color-status-success: #10B981;
--color-status-warning: #F59E0B;
--color-status-error: #EF4444;
--color-status-info: #3B82F6;
```

---

## 3. 字体与排版

### 字体家族
```css
/* Primary Font Family */
--font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

/* Fallback Font Family */
--font-family-fallback: "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif;

/* Monospace Font Family */
--font-family-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

### 字号层级
```css
/* Font Sizes */
--font-size-xs: 0.75rem;      /* 12px - Tiny */
--font-size-sm: 0.875rem;     /* 14px - Small */
--font-size-base: 1rem;       /* 16px - Base */
--font-size-lg: 1.125rem;     /* 18px - Large */
--font-size-xl: 1.25rem;      /* 20px - XL */
--font-size-2xl: 1.5rem;      /* 24px - 2XL */
--font-size-3xl: 1.875rem;    /* 30px - 3XL */
--font-size-4xl: 2.25rem;     /* 36px - 4XL */
--font-size-5xl: 3rem;        /* 48px - 5XL */
--font-size-6xl: 3.75rem;     /* 60px - 6XL */
```

### 字重
```css
/* Font Weights */
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### 行高
```css
/* Line Heights */
--line-height-tight: 1.25;    /* 标题 */
--line-height-snug: 1.375;    /* 副标题 */
--line-height-normal: 1.5;    /* 正文 */
--line-height-relaxed: 1.625; /* 宽松 */
--line-height-loose: 2;       /* 非常宽松 */
```

### 字间距
```css
/* Letter Spacing */
--letter-spacing-tighter: -0.05em;
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
--letter-spacing-widest: 0.1em;
```

### 排版规则
```css
/* Heading Typography */
--h1-font-size: 2.25rem;      /* 36px */
--h1-font-weight: 700;
--h1-line-height: 1.25;
--h1-letter-spacing: -0.025em;

--h2-font-size: 1.875rem;     /* 30px */
--h2-font-weight: 600;
--h2-line-height: 1.25;
--h2-letter-spacing: -0.025em;

--h3-font-size: 1.5rem;       /* 24px */
--h3-font-weight: 600;
--h3-line-height: 1.375;
--h3-letter-spacing: 0;

--h4-font-size: 1.25rem;      /* 20px */
--h4-font-weight: 600;
--h4-line-height: 1.375;
--h4-letter-spacing: 0;

--h5-font-size: 1.125rem;     /* 18px */
--h5-font-weight: 500;
--h5-line-height: 1.5;
--h5-letter-spacing: 0;

--h6-font-size: 1rem;         /* 16px */
--h6-font-weight: 500;
--h6-line-height: 1.5;
--h6-letter-spacing: 0.025em;

/* Body Typography */
--body-font-size: 1rem;       /* 16px */
--body-font-weight: 400;
--body-line-height: 1.5;
--body-letter-spacing: 0;

--small-font-size: 0.875rem;  /* 14px */
--small-font-weight: 400;
--small-line-height: 1.4;
--small-letter-spacing: 0.025em;

--tiny-font-size: 0.75rem;    /* 12px */
--tiny-font-weight: 400;
--tiny-line-height: 1.4;
--tiny-letter-spacing: 0.05em;
```

### 排版使用规则
1. **标题层级**: H1用于页面主标题,H2用于章节标题,H3-H6用于子标题
2. **正文规范**: 正文使用Regular字重(400),重要内容使用Medium字重(500)
3. **强调文字**: 使用SemiBold(600)或Bold(700)强调关键信息
4. **系统字体**: 优先使用系统字体栈,提高加载性能
5. **行高控制**: 标题使用1.25-1.375,正文使用1.5,小字使用1.4
6. **字间距调整**: 大号标题可适当收紧字间距(-0.025em),小号文字可适当加宽(0.025-0.05em)

### 响应式排版
```css
/* Mobile First Typography */
@media (max-width: 639px) {
  --h1-font-size: 1.75rem;    /* 28px */
  --h2-font-size: 1.5rem;     /* 24px */
  --h3-font-size: 1.25rem;     /* 20px */
  --body-font-size: 0.9375rem; /* 15px */
}

@media (min-width: 640px) and (max-width: 1023px) {
  --h1-font-size: 2rem;       /* 32px */
  --h2-font-size: 1.75rem;    /* 28px */
  --h3-font-size: 1.375rem;   /* 22px */
  --body-font-size: 0.9375rem; /* 15px */
}

@media (min-width: 1024px) {
  --h1-font-size: 2.25rem;    /* 36px */
  --h2-font-size: 1.875rem;   /* 30px */
  --h3-font-size: 1.5rem;     /* 24px */
  --body-font-size: 1rem;     /* 16px */
}
```

---

## 4. 布局与栅格系统

### 页面版心
```css
/* Container Widths */
--container-sm: 640px;   /* 小容器 */
--container-md: 768px;   /* 中容器 */
--container-lg: 1024px;  /* 大容器 */
--container-xl: 1280px;  /* 超大容器 */
--container-2xl: 1536px; /* 最大容器 */

/* Container Padding */
--container-padding: 2rem;  /* 32px */
--container-padding-sm: 1rem; /* 16px */
```

### 栅格系统
```css
/* Grid Columns */
--grid-columns: 12;        /* 12列栅格 */

/* Grid Gaps */
--gap-xs: 0.25rem;        /* 4px */
--gap-sm: 0.5rem;         /* 8px */
--gap-md: 1rem;           /* 16px */
--gap-lg: 1.5rem;         /* 24px */
--gap-xl: 2rem;           /* 32px */
--gap-2xl: 3rem;          /* 48px */
--gap-3xl: 4rem;          /* 64px */

/* Grid Margins */
--margin-sm: 0.5rem;      /* 8px */
--margin-md: 1rem;        /* 16px */
--margin-lg: 1.5rem;      /* 24px */
--margin-xl: 2rem;        /* 32px */
--margin-2xl: 3rem;       /* 48px */
--margin-3xl: 4rem;       /* 64px */
```

### 响应式断点
```css
/* Breakpoints */
--breakpoint-sm: 640px;   /* 小屏幕 */
--breakpoint-md: 768px;   /* 中屏幕 */
--breakpoint-lg: 1024px;  /* 大屏幕 */
--breakpoint-xl: 1280px;  /* 超大屏幕 */
--breakpoint-2xl: 1536px; /* 最大屏幕 */

/* Media Queries */
@media (max-width: 639px) { /* Mobile */ }
@media (min-width: 640px) { /* Tablet */ }
@media (min-width: 768px) { /* Tablet Large */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Desktop Large */ }
@media (min-width: 1536px) { /* Desktop XL */ }
```

### 留白密度
```css
/* Spacing Scale - 4px Base */
--space-0: 0;
--space-px: 1px;
--space-0-5: 0.125rem;   /* 2px */
--space-1: 0.25rem;       /* 4px */
--space-1-5: 0.375rem;    /* 6px */
--space-2: 0.5rem;        /* 8px */
--space-2-5: 0.625rem;    /* 10px */
--space-3: 0.75rem;       /* 12px */
--space-3-5: 0.875rem;    /* 14px */
--space-4: 1rem;          /* 16px */
--space-5: 1.25rem;       /* 20px */
--space-6: 1.5rem;        /* 24px */
--space-7: 1.75rem;       /* 28px */
--space-8: 2rem;          /* 32px */
--space-9: 2.25rem;       /* 36px */
--space-10: 2.5rem;       /* 40px */
--space-11: 2.75rem;       /* 44px */
--space-12: 3rem;         /* 48px */
--space-14: 3.5rem;       /* 56px */
--space-16: 4rem;         /* 64px */
--space-20: 5rem;         /* 80px */
--space-24: 6rem;         /* 96px */
--space-28: 7rem;         /* 112px */
--space-32: 8rem;         /* 128px */
--space-36: 9rem;         /* 144px */
--space-40: 10rem;        /* 160px */
--space-44: 11rem;        /* 176px */
--space-48: 12rem;        /* 192px */
--space-52: 13rem;        /* 208px */
--space-56: 14rem;        /* 224px */
--space-60: 15rem;        /* 240px */
--space-64: 16rem;        /* 256px */
--space-72: 18rem;        /* 288px */
--space-80: 20rem;        /* 320px */
--space-96: 24rem;        /* 384px */
```

### 信息密度判断
- **高密度**: 数据密集型页面,使用较小间距(4-8px)
- **中密度**: 常规页面,使用标准间距(8-16px)
- **低密度**: 营销页面,使用较大间距(16-32px)

### 布局模式
```css
/* Flexbox Layout */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-row { flex-direction: row; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }

/* Grid Layout */
.grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
```

---

## 5. 核心 UI 组件规范

### Button（按钮）

#### 组件变体
```css
/* Primary Button */
.btn-primary {
  background-color: var(--color-primary-500);
  color: var(--color-text-inverse);
  border: 1px solid var(--color-primary-500);
}

.btn-primary:hover {
  background-color: var(--color-primary-600);
  border-color: var(--color-primary-600);
}

.btn-primary:active {
  background-color: var(--color-primary-700);
  border-color: var(--color-primary-700);
}

/* Secondary Button */
.btn-secondary {
  background-color: var(--color-bg-primary);
  color: var(--color-primary-500);
  border: 1px solid var(--color-border-primary);
}

.btn-secondary:hover {
  background-color: var(--color-bg-hover);
  border-color: var(--color-primary-500);
}

/* Text Button */
.btn-text {
  background-color: transparent;
  color: var(--color-primary-500);
  border: none;
}

.btn-text:hover {
  background-color: var(--color-bg-hover);
}

/* Disabled Button */
.btn-disabled {
  background-color: var(--color-bg-disabled);
  color: var(--color-text-disabled);
  border: 1px solid var(--color-border-tertiary);
  cursor: not-allowed;
}
```

#### 组件尺寸
```css
/* Button Sizes */
.btn-sm {
  padding: 0.375rem 0.75rem;  /* 6px 12px */
  font-size: var(--font-size-sm);  /* 14px */
  height: 32px;
}

.btn-md {
  padding: 0.5rem 1rem;       /* 8px 16px */
  font-size: var(--font-size-base);  /* 16px */
  height: 40px;
}

.btn-lg {
  padding: 0.75rem 1.5rem;    /* 12px 24px */
  font-size: var(--font-size-lg);  /* 18px */
  height: 48px;
}
```

#### 组件圆角
```css
/* Button Radius */
.btn-radius-sm { border-radius: 0.25rem; }   /* 4px */
.btn-radius-md { border-radius: 0.375rem; }  /* 6px */
.btn-radius-lg { border-radius: 0.5rem; }    /* 8px */
.btn-radius-full { border-radius: 9999px; }   /* 全圆角 */
```

#### 组件状态
```css
/* Button States */
.btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.btn:active {
  transform: scale(0.98);
}

.btn-loading {
  position: relative;
  pointer-events: none;
}

.btn-loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

### Card（卡片）

#### 基础卡片
```css
.card {
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-border-primary);
  margin-bottom: var(--space-4);
}

.card-body {
  padding: var(--space-4) 0;
}

.card-footer {
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-primary);
  margin-top: var(--space-4);
}
```

#### 卡片阴影
```css
/* Card Shadows */
.card-shadow-sm {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.card-shadow-md {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-shadow-xl {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

---

### Input / Upload / Form（表单组件）

#### 输入框
```css
.input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.input:hover {
  border-color: var(--color-border-secondary);
}

.input:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input-error {
  border-color: var(--color-border-error);
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.input-disabled {
  background-color: var(--color-bg-disabled);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}

/* Input Sizes */
.input-sm {
  padding: 0.375rem 0.5rem;
  font-size: var(--font-size-sm);
  height: 32px;
}

.input-md {
  padding: 0.5rem 0.75rem;
  font-size: var(--font-size-base);
  height: 40px;
}

.input-lg {
  padding: 0.625rem 1rem;
  font-size: var(--font-size-lg);
  height: 48px;
}
```

#### 文本域
```css
.textarea {
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-md);
  resize: vertical;
  min-height: 80px;
}

.textarea:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

#### 选择框
```css
.select {
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-md);
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
}

.select:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

#### 上传组件
```css
.upload {
  border: 2px dashed var(--color-border-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.upload:hover {
  border-color: var(--color-primary-500);
  background-color: var(--color-bg-hover);
}

.upload-dragging {
  border-color: var(--color-primary-500);
  background-color: var(--color-primary-50);
}
```

#### 复选框和单选框
```css
.checkbox,
.radio {
  width: 1rem;
  height: 1rem;
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-sm);
  background-color: var(--color-bg-primary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.checkbox:checked,
.radio:checked {
  background-color: var(--color-primary-500);
  border-color: var(--color-primary-500);
}

.radio {
  border-radius: 50%;
}

.checkbox:focus,
.radio:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

---

### Navigation（导航）

#### 顶部导航
```css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-6);
  background-color: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border-primary);
  height: 64px;
}

.navbar-brand {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  gap: var(--space-6);
}

.navbar-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color 0.2s ease;
}

.navbar-link:hover,
.navbar-link.active {
  color: var(--color-primary-500);
}
```

#### 侧边栏
```css
.sidebar {
  width: 256px;
  background-color: var(--color-bg-primary);
  border-right: 1px solid var(--color-border-primary);
  padding: var(--space-4);
}

.sidebar-item {
  display: flex;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  color: var(--color-text-secondary);
  text-decoration: none;
  border-radius: var(--radius-md);
  margin-bottom: var(--space-1);
  transition: all 0.2s ease;
}

.sidebar-item:hover {
  background-color: var(--color-bg-hover);
  color: var(--color-text-primary);
}

.sidebar-item.active {
  background-color: var(--color-primary-50);
  color: var(--color-primary-500);
}
```

---

### Badge（徽章）
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  border-radius: 9999px;
}

.badge-default {
  background-color: var(--color-gray-100);
  color: var(--color-gray-700);
}

.badge-primary {
  background-color: var(--color-primary-100);
  color: var(--color-primary-700);
}

.badge-success {
  background-color: var(--color-green-100);
  color: var(--color-green-700);
}

.badge-warning {
  background-color: var(--color-yellow-100);
  color: var(--color-yellow-700);
}

.badge-error {
  background-color: var(--color-red-100);
  color: var(--color-red-700);
}
```

---

### Avatar（头像）
```css
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-gray-100);
  overflow: hidden;
}

.avatar-sm {
  width: 2rem;
  height: 2rem;
}

.avatar-md {
  width: 2.5rem;
  height: 2.5rem;
}

.avatar-lg {
  width: 3rem;
  height: 3rem;
}

.avatar-xl {
  width: 4rem;
  height: 4rem;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

### Modal（模态框）
```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
}

.modal-sm { max-width: 384px; }
.modal-md { max-width: 512px; }
.modal-lg { max-width: 768px; }
.modal-xl { max-width: 1024px; }

.modal-header {
  padding: var(--space-6);
  border-bottom: 1px solid var(--color-border-primary);
}

.modal-body {
  padding: var(--space-6);
}

.modal-footer {
  padding: var(--space-6);
  border-top: 1px solid var(--color-border-primary);
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
}
```

---

### Dropdown（下拉菜单）
```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-md);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  padding: var(--space-1);
  z-index: 100;
}

.dropdown-item {
  display: block;
  padding: var(--space-2) var(--space-3);
  color: var(--color-text-primary);
  text-decoration: none;
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background-color: var(--color-bg-hover);
}

.dropdown-divider {
  height: 1px;
  background-color: var(--color-border-primary);
  margin: var(--space-1) 0;
}
```

---

## 6. 图标与插画风格

### 图标风格
```css
/* Icon System */
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

/* Icon Sizes */
.icon-xs { width: 0.75rem; height: 0.75rem; }  /* 12px */
.icon-sm { width: 1rem; height: 1rem; }        /* 16px */
.icon-md { width: 1.25rem; height: 1.25rem; }  /* 20px */
.icon-lg { width: 1.5rem; height: 1.5rem; }    /* 24px */
.icon-xl { width: 2rem; height: 2rem; }        /* 32px */
.icon-2xl { width: 2.5rem; height: 2.5rem; }  /* 40px */
```

**图标风格特征**:
- **类型**: Outline（线框）和Filled（填充）两种风格
- **线条**: 统一2px线宽,圆角端点
- **圆角**: 适度圆角,保持现代感
- **比例**: 24x24px基准网格,可缩放
- **对齐**: 视觉居中,保持平衡

**图标使用规则**:
1. **功能图标**: 使用Outline风格,保持简洁
2. **品牌图标**: 使用Filled风格,增强识别度
3. **状态图标**: 根据语义色调整颜色
4. **图标对齐**: 使用flexbox垂直居中对齐

### 插画风格
- **风格类型**: 扁平化插画,适度渐变
- **色彩使用**: 基于品牌色板,保持一致性
- **线条处理**: 无描边,纯色填充
- **细节程度**: 中等细节,避免过度装饰
- **使用场景**: 空状态、引导页、营销页面

**插画原则**:
1. **弱化装饰**: 插画仅辅助理解,不喧宾夺主
2. **一致性**: 保持统一的插画风格和色彩
3. **可复用**: 插画元素可组合使用
4. **性能优化**: 使用SVG格式,支持缩放

---

## 7. 交互与动效原则

### Hover（悬停）行为
```css
/* Standard Hover */
.hover-effect {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Color Hover */
.hover-color:hover {
  opacity: 0.8;
}

/* Background Hover */
.hover-bg:hover {
  background-color: var(--color-bg-hover);
}

/* Scale Hover */
.hover-scale:hover {
  transform: scale(1.05);
}

/* Shadow Hover */
.hover-shadow:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### Active（激活）行为
```css
/* Active State */
.active-effect {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Scale Active */
.active-scale:active {
  transform: scale(0.98);
}

/* Color Active */
.active-color:active {
  opacity: 0.6;
}
```

### Focus（焦点）行为
```css
/* Focus State */
.focus-effect {
  outline: none;
  transition: box-shadow 0.2s ease;
}

.focus-effect:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Focus Ring */
.focus-ring:focus {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

### 动效节奏
```css
/* Timing Functions */
.ease-linear { transition-timing-function: linear; }
.ease-in { transition-timing-function: cubic-bezier(0.4, 0, 1, 1); }
.ease-out { transition-timing-function: cubic-bezier(0, 0, 0.2, 1); }
.ease-in-out { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }

/* Duration */
.duration-75 { transition-duration: 75ms; }
.duration-100 { transition-duration: 100ms; }
.duration-150 { transition-duration: 150ms; }
.duration-200 { transition-duration: 200ms; }
.duration-300 { transition-duration: 300ms; }
.duration-500 { transition-duration: 500ms; }
.duration-700 { transition-duration: 700ms; }
.duration-1000 { transition-duration: 1000ms; }
```

**动效原则**:
1. **克制**: 动效服务于功能,不装饰
2. **快速**: 标准过渡200ms,快速操作150ms
3. **流畅**: 使用cubic-bezier缓动函数
4. **一致**: 相同类型交互使用相同动效

### 操作反馈设计
```css
/* Success Feedback */
.feedback-success {
  animation: success-pulse 0.3s ease;
}

@keyframes success-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Error Feedback */
.feedback-error {
  animation: error-shake 0.3s ease;
}

@keyframes error-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

/* Loading Feedback */
.feedback-loading {
  animation: loading-spin 0.6s linear infinite;
}

@keyframes loading-spin {
  to { transform: rotate(360deg); }
}
```

### 加载动画
```css
/* Spinner */
.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--color-border-primary);
  border-top-color: var(--color-primary-500);
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Skeleton Loading */
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-gray-100) 0%,
    var(--color-gray-200) 50%,
    var(--color-gray-100) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## 8. 可复用 Design Token

### Color Tokens
```css
:root {
  /* Primary Colors */
  --color-primary-50: #EFF6FF;
  --color-primary-100: #DBEAFE;
  --color-primary-200: #BFDBFE;
  --color-primary-300: #93C5FD;
  --color-primary-400: #60A5FA;
  --color-primary-500: #3B82F6;
  --color-primary-600: #2563EB;
  --color-primary-700: #1D4ED8;
  --color-primary-800: #1E40AF;
  --color-primary-900: #1E3A8A;
  --color-primary-950: #172554;

  /* Semantic Colors */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;

  /* Neutral Colors */
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;
  --color-gray-950: #030712;

  /* Background Colors */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F9FAFB;
  --color-bg-tertiary: #F3F4F6;
  --color-bg-hover: #F3F4F6;
  --color-bg-active: #E5E7EB;
  --color-bg-disabled: #F3F4F6;

  /* Text Colors */
  --color-text-primary: #111827;
  --color-text-secondary: #6B7280;
  --color-text-tertiary: #9CA3AF;
  --color-text-disabled: #D1D5DB;
  --color-text-inverse: #FFFFFF;

  /* Border Colors */
  --color-border-primary: #E5E7EB;
  --color-border-secondary: #D1D5DB;
  --color-border-tertiary: #9CA3AF;
  --color-border-focus: #3B82F6;
  --color-border-error: #EF4444;
}
```

### Spacing Tokens
```css
:root {
  --space-0: 0;
  --space-px: 1px;
  --space-1: 0.25rem;      /* 4px */
  --space-2: 0.5rem;       /* 8px */
  --space-3: 0.75rem;      /* 12px */
  --space-4: 1rem;         /* 16px */
  --space-5: 1.25rem;      /* 20px */
  --space-6: 1.5rem;       /* 24px */
  --space-8: 2rem;         /* 32px */
  --space-10: 2.5rem;      /* 40px */
  --space-12: 3rem;        /* 48px */
  --space-16: 4rem;        /* 64px */
  --space-20: 5rem;        /* 80px */
  --space-24: 6rem;        /* 96px */
}
```

### Radius Tokens
```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;     /* 4px */
  --radius-md: 0.375rem;    /* 6px */
  --radius-lg: 0.5rem;     /* 8px */
  --radius-xl: 0.75rem;    /* 12px */
  --radius-2xl: 1rem;      /* 16px */
  --radius-3xl: 1.5rem;    /* 24px */
  --radius-full: 9999px;   /* 全圆角 */
}
```

### Shadow Tokens
```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 20px 25px rgba(0, 0, 0, 0.1);
  --shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}
```

### Typography Tokens
```css
:root {
  /* Font Families */
  --font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-family-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  /* Font Sizes */
  --font-size-xs: 0.75rem;      /* 12px */
  --font-size-sm: 0.875rem;     /* 14px */
  --font-size-base: 1rem;       /* 16px */
  --font-size-lg: 1.125rem;     /* 18px */
  --font-size-xl: 1.25rem;      /* 20px */
  --font-size-2xl: 1.5rem;      /* 24px */
  --font-size-3xl: 1.875rem;    /* 30px */
  --font-size-4xl: 2.25rem;     /* 36px */
  --font-size-5xl: 3rem;        /* 48px */

  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Line Heights */
  --line-height-tight: 1.25;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;

  /* Letter Spacing */
  --letter-spacing-tighter: -0.05em;
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  --letter-spacing-wider: 0.05em;
  --letter-spacing-widest: 0.1em;
}
```

### Transition Tokens
```css
:root {
  /* Duration */
  --duration-75: 75ms;
  --duration-100: 100ms;
  --duration-150: 150ms;
  --duration-200: 200ms;
  --duration-300: 300ms;
  --duration-500: 500ms;
  --duration-700: 700ms;
  --duration-1000: 1000ms;

  /* Timing Functions */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Z-Index Tokens
```css
:root {
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
}
```

### Breakpoint Tokens
```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

---

## 9. 合法复刻建议

### 可以学习的元素

#### 设计规则
✅ **可以学习**:
- Utility-First设计理念: 通过原子类快速构建界面
- 响应式设计模式: 移动优先,适配多端设备
- 4px基准间距系统: 统一的间距规范
- 12列栅格系统: 灵活的布局框架
- 语义化颜色命名: 清晰的颜色用途划分
- 标准化组件规范: 统一的组件样式和交互

#### 颜色系统
✅ **可以学习**:
- 50-950色阶系统: 完整的颜色明度层级
- 语义化颜色命名: success/warning/error/info
- 中性色灰阶: 50-950的完整灰阶
- 对比度控制: 确保文字与背景对比度≥4.5:1

#### 字体系统
✅ **可以学习**:
- 系统字体栈: 优先使用系统字体
- 模块化字号: xs/sm/base/lg/xl/2xl等
- 标准化行高: tight/snug/normal/relaxed/loose
- 响应式排版: 根据屏幕尺寸调整字号

#### 组件规范
✅ **可以学习**:
- 组件变体设计: primary/secondary/text/disabled
- 组件尺寸规范: sm/md/lg
- 统一圆角规范: sm/md/lg/full
- 状态管理: hover/active/focus/disabled
- 过渡动画: 200ms标准过渡时间

#### 交互设计
✅ **可以学习**:
- 克制的动效: 动效服务于功能
- 明确的反馈: 所有交互都有视觉反馈
- 焦点管理: 明显的焦点环
- 加载状态: 统一的加载动画

### 不应复刻的元素

#### 品牌元素
❌ **不应复刻**:
- Tailwind品牌色: #3B82F6蓝色
- Tailwind品牌标识: Logo、图标
- Tailwind品牌名称: "Tailwind CSS"
- Tailwind品牌字体: 特殊字体样式

#### 插画内容
❌ **不应复刻**:
- Tailwind官方插画: 具体的插画内容
- 插画风格细节: 过度装饰的细节
- 插画色彩方案: 特定的配色组合
- 插画元素: 具体的图形元素

#### 文案内容
❌ **不应复刻**:
- Tailwind官方文案: 官方网站文案
- 示例文本: 具体的示例内容
- 营销文案: 品牌营销文字
- 技术文档: 官方文档内容

#### 代码实现
❌ **不应复刻**:
- Tailwind CSS框架: 完整的框架代码
- Tailwind插件: 官方插件代码
- Tailwind配置: 完整的配置文件
- Tailwind工具函数: 内部工具函数

### 合法复刻建议

#### 设计理念
1. **学习Utility-First思想**: 理解原子类设计理念,但使用自己的实现
2. **建立自己的设计系统**: 基于业务需求建立设计系统
3. **保持一致性**: 在自己的产品中保持设计一致性
4. **优化用户体验**: 以用户为中心优化设计

#### 技术实现
1. **使用CSS Variables**: 使用CSS变量管理设计Token
2. **组件化开发**: 建立可复用的组件库
3. **响应式设计**: 移动优先,适配多端设备
4. **性能优化**: 优化加载性能和渲染性能

#### 法律合规
1. **避免侵权**: 不复制品牌元素和受版权保护的内容
2. **开源许可**: 遵守开源协议
3. **商业使用**: 确认商业使用许可
4. ** attribution**: 如使用开源代码,提供适当的署名

#### 最佳实践
1. **建立自己的设计语言**: 基于业务需求建立独特的设计语言
2. **持续迭代**: 根据用户反馈持续优化设计
3. **团队协作**: 建立设计规范,促进团队协作
4. **文档完善**: 完善设计文档,便于维护和扩展

---

## 附录

### 快速参考

#### 颜色速查
```css
/* Primary */
--color-primary-500: #3B82F6;

/* Semantic */
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #3B82F6;

/* Neutral */
--color-gray-500: #6B7280;
--color-gray-900: #111827;
```

#### 间距速查
```css
--space-1: 4px;
--space-2: 8px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
```

#### 字号速查
```css
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-base: 16px;
--font-size-lg: 18px;
--font-size-xl: 20px;
--font-size-2xl: 24px;
```

#### 圆角速查
```css
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-full: 9999px;
```

### 常用组件类名

#### 按钮
```html
<button class="btn btn-primary btn-md">Primary Button</button>
<button class="btn btn-secondary btn-md">Secondary Button</button>
<button class="btn btn-text btn-md">Text Button</button>
```

#### 输入框
```html
<input type="text" class="input input-md" placeholder="Enter text">
<input type="text" class="input input-md input-error" placeholder="Error state">
```

#### 卡片
```html
<div class="card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content goes here.</p>
  </div>
</div>
```

#### 徽章
```html
<span class="badge badge-default">Default</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-error">Error</span>
```

---

## 版本信息

- **版本**: 1.0.0
- **更新日期**: 2026-02-02
- **维护者**: Design System Team
