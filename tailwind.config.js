/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./layouts/**/*.{html,js}",
    "./themes/**/layouts/**/*.{html,js}",
    "./content/**/*.{md,html}",
    "./hugo_stats.json", 
    "./**/*.html',",
    "./assets/**/*.{js,css}"
  ],
  safelist: [
    'fly-in',
    'fly-in-left',
    'fly-in-right',
    'ani',
    'animate-fade',
    /^fly-/,
    /^ani-/,
    /^animate-/,
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      animation: {
        'fly-in': 'flyIn 0.5s ease-out',
        'ani': 'fadeIn 0.3s ease-in',
      },
      keyframes: {
        flyIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'), // Set the default text color to black
            '[class~="lead"]': {
              color: theme('colors.black'), // Also apply to lead text if needed
            },
            // 'a': {
            //   color: theme('colors.blue.500'), // Keep link color if desired
            // },
            // ... other prose customizations you might have ...
          },
          dark: {
            css: {
              color: theme('colors.gray.300'),
              a: { color: theme('colors.blue.400') },
              strong: { color: theme('colors.white') },
              b: { color: theme('colors.white') },
              h1: { color: theme('colors.white') },
              h2: { color: theme('colors.white') },
              h3: { color: theme('colors.white') },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio'),
  ],
}
