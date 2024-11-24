import React from "react";

const achievements = () => {
  return (
    <div className="w-full h-[480px] px-[66px] py-[110px] flex items-center justify-center">
      <div className="flex flex-col gap-[30px] ">
        <div className="w-full h-fit flex flex-col gap-[10px] items-center ">
        {/* <!-- Title Section --> */}
        <h2 className=" font-[700] mb-7 text-[48px]">Our Achievements</h2>
        <p className="mb-8 font-roboto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        {/* <!-- Stats Section --> */}
        <div className="w-full h-[100px] flex justify-between items-center ">
          {/* <!-- Stat 1 --> */}
          <div className="w-[296px] h-[80px] ml-[150px]">
            <h2 className="font-roboto text-[40px] font-bold ">+200k</h2>
            <p className=" mt-[1px] text-[16px] font-roboto items-center ml-[25px]">
              Courses
            </p>
          </div>
          {/* <!-- Stat 2 --> */}
          <div className="w-[296px] h-[80px] ">
            <h2 className="font-roboto text-[40px] font-bold ">50k</h2>
            <p className=" mt-[1px] text-[16px] font-roboto size-[400px]">
              Mentors
            </p>
          </div>
          {/* <!-- Stat 3 --> */}
          <div className="w-[296px] h-[80px]">
            <h2 className="font-roboto text-[40px] font-bold ">370k</h2>
            <p className="mt-[1px] text-[16px] font-roboto size-[400px] ml-[12px]">
              Students
            </p>
          </div>
          {/* <!-- Stat 4 --> */}
          <div className="w-[296px] h-[80px]">
            <h2 className="font-roboto text-[40px] font-bold ">100k</h2>
            <p className="w-[59px] h-[24px] mt-[1px] text-[16px] font-roboto size-[400px]">
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
