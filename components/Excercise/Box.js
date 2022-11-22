import React from 'react'
import Image from 'next/image'

const Box = ({Name,Link,Photo,Color}) => {
    return (
        Name&&
        <a href={Link && Link}
            target="_blank"
            rel="noreferrer"
            className={`${Color && Color} p-2 relative rounded-xl overflow-hidden`}>
            <Image className='absolute z-0' src={Photo} width={500} height={600} />
            <p className='text-white/80 relative font-productSansBold text-lg md:text-2xl'>{Name && Name}</p>
            {/* <p className='text-white/80 font-productSansBold text-lg -mt-2 md:text-xl'>Excercises</p> */}
        </a>
    )
}

export default Box