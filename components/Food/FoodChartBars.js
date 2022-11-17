import React from 'react'

const FoodChartBars = ({ max, min, name }) => {
    const width = min*100/max
    return (
        <div className='flex grow overflow-hidden'>
            <div className='flex-[.25] text'>{name}</div>
            <div className='flex-[.75]'>
                <div style={{ width:min===0?"10%" :min*100/max>100?"100%":width.toString() + "%" }} className={`bg-blue-400 flex items-center trans h-full bg-gradient-to-r from-cyan-500 ${width<60 || width>100?"to-red-500":"to-blue-500"} rounded-md`}>
                    <p className='ml-auto mr-2 text-white'>{min}</p>
                </div>
            </div>
        </div>
    )
}

export default FoodChartBars