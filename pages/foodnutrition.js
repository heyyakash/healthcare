import { doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { onSnapshot } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import FoodBox from '../components/Food/FoodBox'
import FoodChart from '../components/Food/FoodChart'
import WaterBody from '../components/Food/WaterBody'
import { db } from '../firebase'
import Water from '../components/Dashboard/Water'

const Foodnutrition = () => {
    const [data, setData] = useState(null)
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
    const [user, setUser] = useState(null)
    const [water,setWater] = useState(0)
    const [success, setSuccess] = useState(false)
    const [waterSuccess,setWaterSuccess] = useState(false)

    const clear = () => {
        setFat(0)
        setCal(0)
        setProtein(0)
        setFibre(0)
        setCarb(0)
        setSugar(0)
    }

    useEffect(() => {
        const userDoc = JSON.parse(localStorage.getItem('userDoc'))
        setUser(userDoc)
        return onSnapshot(doc(db, "users", userDoc.email), (doc) => {
            setData(doc.data())
            console.log(doc.data())
        })

    }, [])

    useEffect(() => {
        clear()
        if (data && data.food.length !== 0) {
            const arr = [...data?.food]
            const date = new Date().getDate()
            for (let i = arr.length - 1; i >= 0; i--) {
                const SelectedDate = new Date(arr[i].created).getDate()
                if (date === SelectedDate) {
                    let ref = arr[i]
                    setFat(fat + ref.fat)
                    setCal(cal + ref.cal)
                    setCarb(carb + ref.carb)
                    setProtein(protein + ref.protein)
                    setFibre(fibre + ref.fibre)
                    setSugar(sugar + ref.sugar)
                }
            }


        }
    }, [data])

    const handleWater = async () => {
        const waterData = {water,created:(new Date()).toString()}
        try{
            console.log(user.water)
            let waterArray = user?.water
            // console.log(user?.water)
            waterArray.push(waterData)
            const updateRef = doc(db,"users",user?.email)
            await updateDoc(updateRef,{
                water:waterArray
            })
            // alert("Success")
            setWaterSuccess(true)
            setTimeout(() => {
                setWaterSuccess(false)
            }, 3000);
        }
        catch(err){
            console.log(err)
        }
    }

    const handleSubmit = async () => {
        clear()
        const data = {
            fat,
            carb,
            fibre,
            sugar,
            cal,
            protein,
            created: (new Date()).toString()
        }
        console.log(data)
        try {
            let foodArray = user?.food
            foodArray.push(data)
            const updateRef = doc(db, "users", user?.email)
            await updateDoc(updateRef, {
                food: foodArray
            })
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 3000);
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='p-1 flex flex-col h-full gap-3'>
            <div className='flex  md:h-[50%] gap-2 md:flex-row flex-col '>
                <div className='h-full flex md:flex-[.4] flex-col'>
                    <div className="flex py-2 px-3  bg-white flex-col h-full pb-4 rounded-xl">
                        <div className='flex justify-between font-productSansBold'>
                            <p className='text-sm ml-2 '>Today's Nutrition</p>
                            <p className={`text-sm mr-2 ${success ? "text-green-500" : ""} cursor-pointer`} onClick={handleSubmit}>{success ? "Submitted" : "Submit"}</p>
                        </div>
                        <div className='mt-4 grid grid-cols-2 grid-rows-2 grow gap-3'>
                            <FoodBox sugar={sugar} setSugar={setSugar} cal={cal} setCal={setCal} fibre={fibre} setFibre={setFibre} protein={protein} setProtein={setProtein} fat={fat} setFat={setFat} carb={carb} setCarb={setCarb} food={breakfast} setFood={setBreakFast} bg="/morning.jpg" name="Breakfast" />
                            <FoodBox sugar={sugar} setSugar={setSugar} cal={cal} setCal={setCal} fibre={fibre} setFibre={setFibre} protein={protein} setProtein={setProtein} fat={fat} setFat={setFat} carb={carb} setCarb={setCarb} food={lunch} setFood={setLunch} bg="/afternoon.jpg" name="Lunch" />
                            <FoodBox sugar={sugar} setSugar={setSugar} cal={cal} setCal={setCal} fibre={fibre} setFibre={setFibre} protein={protein} setProtein={setProtein} fat={fat} setFat={setFat} carb={carb} setCarb={setCarb} food={snacks} setFood={setSnacks} bg="/evening.jpg" name="Snacks" />
                            <FoodBox sugar={sugar} setSugar={setSugar} cal={cal} setCal={setCal} fibre={fibre} setFibre={setFibre} protein={protein} setProtein={setProtein} fat={fat} setFat={setFat} carb={carb} setCarb={setCarb} food={dinner} setFood={setDinner} bg="/night.jpg" name="Dinner" />
                        </div>
                    </div>
                </div>
                <div className='md:flex-[.6] h-full flex flex-col'>
                    <FoodChart sugar={sugar} carb={carb} cal={cal} fibre={fibre} protein={protein} fat={fat} />
                </div>
            </div>
            <div className='flex  md:h-[50%] gap-2 md:flex-row flex-col '>
                <div className='h-full flex md:flex-[.4] flex-col'>
                    <div className="flex py-2 px-3  bg-white flex-col h-full pb-4 rounded-xl">
                        <div className='flex justify-between font-productSansBold'>
                            <p className='text-sm ml-2 '>Water Consumption</p>
                            <p className={`text-sm mr-2 ${waterSuccess ? "text-green-500" : ""} cursor-pointer`} onClick={handleWater}>{waterSuccess ? "Submitted" : "Submit"}</p>
                        </div>
                        <div className='mt-4 grid grid-cols-2 grow gap-3'>
                            <div className='flex h-full flex-col gap-3'>
                            <FoodBox  type = "water" name= "Water" water = {water} setWater = {setWater} bg = "/water.jpg" />
                            {/* <FoodBox sugar={sugar} setSugar={setSugar} cal={cal} setCal={setCal} fibre={fibre} setFibre={setFibre} protein={protein} setProtein={setProtein} fat={fat} setFat={setFat} carb={carb} setCarb={setCarb} food={lunch} setFood={setLunch} bg="/afternoon.jpg" name="Lunch" /> */}
                            <Water />
                            </div>
                            <div className='relative overflow-hidden flex items-center justify-center bg-blue-500'>
                                <h1 className='text-[3rem] z-[100] font-productSansBold'>{water}</h1>&nbsp;L
                                <WaterBody val = {water} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:flex-[.6] h-full flex flex-col'>
                    
                </div>
            </div>

            
        </div>

    )
}

export default Foodnutrition