import moment from 'moment'
import React, { useEffect, useState } from 'react'
import {IoFootstepsSharp} from 'react-icons/io5'
import { newDate } from '../../Helpers/newDate'

const Steps = ({data}) => {
    const [steps,setSteps] = useState(0)
    useEffect(()=>{
        // console.log(moment('22-11-2022').format('DD/MM/YYYY'))
        if(data?.steps!==undefined && data?.steps!==null && data?.steps.length!==0){
            const size = data?.steps.length-1
            const last = data?.steps[size]
            if(last?.created=== newDate()){
                setSteps(last?.steps)
            }
            else{
                setSteps(0)
            }
        }
    },[data])
    return (
        <div className='w-full flex bg-white rounded-xl h-full'>
            <div className='flex flex-col md:w-[40%] w-full items-center  justify-center '>
                <h2 className='text-2xl font-bold'>{steps}</h2>
                <p className='text-md text-gray-400 font-light'>Steps</p>
            </div>
            <div className='grow hidden  md:flex items-center flex-col justify-center'>
                <IoFootstepsSharp className="text-[4rem] text-green-600" />
                {steps*100/10000} %
            </div>
        </div>
    )
}

export default Steps