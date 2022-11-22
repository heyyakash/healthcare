import React from 'react'
import Image from 'next/image'
import settings from '../Images/settings.png'
import phone from '../Images/contactus.png'
import followus from '../Images/follow1.png'
import vc from '../Images/vc.png'
import food from '../Images/food.png'
import mental from '.././Images/mental.png'
import exercise from '.././Images/exercise.png'


import {FiTwitter} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'

const help = () => {
  return (<>
  <div>
           <h1 className='text-3xl mx-4 pt-1'>Hello. What can we help you with?</h1>
                  <div className="pt-2 border-b "></div>
    <div>
          <p className='pt-4 text-2xl mx-5'>Some things you can do here</p>
          <div className='mx-4 pt-12 grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8'>
          
                              {/*-----help 1----- */}
                 <a href="#" className='grid2-item h-50 "border-4  overflow-x-auto relative shadow-2xl sm:rounded-lg bg-white/95  '>
                     <p className='text-xl font-semibold align text-center pt-2'>MANAGE ACCOUNT</p>
                         <div className='flex'>     
                         <Image className='mx-5 w-[11vh] pt-6 pb-8' src={settings} alt="logo" />
                         <ul className=' font-senserif'>
                          <li className='pt-3 mx-4 font-senserif '>CHANGE YOUR PASSWORD</li>
                          <li className='pt-3 mx-6 font-senserif '>CHANGE YOUR EMAIL ID</li>
                          <li className='pt-3 mx-6 font-senserif '>DELETE YOUR ACCOUNT</li>
                        </ul>
                        </div>
                  </a>
                    
                               {/*-----help 2----- */}

                  <a href="#" className='grid2-item h-50 "border-4  overflow-x-auto relative shadow-2xl sm:rounded-lg bg-white/95  '>
                      <p className='text-xl font-semibold align text-center pt-2'>CONTACT US</p>
                        <div className='flex'>     
                          <Image className='mx-5 w-[11vh] pt-6 pb-8' src={phone} alt="logo" />
                            <ul className=' font-senserif'>
                                <li className='pt-3 mx-4 font-senserif '>MAIL US:-healthcare9048@gmail.com</li>
                                <li className='pt-3 mx-4 font-senserif '>CALL US:-XXXXXXXXXXX</li>
                  
                            </ul>
                         </div>
                  </a>

                                 {/*-----help 3----- */}

                           <a href="#" className='grid2-item h-50 "border-4  overflow-x-auto relative shadow-2xl sm:rounded-lg bg-white/95  '>
                               <p className='text-xl font-semibold align text-center pt-2'>FOLLOW US</p>
                             <div className='flex'>     
                                 <Image className='mx-5 w-[11vh] pt-6 pb-8' src={followus} alt="logo" />
                                   <ul className=' font-senserif'>
                                 <li className=' flex pt-3 mx-6 font-senserif '><FiTwitter size={20} />TWITTER</li>
                                 <li className='flex pt-3 mx-6 font-senserif '><BsInstagram size={20} />INSTAGRAM</li>
                                 <li className='flex pt-3 mx-6 font-senserif '><AiFillFacebook size={20} />FACEBOOK</li>
                                   </ul>
                                </div>
                           </a>

                                   {/*-----help 4----- */}

       <a href="#" className='grid2-item h-50 "border-4  overflow-x-auto relative shadow-2xl sm:rounded-lg bg-white/95  '>
         <p className='text-xl font-semibold align text-center pt-2'>FOOD AND SLEEP</p>
           <div className='flex'>     
             <Image className='mx-5 w-[11vh] pt-6 pb-8' src={food} alt="logo" />
               <ul className=' font-senserif'>
                  <li className=' flex pt-3 mx-6 font-senserif '>NOT ABLE TO AD FOOD?</li>
                  <li className='flex pt-3 mx-6 font-senserif '>NOT ABLE TO ADD SLEEP HOURS?</li>
                  <li className='flex pt-3 mx-6 font-senserif '>FOR ANY OTHER HELP MAIL US OR CONTACT US :-)</li>
                  
               </ul>
            </div>
       </a>

                                     {/*-----help 5----- */}

       <a href="#" className='grid2-item h-50 "border-4  overflow-x-auto relative shadow-2xl sm:rounded-lg bg-white/95  '>
         <p className='text-xl font-semibold align text-center pt-2'>EXERCISE</p>
           <div className='flex'>     
             <Image className='mx-5 w-[11vh] pt-6 pb-8' src={exercise} alt="logo" />
               <ul className=' font-senserif'>
                  <li className=' flex pt-3 mx-6 font-senserif '>NOT ABLE TO ADD STEPS?</li>
                  <li className='flex pt-3 mx-6 font-senserif '>FOR ANY OTHER HELP MAIL US OR CONTACT US :-)</li>
                  
               </ul>
            </div>
       </a>

                                     {/*-----help 6----- */}

       <a href="#" className='grid2-item h-50 "border-4  overflow-x-auto relative shadow-2xl sm:rounded-lg bg-white/95  '>
         <p className='text-xl font-semibold align text-center pt-2'>MENTAL HEALTH</p>
           <div className='flex'>     
             <Image className='mx-5 w-[11vh] pt-6 pb-8' src={mental} alt="logo" />
               <ul className=' font-senserif'>
                  <li className=' flex pt-3 mx-6 font-senserif '>NOT ABLE TO SELECT YOUR MOOD?</li>
                  <li className='flex pt-3 mx-6 font-senserif '>PROBLEM IN TIPS SECTION?</li>
                  <li className='flex pt-3 mx-6 font-senserif '>FOR ANY OTHER HELP MAIL US OR CONTACT US :-)</li>
                  
               </ul>
            </div>
       </a>



</div>
     </div>
      
  </div>
    
    </>
  )
}

export default help