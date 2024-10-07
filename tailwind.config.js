module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gray-100": "#FDFDFD",
        "gray-600": "#2B2B2B",
        "blue-200": "#CDDFFB",
      },
      borderRadius: {
        4: "4rem",
      },
      fontSize: {
        16: "1.6rem",
        60: "6rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
