import React from "react";

const achievements = () => {
  return (
    <div className="w-full h-[480px] px-[66px] py-[110px] flex items-center justify-center max-md:px-[32px]">
      <div className="flex flex-col gap-[30px] ">
        <div className="w-full h-fit flex flex-col gap-[10px] items-center ">
        {/* <!-- Title Section --> */}
        <h2 className=" font-[700] mb-7 text-[48px] max-md:text-[32px]">Our Achievements</h2>
        <p className="mb-8 font-roboto text-center text-[18px] px-36 max-md:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        {/* <!-- Stats Section --> */}
        <div className="w-full h-[100px] flex justify-between items-center max-md:flex-wrap ">
          {/* <!-- Stat 1 --> */}
          <div className="w-[296px] h-[80px] ml-[150px] max-md:w-[50%] max-md:text-center max-md:ml-0 max-md:mb-10">
            <h2 className="font-roboto text-[40px] font-bold ">+200k</h2>
            <p className=" mt-[1px] text-[16px] font-roboto items-center ml-[25px] max-md:ml-0">
              Courses
            </p>
          </div>
          {/* <!-- Stat 2 --> */}
          <div className="w-[296px] h-[80px] max-md:w-[50%] max-md:text-center max-md:mb-10">
            <h2 className="font-roboto text-[40px] font-bold ">50k</h2>
            <p className=" mt-[1px] text-[16px] font-roboto ">
              Mentors
            </p>
          </div>
          {/* <!-- Stat 3 --> */}
          <div className="w-[296px] h-[80px] max-md:w-[50%] max-md:text-center">
            <h2 className="font-roboto text-[40px] font-bold ">370k</h2>
            <p className="mt-[1px] text-[16px] font-roboto ml-[12px] max-md:ml-0">
              Students
            </p>
          </div>
          {/* <!-- Stat 4 --> */}
          <div className="w-[296px] h-[80px] max-md:w-[50%] max-md:text-center">
            <h2 className="font-roboto text-[40px] font-bold ">100k</h2>
            <p className=" mt-[1px] text-[16px] font-roboto max-md:text-center ">
              Recognization
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default achievements;
