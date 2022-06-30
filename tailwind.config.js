const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      ...screens,
    },
    extend: {
      fontFamily: {
        sans: ['Darker Grotesque', 'sans-serif'],
      },
      colors: {
        pink: '#FF90E7',
        yellow: '#FFC902',
        green: '#22A094',
        lightBlue: '#8AE1FC',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
