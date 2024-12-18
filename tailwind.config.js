/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './sections/**/*.liquid',
    './templates/**/*.liquid',
    './snippets/**/*.liquid',
    './assets/**/*.{css,js}',
    './src/**/*.{css,js}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

