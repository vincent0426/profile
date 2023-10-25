import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { GiMoonBats } from 'react-icons/gi';
import { BsFillSunFill } from 'react-icons/bs';

const ToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(null);
  
  useEffect(() => {
    // Moved window logic inside useEffect
    setIsDark(window.localStorage.getItem('theme') === 'dark');
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  // Toggle between dark and light themes
  const toggleSwitch = () => {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'; 
    window.localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
    setIsDark(nextTheme === 'dark');
  };

  const buttonVariants = {
    dark: {
      transition: { type: 'spring', stiffness: 700, damping: 30 }
    },
    light: {
      transition: { type: 'spring', stiffness: 700, damping: 30 }
    },
  };

  return (
    <motion.div 
      onClick={toggleSwitch}
      variants={buttonVariants}
      initial={isDark ? 'light' : 'dark'}
      animate={isDark ? 'dark' : 'light'}
      className='p-[10px] rounded-full hover:cursor-pointer'
    >
      <AnimatePresence mode="wait">
        {!isDark ? (
          <motion.div 
            key="light-icon"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            // initial="hidden"
            // animate="visible"
            // exit="hidden"
          >
            <BsFillSunFill size={20} color="black" />
          </motion.div>
        ) : (
          <motion.div 
            key="dark-icon"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            // initial="hidden"
            // animate="visible"
            // exit="hidden"
          >
            <GiMoonBats size={20} color="white" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ToggleButton;
