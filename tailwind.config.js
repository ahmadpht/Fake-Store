/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        '10xl': '1000px',
        '11xl': '300px'
      },
      height: {
        'product':'min-height calc(100vh - 292px)'
      }
    },
  },
  plugins: [],
}