import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

import Header from '../components/Main/Header'
import Navbar from '../components/Main/Navbar'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    )
  }

  return (
    <SessionProvider session={session}>
      <div className='flex md:h-[100vh] w-full bg-black'>
        <Navbar />
        <div className='flex-1 bg-black p-4'>
          <div className='bg-white/95 flex flex-col gap-2 w-full p-4 h-full md:rounded-[20px]'>
            <Header />
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </SessionProvider>)
}

export default MyApp
