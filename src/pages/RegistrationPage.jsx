import React, { useState } from 'react'
import SignUp from '../assets/SignUp.png'
import axios from 'axios'
const RegistrationPage =() => {

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const [error , setError] = useState('')
  const [message , setMesaage] = useState('')

  const [registration , setRegistration] = useState(false)


  const handelSubmit = async (e) => {
  e.preventDefault()
  try{
    const reponse = await axios.post('mongodb+srv://maryamihsan601:iNOAaEDBUUxWlLDk@cluster0.8td0dum.mongodb.net/ScrabDataBase/users' ,{
      name,
      email,
      password
    });
    setMesaage(reponse.data.message )
    setName('')
    setEmail('')
    setPassword('')
    setRegistration(true)

    if(registration){
      return(
        <h1>لقد تم تسجيل دخولك الى البرنامج</h1>
      )
    }
  }
  catch(err){
    setError(err.response?.data?.message || 'Error during registration');
  }
  }

  return (
    <div className='w-screen min-h-full   flex 
   flex-col items-center justify-start gap-2 
   md:flex-row lg:flex-row'>
     <div className='w-full md:w-1/2 h-3/4'>
     <img src={SignUp} alt="" className='self-left w-3/4 ' />
     </div>
     <div className='w-full md:w-1/2 flex flex-col items-center justify-evenly
        h-full gap-1'>
   <h2 className='text-first font-semibold text-3xl pt-12'>welcome to our website</h2>
   <h1 className='text-4xl uppercase font-semibold'>SignUp</h1>
      <form action="" onSubmit={handelSubmit} className='flex flex-col w-full gap-5 h-full justify-center items-center'>
      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='w-3/4 h-[50px]
        border  border-first rounded md:w-1/2'>
        <input 
        type="text " 
        placeholder='name' 
        className='w-full h-full md:w-full p-1'
        onChange={(e) => setName(e.target.value)}
        required
        />
        </div>

        <div className='w-3/4 h-[50px]
        border  border-first rounded md:w-1/2'>
        <input 
        type="email " 
        placeholder='email' 
        className='w-full h-full md:w-full p-1'
        onChange={(e)=>setEmail(e.target.value)}
        required
        />
        </div>
        <div className='w-3/4 h-[50px]
        border  border-first rounded md:w-1/2'>
        <input 
        type="password " 
        placeholder='password' 
        className='w-full h-fullmd:w-full p-1'
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        </div>
        <button type="submit" name="submit" id="submit" 
        className='bg-first w-[100px] h-[50px] rounded text-white'>submit</button>
      </form>
    
     </div>
    </div>
  )
}

export default RegistrationPage