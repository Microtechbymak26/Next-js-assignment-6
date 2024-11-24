import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const footer = () => {
  return (
    <div>
      <div className='w-full h-[684px] flex flex-col items-center justify-between px-[100px] py-[100px]'>
      <div className='w-full h-[16%] bg-white flex items-start justify-between px-[10px] pt-[4px] max-md:gap-[18px] max-md:py-[18px] max-md:flex-col max-md:h-fit'>
    
        <div className='flex flex-col items-start justify-between h-[50%] w-[40%] max-md:items-center max-md:w-[90%] max-md:justify-center'> 
          <h3 className='font-roboto text-[18px] font-[600]'>Subscribe to our newsettler</h3>
          <h4 className='roboto-regular text-[16px] max-md:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </div>
        <div className='w-[34%] h-[50%] flex items-start justify-between max-md:flex-col max-md:w-[100%] max-md:items-center max-md:gap-[16px]'>
          <input className='w-[300px] h-[44px] border-2 border-solid border-black rounded-[5px] p-[12px] text-[16px] roboto-regular max-md:w-full' placeholder='Enter your email' type="email" name="mail" id="eMail" />
          <button className='w-[120px] h-[44px] rounded-[5px] border-2 border-black border-solid bg-white flex items-center justify-center py-[12px] px-[24px] roboto-regular text-[16px] text-black max-md:w-full'>Subscribe</button>
        </div>
      </div>
      <div className='w-full h-[48%] flex items-start justify-between bg-white'>
        <div className='w-[23%] h-[45px] flex flex-col items-start justify-start relative pr-[400px]'>
         <span className='pl-14'>  
        <svg width="131" height="42" viewBox="0 0 131 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7929 9.59521V9.59626C15.776 9.62534 12.2955 15.6292 7.95067 22.9595C3.59532 30.3077 0 36.1906 0 36.1906L12.3315 36.1365L12.3323 36.1364L12.3297 36.1459C18.3172 36.03 23.7182 32.0934 25.3119 26.1453C25.8102 24.286 25.8853 22.4143 25.5964 20.6255C24.8043 15.3582 20.9149 11.0745 15.7929 9.59521Z" fill="black"/>
<path d="M22.6077 5.80933V5.81037C22.5908 5.83945 19.1102 11.8433 14.7654 19.1736C10.4101 26.5218 6.81476 32.4047 6.81476 32.4047L19.1462 32.3506L19.147 32.3505L19.1445 32.36C25.132 32.2441 30.5329 28.3075 32.1267 22.3594C32.6249 20.5001 32.7001 18.6284 32.4111 16.8396C31.619 11.5724 27.7297 7.28859 22.6077 5.80933Z" fill="#10F2C5"/>
<path d="M48.6479 30H42.1854V11.7696H48.7014C50.5351 11.7696 52.1136 12.1346 53.437 12.8645C54.7603 13.5885 55.7781 14.63 56.4902 15.989C57.2083 17.3479 57.5673 18.974 57.5673 20.867C57.5673 22.766 57.2083 24.398 56.4902 25.7629C55.7781 27.1278 54.7544 28.1752 53.4192 28.9051C52.0899 29.635 50.4995 30 48.6479 30ZM46.0398 26.6975H48.4877C49.6271 26.6975 50.5855 26.4958 51.3629 26.0922C52.1462 25.6828 52.7338 25.0507 53.1254 24.1962C53.523 23.3357 53.7218 22.226 53.7218 20.867C53.7218 19.5199 53.523 18.4191 53.1254 17.5645C52.7338 16.71 52.1492 16.081 51.3718 15.6774C50.5944 15.2739 49.636 15.0721 48.4966 15.0721H46.0398V26.6975ZM65.3895 30.2225C64.351 30.2225 63.4104 29.9555 62.5677 29.4214C61.731 28.8814 61.0663 28.0891 60.5738 27.0447C60.0872 25.9943 59.8439 24.7066 59.8439 23.1814C59.8439 21.6147 60.0961 20.3122 60.6005 19.2736C61.1049 18.2292 61.7755 17.4488 62.6122 16.9325C63.4549 16.4103 64.3777 16.1492 65.3806 16.1492C66.1461 16.1492 66.7841 16.2798 67.2944 16.5409C67.8107 16.796 68.2261 17.1165 68.5407 17.5022C68.8611 17.882 69.1044 18.2559 69.2706 18.6238H69.3863V11.7696H73.1695V30H69.4308V27.8102H69.2706C69.0926 28.19 68.8403 28.5669 68.514 28.9407C68.1935 29.3086 67.7751 29.6143 67.2588 29.8576C66.7485 30.1009 66.1254 30.2225 65.3895 30.2225ZM66.5912 27.2049C67.2025 27.2049 67.7188 27.0388 68.1401 26.7064C68.5674 26.3682 68.8938 25.8964 69.1193 25.2911C69.3507 24.6858 69.4664 23.9766 69.4664 23.1636C69.4664 22.3506 69.3537 21.6444 69.1282 21.0451C68.9027 20.4457 68.5763 19.9828 68.149 19.6564C67.7217 19.33 67.2025 19.1668 66.5912 19.1668C65.9681 19.1668 65.4429 19.336 65.0157 19.6742C64.5884 20.0125 64.265 20.4813 64.0454 21.0807C63.8258 21.68 63.716 22.3743 63.716 23.1636C63.716 23.9588 63.8258 24.662 64.0454 25.2733C64.2709 25.8786 64.5943 26.3533 65.0157 26.6975C65.4429 27.0358 65.9681 27.2049 66.5912 27.2049ZM87.6634 20.2261L84.1918 20.4397C84.1324 20.143 84.0049 19.876 83.809 19.6386C83.6132 19.3953 83.355 19.2024 83.0346 19.06C82.7201 18.9116 82.3432 18.8375 81.9041 18.8375C81.3166 18.8375 80.8211 18.9621 80.4175 19.2113C80.014 19.4546 79.8122 19.781 79.8122 20.1905C79.8122 20.5169 79.9428 20.7928 80.2039 21.0183C80.465 21.2439 80.9131 21.4248 81.548 21.5613L84.0227 22.0598C85.352 22.3328 86.343 22.7719 86.9958 23.3773C87.6486 23.9826 87.9749 24.7778 87.9749 25.7629C87.9749 26.659 87.7109 27.4453 87.1827 28.1218C86.6605 28.7983 85.9424 29.3265 85.0285 29.7062C84.1206 30.0801 83.0732 30.267 81.8863 30.267C80.0763 30.267 78.6343 29.8902 77.5601 29.1366C76.492 28.377 75.8659 27.3444 75.6819 26.0388L79.4117 25.843C79.5244 26.3949 79.7974 26.8162 80.2306 27.107C80.6638 27.3918 81.2187 27.5343 81.8952 27.5343C82.5598 27.5343 83.0939 27.4067 83.4975 27.1515C83.9069 26.8904 84.1146 26.5551 84.1206 26.1456C84.1146 25.8014 83.9693 25.5196 83.6844 25.3C83.3996 25.0745 82.9604 24.9024 82.367 24.7837L79.9992 24.3119C78.6639 24.0449 77.6699 23.582 77.0172 22.9233C76.3703 22.2646 76.0469 21.4248 76.0469 20.4041C76.0469 19.5259 76.2843 18.7692 76.759 18.1342C77.2397 17.4993 77.9132 17.0097 78.7797 16.6655C79.652 16.3213 80.6727 16.1492 81.8418 16.1492C83.5687 16.1492 84.9277 16.5142 85.9187 17.2441C86.9157 17.974 87.4972 18.968 87.6634 20.2261ZM96.5227 35.4121C95.2942 35.4121 94.2409 35.243 93.3626 34.9047C92.4903 34.5724 91.7959 34.1184 91.2796 33.5428C90.7634 32.9672 90.4281 32.3203 90.2738 31.6023L93.781 31.1305C93.8878 31.4035 94.0569 31.6587 94.2884 31.896C94.5198 32.1334 94.8254 32.3233 95.2052 32.4657C95.591 32.6141 96.0598 32.6883 96.6117 32.6883C97.4365 32.6883 98.116 32.4865 98.6501 32.083C99.1901 31.6854 99.4602 31.0177 99.4602 30.0801V27.5788H99.2999C99.1338 27.9586 98.8845 28.3176 98.5522 28.6559C98.2199 28.9941 97.7926 29.2701 97.2704 29.4837C96.7482 29.6973 96.1251 29.8042 95.4011 29.8042C94.3744 29.8042 93.4398 29.5668 92.5971 29.092C91.7603 28.6114 91.0927 27.8785 90.5942 26.8934C90.1017 25.9023 89.8554 24.6502 89.8554 23.1369C89.8554 21.588 90.1076 20.2944 90.612 19.2558C91.1165 18.2173 91.787 17.4399 92.6238 16.9236C93.4665 16.4073 94.3893 16.1492 95.3922 16.1492C96.1577 16.1492 96.7986 16.2798 97.3149 16.5409C97.8312 16.796 98.2466 17.1165 98.5611 17.5022C98.8816 17.882 99.1278 18.2559 99.2999 18.6238H99.4424V16.3272H103.208V30.1335C103.208 31.2967 102.923 32.2699 102.353 33.0532C101.783 33.8366 100.994 34.4241 99.9854 34.8157C98.9824 35.2133 97.8282 35.4121 96.5227 35.4121ZM96.6028 26.9557C97.214 26.9557 97.7303 26.8043 98.1516 26.5017C98.5789 26.1931 98.9053 25.754 99.1308 25.1843C99.3622 24.6086 99.478 23.9202 99.478 23.1191C99.478 22.318 99.3652 21.6237 99.1397 21.0361C98.9142 20.4427 98.5878 19.9828 98.1605 19.6564C97.7333 19.33 97.214 19.1668 96.6028 19.1668C95.9797 19.1668 95.4545 19.336 95.0272 19.6742C94.5999 20.0065 94.2765 20.4694 94.0569 21.0629C93.8374 21.6563 93.7276 22.3417 93.7276 23.1191C93.7276 23.9084 93.8374 24.5908 94.0569 25.1665C94.2824 25.7362 94.6059 26.1783 95.0272 26.4928C95.4545 26.8014 95.9797 26.9557 96.6028 26.9557ZM110.017 22.0954V30H106.225V16.3272H109.839V18.7396H110C110.302 17.9443 110.81 17.3153 111.522 16.8524C112.234 16.3836 113.097 16.1492 114.112 16.1492C115.062 16.1492 115.889 16.3569 116.596 16.7723C117.302 17.1877 117.851 17.7812 118.242 18.5526C118.634 19.3182 118.83 20.232 118.83 21.2943V30H115.038V21.9708C115.044 21.1341 114.83 20.4813 114.397 20.0125C113.964 19.5377 113.367 19.3003 112.608 19.3003C112.097 19.3003 111.646 19.4101 111.255 19.6297C110.869 19.8493 110.566 20.1697 110.347 20.5911C110.133 21.0065 110.023 21.5079 110.017 22.0954ZM121.819 30V16.3272H125.495V18.7128H125.637C125.887 17.8642 126.305 17.2233 126.892 16.7901C127.48 16.351 128.157 16.1314 128.922 16.1314C129.112 16.1314 129.317 16.1433 129.536 16.167C129.756 16.1907 129.949 16.2234 130.115 16.2649V19.6297C129.937 19.5763 129.691 19.5288 129.376 19.4873C129.061 19.4457 128.774 19.425 128.513 19.425C127.955 19.425 127.456 19.5466 127.017 19.7899C126.584 20.0273 126.24 20.3596 125.985 20.7869C125.735 21.2142 125.611 21.7067 125.611 22.2646V30H121.819Z" fill="black"/>
</svg> 
        </span> 
        </div>
        <div className='w-[23%] h-full flex flex-col items-start justify-start'>
          <h4 className='roboto-bold text-[16px] h-[20%] font-[700]'>Courses</h4>
          <ul className='w-full flex flex-col items-start h-[73%] justify-between'>
            <li className='roboto-regular text-[14px]'>Business</li>
            <li className='roboto-regular text-[14px]'>Development</li>
            <li className='roboto-regular text-[14px]'>Technology</li>
            <li className='roboto-regular text-[14px]'>Design</li>
            <li className='roboto-regular text-[14px]'>Programming</li>
          </ul>
        </div>
        <div className='w-[23%] h-full flex flex-col items-start justify-start'>
          <h4 className='roboto-bold text-[16px] h-[20%] font-[700]'>Resourses</h4>
          <ul className='w-full flex flex-col items-start h-[73%] justify-between'>
            <li className='roboto-regular text-[14px]'>Career</li>
            <li className='roboto-regular text-[14px]'>Resume</li>
            <li className='roboto-regular text-[14px]'>Learning</li>
            <li className='roboto-regular text-[14px]'>Interview</li>
            <li className='roboto-regular text-[14px]'>Jobs</li>
          </ul>
        </div>
        <div className='w-[23%] h-full flex flex-col items-start justify-start'>
          <h4 className='roboto-bold text-[16px] h-[20%] font-[700]'>About Us</h4>
          <ul className='w-full flex flex-col items-start h-[73%] justify-between'>
            <li className='roboto-regular text-[14px]'>Contact</li>
            <li className='roboto-regular text-[14px]'>Help/Support</li>
            <li className='roboto-regular text-[14px]'>FAQ</li>
            <li className='roboto-regular text-[14px]'>Terms And Conditions</li>
            <li className='roboto-regular text-[14px]'>Partners</li>
          </ul>
        </div>
      </div>
      <div className='w-full h-[12%] bg-white border-[#000000] border-t-[3px] border-solid flex justify-between items-end'>
        <ul className='w-[45%] h-[45%] flex items-center justify-between px-[10px]'>
          <li className='flex items-center justify-center text-[12px] roboto-regular'>2023 Ddsgnr. All right reserved.</li>
          <li className='flex items-center justify-center text-[12px] roboto-regular underline'>Privacy Policy</li>
          <li className='flex items-center justify-center text-[12px] roboto-regular underline'>Terms of Services</li>
          <li className='flex items-center justify-center text-[12px] roboto-regular underline'>Cookies Setting</li>
        </ul>
        <div className='flex w-[10%] h-[45%] justify-between items-end'>
          <FaFacebook className='h-full w-[18%]' />
          <FaInstagram className='h-full w-[18%]' />
          <FaTwitter className='h-full w-[18%]' />
          <FaLinkedin className='h-full w-[18%]' />
        </div>
      </div>
    </div>
    </div>
  )
}

export default footer
