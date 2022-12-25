/** @type {import('tailwindcss').Config} */
module.exports = {
  // look for any html classes in any html file in the root
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },

      letterSpacing: {
        widest: '.3em',
      },
    },
  },
  plugins: [],
};
