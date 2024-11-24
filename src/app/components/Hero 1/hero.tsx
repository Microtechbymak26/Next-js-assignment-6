import React from 'react';
const hero = () => {
  return (

    <>


 <div className="relative w-full h-[800px] bg-white px-[60px] py-[20px]">
  {/* Left Side: Text and Buttons */}
  <div className="flex-1 flex flex-col justify-center pt-64 font-bold pl-10">
    <h1 className="w-[550px] h-[134px] text-[56px] leading-[67.2px] font-roboto font-[700] text-black">
      Learn new skills online with ease
    </h1>
    <p className="w-[580px] h-[81px] text-[18px] pt-10 font-w">
      Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
    </p>
    <div className="pt-20 flex gap-4 pb-60">
      <button className="px-6 py-2 bg-black text-white font-medium rounded">
        Start learning now
      </button>
      <button className="px-6 py-2 border border-gray-400 font-medium rounded">
        Explore Courses
      </button>
    </div>
  </div>

  {/* Right Side: Image */}
  <div className="absolute top-0 right-0">
    <img src= "/image/Image.jpg" alt="Learn Skills" className=" w-full object-cover" />
  </div>
 </div>



{/* 2nd  section*/}
    
      <div className='bg-[#f7f7f7] relative w-full h-full px-[64px] py-[80px] gap-[64px] flex '>
   <h5 className='w-[320px] h-[68px] text-[24px] font-[700] font-roboto leading-[33.6px] text-black'>Trusted by 2000 + companies worldwide.</h5>  
     
      <div className='w-[880px] h-[100px] py-[8.74] gap-[19.12] flex flex-row' >
      <div className='flex ]'>
        <img src="/image/logo-1.svg" alt="" className='gap-[100px] '/>
      </div>

      <div className=' flex ]'>
        <img src="/image/logo-2.svg" alt="" className='gap-[100px]'/>
      </div>

      <div className=' flex '>
        <img src="/image/logo-3.svg" alt=""/>
      </div>

      <div className='flex'>
        <img src="/image/logo-4.svg" alt=""/>
      </div>

      <div className='flex '>
        <img src="/image/logo-5.svg" alt=""/>
      </div>

      <div className=' flex '>
        <img src="/image/logo-6.svg" alt=""/>
      </div>
     </div> 

     </div>
    </>

  )
}

export default hero
