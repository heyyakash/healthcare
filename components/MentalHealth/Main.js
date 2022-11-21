import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import News from '../Dashboard/News'
import MentalHealthBox from './MentalHealthBox'
import Tips from './Tips'

const Main = () => {
    const {data:session} = useSession()
    const router = useRouter()

    const [mood,setMood] = useState(null)
    const handleMood = () => {

    }
  return (
    <div className='flex flex-col md:flex-row w-full gap-3 h-full'>
        <div className="flex flex-col gap-3 md:w-[50%] h-full ">
            <MentalHealthBox mood = {mood} setMood = {setMood} />
            <Tips mood = {mood} />
        </div>
        <div className='flex flex-col gap-3 md:w-[50%] h-full p-2'>
            <div className='h-[50%] w-full bg-white rounded-xl'>
                <News search={"yoga"} />
            </div>
        </div>
    </div>
  )
}

export default Main