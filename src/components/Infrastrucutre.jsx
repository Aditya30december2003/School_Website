import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Beaker, Monitor, Book, Dumbbell } from 'lucide-react';
import science from '../assets/images/science-lab.jpg';
import classroom from '../assets/images/classrooms2.jpg';
import lib from '../assets/images/facilities.jpg';
import karate from '../assets/images/karate2.jpg';

const FacilityCard = ({ title, description, icon: Icon, image }) => (
  <div
    className="bg-white flex flex-col gap-2 lg:flex-row w-full items-center p-6 rounded-lg shadow-md"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div className='w-[100%] lg:w-[40%]'>
      <div className="flex flex-row items-center mb-4">
        <Icon className="w-8 h-8 text-blue-800 mr-3" />
        <h3 className="text-xl font-semibold text-gray-800 text-center lg:text-left">{title}</h3>
      </div>
      <p className="text-gray-600 text-center lg:text-left">{description}</p>
    </div>

    <div className='w-[60%]'>
      <img src={image} alt={title} />
    </div>
  </div>
);

const FacilitiesGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const facilities = [
    {
      title: "Science and Computer Labs",
      description: "State-of-the-art labs equipped with the latest technology for hands-on learning experiences.",
      icon: Beaker,
      image: science
    },
    {
      title: "Modern Classrooms",
      description: "Spacious and well-equipped classrooms fostering interactive and engaging learning environments.",
      icon: Monitor,
      image: classroom,
    },
    {
      title: "Extensive Library",
      description: "A vast collection of books and digital resources to support research and promote reading.",
      icon: Book,
      image: lib
    },
    {
      title: "Sports Facilities",
      description: "Comprehensive sports amenities including a playground, gymnasium, and swimming pool for physical development.",
      icon: Dumbbell,
      image: karate
    }
  ];

  return (
    <div className="relative bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden mt-10">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold text-center text-blue-800 mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          INFRASTRUCTURE AND FACILITIES
        </h2>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesGrid;
