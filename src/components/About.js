import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Trophy, Zap, Award, Coffee } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <Zap size={28} />,
      title: '30 Hours Non-Stop',
      description: 'Intense coding marathon pushing boundaries of innovation and creativity',
    },
    {
      icon: <Users size={28} />,
      title: 'Team Collaboration',
      description: 'Form teams of up to 3 members and build something extraordinary together',
    },
    {
      icon: <Lightbulb size={28} />,
      title: 'Expert Mentorship',
      description: 'Get guidance from industry professionals and experienced developers',
    },
    {
      icon: <Trophy size={28} />,
      title: 'Amazing Prizes',
      description: 'Compete for exciting prizes worth thousands for each problem statement',
    },
    {
      icon: <Award size={28} />,
      title: 'Certificates For All',
      description: 'Every participant receives a participation certificate to showcase their skills',
    },
    {
      icon: <Coffee size={28} />,
      title: 'Food & Refreshments',
      description: 'Stay energized with complimentary food and refreshments throughout the event',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About The Event</span>
          <h2 className="section-title">What is DevForge 2K26?</h2>
          <p className="section-description">
            DevForge 2K26 is the ultimate hackathon experience designed to bring together
            the brightest minds in technology. Over 30 hours of intense coding, collaboration,
            and innovation await you.
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(139, 90, 43, 0.15)' }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="stats-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Participants</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30</span>
            <span className="stat-label">Hours</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Domains</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6</span>
            <span className="stat-label">Problem Statements</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
