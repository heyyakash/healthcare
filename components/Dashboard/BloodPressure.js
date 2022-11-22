import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Bar } from '@nivo/bar'

const BloodPressure = () => {
    const data = [
        {
            "country": "AD",
            "BP": 118,
            "BPColor": "hsl(151, 70%, 50%)",

        },
        {
            "country": "AE",
            "BP": 162,
            "BPColor": "hsl(123, 70%, 50%)",

        },
        {
            "country": "AF",
            "BP": 172,
            "BPColor": "hsl(10, 70%, 50%)",

        },
        {
            "country": "AG",
            "BP": 190,
            "BPColor": "hsl(76, 70%, 50%)",

        },
        {
            "country": "AI",
            "BP": 65,
            "BPColor": "hsl(262, 70%, 70%)",

        }
    ]

    return (
        <div className=' overflow-hidden hidden md:block'>
            <Bar
                data={data}
                keys={[
                    'BP',
                ]}
                colors = {{scheme:"dark2"}}
                height={150}
                width={280}
                indexBy="country"
                margin={{ top: 30, right: 90, bottom: 30, left:20 }}
                padding={0.6}
                groupMode="grouped"
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                borderRadius={"5px"}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}
                enableGridY={false}
                enableLabel={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[]}
                isInteractive={false}
                animate={false}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
            />
        </div>
    )
}

export default BloodPressure