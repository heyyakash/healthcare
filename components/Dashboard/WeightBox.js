import React, { useEffect, useState } from 'react'
import {GoTriangleDown} from 'react-icons/go'

const WeightBox = ({data,unit}) => {
    const [arr,setArr] = useState([])
    useEffect(()=>{
        let arr = []
        const x = parseInt(data)
        for(let i=x-3;i<=x+3;i++){
            arr.push(i)
            // console.log(i)
        }
        setArr(arr)
        // console.log()
    },[data])
  return (
    <div className=' h-[140px] relative rounded-xl border-2 flex overflow-hidden flex-col items-center justify-center '>
            <GoTriangleDown className='text-2xl absolute -top-2  left-[50%] text-blue-500 translate-x-[-50%]' />
            <div className='relative flex justify-between gap-4'>
                {arr.map((num)=><p key = {num} className={`${num===parseInt(data)?"text-black":"text-black/30"} text-[2.5rem]`}>{num}</p>)}
            </div>
            <div className='absolute bottom-0 mb-2 font-bold'>{unit}</div>
    </div>
  )
}

export default WeightBox