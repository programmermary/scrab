 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {

    extend: {
      // backgroundImage:{
      //   'hero-pattern':"url('../assest/LoginImg.png')"
      // },

      fontFamily:{
        Alexandria:[
          "Alexandria" , "serif"
        ]
      },
      colors:{
        first:"#245d66",
        second:"#da3f3f",
        third:"#e9e9e9",
        forth:"#3ea2b2"
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