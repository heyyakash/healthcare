import React from 'react'

const FoodChartBars = ({ max, min, name }) => {
    const width = min*100/max
    return (
        <div className='flex grow overflow-hidden gap-2'>
            <div className='flex-[.25] text-lg font-productSansBold bg-gray-100 grid place-items-center rounded-lg '>{name}</div>
            <div className='flex-[.75]'>
                <div style={{ width:min===0?"10%" :min*100/max>100?"100%":width.toString() + "%" }} className={`bg-blue-400 flex items-center trans h-full bg-gradient-to-r from-blue-300 via-blue-500 ${width<10 || width>100?"to-red-500":"to-blue-500"} rounded-md`}>
                    <p className='ml-auto mr-2 text-white'>{min}g</p>
                </div>
            </div>
        </div>
    )
}

export default FoodChartBars