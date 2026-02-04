const fs = require('fs');
const path = require('path');

const designSystems = [
    { id: '63', name: 'Element UI', desc: '饿了么的 Vue 组件库，企业级后台设计规范', folder: 'design-systems/63-element-ui', category: 'modern' },
    { id: '64', name: 'Vercel Design', desc: 'Vercel 官方设计系统，开发者平台设计规范', folder: 'design-systems/64-vercel-design', category: 'modern' },
    { id: '65', name: 'Linear Design', desc: 'Linear 官方设计系统，项目管理工具设计规范', folder: 'design-systems/65-linear-design', category: 'modern' },
    { id: '66', name: 'Notion Design', desc: 'Notion 官方设计系统，知识管理工具设计规范', folder: 'design-systems/66-notion-design', category: 'modern' },
    { id: '67', name: 'Stripe Design', desc: 'Stripe 官方设计系统，支付平台设计规范', folder: 'design-systems/67-stripe-design', category: 'modern' },
    { id: '68', name: 'Airbnb Design', desc: 'Airbnb 官方设计系统，住宿平台设计规范', folder: 'design-systems/68-airbnb-design', category: 'modern' },
    { id: '69', name: 'Spotify Design', desc: 'Spotify 官方设计系统，音乐流媒体设计规范', folder: 'design-systems/69-spotify-design', category: 'modern' },
    { id: '70', name: 'Figma Design', desc: 'Figma 官方设计系统，协作设计工具设计规范', folder: 'design-systems/70-figma-design', category: 'modern' },
    { id: '71', name: 'Discord Design', desc: 'Discord 官方设计系统，即时通讯工具设计规范', folder: 'design-systems/71-discord-design', category: 'modern' },
    { id: '72', name: 'Slack Design', desc: 'Slack 官方设计系统，团队协作工具设计规范', folder: 'design-systems/72-slack-design', category: 'modern' },
    { id: '73', name: 'Framer Motion', desc: 'React 动画库，声明式动画设计规范', folder: 'design-systems/73-framer-motion', category: 'tech' },
    { id: '74', name: 'React Spring', desc: 'React 弹簧物理动画库，流畅动画设计规范', folder: 'design-systems/74-react-spring', category: 'tech' },
    { id: '75', name: 'Three.js', desc: 'Web 3D 图形库，三维场景设计规范', folder: 'design-systems/75-threejs', category: 'tech' },
    { id: '76', name: 'Lottie', desc: 'Airbnb 动画库，矢量动画设计规范', folder: 'design-systems/76-lottie', category: 'tech' },
    { id: '77', name: 'Dribbble Shots', desc: 'Dribbble 社区，设计师作品展示平台', folder: 'design-systems/77-dribbble-shots', category: 'art' },
    { id: '78', name: 'Pinterest Design', desc: 'Pinterest 官方设计系统，图片分享平台设计规范', folder: 'design-systems/78-pinterest-design', category: 'modern' },
    { id: '79', name: 'Canva Design', desc: 'Canva 官方设计系统，在线设计工具设计规范', folder: 'design-systems/79-canva-design', category: 'modern' },
    { id: '80', name: 'Framer Design', desc: 'Framer 官方设计系统，交互设计工具设计规范', folder: 'design-systems/80-framer-design', category: 'modern' },
    { id: '81', name: 'Sketch Design', desc: 'Sketch 官方设计系统，UI 设计工具设计规范', folder: 'design-systems/81-sketch-design', category: 'modern' },
    { id: '82', name: 'InVision Design', desc: 'InVision 官方设计系统，原型设计工具设计规范', folder: 'design-systems/82-invision-design', category: 'modern' },
    { id: '83', name: 'Adobe XD Design', desc: 'Adobe XD 官方设计系统，UI/UX 设计工具设计规范', folder: 'design-systems/83-adobe-xd-design', category: 'modern' },
    { id: '84', name: 'Figma Community', desc: 'Figma 社区，设计资源和组件库', folder: 'design-systems/84-figma-community', category: 'art' },
    { id: '85', name: 'UI8 Design', desc: 'UI8，高质量 UI 设计资源和模板', folder: 'design-systems/85-ui8-design', category: 'art' },
    { id: '86', name: 'Creative Market', desc: 'Creative Market，创意设计资源和模板', folder: 'design-systems/86-creative-market', category: 'art' },
    { id: '87', name: 'Envato Elements', desc: 'Envato Elements，丰富的设计资源和模板', folder: 'design-systems/87-envato-elements', category: 'art' },
    { id: '88', name: 'Awwwards', desc: 'Awwwards，最佳网站设计和创意作品展示', folder: 'design-systems/88-awwwards', category: 'art' },
    { id: '89', name: 'CSS-Tricks', desc: 'CSS-Tricks，前端设计和开发教程资源', folder: 'design-systems/89-css-tricks', category: 'tech' },
    { id: '90', name: 'Adobe Spectrum', desc: 'Adobe Spectrum 官方设计系统，Creative Cloud 设计规范', folder: 'design-systems/90-adobe-spectrum', category: 'modern' },
    { id: '91', name: 'GitHub Primer', desc: 'GitHub Primer 官方设计系统，开发者平台设计规范', folder: 'design-systems/91-github-primer', category: 'modern' },
    { id: '92', name: 'Twilio Paste', desc: 'Twilio Paste 官方设计系统，通信平台设计规范', folder: 'design-systems/92-twilio-paste', category: 'modern' },
    { id: '93', name: 'Segment Design', desc: 'Segment 官方设计系统，数据分析平台设计规范', folder: 'design-systems/93-segment-design', category: 'modern' },
    { id: '94', name: 'Intercom Design', desc: 'Intercom 官方设计系统，客户沟通平台设计规范', folder: 'design-systems/94-intercom-design', category: 'modern' },
    { id: '95', name: 'Help Scout Design', desc: 'Help Scout 官方设计系统，客户支持工具设计规范', folder: 'design-systems/95-help-scout-design', category: 'modern' },
    { id: '96', name: 'Mailchimp Design', desc: 'Mailchimp 官方设计系统，邮件营销平台设计规范', folder: 'design-systems/96-mailchimp-design', category: 'modern' }
];

function createReadme(system) {
    return `# ${system.name}

${system.desc}

## 设计特点

- 官方设计系统
- 完整的设计规范
- 可复用的组件库
- 最佳实践指南

## 使用方法

访问官方网站获取更多信息和资源。

## 相关资源

- 官方网站
- 设计文档
- 组件库
- 使用指南

## 最佳实践

遵循官方设计规范，确保一致性和用户体验。
`;
}

function createExample(system) {
    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${system.name} - 示例</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: #f5f5f5;
            color: #333;
            line-height: 1.6;
            padding: 40px 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        h1 {
            font-size: 48px;
            margin-bottom: 20px;
            color: #333;
        }
        
        .description {
            font-size: 18px;
            color: #666;
            margin-bottom: 40px;
        }
        
        .component-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
            margin-bottom: 40px;
        }
        
        .component-card {
            background: white;
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .component-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 16px;
            color: #333;
        }
        
        button {
            padding: 10px 20px;
            background: #333;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background 0.3s;
        }
        
        button:hover {
            background: #555;
        }
        
        input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-bottom: 10px;
            font-size: 14px;
        }
        
        .card {
            background: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>${system.name}</h1>
        <p class="description">${system.desc}</p>
        
        <div class="component-grid">
            <div class="component-card">
                <div class="component-title">按钮</div>
                <button>主要按钮</button>
                <button style="background: white; color: #333; border: 1px solid #ddd;">次要按钮</button>
            </div>
            
            <div class="component-card">
                <div class="component-title">输入框</div>
                <input type="text" placeholder="输入内容...">
            </div>
            
            <div class="component-card">
                <div class="component-title">卡片</div>
                <div class="card">
                    <h3>卡片标题</h3>
                    <p>卡片内容</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;
}

designSystems.forEach(system => {
    const folderPath = path.join(__dirname, system.folder);
    
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`Created folder: ${system.folder}`);
        
        const readmePath = path.join(folderPath, 'README.md');
        fs.writeFileSync(readmePath, createReadme(system));
        console.log(`Created README: ${readmePath}`);
        
        const examplePath = path.join(folderPath, 'example.html');
        fs.writeFileSync(examplePath, createExample(system));
        console.log(`Created example: ${examplePath}`);
    } else {
        console.log(`Folder already exists: ${system.folder}`);
    }
});

console.log('\\nAll design system folders created successfully!');
