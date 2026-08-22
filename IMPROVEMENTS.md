# Portfolio Improvement Roadmap

Progress tracker for upgrading the portfolio into a modern, presentable site.
Work is divided into phases and mini-phases — **each mini-phase = one git commit**.
Status legend: ⬜ Not started · 🟨 In progress · ✅ Done

## Overall Progress

| Phase | Name                              | Mini-phases | Status |
|-------|-----------------------------------|-------------|--------|
| 0     | UI Analysis & Design System       | 4           | ⬜      |
| 1     | Critical Fixes                    | 5           | 🟨      |
| 2     | Navigation & Layout               | 4           | ⬜      |
| 3     | Hero & Visual Polish              | 6           | ⬜      |
| 4     | Content Upgrades                  | 6           | ⬜      |
| 5     | Section Redesigns (Hiring Focus)  | 5           | ⬜      |
| 6     | Micro-interactions & Motion       | 4           | ⬜      |
| 7     | SEO, Performance & Deployment     | 6           | ⬜      |

---

## UI Analysis — Why the current design doesn't get interviews

| # | Problem | Evidence | Fix (phase) |
|---|---------|----------|-------------|
| 1 | Default Tailwind template look | gray-50/gray-800 sections, blue→purple gradient on every element | P0.2 custom palette |
| 2 | Light-mode-first, but assets + dev aesthetic are dark | hero.png is black/purple; light gray sections clash | P0.1 dark-first theme |
| 3 | Emoji used as UI elements | 👨‍💻 avatar in About.jsx:15, 💡 fun-fact box, ☕, ❤️ | P5.3 About redesign |
| 4 | No typography identity | system font stack, no display font, weak hierarchy | P0.3 fonts |
| 5 | Flat sections, no depth or texture | plain bg color swaps between sections, no borders/glow/grain | P0.4 + P3.3 |
| 6 | No "real developer" signals | no terminal/code motifs, stats, or tech marquee | P5.1, P5.2 |
| 7 | Generic section headers | plain centered `text-4xl` titles, no eyebrow labels or accent lines | P5.4 |
| 8 | Cards lack craft | single shadow, no border, no hover glow, no image previews | P4.1, P6.2 |
| 9 | Hero is a centered gradient banner | most common portfolio hero layout; wastes hero.png asset | P3.2, P3.3 |
| 10 | No motion personality | one fade-in in hero; sections appear statically | P6.x |

**Target aesthetic:** dark, minimal, "engineering-grade" — near-black canvas, one violet accent (matches hero.png), mono-font details, glass cards, subtle glow. References: vercel.com, linear.app, tailwindcss.com, brittanychiang.com.

---

## Phase 0 — UI Analysis & Design System

> Goal: replace the default Tailwind look with a distinctive design system before touching components.

### 0.1 Dark-first theme flip ⬜
- [ ] Make dark the default experience (respect stored preference / `prefers-color-scheme`, but design dark-first)
- [ ] Swap section backgrounds: near-black canvas (`#0a0a0f`-ish) with alternating subtle elevation layers instead of gray-50/gray-800
- [ ] Rework `index.css` component classes (section-container, section-title, btn-primary) for dark-first palette

**Commit:** `feat: dark-first theme foundation`

### 0.2 Custom color palette + tokens ⬜
- [ ] Define palette in `tailwind.config.js`: near-black base, elevated surface, violet accent (matched to hero.png), muted text tiers
- [ ] Remove all generic `from-blue-500 to-purple-600` gradients; single accent color used sparingly
- [ ] Update scrollbar + focus ring to match new accent

**Commit:** `feat: custom design tokens and accent palette`

### 0.3 Typography system ⬜
- [ ] Display font for headings (Space Grotesk or Sora via fontsource/google fonts)
- [ ] Inter for body text
- [ ] JetBrains Mono for eyebrows, labels, code/terminal details
- [ ] Define type scale in tailwind config (hero clamp size, section titles, body)

**Commit:** `feat: typography system with display and mono fonts`

### 0.4 Depth & texture utilities ⬜
- [ ] Glass-card utility (semi-transparent surface + border + backdrop blur)
- [ ] Glow utility (accent-colored soft shadow for hover/focus)
- [ ] Subtle noise/grid background utility for hero and section dividers
- [ ] Gradient-border utility for featured cards

**Commit:** `feat: glass, glow, and texture utilities`

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
- [ ] Glass navbar: transparent at top, blurred surface + bottom border after scroll

**Commit:** `feat: sticky glass navbar`

### 2.2 Mobile hamburger menu ⬜
- [ ] Hamburger toggle under `md` breakpoint
- [ ] Full-screen or slide-down glass menu with proper aria-expanded

**Commit:** `feat: mobile navigation menu`

### 2.3 Scroll-spy active link ⬜
- [ ] Highlight navbar link of section currently in view (Intersection Observer)
- [ ] Accent underline/pill on the active link

**Commit:** `feat: scroll-spy active nav highlighting`

### 2.4 Theme toggle into navbar + spacing cleanup ⬜
- [ ] Move dark-mode toggle from floating button into navbar
- [ ] Consistent section padding and max-width across all sections
- [ ] Add subtle divider treatment between alternating sections

**Commit:** `refactor: move theme toggle to navbar, unify section spacing`

## Phase 3 — Hero & Visual Polish

> Goal: strong first impression within 3 seconds of landing.

### 3.1 Typing animation for roles ⬜
- [ ] Cycle through "MERN Developer", "PERN Developer", "React Developer" etc. with mono font + blinking cursor

**Commit:** `feat: typing animation in hero`

### 3.2 Two-column hero with hero.png ⬜
- [ ] Text left, hero.png right with glow/floating animation behind it
- [ ] Availability badge ("Open to work") pill above the heading

**Commit:** `feat: hero image layout with availability badge`

### 3.3 Animated hero background ⬜
- [ ] Grid pattern + radial violet glow blobs, subtle float animation
- [ ] Fade to plain canvas before the About section

**Commit:** `feat: animated hero background`

### 3.4 Dual CTAs + Download CV ⬜
- [ ] Primary filled accent button "View Projects" + ghost button "Download CV"
- [ ] Social icon row (GitHub / LinkedIn) under CTAs

**Commit:** `feat: hero call-to-action buttons`

### 3.5 Scroll-reveal animations ⬜
- [ ] Sections/cards fade-slide in on scroll (Intersection Observer hook)

**Commit:** `feat: scroll-reveal animations`

### 3.6 Card/button hover effects ⬜
- [ ] Lift + glow on cards; shine sweep on primary buttons

**Commit:** `style: hover effects on cards and buttons`

## Phase 4 — Content Upgrades

> Goal: show real proof of skill as a full-stack developer.

### 4.1 Project card redesign ⬜
- [ ] Screenshot/GIF preview area with browser-chrome frame styling
- [ ] Separate "Live Demo" and "GitHub Repo" buttons with icons
- [ ] "Featured" variant with gradient border for best 1–2 projects

**Commit:** `feat: redesigned project cards`

### 4.2 Real project content ⬜ *(blocked until 1.5)*
- [ ] Descriptions, screenshots, demo links for real projects

**Commit:** `content: project details and screenshots`

### 4.3 Skills with tech logos ⬜
- [ ] devicon/react-icons logos instead of text pills
- [ ] Group as Frontend / Backend / Tools (MERN + PERN visible)

**Commit:** `feat: skills section with tech icons`

### 4.4 Experience/Education timeline ⬜
- [ ] Vertical timeline with accent line + dots, mono dates

**Commit:** `feat: experience timeline section`

### 4.5 Resume/CV PDF ⬜
- [ ] Add CV to `public/`, verify download button works

**Commit:** `content: add downloadable resume`

### 4.6 About section refresh ⬜
- [ ] Personal story, current learning focus, stack positioning

**Commit:** `content: rewrite about section`

## Phase 5 — Section Redesigns (Hiring Focus)

> Goal: every section signals "real developer" instead of "tutorial graduate".

### 5.1 Stats / quick-facts strip ⬜
- [ ] Below hero: animated counters (projects built, technologies, commits or months of experience)
- [ ] Mono font numbers with accent color

**Commit:** `feat: animated stats strip`

### 5.2 Tech marquee ⬜
- [ ] Infinite scrolling strip of tech logos between hero and About (CSS animation, pauses on hover)

**Commit:** `feat: tech stack marquee`

### 5.3 About redesign ⬜
- [ ] Remove emoji avatar circle + fun-fact box
- [ ] Two-column: real photo (or stylized terminal card showing `whoami`) + story text
- [ ] "Currently learning" and "Open to" chips

**Commit:** `feat: redesign about section`

### 5.4 Section header component ⬜
- [ ] Reusable header: mono eyebrow label (e.g. `01. about`), large display title, accent underline
- [ ] Apply to all sections for consistency

**Commit:** `feat: reusable section header component`

### 5.5 Contact section redesign ⬜
- [ ] Split layout: pitch text + direct email/socials left, glass form right
- [ ] Form inputs with accent focus glow, inline success/error states

**Commit:** `feat: redesigned contact section`

## Phase 6 — Micro-interactions & Motion

> Goal: the site feels alive and intentional.

### 6.1 Button micro-interactions ⬜
- [ ] Press/scale feedback, shine sweep, arrow-slide on hover

**Commit:** `style: button micro-interactions`

### 6.2 Card tilt/glow follow ⬜
- [ ] Subtle mouse-follow glow border on project cards (spotlight effect)

**Commit:** `feat: spotlight hover effect on cards`

### 6.3 Scroll progress indicator ⬜
- [ ] Thin accent progress bar fixed at top of viewport

**Commit:** `feat: scroll progress bar`

### 6.4 Respect reduced motion ⬜
- [ ] Wrap animations in `prefers-reduced-motion` guards

**Commit:** `a11y: reduced motion support`

## Phase 7 — SEO, Performance & Deployment

> Goal: production-quality finish.

### 7.1 Open Graph + Twitter meta tags ⬜
- [ ] OG title/description/image, Twitter card tags in index.html

**Commit:** `seo: social meta tags`

### 7.2 Favicon + theme-color ⬜
- [ ] Verify favicon renders, add theme-color meta matching dark canvas

**Commit:** `chore: favicon and theme color meta`

### 7.3 Performance pass ⬜
- [ ] Lazy-load images below the fold, check bundle size

**Commit:** `perf: lazy loading and bundle audit`

### 7.4 Lighthouse audit ⬜
- [ ] Run Lighthouse, fix issues, aim 90+ in all categories

**Commit:** `fix: lighthouse audit fixes`

### 7.5 Mobile QA pass ⬜
- [ ] Verify spacing, tap targets, menu behavior at small widths

**Commit:** `fix: mobile responsiveness pass`

### 7.6 Deploy final version ⬜
- [ ] Build, deploy to Vercel, update README live-demo URL

**Commit:** `docs: update live site URL`

---

## Notes & Decisions Log

| Date       | Decision                                                     |
|------------|--------------------------------------------------------------|
| 2026-08-22 | Roadmap created; work begins at Phase 1                      |
| 2026-08-22 | Contact form: Formspree chosen                               |
| 2026-08-22 | Social links + real projects deferred by user                |
| 2026-08-22 | Phases split into commit-sized mini-phases                   |
| 2026-08-26 | Full UI audit added: Phase 0 (design system), 5 (redesigns), 6 (motion) |
| 2026-08-26 | Target aesthetic: dark-first, violet accent, mono details, glass cards |
