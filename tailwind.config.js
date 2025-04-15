/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./themes/**/layouts/**/*.{html,js}",
    "./content/**/*.{md,html}",
    "./hugo_stats.json", 
    "./assets/**/*.{js,css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio'),
  ],
}
