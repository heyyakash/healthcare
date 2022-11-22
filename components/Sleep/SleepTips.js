import React from 'react'

const SleepTips = () => {
    const tips = [
        'Reduce blue light exposure in the evening',
        "Don't consume caffeine late in the day",
        "Reduce irregular or long daytime naps",
        "Try to sleep and wake at consistent times"
    ]
  return (
   <div className="p-3 grow">
     <div className='bg-white h-full w-full rounded-xl p-3 flex flex-col gap-2'>
        <p className='text-lg font-productSansBold'>Sleeping Tips</p>
        <div className='grow grid grid-rows-4 gap-2'>
            {tips.map((tip)=>{
                return(
                    <div key = {tip} className = "p-1 border-[1px] rounded-xl flex items-center px-3">{tip}</div>
                )
            })}
        </div>
     </div>
   </div>
  )
}

export default SleepTips