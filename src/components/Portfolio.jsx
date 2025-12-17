import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Qureal AI",
    category: "Client Project",
    description: "AI-powered content creation platform generating social media creatives, promotional ads, and brand assets with single-prompt automation.",
    image: "/photos/qureal.png",
    tags: ["AI Solution", "Web Platform", "Content Automation"],
    year: "2024",
    featured: true,
    link: "https://www.qureal.com/",
    caseStudy: {
      project: "Qureal AI Platform",
      problem: "Client needed an AI-powered content creation platform that could generate diverse marketing materials with minimal user input.",
      solution: "Developed a comprehensive web application with AI integration for automated content generation, template library, and user-friendly interface.",
      tools: ["React", "Node.js", "AI APIs", "MongoDB", "Tailwind CSS"],
      outcome: "Live platform launched with AI content generation capabilities, template system, and user dashboard.",
      liveLink: "https://www.qureal.com/"
    }
  },
  {
    id: 2,
    title: "Dynavyx Technologies",
    category: "Client Project", 
    description: "Enterprise IT services company website showcasing AI automation, Microsoft solutions, and cybersecurity services for business transformation.",
    image: "/photos/dynavyx.png",
    tags: ["Corporate Website", "IT Services", "Enterprise Solutions"],
    year: "2024",
    featured: true,
    link: "https://www.dynavyx.com/",
    caseStudy: {
      project: "Dynavyx Corporate Website",
      problem: "Enterprise IT company needed a professional website to showcase services and attract B2B clients.",
      solution: "Created a modern corporate website with service pages, case studies, testimonials, and lead generation forms.",
      tools: ["Next.js", "TypeScript", "CMS Integration", "API Development", "Responsive Design"],
      outcome: "Professional corporate website launched with full service showcase and lead capture system.",
      liveLink: "https://www.dynavyx.com/"
    }
  },
  {
    id: 3,
    title: "Select Your Model",
    category: "Client Project",
    description: "Interactive model selection platform with advanced filtering and comparison tools for informed decision-making.",
    image: "/photos/selectyourmodel.png",
    tags: ["Web Application", "Interactive Platform", "User Experience"],
    year: "2024",
    featured: false,
    link: "https://selectyourmodel.com/",
    caseStudy: {
      project: "Model Comparison Platform",
      problem: "Client needed an interactive platform for users to compare and select models with advanced filtering.",
      solution: "Built a sophisticated comparison tool with real-time filtering, side-by-side comparisons, and detailed specifications.",
      tools: ["React", "State Management", "API Integration", "Database Design", "UI/UX"],
      outcome: "Interactive comparison platform launched with advanced filtering and comparison features.",
      liveLink: "https://selectyourmodel.com/"
    }
  },
  {
    id: 4,
    title: "HPL Maker",
    category: "Client Project",
    description: "Manufacturing website for high-pressure laminate sheets with 3D product visualization and comprehensive technical specifications.",
    image: "/photos/hpl.png",
    tags: ["E-Commerce", "3D Integration", "Industrial Website"],
    year: "2023",
    featured: false,
    link: "https://hplmaker.com/",
    caseStudy: {
      project: "HPL Manufacturer Website",
      problem: "Industrial manufacturer needed to showcase products with technical specs and enable B2B ordering.",
      solution: "Created an industrial e-commerce platform with product visualization, technical specs, and ordering system.",
      tools: ["E-Commerce Platform", "3D Integration", "Product Catalog", "Technical Documentation", "B2B Features"],
      outcome: "Manufacturing website launched with product showcase, technical specs, and ordering capabilities.",
      liveLink: "https://hplmaker.com/"
    }
  },
  {
    id: 5,
    title: "UV CLAAD Paints",
    category: "Client Project",
    description: "E-commerce platform for premium wall paints and industrial coatings with advanced color selection and ordering system.",
    image: "/photos/uvclaad.png",
    tags: ["E-Commerce", "Product Catalog", "Color Tools"],
    year: "2023",
    featured: false,
    link: "https://uvclaadpaints.com/",
    caseStudy: {
      project: "Paint E-Commerce Platform",
      problem: "Paint company needed an online store with color selection tools and ordering system for B2C and B2B customers.",
      solution: "Developed an e-commerce platform with color visualization, paint calculator, and dealer network integration.",
      tools: ["E-Commerce Development", "Color Tools", "Payment Integration", "Product Management", "Dealer System"],
      outcome: "E-commerce platform launched with color selection, ordering system, and dealer network.",
      liveLink: "https://uvclaadpaints.com/"
    }
  },
  {
    id: 6,
    title: "Pachmarhi Vibes",
    category: "Client Project",
    description: "Tourism and adventure website showcasing wildlife experiences, trekking packages, and cultural encounters in central India.",
    image: "/photos/pachmarhi.png",
    tags: ["Tourism Website", "Booking System", "Adventure Platform"],
    year: "2023",
    featured: false,
    link: "https://pachmarhivibes.com/",
    caseStudy: {
      project: "Tourism Booking Platform",
      problem: "Tourism company needed a website to showcase adventure packages and enable online bookings.",
      solution: "Built a tourism platform with package booking, activity scheduling, and immersive content showcase.",
      tools: ["Web Development", "Booking System", "Payment Integration", "Map Integration", "Content Management"],
      outcome: "Tourism website launched with booking system and package showcase.",
      liveLink: "https://pachmarhivibes.com/"
    }
  }
];

const Portfolio = ({ onHover, onLeave }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [hoveredId, setHoveredId] = useState(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="portfolio" className="portfolio-section" ref={containerRef}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`portfolio-item-link ${hoveredId === project.id ? 'hovered' : ''} ${project.featured ? 'featured' : ''}`}
              variants={projectVariants}
              onMouseEnter={() => { setHoveredId(project.id); onHover(); }}
              onMouseLeave={() => { setHoveredId(null); onLeave(); }}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.article 
                className="portfolio-item"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="portfolio-image-container">
                  <motion.div 
                    className="portfolio-image"
                    style={{ backgroundImage: `url(${project.image})` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <div className="portfolio-image-overlay">
                    <motion.div 
                      className="view-project-btn"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={hoveredId === project.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink size={24} />
                    </motion.div>
                  </div>
                  <div className="portfolio-year">{project.year}</div>
                  {project.featured && (
                    <motion.div 
                      className="portfolio-featured-badge"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Sparkles size={12} />
                      <span>Featured</span>
                    </motion.div>
                  )}
                </div>

                <div className="portfolio-content">
                  <div className="portfolio-meta">
                    <span className="portfolio-category">{project.category}</span>
                    <motion.div
                      animate={{ x: hoveredId === project.id ? 4 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="portfolio-arrow" size={18} />
                    </motion.div>
                  </div>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-tags">
                    {project.tags.map((tag, i) => (
                      <motion.span 
                        key={i} 
                        className="portfolio-tag"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  {project.caseStudy && (
                    <div className="case-study-preview">
                      <div className="case-study-content">
                        <div className="case-study-section">
                          <h4>Problem</h4>
                          <p>{project.caseStudy.problem}</p>
                        </div>
                        <div className="case-study-section">
                          <h4>Solution</h4>
                          <p>{project.caseStudy.solution}</p>
                        </div>
                        <div className="case-study-section">
                          <h4>Tools Used</h4>
                          <div className="tools-list">
                            {project.caseStudy.tools.map((tool, i) => (
                              <span key={i} className="tool-tag">{tool}</span>
                            ))}
                          </div>
                        </div>
                        <div className="case-study-section">
                          <h4>Outcome</h4>
                          <p>{project.caseStudy.outcome}</p>
                        </div>
                      </div>
                      <a href={project.caseStudy.liveLink} target="_blank" rel="noopener noreferrer" className="view-live-project-btn">
                        View Live Project
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.article>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cta-content">
            <motion.div 
              className="cta-icon"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles size={24} />
            </motion.div>
            <h3>Ready to create something extraordinary?</h3>
            <p>Let's turn your ideas into a digital masterpiece that drives real results.</p>
            <motion.a 
              href="#contact" 
              className="magnetic-btn"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="btn-text">Start Your Project</span>
              <ArrowUpRight size={18} className="btn-icon" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
