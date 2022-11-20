import React, { useState,useEffect } from 'react'
import Bars from './Bars'

const SleepBars = ({timeBars}) => {
    const [bars,setBars] = useState([])
    useEffect(() => {
        let arr = []
        let newArr= []
        if(timeBars.length>5){
            arr = timeBars.slice(timeBars.length-6)
        }
        else{
            arr = timeBars
        }
        arr.map((data)=>{
            let hr = data.time.split(':')[0]
            if(hr.charAt(0)==="0"){
                newArr.push(parseInt(hr.charAt(1)))
            }
            else{
                newArr.push(parseInt(hr))
            }
        })
        setBars(newArr)
    }, [timeBars])
    
    console.log(timeBars)
  return (
    <div className='bg-white rounded-xl py-2 flex flex-col justify-center items-center px-[25%]'>
        <div className='grow w-full flex items-end justify-center gap-3 pb-2'>
            {bars.map((x)=>{
                return(
                    <Bars height={x} />
                )
                
            })}
        </div>
        <p className='font-productSansBold mt-auto'>Sleep Data</p>
    </div>
  )
}

export default SleepBars