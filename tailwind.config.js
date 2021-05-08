module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        textPrimary: '#63FFDA',
        textSecondary: '#CCD7F6',
        bgPrimary:'#0B1A2F'
      },
      fontFamily: {
        title: ['Fira Code', 'monospace'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
