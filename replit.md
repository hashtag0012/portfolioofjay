# Jay's Portfolio Website

## Overview

A premium portfolio website for Jay, a web developer and React specialist. The project is a single-page application featuring advanced animations, custom cursor effects, cinematic loading screen, and professional design elements. The site showcases web development services, portfolio projects, testimonials, and contact information with a modern dark theme and glassmorphism design aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 19 with Vite 7
- Single-page application using functional components
- Vite provides fast HMR development and optimized production builds
- Development server runs on port 5000 with all hosts allowed for Replit compatibility

**Animation System**: Framer Motion
- Powers all animations throughout the application
- Custom cursor with hover states (desktop only)
- Scroll-triggered animations for section reveals
- Text reveal and page transition effects
- Designed to be performance-conscious with reduced heavy parallax effects

**Component Structure**:
```
src/
├── components/
│   ├── CustomCursor.jsx   - Interactive animated cursor (desktop)
│   ├── Loader.jsx         - Cinematic loading/intro animation
│   ├── Navigation.jsx     - Fixed nav with scroll effects
│   ├── Hero.jsx           - Main hero section with typography
│   ├── Services.jsx       - Service cards with highlights
│   ├── Portfolio.jsx      - Project showcase section
│   ├── WhyMe.jsx          - Testimonials and trust section
│   ├── Contact.jsx        - CTA and contact methods
│   └── styles.css         - Component-specific styles
├── App.jsx                - Main app layout and structure
├── App.css                - Global styles, variables, animations
└── index.css              - Base imports and resets
```

**Styling Approach**:
- CSS custom properties for consistent theming
- Dark theme with gradient accents (indigo, purple, pink)
- Glassmorphism design with translucent elements
- Mobile-first responsive design with breakpoints at 480px, 768px, 1024px, 1200px
- Custom cursor hidden on touch devices and smaller screens

**Design Priorities**:
- Name "JAY" must remain on single line at all times
- Animations trigger on viewport entry, not mid-scroll
- Owner images must maintain proper aspect ratio on mobile
- Performance over visual gimmicks, especially on mobile

## External Dependencies

**Runtime Dependencies**:
- `react` (^19.2.0) - UI framework
- `react-dom` (^19.2.0) - React DOM renderer
- `framer-motion` (^12.23.26) - Animation library for advanced motion effects
- `lucide-react` (^0.561.0) - Icon library for UI icons

**Development Dependencies**:
- `vite` (^7.2.4) - Build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite
- `eslint` with React hooks and refresh plugins - Code linting

**External Resources**:
- Google Fonts: Space Grotesk, Syne, Instrument Serif
- No backend or database required - static frontend only
- No third-party API integrations currently