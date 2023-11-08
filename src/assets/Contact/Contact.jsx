import React from 'react'
import { Parallax } from 'react-parallax';
import Nav from '../Nav';
import Footer from '../Footer';
import {AiOutlineMail ,AiFillFacebook,AiFillInstagram,AiFillLinkedin} from "react-icons/ai"
import {BiLogoTripAdvisor} from "react-icons/bi"
function Contact() {
  return (
    <div>
        <div className='mb-24'>
         <Parallax  bgImage="./north.jpg"  strength={600}>
        <div className='w-auto h-[500px] bg-cover'>
            <Nav/>
            <h1 className='mt-40 text-center text-[45px] font-sans font-medium text-white '>Connect</h1>
        </div>
    </Parallax>
    </div>
    <div className='md:flex md:flex-row justify-center  
    flex flex-col gap-12   m-8 mb-24'>
    <div className='bg-[#F4F4F4F4] h-[300px] text-black flex flex-col '>
        <h1 className='text-3xl p-6 font-serif'>Get In Touch</h1>
        <p className='text-lg font-light p-6'>We will love to answer any questions,<br/> ideas, 
        or concerns you may have. Let<br/> us know how we can help!</p>
    <div className='flex flex-row gap-8 m-4'>
        <AiOutlineMail className='bg-black text-white border rounded-full w-8 h-8 p-1 '/>
        <AiFillFacebook className='bg-black text-white w-8 h-8 p-1 rounded-full'/>
        <AiFillInstagram className='bg-black text-white w-8 h-8 p-1 rounded-full'/>
        <AiFillLinkedin className='bg-black text-white w-8 h-8 p-1 rounded-full'/>
        <BiLogoTripAdvisor className='bg-black text-white w-8 h-8 p-1 rounded-full'/>
    </div>
    </div>
    <div className='flex flex-col gap-8'>
    <p className='flex flex-row gap-6'>
    <p className='flex flex-col '>
     <label>Name</label>
     <input type="text" className='border-b border-gray-300'></input>
     </p>
     <p className='flex fle-col'>
     <label>Phone</label>
     <input type="number" className='border-b border-gray-300'></input>
     </p>
     </p> 
     <label>Email</label>
     <input type="email" className='border-b border-gray-300'></input>
     <label>Message</label>
     <textarea type="text" className='border-b border-gray-300'></textarea> 
     <button className='bg-blue-400 text-xl text-white md:h-14 md:w-40 rounded-full h-8 w-40 mt-6 mb-6'>SUBMIT</button>
    </div>
    </div>
    <div className='bg-[#89BAD9] m-8 mb-24'>
        <h1 className='text-[50px] font-[Cardo] p-3 pt-12'>Call us now</h1>
        <p className='text-[18px] font-[DM Sans] p-3'>You can always call us and if we are unavailable feel 
        free to leave us a voice message and a travel<br/> 
        expert from us will get in touch as soon as possible!</p>
        <button className='text-lg bg-[#212226CC] mb-12  p-[4px] m-4 text-white md:h-14 md:w-40 rounded-full
         w-[280px] h-[76px] mt-6 '>Call us</button>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact