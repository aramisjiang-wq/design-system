import { extractDesignSystem } from './index.js';

async function testExtractor() {
  console.log('========================================');
  console.log('网站样式提取工具 - 测试');
  console.log('========================================\n');

  // 测试1：提取本地设计系统
  console.log('测试1：提取本地设计系统');
  console.log('----------------------------------------');
  const result1 = await extractDesignSystem(
    'http://localhost:8082',
    './test-local-design-system.md'
  );
  
  if (result1.success) {
    console.log('✓ 测试1通过：本地设计系统提取成功');
    console.log(`  输出路径: ${result1.outputPath}`);
  } else {
    console.log('✗ 测试1失败：', result1.error);
  }
  
  console.log('\n');

  // 测试2：提取外部网站（可选）
  console.log('测试2：提取外部网站设计系统');
  console.log('----------------------------------------');
  console.log('注意：此测试需要网络连接，可能需要较长时间');
  console.log('示例网站：https://example.com');
  console.log('如需测试，请取消以下代码的注释：');
  console.log(`
  const result2 = await extractDesignSystem(
    'https://example.com',
    './test-external-design-system.md'
  );
  
  if (result2.success) {
    console.log('✓ 测试2通过：外部网站设计系统提取成功');
    console.log(\`  输出路径: \${result2.outputPath}\`);
  } else {
    console.log('✗ 测试2失败：', result2.error);
  }
  `);

  console.log('\n========================================');
  console.log('测试完成');
  console.log('========================================');
}

// 运行测试
testExtractor().catch(console.error);
