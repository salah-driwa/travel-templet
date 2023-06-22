/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        text: '#0b0b0f',
        background: '#e8e7ee',
        'primary-button': '#393b2b',
        'secondary-button': '#fcfcfd',
        accent: '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
