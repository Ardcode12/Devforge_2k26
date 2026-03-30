import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, Coffee, Users, Code, Award, PartyPopper,
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
        description: 'Welcome address, rules briefing, and kick-off for DevForge 2K26',
        icon: <PartyPopper size={26} />,
        type: 'ceremony',
      },
      {
        time: '09:30 AM',
        title: 'Coding Begins',
        description: 'The clock starts! Complete focus on building your innovative solutions',
        icon: <Code size={26} />,
        type: 'start',
      },
      {
        time: '10:45 AM - 11:00 AM',
        title: 'Break (1)',
        description: 'Take a quick breather and refresh your minds',
        icon: <Coffee size={26} />,
        type: 'break',
      },
      {
        time: '11:00 AM - 01:00 PM',
        title: 'Mentoring Session',
        description: 'Get expert guidance and validate your technical approach',
        icon: <Lightbulb size={26} />,
        type: 'mentor',
      },
      {
        time: '01:00 PM - 02:00 PM',
        title: 'Lunch',
        description: 'Refuel with delicious food before the first evaluation',
        icon: <Utensils size={26} />,
        type: 'break',
      },
      {
        time: '02:00 PM - 04:30 PM',
        title: '1st Round Evaluation',
        description: 'Initial review of your project idea and basic setup by the judges',
        icon: <Award size={26} />,
        type: 'presentation',
      },
      {
        time: '04:30 PM - 05:00 PM',
        title: 'Break (2)',
        description: 'Evening tea and snacks',
        icon: <Coffee size={26} />,
        type: 'break',
      },
      {
        time: '05:00 PM - 06:30 PM',
        title: 'Coding Resumes',
        description: 'Implement feedback and start building the core features',
        icon: <Code size={26} />,
        type: 'hack',
      },
      {
        time: '06:30 PM - 08:00 PM',
        title: '2nd Mentoring Session',
        description: 'Sorting out the bugs and refining project flow',
        icon: <Users size={26} />,
        type: 'mentor',
      },
      {
        time: '08:00 PM - 09:00 PM',
        title: 'Dinner',
        description: 'Evening feast and networking session with other teams',
        icon: <Utensils size={26} />,
        type: 'break',
      },
      {
        time: '09:00 PM - 11:00 PM',
        title: 'Coding Resumes & 2nd Round Evaluation',
        description: 'Late night progress check while you continue hacking',
        icon: <Award size={26} />,
        type: 'presentation',
      },
      {
        time: '11:00 PM - 12:00 AM',
        title: 'Culturals / DJ',
        description: 'Unwind and enjoy the midnight music to recharge',
        icon: <PartyPopper size={26} />,
        type: 'ceremony',
      },
      {
        time: '12:00 AM - 02:00 AM',
        title: 'Coding Resumes',
        description: 'The midnight sprint begins',
        icon: <Moon size={26} />,
        type: 'hack',
      },
      {
        time: '02:00 AM - 02:30 AM',
        title: 'Break (3)',
        description: 'Stretch your legs and grab some late night snacks',
        icon: <Coffee size={26} />,
        type: 'break',
      },
      {
        time: '02:30 AM - 06:00 AM',
        title: 'Coding Resumes',
        description: 'Pushing through the hardest hours of the night',
        icon: <Code size={26} />,
        type: 'hack',
      },
    ],
    2: [
      {
        time: '06:00 AM - 08:00 AM',
        title: 'Break',
        description: 'Take a well-deserved rest or shower',
        icon: <Sunrise size={26} />,
        type: 'break',
      },
      {
        time: '08:00 AM - 08:45 AM',
        title: 'Breakfast',
        description: 'Early morning breakfast for the dedicated coders',
        icon: <Utensils size={26} />,
        type: 'break',
      },
      {
        time: '09:00 AM - 10:45 AM',
        title: '3rd Round Evaluation',
        description: 'Checking the fully functional prototype before the final stretch',
        icon: <Award size={26} />,
        type: 'presentation',
      },
      {
        time: '10:45 AM - 11:00 AM',
        title: 'Break (4)',
        description: 'Brief refreshment break',
        icon: <Coffee size={26} />,
        type: 'break',
      },
      {
        time: '11:00 AM - 01:00 PM',
        title: 'Coding Resumes',
        description: 'Final polishing phase and deployment',
        icon: <Code size={26} />,
        type: 'hack',
      },
      {
        time: '01:00 PM - 02:00 PM',
        title: 'Lunch',
        description: 'Last meal before the final presentations',
        icon: <Utensils size={26} />,
        type: 'break',
      },
      {
        time: '02:00 PM - 03:30 PM',
        title: 'Final Round Evaluation',
        description: 'Pitch your finalized built solution to the panel',
        icon: <Award size={26} />,
        type: 'presentation',
      },
      {
        time: '03:30 PM - 04:00 PM',
        title: 'Break & Panel Discussion',
        description: 'Relax and listen to insights from our industry experts',
        icon: <Users size={26} />,
        type: 'mentor',
      },
      {
        time: '04:00 PM - 04:30 PM',
        title: 'Valedictory',
        description: 'Awards ceremony, prize distribution, and concluding remarks',
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
            <span className="day-date">April 18</span>
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
            <span className="day-date">April 19</span>
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
