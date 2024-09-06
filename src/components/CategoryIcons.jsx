import React from 'react';
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

function CategoryIcons() {
  return (
    <div className="flex space-x-10 overflow-x-auto py-6 px-8 hide-scrollbar border-b">
      {categories.map((category, index) => (
        <motion.div 
          key={index} 
          className="flex flex-col items-center space-y-2 cursor-pointer min-w-[56px]"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <category.icon className="text-2xl text-gray-500" />
          <p className="text-xs text-gray-600 whitespace-nowrap">{category.name}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default CategoryIcons;