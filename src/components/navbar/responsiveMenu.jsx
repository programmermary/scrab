import React from 'react'
import {motion , AnimatePresence} from 'framer-motion'
const  ResponsiveMenu  = ({open})=> {
  return (
    <AnimatePresence mode='wait'>
        {
            open&&(
                <motion.div className='absolute top-20 left-0 w-full h-screen z-20'
                initial={{opacity:0 , y:-100}}
                animate={{opacity:1 , y:0}}
                transition={{duration:0.5}}
                exit={{opacity:0 , y:-100}}

                >
                  <div className='md:hidden text-2xl font-semibold bg-first text-white py-10 m-6 rounded-3xl'>
                    <ul className='flex flex-col justify-center items-center gap-10'>
                        <li>الصفحة الرئيسية</li>
                        <li>رجالي</li>
                        <li>نسائي</li>
                        <li>اكسسوارات</li>
                    </ul>
                  </div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default ResponsiveMenu