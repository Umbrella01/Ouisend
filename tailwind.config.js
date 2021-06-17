module.exports = {
  purge: {
    enabled: process.env.WEBPACK_DEV_SERVER === 'true' && process.argv.join(' ').indexOf('build') !== -1,
    content: [
      "./src/**/*.{html,ts}",
      "./projects/**/*{html,ts}"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "yellow-dark": "#ffc600",
        "yellow-light": "#ffde00"
      },
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
