import React, { useEffect, useState } from 'react'
import {GiPlainCircle} from 'react-icons/gi'
import { newDate } from '../../Helpers/newDate'

const Overview = ({data}) => {
    const[pro,setPro] = useState(0)
    const[proHeight,setProHeight] = useState(5)
    const[carb,setCarb] = useState(0)
    const[carbHeight,setCarbHeight] = useState(5)
    const[cal,setCal] = useState(0)
    const[calHeight,setCalHeight] = useState(5)
    useEffect(()=>{
        // console.log(data?.food)
        if(data?.food && data?.food?.length!==0){
            const last = data?.food[data?.food?.length-1]
            console.log(last)
            if(last.created===newDate()){
                console.log('matched')
                setPro(last.protein)
                setCarb(last.carb)
                setCal(last.cal)
            }
            if(pro!==0){
                setProHeight(Math.ceil(pro*100/(parseInt(data?.Weight)*2)))
                if(proHeight>100) setProHeight(90)
            }
            else{
                setProHeight(10)
            }

            if(carb!==0){
                setCarbHeight(Math.ceil(carb*100/325))
                if(carbHeight>100) setCarbHeight(90)
            }
            else{
                setCarbHeight(10)
            }

            if(cal!==0){
                setCalHeight(Math.ceil(cal*100/2000))
                if(calHeight>100) setCalHeight(90)
            }
            else{
                setCalHeight(10)
            }
        }
        
    },[data])
    // console.log([cal,pro,carb])
    //     console.log([calHeight,proHeight,carbHeight])
    return (
        <div className="flex flex-col p-3 bg-white rounded-xl">
            <h2 className='text-lg font-productSansBold'>Overview</h2>
            <div className='grid grid-cols-2 gap-8 px-2 rounded-xl '>
                <div className='flex overflow-hidden justify-evenly gap-2 items-end'>
                    <div style = {{height:`${calHeight.toString()}%`}} className='grow bg-green-500 rounded-xl '></div>
                    <div style = {{height:proHeight.toString()+"%"}} className='grow bg-yellow-500 rounded-xl'></div>
                    <div style = {{height:carbHeight.toString()+"%"}} className='grow bg-pink-500 rounded-xl '></div>
                </div>
                <div className='grid grid-rows-3 gap-2'>

                    <div className='flex flex-col items-start justify-center'>
                        <p className="text-[.825rem] flex gap-1 items-center text-gray-400 "><GiPlainCircle className='text-green-500 text-xs' />Calories</p>
                        <p className='text-xl font-productSansBold'>{cal} Cal</p>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <p className="text-[.825rem] flex gap-1 items-center text-gray-400"><GiPlainCircle className='text-yellow-500 text-xs' />Protien</p>
                        <p className='text-xl font-productSansBold'>{pro}g</p>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <p className="text-[.825rem] text-sm flex gap-1 items-center text-gray-400"><GiPlainCircle className='text-pink-500 text-xs' />Carbs</p>
                        <p className='text-xl font-productSansBold'>{carb}g</p>
                    </div>
          

                </div>
            </div>
        </div>
    )
}

export default Overview