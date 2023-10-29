import React from 'react'
import {FaTelegramPlane} from "react-icons/fa"
import {FaMapLocationDot} from "react-icons/fa6"
import {BsFillClockFill} from "react-icons/bs"
import {IoCheckmarkDoneCircleSharp} from "react-icons/io5"
import {BiTask,BiLogoGmail,BiLogoFacebookCircle,BiLogoInstagramAlt,BiLogoLinkedinSquare,BiLogoTripAdvisor} from "react-icons/bi"
function Footer() {
  return (
    <div>
        <div className=' text-black md:flex md:flex-row flex flex-col  justify-around gap-4 m-8'>
     <p className='flex flex-col gap-3'>
        <h1 className='text-4xl font-semibold p-6'>What Interests You</h1>
        <p className='text-xl font-light p-6'>Answer some easy questions to help us understand you and your wishes.</p>
     </p>
     <p className=''>
        <h1 className='text-4xl font-semibold p-6'>Let’s Connect</h1>
        <p className='text-xl font-light p-6'>We will be in touch to start the process of creating the dream trip with you</p>
     </p>
     <p className='text-4xl font-semibold p-6'>
        <h1 className='text-4xl font-semibold p-6'>Booking Your Trip</h1>
        <p className='text-xl font-light p-6'>Now that we know what you are looking for, let’s get it booked!</p>
     </p>   
    </div>
    <div className='bg-gray-200'>
        <div className='flex flex-col flex-wrap gap-4 items-center'>
            <FaTelegramPlane className='text-blue-600 text-4xl mt-4'/>
            <h1 className='text-black font-semibold text-5xl m-4'>Keep IN Touch</h1>
            <p className='text-[#333] text-xl pb-6 pt-6 mr-3 ml-3'><em>Sign up to join our membership program for exclusive offers and experiences!</em></p>
        <input type="email" placeholder='Your email address' className='w-1/2 h-12 bg-transparent border-b-2 border-black text-xl text-gray-500'/>
        <button className='bg-blue-500 text-xl text-white md:h-14 md:w-40 h-10 w-32 mt-6 mb-6'>Submit</button>
        </div>
    </div>
    <div className='bg-blue-400  text-white text-2xl font-semibold flex flex-wrap flex-row justify-around gap-4 '>
             <div className='flex flex-col  gap-4 mt-20 mb-20'>
              <FaMapLocationDot className='h-32 w-32 border-2 m-4 p-2 hover:text-[#333] hover:bg-white   border-white rounded-full'/>
              <p className='mb-4'>LOCAL EXPERTS</p>  
             </div>
             <div className='flex flex-col  gap-4 mt-20 mb-20 '>
                <BsFillClockFill className='h-32 w-32 border-2 m-4 p-2 hover:text-[#333] hover:bg-white border-white rounded-full'/>
                <p className='mb-4'>PLANNED ITENERARY</p>
             </div>
             <div className='flex flex-col  gap-4 mt-20 mb-20'>
                <IoCheckmarkDoneCircleSharp className='h-32 w-32 border-2 m-4 p-2 hover:text-[#333] hover:bg-white  border-white rounded-full'/>
                <p className='mb-4'>TRUSTED GUIDES</p>
             </div>
             <div className='flex flex-col  gap-4 mb-20 mt-20'>
                <BiTask className='h-32 w-32 border-2 m-4 p-2 hover:text-[#333] hover:bg-white  border-white rounded-full'/>
                <p className='mb-4'>UNIQUE EXCURSIONS</p>
             </div>   
        </div>
        <div className='bg-black'>
        <div className='md:flex md:flex-row flex flex-col flex-wrap items-center  justify-evenly gap-3 '>
            <div className='flex flex-col justify-evenly gap-2 mt-12 mb-6'>
                <img className='h-36 w-36' src="https://lirp.cdn-website.com/247eb106/dms3rep/multi/opt/Iceland-Moments-white-10-5d58a438-1920w.png"></img>
                <img className='h-36 w-36' src="https://lirp.cdn-website.com/247eb106/dms3rep/multi/opt/Connections+Luxury+white-1920w.png"></img>
            </div>
            <div>
                <img className='h-60 w-60' src="https://lirp.cdn-website.com/247eb106/dms3rep/multi/opt/2023-002-1920w.png"></img>
            </div>
            <div className='flex flex-col text-white text-xl p-6 justify-around gap-4'>
                <p><em>Kennitala / ID Number: 620422-1340<br/>
                Heimilisfang / Address: Ásbúð 53, 210 Garðabær, Iceland<br/>
                VSK nr / Tax Number: 146303</em>
                </p>
            </div>
          <div>
          <p className='flex flex-row justify-center mb-6 gap-2 text-white flex-wrap'>
            <BiLogoGmail className='h-8 w-8'/>
            <BiLogoFacebookCircle className='h-8 w-8'/>
            <BiLogoInstagramAlt className='h-8 w-8'/>
            <BiLogoLinkedinSquare className='h-8 w-8'/>
            <BiLogoTripAdvisor className='h-8 w-8'/>
        </p>
        <button className='text-white bg-blue-600 rounded-full m-6 w-32 h-12  text-xl'>Contact Us</button>
        </div>
        </div>
        <p className='text-white text-center text-xl pb-20'>©️ 2023 Private Guide Iceland ehf. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer