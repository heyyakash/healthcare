import React, { useEffect, useState } from 'react'
import { ResponsiveBump, Bump } from '@nivo/bump'

const Water = ({ data }) => {
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
        const arrSize= data?.water?.length-1
        let waterArr = [...data?.water]
        const diff = 3-(arrSize+1)
        for(let k =0;k<=diff-1;k++){
          arr[k]=0
        }
        for(let i=2;i>=diff;i--){
          for(let j=0;j<=arrSize;j++){
            arr[i] = parseInt(waterArr[j].water)
          }
        }
      }
    }
    console.log(arr)
    const newData = {
      "id": "Water",
      "data": [
        {
          "x": 3,
          "y": arr[2]
        }
        ,
        {
          "x": 2,
          "y": arr[1]
  
        },
        {
          "x": 1,
          "y": arr[0]
        },
  
      ]
    }
    setMapData([newData])
  }, [data])

  return (
    data&&
    <ResponsiveBump
      data={mapData}
      colors={{ scheme: 'category10' }}
      lineWidth={4}
      activeLineWidth={4}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      startLabelPadding={15}
      startLabelTextColor="black"
      endLabel={false}
      pointSize={1}
      activePointSize={2}
      inactivePointSize={0}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={12}
      activePointBorderWidth={3}
      pointBorderColor={{ from: 'serie.color' }}
      enableGridX={false}
      enableGridY={false}
      axisTop={null}
      axisBottom={null}
      axisLeft={null}
      motionConfig="wobbly"
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      axisRight={null}
    />

  )
}

export default Water