import React from 'react'
import { navbarData } from '../Data/Navbar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
function Navbar() {
  return (
    <>
    <nav>
      <div className="container flex flex-row justify-center">
        <div>
         <FavoriteBorderIcon/>
         <AddShoppingCartIcon/>
         <PersonOutlineIcon/>
        </div>

        <div>
          <ul>
            {
              navbarData.map((item)=>{
                return <li key={item.id} >
                  <a href={item.link}>{item.title}</a>
                </li>
              })
            }
          </ul>
        </div>
        {/*---------------logo section----------------------------------------*/}
        <div className='text-2xl flex items-center gap-2 font-bold py-8'> 
          <p className=''>س<span className='text-first text-4xl'>ك</span>رابي</p>
          
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar