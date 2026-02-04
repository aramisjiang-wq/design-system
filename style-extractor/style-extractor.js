import Color from 'color';

export class StyleExtractor {
  constructor() {
    this.colorConverter = new Color();
  }

  extractFontSystem(styles) {
    const fontFamilies = this.extractFontFamily(styles.fonts);
    const fontWeights = this.extractFontWeights(styles.computedStyles);
    const fontSizes = this.extractFontSizes(styles.fontSizes);
    const lineHeights = this.extractLineHeights(styles.computedStyles);
    const letterSpacings = this.extractLetterSpacings(styles.computedStyles);

    return {
      fontFamily: fontFamilies,
      fontWeights,
      fontSizes,
      lineHeights,
      letterSpacings
    };
  }

  extractColorSystem(styles) {
    const primaryColors = this.extractPrimaryColors(styles.colors);
    const functionalColors = this.extractFunctionalColors(styles.colors);
    const neutralColors = this.extractNeutralColors(styles.colors);
    const backgroundColors = this.extractBackgroundColors(styles.colors);
    const textColors = this.extractTextColors(styles.colors);
    const borderColors = this.extractBorderColors(styles.colors);

    return {
      primaryColors,
      functionalColors,
      neutralColors,
      backgroundColors,
      textColors,
      borderColors
    };
  }

  extractSpacingSystem(styles) {
    return this.extractSpacingValues(styles.spacing);
  }

  extractComponentStyles(styles) {
    return {
      buttons: this.extractButtonStyles(styles.computedStyles),
      cards: this.extractCardStyles(styles.computedStyles),
      inputs: this.extractInputStyles(styles.computedStyles),
      navigation: this.extractNavigationStyles(styles.computedStyles)
    };
  }

  extractFontFamily(fonts) {
    const fontMap = new Map();
    
    fonts.forEach(font => {
      const cleanFont = font.replace(/"/g, '').split(',')[0].trim();
      if (!fontMap.has(cleanFont)) {
        fontMap.set(cleanFont, 1);
      } else {
        fontMap.set(cleanFont, fontMap.get(cleanFont) + 1);
      }
    });

    const sortedFonts = Array.from(fontMap.entries())
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0]);

    return sortedFonts[0] || 'sans-serif';
  }

  extractFontWeights(computedStyles) {
    const weights = new Set();
    
    Object.values(computedStyles).forEach(style => {
      if (style.fontWeight) {
        const weight = parseInt(style.fontWeight);
        if (!isNaN(weight)) {
          weights.add(weight);
        }
      }
    });

    return Array.from(weights).sort((a, b) => a - b);
  }

  extractFontSizes(fontSizes) {
    const commonSizes = [12, 14, 16, 18, 20, 24, 30, 36, 48, 64];
    const extractedSizes = fontSizes.map(size => Math.round(size));
    
    return extractedSizes.filter(size => commonSizes.includes(size));
  }

  extractLineHeights(computedStyles) {
    const lineHeights = new Set();
    
    Object.values(computedStyles).forEach(style => {
      if (style.lineHeight) {
        const value = parseFloat(style.lineHeight);
        if (!isNaN(value) && value > 0) {
          lineHeights.add(value.toFixed(2));
        }
      }
    });

    return Array.from(lineHeights).sort((a, b) => parseFloat(a) - parseFloat(b));
  }

  extractLetterSpacings(computedStyles) {
    const letterSpacings = new Set();
    
    Object.values(computedStyles).forEach(style => {
      if (style.letterSpacing && style.letterSpacing !== 'normal') {
        letterSpacings.add(style.letterSpacing);
      }
    });

    return Array.from(letterSpacings);
  }

  extractPrimaryColors(colors) {
    const colorMap = new Map();
    
    colors.forEach(color => {
      try {
        const c = new Color(color);
        const hex = c.hex();
        
        if (!colorMap.has(hex)) {
          colorMap.set(hex, 1);
        } else {
          colorMap.set(hex, colorMap.get(hex) + 1);
        }
      } catch (e) {
        // 忽略无效颜色
      }
    });

    const sortedColors = Array.from(colorMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(entry => entry[0]);

    return sortedColors;
  }

  extractFunctionalColors(colors) {
    const successColors = [];
    const warningColors = [];
    const errorColors = [];
    const infoColors = [];

    colors.forEach(color => {
      try {
        const c = new Color(color);
        const hsl = c.hsl();
        const h = hsl.hue();
        const s = hsl.saturation();
        const l = hsl.lightness();

        if (h >= 80 && h <= 160 && s > 30) {
          successColors.push(c.hex());
        } else if (h >= 30 && h <= 60 && s > 30) {
          warningColors.push(c.hex());
        } else if (h >= 340 || h <= 20 && s > 30) {
          errorColors.push(c.hex());
        } else if (h >= 180 && h <= 260 && s > 30) {
          infoColors.push(c.hex());
        }
      } catch (e) {
        // 忽略无效颜色
      }
    });

    return {
      success: successColors[0] || '#22C55E',
      warning: warningColors[0] || '#F59E0B',
      error: errorColors[0] || '#EF4444',
      info: infoColors[0] || '#3B82F6'
    };
  }

  extractNeutralColors(colors) {
    const neutralColors = [];
    
    colors.forEach(color => {
      try {
        const c = new Color(color);
        const hsl = c.hsl();
        const s = hsl.saturation();
        const l = hsl.lightness();

        if (s < 10) {
          neutralColors.push(c.hex());
        }
      } catch (e) {
        // 忽略无效颜色
      }
    });

    return neutralColors.slice(0, 10);
  }

  extractBackgroundColors(colors) {
    const backgrounds = [];
    
    colors.forEach(color => {
      try {
        const c = new Color(color);
        const hsl = c.hsl();
        const l = hsl.lightness();

        if (l > 80) {
          backgrounds.push(c.hex());
        }
      } catch (e) {
        // 忽略无效颜色
      }
    });

    return backgrounds.slice(0, 5);
  }

  extractTextColors(colors) {
    const textColors = [];
    
    colors.forEach(color => {
      try {
        const c = new Color(color);
        const hsl = c.hsl();
        const l = hsl.lightness();

        if (l < 40) {
          textColors.push(c.hex());
        }
      } catch (e) {
        // 忽略无效颜色
      }
    });

    return textColors.slice(0, 5);
  }

  extractBorderColors(colors) {
    const borders = [];
    
    colors.forEach(color => {
      try {
        const c = new Color(color);
        const hsl = c.hsl();
        const l = hsl.lightness();

        if (l > 40 && l < 80) {
          borders.push(c.hex());
        }
      } catch (e) {
        // 忽略无效颜色
      }
    });

    return borders.slice(0, 5);
  }

  extractSpacingValues(spacing) {
    const spacingMap = new Map();
    
    spacing.forEach(value => {
      const pixels = parseFloat(value);
      if (!isNaN(pixels) && pixels > 0) {
        const rem = (pixels / 16).toFixed(2);
        if (!spacingMap.has(rem)) {
          spacingMap.set(rem, 1);
        } else {
          spacingMap.set(rem, spacingMap.get(rem) + 1);
        }
      }
    });

    const sortedSpacing = Array.from(spacingMap.entries())
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0]);

    return sortedSpacing.slice(0, 10);
  }

  extractButtonStyles(computedStyles) {
    const buttonStyles = [];
    
    Object.entries(computedStyles).forEach(([tag, style]) => {
      if (tag === 'button' || tag === 'a') {
        buttonStyles.push({
          tag,
          backgroundColor: style.backgroundColor,
          color: style.color,
          borderRadius: style.borderRadius,
          padding: style.padding
        });
      }
    });

    return buttonStyles;
  }

  extractCardStyles(computedStyles) {
    const cardStyles = [];
    
    Object.entries(computedStyles).forEach(([tag, style]) => {
      if (tag === 'div' || tag === 'article' || tag === 'section') {
        cardStyles.push({
          tag,
          backgroundColor: style.backgroundColor,
          borderRadius: style.borderRadius,
          padding: style.padding,
          margin: style.margin
        });
      }
    });

    return cardStyles.slice(0, 5);
  }

  extractInputStyles(computedStyles) {
    const inputStyles = [];
    
    Object.entries(computedStyles).forEach(([tag, style]) => {
      if (tag === 'input' || tag === 'textarea' || tag === 'select') {
        inputStyles.push({
          tag,
          backgroundColor: style.backgroundColor,
          color: style.color,
          borderRadius: style.borderRadius,
          padding: style.padding,
          borderColor: style.borderColor
        });
      }
    });

    return inputStyles;
  }

  extractNavigationStyles(computedStyles) {
    const navStyles = [];
    
    Object.entries(computedStyles).forEach(([tag, style]) => {
      if (tag === 'nav' || tag === 'header') {
        navStyles.push({
          tag,
          backgroundColor: style.backgroundColor,
          color: style.color,
          padding: style.padding
        });
      }
    });

    return navStyles;
  }
}
