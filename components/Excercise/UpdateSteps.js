import { doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { newDate } from '../../Helpers/newDate'
import {db} from '../../firebase'

const UpdateSteps = ({ data }) => {
    const [steps, setSteps] = useState(null)
    const submitData = async () => {
        let arr = []
        if (data.steps !== undefined && data.steps !== null &&data.steps.length!==0) {
            arr = [...data.steps]
            let size = arr.length - 1
            const last = arr[size]
            if (last.created === newDate()) {
                console.log(newDate(last.created))
                last.steps = steps
            }
            else {
                arr.push({ steps, created: newDate() })
            }
        }
        else {
            arr = [{ steps, created: newDate() }]
        }
        try {
            await updateDoc(doc(db, "users", data.email), {
                steps: arr
            })
            setSteps(0)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='md:col-span-1 flex flex-col bg-white bg-[url("https://img.freepik.com/premium-vector/young-woman-running-run-cute-young-girl-running-sport-vector-illustration-white-background-modern-style_575709-21.jpg?w=1060")] bg-cover rounded-xl p-3'>
            <h3 className='text-lg font-productSansBold'>Add Steps</h3>
            <div className='mt-auto flex justify-between gap-2'>
                <input value={steps} onChange={(e) => setSteps(e.target.value)} type="number" placeholder='10000' className='h-9 w-[70%] p-2 rounded-xl bg-gray-200/90' />
                <button onClick={()=>submitData()} className='h-9 bg-blue-500/80 text-white grow rounded-xl'>+</button>
            </div>
        </div>
    )
}

export default UpdateSteps