import React, { useState, useEffect } from 'react';
import { FaAirbnb, FaSearch, FaGlobe, FaBars, FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaAirbnb className="text-airbnb-red text-4xl mr-2" />
          <span className="text-airbnb-red font-bold text-xl hidden sm:inline">airbnb</span>
        </motion.div>
        
        <AnimatePresence>
          {!isScrolled ? (
            <motion.div 
              className="flex-grow flex justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between w-full max-w-xl border rounded-full shadow-md">
                <button className="px-6 py-3 font-semibold">Anywhere</button>
                <span className="border-r border-gray-300 h-8"></span>
                <button className="px-6 py-3 font-semibold">Any week</button>
                <span className="border-r border-gray-300 h-8"></span>
                <button className="px-6 py-3 text-gray-500">Add guests</button>
                <button className="bg-airbnb-red text-white p-3 rounded-full mx-2">
                  <FaSearch className="text-sm" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="flex items-center rounded-full border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button className="px-4 py-2 font-semibold">Anywhere</button>
              <span className="border-r border-gray-300 h-6"></span>
              <button className="px-4 py-2 font-semibold">Any week</button>
              <span className="border-r border-gray-300 h-6"></span>
              <button className="px-4 py-2 text-gray-500">Add guests</button>
              <button className="bg-airbnb-red text-white p-2 rounded-full ml-2">
                <FaSearch className="text-sm" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center space-x-4">
          <button className="font-semibold text-sm hidden sm:block">Airbnb your home</button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FaGlobe className="text-xl" />
          </button>
          <motion.div 
            className="flex items-center space-x-2 border rounded-full p-2 hover:shadow-md transition-shadow duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBars className="text-gray-500" />
            <FaUserCircle className="text-gray-500 text-2xl" />
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Header;