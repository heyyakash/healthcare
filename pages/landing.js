import React from 'react'
import Main from '../components/LandingPage/Main'

const landing = () => {
  return (
    <>
    <Main />
    </>
  )
}

export default landing

landing.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
    </>
  )
}