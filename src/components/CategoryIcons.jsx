import React, { useState } from 'react';
import { FaTicketAlt, FaTractor, FaMountain, FaSwimmingPool, FaUmbrellaBeach, FaHome, FaWater, FaTree, FaFire, FaLeaf, FaSnowflake, FaGlobeAmericas, FaBed } from 'react-icons/fa';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Icons', icon: FaTicketAlt },
  { name: 'Farms', icon: FaTractor },
  { name: 'Amazing views', icon: FaMountain },
  { name: 'Amazing pools', icon: FaSwimmingPool },
  { name: 'Tropical', icon: FaUmbrellaBeach },
  { name: 'Cabins', icon: FaHome },
  { name: 'Beachfront', icon: FaWater },
  { name: 'Treehouses', icon: FaTree },
  { name: 'OMG!', icon: FaFire },
  { name: 'Countryside', icon: FaLeaf },
  { name: 'Lakefront', icon: FaSnowflake },
  { name: 'Top of the world', icon: FaGlobeAmericas },
  { name: 'Rooms', icon: FaBed },
];

function CategoryIcons({ onCategoryClick }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryClick(category);
  };

  return (
    <motion.div 
      className="flex space-x-10 overflow-x-auto py-6 px-8 hide-scrollbar border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {categories.map((category, index) => (
        <motion.div 
          key={index} 
          className={`flex flex-col items-center space-y-2 cursor-pointer min-w-[56px] ${selectedCategory === category.name ? 'border-b-2 border-black' : ''}`}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleCategoryClick(category.name)}
        >
          <category.icon className={`text-2xl ${selectedCategory === category.name ? 'text-black' : 'text-gray-500'}`} />
          <p className={`text-xs ${selectedCategory === category.name ? 'text-black font-semibold' : 'text-gray-600'} whitespace-nowrap`}>{category.name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default CategoryIcons;