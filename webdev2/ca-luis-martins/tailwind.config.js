/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'uncial': ['Uncial Antiqua', 'system-ui'],
      'lobster': ['Lobster Two', 'system-ui'],
    },
    extend: {},
  },
  plugins: [],
}
