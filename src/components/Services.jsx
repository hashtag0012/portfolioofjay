import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Globe, 
  ShoppingCart, 
  Palette, 
  Plug, 
  Wrench, 
  Headphones,
  ArrowUpRight,
  Sparkles,
  Brush,
  Megaphone,
  Video,
  PenTool
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Full Stack Development",
    description: "Building scalable and high-performance web applications using Next.js, React, Node.js, and TypeScript, with robust backend architectures, secure RESTful APIs, and clean code practices.",
    tags: [],
    number: "01",
    highlight: "Most Popular"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Developing end-to-end e-commerce platforms with secure payment gateways (Stripe, PayPal), inventory management, and seamless shopping experiences.",
    tags: [],
    number: "02",
    highlight: null
  },
  {
    icon: Palette,
    title: "UI/UX Design & Frontend",
    description: "Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion. Creating intuitive experiences with clean design systems and pixel-perfect implementations.",
    tags: [],
    number: "03",
    highlight: "Premium"
  },
  {
    icon: Brush,
    title: "Graphics Designing",
    description: "Creating compelling visual designs using Adobe Creative Suite (Photoshop, Illustrator, InDesign) and modern design tools for branding, marketing materials, and digital assets.",
    tags: [],
    number: "04",
    highlight: "Creative"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Implementing comprehensive digital marketing strategies with SEO optimization, social media management, content marketing, Google Ads, and analytics-driven campaigns.",
    tags: [],
    number: "05",
    highlight: "Growth"
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing services using Adobe Premiere Pro, After Effects, and DaVinci Resolve for promotional content, social media videos, and corporate presentations.",
    tags: [],
    number: "06",
    highlight: "Multimedia"
  },
  {
    icon: PenTool,
    title: "Logo Designing",
    description: "Crafting unique brand identities and logo designs using vector graphics, typography principles, and brand strategy to create memorable visual representations.",
    tags: [],
    number: "07",
    highlight: "Branding"
  },
  {
    icon: Plug,
    title: "API & Integrations",
    description: "Implementing robust API solutions and third-party integrations (Stripe, Twilio, various CRMs) to connect your systems and automate workflows.",
    tags: [],
    number: "08",
    highlight: null
  },
  {
    icon: Wrench,
    title: "Bug Fixes & Performance",
    description: "Identifying and resolving critical bugs, optimizing database queries, and improving website load times for enhanced user experience and SEO.",
    tags: [],
    number: "09",
    highlight: "Quick Fix"
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description: "Providing ongoing technical support, regular updates, security patches, and performance monitoring to ensure your applications run smoothly.",
    tags: [],
    number: "10",
    highlight: null
  }
];

const Services = ({ onHover, onLeave }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="services" className="services-section" ref={containerRef}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-eyebrow">What I Offer</span>
          <h2 className="section-title">
            Solutions that <span className="gradient-text">scale</span><br />
            your <span className="serif">business</span>
          </h2>
          <p className="section-subtitle">
            From concept to launch, I deliver end-to-end web solutions 
            tailored to your unique goals and audience.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              whileHover={{ 
                y: -8, 
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-card-inner">
                <span className="service-number">{service.number}</span>
                {service.highlight && (
                  <motion.div 
                    className="service-highlight"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Sparkles size={10} />
                    <span>{service.highlight}</span>
                  </motion.div>
                )}
                <div className="service-header">
                  <motion.div 
                    className="service-icon-wrapper"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon size={24} strokeWidth={1.5} />
                  </motion.div>
                  <ArrowUpRight className="service-arrow" size={20} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag, i) => (
                    <motion.span 
                      key={i} 
                      className="service-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="service-hover-line"></div>
              <div className="service-glow"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>Need something custom? Let's discuss your unique requirements.</p>
          <motion.a 
            href="#contact" 
            className="outline-btn" 
            onMouseEnter={onHover} 
            onMouseLeave={onLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get Custom Quote</span>
            <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
