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
        "hero-pattern-3":
          "url('https://www.up.pt/portal/static/images/img_minerva_footer.png')",
      },
      maxWidth: {
        480: "480px",
      },
      margin: {
        10.4: "0.65em",
      },
      fontSize: {
        3.2: "32px",
        2.5: "25.7px",
        1.9: "19.2px",
        3.8: "38px",
        2.6: "26px",
        2.8: "28px",
      },
      backgroundSize: {
        50: "50%",
      },
      backgroundPosition: {
        custom: "-390px -65px",
      },
      borderColor: {
        "light-gray": "#5c5c5c",
      },
      width: {
        30: "120px",
      },
      height: {
        0.5: "0.5px",
        350: "350px",
        600: "600px",
      },
      padding: {
        2.5: "10px",
        0.5: "2px",
      },
      inset: {
        neg: "-325px",
      },
    },
  },
  plugins: [],
};
