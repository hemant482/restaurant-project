import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { UtensilsCrossed, Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  const menuItems = [
    ['/', 'Home'],
    ['/menu', 'Menu'],
    ['/reservations', 'Reservations'],
    ['/contact', 'Contact']
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md fixed w-full z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <UtensilsCrossed className="h-8 w-8 text-amber-600" />
            <span className="text-xl sm:text-2xl font-bold text-gray-800">Gourmet Haven</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-gray-600 hover:text-amber-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map(([path, label]) => (
              <Link
                key={path}
                to={path}
                className={`text-lg transition-colors duration-200 ${
                  location.pathname === path
                    ? 'text-amber-600 font-semibold'
                    : 'text-gray-600 hover:text-amber-600'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="py-4 bg-white border-t mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {menuItems.map(([path, label], i) => (
                  <motion.div
                    key={path}
                    custom={i}
                    variants={menuItemVariants}
                  >
                    <Link
                      to={path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                        location.pathname === path
                          ? 'text-amber-600 font-semibold bg-amber-50'
                          : 'text-gray-600 hover:text-amber-600 hover:bg-gray-50'
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;