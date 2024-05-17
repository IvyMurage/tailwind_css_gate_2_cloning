/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "gray-100": "#D5D5D5",
        "gray-200": "#999999",
        "dark-gray": "#333333",
        "light-brown": "#A18A4D",
        "text-color": "#6A6A64",
      },
      borderWidth: {
        3: "3px",
        1: "1px",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    backgroundImage: {
      "hero-pattern": "url('/images/hero-pattern.svg')",
    },
  },
  plugins: [],
};
