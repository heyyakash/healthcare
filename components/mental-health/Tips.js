import React from 'react'
import TipBox from './TipBox'

const Tips = ({ mood }) => {
    const colorMap = {
        'Happy': "text-green-500",
        'Sad': "text-yellow-500",
        'Loved': "text-pink-500",
        'Angry': "text-red-500",
        'Depressed': "text-blue-500",
        'Anxious': 'text-orange-500'
    }
    const Data = {
        'none': ['Go for a walk', 'Plan rest of your day', 'Get in touch with a friend', 'Sweat it out', 'List all the good things'],
        'Happy': ['Smile More', 'Excercise for 20 minutes', 'Meditate for 20 minutes', 'Help other people', 'Plan a trip'],
        'Loved':['Eat healthy','Spread the love','Greet everyone with a smile','Be kind to yourself','Give people as much as you can'],
        'Sad': ['Listen to beautiful music', 'Dance to your favourite songs', 'Be kind to everyone around', 'Spend some time with animals', 'Meet new people'],
        'Angry': ['Think before you speak', 'Get some excercise', 'Take a timeout', 'Go for a walk', 'Approach a friend'],
        'Depressed':['Set Attainable goals','Reward your efforts','Do something you enjoy','Talk to someone you trust','Visit a therapist'],
        'Anxious':['Take a deep breath','Go for a walk','Do yoga or excercise','Eat healthy','Consider peer support']
    }
    return (
        <div className='px-3 py-1 overflow-auto grow'>
            <div className="bg-white flex gap-3 flex-col p-3 rounded-xl w-full h-full">
                <h2 className='text-2xl font-productSansBold'>Tips to make your day better{mood ? ", if you feel " : ""}{mood && <span className={`${colorMap[mood]}`}>{mood}</span>}</h2>
                {mood !== null ?
                    <div className='grid mt-auto gap-2 grow grid-rows-5'>
                        {Data[mood]?.map((tip) => <TipBox key = {tip} text={tip} />)}
                    </div> :
                    <div className='grid mt-auto gap-2 grow grid-rows-5'>
                        {Data['none']?.map((tip) => <TipBox key = {tip} text={tip} />)}
                    </div>
                    }
            </div>
        </div>
    )
}

export default Tips