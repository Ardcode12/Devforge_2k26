import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, Coffee, Code, Award, PartyPopper,
  Sunrise, Moon, Utensils, Lightbulb, Trophy,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import './Timeline.css';

const Timeline = () => {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = {
    1: [
      {
        time: '09:00 AM - 09:30 AM',
        title: 'Inaugural',
        description: 'Welcome address, briefing, and official kick-off for DevForge 2K26',
        icon: <PartyPopper size={26} />,
        type: 'ceremony',
      },
      {
        time: '09:30 AM - 10:45 AM',
        title: 'Coding',
        description: 'The clock starts! Complete focus on ideation and initial architecture',
        icon: <Code size={26} />,
        type: 'start',
      },
      {
        time: '10:45 AM - 11:00 AM',
        title: 'Refreshment',
        description: 'Take a quick breather and refresh your minds',
        icon: <Coffee size={26} />,
        type: 'break',
      },
      {
        time: '11:00 AM - 11:30 AM',
        title: 'Coding',
        description: 'Continue development and sprint towards mentoring prep',
        icon: <Code size={26} />,
        type: 'hack',
      },
      {
        time: '11:30 AM - 01:00 PM',
        title: 'Mentoring Session',
        description: 'Get expert guidance and validate your technical approach with industry mentors',
        icon: <Lightbulb size={26} />,
        type: 'mentor',
      },
      {
        time: '01:00 PM - 02:00 PM',
        title: 'Lunch',
        description: 'Refuel and recharge before the afternoon evaluation',
        icon: <Utensils size={26} />,
        type: 'break',
      },
      {
        time: '02:00 PM - 02:30 PM',
        title: 'Coding',
        description: 'Refine core components and prepare initial prototype demo',
        icon: <Code size={26} />,
        type: 'hack',
      },
      {
        time: '02:30 PM - 04:00 PM',
        title: 'Evaluation 1',
        description: 'First round review of project architecture and idea feasibility by judges',
        icon: <Award size={26} />,
        type: 'presentation',
      },
      {
        time: '04:00 PM - 04:30 PM',
        title: 'Refreshment',
        description: 'Evening snacks and tea break to re-energize',
        icon: <Coffee size={26} />,
        type: 'break',
      },
      {
        time: '06:00 PM - 07:00 PM',
        title: 'Coding',
        description: 'Incorporate judge feedback and build key functional features',
        icon: <Code size={26} />,
        type: 'hack',
      },
      {
        time: '08:00 PM - 09:00 PM',
        title: 'Dinner',
        description: 'Feast and network with fellow participants before the overnight phase',
        icon: <Utensils size={26} />,
        type: 'break',
      },
      {
        time: '09:00 PM - 11:30 PM',
        title: 'Coding & Evaluation 2',
        description: 'Midway sprint and second checkpoint evaluation with the panel',
        icon: <Award size={26} />,
        type: 'presentation',
      },
      {
        time: '11:30 PM - 12:30 AM',
        title: 'Culturals',
        description: 'Unwind and recharge with cultural entertainment and music',
        icon: <PartyPopper size={26} />,
        type: 'ceremony',
      },
      {
        time: '12:30 AM - 02:30 AM',
        title: 'Coding',
        description: 'Midnight coding sprint pushing core logic and integrations',
        icon: <Moon size={26} />,
        type: 'hack',
      },
      {
        time: '02:30 AM - 03:00 AM',
        title: 'Refreshment',
        description: 'Late night fuel, tea/coffee, and snacks',
        icon: <Coffee size={26} />,
        type: 'break',
      },
      {
        time: '03:00 AM - 06:00 AM',
        title: 'Coding',
        description: 'Deep overnight coding and polishing through the quiet hours',
        icon: <Code size={26} />,
        type: 'hack',
      },
    ],
    2: [
      {
        time: '06:00 AM - 08:00 AM',
        title: 'Break',
        description: 'Morning break, freshen up, and rest',
        icon: <Sunrise size={26} />,
        type: 'break',
      },
      {
        time: '08:00 AM - 08:45 AM',
        title: 'Breakfast',
        description: 'Nutritious morning breakfast before the final review',
        icon: <Utensils size={26} />,
        type: 'break',
      },
      {
        time: '09:00 AM - 10:45 AM',
        title: 'Final Evaluation',
        description: 'Comprehensive evaluation and live demo to the grand jury',
        icon: <Award size={26} />,
        type: 'presentation',
      },
      {
        time: '10:45 AM - 11:00 AM',
        title: 'Refreshment',
        description: 'Post-evaluation tea and refreshment break',
        icon: <Coffee size={26} />,
        type: 'break',
      },
      {
        time: '11:30 AM - 12:30 PM',
        title: 'Valedictory',
        description: 'Awards ceremony, cash prizes distribution, and closing celebration',
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
          <h2 className="section-title">24 Hours of Innovation</h2>
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
            <span className="day-date">Sept 22</span>
          </button>
          <div className="day-connector">
            <div className="connector-line"></div>
            <div className="connector-hours">24 HRS</div>
            <div className="connector-line"></div>
          </div>
          <button
            className={`day-btn ${activeDay === 2 ? 'active' : ''}`}
            onClick={() => setActiveDay(2)}
          >
            <span className="day-number">02</span>
            <span className="day-text">Day Two</span>
            <span className="day-date">Sept 23</span>
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
            <span>12 Hours</span>
            <span>24 Hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
