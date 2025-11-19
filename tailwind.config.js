/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0.04 },
          '100%': { opacity: 1 },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-80px) scale(1.4)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        fadeInDown: 'fadeInDown 0.6s ease-out forwards',
      },

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
      backgroundImage: {
        'gradient-input': 'linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))',
        'gradient-background': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(153, 153, 153, 0.00) 18.75%)',
        'gradient-content-bg': 'rgba(0, 0, 0, 0.15)',
      },

      /* FONTS */
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
