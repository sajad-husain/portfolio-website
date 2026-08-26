# Portfolio Website

A personal portfolio website built with React, Vite, and Tailwind CSS to showcase my skills, projects, and contact information.

> **Upgrading the site?** See [IMPROVEMENTS.md](./IMPROVEMENTS.md) for the phased roadmap and progress tracker.

## Features

- Dark-first engineering-grade design system (violet accent, glass cards, grid/noise textures)
- Sticky glass navbar with scroll-spy active links and mobile hamburger menu
- Persistent dark/light theme (localStorage + OS preference fallback)
- Animated hero: typing roles, availability badge, floating image with glow
- Scroll-reveal animations, spotlight card hover, scroll progress bar
- Stats strip with animated counters + infinite tech marquee
- Skills with devicon logos grouped by stack (MERN / PERN)
- Browser-frame project cards with featured variant
- Journey timeline, whoami terminal card in About
- Contact form wired to Formspree with async submit + status feedback
- SEO meta tags (Open Graph, Twitter cards), reduced-motion support

## Tech Stack

- **React 19** — UI library
- **Vite 8** — Build tool and dev server
- **Tailwind CSS 3** — Utility-first styling
- **Formspree** — Contact form backend
- **ESLint** — Code linting

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command             | Description                       |
|---------------------|-----------------------------------|
| `npm run dev`       | Start development server with HMR |
| `npm run build`     | Build for production to `dist/`   |
| `npm run preview`   | Preview the production build      |
| `npm run lint`      | Run ESLint on all source files    |

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Sticky glass navbar + mobile menu
│   ├── Hero.jsx         # Two-column hero with typing animation
│   ├── Stats.jsx        # Animated counters strip
│   ├── TechMarquee.jsx  # Infinite tech logo marquee
│   ├── About.jsx        # Terminal card + story
│   ├── Skills.jsx       # Devicon skill grid
│   ├── Projects.jsx     # Project listings
│   ├── ProjectCard.jsx  # Browser-frame project card
│   ├── Timeline.jsx     # Journey timeline
│   ├── Contact.jsx      # Split contact layout + Formspree form
│   ├── Footer.jsx       # Footer
│   ├── SectionHeader.jsx# Numbered section headings
│   ├── ScrollProgress.jsx # Top scroll progress bar
│   ├── TypingEffect.jsx # Typing/deleting loop
│   ├── Counter.jsx      # Count-up on view
│   └── Reveal.jsx       # Scroll-reveal wrapper
├── hooks/               # useTheme, useScrollSpy, useReveal
├── utils/               # devicon icon mapping
├── App.jsx              # Root component
├── main.jsx             # Entry point
└── index.css            # Design system utilities
```

## Deployment

The site is configured for deployment on **Vercel**. Push to GitHub and import the project into Vercel to deploy.

```bash
npm run build
```

The production build output is in the `dist/` directory.

## Live Demo

<!-- TODO: replace with your real Vercel URL after deploying -->
[View Live Site](https://your-portfolio.vercel.app)
