import React from 'react';
import { MdOutlineLibraryBooks } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaRegHandshake, FaTree } from "react-icons/fa";
import logo from '../assets/images/logo.png';

const Hero2 = () => {
  return (
    <div className="p-8 text-center">
      <h1 data-aos="fade-up" data-aos-duration="1000" className='font-bold text-[1.9rem] text-blue-950'>
        WELCOME TO
      </h1>
      <div className="py-10" data-aos="fade-up" data-aos-duration="1000">
        <img src={logo} alt="Springdale Public School Logo" className="mx-auto w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64" />
      </div>

      {/* School Name */}
      <div className="text-blue-950 text-xl md:text-2xl lg:text-4xl font-bold" data-aos="fade-up" data-aos-duration="1000">
        Springdale Public School
      </div>

      {/* Introduction */}
      <div className="mt-5 text-sm mb-10 md:text-md lg:text-xl text-gray-700 px-5 lg:px-20" data-aos="fade-up" data-aos-duration="1000">
        Welcome to Springdale Public School, where we nurture young minds for a brighter future.
      </div>
      
      <div className="grid grid-rows-2 md:flex md:flex-row justify-center gap-2 w-full mx-auto">
        {[
          { icon: MdOutlineLibraryBooks, text: "Enroll" },
          { icon: LiaChalkboardTeacherSolid, text: "Teach" },
          { icon: FaRegHandshake, text: "Support" },
          { icon: FaTree, text: "Grow" }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-blue-800 text-white p-6 w-full md:w-48 items-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay={index * 200} // Stagger animation delays
          >
            <item.icon size={48} className="mb-4" />
            <span className="text-xl font-semibold">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero2;

