import React from 'react'
import { slider } from '../Data/slider'
export const Slider = () => {
  return (
    <div className='overflow-hidden relative h-full w-full '>
        <div className='flex justify-center items-center'>
        {
            slider.map((s)=>{
                return <img className='h-[90%] w-[90%]' key={s.id} src={s.image} alt={s.text}/>
            })
        }
    </div>
    </div>
  )
}
