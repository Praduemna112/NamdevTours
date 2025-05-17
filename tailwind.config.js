/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryBold: ['Bold','sans-serif'],
        primaryRegular: ['Regular','sans-serif'],
          RegularItalic: ["RegularItalic", "sans-serif"],
      },
    },
  },
  plugins: [ require('tailwind-scroll-behavior')],
}