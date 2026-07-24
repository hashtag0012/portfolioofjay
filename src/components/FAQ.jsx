import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "What services do you offer as a freelance web developer?",
    answer: "I offer a complete range of digital services — Full-Stack Web Development (React, Next.js, Node.js), custom E-Commerce platforms, UI/UX Design, Graphic & Logo Design, Digital Marketing, Video Editing, API Integrations, Bug Fixes, Performance Optimization, and ongoing Maintenance & Support. Essentially, anything you need to build, launch, or grow your digital presence.",
    category: "Services"
  },
  {
    id: 2,
    question: "How long does it take to build a website?",
    answer: "Turnaround time depends on the project scope. Simple fixes and landing pages are delivered in 24–48 hours. Full business websites take 1–2 weeks. Complex web applications with custom features take 2–6 weeks. I always communicate timelines upfront and hit every deadline — it's non-negotiable for me.",
    category: "Timeline"
  },
  {
    id: 3,
    question: "Can you build an e-commerce website for my business?",
    answer: "Absolutely. I specialize in end-to-end e-commerce development — secure payment gateways (Stripe, PayPal, Razorpay), product catalog management, inventory systems, order tracking, wishlist, customer accounts, and mobile-optimized shopping experiences built to convert. I've built successful e-commerce platforms for paint companies, manufacturers, and product brands.",
    category: "E-Commerce"
  },
  {
    id: 4,
    question: "Do you work with international clients?",
    answer: "Yes — I've worked with clients across 15+ countries including the USA, UK, UAE, Australia, Canada, and India. Collaboration happens seamlessly over WhatsApp, email, and video calls. Time zone differences have never been a blocker for my clients.",
    category: "Clients"
  },
  {
    id: 5,
    question: "What technologies and tools do you use?",
    answer: "My primary stack is React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS, and Framer Motion. For design I use Figma, Adobe Photoshop, and Illustrator. For e-commerce I work with Shopify, WooCommerce, and fully custom platforms depending on the business need.",
    category: "Tech Stack"
  },
  {
    id: 6,
    question: "How much does it cost to hire you?",
    answer: "Pricing depends on project complexity, features, and your timeline. I'm transparent about costs — no hidden fees, no surprises. Reach out via WhatsApp or email with your project details and I'll get back to you with a detailed, itemized quote within 24 hours. Most clients find my rates highly competitive for the quality delivered.",
    category: "Pricing"
  },
  {
    id: 7,
    question: "Will my website be mobile-friendly and SEO optimized?",
    answer: "Every single project I deliver is mobile-first, fully responsive across all screen sizes (phones, tablets, laptops, ultrawide), and built with SEO best practices — proper meta tags, semantic HTML, structured data, fast load speeds, image optimization, and Core Web Vitals compliance. Your site will be ready to rank on day one.",
    category: "SEO & Mobile"
  },
  {
    id: 8,
    question: "Do you offer website maintenance after launch?",
    answer: "Yes. I offer ongoing maintenance & support — regular updates, security patches, performance monitoring, content updates, and bug fixes. I'm the developer who stays available after launch, not one who disappears. Your success after go-live matters as much as the launch itself.",
    category: "Support"
  },
  {
    id: 9,
    question: "Can you redesign or improve my existing website?",
    answer: "Yes, and it's something I love doing. Whether your site looks outdated, loads slowly, isn't converting visitors, or has broken features — I can audit, redesign, and rebuild it to a modern standard. I've transformed multiple outdated websites into high-converting, fast, and beautiful digital experiences.",
    category: "Redesign"
  },
  {
    id: 10,
    question: "How do I get started working with you?",
    answer: "Simple — message me on WhatsApp or drop an email with your project idea, budget range, and timeline. I'll schedule a free 30-minute discovery call to understand your needs, then send you a detailed proposal. Once you approve, we kick off immediately. No lengthy contracts, no long waits.",
    category: "Getting Started"
  }
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => {
  return (
    <motion.div
      className="faq-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        className={`faq-question ${isOpen ? 'open' : ''}`}
        onClick={() => onToggle(faq.id)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        id={`faq-question-${faq.id}`}
      >
        <div className="faq-question-left">
          <span className="faq-category">{faq.category}</span>
          <span className="faq-question-text">{faq.question}</span>
        </div>
        <div className={`faq-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            role="region"
            aria-labelledby={`faq-question-${faq.id}`}
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="faq-answer-inner">
              <p>{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = ({ onHover, onLeave }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section" ref={containerRef} aria-label="Frequently Asked Questions">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-eyebrow">
            <HelpCircle size={14} />
            FAQ
          </span>
          <h2 className="section-title">
            Questions clients <br />
            <span className="gradient-text"><em className="serif">always</em> ask</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know before we start working together.
            Don't see your question? Message me directly — I reply fast.
          </p>
        </motion.div>

        <div className="faq-grid">
          <div className="faq-list" role="list">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                index={index}
                isOpen={openId === faq.id}
                onToggle={handleToggle}
              />
            ))}
          </div>

          <motion.div
            className="faq-cta-card"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="faq-cta-content">
              <div className="faq-cta-icon">
                <Sparkles size={28} />
              </div>
              <h3 className="faq-cta-title">Still have questions?</h3>
              <p className="faq-cta-text">
                Every project is unique. Let's talk through your specific needs and
                I'll give you a clear, honest answer — no sales pitch, just clarity.
              </p>
              <div className="faq-cta-stats">
                <div className="faq-stat">
                  <span className="faq-stat-num">2h</span>
                  <span className="faq-stat-label">Avg. response time</span>
                </div>
                <div className="faq-stat-divider"></div>
                <div className="faq-stat">
                  <span className="faq-stat-num">Free</span>
                  <span className="faq-stat-label">Consultation</span>
                </div>
                <div className="faq-stat-divider"></div>
                <div className="faq-stat">
                  <span className="faq-stat-num">24h</span>
                  <span className="faq-stat-label">Detailed quote</span>
                </div>
              </div>
              <div className="faq-cta-buttons">
                <a
                  href="https://wa.me/918085264369"
                  className="magnetic-btn faq-whatsapp-btn"
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Jay Nayak on WhatsApp"
                >
                  <span className="btn-text">Chat on WhatsApp</span>
                </a>
                <a
                  href="mailto:jaynayakjk@gmail.com"
                  className="outline-btn"
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  aria-label="Email Jay Nayak"
                >
                  <span>Send an Email</span>
                </a>
              </div>
            </div>

            <div className="faq-cta-glow"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
