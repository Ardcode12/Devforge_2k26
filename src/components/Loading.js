import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Zap } from 'lucide-react';
import { useGLTF } from '@react-three/drei';
import './Loading.css';

// Preload the model
const ModelPreloader = ({ onLoaded }) => {
  useGLTF.preload('/models/orange.glb');

  useEffect(() => {
    // Once model is preloaded, mark as complete
    onLoaded();
  }, [onLoaded]);

  return null;
};

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fast progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 20 + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100 && isLoaded) {
      setTimeout(onComplete, 300);
    }
  }, [progress, isLoaded, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ModelPreloader onLoaded={() => setIsLoaded(true)} />

        <div className="loading-content">
          <motion.div
            className="loading-logo"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="logo-icon-wrapper"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Code2 size={48} />
              <motion.div
                className="logo-zap-loading"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Zap size={24} />
              </motion.div>
            </motion.div>
            <h1 className="loading-title">
              <span className="title-dev">DEV</span>
              <span className="title-forge">FORGE</span>
              <span className="title-year">2K26</span>
            </h1>
          </motion.div>

          <motion.div
            className="loading-bar-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="loading-bar">
              <motion.div
                className="loading-bar-fill"
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.05 }}
              />
            </div>
            <motion.p className="loading-text">
              {Math.min(Math.floor(progress), 100)}%
            </motion.p>
          </motion.div>

          <motion.div
            className="loading-dots"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            />
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            />
          </motion.div>

          <motion.p
            className="loading-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Preparing your experience
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
