import moment from 'moment'
import React from 'react'
import { useEffect, useState } from 'react'
import { newDate } from '../../Helpers/newDate'
import ActivityBars from './ActivityBars'

const Activity = ({data}) => {
    const [days, setDays] = useState([])
    const [steps, setSteps] = useState([])
    useEffect(() => {
        let limit =7
        if(document.body.clientWidth<600) limit = 4
        setDays([])
        setSteps([])
        const arr = []
        const stepArr = []
        arr.push(moment().format('DD/MM/YYYY'))
        for (let i = 1; i <= limit; i++) {
            arr.push(moment().subtract(i, 'days').format('DD/MM/YYYY'))
        }
        arr.reverse()
        setDays(arr)
        // console.log("arr",arr)
        if(data?.steps!==undefined && data?.steps!==null && data?.steps?.length!==0){
            for(let j=0;j<days.length;j++){
                for(let i=0;i<data?.steps?.length;i++){
                    if(data?.steps[i]?.created===days[j]){
                        // stepArr.push(data?.steps[i]?.steps)
                        stepArr[j]= data?.steps[i]?.steps
                        break       
                    }
                    else{
                        stepArr[j]= 0
                    }
                }
                // for(let i = 0;i<data.)
            }
            console.log("stepArr",days.length)
            setSteps(stepArr)
        }
        else{
            for(let i=0;i<limit;i++){
                stepArr.push(0)
            }
            setSteps(stepArr)
        }
        
    }, [data])
    console.log(steps)
    return (
        <div className='bg-white md:col-span-2 h-full rounded-xl flex flex-col py-2 px-4'>
            <p className='font-productSansBold'>Your Activity</p>
            <div className="grow gap-4 p-2 flex justify-evenly items-center">
                {days.map((day,index) => <ActivityBars key = {index} steps = {steps[index]} date={day.split('/')[0]} />)}
            </div>
        </div>
    )
}

export default Activity