/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html',"./src/**/*.{jsx,js}"],
  darkMode: 'class', // or 'media' or 'false'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['inter', 'serif'],
      },
    },
  },
  plugins: [],
}

