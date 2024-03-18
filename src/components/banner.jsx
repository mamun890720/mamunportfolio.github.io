import React from "react";
import profileImage from "../Image/Profile.jpg";

const Banner = () => {
  return (
    <>
      <section id="banner" className="flex justify-between pl-12 items-center">
        <div className="left flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">I am a Professional</h2>
            <h3 className="text-4xl font-bold text-[#0092A2]">Frontend</h3>
            <h1 className="text-6xl font-bold text-[#FF1757]">Web Developer</h1>
          </div>
          <div className="cv">
            <button className="px-3 py-1 rounded-full text-lg text-[#0092A2] border-[3px] border-[#0092A2] hover:bg-[#0092A2] hover:text-white transition duration-200 ease-linear">
              Download CV
            </button>
          </div>
        </div>
        <div className="right relative">
          <div className="circle  rounded-full w-[600px] shadow-inner  shadow-[#00000045] h-[600px] -z-20 bg-[#F2EFF0]"></div>
          <div className="absolute w-[220px] h-[220px] bg-[#C1C1C1] flex justify-center items-center rounded-full border-[2px] border-[#707070] top-36 left-[-60px]">
            <img className="w-[200px] border-[1px] border-[#707070] h-[200px] rounded-full" src={profileImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
