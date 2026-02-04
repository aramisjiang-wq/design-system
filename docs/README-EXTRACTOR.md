# 网站样式提取工具 - 使用说明

## 快速开始

### 1. 启动服务

```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS
./start-all.sh
```

### 2. 访问工具

打开浏览器访问以下地址：

- **主网站**: http://localhost:8082/
- **提取工具**: http://localhost:8082/extractor.html
- **API 测试**: http://localhost:8082/test-api.html

### 3. 使用提取工具

1. 在提取工具页面输入要提取的网站 URL
2. 点击"提取设计规范"按钮
3. 等待提取完成
4. 查看提取结果，可以复制或下载

### 4. 停止服务

```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS
./stop-services.sh
```

## 功能说明

### 提取工具功能

- **自动提取**: 从任意网站提取设计规范
- **样式分析**: 分析颜色、字体、间距、组件等
- **Markdown 输出**: 生成标准化的设计规范文档
- **复制下载**: 支持复制到剪贴板或下载为文件

### 提取内容

提取工具会分析以下内容：

1. **元数据**: 网站 URL、提取时间
2. **设计理念**: 自动生成的风格描述
3. **字体系统**: 字体家族、字号、字重
4. **颜色系统**: 主色、辅助色、功能色
5. **间距系统**: 内边距、外边距、行高
6. **组件样式**: 按钮、输入框、卡片等

## 技术架构

### 后端服务

- **端口**: 3001
- **技术**: Node.js + HTTP 模块
- **功能**: 
  - 处理跨域请求
  - 网页内容获取
  - 样式提取和分析
  - Markdown 生成

### 前端界面

- **端口**: 8082
- **技术**: HTML + CSS + JavaScript
- **设计**: 工业实用主义风格
- **功能**:
  - URL 输入
  - 提取按钮
  - 结果展示
  - 复制/下载功能

## API 接口

### 健康检查

```bash
GET http://localhost:3001/health
```

响应：
```json
{
  "status": "ok",
  "message": "样式提取服务运行正常"
}
```

### 提取接口

```bash
POST http://localhost:3001/extract
Content-Type: application/json

{
  "url": "https://example.com"
}
```

响应：
```json
{
  "success": true,
  "markdown": "# 设计规范提取结果\n...",
  "url": "https://example.com",
  "extractedAt": "2026-01-31T01:29:58.355Z"
}
```

## 故障排除

### 提取失败: Failed to fetch

**原因**: 后端服务未启动

**解决方法**:
```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS
./start-all.sh
```

### 服务器离线

**原因**: 提取服务未运行

**解决方法**:
```bash
cd /Users/dong/Documents/Docs/DESIGN-SYSTEMS/style-extractor
node server.js
```

### 端口被占用

**原因**: 端口 3001 或 8082 已被其他程序占用

**解决方法**:
```bash
# 清理端口
lsof -ti:3001 | xargs kill -9 2>/dev/null
lsof -ti:8082 | xargs kill -9 2>/dev/null

# 重新启动
./start-all.sh
```

## 注意事项

1. **跨域限制**: 某些网站可能不允许跨域访问，提取可能失败
2. **HTTPS**: 目标网站必须支持 HTTPS
3. **网络连接**: 确保网络连接正常
4. **样式完整性**: 提取结果取决于网站的样式实现方式

## 示例

### 提取示例网站

```bash
curl -X POST http://localhost:3001/extract \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
```

### 查看服务日志

```bash
# 提取服务日志
tail -f /tmp/extractor.log

# 主网站日志
tail -f /tmp/webserver.log
```

## 项目结构

```
DESIGN-SYSTEMS/
├── extractor.html              # 提取工具界面
├── test-api.html              # API 测试页面
├── index.html                 # 主网站
├── start-all.sh               # 启动所有服务
├── stop-services.sh           # 停止所有服务
├── README-EXTRACTOR.md        # 本文档
└── style-extractor/
    ├── server.js              # 后端服务器
    ├── extractor.js           # 提取核心模块
    ├── test-connection.js     # 连接测试脚本
    ├── test-simple.js         # 简单测试脚本
    └── test-full.js           # 完整测试脚本
```

## 更新日志

### v1.0.0 (2026-01-31)

- 初始版本发布
- 支持基本样式提取功能
- 提供网页界面
- 支持复制和下载功能
