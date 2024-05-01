export default function categorizeColors(colors) {
    const categorizedColors = {
        text: null,
        background: null,
        primary: null,
        secondary: null,
        accent: null
    };

    // Helper function to calculate perceived brightness
    function calculateBrightness(color) {
        const rgb = hexToRgb(color);
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    }

    // Helper function to calculate hue
    function calculateHue(rgb) {
        const { r, g, b } = rgb;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let hue = 0;

        if (max === min) {
            hue = 0;
        } else if (max === r) {
            hue = 60 * ((g - b) / (max - min));
        } else if (max === g) {
            hue = 60 * (2 + (b - r) / (max - min));
        } else {
            hue = 60 * (4 + (r - g) / (max - min));
        }

        return hue < 0 ? hue + 360 : hue;
    }

    // Find the darkest and lightest colors
    const sortedColors = colors.sort((a, b) => calculateBrightness(a) - calculateBrightness(b));
    const darkestColor = sortedColors[0];
    const lightestColor = sortedColors[sortedColors.length - 1];

    // Assign darkest color to background and lightest color to text
    categorizedColors.background = darkestColor;
    categorizedColors.text = lightestColor;

    // Find the accent color
    const accentColor = sortedColors.find(color => color !== darkestColor && color !== lightestColor);

    // Assign accent color
    categorizedColors.accent = accentColor;

    // Filter out colors close to the background and accent colors
    const filteredColors = sortedColors.filter(color =>
        color !== darkestColor &&
        color !== lightestColor &&
        color !== accentColor
    );

    // Calculate hue for remaining colors
    const hueValues = filteredColors.map(color => calculateHue(hexToRgb(color)));

    // Find primary color
    const primaryColorIndex = hueValues.findIndex(
        hue => hue >= 30 && hue <= 150 && !isSimilarToBackground(filteredColors[hueValues.indexOf(hue)], categorizedColors.background)
    );
    if (primaryColorIndex !== -1) {
        categorizedColors.primary = filteredColors[primaryColorIndex];
    }

    // Find secondary color
    const secondaryColorIndex = hueValues.findIndex(
        hue => hue >= 180 && hue <= 270 && !isSimilarToBackground(filteredColors[hueValues.indexOf(hue)], categorizedColors.background)
    );
    if (secondaryColorIndex !== -1) {
        categorizedColors.secondary = filteredColors[secondaryColorIndex];
    }

    return categorizedColors;
}

// Helper function to convert hex color to RGB
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}

// Helper function to check if a color is similar to the background color
function isSimilarToBackground(color, background) {
    const bgRgb = hexToRgb(background);
    const colorRgb = hexToRgb(color);

    // Calculate color difference using Euclidean distance
    const distance = Math.sqrt(
        Math.pow(bgRgb.r - colorRgb.r, 2) +
        Math.pow(bgRgb.g - colorRgb.g, 2) +
        Math.pow(bgRgb.b - colorRgb.b, 2)
    );

    // Threshold for similarity (adjust as needed)
    const threshold = 100;
    return distance < threshold;
}
