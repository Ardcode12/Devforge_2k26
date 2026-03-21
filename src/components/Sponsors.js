import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Heart, Sparkles } from 'lucide-react';
import './Sponsors.css';

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: 'Title Sponsor',
      icon: <Sparkles size={20} />,
      sponsors: [{ name: 'TechCorp Inc.', logo: 'TC' }],
    },
    {
      tier: 'Gold Sponsors',
      icon: <Building2 size={20} />,
      sponsors: [
        { name: 'InnovateLabs', logo: 'IL' },
        { name: 'DevStudio', logo: 'DS' },
      ],
    },
    {
      tier: 'Silver Sponsors',
      icon: <Building2 size={18} />,
      sponsors: [
        { name: 'CloudNet', logo: 'CN' },
        { name: 'DataFlow', logo: 'DF' },
        { name: 'CodeBase', logo: 'CB' },
      ],
    },
  ];

  return (
    <section id="sponsors" className="sponsors">
      <div className="sponsors-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Our Partners</span>
          <h2 className="section-title">Sponsors & Partners</h2>
          <p className="section-description">
            We are grateful to our amazing sponsors who make this event possible
          </p>
        </motion.div>

        <div className="sponsor-tiers">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              className={`sponsor-tier tier-${tierIndex}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: tierIndex * 0.1 }}
            >
              <div className="tier-header">
                {tier.icon}
                <h3 className="tier-name">{tier.tier}</h3>
              </div>
              <div className="sponsor-logos">
                {tier.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={index}
                    className="sponsor-card"
                    whileHover={{ y: -5 }}
                  >
                    <div className="sponsor-logo">{sponsor.logo}</div>
                    <span className="sponsor-name">{sponsor.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="sponsor-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Heart size={24} className="cta-icon" />
          <h3>Want to Sponsor DevForge 2K26?</h3>
          <p>Join us in empowering the next generation of developers</p>
          <motion.a
            href="mailto:sponsor@devforge2k26.com"
            className="sponsor-btn"
            whileHover={{ scale: 1.05 }}
          >
            Become a Sponsor
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
