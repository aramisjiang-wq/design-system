# CSS-Tricks Design System

## 一、设计风格总览（Design DNA）

**核心关键词：**
- 专业
- 技术
- 简洁
- 实用
- 教育性

**适用产品类型：**
- 技术教程网站
- 开发者社区
- 技术博客
- 文档网站
- 学习平台

**设计理念：**
CSS-Tricks 是全球领先的前端设计和开发教程资源网站，其设计风格体现了对技术价值和教育价值的双重追求。设计语言融合了简洁、专业和技术导向的设计趋势，强调信息清晰度、可读性和学习体验的平衡。CSS-Tricks 的设计风格不是单一的，而是涵盖了从极简主义到技术专业表达的多种风格，但其核心始终是专业性、技术性和教育性导向。

---

## 二、颜色系统（Color System）

### 2.1 主色调（Primary Colors）

```css
:root {
  /* CSS-Tricks 品牌主色 - 蓝色系 */
  --color-primary: #1572B6;
  --color-primary-hover: #0E5A8F;
  --color-primary-active: #0B4A75;
  --color-primary-light: #4A9FD9;
  --color-primary-lighter: #78C0E8;
  --color-primary-dark: #0E5A8F;
  --color-primary-darker: #0B4A75;
  
  /* 辅助主色 - 橙色 */
  --color-secondary: #F59E0B;
  --color-secondary-hover: #D97706;
  --color-secondary-active: #B45309;
  --color-secondary-light: #FBBF24;
  --color-secondary-lighter: #FCD34D;
  --color-secondary-dark: #D97706;
  --color-secondary-darker: #B45309;
}
```

**使用场景：**
- `--color-primary`: 主要操作按钮、品牌标识、重要信息强调
- `--color-secondary`: 次要操作、辅助功能、信息补充
- `--color-primary-hover`: 鼠标悬停状态
- `--color-primary-active`: 点击/激活状态
- `--color-primary-light`: 背景装饰、轻量级强调
- `--color-primary-lighter`: 极轻背景、分隔线

### 2.2 中性色（Neutral Colors）

```css
:root {
  /* 深色系 */
  --color-neutral-900: #1F2937;
  --color-neutral-800: #374151;
  --color-neutral-700: #4B5563;
  --color-neutral-600: #6B7280;
  --color-neutral-500: #9CA3AF;
  
  /* 浅色系 */
  --color-neutral-400: #D1D5DB;
  --color-neutral-300: #E5E7EB;
  --color-neutral-200: #F3F4F6;
  --color-neutral-100: #F9FAFB;
  --color-neutral-50: #FFFFFF;
}
```

**使用场景：**
- `--color-neutral-900`: 主要文本、标题
- `--color-neutral-800`: 次要文本、副标题
- `--color-neutral-700`: 辅助文本、说明文字
- `--color-neutral-600`: 禁用文本、占位符
- `--color-neutral-500`: 边框、分隔线
- `--color-neutral-400`: 轻量边框、背景装饰
- `--color-neutral-300`: 禁用边框、背景分割
- `--color-neutral-200`: 卡片背景、浅色背景
- `--color-neutral-100`: 页面背景、容器背景
- `--color-neutral-50`: 纯白背景、卡片前景

### 2.3 语义色（Semantic Colors）

```css
:root {
  /* 成功色 */
  --color-success: #10B981;
  --color-success-light: #D1FAE5;
  --color-success-dark: #059669;
  
  /* 警告色 */
  --color-warning: #F59E0B;
  --color-warning-light: #FEF3C7;
  --color-warning-dark: #D97706;
  
  /* 错误色 */
  --color-error: #EF4444;
  --color-error-light: #FEE2E2;
  --color-error-dark: #DC2626;
  
  /* 信息色 */
  --color-info: #3B82F6;
  --color-info-light: #DBEAFE;
  --color-info-dark: #2563EB;
}
```

**使用场景：**
- `--color-success`: 成功提示、完成状态
- `--color-warning`: 警告提示、注意事项
- `--color-error`: 错误提示、失败状态
- `--color-info`: 信息提示、帮助说明
- `--color-*-light`: 背景强调、轻量提示
- `--color-*-dark`: 文本强调、重要提示

---

## 三、字体与排版（Typography）

### 3.1 字体家族

```css
:root {
  /* 主要字体 - Inter */
  --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  
  /* 代码字体 - JetBrains Mono */
  --font-family-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', monospace;
  
  /* 装饰字体 - Merriweather */
  --font-family-display: 'Merriweather', 'Georgia', 'Times New Roman', serif;
}
```

**使用场景：**
- `--font-family-primary`: 正文、UI 组件、常规文本
- `--font-family-mono`: 代码、数据、技术文档
- `--font-family-display`: 标题、大标题、装饰性文字

### 3.2 字号层级

```css
:root {
  /* 标题层级 */
  --font-size-h1: 48px;
  --font-size-h2: 36px;
  --font-size-h3: 30px;
  --font-size-h4: 24px;
  --font-size-h5: 20px;
  --font-size-h6: 18px;
  
  /* 正文层级 */
  --font-size-body-large: 18px;
  --font-size-body: 16px;
  --font-size-body-small: 14px;
  
  /* 辅助层级 */
  --font-size-caption: 12px;
  --font-size-label: 14px;
  --font-size-overline: 11px;
}
```

### 3.3 行高与字重

```css
:root {
  /* 行高 */
  --line-height-tight: 1.2;
  --line-height-normal: 1.6;
  --line-height-relaxed: 1.8;
  
  /* 字重 */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### 3.4 排版规则

**标题排版：**
- H1: 48px / Bold / Tight / 主要页面标题
- H2: 36px / Semibold / Tight / 次级标题
- H3: 30px / Semibold / Normal / 区块标题
- H4: 24px / Medium / Normal / 卡片标题
- H5: 20px / Medium / Normal / 小标题
- H6: 18px / Medium / Normal / 标签标题

**正文排版：**
- Body Large: 18px / Regular / Normal / 重要正文
- Body: 16px / Regular / Normal / 标准正文
- Body Small: 14px / Regular / Normal / 次要正文

**辅助排版：**
- Caption: 12px / Regular / Normal / 说明文字
- Label: 14px / Medium / Normal / 表单标签
- Overline: 11px / Medium / Normal / 分类标签

---

## 四、布局与栅格系统（Layout & Grid）

### 4.1 版心宽度

```css
:root {
  --container-max-width: 1200px;
  --container-medium-width: 992px;
  --container-small-width: 768px;
}
```

**使用场景：**
- `--container-max-width`: 桌面端主容器（>1200px）
- `--container-medium-width`: 平板端主容器（768px-1200px）
- `--container-small-width`: 移动端主容器（<768px）

### 4.2 栅格系统

```css
:root {
  /* 栅格列数 */
  --grid-columns: 12;
  
  /* 间距 */
  --grid-gutter: 24px;
  --grid-gutter-mobile: 16px;
  
  /* 边距 */
  --grid-margin: 32px;
  --grid-margin-mobile: 16px;
}
```

**栅格断点：**
- Mobile: < 640px（4列）
- Tablet: 640px - 992px（8列）
- Desktop: 992px - 1200px（12列）
- Large Desktop: > 1200px（12列，居中）

### 4.3 留白系统

```css
:root {
  /* 基础间距单位 */
  --spacing-0: 0;
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  --spacing-24: 96px;
}
```

**使用场景：**
- `--spacing-1`: 极小间距、图标内边距
- `--spacing-2`: 小间距、标签间距
- `--spacing-3`: 次小间距、按钮内边距
- `--spacing-4`: 标准间距、卡片内边距
- `--spacing-5`: 中等间距、区块间距
- `--spacing-6`: 大间距、区块间距
- `--spacing-8`: 特大间距、页面间距
- `--spacing-12`: 页面顶部/底部间距
- `--spacing-16`: 章节间距

---

## 五、核心 UI 组件规范（Component System）

### 5.1 Button（按钮）

**尺寸规范：**
```css
:root {
  --button-height-large: 48px;
  --button-height-medium: 40px;
  --button-height-small: 32px;
  
  --button-padding-large: 0 24px;
  --button-padding-medium: 0 20px;
  --button-padding-small: 0 16px;
  
  --button-font-size-large: 16px;
  --button-font-size-medium: 14px;
  --button-font-size-small: 12px;
}
```

**状态样式：**
- Default: 主色背景、白色文本、无阴影
- Hover: 主色加深、白色文本、轻微阴影
- Active: 主色更深、白色文本、下沉效果
- Disabled: 灰色背景、灰色文本、无阴影
- Loading: 主色背景、加载动画、禁用交互

**圆角规范：**
```css
:root {
  --button-radius-large: 6px;
  --button-radius-medium: 4px;
  --button-radius-small: 3px;
}
```

**按钮类型：**
- Primary: 主色背景、白色文本
- Secondary: 透明背景、主色边框、主色文本
- Ghost: 透明背景、无边框、主色文本
- Link: 透明背景、无边框、主色文本、下划线

### 5.2 Card（卡片）

**尺寸规范：**
```css
:root {
  --card-padding: 24px;
  --card-border-radius: 8px;
  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  --card-shadow-hover: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

**使用场景：**
- 内容展示、信息分组
- 功能模块、操作区域
- 数据展示、统计卡片

**卡片类型：**
- Default: 白色背景、标准阴影
- Elevated: 白色背景、悬浮阴影
- Outlined: 白色背景、边框、无阴影
- Filled: 浅色背景、无阴影

### 5.3 Input（输入框）

**尺寸规范：**
```css
:root {
  --input-height-large: 48px;
  --input-height-medium: 40px;
  --input-height-small: 32px;
  
  --input-padding-horizontal: 16px;
  --input-border-radius: 4px;
  --input-border-width: 1px;
}
```

**状态样式：**
- Default: 灰色边框、白色背景
- Focus: 主色边框、白色背景、阴影
- Error: 红色边框、白色背景
- Disabled: 灰色边框、灰色背景
- Success: 绿色边框、白色背景

### 5.4 Upload（上传）

**尺寸规范：**
```css
:root {
  --upload-width: 100%;
  --upload-height: 200px;
  --upload-border-radius: 6px;
  --upload-border-style: dashed;
  --upload-border-width: 2px;
}
```

**状态样式：**
- Default: 灰色虚线边框、浅色背景
- Hover: 主色虚线边框、浅色背景
- Dragging: 主色实线边框、浅色背景
- Success: 绿色边框、成功图标
- Error: 红色边框、错误提示

### 5.5 Form（表单）

**布局规范：**
```css
:root {
  --form-item-margin-bottom: 24px;
  --form-label-margin-bottom: 8px;
  --form-help-text-margin-top: 4px;
}
```

**表单元素：**
- Label: 14px / Medium / Neutral-700
- Input: 40px高度 / 16px字体 / 4px圆角
- Error Message: 12px / Regular / Error
- Help Text: 12px / Regular / Neutral-500

### 5.6 Navigation（导航）

**顶部导航：**
```css
:root {
  --nav-height: 64px;
  --nav-padding-horizontal: 24px;
  --nav-border-bottom: 1px solid var(--color-neutral-200);
}
```

**侧边导航：**
```css
:root {
  --sidebar-width: 256px;
  --sidebar-padding: 16px;
  --sidebar-item-height: 40px;
  --sidebar-item-padding: 0 12px;
}
```

**导航状态：**
- Default: 中性色文本、透明背景
- Active: 主色文本、浅色背景
- Hover: 主色文本、极浅背景
- Disabled: 灰色文本、透明背景

---

## 六、图标与插画风格（Icon & Illustration）

### 6.1 图标风格

**图标类型：**
- Filled: 实心图标、强调状态
- Outline: 线框图标、默认状态
- Duotone: 双色调图标、装饰状态

**图标规范：**
```css
:root {
  --icon-size-xs: 12px;
  --icon-size-sm: 16px;
  --icon-size-md: 20px;
  --icon-size-lg: 24px;
  --icon-size-xl: 32px;
  --icon-size-2xl: 48px;
}
```

**使用场景：**
- `--icon-size-xs`: 极小图标、徽标
- `--icon-size-sm`: 小图标、按钮图标
- `--icon-size-md`: 标准图标、列表图标
- `--icon-size-lg`: 大图标、卡片图标
- `--icon-size-xl`: 特大图标、装饰图标
- `--icon-size-2xl`: 超大图标、页面装饰

### 6.2 插画风格

**插画特点：**
- 风格简洁：从扁平到线框，从极简到技术
- 色彩适中：使用主色和中性色
- 细节清晰：注重清晰度和可读性
- 技术性：强调技术表达和教育价值

**插画使用原则：**
- 辅助理解：帮助用户理解复杂概念
- 增强体验：提升视觉吸引力和情感连接
- 品牌识别：传达品牌价值和个性
- 适度使用：避免过度装饰影响功能

---

## 七、交互与动效原则（Interaction & Motion）

### 7.1 交互状态

**Hover 状态：**
- 按钮：颜色加深、轻微阴影
- 卡片：阴影增强、轻微上浮
- 链接：下划线出现、颜色加深
- 图标：颜色变化、轻微缩放

**Active 状态：**
- 按钮：颜色更深、下沉效果
- 卡片：阴影减弱、下沉效果
- 链接：下划线保持、颜色保持
- 图标：颜色保持、缩放恢复

**Focus 状态：**
- 输入框：主色边框、外发光
- 按钮：主色边框、外发光
- 链接：下划线、外发光

### 7.2 动效节奏

**时长规范：**
```css
:root {
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;
}
```

**使用场景：**
- `--duration-instant`: 按钮点击、状态切换
- `--duration-fast`: 工具提示、下拉菜单
- `--duration-normal`: 模态框、页面切换
- `--duration-slow`: 复杂动画、数据加载
- `--duration-slower`: 页面加载、大型动画

**缓动函数：**
```css
:root {
  --easing-linear: linear;
  --easing-ease: ease;
  --easing-ease-in: ease-in;
  --easing-ease-out: ease-out;
  --easing-ease-in-out: ease-in-out;
  --easing-cubic-bezier: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 7.3 操作反馈

**成功反馈：**
- 绿色提示框
- 成功图标
- 短暂动画

**错误反馈：**
- 红色提示框
- 错误图标
- 震动效果

**警告反馈：**
- 黄色提示框
- 警告图标
- 闪烁效果

**加载反馈：**
- 加载动画
- 进度条
- 骨架屏

---

## 八、可复用 Design Token（工程友好）

### 8.1 Color Tokens

```css
:root {
  /* Primary */
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
  
  /* Neutral */
  --color-neutral-50: #FFFFFF;
  --color-neutral-100: #F9FAFB;
  --color-neutral-200: #F3F4F6;
  --color-neutral-300: #E5E7EB;
  --color-neutral-400: #D1D5DB;
  --color-neutral-500: #9CA3AF;
  --color-neutral-600: #6B7280;
  --color-neutral-700: #4B5563;
  --color-neutral-800: #374151;
  --color-neutral-900: #1F2937;
}
```

### 8.2 Spacing Tokens

```css
:root {
  --space-0: 0;
  --space-px: 1px;
  --space-0-5: 2px;
  --space-1: 4px;
  --space-1-5: 6px;
  --space-2: 8px;
  --space-2-5: 10px;
  --space-3: 12px;
  --space-3-5: 14px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 28px;
  --space-8: 32px;
  --space-9: 36px;
  --space-10: 40px;
  --space-11: 44px;
  --space-12: 48px;
  --space-14: 56px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-28: 112px;
  --space-32: 128px;
}
```

### 8.3 Radius Tokens

```css
:root {
  --radius-none: 0;
  --radius-sm: 2px;
  --radius-base: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 9999px;
}
```

### 8.4 Shadow Tokens

```css
:root {
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-2xl: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}
```

---

## 九、合法复刻建议（Important）

### 9.1 可以学习的元素

**设计规则：**
- 颜色系统的层次结构和命名规范
- 字体排版的层级和节奏
- 栅格系统的响应式断点
- 组件的尺寸规范和状态管理
- 交互反馈的时长和缓动函数
- Design Token 的命名和组织方式

**设计原则：**
- 专业性、技术性的视觉标准
- 教育性导向的设计思维
- 简洁表达的设计追求
- 清晰度优先的设计理念
- 用户体验优先的设计理念

### 9.2 不应复刻的元素

**品牌元素：**
- CSS-Tricks 的品牌标识和 Logo
- CSS-Tricks 的品牌色彩和配色方案
- CSS-Tricks 的专属字体和图标
- CSS-Tricks 的插画和视觉素材

**内容元素：**
- CSS-Tricks 的具体文案和内容
- CSS-Tricks 的产品界面和布局
- CSS-Tricks 的功能设计和交互流程
- CSS-Tricks 的商业模式和定价策略

**法律建议：**
- 学习设计规则和原则，而非复制具体实现
- 创建自己的品牌标识和视觉语言
- 使用开源或授权的字体、图标、插画
- 遵守知识产权和版权法律
- 在商业项目中使用时，确保获得适当授权