import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Brain, Shield, Smartphone } from 'lucide-react';
import './Prizes.css';

const Prizes = () => {
  const domainPrizes = [
    {
      domain: 'Artificial Intelligence',
      icon: <Brain size={28} />,
      color: '#2563eb',
      prizes: [
        { position: '1st Place', icon: <Trophy size={24} /> },
        { position: '2nd Place', icon: <Medal size={24} /> },
      ],
    },
    {
      domain: 'Cyber Security',
      icon: <Shield size={28} />,
      color: '#dc2626',
      prizes: [
        { position: '1st Place', icon: <Trophy size={24} /> },
        { position: '2nd Place', icon: <Medal size={24} /> },
      ],
    },
    {
      domain: 'Mobile Application',
      icon: <Smartphone size={28} />,
      color: '#059669',
      prizes: [
        { position: '1st Place', icon: <Trophy size={24} /> },
        { position: '2nd Place', icon: <Medal size={24} /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="prizes" className="prizes">
      <div className="prizes-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Rewards</span>
          <h2 className="section-title">Prizes For All Domains</h2>
          <p className="section-description">
            Exciting cash prizes for winners in each domain. Every participant receives a certificate!
          </p>
        </motion.div>

        <motion.div
          className="domain-prizes-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {domainPrizes.map((domain, index) => (
            <motion.div
              key={index}
              className="domain-prize-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              style={{ '--domain-color': domain.color }}
            >
              <div className="domain-header">
                <div className="domain-icon">{domain.icon}</div>
                <h3 className="domain-name">{domain.domain}</h3>
              </div>
              <div className="domain-prizes-list">
                {domain.prizes.map((prize, i) => (
                  <div key={i} className={`prize-row ${i === 0 ? 'first' : 'second'}`}>
                    <div className="prize-icon-small">{prize.icon}</div>
                    <span className="prize-position-text">{prize.position}</span>
                    <span className="prize-label">Cash Prize</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="prizes-note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>Participation certificates will be provided to all participants</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
