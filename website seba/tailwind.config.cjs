/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: '#060b16',
        secondary: '#e11d48',
        accent: '#f59e0b',
        brand: '#7c1632',
        brandsoft: '#fde3e9',
        dimWhite: 'rgba(255, 255, 255, 0.75)',
        dimBlue: 'rgba(158, 47, 84, 0.15)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};