const defaultTheme = require("tailwindcss/defaultTheme");

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
        '1.75': '0.4375rem',
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          100: "#ff63a9",
          200: "#ff4f95",
          300: "#ff3b81",
          400: "#f8276d",
          500: "#E41359",
          600: "#d00045",
          700: "#bc0031",
          800: "#a8001d",
          900: "#940009",
        },
        rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
