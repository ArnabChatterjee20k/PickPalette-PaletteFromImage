/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./app/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        background: "var(--background)",
        text: "var(--text)",
        accent: "var(--accent)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      }
    },
    animation: {
      fadeIn: 'fadeIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.animate-fadeIn': {
          animation: 'fadeIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        },
        '.animate-contentShow': {
          animation: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        },
      })
    }),
  ],
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.animate-fadeIn': {
          animation: 'fadeIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        },
        '.animate-contentShow': {
          animation: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        },
      })
    }),
  ],
};
