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
      'main': '#2c4456',
      'main--light': 'rgba(44, 68, 86, 0.2)',
      'secondary': '#ff8d35',
      'red': 'red',
      'transparent': 'transparent',
    },
       
    extend: {
      borderWidth: {
        '1': '1px',
       },
    },
  },
  plugins: [],
}