import { doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { onSnapshot } from 'firebase/firestore'
import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import FoodBox from '../components/Food/FoodBox'
import FoodChart from '../components/Food/FoodChart'
import WaterBody from '../components/Food/WaterBody'
import { db } from '../firebase'
import Water from '../components/Dashboard/Water'
import { newDate } from '../Helpers/newDate'
import { set } from 'react-hook-form'

const Foodnutrition = ({ data }) => {
    const [userData, setData] = useState(null)
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
    const [water, setWater] = useState(0)
    const [success, setSuccess] = useState(false)
    const [waterSuccess, setWaterSuccess] = useState(false)

    const clear = () => {
        setFat(0)
        setCal(0)
        setProtein(0)
        setFibre(0)
        setCarb(0)
        setSugar(0)
    }
    const router = useRouter()

    useEffect(() => {
        if (!data) router.push('/login')
    }, [])


    useEffect(() => {
        if (data) {
            onSnapshot(doc(db, "users", data?.user?.email), (doc) => {
                clear()
                setData(doc.data())
            })
        }
    }, [])

    useEffect(() => {
        clear()
        if (userData?.water?.length !== 0 && userData?.water !== null && userData?.water !== undefined) {
            const warr = [...userData?.water]
            const ldate = newDate()
            const dbdate = warr[warr.length - 1].created

            if (ldate === dbdate) {
                setWater(parseInt(warr[warr.length - 1].water))
            }
        }
        if (userData && userData.food.length !== 0) {
            const arr = [...userData?.food]
            const last = arr[arr.length - 1]
            if (last.created === newDate()) {
                setFat(last.fat)
                setProtein(last.protein)
                setCarb(last.carb)
                setSugar(last.sugar)
                setCal(last.cal)
                setFibre(last.fibre)
            }
        }
    }, [userData])

    const handleWater = async () => {
        const waterData = { water, created: newDate() }
        try {
            if (userData?.water !== undefined && userData?.water !== null && userData?.water.length !== 0) {
                let waterArray = [...userData?.water]
                let last = waterArray[waterArray.length-1]
                // console.log("last",last.created)
                if (last.created === newDate()) {
                    console.log("last matched")
                    last.water = parseInt(last.water)+parseInt(water)
                    const updateRef = doc(db, "users", userData?.email)
                    await updateDoc(updateRef, {
                        water: waterArray
                    })
                }
                else {
                    waterArray.push(waterData)
                    const updateRef = doc(db, "users", userData?.email)
                    await updateDoc(updateRef, {
                        water: waterArray
                    })
                }
            }
            else {
                let waterArray = [waterData]
                const updateRef = doc(db, "users", userData?.email)
                await updateDoc(updateRef, {
                    water: waterArray
                })

            }
            setWaterSuccess(true)
            setTimeout(() => {
                setWaterSuccess(false)
            }, 3000);
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = async () => {
        const data = {
            fat,
            carb,
            fibre,
            sugar,
            cal,
            protein,
            created: newDate()
        }
        // console.log(data)
        try {
            let foodArray = [...userData?.food]
            const updateRef = doc(db, "users", userData?.email)
            if (foodArray.length !== 0) {
                let last = foodArray[foodArray.length - 1]
                if (last.created === newDate()) {
                    last.fat = fat
                    last.cal = cal
                    last.protein = protein
                    last.fibre = fibre
                    last.sugar = sugar
                    last.carb = carb
                    await updateDoc(updateRef, {
                        food: foodArray
                    })
                }

                else {
                    console.log("not found")
                    foodArray.push(data)
                    await updateDoc(updateRef, {
                        food: foodArray
                    })
                }

            }
            else {
                console.log("not found")
                foodArray.push(data)
                await updateDoc(updateRef, {
                    food: foodArray
                })
            }
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 3000);
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='p-1 flex flex-col h-full md:gap-5'>
            <div className='flex md:h-[50%] h-[650px] gap-5 md:flex-row flex-col '>
                <div className='h-full flex md:flex-[.4] flex-col'>
                    <div className="flex py-2 px-3  bg-white flex-col h-full pb-4 rounded-xl">
                        <div className='flex justify-between font-productSansBold'>
                            <p className='text-sm ml-2 '>Today&apos;s Nutrition</p>
                            <p className={`text-sm mr-2 ${success ? "text-green-500" : ""} cursor-pointer`} onClick={handleSubmit}>{success ? "Submitted" : "Submit"}</p>
                        </div>
                        <div className='mt-4 grid grid-cols-2 p-2 grid-rows-2 grow md:gap-5 gap-2'>
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
            <div className='flex  md:h-[50%] h-[650px] gap-6 md:flex-row flex-col '>
                <div className='h-full flex md:flex-[.4] flex-col'>
                    <div className="flex py-2 px-3  bg-white flex-col h-full pb-4 rounded-xl">
                        <div className='flex justify-between font-productSansBold'>
                            <p className='text-sm ml-2 '>Water Consumption</p>
                            <p className={`text-sm mr-2 ${waterSuccess ? "text-green-500" : ""} cursor-pointer`} onClick={handleWater}>{waterSuccess ? "Submitted" : "Submit"}</p>
                        </div>
                        <div className='mt-4 grid grid-cols-2 grow gap-5 p-2'>
                            <div className='flex h-full gap-2 flex-col'>
                                <FoodBox type="water" name="Water" water={water} setWater={setWater} bg="/water.jpg" />
                                <Water data={userData} />
                            </div>
                            <div className='relative rounded-xl overflow-hidden flex items-center justify-center bg-blue-500'>
                                <h1 className='text-[3rem] z-[100] font-productSansBold'>{water}</h1>&nbsp;L
                                <WaterBody val={water} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:flex-[.6] h-full flex flex-col'>
                    <div className='rounded-xl bg-white w-full p-3 grid place-items-center h-full'>
                        <iframe
                            className='w-full h-full rounded-xl'
                            src="https://www.youtube.com/embed/videoseries?list=PL3Y-WS55oH3lC-EYi1kW7Wi74Wy3a92Ey"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                        />
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Foodnutrition

export async function getServerSideProps(context) {
    const session = await getSession(context)
    return {
        props: {
            data: session
        }
    }

}