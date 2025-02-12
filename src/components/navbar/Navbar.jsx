import React from 'react'
import { navbarData } from '../Data/Navbar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
function Navbar() {
  return (
    <>
    <nav>
      <div className="container">
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
          <p><span className='text-4xl text-first'>S</span>craby</p>
          
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar