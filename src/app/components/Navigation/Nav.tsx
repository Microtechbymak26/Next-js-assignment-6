import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaBars,
} from "react-icons/fa";
import Image from "next/image";

const Nav = () => {
  return (
    <>
      <div className="w-full h-[72px] flex items-center justify-between border-b border-black bg-[#F7F7F7] px-[50px] max-md:hidden max-md:px-[20px]">
        <div className="flex items-center gap-4">
          <span className="text-sm font-roboto">
            Phone Number: 956 742 455 678
          </span>
          <div className="h-6 w-px bg-gray-400"></div>
          <span className="text-sm font-roboto ">Email: info@ddsgnr.com</span>
        </div>

        <div className="flex w-[10%] h-[45%] justify-between items-end">
          <FaFacebook className="h-full w-[18%] cursor-pointer" />
          <FaInstagram className="h-full w-[18%] cursor-pointer" />
          <FaTwitter className="h-full w-[18%] cursor-pointer" />
          <FaLinkedin className="h-full w-[18%] cursor-pointer" />
        </div>
      </div>

      {/* second nav */}
      <div className="pt-6 ">
        <div className="w-full h-20 flex items-center justify-between px-10 border-b border-black bg-[#F7F7F7] max-md:bg-white max-md:border-b-[3px] max-md:border-black max-md:px-2">
          <div className="h-fit w-[30%]">
            <Image
              src="/image/Logo.jpg"
              alt=""
              width={183}
              height={88}
              className="h-auto pl-4"
            />
          </div>

          <div className="bg-[#FFFFFF] w-[85%] h-[44px]  flex items-center justify-between gap-8 max-md:hidden">
            <ul className="flex items-baseline justify-self-center  gap-14 pt-2.5">
              <li className="text-black ml-[40px]">Home</li>
              <li className="text-black">Courses</li>
              <li className="text-black">Services</li>
              <li className="text-black">Achievemet</li>
              <li className="text-blak text-center">AboutUs</li>
              <li className="text-black">Testimonial</li>
            </ul>
            <div className="flex gap-6  max-md:hidden">
              <button className=" text-black bg-white py-2 px-4 rounded-lg border-black border-[2px] border-spacing-2">
                Login
              </button>
              <button className=" text-white bg-black px-4 py-2 rounded-md">
                Sign Up
              </button>
            </div>
          </div>

          <div className="w-[90%] h-[80%] hidden items-center justify-end max-md:flex">
            <div className="w-[50px] h-[50px] flex items-center justify-center ml-[90px] size-30">
              <FaBars />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Nav;
