import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DESIGN_SYSTEMS_DIR = path.join(__dirname, '..');

function removeGoogleFonts(content) {
  return content
    .replace(/<link[^>]*fonts\.googleapis\.com[^>]*>/gi, '')
    .replace(/<link[^>]*href=["'][^"']*fonts\.googleapis\.com[^"']*["'][^>]*>/gi, '')
    .replace(/@import\s+url\(["']?[^"')]*fonts\.googleapis\.com[^"')]*["']?\);?/gi, '');
}

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const newContent = removeGoogleFonts(content);
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      console.log(`✓ 已修复: ${path.basename(filePath)}`);
      return true;
    } else {
      console.log(`- 无需修复: ${path.basename(filePath)}`);
      return false;
    }
  } catch (error) {
    console.error(`✗ 修复失败: ${path.basename(filePath)}`, error.message);
    return false;
  }
}

function scanDirectory(dir) {
  const files = [];
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const exampleFile = path.join(fullPath, 'example.html');
      if (fs.existsSync(exampleFile)) {
        files.push(exampleFile);
      }
    }
  }
  
  return files;
}

async function main() {
  console.log('========================================');
  console.log('移除Google Fonts - 修复ORB错误');
  console.log('========================================\n');

  const exampleFiles = scanDirectory(DESIGN_SYSTEMS_DIR);
  
  console.log(`找到 ${exampleFiles.length} 个example.html文件\n`);
  
  let fixedCount = 0;
  
  for (const file of exampleFiles) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log('\n========================================');
  console.log(`修复完成！共修复 ${fixedCount} 个文件`);
  console.log('========================================');
}

main().catch(console.error);
