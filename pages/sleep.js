import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import Main from '../components/Sleep/Main'

const Sleep = ({data}) => {
  
  return (
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