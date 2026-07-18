# AGENTS.md — Project Context for AI Assistants

Read this file before making any changes. It explains how this project is built, the conventions it follows, known pitfalls, and planned improvements.

## 1. Project Overview

Personal portfolio website for **Sajjad Hussain** (Full-Stack Developer). Single-page React app with dark/light theme, scroll-spy navigation, animated sections, and a contact form. Deployed from the `main` branch (GitHub Pages-style `base: "/"`).

- Repo: `https://github.com/sajad-husain/portfolio-website`
- Owner identity shown in UI: `<sajjad />` logo, name in `index.html` title/meta

## 2. Tech Stack

| Layer     | Choice                                   |
|-----------|------------------------------------------|
| Build     | Vite 8 (`vite.config.js`)                |
| UI        | React 19 (JSX only, no TypeScript)       |
| Styling   | Tailwind CSS **3.4.x** + PostCSS + Autoprefixer |
| Fonts     | Google Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (code) |
| State     | Local React state + custom hooks only (no Redux/Zustand/Router) |
| Backend   | None — contact form posts to Formspree   |

Package type is `"module"` — all configs (`tailwind.config.js`, `postcss.config.js`, `vite.config.js`) use ESM `export default`.

## 3. Commands

```bash
npm run dev      # Vite dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
npm run lint     # ESLint
```

No test framework is configured yet.

## 4. File Map

```
index.html                  # lang="en", class="dark" default, fonts preloaded, SEO meta
src/
  main.jsx                  # StrictMode root, imports index.css
  App.jsx                   # layout order: Navbar > Hero > Stats > TechMarquee >
                            #   About > Skills > Projects > Timeline > Contact > Footer
                            # skip-to-content link lives here
  index.css                 # @tailwind directives + @layer base/components/utilities
  hooks/
    useTheme.js             # [isDark, toggleTheme], persists to localStorage("theme"),
                            #   falls back to OS prefers-color-scheme
    useScrollSpy.js         # IntersectionObserver, rootMargin "-40% 0px -55% 0px"
    useReveal.js            # one-shot scroll reveal (threshold 0.15), auto-disconnects
  components/
    Navbar.jsx              # glass blur on scroll, desktop links + theme toggle button,
                            #   mobile hamburger menu; receives {darkMode, toggleTheme} props
    SectionHeader.jsx       # reusable section title component (used site-wide)
    Reveal.jsx              # wrapper component around useReveal hook
    TypingEffect.jsx        # hero typing animation
    Counter.jsx / Stats.jsx # animated number counters
    TechMarquee.jsx         # infinite scrolling tech logos (devicon assets)
    ProjectCard.jsx         # browser-frame preview, demo/repo buttons, spotlight hover
    Timeline.jsx            # vertical experience timeline
    Contact.jsx             # validated form; status machine: idle|sending|sent|error
    practicing/             # learning experiments (CounterGame, Props) — not part of site
  utils/
    techIcons.js            # devicon class-name mappings for the marquee
```

## 5. Styling System

All design tokens live in `tailwind.config.js` under `theme.extend`:

- **Colors:** `canvas #0a0a0f` (page bg), `surface` / `surface-raised`, `accent` (#8b5cf6 family: DEFAULT/soft/muted), `ink-primary/secondary/muted` (text hierarchy). Use these tokens instead of raw hex values.
- **Fonts:** `font-display` (Space Grotesk) applied globally to h1–h4 in `@layer base`; body defaults to Inter via `font-sans`.
- **Custom classes in `src/index.css`:** `.glass-card`, `.glow`, `.glow-hover`, `.bg-grid`, `.bg-noise`, `.gradient-border`, `.section-container`, `.section-title`, `.btn-primary`, `.btn-hover`, `.surface-*`.
- Dark mode is **class-based** (`darkMode: "class"`, toggled on `<html>`).

## 6. Key Behaviors

1. **Theme:** `useTheme` reads localStorage → OS preference → defaults dark. Toggle button lives inside `Navbar` (sun/moon SVG icons).
2. **Active nav link:** `useScrollSpy` observes section ids derived from `NAV_LINKS` in `Navbar.jsx`.
3. **Contact form:** client-side validation, then POST JSON to `FORMSPREE_ENDPOINT`. **TODO: real form ID not yet created** — replace `YOUR_FORM_ID` in `src/components/Contact.jsx`.
4. **Animations:** scroll reveals are one-shot (observer disconnects after first intersect) to keep them cheap.

## 7. Conventions

- Commits follow short conventional prefixes seen throughout history: `feat:`, `fix:`, `style:`, `refactor:`, `chore:`, `content:` — lowercase, imperative.
- Components: function declarations, default export, props destructured in signature.
- No comments unless necessary; no emojis in code/UI (emoji elements were deliberately removed — see commit `a199f70`).
- Icons: inline SVG or devicon classes; no icon library installed.

## 8. Known Issues / Gotchas

- **PostCSS overlay error "`font-display` class does not exist":** caused by a stale running Vite dev server (started before `tailwind.config.js` defined `fontFamily.display`). Fix: restart `npm run dev`, or delete `node_modules/.vite` and reboot. The config itself is correct.
- **CRLF warnings** on Windows are normal (`core.autocrlf`); don't "fix" line endings across files.
- **Concurrent sessions:** at one point two agent sessions edited/committed simultaneously, causing flip-flopping `git status`. Always re-check `git status` immediately before staging.
- `practicing/` folder is scratch work — exclude it from refactors unless asked.

## 9. Improvement Roadmap

Priority order:

1. **Formspree ID** — create the real form, replace `YOUR_FORM_ID`.
2. **TypeScript migration** — add `tsc` incrementally (rename `.jsx` → `.tsx` per-component).
3. **Tailwind v4 migration** — CSS-first config would replace `tailwind.config.js` with `@theme`; do together with a full dependency audit (Vite 8 + React 19 are current).
4. **Testing** — add Vitest + React Testing Library; start with hooks (`useTheme`, `useScrollSpy`) and `Contact` validation.
5. **SEO/a11y polish** — Open Graph/Twitter meta, `sitemap.xml`, `robots.txt`, lighthouse audit, `prefers-reduced-motion` handling for marquee/counters/reveals.
6. **Performance** — self-host fonts (currently render-blocking Google Fonts link), lazy-load below-fold sections, compress `hero.png`.
7. **CI/CD** — GitHub Actions workflow: install → lint → build → deploy `dist/` to GitHub Pages.
