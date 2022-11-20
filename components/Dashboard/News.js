import React, { useEffect, useState } from 'react'
import TipBox from '../MentalHealth/TipBox'

const News = ({ search }) => {
    const [news, setNews] = useState(null)
    useEffect(() => {
        handleNews()
    }, [])

    const handleNews = async () => {
        const newDate = (new Date().getFullYear()).toString() + '-' + (new Date().getMonth() + 1).toString() + '-' + (new Date().getDate()).toString()
        const string = `https://api.thenewsapi.com/v1/news/top?api_token=${process.env.NEXT_PUBLIC_NEWS_API_TOKEN}&locale=in&limit=4&search=${search}&published_on=${"2022-11-20"}`
        const res = await fetch(string,{ method: "GET" })
        const data = await res.json()
        setNews(data?.data)
    }

    return (
        news&&  
        <div className='bg-white p-3 overflow-hidden w-full h-full flex flex-col justify-between rounded-xl'>
            {news.map((title)=><TipBox text = {title?.title} />)}
            {/* <h3 className='text-lg font-bold'>Top Health News</h3> */}
            {/* <div className='grid grid-rows-4 gap-2 overflow-auto w-full h-full'>
                
            </div> */}
        </div>
    )
}

export default News