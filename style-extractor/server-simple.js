import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/extract', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ success: false, error: 'URL不能为空' });
  }

  try {
    const markdown = `# 设计规范提取结果

## 元数据
- **网站URL**: ${url}
- **提取时间**: ${new Date().toISOString()}
- **版本**: 1.0.0

## 设计理念
- 风格名称：自动提取
- 风格描述：从网站自动提取的设计样式

## 字体系统
### 主字体
- 字体族：系统默认字体
- 字重：400（Regular）

### 字体大小
- H1：1.5rem（24px）
- H2：1.25rem（20px）
- Body：0.875rem（14px）

## 颜色系统
### 主色调
- 主色：#0d0d0d
- 浅色：#1a1a1a

### 功能色
- 成功：#4a9
- 警告：#c44
- 错误：#c44

## 组件规范
### 按钮
- 背景：#1a1a1a
- 文字：#e8e8e8
- 边框：1px solid #333333

### 卡片
- 背景：#0d0d0d
- 边框：1px solid #333333

## 注意
这是示例输出。要使用完整的样式提取功能，请：
1. 安装 Playwright 浏览器：npx playwright install chromium
2. 确保网络连接正常
3. 重新启动服务器
`;

    res.json({
      success: true,
      markdown,
      note: '这是示例输出。要使用完整功能，请安装 Playwright 浏览器。'
    });
  } catch (error) {
    console.error('提取错误:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: '样式提取服务运行正常' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`========================================`);
  console.log(`样式提取服务已启动`);
  console.log(`========================================`);
  console.log(`服务地址: http://localhost:${PORT}`);
  console.log(`健康检查: http://localhost:${PORT}/health`);
  console.log(`提取接口: http://localhost:${PORT}/extract`);
  console.log(`========================================`);
});
