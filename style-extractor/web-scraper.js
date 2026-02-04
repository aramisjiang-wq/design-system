import playwright from 'playwright';

export class WebScraper {
  constructor(options = {}) {
    this.options = {
      timeout: 30000,
      waitUntil: 'networkidle',
      ...options
    };
  }

  async scrape(url) {
    const browser = await playwright.chromium.launch({
      headless: true
    });
    
    const page = await browser.newPage();
    
    try {
      await page.goto(url, { 
        waitUntil: this.options.waitUntil,
        timeout: this.options.timeout
      });
      
      const html = await page.content();
      
      const styles = await page.evaluate(() => {
        const getComputedStyles = () => {
          const elements = document.querySelectorAll('*');
          const styles = new Map();
          
          elements.forEach(el => {
            const computed = window.getComputedStyle(el);
            const tagName = el.tagName.toLowerCase();
            
            if (!styles.has(tagName)) {
              styles.set(tagName, {
                fontFamily: computed.fontFamily,
                fontSize: computed.fontSize,
                fontWeight: computed.fontWeight,
                lineHeight: computed.lineHeight,
                letterSpacing: computed.letterSpacing,
                color: computed.color,
                backgroundColor: computed.backgroundColor,
                borderColor: computed.borderColor,
                borderRadius: computed.borderRadius,
                padding: computed.padding,
                margin: computed.margin
              });
            }
          });
          
          return Object.fromEntries(styles);
        };

        const getInlineStyles = () => {
          const elements = document.querySelectorAll('[style]');
          const styles = [];
          
          elements.forEach(el => {
            styles.push({
              tag: el.tagName.toLowerCase(),
              style: el.getAttribute('style')
            });
          });
          
          return styles;
        };

        const getExternalStylesheets = () => {
          const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
          return links.map(link => link.href);
        };

        const getColors = () => {
          const colors = new Set();
          const elements = document.querySelectorAll('*');
          
          elements.forEach(el => {
            const computed = window.getComputedStyle(el);
            
            if (computed.color && computed.color !== 'rgba(0, 0, 0, 0)') {
              colors.add(computed.color);
            }
            if (computed.backgroundColor && computed.backgroundColor !== 'rgba(0, 0, 0, 0)') {
              colors.add(computed.backgroundColor);
            }
            if (computed.borderColor && computed.borderColor !== 'rgba(0, 0, 0, 0)') {
              colors.add(computed.borderColor);
            }
          });
          
          return Array.from(colors);
        };

        const getFonts = () => {
          const fonts = new Set();
          const elements = document.querySelectorAll('*');
          
          elements.forEach(el => {
            const computed = window.getComputedStyle(el);
            fonts.add(computed.fontFamily);
          });
          
          return Array.from(fonts);
        };

        const getFontSizes = () => {
          const sizes = new Set();
          const elements = document.querySelectorAll('*');
          
          elements.forEach(el => {
            const computed = window.getComputedStyle(el);
            const fontSize = parseFloat(computed.fontSize);
            if (fontSize > 0) {
              sizes.add(fontSize);
            }
          });
          
          return Array.from(sizes).sort((a, b) => a - b);
        };

        const getSpacing = () => {
          const spacings = new Set();
          const elements = document.querySelectorAll('*');
          
          elements.forEach(el => {
            const computed = window.getComputedStyle(el);
            
            ['padding', 'margin'].forEach(prop => {
              const value = computed[prop];
              if (value && value !== '0px') {
                spacings.add(value);
              }
            });
          });
          
          return Array.from(spacings);
        };

        return {
          computedStyles: getComputedStyles(),
          inlineStyles: getInlineStyles(),
          externalStylesheets: getExternalStylesheets(),
          colors: getColors(),
          fonts: getFonts(),
          fontSizes: getFontSizes(),
          spacing: getSpacing()
        };
      });
      
      await browser.close();
      
      return { html, styles };
    } catch (error) {
      await browser.close();
      throw error;
    }
  }
}
