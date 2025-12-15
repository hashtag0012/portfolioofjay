import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "WooCommerce",
    description: "A stunning online store with custom theme, secure payment integration, and smart inventory management. Increased client sales by 200%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    tags: ["WordPress", "WooCommerce", "Stripe"],
    year: "2024",
    featured: true
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "React App",
    description: "Real-time analytics dashboard with beautiful data visualizations, seamless user management, and pixel-perfect responsive design.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    tags: ["React", "Chart.js", "REST API"],
    year: "2024",
    featured: true
  },
  {
    id: 3,
    title: "Agency Landing Page",
    category: "Business Website",
    description: "High-converting landing page that generates leads 24/7. Smooth animations, optimized forms, and top-tier SEO performance.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
    tags: ["HTML/CSS", "JavaScript", "GSAP"],
    year: "2023",
    featured: false
  },
  {
    id: 4,
    title: "Restaurant System",
    category: "Shopify",
    description: "Complete digital solution for a restaurant chain. Online ordering, table reservations, and customer loyalty program all in one.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop",
    tags: ["Shopify", "Liquid", "Custom Theme"],
    year: "2023",
    featured: false
  }
];

const Portfolio = ({ onHover, onLeave }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="portfolio" className="portfolio-section" ref={containerRef}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-eyebrow">Featured Projects</span>
          <h2 className="section-title">
            Crafted with <span className="gradient-text">passion</span>,<br />
            built for <span className="serif">impact</span>
          </h2>
          <p className="section-subtitle">
            Every project tells a story of collaboration, creativity, and 
            measurable results. Here's a glimpse of what we can achieve together.
          </p>
        </motion.div>

        <motion.div 
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.article 
              key={project.id}
              className={`portfolio-item ${hoveredId === project.id ? 'hovered' : ''} ${project.featured ? 'featured' : ''}`}
              variants={projectVariants}
              onMouseEnter={() => { setHoveredId(project.id); onHover(); }}
              onMouseLeave={() => { setHoveredId(null); onLeave(); }}
            >
              <div className="portfolio-image-container">
                <motion.div 
                  className="portfolio-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="portfolio-image-overlay">
                  <motion.div 
                    className="view-project-btn"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    animate={hoveredId === project.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink size={24} />
                  </motion.div>
                </div>
                <div className="portfolio-year">{project.year}</div>
                {project.featured && (
                  <div className="portfolio-featured-badge">
                    <Sparkles size={12} />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              <div className="portfolio-content">
                <div className="portfolio-meta">
                  <span className="portfolio-category">{project.category}</span>
                  <ArrowUpRight className="portfolio-arrow" size={18} />
                </div>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="portfolio-cta"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cta-content">
            <div className="cta-icon">
              <Sparkles size={24} />
            </div>
            <h3>Ready to create something extraordinary?</h3>
            <p>Let's turn your ideas into a digital masterpiece that drives real results.</p>
            <a 
              href="#contact" 
              className="magnetic-btn"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <span className="btn-text">Start Your Project</span>
              <ArrowUpRight size={18} className="btn-icon" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
