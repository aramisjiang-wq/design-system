# Design System Collection

这是一个包含 96 种设计风格的资源集合网站。

## 部署状态

- ✅ 部署在 Vercel
- ✅ 纯静态站点，无需构建
- ✅ 直接访问 index.html

## 项目结构

```
design-system/
├── index.html                  # 主页面 - 96个设计风格索引
├── design-systems/             # 96个设计风格示例
│   ├── 01-industrial-utilitarianism/
│   ├── 02-minimalism/
│   └── ... (共96个)
├── animation-resources.html    # 动画资源
├── design-cases.html           # 设计案例
├── design-resources.html       # 设计资源
└── vercel.json                 # Vercel 部署配置
```

## 本地开发

直接用浏览器打开 index.html 即可查看：

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

## Vercel 配置

项目已配置为静态站点：
- buildCommand: 无需构建
- outputDirectory: 当前目录
- framework: static

## License

MIT
