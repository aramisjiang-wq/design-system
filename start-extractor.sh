#!/bin/bash

cd "$(dirname "$0")/style-extractor"

echo "========================================"
echo "启动样式提取服务（增强版）"
echo "========================================"

lsof -ti:3001 | xargs kill -9 2>/dev/null

echo "正在启动服务器..."
node server-enhanced.js &
SERVER_PID=$!

sleep 2

if ps -p $SERVER_PID > /dev/null; then
    echo "✓ 服务器启动成功 (PID: $SERVER_PID)"
    echo "========================================"
    echo "服务地址: http://localhost:3001"
    echo "健康检查: http://localhost:3001/health"
    echo "提取接口: http://localhost:3001/extract"
    echo "========================================"
    echo ""
    echo "按 Ctrl+C 停止服务器"
    echo ""
    
    wait $SERVER_PID
else
    echo "✗ 服务器启动失败"
    exit 1
fi
