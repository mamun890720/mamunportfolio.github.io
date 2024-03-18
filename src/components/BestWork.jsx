import React from "react";

const BestWork = () => {
  return (
    <>
      <div className="bestWorkTitle mt-28 flex items-center justify-between">
        <div className=" Line w-[40%] h-1 rounded-full bg-gradient-to-t from-[#004951] to-[#0092A2]"></div>
        <div>
          <h2 className="text-2xl text-[40px]  text-[#0092A2] font-bold">
            MY BEST WORKS
          </h2>
        </div>
        <div className="Line w-[40%]  rounded-full  h-1 bg-gradient-to-t from-[#004951] to-[#0092A2]"></div>
      </div>

      <div className="bestWork mt-10 flex justify-center gap-16 ">
        <div className="left w-[45%] p-2 h-[300px] bg-white shadow-inner shadow-[#0000006c] rounded-xl">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl text-[#0092A2] font-semibold">My Best Work Title IS here</h2>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </p>
            <a href="#" className="w-[200px] h-8 flex justify-center items-center  px-5 text-white rounded-full   bg-gradient-to-b from-[#0092A2] to-[#0C454B]">All My Work</a>
          </div>
        </div>
        <div className="right flex gap-5 items-center">
          <div className="w-[300px] h-[310px] bg-white shadow-lg shadow-[#0000003d] rounded-lg flex justify-center items-center border ">
            <div className="w-[280px] h-[290px] bg-[#F3F2F2]  rounded-lg border-[3px] border-[#707070]"></div>
          </div>
          <div className="w-[300px] h-[310px] bg-white shadow-lg shadow-[#0000003d] rounded-lg flex justify-center items-center border ">
            <div className="w-[280px] h-[290px] bg-[#F3F2F2]  rounded-lg border-[3px] border-[#707070]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestWork;
