import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ChevronDown, Sparkles } from 'lucide-react';
import './Hero.css';

const HERO_IMAGE_SRC = '/heroimages/WhatsApp_Image_2026-09-10_at_3.55.53_PM__1_-removebg-preview.png';
const HERO_IMAGE_SIZE = 840;

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-09-22T09:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <h3 className="countdown-label">
        <Clock size={18} />
        <span>Event Starts In</span>
      </h3>
      <div className="countdown-grid">
        <div className="countdown-item">
          <span className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="countdown-text">Days</span>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="countdown-text">Hours</span>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="countdown-text">Minutes</span>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="countdown-text">Seconds</span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="hero-layout">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <Sparkles size={16} />
            <span>30 Hours of Innovation</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="title-dev">DEV</span>
            <span className="title-forge">FORGE</span>
            <span className="title-year">2K26</span>
          </motion.h1>

          <motion.p className="hero-association" variants={itemVariants}>
            by IT Association
          </motion.p>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Code. Create. Conquer.
          </motion.p>

          <motion.p className="hero-description" variants={itemVariants}>
            Join the ultimate 30-hour hackathon experience where innovation meets creativity.
            Build groundbreaking solutions, collaborate with brilliant minds, and compete for amazing prizes.
          </motion.p>

          <motion.div className="hero-info" variants={itemVariants}>
            <div className="info-item">
              <Calendar size={20} />
              <span>September 22-23, 2026</span>
            </div>
            <div className="info-divider" />

            <div className="info-item">
              <MapPin size={20} />
              <span>Kongu Engineering College</span>
            </div>
          </motion.div>



          <motion.div variants={itemVariants}>
            <Countdown />
          </motion.div>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a
              href="https://forms.gle/JJegGzSRa9tfoh4u7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(139, 69, 19, 0.35)' }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.a>
            <motion.a
              href="#about"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#about');
              }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        <div
          className="hero-gallery"
          aria-hidden="true"
          style={{ '--gallery-size': `${HERO_IMAGE_SIZE}px` }}
        >
          <motion.img
            src={HERO_IMAGE_SRC}
            alt="DevForge 2K26"
            className="hero-gallery-img"
            draggable="false"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />
        </div>
      </div>

      <motion.button
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => scrollToSection('#about')}
        aria-label="Scroll to about section"
      >
        <span>Scroll to explore</span>
        <ChevronDown size={24} className="scroll-icon" />
      </motion.button>
    </section>
  );
};

export default Hero;
