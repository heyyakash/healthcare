import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import MentalHealthBox from './MentalHealthBox'
import Tips from './Tips'

const Main = () => {
    const {data:session} = useSession()
    const router = useRouter()
    useEffect(()=>{
        if(!session){
            router.push('/login')
        }
    },[session])
    const [mood,setMood] = useState(null)
    const handleMood = () => {

    }
  return (
    <div className='flex w-full gap-5 h-full'>
        <div className="flex flex-col gap-3 w-[50%] h-full ">
            <MentalHealthBox mood = {mood} setMood = {setMood} />
            <Tips mood = {mood} />
        </div>
    </div>
  )
}

export default Main