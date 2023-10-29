import React from 'react'
import Nav from './Nav'
import Video from './Video'
import Boxes from './Boxes'
import Reviews from './Reviews'
import Footer from './Footer'
import Mid from './Mid'
function Home() {
  return (
    <div>
    <div className='relative h-screen'>
<div className='relative w-full h-[860px]'><Video/>
    <div className='absolute w-full h-auto opacity-70  bg-black inset-0'><Nav/>
    <h1 className='text-center text-[#ffffff] text-3xl pl-8 pr-8 pt-16 md:pt-32 md:text-5xl'>Iceland Luxury Tours with Local Guides</h1>
    <p className="text-center text-[#ffffff] text-xl pt-16 pl-8 pr-8 md:pt-20 md:pl-[150px] md:pr-[150px] md:text-2xl"><em>Iceland Moments is a family run luxury 
    travel agency. Experience true authentic Iceland with us and our local guides for unique moments in Iceland.</em></p>
    <div className='flex justify-center gap-8 md:gap-12 md:mt-10'>
    <button className='bg-blue-300 rounded-full
     text-white md:text-xl md:h-16 md:w-48 h-12 mb-6 w-36 mt-8 text-lg'>Ready To Plan?</button>
    <button className='bg-white rounded-full w-36 mb-6 mt-8 text-black md:text-xl md:h-16 md:w-48 h-12  text-lg '>View Itineraries</button>
    </div>
    </div>
    </div>  
    </div>
    <Boxes/>
    <Reviews/>
    <Mid/>
    <Footer/>
    </div>
           
  )
}

export default Home