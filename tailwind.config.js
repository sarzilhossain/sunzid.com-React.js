/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto Slab', 'serif'],
        'serif': ['Roboto Serif', 'serif'],
      },
    },
  },
  plugins: [],
}
