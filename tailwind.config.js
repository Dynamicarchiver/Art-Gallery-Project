/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  content: ["./index.html"],
  theme: {
    fontFamily: {
      dosis: ["Quicksand", "sans-serif"],
      gothic: ["Anton", "sans-serif"],
      body: ["Signika", "sans-serif"],
    },
    lineHeight: {
      none: "0",
    },
    screens: {
      sm: "640px",
      md: "825px",
    },
    fontSize: {
      calc: "calc(6.25vw)",
    },
    extend: {
      backgroundImage: {
        "laptop-hero": "url('./images/laptop image.jpg')",
        "desktop-hero": "url('./images/desktop image.jpg')",
        "mobile-hero": "url('./images/mobile image.jpg')",
      },
    },
  },
  plugins: [],
};
