import React, { useEffect, useContext, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { GalleryContext } from '../context/ContextGallery';

const Card = ({ subtitle, items }) => (
  <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 mb-4">
    <h3 className="text-xl font-bold mb-2">{subtitle}</h3>
    <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">{item}</li>
      ))}
    </ul>
  </div>
);

const StudentLife = () => {
  const { students } = useContext(GalleryContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log("Current Students Data:", students);
  }, [students]);

  const props = useSpring({
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0%)' },
    reset: true,
    reverse: currentIndex % 2 === 0,
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % students.sections.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + students.sections.length) % students.sections.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {students.sections.map((section, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
          style={{ backgroundImage: section.backgroundImage }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-8">
            <h2 className="text-4xl font-bold text-white mb-8">{section.title}</h2>
            <animated.div style={props} className="w-full max-w-3xl">
              {section.content.map((cardContent, cardIndex) => (
                <Card key={cardIndex} {...cardContent} />
              ))}
            </animated.div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 bg-white bg-opacity-50 p-2 rounded-full"
      >
        &#9654;
      </button>
    </div>
  );
};

export default StudentLife;