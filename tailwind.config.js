/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#fdfcfb',
          100: '#f7f3ef',
          200: '#ece3d5', // sage/warm secondary
          300: '#d8c5aa',
          400: '#b89c7d',
          500: '#9d7c5a', // olive/earthy
          600: '#846247',
          700: '#6c4e3a',
          800: '#563e30',
          900: '#2d1e18', // deep charcoal/brown
        },
        'gold': {
          400: '#fbbf24',
          500: '#d97706',
        }
      },
      fontFamily: {
        'script': ['"Dancing Script"', 'cursive'],
        'sans': ['"Inter"', 'sans-serif'],
        'serif': ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
