import { getSession } from 'next-auth/react'
import React from 'react'
import Main from '../components/Excercise/Main'

const excercise = ({data}) => {
  return (
      <Main session = {data?.user} />

  )
}

export default excercise

export async function getServerSideProps(context){
  const session = await getSession(context)
  return{
    props:{
      data:session
    }
  }
}