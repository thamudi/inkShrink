/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    extend: {
      fontFamily: {
        balgin: 'Balgin',
      },
      colors: {
        'inkshrink-green': {
          DEFAULT: '#9ED5B7',
          dark:'#78a28b'
        },
        'inkshrink-black': '#231F20',
      },
    },
  },
  plugins: [],
}
