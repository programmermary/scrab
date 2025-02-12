import React from 'react'
import { navbarData } from '../Data/Navbar'
function Navbar() {
  return (
    <>
    <nav>
      <div className="container">
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