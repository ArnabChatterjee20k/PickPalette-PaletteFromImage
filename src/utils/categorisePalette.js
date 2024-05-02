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

  // Assign background and text colors
  categorizedColors.background = sortedColors[0]; // Darkest color
  categorizedColors.text = sortedColors[sortedColors.length - 1]; // Lightest color

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
  const remainingColors = sortedColors.slice(1, sortedColors.length - 1);
  findBestCombination(['primary', 'secondary', 'tertiary', 'accent'], remainingColors);

  // Assign any remaining colors to unassigned properties
  const assignedColors = Object.values(categorizedColors).filter(color => color !== null);
  const unassignedProperties = Object.entries(categorizedColors).filter(([_, color]) => color === null).map(([prop]) => prop);

  for (const property of unassignedProperties) {
    for (const color of sortedColors) {
      if (!assignedColors.includes(color)) {
        categorizedColors[property] = color;
        assignedColors.push(color);
        break;
      }
    }
  }

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