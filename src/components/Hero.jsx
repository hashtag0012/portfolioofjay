import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Rocket, Star } from 'lucide-react';

const Hero = ({ onHover, onLeave }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [-6, 6, -6],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="hero" className="hero" ref={containerRef}>
      <div className="hero-inner">
        <motion.div 
          className="container hero-layout"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="hero-content">
            <motion.div 
              className="hero-badge"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <span className="badge-pulse"></span>
              <Sparkles size={14} />
              <span>Available for Client Projects</span>
            </motion.div>

            <div className="hero-title-wrapper">
              <motion.span 
                className="hero-intro"
                variants={itemVariants}
              >
                Hi there, I'm
              </motion.span>
              
              <motion.h1 
                className="hero-name"
                variants={itemVariants}
              >
                <span className="name-text single-line-name">
                  JAY NAYAK
                </span>
              </motion.h1>

              <motion.h2 
                className="hero-tagline"
                variants={itemVariants}
              >
                Full Stack Developer & <span className="highlight">UI/UX Designer</span> crafting high-converting <span className="highlight">websites & apps</span> that grow businesses.
              </motion.h2>
            </div>

            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Jay Nayak is a Full Stack Developer, UI/UX Designer &amp; Website Designer with 5+ years of experience. From custom React &amp; Next.js web apps to e-commerce platforms, graphic design, and digital marketing — one expert for everything digital.
            </motion.p>

            <motion.div 
              className="hero-cta"
              variants={itemVariants}
            >
              <motion.a 
                href="#contact" 
                className="magnetic-btn"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="btn-text">Start Your Project</span>
                <ArrowRight size={18} className="btn-icon" />
              </motion.a>
              <motion.a 
                href="#portfolio" 
                className="outline-btn"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Selected Work</span>
              </motion.a>
            </motion.div>

            <motion.div 
              className="hero-stats"
              variants={itemVariants}
            >
              {[
                { value: '50+', label: 'Successful Projects', icon: Rocket },
                { value: '24-48h', label: 'Rapid Delivery', icon: Code2 },
                { value: '100%', label: 'Client Satisfaction', icon: Star }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="stat-item"
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="stat-icon">
                    <stat.icon size={16} />
                  </div>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="hero-image-wrapper"
            variants={itemVariants}
          >
            <motion.div 
              className="hero-image-container"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              <div className="hero-image-glow"></div>
              <div className="hero-image-border"></div>
              
              <div className="hero-image-floating-elements">
                <motion.div 
                  className="floating-element floating-1"
                  variants={floatVariants}
                  animate="animate"
                >
                  <Code2 size={18} />
                </motion.div>
                <motion.div 
                  className="floating-element floating-2"
                  variants={floatVariants}
                  animate="animate"
                >
                  <Rocket size={16} />
                </motion.div>
              </div>

              <div className="hero-image-frame">
                <img 
                  src="/jay-photo.png" 
                  alt="Jay Nayak - Full-Stack Developer & UI/UX Specialist" 
                  className="hero-image"
                  loading="eager"
                />
              </div>

              <div className="hero-image-overlay"></div>
            </motion.div>

            <motion.div 
              className="hero-image-badge"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <span className="badge-icon">✦</span>
              <span>Senior Full-Stack Engineer</span>
            </motion.div>

            <motion.div 
              className="hero-experience-badge"
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <span className="exp-number">5+</span>
              <span className="exp-text">Years Of<br/>Excellence</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-line">
            <motion.div 
              className="scroll-dot"
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

