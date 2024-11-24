import React from "react";
import { FaStar } from "react-icons/fa6";

const testimonial = () => {
  return (
    <>
      <div className="bg-[#f7f7f7] w-full h-[1200px] flex flex-col items-center justify-center py-[112px] px-[64px]">
        <div className="w-[90%] h-fit flex flex-col items-start justify-between pb-[100px]">
          <h2 className="roboto-bold font-[700] text-[48px] text-start pb-[50px]">
            Customer Testimonials
          </h2>
          <p className="roboto-regular text-[18px] text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className=" flex gap-[32px] h-[321.89px] w-[1280px]">
          <div className="w-[31%] h-full border-black border-2 border-solid flex justify-between items-center ">
            {/* box 1 */}
            <div className="w-[500px] h-[132px] flex items-center justify-center ">
            <div className="ml-[25px] font-roboto font-[400] pt-[90px]" >
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>

               <div className="mt-[30px] flex">
              <img src="/image/smallimage.jpg" alt="" className="bg-[#f7f7f7]"/>
              <p className="mt-[10px] ml-[20px] font-roboto font-[600]">James Nduku <br className="font-[]"/>Software Developer</p>
            
              </div>

        
              </div>
              <div className="w-full h-full flex items-center justify-start gap-[2px] pb-[190px] ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>

          <div className="w-[31%] h-full border-black border-2 border-solid flex justify-between items-center">
            {/* box 1 */}
            <div className="w-[500px] h-[132px] flex items-center justify-center">
              <div className="ml-[25px] font-roboto font-[400] pt-[90px]" >
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>

               <div className="mt-[30px] flex">
              <img src="/image/smallimage2.jpg" alt="" className="bg-[#f7f7f7]"/>
              <p className="mt-[10px] ml-[20px] font-roboto font-[600]">James Nduku <br className="font-[]"/>Software Developer</p>
            
              </div>

        
              </div>
              <div className="w-full h-full flex items-center justify-start gap-[2px] pb-[190px] ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
             
            </div>
          </div>

          <div className="w-[31%] h-full border-black border-2 border-solid flex justify-between items-center ">
            {/* box 1 */}
            <div className="w-[500px] h-[132px] flex items-center justify-center">
            <div className="ml-[25px] font-roboto font-[400] pt-[90px]" >
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>

               <div className="mt-[30px] flex">
              <img src="/image/smallimage3.jpg" alt="" className="bg-[#f7f7f7]"/>
              <p className="mt-[10px] ml-[20px] font-roboto font-[600]">James Nduku <br className="font-[]"/>Software Developer</p>
            
              </div>

        
              </div>
              <div className="w-full h-full flex items-center justify-start gap-[2px] pb-[190px] ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default testimonial;
