/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    container:{
      center:true,
      padding: {
        DEFAULT: '5px',
        xl: '40px',
      },
    },
    colors: {
      'main': 'rgba(44, 68, 86, 1)',
      'main_02': 'rgba(44, 68, 86, 0.2)',
      'main_07': 'rgba(44, 68, 86, 0.7)',
      'main_08': 'rgba(44, 68, 86, 0.8)',
      'secondary': '#ff8d35',
      'red': 'red',
      'transparent': 'transparent',
    },
       
    extend: {
      screens: {
        'xs': '475px',
      },  
      borderWidth: {
        '1': '1px',
      },
      fontSize:{
        // 'mainSize': '1.1vw',
        // '2mainSize': '2vw',
      },
      width: {
        '18': '72px'
      }
    },
  },
  plugins: [],
}