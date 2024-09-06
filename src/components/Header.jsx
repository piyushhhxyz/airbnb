import React, { useState, useEffect } from 'react';
import { FaSearch, FaGlobe, FaBars, FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Header({ onSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/images/airbnb.png" alt="Airbnb" className="h-8 mr-2" />
          <span className="text-airbnb-red font-bold text-xl">airbnb</span>
        </motion.div>
        
        <AnimatePresence>
          {!isScrolled ? (
            <motion.form 
              className="flex-grow flex justify-center max-w-2xl mx-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSearchSubmit}
            >
              <div className="flex items-center justify-between w-full border rounded-full shadow-md hover:shadow-lg transition-shadow duration-200">
                <input
                  type="text"
                  placeholder="Start your search"
                  className="px-6 py-3 w-full rounded-full outline-none text-sm"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button type="submit" className="bg-airbnb-red text-white p-3 rounded-full mx-2">
                  <FaSearch className="text-sm" />
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.form 
              className="flex-grow flex justify-center max-w-md mx-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSearchSubmit}
            >
              <div className="flex items-center w-full rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <input 
                  type="text" 
                  placeholder="Start your search" 
                  className="px-4 py-2 w-full rounded-full outline-none text-sm"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button type="submit" className="bg-airbnb-red text-white p-2 rounded-full ml-2 mr-1">
                  <FaSearch className="text-sm" />
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="flex items-center space-x-4 flex-shrink-0">
          <button className="font-semibold text-sm hidden sm:block hover:bg-gray-100 px-4 py-2 rounded-full transition-colors duration-200">
            Airbnb your home
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <FaGlobe className="text-xl" />
          </button>
          <motion.div 
            className="flex items-center space-x-2 border rounded-full p-2 hover:shadow-md transition-shadow duration-200 cursor-pointer"
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