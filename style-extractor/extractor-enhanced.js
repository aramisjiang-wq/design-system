import { extractDesignSystem as baseExtract } from './extractor.js';

export async function extractDesignSystemEnhanced(url) {
  try {
    console.log('正在获取网页内容...');
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const html = await response.text();
    
    console.log('正在分析样式...');
    
    const extractedData = {
      metadata: {
        url: url,
        extractedAt: new Date().toISOString()
      },
      colors: extractColorsEnhanced(html),
      fonts: extractFontsEnhanced(html),
      spacing: extractSpacingEnhanced(html),
      components: extractComponents(html),
      layout: extractLayoutEnhanced(html),
      cssVariables: extractCSSVariables(html),
      externalStylesheets: extractExternalStylesheets(html),
      theme: extractThemeInfo(html)
    };
    
    console.log('正在生成设计规范...');
    const markdown = generateMarkdownEnhanced(extractedData);
    
    return {
      success: true,
      markdown,
      data: extractedData
    };
    
  } catch (error) {
    console.error('提取失败:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

function extractColorsEnhanced(html) {
  const colors = new Map();
  
  const styleRegex = /style\s*=\s*"([^"]*)"/gi;
  const colorRegex = /color\s*:\s*([^;{}]+)/gi;
  const bgRegex = /background(?:-color)?\s*:\s*([^;{}]+)/gi;
  const borderRegex = /border(?:-color)?\s*:\s*([^;{}]+)/gi;
  const shadowRegex = /box-shadow\s*:\s*([^;{}]+)/gi;
  
  let styleMatch;
  while ((styleMatch = styleRegex.exec(html)) !== null) {
    const style = styleMatch[1];
    
    let match;
    while ((match = colorRegex.exec(style)) !== null) {
      const color = normalizeColor(match[1].trim());
      if (color) {
        colors.set(color, (colors.get(color) || 0) + 1);
      }
    }
    
    colorRegex.lastIndex = 0;
    while ((match = bgRegex.exec(style)) !== null) {
      const color = normalizeColor(match[1].trim());
      if (color && !color.startsWith('rgba(0, 0, 0, 0)')) {
        colors.set(color, (colors.get(color) || 0) + 1);
      }
    }
    
    bgRegex.lastIndex = 0;
    while ((match = borderRegex.exec(style)) !== null) {
      const color = normalizeColor(match[1].trim());
      if (color) {
        colors.set(color, (colors.get(color) || 0) + 1);
      }
    }
    
    borderRegex.lastIndex = 0;
    while ((match = shadowRegex.exec(style)) !== null) {
      const shadow = match[1].trim();
      const shadowColors = extractColorsFromShadow(shadow);
      shadowColors.forEach(color => {
        if (color) {
          colors.set(color, (colors.get(color) || 0) + 1);
        }
      });
    }
  }
  
  const styleTagRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let styleTagMatch;
  while ((styleTagMatch = styleTagRegex.exec(html)) !== null) {
    const styleContent = styleTagMatch[1];
    
    const cssColors = extractColorsFromCSS(styleContent);
    cssColors.forEach(color => {
      colors.set(color, (colors.get(color) || 0) + 1);
    });
  }
  
  const sortedColors = Array.from(colors.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([color]) => color);
  
  const primaryColor = sortedColors.find(c => c !== '#ffffff' && c !== '#000000' && !c.startsWith('rgb(255, 255, 255)') && !c.startsWith('rgb(0, 0, 0)')) || sortedColors[0] || '#000000';
  
  return {
    allColors: sortedColors,
    primaryColor: primaryColor,
    colorCount: sortedColors.length,
    colorUsage: Object.fromEntries(colors)
  };
}

function extractColorsFromCSS(css) {
  const colors = [];
  const colorRegex = /color\s*:\s*([^;{}]+)/gi;
  const bgRegex = /background(?:-color)?\s*:\s*([^;{}]+)/gi;
  const borderRegex = /border(?:-color)?\s*:\s*([^;{}]+)/gi;
  const shadowRegex = /box-shadow\s*:\s*([^;{}]+)/gi;
  
  let match;
  while ((match = colorRegex.exec(css)) !== null) {
    const color = normalizeColor(match[1].trim());
    if (color) colors.push(color);
  }
  
  colorRegex.lastIndex = 0;
  while ((match = bgRegex.exec(css)) !== null) {
    const color = normalizeColor(match[1].trim());
    if (color && !color.startsWith('rgba(0, 0, 0, 0)')) colors.push(color);
  }
  
  bgRegex.lastIndex = 0;
  while ((match = borderRegex.exec(css)) !== null) {
    const color = normalizeColor(match[1].trim());
    if (color) colors.push(color);
  }
  
  borderRegex.lastIndex = 0;
  while ((match = shadowRegex.exec(css)) !== null) {
    const shadow = match[1].trim();
    const shadowColors = extractColorsFromShadow(shadow);
    shadowColors.forEach(color => {
      if (color) colors.push(color);
    });
  }
  
  return colors;
}

function extractColorsFromShadow(shadow) {
  const colors = [];
  const colorRegex = /rgba?\([^)]+\)|#[a-fA-F0-9]{3,8}/g;
  let match;
  while ((match = colorRegex.exec(shadow)) !== null) {
    const color = normalizeColor(match[0]);
    if (color) {
      colors.push(color);
    }
  }
  return colors;
}

function extractFontsEnhanced(html) {
  const fonts = new Map();
  const fontSizes = new Map();
  const fontWeights = new Map();
  const lineHeights = new Map();
  
  const styleRegex = /style\s*=\s*"([^"]*)"/gi;
  const fontRegex = /font-family\s*:\s*([^;{}]+)/gi;
  const sizeRegex = /font-size\s*:\s*([^;{}]+)/gi;
  const weightRegex = /font-weight\s*:\s*([^;{}]+)/gi;
  const lineHeightRegex = /line-height\s*:\s*([^;{}]+)/gi;
  
  let styleMatch;
  while ((styleMatch = styleRegex.exec(html)) !== null) {
    const style = styleMatch[1];
    
    let match;
    while ((match = fontRegex.exec(style)) !== null) {
      const font = match[1].trim();
      if (font && !font.includes('{') && !font.includes('}')) {
        fonts.set(font, (fonts.get(font) || 0) + 1);
      }
    }
    
    while ((match = sizeRegex.exec(style)) !== null) {
      const size = match[1].trim();
      if (size && !size.includes('{') && !size.includes('}')) {
        fontSizes.set(size, (fontSizes.get(size) || 0) + 1);
      }
    }
    
    while ((match = weightRegex.exec(style)) !== null) {
      const weight = match[1].trim();
      if (weight && !weight.includes('{') && !weight.includes('}')) {
        fontWeights.set(weight, (fontWeights.get(weight) || 0) + 1);
      }
    }
    
    while ((match = lineHeightRegex.exec(style)) !== null) {
      const height = match[1].trim();
      if (height && !height.includes('{') && !height.includes('}')) {
        lineHeights.set(height, (lineHeights.get(height) || 0) + 1);
      }
    }
  }
  
  const styleTagRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let styleTagMatch;
  while ((styleTagMatch = styleTagRegex.exec(html)) !== null) {
    const styleContent = styleTagMatch[1];
    
    const cssFonts = extractFontsFromCSS(styleContent);
    cssFonts.fonts.forEach(font => fonts.set(font, (fonts.get(font) || 0) + 1));
    cssFonts.sizes.forEach(size => fontSizes.set(size, (fontSizes.get(size) || 0) + 1));
    cssFonts.weights.forEach(weight => fontWeights.set(weight, (fontWeights.get(weight) || 0) + 1));
    cssFonts.heights.forEach(height => lineHeights.set(height, (lineHeights.get(height) || 0) + 1));
  }
  
  const sortedFonts = Array.from(fonts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([font]) => font);
  
  const sortedSizes = Array.from(fontSizes.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([size]) => size);
  
  return {
    fontFamily: sortedFonts[0] || 'sans-serif',
    allFonts: sortedFonts,
    fontSizes: sortedSizes,
    fontWeights: Array.from(fontWeights.keys()).filter(w => w && w.length > 0),
    lineHeights: Array.from(lineHeights.keys()).filter(h => h && h.length > 0)
  };
}

function extractFontsFromCSS(css) {
  const fonts = [];
  const sizes = [];
  const weights = [];
  const heights = [];
  
  const fontRegex = /font-family\s*:\s*([^;{}]+)/gi;
  const sizeRegex = /font-size\s*:\s*([^;{}]+)/gi;
  const weightRegex = /font-weight\s*:\s*([^;{}]+)/gi;
  const lineHeightRegex = /line-height\s*:\s*([^;{}]+)/gi;
  
  let match;
  while ((match = fontRegex.exec(css)) !== null) {
    const font = match[1].trim();
    if (font && !font.includes('{') && !font.includes('}')) fonts.push(font);
  }
  
  while ((match = sizeRegex.exec(css)) !== null) {
    const size = match[1].trim();
    if (size && !size.includes('{') && !size.includes('}')) sizes.push(size);
  }
  
  while ((match = weightRegex.exec(css)) !== null) {
    const weight = match[1].trim();
    if (weight && !weight.includes('{') && !weight.includes('}')) weights.push(weight);
  }
  
  while ((match = lineHeightRegex.exec(css)) !== null) {
    const height = match[1].trim();
    if (height && !height.includes('{') && !height.includes('}')) heights.push(height);
  }
  
  return { fonts, sizes, weights, heights };
}

function extractSpacingEnhanced(html) {
  const spacings = new Map();
  const paddings = new Map();
  const margins = new Map();
  const gaps = new Map();
  
  const styleRegex = /style\s*=\s*"([^"]*)"/gi;
  const paddingRegex = /padding(?:-[a-z]+)?\s*:\s*([^;{}]+)/gi;
  const marginRegex = /margin(?:-[a-z]+)?\s*:\s*([^;{}]+)/gi;
  const gapRegex = /gap(?:-[a-z]+)?\s*:\s*([^;{}]+)/gi;
  
  let styleMatch;
  while ((styleMatch = styleRegex.exec(html)) !== null) {
    const style = styleMatch[1];
    
    let match;
    while ((match = paddingRegex.exec(style)) !== null) {
      const value = match[1].trim();
      if (value && value !== '0' && !value.includes('{') && !value.includes('}')) {
        paddings.set(value, (paddings.get(value) || 0) + 1);
        spacings.set(value, (spacings.get(value) || 0) + 1);
      }
    }
    
    while ((match = marginRegex.exec(style)) !== null) {
      const value = match[1].trim();
      if (value && value !== '0' && !value.includes('{') && !value.includes('}')) {
        margins.set(value, (margins.get(value) || 0) + 1);
        spacings.set(value, (spacings.get(value) || 0) + 1);
      }
    }
    
    while ((match = gapRegex.exec(style)) !== null) {
      const value = match[1].trim();
      if (value && value !== '0' && !value.includes('{') && !value.includes('}')) {
        gaps.set(value, (gaps.get(value) || 0) + 1);
        spacings.set(value, (spacings.get(value) || 0) + 1);
      }
    }
  }
  
  const styleTagRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let styleTagMatch;
  while ((styleTagMatch = styleTagRegex.exec(html)) !== null) {
    const styleContent = styleTagMatch[1];
    
    const cssSpacing = extractSpacingFromCSS(styleContent);
    cssSpacing.paddings.forEach(p => paddings.set(p, (paddings.get(p) || 0) + 1));
    cssSpacing.margins.forEach(m => margins.set(m, (margins.get(m) || 0) + 1));
    cssSpacing.gaps.forEach(g => gaps.set(g, (gaps.get(g) || 0) + 1));
  }
  
  const sortedSpacings = Array.from(spacings.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([spacing]) => spacing);
  
  return {
    allSpacings: sortedSpacings,
    paddings: Array.from(paddings.keys()),
    margins: Array.from(margins.keys()),
    gaps: Array.from(gaps.keys())
  };
}

function extractSpacingFromCSS(css) {
  const paddings = [];
  const margins = [];
  const gaps = [];
  
  const paddingRegex = /padding(?:-[a-z]+)?\s*:\s*([^;{}]+)/gi;
  const marginRegex = /margin(?:-[a-z]+)?\s*:\s*([^;{}]+)/gi;
  const gapRegex = /gap(?:-[a-z]+)?\s*:\s*([^;{}]+)/gi;
  
  let match;
  while ((match = paddingRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && value !== '0' && !value.includes('{') && !value.includes('}')) paddings.push(value);
  }
  
  while ((match = marginRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && value !== '0' && !value.includes('{') && !value.includes('}')) margins.push(value);
  }
  
  while ((match = gapRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && value !== '0' && !value.includes('{') && !value.includes('}')) gaps.push(value);
  }
  
  return { paddings, margins, gaps };
}

function extractLayoutEnhanced(html) {
  const layouts = {
    maxWidth: new Set(),
    display: new Set(),
    flexDirections: new Set(),
    justifies: new Set(),
    aligns: new Set(),
    grids: new Set()
  };
  
  const styleRegex = /style\s*=\s*"([^"]*)"/gi;
  const maxWidthRegex = /max-width\s*:\s*([^;{}]+)/gi;
  const displayRegex = /display\s*:\s*([^;{}]+)/gi;
  const flexDirectionRegex = /flex-direction\s*:\s*([^;{}]+)/gi;
  const justifyRegex = /justify-content\s*:\s*([^;{}]+)/gi;
  const alignRegex = /align-items\s*:\s*([^;{}]+)/gi;
  const gridRegex = /grid-template-columns\s*:\s*([^;{}]+)/gi;
  
  let styleMatch;
  while ((styleMatch = styleRegex.exec(html)) !== null) {
    const style = styleMatch[1];
    
    let match;
    while ((match = maxWidthRegex.exec(style)) !== null) {
      const value = match[1].trim();
      if (value && !value.includes('{') && !value.includes('}')) {
        layouts.maxWidth.add(value);
      }
    }
    
    while ((match = displayRegex.exec(style)) !== null) {
      const value = match[1].trim();
      if (value && !value.includes('{') && !value.includes('}')) {
        layouts.display.add(value);
      }
    }
    
    while ((match = flexDirectionRegex.exec(style)) !== null) {
      const value = match[1].trim();
      if (value && !value.includes('{') && !value.includes('}')) {
        layouts.flexDirections.add(value);
      }
    }
    
    while ((match = justifyRegex.exec(style)) !== null) {
      const value = match[1].trim();
      if (value && !value.includes('{') && !value.includes('}')) {
        layouts.justifies.add(value);
      }
    }
    
    while ((match = alignRegex.exec(style)) !== null) {
      const value = match[1].trim();
      if (value && !value.includes('{') && !value.includes('}')) {
        layouts.aligns.add(value);
      }
    }
    
    while ((match = gridRegex.exec(style)) !== null) {
      const value = match[1].trim();
      if (value && !value.includes('{') && !value.includes('}')) {
        layouts.grids.add(value);
      }
    }
  }
  
  const styleTagRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let styleTagMatch;
  while ((styleTagMatch = styleTagRegex.exec(html)) !== null) {
    const styleContent = styleTagMatch[1];
    
    const cssLayout = extractLayoutFromCSS(styleContent);
    cssLayout.maxWidth.forEach(w => layouts.maxWidth.add(w));
    cssLayout.display.forEach(d => layouts.display.add(d));
    cssLayout.flexDirections.forEach(fd => layouts.flexDirections.add(fd));
    cssLayout.justifies.forEach(j => layouts.justifies.add(j));
    cssLayout.aligns.forEach(a => layouts.aligns.add(a));
    cssLayout.grids.forEach(g => layouts.grids.add(g));
  }
  
  return {
    maxWidth: Array.from(layouts.maxWidth),
    display: Array.from(layouts.display),
    flexDirections: Array.from(layouts.flexDirections),
    justifies: Array.from(layouts.justifies),
    aligns: Array.from(layouts.aligns),
    grids: Array.from(layouts.grids)
  };
}

function extractLayoutFromCSS(css) {
  const maxWidth = [];
  const display = [];
  const flexDirections = [];
  const justifies = [];
  const aligns = [];
  const grids = [];
  
  const maxWidthRegex = /max-width\s*:\s*([^;{}]+)/gi;
  const displayRegex = /display\s*:\s*([^;{}]+)/gi;
  const flexDirectionRegex = /flex-direction\s*:\s*([^;{}]+)/gi;
  const justifyRegex = /justify-content\s*:\s*([^;{}]+)/gi;
  const alignRegex = /align-items\s*:\s*([^;{}]+)/gi;
  const gridRegex = /grid-template-columns\s*:\s*([^;{}]+)/gi;
  
  let match;
  while ((match = maxWidthRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && !value.includes('{') && !value.includes('}')) maxWidth.push(value);
  }
  
  while ((match = displayRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && !value.includes('{') && !value.includes('}')) display.push(value);
  }
  
  while ((match = flexDirectionRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && !value.includes('{') && !value.includes('}')) flexDirections.push(value);
  }
  
  while ((match = justifyRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && !value.includes('{') && !value.includes('}')) justifies.push(value);
  }
  
  while ((match = alignRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && !value.includes('{') && !value.includes('}')) aligns.push(value);
  }
  
  while ((match = gridRegex.exec(css)) !== null) {
    const value = match[1].trim();
    if (value && !value.includes('{') && !value.includes('}')) grids.push(value);
  }
  
  return { maxWidth, display, flexDirections, justifies, aligns, grids };
}

function extractThemeInfo(html) {
  const theme = {
    hasDarkMode: false,
    hasLightMode: false,
    themeVariables: {}
  };
  
  const darkModeRegex = /dark[-_]?mode|data-theme=["']dark["']|\.dark\s*{/gi;
  const lightModeRegex = /light[-_]?mode|data-theme=["']light["']|\.light\s*{/gi;
  
  theme.hasDarkMode = darkModeRegex.test(html);
  theme.hasLightMode = lightModeRegex.test(html);
  
  const styleTagRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let styleTagMatch;
  while ((styleTagMatch = styleTagRegex.exec(html)) !== null) {
    const styleContent = styleTagMatch[1];
    
    const varRegex = /--([a-z-]+(?:-dark|-light)?-[a-z-]+)\s*:\s*([^;{}]+)/gi;
    let varMatch;
    while ((varMatch = varRegex.exec(styleContent)) !== null) {
      const name = varMatch[1].trim();
      const value = varMatch[2].trim();
      if (name && value && !name.includes('{') && !value.includes('{')) {
        theme.themeVariables[name] = value;
      }
    }
  }
  
  return theme;
}

function extractComponents(html) {
  const buttons = [];
  const cards = [];
  const inputs = [];
  const links = [];
  
  const buttonRegex = /<(button)[^>]*>([\s\S]*?)<\/button>/gi;
  let buttonMatch;
  let buttonCount = 0;
  while ((buttonMatch = buttonRegex.exec(html)) !== null && buttonCount < 10) {
    const tag = buttonMatch[1];
    const fullTag = buttonMatch[0];
    const text = buttonMatch[2].trim().replace(/<[^>]*>/g, '').substring(0, 50);
    
    const classMatch = fullTag.match(/class\s*=\s*"([^"]*)"/i);
    const className = classMatch ? classMatch[1] : '';
    
    const styleMatch = fullTag.match(/style\s*=\s*"([^"]*)"/i);
    const style = styleMatch ? parseInlineStyles(styleMatch[1]) : {};
    
    buttons.push({
      tag: tag.toLowerCase(),
      text: text || '无文本',
      className: className,
      style: style
    });
    buttonCount++;
  }
  
  const cardRegex = /<(div)[^>]*class\s*=\s*"([^"]*card[^"]*)"[^>]*>/gi;
  let cardMatch;
  let cardCount = 0;
  while ((cardMatch = cardRegex.exec(html)) !== null && cardCount < 5) {
    const fullTag = cardMatch[0];
    const className = cardMatch[1];
    
    const styleMatch = fullTag.match(/style\s*=\s*"([^"]*)"/i);
    const style = styleMatch ? parseInlineStyles(styleMatch[1]) : {};
    
    cards.push({
      tag: 'div',
      className: className,
      style: style
    });
    cardCount++;
  }
  
  const inputRegex = /<(input|textarea|select)[^>]*>/gi;
  let inputMatch;
  let inputCount = 0;
  while ((inputMatch = inputRegex.exec(html)) !== null && inputCount < 10) {
    const tag = inputMatch[1];
    const fullTag = inputMatch[0];
    const typeMatch = fullTag.match(/type\s*=\s*"([^"]*)"/i);
    const type = typeMatch ? typeMatch[1] : 'text';
    
    const classMatch = fullTag.match(/class\s*=\s*"([^"]*)"/i);
    const className = classMatch ? classMatch[1] : '';
    
    const styleMatch = fullTag.match(/style\s*=\s*"([^"]*)"/i);
    const style = styleMatch ? parseInlineStyles(styleMatch[1]) : {};
    
    inputs.push({
      tag: tag.toLowerCase(),
      type: type,
      className: className,
      style: style
    });
    inputCount++;
  }
  
  const linkRegex = /<(a)[^>]*>([\s\S]*?)<\/a>/gi;
  let linkMatch;
  let linkCount = 0;
  while ((linkMatch = linkRegex.exec(html)) !== null && linkCount < 10) {
    const tag = linkMatch[1];
    const fullTag = linkMatch[0];
    const text = linkMatch[2].trim().replace(/<[^>]*>/g, '').substring(0, 50);
    
    const classMatch = fullTag.match(/class\s*=\s*"([^"]*)"/i);
    const className = classMatch ? classMatch[1] : '';
    
    const styleMatch = fullTag.match(/style\s*=\s*"([^"]*)"/i);
    const style = styleMatch ? parseInlineStyles(styleMatch[1]) : {};
    
    links.push({
      tag: tag.toLowerCase(),
      text: text || '无文本',
      className: className,
      style: style
    });
    linkCount++;
  }
  
  return {
    buttons,
    cards,
    inputs,
    links
  };
}

function parseInlineStyles(styleString) {
  const styles = {};
  const styleRegex = /([a-z-]+)\s*:\s*([^;]+)/gi;
  let match;
  while ((match = styleRegex.exec(styleString)) !== null) {
    const property = match[1].trim();
    const value = match[2].trim();
    if (property && value && !property.includes('{') && !value.includes('{')) {
      styles[property] = value;
    }
  }
  return styles;
}

function extractCSSVariables(html) {
  const variables = new Map();
  
  const styleTagRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let styleTagMatch;
  while ((styleTagMatch = styleTagRegex.exec(html)) !== null) {
    const styleContent = styleTagMatch[1];
    
    const varRegex = /--([a-z-]+)\s*:\s*([^;{}]+)/gi;
    let varMatch;
    while ((varMatch = varRegex.exec(styleContent)) !== null) {
      const name = varMatch[1].trim();
      const value = varMatch[2].trim();
      if (name && value && !name.includes('{') && !value.includes('{')) {
        variables.set(name, value);
      }
    }
  }
  
  return Object.fromEntries(variables);
}

function extractExternalStylesheets(html) {
  const stylesheets = [];
  
  const linkRegex = /<link[^>]*rel\s*=\s*"stylesheet"[^>]*>/gi;
  let linkMatch;
  while ((linkMatch = linkRegex.exec(html)) !== null) {
    const hrefMatch = linkMatch[0].match(/href\s*=\s*"([^"]*)"/i);
    if (hrefMatch) {
      stylesheets.push(hrefMatch[1]);
    }
  }
  
  return stylesheets;
}

function normalizeColor(color) {
  if (!color || color === 'transparent' || color === 'none' || color === 'inherit') {
    return null;
  }
  
  color = color.trim();
  
  if (color.includes('{') || color.includes('}') || color.length > 50) {
    return null;
  }
  
  if (color.startsWith('rgb')) {
    return color;
  }
  
  if (color.startsWith('#')) {
    return color;
  }
  
  const namedColors = {
    'black': '#000000',
    'white': '#ffffff',
    'red': '#ff0000',
    'green': '#00ff00',
    'blue': '#0000ff',
    'yellow': '#ffff00',
    'cyan': '#00ffff',
    'magenta': '#ff00ff',
    'gray': '#808080',
    'grey': '#808080'
  };
  
  return namedColors[color.toLowerCase()] || color;
}

function generateMarkdownEnhanced(data) {
  const { metadata, colors, fonts, spacing, components, layout, cssVariables, externalStylesheets, theme } = data;
  
  return `# 设计规范提取结果

## 元数据

- **网站URL**: ${metadata.url}
- **提取时间**: ${metadata.extractedAt}
- **版本**: 1.0.0

---

## 设计理念

- **风格名称**：自动提取
- **风格描述**：从网站自动提取的设计样式
- **提取方式**：基于 HTML 内联样式和内部样式表分析

---

## 设计价值观

- **数据驱动**：基于实际网站样式数据
- **可复用性**：生成标准化的设计规范
- **可定制性**：支持自定义和扩展
- **标准化**：遵循设计规范标准

---

## 主题信息

- **暗黑模式**: ${theme.hasDarkMode ? '支持' : '不支持'}
- **亮色模式**: ${theme.hasLightMode ? '支持' : '不支持'}
- **主题变量数量**: ${Object.keys(theme.themeVariables).length}

---

## 字体系统

### 主字体
\`\`\`
字体：${fonts.fontFamily}
\`\`\`

### 字号（按使用频率排序）
${fonts.fontSizes.length > 0 ? fonts.fontSizes.slice(0, 10).map(s => `- **${s}**`).join('\n') : '未检测到字号'}

### 字重
${fonts.fontWeights.length > 0 ? fonts.fontWeights.slice(0, 10).map(w => `- **${w}**`).join('\n') : '未检测到字重'}

### 行高
${fonts.lineHeights.length > 0 ? fonts.lineHeights.slice(0, 10).map(h => `- **${h}**`).join('\n') : '未检测到行高'}

---

## 颜色系统

### 主色
\`\`\`
主色：${colors.primaryColor}
\`\`\`

### 检测到的颜色（按使用频率排序）
${colors.allColors.length > 0 ? colors.allColors.slice(0, 20).map((color, i) => `- **颜色${i + 1}**：${color}（使用次数：${colors.colorUsage[color]}）`).join('\n') : '未检测到颜色'}

### 功能色（建议）
- **成功色**：#4a9（示例）
- **警告色**：#c44（示例）
- **错误色**：#c44（示例）
- **信息色**：#4a9（示例）

---

## 间距系统

### 间距值（按使用频率排序）
${spacing.allSpacings.length > 0 ? spacing.allSpacings.slice(0, 20).map(s => `- **${s}**`).join('\n') : '未检测到间距'}

### 内边距
${spacing.paddings.length > 0 ? spacing.paddings.slice(0, 10).map(p => `- **${p}**`).join('\n') : '未检测到内边距'}

### 外边距
${spacing.margins.length > 0 ? spacing.margins.slice(0, 10).map(m => `- **${m}**`).join('\n') : '未检测到外边距'}

### 间距
${spacing.gaps.length > 0 ? spacing.gaps.slice(0, 10).map(g => `- **${g}**`).join('\n') : '未检测到间距'}

---

## 布局系统

### 最大宽度
${layout.maxWidth.length > 0 ? layout.maxWidth.slice(0, 10).map(w => `- **${w}**`).join('\n') : '未检测到最大宽度'}

### 显示方式
${layout.display.length > 0 ? layout.display.slice(0, 10).map(d => `- **${d}**`).join('\n') : '未检测到显示方式'}

### Flex 方向
${layout.flexDirections.length > 0 ? layout.flexDirections.slice(0, 10).map(fd => `- **${fd}**`).join('\n') : '未检测到 Flex 方向'}

### 对齐方式
${layout.justifies.length > 0 ? layout.justifies.slice(0, 10).map(j => `- **${j}**`).join('\n') : '未检测到对齐方式'}

### 垂直对齐
${layout.aligns.length > 0 ? layout.aligns.slice(0, 10).map(a => `- **${a}**`).join('\n') : '未检测到垂直对齐'}

### 网格布局
${layout.grids.length > 0 ? layout.grids.slice(0, 10).map(g => `- **${g}**`).join('\n') : '未检测到网格布局'}

---

## 组件规范

### 按钮
${components.buttons.length > 0 ? components.buttons.map((btn, i) => `
#### 按钮${i + 1}
- 标签：\`${btn.tag}\`
- 文本：\`${btn.text}\`
- 类名：\`${btn.className}\`
- 样式：
${Object.entries(btn.style).length > 0 ? Object.entries(btn.style).map(([k, v]) => `  - ${k}: ${v}`).join('\n') : '  无内联样式'}
`).join('\n') : '未检测到按钮样式'}

### 卡片
${components.cards.length > 0 ? components.cards.map((card, i) => `
#### 卡片${i + 1}
- 标签：\`${card.tag}\`
- 类名：\`${card.className}\`
- 样式：
${Object.entries(card.style).length > 0 ? Object.entries(card.style).map(([k, v]) => `  - ${k}: ${v}`).join('\n') : '  无内联样式'}
`).join('\n') : '未检测到卡片样式'}

### 输入框
${components.inputs.length > 0 ? components.inputs.map((input, i) => `
#### 输入框${i + 1}
- 标签：\`${input.tag}\`
- 类型：\`${input.type}\`
- 类名：\`${input.className}\`
- 样式：
${Object.entries(input.style).length > 0 ? Object.entries(input.style).map(([k, v]) => `  - ${k}: ${v}`).join('\n') : '  无内联样式'}
`).join('\n') : '未检测到输入框样式'}

### 链接
${components.links.length > 0 ? components.links.map((link, i) => `
#### 链接${i + 1}
- 标签：\`${link.tag}\`
- 文本：\`${link.text}\`
- 类名：\`${link.className}\`
- 样式：
${Object.entries(link.style).length > 0 ? Object.entries(link.style).map(([k, v]) => `  - ${k}: ${v}`).join('\n') : '  无内联样式'}
`).join('\n') : '未检测到链接样式'}

---

## CSS 变量

${Object.keys(cssVariables).length > 0 ? Object.entries(cssVariables).map(([name, value]) => `- **--${name}**: ${value}`).join('\n') : '未检测到 CSS 变量'}

---

## 外部样式表

${externalStylesheets.length > 0 ? externalStylesheets.map((sheet, i) => `- **样式表${i + 1}**: ${sheet}`).join('\n') : '未检测到外部样式表'}

---

## CSS 变量定义

\`\`\`css
:root {
  --font-family: ${fonts.fontFamily};
  --color-primary: ${colors.primaryColor};
  ${Object.entries(cssVariables).slice(0, 10).map(([name, value]) => `  --${name}: ${value};`).join('\n')}
}
\`\`\`

---

## 可访问性要求

### 色彩对比度
- **状态**: 需要手动检查
- **建议**: 确保文字与背景的对比度至少为 4.5:1

### 字体大小
- **状态**: 需要手动检查
- **建议**: 正文文字大小不小于 14px

### 键盘导航
- **状态**: 需要手动检查
- **建议**: 确保所有交互元素可通过 Tab 键访问

### 屏幕阅读器
- **状态**: 需要手动检查
- **建议**: 为所有图片提供 alt 文本，使用语义化 HTML

---

## 注意事项

本设计规范是从网站自动提取生成的，基于 HTML 内联样式和内部样式表分析。

**限制**：
- 仅分析内联样式（inline styles）和内部样式表
- 不包含外部 CSS 文件的详细内容
- 不包含 JavaScript 动态生成的样式

**建议**：
1. 检查所有提取的样式是否准确
2. 根据实际需求调整设计规范
3. 补充缺失的设计元素
4. 添加更多组件样式规范
5. 完善可访问性要求
6. 手动添加外部 CSS 文件中的样式
7. 检查外部样式表链接是否正确加载
`;
}
