# Portfolio Website

Personal portfolio site built with React 19, Vite, and Tailwind CSS. Features a dark mode toggle, responsive layout, and sections for Hero, About, Skills, Projects, and Contact.

## Tech Stack

| Layer         | Technology       | Version  |
|---------------|------------------|----------|
| UI            | React            | ^19.2.6  |
| Bundler       | Vite             | ^8.0.12  |
| Styling       | Tailwind CSS     | ^3.4.19  |
| Linting       | ESLint           | ^10.3.0  |
| Deployment    | Vercel (v2)      | —        |

## Project Structure

```
my-portfolio/
├── public/                 # Static assets (favicon, icons)
├── src/
│   ├── assets/             # Images (hero.png — unused in code)
│   ├── components/
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # Bio section
│   │   ├── Skills.jsx      # Skill badges grid
│   │   ├── Projects.jsx    # Projects listing
│   │   ├── ProjectCard.jsx # Reusable project card
│   │   ├── Contact.jsx     # Contact form + social links
│   │   ├── Footer.jsx      # Footer
│   │   └── practicing/     # Scratch/learning files (unused)
│   ├── App.jsx             # Root component (dark mode state)
│   ├── main.jsx            # React entry point
│   └── index.css           # Tailwind directives + custom styles
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS config
├── eslint.config.js        # ESLint flat config
├── vercel.json             # Vercel deployment config
└── package.json
```

## Prerequisites

- **Node.js** >= 18 (Vite 8 requirement)
- **npm** >= 9

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (with HMR)
npm run dev

# Lint code
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment

### Vercel (current config)

A `vercel.json` is already configured:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "routes": [
    { "src": "/", "dest": "/index.html" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

**How to deploy:**
1. Push to GitHub (or GitLab/Bitbucket).
2. Import the `my-portfolio/` directory (not the repo root) into Vercel.
3. Vercel auto-detects the framework (Vite), applies the config, and deploys.

### Other Platforms

| Platform | Build Command | Output Dir | Notes |
|----------|--------------|------------|-------|
| Netlify  | `npm run build` | `dist` | Add `public/_redirects` with `/* /index.html 200` for SPA routes |
| Cloudflare Pages | `npm run build` | `dist` | Set `NODE_VERSION` env to 18+ |
| GitHub Pages | `npm run build` | `dist` | Set `vite.config.js` `base` to `"/<repo-name>/"` |

## Pre-Deployment Checklist

- [ ] **Remove unused files** — `src/assets/hero.png` is not referenced in any component; `src/components/practicing/` files (`CounterGame.jsx`, `Props.jsx`) are not imported. Delete to reduce bundle.
- [ ] **Contact form** — Currently client-side only with no submission endpoint. Integrate a form service (Formspree, EmailJS, etc.) before going live.
- [ ] **Open Graph / SEO** — `index.html` lacks meta tags for social sharing (`og:title`, `og:description`, `og:image`). Add them for better link previews.
- [ ] **Performance** — Run `npm run build` and check `dist/` output size. Consider lazy-loading non-critical sections.
- [ ] **Accessibility** — Good foundation exists (aria labels, skip-to-content). Verify keyboard navigation through all sections.
- [ ] **Responsive** — Test on mobile viewports. The current design uses Tailwind's default breakpoints.
- [ ] **Content** — Update the project links and descriptions in `Projects.jsx` with real live URLs.
- [ ] **Analytics** — No analytics configured. Consider adding a privacy-friendly option like Plausible or Umami.

## Environment Variables

None required. The site is fully static — no API keys or secrets needed.

## Scripts Reference

| Command           | Action                          |
|-------------------|---------------------------------|
| `npm run dev`     | Start Vite dev server with HMR  |
| `npm run build`   | Production build to `dist/`     |
| `npm run preview` | Preview production build        |
| `npm run lint`    | Run ESLint on all source files  |

## Known Considerations

- **No client-side router** — Navigation uses anchor links (`#projects`) within a single page. If you add multi-page routing later, keep the Vercel `/* → /index.html` catch-all rule.
- **Dark mode** — Toggled via a `dark` class on the root `<div>`. Tailwind's `darkMode: "class"` is already configured. The toggle state is **not persisted** (resets on refresh). Consider adding `localStorage` persistence.
- **ESLint** — Config uses the flat config format (`eslint.config.js`). The `react-refresh` plugin expects components to be exported by name; avoid `export default` for new components if possible.
- **Vite 8** — Uses the Oxc compiler via `@vitejs/plugin-react` for fast transforms. No special migration steps needed.
