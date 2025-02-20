 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {

    extend: {
      fontFamily:{
        Alexandria:[
          "Alexandria" , "serif"
        ]
      },
      colors:{
        first:"#245d66",
        second:"#da3f3f",
        third:"#e9e9e9"
      },
      container:{
        center:true,
        padding:{
          default:"0.5rem",
          
         
        },
    
      }
    },
  },
  plugins: [],
}