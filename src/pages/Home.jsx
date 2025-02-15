import React from 'react';
import { Slider } from '../components/slider/Slider';

function Home() {
  return (
    <div className="flex flex-grow h-full items-center justify-center bg-red-600">
      <div className="sliderDev w-full h-full bg-gray-600">
      <Slider />
      </div>
      {/* <Slider /> */}
    </div>
  );
}

export default Home;
