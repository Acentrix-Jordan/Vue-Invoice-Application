/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#7C5DFA",
        brandLight: "#9277FF",
        brandDark: "#252945",
        brandDarkest: "#1E2139",
        secondaryLightest: "#DFE3FA",
        secondaryLight: "#888EB0",
        secondary: "#7E88C3",
        sidebar: "#373B53",
      },
    },
  },
  plugins: [require("tailwindcss")("tailwind.js"), require("autoprefixer")()],
};
