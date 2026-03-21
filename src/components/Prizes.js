import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Gift, Sparkles, Star } from 'lucide-react';
import './Prizes.css';

const Prizes = () => {
  const prizes = [
    {
      position: '1st',
      title: 'Grand Champion',
      amount: '₹25,000',
      icon: <Trophy size={40} />,
      perks: ['Cash Prize', 'Premium Swag Kit', 'Internship Opportunities', 'Certificate of Excellence'],
      featured: true,
    },
    {
      position: '2nd',
      title: 'First Runner Up',
      amount: '₹15,000',
      icon: <Medal size={36} />,
      perks: ['Cash Prize', 'Swag Kit', 'Mentorship Sessions', 'Certificate'],
      featured: false,
    },
    {
      position: '3rd',
      title: 'Second Runner Up',
      amount: '₹10,000',
      icon: <Award size={36} />,
      perks: ['Cash Prize', 'Swag Kit', 'Certificate'],
      featured: false,
    },
  ];

  const specialPrizes = [
    { title: 'Best UI/UX', prize: '₹5,000', icon: <Sparkles size={24} /> },
    { title: 'Most Innovative', prize: '₹5,000', icon: <Star size={24} /> },
    { title: 'Best First-Timers', prize: '₹5,000', icon: <Gift size={24} /> },
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
          <h2 className="section-title">Prizes Worth ₹50,000+</h2>
          <p className="section-description">
            Compete for amazing prizes and recognition. Every participant receives a certificate!
          </p>
        </motion.div>

        <motion.div
          className="prizes-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              className={`prize-card ${prize.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {prize.featured && <div className="featured-badge">Grand Prize</div>}
              <div className="prize-icon">{prize.icon}</div>
              <span className="prize-position">{prize.position}</span>
              <h3 className="prize-title">{prize.title}</h3>
              <div className="prize-amount">{prize.amount}</div>
              <ul className="prize-perks">
                {prize.perks.map((perk, i) => (
                  <li key={i}>{perk}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="special-prizes"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="special-title">Special Category Awards</h3>
          <div className="special-grid">
            {specialPrizes.map((item, index) => (
              <motion.div
                key={index}
                className="special-card"
                whileHover={{ scale: 1.05 }}
              >
                <div className="special-icon">{item.icon}</div>
                <div className="special-info">
                  <span className="special-name">{item.title}</span>
                  <span className="special-prize">{item.prize}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
