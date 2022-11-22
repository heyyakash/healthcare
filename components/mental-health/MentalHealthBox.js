import React from 'react'

const MentalHealthBox = ({ mood, setMood }) => {
    return (
        <div className="grid grid-rows-2 gap-4 p-2 md:h-[50%] w-full  rounded-xl">
            <div className='h-full rounded-xl w-full relative bg-[url("/signUp.jpg")] bg-cover bg-no-repeat overflow-hidden flex flex-col justify-center'>
                <div className='absolute bg-green-200/80 inset-0 z-0'></div> 
                <img src="/mental.png" className='absolute   top-0 right-0 w-[150px] h-[90%]' alt="" />
                <h2 className='md:text-3xl drop-shadow-lg text-lg px-3 font-productSansBold'>How do you feel about</h2>
                <h2 className='md:text-3xl drop-shadow-lg text-lg  px-3 font-productSansBold'>your emotions?</h2>
            </div>

            <div className='flex  flex-col bg-white py-2 px-4 rounded-xl'>
                <p className='px-1 text-sm font-productSansBold'>Today I feel</p>
                <div className='w-full grid md:grid-cols-6 md:grid-rows-1 grid-rows-2 grid-cols-3 gap-4 grow py-1'>
                    
                    <div onClick={() => setMood('Happy')} className={` ${mood === "Happy" ? "bg-green-500" : "bg-orange-100/40"} py-2 md:py-0 hover:bg-green-500 moodbox`}>
                        <p className='text-3xl'>&#128516;</p>
                        <p className='text-sm font-productSansBold'>Happy</p>
                    </div>
                    
                    <div onClick={() => setMood('Loved')} className={` ${mood === "Loved" ? "bg-pink-500" : "bg-orange-100/40"} hover:bg-pink-500 moodbox`}>
                        <p className='text-3xl'>&#128522;</p>
                        <p className='text-sm font-productSansBold'>Loved</p>
                    </div>
                    
                    <div onClick={() => setMood('Sad')} className={` ${mood === "Sad" ? "bg-yellow-500" : "bg-orange-100/40"} hover:bg-yellow-500 moodbox`}>
                        <p className='text-3xl'>&#128532;</p>
                        <p className='text-sm font-productSansBold'>Sad</p>
                    </div>
                    
                    <div onClick={() => setMood('Angry')} className={` ${mood === "Angry" ? "bg-red-500" : "bg-orange-100/40"} hover:bg-red-500 moodbox`}>
                        <p className='text-3xl'>&#128544;</p>
                        <p className='text-sm font-productSansBold'>Angry</p>
                    </div>
                    
                    <div onClick={() => setMood('Depressed')} className={` ${mood === "Depressed" ? "bg-blue-500" : "bg-orange-100/40"} hover:bg-blue-500 moodbox`}>
                        <p className='text-3xl'>&#128542;</p>
                        <p className='text-sm font-productSansBold'>Depressed</p>
                    </div>
                    
                    <div onClick={() => setMood('Anxious')} className={` ${mood === "Anxious" ? "bg-orange-500" : "bg-orange-100/40"} hover:bg-orange-500 moodbox`}>
                        <p className='text-3xl'>&#128552;</p>
                        <p className='text-sm font-productSansBold'>Anxious</p>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default MentalHealthBox