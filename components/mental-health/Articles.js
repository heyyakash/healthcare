import React from 'react';
import Link from 'next/link';

const Articles = ({ name }) => {
    return (<>
        
        <div className='grid md:grid-cols-3 md:grid-rows-2 grid-cols-2 grid-rows-3 grow  p-4 gap-3'>

            
            <a href='https://www.health.harvard.edu/topics/mental-health' target='_blank' rel='noopener  noreferrer' className='relative overflow-hidden rounded-xl'>
                <img className="w-full h-full object-cover" src="https://imgs.search.brave.com/Ei7Dig_GI4Lx-t7-Shzj6DMssKA2WVriSsemJLvEoQA/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9ncmVh/dHBlb3BsZWluc2lk/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDIvbWVu/dGFsLWhlYWx0aC5q/cGc" alt="cover" /></a>

            <a href="https://www.health.harvard.edu/newsletter_article/sleep-and-mental-health" target='_blank' rel='noopener  noreferrer' className='relative bg-black overflow-hidden rounded-xl'>
                <img className="w-full h-full object-cover" src="https://imgs.search.brave.com/jQkvMHrVmK51sV4Rs2ez66jArRZPe5EtJ36QflLLqGo/rs:fit:1200:640:1/g:ce/aHR0cDovL3dvbmRy/bHVzdC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMTIv/U2xlZXAtYW5kLU1l/bnRhbC1IZWFsdGgt/MTI4MHg2NDAuanBn" alt="cover" />
            </a>
            <a target='_blank' rel='noopener  noreferrer' className='relative overflow-hidden rounded-xl' href="https://www.health.harvard.edu/blog/nutritional-psychiatry-your-brain-on-food-201511168626">
                    <img className=" h-full w-full object-cover" src="https://imgs.search.brave.com/DSSWYY4RU-3l7gdvi2CEQLvcl9Q3AGUlYXzPoa2eO64/rs:fit:1200:1003:1/g:ce/aHR0cHM6Ly93d3cu/c3RwYXRyaWNrcy5p/ZS9tZWRpYS8yMTM3/L2Zvb2QtZm9yLW1l/bnRhbC1oZWFsdGgu/anBn" alt="cover" />
                </a>

            <a target='_blank' rel='noopener  noreferrer' className='relative overflow-hidden rounded-xl' href="https://fherehab.com/learning/relationship-red-flag-mental-health">
                    <img className=" h-full w-full object-cover" src="https://imgs.search.brave.com/ACpA6_tX2lfiE4Yqv0sVrsEJ-N6ely0zDIkj82IBilE/rs:fit:1000:667:1/g:ce/aHR0cHM6Ly93aGl0/ZXNhbmRzdHJlYXRt/ZW50LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wMS9U/aGUtUmVsYXRpb25z/aGlwLUJldHdlZW4t/TWVudGFsLUhlYWx0/aC1hbmQtQWRkaWN0/aW9uLmpwZw  " alt="cover" />
                </a>

   
            <a target='_blank' rel='noopener  noreferrer' className='relative overflow-hidd rounded-xl' href="https://health.gov/news/202112/physical-activity-good-mind-and-body">
                    <img className="w-full h-full object-cover" src="https://imgs.search.brave.com/nS-LcTVYtjLNs6GRcRLoHUhhDDXWMY3h531G4tHqPqk/rs:fit:845:468:1/g:ce/aHR0cDovL3d3dy5m/aXRraW5nLmluL0Js/b2dJbWFnZS82Ni5q/cGc " alt="cover" />
                </a>
           

            <a target='_blank' rel='noopener  noreferrer' className='relative overflow-hidden rounded-xl' href="https://www.bbrfoundation.org/blog/homelessness-and-mental-illness-challenge-our-society">
                    <img className=" h-full w-full object-cover" src="https://imgs.search.brave.com/HQoBvOC3ZAvef69jkqXduZJAmBeudu8i49RjX_BCCmk/rs:fit:681:454:1/g:ce/aHR0cDovL3d3dy5r/dmNjZG9jcy5jb20v/S1ZDQy8yMDE2LU1I/VC9NSFQxMjUvc3Bl/Y2lhbC9ob21lbGVz/cy9Ib21lbGVzcy1T/aWduLmpwZw " alt="cover" />
                </a>
          
          {/* 
            <div className="max-w-sm scale-90 hover:scale-[1] transitionall h-[320px] font-prosans relative overflow-hidden w-[300px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="https://www.health.harvard.edu/heart-health/the-head-heart-connection-mental-health-and-heart-disease"> 
                        <img className="pt-4 0 h-[300px] w-full object-cover" src="https://imgs.search.brave.com/teYA2khjYFOKUMjRuLc-qA0Z1A13TKntvBuMWOWKv4k/rs:fit:1120:630:1/g:ce/aHR0cHM6Ly95c20t/cmVzLmNsb3VkaW5h/cnkuY29tL2ltYWdl/L3VwbG9hZC9jX2xp/bWl0LGZfYXV0byxo/XzYzMCxxX2F1dG8s/d18xMjAwL3YxL3lt/cy9wcm9kLzBiZjQ0/NTA0LTdlZGQtNGZk/OC1hMmFlLWFhODJj/NWQ1MDNmNQ " alt="cover" />
                </a>
                <div className="p-5">
                    <a href="#" className='flex mb-2 items-center justify-between'>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                        
                    </a>
                        <Link href="https://www.health.harvard.edu/heart-health/the-head-heart-connection-mental-health-and-heart-disease" >
                            <div className='absolute transitionall cursor-pointer bg-white self-center -bottom-3 left-[34%] p-[.4545rem] px-6 dark-shadows rounded-xl'>
                            View
                            </div>
                        </Link>
                           <p className='mx-8 font-bold'>Mental health and heart disease</p>
                    
                </div>
            </div> */}

            {/* ---Card 8---  */}

            {/* <div className="max-w-sm scale-90 hover:scale-[1] transitionall h-[320px] font-prosans relative overflow-hidden w-[300px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="https://www.helpguide.org/articles/addictions/substance-abuse-and-mental-health.htm"> 
                        <img className="pt-4 0 h-[300px] w-full object-cover" src="https://imgs.search.brave.com/2RqXplUIJBFrTGuM7ASU_Fy_3GswsaTCkctYJd0h_Aw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/b2dsZXRob3JwZWlu/Yy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMDQvYW54/aWV0eS5qcGc " alt="cover" />
                </a>
                <div className="p-5">
                    <a href="#" className='flex mb-2 items-center justify-between'>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                        
                    </a>
                        <Link href="https://www.helpguide.org/articles/addictions/substance-abuse-and-mental-health.htm" >
                            <div className='absolute transitionall cursor-pointer bg-white self-center -bottom-3 left-[34%] p-[.4545rem] px-6 dark-shadows rounded-xl'>
                            View
                            </div>
                        </Link>
                           <p className='mx-8 font-bold'>Relationships and Mental Health</p>
                    
                </div>
            </div> */}




        </div>
        {/* <div className='pt-12 align text-center'>
            <a href='https://www.health.harvard.edu/blog'><button className='rounded-full font-bold bg-blue-600 w-20'>View More</button></a>
            <div className='border-b-full'></div>

        </div>
        <div className='border-b-full'></div> */}
    </>


    );
}

export default Articles;
