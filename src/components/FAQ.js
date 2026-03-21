import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Who can participate in DevForge 2K26?',
      answer: 'DevForge 2K26 is open to all college students currently enrolled in undergraduate or postgraduate programs. You can participate individually or in teams of up to 3 members.',
    },
    {
      question: 'What is the team size limit?',
      answer: 'Teams can have a minimum of 1 and a maximum of 3 members. We encourage diverse teams with varied skill sets for the best experience.',
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No! DevForge 2K26 is completely free to participate. We believe in making hackathons accessible to everyone.',
    },
    {
      question: 'What should I bring to the hackathon?',
      answer: 'Bring your laptop, charger, any hardware you might need for your project, and your student ID. We will provide food, drinks, swag, and a great atmosphere!',
    },
    {
      question: 'Do I need prior hackathon experience?',
      answer: 'Not at all! DevForge welcomes participants of all experience levels. Whether you are a first-timer or a seasoned hacker, there is something for everyone.',
    },
    {
      question: 'Will food and accommodation be provided?',
      answer: 'Yes! We will provide meals, snacks, and beverages throughout the 30-hour event. Overnight accommodations will be arranged for participants who need them.',
    },
    {
      question: 'Can I start working on my project before the hackathon?',
      answer: 'No, all coding must begin after the hackathon officially starts. However, you can brainstorm ideas and plan your approach beforehand.',
    },
    {
      question: 'What technologies can I use?',
      answer: 'You are free to use any programming languages, frameworks, APIs, or tools you prefer. There are no restrictions on technology stacks.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Everything you need to know about DevForge 2K26
          </p>
        </motion.div>

        <motion.div
          className="faq-list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <div className="faq-icon">
                  <HelpCircle size={20} />
                </div>
                <span>{faq.question}</span>
                <motion.div
                  className="faq-chevron"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="faq-contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>Still have questions?</p>
          <a href="mailto:hello@devforge2k26.com">Contact Us</a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
