import React, { useEffect, useState } from 'react'
import WeightBox from './WeightBox'

const BMI = ({ data }) => {
    const [bmi, setBmi] = useState(null)
    useEffect(() => {
        const height = parseInt(data?.Height)
        const weight = parseInt(data?.Weight)
        setBmi(Math.trunc(weight * 10000 / (height ** 2)))
    }, [data])
    return (
        data &&
        <div className='p-2 flex flex-col gap-3'>
            <div className="bg-[url('/loginBg.jpg')] bg-no-repeat overflow-hidden bg-cover relative rounded-xl md:p-4 p-2 flex flex-col">
                <div className='absolute z-0 bg-white/80 inset-0'></div>
                    <h2 className='text-xl relative font-bold px-2 mb-3'>Body Mass Index</h2>
                    <div className='grid grid-cols-2 md:gap-4 gap-2 md:p-2'>
                        <WeightBox unit="Cms" data={data?.Height} />
                        <WeightBox unit="Kg" data={data?.Weight} />
                    </div>
                    <div className='mt-auto relative self-center flex flex-col items-center py-2'>
                        <h2 className={`text-2xl font-bold ${bmi < 19 || bmi > 29 ? "text-red-500" : "text-green-500"}`}>{bmi}</h2>
                        <p className={`text-sm font-bold ${bmi < 19 || bmi > 29 ? "text-red-500" : "text-green-500"}`}>
                            {bmi < 19 ? "Underweight" : bmi > 29 ? "Overweight" : "Normal"}
                        </p>
                    </div>
            </div>
        </div>
    )
}

export default BMI