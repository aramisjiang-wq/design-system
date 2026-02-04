import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { deleteFromMainWebsite, listExtractedDesignSystems } from './delete-from-website.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/extracted', (req, res) => {
  const result = listExtractedDesignSystems();
  res.json(result);
});

app.delete('/api/extracted/:folderName', (req, res) => {
  const { folderName } = req.params;
  const result = deleteFromMainWebsite(folderName);
  res.json(result);
});

app.get('/api/extracted/:folderName', (req, res) => {
  const { folderName } = req.params;
  const designSystemsDir = path.join(__dirname, '..');
  const folderPath = path.join(designSystemsDir, folderName);
  
  try {
    if (!fs.existsSync(folderPath)) {
      return res.status(404).json({ success: false, error: '文件夹不存在' });
    }
    
    const readmePath = path.join(folderPath, 'README.md');
    const readmeContent = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, 'utf8') : '';
    
    res.json({
      success: true,
      folderName,
      readmeContent
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`删除服务运行在 http://localhost:${PORT}`);
});
