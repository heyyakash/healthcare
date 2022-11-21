import React, { useState } from 'react'
import {TiTick} from 'react-icons/ti'
import {GrFormClose} from 'react-icons/gr'
  
const QuestionBox = ({question,right,setRight}) => {
    
  return (
    <div className={`px-4 border-[1px]  border-gray-300 trans w-full md:h-[60px] bg-white ${right?"bg-green-500 text-white":""} rounded-xl flex items-center`}>
        <div>{question}</div>
        <div className='ml-auto flex gap-2'>
            <div onClick={()=>setRight(true)} className={`grid items-center rounded-full text-2xl bg-white  cursor-pointer ${right?"text-green-500":""} p-1`}>
                <TiTick />
            </div>
            <div onClick={()=>setRight(false)} className={`grid text-2xl items-center rounded-full bg-white  cursor-pointer ${right?"":""} p-1`}>
                <GrFormClose />
            </div>
        </div>
    </div>
  )
}

export default QuestionBox