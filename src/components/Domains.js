import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cpu, Leaf, ChevronRight, ArrowRight } from 'lucide-react';
import './Domains.css';

const Domains = () => {
  const [activeDomain, setActiveDomain] = useState(0);

  const domains = [
    {
      icon: <Brain size={32} />,
      name: 'AI & Machine Learning',
      color: '#2563eb',
      description: 'Harness the power of artificial intelligence to solve complex problems and create intelligent solutions.',
      problems: [
        {
          id: 1,
          title: 'Smart Healthcare Assistant',
          description: 'Develop an AI-powered healthcare assistant that can analyze symptoms, suggest preliminary diagnoses, and recommend when to seek professional medical help.',
        },
        {
          id: 2,
          title: 'Educational Content Personalization',
          description: 'Create a machine learning system that adapts educational content based on individual learning patterns, strengths, and areas needing improvement.',
        },
        {
          id: 3,
          title: 'Fake News Detection System',
          description: 'Build an NLP-based solution to identify and flag potentially misleading or false information across social media and news platforms.',
        },
      ],
    },
    {
      icon: <Cpu size={32} />,
      name: 'Web3 & Blockchain',
      color: '#8b5a2b',
      description: 'Explore decentralized technologies and build the future of trustless, transparent digital systems.',
      problems: [
        {
          id: 1,
          title: 'Decentralized Identity Verification',
          description: 'Create a blockchain-based identity management system that allows users to control and share their credentials securely without centralized authorities.',
        },
        {
          id: 2,
          title: 'Transparent Supply Chain Tracker',
          description: 'Develop a Web3 solution to track products from source to consumer, ensuring authenticity and ethical sourcing throughout the supply chain.',
        },
        {
          id: 3,
          title: 'DAO for Community Governance',
          description: 'Build a decentralized autonomous organization platform for local communities to make collective decisions on resource allocation and initiatives.',
        },
      ],
    },
    {
      icon: <Leaf size={32} />,
      name: 'Sustainability & Green Tech',
      color: '#059669',
      description: 'Develop innovative solutions that address environmental challenges and promote sustainable living.',
      problems: [
        {
          id: 1,
          title: 'Carbon Footprint Calculator & Reducer',
          description: 'Create an application that tracks individual or organizational carbon emissions and provides actionable recommendations for reduction.',
        },
        {
          id: 2,
          title: 'Smart Waste Management System',
          description: 'Develop an IoT-integrated platform for optimizing waste collection routes, promoting recycling, and reducing landfill contributions.',
        },
        {
          id: 3,
          title: 'Sustainable Agriculture Advisor',
          description: 'Build a solution that helps farmers implement sustainable practices through crop rotation suggestions, water management, and organic pest control guidance.',
        },
      ],
    },
  ];

  return (
    <section id="domains" className="domains">
      <div className="domains-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Challenge Tracks</span>
          <h2 className="section-title">Choose Your Domain</h2>
          <p className="section-description">
            Select from three exciting domains, each featuring unique problem statements
            designed to challenge and inspire innovative solutions.
          </p>
        </motion.div>

        <div className="domains-content">
          <motion.div
            className="domain-tabs"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {domains.map((domain, index) => (
              <motion.button
                key={index}
                className={`domain-tab ${activeDomain === index ? 'active' : ''}`}
                onClick={() => setActiveDomain(index)}
                whileHover={{ x: 10 }}
                style={{
                  '--domain-color': domain.color,
                }}
              >
                <div className="tab-icon">{domain.icon}</div>
                <div className="tab-content">
                  <h3 className="tab-name">{domain.name}</h3>
                  <p className="tab-desc">{domain.description}</p>
                </div>
                <ChevronRight className="tab-arrow" size={20} />
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="problems-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="problems-container"
              >
                <h3 className="problems-title">
                  <span
                    className="domain-indicator"
                    style={{ background: domains[activeDomain].color }}
                  ></span>
                  Problem Statements
                </h3>
                <div className="problems-list">
                  {domains[activeDomain].problems.map((problem, index) => (
                    <motion.div
                      key={problem.id}
                      className="problem-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="problem-number">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="problem-content">
                        <h4 className="problem-title">{problem.title}</h4>
                        <p className="problem-description">{problem.description}</p>
                      </div>
                      <ArrowRight className="problem-arrow" size={20} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Domains;
