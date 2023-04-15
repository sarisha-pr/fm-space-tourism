/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1440px'
    },

    colors: {
      'black': '#0B0D17',
      'gray': '#616476',
      'purple': '#D0D6F9',
      'white': '#FFFFFF',
    },

    fontFamily: {
      'bellefair': ['Bellefair', 'serif'],
      'barlow': ['Barlow Condensed', 'sans-serif'],
    },
    
    extend: {},
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          paddingLeft: '15px',
          paddingRight: '15px',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '660px',
            paddingLeft: '0',
            paddingRight: '0',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
        }
      })
    }
  ],
}

