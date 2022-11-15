import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import Navbar from './Navbar'
import Chat from './Chat'

const Main = () => {
  return (
    <>

      <Navbar />
      <Hero />
      <Chat />
      <Footer />
    </>
  )
}

export default Main

Main.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
    </>
  )
}


