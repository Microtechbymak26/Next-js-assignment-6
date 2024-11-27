import React from 'react'
import { FaDribbble, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'

const teams = () => {
  return (
    
      
      <section className="w-full h-[895px]  bg-[#f7f7f7] flex flex-col justify-center items-center py-[60px] max-md:py-[30px] max-md:h-fit">
      <div className="flex flex-col w-[66%] h-[20%] items-center justify-between">
        <h1 className="font-roboto font-[700] text-[56px]">Our Team</h1>
        <p className="text-[18px] robot-regular mt-[20px] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="w-full h-[38%] flex items-center justify-between gap-[4px] pt-[80px] max-md:flex-col max-md:gap-12 ">
        {/* card1 */}

        <div className=" h-[273px] items-center pt-[20px]">
        <Image src="/image/person1.jpg" alt='' width={80} height={80} className='ml-[150px]'/>

          
            <div className="flex justify-center items-center">
              <p className="font-roboto font-semibold text-[20px] text-black mt-5">
              James Nduku
              </p>
            </div>
            <p className=" flex justify-center items-center w-[382px] text-[18px] font-[400]">
            Marketing Coordinator.
            </p>
            <div className='w-[32%] h-[25px] flex items-end justify-around ml-[120px] mt-[30px]'>
          <FaLinkedin className='w-full h-full' />
          <FaTwitter className='w-full h-full' />
          <FaDribbble className='w-full h-full' />
        </div>

          
        </div>

        <div className=" h-[273px] items-center pt-[20px]">
        <Image src="/image/person2.jpg" alt='' width={80} height={80} className='ml-[150px]'/>

          
            <div className="flex justify-center items-center">
              <p className="font-roboto font-semibold text-[20px] text-black mt-5">
              Joseph Munyambu
              </p>
            </div>
            <p className=" flex justify-center items-center w-[382px] text-[18px] font-[400]">
            Nursing Assistant
            </p>
            <div className='w-[32%] h-[25px] flex items-end justify-around ml-[120px] mt-[30px]'>
          <FaLinkedin className='w-full h-full' />
          <FaTwitter className='w-full h-full' />
          <FaDribbble className='w-full h-full' />
        </div>
          
        </div>
        <div className=" h-[273px] items-center pt-[20px]">
        <Image src="/image/person3.jpg" alt='' width={80} height={80} className='ml-[150px]'/>

          
            <div className="flex justify-center items-center">
              <p className="font-roboto font-semibold text-[20px] text-black mt-5">
              Joseph Ngumbau
              </p>
            </div>
            <p className=" flex justify-center items-center w-[382px] text-[18px] font-[400]">
            Medical Assistant
            </p>
            <div className='w-[32%] h-[25px] flex items-end justify-around ml-[120px] mt-[30px]'>
          <FaLinkedin className='w-full h-full' />
          <FaTwitter className='w-full h-full' />
          <FaDribbble className='w-full h-full' />
        </div>
          
        </div>
        </div>
        <div className="w-full h-[38%] flex items-center justify-between pt-[80px] max-md:hidden ">
        {/* card2 */}
        <div className=" h-[273px] items-center pt-[20px]">
          
          <Image src="/image/person4.jpg" alt='' width={80} height={80} className='ml-[150px]'/>

          
            <div className="flex justify-center items-center">
              <p className="font-roboto font-semibold text-[20px] text-black mt-5">
              Erick Kipkemboi
              </p>
            </div>
            <p className=" flex justify-center items-center w-[382px] text-[18px] font-[400]">
            Web Designer
            </p>
            <div className='w-[32%] h-[25px] flex items-end justify-around ml-[120px] mt-[30px]'>
          <FaLinkedin className='w-full h-full' />
          <FaTwitter className='w-full h-full' />
          <FaDribbble className='w-full h-full' />
        </div>
          
        </div>

        <div className=" h-[273px] items-center pt-[20px]">
       
          <Image src="/image/person5.jpg" alt='' width={80} height={80} className='ml-[150px]'/>
          
            <div className="flex justify-center items-center">
              <p className="font-roboto font-semibold text-[20px] text-black mt-5">
              Stephen Kerubo
              </p>
            </div>
            <p className=" flex justify-center items-center w-[382px] text-[18px] font-[400]">
            President of Sales
            </p>
            <div className='w-[32%] h-[25px] flex items-end justify-around ml-[120px] mt-[30px]'>
          <FaLinkedin className='w-full h-full' />
          <FaTwitter className='w-full h-full' />
          <FaDribbble className='w-full h-full' />
        </div>
          
        </div>

        <div className=" h-[273px] items-center pt-[20px]">
        <Image src="/image/person6.jpg" alt='' width={80} height={80} className='ml-[150px]'/>

          
            <div className="flex justify-center items-center">
              <p className="font-roboto font-semibold text-[20px] text-black mt-5">
              John Leboo
              </p>
            </div>
            <p className=" flex justify-center items-center w-[382px] text-[18px] font-[400]">
            Dog Trainer
            </p>
            <div className='w-[32%] h-[25px] flex items-end justify-around ml-[120px] mt-[30px]'>
          <FaLinkedin className='w-full h-full' />
          <FaTwitter className='w-full h-full' />
          <FaDribbble className='w-full h-full' />
        </div>
          
        </div>

        </div>


        
    </section>
      

      
      
  )
}

export default teams
