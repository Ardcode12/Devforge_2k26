import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain, Smartphone, ChevronRight, ArrowRight, X, Target, CheckCircle,
  Lightbulb, Phone, Code2, Building2, UserCheck, AlertCircle
} from 'lucide-react';
import './Domains.css';

const Domains = () => {
  const [activeDomain, setActiveDomain] = useState(0);
  const [selectedProblem, setSelectedProblem] = useState(null);

  const domains = [
    {
      code: 'EX',
      tag: 'Build. Scale. Deploy.',
      icon: <Building2 size={32} />,
      name: 'EnterpriseX',
      color: '#7C5CFF',
      description: 'Build. Scale. Deploy. Design production-grade enterprise systems, from development through deployment, scaling, and operations.',
      coordinators: [
        { name: 'Mohan raja', phone: '9003948329' },
        { name: 'Sounderhari', phone: '9489669639' },
      ],
      problems: [],
    },
    {
      code: 'CS',
      tag: 'Build. Secure. Defend.',
      icon: <Code2 size={32} />,
      name: 'CyberStack',
      color: '#C1121F',
      description: 'Build. Secure. Defend. Engineer complete web applications end to end while securing them against modern threats and vulnerabilities.',
      coordinators: [
        { name: 'Krithika S', phone: '63799624' },
        { name: 'Shehsanth', phone: '8072953989' },
      ],
      problems: [],
    },
    {
      code: 'AI',
      tag: 'Think. Learn. Create.',
      icon: <Brain size={32} />,
      name: 'AI Innovate',
      color: '#E8C36A',
      description: 'Think. Learn. Create. Build intelligent systems that learn from data and solve real-world problems with AI and machine learning.',
      coordinators: [
        { name: 'Shreya J', phone: '9842484828' },
        { name: 'Arnald', phone: '9080176624' },
      ],
      problems: [],
    },
    {
      code: 'MX',
      tag: 'Mobile Application Development',
      icon: <Smartphone size={32} />,
      name: 'MobileX',
      color: '#4A90D9',
      description: 'Mobile Application Development. Create innovative mobile applications that solve real-world problems and deliver exceptional user experiences.',
      coordinators: [
        { name: 'Dharnish BM', phone: '9842375676' },
        { name: 'Navaneethan', phone: '9342512455' },
      ],
      problems: [],
    },
  ];

  const openProblemModal = (problem, domainColor, domainName, coordinators) => {
    setSelectedProblem({ ...problem, domainColor, domainName, coordinators });
  };

  const closeProblemModal = () => {
    setSelectedProblem(null);
  };

  const formatPhoneHref = (p) => {
    if (!p) return '#';
    const digits = p.replace(/\s+/g, '');
    return digits.length === 10 ? `tel:+91${digits}` : `tel:${digits}`;
  };

  const formatPhoneDisplay = (p) => {
    if (!p) return 'Coordinator';
    const digits = p.replace(/\s+/g, '');
    if (digits.length === 10) {
      return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
    }
    return `+91 ${digits}`;
  };

  const currentDomain = domains[activeDomain];
  const activeProblems = currentDomain.problems;

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
            Select from four exciting domains, each supported by dedicated track coordinators and mentorship.
          </p>
          <div className="selection-process-notice">
            <AlertCircle size={16} />
            <span>Note: The problem statements provided here are for the team selection / screening process only.</span>
          </div>
        </motion.div>

        <div className="domains-content">
          {/* Domain Tabs List */}
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
                  <div className="tab-badge-row">
                    <span className="tab-track-tag">{domain.tag}</span>
                  </div>
                  <h3 className="tab-name">{domain.name}</h3>
                  <p className="tab-desc">{domain.description}</p>
                  <div className="tab-coordinators-preview">
                    <UserCheck size={13} />
                    <span>
                      {domain.coordinators.map((c) => c.name).join(' • ')}
                    </span>
                  </div>
                </div>
                <ChevronRight className="tab-arrow" size={20} />
              </motion.button>
            ))}
          </motion.div>

          {/* Problem Statement Area */}
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
                {/* Header with Title and Domain Track Badge */}
                <div className="problems-header-row">
                  <div>
                    <h3 className="problems-title">
                      <span
                        className="domain-indicator"
                        style={{ background: currentDomain.color }}
                      ></span>
                      {currentDomain.name}
                    </h3>
                    <span className="problems-selection-tag">
                      <AlertCircle size={13} />
                      Problems are for the selection process only
                    </span>
                  </div>
                  <span className="problems-track-pill" style={{ borderColor: currentDomain.color }}>
                    {currentDomain.tag}
                  </span>
                </div>

                {/* Direct Coordinator Contact Card in Problem Statements view */}
                <div className="track-specialists-panel" style={{ '--track-accent': currentDomain.color }}>
                  <div className="panel-header">
                    <span className="panel-subtitle">TRACK SPECIALISTS</span>
                    <h4 className="panel-title">Domain Coordinators</h4>
                  </div>
                  <div className="panel-coords-grid">
                    {currentDomain.coordinators.map((coord, cIdx) => (
                      <div key={cIdx} className="panel-coord-item">
                        <div className="panel-coord-icon">
                          <UserCheck size={18} />
                        </div>
                        <div className="panel-coord-info">
                          <span className="panel-coord-name">{coord.name}</span>
                          {coord.phone ? (
                            <a
                              href={formatPhoneHref(coord.phone)}
                              className="panel-coord-phone"
                            >
                              <Phone size={12} />
                              <span>{formatPhoneDisplay(coord.phone)}</span>
                            </a>
                          ) : (
                            <span className="panel-coord-phone-muted">Coordinator</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Problems List or Coming Soon */}
                {activeProblems.length > 0 ? (
                  <div className="problems-list">
                    {activeProblems.map((problem, index) => (
                      <motion.div
                        key={problem.id}
                        className="problem-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => openProblemModal(problem, currentDomain.color, currentDomain.name, currentDomain.coordinators)}
                      >
                        <div className="problem-number">
                          <span>
                            {currentDomain.code}
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="problem-content">
                          <h4 className="problem-title">{problem.title}</h4>
                          <p className="problem-description">{problem.description}</p>
                          <span className="click-hint">Click for details</span>
                        </div>
                        <ArrowRight className="problem-arrow" size={20} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="problems-coming-soon">
                    <div className="coming-soon-icon">
                      <Lightbulb size={30} />
                    </div>
                    <h4>Selection Process Statements Coming Soon</h4>
                    <p>
                      The problem statements for {currentDomain.name} are for the selection process only and will be released shortly.
                      Feel free to reach out to the track coordinators above for any queries!
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Problem Detail Modal */}
      <AnimatePresence>
        {selectedProblem && (
          <motion.div
            className="problem-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProblemModal}
          >
            <motion.div
              className="problem-modal"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{ '--modal-color': selectedProblem.domainColor }}
            >
              <button className="modal-close" onClick={closeProblemModal}>
                <X size={24} />
              </button>

              <div className="modal-header">
                <div className="modal-top-tags">
                  <span className="modal-domain">{selectedProblem.category || selectedProblem.domainName}</span>
                  <span className="modal-selection-pill">
                    <AlertCircle size={12} />
                    Selection Process Only
                  </span>
                </div>
                <h2 className="modal-title">{selectedProblem.title}</h2>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <div className="modal-section-header">
                    <Lightbulb size={20} />
                    <h3>Problem Overview</h3>
                  </div>
                  <p>{selectedProblem.detailedDescription}</p>
                </div>

                <div className="modal-section">
                  <div className="modal-section-header">
                    <Target size={20} />
                    <h3>Objectives</h3>
                  </div>
                  <ul className="modal-objectives">
                    {selectedProblem.objectives.map((objective, index) => (
                      <li key={index}>
                        <CheckCircle size={16} />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>Deliverables</h3>
                  <div className="modal-tags">
                    {selectedProblem.deliverables.map((item, index) => (
                      <span key={index} className="modal-tag deliverable">{item}</span>
                    ))}
                  </div>
                </div>

                {/* Track Coordinators inside modal */}
                {selectedProblem.coordinators && selectedProblem.coordinators.length > 0 && (
                  <div className="modal-section modal-coordinators-section">
                    <h3>Domain Coordinators</h3>
                    <div className="modal-coords-list">
                      {selectedProblem.coordinators.map((c, i) => (
                        <div key={i} className="modal-coord-badge">
                          <UserCheck size={14} />
                          <span className="m-coord-name">{c.name}:</span>
                          {c.phone ? (
                            <a href={formatPhoneHref(c.phone)} className="m-coord-phone">
                              {formatPhoneDisplay(c.phone)}
                            </a>
                          ) : (
                            <span className="m-coord-phone">Coordinator</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Domains;
