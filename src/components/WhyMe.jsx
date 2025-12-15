import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Zap, 
  MessageCircle, 
  Target, 
  Users, 
  Clock, 
  Shield,
  Star,
  Award
} from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: "Lightning-Fast Delivery",
    description: "Most tasks completed within 24-48 hours. When deadlines matter, I deliver.",
    metric: "24-48h",
    color: "#f59e0b"
  },
  {
    icon: MessageCircle,
    title: "Crystal-Clear Communication",
    description: "No confusing jargon. Regular updates. Questions answered within hours, not days.",
    metric: "24/7",
    color: "#22c55e"
  },
  {
    icon: Target,
    title: "Zero Missed Deadlines",
    description: "My track record speaks for itself. Every project delivered on time, every single time.",
    metric: "100%",
    color: "#6366f1"
  },
  {
    icon: Users,
    title: "Agency-Level Experience",
    description: "Collaborated with teams across 15+ countries. I understand how professionals work.",
    metric: "5+ yrs",
    color: "#a855f7"
  },
  {
    icon: Clock,
    title: "Flexible & Available",
    description: "Need urgent changes at midnight? I've got you covered. Your timeline is my priority.",
    metric: "Always",
    color: "#ec4899"
  },
  {
    icon: Shield,
    title: "Premium Quality Code",
    description: "Clean, documented, tested. No shortcuts, no technical debt. Built to last.",
    metric: "A+",
    color: "#14b8a6"
  }
];

const testimonials = [
  {
    text: "Jay transformed our outdated website into a conversion machine. Within 30 days, our leads increased by 340%. Absolutely phenomenal work!",
    author: "Sarah Mitchell",
    role: "CEO, TechStartup Inc.",
    avatar: "SM",
    rating: 5
  },
  {
    text: "Working with Jay feels like having a senior developer on your team. Fast, reliable, and the code quality is exceptional.",
    author: "Marcus Chen",
    role: "CTO, Digital Agency",
    avatar: "MC",
    rating: 5
  }
];

const WhyMe = ({ onHover, onLeave }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="whyme" className="whyme-section" ref={containerRef}>
      <div className="container">
        <div className="whyme-layout">
          <motion.div 
            className="whyme-left"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-eyebrow">Why Choose Me</span>
            <h2 className="section-title">
              Built on <span className="gradient-text">trust</span>,<br />
              proven by <span className="serif">results</span>
            </h2>
            <p className="whyme-description">
              I'm not just another freelancer. I'm your dedicated partner in digital success. 
              Every project gets my full attention, expertise, and commitment to excellence.
            </p>

            <motion.div 
              className="whyme-stats-mini"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div 
                className="stat-mini"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <Award size={20} />
                <span className="stat-mini-value">50+</span>
                <span className="stat-mini-label">Happy Clients</span>
              </motion.div>
              <motion.div 
                className="stat-mini"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <Star size={20} />
                <span className="stat-mini-value">5.0</span>
                <span className="stat-mini-label">Average Rating</span>
              </motion.div>
            </motion.div>

            <div className="whyme-testimonials">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="whyme-testimonial"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="testimonial-quote">"</div>
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.avatar}</div>
                    <div className="author-info">
                      <strong>{testimonial.author}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="whyme-right"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                className="reason-card"
                variants={itemVariants}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                style={{ '--accent-color': reason.color }}
                whileHover={{ 
                  x: 8, 
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="reason-icon" 
                  style={{ background: `linear-gradient(135deg, ${reason.color} 0%, ${reason.color}80 100%)` }}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <reason.icon size={20} strokeWidth={1.5} />
                </motion.div>
                <div className="reason-content">
                  <div className="reason-header">
                    <h3>{reason.title}</h3>
                    <span className="reason-metric" style={{ color: reason.color, background: `${reason.color}15` }}>{reason.metric}</span>
                  </div>
                  <p>{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
