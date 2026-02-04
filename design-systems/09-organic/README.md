# Organic Design System

## 1. 设计风格总览（Design DNA）

### 核心关键词
- **自然形态**：基于自然界的有机曲线和流动形态
- **柔和色彩**：使用自然、柔和、温暖的色彩系统
- **流畅过渡**：强调流畅的过渡和渐变效果
- **有机纹理**：使用自然的纹理和图案元素
- **温暖感觉**：营造温暖、舒适、亲和的感觉

### 适用产品类型
- **健康医疗**：健康应用、医疗平台、养生服务
- **生活方式**：生活方式应用、美食、旅游
- **教育儿童**：儿童教育、亲子应用、早教平台
- **创意艺术**：创意工具、艺术平台、设计软件

### 设计哲学
有机设计风格源于自然界的有机形态和流动感，强调与自然和谐共生的设计理念。其核心理念是通过柔和的曲线、温暖的色彩和流畅的过渡，创造出舒适、亲和、自然的设计语言，让用户感受到温暖和放松。

---

## 2. 颜色系统（Color System）

### 主色调（Primary Colors）
基于自然界的柔和色彩：

```css
/* 森林绿 - 自然与生机 */
--organic-forest: #2D6A4F;
--organic-forest-light: #40916C;
--organic-forest-dark: #1B4332;

/* 海洋蓝 - 宁静与深度 */
--organic-ocean: #457B9D;
--organic-ocean-light: #A8DADC;
--organic-ocean-dark: #1D3557;

/* 大地棕 - 温暖与稳定 */
--organic-earth: #D4A373;
--organic-earth-light: #E9C46A;
--organic-earth-dark: #B08968;
```

**使用场景**：
- 森林绿：主要操作按钮、成功状态、自然元素
- 海洋蓝：导航元素、信息展示、链接文本
- 大地棕：次要操作、警告信息、温暖元素

### 辅助色（Secondary Colors）
```css
/* 晨曦橙 - 温暖与活力 */
--organic-sunrise: #F4A261;
--organic-sunrise-light: #FFB703;
--organic-sunrise-dark: #E76F51;

/* 薰衣草紫 - 柔和与宁静 */
--organic-lavender: #B5838D;
--organic-lavender-light: #D5B8C1;
--organic-lavender-dark: #8D6B75;

/* 薄荷绿 - 清新与活力 */
--organic-mint: #95D5B2;
--organic-mint-light: #B7E4C7;
--organic-mint-dark: #74C69D;
```

**使用场景**：
- 晨曦橙：强调元素、高亮内容、活力元素
- 薰衣草紫：装饰元素、柔和提示、优雅内容
- 薄荷绿：成功状态、积极反馈、清新元素

### 中性色（Neutral Colors）
```css
/* 暖白色 - 温暖与纯净 */
--organic-white: #FAF9F6;
--organic-white-warm: #F5F3EF;
--organic-white-cool: #F8F7F5;

/* 暖灰色 - 温暖与平衡 */
--organic-gray-100: #F0EDE8;
--organic-gray-200: #E5E0D8;
--organic-gray-300: #D4CFC4;
--organic-gray-400: #B8B0A3;
--organic-gray-500: #9C9385;
--organic-gray-600: #7F7566;
--organic-gray-700: #635A4D;
--organic-gray-800: #474038;
--organic-gray-900: #2B2723;

/* 暖黑色 - 温暖与对比 */
--organic-black: #2B2723;
--organic-black-warm: #3D3832;
--organic-black-cool: #1F1C19;
```

**使用场景**：
- 暖白色：背景、卡片、内容区域
- 暖灰色：次要文字、分割线、背景层次
- 暖黑色：主要文字、重要标题、边框线条

### 语义色（Semantic Colors）
```css
/* 成功状态 */
--organic-success: #52B788;
--organic-success-light: #74C69D;
--organic-success-dark: #40916C;

/* 警告状态 */
--organic-warning: #E9C46A;
--organic-warning-light: #F4D35E;
--organic-warning-dark: #D4A373;

/* 错误状态 */
--organic-error: #E76F51;
--organic-error-light: #F4A261;
--organic-error-dark: #C44536;

/* 信息状态 */
--organic-info: #457B9D;
--organic-info-light: #A8DADC;
--organic-info-dark: #1D3557;
```

**使用场景**：
- 成功：操作成功、完成状态、积极反馈
- 警告：注意事项、次要提醒、待处理状态
- 错误：操作失败、错误提示、危险操作
- 信息：一般提示、帮助信息、说明文字

### 渐变色（Gradient Colors）
```css
/* 自然渐变 */
--gradient-forest: linear-gradient(135deg, #2D6A4F 0%, #40916C 100%);
--gradient-ocean: linear-gradient(135deg, #457B9D 0%, #A8DADC 100%);
--gradient-sunrise: linear-gradient(135deg, #F4A261 0%, #FFB703 100%);
--gradient-lavender: linear-gradient(135deg, #B5838D 0%, #D5B8C1 100%);

/* 柔和渐变 */
--gradient-soft: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
--gradient-warm: linear-gradient(180deg, rgba(244,162,97,0.1) 0%, rgba(244,162,97,0) 100%);
```

**使用场景**：
- 自然渐变：按钮背景、卡片装饰、强调元素
- 柔和渐变：背景过渡、遮罩效果、柔和装饰

### Design Token 命名建议
```
--color-{nature}-{shade}
--color-{semantic}-{state}

示例：
--color-forest-primary
--color-ocean-dark
--color-success-light
--color-error-dark
```

### 色彩使用原则
1. **自然和谐**：使用自然界中的色彩，避免过于鲜艳或人工感
2. **柔和温暖**：所有色彩都带有温暖感，避免冷色调
3. **渐变过渡**：使用渐变和过渡效果，增强有机感
4. **色彩平衡**：每个页面中主色不超过2种，辅助色不超过3种
5. **功能导向**：颜色使用服务于功能，避免过度装饰

---

## 3. 字体与排版（Typography）

### 字体家族（Font Family）
```css
/* 主字体 - 柔和无衬线字体 */
--font-primary: 'Nunito', 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

/* 备用字体 - 中文支持 */
--font-secondary: 'PingFang SC', 'Microsoft YaHei', 'SimHei', sans-serif;

/* 手写字体 - 装饰和强调 */
--font-hand: 'Caveat', 'Pacifico', 'Dancing Script', cursive;
```

**字体选择理由**：
- Nunito：圆润、柔和、友好，符合有机设计理念
- Quicksand：现代、清晰、温暖，适合有机风格
- Caveat：手写风格，增加自然感和人情味

### 字号层级（Font Size Scale）
基于8pt网格系统：

```css
/* 标题层级 */
--font-size-h1: 3.5rem;     /* 56px - 页面主标题 */
--font-size-h2: 2.75rem;    /* 44px - 章节标题 */
--font-size-h3: 2rem;       /* 32px - 子章节标题 */
--font-size-h4: 1.5rem;     /* 24px - 卡片标题 */
--font-size-h5: 1.25rem;    /* 20px - 小标题 */
--font-size-h6: 1rem;       /* 16px - 微标题 */

/* 正文层级 */
--font-size-body-large: 1.125rem;  /* 18px - 大正文 */
--font-size-body: 1rem;            /* 16px - 标准正文 */
--font-size-body-small: 0.875rem;  /* 14px - 小正文 */

/* 辅助层级 */
--font-size-caption: 0.75rem;      /* 12px - 说明文字 */
--font-size-overline: 0.625rem;   /* 10px - 标签文字 */
```

### 行高（Line Height）
```css
--line-height-tight: 1.3;    /* 紧凑 - 标题 */
--line-height-normal: 1.6;   /* 标准 - 正文 */
--line-height-relaxed: 1.8; /* 宽松 - 长文本 */
```

### 字重（Font Weight）
```css
--font-weight-light: 300;    /* 轻体 - 辅助文字 */
--font-weight-regular: 400;  /* 常规 - 正文 */
--font-weight-medium: 500;   /* 中等 - 强调文字 */
--font-weight-semibold: 600; /* 半粗 - 小标题 */
--font-weight-bold: 700;     /* 粗体 - 标题 */
```

### 字间距（Letter Spacing）
```css
--letter-spacing-tight: -0.01em;  /* 紧凑 - 大标题 */
--letter-spacing-normal: 0.01em;  /* 标准 - 正文 */
--letter-spacing-wide: 0.03em;   /* 宽松 - 小标题 */
--letter-spacing-wider: 0.05em;  /* 更宽 - 标签 */
```

### 排版节奏规则
1. **垂直韵律**：基于8pt网格，所有垂直间距为8的倍数
2. **视觉层次**：通过字号、字重、颜色建立清晰的层次结构
3. **自然对齐**：使用自然对齐，避免过于严格的网格
4. **充足留白**：使用充足的留白空间，营造呼吸感
5. **一致性**：相同类型的元素使用相同的排版规则

### 响应式排版
```css
/* 移动端（< 640px） */
@media (max-width: 639px) {
    --font-size-h1: 2.5rem;    /* 40px */
    --font-size-h2: 2rem;      /* 32px */
    --font-size-h3: 1.5rem;    /* 24px */
    --font-size-body: 0.9375rem; /* 15px */
}

/* 平板端（640px - 1024px） */
@media (min-width: 640px) and (max-width: 1023px) {
    --font-size-h1: 3rem;      /* 48px */
    --font-size-h2: 2.25rem;   /* 36px */
    --font-size-h3: 1.75rem;   /* 28px */
    --font-size-body: 0.9375rem; /* 15px */
}

/* 桌面端（≥ 1024px） */
@media (min-width: 1024px) {
    --font-size-h1: 3.5rem;    /* 56px */
    --font-size-h2: 2.75rem;   /* 44px */
    --font-size-h3: 2rem;      /* 32px */
    --font-size-body: 1rem;    /* 16px */
}
```

---

## 4. 布局与栅格系统（Layout & Grid）

### 页面版心宽度
```css
--container-max-width: 1200px;  /* 最大宽度 */
--container-padding: 2.5rem;   /* 内边距 40px */
--container-margin: 0 auto;    /* 水平居中 */
```

### 栅格系统（Grid System）
基于12列网格系统，但允许灵活调整：

```css
/* 基础栅格 */
--grid-columns: 12;
--grid-gutter: 2rem;  /* 32px - 栅格间距 */
--grid-margin: 2.5rem; /* 40px - 外边距 */

/* 响应式栅格 */
/* 移动端：4列 */
@media (max-width: 639px) {
    --grid-columns: 4;
    --grid-gutter: 1.5rem; /* 24px */
    --grid-margin: 1.5rem; /* 24px */
}

/* 平板端：8列 */
@media (min-width: 640px) and (max-width: 1023px) {
    --grid-columns: 8;
    --grid-gutter: 1.75rem; /* 28px */
    --grid-margin: 2rem;   /* 32px */
}

/* 桌面端：12列 */
@media (min-width: 1024px) {
    --grid-columns: 12;
    --grid-gutter: 2rem;   /* 32px */
    --grid-margin: 2.5rem; /* 40px */
}
```

### 留白密度与信息密度
**信息密度判断**：
- 高密度：数据仪表盘、管理后台、表格视图
- 中密度：内容页面、列表页面、详情页面
- 低密度：营销页面、着陆页、介绍页面

**留白规范**：
```css
/* 基础间距 - 基于8pt网格，但允许灵活调整 */
--spacing-0: 0;
--spacing-1: 0.5rem;   /* 8px */
--spacing-2: 1rem;     /* 16px */
--spacing-3: 1.5rem;   /* 24px */
--spacing-4: 2rem;     /* 32px */
--spacing-5: 2.5rem;   /* 40px */
--spacing-6: 3rem;     /* 48px */
--spacing-8: 4rem;     /* 64px */
--spacing-10: 5rem;    /* 80px */
--spacing-12: 6rem;    /* 96px */
--spacing-16: 8rem;    /* 128px */
--spacing-20: 10rem;   /* 160px */
```

**使用场景**：
- `--spacing-1`：元素内部间距、图标与文字间距
- `--spacing-2`：小元素间距、标签内边距
- `--spacing-3`：常规元素间距、卡片内边距
- `--spacing-4`：模块间距、章节间距
- `--spacing-6`：大模块间距、主要分区间距
- `--spacing-8`：页面级间距、页面边距

### 断点系统（Breakpoints）
```css
/* 断点定义 */
--breakpoint-xs: 0;
--breakpoint-sm: 640px;   /* 手机横屏 */
--breakpoint-md: 768px;   /* 平板竖屏 */
--breakpoint-lg: 1024px;  /* 平板横屏 */
--breakpoint-xl: 1280px;  /* 桌面 */
--breakpoint-2xl: 1536px; /* 大屏 */
```

### 布局模式
1. **流式布局**：自适应宽度，适合响应式页面
2. **弹性布局**：Flexbox布局，适合组件内部布局
3. **网格布局**：CSS Grid布局，适合复杂页面布局
4. **有机布局**：基于自然形态的布局，适合创意页面

---

## 5. 核心 UI 组件规范（Component System）

### Button（按钮）

#### 尺寸规范
```css
/* 小号按钮 */
.btn-small {
    height: 36px;
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
}

/* 中号按钮（默认） */
.btn-medium {
    height: 44px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
}

/* 大号按钮 */
.btn-large {
    height: 52px;
    padding: 1rem 2rem;
    font-size: 1.125rem;
}
```

#### 状态规范
```css
/* 默认状态 */
.btn-primary {
    background: var(--gradient-forest);
    color: var(--organic-white);
    border: none;
    border-radius: 24px; /* 有机风格：大圆角 */
    box-shadow: 0 4px 12px rgba(45, 106, 79, 0.2);
}

/* 悬停状态 */
.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(45, 106, 79, 0.3);
}

/* 激活状态 */
.btn-primary:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(45, 106, 79, 0.2);
}

/* 禁用状态 */
.btn-primary:disabled {
    background: var(--organic-gray-300);
    color: var(--organic-gray-500);
    cursor: not-allowed;
    box-shadow: none;
}

/* 焦点状态 */
.btn-primary:focus {
    outline: 2px solid var(--organic-forest);
    outline-offset: 2px;
}
```

#### 变体规范
```css
/* 主按钮 */
.btn-primary {
    background: var(--gradient-forest);
    color: var(--organic-white);
}

/* 次按钮 */
.btn-secondary {
    background: var(--gradient-ocean);
    color: var(--organic-white);
}

/* 文字按钮 */
.btn-text {
    background: transparent;
    color: var(--organic-forest);
    border: 2px solid var(--organic-forest);
}

/* 幽灵按钮 */
.btn-ghost {
    background: transparent;
    color: var(--organic-forest);
}
```

#### 圆角规范
```css
/* 有机风格：大圆角 */
.btn {
    border-radius: 24px; /* 大圆角 - 有机风格 */
}

/* 胶囊按钮 */
.btn-pill {
    border-radius: 9999px; /* 胶囊形状 */
}

/* 柔和按钮 */
.btn-soft {
    border-radius: 16px; /* 中等圆角 */
}
```

### Card（卡片）

#### 使用场景
- 内容展示：文章、新闻、公告
- 数据展示：统计卡片、信息卡片
- 功能入口：功能卡片、操作卡片

#### 样式规范
```css
.card {
    background-color: var(--organic-white);
    border-radius: 20px; /* 有机风格：大圆角 */
    padding: var(--spacing-5);
    box-shadow: 0 8px 24px rgba(43, 39, 35, 0.08);
    border: 1px solid var(--organic-gray-200);
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(43, 39, 35, 0.12);
}

.card-compact {
    padding: var(--spacing-4);
}

.card-spacious {
    padding: var(--spacing-6);
}
```

#### 阴影规范
```css
/* 有机风格：柔和阴影 */
.shadow-organic {
    box-shadow: 0 8px 24px rgba(43, 39, 35, 0.08);
}

/* 悬浮状态 */
.shadow-organic-hover {
    box-shadow: 0 12px 32px rgba(43, 39, 35, 0.12);
}

/* 激活状态 */
.shadow-organic-active {
    box-shadow: 0 4px 16px rgba(43, 39, 35, 0.08);
}
```

### Input（输入框）

#### 样式规范
```css
.input {
    width: 100%;
    height: 44px;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    color: var(--organic-black);
    background-color: var(--organic-white);
    border: 2px solid var(--organic-gray-300);
    border-radius: 12px; /* 有机风格：中等圆角 */
    transition: all 0.3s ease;
}

.input:hover {
    border-color: var(--organic-gray-400);
}

.input:focus {
    border-color: var(--organic-forest);
    box-shadow: 0 0 0 4px rgba(45, 106, 79, 0.1);
}

.input-error {
    border-color: var(--organic-error);
}

.input-disabled {
    background-color: var(--organic-gray-100);
    color: var(--organic-gray-500);
    cursor: not-allowed;
}
```

#### 尺寸规范
```css
.input-small {
    height: 36px;
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
}

.input-medium {
    height: 44px;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
}

.input-large {
    height: 52px;
    padding: 1rem 1.5rem;
    font-size: 1.125rem;
}
```

### Form（表单）

#### 表单布局
```css
.form-group {
    margin-bottom: var(--spacing-5);
}

.form-label {
    display: block;
    margin-bottom: var(--spacing-2);
    font-size: 0.9375rem;
    font-weight: var(--font-weight-medium);
    color: var(--organic-black);
}

.form-hint {
    margin-top: var(--spacing-2);
    font-size: 0.8125rem;
    color: var(--organic-gray-500);
}

.form-error {
    margin-top: var(--spacing-2);
    font-size: 0.8125rem;
    color: var(--organic-error);
}
```

### Navigation（导航）

#### 顶部导航
```css
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    padding: 0 var(--spacing-5);
    background-color: var(--organic-white);
    border-bottom: 1px solid var(--organic-gray-200);
    box-shadow: 0 2px 8px rgba(43, 39, 35, 0.04);
}

.nav-link {
    padding: 0.625rem 1.25rem;
    font-size: 0.9375rem;
    font-weight: var(--font-weight-medium);
    color: var(--organic-black);
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
    background-color: var(--organic-gray-100);
    color: var(--organic-forest);
}
```

#### 侧边导航
```css
.sidebar {
    width: 260px;
    height: 100vh;
    padding: var(--spacing-5);
    background-color: var(--organic-white);
    border-right: 1px solid var(--organic-gray-200);
}

.sidebar-item {
    display: flex;
    align-items: center;
    padding: 0.875rem 1.25rem;
    margin-bottom: var(--spacing-2);
    font-size: 0.9375rem;
    color: var(--organic-black);
    border-radius: 12px;
    transition: all 0.3s ease;
}

.sidebar-item:hover,
.sidebar-item.active {
    background-color: var(--organic-gray-100);
    color: var(--organic-forest);
}
```

---

## 6. 图标与插画风格（Icon & Illustration）

### 图标风格
**风格特征**：
- **圆润化**：使用圆润的线条和形状
- **柔和化**：避免尖锐的边角和直线
- **自然化**：基于自然形态的图标设计
- **温暖化**：使用温暖的色彩和柔和的阴影

**图标规范**：
```css
.icon {
    width: 24px;
    height: 24px;
    stroke-width: 2px;
    stroke: var(--organic-black);
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.icon-small {
    width: 20px;
    height: 20px;
}

.icon-large {
    width: 32px;
    height: 32px;
}

.icon-filled {
    fill: var(--organic-black);
    stroke: none;
}
```

**图标库建议**：
- Feather Icons：简洁、圆润、自然
- Phosphor Icons：现代、柔和、友好
- Heroicons：简洁、清晰、圆润

### 插画风格
**风格特征**：
- **自然形态**：使用自然界的有机形态
- **柔和色彩**：使用温暖、柔和的色彩
- **流畅线条**：使用流畅、自然的线条
- **温暖氛围**：营造温暖、舒适的氛围

**插画原则**：
1. **自然原则**：所有元素基于自然形态
2. **柔和原则**：使用柔和的色彩和线条
3. **温暖原则**：营造温暖、舒适的氛围
4. **功能原则**：插画必须服务于功能，不能纯粹装饰

**插画类型**：
- **自然插画**：植物、动物、自然景观
- **生活插画**：日常生活场景、人物互动
- **抽象插画**：抽象的自然形态、流动的线条

### 设计原则
1. **温暖装饰**：适度使用装饰元素，增强温暖感
2. **辅助理解**：图标和插画必须帮助用户理解内容
3. **一致性**：所有图标和插画保持统一的风格
4. **可访问性**：提供替代文本，确保屏幕阅读器可访问

---

## 7. 交互与动效原则（Interaction & Motion）

### Hover（悬停）行为
```css
/* 按钮悬停 */
.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(45, 106, 79, 0.3);
}

/* 卡片悬停 */
.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(43, 39, 35, 0.12);
}

/* 链接悬停 */
.link:hover {
    color: var(--organic-forest);
    text-decoration: underline;
}
```

### Active（激活）行为
```css
/* 按钮激活 */
.button:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(45, 106, 79, 0.2);
}

/* 卡片激活 */
.card:active {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(43, 39, 35, 0.08);
}
```

### Focus（焦点）行为
```css
/* 焦点样式 */
*:focus {
    outline: 2px solid var(--organic-forest);
    outline-offset: 2px;
}

/* 按钮焦点 */
.button:focus {
    outline: 3px solid var(--organic-forest);
    outline-offset: 2px;
}
```

### 动效节奏
```css
/* 标准缓动 */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

/* 柔和缓动 */
--ease-soft: cubic-bezier(0.25, 0.1, 0.25, 1);

/* 弹性缓动 */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* 流畅缓动 */
--ease-flow: cubic-bezier(0.4, 0, 0.6, 1);
```

**动效时长**：
```css
--duration-fast: 200ms;    /* 快速交互 */
--duration-normal: 300ms;  /* 标准交互 */
--duration-slow: 400ms;    /* 慢速交互 */
--duration-slower: 600ms;  /* 复杂动画 */
```

**动效原则**：
1. **柔和原则**：动效柔和流畅，避免突兀
2. **自然流畅**：使用自然的缓动函数
3. **适度原则**：动效服务于功能，避免过度动画
4. **性能优先**：使用CSS动画，避免JavaScript动画

### 操作反馈设计原则
1. **柔和反馈**：用户操作后提供柔和的视觉反馈
2. **明确状态**：清晰展示当前状态（悬停、激活、禁用）
3. **温暖层次**：通过颜色、阴影、位移建立温暖的视觉层次
4. **一致性**：相同类型的操作使用相同的反馈方式

**反馈类型**：
- **视觉反馈**：颜色变化、阴影变化、位移变化
- **触觉反馈**：移动端柔和震动（重要操作）
- **听觉反馈**：柔和音效（谨慎使用，避免打扰）

---

## 8. 可复用 Design Token（工程友好）

### Color Tokens
```css
:root {
    /* Primary Colors */
    --color-forest-primary: #2D6A4F;
    --color-forest-light: #40916C;
    --color-forest-dark: #1B4332;

    --color-ocean-primary: #457B9D;
    --color-ocean-light: #A8DADC;
    --color-ocean-dark: #1D3557;

    --color-earth-primary: #D4A373;
    --color-earth-light: #E9C46A;
    --color-earth-dark: #B08968;

    /* Secondary Colors */
    --color-sunrise-primary: #F4A261;
    --color-sunrise-light: #FFB703;
    --color-sunrise-dark: #E76F51;

    --color-lavender-primary: #B5838D;
    --color-lavender-light: #D5B8C1;
    --color-lavender-dark: #8D6B75;

    --color-mint-primary: #95D5B2;
    --color-mint-light: #B7E4C7;
    --color-mint-dark: #74C69D;

    /* Neutral Colors */
    --color-white-primary: #FAF9F6;
    --color-white-warm: #F5F3EF;
    --color-white-cool: #F8F7F5;

    --color-gray-100: #F0EDE8;
    --color-gray-200: #E5E0D8;
    --color-gray-300: #D4CFC4;
    --color-gray-400: #B8B0A3;
    --color-gray-500: #9C9385;
    --color-gray-600: #7F7566;
    --color-gray-700: #635A4D;
    --color-gray-800: #474038;
    --color-gray-900: #2B2723;

    --color-black-primary: #2B2723;
    --color-black-warm: #3D3832;
    --color-black-cool: #1F1C19;

    /* Semantic Colors */
    --color-success-primary: #52B788;
    --color-success-light: #74C69D;
    --color-success-dark: #40916C;

    --color-warning-primary: #E9C46A;
    --color-warning-light: #F4D35E;
    --color-warning-dark: #D4A373;

    --color-error-primary: #E76F51;
    --color-error-light: #F4A261;
    --color-error-dark: #C44536;

    --color-info-primary: #457B9D;
    --color-info-light: #A8DADC;
    --color-info-dark: #1D3557;

    /* Gradient Colors */
    --gradient-forest: linear-gradient(135deg, #2D6A4F 0%, #40916C 100%);
    --gradient-ocean: linear-gradient(135deg, #457B9D 0%, #A8DADC 100%);
    --gradient-sunrise: linear-gradient(135deg, #F4A261 0%, #FFB703 100%);
    --gradient-lavender: linear-gradient(135deg, #B5838D 0%, #D5B8C1 100%);
    --gradient-soft: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
    --gradient-warm: linear-gradient(180deg, rgba(244,162,97,0.1) 0%, rgba(244,162,97,0) 100%);
}
```

### Spacing Tokens
```css
:root {
    --spacing-0: 0;
    --spacing-1: 0.5rem;   /* 8px */
    --spacing-2: 1rem;     /* 16px */
    --spacing-3: 1.5rem;   /* 24px */
    --spacing-4: 2rem;     /* 32px */
    --spacing-5: 2.5rem;   /* 40px */
    --spacing-6: 3rem;     /* 48px */
    --spacing-8: 4rem;     /* 64px */
    --spacing-10: 5rem;    /* 80px */
    --spacing-12: 6rem;    /* 96px */
    --spacing-16: 8rem;    /* 128px */
    --spacing-20: 10rem;   /* 160px */
}
```

### Radius Tokens
```css
:root {
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --radius-2xl: 24px;
    --radius-full: 9999px;
}
```

### Shadow Tokens
```css
:root {
    --shadow-none: none;
    --shadow-sm: 0 2px 8px rgba(43, 39, 35, 0.04);
    --shadow-md: 0 4px 12px rgba(43, 39, 35, 0.08);
    --shadow-lg: 0 8px 24px rgba(43, 39, 35, 0.08);
    --shadow-xl: 0 12px 32px rgba(43, 39, 35, 0.12);
}
```

### Typography Tokens
```css
:root {
    /* Font Family */
    --font-primary: 'Nunito', 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    --font-secondary: 'PingFang SC', 'Microsoft YaHei', 'SimHei', sans-serif;
    --font-hand: 'Caveat', 'Pacifico', 'Dancing Script', cursive;

    /* Font Size */
    --font-size-h1: 3.5rem;
    --font-size-h2: 2.75rem;
    --font-size-h3: 2rem;
    --font-size-h4: 1.5rem;
    --font-size-h5: 1.25rem;
    --font-size-h6: 1rem;
    --font-size-body-large: 1.125rem;
    --font-size-body: 1rem;
    --font-size-body-small: 0.875rem;
    --font-size-caption: 0.75rem;
    --font-size-overline: 0.625rem;

    /* Line Height */
    --line-height-tight: 1.3;
    --line-height-normal: 1.6;
    --line-height-relaxed: 1.8;

    /* Font Weight */
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    /* Letter Spacing */
    --letter-spacing-tight: -0.01em;
    --letter-spacing-normal: 0.01em;
    --letter-spacing-wide: 0.03em;
    --letter-spacing-wider: 0.05em;
}
```

### Animation Tokens
```css
:root {
    /* Duration */
    --duration-fast: 200ms;
    --duration-normal: 300ms;
    --duration-slow: 400ms;
    --duration-slower: 600ms;

    /* Easing */
    --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-soft: cubic-bezier(0.25, 0.1, 0.25, 1);
    --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    --ease-flow: cubic-bezier(0.4, 0, 0.6, 1);
}
```

### Z-Index Tokens
```css
:root {
    --z-index-dropdown: 1000;
    --z-index-sticky: 1020;
    --z-index-fixed: 1030;
    --z-index-modal-backdrop: 1040;
    --z-index-modal: 1050;
    --z-index-popover: 1060;
    --z-index-tooltip: 1070;
}
```

---

## 9. 合法复刻建议（Important）

### 可以学习的元素（规则 / 风格）

#### 1. 设计原则
✅ **可以学习**：
- 自然形态的设计理念
- 柔和温暖的设计语言
- 流畅过渡的设计思维
- 舒适亲和的设计风格

#### 2. 色彩系统
✅ **可以学习**：
- 自然色彩系统的使用方法
- 柔和温暖色彩搭配原则
- 渐变色彩使用方式
- 色彩与自然形态的结合技巧

#### 3. 排版系统
✅ **可以学习**：
- 圆润字体的使用原则
- 基于8pt网格的排版系统
- 柔和的层次结构建立方法
- 自然对齐的原则

#### 4. 布局系统
✅ **可以学习**：
- 流式布局系统的应用
- 基于自然形态的布局方法
- 响应式断点设置策略
- 充足留白的使用原则

#### 5. 组件设计
✅ **可以学习**：
- 大圆角设计语言的应用
- 柔和阴影效果的使用
- 温暖导向的组件设计
- 流畅的交互行为

#### 6. 图标与插画
✅ **可以学习**：
- 圆润图标设计方法
- 柔和线条图标风格
- 自然导向的插画设计
- 温暖色彩的使用原则

### 不应复刻的元素（品牌 / 插画 / 内容）

#### 1. 品牌元素
❌ **不应复刻**：
- 特定品牌的商标和标志
- 特定品牌的名称和标识
- 特定品牌的官方视觉识别系统
- 任何受版权保护的品牌元素

#### 2. 插画内容
❌ **不应复刻**：
- 特定设计师的原创插画
- 特定品牌的插画内容
- 特定风格的特定插画作品
- 任何受版权保护的插画作品

#### 3. 文字内容
❌ **不应复刻**：
- 特定品牌的官方文案
- 特定设计师的原始文字
- 特定品牌的历史文档
- 任何受版权保护的文字内容

#### 4. 具体设计
❌ **不应复刻**：
- 特定品牌的具体页面设计
- 特定品牌的特定组件设计
- 特定品牌的完整视觉系统
- 任何直接复制的设计元素

### 合法使用建议

#### 1. 风格借鉴
- 学习有机设计的原则和方法
- 参考自然色彩和排版系统
- 借鉴柔和过渡的设计理念
- 应用温暖亲和的设计思维

#### 2. 原创设计
- 基于有机原则创建原创设计
- 使用有机风格但加入自己的创意
- 结合现代技术和有机理念
- 创建独特的有机风格变体

#### 3. 法律合规
- 尊重设计师和品牌的知识产权
- 避免直接复制受保护的内容
- 注明设计灵感的来源
- 遵守相关的版权和商标法律

#### 4. 道德准则
- 诚实说明设计灵感来源
- 不声称自己是特定品牌的设计
- 尊重设计师的原创作品
- 促进有机设计理念的合法传播

### 总结
有机设计风格是一种重要的设计风格，其核心理念是通过自然形态、柔和色彩和流畅过渡，创造出舒适、亲和、自然的设计语言。但是，在使用有机设计风格时，必须遵守相关的知识产权法律，尊重设计师和品牌的知识产权，避免直接复制受保护的内容。通过学习有机设计的原则和方法，结合自己的创意和现代技术，可以创建出独特而合法的有机风格设计。