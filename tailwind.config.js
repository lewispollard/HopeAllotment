/* eslint-disable no-undef */
// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      backgroundOpacity: {
        90: "0.90",
        85: "0.85",
        80: "0.80",
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
