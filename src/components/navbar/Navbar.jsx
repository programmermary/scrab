import React, { useState } from 'react'
import { navbarData } from '../Data/Navbar'
import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveMenu from './responsiveMenu';
import logo from '../../assets/logo.png'
function Navbar() {
  const [open , setOpen] = useState(false)
  return (
    <>
    <nav className='w-full h-full bg-first flex justify-between items-center '>
      <div className="container flex justify-between items-center  ">
        {/*------------------icon section and login button--------------------- */}
        <div className='flex item-center gap-4'>
        <Link to='/login'>
        <button className=' bg-third text-black font-semibold hover:text-first
         rounded-md border-2 border-first px-6 py-2 duration-200 hidden md:block'>تسجيل دخول</button>
        </Link>
        <button className='text-2xl hover:bg-first hover:text-white rounded-full p-2 duration-200'>
            <PersonOutlineIcon/>
          </button>
          <button className='text-2xl hover:bg-first hover:text-white rounded-full p-2 duration-200'>
            <FavoriteBorderIcon/>
          </button>
          <button className='text-2xl hover:bg-first hover:text-white rounded-full p-2 duration-200'>
           <AddShoppingCartIcon/>
          </button>
        </div>
 {/*------------------Menu section --------------------- */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-6 text-gray-600 '>
            {
              navbarData.map((item)=>{
                return <li key={item.id} >
                  <Link to={item.link} className='inline-block py-1 text-white hover:text-third font-semibold'>{item.title}</Link>
                </li>
              })
            }
          </ul>
        </div>
        {/*---------------logo section----------------------------------------*/}
        <div className='text-2xl flex items-center gap-2 font-bold py-8 md:block hidden w-[15%]'> 
          <img src={logo} alt='logo'/>
        </div>
        {/*------------------humbergur section --------------------- */}
        <div className='md:hidden' onClick={()=>setOpen(!open)}>
          <MenuIcon/>
        </div>

      </div>
    </nav>
     <ResponsiveMenu open={open} setOpen={setOpen}/>
    </>
  )
}

export default Navbar