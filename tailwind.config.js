/** @type {import('tailwindcss').Config} */
const { spacing, fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 90deg at 10% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        serif: ['Domine', ...fontFamily.serif],
        sfprodisplayrounded: ['SF-Pro-Display-Rounded', ...fontFamily.sans],
        sfprodisplayregular: ['SF-Pro-Display-Regular', ...fontFamily.sans],
        sfprodisplaybold: ['SF-Pro-Display-Bold', ...fontFamily.sans],
        sfprodisplaylight: ['SF-Pro-Display-Light', ...fontFamily.sans],
        sfprodisplayheavy: ['SF-Pro-Display-Heavy', ...fontFamily.sans],

      },
    },
  },
  plugins: [],
}
