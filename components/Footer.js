import React from 'react';

const Footer = () => {
  return (
    // *-------Heading-------*//
     <div className='pt-4'>
       <h1 className='flex justify-center font-mono text-2xl'>Our Services</h1>
       <p className='flex justify-center pt-4 text-3xl font-bold'>What is <span className='text-[#C4FA6F] font-bold mx-2'>Hcare</span> services</p>
       <p className='flex justify-center pt-4'>Hcare is online medical services for prevent and get fast medical treatment from corona virus,we will help you</p> <p className='flex justify-center'>at any time with our 24 hours services,this is corona services you can get</p>


      {/* First Service */}
      <div className='mx-4 pt-12 grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8'>
      <a href="#" className='grid2-item h-40 "border-4  overflow-x-auto relative shadow-2xl sm:rounded-lg bg-blue-500  '>
      <h2 className='flex justify-center font-bold pt-5 text-2xl text-[#C4FA6F]'>Online Consultaions</h2>
      <p className='flex justify-center font-semibold text-white'>We wil give you online Consultaion</p><p className='flex justify-center font-semibold text-white'> from our best Doctor with suitable</p> <p className='flex justify-center font-semibold text-white'>symptoms</p>
     </a>

      {/* Second Service */}
      <a href="#" className='grid2-item h-40  overflow-x-auto relative shadow-2xl sm:rounded-lg bg-blue-500  '>
      <h2 className='flex justify-center font-bold pt-5 text-2xl text-[#C4FA6F]'>Get ACTUAL INFORMATION</h2>
      <p className='flex justify-center font-semibold text-white'>We will provide you all information</p><p className='flex justify-center font-semibold text-white'> you need about how to</p> <p className='flex justify-center font-semibold text-white' >stay healthy in this pandemic situation</p>
      </a>
    
      {/* Third Service */}    
    <a href="#" className='grid2-item h-40  overflow-x-auto relative shadow-2xl sm:rounded-lg bg-blue-500'>
      <h2 className='flex justify-center font-bold pt-5 text-2xl text-[#C4FA6F]  '>Self Swab Test</h2>
      <p className='flex justify-center font-semibold text-white'>You can get PCR test kit for <br />Covid-19 to do Self swab test at</p><p className='flex justify-center font-semibold text-white'> Home</p>
    </a>

    <div className='border-b-full'></div>
   </div>
    </div>
  );
}

export default Footer;