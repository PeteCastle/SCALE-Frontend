/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './renderer/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin')
  ],
}