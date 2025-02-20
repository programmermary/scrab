import React, { useState } from 'react'
import SignUp from '../assets/SignUp.png'
import LoginImg from '../assets/LoginImg.png'
const Login = () => {
    const [isSignUp , setIsSignUp] = useState(false)
  return (
   <div className=' w-full h-full overflow-hidden'>
     <div>
     <div className={
        `fixed -bottom-10 right-1/2 w-[100%] h-[100%] bg-gradient-to-r
        from-first to-third  duration-700 ease-in-out 
        z-10  top-20 ${isSignUp ? "translate-x-full" : "translate-x-0"}
        `
     }>
     </div>
     </div>
     <div className={`absolute top-1/4 left-1/4 w-28 h-10 border 
      border-white flex justify-center items-center rounded-3xl text-white
      cursor-pointer hover:text-gray-400 hover:border-gray-400 z-10 
      duration-300 ease-linear
       ${isSignUp ? "opacity-0":"opacity-100"}`}
       onClick={()=>{
        setIsSignUp(!isSignUp)
       }}> انشاء حساب </div>

<div className={`absolute top-1/4 right-1/4 w-28 h-10 border 
      border-white flex justify-center items-center rounded-3xl text-white
      cursor-pointer hover:text-gray-400 hover:border-gray-400 z-10 
      duration-300 ease-linear
       ${isSignUp ? "opacity-100":"opacity-0"}`}
       onClick={()=>{
        setIsSignUp(!isSignUp)
       }}>  تسجيل الدخول </div>
       <div className={`${isSignUp?"right-1/2":"right-3/4"} duration-700
       ease-in-out absolute bottom-1/4
       `}>
       
       </div>
       <div className={`${isSignUp?"opacity-100":"opacity-0"} duration-700
       ease-in-out absolute bottom-1/4 w-72 z-20 right-10
       `}>
        <img src={LoginImg} alt="" />
       </div>
       <div className={`${isSignUp?"opacity-0":"opacity-100"} duration-700
       ease-in-out absolute bottom-1/4 w-72 z-20 left-10
       `}>
        <img src={SignUp} alt="" />
       </div>
       <div className="flex">
       <div className={`w-1/2 h-screen flex justify-center items-center
        p-32 duration-300 ease-linear
        ${isSignUp?"opacity-100":"opacity-0"}`}>
            <div className='w-full border p-5 rounded-lg flex flex-col 
            items-center justify-center gap-10
            '>
                <h1 className='text-2xl text-white'>انشاء حساب</h1>
                <form action="" className='space-y-4'>
                  <input type="email" placeholder='Enter Email ..' className='w-full
                  border border-borded rounded h-[40px]
                  ' />
                  <input type="password" name="password" placeholder='Password' 
                  className='w-full border border-borded rounded h-[40px]'
                  />
                  <button type='submit'
                  className='w-full p-2 text-white rounded bg-red-500 hover:bg-white
                  border border-red-500 hover:text-black'
                  >
                    <div className='flex justify-center items-center'>
                        <span>تسجيل الدخول</span>
                    </div>
                  </button>
                </form>
            </div>
        </div>
        <div className={`w-1/2 h-screen flex justify-center items-center
        p-32 duration-300 ease-linear
        ${isSignUp?"opacity-0":"opacity-100"}`}>
            <div className='w-full border p-5 rounded-lg w-full border p-5 rounded-lg flex flex-col 
            items-center justify-center gap-10'>
                <h1 className='text-2xl text-white'>تسجيل دخول</h1>
                <form action="" className='space-y-4'>
                  <input type="email" placeholder='Enter Email ..' className='w-full
                  border border-borded rounded h-[40px]
                  ' />
                  <input type="password" name="password" placeholder='Password' 
                  className='w-full border border-borded rounded h-[40px]'
                  />
                  <button type='submit'
                  className='w-full p-2 text-white rounded bg-red-500 hover:bg-white
                  border border-red-500 hover:text-black'
                  >
                    <div className='flex justify-center items-center'>
                        <span>تسجيل الدخول</span>
                    </div>
                  </button>
                </form>
            </div>
        </div>
       </div>
   </div>
  )
}

export default Login



