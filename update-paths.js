const fs = require('fs');
const path = require('path');

const indexPath = '/Users/dong/Documents/Docs/DESIGN-SYSTEMS/index.html';

let content = fs.readFileSync(indexPath, 'utf-8');

content = content.replace(/folder: '(\d{2}-[^']+)'/g, "folder: 'docs/$1'");

fs.writeFileSync(indexPath, content, 'utf-8');

console.log('已更新 index.html 中的路径');
