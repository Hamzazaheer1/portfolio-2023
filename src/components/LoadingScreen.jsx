import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1, scaleX: 0, originX: 0.5 }}
      animate={{ opacity: 0, scaleX: 1 }}
      exit={{ opacity: 1, scaleX: 0 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        zIndex: 9999,
        transformOrigin: 'left',
      }}
    ></motion.div>
  );
};

export default LoadingScreen;
