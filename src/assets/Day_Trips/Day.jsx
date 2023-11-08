import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import {BsSearch} from "react-icons/bs"
import {AiTwotoneCalendar ,AiOutlineClockCircle} from "react-icons/ai"
import {LuSettings2} from "react-icons/lu"
import { Parallax } from 'react-parallax';
import day_data from './Day_data'
import { BiLogoTripAdvisor } from 'react-icons/bi'
function Day() {
  return (
    <div>
    <div>
    <div>
         <Parallax  bgImage="./horse.jpg"  strength={200}>
        <div className='w-full h-[700px] bg-cover'>
            <Nav/>
            <h1 className='text-center text-[45px] font-[cardo] text-gray-400 mt-36'>Get Inspired</h1>
    <p className='text-center text-[20px] font-[DM Sans] text-gray-400 pt-4'>Explore our most popular itineraries</p>
        </div>
    </Parallax>
    </div>
    </div>
    <div>
    <h1 className='mt-40 text-center text-[45px] font-[cardo] font-medium text-black '>Every moment counts</h1>
            <p className='p-4 text-center text-[45px] font-[cardo] font-medium text-[#89BAD9]'>We'll help to make them all memorable
</p>
<h3 className='text-[18px] font-[DM Sans] text-center pt-6 pb-12'>Check out a few private day trips we offer!</h3>
<div className='flex justify-center mt-3 mb-12 w-[70px] border-b-2 m-auto border-blue-500'>
    </div>
    </div>
    <div className='flex flex-row justify-around border-2 border-gray-300 p-2'>
    <div className='flex flex-row'>
    <BsSearch className='m-2'/>
      <input type="text" placeholder='Search for activities'></input>
      </div>
      <div className='flex flex-row'>
      <AiTwotoneCalendar className='m-2'/>
      <input type="number" placeholder='When are you going?'></input>
      </div>
      <LuSettings2 className='m-2'/>
    </div>
    <div className='flex flex-row justify-center flex-wrap gap-8 m-6'>
      {day_data.map((item,id)=>{
        return (
          <div key={id} className='bg-white shadow-lg hover:shadow-gray-600 md:w-[340px] w-auto h-auto  rounded-xl p-6 '>
      <div className='flex flex-col gap-2'>
      <img className='h-auto w-auto bg-cover p-0' src={item.img}></img>
      <div className="text-[24px] font-medium">{item.title}</div>
      <div className="text-[16px] font-medium">{item.By}</div>
      <div className='flex flex-row gap-2'>
        <BiLogoTripAdvisor/>
        <div>
        🟢🟢🟢🟢🟢
        </div>
        <div>
          {item.reviews}
        </div>
      </div>
      <div>
        {item.description}
      </div>
      <div className='gap-0 '>
      <div className='flex  w-[100px] justify-start mb-[-40px] text-gray-500 text-lg'>
      <span><AiOutlineClockCircle className='mr-1 mt-1 text-lg'/></span> {item.time}</div>
      <div className='flex justify-end text-blue-500 text-xl pt-12 text-italics'><span className='mr-2'>From </span>{item.price}</div>
      </div>
      </div>
      </div>
        )
      })}
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

export default Day