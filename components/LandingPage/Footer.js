import React from 'react';

const Footer = () => {
  return (
    // *-------Heading-------*//
    <div className='pt-4' id = "service">
    <h1 className='flex justify-center font-mono text-2xl'>Our Services</h1>
    <p className='flex justify-center pt-4 text-3xl font-bold'>What is <span className='text-[#C4FA6F] font-bold mx-2'>Hcare</span> services</p>
    <p className='flex justify-center pt-4 align text-center'>Hcare is online medical services for prevent and get fast medical treatment from corona virus,we will help you</p> <p className='flex justify-center align text-center'>at any time with our 24 hours services,this is corona services you can get</p>
 
 
   {/* First Service */}
   <div className='mx-4 pt-12 grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8'>
   <a href="#" className='grid2-item h-40 "border-4  mx-7 overflow-x-auto relative shadow-2xl sm:rounded-lg bg-blue-500  '>
   <h2 className='flex justify-center font-bold pt-5 text-2xl text-[#C4FA6F]'>Physcial Health And Sleep</h2>
   <p className='flex justify-center font-semibold text-white'>We will Tell You About Your</p><p className='flex justify-center font-semibold text-white'>Physical Health</p> <p className='flex justify-center font-semibold text-white'>You Can Also Improve Your Sleep </p>
  </a>
 
   {/* Second Service */}
   <a href="#" className='grid2-item h-40 mx-7  overflow-x-auto relative shadow-2xl sm:rounded-lg bg-blue-500  '>
   <h2 className='flex justify-center font-bold pt-5 text-2xl text-[#C4FA6F]'>You Are Healthy Or Not</h2>
   <p className='flex justify-center font-semibold text-white'>We will provide you all information</p><p className='flex justify-center font-semibold text-white'> about are you eating</p> <p className='flex justify-center font-semibold text-white' >Healthy Food Or Not</p>
   </a>
 
   {/* Third Service */}    
 <a href="#" className='grid2-item h-40 mx-7 overflow-x-auto relative shadow-2xl sm:rounded-lg bg-blue-500'>
   <h2 className='flex justify-center font-bold pt-5 text-2xl text-[#C4FA6F]  '>Menatl Health </h2>
   <p className='flex justify-center font-semibold text-white'>You Can Check Your Menatl Health</p><p className='flex justify-center font-semibold text-white'>By Choosing Your Mood </p><p className='flex justify-center font-semibold text-white'>Take Tips From Our Experts</p>
 </a>
 
 <div className='border-b-full'></div>
 </div>
 </div>
  );
}

export default Footer;