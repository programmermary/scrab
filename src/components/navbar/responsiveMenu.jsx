import React from 'react'
import {motion , AnimatePresence} from 'framer-motion'
import { navbarData } from '../Data/Navbar'
import { Link } from 'react-router'
const  ResponsiveMenu  = ({open , setOpen})=> {
  return (
    <AnimatePresence mode='wait'>
        {
            open&&(
                <motion.div className='absolute top-20 left-0 w-full h-screen z-20'
                initial={{opacity:0 , y:-100}}
                animate={{opacity:1 , y:0}}
                transition={{duration:0.5}}
                exit={{opacity:0 , y:-100}}
                onClick={()=>setOpen(false)}

                >
                  <div className='md:hidden text-lg font-semibold bg-first text-white py-10 m-6 rounded-3xl'>
                    
                    <ul className='flex flex-col justify-center items-center gap-10'>
                    
                      
                        {
                          navbarData.map((item)=>{
                            return <li key={item.id}>
                              <Link to={item.link}>{item.title}</Link>
                            </li>
                          })
                        }
                        <button className=' bg-third text-black font-semibold hover:text-first rounded-md border-2 border-first px-6 py-2 duration-200  md:block'>تسجيل دخول</button>
                    </ul>
                    
                  </div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default ResponsiveMenu