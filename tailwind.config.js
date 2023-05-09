/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '0px', 'max': '600px' },
      'md': { 'min': '600px', 'max': '1024px' },
      'lg': { 'min': '1024px'},
      'xl': { 'min': '1200px'},
      'sm-md': { 'min': '0px', 'max': '1024px' },
    },
  },
  plugins: [],
}

