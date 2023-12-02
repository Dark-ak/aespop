/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        suissere: ["suisseRegular"],
        suissereme: ["suisseMedium"],
        zapf: ["zapf"]
      },
      backgroundImage:{
        firstpc: "url(/src/assets/firstpc.jpg)",
        secondpc: "url(/src/assets/secondpc.jpg)",
        thirdpc: "url(/src/assets/thirdpc.jpg)",
        firstmobile: "url(/src/assets/firstmobile.jpg)"
        
      }
    },
  },
  plugins: [],
}

