/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "base": "#060c14",
        "alt": "#181d26",
        "grey": "#23292f",
        "hue": "#5f5be5",
        "primary": "#fafafa",
        "secondary": "#8c8f94"
      }
    },
  },
  presets: [require("nativewind/preset")],
  plugins: [],
}

