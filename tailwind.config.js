/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {},
      borderWidth: {
        3: "3px",
        1: "1px",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    backgroundImage: {
      "hero-pattern":
        "url('https://source.unsplash.com/1600x900/?nature')",
    },
  },
  plugins: [],
};
