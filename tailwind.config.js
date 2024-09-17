/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'podium-sharp': ['"FSP DEMO - PODIUM Sharp 4.11"', 'sans-serif'],
        'sf-pro': ['"SF Pro Display"', 'sans-serif'],
      },
      screens: {
        'xl': '1024px',
        '2xl': '1920px',
      }
    },
  },
  plugins: [],
}