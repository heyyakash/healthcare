import React from 'react'

const WaterBody = ({val}) => {
    const maps = {
        0:"bottom-[2rem]",
        1:"bottom-[5rem]",
        2:"bottom-[7rem]",
        3:"top-[-20rem]",
        4:"top-[-25rem]",
    }
  return (
    <>
    <div  className={`-left-[100%] blueballs ${val>4?"bg-blue-500":maps[val]} rounded-[30%] duration-[4s]`}></div>
    <div  className={`blueballs ${val>4?"bg-blue-500":maps[val]}`}></div>
    </>
  )
}

export default WaterBody