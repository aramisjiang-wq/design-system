const fs = require('fs');
const path = require('path');

const designSystems = [
    { id: '63', name: 'Element UI', desc: '饿了么的 Vue 组件库，企业级后台设计规范', folder: 'design-systems/63-element-ui', category: 'modern', primaryColor: '#409EFF', secondaryColor: '#67C23A', dangerColor: '#F56C6C', darkBg: '#1a1a1a', darkText: '#e0e0e0' },
    { id: '64', name: 'Vercel Design', desc: 'Vercel 官方设计系统，开发者平台设计规范', folder: 'design-systems/64-vercel-design', category: 'modern', primaryColor: '#000000', secondaryColor: '#0070F3', dangerColor: '#FF0000', darkBg: '#0a0a0a', darkText: '#ffffff' },
    { id: '65', name: 'Linear Design', desc: 'Linear 官方设计系统，项目管理工具设计规范', folder: 'design-systems/65-linear-design', category: 'modern', primaryColor: '#5E6AD2', secondaryColor: '#8B9BEA', dangerColor: '#E5484D', darkBg: '#0c0c0c', darkText: '#e0e0e0' },
    { id: '66', name: 'Notion Design', desc: 'Notion 官方设计系统，知识管理工具设计规范', folder: 'design-systems/66-notion-design', category: 'modern', primaryColor: '#2383E2', secondaryColor: '#E1E1E1', dangerColor: '#EB5757', darkBg: '#191919', darkText: '#d4d4d4' },
    { id: '67', name: 'Stripe Design', desc: 'Stripe 官方设计系统，支付平台设计规范', folder: 'design-systems/67-stripe-design', category: 'modern', primaryColor: '#635BFF', secondaryColor: '#0A2540', dangerColor: '#DF1B41', darkBg: '#0a0a0f', darkText: '#e0e0e0' },
    { id: '68', name: 'Airbnb Design', desc: 'Airbnb 官方设计系统，住宿平台设计规范', folder: 'design-systems/68-airbnb-design', category: 'modern', primaryColor: '#FF385C', secondaryColor: '#008489', dangerColor: '#FF385C', darkBg: '#191919', darkText: '#e0e0e0' },
    { id: '69', name: 'Spotify Design', desc: 'Spotify 官方设计系统，音乐流媒体设计规范', folder: 'design-systems/69-spotify-design', category: 'modern', primaryColor: '#1DB954', secondaryColor: '#191414', dangerColor: '#E91429', darkBg: '#121212', darkText: '#ffffff' },
    { id: '70', name: 'Figma Design', desc: 'Figma 官方设计系统，协作设计工具设计规范', folder: 'design-systems/70-figma-design', category: 'modern', primaryColor: '#F24E1E', secondaryColor: '#A259FF', dangerColor: '#FF7262', darkBg: '#2C2C2C', darkText: '#e0e0e0' },
    { id: '71', name: 'Discord Design', desc: 'Discord 官方设计系统，即时通讯工具设计规范', folder: 'design-systems/71-discord-design', category: 'modern', primaryColor: '#5865F2', secondaryColor: '#404EED', dangerColor: '#ED4245', darkBg: '#36393f', darkText: '#dcddde' },
    { id: '72', name: 'Slack Design', desc: 'Slack 官方设计系统，团队协作工具设计规范', folder: 'design-systems/72-slack-design', category: 'modern', primaryColor: '#4A154B', secondaryColor: '#ECB22E', dangerColor: '#E01E5A', darkBg: '#1F1F1F', darkText: '#e0e0e0' },
    { id: '73', name: 'Framer Motion', desc: 'React 动画库，声明式动画设计规范', folder: 'design-systems/73-framer-motion', category: 'tech', primaryColor: '#0055FF', secondaryColor: '#FF0080', dangerColor: '#FF0055', darkBg: '#0a0a0a', darkText: '#ffffff' },
    { id: '74', name: 'React Spring', desc: 'React 弹簧物理动画库，流畅动画设计规范', folder: 'design-systems/74-react-spring', category: 'tech', primaryColor: '#FF6B6B', secondaryColor: '#4ECDC4', dangerColor: '#FFE66D', darkBg: '#1a1a1a', darkText: '#e0e0e0' },
    { id: '75', name: 'Three.js', desc: 'Web 3D 图形库，三维场景设计规范', folder: 'design-systems/75-threejs', category: 'tech', primaryColor: '#000000', secondaryColor: '#FFFFFF', dangerColor: '#FF0000', darkBg: '#000000', darkText: '#ffffff' },
    { id: '76', name: 'Lottie', desc: 'Airbnb 动画库，矢量动画设计规范', folder: 'design-systems/76-lottie', category: 'tech', primaryColor: '#23A9F2', secondaryColor: '#FF385C', dangerColor: '#FF6B6B', darkBg: '#1a1a1a', darkText: '#e0e0e0' },
    { id: '77', name: 'Dribbble Shots', desc: 'Dribbble 社区，设计师作品展示平台', folder: 'design-systems/77-dribbble-shots', category: 'art', primaryColor: '#EA4C89', secondaryColor: '#C32361', dangerColor: '#9B1D52', darkBg: '#0d0c0d', darkText: '#e0e0e0' },
    { id: '78', name: 'Pinterest Design', desc: 'Pinterest 官方设计系统，图片分享平台设计规范', folder: 'design-systems/78-pinterest-design', category: 'modern', primaryColor: '#E60023', secondaryColor: '#BD081C', dangerColor: '#E60023', darkBg: '#211919', darkText: '#e0e0e0' },
    { id: '79', name: 'Canva Design', desc: 'Canva 官方设计系统，在线设计工具设计规范', folder: 'design-systems/79-canva-design', category: 'modern', primaryColor: '#00C4CC', secondaryColor: '#7D2AE8', dangerColor: '#FF3366', darkBg: '#0c0c0c', darkText: '#e0e0e0' },
    { id: '80', name: 'Framer Design', desc: 'Framer 官方设计系统，交互设计工具设计规范', folder: 'design-systems/80-framer-design', category: 'modern', primaryColor: '#0055FF', secondaryColor: '#FF0080', dangerColor: '#FF0055', darkBg: '#0a0a0a', darkText: '#ffffff' },
    { id: '81', name: 'Sketch Design', desc: 'Sketch 官方设计系统，UI 设计工具设计规范', folder: 'design-systems/81-sketch-design', category: 'modern', primaryColor: '#F7B500', secondaryColor: '#F24E1E', dangerColor: '#FF6B6B', darkBg: '#1a1a1a', darkText: '#e0e0e0' },
    { id: '82', name: 'InVision Design', desc: 'InVision 官方设计系统，原型设计工具设计规范', folder: 'design-systems/82-invision-design', category: 'modern', primaryColor: '#FF3366', secondaryColor: '#F5E6E8', dangerColor: '#FF3366', darkBg: '#1a1a1a', darkText: '#e0e0e0' },
    { id: '83', name: 'Adobe XD Design', desc: 'Adobe XD 官方设计系统，UI/UX 设计工具设计规范', folder: 'design-systems/83-adobe-xd-design', category: 'modern', primaryColor: '#FF2BC2', secondaryColor: '#470137', dangerColor: '#FF2BC2', darkBg: '#1a1a1a', darkText: '#e0e0e0' },
    { id: '84', name: 'Figma Community', desc: 'Figma 社区，设计资源和组件库', folder: 'design-systems/84-figma-community', category: 'art', primaryColor: '#F24E1E', secondaryColor: '#A259FF', dangerColor: '#FF7262', darkBg: '#2C2C2C', darkText: '#e0e0e0' },
    { id: '85', name: 'UI8 Design', desc: 'UI8，高质量 UI 设计资源和模板', folder: 'design-systems/85-ui8-design', category: 'art', primaryColor: '#6C5CE7', secondaryColor: '#00CEC9', dangerColor: '#FF7675', darkBg: '#1a1a1a', darkText: '#e0e0e0' },
    { id: '86', name: 'Creative Market', desc: 'Creative Market，创意设计资源和模板', folder: 'design-systems/86-creative-market', category: 'art', primaryColor: '#F7931E', secondaryColor: '#00B894', dangerColor: '#D63031', darkBg: '#1a1a1a', darkText: '#e0e0e0' },
    { id: '87', name: 'Envato Elements', desc: 'Envato Elements，丰富的设计资源和模板', folder: 'design-systems/87-envato-elements', category: 'art', primaryColor: '#82B440', secondaryColor: '#3E7CF5', dangerColor: '#E74C3C', darkBg: '#1a1a1a', darkText: '#e0e0e0' },
    { id: '88', name: 'Awwwards', desc: 'Awwwards，最佳网站设计和创意作品展示', folder: 'design-systems/88-awwwards', category: 'art', primaryColor: '#FF4D4D', secondaryColor: '#000000', dangerColor: '#FF4D4D', darkBg: '#0a0a0a', darkText: '#ffffff' },
    { id: '89', name: 'CSS-Tricks', desc: 'CSS-Tricks，前端设计和开发教程资源', folder: 'design-systems/89-css-tricks', category: 'tech', primaryColor: '#1572B6', secondaryColor: '#F7DF1E', dangerColor: '#E34F26', darkBg: '#0d1117', darkText: '#e0e0e0' },
    { id: '90', name: 'Adobe Spectrum', desc: 'Adobe Spectrum 官方设计系统，Creative Cloud 设计规范', folder: 'design-systems/90-adobe-spectrum', category: 'modern', primaryColor: '#FF3366', secondaryColor: '#470137', dangerColor: '#FF3366', darkBg: '#1a1a1a', darkText: '#e0e0e0' },
    { id: '91', name: 'GitHub Primer', desc: 'GitHub Primer 官方设计系统，开发者平台设计规范', folder: 'design-systems/91-github-primer', category: 'modern', primaryColor: '#24292F', secondaryColor: '#0366D6', dangerColor: '#D73A49', darkBg: '#0d1117', darkText: '#e0e0e0' },
    { id: '92', name: 'Twilio Paste', desc: 'Twilio Paste 官方设计系统，通信平台设计规范', folder: 'design-systems/92-twilio-paste', category: 'modern', primaryColor: '#F22F46', secondaryColor: '#0D122B', dangerColor: '#F22F46', darkBg: '#0a0a0f', darkText: '#e0e0e0' },
    { id: '93', name: 'Segment Design', desc: 'Segment 官方设计系统，数据分析平台设计规范', folder: 'design-systems/93-segment-design', category: 'modern', primaryColor: '#FF5A5F', secondaryColor: '#0A2540', dangerColor: '#FF5A5F', darkBg: '#0a0a0f', darkText: '#e0e0e0' },
    { id: '94', name: 'Intercom Design', desc: 'Intercom 官方设计系统，客户沟通平台设计规范', folder: 'design-systems/94-intercom-design', category: 'modern', primaryColor: '#1F8DED', secondaryColor: '#2C3E50', dangerColor: '#E74C3C', darkBg: '#1a1a1a', darkText: '#e0e0e0' },
    { id: '95', name: 'Help Scout Design', desc: 'Help Scout 官方设计系统，客户支持工具设计规范', folder: 'design-systems/95-help-scout-design', category: 'modern', primaryColor: '#3A6EA5', secondaryColor: '#F7F9FC', dangerColor: '#E74C3C', darkBg: '#1a1a1a', darkText: '#e0e0e0' },
    { id: '96', name: 'Mailchimp Design', desc: 'Mailchimp 官方设计系统，邮件营销平台设计规范', folder: 'design-systems/96-mailchimp-design', category: 'modern', primaryColor: '#FFE01B', secondaryColor: '#24292F', dangerColor: '#E74C3C', darkBg: '#1a1a1a', darkText: '#e0e0e0' }
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

        :root {
            --bg-primary: #F5F5F5;
            --bg-secondary: #FFFFFF;
            --bg-hover: #F0F0F0;
            --text-primary: #333333;
            --text-secondary: #666666;
            --border-color: #E0E0E0;
            --primary-color: ${system.primaryColor};
            --secondary-color: ${system.secondaryColor};
            --danger-color: ${system.dangerColor};
            --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
            --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
            --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16);
        }

        [data-theme="dark"] {
            --bg-primary: ${system.darkBg};
            --bg-secondary: ${system.darkBg};
            --bg-hover: #2a2a2a;
            --text-primary: ${system.darkText};
            --text-secondary: #a0a0a0;
            --border-color: #333333;
            --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
            --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
            --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            min-height: 100vh;
            line-height: 1.6;
            transition: background 0.3s ease, color 0.3s ease;
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
            border-bottom: 1px solid var(--border-color);
            position: relative;
        }

        h1 {
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: var(--primary-color);
            letter-spacing: -0.02em;
        }

        .subtitle {
            font-size: 1.125rem;
            color: var(--text-secondary);
            font-weight: 400;
        }

        .theme-toggle {
            position: absolute;
            top: 0;
            right: 0;
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 0.5rem 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            font-size: 0.875rem;
        }

        .theme-toggle:hover {
            background: var(--bg-hover);
        }

        .section {
            margin-bottom: 3rem;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--text-primary);
        }

        .button-group {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-bottom: 2rem;
        }

        button {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
            overflow: hidden;
        }

        button::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        button:active::before {
            width: 300px;
            height: 300px;
        }

        button.primary {
            background: var(--primary-color);
            color: white;
            box-shadow: var(--shadow-sm);
        }

        button.primary:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        button.secondary {
            background: var(--bg-secondary);
            color: var(--text-primary);
            border: 1px solid var(--border-color);
        }

        button.secondary:hover {
            background: var(--bg-hover);
            transform: translateY(-2px);
        }

        button.danger {
            background: var(--danger-color);
            color: white;
            box-shadow: var(--shadow-sm);
        }

        button.danger:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none !important;
        }

        .card {
            background: var(--bg-secondary);
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: var(--shadow-sm);
            margin-bottom: 1rem;
            border: 1px solid var(--border-color);
            transition: all 0.3s ease;
        }

        .card:hover {
            box-shadow: var(--shadow-lg);
            transform: translateY(-4px);
        }

        .input-group {
            margin-bottom: 1.5rem;
        }

        label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
        }

        input {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid var(--border-color);
            border-radius: 6px;
            font-size: 1rem;
            font-family: inherit;
            background: var(--bg-secondary);
            color: var(--text-primary);
            transition: all 0.2s ease;
        }

        input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px var(--primary-color)20;
        }

        input::placeholder {
            color: var(--text-secondary);
        }

        .nav {
            background: var(--bg-secondary);
            border-bottom: 1px solid var(--border-color);
            padding: 1rem 2rem;
            display: flex;
            gap: 2rem;
            align-items: center;
            border-radius: 12px;
        }

        .nav a {
            color: var(--text-primary);
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 400;
            transition: all 0.2s ease;
            position: relative;
            padding: 0.5rem 0;
        }

        .nav a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-color);
            transition: width 0.3s ease;
        }

        .nav a:hover {
            color: var(--primary-color);
        }

        .nav a:hover::after {
            width: 100%;
        }

        .nav a.active {
            color: var(--primary-color);
            font-weight: 600;
        }

        .nav a.active::after {
            width: 100%;
        }

        .badge {
            display: inline-block;
            padding: 0.375rem 0.875rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 500;
            background: var(--primary-color)15;
            color: var(--primary-color);
            transition: all 0.2s ease;
        }

        .badge:hover {
            background: var(--primary-color);
            color: white;
        }

        .progress-bar {
            width: 100%;
            height: 10px;
            background: var(--bg-hover);
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 1rem;
            position: relative;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
            border-radius: 8px;
            width: 60%;
            transition: width 0.5s ease;
            position: relative;
            overflow: hidden;
        }

        .progress-fill::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transform: translateX(-100%);
            animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
            100% {
                transform: translateX(100%);
            }
        }

        .tag {
            display: inline-block;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.875rem;
            background: var(--secondary-color)15;
            color: var(--text-primary);
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
            border: 1px solid var(--border-color);
            transition: all 0.2s ease;
            cursor: pointer;
        }

        .tag:hover {
            background: var(--secondary-color);
            color: white;
            transform: scale(1.05);
        }

        .avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            font-size: 1.25rem;
            box-shadow: var(--shadow-sm);
        }

        .list-item {
            display: flex;
            align-items: center;
            padding: 1rem;
            border-bottom: 1px solid var(--border-color);
            gap: 1rem;
            transition: background 0.2s ease;
        }

        .list-item:hover {
            background: var(--bg-hover);
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
            color: var(--text-primary);
        }

        .list-desc {
            font-size: 0.875rem;
            color: var(--text-secondary);
        }

        .switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 26px;
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--bg-hover);
            transition: 0.4s;
            border-radius: 26px;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: 0.4s;
            border-radius: 50%;
        }

        input:checked + .slider {
            background-color: var(--primary-color);
        }

        input:checked + .slider:before {
            transform: translateX(24px);
        }

        .tooltip {
            position: relative;
            display: inline-block;
        }

        .tooltip .tooltip-text {
            visibility: hidden;
            width: 120px;
            background-color: var(--text-primary);
            color: var(--bg-primary);
            text-align: center;
            border-radius: 6px;
            padding: 0.5rem;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
            transition: opacity 0.3s;
            font-size: 0.75rem;
        }

        .tooltip:hover .tooltip-text {
            visibility: visible;
            opacity: 1;
        }

        .alert {
            padding: 1rem 1.5rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            border-left: 4px solid;
            background: var(--bg-secondary);
        }

        .alert.success {
            border-color: #10B981;
            background: #10B98110;
        }

        .alert.warning {
            border-color: #F59E0B;
            background: #F59E0B10;
        }

        .alert.error {
            border-color: #EF4444;
            background: #EF444410;
        }

        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }

        .modal.active {
            display: flex;
        }

        .modal-content {
            background: var(--bg-secondary);
            padding: 2rem;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            box-shadow: var(--shadow-lg);
            animation: modalIn 0.3s ease;
        }

        @keyframes modalIn {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        .skeleton {
            background: linear-gradient(90deg, var(--bg-hover) 25%, var(--bg-secondary) 50%, var(--bg-hover) 75%);
            background-size: 200% 100%;
            animation: skeleton-loading 1.5s infinite;
            border-radius: 4px;
        }

        @keyframes skeleton-loading {
            0% {
                background-position: 200% 0;
            }
            100% {
                background-position: -200% 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <button class="theme-toggle" onclick="toggleTheme()">
                <span id="themeIcon">🌙</span>
                <span id="themeText">深色</span>
            </button>
            <h1>${system.name}</h1>
            <p class="subtitle">${system.desc}</p>
        </header>

        <div class="section">
            <h2>按钮</h2>
            <div class="button-group">
                <button class="primary">主要按钮</button>
                <button class="secondary">次要按钮</button>
                <button class="danger">危险按钮</button>
                <button disabled>禁用按钮</button>
            </div>
        </div>

        <div class="section">
            <h2>卡片</h2>
            <div class="card">
                <h3>卡片标题</h3>
                <p style="color: var(--text-secondary); margin-top: 0.5rem;">这是一个卡片示例，展示了${system.name}的设计风格。</p>
                <div style="margin-top: 1rem;">
                    <span class="badge">标签</span>
                    <span class="badge" style="background: var(--secondary-color)15; color: var(--text-primary);">标签2</span>
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
            <div style="background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color); overflow: hidden;">
                <div class="list-item">
                    <div class="avatar">A</div>
                    <div class="list-content">
                        <div class="list-title">项目名称</div>
                        <div class="list-desc">项目描述信息</div>
                    </div>
                </div>
                <div class="list-item">
                    <div class="avatar" style="background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));">B</div>
                    <div class="list-content">
                        <div class="list-title">另一个项目</div>
                        <div class="list-desc">另一个项目的描述信息</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>开关</h2>
            <div style="display: flex; align-items: center; gap: 1rem;">
                <label class="switch">
                    <input type="checkbox" checked>
                    <span class="slider"></span>
                </label>
                <span>启用通知</span>
            </div>
        </div>

        <div class="section">
            <h2>提示框</h2>
            <div class="tooltip">
                悬停查看提示
                <span class="tooltip-text">这是一个提示信息</span>
            </div>
        </div>

        <div class="section">
            <h2>警告框</h2>
            <div class="alert success">
                <strong>成功：</strong>操作已完成！
            </div>
            <div class="alert warning">
                <strong>警告：</strong>请注意检查输入内容。
            </div>
            <div class="alert error">
                <strong>错误：</strong>操作失败，请重试。
            </div>
        </div>

        <div class="section">
            <h2>骨架屏</h2>
            <div style="padding: 1rem; background: var(--bg-secondary); border-radius: 8px; border: 1px solid var(--border-color);">
                <div class="skeleton" style="height: 20px; width: 60%; margin-bottom: 1rem;"></div>
                <div class="skeleton" style="height: 16px; width: 80%; margin-bottom: 0.5rem;"></div>
                <div class="skeleton" style="height: 16px; width: 70%;"></div>
            </div>
        </div>
    </div>

    <div class="modal" id="modal">
        <div class="modal-content">
            <h3 style="margin-bottom: 1rem;">模态框</h3>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">这是一个模态框示例，展示了${system.name}的设计风格。</p>
            <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                <button class="secondary" onclick="closeModal()">取消</button>
                <button class="primary" onclick="closeModal()">确定</button>
            </div>
        </div>
    </div>

    <script>
        function toggleTheme() {
            const body = document.body;
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            
            const themeIcon = document.getElementById('themeIcon');
            const themeText = document.getElementById('themeText');
            
            if (newTheme === 'dark') {
                themeIcon.textContent = '☀️';
                themeText.textContent = '亮色';
            } else {
                themeIcon.textContent = '🌙';
                themeText.textContent = '深色';
            }

            localStorage.setItem('theme', newTheme);
        }

        function loadTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            document.body.setAttribute('data-theme', savedTheme);
            
            const themeIcon = document.getElementById('themeIcon');
            const themeText = document.getElementById('themeText');
            
            if (savedTheme === 'dark') {
                themeIcon.textContent = '☀️';
                themeText.textContent = '亮色';
            } else {
                themeIcon.textContent = '🌙';
                themeIcon.textContent = '🌙';
                themeText.textContent = '深色';
            }
        }

        function openModal() {
            document.getElementById('modal').classList.add('active');
        }

        function closeModal() {
            document.getElementById('modal').classList.remove('active');
        }

        window.addEventListener('load', loadTheme);
    </script>
</body>
</html>`;
}

designSystems.forEach(system => {
    const examplePath = path.join(__dirname, system.folder, 'example.html');
    fs.writeFileSync(examplePath, createExample(system));
    console.log(`Updated example: ${examplePath}`);
});

console.log('\\nAll design system examples updated successfully!');
