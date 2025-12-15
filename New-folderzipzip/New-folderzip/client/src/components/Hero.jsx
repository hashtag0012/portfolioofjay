import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Rocket, Star } from 'lucide-react';

const Hero = ({ onHover, onLeave }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 2.0
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0, rotateX: -90 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: 2.0 + i * 0.08,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const name = "Jay";
  const tagline = "Transforming ideas into stunning digital realities";

  return (
    <section id="hero" className="hero" ref={containerRef}>
      <motion.div 
        className="hero-inner"
        style={{ y, opacity, scale }}
      >
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
              
              <h1 className="hero-name">
                {name.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="name-letter"
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>

              <motion.p 
                className="hero-tagline"
                variants={itemVariants}
              >
                {tagline.split(' ').map((word, i) => (
                  <span key={i} className="word-wrapper">
                    <motion.span
                      className={`tagline-word ${word === 'stunning' || word === 'realities' ? 'highlight' : ''}`}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 2.4 + i * 0.1,
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
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
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 2.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-image-container">
              <div className="hero-image-glow"></div>
              <div className="hero-image-border"></div>
              <motion.div
                className="hero-image-floating-elements"
                variants={floatingVariants}
                animate="animate"
              >
                <div className="floating-element floating-1">
                  <Code2 size={20} />
                </div>
                <div className="floating-element floating-2">
                  <Rocket size={18} />
                </div>
                <div className="floating-element floating-3">
                  <Star size={16} />
                </div>
              </motion.div>
              <img 
                src="/jay-photo.png" 
                alt="Jay - Web Developer" 
                className="hero-image"
              />
              <div className="hero-image-overlay"></div>
            </div>
            <motion.div 
              className="hero-image-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.8 }}
            >
              <span className="badge-icon">✦</span>
              <span>Full-Stack Developer</span>
            </motion.div>
            <motion.div 
              className="hero-experience-badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.0, duration: 0.8 }}
            >
              <span className="exp-number">5+</span>
              <span className="exp-text">Years<br/>Experience</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 1 }}
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
