import React, { useState, useEffect } from 'react';
import { LiaSchoolSolid } from "react-icons/lia";
import { GiTrophyCup, GiTeacher } from "react-icons/gi";
import Aos from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Tab = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className="mb-10 w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto mt-32 flex-col flex justify-between sm:flex sm:flex-row gap-10 p-5">
        <div className="flex flex-col gap-5 items-center mx-auto md:mx-0 sm:w-[50%] md:w-[25%] lg:w-[20%] justify-between" data-aos="fade-up">
          <GiTeacher size={75} className="bg-blue-900 p-2 text-white mx-auto md:mx-0" />
          <div>
            {counterOn ? 
              <h1 className="text-[2.7rem] text-center md:text-[2.3rem] font-bold">
                <CountUp start={0} end={11000} duration={2} delay={0} />
              </h1>
              : <h1 className="text-[2.7rem] text-center md:text-[2.3rem] font-bold">1100</h1>}
            <p className="text-blue-900 text-[1.3rem] font-bold text-center md:text-left">Current Students</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center mx-auto md:mx-0 sm:w-[50%] md:w-[25%] lg:w-[20%] justify-between" data-aos="fade-up">
          <LiaSchoolSolid size={75} className="bg-blue-900 p-2 text-white mx-auto md:mx-0" />
          <div>
            {counterOn ? 
              <h1 className="text-[2.7rem] text-center md:text-[2.3rem] font-bold">
                <CountUp start={0} end={20} duration={2} delay={0} />+
              </h1>
              : <h1 className="text-[2.7rem] text-center md:text-[2.3rem] font-bold">20+</h1>}
            <p className="text-blue-900 text-[1.3rem] font-bold text-center md:text-left">School Programs</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center mx-auto md:mx-0 sm:w-[50%] md:w-[25%] lg:w-[20%] justify-between" data-aos="fade-up">
          <GiTrophyCup size={75} className="bg-blue-900 p-2 text-white mx-auto md:mx-0" />
          <div>
            {counterOn ? 
              <h1 className="text-[2.7rem] text-center md:text-[2.3rem] font-bold">
                <CountUp start={0} end={1} duration={2} delay={1} /> <sup>st</sup>
              </h1>
              : <h1 className="text-[2.7rem] text-center md:text-[2.3rem] font-bold">1<sup>st</sup></h1>}
            <p className="text-blue-900 text-[1.3rem] font-bold text-center md:text-left">Ranking School</p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default Tab;
