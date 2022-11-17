import React from 'react'
import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('../components/SignUp/SignUp'), { ssr: false })

const Signup = () => {

    return (

        <NoSSR />
    )
}

export default Signup

Signup.getLayout = function(page){
    return(
        <>
        {page}
        </>
    )
}