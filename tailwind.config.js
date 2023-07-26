/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        'dark-calc': '#212327', 
        'gray-calc':'#27292E',
        'light-gray-calc':"var(--calc3-color)",
        'pink-calc':"var(--pink-color)",
        'orange-calc':'var(--orange-color)'
      },
    },
  },
  plugins: [],
};
