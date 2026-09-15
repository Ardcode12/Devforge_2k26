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
      problems: [
        {
          id: 'ex-01',
          category: 'Operations & Logistics',
          title: 'Warehouse & Inventory Management System (WMS)',
          description: 'Build a centralized platform for real-time inventory visibility, warehouse transfers, fulfillment decisions, and stock health across multiple locations.',
          detailedDescription: 'Enterprises operating across multiple warehouses often struggle with inconsistent stock counts, delayed receiving updates, and uncertainty about which location can fulfill an order fastest. Build a web-based single source of truth that lets staff receive stock, track movements between locations, and process outgoing orders. The system should suggest the optimal fulfillment warehouse based on stock levels and location, flag low-stock SKUs, and maintain an audit trail so managers can identify discrepancies and plan replenishment.',
          objectives: [
            'Add and receive stock while showing live quantities by SKU and warehouse.',
            'Transfer inventory between locations with a complete movement audit trail.',
            'Place and fulfill orders with an optimal warehouse recommendation.',
            'Flag low-stock items and present inventory health across all locations.',
          ],
          deliverables: [
            'Multi-warehouse inventory platform',
            'Receiving and stock transfer workflow',
            'Order fulfillment recommendation engine',
            'Live stock and audit dashboard',
          ],
        },
        {
          id: 'ex-02',
          category: 'Healthcare Operations',
          title: 'Hospital/Clinic Patient & Appointment Management System',
          description: 'Build a role-based platform that connects patients, doctors, and administrators while improving appointments, patient history access, and urgent-case triage.',
          detailedDescription: 'Clinics and small hospitals often rely on paper records, phone bookings, and disconnected schedules for doctors, rooms, beds, and equipment. Create a role-based web application where patients book available slots, doctors see a daily queue with patient history and notes, and administrative staff manage resource allocation. Include a basic triage mechanism that surfaces urgent cases ahead of routine bookings and reduces double-booking and wait times.',
          objectives: [
            'Book appointments against real-time doctor slot availability.',
            'Provide doctors with a daily schedule and quick patient history access.',
            'Let administrators manage rooms, beds, equipment, and resource availability.',
            'Flag urgent cases and reorder the queue ahead of routine appointments.',
          ],
          deliverables: [
            'Role-based patient, doctor, and admin application',
            'Appointment booking and availability workflow',
            'Doctor schedule with patient history view',
            'Urgency-aware queue and resource dashboard',
          ],
        },
      ],
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
      problems: [
        {
          id: 'cs-01',
          category: 'Threat Detection',
          title: 'Phishing & Malicious URL Detection Platform',
          description: 'Build a transparent full-stack platform that checks suspicious URLs, emails, and attachments before they cause harm.',
          detailedDescription: 'Employees and everyday users are frequently targeted by phishing emails and malicious links, while smaller teams often lack an accessible alternative to opaque security suites. Create a web application where users submit a URL, email, or file for analysis. Combine heuristics such as suspicious domain patterns, URL shorteners, risky TLDs, credential-harvesting keywords, mismatched sender domains, and optional public threat-intelligence APIs. Return a risk score with clear reasoning, maintain scan history and trends, support false-positive reports, and optionally demonstrate a browser quick-check or Slack/email forwarding integration.',
          objectives: [
            'Analyze submitted URLs, email content, and files using explainable security heuristics.',
            'Return a risk score with the exact signals that caused a warning.',
            'Maintain a user or team dashboard with scan history and risk trends.',
            'Allow false-positive flagging and optionally demonstrate a quick-check integration.',
          ],
          deliverables: [
            'URL, email, and attachment analysis workflow',
            'Risk scoring and reasoning interface',
            'Scan history and trend dashboard',
            'False-positive reporting or integration demo',
          ],
        },
        {
          id: 'cs-02',
          category: 'Application Security',
          title: 'Security Vulnerability & Compliance Tracker for Dev Teams',
          description: 'Build a developer-friendly platform to scan projects, prioritize security findings, and track remediation through release.',
          detailedDescription: 'Development teams often discover outdated dependencies, exposed secrets, and insecure configurations through ad hoc scans whose results disappear into chat threads or spreadsheets. Create a full-stack platform where teams connect a repository or upload a codebase or dependency file. Scan for known vulnerable dependencies, hardcoded secrets, and common misconfigurations, then generate prioritized findings with severity ratings and remediation guidance. Findings must be assignable and trackable through open, in progress, and resolved states, with a compliance dashboard showing security posture over time.',
          objectives: [
            'Run a scan against sample source code and dependency files.',
            'Detect vulnerable dependencies, hardcoded secrets, and common misconfigurations.',
            'Prioritize findings by severity with actionable remediation guidance.',
            'Assign findings and track them through open, in-progress, and resolved states.',
          ],
          deliverables: [
            'Repository or codebase scan workflow',
            'Severity-ranked findings list',
            'Assignment and remediation status pipeline',
            'Compliance and security posture dashboard',
          ],
        },
      ],
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
      problems: [
        {
          id: 'ai-01',
          category: 'Responsible AI',
          title: 'Resume-to-Role Fit Predictor with Bias Check',
          description: 'Build an NLP system that scores resume fit against a job description while auditing the screening process for potential bias.',
          detailedDescription: 'Create an explainable recruitment assistant that parses resumes and job descriptions, extracts relevant skills and experience, and produces a fit score. The system must also evaluate whether its screening decisions correlate with sensitive or proxy attributes such as gendered names, college tier, or other signals in a test dataset. Recruiters should be able to review flagged cases and understand why they were identified.',
          objectives: [
            'Extract skills, qualifications, and experience from resumes and job descriptions using NLP.',
            'Generate an explainable fit score with matched skills, missing skills, and supporting evidence.',
            'Measure potential screening bias across gendered names, college tiers, or other proxy attributes.',
            'Build a recruiter dashboard to review flagged cases and fairness-check results.',
          ],
          deliverables: [
            'Resume and job description parsing pipeline',
            'Explainable fit scoring model',
            'Bias detection and fairness report',
            'Recruiter review dashboard',
          ],
        },
        {
          id: 'ai-02',
          category: 'Trust & Safety',
          title: 'Fake News & Manipulated Media Detector',
          description: 'Analyze news articles and social posts to flag likely misinformation or manipulated content with confidence and evidence.',
          detailedDescription: 'Build a multimodal detection system that classifies text from news articles or social posts using a labeled dataset and optionally checks attached images for simple manipulation artifacts or duplicate use. The result should show a calibrated confidence score and transparent red flags, helping users investigate suspicious content without presenting an uncertain prediction as fact. Demonstrate the system through a simple browser extension or web application.',
          objectives: [
            'Train and evaluate a text-based fake news classification model on labeled data.',
            'Add a basic image forensics or duplication check for attached media.',
            'Explain predictions with confidence, highlighted text signals, and detected red flags.',
            'Provide a browser extension or web app for an interactive demonstration.',
          ],
          deliverables: [
            'Labeled-data text classification pipeline',
            'Basic image manipulation or duplication analysis',
            'Confidence and evidence-based result view',
            'Working browser extension or web app demo',
          ],
        },
      ],
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
      problems: [
        {
          id: 'mx-01',
          category: 'Emergency Response',
          title: 'Hyperlocal Emergency Response Coordinator',
          description: 'Build a mobile app that connects people needing urgent help with nearby verified volunteers and responders.',
          detailedDescription: 'Create a mobile application for medical, accident, and safety emergencies in areas where traditional emergency services may be slow to respond. Users should be able to send a one-tap SOS with live location, while nearby verified volunteers or responders receive a notification and can coordinate assistance. Include responder badges or trust levels, an offline SMS fallback for poor connectivity, post-incident reporting, and analytics that help evaluate response times.',
          objectives: [
            'Send a one-tap SOS with live location sharing.',
            'Discover and notify nearby verified volunteers or responders.',
            'Show responder verification badges and trust levels.',
            'Support offline SMS fallback, incident reports, and response analytics.',
          ],
          deliverables: [
            'Mobile SOS and live-location workflow',
            'Nearby responder discovery and notification',
            'Verification and trust-level system',
            'Offline fallback and incident analytics',
          ],
        },
        {
          id: 'mx-02',
          category: 'Accessible Learning',
          title: 'Local Language Micro-Learning for Migrant Workers',
          description: 'Build an offline-first mobile app for quickly learning essential local phrases for work, travel, healthcare, and daily life.',
          detailedDescription: 'Create a low-literacy-friendly mobile learning experience for migrant workers and travelers who need practical local language support in immediate contexts such as a work site, market, hospital, or transport hub. Offer phrase packs selected through GPS or a user-chosen scenario, work without reliable connectivity, provide audio pronunciation and speech practice feedback, and track progress with spaced-repetition-style review. Favor icons and simple interactions over heavy text.',
          objectives: [
            'Suggest context-based phrase packs through location or selected scenarios.',
            'Make lessons and audio available with zero or poor connectivity.',
            'Provide pronunciation practice with speech feedback.',
            'Track progress with spaced repetition and a simple icon-led interface.',
          ],
          deliverables: [
            'Context-aware phrase pack experience',
            'Offline-first lessons and audio pronunciation',
            'Speech practice and feedback flow',
            'Progress tracking with accessible UI',
          ],
        },
      ],
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
