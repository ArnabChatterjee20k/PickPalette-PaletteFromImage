export default function getContrastingHoverBackground(color) {
    // Function to convert hex to RGB
    function hexToRgb(hex) {
      // Expand shorthand form (e.g., "03F") to full form (e.g., "0033FF")
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
        hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)
      );
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    }
  
    // Calculate the luminance
    function calculateLuminance(rgb) {
      const { r, g, b } = rgb;
      return 0.299 * r + 0.587 * g + 0.114 * b;
    }
  
    // Calculate contrasting color for hover background
    const rgbColor = hexToRgb(color);
    const luminance = calculateLuminance(rgbColor);
    const hoverBgColor = luminance > 128 ? '#0000000d' : '#ffffff0d';
  
    return hoverBgColor;
  }
  