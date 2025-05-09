import React from 'react'
import LoginImg from '../assets/LoginImg.png'
const Login = () => {
    
  return (
   <div className='  w-screen min-h-full   flex 
   flex-col items-center justify-start gap-2 
   md:flex-row lg:flex-row
   '>
     <div className='w-full flex justify-center  md:w-1/2 h-3/4'>
     <img src={LoginImg} alt="" className='w-full md:self-left md:w-3/4 ' />
     </div>
     
     
      <div className='w-full md:w-1/2 flex flex-col items-center justify-evenly
        h-full gap-1
      '>
      <h2 className='text-first font-semibold text-3xl pt-12'>welcome back</h2>
      <h1 className='text-4xl uppercase font-semibold'>LogIn</h1>
      <form action="" className='flex flex-col w-full gap-5 h-full
      justify-center items-center
      '>
      <div className='w-3/4 h-[50px]
      border  border-first rounded md:w-1/2'>
      <input type="email " placeholder='email' className='w-full h-full
       md:w-full p-1
      '/>
      </div>
      <div className='w-3/4 h-[50px]
      border  border-first rounded md:w-1/2'>
      <input type="password " placeholder='password' className='w-full h-full
       md:w-full p-1
      '/>
      </div>
     </form>
     <input type="submit" name="submit" id="submit" 
     className='bg-first w-[100px] h-[50px] rounded text-white'
     />
     
      </div>
     
     </div>
   
  )
}

export default Login



