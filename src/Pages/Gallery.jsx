import React, { useEffect , useContext } from 'react';
import { GalleryContext } from '../context/ContextGallery';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { galleryItems } = useContext(GalleryContext);
  return (
    <div className="gallery-container p-8">
      <h2 className="text-3xl font-bold mb-4">Gallery</h2>

      {/* Photos Section */}
      <section className="photos mb-8">
        <h3 className="text-2xl font-semibold mb-4">Photos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.photos.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer photo-item relative group"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={item.src}
                alt={`Photo ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="description">
                <p className="text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="videos">
        <h3 className="text-2xl font-semibold mb-4">Videos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {galleryItems.videos.map((item, index) => (
            <div
              key={index}
              className="relative group w-full"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <iframe
                className="mx-auto w-full"
                height={400}
                src={item.src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div>
                <p className="p-4 text-center font-bold text-blue-900 text-[1.2rem]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;

