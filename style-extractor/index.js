import { WebScraper } from './web-scraper.js';
import { StyleExtractor } from './style-extractor.js';
import { StyleAnalyzer } from './style-analyzer.js';
import { DesignSystemGenerator } from './design-system-generator.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function extractDesignSystem(url, outputPath) {
  console.log(`开始提取网站设计规范: ${url}`);
  
  try {
    // 1. 抓取网站
    console.log('正在抓取网站...');
    const scraper = new WebScraper();
    const { html, styles } = await scraper.scrape(url);
    console.log('网站抓取完成');
    
    // 2. 提取样式
    console.log('正在提取样式...');
    const extractor = new StyleExtractor();
    const extractedStyles = {
      fontSystem: extractor.extractFontSystem(styles),
      colorSystem: extractor.extractColorSystem(styles),
      spacingSystem: extractor.extractSpacingSystem(styles),
      componentStyles: extractor.extractComponentStyles(styles)
    };
    console.log('样式提取完成');
    
    // 3. 分析样式
    console.log('正在分析样式...');
    const analyzer = new StyleAnalyzer();
    const analyzedStyles = {
      fontSystem: analyzer.analyzeFontSystem(extractedStyles.fontSystem),
      colorSystem: analyzer.analyzeColorSystem(extractedStyles.colorSystem),
      spacingSystem: analyzer.analyzeSpacingSystem(extractedStyles.spacingSystem),
      componentStyles: extractedStyles.componentStyles
    };
    console.log('样式分析完成');
    
    // 4. 生成设计规范
    console.log('正在生成设计规范...');
    const generator = new DesignSystemGenerator();
    const designSystem = generator.generate(analyzedStyles);
    console.log('设计规范生成完成');
    
    // 5. 输出Markdown
    console.log('正在生成Markdown文档...');
    const markdown = generator.generateMarkdown(designSystem);
    
    // 6. 保存文件
    const defaultOutputPath = path.join(__dirname, 'extracted-design-system.md');
    const finalOutputPath = outputPath || defaultOutputPath;
    
    fs.writeFileSync(finalOutputPath, markdown, 'utf-8');
    console.log(`设计规范已保存到: ${finalOutputPath}`);
    
    return {
      success: true,
      outputPath: finalOutputPath,
      designSystem
    };
    
  } catch (error) {
    console.error('提取设计规范时出错:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
}

// 命令行使用
if (import.meta.url === `file://${process.argv[1]}`) {
  const url = process.argv[2];
  const outputPath = process.argv[3];
  
  if (!url) {
    console.log('使用方法: node index.js <网站URL> [输出路径]');
    console.log('示例: node index.js https://example.com');
    console.log('示例: node index.js https://example.com ./output.md');
    process.exit(1);
  }
  
  extractDesignSystem(url, outputPath);
}
