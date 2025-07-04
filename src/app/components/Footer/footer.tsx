import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
const footer = () => {
  return (
    <div>
      <div className="w-full h-[684px] flex flex-col items-center justify-between px-[100px] py-[100px] max-md:px-2 max-md:pt-0">
        <div className="w-full h-[16%] bg-white flex items-start justify-between px-[10px] pt-[4px] max-md:gap-[18px] max-md:py-[18px] max-md:flex-col max-md:h-fit">
          <div className="flex flex-col items-start justify-between h-[50%] w-[40%] max-md:items-center max-md:w-[90%] max-md:justify-center">
            <h3 className="font-roboto text-[18px] font-[600] max:md:w-[104%] max-md:text-[20px] max-md:justify-center">
              Subscribe to our newsettler
            </h3>
            <h4 className="roboto-regular text-[16px] max-md:text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h4>
          </div>
          <div className="w-[34%] h-[50%] flex items-start justify-between max-md:flex-col max-md:w-[100%] max-md:items-center max-md:gap-[16px] space-x-6">
            <input
              className="w-[300px] h-[44px] border-2 border-solid border-black rounded-[5px] p-[12px] text-[16px] roboto-regular max-md:w-full"
              placeholder="Enter your email"
              type="email"
              name="mail"
              id="eMail"
            />
            <button className="w-[120px] h-[44px] rounded-[5px] border-2 border-black border-solid bg-white flex items-center justify-center py-[12px] px-[24px] roboto-regular text-[16px] text-black max-md:w-full">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full h-[48%] flex items-start justify-between bg-white max-md:flex-col max-md:items-center">
          <div className="w-[23%] h-[45px] flex flex-col items-start justify-start  pr-[40px] max-md:hidden">
            <Image src="/image/Logo.jpg" alt="" width={123} height={138} />
          </div>
          <div className="w-[23%] h-full flex flex-col items-start justify-start">
            <h4 className="roboto-bold text-[16px] h-[20%] font-[700] cursor-pointer max-md:pl-[15px] max-md:mt-6">
              Courses
            </h4>
            <ul className="w-full flex flex-col items-start h-[73%] justify-between max-md:h-[210px] max-md:items-center max-md:justify-around">
              <li className="roboto-regular text-[14px]">Business</li>
              <li className="roboto-regular text-[14px]">Development</li>
              <li className="roboto-regular text-[14px]">Technology</li>
              <li className="roboto-regular text-[14px]">Design</li>
              <li className="roboto-regular text-[14px]">Programming</li>
            </ul>
          </div>
          <div className="w-[23%] h-full flex flex-col items-start justify-start max-md:pl-[10px] max-md:mt-6">
            <h4 className="roboto-bold text-[16px] h-[20%] font-[700] cursor-pointer ">
              Resourses
            </h4>
            <ul className="w-full flex flex-col items-start h-[73%] justify-between  max-md:h-[210px] max-md:items-center max-md:justify-around">
              <li className="roboto-regular text-[14px]">Career</li>
              <li className="roboto-regular text-[14px]">Resume</li>
              <li className="roboto-regular text-[14px]">Learning</li>
              <li className="roboto-regular text-[14px]">Interview</li>
              <li className="roboto-regular text-[14px] ">Jobs</li>
            </ul>
          </div>
          <div className="w-[23%] h-full flex flex-col items-start justify-start ">
            <h4 className="roboto-bold text-[16px] h-[20%] font-[700] cursor-pointer max-md:gap-[7px] max-md:pl-[10px] max-md:mt-6">
              About Us
            </h4>
            <ul className="w-full flex flex-col items-start h-[73%] justify-between  max-md:h-[210px] max-md:items-center max-md:justify-around">
              <li className="roboto-regular text-[14px]">Contact</li>
              <li className="roboto-regular text-[14px]">Help/Support</li>
              <li className="roboto-regular text-[14px]">FAQ</li>
              <li className="roboto-regular text-[14px]">
                TermsAndConditions
              </li>
              <li className="roboto-regular text-[14px]">Partners</li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[12%] bg-white border-[#000000] border-t-[3px] border-solid flex justify-between items-end max-md:py-[24px] max-md:h-fit max-md:hidden ">
          <ul className="w-[45%] h-[45%] flex items-center justify-between px-[10px] max-md:flex-col max-md:gap-[20px]">
            <li className="flex items-center justify-center text-[12px] roboto-regular ">
              2023 Ddsgnr. All right reserved.
            </li>
            <li className="flex items-center justify-center text-[12px] roboto-regular underline cursor-pointer">
              Privacy Policy
            </li>
            <li className="flex items-center justify-center text-[12px] roboto-regular underline cursor-pointer">
              Terms of Services
            </li>
            <li className="flex items-center justify-center text-[12px] roboto-regular underline cursor-pointer">
              Cookies Setting
            </li>
          </ul>
          <div className="flex w-[10%] h-[45%] justify-between items-end">
            <FaFacebook className="h-full w-[18%] cursor-pointer" />
            <FaInstagram className="h-full w-[18%] cursor-pointer" />
            <FaTwitter className="h-full w-[18%] cursor-pointer" />
            <FaLinkedin className="h-full w-[18%] cursor-pointer" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default footer;
