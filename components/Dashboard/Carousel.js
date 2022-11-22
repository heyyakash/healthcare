import React, { useState } from 'react'


const Carousel = ({news,slide}) => {


    return (
        news&&
        <a href = {news[slide]?.url} target = "_blank" rel="noreferrer" className='md:p-5 md:px-7 z-0  w-full relative flex flex-col h-full  gap-4'>
            <h3 className='font-bold text-xl'>{news[slide]?.title}</h3>
            <div style = {{backgroundImage:`url(${news[slide]?.image_url})`}} className = {`grow bg-no-repeat  bg-cover rounded-2xl`}>
            </div>
            
        </a>
    )
}

export default Carousel