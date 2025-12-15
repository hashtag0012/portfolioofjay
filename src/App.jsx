import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyMe from './components/WhyMe';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorVariant, setCursorVariant] = useState('default');
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const cursorEnter = () => setCursorVariant('hover');
  const cursorLeave = () => setCursorVariant('default');

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && (
          <motion.div 
            className="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <CustomCursor variant={cursorVariant} />
            <Navigation onHover={cursorEnter} onLeave={cursorLeave} />
            
            <motion.div 
              className="progress-bar"
              style={{ scaleX }}
            />
            
            <div className="grain-overlay"></div>
            
            <div className="ambient-light">
              <div className="light light-1"></div>
              <div className="light light-2"></div>
              <div className="light light-3"></div>
              <div className="light light-4"></div>
            </div>

            <main ref={containerRef}>
              <Hero onHover={cursorEnter} onLeave={cursorLeave} />
              <Services onHover={cursorEnter} onLeave={cursorLeave} />
              <Portfolio onHover={cursorEnter} onLeave={cursorLeave} />
              <WhyMe onHover={cursorEnter} onLeave={cursorLeave} />
              <Contact onHover={cursorEnter} onLeave={cursorLeave} />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
