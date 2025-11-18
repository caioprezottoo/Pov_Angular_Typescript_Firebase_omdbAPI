/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#FFFFFF',
          200: '#A6A6A6',
          300: '#595959',
          400: '#1A1A1A',
        },
        red: '#A20A0A',
        blue: '#06369E',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      background: {
        'gradient-input': 'linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))',
        'gradient-background': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(153, 153, 153, 0.00) 18.75%)',
        'gradient-content-bg': 'rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}