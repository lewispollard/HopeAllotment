/* eslint-disable no-undef */
// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./content/**/*.{js,jsx,ts,tsx,md,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              marginBottom: '1',
              fontSize: '1.4em'
            },
            h4: {
              marginTop: '1',
              fontWeight: '360'
            },
            blockquote: {
              quotes: "none",
              fontSize: "1.68em",
            }
          }
        }
      },
      backgroundOpacity: {
        90: "0.90",
        85: "0.85",
        80: "0.80",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require('tailwindcss-textshadow')],
};

