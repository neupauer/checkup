const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("./colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      spacing: {
        0.25: "0.0625rem",
        1.75: "0.4375rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...colors,
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
