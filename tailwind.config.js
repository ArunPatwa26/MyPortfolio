/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // ← Add this line
    theme: {
      extend: {},
    },
    plugins: [],
  }
  