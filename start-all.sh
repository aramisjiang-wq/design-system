#!/bin/bash

echo "========================================"
echo "启动设计规范网站和提取服务"
echo "========================================"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo ""
echo "1. 检查并清理端口..."

# 清理端口 8082
if lsof -i:8082 > /dev/null 2>&1; then
    echo "清理端口 8082..."
    lsof -ti:8082 | xargs kill -9 2>/dev/null
fi

# 清理端口 3001
if lsof -i:3001 > /dev/null 2>&1; then
    echo "清理端口 3001..."
    lsof -ti:3001 | xargs kill -9 2>/dev/null
fi

sleep 1

echo ""
echo "2. 启动提取服务 (端口 3001)..."
cd "$SCRIPT_DIR/style-extractor"
node server.js > /tmp/extractor.log 2>&1 &
EXTRACTOR_PID=$!
echo "提取服务已启动 (PID: $EXTRACTOR_PID)"

sleep 2

echo ""
echo "3. 启动主网站 (端口 8082)..."
cd "$SCRIPT_DIR"
python3 -m http.server 8082 > /tmp/webserver.log 2>&1 &
WEBSERVER_PID=$!
echo "主网站已启动 (PID: $WEBSERVER_PID)"

sleep 2

echo ""
echo "========================================"
echo "服务启动完成"
echo "========================================"
echo ""
echo "访问地址:"
echo "  - 主网站: http://localhost:8082/"
echo "  - 提取工具: http://localhost:8082/extractor.html"
echo "  - API 测试: http://localhost:8082/test-api.html"
echo ""
echo "服务日志:"
echo "  - 提取服务: tail -f /tmp/extractor.log"
echo "  - 主网站: tail -f /tmp/webserver.log"
echo ""
echo "停止服务:"
echo "  kill $EXTRACTOR_PID $WEBSERVER_PID"
echo "  或运行: ./stop-services.sh"
echo ""
echo "========================================"
