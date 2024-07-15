/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-home":
          "url('https://furniro-ds.s3.us-east-2.amazonaws.com/utils/home-img.png')",
        "background-panel":
          "url('https://furniro-ds.s3.us-east-2.amazonaws.com/utils/process-image.png')",
      },
      blur: {
        xs: "3px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "customYellow-100": "#FFF3E3",
        "customYellow-900": "#B88E2F",
        "customWhite-50": "#F4F5F7",
        "customWhite-100": "#B0B0B0",
        "customBlack-300": "#333333",
        "customBlack-500": "#3A3A3A",
        "customBlack-550": "#616161",
        "customBlack-600": "#666666",
        "customBlack-700": "#242424",
        "customBlack-800": "#9F9F9F",
        "customBlack-900": "#D8D8D8",
        "customBlack-950": "#D9D9D9",
        "customGray-500": "#898989",
        "customBeije-150": "#FCF8F3",
        "customBeije-300": "#FAF3EA",
        "customBeije-500": "#F9F1E7",
        "customRed-500": "#E97171",
        "customGreen-500": "#2EC1AC",
        "customPurple-500": "#816DFA",
      },
      fontSize: {
        "4.5xl": "34px",
      },
      spacing: {
        '2sm':"0.5px",
        195: "195px",
        card: "446px",
        single: "500px",
        cartW: "417px",
        cartH: "746px",
        404: "404px",
        481: "481px",
        500: "500px",
        585: "582px",
        850: "850px",
      },
    },
  },
  plugins: [],
};
