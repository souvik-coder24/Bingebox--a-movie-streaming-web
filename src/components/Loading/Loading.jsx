import React from 'react';
import { motion } from 'framer-motion';
import './Loading.css';
import logo from '../../assets/logo.png'; // Ensure you use the correct path to your logo

const Loading = () => {
  return (
    <div className="loading">
      <motion.img
        src={logo}
        alt="Loading..."
        className="loading-logo"
        animate={{ rotateY: [0, 180, 360, 360] }}
        transition={{
          times:[0, 0.5, 1, 1.5],
          repeat: 2,
          speed: 200,
          duration: 1,
          ease: "linear"
        }}
      />
      <div className="loading-bar-container">
        <motion.div
          className="loading-bar"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
    </div>
  );
};

export default Loading;
