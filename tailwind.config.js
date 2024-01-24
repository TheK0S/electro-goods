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
      'primary': '#007bff',
      'info': '#17a2b8',
      'succes': '#28a745',
      'warning': '#ffc107',
      'danger': '#dc3545',
      'dark': '#343a40',
      'red': 'red',
      'yellow': 'yellow',
      
      'modal': 'rgb(240, 240, 240)',
      'modalwrapper': 'rgba(0, 0, 0, 0.7)',
    },

    extend: {
      borderWidth: {
        '1': '1px',
      },
      fontSize:{
        'mainSize': '1.1vw',
        '2mainSize': '2vw',
      }
    },
  },
  plugins: [],
}