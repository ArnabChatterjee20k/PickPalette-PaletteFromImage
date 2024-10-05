export default function getContrastingColor(hexColor) {
    // convert hex color to rgb
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    // calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
    // choose white or black based on luminance
    if (luminance > 0.5) {
      return '#000000'; // black
    } else {
      return '#FFFFFF'; // white
    }
  }
  