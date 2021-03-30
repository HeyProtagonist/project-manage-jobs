module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2xs': '9px'
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        orange: {
          light: '#e76f51',
          DEFAULT: '#e85d04',
          dark: ''
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
