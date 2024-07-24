import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from '../assets/images/aboutUs.png';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='relative pt-5'>
      <div className='text-blue-900 text-center font-bold text-[2.5rem] mb-10' data-aos="fade-up">
        <h1>About Us</h1>
        <div className='bg-blue-900 mx-auto h-[0.5rem] w-[10rem]' data-aos="fade-up" data-aos-delay="200"></div>
      </div>

      <div 
        className='relative w-full h-screen bg-cover bg-center' 
        style={{ backgroundImage: `url(${About})` }}
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <div className='flex flex-col lg:flex-row items-center justify-center w-full h-full text-center lg:text-left bg-black/60 bg-opacity-50 p-10' data-aos="zoom-in" data-aos-duration="1500">
          <div className='w-full lg:w-[70%] text-white font-bold'>
            <h1 className='text-white font-bold mb-4 text-[1.3rem] lg:text-[2.3rem]' data-aos="fade-up" data-aos-delay="300">FOUNDATION & HISTORY</h1>
            <p className='text-[1rem] lg:text-[1.6rem] mb-4' data-aos="fade-up" data-aos-delay="400">
              <span className='text-yellow-500'>Founded</span> in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
            </p>
            <p className='text-[1rem] lg:text-[1.6rem] mb-4' data-aos="fade-up" data-aos-delay="500">
              <span className='text-blue-400'>Vision</span>: To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
            </p>
            <p className='text-[1rem] lg:text-[1.6rem]' data-aos="fade-up" data-aos-delay="600">
              <span className='text-red-500'>Mission</span>: To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

