import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import art from '../assets/images/art.jpeg';
import karate from '../assets/images/karate.jpg';
import pool from '../assets/images/pool.webp';
import fest from '../assets/images/fest1.jpg';
import robotics from '../assets/images/robotics.jpg';

const LifeATSchool = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [
    { src: fest, alt: 'Fest', content: 'School Fest', bgColor: '' },
    { src: karate, alt: 'Karate', content: 'Karate Class', bgColor: '' },
    { src: pool, alt: 'Pool', content: 'Swimming Pool', bgColor: '' },
    { src: art, alt: 'Art', content: 'Art Class', bgColor: '' },
    { src: robotics, alt: 'Robotics', content: 'Robotics Club', bgColor: '' }
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className='mb-[2rem]'>
      <h1 className="text-center text-3xl font-bold mb-8" data-aos="fade-up">LIFE AT SCHOOL</h1>
      <div className="flex flex-col w-full gap-2 h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`relative group cursor-pointer transition-all duration-700  ${hoverIndex === index ? 'h-full' : 'h-1/5'}`}
          >
            <img src={image.src} alt={image.alt} className="w-[90%] mx-auto h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
            <div
              className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out ${image.bgColor}`}
            >
              <span className="text-white text-lg font-bold">{image.content}</span>
            </div>
          </div>
        ))}
        <div className='mt-20'></div>
      </div>
    </div>
  );
}

export default LifeATSchool;
