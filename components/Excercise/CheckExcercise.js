import React, { useState } from 'react'

const CheckExcercise = () => {
    const [fetching, setFetching] = useState(false)
    const [data, setData] = useState(null)
    const [search, setSearch] = useState(null)
    const handleFetch = async () => {
        setFetching(true)
        console.log("clicked")
        try {
            const res = await fetch('https://trackapi.nutritionix.com/v2/natural/exercise', {
                headers:{
                    "x-app-id":"11cb45f6",
                    "x-app-key":"e078585bda55a014914a3e777e5a5c56",
                    "Content-Type":"application/json"
                },
                method: "POST",
                body: JSON.stringify({ query: search })
            })
            const result = await res.json()
            console.log(result.exercises[0])
            setFetching(false)
            setData(result.exercises[0])
        } catch (error) {
            setFetching(false)
            console.log(error)
        }
    }
    return (
        <div className='col-span-2 bg-white rounded-xl flex gap-2 flex-col p-3'>
            <p className='text-lg font-productSansBold'>Check Excercise</p>
            <div className='flex gap-3'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='bg-gray-200/90 rounded-xl grow p-2 h-9' placeholder='Ran 3 kms' />
                <button onClick={() => handleFetch()} disabled={fetching ? true : false} className='bg-blue-500 p-1 px-4 cursor-pointer rounded-xl text-white'>Check</button>
            </div>
            <div className='grow grid gap-4  grid-cols-2'>
                <div className={`bg-gray-100 rounded-xl ${fetching ? 'animate-pulse' : ''} flex flex-col items-center justify-center text-3xl text-black`}>
                    {data ? data["nf_calories"] : 1200}
                    <p className='text-sm'>Calories</p>
                </div>
                <div className={`bg-gray-100 rounded-xl ${fetching ? 'animate-pulse' : ''}`}></div>
            </div>
        </div>
    )
}

export default CheckExcercise