import React from 'react'
import { Parallax } from 'react-parallax';
import Nav from '../Nav';
import data from '../Box_data';
import {AiOutlineClockCircle} from "react-icons/ai"
import Footer from '../Footer';
function Travel() {
  return (
    <div>
        <div>
         <Parallax  bgImage="./bg.jpg"  strength={600}>
        <div className='w-auto h-[800px] bg-cover'>
            <Nav/>
            <h1 className='mt-40 text-center text-[45px] font-[cardo] font-medium text-white '>Get Inspired</h1>
            <p className='p-4 text-center text-[24px] font-[cardo] font-medium text-white'>Explore our most popular itineraries</p>
        </div>
    </Parallax>
    </div>
    <div className='text-center mt-24'>
    <h3 className='font-[cardo] text-[24px]  text-[#000000]'>Every moment counts</h3>
    <h1 className='text-[45px] font-[cardo] text-[#1A1A1A]'>We'll Help To Make Them All Memorable</h1>
    <h3 className='text-[24px] font-[dm-sans] text-[#000000]'>Check out a few trips we've planned in the past</h3>
    </div>
    <div className='flex justify-center mt-3 mb-12 w-[70px] border-b-2 m-auto border-blue-500'>
    </div>
    <div className='mt-24 '>
    <h1 className='text-center mb-8 text-[35px] font-[cardo] text-[#212226CC]'>Travel Packages</h1>
    <div className=' m-6 md:flex md:flex-row flex flex-col flex-wrap  
    justify-center gap-12 '>
    {data.map((item,id)=>{
      return (
      <div key={id} className='bg-white shadow-lg shadow-gray-600 md:w-[400px] w-auto h-auto  rounded-xl p-6 '>
      <div className='flex flex-col gap-2'>
      <img className='h-auto w-auto bg-cover p-0' src={item.img}></img>
      <div className="text-[32px] font-medium">{item.title}</div>
      <div className='gap-0 mb-8 mt-8'>
      <div className='flex flex-row justify-end text-gray-500 text-xl'>
      <span ><AiOutlineClockCircle className='mr-1 mt-1 text-xl'/></span> {item.Days}</div>
      <div className='flex justify-end text-blue-500 text-xl text-italics'><em>{item.Price}</em></div>
      <div className='flex justify-end text-gray-500  text-xl'><em>{item.Footer}</em></div>
      </div>
      <button className='bg-blue-300 rounded-full w-40 h-12 m-auto text  text-white hover:bg-gray-600'>View Iteneraries</button>
      </div>
      </div>
      )
    })}
    </div>
    </div>
    <div className='md:flex md:flex-row 
    flex flex-col bg-[#F5F5F5]  justify-around gap-16  mb-16 mt-16 pl-8 pr-8'>
    <div className='flex flex-col gap-8'>
        <h1 className='text-[35px] pt-12 font-[cardo] text-[#89BAD9]'>CLIMATE</h1>
        <h3 className='text-[16px] font-[roboto]'>TEMPERATURES</h3>
        <p className='text-[20px] font-[DM Sans]'>For it's latitutde, the Icelandic climate is much<br/> 
        milder than it seems. Daily winter<br/> temperatures can 
        range from 14°F to 32°F. In<br/> the 
        hottest month of summer, temperatures<br/> range 
        from 50-60°F.</p>
    <h3 className='text-[16px] font-[roboto]'>RAINFALL</h3>
    <p  className='text-[20px] font-[DM Sans] pb-6'>Prepare yourself for rain if you are coming in<br/> 
    the fall or winter, as it generally rains every 
    few<br/> days, and usually for several hours at a time.<br/> 
    The winds can be strong, too, so come<br/> prepared. 
    Iceland does not have a specific<br/> rainy season, 
    however it normally peaks in<br/> October to February.</p>
    </div>
    <div>
        <img src="./bg.jpg" className='w-full h-[613px] '></img>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Travel