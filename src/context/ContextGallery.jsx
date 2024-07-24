// src/context/GalleryContext.js
import React, { createContext, useState } from 'react';
import sports from '../assets/images/basketball.jpg';
import science from '../assets/images/science-lab.jpg';
import cultural from '../assets/images/dance.jpg';
import classroom from '../assets/images/primary.jpg';
import library from '../assets/images/library.jpg';
import principal from '../assets/images/principal.jpg'
import faculty3 from '../assets/images/faculty-3.jpg'
import faculty2 from '../assets/images/faculty2.jpg'
import faculty4 from '../assets/images/faculty4.jpg'
import faculty5 from '../assets/images/faculty5.jpg'
import faculty6 from '../assets/images/faculty6.jpg'
import collage from '../assets/images/collage.png'
import achieve from '../assets/images/Achievements.jpg'
import council from '../assets/images/Council.jpg'
export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [galleryItems, setGalleryItems] = useState({
    photos: [
        { src: sports, description: 'Students participating in various sports events.' },
        { src: science, description: 'Students presenting their science projects.' },
        { src: cultural, description: 'Students performing in the cultural fest.' },
        { src: classroom, description: 'A glimpse of our interactive classrooms.' },
        { src: library, description: 'Students reading and studying in the school library.' },
      ],
      videos: [
        { src: 'https://www.youtube.com/embed/BocUY5THALk?si=ljrW2DKsv2nE5qnr', description: 'Virtual tour of Springdale Public School.' },
        { src: 'https://www.youtube.com/embed/MtUa8--YPhA?si=c2TztTRYs5bPWt1x', description: 'Highlights from the Annual Function 2023.' },
      ],
  })
   
  const [faculty , setFaculty]=useState({
    facultyMembers:[
            { name: 'Joe Doe', title: 'Principal', qualifications: 'M.Ed, 20 years of experience in educational administration.', imgSrc: principal },
            { name: 'Jane Smith', title: 'Vice Principal', qualifications: 'M.Sc. in Physics, 15 years of teaching experience.', imgSrc: faculty2 },
            { name: 'Emily Johnson', title: 'English Teacher', qualifications: 'M.A. in English, 10 years of teaching experience.', imgSrc: faculty3 },
            { name: 'Michael Brown', title: 'Mathematics Teacher', qualifications: 'M.Sc. in Mathematics, 8 years of teaching experience.', imgSrc: faculty5 },
            { name: 'Sophia Davis', title: 'Science Teacher', qualifications: 'M.Sc. in Chemistry, 12 years of teaching experience.', imgSrc: faculty4 },
            { name: 'David Wilson', title: 'Computer Science Teacher', qualifications: 'B.Tech in Computer Science, 5 years of teaching experience.', imgSrc: faculty6 }
    ]
  })

  const [students , setStudents]= useState({
    sections:[
        {
          title: "Life at Springdale",
          backgroundImage: `url(${collage})`, 
          content: [
            {
              subtitle: "Extracurricular Activities",
              items: ["Music", "Dance", "Drama", "Art", "Sports", "Robotics", "Debate Club", "Science Club"]
            },
            {
              subtitle: "Clubs and Societies",
              items: ["Literary Society", "Environmental Club", "Astronomy Club", "Coding Club"]
            }
          ]
        },
        {
          title: "Achievements",
          backgroundImage: `url(${achieve})`, 
          content: [
            { subtitle: "Academic", items: ["John Smith - National Level Math Olympiad Winner"] },
            { subtitle: "Sports", items: ["Sarah Lee - Gold Medalist in State Swimming Championship"] },
            { subtitle: "Technology", items: ["Tech Innovators Club - Winners of Inter-School Robotics Competition"] }
          ]
        },
        {
          title: "Student Council",
          backgroundImage: `url(${council})`,
          content: [
            { subtitle: "Leadership", items: [
              "President: Amy Parker, Grade 12",
              "Vice President: Rajiv Mehta, Grade 11",
              "Secretary: Lisa Wong, Grade 10"
            ]}
          ]
        }
      ]
  })

  return (
    <GalleryContext.Provider value={{ galleryItems, setGalleryItems , faculty , setFaculty , students , setStudents  }}>
      {children}
    </GalleryContext.Provider>
  );
};
