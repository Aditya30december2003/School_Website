import React, { useEffect , useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GalleryContext } from '../context/ContextGallery';

const Faculty = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const {faculty} = useContext(GalleryContext)

    return (
        <div className="bg-gray-100 text-gray-900 font-sans py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-8 text-center">Faculty Profiles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {faculty.facultyMembers.map((member, index) => (
                        <div 
                            key={index} 
                            className={`bg-white shadow-md rounded-lg p-6 ${member.title === 'Principal' ? 'md:col-span-3 flex flex-col items-center' : 'flex flex-col items-center'}`} 
                            data-aos="fade-up"
                        >
                            <img 
                                src={member.imgSrc} 
                                alt={member.name} 
                                className={`object-cover mb-4 rounded-md ${member.title === 'Principal' ? 'w-48 h-48' : 'w-24 h-24'}`} 
                            />
                            <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
                            <p className="text-center font-medium">{member.title}</p>
                            <p className="text-center mt-2">{member.qualifications}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faculty;

