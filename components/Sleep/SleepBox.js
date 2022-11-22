import React, { useState } from 'react'
import SleepBars from './SleepBars'

const SleepBox = ({time,setTime,data,submitTime,success}) => {
    const [hrs, setHrs] = useState(0)
    const [min, setMin] = useState(0)
    const [timeBars,setTimeBars] = useState([])

    React.useEffect(() => {
      if(data?.sleep?.length!==0 && data?.sleep!==undefined && data?.sleep!==null){
        setTimeBars(data?.sleep)
        const sleepArr = [...data?.sleep]
        const last = sleepArr[sleepArr.length-1]
        const lastDate = last?.created
        if((new Date().getDate()).toString() + (new Date().getMonth()).toString() === (new Date(lastDate).getDate()).toString() + (new Date(lastDate).getMonth()).toString()){
            setHrs(last.time.split(":")[0])
            setMin(last.time.split(":")[1])
        }
      }
    }, [data])
    
    
    return (
        data&&
        <div className='md:h-[50%] rounded-xl p-2 gap-5 grid grid-rows-2'>
            <div className={`rounded-xl w-full bg-[url('/sleep.jpeg')] overflow-hidden bg-no-repeat bg-contain bg-right-top relative`}>
                <div className={`absolute text-white flex flex-col  p-2 inset-0 ${hrs<7?"bg-red-500/[.81]":"bg-green-500/[.81]"}  z-0 `}>
                    <p className='font-productSansBold text-lg'>Today</p>
                    <h2 className='text-2xl font-bold '>{hrs}Hr {min}Mins</h2>
                    <p className="mt-auto">{hrs<7?"You have been sleeping less":"You are sleeping well"}</p>
                </div>
            </div>

            <div className='grid gap-5 grid-cols-2'>
                <div className='rounded-xl p-2 flex flex-col  h-full bg-white'>
                    <p className='text-sm font-productSansBold'>Enter Sleep data</p>
                    <input onChange={(e)=>setTime(e.target.value)} type="time" className='bg-gray-100 mt-auto rounded-lg w-full h-10 p-2' />
                    <button onClick = {()=>submitTime()} className={`bg-blue-500 p-2 mt-2 text-white rounded-lg trans hover:bg-white hover:text-blue-500 ${success?"bg-green-500 hover:bg-green-500 hover:text-white text-white":""} `}>{success?"Updated":"Update"}</button>
                </div>
                <SleepBars timeBars={timeBars} />
            </div>

        </div>
    )
}

export default SleepBox