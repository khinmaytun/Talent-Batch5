/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px', 
      xl: '1140px'
    },
    fontFamily: {
      'dancing': 'Dancing Script',
      'lato': 'Lato',
      'poppins': 'Poppins'
    },
    container: {
      center: true,
      'padding': '16px'
    },
    colors: {
      'orange': 'var(--orange)',
      'black': 'var(--black)',
      'white': 'var(--white)',
      'gray': 'var(--gray)',
      'blue': 'var(--blue)',
      'red': 'var(--red)'
    },
    extend: {
      height: {
        'siderbar': 'calc(100vh - 64px)'
      }
    },
  },
  plugins: [],
}

