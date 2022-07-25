/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        proximaBold: ["Proxima-Bold", "sans-serif"],
        proximaRegular: ["Proxima-Regular", "sans-serif"],
        butler: ["Butler", "cursive"],
      },
    },
  },
  plugins: [],
}