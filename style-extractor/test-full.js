import { extractDesignSystem } from './extractor.js';

const testUrls = [
  'https://example.com',
  'https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default'
];

async function testExtraction() {
  console.log('========================================');
  console.log('设计规范提取功能测试');
  console.log('========================================\n');

  for (const url of testUrls) {
    console.log(`测试 URL: ${url}`);
    console.log('----------------------------------------');

    const result = await extractDesignSystem(url);

    if (result.success) {
      console.log('✓ 提取成功');
      console.log(`- 提取时间: ${result.data.metadata.extractedAt}`);
      console.log(`- 检测到颜色: ${result.data.colors.colorCount} 种`);
      console.log(`- 检测到字体: ${result.data.fonts.allFonts.length} 种`);
      console.log(`- 检测到字号: ${result.data.fonts.fontSizes.length} 种`);
      console.log(`- 检测到间距: ${result.data.spacing.allSpacings.length} 种`);
      console.log(`- 检测到按钮: ${result.data.components.buttons.length} 个`);
      console.log(`- 检测到输入框: ${result.data.components.inputs.length} 个`);
      console.log(`- 设计规范长度: ${result.markdown.length} 字符`);
      console.log('\n设计规范预览（前 500 字符）：');
      console.log(result.markdown.substring(0, 500));
    } else {
      console.log('✗ 提取失败:', result.error);
    }

    console.log('\n========================================\n');
  }

  console.log('测试完成！');
}

testExtraction().catch(console.error);
