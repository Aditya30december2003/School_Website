import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import primary from '../assets/images/primary.jpg';
import secondary from '../assets/images/secondary.png';
import senior from '../assets/images/senior-secondary.jpg';
import robotics from '../assets/images/robotics-1.jpg';
import classroom from '../assets/images/classrooms2.jpg';

const Services1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Springdale Public School</h1>
          <p className="mt-2">Academics</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4" data-aos="fade-up">Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="bg-white shadow-md rounded-lg p-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={primary} alt="Primary Curriculum" className="h-[16rem] object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold mb-2">Primary (Grades 1-5)</h3>
              <ul className="list-disc list-inside">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
            </div>
            <div
              className="bg-white shadow-md rounded-lg p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={secondary} alt="Secondary Curriculum" className="h-[16rem] object-cover  mb-4 rounded-md" />
              <h3 className="text-xl font-semibold mb-2">Secondary (Grades 6-10)</h3>
              <ul className="list-disc list-inside">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Physical Education</li>
                <li>Art</li>
              </ul>
            </div>
            <div
              className="bg-white shadow-md rounded-lg p-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src={senior} alt="Senior Secondary Curriculum" className="h-[16rem] object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold mb-2">Senior Secondary (Grades 11-12)</h3>
              <p className="font-semibold">Science Stream:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Mathematics</li>
                <li>Computer Science</li>
                <li>English</li>
              </ul>
              <p className="font-semibold">Commerce Stream:</p>
              <ul className="list-disc list-inside">
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Mathematics</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4" data-aos="fade-up">Teaching Methodologies</h2>
          <div
            className="bg-white shadow-md rounded-lg p-6 flex flex-col lg:flex-row items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img src={robotics} alt="Teaching Methodologies" className="lg:w-[60%] w-full mr-6 rounded-md" />
            <p className='text-center lg:text-left'>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4" data-aos="fade-up">Educational Resources</h2>
          <div
            className="bg-white shadow-md rounded-lg p-6 flex flex-col lg:flex-row items-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img src={classroom} alt="Educational Resources" className="w-full lg:w-[60%] mr-6 rounded-md" />
            <p className='text-center lg:text-left'>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services1;

