/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#202872',
        'secondary': '#8d97eb',
        'accent': '#515fd7',
       },
    },
  },
  plugins: [],
}