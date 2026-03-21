import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Mail, MapPin, Phone, Github, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className="logo-icon">
                <Code2 size={28} />
                <Zap size={14} className="logo-zap" />
              </div>
              <span className="logo-text">
                <span className="logo-dev">Dev</span>
                <span className="logo-forge">Forge</span>
                <span className="logo-year">2K26</span>
              </span>
            </a>
            <p className="footer-tagline">
              The ultimate 30-hour hackathon experience where innovation meets creativity.
            </p>
            
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4>Contact Us</h4>
            <ul>
              
              <li>
                <Phone size={18} />
                <a href="tel:+917010499316">+91 70104 99316</a>
              </li>
              <li>
                <MapPin size={18} />
                <span>Kongu Engineering College,Perundurai</span>
              </li>
            </ul>
          </motion.div>

          
        </div>

        <div className="footer-bottom">
          <p>
            Made with <Heart size={14} className="heart-icon" /> by DevForge Team
          </p>
          <p>
            © 2026 DevForge 2K26. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
