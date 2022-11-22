import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const Navbar = () => {
    return (
        <nav className='fixed w-full left-0 top-0 z-[999]'>
            <div className='flex items-center justify-between'>
                <div className='mx-7'>
                    <h4 className='text-4xl font-bold '>
                        <span className='uppercase'>H</span>care
                    </h4>

                </div>
                <div className='text-white md:block  px-7 py-2 font-medium bg-gray-900 rounded-bl-full   ' >
                    <ul className='flex items-center gap-8  text-lg '>
                        <Link href='#'><li className='hidden md:block'>What we do</li></Link>
                        <Link href='#service'><li className='hidden md:block'>Our offerings</li></Link>
                        <Link href='#'><li className='hidden md:block'>Prising</li></Link>
                        <Link href='#'><li className='hidden md:block'>Blog</li></Link>
                        <a onClick={() => signIn('google', { callbackUrl: "/" })} href="#_">Login</a>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
