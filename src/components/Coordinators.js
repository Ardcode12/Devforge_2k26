import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Users, Shield, Cpu, Globe, Smartphone, Award, UserCheck } from 'lucide-react';
import './Coordinators.css';

const Coordinators = () => {
  const overallCoordinators = [
    {
      name: 'Mohammed Yunus A',
      phone: '7010499316',
      role: 'Overall Coordinator',
    },
    {
      name: 'Shreya J',
      phone: '9842484828',
      role: 'Overall Coordinator',
    },
    {
      name: 'Mithik Karthikeyan',
      phone: '8220391947',
      role: 'Overall Coordinator',
    },
    {
      name: 'Mohan raja',
      phone: '9003948329',
      role: 'Overall Coordinator',
    },
  ];

  const domainCoordinators = [
    {
      domain: 'Fullstack with Cyber',
      tag: 'FS',
      color: '#C1121F',
      icon: <Shield size={22} />,
      members: [
        { name: 'Krithika S', phone: '63799624' },
        { name: 'Shehsanth', phone: '8072953989' },
      ],
    },
    {
      domain: 'Enterprise App Dev',
      tag: 'EA',
      color: '#7C5CFF',
      icon: <Globe size={22} />,
      members: [
        { name: 'Mohan raja', phone: '9003948329' },
        { name: 'Sounderhari', phone: '9489669639' },
      ],
    },
    {
      domain: 'AI / ML',
      tag: 'AI',
      color: '#E8C36A',
      icon: <Cpu size={22} />,
      members: [
        { name: 'Shreya J', phone: '9842484828' },
        { name: 'Arnald', phone:'9080176624' },
      ],
    },
    {
      domain: 'Mobile App',
      tag: 'MB',
      color: '#4A90D9',
      icon: <Smartphone size={22} />,
      members: [
        { name: 'Dharnish BM', phone: '9842375676' },
        { name: 'Navaneethan', phone: '9342512455' },
      ],
    },
  ];

  const formatPhoneHref = (p) => {
    if (!p) return '#';
    const digits = p.replace(/\s+/g, '');
    return digits.length === 10 ? `tel:+91${digits}` : `tel:${digits}`;
  };

  const formatPhoneDisplay = (p) => {
    if (!p) return 'Contact via Team';
    const digits = p.replace(/\s+/g, '');
    if (digits.length === 10) {
      return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
    }
    return `+91 ${digits}`;
  };

  return (
    <section id="coordinators" className="coordinators">
      <div className="coordinators-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Team & Support</span>
          <h2 className="section-title">Event Coordinators</h2>
          <p className="section-description">
            Have questions or need assistance during DevForge 2K26? Reach out directly to our overall leads or domain-specific student coordinators.
          </p>
        </motion.div>

        {/* Overall Coordinators */}
        <div className="coordinators-group">
          <motion.div
            className="group-title-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="group-badge">
              <Award size={18} />
              <span>Leadership</span>
            </div>
            <h3 className="group-heading">Overall Coordinators</h3>
          </motion.div>

          <div className="overall-grid">
            {overallCoordinators.map((coord, index) => (
              <motion.div
                key={index}
                className="overall-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="card-ambient-glow"></div>
                <div className="card-avatar">
                  <UserCheck size={26} />
                </div>
                <div className="card-details">
                  <span className="card-role">{coord.role}</span>
                  <h4 className="card-name">{coord.name}</h4>
                  <a
                    href={formatPhoneHref(coord.phone)}
                    className="card-phone-link"
                  >
                    <Phone size={14} />
                    <span>{formatPhoneDisplay(coord.phone)}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Domain Wise Coordinators */}
        <div className="coordinators-group">
          <motion.div
            className="group-title-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="group-badge domain-badge">
              <Users size={18} />
              <span>Track Specialists</span>
            </div>
            <h3 className="group-heading">Domain Coordinators</h3>
          </motion.div>

          <div className="domain-coordinators-grid">
            {domainCoordinators.map((item, index) => (
              <motion.div
                key={index}
                className="domain-coord-card"
                style={{ '--domain-accent': item.color }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="domain-card-header">
                  <div className="domain-card-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="domain-tag-pill">{item.tag} TRACK</span>
                    <h4 className="domain-card-title">{item.domain}</h4>
                  </div>
                </div>

                <div className="domain-card-members">
                  {item.members.map((member, mIdx) => (
                    <div key={mIdx} className="domain-member-row">
                      <div className="member-info">
                        <span className="member-name">{member.name}</span>
                        {member.phone ? (
                          <a
                            href={formatPhoneHref(member.phone)}
                            className="member-phone"
                          >
                            <Phone size={13} />
                            <span>{formatPhoneDisplay(member.phone)}</span>
                          </a>
                        ) : (
                          <span className="member-phone-muted">Coordinator</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coordinators;
