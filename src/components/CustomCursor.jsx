import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = ({ variant }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      mixBlendMode: 'difference'
    },
    hover: {
      width: 60,
      height: 60,
      backgroundColor: 'rgba(99, 102, 241, 0.15)',
      border: '1px solid rgba(99, 102, 241, 0.5)',
      mixBlendMode: 'normal'
    }
  };

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          position: 'fixed',
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isVisible ? 1 : 0
        }}
        variants={variants}
        animate={variant}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />
      <motion.div
        className="cursor-ring"
        style={{
          position: 'fixed',
          left: cursorX,
          top: cursorY,
          x: '-50%',
          y: '-50%',
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: isVisible && variant === 'default' ? 0.5 : 0
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />
    </>
  );
};

export default CustomCursor;
