import http from 'http';
import { extractDesignSystemAdvanced as extractDesignSystem } from './extractor-advanced.js';
import { addToMainWebsite } from './add-to-website.js';
import { deleteFromMainWebsite, listExtractedDesignSystems } from './delete-from-website.js';
import { checkQuality } from './quality-checker.js';

const PORT = 3001;

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', message: '样式提取服务运行正常' }));
    return;
  }

  if (req.url === '/list' && req.method === 'GET') {
    const result = listExtractedDesignSystems();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
    return;
  }

  if (req.url === '/delete' && req.method === 'POST') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const { folderName } = JSON.parse(body);

        if (!folderName) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: '文件夹名称不能为空' }));
          return;
        }

        const result = deleteFromMainWebsite(folderName);

        if (result.success) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(result));
        } else {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(result));
        }
      } catch (error) {
        console.error('删除错误:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: false,
          error: error.message
        }));
      }
    });
    return;
  }

  if (req.url === '/check-quality' && req.method === 'POST') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const { url } = JSON.parse(body);

        if (!url) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'URL不能为空' }));
          return;
        }

        console.log(`开始质量检查: ${url}`);
        const result = await checkQuality(url);

        if (result.success) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: true,
            results: result.results,
            url: url,
            checkedAt: result.results.metadata.checkedAt
          }));
        } else {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: false,
            error: result.error
          }));
        }
      } catch (error) {
        console.error('质量检查错误:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: false,
          error: error.message
        }));
      }
    });
    return;
  }

  if (req.url === '/extract' && req.method === 'POST') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const { url } = JSON.parse(body);

        if (!url) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'URL不能为空' }));
          return;
        }

        console.log(`开始提取: ${url}`);
        const result = await extractDesignSystem(url);

        if (result.success) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: true,
            markdown: result.markdown,
            url: url,
            extractedAt: new Date().toISOString()
          }));
        } else {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: false,
            error: result.error
          }));
        }
      } catch (error) {
        console.error('提取错误:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: false,
          error: error.message
        }));
      }
    });
    return;
  }

  if (req.url === '/extract-and-add' && req.method === 'POST') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const { url } = JSON.parse(body);

        if (!url) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'URL不能为空' }));
          return;
        }

        console.log(`开始提取并添加: ${url}`);
        const result = await extractDesignSystem(url);

        if (result.success) {
          console.log('提取成功，正在添加到主网站...');
          const addResult = await addToMainWebsite(result.data, result.markdown);

          if (addResult.success) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              success: true,
              markdown: result.markdown,
              url: url,
              extractedAt: new Date().toISOString(),
              addedToWebsite: true,
              folderName: addResult.folderName,
              websiteUrl: addResult.url
            }));
          } else {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              success: false,
              error: `提取成功但添加到网站失败: ${addResult.error}`,
              markdown: result.markdown
            }));
          }
        } else {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: false,
            error: result.error
          }));
        }
      } catch (error) {
        console.error('提取错误:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: false,
          error: error.message
        }));
      }
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not Found' }));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`========================================`);
  console.log(`样式提取服务已启动`);
  console.log(`========================================`);
  console.log(`服务地址: http://localhost:${PORT}`);
  console.log(`健康检查: http://localhost:${PORT}/health`);
  console.log(`质量检查: http://localhost:${PORT}/check-quality`);
  console.log(`提取接口: http://localhost:${PORT}/extract`);
  console.log(`提取并添加接口: http://localhost:${PORT}/extract-and-add`);
  console.log(`列表接口: http://localhost:${PORT}/list`);
  console.log(`删除接口: http://localhost:${PORT}/delete`);
  console.log(`========================================`);
});
