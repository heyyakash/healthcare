import React from 'react'
import Articles from '../components/mental-health/Articles'
import Main from '../components/mental-health/Main'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Mentalhealth = ({data}) => {
  const router = useRouter()
  React.useEffect(() => {
    if(!data) router.push('/login')
  }, [])
  
  return (data&&
    <Main />
  )
}

export default Mentalhealth
export async function getServerSideProps(context) {
  const session = await getSession(context)
  return ({
    props: {
      data: session,
      session
    }
  })
}
