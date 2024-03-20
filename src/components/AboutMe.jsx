import React from "react";

const AboutMe = () => {
  return (
    <>
      <div id="aboutMe"></div>
      <div className="bestWorkTitle mt-10 flex items-center justify-between">
        <div className=" Line w-[40%] h-1 rounded-full bg-gradient-to-t from-[#004951] to-[#0092A2]"></div>
        <div>
          <h2 className="text-2xl text-[40px]  text-[#0092A2] font-bold">
            ABOUT ME
          </h2>
        </div>
        <div className="Line w-[40%]  rounded-full  h-1 bg-gradient-to-t from-[#004951] to-[#0092A2]"></div>
      </div>
      <div className="left w-[90%] hover:bg-gradient-to-t from-sky-400 to-sky-800 transition-color duration-200 ease-in-out cursor-pointer hover:text-white p-2 h-[200px] flex items-center mx-auto mt-5 bg-white shadow-inner  shadow-[#0000006c] rounded-xl">
        <div className="flex flex-col gap-8 ">
          <h2 className="text-3xl hover:text-white text-[#0092A2] font-bold">
            Short description About Me
          </h2>
          <p className="text-lg">
            Hello there! I'm a dedicated and skilled frontend web developer with
            extensive expertise in crafting beautiful, responsive, and
            user-friendly websites and web applications. With a keen eye for
            design and a passion for clean, efficient code, I bring a wealth of
            experience to every project I undertake.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
