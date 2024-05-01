export default function categorizeColors(colors) {
    const categorizedColors = {
        primary: null,
        secondary: null,
        tertiary: null,
        background: null,
        text: null,
        accent: null
    };

    const sortedColors = colors.sort((color1, color2) => {
        const hsv1 = hexToHsv(color1);
        const hsv2 = hexToHsv(color2);
        return hsv1.v - hsv2.v;
    });

    // Function to find the most visually pleasing combination of colors
    const findBestCombination = (categories, remainingColors) => {
        if (remainingColors.length === 0 || categories.some(category => categorizedColors[category] !== null)) {
            return;
        }

        const category = categories.shift();
        let bestColor = null;
        let minDistance = Infinity;

        for (const color of remainingColors) {
            const distance = calculateColorDistance(color, categorizedColors);
            if (distance < minDistance) {
                bestColor = color;
                minDistance = distance;
            }
        }

        categorizedColors[category] = bestColor;

        const newRemainingColors = remainingColors.filter(color => color !== bestColor);
        findBestCombination(categories, newRemainingColors);
    };

    // Initially categorize based on basic rules
    categorizedColors.background = sortedColors[0];
    categorizedColors.text = sortedColors[sortedColors.length - 1];

    const remainingColors = sortedColors.slice(1, sortedColors.length - 1);
    findBestCombination(['primary', 'secondary', 'tertiary', 'accent'], remainingColors);

    return categorizedColors;
}

function calculateColorDistance(color, categorizedColors) {
    let minDistance = Infinity;
    for (const category in categorizedColors) {
        if (categorizedColors[category] !== null) {
            const distance = getColorDistance(color, categorizedColors[category]);
            if (distance < minDistance) {
                minDistance = distance;
            }
        }
    }
    return minDistance;
}

function getColorDistance(color1, color2) {
    const hsv1 = hexToHsv(color1);
    const hsv2 = hexToHsv(color2);

    const hueDistance = Math.min(Math.abs(hsv1.h - hsv2.h), 360 - Math.abs(hsv1.h - hsv2.h));
    const saturationDistance = Math.abs(hsv1.s - hsv2.s);
    const valueDistance = Math.abs(hsv1.v - hsv2.v);

    return Math.sqrt(hueDistance ** 2 + saturationDistance ** 2 + valueDistance ** 2);
}

// Convert hex color to HSV
function hexToHsv(hex) {
    // Convert hex to RGB
    const r = parseInt(hex.substring(1, 3), 16) / 255;
    const g = parseInt(hex.substring(3, 5), 16) / 255;
    const b = parseInt(hex.substring(5, 7), 16) / 255;

    // Find the minimum and maximum values of RGB
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;

    let h, s, v;

    // Calculate hue
    if (delta === 0) {
        h = 0;
    } else if (max === r) {
        h = ((g - b) / delta) % 6;
    } else if (max === g) {
        h = (b - r) / delta + 2;
    } else {
        h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);
    if (h < 0) h += 360;

    // Calculate saturation
    s = max === 0 ? 0 : delta / max;

    // Calculate value
    v = max;

    return { h, s, v };
}
