import React, { useState } from 'react'
import QuestionBox from './QuestionBox'

const Survey = () => {
    const [q1, setQ1] = useState(false)
    const [q2, setQ2] = useState(false)
    const [q3, setQ3] = useState(false)
    const [q4, setQ4] = useState(false)
    return (
        <div className='py-2 w-full  flex gap-5 flex-col md:h-full'>
            <div className="w-full relative bg-white bg-no-repeat overflow-hidden bg-cover bg-opacity-70 rounded-xl  p-4">
            <img src = "/loginBg.jpg" alt = "background" className='absolute w-full h-full opacity-[.19] top-0 left-0 z-0' />
                <h2 className='text-2xl relative z-10 font-productSansBold  '>Are you really sleeping well ?</h2>
                <p className='text-sm mt-2 relative z-10'>Ask yourself following questions to test yourself.</p>
                <div className='mt-4 grid grid-rows-4 relative z-10 gap-2 p-1'>
                    <QuestionBox right={q1} setRight={setQ1} question={"Do I feel reasonably well rested during the day?"} />
                    <QuestionBox right={q2} setRight={setQ2} question={"Do I generally sleep through the night without disturbances?"} />
                    <QuestionBox right={q3} setRight={setQ3} question={"If I wake between my sleep then can I a fall asleep easily?"} />
                    <QuestionBox right={q4} setRight={setQ4} question={"Can I stay awake through the day without falling asleep?"} />
                </div>
                
                {q1 & q2 & q3 & q4 ?
                    (<>
                        <h1 className='text-3xl relative     font-productSansBold pt-2 pl-2 text-green-500'>Yay! you are really sleeping well.</h1>
                    </>)
                    :
                    (<></>)}
            </div>
            <div className='grow p-4 trans bg-white rounded-xl'>
                <iframe className='w-full rounded-xl trans h-full' src="https://www.youtube.com/embed/fQUeDdaVoWo" title="Do You Really Need 8 Hours of Sleep Every Night? | Body Stuff with Dr. Jen Gunter | TED" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Survey