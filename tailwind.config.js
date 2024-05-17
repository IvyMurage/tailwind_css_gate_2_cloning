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
        "light-gray": "#313132",
        "light-white": "#F2F2F2",
      },
      borderWidth: {
        3: "3px",
        1: "1px",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('/images/estudantes-icbas-lab-2024.format-jpeg.jpg')",
        "hero-pattern-2": "url('/images/minerva_01.png')",
      },
      maxWidth: {
        480: "480px",
      },
      margin: {
        10.4: "0.65em",
      },
      fontSize: {
        3.2: "32px",
      },
    },
  },
  plugins: [],
};
