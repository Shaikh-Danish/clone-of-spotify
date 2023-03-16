/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "secondary": "#181818",
      "white": "#ffffff",
      "accent-green": "#1db954"
    },
    letterSpacing: {
      normal: "1px"
    },
    extend: {},
  },
  plugins: [],
}
