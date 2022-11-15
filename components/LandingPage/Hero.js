import React from 'react';
import Image from 'next/image';
// import img from '../Images/img1.png';
const Hero = () => {
  
  return (
  <section className='min-h-screen flex py-10 md:flex-row flex-col items-center'>

              {/* Image section */}

      <div className='mx-7 flex-1 pt-5'>
          <img src="img1.png"  alt="" className='w-100 h-full  object-cover  '/>
       </div>
   
              {/* Text section */}


   <div className='flex-1'>
      <div>
        <h1 className='mx-32 md:text-5xl text-2xl md:leading-normal leading-10 font-bold '>
            <span className='md:text-6xl text-5xl'>
              <span className=''>Providing </span>
               <br />
               <span className='border-b-8 border-[#C4FA6F]'>Inclusive</span>
               <br />
               Healthcare
               <br />
              is <span className='border-b-8 border-blue-900'>easy</span>
             </span>
         </h1>
            <p className='mx-32 pt-3'>get rid of uncultured incompetent service at all<br />
                 levels of medical care.
            </p>
             <br />
             <button className='mx-32 pt-18 font-semibold text-white  bg-gray-900 rounded-bl-xl py-3 px-6 flex items-center gap-2'>Get started</button>
       </div>
     </div>
  </section>
  );
}

export default Hero;
