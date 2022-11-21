import '../styles/globals.css'
import { SessionProvider, useSession } from "next-auth/react"
import { RecoilRoot } from 'recoil'
import Container from '../components/Main/Container'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    )
  }

  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </SessionProvider>
    </RecoilRoot>
  )
}

export default MyApp
