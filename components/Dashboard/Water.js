import React from 'react'
import { Bump } from '@nivo/bump'

const   Water = () => {
    const data =[
        {
          "id": "Water",
          "data": [
            {
              "x": 3,
              "y": 5
            }
            ,
            {
              "x": 2,
              "y": 2

            },
            {
              "x": 1,
              "y": 1
            },
           
          ]
        }
      ]
  return (
    <div className='w-full'>
      <Bump
        width={280}
        height={120}
        data={data}
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
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
    />

        {/* <Line
        width={280}
        colors={{scheme:"category10"}}
        height={120}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={7}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        areaOpacity={1}
        legends={[]}
    /> */}
    </div>
  )
}

export default Water