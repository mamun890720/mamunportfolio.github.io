import React from 'react'
import profileImage from "../Image/Profile.jpg";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
const Testimonial = () => {
  return (
    <>
       <div className="bestWorkTitle mt-10 flex items-center justify-between">
        <div className=" Line w-[40%] h-1 rounded-full bg-gradient-to-t from-[#004951] to-[#0092A2]"></div>
        <div>
          <h2 className="text-2xl text-[40px]  text-[#0092A2] font-bold">
          All review
          </h2>
        </div>
        <div className="Line w-[40%]  rounded-full  h-1 bg-gradient-to-t from-[#004951] to-[#0092A2]"></div>
      </div>
    <div className="testimonial  flex justify-center mt-20">
      <div className="items flex flex-col items-left  relative w-[600px] px-[40px] py-[20px] h-[200px] border-[1px] border-[black] rounded-tr-[50px] rounded-bl-[50px]">
        <h2 className='text-2xl font-bold  text-[#0092A2]'>Customer Name</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum fuga nobis incidunt natus, odio placeat aliquid eos odit tempora!</p>
        <div className="star mt-5">
          <ul className='flex items-center gap-5'>
            <li><FaStar className='w-7 h-7 text-orange-500' /></li>
            <li><FaStar className='w-7 h-7 text-orange-500' /></li>
            <li><FaStar className='w-7 h-7 text-orange-500' /></li>
            <li><FaStar className='w-7 h-7 text-orange-500' /></li>
            <li><FaStarHalfAlt className='w-7 h-7 text-orange-500' /></li>
          </ul>
        </div>
      <div className="testImage w-[100px] h-[100px] bg-[#E2DEDE] border-[2px] border-[#707070] rounded-full flex justify-center items-center absolute top-[-3.75rem] left-[-2.75rem]">
        <img src={profileImage} alt=""  className='w-[90px] rounded-full h-[90px]'/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Testimonial