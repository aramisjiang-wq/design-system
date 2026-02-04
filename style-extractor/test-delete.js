import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, '..', 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');

const folderName = 'extracted-2026-01-31-uzova6emm';
const escapedFolderName = folderName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const cardRegex = new RegExp(`<div class="card">[\\s\\S]*?${escapedFolderName}[\\s\\S]*?</div>\\s*`, 'g');
const matches = indexContent.match(cardRegex);

console.log('Matches:', matches ? matches.length : 0);
if (matches) {
  console.log('Match 1 length:', matches[0].length);
  console.log('Match 1 preview:', matches[0].substring(0, 200));
}