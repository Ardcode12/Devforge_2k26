import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, Coffee, Users, Code, Award, PartyPopper,
  Sunrise, Moon, Utensils, Lightbulb, Send, Trophy,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import './Timeline.css';

const Timeline = () => {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = {
    1: [
      {
        time: '09:00 AM',
        title: 'Registration & Check-in',
        description: 'Arrive early, collect your kit, find your workspace, and connect with fellow hackers',
        icon: <Sunrise size={26} />,
        type: 'start',
      },
      {
        time: '10:00 AM',
        title: 'Grand Opening Ceremony',
        description: 'Welcome address, rules briefing, problem statement reveal & team formation',
        icon: <PartyPopper size={26} />,
        type: 'ceremony',
      },
      {
        time: '11:00 AM',
        title: 'Hacking Begins',
        description: 'The clock starts! Begin building your innovative solutions',
        icon: <Code size={26} />,
        type: 'hack',
      },
      {
        time: '01:30 PM',
        title: 'Lunch Break',
        description: 'Refuel with delicious food while networking with other teams',
        icon: <Utensils size={26} />,
        type: 'break',
      },
      {
        time: '04:00 PM',
        title: 'Mentor Round 1',
        description: 'First mentorship session - get expert guidance on your approach',
        icon: <Lightbulb size={26} />,
        type: 'mentor',
      },
      {
        time: '07:30 PM',
        title: 'Dinner & Networking',
        description: 'Evening feast and open networking session with sponsors',
        icon: <Coffee size={26} />,
        type: 'break',
      },
      {
        time: '10:00 PM',
        title: 'Night Owl Session',
        description: 'Late night coding with music, snacks, and energy drinks',
        icon: <Moon size={26} />,
        type: 'hack',
      },
    ],
    2: [
      {
        time: '12:00 AM',
        title: 'Midnight Checkpoint',
        description: 'Progress review, midnight snacks, and team wellness check',
        icon: <Clock size={26} />,
        type: 'checkpoint',
      },
      {
        time: '06:00 AM',
        title: 'Sunrise Breakfast',
        description: 'Early morning breakfast for the dedicated night coders',
        icon: <Sunrise size={26} />,
        type: 'break',
      },
      {
        time: '09:00 AM',
        title: 'Mentor Round 2',
        description: 'Final mentorship session - polish your pitch and demo',
        icon: <Users size={26} />,
        type: 'mentor',
      },
      {
        time: '12:00 PM',
        title: 'Final Lunch',
        description: 'Last meal before the submission sprint',
        icon: <Utensils size={26} />,
        type: 'break',
      },
      {
        time: '03:00 PM',
        title: 'Code Freeze',
        description: 'Final commits! Prepare your presentations and demos',
        icon: <Send size={26} />,
        type: 'deadline',
      },
      {
        time: '04:00 PM',
        title: 'Project Presentations',
        description: 'Showcase your innovation to the judges and audience',
        icon: <Award size={26} />,
        type: 'presentation',
      },
      {
        time: '06:00 PM',
        title: 'Award Ceremony',
        description: 'Winners announcement, prizes distribution & closing',
        icon: <Trophy size={26} />,
        type: 'ceremony',
      },
    ],
  };

  const currentEvents = scheduleData[activeDay];

  return (
    <section id="timeline" className="timeline">
      <div className="timeline-bg">
        <div className="timeline-pattern"></div>
      </div>

      <div className="timeline-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Event Schedule</span>
          <h2 className="section-title">30 Hours of Innovation</h2>
          <p className="section-description">
            A meticulously crafted schedule to maximize creativity, learning, and building
          </p>
        </motion.div>

        <motion.div
          className="day-selector"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            className={`day-btn ${activeDay === 1 ? 'active' : ''}`}
            onClick={() => setActiveDay(1)}
          >
            <span className="day-number">01</span>
            <span className="day-text">Day One</span>
            <span className="day-date">April 10</span>
          </button>
          <div className="day-connector">
            <div className="connector-line"></div>
            <div className="connector-hours">30 HRS</div>
            <div className="connector-line"></div>
          </div>
          <button
            className={`day-btn ${activeDay === 2 ? 'active' : ''}`}
            onClick={() => setActiveDay(2)}
          >
            <span className="day-number">02</span>
            <span className="day-text">Day Two</span>
            <span className="day-date">April 11</span>
          </button>
        </motion.div>

        <div className="timeline-navigation">
          <button
            className="nav-arrow prev"
            onClick={() => setActiveDay(1)}
            disabled={activeDay === 1}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="nav-arrow next"
            onClick={() => setActiveDay(2)}
            disabled={activeDay === 2}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            className="timeline-grid"
            initial={{ opacity: 0, x: activeDay === 1 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeDay === 1 ? 50 : -50 }}
            transition={{ duration: 0.4 }}
          >
            {currentEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`timeline-card type-${event.type}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="card-glow"></div>
                <div className="card-header">
                  <div className="card-time">
                    <Clock size={14} />
                    <span>{event.time}</span>
                  </div>
                  <div className={`card-type-badge ${event.type}`}>
                    {event.type}
                  </div>
                </div>
                <div className="card-icon">
                  {event.icon}
                </div>
                <h3 className="card-title">{event.title}</h3>
                <p className="card-description">{event.description}</p>
                <div className="card-decoration">
                  <div className="deco-line"></div>
                  <div className="deco-dot"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="timeline-progress"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: activeDay === 1 ? '50%' : '100%' }}></div>
          </div>
          <div className="progress-labels">
            <span>Start</span>
            <span>15 Hours</span>
            <span>30 Hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
