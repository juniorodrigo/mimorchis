import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center relative px-4 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
      >
        <Heart className="w-full h-full text-red-400" />
      </motion.div>
      
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8, type: "spring" }}
        className="text-5xl md:text-7xl font-bold text-red-600 mb-6"
      >
        ¡Feliz cumpleaños, Kelly! 🎉💕
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-12"
      >
        Hoy es tu día especial, y quiero que sepas cuánto te amo y aprecio cada momento contigo.
      </motion.p>
      
      <motion.button
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 1.5 }}
        className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => {
          const gallery = document.getElementById('gallery');
          gallery?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Desliza hacia abajo para descubrir tu sorpresa 🎁
      </motion.button>
    </motion.header>
  );
};

export default Header;