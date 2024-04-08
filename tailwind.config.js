/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#071952',
        'secondary': '#F5F5F5',
        'third': '#80B3FF',
        'fourth': '#97FEED',
        'five': '#537FE7'
       },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}