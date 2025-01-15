import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const photos = [
  'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800&q=80',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
  'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?w=800&q=80',
  'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&q=80',
];

const PhotoGallery: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-3xl mx-auto px-4 py-8"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-red-600">
        Nuestros recuerdos favoritos 📸
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-xl">
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index} className="px-2">
              <img
                src={photo}
                alt={`Momento especial ${index + 1}`}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
      <p className="text-center mt-4 text-gray-700 italic">
        Cada uno de estos momentos me recuerda lo afortunado que soy de tenerte a mi lado.
      </p>
    </motion.div>
  );
};

export default PhotoGallery;