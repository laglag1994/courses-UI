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

      colors:{
        brightRed:'#EEB0A7',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightResSupLight:'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(223, 12%, 13%)',
        veryPaleRed: 'hsl(12, 100%, 96%)',
        veryLightGray: 'hsl(0,0%,98%)'
        
      },
    },
  },
  plugins: [],
}
