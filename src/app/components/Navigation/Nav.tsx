import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <div className="w-full h-[72px] flex items-center justify-between px-16 border-b border-black bg-[#F7F7F7]">
        <div className="flex items-center gap-4">
          <span className="text-sm font-roboto ">
            Phone Number: 956 742 455 678{" "}
          </span>
          <div className="h-6 w-px bg-gray-400"></div>
          <span className="text-sm font-roboto ">Email: info@ddsgnr.com</span>
        </div>

        <div className="flex w-[10%] h-[45%] justify-between items-end">
          <FaFacebook className="h-full w-[18%]" />
          <FaInstagram className="h-full w-[18%]" />
          <FaTwitter className="h-full w-[18%]" />
          <FaLinkedin className="h-full w-[18%]" />
        </div>
      </div>

      {/* second nav */}
      <div className="pt-6 ">
        <div className="w-full h-20 flex items-center justify-between px-15 border-b border-black bg-[#F7F7F7] ">
          <span className="pl-14">
            <img
              src="/image/Logo.jpg"
              alt="Learn Skills"
              className=" w-full object-cover"
            />
        </span>

          <div className="bg-[#FFFFFF] w-[810px] h-[44px] gap-10  pr-96 pl-96 ">
            <ul className="flex items-baseline justify-self-center  gap-14 pt-2.5">
              <li className="text-black ml-[40px]">Home</li>
              <li className="text-black">Courses</li>
              <li className="text-black">Services</li>
              <li className="text-black">Achievemet</li>
              <li className="text-black text-center">AboutUs</li>
              <li className="text-black">Testimonial</li>
            </ul>
          </div>
          <div className="flex space-x-4 pr-40">
            <button className=" text-black bg-white py-2 px-4 rounded-lg border-black border-[2px] border-spacing-2">
              Login
            </button>
            <button className=" text-white bg-black px-4 py-2 rounded-md">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Nav;
