import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const designSystems = [
  { id: '01', name: '工业实用主义', desc: '强调功能性、清晰度和可用性，去除一切不必要的装饰', folder: '01-industrial-utilitarianism' },
  { id: '02', name: '极简主义', desc: '少即是多，通过简洁的设计传达核心信息', folder: '02-minimalism' },
  { id: '03', name: '扁平化设计', desc: '去除三维效果，使用简洁的形状和鲜明的色彩', folder: '03-flat-design' },
  { id: '04', name: '玻璃态设计', desc: '使用透明、模糊和半透明效果创造层次感', folder: '04-glassmorphism' },
  { id: '05', name: '新拟态设计', desc: '通过光影效果创造凸起和凹陷的触感', folder: '05-neumorphism' },
  { id: '06', name: '赛博朋克', desc: '霓虹色彩、科技感和反乌托邦美学', folder: '06-cyberpunk' },
  { id: '07', name: '复古未来主义', desc: '融合复古元素与未来科技感的独特美学', folder: '07-retro-futurism' },
  { id: '08', name: '包豪斯风格', desc: '几何形状、功能主义和艺术与技术的统一', folder: '08-bauhaus' },
  { id: '09', name: '有机设计', desc: '自然形态、流畅曲线和有机纹理', folder: '09-organic' },
  { id: '10', name: '野兽派设计', desc: '粗犷、原始、反常规的视觉冲击', folder: '10-brutalism' },
  { id: '11', name: 'Material Design', desc: 'Google 的设计语言，基于纸张和墨水的隐喻', folder: '11-material-design' },
  { id: '12', name: '装饰艺术', desc: '几何装饰、对称布局和奢华材质', folder: '12-art-deco' },
  { id: '13', name: '后现代主义', desc: '打破传统规则，融合多种风格和元素', folder: '13-postmodernism' },
  { id: '14', name: '国际主义风格', desc: '网格系统、无衬线字体和理性布局', folder: '14-international-style' },
  { id: '15', name: '极繁主义', desc: '更多即更好，丰富的色彩和装饰元素', folder: '15-maximalism' },
  { id: '16', name: '复古像素风', desc: '8位和16位游戏的像素艺术美学', folder: '16-retro-pixel' },
  { id: '17', name: '手绘风格', desc: '手绘插画、涂鸦和个性化表达', folder: '17-hand-drawn' },
  { id: '18', name: '复古波普', desc: '流行艺术、鲜艳色彩和大众文化元素', folder: '18-retro-pop' },
  { id: '19', name: '未来主义', desc: '速度、科技和动态感的视觉表达', folder: '19-futurism' },
  { id: '20', name: '瑞士风格', desc: '无衬线字体、不对称布局和网格系统', folder: '20-swiss-style' },
  { id: '21', name: '毛玻璃效果', desc: '背景模糊、半透明和层次感设计', folder: '21-frosted-glass' },
  { id: '22', name: '便当盒布局', desc: '网格化卡片布局，模块化内容组织', folder: '22-bento-box' },
  { id: '23', name: '暗黑模式', desc: '深色背景、高对比度和护眼设计', folder: '23-dark-mode' },
  { id: '24', name: '渐变设计', desc: '流畅的色彩过渡和视觉深度', folder: '24-gradient-design' },
  { id: '25', name: '3D 设计', desc: '三维元素、深度和立体感', folder: '25-3d-design' },
  { id: '26', name: '微交互', desc: '细微的动画和交互反馈', folder: '26-micro-interactions' },
  { id: '27', name: '拟物化', desc: '模仿现实世界的材质和纹理', folder: '27-skeuomorphism' },
  { id: '28', name: '流体设计', desc: '流动的形状、有机形态和动态感', folder: '28-liquid-design' },
  { id: '29', name: '几何抽象', desc: '几何形状、抽象构图和数学美感', folder: '29-geometric-abstract' },
  { id: '30', name: '线框设计', desc: '极简线条、透明背景和结构化布局', folder: '30-wireframe-design' },
  { id: '31', name: '模糊设计', desc: '背景模糊、视觉层次和柔和效果', folder: '31-blur-design' },
  { id: '32', name: '霓虹设计', desc: '霓虹灯效果、发光元素和夜店美学', folder: '32-neon-design' },
  { id: '33', name: '蒸汽波', desc: '80年代美学、复古科技和迷幻色彩', folder: '33-vaporwave' },
  { id: '34', name: '故障艺术', desc: '数字故障、失真效果和错误美学', folder: '34-glitch-art' },
  { id: '35', name: '极光设计', desc: '极光色彩、渐变和自然光效', folder: '35-aurora-design' },
  { id: '36', name: '水墨风格', desc: '中国传统水墨画、留白和意境', folder: '36-ink-wash-style' },
  { id: '37', name: '像素艺术', desc: '像素化图形、复古游戏和数字艺术', folder: '37-pixel-art' },
  { id: '38', name: '波普艺术', desc: '大众文化、鲜艳色彩和重复图案', folder: '38-pop-art' },
  { id: '39', name: '孟菲斯设计', desc: '几何形状、鲜艳色彩和俏皮元素', folder: '39-memphis-design' },
  { id: '40', name: '赛博格风格', desc: '人机融合、科技感和金属质感', folder: '40-cyborg' },
  { id: '41', name: '全息设计', desc: '全息效果、彩虹光泽和未来感', folder: '41-holographic-design' },
  { id: '42', name: '元宇宙风格', desc: '虚拟世界、沉浸式体验和数字身份', folder: '42-metaverse-style' },
  { id: '43', name: 'Apple HIG', desc: '苹果人机界面指南，iOS 和 macOS 设计规范', folder: '43-apple-hig' },
  { id: '44', name: 'Ant Design', desc: '蚂蚁金服企业级 UI 设计语言', folder: '44-ant-design' },
  { id: '45', name: 'Carbon Design', desc: 'IBM 的企业级设计系统', folder: '45-carbon-design' },
  { id: '46', name: 'Fluent Design', desc: '微软的跨平台设计系统', folder: '46-fluent-design' },
  { id: '47', name: 'Bootstrap', desc: 'Twitter 开源的前端框架', folder: '47-bootstrap' },
  { id: '48', name: 'Tailwind Utility', desc: '实用优先的 CSS 框架', folder: '48-tailwind-utility' },
  { id: '49', name: 'Chakra UI', desc: '简单、模块化和可访问的组件库', folder: '49-chakra-ui' },
  { id: '50', name: 'Radix UI', desc: '无样式、可访问的 UI 原语', folder: '50-radix-ui' },
  { id: '51', name: 'Shadcn/ui', desc: '可复制粘贴的 React 组件', folder: '51-shadcn-ui' },
  { id: '52', name: 'DaisyUI', desc: '基于 Tailwind 的组件类库', folder: '52-daisyui' }
];

function generateCardHtml(system) {
  return `                <div class="card">
                    <div class="preview-container">
                        <div class="preview-loading">加载中...</div>
                        <iframe class="preview" src="${system.folder}/example.html" loading="lazy" onload="this.parentElement.classList.add('preview-loaded')"></iframe>
                    </div>
                    <div class="card-content">
                        <div class="card-number">${system.id}</div>
                        <h3 class="card-title">${system.name}</h3>
                        <p class="card-description">${system.desc}</p>
                        <div class="card-links">
                            <a href="${system.folder}/README.md" class="card-link">文档</a>
                            <a href="${system.folder}/example.html" class="card-link preview-link">预览</a>
                        </div>
                    </div>
                </div>`;
}

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>设计规范索引</title>
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
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        header {
            text-align: center;
            margin-bottom: 60px;
        }

        header h1 {
            font-size: 2.5em;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 10px;
        }

        .header-links {
            margin-top: 20px;
        }

        .header-links a {
            display: inline-block;
            padding: 12px 24px;
            background: #333;
            color: #fff;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 500;
            transition: background 0.2s;
            margin: 0 10px;
        }

        .header-links a:hover {
            background: #555;
        }

        .category {
            margin-bottom: 60px;
        }

        .category-title {
            font-size: 1.8em;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 30px;
            padding-bottom: 10px;
            border-bottom: 3px solid #333;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 24px;
        }

        .card {
            background: #fff;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            overflow: hidden;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .preview-container {
            position: relative;
            width: 100%;
            height: 200px;
            background: #f5f5f5;
            overflow: hidden;
        }

        .preview {
            width: 100%;
            height: 100%;
            border: none;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .preview-container.preview-loaded .preview {
            opacity: 1;
        }

        .preview-loading {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #999;
            font-size: 14px;
        }

        .preview-container.preview-loaded .preview-loading {
            display: none;
        }

        .card-content {
            padding: 20px;
        }

        .card-number {
            font-size: 0.75em;
            font-weight: 600;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }

        .card-title {
            font-size: 1.25em;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 8px;
        }

        .card-description {
            font-size: 0.9em;
            color: #666;
            margin-bottom: 16px;
            line-height: 1.5;
        }

        .card-links {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .card-link {
            padding: 6px 12px;
            background: #f5f5f5;
            color: #333;
            text-decoration: none;
            border-radius: 3px;
            font-size: 0.85em;
            font-weight: 500;
            transition: background 0.2s;
            border: 1px solid #e0e0e0;
        }

        .card-link:hover {
            background: #e0e0e0;
        }

        .delete-link {
            background: #fff0f0;
            color: #c44;
            border-color: #fcc;
        }

        .delete-link:hover {
            background: #ffe0e0;
        }

        @media (max-width: 768px) {
            .container {
                padding: 20px 10px;
            }

            header h1 {
                font-size: 2em;
            }

            .category-title {
                font-size: 1.5em;
            }

            .grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>设计规范索引</h1>
            <p style="color: #666;">52个设计规范，涵盖从极简主义到赛博朋克的多种风格</p>
            <div class="header-links">
                <a href="extractor.html">网站样式提取工具</a>
                <a href="DESIGN-SYSTEM-FRAMEWORK.md">设计规范框架</a>
                <a href="USER-GUIDE.md">使用指南</a>
            </div>
        </header>

        <div class="category">
            <h2 class="category-title">极简与实用</h2>
            <div class="grid">
${designSystems.slice(0, 10).map(generateCardHtml).join('\n')}
            </div>
        </div>

        <div class="category">
            <h2 class="category-title">经典设计系统</h2>
            <div class="grid">
${designSystems.slice(10, 20).map(generateCardHtml).join('\n')}
            </div>
        </div>

        <div class="category">
            <h2 class="category-title">现代设计风格</h2>
            <div class="grid">
${designSystems.slice(20, 32).map(generateCardHtml).join('\n')}
            </div>
        </div>

        <div class="category">
            <h2 class="category-title">艺术与数字风格</h2>
            <div class="grid">
${designSystems.slice(32, 42).map(generateCardHtml).join('\n')}
            </div>
        </div>

        <div class="category">
            <h2 class="category-title">UI 组件库</h2>
            <div class="grid">
${designSystems.slice(42, 52).map(generateCardHtml).join('\n')}
            </div>
        </div>

        <div id="extracted-section" class="category" style="display: none;">
            <h2 class="category-title">自动提取</h2>
            <div id="extracted-grid" class="grid"></div>
        </div>
    </div>

    <script>
        async function deleteDesignSystem(folderName, button) {
            if (!confirm(\`确定要删除 "\${folderName}" 吗？此操作不可恢复。\`)) {
                return;
            }

            const card = button.closest('.card');
            card.style.opacity = '0.5';
            card.style.pointerEvents = 'none';

            try {
                const response = await fetch('http://localhost:3001/delete', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ folderName })
                });

                const data = await response.json();

                if (data.success) {
                    card.remove();
                    
                    const extractedGrid = document.getElementById('extracted-grid');
                    if (extractedGrid && extractedGrid.children.length === 0) {
                        const extractedSection = document.getElementById('extracted-section');
                        if (extractedSection) {
                            extractedSection.style.display = 'none';
                        }
                    }
                    
                    alert('删除成功！');
                } else {
                    card.style.opacity = '1';
                    card.style.pointerEvents = 'auto';
                    alert(\`删除失败: \${data.error}\`);
                }
            } catch (error) {
                card.style.opacity = '1';
                card.style.pointerEvents = 'auto';
                alert(\`删除失败: \${error.message}\`);
            }
        }
    </script>
</body>
</html>`;

const indexPath = path.join(__dirname, '..', 'index.html');
fs.writeFileSync(indexPath, html, 'utf8');
console.log('✓ index.html 已重新生成');