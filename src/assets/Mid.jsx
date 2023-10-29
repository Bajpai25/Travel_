import React from 'react'
import images from './img_data'
import {BsClockHistory} from "react-icons/bs"
function Mid() {
  return (
    <div>
    <div className='relative'>
      <img className='relative  bg-cover h-[600px] w-full' src="https://th.bing.com/th/id/OIG.KMLkKBgPLvSwUZ9KPaGG?pid=ImgGn"></img>  
    <div className='absolute inset-0 text-center pt-48  text-3xl text-white p-8'>
        <h1>Life is about moments, don’t wait for them, create them.</h1>
        <p className='font-light pt-8'><em>We love to create beautiful experiences to impress our clients and 
        go beyond expectations.</em></p>
    </div>
    </div>
    <div className='bg-black text-blue-500 flex items-center flex-col p-8'>
        <h1 className='text-4xl font-semibold pt-12 pb-6 p-4'>Iceland Moments Trip Planner</h1>
        <p className='text-xl p-8 font-serif'><em>Life is about moments, don´t wait for them, create them.</em></p>            
        <p className='text-lg p-8 font-serif'>Please fill out these next few steps to indicate 
        <br/>your preferences on your Iceland Moments journey</p>
        <p className='text-lg p-8 font-serif'>PLEASE NOTE: These steps are only meant to be guiding</p>
        <p className='text-lg p-8  font-serif'>Once finished, a travel specialist from Iceland Moments will be in touch so 
        <br/>you can collaborate on crafting your ideal travel iternerary.</p>
        <p className='flex flex-row justify-center gap-4 m-6'>
        <button className='bg-white text-xl text-blue-500 rounded-xl h-14 w-32'>Start</button>
        <p className='text-md text-blue-500'>press Enter ↵</p>
        </p>
        <p className='flex flex-row gap-2 text-xl'><BsClockHistory className='mt-1 h-6 w-6'/> Takes 3 minutes</p>
    </div>
    <div className='flex flex-col flex-wrap md:gap-1 gap-20 '>
     <div className='md:flex md:flex-row flex flex-col justify-between gap-6'>
        <img className='md:h-1/2 md:w-1/2 h-[400px] w-full bg-cover' src="https://th.bing.com/th/id/OIG.1Vsx9k_tI7G4Rtbu2P_f?pid=ImgGn"></img>
        <p className='md:p-24 md:text-2xl text-lg font-light text-gray-500 p-8'>At Iceland Moments, we embody the skill of treating our valued customers to the true spirit of Iceland, as if viewed through the eyes of a local expert. Our unwavering dedication revolves around creating unmatched, lasting memories for our guests, seamlessly weaving them into the fabric of local life, exceptional food, untouched landscapes, and the captivating wildlife that graces this land.</p>
     </div>
     <div className='md:flex md:flex-row flex flex-col justify-between gap-6'>
        <p className='md:p-24 md:text-2xl text-lg font-light text-gray-500 p-8'>We believe that sometimes less is more. We like to mix a busy schedule with some time for slow travel, that's where the magic tends to happen.
At Iceland Moments we take pride in our country, history, culture and we don't just say so with words, we focus on giving back to our land and communities with action every chance we get and in as many ways as we possibly can.</p>
<img className='md:h-1/2 md:w-1/2 h-[400px] bg-cover' src="https://th.bing.com/th/id/OIG.816DnFjXoYjqh5KasocG?pid=ImgGn"></img>
     </div>   
    </div>
    <div className='bg-gray-200'>
    <div>
        <h1 className='text-center text-6xl font-serif  p-8 text-gray-600'>Things To Do!</h1>
        <p className='text-center text-3xl text-gray-600 mb-8'>Explore the exciting activities and events at Iceland Moments</p>
    </div>
    <div className='flex flex-row flex-wrap justify-center gap-2 m-8'>
        {images.map((item,id)=>{
            return (
                <div key={id}>
                    <img className='h-[400px] w-[300px] bg-cover' src={item.img}></img>
                </div>
            )
        })}
    </div>
    <p className='pl-6 pb-6 text-xl font-serif text-blue-500 '>View more</p>
    </div>    
    </div>
  )
}

export default Mid