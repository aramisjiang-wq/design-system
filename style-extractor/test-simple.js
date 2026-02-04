import { extractDesignSystem } from './extractor.js';

const url = 'https://example.com';

console.log('开始测试提取功能...');
console.log('目标 URL:', url);
console.log('');

extractDesignSystem(url).then(result => {
  if (result.success) {
    console.log('✓ 提取成功！');
    console.log('');
    console.log('提取数据摘要:');
    console.log('- 颜色数量:', result.data.colors.colorCount);
    console.log('- 主色:', result.data.colors.primaryColor);
    console.log('- 字体:', result.data.fonts.fontFamily);
    console.log('- 字号数量:', result.data.fonts.fontSizes.length);
    console.log('- 间距数量:', result.data.spacing.allSpacings.length);
    console.log('- 按钮数量:', result.data.components.buttons.length);
    console.log('- 输入框数量:', result.data.components.inputs.length);
    console.log('');
    console.log('设计规范预览（前 1000 字符）：');
    console.log(result.markdown.substring(0, 1000));
    console.log('');
    console.log('完整设计规范长度:', result.markdown.length, '字符');
  } else {
    console.log('✗ 提取失败：', result.error);
  }
}).catch(error => {
  console.error('✗ 测试失败：', error);
});
