/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:['Poppins','sans-serif'],
        Roboto:['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}