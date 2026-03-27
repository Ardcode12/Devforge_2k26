import React, { useState, useEffect, Suspense, useRef, Component } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Environment } from '@react-three/drei';
import { Calendar, Clock, MapPin, ChevronDown, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

// Error boundary to catch WebGL context failures on mobile
class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('3D Canvas failed to load:', error.message);
  }

  render() {
    if (this.state.hasError) {
      // Return nothing — the page continues without the 3D model
      return null;
    }
    return this.props.children;
  }
}

const Model = ({ scale = 2.5, position = [0, -1, 0], mouse, isVisible }) => {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/orange.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    let timeoutId;

    // Play animation and schedule next with 3.5 second gap
    const playAndScheduleNext = () => {
      // Only process animations if the model is visible on screen
      if (!isVisible) {
        timeoutId = setTimeout(playAndScheduleNext, 1000); // Check again in 1s
        return;
      }

      if (names.length > 0 && actions[names[0]]) {
        const action = actions[names[0]];
        action.reset();
        action.setLoop(1, 1); // Play once
        action.clampWhenFinished = true;
        action.play();

        // Get animation duration and schedule next after animation + 3.5 sec gap
        const duration = action.getClip().duration * 1000;
        timeoutId = setTimeout(playAndScheduleNext, duration + 3500);
      }
    };

    // Play first animation immediately
    playAndScheduleNext();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [actions, names, isVisible]);

  // Rotate model based on mouse position (left/right only) - keeping position fixed
  useFrame(() => {
    if (group.current && isVisible) {
      // Only rotate, don't change position
      const targetRotationY = mouse.current.x * 1.2;
      group.current.rotation.y += (targetRotationY - group.current.rotation.y) * 0.1;

      // Keep position fixed
      group.current.position.set(position[0], position[1], position[2]);
    }
  });

  return (
    <group ref={group} position={position}>
      <primitive object={scene} scale={scale} />
    </group>
  );
};

const Scene = ({ scale, position, isVisible }) => {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse position to -1 to 1
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Only add mouse listener if visible
    if (isVisible) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isVisible]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5a2b" />
      <Suspense fallback={null}>
        <Model scale={scale} position={position} mouse={mouse} isVisible={isVisible} />
        <Environment preset="city" />
      </Suspense>
    </>
  );
};

// 3D Model Configuration - Separate Size and Position Settings for each breakpoint
const MODEL_SETTINGS = {
  // Desktop (>= 1024px)
  desktop: {
    size: {
      scale: 1.4,
    },
    position: {
      x: -0.5,
      y: -1.7,
      z: 0,
    },
  },
  // Tablet (768px - 1023px)
  tablet: {
    size: {
      scale: 1.0,
    },
    position: {
      x: -0.3,
      y: -1.5,
      z: 0,
    },
  },
  // Mobile (481px - 767px)
  mobile: {
    size: {
      scale: 2,
    },
    position: {
      x: 0,
      y: -3,
      z: 0,
    },
  },
  // Small Mobile (361px - 480px)
  mobileSmall: {
    size: {
      scale: 1.5,
    },
    position: {
      x: 0,
      y: -1.8,
      z: 0,
    },
  },
  // Extra Small Mobile (<= 360px)
  mobileXSmall: {
    size: {
      scale: 2.0,
    },
    position: {
      x: 0,
      y: -2.0,
      z: 0,
    },
  },
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [modelSize, setModelSize] = useState(MODEL_SETTINGS.desktop.size);
  const [modelPosition, setModelPosition] = useState(MODEL_SETTINGS.desktop.position);

  // Set up intersection observer to detect when Hero section is visible
  const { ref: heroRef, inView: isVisible } = useInView({
    triggerOnce: false,
    threshold: 0, // Trigger as soon as 1px is visible
    rootMargin: "50% 0px 50% 0px", // Keep it loaded slightly before/after scrolling past
  });

  // Handle viewport width changes for responsive model settings
  useEffect(() => {
    const updateModelConfig = () => {
      const width = window.innerWidth;
      let settings;

      if (width <= 360) {
        settings = MODEL_SETTINGS.mobileXSmall;
      } else if (width <= 480) {
        settings = MODEL_SETTINGS.mobileSmall;
      } else if (width < 768) {
        settings = MODEL_SETTINGS.mobile;
      } else if (width < 1024) {
        settings = MODEL_SETTINGS.tablet;
      } else {
        settings = MODEL_SETTINGS.desktop;
      }

      // Update size and position separately
      setModelSize(settings.size);
      setModelPosition(settings.position);
    };

    // Set initial config
    updateModelConfig();

    // Update on resize
    window.addEventListener('resize', updateModelConfig);
    return () => window.removeEventListener('resize', updateModelConfig);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2026-04-17T09:00:00');

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
    <section id="home" className="hero" ref={heroRef}>
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
              <span>April 17-18, 2026</span>
            </div>
            <div className="info-divider" />
            <div className="info-item">
              <Clock size={20} />
              <span>Prelims: April 11 &  12  </span>
            </div>
            <div className="info-divider" />
            <div className="info-item">
              <MapPin size={20} />
              <span>Kongu Engineering College</span>
            </div>
          </motion.div>

          <motion.div className="registration-notices" variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
            <p style={{ color: '#ef4444', fontWeight: 'bold', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>
              Registration closed on April 10
            </p>
            <p style={{ color: '#d97706', fontSize: '0.9rem', margin: 0, fontWeight: '500' }}>
              * Registrations may close earlier for specific domains if maximum count is reached.
            </p>
          </motion.div>

          <motion.div className="countdown" variants={itemVariants}>
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

        <motion.div
          className="hero-model"
          initial={{ opacity: 0, x: 150, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 1, type: 'spring', stiffness: 50, damping: 15 }}
        >
          <CanvasErrorBoundary>
            {isVisible && (
              <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                gl={{ powerPreference: 'high-performance', antialias: true }}
                style={{ pointerEvents: 'auto' }}
                // Demand frameloop only renders when requested - saves battery
                frameloop={isVisible ? "always" : "demand"}
              >
                <Scene
                  scale={modelSize.scale}
                  position={[modelPosition.x, modelPosition.y, modelPosition.z]}
                  isVisible={isVisible}
                />
              </Canvas>
            )}
          </CanvasErrorBoundary>
        </motion.div>
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
