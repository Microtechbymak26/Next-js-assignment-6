import React from 'react'
import Nav from './Navigation/Nav'
import Hero from './Hero 1/hero'
import Courses from './Courses/courses'
import Achievements from './Achievements/achievements'
import Programs from './Programs/programs'
import Teams from './Teams/teams'
import Testimonial from './Testimonial/testimonial'
import Footer from './Footer/footer'
import Image from 'next/image'

const home = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <div className="bg-[#f7f7f7] relative w-full h-full px-[64px] py-[60px] justify-between flex items-start max-md:py-[0px] max-md:gap-0 max-md:items-start max-md:px-[15px] max-md:overflow-hidden max-md:flex-col">
        <h5 className="w-[320px] h-[68px] text-[24px] font-[700] font-roboto leading-[33.6px] text-black text-lg md:text-2xl text-start mb-6 max-md:mb-0 max-md:text-start">
          Trusted by 2000 + companies worldwide.
        </h5>

        <div className="w-[880px] h-[100px] py-[8.74] gap-[19.12] flex flex-row ">
          <div className="flex ">
            <Image src="/image/logo-1.svg" width={640} height={900} alt="" className="gap-[100px] " />
          </div>

          <div className="flex">
            <Image src="/image/logo-2.svg" width={640} height={900} alt="" className="gap-[100px]" />
          </div>

          <div className=" flex ">
            <Image src="/image/logo-3.svg" width={640} height={900} alt="" />
          </div>

          <div className="flex">
            <Image src="/image/logo-4.svg" width={640} height={900} alt="" />
          </div>

          <div className="flex ">
            <Image src="/image/logo-5.svg" width={640} height={900} alt="" />
          </div>

          <div className=" flex ">
            <Image src="/image/logo-6.svg" width={640} height={900} alt="" />
          </div>
        </div>
      </div>
      <Courses/>
      <Achievements/>
      <Programs/>
      <Teams/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default home
