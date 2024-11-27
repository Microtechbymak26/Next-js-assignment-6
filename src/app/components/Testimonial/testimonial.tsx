import React from "react";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonial = () => {
  return (
    <>
      <div className="bg-[#f7f7f7] w-full h-[1200px] flex flex-col items-center justify-center py-[0px] px-[64px]  max-md:py-[60px] max-md:justify-start max-md:h-[1999px]">
        <div className="w-[85%] h-fit flex flex-col items-start justify-between pb-[100px]">
          <h2 className="roboto-bold font-[700] text-[48px] text-start pb-[50px] max-md:text-[42px] max-md:leading-[50px] max-md:pb-[20px]">
            Customer Testimonials
          </h2>
          <p className="roboto-regular text-[18px] text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className=" flex gap-[32px] h-[321.89px] w-[1280px] max-md:flex-col max-md:w-full max-md:gap-12 max-md:h-[500px] ">
          <div className="w-[31%] h-full border-black border-2 border-solid flex justify-between items-center max-md:w-full ">
            {/* box 1 */}
            <div className="w-[500px] h-[132px] flex items-center justify-center max-md:h-[450px]">
              <div className="ml-[25px] font-roboto font-[400] pt-[90px] max-md:pt-[20px] ">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare
                </p>

                <div className="mt-[30px] flex">
                  <Image
                    src="/image/smallimage.jpg"
                    alt="image"
                    width={56}
                    height={56}
              
                  />

                  <p className="mt-[10px] ml-[20px] font-roboto font-[600]">
                    James Nduku <br className="font-[]" />
                    Software Developer
                  </p>
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

          <div className="w-[31%] h-full border-black border-2 border-solid flex justify-between items-center max-md:w-full">
            {/* box 1 */}
            <div className="w-[500px] h-[132px] flex items-center justify-center max-md:h-[450px]">
              <div className="ml-[25px] font-roboto font-[400] pt-[90px] max-md:pt-[20px]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare
                </p>

                <div className="mt-[30px] flex">
                  <Image
                    src="/image/smallimage2.jpg"
                    alt="image"
                    width={56}
                    height={56}
                    
                  />

                  <p className="mt-[10px] ml-[20px] font-roboto font-[600]">
                    James Nduku <br className="font-[]" />
                    Software Developer
                  </p>
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

          <div className="w-[31%] h-full border-black border-2 border-solid flex justify-between items-center max-md:w-full ">
            {/* box 1 */}
            <div className="w-[500px] h-[132px] flex items-center justify-center max-md:h-[450px]">
              <div className="ml-[25px] font-roboto font-[400] pt-[90px] max-md:pt-[20px]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare
                </p>

                <div className="mt-[30px] flex">
                  <Image
                    src="/image/smallimage3.jpg"
                    alt="image"
                    width={56}
                    height={56}
                    
                  />

                  <p className="mt-[10px] ml-[20px] font-roboto font-[600]">
                    James Nduku <br className="font-[]" />
                    Software Developer
                  </p>
                </div>
              </div>
              <div className="w-full h-full flex items-center justify-start gap-[2px] pb-[190px]  ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center w-[80%] justify-between max-md:hidden">
          <div className="flex items-center justify-center gap-[8px] ">
            <div className="w-[8px] h-[8px] bg-black rounded-full"></div>

            <div className="w-[8px] h-[8px] bg-gray-400 rounded-full"></div>

            <div className="w-[8px] h-[8px] bg-gray-400 rounded-full"></div>

            <div className="w-[8px] h-[8px] bg-gray-400 rounded-full"></div>

            <div className="w-[8px] h-[8px] bg-gray-400 rounded-full"></div>
          </div>

          <div className="flex space-x-4 mt-[50px] ">
            {/* <!-- Left Circle --> */}
            <div className="flex items-center justify-center w-12 h-12 border border-black rounded-full">
              <ArrowLeft />
            </div>

            {/* <!-- Right Circle --> */}
            <div className="flex items-center justify-center w-12 h-12 border border-[#000000] rounded-full">
              <ArrowRight />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default testimonial;
