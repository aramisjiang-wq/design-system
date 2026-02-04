#!/bin/bash

echo "========================================"
echo "推送代码到 GitHub"
echo "========================================"
echo ""

read -p "请输入 GitHub Personal Access Token: " TOKEN
echo ""

cd "$(dirname "$0")"

git remote set-url origin "https://${TOKEN}@github.com/aramisjiang-wq/design-system.git"

echo "正在推送到 GitHub..."
git push origin main

echo ""
echo "========================================"
if [ $? -eq 0 ]; then
    echo "✅ 推送成功！"
else
    echo "❌ 推送失败，请检查 Token 权限"
fi
echo "========================================"
