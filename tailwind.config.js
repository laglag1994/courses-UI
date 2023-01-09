/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen:{
      sm: '480px',
      md:'768px',
      lg:'976px',
      xl: '1440px'
    },
    extend: {

      borderRadius:{

        extraLarge:'16rem'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },


    },
  },
  plugins: [],
}
