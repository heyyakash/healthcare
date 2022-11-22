import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Main from '../components/Sleep/Main'

const Sleep = ({data}) => {
  const router = useRouter()
  useEffect(()=>{
    if(!data){
      router.push('/login')
    }
  },[])
  return (
    data&&
    <><Main session = {data} /></>
  )
}

export default Sleep

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return ({
    props: {
      data: session,
      session
    }
  })
}