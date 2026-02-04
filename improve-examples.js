const fs = require('fs');
const path = require('path');

const designSystems = [
    { id: '63', name: 'Element UI', desc: '饿了么的 Vue 组件库，企业级后台设计规范', folder: 'design-systems/63-element-ui', category: 'modern', primaryColor: '#409EFF', secondaryColor: '#67C23A', dangerColor: '#F56C6C' },
    { id: '64', name: 'Vercel Design', desc: 'Vercel 官方设计系统，开发者平台设计规范', folder: 'design-systems/64-vercel-design', category: 'modern', primaryColor: '#000000', secondaryColor: '#0070F3', dangerColor: '#FF0000' },
    { id: '65', name: 'Linear Design', desc: 'Linear 官方设计系统，项目管理工具设计规范', folder: 'design-systems/65-linear-design', category: 'modern', primaryColor: '#5E6AD2', secondaryColor: '#8B9BEA', dangerColor: '#E5484D' },
    { id: '66', name: 'Notion Design', desc: 'Notion 官方设计系统，知识管理工具设计规范', folder: 'design-systems/66-notion-design', category: 'modern', primaryColor: '#2383E2', secondaryColor: '#E1E1E1', dangerColor: '#EB5757' },
    { id: '67', name: 'Stripe Design', desc: 'Stripe 官方设计系统，支付平台设计规范', folder: 'design-systems/67-stripe-design', category: 'modern', primaryColor: '#635BFF', secondaryColor: '#0A2540', dangerColor: '#DF1B41' },
    { id: '68', name: 'Airbnb Design', desc: 'Airbnb 官方设计系统，住宿平台设计规范', folder: 'design-systems/68-airbnb-design', category: 'modern', primaryColor: '#FF385C', secondaryColor: '#008489', dangerColor: '#FF385C' },
    { id: '69', name: 'Spotify Design', desc: 'Spotify 官方设计系统，音乐流媒体设计规范', folder: 'design-systems/69-spotify-design', category: 'modern', primaryColor: '#1DB954', secondaryColor: '#191414', dangerColor: '#E91429' },
    { id: '70', name: 'Figma Design', desc: 'Figma 官方设计系统，协作设计工具设计规范', folder: 'design-systems/70-figma-design', category: 'modern', primaryColor: '#F24E1E', secondaryColor: '#A259FF', dangerColor: '#FF7262' },
    { id: '71', name: 'Discord Design', desc: 'Discord 官方设计系统，即时通讯工具设计规范', folder: 'design-systems/71-discord-design', category: 'modern', primaryColor: '#5865F2', secondaryColor: '#404EED', dangerColor: '#ED4245' },
    { id: '72', name: 'Slack Design', desc: 'Slack 官方设计系统，团队协作工具设计规范', folder: 'design-systems/72-slack-design', category: 'modern', primaryColor: '#4A154B', secondaryColor: '#ECB22E', dangerColor: '#E01E5A' },
    { id: '73', name: 'Framer Motion', desc: 'React 动画库，声明式动画设计规范', folder: 'design-systems/73-framer-motion', category: 'tech', primaryColor: '#0055FF', secondaryColor: '#FF0080', dangerColor: '#FF0055' },
    { id: '74', name: 'React Spring', desc: 'React 弹簧物理动画库，流畅动画设计规范', folder: 'design-systems/74-react-spring', category: 'tech', primaryColor: '#FF6B6B', secondaryColor: '#4ECDC4', dangerColor: '#FFE66D' },
    { id: '75', name: 'Three.js', desc: 'Web 3D 图形库，三维场景设计规范', folder: 'design-systems/75-threejs', category: 'tech', primaryColor: '#000000', secondaryColor: '#FFFFFF', dangerColor: '#FF0000' },
    { id: '76', name: 'Lottie', desc: 'Airbnb 动画库，矢量动画设计规范', folder: 'design-systems/76-lottie', category: 'tech', primaryColor: '#23A9F2', secondaryColor: '#FF385C', dangerColor: '#FF6B6B' },
    { id: '77', name: 'Dribbble Shots', desc: 'Dribbble 社区，设计师作品展示平台', folder: 'design-systems/77-dribbble-shots', category: 'art', primaryColor: '#EA4C89', secondaryColor: '#C32361', dangerColor: '#9B1D52' },
    { id: '78', name: 'Pinterest Design', desc: 'Pinterest 官方设计系统，图片分享平台设计规范', folder: 'design-systems/78-pinterest-design', category: 'modern', primaryColor: '#E60023', secondaryColor: '#BD081C', dangerColor: '#E60023' },
    { id: '79', name: 'Canva Design', desc: 'Canva 官方设计系统，在线设计工具设计规范', folder: 'design-systems/79-canva-design', category: 'modern', primaryColor: '#00C4CC', secondaryColor: '#7D2AE8', dangerColor: '#FF3366' },
    { id: '80', name: 'Framer Design', desc: 'Framer 官方设计系统，交互设计工具设计规范', folder: 'design-systems/80-framer-design', category: 'modern', primaryColor: '#0055FF', secondaryColor: '#FF0080', dangerColor: '#FF0055' },
    { id: '81', name: 'Sketch Design', desc: 'Sketch 官方设计系统，UI 设计工具设计规范', folder: 'design-systems/81-sketch-design', category: 'modern', primaryColor: '#F7B500', secondaryColor: '#F24E1E', dangerColor: '#FF6B6B' },
    { id: '82', name: 'InVision Design', desc: 'InVision 官方设计系统，原型设计工具设计规范', folder: 'design-systems/82-invision-design', category: 'modern', primaryColor: '#FF3366', secondaryColor: '#F5E6E8', dangerColor: '#FF3366' },
    { id: '83', name: 'Adobe XD Design', desc: 'Adobe XD 官方设计系统，UI/UX 设计工具设计规范', folder: 'design-systems/83-adobe-xd-design', category: 'modern', primaryColor: '#FF2BC2', secondaryColor: '#470137', dangerColor: '#FF2BC2' },
    { id: '84', name: 'Figma Community', desc: 'Figma 社区，设计资源和组件库', folder: 'design-systems/84-figma-community', category: 'art', primaryColor: '#F24E1E', secondaryColor: '#A259FF', dangerColor: '#FF7262' },
    { id: '85', name: 'UI8 Design', desc: 'UI8，高质量 UI 设计资源和模板', folder: 'design-systems/85-ui8-design', category: 'art', primaryColor: '#6C5CE7', secondaryColor: '#00CEC9', dangerColor: '#FF7675' },
    { id: '86', name: 'Creative Market', desc: 'Creative Market，创意设计资源和模板', folder: 'design-systems/86-creative-market', category: 'art', primaryColor: '#F7931E', secondaryColor: '#00B894', dangerColor: '#D63031' },
    { id: '87', name: 'Envato Elements', desc: 'Envato Elements，丰富的设计资源和模板', folder: 'design-systems/87-envato-elements', category: 'art', primaryColor: '#82B440', secondaryColor: '#3E7CF5', dangerColor: '#E74C3C' },
    { id: '88', name: 'Awwwards', desc: 'Awwwards，最佳网站设计和创意作品展示', folder: 'design-systems/88-awwwards', category: 'art', primaryColor: '#FF4D4D', secondaryColor: '#000000', dangerColor: '#FF4D4D' },
    { id: '89', name: 'CSS-Tricks', desc: 'CSS-Tricks，前端设计和开发教程资源', folder: 'design-systems/89-css-tricks', category: 'tech', primaryColor: '#1572B6', secondaryColor: '#F7DF1E', dangerColor: '#E34F26' },
    { id: '90', name: 'Adobe Spectrum', desc: 'Adobe Spectrum 官方设计系统，Creative Cloud 设计规范', folder: 'design-systems/90-adobe-spectrum', category: 'modern', primaryColor: '#FF3366', secondaryColor: '#470137', dangerColor: '#FF3366' },
    { id: '91', name: 'GitHub Primer', desc: 'GitHub Primer 官方设计系统，开发者平台设计规范', folder: 'design-systems/91-github-primer', category: 'modern', primaryColor: '#24292F', secondaryColor: '#0366D6', dangerColor: '#D73A49' },
    { id: '92', name: 'Twilio Paste', desc: 'Twilio Paste 官方设计系统，通信平台设计规范', folder: 'design-systems/92-twilio-paste', category: 'modern', primaryColor: '#F22F46', secondaryColor: '#0D122B', dangerColor: '#F22F46' },
    { id: '93', name: 'Segment Design', desc: 'Segment 官方设计系统，数据分析平台设计规范', folder: 'design-systems/93-segment-design', category: 'modern', primaryColor: '#FF5A5F', secondaryColor: '#0A2540', dangerColor: '#FF5A5F' },
    { id: '94', name: 'Intercom Design', desc: 'Intercom 官方设计系统，客户沟通平台设计规范', folder: 'design-systems/94-intercom-design', category: 'modern', primaryColor: '#1F8DED', secondaryColor: '#2C3E50', dangerColor: '#E74C3C' },
    { id: '95', name: 'Help Scout Design', desc: 'Help Scout 官方设计系统，客户支持工具设计规范', folder: 'design-systems/95-help-scout-design', category: 'modern', primaryColor: '#3A6EA5', secondaryColor: '#F7F9FC', dangerColor: '#E74C3C' },
    { id: '96', name: 'Mailchimp Design', desc: 'Mailchimp 官方设计系统，邮件营销平台设计规范', folder: 'design-systems/96-mailchimp-design', category: 'modern', primaryColor: '#FFE01B', secondaryColor: '#24292F', dangerColor: '#E74C3C' }
];

function createExample(system) {
    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${system.name} 设计示例</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: #F5F5F5;
            color: #333;
            min-height: 100vh;
            line-height: 1.6;
        }

        @media (max-height: 300px) {
            body {
                min-height: auto !important;
                padding: 0.5rem !important;
            }
            .container {
                padding: 0.5rem !important;
                max-width: 100% !important;
            }
            header {
                margin-bottom: 1rem !important;
                padding-bottom: 0.5rem !important;
            }
            .section {
                margin-bottom: 1rem !important;
            }
            h1 {
                font-size: 1rem !important;
            }
            .subtitle {
                font-size: 0.75rem !important;
            }
            .section-title {
                font-size: 0.75rem !important;
                margin-bottom: 0.5rem !important;
            }
            .card {
                padding: 0.5rem !important;
            }
            .btn {
                padding: 0.25rem 0.5rem !important;
                font-size: 0.65rem !important;
            }
            .input {
                padding: 0.25rem 0.5rem !important;
                font-size: 0.65rem !important;
            }
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

        header {
            text-align: center;
            padding-bottom: 2rem;
            margin-bottom: 2rem;
            border-bottom: 1px solid #E0E0E0;
        }

        h1 {
            font-size: 2.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: ${system.primaryColor};
        }

        .subtitle {
            font-size: 1.125rem;
            color: #666;
            font-weight: 400;
        }

        .section {
            margin-bottom: 3rem;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: #333;
        }

        .button-group {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-bottom: 2rem;
        }

        button {
            padding: 0.625rem 1.25rem;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            font-weight: 400;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        button.primary {
            background: ${system.primaryColor};
            color: white;
        }

        button.primary:hover {
            opacity: 0.9;
        }

        button.secondary {
            background: #F0F0F0;
            color: #333;
        }

        button.secondary:hover {
            background: #E0E0E0;
        }

        button.danger {
            background: ${system.dangerColor};
            color: white;
        }

        button.danger:hover {
            opacity: 0.9;
        }

        .card {
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 1rem;
            border: 1px solid #E0E0E0;
        }

        .card:hover {
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        .input-group {
            margin-bottom: 1.5rem;
        }

        label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
            color: #333;
        }

        input {
            width: 100%;
            padding: 0.625rem 0.75rem;
            border: 1px solid #D9D9D9;
            border-radius: 4px;
            font-size: 1rem;
            font-family: inherit;
            background: white;
            transition: all 0.2s ease;
        }

        input:focus {
            outline: none;
            border-color: ${system.primaryColor};
            box-shadow: 0 0 0 3px ${system.primaryColor}20;
        }

        .nav {
            background: white;
            border-bottom: 1px solid #E0E0E0;
            padding: 1rem 2rem;
            display: flex;
            gap: 2rem;
            align-items: center;
        }

        .nav a {
            color: #333;
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 400;
            transition: color 0.2s ease;
        }

        .nav a:hover {
            color: ${system.primaryColor};
        }

        .nav a.active {
            color: ${system.primaryColor};
            font-weight: 500;
        }

        .badge {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 500;
            background: ${system.primaryColor}15;
            color: ${system.primaryColor};
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background: #E0E0E0;
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 1rem;
        }

        .progress-fill {
            height: 100%;
            background: ${system.primaryColor};
            border-radius: 4px;
            width: 60%;
            transition: width 0.3s ease;
        }

        .tag {
            display: inline-block;
            padding: 0.375rem 0.75rem;
            border-radius: 16px;
            font-size: 0.875rem;
            background: ${system.secondaryColor}15;
            color: ${system.secondaryColor};
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
        }

        .avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: ${system.primaryColor};
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            font-size: 1.25rem;
        }

        .list-item {
            display: flex;
            align-items: center;
            padding: 1rem;
            border-bottom: 1px solid #E0E0E0;
            gap: 1rem;
        }

        .list-item:last-child {
            border-bottom: none;
        }

        .list-content {
            flex: 1;
        }

        .list-title {
            font-weight: 600;
            margin-bottom: 0.25rem;
        }

        .list-desc {
            font-size: 0.875rem;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>${system.name}</h1>
            <p class="subtitle">${system.desc}</p>
        </header>

        <div class="section">
            <h2>按钮</h2>
            <div class="button-group">
                <button class="primary">主要按钮</button>
                <button class="secondary">次要按钮</button>
                <button class="danger">危险按钮</button>
            </div>
        </div>

        <div class="section">
            <h2>卡片</h2>
            <div class="card">
                <h3>卡片标题</h3>
                <p style="color: #666; margin-top: 0.5rem;">这是一个卡片示例，展示了${system.name}的设计风格。</p>
                <div style="margin-top: 1rem;">
                    <span class="badge">标签</span>
                    <span class="badge" style="background: ${system.secondaryColor}15; color: ${system.secondaryColor};">标签2</span>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>输入框</h2>
            <div class="input-group">
                <label>用户名</label>
                <input type="text" placeholder="请输入用户名">
            </div>
            <div class="input-group">
                <label>密码</label>
                <input type="password" placeholder="请输入密码">
            </div>
        </div>

        <div class="section">
            <h2>导航栏</h2>
            <div class="nav">
                <a href="#" class="active">首页</a>
                <a href="#">产品</a>
                <a href="#">服务</a>
                <a href="#">关于</a>
            </div>
        </div>

        <div class="section">
            <h2>进度条</h2>
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
        </div>

        <div class="section">
            <h2>标签</h2>
            <div>
                <span class="tag">设计</span>
                <span class="tag">开发</span>
                <span class="tag">产品</span>
                <span class="tag">用户体验</span>
            </div>
        </div>

        <div class="section">
            <h2>列表项</h2>
            <div style="background: white; border-radius: 8px; border: 1px solid #E0E0E0; overflow: hidden;">
                <div class="list-item">
                    <div class="avatar">A</div>
                    <div class="list-content">
                        <div class="list-title">项目名称</div>
                        <div class="list-desc">项目描述信息</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="avatar" style="background: ${system.secondaryColor};">B</div>
                    <div class="list-content">
                        <div class="list-title">另一个项目</div>
                        <div class="list-desc">另一个项目的描述信息</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;
}

designSystems.forEach(system => {
    const examplePath = path.join(__dirname, system.folder, 'example.html');
    fs.writeFileSync(examplePath, createExample(system));
    console.log(`Updated example: ${examplePath}`);
});

console.log('\\nAll design system examples updated successfully!');
