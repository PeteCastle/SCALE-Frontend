/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './renderer/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js'
],
  theme: {
    extend: {},
    fontFamily: {
      primary: "Poppins-Regular",
      'bold': "Poppins-Bold",
      'light': "Poppins-Light",
      'medium': "Poppins-Medium",
      'heavy': "Poppins-Heavy",
    },

  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin')
  ],
}