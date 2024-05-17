/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#F0F4FF",
        "primary-200": "#D9E2FF",
        "primary-300": "#A6C1FF",
        "secondary-100": "#F0F4FF",
        "secondary-200": "#D9E2FF",
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
