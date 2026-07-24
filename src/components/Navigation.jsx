import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navigation = ({ onHover, onLeave }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'services', 'portfolio', 'whyme', 'faq', 'contact'];
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
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`navigation ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-container">
          <a 
            href="#hero" 
            className="nav-logo"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <span className="logo-text">JAY</span>
            <span className="logo-dot"></span>
          </a>

          <div className="nav-links desktop-only">
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

          <div className="nav-actions">
            <a 
              href="#contact" 
              className="nav-cta desktop-only"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} />
            </a>

            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              className="mobile-menu-content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-menu-header">
                <span className="logo-text">JAY</span>
                <button 
                  className="mobile-close-btn" 
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mobile-menu-links">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={handleLinkClick}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={18} />
                  </a>
                ))}
              </div>

              <div className="mobile-menu-footer">
                <a 
                  href="#contact" 
                  className="magnetic-btn mobile-cta-btn"
                  onClick={handleLinkClick}
                >
                  <span className="btn-text">Start a Project</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

