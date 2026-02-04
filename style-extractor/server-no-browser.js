import express from 'express';
import cors from 'cors';
import { extractDesignSystem } from './extractor-no-browser.js';

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
    console.log(`开始提取: ${url}`);
    const result = await extractDesignSystem(url);
    
    if (result.success) {
      res.json({
        success: true,
        markdown: result.markdown,
        url: url,
        extractedAt: new Date().toISOString()
      });
    } else {
      res.status(500).json({
        success: false,
        error: result.error
      });
    }
  } catch (error) {
    console.error('提取错误:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: '样式提取服务运行正常（无浏览器模式）' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`========================================`);
  console.log(`样式提取服务已启动（无浏览器模式）`);
  console.log(`========================================`);
  console.log(`服务地址: http://localhost:${PORT}`);
  console.log(`健康检查: http://localhost:${PORT}/health`);
  console.log(`提取接口: http://localhost:${PORT}/extract`);
  console.log(`========================================`);
});
