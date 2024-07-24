import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logo from '../assets/images/logo.png';
import sports from '../assets/images/track2.jpg';
import tedex from '../assets/images/tedx2022-banner.jpg';
import cultural from '../assets/images/dance.jpg';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carousel.length) % carousel.length);
  };

  const carousel = [
    {
      image: `${sports}`,
      title: 'Annual Sports Day - Celebrating Excellence in Sports',
      content: 'Springdale Public School proudly presents its Annual Sports Day, a vibrant celebration of athletic prowess and teamwork. This year, our students will participate in a variety of sports including track and field events, football, basketball, and more. The day is designed to promote physical fitness, teamwork, and school spirit. We invite all parents and community members to join us in cheering on our young athletes as they strive for excellence and demonstrate their dedication to sportsmanship.',
    },
    {
      image: `${tedex}`,
      title: 'TEDXYOUTH@DAIS',
      content: 'We were extremely excited to bring TEDxYouth@DAIS back to the CPA after 2 years of virtual events. The room was buzzing with energy as students and teachers came together to hear our 7 speakers talk about topics ranging from the Arts, psychology, sports, education, diplomacy, entrepreneurship and culture.As always, we even had our very own student and alumni speaker and, for the first time, a teacher speaker as well! ',
    },
    {
      image: `${cultural}`,
      title: 'Cultural Fest - Embracing Diversity and Creativity',
      content: 'Springdale Public School is delighted to host its annual Cultural Fest, a celebration of our diverse and vibrant community. This event highlights the rich cultural heritage of our students through performances, art exhibits, and culinary delights. It is a platform for students to express their creativity and share their unique cultural backgrounds with the school community.',
    }
  ];

  return (
    <div className="flex flex-col items-center text-center bg-white">
      {/* Carousel/Banner Highlights */}
      <div className="relative w-[100%] mt-10 mb-10 bg-blue-950 p-4 mx-auto">
        <div className="overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carousel.map((data, index) => (
              <div 
                key={index} 
                className="flex w-full flex-shrink-0 relative h-[600px]"  // Adjusted height
                style={{ backgroundImage: `url(${data.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                data-aos="fade-up"
              >
                <div className="w-full p-6 flex flex-col justify-center bg-black bg-opacity-50 text-white font-bold">
                  <h2 className="text-2xl mb-4">{data.title}</h2>
                  <p className="text-md">{data.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
