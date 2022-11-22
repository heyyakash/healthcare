import { doc, setDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import {db} from '../../firebase'

const SignUp = () => {
    const router = useRouter()
    const { data: session } = useSession()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    useEffect(()=>{
        const userDoc = localStorage.getItem("userDoc")
        if(userDoc){
            router.push('/')
        }
    },[])
    const onSubmit =async (data)=>{
        data.email = session?.user?.email
        data.name = session?.user?.name
        data.sleep = []
        data.food = []
        data.water = []
        data.steps = []
        try {
            await setDoc(doc(db,"users",session?.user?.email),data)
            localStorage.setItem("userDoc",JSON.stringify(data))
            router.push('/')
        } catch (error) {
            alert("Some Error Occured")
        }
    }
    
    return (
        <div className={`w-full h-[100vh] bg-cover bg-[url('/signUp.jpg')] grid place-items-center`}>
            <div className="w-full md:w-[600px] p-4 h-full overflow-hidden md:h-[500px] bg-white rounded-2xl drop-shadow-2xl">
                <h3 className='text-xl text-orange-400'>Sign Up</h3>
                <form onSubmit={handleSubmit(onSubmit)} className = "flex flex-col gap-2 h-full">
                    <div className='flex w-full gap-2'>
                        <div className="flex w-full flex-col mt-2 gap-1">
                            <label htmlFor="FullName">Full Name</label>
                            <input type="text" value={session?.user?.name} id="FullName" disabled className='signUpInput' />
                        </div>
                        <div className="flex w-full flex-col mt-2 gap-1">
                            <label htmlFor="PhoneNumber">Phone Number</label>
                            <input type="tel" {...register("PhoneNumber")} id="PhoneNumber" className='signUpInput' />
                        </div>
                    </div>
                    <div className='w-full gap-2'>
                        <div className="flex w-full flex-col mt-2 gap-1">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" value={session?.user?.email} id="email" disabled className='signUpInput' />
                        </div>
                    </div>
                    <div className='flex w-full gap-2'>
                        <div className="flex w-full flex-col mt-2 gap-1">
                            <label htmlFor="Gender">Gender</label>
                            <select id="Gender" {...register("Gender")} className='signUpInput p-1'>
                                <option selected>Choose your gender</option>
                                <option value = "M">Male</option>
                                <option value = "F">Female</option>
                                <option value = "M">Other</option>
                            </select>
                        </div>
                        <div className="flex w-full flex-col mt-2 gap-1">
                            <label htmlFor="BloodGroup">Blood Group</label>
                            <select id="BloodGroup" {...register("BloodGroup")} className='signUpInput p-1'>
                                <option selected>Choose your blood group</option>
                                <option value = "A+">A+</option>
                                <option value = "A-">A-</option>
                                <option value = "B+">B+</option>
                                <option value = "B-">B-</option>
                                <option value = "O+">O+</option>
                                <option value = "O-">O-</option>
                                <option value = "AB+">AB+</option>
                                <option value = "AB-">AB-</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex w-full gap-2'>
                        <div className="flex w-full flex-col mt-2 gap-1">
                            <label htmlFor="Age">Age</label>
                            <input type="number" placeholder='Age' id="Age" {...register("Age")} min="15" max="100" className='signUpInput' />
                        </div>
                        <div className="flex w-full flex-col mt-2 gap-1">
                            <label htmlFor="Weight">Weight</label>
                            <input type="number" placeholder='Weight (Kgs)' {...register("Weight")} id="Weight" className='signUpInput' />
                        </div>
                        <div className="flex w-full flex-col mt-2 gap-1">
                            <label htmlFor="Height">Height</label>
                            <input type="number" placeholder='Height (cms)' {...register("Height")} id="Height" className='signUpInput' />
                        </div>
                    </div>
                    <button type="submit" className='p-2 bg-blue-700 text-white mt-auto mb-6 rounded-xl'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp

