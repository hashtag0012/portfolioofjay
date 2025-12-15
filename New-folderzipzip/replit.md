# Jay's Portfolio Website

## Overview

A premium portfolio website for Jay, a web developer and React specialist. The project features advanced animations, a custom cursor, cinematic loading screen, and professional design elements. Built as a React single-page application with Vite as the build tool and Framer Motion for animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (Dec 15, 2025)

- Fixed owner photo positioning for mobile with object-position CSS adjustments
- Enhanced Hero section with floating design elements, experience badge, improved copywriting
- Beautified Services section with highlight badges, section subtitle, CTA section
- Enhanced Portfolio section with featured badges and improved CTA
- Improved WhyMe section with multiple testimonials and mini stats
- Upgraded Contact section with benefits and improved card design
- Added comprehensive responsive design breakpoints (1200px, 1024px, 768px, 480px)

## System Architecture

### Frontend Architecture

**Framework**: React 19 with Vite 7
- Modern React application using functional components
- Vite provides fast development server and optimized production builds
- Development server configured to run on port 5000 with all hosts allowed

**Animation System**: Framer Motion
- Advanced animations throughout the application
- Custom cursor with hover states
- Scroll-based parallax effects
- Text reveal animations and page transitions

**Component Structure**:
- `CustomCursor.jsx` - Interactive animated cursor following mouse
- `Loader.jsx` - Cinematic loading/intro animation with name reveal
- `Navigation.jsx` - Fixed navigation with scroll effects and active states
- `Hero.jsx` - Animated hero section with typography effects
- `Services.jsx` - Service cards showcasing offerings
- `Portfolio.jsx` - Project showcase section
- `WhyMe.jsx` - Trust-building section with testimonials
- `Contact.jsx` - Call-to-action with contact methods

**Styling Approach**:
- CSS custom properties (variables) for theming
- Glassmorphism design with translucent elements
- Dark theme with gradient accents (indigo, purple, pink)
- Responsive design with mobile-first considerations
- Component-scoped styles in `styles.css` with global styles in `App.css`

### Design System

**Typography**: 
- Space Grotesk (primary body font)
- Syne (display/heading font)
- Instrument Serif (accent text)

**Color Palette**:
- Background: Near-black (#050505, #0a0a0a)
- Accent gradient: Indigo → Purple → Pink
- Text: White with various opacity levels for hierarchy

**Visual Effects**:
- Film grain texture overlay
- Ambient floating gradient lights
- Scroll progress indicator
- Magnetic button interactions

## External Dependencies

**Runtime Dependencies**:
- `react` ^19.2.0 - UI component library
- `react-dom` ^19.2.0 - React DOM rendering
- `framer-motion` ^12.23.26 - Animation library for React
- `lucide-react` ^0.561.0 - Icon library

**Development Dependencies**:
- `vite` ^7.2.4 - Build tool and dev server
- `@vitejs/plugin-react` - React integration for Vite
- `eslint` with React hooks and refresh plugins - Code linting

**External Services**:
- Google Fonts CDN - Custom web fonts
- No backend services or databases (static frontend only)

**Build & Run**:
```bash
cd client && npm run dev
```
Server runs on port 5000 with hot module replacement enabled.