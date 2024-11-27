import React from "react";
import Image from "next/image"; 

const programs = () => {
  return (
    <section className="w-full h-fit bg-[#ffffff] flex flex-col justify-center items-center py-[210px] gap-[60px]">
      <div className="flex flex-col w-[66%] h-[20%] items-center justify-between">
        <h1 className="font-roboto font-[700] text-[56px]">Courses</h1>
        <p className="text-[18px] robot-regular mt-[30px]">
          Your Ultimate Guide to learning
        </p>
      </div>
      <div className="w-[336px] h-[40px]  flex flex-row gap-[1px] items-center">
        <div className="w-[87px] h-[40px] border-b border-solid pb-[8px] pt-[8px] pr-[16px] pl-[16px] gap-[8px] text-[16px] text-[#000000]">
          Popular
        </div>
        <div className="w-[140px] h-[40px] pb-[8px] pt-[8px] pr-[16px] pl-[16px] gap-[8px] text-[16px] text-[#000000]">
          Recommended
        </div>
        <div className="w-[140px] h-[40px] pb-[8px] pt-[8px] pr-[16px] pl-[16px] gap-[8px] text-[16px] text-[#000000]">
          Best Price
        </div>
      </div>

      <div className="w-full h-[38%] flex items-center justify-between max-md:flex-col max-md:gap-12">
        {/* card1 */}
        <div className="gap-[2px] h-[534px] ">
          <Image
          src="/image/card1.jpg"
          alt=""
          width={400}
          height={500}
          />
          <div className="bg-[#F7F7F7] pt-[9px] h-[250px]">
            <div className="flex justify-between items-center">
              <p className="font-roboto font-semibold text-black mt-5">
                Design
              </p>
              <p className="w-[48px] ml-[20px] left-0 mt-5">5.0</p>
            </div>
            <h5 className="text-[24px] font-roboto font-[700] mt-4">
              UX/UI Design 201
            </h5>
            <p className="h-[48px] w-[382px] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli.Suspendisse
              varius enim in eros.
            </p>
            <div className="mt-9">
              <button className="h-[40px] rounded-[5px] flex items-center justify-center border-solid border-2 border-black px-[20px] py-[8px] text-[16px] text-black">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div className="gap-[2px] h-[534px] w-[416px]">
          
          <Image
          src="/image/card2.jpg"
          alt=""
          width={400}
          height={50}
          />

          <div className="bg-[#F7F7F7] pt-[9px] h-[250px] w-[400px]">
            <div className="flex justify-between items-center">
              <p className="font-roboto font-semibold text-black mt-5 ml-4">
                Programmimg
              </p>
              <p className="w-[48px] ml-[20px] left-0 mt-5">5.0</p>
            </div>
            <h5 className="text-[24px] font-roboto font-[700] mt-4 ml-4">
              Introduction to Python
            </h5>
            <p className="h-[48px] w-[382px] mt-2 ml-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli.Suspendisse
              varius enim in eros.
            </p>
            <div className="mt-9">
              <button className="h-[40px] rounded-[5px] flex items-center justify-center border-solid border-2 border-black px-[20px] py-[8px] text-[16px] text-black ml-4">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
        {/* card3 */}
        <div className="gap-[2px] h-[534px]">
        
          <Image
          src="/image/card3.jpg"
          alt=""
          width={400}
          height={500}
          />

          <div className="bg-[#F7F7F7] pt-[9px] h-[250px]">
            <div className="flex justify-between items-center">
              <p className="font-roboto font-semibold text-black mt-5 ml-4">
                Business
              </p>
              <p className="w-[48px] ml-[20px] left-0 mt-5">5.0</p>
            </div>
            <h5 className="text-[24px] font-roboto font-[700] mt-4 ml-4">
              Data Analysis for Beginners
            </h5>
            <p className="h-[48px] w-[382px] mt-2 ml-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli.Suspendisse
              varius enim in eros.
            </p>
            <div className="mt-9">
              <button className="h-[40px] rounded-[5px] flex items-center justify-center border-solid border-2 border-black px-[20px] py-[8px] text-[16px] text-black ml-4">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[38%] flex items-center justify-between max-md:hidden ">
        {/* card1 */}
        <div className="gap-[2px] h-[534px]">
        
          <Image
          src="/image/card4.jpg"
          alt=""
          width={400}
          height={500}
          />

          <div className="bg-[#F7F7F7] pt-[9px] h-[250px]">
            <div className="flex justify-between items-center">
              <p className="font-roboto font-semibold text-black mt-5">Art</p>
              <p className="w-[48px] ml-[20px] left-0 mt-5">5.0</p>
            </div>
            <h5 className="text-[24px] font-roboto font-[700] mt-4">
              Art Specialization
            </h5>
            <p className="h-[48px] w-[382px] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli.Suspendisse
              varius enim in eros.
            </p>
            <div className="mt-9">
              <button className="h-[40px] rounded-[5px] flex items-center justify-center border-solid border-2 border-black px-[20px] py-[8px] text-[16px] text-black">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div className="gap-[32px] h-[534px]">
       
          <Image
          src="/image/card5.jpg"
          alt=""
          width={400}
          height={500}
          />

          <div className="bg-[#F7F7F7] pt-[9px] h-[250px]">
            <div className="flex justify-between items-center">
              <p className="font-roboto font-semibold text-black mt-5 ml-4">
                Law
              </p>
              <p className="w-[48px] ml-[20px] left-0 mt-5">5.0</p>
            </div>
            <h5 className="text-[24px] font-roboto font-[700] mt-4 ml-4">
              Rule of Law
            </h5>
            <p className="h-[48px] w-[382px] mt-2 ml-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli.Suspendisse
              varius enim in eros.
            </p>
            <div className="mt-9">
              <button className="h-[40px] rounded-[5px] flex items-center justify-center border-solid border-2 border-black px-[20px] py-[8px] text-[16px] text-black ml-4">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
        {/* card3 */}
        <div className="gap-[32px] h-[534px]">
        
          <Image
          src="/image/card6.jpg"
          alt=""
          width={400}
          height={500}
          />

          <div className="bg-[#F7F7F7] pt-[9px] h-[250px]">
            <div className="flex justify-between items-center">
              <p className="font-roboto font-semibold text-black mt-5 ml-4">
                Tech
              </p>
              <p className="w-[48px] ml-[20px] left-0 mt-5">5.0</p>
            </div>
            <h5 className="text-[24px] font-roboto font-[700] mt-4 ml-4">
              Introduction to webflow
            </h5>
            <p className="h-[48px] w-[382px] mt-2 ml-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing eli.Suspendisse
              varius enim in eros.
            </p>
            <div className="mt-9 ">
              <button className="h-[40px] rounded-[5px] flex items-center justify-center border-solid border-2 border-black px-[20px] py-[8px] text-[16px] text-black ml-4">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
        <div className="w-[155px] h-[48px] ">
        <button className="mt-[60px] border-[#000000] border-[2px] rounded-lg w-[155px] h-[48px] font-roboto font-[400]">View All Courses</button>
        </div>
    </section>
  );
};

export default programs;
