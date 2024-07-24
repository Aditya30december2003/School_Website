import React from 'react';
import principal from '../assets/images/principal.jpg'

const Principle = () => {
  return (
    <div className='mt-10 flex flex-col gap-10 md:flex-row items-center w-full'>

      <div className='text-left mb-8 w-[95%] lg:w-[55%] flex flex-col gap-3'>
        <div className='bg-blue-900 w-[100%] lg:w-[20%] h-[1rem]'></div>
        <h1 className='text-3xl w-[100%] lg:w-[80%] mx-auto font-bold text-blue-900 mb-4'>Principals Message</h1>
        <p className='text-lg text-blue-800 italic w-[100%] lg:w-[80%] mx-auto text-left'>
          At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future. Our dedicated team of educators is committed to fostering a supportive and enriching environment where students can thrive academically, socially, and personally. We strive to cultivate a love for learning and encourage each student to reach their full potential. Together, we are building a community of lifelong learners and future leaders.
          <br />
          Our dedicated team of educators works tirelessly to provide a well-rounded education that integrates academic rigor with character development. We believe in the power of collaboration between students, parents, and teachers to create a supportive community where every child can thrive. We are proud of the achievements of our students and are excited to continue supporting their journey towards becoming thoughtful, responsible, and successful individuals.
        </p>
      </div>

      <div className='relative  max-w-md w-full lg:w-[45%]'>
        <img src={principal} alt="Principal" className='w-full h-auto object-cover rounded-lg' />
      </div>

    </div>
  );
}

export default Principle;

