/* eslint-env node */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gray-100": "#FDFDFD",
        "gray-200": "#F3F3F3",
        "gray-400": "#B0B0B0",
        "gray-600": "#2B2B2B",
        "blue-200": "#CDDFFB",
        "blue-400": "#055FE9",
        "blue-600": "#055FE9",
        "red-warning": "#960000",
      },
      borderRadius: {
        4: "4rem",
      },
      fontSize: {
        12: "1.2rem",
        14: "1.4rem",
        16: "1.6rem",
        32: "3.2rem",
        60: "6rem",
      },
      height: {
        850: "85rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
