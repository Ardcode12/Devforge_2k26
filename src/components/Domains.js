import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Shield, Smartphone, ChevronRight, ArrowRight, X, Target, CheckCircle, Lightbulb } from 'lucide-react';
import './Domains.css';

const Domains = () => {
  const [activeDomain, setActiveDomain] = useState(0);
  const [selectedProblem, setSelectedProblem] = useState(null);

  const domains = [
    {
      icon: <Brain size={32} />,
      name: 'Artificial Intelligence',
      color: '#2563eb',
      description: 'Harness the power of artificial intelligence to solve complex problems and create intelligent solutions that transform industries.',
      problems: [
        {
          id: 1,
          title: 'AI-Powered Test Case Generator',
          description: 'Build an AI system that takes simple business requirements in natural language and generates relevant test cases with positive and negative scenarios.',
          detailedDescription: 'Build an AI-powered system that can take simple business requirements written in natural language and generate relevant test cases. The system should identify key scenarios, including positive and negative cases, and organize them in a structured format. Participants may optionally simulate test execution or visualize results through a simple interface.',
          objectives: [
            'Develop intelligent understanding of natural language requirements',
            'Generate comprehensive test cases including positive and negative scenarios',
            'Organize test cases in a structured, readable format',
            'Optionally simulate test execution or visualize results through an interface',
          ],
          deliverables: ['Working prototype', 'Test case output samples', 'Demo presentation'],
        },
        {
          id: 2,
          title: 'AI-Powered Incident Analyzer',
          description: 'Create an AI system that analyzes incident reports or system logs to classify them by severity, category, and identify potential root causes.',
          detailedDescription: 'Build an AI-powered system that can analyze incident reports or system logs and automatically classify them based on severity, category, and potential root cause. The system should provide meaningful insights such as identifying recurring issues, suggesting possible resolutions, and prioritizing critical incidents. Participants may use structured or unstructured data and present results through a simple dashboard or visualization.',
          objectives: [
            'Implement intelligent analysis and pattern recognition on logs/reports',
            'Classify incidents by severity, category, and potential root cause',
            'Identify recurring issues and suggest possible resolutions',
            'Prioritize critical incidents and present actionable insights via dashboard',
          ],
          deliverables: ['Analysis system', 'Dashboard/visualization', 'Documentation'],
        },
      ],
    },
    {
      icon: <Shield size={32} />,
      name: 'Cyber Security and IoT',
      color: '#dc2626',
      description: 'Build robust security solutions that protect digital assets, and innovate with connected devices to automate and monitor our physical world.',
      problems: [
        {
          id: 1,
          category: 'Cyber Security',
          title: 'AI-Driven Web Application Security Suite',
          description: 'Create a security suite that filters and blocks attacks like SQL Injection, XSS, CSRF, RCE while continuously scanning for vulnerabilities and suggesting code-level fixes.',
          detailedDescription: 'Build a prototype or working model that can filter and block attacks like SQL Injection, XSS, CSRF, RCE, etc. The system should continuously scan for vulnerabilities and suggest code-level fixes. It must support different languages and frameworks. Input includes HTTP/HTTPS requests and application code-base. Expected output: attack prevention alerts, vulnerability reports, and remediation suggestions.',
          objectives: [
            'Implement real-time WAF with auto-logging of blocked requests',
            'Build AI Scanner for OWASP Top 10 vulnerabilities',
            'Provide fix recommendations with code snippets',
            'Support multiple languages and frameworks',
          ],
          deliverables: ['Security suite prototype', 'Vulnerability reports', 'Demo presentation'],
        },
        {
          id: 2,
          category: 'IoT',
          title: 'Insider Threat & Zero Trust Monitoring System',
          description: 'Design a Zero Trust Model where every access is continuously verified and insider anomalies are flagged with risk scoring.',
          detailedDescription: 'Design a Zero Trust Model where every access is continuously verified, and insider anomalies are flagged. Inputs include user login records, file access logs, and device fingerprints. Expected output: Zero Trust Prototype for Enterprise, insider risk score, and access decisions (Allow/Deny). The system should implement User and Entity Behavior Analytics with micro-segmentation of access.',
          objectives: [
            'Implement User and Entity Behavior Analytics (UEBA)',
            'Create micro-segmentation of access controls',
            'Build insider risk scoring system with Allow/Deny decisions',
            'Design dashboard displaying suspicious activities',
          ],
          deliverables: ['Zero Trust prototype', 'Risk scoring system', 'Security dashboard'],
        },
      ],
    },
    {
      icon: <Smartphone size={32} />,
      name: 'Mobile Application',
      color: '#059669',
      description: 'Create innovative mobile applications that solve real-world problems and deliver exceptional user experiences on smartphones and tablets.',
      problems: [
        {
          id: 1,
          title: 'Offline-First Disaster Response System',
          description: 'Develop a mobile application that enables reliable communication and coordination during natural disasters in the absence of internet connectivity using p2p mesh networking.',
          detailedDescription: 'Develop a mobile application that enables reliable communication and coordination during natural disasters in the absence of internet connectivity. The system should utilize peer-to-peer mesh networking technologies such as Bluetooth and WiFi Direct to transmit SOS messages, location data, and critical alerts across devices. It should incorporate on-device artificial intelligence to assess the severity of reported incidents using text, voice, and image inputs, thereby prioritizing rescue efforts. The application must also support decentralized data synchronization, dynamic hazard mapping, and efficient resource allocation once connectivity is restored.',
          objectives: [
            'Implement P2P mesh networking for offline communication via Bluetooth/WiFi Direct',
            'Integrate on-device AI to assess severity of incidents from multi-modal inputs',
            'Develop a dynamic hazard mapping system for real-time risk assessment',
            'Enable decentralized data synchronization upon reconnection',
          ],
          techStack: ['React Native/Flutter', 'Mesh Networking', 'On-Device AI', 'Offline Databases'],
          deliverables: ['Mobile app prototype', 'Mesh network demonstration', 'Architecture presentation'],
        },
        {
          id: 2,
          title: 'AI-Driven Document Verification System',
          description: 'Design a mobile app using computer vision and machine learning to detect fraudulent documents, analyze structural inconsistencies, and validate against trusted sources.',
          detailedDescription: 'Design a mobile application capable of detecting and preventing the use of fraudulent certificates and official documents. The system should employ computer vision and machine learning techniques to analyze document structure, detect inconsistencies in fonts, signatures, and images, and identify signs of tampering. It should integrate optical character recognition for extracting textual data and validating it against trusted sources. Additionally, the solution should support secure verification mechanisms such as QR code validation and optional blockchain-based storage to ensure authenticity, traceability, and resistance to forgery.',
          objectives: [
            'Implement CV and ML to detect structural and forensic inconsistencies',
            'Integrate OCR for textual data extraction and validation',
            'Develop secure QR code validation mechanisms',
            'Implement optional blockchain-based storage for authenticity and traceability',
          ],
          techStack: ['React Native/Flutter', 'Computer Vision/ML', 'OCR Engine', 'Blockchain/Web3'],
          deliverables: ['Mobile verification app prototype', 'Fraud detection demo', 'System workflow'],
        },
      ],
    },
  ];

  const openProblemModal = (problem, domainColor, domainName) => {
    setSelectedProblem({ ...problem, domainColor, domainName });
  };

  const closeProblemModal = () => {
    setSelectedProblem(null);
  };

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
                      onClick={() => openProblemModal(problem, domains[activeDomain].color, domains[activeDomain].name)}
                    >
                      <div className="problem-number">
                        <span>{String(index + 1).padStart(2, '0')}</span>
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
                <span className="modal-domain">{selectedProblem.category || selectedProblem.domainName}</span>
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Domains;
