import { extractDesignSystem } from './server-vanilla.js';

const testUrl = 'https://editor.islenote.com/zh/';

console.log('开始测试提取功能...');
console.log('目标 URL:', testUrl);
console.log('');

extractDesignSystem(testUrl).then(result => {
  if (result.success) {
    console.log('✓ 提取成功！');
    console.log('');
    console.log('结果预览（前 500 字符）：');
    console.log(result.markdown.substring(0, 500));
    console.log('');
    console.log('完整结果长度:', result.markdown.length, '字符');
  } else {
    console.log('✗ 提取失败：', result.error);
  }
}).catch(error => {
  console.error('✗ 测试失败：', error);
});
