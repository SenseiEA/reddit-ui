/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {    
      colors: {
      'reddit-color': '#0B1416',
      'reddit-hover': '#1A282D',
      'reddit-orange': '#D93A00'
      }
    },
  },
  plugins: [],
}

