export default function categorizeColors(colors) {
  const categorizedColors = {
    primary: null,
    secondary: null,
    tertiary: null,
    background: null,
    text: null,
    accent: null,
  };

  // Sort colors by perceived brightness
  const sortedColors = colors.sort((a, b) => {
    const [rA, gA, bA] = a.substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
    const [rB, gB, bB] = b.substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
    const brightnessA = (rA * 299 + gA * 587 + bA * 114) / 1000;
    const brightnessB = (rB * 299 + gB * 587 + bB * 114) / 1000;
    return brightnessA - brightnessB; // Sort in ascending order of brightness
  });

  // Assign background color
  categorizedColors.background = sortedColors[0]; // Darkest color

  // Function to find the most visually pleasing combination of colors
  const findBestCombination = (categories, remainingColors) => {
    if (remainingColors.length === 0 || categories.length === 0) {
      return;
    }
    const category = categories.shift();
    let bestColor = null;
    let maxDistance = -Infinity;
    for (const color of remainingColors) {
      const distance = calculateColorDistance(color, categorizedColors);
      if (distance > maxDistance) {
        bestColor = color;
        maxDistance = distance;
      }
    }
    categorizedColors[category] = bestColor;
    const newRemainingColors = remainingColors.filter(color => color !== bestColor);
    findBestCombination(categories, newRemainingColors);
  };

  // Calculate color distances and assign colors
  const remainingColors = sortedColors.slice(1, sortedColors.length);
  findBestCombination(['primary', 'secondary', 'tertiary'], remainingColors);

  // Assign text color
  const textColors = sortedColors.filter(color => !Object.values(categorizedColors).includes(color));
  categorizedColors.text = findContrastingColor(categorizedColors.background, textColors);

  // Assign accent color
  const accentColors = sortedColors.filter(color => !Object.values(categorizedColors).includes(color));
  categorizedColors.accent = accentColors[accentColors.length - 1]; // Assign the lightest remaining color as accent

  return categorizedColors;
}

function calculateColorDistance(color, categorizedColors) {
  let maxDistance = -Infinity;
  for (const category in categorizedColors) {
    if (categorizedColors[category] !== null) {
      const distance = getColorDistance(color, categorizedColors[category]);
      if (distance > maxDistance) {
        maxDistance = distance;
      }
    }
  }
  return maxDistance;
}

function getColorDistance(color1, color2) {
  const [r1, g1, b1] = color1.substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
  const [r2, g2, b2] = color2.substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

function findContrastingColor(baseColor, sortedColors) {
  let maxContrast = -Infinity;
  let contrastingColor = null;
  const [r, g, b] = baseColor.substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  for (const color of sortedColors) {
    if (color !== baseColor) {
      const [rColor, gColor, bColor] = color.substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
      const colorBrightness = (rColor * 299 + gColor * 587 + bColor * 114) / 1000;
      const contrast = Math.abs(brightness - colorBrightness);
      if (contrast > maxContrast) {
        maxContrast = contrast;
        contrastingColor = color;
      }
    }
  }

  return contrastingColor;
}