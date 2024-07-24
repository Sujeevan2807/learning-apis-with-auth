/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./details.html",
    "./login.html",
    "./assets/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#110B11",
      },
    },
  },
  plugins: [],
};
