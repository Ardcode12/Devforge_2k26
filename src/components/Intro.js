import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SkipForward, Play } from 'lucide-react';
import './Intro.css';

const Intro = ({ onComplete }) => {
  const videoRef = useRef(null);
  const [needsManualPlay, setNeedsManualPlay] = useState(false);
  const [isEnding, setIsEnding] = useState(false);

  const handleFinish = () => {
    if (isEnding) return;
    setIsEnding(true);
    setTimeout(onComplete, 600);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => setNeedsManualPlay(true));
    }
  }, []);

  const handleManualPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.then(() => setNeedsManualPlay(false)).catch(() => {});
    }
  };

  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: isEnding ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      <video
        ref={videoRef}
        className="intro-video"
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleFinish}
        onError={handleFinish}
      />

      <div className="intro-vignette" />

      <span className="intro-hint">DevForge 2K26</span>

      <button className="intro-skip" onClick={handleFinish} aria-label="Skip intro">
        Skip <SkipForward size={18} />
      </button>

      {needsManualPlay && (
        <button className="intro-play" onClick={handleManualPlay} aria-label="Play intro">
          <Play size={32} fill="currentColor" />
        </button>
      )}
    </motion.div>
  );
};

export default Intro;
