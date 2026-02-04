#!/bin/bash

echo "========================================"
echo "停止设计规范网站和提取服务"
echo "========================================"

echo ""
echo "1. 停止主网站 (端口 8082)..."
if lsof -i:8082 > /dev/null 2>&1; then
    lsof -ti:8082 | xargs kill -9 2>/dev/null
    echo "✓ 主网站已停止"
else
    echo "✗ 主网站未运行"
fi

echo ""
echo "2. 停止提取服务 (端口 3001)..."
if lsof -i:3001 > /dev/null 2>&1; then
    lsof -ti:3001 | xargs kill -9 2>/dev/null
    echo "✓ 提取服务已停止"
else
    echo "✗ 提取服务未运行"
fi

echo ""
echo "========================================"
echo "所有服务已停止"
echo "========================================"
