import React from "react";
import { MdOutlineWbSunny } from "react-icons/md";

const header = () => {
  return (
    <>
      <header className="w-full h-[60px] bg-white sticky top-0 z-50 px-10 flex items-center justify-between">
        <div className="logo">
          <h2 className="text-2xl font-bold">AL MAMUN</h2>
        </div>
        <nav className="flex gap-5 items-center">
          <ul className="flex items-center gap-5">
            <li>
              <a
                className="hover:text-[#C20948] relative before:contents'' before:absolute before:bottom-[-6px] before:left-0 before:w-0 before:h-1 before:rounded-full before:bg-[#C20948] hover:before:w-full"
                href="/home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#C20948] relative before:contents'' before:absolute before:bottom-[-6px] before:left-0 before:w-0 before:h-1 before:rounded-full before:bg-[#C20948] hover:before:w-full"
                href="/myWork"
              >
                My Work
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#C20948] relative before:contents'' before:absolute before:bottom-[-6px] before:left-0 before:w-0 before:h-1 before:rounded-full before:bg-[#C20948] hover:before:w-full"
                href="/aboutMe"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#C20948] relative before:contents'' before:absolute before:bottom-[-6px] before:left-0 before:w-0 before:h-1 before:rounded-full before:bg-[#C20948] hover:before:w-full"
                href="/contactMe"
              >
                Contact Me
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#C20948] relative before:contents'' before:absolute before:bottom-[-6px] before:left-0 before:w-0 before:h-1 before:rounded-full before:bg-[#C20948] hover:before:w-full"
                href="/home"
              >
                Help & Support
              </a>
            </li>
          </ul>
          <div className="dark relative">
            <input type="checkbox" className="appearance-none w-[80px] h-[29px] bg-[#E6E6E6] rounded-full shadow-inner  shadow-[#00000045] relative before:bg-contain before:absolute before:top-[-1px] before:left-0 before:w-8 before:h-8 before:bg-white before:rounded-full   before:transition-all before:duration-150 before:ease-linear  checked:before:left-12"/>
          </div>
        </nav>
      </header>
    </>
  );
};

export default header;
