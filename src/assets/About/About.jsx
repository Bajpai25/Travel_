import React from 'react'
import { Parallax } from 'react-parallax';
import Nav from '../Nav';
import Footer from '../Footer';
import {BsFillFileRuledFill} from "react-icons/bs"
import {MdOutlineMiscellaneousServices} from "react-icons/md"
import {TbReplaceFilled} from "react-icons/tb"
import {FaMedal} from "react-icons/fa"
function About() {
  return (
    <div>
    <div>
         <Parallax  bgImage="./bg.jpg"  strength={600}>
        <div className='w-auto h-[500px] bg-cover'>
            <Nav/>
            <h1 className='mt-40 text-center text-[45px] font-sans font-medium text-white '>Who We ARE!!</h1>
        </div>
    </Parallax>
    </div>
    <div className='md:flex md:flex-row justify-around m-8 gap-8 flex flex-col pt-16'>
      <div className='flex flex-row flex-wrap gap-12 '>
      <BsFillFileRuledFill className='text-[#657CBD] w-12 h-12 m-3'/>
       <div className='flex flex-col gap-8 '>
       <div className='text-[24px] font-[dm-sans] text-[#000000] font-extralight'>
       <h1 className='text-[28px] font-[cardo]  text-[#212226] pb-8'>Our Motto</h1>
       Our name is our compass, we believe 
       life is all<br/> about moments 
        so our motto is “don't wait for<br/> them,  
        create them”.
       </div>
       <div  className='text-[24px] font-[dm-sans] text-[#000000] font-extralight'>
       We focus on engaging our guests 
        with locals and<br/> local experiences 
         as much as possible.
       </div> 
       <div className='text-[24px] font-[dm-sans] text-[#000000] font-extralight'>
       We believe in an inside out approach, meaning<br/> we  
       begin with the inside work of training and<br/> treating  
       our staff the absolute best way possible<br/>  
       for us all to be able to deliver on what we aim for.
       </div>
       </div>
      </div>  
      <div className='flex flex-row gap-4 '>
      <MdOutlineMiscellaneousServices className='text-[#657CBD] w-12 h-12 m-3'/>
       <div className='flex flex-col gap-8'>
       <div className='text-[24px] font-[dm-sans] text-[#000000] font-extralight'>
       <h1 className='text-[28px] font-[cardo]  text-[#212226] pb-8'>Our Services</h1>
       We are a private luxury  
       travel agency and our<br/> services 
       are as listed below.
       </div>
       <div className='text-[24px] font-[dm-sans] text-[#000000] font-extralight'>
       <li>Trip planning from a local expert. </li>
       <li>Local private driver guide and car with you<br/> the entire trip. </li>
       <li>Booking accommodations, some that you<br/> wouldn't  have access to book without going<br/> through us.</li>
       <li>Booking experiences and activities, offering <br/> additional options that you wouldn't  have<br/> access to without going through us.</li>  
       </div> 
       </div>
      </div>
      </div>
      <div className='md:flex md:flex-row justify-around m-8 gap-12 flex flex-col pt-16'>
      <div className='flex flex-row gap-4'>
      <TbReplaceFilled className='text-[#657CBD] w-12 h-12 m-3'/>
       <div className='flex flex-col gap-8'>
       <div className='text-[24px] font-[dm-sans] text-[#000000] font-extralight'>
       <h1 className='text-[28px] pb-8 font-[cardo]  text-[#212226]'>The Process</h1>
       We recommend you begin with filling out our  
       trip<br/> planner on the website as this gives  
       us a better<br/> understanding of what interests  
       you and what<br/> kind of trip to plan.
       </div>
       <div className='text-[24px] font-[dm-sans] text-[#000000] font-extralight'>
       After we receive this information from you we will<br/>  
       get in touch with the first draft of your travel<br/>  
       itinerary, then we will begin adjusting it  
       as we get<br/> feedback from you. When you are happy  
       with the<br/> itinerary we book everything<br/>  
       and you are all set<br/> for your Iceland Moments.
       </div> 
       </div>
      </div>
      <div className='flex flex-row gap-4'>
      <FaMedal className='text-[#657CBD] w-12 h-12 m-3'/>
       <div className='flex flex-col gap-8'>
       <div className='text-[24px] font-[dm-sans] text-[#000000] font-extralight'>
       <h1 className='text-[28px] pb-8 font-[cardo]  text-[#212226]'>Our Guarantee</h1>
       Our guarantee rests upon our unwavering<br/> passion for 
       curating guided tours that transcend<br/> expectations.  
       With meticulous attention to detail,<br/> we've crafted  
       luxury experiences that immerse<br/> you in Iceland's  
       breathtaking 
       landscapes, rich<br/> history, and vibrant culture.
       </div>
       <div className='text-[24px] font-[dm-sans] text-[#000000] font-extralight'>
       Our team of knowledgeable guides, armed with<br/> their  
       profound expertise, will lead you on a<br/> captivating 
       exploration, sharing captivating<br/> stories and hidden  
       gems that only locals would<br/> know. From cascading
       waterfalls to dramatic<br/> volcanic vistas, each step of  
       your journey is<br/> carefully designed to leave you with  
       awe-<br/>inspiring memories that will linger long after  
       your<br/> footprints have faded from Iceland's terrain.
       </div> 
       </div>
      </div>
      </div>
      <div>
      <h1 className='text-[45px] font-[Cardo] text-[#333333] text-center mt-12 mb-8 ml-6 mr-6'>Meet Our Guides</h1>
      <div className='md:flex md:flex-row flex-col justify-center gap-20 mt-32'>
      <div className='flex flex-col gap-6 text-[20px] font-sans mb-[30px] pl-8 pr-8'>
        <p>
        Andri has over 10 years of experience in the<br/> hospitality industry in Iceland as a guide. His<br/> passion is serving people, and in his mind 
        it's an<br/> art not a job. He has spent the last years studying<br/> service & experience designing, through books,<br/> courses, conventions and more.   
        </p>
        <p>
        Andri grew up in a small fishing village working at<br/> some of the fish factories and fishing boats. Mixed<br/> with spending 
        a lot of time helping out at his<br/> grandparents farm in the south of Iceland<br/> introduced him to hard work and discipline.   
        </p>
       <p>
       He has traveled to more than 30 countries<br/> worldwide, and he loves nothing more than being<br/> alone in nature, or hiking with<br/>
        his wife.
       </p>
       <p>
       He and his wife Þóra have 4 children.<br/>
        Andri is our CEO, you will most likely speak to him<br/> while planning your trip, and you might even have<br/> him as your guide.
       </p>
        </div>
        <div>
            <h1 className='mt-[-30px] text-[35px] font-[cardo] pl-8 pr-8'>Andri Snær Ágústsson</h1>
            <h3 className='mt-[-6px] text-[20px] font-[dm-sans] text-[#657CBD] pl-8 pr-8'>CEO & Co - owner</h3>
            <img className='w-[312px] h-[417px] bg-cover ml-8 mr-8' src="https://lirp.cdn-website.com/247eb106/dms3rep/multi/opt/Meet+the+owners-1920w.jpg"></img>
        </div>
      </div>
      <div className='md:flex md:flex-row flex-col justify-center gap-20 mt-32 pl-8 pr-8'>
      <div>
            <h1 className='mt-[-30px] text-[35px] font-[cardo]'>Ingvar Stefánsson</h1>
            <h3 className='mt-[-6px] text-[20px] font-[dm-sans] text-[#657CBD]'>CFO & Co - owner</h3>
            <img className='w-[312px] h-[417px] bg-cover' src="https://lirp.cdn-website.com/247eb106/dms3rep/multi/opt/Meet-the-owners-2-a3f72145-1920w.jpg"></img>
        </div>
      <div className='flex flex-col gap-6 text-[20px] font-sans'>
        <p>
        Ingvar has a long and successful career as a<br/> leader in different industries 
        ranging from<br/> banking and marketing. He was the CFO &<br/> deputy CEO for the largest utility and energy<br/> company for 10 years.
        </p>
        <p>
        Ingvar is our behind the scenes mastermind,<br/> making sure all of 
        our systems and routines<br/> are in place for us to serve you the best we can.   
        </p>
       <p>
       Ingvar loves traveling and enjoying life, in the<br/> last few years he has embarked on a personal<br/> improvement journey leading him to 
       getting<br/> certified as a life coach with the aim of<br/> helping others while also becoming the best<br/> version of himself.
       </p>
        </div>
      </div>
      <div className='md:flex md:flex-row flex-col justify-center gap-20 mt-32 pl-8 pr-8'>
      <div className='flex flex-col gap-6 text-[20px] font-sans'>
        <p>
        Þóra has years of experience of working in<br/>
        hospitality through bartending, working at a café<br/> and being a flight attendant.
        </p>
        <p>
        Þóra loves hiking alone in the mountains or with<br/> her husband Andri. They have 4 kids together. 
        Þóra<br/> is a law student and works for the biggest utility &<br/> power company in Iceland.
        </p>
       <p>
       She loves spending time with the family and<br/> listening to music, she is also the kindest warm<br/> hearted person you can ever meet.
       </p>
        </div>
        <div>
            <h1 className=' text-[35px] font-[cardo] mt-12'>Þóra Kristín Þorkelsdóttir</h1>
            <h3 className='mt-[-6px] text-[20px] font-[dm-sans] text-[#657CBD]'>Co - owner & board member</h3>
            <img className='w-[312px] h-[417px] bg-cover' src="https://lirp.cdn-website.com/247eb106/dms3rep/multi/opt/Meet-the-owners-4-1920w.jpg"></img>
        </div>
      </div>
      <div className='md:flex md:flex-row flex-col justify-center gap-20 mt-32 pl-8 pr-8'>
      <div>
            <h1 className='mt-[-30px] text-[35px] font-[cardo]'>Kristín Stefánsdóttir</h1>
            <h3 className='mt-[-6px] text-[20px] font-[dm-sans] text-[#657CBD]'>Co - owner & board member</h3>
            <img className='w-[312px] h-[417px] bg-cover' src="https://lirp.cdn-website.com/247eb106/dms3rep/multi/opt/Meet+the+owners+5-1920w.jpg"></img>
        </div>
      <div className='flex flex-col gap-6 text-[20px] font-sans' >
        <p>
        Kristín is in one word “enjoyer of life” she is a very<br/> kind 
        and happy person that brings joy to everyone<br/> around just like her daughter Þóra.
        </p>
        <p>
        Kristín is a dentist, singer, life coach, mother,<br/> grandmother and so much more!
        </p>
       <p>
       She loves being around people, especially her<br/> family, she loves to travel and try new things.
       </p>
        </div>
      </div>
      </div>
    <Footer/>
    </div>
  )
}

export default About