 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    
    extend: {
      colors:{
        first:"#245d66",
        second:"#da3f3f",
        third:"#e9e9e9"
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem"
        },
    
      }
    },
  },
  plugins: [],
}