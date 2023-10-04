/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      colors: {
        primary : '#94a3b8',
        dark : '#1e293b',
        secondary : '#64748b'
      },
      screens : {
        '2xl' :  '1320px'
      },
    },
  },
  plugins: [],
}

