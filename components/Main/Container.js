import React from 'react'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import { useSession } from 'next-auth/react'
import { doc, onSnapshot } from 'firebase/firestore'
import {db} from '../../firebase'
import { useRouter } from 'next/router'
import { userDataState } from '../../atom/userData'
import {useRecoilState} from 'recoil'

const Container = ({ children }) => {
    const {data:session} =  useSession()
    const router = useRouter()
    const[data,setData] = useRecoilState(userDataState)


    // useEffect(() => 
    //     onSnapshot(doc(db,"users",session?.user?.email),(doc)=>setData(doc.data()))
    // , [])
    

    return (
        <>
            <div className='flex md:h-[100vh] w-full bg-black'>
                <Navbar />
                <div className='flex-1 bg-black p-4'>
                    <div className='bg-white/95 flex flex-col gap-2 w-full p-4 h-full md:rounded-[20px]'>
                        <Header />
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Container