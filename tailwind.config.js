/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#fcd34d', // approximate from image
        'brand-orange': '#fbbf24', // approximate
        'brand-red': '#ef4444',
      },
      fontFamily: {
        'script': ['"Dancing Script"', 'cursive'],
        'sans': ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
