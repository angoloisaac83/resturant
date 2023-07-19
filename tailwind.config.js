/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    // colors:{
    //   bg3: {'background': 'url("./assets/images/bg4.png")'}
    // },
    extend: {
      screens:{
        "mobile": {'max': '510px'}
      }
    },
  },
  plugins: [],
}