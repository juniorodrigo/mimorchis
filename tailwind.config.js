/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'baloo': ['"Baloo Bhaina 2"', 'cursive'],
        'sans': ['Open Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in infinite',
      },
    },
  },
  plugins: [],
};