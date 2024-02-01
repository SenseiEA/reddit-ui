/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {    
      colors: {
      'reddit-color': '#0B1416',
      'reddit-hover': '#1A282D',
      'reddit-orange': '#D93A00',
      'reddit-line': '#242C2E',
      'reddit-category': '#82959B',
      'reddit-black': '#04090A'
      }
    },
  },
  plugins: [],
}

