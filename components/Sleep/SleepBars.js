import React, { useState, useEffect } from 'react'
import Bars from './Bars'

const SleepBars = ({ timeBars, showVal }) => {
    const [bars, setBars] = useState([])
    console.log(bars)
    useEffect(() => {
        let arr = []
        let newArr = []
        if (timeBars.length > 5) {
            arr = timeBars.slice(timeBars.length - 6)
        }
        else {
            arr = timeBars
        }
        arr.map((data) => {
            let hr = data.time.split(':')[0]
            if (hr.charAt(0) === "0") {
                newArr.push(parseInt(hr.charAt(1)))
            }
            else {
                newArr.push(parseInt(hr))
            }
        })
        setBars(newArr)
    }, [timeBars])

    return (<>
        {showVal ? (<div className='flex flex-col items-center  h-full w-[40%] justify-center gap-1'>
            <h1 className='text-2xl'>{bars.slice(-1)[0] || 0}</h1><p className='text-md text-gray-400 font-light'>hr</p>
            <p>sleep</p>
        </div>) : (<></>)}
        <div className='bg-white h-full rounded-xl py-2 flex flex-col justify-center items-center px-[25%]'>
            <div className='grow w-full flex items-end justify-center gap-3 pb-2'>
                {timeBars.length === 0 ? (<h2 className='self-center'>No Data</h2>) : ""}
                {bars.map((x) => {
                    return (
                        <Bars key={x} height={x} />
                    )
                })}
            </div>
            {!showVal?(<p className='font-productSansBold mt-auto'>Sleep Data</p>):(<></>)}
            
        </div>
    </>
    )
}

export default SleepBars