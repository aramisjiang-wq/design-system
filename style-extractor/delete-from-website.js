import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function deleteFromMainWebsite(folderName) {
  try {
    console.log(`正在删除: ${folderName}`);

    const designSystemsDir = path.join(__dirname, '..');
    const folderPath = path.join(designSystemsDir, folderName);

    if (!fs.existsSync(folderPath)) {
      console.log(`文件夹不存在: ${folderPath}`);
      console.log('仅从 index.html 删除卡片...');
      const result = removeFromIndexHtml(folderName);
      if (result.success) {
        console.log('✓ index.html 已更新');
        return {
          success: true,
          message: `成功从 index.html 删除 ${folderName}`
        };
      } else {
        return {
          success: false,
          error: result.error
        };
      }
    }

    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`✓ 文件夹已删除: ${folderName}`);

    console.log('更新 index.html...');
    const result = removeFromIndexHtml(folderName);

    if (result.success) {
      console.log('✓ index.html 已更新');
      return {
        success: true,
        message: `成功删除 ${folderName}`
      };
    } else {
      return {
        success: false,
        error: result.error
      };
    }
  } catch (error) {
    console.error('删除失败:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

export function listExtractedDesignSystems() {
  try {
    const designSystemsDir = path.join(__dirname, '..');
    const items = fs.readdirSync(designSystemsDir);
    
    const extractedFolders = items.filter(item => {
      const itemPath = path.join(designSystemsDir, item);
      const stat = fs.statSync(itemPath);
      return stat.isDirectory() && item.startsWith('extracted-');
    });

    return {
      success: true,
      folders: extractedFolders
    };
  } catch (error) {
    console.error('获取列表失败:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

function removeFromIndexHtml(folderName) {
  try {
    const indexPath = path.join(__dirname, '..', 'index.html');
    let indexContent = fs.readFileSync(indexPath, 'utf8');

    const escapedFolderName = folderName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    const cardRegex = new RegExp(`<div class="card">[\\s\\S]*?${escapedFolderName}[\\s\\S]*?</div>\\s*`, 'g');
    const matches = indexContent.match(cardRegex);

    if (matches && matches.length > 0) {
      matches.forEach(match => {
        indexContent = indexContent.replace(match, '');
      });
      
      fs.writeFileSync(indexPath, indexContent, 'utf8');
      console.log(`✓ 已从 index.html 删除 ${matches.length} 个卡片`);
      return { success: true };
    } else {
      return {
        success: false,
        error: '未找到对应的卡片'
      };
    }
  } catch (error) {
    console.error('更新 index.html 失败:', error);
    return {
      success: false,
      error: error.message
    };
  }
}
