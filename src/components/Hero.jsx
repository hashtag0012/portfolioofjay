import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Rocket, Star } from 'lucide-react';

const Hero = ({ onHover, onLeave }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
            >
              <span className="badge-pulse"></span>
              <Sparkles size={14} />
              <span>Open for New Projects</span>
            </motion.div>

            <div className="hero-title-wrapper">
              <motion.span 
                className="hero-intro"
                variants={itemVariants}
              >
                Hey there, I'm
              </motion.span>
              
              <motion.h1 
                className="hero-name"
                variants={itemVariants}
              >
                <span className="name-text">Jay</span>
              </motion.h1>

              <motion.p 
                className="hero-tagline"
                variants={itemVariants}
              >
                Transforming ideas into <span className="highlight">stunning</span> digital <span className="highlight">realities</span>
              </motion.p>
            </div>

            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              A passionate web developer crafting pixel-perfect websites, 
              dynamic React applications, and seamless e-commerce experiences. 
              Your vision, my code — delivered with speed and precision.
            </motion.p>

            <motion.div 
              className="hero-cta"
              variants={itemVariants}
            >
              <a 
                href="#contact" 
                className="magnetic-btn"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <span className="btn-text">Let's Create Together</span>
                <ArrowRight size={18} className="btn-icon" />
              </a>
              <a 
                href="#portfolio" 
                className="outline-btn"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <span>Explore My Work</span>
              </a>
            </motion.div>

            <motion.div 
              className="hero-stats"
              variants={itemVariants}
            >
              {[
                { value: '50+', label: 'Projects Delivered', icon: Rocket },
                { value: '24h', label: 'Fast Turnaround', icon: Code2 },
                { value: '100%', label: 'Client Satisfaction', icon: Star }
              ].map((stat, i) => (
                <div key={i} className="stat-item">
                  <div className="stat-icon">
                    <stat.icon size={16} />
                  </div>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="hero-image-wrapper"
            variants={itemVariants}
          >
            <div className="hero-image-container">
              <div className="hero-image-glow"></div>
              <div className="hero-image-border"></div>
              <div className="hero-image-floating-elements">
                <div className="floating-element floating-1">
                  <Code2 size={20} />
                </div>
                <div className="floating-element floating-2">
                  <Rocket size={18} />
                </div>
              </div>
              <img 
                src="/jay-photo.png" 
                alt="Jay - Web Developer" 
                className="hero-image"
              />
              <div className="hero-image-overlay"></div>
            </div>
            <div className="hero-image-badge">
              <span className="badge-icon">✦</span>
              <span>Full-Stack Developer</span>
            </div>
            <div className="hero-experience-badge">
              <span className="exp-number">5+</span>
              <span className="exp-text">Years<br/>Experience</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <span>Scroll to Explore</span>
          <div className="scroll-line">
            <motion.div 
              className="scroll-dot"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
