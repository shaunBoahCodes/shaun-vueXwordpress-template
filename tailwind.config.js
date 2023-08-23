/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.php', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark' : '#00121C',
        'dark-blue' : '#093A79',
        'cyan' : '#00FFC9'
      }
    },
  },
  plugins: [],
}

