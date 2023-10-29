import React, { useState,useRef,useEffect } from 'react'
import review_data from "./Review_data"
function Reviews() {
  const [swiperight, setswiperight] = useState(0);
  const reviewsContainerRef = useRef(null);
  const scrollAmount = 50;
  const scrollInterval = 2000;

  useEffect(() => {
    const scrollRight = () => {
      if (reviewsContainerRef.current) {
        const container = reviewsContainerRef.current;
        const newPosition = swiperight + scrollAmount;
        container.scrollLeft = newPosition;
        setswiperight(newPosition);

        if (container.scrollLeft + container.clientWidth === container.scrollWidth) {
          // If at the rightmost position, reverse the scroll direction
          reverseScroll();
        }
      }
    };

    const reverseScroll = () => {
      if (reviewsContainerRef.current) {
        const newPosition = swiperight - scrollAmount;
        reviewsContainerRef.current.scrollLeft = newPosition;
        setswiperight(newPosition);
      }
    };

    const intervalId = setInterval(scrollRight, scrollInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [swiperight]);   
 
  return (
    <div className='bg-gray-200'>
    <div>
        <h1 className='text-center text-6xl font-serif  p-8 text-gray-600'>Reviews</h1>
        <p className='text-center text-3xl text-gray-600 mb-8'>Don't just take our word for it!</p>
        <div className='flex  overflow-hidden ' style={{ overflowX: 'scroll' }} ref={reviewsContainerRef} >
         {review_data.map((item,id)=>{
            return(
                <div key={id} >
                    <div className='flex flex-col gap-3 w-[400px] h-auto m-4 ' >
                        <div className='flex flex-row gap-3'>
                            <img src={item.img} className='h-6 w-6'></img>
                            <h1 className='font-semibold'>Louis Pedro Alonso</h1>
                        </div>
                        <p className='text-gray-700'>April 15</p>
                        <p>{item.star}</p>
                        <h1 className='font-bold'>{item.title}</h1>
                        <p>{item.content}</p>
                        <div className='flex flex-row justify-center gap-2'>
                          <img src={item.icon} className='h-8 w-8'></img>
                          <p className='font-semibold text-xl'>{item.company}</p>  
                        </div>
                    </div>
                </div>
            )
         })}   
        </div>
    </div>
    </div>
  )
}

export default Reviews