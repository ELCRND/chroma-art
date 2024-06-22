/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "960px",
      lg: "1340px",
    },
    extend: {
      keyframes: {
        svgFragment_1: {
          "0%": { fill: "#eee" },
          "100%": { fill: "#8F364B" },
        },
        svgFragment_2: {
          "0%": { fill: "#eee" },
          "100%": { fill: "#6DC1B4" },
        },
        svgFragment_3: {
          "0%": { fill: "#eee" },
          "100%": { fill: "#EBDE75" },
        },
        svgFragment_4: {
          "0%": { fill: "#eee" },
          "100%": { fill: "#B8D477" },
        },
        svgFragment_5: {
          "0%": { fill: "#eee" },
          "100%": { fill: "#788F9D" },
        },
        svgFragment_6: {
          "0%": { fill: "#eee" },
          "100%": { fill: "#D98235" },
        },
        svgFragment_7: {
          "0%": { fill: "#eee" },
          "100%": { fill: "#826C51" },
        },
        svgFragment_8: {
          "0%": { fill: "#eee" },
          "100%": { fill: "#0092C8" },
        },
        "menu-open": {
          "0%": { right: "-240px" },
          "100%": { right: "0px" },
        },
        "menu-close": {
          "0%": { right: "0px" },
          "100%": { right: "-240px" },
        },
      },

      animation: {
        svgFragment_1: "svgFragment_1 1s linear forwards 1s",
        svgFragment_2: "svgFragment_2 1s linear forwards 3s",
        svgFragment_3: "svgFragment_3 1s linear forwards 1.5s",
        svgFragment_4: "svgFragment_4 1s linear forwards 4s",
        svgFragment_5: "svgFragment_5 1s linear forwards 2s",
        svgFragment_6: "svgFragment_6 1s linear forwards 3.5s",
        svgFragment_7: "svgFragment_7 1s linear forwards 2.5s",
        svgFragment_8: "svgFragment_8 1s linear forwards 4.5s",
        "menu-open": "menu-open 150ms linear forwards ",
        "menu-close": "menu-close 150ms linear forwards ",
      },
    },
  },
  plugins: [],
};
