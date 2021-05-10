module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        textPrimary: '#63FFDA',
        textSecondary: '#CCD7F6',
        textTertiary: '#8893AF',
        bgPrimary:'#0B1A2F',
        bgSecondary:'#112240'
      },
      fontFamily: {
        title: ['Fira Code', 'monospace'],
        display: ['Heebo', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
