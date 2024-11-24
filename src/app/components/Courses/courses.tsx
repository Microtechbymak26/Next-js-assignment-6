import React from "react";

const courses = () => {
  return (
    <section className="w-full bg-white pt-[110px] h-fit flex flex-col items-center justify-center gap-[80px]">
      <div className="flex flex-col w-[66%] h-[20%] items-center justify-between">
        <h1 className="roboto-bold text-[56px] font-[700]">Explore Courses By Category</h1>
        <p className="text-[18px] robot-regular mt-[20px]">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>

      {/* Boxes Section */}
      <div className=" flex flex-col  gap-[40px] mt-8 h-[700px] w-[1280px] ">
        {/* Row 1 */}

        <div className="flex justify-between items-center gap-[30px] w-[410.67px] h-[132px] ">
          {/* box 1 */}
          <div className="w-[500px] h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-center">
            <div className="w-[100px] h-[100px] bg-white gap-[10px] p-[34px] rounded-[5px]">
              <div className="h-[32px] w-[32px]">
                <img
                  src="/image/minilogo1.jpg"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </div>
            <div className=" h-[57px] w-[246.67px]">
              <p className="text-[20px] font-semibold text-large leading-[30px] ml-[25px] text-[#000000]">
                Design & Development
              </p>
              <p className="ml-[25px] text-[18px] font-normal leading-[27px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>

          {/* box 2 */}
          <div className="w-[500px] h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-center">
            <div className="w-[100px] h-[100px] bg-white gap-[10px] p-[34px] rounded-[5px]">
              <div className="h-[32px] w-[32px]">
                <img
                  src="/image/minilogo2.jpg"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </div>
            <div className=" h-[57px] w-[246.67px]">
              <p className="text-[20px] font-semibold text-large leading-[30px] ml-[25px] text-[#000000]">
                Marketing
              </p>
              <p className="ml-[25px] text-[18px] font-normal leading-[27px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>

          {/* box 3 */}
          <div className="w-[500px] h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-center">
            <div className="w-[100px] h-[100px] bg-white gap-[10px] p-[34px] rounded-[5px]">
              <div className="h-[32px] w-[32px]">
                <img
                  src="/image/minilogo3.jpg"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </div>
            <div className=" h-[57px] w-[246.67px]">
              <p className="text-[20px] font-semibold text-large leading-[30px] ml-[25px] text-[#000000]">
                Development
              </p>
              <p className="ml-[25px] text-[18px] font-normal leading-[27px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex justify-between items-center gap-[30px] w-[410.67px] h-[132px] ">
          {/* box 1 */}
          <div className="w-[500px] h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-center">
            <div className="w-[100px] h-[100px] bg-white gap-[10px] p-[34px] rounded-[5px]">
              <div className="h-[32px] w-[32px]">
                <img
                  src="/image/minilogo4.jpg"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </div>
            <div className=" h-[57px] w-[246.67px]">
              <p className="text-[20px] font-semibold text-large leading-[30px] ml-[25px] text-[#000000]">
                Communication
              </p>
              <p className="ml-[25px] text-[18px] font-normal leading-[27px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>

          {/* box 2 */}
          <div className="w-[500px] h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-center">
            <div className="w-[100px] h-[100px] bg-white gap-[10px] p-[34px] rounded-[5px]">
              <div className="h-[32px] w-[32px]">
                <img
                  src="/image/minilogo5.jpg"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </div>
            <div className=" h-[57px] w-[246.67px]">
              <p className="text-[20px] font-semibold text-large leading-[30px] ml-[25px] text-[#000000]">
                Digital Marketing
              </p>
              <p className="ml-[25px] text-[18px] font-normal leading-[27px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>

          {/* box 3 */}
          <div className="w-[500px] h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-center">
            <div className="w-[100px] h-[100px] bg-white gap-[10px] p-[34px] rounded-[5px]">
              <div className="h-[32px] w-[32px]">
                <img
                  src="/image/minilogo6.jpg"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </div>
            <div className=" h-[57px] w-[246.67px]">
              <p className="text-[20px] font-semibold text-large leading-[30px] ml-[25px] text-[#000000]">
                Self Deployment
              </p>
              <p className="ml-[25px] text-[18px] font-normal leading-[27px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
        {/* Row 3 */}

        <div className="flex justify-between items-center gap-[30px] w-[410.67px] h-[132px] ">
          {/* box 1 */}
          <div className="w-[500px] h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-center">
            <div className="w-[100px] h-[100px] bg-white gap-[10px] p-[34px] rounded-[5px]">
              <div className="h-[32px] w-[32px]">
                <img
                  src="/image/minilogo7.jpg"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </div>
            <div className=" h-[57px] w-[246.67px]">
              <p className="text-[20px] font-semibold text-large leading-[30px] ml-[25px] text-[#000000]">
                Business
              </p>
              <p className="ml-[25px] text-[18px] font-normal leading-[27px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>

          {/* box 2 */}

          <div className="w-[500px] h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-center">
            <div className="w-[100px] h-[100px] bg-white gap-[10px] p-[34px] rounded-[5px]">
              <div className="h-[32px] w-[32px]">
                <img
                  src="/image/minilogo8.jpg"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </div>
            <div className=" h-[57px] w-[246.67px]">
              <p className="text-[20px] font-semibold text-large leading-[30px] ml-[25px] text-[#000000]">
                Finance
              </p>
              <p className="ml-[25px] text-[18px] font-normal leading-[27px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>

          {/* box 3 */}
          <div className="w-[500px] h-[132px] bg-[#F7F7F7] rounded-[5px] p-[16px] flex items-center justify-center">
            <div className="w-[100px] h-[100px] bg-white gap-[10px] p-[34px] rounded-[5px]">
              <div className="h-[32px] w-[32px]">
                <img
                  src="/image/minilogo9.jpg"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </div>

            <div className=" h-[57px] w-[246.67px]">
              <p className="text-[20px] font-semibold text-large leading-[30px] ml-[25px] text-[#000000]">
                Consulting
              </p>
              <p className="ml-[25px] text-[18px] font-normal leading-[27px] text-[#000000]">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
        <div className="w-[155px] h-[48px] ">
        <button className="ml-[550px] mt-[60px] border-[#000000] border-[2px] w-[155px] h-[48px] font-roboto font-[400] rounded-lg">View All Courses</button>
        </div>
      </div>
    </section>
  );
};

export default courses;
