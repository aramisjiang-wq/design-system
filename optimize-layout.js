const fs = require('fs');
const path = require('path');

const indexPath = '/Users/dong/Documents/Docs/DESIGN-SYSTEMS/index.html';

let content = fs.readFileSync(indexPath, 'utf-8');

content = content.replace(/margin-bottom: 60px;/g, 'margin-bottom: 40px;');
content = content.replace(/margin-bottom: 30px;/g, 'margin-bottom: 20px;');
content = content.replace(/margin-bottom: 48px;/g, 'margin-bottom: 30px;');
content = content.replace(/padding: 48px 24px;/g, 'padding: 30px 20px;');
content = content.replace(/padding: 20px;/g, 'padding: 16px;');
content = content.replace(/margin-bottom: 40px;/g, 'margin-bottom: 30px;');
content = content.replace(/padding-bottom: 30px;/g, 'padding-bottom: 20px;');
content = content.replace(/padding-bottom: 40px;/g, 'padding-bottom: 30px;');
content = content.replace(/margin-bottom: 10px;/g, 'margin-bottom: 8px;');
content = content.replace(/gap: 24px;/g, 'gap: 16px;');
content = content.replace(/height: 200px;/g, 'height: 160px;');
content = content.replace(/minmax\(320px, 1fr\)/g, 'minmax(280px, 1fr)');

fs.writeFileSync(indexPath, content, 'utf-8');

console.log('已优化页面排版');
