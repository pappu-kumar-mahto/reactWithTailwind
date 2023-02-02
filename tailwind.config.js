/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        loginBg: '#F4F6FB',
        imageBg: '#F4F6FB',
        remeber: '#3C64B1'
      },
      fontFamily:{
        poppins: 'Poppins'
      }
    },
  },
  plugins: [],
}
