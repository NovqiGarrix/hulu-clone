const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'primary': '#052029'
    }),
    screens: {
      'xs': '330px',
      ...defaultTheme.screens
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      animation: ['group-hover'],
      margin: ['last', 'first']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
