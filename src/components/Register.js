import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, School, Users, ArrowRight, Check, Sparkles } from 'lucide-react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    teamSize: '1',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const benefits = [
    'Access to 30-hour hackathon',
    'Free meals & refreshments',
    'Expert mentorship sessions',
    'Networking opportunities',
    'Exclusive swag & goodies',
    'Certificate of participation',
  ];

  return (
    <section id="register" className="register">
      <div className="register-container">
        <div className="register-content">
          <motion.div
            className="register-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Join Us</span>
            <h2 className="register-title">Ready to Hack?</h2>
            <p className="register-description">
              Register now to secure your spot at DevForge 2K26. Limited seats available!
            </p>

            <div className="benefits-list">
              <h4>What you will get:</h4>
              <ul>
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Check size={18} />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="register-stats">
              <div className="stat">
                <span className="stat-value">500+</span>
                <span className="stat-text">Registrations</span>
              </div>
              <div className="stat">
                <span className="stat-value">50+</span>
                <span className="stat-text">Teams Formed</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="register-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!isSubmitted ? (
              <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <Sparkles size={24} />
                  <h3>Register Now</h3>
                </div>

                <div className="form-group">
                  <label htmlFor="name">
                    <User size={18} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <Mail size={18} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <Phone size={18} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="college">
                    <School size={18} />
                    College Name
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="Enter your college name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="teamSize">
                    <Users size={18} />
                    Team Size
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    required
                  >
                    <option value="1">Individual (1)</option>
                    <option value="2">2 Members</option>
                    <option value="3">3 Members</option>
                    <option value="4">4 Members</option>
                  </select>
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now
                  <ArrowRight size={20} />
                </motion.button>

                <p className="form-note">
                  By registering, you agree to our terms and conditions
                </p>
              </form>
            ) : (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="success-icon">
                  <Check size={40} />
                </div>
                <h3>Registration Successful!</h3>
                <p>
                  Thank you for registering for DevForge 2K26. We have sent a confirmation
                  email to <strong>{formData.email}</strong>.
                </p>
                <motion.button
                  className="another-btn"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', college: '', teamSize: '1' });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Another
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Register;
