import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = ({ onHover, onLeave }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'services', 'portfolio', 'whyme', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Work' },
    { id: 'whyme', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-container">
        <a 
          href="#hero" 
          className="nav-logo"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <span className="logo-text">J</span>
          <span className="logo-dot"></span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <span className="nav-link-text">{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  className="nav-link-indicator"
                  layoutId="navIndicator"
                  transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                />
              )}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="nav-cta"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <span>Let's Talk</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
