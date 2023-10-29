import React from 'react'
import { useState,useEffect } from 'react'
function Nav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    // Hide the mobile menu when the screen size is increased beyond the medium device size (768px).
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <div>
    {/* Hamburger Menu Icon */}
    <div className="md:hidden block  justify-end">
        <button
          id="hamburger-button"
          className="text-2xl p-2 bg-white h-12 w-12 focus:outline-none"
          onClick={() => toggleMobileMenu()}
        >
          &#9776;
        </button>
        </div>
    <div id="mobile-menu" className={`md:flex md:flex-row md:justify-center ${showMobileMenu ? 'md:block' : 'hidden'} flex flex-col items-center gap-4`}>
    <div className='md:flex md:flex-row md:justify-around gap-6 flex flex-col'>
        <p className=' hover:underline  text-xl pl-6 font-serif pt-8  md:pt-[100px] text-[#ffff]'>Travel Packages</p>
        <p className='hover:underline text-xl font-serif md:pt-[100px] text-[#ffff]'>Days Trips</p>
        <p className='hover:underline text-xl font-serif md:pt-[100px] text-[#ffff]'>About</p>
    </div>
    <img className='md:h-48 md:w-70 w-48 h-28 md:mt-6 mt-0 md:flex hidden' src="https://lirp.cdn-website.com/247eb106/dms3rep/multi/opt/Iceland-Moments-white-10-5d58a438-1920w.png"></img>
    <div className='md:flex md:flex-row md:justify-around gap-6 flex flex-col' >
    <p className='hover:underline text-xl font-serif md:pt-[100px] text-[#ffff]'>Contact us</p>
    <p className='hover:underline text-xl font-serif md:pt-[100px] text-[#ffff]'>Terms & Conditions</p> 
    </div>
    </div>
    </div>
  )
}

export default Nav