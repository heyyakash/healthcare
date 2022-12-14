import Head from 'next/head'
import Image from 'next/image'
import { getSession, signOut, useSession } from 'next-auth/react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import Water from '../components/Dashboard/Water'
import BloodPressure from '../components/Dashboard/BloodPressure'
import BMI from '../components/Dashboard/BMI'
import Circle from '../components/Dashboard/Circle'
import { RiVirusFill } from 'react-icons/ri'

import News from '../components/Dashboard/News'
import Steps from '../components/Excercise/Steps'
import SleepBars from '../components/Sleep/SleepBars'

export default function Home({ data }) {
  const router = useRouter()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (!data) {
      router.push('/login')
    }
    else {
      handleSignUp()
    }
  }, [])

  useEffect(() => {
    if (data) {

      onSnapshot(doc(db, 'users', data?.user?.email), (doc) => setUserData(doc.data()))

    }
  }
    , [])



  const handleSignUp = async () => {
    const docRef = doc(db, 'users', data?.user?.email)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const userData = docSnap.data()
      localStorage.setItem("userDoc", JSON.stringify(userData))
    }
    else {
      router.push({
        pathname: "/signup",
      })
    }
  }

  return (
    userData &&
    <div className="grow">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='p-1 h-full md:max-h-[86vh] md:overflow-hidden grow flex flex-col md:flex-row gap-3 '>
        <div className='flex flex-col p-2 pb-0 md:overflow-hidden h-full gap-3 md:w-[50%] '>
          <div className='grid grid-cols-2 px-2  gap-6 h-[50%]  grid-rows-2'>
            <div className='w-full h-full font-[600]'>
              <h2 className='text-3xl text-black capitalize'>Hi, {data?.user?.name?.split(' ')[0].toLowerCase()}.</h2>
              <h2 className='text-3xl text-black'>Check your</h2>
              <h2 className='text-3xl text-black'>Health!</h2>
            </div>
            <Steps data={userData} />
            <div className='relative lilBox h-full'>
              
              <Water data={userData} showValue  ={true} />
            </div>
            <div className='lilBox flex items-center justify-between h-full'>
              
              {/* <BloodPressure /> */}
              <SleepBars showVal={true} timeBars={userData?.sleep} />
            </div>
          </div>
          <div className='w-full md:h-[50%] p-2 pb-0'>
            <News search={"health"} />
          </div>
        </div>

        <div className='w-full h-full flex flex-col gap-3 md:w-[50%]'>
          <BMI data={userData} />
          <div className='grow  p-3'>
            <div className='bg-white h-full w-full rounded-xl p-4'>
              <iframe
                className='w-full h-full rounded-xl'
                src="https://www.youtube.com/embed/hmFQqjMF_f0"
                title="How playing sports benefits your body ... and your brain - Leah Lagos and Jaspal Ricky Singh"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              />
            </div>
          </div>
          <a href="https://selfregistration.cowin.gov.in/" rel="noreferrer" target="_blank" className=' mx-2.5 mt-auto hover:text-green-400 cursor-pointer trans hover:font-productSansBold  bg-white rounded-xl p-4 flex justify-between items-center'>
            <p>Download vaccine certificate</p>
            <RiVirusFill />
          </a>
        </div>
      </main >
    </div >

  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context)
  // console.log(session)
  return ({
    props: {
      data: session,
      session
    }
  })
}