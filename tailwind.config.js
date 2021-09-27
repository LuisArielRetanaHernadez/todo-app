module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  prefix: 'tw-',
  theme: {
    colors: {
      red: '#C70039',
      blood: '#7B241C',
      white: '#ffff',
      yellow: '#FFC300',
      blue: '#2874A6'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
