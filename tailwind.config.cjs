/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '360': '360deg'
      }
    },
    fontFamily: {
      'sans': ['Roboto', 'system-ui']
    }
  },
  plugins: [],
}
