import React from 'react'
import { useSession,signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router';

const login = () => {
    const {data:session} = useSession();
    const router = useRouter()
    if(session){
        router.push('/')
        
    }
    return (
        <div className="w-full h-[100vh] bg-blue-100 grid place-items-center bg-[url('/loginBg.jpg')]  bg-no-repeat bg-cover ">
            <div className='h-[100vh] drop-shadow-xl backdrop-blur-md max-w-[1200px] rounded-lg overflow-hidden md:h-[95vh] w-full flex '>
                <div className="bg-white/90 flex-1 flex justify-center flex-col items-center">
                    {/* <p>Login To Continue</p> */}
                    <a
                        onClick={()=>signIn('google',{callbackUrl:"/"})}
                        href="#_"
                        className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                    >
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full" />
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg
                                className="w-5 h-5 text-green-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg
                                className="w-5 h-5 text-green-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                            Login To Continue
                        </span>
                    </a>



                </div>
                <div className="bg-blue-400 flex-1"></div>
            </div>
        </div>
    )
}

export default login

login.getLayout = function PageLayout(page){
    return (
        <>
            {page}
        </>
    )
}