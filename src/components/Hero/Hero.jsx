import React, { useRef } from 'react';
import DoctorsCuate from '../../assets/DoctorsCuate.svg';
import CardsPage from '../../pages/CardsPage';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Hero = () => {
  const cardsRef = useRef(null);

  const scrollToCards = () => {
    cardsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section>
      {/* Hero section */}
      <div className="container w-screen h-screen gird grid-cols-1 md:grid-cols-2">
        <div className="main h-full w-full flex flex-col md:flex-row items-center">
          <div className="image md:block w-full">
            <img src={DoctorsCuate} alt="" />
          </div>
          <div className="text w-[90%] flex flex-col justify-center gap-8 p-1 text-right">
            <div className="innerText space-y-6">
              <h1 className='text-3xl md:text-5xl font-bold leading-relaxed text-right font-Alexandria'>
                احصل على <span className=' text-first '>سكرابات</span> طبية عالية الجودة الآن
              </h1>
              <p className='text-right'>
                مرحبًا بكم في موقعنا المتخصص في بيع السكرابات، اللابكوتات، والإكسسوارات الطبية عالية الجودة. استمتع بتجربة تسوق مريحة
                وآمنة واحصل على كل ما تحتاجه لتعزيز أدائك في العمل.
              </p>
            </div>
            <button onClick={scrollToCards} className='text-first border-first border p-3
              rounded-full hover:text-white hover:bg-first 
              w-[20%] md:w-1/4 self-center hover:shadow-xl hover:shadow-first'>
              <ArrowDownwardIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div ref={cardsRef}>
        <CardsPage />
      </div>
    </section>
  );
};

export default Hero;
