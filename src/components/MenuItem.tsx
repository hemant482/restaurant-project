import React from 'react';
import { motion } from 'framer-motion';
import type { MenuItem as MenuItemType } from '../data/menuData';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 sm:h-56 md:h-48 lg:h-56 xl:h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-0 right-0 bg-amber-600 text-white px-4 py-2 rounded-bl-lg">
          ${item.price.toFixed(2)}
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default MenuItem;