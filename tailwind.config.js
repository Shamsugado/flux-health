/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFCE1A',
        'secondary' : "#0D0842",
        'blackBG': '#F3F3F3',
        'Favorite': '#FF5841'
      }, 
      fontFamily: {
        'primary' : ["Montserrat", "sans-serif"],
        'secondary' : ["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

//  we added fonts from google fonts, so we need to add them to the tailwind config file,
// and we also added some colors to the tailwind config file, so we can use them in our project.