import React, { useEffect, useState } from 'react'

const ActivityBars = ({ date, steps }) => {
  const [Height, setHeight] = useState("0")
  useEffect(() => {
    console.log(steps)
    let height = steps * 100 / 10000
    if (height === 0) height = 10
    if (height > 100) height = 100
    height = height.toString()
    setHeight(height)
  }, [steps])
  return (
    <div className='md:w-[30px] h-full flex-col bg-gray-100/60 grow rounded-xl flex p-2 items-center gap-1 justify-center'>
      <div className='grow flex w-full rounded-xl border-[1px] overflow-hidden border-gray-300'>
        <div style={{ height: Height + "%" }} className='mt-auto trans bg-green-500 w-full'></div>
      </div>
      <p className=''>{date}</p>
    </div>
  )
}

export default ActivityBars