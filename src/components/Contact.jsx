import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MessageCircle, ArrowUpRight, Sparkles, Send, Clock, CheckCircle, Heart } from 'lucide-react';

const Contact = ({ onHover, onLeave }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const benefits = [
    { icon: Clock, text: "Response within 2 hours" },
    { icon: CheckCircle, text: "Free project consultation" },
    { icon: Send, text: "Detailed quote in 24h" }
  ];

  return (
    <section id="contact" className="contact-section" ref={containerRef}>
      <div className="container">
        <motion.div 
          className="contact-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-header">
            <motion.div 
              className="contact-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="badge-glow"></span>
              <Sparkles size={14} />
              <span>Let's Connect</span>
            </motion.div>
            
            <h2 className="contact-title">
              Have a project<br />
              in <span className="gradient-text">mind</span>?
            </h2>
            
            <p className="contact-description">
              Whether you need a stunning website, a complex web application, or 
              expert technical guidance — I'm here to make it happen. Let's create 
              something amazing together.
            </p>

            <div className="contact-benefits">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="contact-benefit"
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <benefit.icon size={16} />
                  <span>{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="contact-methods">
            <motion.a 
              href="https://wa.me/1234567890" 
              className="contact-card whatsapp"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="contact-card-icon">
                <MessageCircle size={28} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">WhatsApp</span>
                <span className="contact-card-value">Fastest Response</span>
                <span className="contact-card-subtext">Usually replies instantly</span>
              </div>
              <ArrowUpRight className="contact-card-arrow" size={20} />
              <div className="contact-card-bg"></div>
            </motion.a>

            <motion.a 
              href="mailto:jay@example.com" 
              className="contact-card email"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="contact-card-icon">
                <Mail size={28} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Email</span>
                <span className="contact-card-value">jay@example.com</span>
                <span className="contact-card-subtext">For detailed discussions</span>
              </div>
              <ArrowUpRight className="contact-card-arrow" size={20} />
              <div className="contact-card-bg"></div>
            </motion.a>
          </div>

          <motion.div 
            className="contact-availability"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="availability-indicator">
              <span className="indicator-dot"></span>
              <span className="indicator-ring"></span>
            </div>
            <span>Currently accepting new projects for Q1 2025</span>
          </motion.div>

          <motion.div 
            className="contact-decoration"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <svg className="deco-svg" viewBox="0 0 200 200" fill="none">
              <motion.circle 
                cx="100" cy="100" r="80" 
                stroke="url(#contactGrad)" 
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.circle 
                cx="100" cy="100" r="60" 
                stroke="url(#contactGrad)" 
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
              <motion.circle 
                cx="100" cy="100" r="40" 
                stroke="url(#contactGrad)" 
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.9 }}
              />
              <defs>
                <linearGradient id="contactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>

        <motion.footer 
          className="footer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="footer-content">
            <div className="footer-brand">
              <motion.span 
                className="footer-logo"
                whileHover={{ scale: 1.05 }}
              >
                Jay
              </motion.span>
              <span className="footer-divider"></span>
              <span className="footer-tagline">Turning Ideas Into Digital Reality</span>
            </div>
            <p className="footer-copyright">
              © 2024 Jay. Crafted with <Heart size={12} className="heart-icon" /> and precision.
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
