import React from 'react'

const Circle = () => {
  return (
    <svg className=" w-full h-full">
      <circle
        cx={25}
        cy={25}
        r={50}
        stroke="currentColor"
        strokeWidth={40}
        fill="transparent"
        className="text-gray-700"
      />
      <circle
        cx={25}
        cy={25}
        r={50}
        stroke="currentColor"
        strokeWidth={30}
        fill="transparent"
        className="text-blue-500"
      />
    </svg>
  )
}

export default Circle