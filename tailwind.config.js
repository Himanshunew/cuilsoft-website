/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        30: "30px",
        40: "40px",
        44: "44px",
        56: "56px",
      },
      colors: {
        light: "#fff",
        dark: "#000",
        primary: "#626262",
        secondary: "#fba42b",
        body: "#666666",
        darkGray: "#403d3d",
        "gray-25": "#C5C5C5",
        "Gray-50": "#f2f2f2",
      },
      gridTemplateColumns: {
        "40-60": "40% 60%",
      },
      boxShadow: {
        1: "rgb(0 0 0 / 18%) 0px 0px 10px",
        2: "rgba(0, 0, 0, 0.1) 0px 0px 40px",
      },
      spacing: {
        26: "26px",
        30: "30px",
        65: "65px",
        72: "72px",
        105: "105px",
      },
    },
  },
  plugins: [],
};
