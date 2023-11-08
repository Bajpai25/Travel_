import React from 'react'
import data from "./Box_data"
import {AiOutlineClockCircle} from "react-icons/ai"
function Boxes() {
  return (
    <>
    <h1 className='text-center mt-60 mb-20 font-sans md:text-5xl text-3xl  font-semibold'>Popular Itenaries</h1>
    <div className=' m-6 md:flex md:flex-row flex flex-col flex-wrap  
    justify-center gap-12 '>
    {data.map((item,id)=>{
      return (
      <div key={id} className='bg-white shadow-lg shadow-gray-600 md:w-[340px] w-auto h-auto  rounded-xl p-6 '>
      <div className='flex flex-col gap-2'>
      <img className='h-auto w-auto bg-cover p-0' src={item.img}></img>
      <div className="text-[24px] font-medium">{item.title}</div>
      <div className='gap-0 mb-8 mt-8'>
      <div className='flex flex-row justify-end text-gray-500 text-lg'>
      <span ><AiOutlineClockCircle className='mr-1 mt-1 text-lg'/></span> {item.Days}</div>
      <div className='flex justify-end text-blue-500 text-lg text-italics'><em>{item.Price}</em></div>
      <div className='flex justify-end text-gray-500  text-lg'><em>{item.Footer}</em></div>
      </div>
      <button className='bg-blue-300 rounded-full w-40 h-12 m-auto text  text-white hover:bg-gray-600'>View Iteneraries</button>
      </div>
      </div>
      )
    })}
    </div>
    </>
  )
}

export default Boxes