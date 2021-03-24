const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  darkMode: false,
  theme: {
    colors,
    extend: {
      spacing: {
        0.25: "0.0625rem",
        1.75: "0.4375rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    transitionProperty: ["responsive", "motion-reduce"],
    backgroundColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus", "active"],
    boxShadow: ["responsive", "group-hover", "focus-within", "hover", "focus", "active"],
    scale: ["responsive", "hover", "focus", "active"],
    translate: ["responsive", "group-hover", "focus-within", "hover", "focus"],
    gradientColorStops: ["responsive", "dark", "hover", "focus", "active"],
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
};
