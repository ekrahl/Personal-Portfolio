/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'main-bg': '#222831',
      },
    },
  },
  plugins: [],
  prefix: 'tw-'
}
