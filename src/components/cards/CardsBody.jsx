import React from "react";
import { CardsData } from "../Data/cards";
import { Link } from "react-router-dom";

const CardsBody = () => {
  return (
    <div className="mainBody bg-red-200 flex flex-col justify-center items-center gap-4">
      {CardsData.map((card, index) => (
        <Link 
          to={`/home/cards/${card.id}`} 
          key={index} 
          className="w-full flex justify-center"
        >
          <div className="card self-center flex flex-col justify-center items-center gap-2 bg-white w-[90%] cursor-pointer
          transition-transform transform hover:-translate-y-2 hover:shadow-lg p-2 rounded-lg
           ">

            <div className="img w-full">
              <img src={card.image} alt="scrab" className="w-full" />
            </div>
            <div className="details flex flex-col justify-center items-center gap-2 p-2">
              <h1 className="self-center">{card.name}</h1>
              
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

              <div>
                <span className="text-gray-500">{card.size}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardsBody;
