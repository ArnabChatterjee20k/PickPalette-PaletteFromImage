import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Banner.css';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("Banner component useEffect called");
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setIsVisible(false);
      console.log("Banner component is hidden after 20 seconds");
    }, 20000); // 20 seconds in milliseconds

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className='banner'
          initial={{ opacity: 0, translateY: '100%' }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: '100%' }}
          transition={{ duration: 1 }}
        >
          <div className="banner-content">
            <span className="text-xl font-bold mb-4">Upvote on Product Hunt</span>
            <button className='button-style'
              onClick={() => window.location.href = 'https://www.producthunt.com/'}
            >
              UPVOTE
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Banner;
