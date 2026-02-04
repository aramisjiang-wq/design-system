const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    console.log('访问测试页面...');
    await page.goto('http://localhost:8082/iframe-test.html', { waitUntil: 'networkidle2' });
    
    console.log('等待 iframe 加载...');
    await page.waitForTimeout(3000);
    
    const iframes = await page.$$('iframe');
    console.log(`找到 ${iframes.length} 个 iframe`);
    
    for (let i = 0; i < iframes.length; i++) {
        try {
            const frame = await iframes[i].contentFrame();
            if (frame) {
                const title = await frame.title();
                const url = frame.url();
                console.log(`Iframe ${i + 1}: ${title} - ${url}`);
            } else {
                console.log(`Iframe ${i + 1}: 无法访问内容 (可能是跨域问题)`);
            }
        } catch (error) {
            console.log(`Iframe ${i + 1}: 错误 - ${error.message}`);
        }
    }
    
    await browser.close();
})();