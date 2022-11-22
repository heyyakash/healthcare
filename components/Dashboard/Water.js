import React, { useEffect, useState } from 'react'
import { ResponsiveBump, Bump } from '@nivo/bump'
import { ResponsiveLine } from '@nivo/line'

const Water = ({ data,showValue }) => {
  const [mapData, setMapData] = useState([{
    "id": "Water",
    "data": [
      {
        "x": 3,
        "y": 0
      }
      ,
      {
        "x": 2,
        "y": 0

      },
      {
        "x": 1,
        "y": 0
      },

    ]
  }])
  useEffect(() => {
    let arr = []
    if(data?.water?.length!==0 && data?.water!==undefined && data?.water!==null){
      if(data?.water?.length>3){
        let arrSize= data?.water?.length-1
        let waterArr = [...data?.water.slice(arrSize-2,arrSize+1)]
        waterArr.map((w)=>arr.push(parseInt(w.water)))
      }
      else{
        data?.water?.map((w)=>arr.push(parseInt(w.water)))
        // console.log("here",arr)
        while(arr.length<3){
          arr.unshift(0)
        }
      }
    }

    const newData = {
      "id": "Water",
      "data": [
        {
          "x": 1,
          "y": arr[0]
        }
        ,
        {
          "x": 2,
          "y": arr[1]
  
        },
        {
          "x": 3,
          "y": arr[2]
        },
  
      ]
    }
 
    setMapData([newData])
  }, [data])
 
  return (
    data&&
    <>{showValue ? (
      <div className='flex flex-col items-center  h-full w-[40%] justify-center gap-1'>
                <h1 className='text-2xl'>{mapData[0].data[2].y || 0}</h1><p className='text-md text-gray-400 font-light'>Litre</p>
                <p>Water</p>
              </div>
    ):(<></>)}

    <ResponsiveLine
        data={mapData}
        margin={{ top: 20, right: 20, bottom: 20, left:20 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        colors={{ scheme: 'category10' }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={5}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[]}
    />
  </>
  )
}

export default Water