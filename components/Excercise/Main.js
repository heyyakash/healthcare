import { onSnapshot,doc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import Activity from './Activity'
import CheckExcercise from './CheckExcercise'
import Overview from './Overview'
import Steps from './Steps'
import UpdateSteps from './UpdateSteps'
import {db} from '../../firebase'
import { useState } from 'react'

const Main = ({session}) => {
    const [data,setData] = useState(null)
    useEffect(()=>
        onSnapshot(doc(db,'users',session?.email),(doc)=>setData(doc.data()))
    ,[])
    return (
        <div className="w-full h-full flex flex-col ">
            <div className='grid gap-6 md:grid-cols-4 md:grid-rows-1 grid-rows-3 md:h-[36%] p-2'>
                <Activity data = {data} />
                <Steps data = {data} />
                <Overview data ={data} />
            </div>
            <div className='grid gap-6 md:grid-rows-1 grid-rows-3 md:grid-cols-4 md:h-[33%] p-2'>
                <div className='grid md:grid-cols-3 md:grid-rows-1 grid-rows-2 col-span-2 rounded-xl gap-6'>
                    <UpdateSteps data = {data} />
                    <CheckExcercise />
                </div>
            </div>
        </div>
    )
}

export default Main