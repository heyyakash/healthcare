import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Main from '../components/Excercise/Main'

const Excercise = ({ data }) => {
  const router = useRouter()
  useEffect(() => {
    if (!data) router.push('/login')
  }, [])
  return (
    data &&
    <Main session={data?.user} />

  )
}

export default Excercise

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: {
      data: session
    }
  }
}