/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        'tm': '470px',
        'vtm': '331px'
      },

      colors: {
        'theme-dark': '#13131F'
      }
    },
  },
  plugins: [],
}
