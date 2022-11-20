import React from 'react'
import FoodChartBars from './FoodChartBars'


const FoodChart = ({sugar,protein,carb,fat,cal,fibre}) => {

    return (
        <div className='flex p-4 bg-white flex-col justify-between gap-4 md:h-full pb-4 rounded-xl'>          
                <FoodChartBars name = "Sugar" min = {sugar} max = {30} />
                <FoodChartBars name = "Protien" min = {protein} max = {100} />
                <FoodChartBars name = "Carbohydrates" min = {carb} max = {200} />
                <FoodChartBars name = "Fibres" min = {fibre} max = {50} />
                <FoodChartBars name = "Fat" min = {fat} max = {30} />
                <FoodChartBars name = "Calories" min = {cal} max = {2000} />
            </div>
    
    )
}

export default FoodChart