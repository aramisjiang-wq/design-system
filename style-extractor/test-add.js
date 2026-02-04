import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, '..', 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');

const extractedGridRegex = /<div class="grid" id="extracted-grid"[^>]*>([\s\S]*?)<\/div>/;
const gridMatch = indexContent.match(extractedGridRegex);

console.log('Grid match:', gridMatch ? 'Found' : 'Not found');
if (gridMatch) {
  console.log('Match length:', gridMatch[0].length);
  console.log('Content length:', gridMatch[1].length);
  console.log('Content:', gridMatch[1]);
}