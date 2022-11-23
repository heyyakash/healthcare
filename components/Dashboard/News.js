import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

const News = ({ search }) => {
    const [news, setNews] = useState(null)
    const [slide, setSlide] = useState(0)

    const handleBack = () => {
        if (slide === 0) {
            setSlide(news.length - 1)
        }
        else {
            setSlide(slide - 1)
        }
    }

    const handleNext = () => {
        if (slide === news.length - 1) {
            setSlide(0)
        }
        else {
            setSlide(slide + 1)
        }
    }
    useEffect(() => {
        handleNews()
    }, [])

    const handleNews = async () => {
        const newDate = (new Date().getFullYear()).toString() + '-' + (new Date().getMonth() + 1).toString() + '-' + (new Date().getDate()).toString()
        const string = `https://api.thenewsapi.com/v1/news/top?api_token=${process.env.NEXT_PUBLIC_NEWS_API_TOKEN}&locale=in&limit=4&search=${search}&published_on=${"2022-11-23"}`
        const res = await fetch(string, { method: "GET" })
        const data = await res.json()
        if (res.status !== 200) {
            setNews(null)
        }
        else {
            setNews(data?.data)
        }
    }

    if (news===null) {
        return(
        <div className='h-full bg-white animate-[pulse_1s_ease-in-out_infinite] rounded-xl'>
        </div>)
    }
    return (
        <div className='bg-white p-3 overflow-hidden  h-full flex flex-col justify-between relative rounded-xl'>
            {/* <h3 className='font-productSansBold text-sm ml-3'>Top Headlines</h3> */}
            <AiOutlineLeft onClick={() => handleBack()} className="text-lg absolute top-[50%] cursor-pointer -translate-y-[50%] left-2 z-10" />
            <AiOutlineRight onClick={() => handleNext()} className="text-lg absolute top-[50%] cursor-pointer -translate-y-[50%] right-2 z-10" />
            <Carousel news={news} slide={slide} />
        </div>
    )
}

export default News