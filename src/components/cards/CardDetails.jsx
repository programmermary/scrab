import React from 'react';
import { useParams } from 'react-router';
import { CardsData } from '../Data/cards';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const CardDetails = () => {
    const {id} = useParams();
    const card = CardsData.find(c => c.id === parseInt(id));
    if(!card) return <div><h1>No card found</h1></div>
    
    return(
        <div className='main  flex w-screen h-full  

        items-center
        flex-col md:flex-row '>
          <div className='arrow self-start'>
            <a href="/home/cards" className='flex items-center gap-2'>
                <ArrowBackIcon className='text-first' />
                <h1 className='text-first'>Back</h1>
            </a>
          </div>
          <div className="images flex   h-1/2 p-4
          flex-col md:flex-row gap-4">
            <div className="mainImage md:w-3/4 w-3/4 
            h-full self-center ">
                <img src={card.image} alt='scrab'
                className='md:w-3/4 '/>
            </div>
            <div className="smallImages w-1/4 flex md:flex-col 
             gap-2 ">
            <img src={card.image} alt='scrab'/>
            <img src={card.image} alt='scrab'/>
            <img src={card.image} alt='scrab'/>
            </div>
          </div>
          <div className="line bg-gray-200 md:h-full
          m-4 md:w-[5px] h-[5px] w-full">.</div>
          <div className="deatils w-full  h-1/2 p-4 flex flex-col 
          justify-start items-center gap-4">
            <div className="cardDetails">
                <h1 className='font-semibold text-3xl'>
                    {card.name}</h1>
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
              <div className="flex gap-1 text-yellow-400 text-lg">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i < Math.floor(card.rate) ? "★" : "☆"}
                  </span>
                ))}
              </div>
            </div>
            <div className="buttons w-full h-full flex  gap-2
            ">
                <input type="button" value="Buy"
                className='border-2 border-first w-1/2 rounded h-[20%]' />
                <input type="button" value="Add To baskt"
                className='bg-first w-1/2 rounded text-white h-[20%]' />
            </div>
          </div>
        </div>

    )
}
export default CardDetails;