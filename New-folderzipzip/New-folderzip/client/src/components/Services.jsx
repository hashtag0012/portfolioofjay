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
  Sparkles
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom-built websites that captivate visitors and convert them into customers. From sleek landing pages to complex business platforms.",
    tags: ["Business Sites", "Landing Pages", "Responsive Design"],
    number: "01",
    highlight: "Most Popular"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Launch your online store with confidence. WooCommerce & Shopify expertise to get your products selling worldwide.",
    tags: ["WordPress", "WooCommerce", "Shopify"],
    number: "02",
    highlight: null
  },
  {
    icon: Palette,
    title: "React Development",
    description: "Modern, blazing-fast React applications with buttery-smooth animations and interactive user experiences.",
    tags: ["React", "Next.js", "Animations"],
    number: "03",
    highlight: "Premium"
  },
  {
    icon: Plug,
    title: "API & Integrations",
    description: "Seamless connections to payment gateways, CRMs, and third-party services. Making your systems work together effortlessly.",
    tags: ["Stripe", "PayPal", "REST APIs"],
    number: "04",
    highlight: null
  },
  {
    icon: Wrench,
    title: "Bug Fixes & Speed",
    description: "Got a broken website? Slow loading times? I'll diagnose, fix, and optimize your site for peak performance.",
    tags: ["Bug Fixes", "Performance", "SEO"],
    number: "05",
    highlight: "Quick Fix"
  },
  {
    icon: Headphones,
    title: "Ongoing Partnership",
    description: "Long-term support, regular updates, and white-label development for agencies. Your reliable tech partner.",
    tags: ["Maintenance", "Updates", "White-label"],
    number: "06",
    highlight: null
  }
];

const Services = ({ onHover, onLeave }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="services" className="services-section" ref={containerRef}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
            >
              <div className="service-card-inner">
                <span className="service-number">{service.number}</span>
                {service.highlight && (
                  <div className="service-highlight">
                    <Sparkles size={10} />
                    <span>{service.highlight}</span>
                  </div>
                )}
                <div className="service-header">
                  <div className="service-icon-wrapper">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight className="service-arrow" size={20} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="service-tag">{tag}</span>
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p>Need something custom? Let's discuss your unique requirements.</p>
          <a href="#contact" className="outline-btn" onMouseEnter={onHover} onMouseLeave={onLeave}>
            <span>Get Custom Quote</span>
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
