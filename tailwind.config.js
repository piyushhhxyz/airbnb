module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'airbnb-red': '#FF5A5F',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}