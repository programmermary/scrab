import React, { useState } from 'react'
import { navbarData } from '../Data/Navbar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveMenu from './responsiveMenu';
function Navbar() {
  const [open , setOpen] = useState(false)
  return (
    <>
    <nav>
      <div className="container flex justify-between items-center py-6">
        <div className='flex item-center gap-4'>
        <button className='hover:bg-first text-first font-semibold hover:text-white rounded-md border-2 border-first px-6 py-2 duration-200 hidden md:block'>تسجيل دخول</button>
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

        <div className='hidden md:block'>
          <ul className='flex items-center gap-6 text-gray-600 '>
            {
              navbarData.map((item)=>{
                return <li key={item.id} >
                  <a href={item.link} className='inline-block py-1 hover:text-first font-semibold'>{item.title}</a>
                </li>
              })
            }
          </ul>
        </div>
        {/*---------------logo section----------------------------------------*/}
        <div className='text-2xl flex items-center gap-2 font-bold py-8'> 
          <p className=''>س<span className='text-first text-4xl'>ك</span>رابي</p>
        </div>
        <div className='md:hidden' onClick={()=>setOpen(!open)}>
          <MenuIcon/>
        </div>

      </div>
    </nav>
     <ResponsiveMenu open={open}/>
    </>
  )
}

export default Navbar