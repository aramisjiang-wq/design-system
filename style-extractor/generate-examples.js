import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DESIGN_SYSTEMS_DIR = path.join(__dirname, '..');

const designSystems = [
  {
    id: '44-ant-design',
    name: 'Ant Design',
    title: 'Ant Design',
    subtitle: '企业级设计规范示例',
    colors: {
      primary: '#1890FF',
      secondary: '#F0F0F0',
      danger: '#FF4D4F',
      text: '#000000',
      bg: '#F0F2F5',
      card: '#FFFFFF',
      border: '#D9D9D9'
    },
    borderRadius: '2px',
    description: '企业级、专业、可靠'
  },
  {
    id: '45-carbon-design',
    name: 'Carbon Design',
    title: 'Carbon Design',
    subtitle: 'IBM企业级设计规范示例',
    colors: {
      primary: '#0F62FE',
      secondary: '#393939',
      danger: '#DA1E28',
      text: '#161616',
      bg: '#F4F4F4',
      card: '#FFFFFF',
      border: '#8D8D8D'
    },
    borderRadius: '0',
    description: 'IBM企业级、专业、科技'
  },
  {
    id: '46-fluent-design',
    name: 'Fluent Design',
    title: 'Fluent Design',
    subtitle: 'Microsoft设计规范示例',
    colors: {
      primary: '#0078D4',
      secondary: '#F3F2F1',
      danger: '#A80000',
      text: '#201F1E',
      bg: '#FAFAFA',
      card: '#FFFFFF',
      border: '#E1DFDD'
    },
    borderRadius: '4px',
    description: 'Microsoft、深度、动态'
  },
  {
    id: '47-bootstrap',
    name: 'Bootstrap',
    title: 'Bootstrap',
    subtitle: '经典框架设计规范示例',
    colors: {
      primary: '#0D6EFD',
      secondary: '#6C757D',
      danger: '#DC3545',
      text: '#212529',
      bg: '#F8F9FA',
      card: '#FFFFFF',
      border: '#DEE2E6'
    },
    borderRadius: '0.375rem',
    description: '经典框架、简洁、实用'
  },
  {
    id: '48-tailwind-utility',
    name: 'Tailwind Utility',
    title: 'Tailwind Utility',
    subtitle: '原子化设计规范示例',
    colors: {
      primary: '#3B82F6',
      secondary: '#E5E7EB',
      danger: '#EF4444',
      text: '#111827',
      bg: '#F9FAFB',
      card: '#FFFFFF',
      border: '#E5E7EB'
    },
    borderRadius: '0.5rem',
    description: '原子化、实用、灵活'
  },
  {
    id: '49-chakra-ui',
    name: 'Chakra UI',
    title: 'Chakra UI',
    subtitle: '模块化设计规范示例',
    colors: {
      primary: '#3182CE',
      secondary: '#EDF2F7',
      danger: '#E53E3E',
      text: '#2D3748',
      bg: '#F7FAFC',
      card: '#FFFFFF',
      border: '#E2E8F0'
    },
    borderRadius: '0.375rem',
    description: '模块化、可访问、可组合'
  },
  {
    id: '50-radix-ui',
    name: 'Radix UI',
    title: 'Radix UI',
    subtitle: '无障碍优先设计规范示例',
    colors: {
      primary: '#2563EB',
      secondary: '#F1F5F9',
      danger: '#DC2626',
      text: '#0F172A',
      bg: '#FAFAFA',
      card: '#FFFFFF',
      border: '#E2E8F0'
    },
    borderRadius: '0.375rem',
    description: '无障碍优先、非样式化'
  },
  {
    id: '51-shadcn-ui',
    name: 'Shadcn/ui',
    title: 'Shadcn/ui',
    subtitle: '现代组件库设计规范示例',
    colors: {
      primary: '#0F172A',
      secondary: '#F1F5F9',
      danger: '#EF4444',
      text: '#020817',
      bg: '#F8FAFC',
      card: '#FFFFFF',
      border: '#E2E8F0'
    },
    borderRadius: '0.5rem',
    description: '可复制、可定制、现代'
  },
  {
    id: '52-daisyui',
    name: 'DaisyUI',
    title: 'DaisyUI',
    subtitle: 'Tailwind组件库设计规范示例',
    colors: {
      primary: '#3730A3',
      secondary: '#E2E8F0',
      danger: '#DC2626',
      text: '#0F172A',
      bg: '#F1F5F9',
      card: '#FFFFFF',
      border: '#E2E8F0'
    },
    borderRadius: '0.75rem',
    description: 'Tailwind组件库、主题化'
  }
];

function generateExampleHTML(designSystem) {
  const { id, name, title, subtitle, colors, borderRadius, description } = designSystem;
  
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} 设计示例</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: ${colors.bg};
            color: ${colors.text};
            min-height: 100vh;
            line-height: 1.5;
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
            border-bottom: 1px solid ${colors.border};
        }

        h1 {
            font-size: 2.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .subtitle {
            font-size: 1.125rem;
            color: ${colors.secondary === '#F0F0F0' ? '#666' : colors.secondary};
            font-weight: 400;
        }

        .section {
            margin-bottom: 3rem;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
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
            border-radius: ${borderRadius};
            font-size: 1rem;
            font-weight: 400;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        button.primary {
            background: ${colors.primary};
            color: white;
        }

        button.primary:hover {
            opacity: 0.9;
        }

        button.secondary {
            background: ${colors.secondary};
            color: ${colors.text};
        }

        button.secondary:hover {
            opacity: 0.8;
        }

        button.danger {
            background: ${colors.danger};
            color: white;
        }

        button.danger:hover {
            opacity: 0.9;
        }

        .card {
            background: ${colors.card};
            border-radius: ${borderRadius};
            padding: 1.5rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 1rem;
        }

        .input-group {
            margin-bottom: 1.5rem;
        }

        label {
            display: block;
            font-size: 0.875rem;
            font-weight: 400;
            margin-bottom: 0.5rem;
            color: ${colors.text};
        }

        input {
            width: 100%;
            padding: 0.625rem 0.75rem;
            border: 1px solid ${colors.border};
            border-radius: ${borderRadius};
            font-size: 1rem;
            font-family: inherit;
            background: ${colors.card};
            transition: all 0.2s ease;
        }

        input:focus {
            outline: none;
            border-color: ${colors.primary};
            box-shadow: 0 0 0 3px ${colors.primary}20;
        }

        .nav {
            background: ${colors.card};
            border-bottom: 1px solid ${colors.border};
            padding: 1rem 2rem;
            display: flex;
            gap: 2rem;
            align-items: center;
        }

        .nav a {
            color: ${colors.text};
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 400;
            transition: color 0.2s ease;
        }

        .nav a:hover {
            color: ${colors.primary};
        }

        .nav a.active {
            color: ${colors.primary};
            font-weight: 500;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>${title}</h1>
            <p class="subtitle">${subtitle}</p>
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
                <p style="color: ${colors.secondary === '#F0F0F0' ? '#666' : colors.secondary}; margin-top: 0.5rem;">这是一个卡片示例，展示了${description}的设计风格。</p>
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
    </div>
</body>
</html>`;
}

function createExampleFiles() {
  console.log('========================================');
  console.log('批量生成example.html文件');
  console.log('========================================\n');

  let createdCount = 0;

  designSystems.forEach(designSystem => {
    const dirPath = path.join(DESIGN_SYSTEMS_DIR, designSystem.id);
    const filePath = path.join(dirPath, 'example.html');

    try {
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      const html = generateExampleHTML(designSystem);
      fs.writeFileSync(filePath, html, 'utf-8');
      
      console.log(`✓ 已创建: ${designSystem.id}/example.html`);
      createdCount++;
    } catch (error) {
      console.error(`✗ 创建失败: ${designSystem.id}/example.html`, error.message);
    }
  });

  console.log('\n========================================');
  console.log(`完成！共创建 ${createdCount} 个文件`);
  console.log('========================================');
}

createExampleFiles();
