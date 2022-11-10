import React from 'react'
import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('../components/SignUp'), { ssr: false })

const signup = () => {

    return (

        <NoSSR />
    )
}

export default signup