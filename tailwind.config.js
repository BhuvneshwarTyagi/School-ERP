/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      colors: {
        aquamarine: '#7FFFD4',
        wheat: '#F5DEB3',
        secondary: "#AEEEED",
        bg_blue: "#E8EFFD",
        text_blue: '#032E66'
      },
    },
  },
  plugins: [],
}