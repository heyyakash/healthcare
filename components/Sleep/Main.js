import React, { useState } from 'react'
import SleepBox from './SleepBox'
import { useEffect } from 'react'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useSession } from 'next-auth/react'
import Survey from './Survey'
import { useRouter } from 'next/router'
import SleepTips from './SleepTips'

const Main = ({ session }) => {
    const router =useRouter()
    const [time,setTime] = useState("0:00")
    const [data,setData] = useState(null)
    const [success,setSuccess] = useState(false)

    useEffect(() =>
        onSnapshot(doc(db, 'users', session?.user?.email), (doc) => setData(doc?.data()))
        , [])

    const submitTime = async () => {
        let timeArray = []
        if(data?.sleep) timeArray = [...data?.sleep]
        timeArray.push({time:time.toString(),created:(new Date()).toString()})
        const updateRef = doc(db,'users',session?.user?.email)
        try {
            await updateDoc(updateRef,{
                sleep:timeArray
            })
            setSuccess(true)
            setInterval(() => {
                setSuccess(false)
            }, 5000);
        } catch (error) {
            alert(error)
        }
    }
    
    return (
        <div className='grid gap-2 md:grid-cols-2 md:grid-rows-1 grid-rows-2 h-full w-full '>
            <div className=' w-full h-full flex flex-col'>
                <SleepBox data = {data} setTime = {setTime} success = {success} submitTime = {submitTime} time = {time} />
                <SleepTips />
            </div>
            <div className=' w-full h-full'><Survey /></div>

        </div>
    )
}

export default Main