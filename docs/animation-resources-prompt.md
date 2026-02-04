# 动画资源查询提示词

## 使用说明
复制以下提示词给AI，让AI帮你查找和推荐合适的动画库。

---

## 提示词模板

### 基础查询模板
```
我需要为[项目类型]找一个[动画类型]的动画库。

项目信息：
- 框架：[React/Vue/原生JavaScript]
- 动画类型：[2D/3D/过渡/复杂动画/简单动画]
- 性能要求：[轻量级/高性能/无所谓]
- 特殊需求：[手势支持/物理效果/时间轴控制/其他]

请查看以下GitHub仓库，帮我推荐合适的动画库：
1. https://github.com/sergey-pimenov/awesome-web-animation
2. https://github.com/sorrycc/awesome-javascript
3. https://github.com/enaqx/awesome-react (如果是React项目)
4. https://github.com/vuejs/awesome-vue (如果是Vue项目)

请提供：
1. 推荐的动画库名称
2. 安装命令
3. 简单的使用示例
4. 优缺点分析
```

### React项目查询模板
```
我需要为React项目找一个动画库。

项目信息：
- React版本：[React 16/17/18]
- 动画需求：[组件过渡/手势动画/复杂时间轴/简单效果]
- 包大小要求：[需要轻量级/无所谓]
- 是否需要：[拖拽支持/物理效果/手势识别]

请查看 https://github.com/enaqx/awesome-react 中的动画库部分，帮我推荐。

重点考虑：
- Framer Motion
- React Spring
- React Transition Group
- React Awesome Button

请提供：
1. 最推荐的3个库
2. 每个库的安装命令
3. 每个库的核心API使用示例
4. 适用场景对比
```

### Vue项目查询模板
```
我需要为Vue项目找一个动画库。

项目信息：
- Vue版本：[Vue 2/Vue 3]
- 动画需求：[过渡效果/组件动画/复杂动画]
- 是否需要：[轻量级/功能丰富]

请查看 https://github.com/vuejs/awesome-vue 中的动画库部分，帮我推荐。

重点考虑：
- Vue Transition (内置)
- v-animate-css
- Animate.css (配合Vue使用)

请提供：
1. 最推荐的2-3个库
2. 安装和使用方法
3. 与Vue的集成方式
4. 代码示例
```

### JavaScript动画库查询模板
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
- GSAP (GreenSock Animation Platform)
- Anime.js
- Velocity.js
- Three.js (如果是3D)
- Lottie

请提供：
1. 推荐的动画库
2. 安装命令
3. 基础使用示例
4. 性能对比
5. 适用场景
```

### CSS动画库查询模板
```
我需要一个CSS动画库。

项目信息：
- 动画类型：[悬停效果/过渡动画/加载动画]
- 是否需要JavaScript：[纯CSS/可以配合JS]
- 浏览器兼容性要求：[现代浏览器/需要兼容IE]

请查看 https://github.com/awesome-css-group/awesome-css 中的动画库部分。

重点考虑：
- Animate.css
- Hover.css
- Magic Animations
- Bounce.js

请提供：
1. 推荐的CSS动画库
2. 引入方式
3. 使用示例（HTML和CSS）
4. 自定义方法
```

### 3D动画库查询模板
```
我需要一个3D动画库。

项目信息：
- 使用框架：[原生JavaScript/React/Vue]
- 3D需求：[简单3D效果/复杂3D场景/粒子系统]
- WebGL要求：[需要WebGL/Canvas2D即可]
- 性能要求：[高性能/轻量级]

请查看 https://github.com/sergey-pimenov/awesome-web-animation 中的3D部分。

重点考虑：
- Three.js
- Babylon.js
- OGL
- PlayCanvas

请提供：
1. 推荐的3D库
2. 安装命令
3. 基础3D场景示例
4. 性能优化建议
```

### 数据可视化动画库查询模板
```
我需要一个数据可视化动画库。

项目信息：
- 数据类型：[图表/地图/网络图/时间轴]
- 动画需求：[数据更新动画/交互动画/加载动画]
- 复杂度：[简单图表/复杂可视化]

请查看以下GitHub仓库：
1. https://github.com/sorrycc/awesome-javascript (数据可视化部分)
2. https://github.com/enaqx/awesome-react (如果是React)
3. https://github.com/vuejs/awesome-vue (如果是Vue)

重点考虑：
- D3.js
- ECharts
- Chart.js
- Recharts (React)
- ApexCharts

请提供：
1. 推荐的可视化库
2. 安装命令
3. 基础图表示例
4. 动画配置方法
```

---

## 快速查询模板

### 按场景查询
```
场景：[按钮点击反馈/页面加载动画/滚动动画/组件过渡/拖拽效果/粒子效果]

请从以下GitHub仓库找到适合的动画库：
- https://github.com/sergey-pimenov/awesome-web-animation
- https://github.com/sorrycc/awesome-javascript

提供：库名称、安装命令、使用示例
```

### 按性能查询
```
性能要求：[极致性能/轻量级<10KB/中等大小/无所谓]

请推荐满足性能要求的动画库，并提供：
1. 库的大小对比
2. 性能测试结果
3. 使用建议
```

### 按学习曲线查询
```
学习难度：[新手友好/中等/需要一定基础]

请推荐适合[学习难度]的动画库，并提供：
1. 最适合的库
2. 学习资源链接
3. 入门示例
```

---

## GitHub资源库速查表

### 综合资源
- [sindresorhus/awesome](https://github.com/sindresorhus/awesome) - 所有技术方向的资源导航

### Web动画
- [sergey-pimenov/awesome-web-animation](https://github.com/sergey-pimenov/awesome-web-animation) - Web动画专用列表

### JavaScript
- [sorrycc/awesome-javascript](https://github.com/sorrycc/awesome-javascript) - JavaScript资源大全

### React
- [enaqx/awesome-react](https://github.com/enaqx/awesome-react) - React生态资源

### Vue
- [vuejs/awesome-vue](https://github.com/vuejs/awesome-vue) - Vue生态资源

### CSS
- [awesome-css-group/awesome-css](https://github.com/awesome-css-group/awesome-css) - CSS资源列表

### UI动画
- [animatious/awesome-animation](https://github.com/animatious/awesome-animation) - UI动画库资源

---

## 使用技巧

1. **明确需求**：先想清楚你要做什么动画，越具体越好
2. **选择模板**：根据你的项目类型选择对应的查询模板
3. **提供链接**：把相关的GitHub仓库链接一起发给AI
4. **要求示例**：让AI提供安装命令和使用示例
5. **对比分析**：让AI对比不同库的优缺点

---

## 示例对话

### 示例1：React项目
```
我需要为React 18项目找一个轻量级的动画库，主要用于组件过渡效果。

请查看 https://github.com/enaqx/awesome-react 帮我推荐。

请提供：
1. 推荐的库
2. 安装命令
3. 使用示例
4. 与其他库的对比
```

### 示例2：JavaScript动画
```
我需要一个JavaScript动画库来实现复杂的滚动动画和时间轴控制。

请查看以下仓库：
- https://github.com/sergey-pimenov/awesome-web-animation
- https://github.com/sorrycc/awesome-javascript

重点考虑GSAP和Anime.js，帮我选择并提供详细的使用指南。
```

### 示例3：CSS动画
```
我需要一些CSS悬停效果，不使用JavaScript。

请查看 https://github.com/awesome-css-group/awesome-css 推荐纯CSS的悬停效果库。
```
