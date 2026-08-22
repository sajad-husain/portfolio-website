# Portfolio Website

A personal portfolio website built with React, Vite, and Tailwind CSS to showcase my skills, projects, and contact information.

> **Upgrading the site?** See [IMPROVEMENTS.md](./IMPROVEMENTS.md) for the phased roadmap and progress tracker.

## Features

- Responsive design with mobile-first approach
- Dark mode toggle with persistent theme
- Smooth scroll navigation
- Skills showcase with categorized badges
- Project cards with tech stack tags
- Contact form with validation
- Accessibility features (ARIA labels, skip-to-content, keyboard navigation)

## Tech Stack

- **React 19** — UI library
- **Vite 8** — Build tool and dev server
- **Tailwind CSS 3** — Utility-first styling
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
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About me
│   ├── Skills.jsx      # Skills grid
│   ├── Projects.jsx    # Project listings
│   ├── ProjectCard.jsx # Individual project card
│   ├── Contact.jsx     # Contact form + social links
│   └── Footer.jsx      # Footer
├── App.jsx             # Root component
├── main.jsx            # Entry point
└── index.css           # Global styles + Tailwind
```

## Deployment

The site is configured for deployment on **Vercel**. Push to GitHub and import the project into Vercel to deploy.

```bash
npm run build
```

The production build output is in the `dist/` directory.

## Live Demo

[View Live Site](https://your-portfolio.vercel.app)
