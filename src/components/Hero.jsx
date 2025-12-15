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
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [-8, 8, -8],
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
              whileHover={{ scale: 1.05 }}
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
                <motion.span 
                  className="name-text"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  Jay
                </motion.span>
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
              <motion.a 
                href="#contact" 
                className="magnetic-btn"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="btn-text">Let's Create Together</span>
                <ArrowRight size={18} className="btn-icon" />
              </motion.a>
              <motion.a 
                href="#portfolio" 
                className="outline-btn"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore My Work</span>
              </motion.a>
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
                <motion.div 
                  key={i} 
                  className="stat-item"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
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
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <div className="hero-image-glow"></div>
              <div className="hero-image-border"></div>
              <div className="hero-image-floating-elements">
                <motion.div 
                  className="floating-element floating-1"
                  variants={floatVariants}
                  animate="animate"
                >
                  <Code2 size={20} />
                </motion.div>
                <motion.div 
                  className="floating-element floating-2"
                  variants={floatVariants}
                  animate="animate"
                  style={{ animationDelay: "1s" }}
                >
                  <Rocket size={18} />
                </motion.div>
              </div>
              <img 
                src="/jay-photo.png" 
                alt="Jay - Web Developer" 
                className="hero-image"
              />
              <div className="hero-image-overlay"></div>
            </motion.div>
            <motion.div 
              className="hero-image-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="badge-icon">✦</span>
              <span>Full-Stack Developer</span>
            </motion.div>
            <motion.div 
              className="hero-experience-badge"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <span className="exp-number">5+</span>
              <span className="exp-text">Years<br/>Experience</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
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
      </motion.div>
    </section>
  );
};

export default Hero;
