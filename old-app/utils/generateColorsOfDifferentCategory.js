export default function generateColorsOfDifferentCategory(type) {
  let colors = {}; // Declare colors as a let variable

  switch (type) {
    case "complementary":
      colors = generateComplementaryColors();
      break;
    case "monochromatic":
      colors = generateMonochromaticColors();
      break;
    case "random":
      colors = generateRandomColors();
      break;
    case "tetradic":
      colors = generateTetradiaColors();
      break;
    default:
      colors = generateRandomColors();
      break;
  }

  colors.text = getContrastingColor(colors.primary);
  colors.accent = getContrastingColor(colors.secondary);

  return colors;
}

function generateComplementaryColors() {
  const hue = Math.floor(Math.random() * 360);
  const complementHue = (hue + 180) % 360;

  return {
    primary: hslToHex(hue, 100, 50),
    secondary: hslToHex(complementHue, 100, 50),
    background: hslToHex(hue, 30, 20),
    tertiary: getContrastingColor(hslToHex(hue, 30, 20)),
  };
}

function generateMonochromaticColors() {
  const hue = Math.floor(Math.random() * 360);

  return {
    primary: hslToHex(hue, 100, 50),
    secondary: hslToHex(hue, 100, 30),
    tertiary: hslToHex(hue, 100, 70),
    background: hslToHex(hue, 30, 20),
  };
}

function generateRandomColors() {
  return {
    primary: hslToHex(Math.floor(Math.random() * 360), 100, 50),
    secondary: hslToHex(Math.floor(Math.random() * 360), 100, 50),
    tertiary: hslToHex(Math.floor(Math.random() * 360), 100, 50),
    background: hslToHex(Math.floor(Math.random() * 360), 30, 20),
  };
}

function generateTetradiaColors() {
  const hue = Math.floor(Math.random() * 360);
  const secondHue = (hue + 90) % 360;
  const thirdHue = (hue + 180) % 360;
  const fourthHue = (hue + 270) % 360;

  return {
    primary: hslToHex(hue, 100, 50),
    secondary: hslToHex(secondHue, 100, 50),
    tertiary: hslToHex(thirdHue, 100, 50),
    background: hslToHex(fourthHue, 30, 20),
  };
}

function getContrastingColor(color) {
  const rgb = hexToRgb(color);
  const brightness = Math.round(
    (parseInt(rgb.r) * 299 + parseInt(rgb.g) * 587 + parseInt(rgb.b) * 114) /
      1000
  );
  return brightness > 125 ? "#000000" : "#FFFFFF";
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255)
    .toString(16)
    .padStart(2, "0");
  g = Math.round((g + m) * 255)
    .toString(16)
    .padStart(2, "0");
  b = Math.round((b + m) * 255)
    .toString(16)
    .padStart(2, "0");

  return `#${r}${g}${b}`;
}