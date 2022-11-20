import React, { useEffect,useState } from 'react'

const Bars = ({height}) => {
    const [pHeight,setPheight] = useState(0)
    useEffect(()=>{
        if(height<10){
            setPheight(height*10)
        }
        else{
            setPheight(100)
        }
    },[height])
  return (
    <div style={{height:pHeight.toString()+"%",backgroundColor:pHeight<70?"tomato":"lightseagreen"}} className='trans cursor-pointer group relative w-[10px] drop-shadow-2xl rounded-xl bg-green-500'>
      <div className='bg-white rounded-xl p-1 hidden group-hover:block text-sm absolute -top-5 -left-2'>{height}hr</div>
    </div>
  )
}

export default Bars