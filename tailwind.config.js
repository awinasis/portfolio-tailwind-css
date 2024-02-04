/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: '40px',
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        quicksand: ['Quicksand'],
      },
      colors: {
        primary: '#004080',
        secondary: '#64748b',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'wave': 'wave 2s linear infinite',
      },
    },
  },
  plugins: [],
}

