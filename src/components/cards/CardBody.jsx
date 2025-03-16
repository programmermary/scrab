import React from 'react'

const CardBody = () => {
  return (
    <div className='mainDiv bg-gray-500 w-full h-screen flex flex-col 
    '>
     <div className="textDiv bg-green-500 h-1/4 text-center flex 
     items-center justify-center
     ">
     <h1>this is text div</h1>
     </div>
     <div className="content bg-red-500 flex w-full h-3/4 ">
      <div className="filters bg-white w-1/4 lg:w-[15%] flex flex-col p-2">
       <div className="sizeFilter flex flex-col">
        <h1 className='font-semibold text-lg uppercase text-first'>size</h1>
        <div className="onefilter">
        <input type="checkbox" name="one" id="one" />
        <label htmlFor="one">Large</label>
        </div>
        <div className="onefilter">
        <input type="checkbox" name="two" id="two" />
        <label htmlFor="two">xL</label>
        </div>
        <div className="onefilter">
        <input type="checkbox" name="two" id="two" />
        <label htmlFor="two">xxL</label>
        </div>
        <div className="onefilter">
        <input type="checkbox" name="two" id="two" />
        <label htmlFor="two">3xL</label>
        </div>
        <div className="line h-[2px] bg-first w-3/4 self-center">.</div>
       </div>
       <div className="colorFilter flex flex-col">
        <h1 className='font-semibold text-first text-lg uppercase'>color</h1>
        <div className="color">
            <input type="checkbox" name="red" id="red" />
            <label htmlFor="red">red</label>
        </div>
        <div className="color">
            <input type="checkbox" name="green" id="green" />
            <label htmlFor="green">green</label>
        </div>
        <div className="color">
            <input type="checkbox" name="black" id="black" />
            <label htmlFor="black">black</label>
        </div>
        <div className="line h-[2px] bg-first w-3/4 self-center">.</div>
       </div>
       <div className="gender flex flex-col">
        <div>
        <input type="checkbox" name="female" id="female"/><label htmlFor="female">female</label>
        </div>
        <div>
        <input type="checkbox" name="male" id="make"/><label htmlFor="male">male</label>
        </div>
       </div>
       <button className='border border-2 border-first rounded w-3/4 self-center'>apply filters</button>
      </div>
      <div className="cards bg-blue-500 w-3/4">
        this is cards div
      </div>
     </div>
    </div>
  )
}

export default CardBody