module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gray-100": "#FDFDFD",
        "blue-200": "#CDDFFB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
