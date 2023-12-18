/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        manrope : ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

