import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const Myskills = () => {

  return (
    <>
      <div className="bestWorkTitle mt-10 flex items-center justify-between">
        <div className=" Line w-[40%] h-1 rounded-full bg-gradient-to-t from-[#004951] to-[#0092A2]"></div>
        <div>
          <h2 className="text-2xl text-[40px]  text-[#0092A2] font-bold">
            My Skills
          </h2>
        </div>
        <div className="Line w-[40%]  rounded-full  h-1 bg-gradient-to-t from-[#004951] to-[#0092A2]"></div>
      </div>

      <div className="skill flex justify-center items-center gap-20 mt-24">
        <div className="html">
          <div className="outer">
            <div className="inner">
              <FaHtml5 className="w-8 h-8 text-orange-600" />
              <h2
                className="number text-3xl font-bold text-orange-600"
              >82</h2>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
              className="absolute top-0 left-0"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#49fc03" />
                  <stop offset="100%" stopColor="#03fc8c" />
                </linearGradient>
              </defs>
              <circle
                className="htmls"
                cx="80"
                cy="80"
                r="70"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="css">
          <div className="outer">
            <div className="inner">
              <FaCss3Alt className="w-8 h-8 text-[#24a7ff]" />
              <h2
                className=" number text-3xl font-bold text-[#24a7ff]"
              >75</h2>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
              className="absolute top-0 left-0"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#49fc03" />
                  <stop offset="100%" stopColor="#03fc8c" />
                </linearGradient>
              </defs>
              <circle
                className="CSS"
                cx="80"
                cy="80"
                r="70"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="css">
          <div className="outer">
            <div className="inner">
              <SiJavascript className="w-8 h-8 text-[#2e77ff]" />
              <h2
                className=" number text-3xl font-bold text-[#2e77ff]"
              >75</h2>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
              className="absolute top-0 left-0"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#49fc03" />
                  <stop offset="100%" stopColor="#03fc8c" />
                </linearGradient>
              </defs>
              <circle
                className="JS"
                cx="80"
                cy="80"
                r="70"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myskills;
