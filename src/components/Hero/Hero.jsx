import React from 'react'
import DoctorsCuate from '../../assets/DoctorsCuate.svg'
const Hero = () => {
  return (
    <section>
        <div className="container w-screen h-screen gird grid-cols-1 md:grid-cols-2 ">
     
          <div className="main h-full w-full  flex flex-col md:flex-row items-center">
          <div className="image  md:block w-full  ">
              <img src={DoctorsCuate} alt="" 
              
              />
            </div>
            <div className="text w-[90%] flex flex-col 
            justify-center gap-8 p-1 text-right">
                <div className="innerText space-y-6">
                <h1 className='text-3xl md:text-5xl font-bold leading-relaxed  
                 xl-leading-normal text-right font-Alexandria'
                 >احصل على <span className=' text-first '
                 >سكرابات</span> طبية عالية الجودة الآن</h1>

                <p className='text-right '>
                مرحبًا بكم في موقعنا المتخصص في بيع السكرابات، اللابكوتات، والإكسسوارات الطبية عالية الجودة. استمتع بتجربة تسوق مريحة
                 وآمنة واحصل على كل ما تحتاجه لتعزيز أدائك في العمل.
               </p>
                </div>
               <button className='text-first border-first border p-3
                rounded hover:text-white hover:bg-first self-right
                 w-full md:w-1/4 self-center hover:shadow-xl hover:shadow-first'>
                  تسوق الان</button>
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default Hero