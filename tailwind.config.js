/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "trans-card": "rgba(255, 255, 255, 0.5)", //background color and opacity for transparent card
      "black-darkest": "rgb(0 0 0)",
      "black-dark": "rgba(35, 34, 50, 1)",
      "black-gray": "rgba(255, 255, 255, 1)",
      "gray-light": "rgba(154, 152, 152, 1)",
      "gray-lighter": "rgba(223, 223, 223, 0.41)",
      // "gray-mid-light": "rgba(217, 217, 217, 0.58)",
      "gray-dark": "rgba(217, 217, 217, 1)",
      "gray-mid": "#D0D0D0",
      "green-mid": "rgba(99, 212, 113, 1)",
      "purple-dark": "rgba(14, 0, 83, 1)",
      "red-light": "rgba(255, 61, 20, 0.7)",
      "blue-darkest": "rgba(14, 0, 83, 1)",
      "blue-light": "rgba(0, 133, 255, 1)",
      "matte-blue": "rgba(8, 92, 109, 1)",
      "mid-blue": "rgba(0, 122, 255, 1)",
      gray: "#737070",
      blue: "rgba(0, 133, 255, 1)",
      white: "rgb(255 255 255)",
      green: "#70e000",
      yellow: "#FFD700",
    },
    fontFamily: {
      roboto: ["Roboto", "Georgia", "ui-serif"],
      //"Puritan" font similar to "Gill Sans"
      gill: ["Puritan", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      rubik: ["IBm Plex Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        //login and register background image
        "background-register": "url('/public/assets/images/background.jpg')",
        "background-intro-1": "url('/public/assets/images/dj_intro1.jpg')",
        "background-intro-2": "url('/public/assets/images/dj_intro2.jpg')",
      },
    },
    gridTemplateColumns: {
      desk: "320px auto",
      mobile: "1fr",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
    },
    boxShadow: {
      "menu_item-shadow": "0px 4px 12px 3px rgba(0, 122, 255, 0.42)",
      "item-shadow": " 0px 4px 16px 3px rgba(0, 0, 0, 0.25)",
      "cal-shadow": "  0px 6px 13px 1px rgba(0, 0, 0, 0.2)", // shadow for calculator
    },
    screens: {
      // min width media query
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // max width media query
      "max-md": { max: "850px" },
      "max-lg": { max: "1023px" },
      "max-sm": { max: "540px" },
      "max-xs": { max: "440px" },
      //breakpoints for dashboard
      "max-2md": { max: "800px" },
      "max-2xl": { max: "1350px" },
      "max-xl": { max: "1279px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
