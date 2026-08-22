# Portfolio Improvement Roadmap

Progress tracker for upgrading the portfolio into a modern, presentable site.
Work is divided into phases and mini-phases — **each mini-phase = one git commit**.
Status legend: ⬜ Not started · 🟨 In progress · ✅ Done

## Overall Progress

| Phase | Name                          | Mini-phases | Status |
|-------|-------------------------------|-------------|--------|
| 1     | Critical Fixes                | 5           | 🟨      |
| 2     | Navigation & Layout           | 4           | ⬜      |
| 3     | Hero & Visual Polish          | 6           | ⬜      |
| 4     | Content Upgrades              | 6           | ⬜      |
| 5     | SEO, Performance & Deployment | 6           | ⬜      |

---

## Phase 1 — Critical Fixes

> Goal: remove anything that looks unfinished or fake before any design work.

### 1.1 Professional copy cleanup ✅
- [x] Hero: "Full-Stack Developer in Training 🚀" → "Full-Stack Developer | MERN & PERN Stack"
- [x] Hero: remove emojis from heading and CTA
- [x] Footer: remove emojis from footer text
- [ ] About.jsx: review copy for emoji-heavy / "in training" tone

**Commit:** `docs: professionalize hero and footer copy` *(edits done, commit pending)*

### 1.2 Dark mode persistence ⬜
- [ ] Initialize theme from `localStorage` on load
- [ ] Fall back to `prefers-color-scheme` when no stored value
- [ ] Save choice to `localStorage` on every toggle

**Commit:** `feat: persist dark mode across reloads`

### 1.3 Contact form → Formspree ⬜
- [ ] Add `FORMSPREE_ENDPOINT` constant with TODO marker for real form ID
- [ ] Submit via fetch (POST JSON) with loading state
- [ ] Show success message on 200, error message on failure
- [ ] Reset form after successful send
- Decision made: Formspree (user to create form at formspree.io and paste ID)

**Commit:** `feat: wire contact form to Formspree`

### 1.4 Real social + project links ⬜ *(blocked — user will provide URLs later)*
- [ ] Contact.jsx: replace `yourusername` GitHub / LinkedIn / Twitter links
- [ ] Footer.jsx: add matching social links if desired
- [ ] Projects.jsx: point each project card at its real repo

**Commit:** `fix: replace placeholder profile and repo links`

### 1.5 Real project entries ⬜ *(blocked — user will list real MERN/PERN projects later)*
- [ ] Replace "Task Manager App" placeholder data with real projects
- [ ] Ensure at least one MERN and one PERN project represented

**Commit:** `content: add real project listings`

## Phase 2 — Navigation & Layout

> Goal: visitors can move around the site easily on desktop and mobile.

### 2.1 Sticky navbar ⬜
- [ ] Create Navbar component with logo + section links (About, Skills, Projects, Contact)
- [ ] Sticky/fixed with backdrop blur, works in light + dark mode

**Commit:** `feat: add sticky navbar`

### 2.2 Mobile hamburger menu ⬜
- [ ] Hamburger toggle under `md` breakpoint
- [ ] Slide-down/collapsible menu with proper aria-expanded

**Commit:** `feat: mobile navigation menu`

### 2.3 Scroll-spy active link ⬜
- [ ] Highlight navbar link of section currently in view (Intersection Observer)

**Commit:** `feat: scroll-spy active nav highlighting`

### 2.4 Theme toggle into navbar + spacing cleanup ⬜
- [ ] Move dark-mode toggle from floating button into navbar
- [ ] Consistent section padding and max-width across all sections

**Commit:** `refactor: move theme toggle to navbar, unify section spacing`

## Phase 3 — Hero & Visual Polish

> Goal: strong first impression within 3 seconds of landing.

### 3.1 Typing animation for roles ⬜
- [ ] Cycle through "MERN Developer", "PERN Developer", "React Developer" etc.

**Commit:** `feat: typing animation in hero`

### 3.2 Two-column hero with hero.png ⬜
- [ ] Text left, image right layout on desktop; stacked on mobile

**Commit:** `feat: hero image layout`

### 3.3 Animated hero background ⬜
- [ ] Gradient glow blobs or grid pattern instead of flat gradient

**Commit:** `feat: animated hero background`

### 3.4 Dual CTAs + Download CV ⬜
- [ ] "View Projects" + "Download CV" buttons (CV added in phase 4)

**Commit:** `feat: hero call-to-action buttons`

### 3.5 Scroll-reveal animations ⬜
- [ ] Sections/cards fade-slide in on scroll (Intersection Observer hook)

**Commit:** `feat: scroll-reveal animations`

### 3.6 Card/button hover effects ⬜
- [ ] Lift, shadow, and shine polish on interactive elements

**Commit:** `style: hover effects on cards and buttons`

## Phase 4 — Content Upgrades

> Goal: show real proof of skill as a full-stack developer.

### 4.1 Project card redesign ⬜
- [ ] Screenshot/GIF preview area per project
- [ ] Separate "Live Demo" and "GitHub Repo" buttons

**Commit:** `feat: redesigned project cards`

### 4.2 Real project content ⬜ *(blocked until 1.5)*
- [ ] Descriptions, screenshots, demo links for real projects

**Commit:** `content: project details and screenshots`

### 4.3 Skills with tech logos ⬜
- [ ] devicon/react-icons logos instead of text pills
- [ ] Group as Frontend / Backend / Tools (MERN + PERN visible)

**Commit:** `feat: skills section with tech icons`

### 4.4 Experience/Education timeline ⬜
- [ ] Vertical timeline component with education, training, milestones

**Commit:** `feat: experience timeline section`

### 4.5 Resume/CV PDF ⬜
- [ ] Add CV to `public/`, verify download button works

**Commit:** `content: add downloadable resume`

### 4.6 About section refresh ⬜
- [ ] Personal story, current learning focus, stack positioning

**Commit:** `content: rewrite about section`

## Phase 5 — SEO, Performance & Deployment

> Goal: production-quality finish.

### 5.1 Open Graph + Twitter meta tags ⬜
- [ ] OG title/description/image, Twitter card tags in index.html

**Commit:** `seo: social meta tags`

### 5.2 Favicon + theme-color ⬜
- [ ] Verify favicon renders, add theme-color meta

**Commit:** `chore: favicon and theme color meta`

### 5.3 Performance pass ⬜
- [ ] Lazy-load images below the fold, check bundle size

**Commit:** `perf: lazy loading and bundle audit`

### 5.4 Lighthouse audit ⬜
- [ ] Run Lighthouse, fix issues, aim 90+ in all categories

**Commit:** `fix: lighthouse audit fixes`

### 5.5 Mobile QA pass ⬜
- [ ] Verify spacing, tap targets, menu behavior at small widths

**Commit:** `fix: mobile responsiveness pass`

### 5.6 Deploy final version ⬜
- [ ] Build, deploy to Vercel, update README live-demo URL

**Commit:** `docs: update live site URL`

---

## Notes & Decisions Log

| Date       | Decision                                                     |
|------------|--------------------------------------------------------------|
| 2026-08-22 | Roadmap created; work begins at Phase 1                      |
| 2026-08-22 | Contact form: Formspree chosen                               |
| 2026-08-22 | Social links + real projects deferred by user                |
| 2026-08-22 | Phases split into commit-sized mini-phases (27 total)        |
