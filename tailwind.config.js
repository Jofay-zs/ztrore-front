const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      color1: "#171e30",
      color2: "#333552",
      color3: "#5c527d",
      color4: "#9677b1",
      color5: "#e1a2ed",
      red: colors.red,
      gray: colors.gray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
