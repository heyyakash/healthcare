import React from 'react'
import Box from './Box'

const Playlists = () => {
  return (
    <div className='col-span-2'>
      <div className='w-full h-full rounded-xl bg-white p-3 flex flex-col gap-2'>
        <p className='text-lg font-productSansBold'>Excercise playlists</p>
        <div className='grow grid md:grid-cols-4 gap-3 grid-cols-2 grid-rows-2 md:grid-rows-1'>
          <Box Name = "Yoga" Color = "bg-orange-200" Photo = "/yoga.png" Link = "https://www.youtube.com/watch?v=e-Q-HOHVp5U"  />
          <Box Name = "Body Weight" Color = "bg-gray-700" Photo = "/bodywt.png" Link = "https://www.youtube.com/watch?v=XnFXhmyQIjk"  />
          <Box Name = "Before Bed Stretches" Color = "bg-blue-200" Photo = "/stretch.png" Link = "https://www.youtube.com/watch?v=XnFXhmyQIjk"  />
          <Box Name = "Quick Core And Glutes" Color = "bg-yellow-500" Photo = "/core.png" Link = "https://www.youtube.com/watch?v=fHpD2Ko8VOw"  />
        </div>
      </div>
    </div>
  )
}

export default Playlists