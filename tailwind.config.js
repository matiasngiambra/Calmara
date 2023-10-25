/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      main: {
        '50': '#eff8ff',
        '100': '#def0ff',
        '200': '#b6e2ff',
        '300': '#75cdff',
        '400': '#2cb4ff',
        '500': '#019af6',
        '600': '#007ad3',
        '700': '#0061ab',
        '800': '#00528d',
        '900': '#064574',
        '950': '#042b4d',
    }
    },

  },
  plugins: [],
}