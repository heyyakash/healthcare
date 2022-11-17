import { doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import FoodBox from '../components/Food/FoodBox'
import FoodChart from '../components/Food/FoodChart'
import {db} from '../firebase'

const Foodnutrition = () => {
    const [breakfast, setBreakFast] = useState("")
    const [lunch, setLunch] = useState("")
    const [snacks, setSnacks] = useState("")
    const [dinner, setDinner] = useState("")
    const [cal, setCal] = useState(0)
    const [protein, setProtein] = useState(0)
    const [fat, setFat] = useState(0)
    const [carb, setCarb] = useState(0)
    const [fibre, setFibre] = useState(0)
    const [sugar, setSugar] = useState(0)
    const {data:session} = useSession()
    const handleSubmit = async () => {
        
        const data = {
            fat,
            carb,
            fibre,
            sugar,
            cal,
            protein,
            date:new Date()
        }
        console.log(data)  
        try {
            const {food:foodArray} = JSON.parse(localStorage.getItem("userDoc")) 
            foodArray.push(data)
            const updateRef = doc(db,"users",session?.user?.email)
            await updateDoc(updateRef,{
                food:foodArray
            })
            alert("Done")
        } catch (error) {
            alert("Some Error Occured")
        }
    }
    
    return (
        <div className='p-1 flex h-full gap-3'>
            <div className='h-full flex flex-[.4] flex-col'>
                <div className="flex py-2 px-3 bg-white flex-col md:h-[50%] pb-4 rounded-xl">
                    <div className='flex justify-between font-productSansBold'>
                    <p className='text-sm ml-2 '>Today's Nutrition</p>
                    <p className='text-sm mr-2 cursor-pointer' onClick={handleSubmit}>Submit</p>
                    </div>
                    <div className='mt-4 grid grid-cols-2 grid-rows-2 grow gap-3'>
                        <FoodBox sugar={sugar} setSugar={setSugar} cal={cal} setCal={setCal} fibre={fibre} setFibre={setFibre} protein={protein} setProtein={setProtein} fat={fat} setFat={setFat} carb={carb} setCarb={setCarb} food={breakfast} setFood={setBreakFast} bg="/morning.jpg" name="Breakfast" />
                        <FoodBox sugar={sugar} setSugar={setSugar} cal={cal} setCal={setCal} fibre={fibre} setFibre={setFibre} protein={protein} setProtein={setProtein} fat={fat} setFat={setFat} carb={carb} setCarb={setCarb} food={lunch} setFood={setLunch} bg="/afternoon.jpg" name="Lunch" />
                        <FoodBox sugar={sugar} setSugar={setSugar} cal={cal} setCal={setCal} fibre={fibre} setFibre={setFibre} protein={protein} setProtein={setProtein} fat={fat} setFat={setFat} carb={carb} setCarb={setCarb} food={snacks} setFood={setSnacks} bg="/evening.jpg" name="Snacks" />
                        <FoodBox sugar={sugar} setSugar={setSugar} cal={cal} setCal={setCal} fibre={fibre} setFibre={setFibre} protein={protein} setProtein={setProtein} fat={fat} setFat={setFat} carb={carb} setCarb={setCarb} food={dinner} setFood={setDinner} bg="/night.jpg" name="Dinner" />
                    </div>
                </div>
            </div>
            <div className='flex-[.6] h-full flex flex-col'>
                <FoodChart sugar = {sugar} carb = {carb} cal = {cal} fibre = {fibre} protein = {protein} fat = {fat} />
            </div>
        </div>

    )
}

export default Foodnutrition