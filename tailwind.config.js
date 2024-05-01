/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FFA3",
        secondary: "#00D1FF",
        tertiary: "#FF00E5",
        background: "#262626",
        text: "#000000",
        accent: "#FFFFF",
      },
    },
  },
  plugins: [],
};
