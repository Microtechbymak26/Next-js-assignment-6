import React from "react";
import Image from "next/image";
const hero = () => {
  return (
    <>
      <div className="relative w-full flex items-center h-[800px] bg-white pl-[60px] max-md:h-[920px] max-md:flex-col max-md:pl-0">
        {/* Left Side: Text and Buttons */}
        <div className="flex-1 w-[50%] px-[150px] h-fit flex flex-col justify-center items-start font-bold pl-10 max-md:w-full max-md:px-6 max-md:py-12">
          <h1 className="h-[134px] text-[56px] leading-[67.2px] font-roboto font-[700] text-black max-md:text-[40px] max-md:leading-[50px]">
            Learn new skills online with ease
          </h1>
          <p className="h-[81px] text-[18px] pt-10 font-roboto font-400 max-md:pt-0">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="pt-20 flex gap-4 max-md:pt-6">
            <button className="px-6 py-2 bg-black text-white font-medium rounded">
              Start learning now
            </button>
            <button className="px-6 py-2 border border-gray-400 font-medium rounded">
              Explore Courses
            </button>
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="relative w-[50%] h-full flex justify-end max-md:w-full">
          <Image
            className="absolute"
            src="/image/Image.jpg"
            alt=""
            width={640}
            height={900}
          />
        </div>

      </div>

      {/* 2nd  section*/}

      
    </>
  );
};

export default hero;
