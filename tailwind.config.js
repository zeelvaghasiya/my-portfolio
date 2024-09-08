/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'love-light': ['Love Light', 'sans-serif']
      },
      colors: {
      'primary': '#121c2d',
      'secondary': '#f22f46',
      },
      width: {
        '75': '19rem',
      },
    },
  },
  plugins: [],
}

