import React from 'react'
import { useRouter } from 'next/router'
import {MdLogout} from 'react-icons/md'
import { useSession } from 'next-auth/react'

const Header = () => {
    const{data:session} = useSession()
    const router = useRouter();
    const headerMap = {
        "/":"Dashboard",
        "/foodnutrition":"Food & Nutrition",
        "/help":"Help",
        "/sleep":"Sleep",
        "/excercise":"Excercise & Yoga"
    }
  return (
    <div className='p-1 flex items-center'>
        <h3 className='text-xl font-productSansBold'>{headerMap[router.pathname]}</h3>
        <img src={session?.user?.image} className = " ml-auto h-6 rounded-full" alt="profile" />
        <MdLogout className = "text-xl cursor-pointer ml-3" />
    </div>
  )
}

export default Header