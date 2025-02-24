import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MenuItem from '../components/MenuItem';
import { menuItems } from '../data/menuData';

const Menu = () => {
  const categories = ['appetizer', 'main', 'dessert'] as const;
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number] | 'all'>('all');

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto max-w-7xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-800"
        >
          Our Menu
        </motion.h1>

        <div className="flex justify-center mb-8 space-x-4 overflow-x-auto pb-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full text-sm sm:text-base transition-colors ${
              selectedCategory === 'all'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm sm:text-base transition-colors ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}s
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Menu;