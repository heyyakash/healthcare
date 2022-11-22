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
import Chat from '../LandingPage/Chat'

const Container = ({ children }) => {
    const {data:session} =  useSession()
    const router = useRouter()
    const[data,setData] = useRecoilState(userDataState)



    

    return (
        <>
            <div className='flex flex-col md:flex-row md:h-[100vh] h-auto w-full bg-black'>
                <Navbar />
                <div className='flex-1 bg-black px-4 pb-4 md:p-4'>
                    <Chat />
                    <div className='bg-white/95 rounded-xl flex flex-col gap-2 w-full p-4 h-full md:rounded-[20px]'>
                        <Header />
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Container