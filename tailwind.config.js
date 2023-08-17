/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/atomicComponents/**/*.{js,jsx,ts,tsx}",
    ],
  },
  theme: {
    extend: {
      colors: {
        primary1: "#FFFFFF",
        primary2: "#8C8C8C",              
        secondary1: {
          100: "#1B4ED2 50%",
          200: "rgba(181, 65, 162, 0.93) 100%",
        }       
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        'lt': { 'max' : '500px'},
        'sm': { 'max': '600px' },
        'sm1': { 'max': "840px" },
        'md': { 'max': "1100px" },
        'md1': { 'max': "850px"},
        'lg': { 'min': "2300px" },
        'xl': { 'max': "1280px" },
        "2xl": { 'max': "1536px" },
      },
    },
  },
};
