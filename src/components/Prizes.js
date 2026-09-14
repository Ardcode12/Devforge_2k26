import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Gift } from 'lucide-react';
import './Prizes.css';

const Prizes = () => {
  const perks = [
    {
      icon: <Trophy size={26} />,
      title: 'Grand Cash Rewards',
      description: 'Total ₹8,000 cash pool awarded to top winning teams.',
    },
    {
      icon: <Award size={26} />,
      title: 'Certificates for All',
      description: 'Official Certificate of Participation for every verified attendee.',
    },
    {
      icon: <Gift size={26} />,
      title: 'Swag & Mentorship',
      description: 'Trophies, tech goodies, and direct industry mentorship.',
    },
  ];

  return (
    <section id="prizes" className="prizes">
      <div className="prizes-container">
        {/* Main Hero Prize Card */}
        <motion.div
          className="prize-showcase-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="prize-ambient-glow"></div>

          {/* Trophy Badge */}
          <div className="prize-trophy-circle">
            <Trophy size={42} className="trophy-icon" />
          </div>

          {/* Tag Pill */}
          <div className="prize-tag-pill">
            <span>DEVFORGE 2026</span>
          </div>

          {/* Amount */}
          <h2 className="prize-amount">₹8,000</h2>

          {/* Subtitle */}
          <p className="prize-pool-label">TOTAL CASH PRIZE POOL</p>

          {/* Description */}
          <p className="prize-pool-description">
            Compete for cash rewards, winner trophies, certificates, and exciting perks across DevForge 2026!
          </p>
        </motion.div>

        {/* Bottom Feature Perks */}
        <motion.div
          className="prize-perks-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              className="prize-perk-card"
              whileHover={{ y: -5, borderColor: 'rgba(212, 175, 55, 0.4)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="perk-icon-wrapper">
                {perk.icon}
              </div>
              <div className="perk-content">
                <h4 className="perk-title">{perk.title}</h4>
                <p className="perk-description">{perk.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
