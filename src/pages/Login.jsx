import React, { useState } from 'react'
import SignUp from '../assets/SignUp.png'
import LoginImg from '../assets/LoginImg.png'
const Login = () => {
    const [isSignUp , setIsSignUp] = useState(false)
  return (
   <div className='  w-screen min-h-full   flex 
   flex-col items-center justify-start gap-2 
   md:flex-row lg:flex-row
   '>
     <div className='w-1/2 h-3/4'>
     <img src={LoginImg} alt="" className='self-left w-3/4 ' />
     </div>
     
     
      <div className='w-1/2 flex flex-col items-center justify-evenly
        h-full gap-1
      '>
        <h2 className='text-first font-semibold text-3xl pt-12'>welcome back</h2>
      <h1 className='text-4xl uppercase font-semibold'>LogIn</h1>
      <form action="" className='flex flex-col w-full gap-5 h-full
      justify-center items-center
      '>
      <input type="email " placeholder='email' className='w-3/4 h-[50px]
      border  border-first rounded md:w-1/2
      '/>
      <input type="password" placeholder='password' className='w-3/4 h-[50px]
      border border-3 border-first rounded md:w-1/2
      '/>
     </form>
     <input type="submit" name="submit" id="submit" 
     className='bg-first w-[100px] h-[50px] rounded text-white'
     />
     <div className='flex flex-col self-start pl-2
      md:self-center md:gap-5
     '>
     <a href="">
     <h5>forget password?</h5>
     </a>
      <h5>Don't have account?
        <a href="">SignUp</a>
      </h5>
     </div>
      </div>
     
     </div>
   
  )
}

export default Login



