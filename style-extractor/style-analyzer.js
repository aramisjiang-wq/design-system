import Color from 'color';

export class StyleAnalyzer {
  analyzeFontSystem(fontSystem) {
    return {
      primaryFont: this.identifyPrimaryFont(fontSystem.fontFamily),
      fontScale: this.createFontScale(fontSystem.fontSizes),
      lineHeightScale: this.createLineHeightScale(fontSystem.lineHeights),
      letterSpacingScale: this.createLetterSpacingScale(fontSystem.letterSpacings)
    };
  }

  analyzeColorSystem(colorSystem) {
    return {
      primaryColor: this.identifyPrimaryColor(colorSystem.primaryColors),
      colorPalette: this.createColorPalette(colorSystem),
      colorContrast: this.analyzeColorContrast(colorSystem)
    };
  }

  analyzeSpacingSystem(spacingSystem) {
    return {
      spacingScale: this.createSpacingScale(spacingSystem),
      spacingPattern: this.identifySpacingPattern(spacingSystem)
    };
  }

  identifyPrimaryFont(fontFamily) {
    return fontFamily || 'sans-serif';
  }

  createFontScale(fontSizes) {
    const scale = {};
    const names = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'];
    
    fontSizes.forEach((size, index) => {
      if (index < names.length) {
        scale[names[index]] = {
          size: `${size}px`,
          rem: `${(size / 16).toFixed(2)}rem`
        };
      }
    });

    return scale;
  }

  createLineHeightScale(lineHeights) {
    const scale = {};
    
    lineHeights.forEach((height, index) => {
      scale[`leading-${index + 1}`] = height;
    });

    return scale;
  }

  createLetterSpacingScale(letterSpacings) {
    const scale = {};
    
    letterSpacings.forEach((spacing, index) => {
      scale[`tracking-${index + 1}`] = spacing;
    });

    return scale;
  }

  identifyPrimaryColor(primaryColors) {
    return primaryColors[0] || '#000000';
  }

  createColorPalette(colorSystem) {
    return {
      primary: colorSystem.primaryColors[0] || '#000000',
      success: colorSystem.functionalColors.success,
      warning: colorSystem.functionalColors.warning,
      error: colorSystem.functionalColors.error,
      info: colorSystem.functionalColors.info,
      neutrals: colorSystem.neutralColors.slice(0, 5),
      backgrounds: colorSystem.backgroundColors,
      textColors: colorSystem.textColors,
      borderColors: colorSystem.borderColors
    };
  }

  analyzeColorContrast(colorSystem) {
    const contrasts = {};
    
    const textColors = colorSystem.textColors;
    const backgrounds = colorSystem.backgroundColors;

    textColors.forEach(textColor => {
      backgrounds.forEach(bgColor => {
        try {
          const text = new Color(textColor);
          const bg = new Color(bgColor);
          const ratio = text.contrast(bg);
          
          const key = `${textColor}-on-${bgColor}`;
          contrasts[key] = ratio.toFixed(2);
        } catch (e) {
          // 忽略无效颜色
        }
      });
    });

    return contrasts;
  }

  createSpacingScale(spacingSystem) {
    const scale = {};
    const names = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];
    
    spacingSystem.forEach((spacing, index) => {
      if (index < names.length) {
        const pixels = (parseFloat(spacing) * 16).toFixed(0);
        scale[names[index]] = {
          rem: spacing,
          px: `${pixels}px`
        };
      }
    });

    return scale;
  }

  identifySpacingPattern(spacingSystem) {
    if (spacingSystem.length < 2) {
      return 'unknown';
    }

    const ratios = [];
    for (let i = 1; i < spacingSystem.length; i++) {
      const current = parseFloat(spacingSystem[i]);
      const previous = parseFloat(spacingSystem[i - 1]);
      if (previous > 0) {
        ratios.push(current / previous);
      }
    }

    const avgRatio = ratios.reduce((a, b) => a + b, 0) / ratios.length;

    if (avgRatio >= 1.5 && avgRatio <= 2.5) {
      return 'geometric';
    } else if (avgRatio >= 0.8 && avgRatio <= 1.2) {
      return 'linear';
    } else {
      return 'custom';
    }
  }
}
