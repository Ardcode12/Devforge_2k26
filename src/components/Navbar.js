import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Zap } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Domains', href: '#domains' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href) => {
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-container">
        <motion.a
          href="#home"
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
        >
          <div className="logo-icon-wrapper">
            <Code2 size={24} />
            <Zap size={12} className="logo-zap" />
          </div>
          <span className="logo-text">
            <span className="logo-dev">Dev</span>
            <span className="logo-forge">Forge</span>
          </span>
          <span className="logo-year">2K26</span>
        </motion.a>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="https://forms.google.com/your-form-url"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-register"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(139, 69, 19, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.a>
        </div>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="mobile-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="https://forms.google.com/your-form-url"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-register"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.05 }}
            >
              Register Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
