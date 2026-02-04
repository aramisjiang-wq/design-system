const fs = require('fs');
const path = require('path');

const designSystemsDir = '/Users/dong/Documents/Docs/DESIGN-SYSTEMS';

function fixExampleHtml(folderPath) {
    const examplePath = path.join(folderPath, 'example.html');
    
    if (!fs.existsSync(examplePath)) {
        console.log(`跳过: ${folderPath} (example.html 不存在)`);
        return;
    }
    
    let content = fs.readFileSync(examplePath, 'utf-8');
    
    const bodyRegex = /body\s*\{[^}]*min-height:\s*100vh[^}]*\}/;
    
    if (bodyRegex.test(content)) {
        content = content.replace(
            /body\s*\{([^}]*)min-height:\s*100vh([^}]*)\}/,
            'body {$1min-height: 100vh$2}\n\n        @media (max-height: 300px) {\n            body {\n                min-height: auto !important;\n                padding: 0.5rem !important;\n            }\n            .container {\n                padding: 0.5rem !important;\n                max-width: 100% !important;\n            }\n            header {\n                margin-bottom: 1rem !important;\n                padding-bottom: 0.5rem !important;\n            }\n            .section {\n                margin-bottom: 1rem !important;\n            }\n            h1 {\n                font-size: 1rem !important;\n            }\n            .section-title {\n                font-size: 0.75rem !important;\n                margin-bottom: 0.5rem !important;\n            }\n            .card {\n                padding: 0.5rem !important;\n            }\n            .btn {\n                padding: 0.25rem 0.5rem !important;\n                font-size: 0.65rem !important;\n            }\n            .input {\n                padding: 0.25rem 0.5rem !important;\n                font-size: 0.65rem !important;\n            }\n        }'
        );
        
        fs.writeFileSync(examplePath, content, 'utf-8');
        console.log(`修复: ${folderPath}`);
    } else {
        console.log(`跳过: ${folderPath} (无需修复)`);
    }
}

const folders = fs.readdirSync(designSystemsDir)
    .filter(name => fs.statSync(path.join(designSystemsDir, name)).isDirectory())
    .filter(name => /^\d{2}-/.test(name))
    .sort();

console.log(`找到 ${folders.length} 个设计规范文件夹\n`);

folders.forEach(folder => {
    const folderPath = path.join(designSystemsDir, folder);
    fixExampleHtml(folderPath);
});

console.log('\n修复完成！');