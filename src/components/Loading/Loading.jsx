import React from 'react';
import { motion } from 'framer-motion';
import './Loading.css';
import logo from '../../assets/login-logo.png';

const Loading = () => {
  return (
    <div className="loading">
      <motion.img
        src={logo}
        alt="Loading..."
        className="loading-logo"
        animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            scale: {
              repeat: Infinity,
              duration: 1.6,
              ease: "easeInOut"
            }
          }}
      />
      <div className="loading-bar-container">
        <motion.div
          className="loading-bar"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
    </div>
  );
};

export default Loading;
