import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import star from '../../Images/star.png'
import main from '../../Images/main.png'


const Navbar = () => {
  return (<>
                              {/* ----NAVBAR---- */}
<nav className='fixed w-full left-0 top-0 z-[999]'>
    <div className='flex items-center justify-between'>
        <div className='mx-7'>
        <h4 className='text-4xl font-bold '>
            <span className='uppercase'>H</span>care
        </h4>

        </div>
        <div className='text-white md:block hidden px-7 py-2 font-medium bg-gray-900 rounded-bl-full   ' >
            <ul className='flex items-center gap-8  text-lg '>
                <Link href='#'><li>What we do</li></Link>
                <Link href='#'><li>Our offerings</li></Link>
                <Link href='#'><li>Prising</li></Link>
                <Link href='#'><li>Blog</li></Link>
                <button>Login</button>
            </ul>
        </div>
    </div>
</nav>
                           {/* ----HEADING---- */}
     <div className='pt-28'>
        <h1 className='flex justify-center text-4xl font-bold'>Your Mental <Image className='w-10 ' src={star} alt="" /> </h1>
        <p className='flex justify-center text-7xl font-bold'>Health matters</p>
     </div>
                           {/* ---PROFILE--- */}
      <div className='mx-4 pt-12 grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8'>
        <h1 className='grid2-item h-60 pt-28'>
           <p className='pt-7 mx-20 text-2xl font-sanserif'>You <span className='font-bold'>don`t</span> have to<br /><span className='mx-8'>stuggle in</span> <br /><span className='mx-7 font-bold'>silenece!!</span></p>
           <a href='#123'><button className='mx-28 pt-3 font-serif border-b-4 border-indigo-500'>Learn More</button></a>
        </h1>
                            {/* ---IMAGE---  */}
        <p className='grid2-item h-40'>
          <Image src={main} alt="" />
         </p>

                             {/* ---SURVEY--- */}
         <h2 className='mx-16 grid2-item h-40 pt-20'>
         <p className='text-3xl font-serif' >Take A survey<br /> and let us know about your<br /><span className='font-bold'>mental health :-))</span> </p>
         <button className='mx-24 pt-3 font-bold text-2xl text-[rgb(187,159,108)] '><a href='https://www.16personalities.com/free-personality-test' >survey</a></button>
         </h2>
      </div>

      
</>
  );
}

export default Navbar;