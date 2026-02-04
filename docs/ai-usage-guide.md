# AI使用GitHub动画资源的方法提示词

## 核心原则

让AI使用GitHub资源时，遵循以下4个步骤，比直接让AI"自己进去找"更高效：

1. **先明确需求** - 告诉AI你要做什么（React/Vue、2D/3D、简单/复杂动画等）
2. **提供相关链接** - 给AI1-2个最相关的GitHub仓库
3. **让AI筛选** - 让AI根据你的需求从仓库中筛选合适的库
4. **获取具体信息** - 让AI提供安装命令、使用示例等

---

## 完整提示词模板

### 通用查询模板
```
我需要找一个动画库。

我的需求：
- 项目类型：[React/Vue/原生JavaScript/其他]
- 动画类型：[2D/3D/过渡/复杂动画/简单动画]
- 性能要求：[轻量级/高性能/无所谓]
- 特殊需求：[手势支持/物理效果/时间轴控制/拖拽/其他]

请查看以下GitHub仓库，帮我推荐合适的动画库：
[仓库链接1]
[仓库链接2]

请提供：
1. 推荐的动画库名称（3-5个）
2. 每个库的安装命令
3. 每个库的简单使用示例
4. 每个库的优缺点分析
5. 适用场景对比
```

---

## 按项目类型的模板

### React项目
```
我需要为React项目找一个动画库。

项目信息：
- React版本：[React 16/17/18]
- 动画需求：[组件过渡/手势动画/复杂时间轴/简单效果/拖拽]
- 包大小要求：[需要轻量级<10KB/中等大小/无所谓]
- 是否需要：[物理效果/手势识别/时间轴控制]

请查看 https://github.com/enaqx/awesome-react 中的动画库部分，帮我推荐。

重点考虑：
- Framer Motion - 声明式API、手势支持
- React Spring - 弹簧物理模型
- React Transition Group - 入场/出场动画
- React Awesome Button - 3D UI按钮

请提供：
1. 最推荐的3个库
2. 每个库的安装命令
3. 每个库的核心API使用示例
4. 适用场景对比
5. 性能和包大小对比
```

### Vue项目
```
我需要为Vue项目找一个动画库。

项目信息：
- Vue版本：[Vue 2/Vue 3]
- 动画需求：[过渡效果/组件动画/复杂动画/简单效果]
- 是否需要：[轻量级/功能丰富/配合CSS动画]

请查看 https://github.com/vuejs/awesome-vue 中的动画库部分，帮我推荐。

重点考虑：
- Vue Transition (内置) - 过渡系统
- v-animate-css - 轻量级Vue动画
- Animate.css - 配合Vue使用

请提供：
1. 最推荐的2-3个库
2. 安装和使用方法
3. 与Vue的集成方式
4. 代码示例
5. 性能对比
```

### 原生JavaScript
```
我需要找一个JavaScript动画库。

项目信息：
- 是否使用框架：[原生JavaScript/React/Vue/其他]
- 动画类型：[2D动画/3D动画/数据可视化/粒子效果]
- 复杂度：[简单过渡/复杂时间轴/物理效果]
- 性能要求：[高性能/轻量级/无所谓]

请查看以下GitHub仓库：
1. https://github.com/sergey-pimenov/awesome-web-animation
2. https://github.com/sorrycc/awesome-javascript

重点考虑：
- GSAP - 老牌全能、复杂时间轴
- Anime.js - 轻量级、易上手
- Velocity.js - 速度与优雅结合
- Three.js - 3D图形
- Lottie - 动画简化

请提供：
1. 推荐的动画库（3-5个）
2. 安装命令
3. 基础使用示例
4. 性能对比
5. 适用场景
```

---

## 按动画类型的模板

### CSS动画
```
我需要一个CSS动画库。

项目信息：
- 动画类型：[悬停效果/过渡动画/加载动画/关键帧动画]
- 是否需要JavaScript：[纯CSS/可以配合JS]
- 浏览器兼容性要求：[现代浏览器/需要兼容IE]

请查看 https://github.com/awesome-css-group/awesome-css 中的动画库部分。

重点考虑：
- Animate.css - 预设CSS3动画
- Hover.css - 悬停效果
- Magic Animations - 魔法动画
- Bounce.js - 弹跳效果

请提供：
1. 推荐的CSS动画库（2-3个）
2. 引入方式
3. 使用示例（HTML和CSS）
4. 自定义方法
5. 浏览器兼容性
```

### 3D动画
```
我需要一个3D动画库。

项目信息：
- 使用框架：[原生JavaScript/React/Vue]
- 3D需求：[简单3D效果/复杂3D场景/粒子系统/模型加载]
- WebGL要求：[需要WebGL/Canvas2D即可]
- 性能要求：[高性能/轻量级/无所谓]

请查看 https://github.com/sergey-pimenov/awesome-web-animation 中的3D部分。

重点考虑：
- Three.js - 最流行的3D库
- Babylon.js - 企业级3D引擎
- OGL - 轻量级WebGL
- PlayCanvas - 游戏引擎

请提供：
1. 推荐的3D库（2-3个）
2. 安装命令
3. 基础3D场景示例
4. 性能优化建议
5. 学习曲线
```

### 数据可视化
```
我需要一个数据可视化动画库。

项目信息：
- 数据类型：[图表/地图/网络图/时间轴/仪表板]
- 动画需求：[数据更新动画/交互动画/加载动画]
- 复杂度：[简单图表/复杂可视化]

请查看以下GitHub仓库：
1. https://github.com/sorrycc/awesome-javascript (数据可视化部分)
2. https://github.com/enaqx/awesome-react (如果是React)
3. https://github.com/vuejs/awesome-vue (如果是Vue)

重点考虑：
- D3.js - 数据驱动文档
- ECharts - 企业图表
- Chart.js - 轻量图表
- Recharts (React) - React图表
- ApexCharts - 现代图表

请提供：
1. 推荐的可视化库（2-3个）
2. 安装命令
3. 基础图表示例
4. 动画配置方法
5. 性能对比
```

---

## 按场景的模板

### 按钮动画
```
我需要为按钮添加动画效果。

需求：
- 动画类型：[悬停效果/点击反馈/加载状态/3D效果]
- 是否需要：[纯CSS/JavaScript动画]
- 框架：[React/Vue/原生]

请从以下仓库找到适合的按钮动画库：
- https://github.com/sergey-pimenov/awesome-web-animation
- https://github.com/enaqx/awesome-react (如果是React)
- https://github.com/vuejs/awesome-vue (如果是Vue)

提供：库名称、安装命令、使用示例
```

### 页面加载动画
```
我需要页面加载动画。

需求：
- 动画类型：[加载动画/骨架屏/进度条/全屏动画]
- 风格：[极简/炫酷/专业]
- 框架：[React/Vue/原生]

请从以下仓库找到适合的加载动画库：
- https://github.com/sergey-pimenov/awesome-web-animation
- https://github.com/sorrycc/awesome-javascript

提供：库名称、安装命令、使用示例
```

### 滚动动画
```
我需要滚动触发的动画。

需求：
- 动画类型：[元素淡入/视差滚动/固定元素/时间轴]
- 性能要求：[高性能/流畅60fps]
- 框架：[React/Vue/原生]

请从以下仓库找到适合的滚动动画库：
- https://github.com/sergey-pimenov/awesome-web-animation
- https://github.com/sorrycc/awesome-javascript

提供：库名称、安装命令、使用示例
```

### 组件过渡
```
我需要组件过渡动画。

需求：
- 过渡类型：[淡入淡出/滑动/缩放/翻转]
- 框架：[React/Vue]
- 复杂度：[简单过渡/复杂序列]

请从以下仓库找到适合的过渡库：
- https://github.com/enaqx/awesome-react (如果是React)
- https://github.com/vuejs/awesome-vue (如果是Vue)

提供：库名称、安装命令、使用示例
```

---

## 按性能的模板

### 轻量级需求
```
我需要一个轻量级的动画库。

性能要求：
- 包大小：[<5KB/<10KB/<20KB]
- 性能：[极致性能/流畅60fps]
- 功能：[简单动画/中等功能/功能丰富]

请推荐满足性能要求的动画库，并提供：
1. 库的大小对比
2. 性能测试结果
3. 使用建议
4. 与其他库的对比
```

### 高性能需求
```
我需要一个高性能的动画库。

性能要求：
- 帧率：[60fps/120fps/自适应]
- 复杂度：[复杂时间轴/大量元素/3D渲染]
- 优化：[GPU加速/内存优化]

请推荐满足性能要求的动画库，并提供：
1. 性能优化建议
2. 性能测试方法
3. 最佳实践
```

---

## 按学习曲线的模板

### 新手友好
```
我需要一个新手友好的动画库。

学习要求：
- 学习难度：[零基础/有一定基础/需要学习]
- 文档质量：[详细文档/示例丰富/社区活跃]
- 上手速度：[快速上手/需要时间]

请推荐适合新手的动画库，并提供：
1. 最适合的库（2-3个）
2. 学习资源链接
3. 入门示例
4. 学习路径建议
```

### 高级功能
```
我需要功能丰富的动画库。

功能要求：
- 高级功能：[时间轴控制/物理效果/插件系统/自定义缓动]
- 灵活性：[高度可定制/中等灵活/固定效果]
- 扩展性：[插件支持/自定义钩子]

请推荐功能丰富的动画库，并提供：
1. 最强大的库（2-3个）
2. 高级功能示例
3. 最佳实践
```

---

## GitHub资源库速查表

### 综合资源
- [sindresorhus/awesome](https://github.com/sindresorhus/awesome) ⭐ 300k+
  - 所有技术方向的资源导航
  - 可以找到各种awesome子项目

### Web动画
- [sergey-pimenov/awesome-web-animation](https://github.com/sergey-pimenov/awesome-web-animation)
  - Web动画专用列表
  - 包含动画库、书籍、应用等

### JavaScript
- [sorrycc/awesome-javascript](https://github.com/sorrycc/awesome-javascript) ⭐ 30k+
  - JavaScript资源大全
  - 包含包管理器、加载器、测试框架、MVC框架、模板引擎、数据可视化等

### React
- [enaqx/awesome-react](https://github.com/enaqx/awesome-react) ⭐ 40k+
  - React生态资源
  - React动画库、组件、工具等

### Vue
- [vuejs/awesome-vue](https://github.com/vuejs/awesome-vue) ⭐ 70k+
  - Vue生态资源
  - Vue动画库、组件、插件等

### CSS
- [awesome-css-group/awesome-css](https://github.com/awesome-css-group/awesome-css)
  - CSS资源列表
  - CSS动画库、框架、工具等

### UI动画
- [animatious/awesome-animation](https://github.com/animatious/awesome-animation)
  - UI动画库资源
  - 预设动画效果、组件等

---

## 使用技巧

### 1. 明确需求
在询问AI之前，先想清楚：
- 你要做什么类型的动画？
- 使用什么框架？
- 性能要求是什么？
- 有没有特殊需求？

### 2. 选择合适的模板
根据你的情况选择对应的模板：
- 按项目类型：React/Vue/原生JavaScript
- 按动画类型：CSS/3D/数据可视化
- 按场景：按钮/加载/滚动/过渡
- 按性能：轻量级/高性能
- 按学习曲线：新手/高级

### 3. 提供相关链接
把1-2个最相关的GitHub仓库链接一起发给AI：
- React项目 → awesome-react
- Vue项目 → awesome-vue
- JavaScript → awesome-javascript + awesome-web-animation
- CSS → awesome-css
- 3D → awesome-web-animation

### 4. 要求具体信息
让AI提供：
- 推荐的库名称（3-5个）
- 安装命令
- 使用示例
- 优缺点分析
- 适用场景对比

### 5. 对比分析
让AI对比不同库的：
- 性能
- 包大小
- 学习曲线
- 功能丰富度
- 社区活跃度

---

## 为什么这样更高效

### 直接让AI"自己进去找"的问题
- AI需要猜测你的需求
- 可能推荐不合适的库
- 缺少具体的使用场景
- 没有性能和功能对比

### 按模板提问的优势
- 明确你的具体需求
- AI能精准筛选
- 提供实用的代码示例
- 有针对性的对比分析
- 节省时间

---

## 实际使用示例

### 示例1：React项目
```
我需要为React 18项目找一个轻量级的动画库，主要用于组件过渡效果。

我的需求：
- React版本：18
- 动画类型：组件过渡
- 包大小要求：<10KB
- 性能要求：60fps

请查看 https://github.com/enaqx/awesome-react 帮我推荐。

请提供：
1. 推荐的3个库
2. 每个库的安装命令
3. 每个库的使用示例
4. 包大小和性能对比
```

### 示例2：JavaScript动画
```
我需要一个JavaScript动画库来实现复杂的滚动动画和时间轴控制。

我的需求：
- 框架：原生JavaScript
- 动画类型：滚动动画 + 时间轴
- 复杂度：复杂
- 性能要求：高性能

请查看以下仓库：
- https://github.com/sergey-pimenov/awesome-web-animation
- https://github.com/sorrycc/awesome-javascript

重点考虑GSAP和Anime.js，帮我选择并提供详细的使用指南。
```

### 示例3：CSS动画
```
我需要一些CSS悬停效果，不使用JavaScript。

我的需求：
- 动画类型：悬停效果
- 技术要求：纯CSS
- 浏览器要求：现代浏览器

请查看 https://github.com/awesome-css-group/awesome-css 推荐纯CSS的悬停效果库。

请提供：
1. 推荐的2个库
2. 引入方式
3. 使用示例
4. 自定义方法
```

### 示例4：3D动画
```
我需要为React项目添加3D效果。

我的需求：
- 框架：React
- 3D需求：简单的3D旋转效果
- 性能要求：轻量级
- 学习曲线：新手友好

请查看 https://github.com/enaqx/awesome-react 和 https://github.com/sergey-pimenov/awesome-web-animation 帮我推荐。

请提供：
1. 推荐的库
2. 安装命令
3. React集成示例
4. 学习资源
```

---

## 总结

使用这4步方法：
1. **先明确需求** - 告诉AI你要做什么
2. **提供相关链接** - 给AI1-2个最相关的GitHub仓库
3. **让AI筛选** - 让AI根据你的需求从仓库中筛选合适的库
4. **获取具体信息** - 让AI提供安装命令、使用示例等

这样比直接让AI"自己进去找"更高效，因为AI能结合你的具体需求给出精准推荐。
