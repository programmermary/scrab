import React from 'react';
import { useParams } from 'react-router';
import { CardsData } from '../Data/cards';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const CardDetails = () => {
    const {id} = useParams();
    const card = CardsData.find(c => c.id === parseInt(id));
    if(!card) return <div><h1>No card found</h1></div>
    
    return(
      

        <div className='main  w-full h-full flex flex-col '>
          <div className="arrow h-[5%] w-full ">
          <a href="/home/cards" className='flex items-center'>
                <ArrowBackIcon className='text-first ' />
                <h1 className='text-first'>Back</h1>
          </a>
          </div>
          <div className="images h-[65%]   flex flex-col
                          items-center justify-start gap-2">
            <div className="mainImage h-3/4 w-3/4 ">
            <img src={card.image} alt="scrab" />
            </div>
            <div className="smallImages justify-center h-1/4 w-1/2  flex gap-2">
            <img src={card.image} alt='scrab'/>
             <img src={card.image} alt='scrab'/>
             <img src={card.image} alt='scrab'/>
            </div>
          </div>
          <div className="details flex flex-col  h-[25%]">
            <div className="Text flex flex-col items-center  h-[70%]">
              <h1 className='font-semibold text-3xl'>{card.name}</h1>
              <h2 className='text-lg'>{card.price}</h2>
              <div className="colors flex gap-2 mt-2">
                {Array.isArray(card.colors) &&
                  card.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></span>
                  ))}
              </div>
              <div className="flex gap-1 text-yellow-500 text-lg">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i < Math.floor(card.rate) ? "★" : "☆"}
                  </span>
                ))}
              </div>
            </div>
            <div className="btns  h-[40%] flex gap-2">
            <input type="button" value="Buy"
               className='border-2 border-first w-1/2 rounded h-full' />
             <input type="button" value="Add To baskt"
              className='bg-first w-1/2 rounded text-white h-full' />
            </div>
          </div>
        </div>
    )
}
export default CardDetails;