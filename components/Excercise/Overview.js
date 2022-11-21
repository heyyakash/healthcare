import React from 'react'
import {GiPlainCircle} from 'react-icons/gi'

const Overview = () => {
    return (
        <div className="flex flex-col p-3 bg-white rounded-xl">
            <h2 className='text-lg font-productSansBold'>Overview</h2>
            <div className='grid grid-cols-2 gap-8 px-2 rounded-xl '>
                <div className='flex overflow-hidden justify-evenly gap-2 items-end'>
                    <div className='grow bg-green-500 rounded-xl h-[60%]'></div>
                    <div className='grow bg-yellow-500 rounded-xl h-[70%]'></div>
                    <div className='grow bg-pink-500 rounded-xl h-[50%]'></div>
                </div>
                <div className='grid grid-rows-3 gap-2'>

                    <div className='flex flex-col items-start justify-center'>
                        <p className="text-[.825rem] flex gap-1 items-center text-gray-400 "><GiPlainCircle className='text-green-500 text-xs' />Calories</p>
                        <p className='text-xl font-productSansBold'>1200 Cal</p>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <p className="text-[.825rem] flex gap-1 items-center text-gray-400"><GiPlainCircle className='text-yellow-500 text-xs' />Protien</p>
                        <p className='text-xl font-productSansBold'>55g</p>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <p className="text-[.825rem] text-sm flex gap-1 items-center text-gray-400"><GiPlainCircle className='text-pink-500 text-xs' />Carbs</p>
                        <p className='text-xl font-productSansBold'>29g</p>
                    </div>
          

                </div>
            </div>
        </div>
    )
}

export default Overview