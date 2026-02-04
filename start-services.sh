#!/bin/bash

echo "========================================"
echo "启动设计规范网站和样式提取服务"
echo "========================================"
echo ""

# 检查是否在正确的目录
if [ ! -d "DESIGN-SYSTEMS" ]; then
    echo "错误：请在 DESIGN-SYSTEMS 目录的父目录运行此脚本"
    exit 1
fi

cd DESIGN-SYSTEMS

# 启动HTTP服务器（端口8082）
echo "启动HTTP服务器（端口8082）..."
python3 -m http.server 8082 &
HTTP_PID=$!
echo "HTTP服务器已启动 (PID: $HTTP_PID)"

# 启动样式提取服务（端口3000）
echo ""
echo "启动样式提取服务（端口3000）..."
cd style-extractor
node server.js &
EXTRACTOR_PID=$!
echo "样式提取服务已启动 (PID: $EXTRACTOR_PID)"

# 返回到DESIGN-SYSTEMS目录
cd ..

echo ""
echo "========================================"
echo "所有服务已启动！"
echo "========================================"
echo ""
echo "设计规范网站: http://localhost:8082/"
echo "样式提取服务: http://localhost:3000"
echo "样式提取工具: http://localhost:8082/extractor.html"
echo ""
echo "按 Ctrl+C 停止所有服务"
echo "========================================"

# 等待用户中断
trap "echo ''; echo '正在停止服务...'; kill $HTTP_PID $EXTRACTOR_PID 2>/dev/null; echo '所有服务已停止'; exit 0" INT TERM

# 保持脚本运行
wait
