import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className="container w-screen h-screen gird grid-cols-1 md:grid-cols-2 ">
          {/* <div className=' text-center md:text-right space-y-6 flex '>
          <div className='flex flex-col justify-center py-14 md:py-0'>
               
                
            </div>
           
          </div> */}
          <div className="main h-full w-full  flex ">
          <div className="image bg-black w-1/2">
              this is image div
            </div>
            <div className="text w-1/2 flex flex-col 
            justify-around p-1 text-right">
                <div className="innerText">
                <h1 className='text-3xl font-bold leading-relaxed  
                 xl-leading-normal text-right font-Alexandria'
                 >احصل على <span className=' text-first '
                 >سكرابات</span> طبية عالية الجودة الآن</h1>

                <p className='text-right '>
                مرحبًا بكم في موقعنا المتخصص في بيع السكرابات، اللابكوتات، والإكسسوارات الطبية عالية الجودة. استمتع بتجربة تسوق مريحة
                 وآمنة واحصل على كل ما تحتاجه لتعزيز أدائك في العمل.
               </p>
                </div>
               <button className='text-first border-first border p-3
                rounded hover:text-white hover:bg-first self-right w-1/2 self-center'>
                  تسوق الان</button>
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default Hero