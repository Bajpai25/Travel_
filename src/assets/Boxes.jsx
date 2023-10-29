import React from 'react'
import data from "./Box_data"
import {AiOutlineClockCircle} from "react-icons/ai"
function Boxes() {
  return (
    <>
    <h1 className='text-center mt-60 mb-20 font-sans md:text-5xl text-3xl  font-semibold'>Popular Itenaries</h1>
    <div className=' m-6 flex flex-row flex-wrap justify-center gap-8 '>
    {data.map((item,id)=>{
      return (
      <div key={id} className='bg-white shadow-lg shadow-gray-600 md:w-[400px] w-auto h-auto  rounded-xl p-6 '>
      <div className='flex flex-col gap-4'>
      <img className='h-auto w-auto bg-cover' src={item.img}></img>
      <div className="text-[32px] font-medium">{item.title}</div>
      <div className='gap-0 mb-20 mt-12'>
      <div className='flex flex-row justify-end text-gray-500 text-xl'>
      <span ><AiOutlineClockCircle className='mr-1 mt-1 text-xl'/></span> {item.Days}</div>
      <div className='flex justify-end text-blue-500 text-xl text-italics'><em>{item.Price}</em></div>
      <div className='flex justify-end text-gray-500  text-xl'><em>{item.Footer}</em></div>
      </div>
      <button className='bg-blue-300 rounded-full w-60 h-12 m-auto text  text-white hover:bg-gray-600'>View Iteneraries</button>
      </div>
      </div>
      )
    })}
    </div>
    </>
  )
}

export default Boxes