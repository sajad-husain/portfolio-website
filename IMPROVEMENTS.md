# Portfolio Improvement Roadmap

Progress tracker for upgrading the portfolio into a modern, presentable site.
Work is divided into phases and **micro-phases — each micro-phase = one git commit**.
Status legend: ⬜ Not started · 🟨 In progress · ✅ Done

## Overall Progress

| Phase | Name                              | Micro-phases | Done | Status |
|-------|-----------------------------------|--------------|------|--------|
| 0     | UI Analysis & Design System       | 13           | 0    | ⬜      |
| 1     | Critical Fixes                    | 10           | 1    | 🟨      |
| 2     | Navigation & Layout               | 8            | 0    | ⬜      |
| 3     | Hero & Visual Polish              | 12           | 0    | ⬜      |
| 4     | Content Upgrades                  | 10           | 0    | ⬜      |
| 5     | Section Redesigns (Hiring Focus)  | 10           | 0    | ⬜      |
| 6     | Micro-interactions & Motion       | 5            | 0    | ⬜      |
| 7     | SEO, Performance & Deployment     | 10           | 0    | ⬜      |
| **Total** |                               | **78**       | **1**|        |

---

## UI Analysis — Why the current design doesn't get interviews

| # | Problem | Evidence | Fix (phase) |
|---|---------|----------|-------------|
| 1 | Default Tailwind template look | gray-50/gray-800 sections, blue→purple gradient on every element | P0.3–P0.5 custom palette |
| 2 | Light-mode-first, but assets + dev aesthetic are dark | hero.png is black/purple; light gray sections clash | P0.1 dark-first theme |
| 3 | Emoji used as UI elements | 👨‍💻 avatar in About.jsx:15, 💡 fun-fact box, ☕, ❤️ | P5.4 About redesign |
| 4 | No typography identity | system font stack, no display font, weak hierarchy | P0.6–P0.8 fonts |
| 5 | Flat sections, no depth or texture | plain bg color swaps between sections, no borders/glow/grain | P0.9–P0.12 + P3.4 |
| 6 | No "real developer" signals | no terminal/code motifs, stats, or tech marquee | P5.1–P5.3 |
| 7 | Generic section headers | plain centered `text-4xl` titles, no eyebrow labels or accent lines | P5.7, P5.8 |
| 8 | Cards lack craft | single shadow, no border, no hover glow, no image previews | P4.1–P4.3, P6.3 |
| 9 | Hero is a centered gradient banner | most common portfolio hero layout; wastes hero.png asset | P3.2, P3.3 |
| 10 | No motion personality | one fade-in in hero; sections appear statically | P3.x, P6.x |

**Target aesthetic:** dark, minimal, "engineering-grade" — near-black canvas, one violet accent (matches hero.png), mono-font details, glass cards, subtle glow. References: vercel.com, linear.app, tailwindcss.com, brittanychiang.com.

---

## Phase 0 — UI Analysis & Design System

> Goal: replace the default Tailwind look with a distinctive design system before touching components.

### 0.1 Dark theme default flip ⬜
- [ ] Make dark the default experience (`prefers-color-scheme` respected, but designed dark-first)
- [ ] Swap body/canvas to near-black (`#0a0a0f`-ish)

**Commit:** `feat: default to dark canvas`

### 0.2 Alternating elevation layers ⬜
- [ ] Replace gray-50/gray-800 section swaps with subtle elevation layers (base → raised surface)

**Commit:** `feat: alternating surface elevation between sections`

### 0.3 Rework index.css component classes ⬜
- [ ] Update `.section-container`, `.section-title`, `.btn-primary` for dark-first palette

**Commit:** `refactor: dark-first base component classes`

### 0.4 Palette tokens in tailwind config ⬜
- [ ] Define near-black base, elevated surface, violet accent (matched to hero.png), muted text tiers

**Commit:** `feat: custom design tokens`

### 0.5 Purge generic gradients ⬜
- [ ] Remove all `from-blue-500 to-purple-600` gradients; single accent used sparingly
- [ ] Update scrollbar + focus ring to match new accent

**Commit:** `feat: unified accent palette, remove template gradients`

### 0.6 Display font ⬜
- [ ] Install Space Grotesk or Sora via fontsource; apply to headings

**Commit:** `feat: display font for headings`

### 0.7 Body + mono fonts ⬜
- [ ] Inter for body text
- [ ] JetBrains Mono for eyebrows, labels, code/terminal details

**Commit:** `feat: Inter body and JetBrains Mono detail fonts`

### 0.8 Type scale ⬜
- [ ] Define type scale in tailwind config (hero clamp size, section titles, body tiers)

**Commit:** `feat: responsive type scale`

### 0.9 Glass-card utility ⬜
- [ ] Semi-transparent surface + border + backdrop blur utility class

**Commit:** `feat: glass card utility`

### 0.10 Glow utility ⬜
- [ ] Accent-colored soft shadow utility for hover/focus states

**Commit:** `feat: accent glow utility`

### 0.11 Texture utilities ⬜
- [ ] Subtle noise/grid background utility for hero and section dividers

**Commit:** `feat: noise and grid texture backgrounds`

### 0.12 Gradient-border utility ⬜
- [ ] Gradient-border wrapper utility for featured cards

**Commit:** `feat: gradient border utility`

### 0.13 Design system smoke test ⬜
- [ ] Verify all sections render coherently on new tokens before moving to Phase 1
- [ ] Screenshot before/after comparison saved locally

**Commit:** `chore: design system baseline pass`

---

## Phase 1 — Critical Fixes

> Goal: remove anything that looks unfinished or fake before any design work.

### 1.1 Hero copy cleanup ✅
- [x] "Full-Stack Developer in Training 🚀" → "Full-Stack Developer | MERN & PERN Stack"
- [x] Remove emojis from heading and CTA

**Commit:** `docs: professionalize hero copy`

### 1.2 Footer emoji removal ✅
- [x] Remove emojis from footer text

**Commit:** *(folded into 1.1 commit)*

### 1.3 About.jsx copy review ⬜
- [ ] Review copy for emoji-heavy / "in training" tone; neutralize wording

**Commit:** `docs: professionalize about copy`

### 1.4 Dark mode persistence init ⬜
- [ ] Initialize theme from `localStorage` on load

**Commit:** `feat: load stored theme preference on boot`

### 1.5 Theme fallback + save on toggle ⬜
- [ ] Fall back to `prefers-color-scheme` when no stored value
- [ ] Save choice to `localStorage` on every toggle

**Commit:** `feat: theme persistence with OS fallback`

### 1.6 Formspree endpoint setup ⬜
- [ ] Add `FORMSPREE_ENDPOINT` constant with TODO marker for real form ID

**Commit:** `chore: add formspree endpoint constant`

### 1.7 Contact form fetch submit ⬜
- [ ] Submit via fetch (POST JSON) with loading state

**Commit:** `feat: async contact form submission`

### 1.8 Form feedback states ⬜
- [ ] Show success message on 200, error message on failure
- [ ] Reset form after successful send

**Commit:** `feat: contact form success and error states`

### 1.9 Real social links ⬜ *(blocked — user will provide URLs later)*
- [ ] Contact.jsx: replace `yourusername` GitHub / LinkedIn / Twitter links
- [ ] Footer.jsx: add matching social links if desired

**Commit:** `fix: replace placeholder social profile links`

### 1.10 Real project entries ⬜ *(blocked — user will list real MERN/PERN projects later)*
- [ ] Replace "Task Manager App" placeholder data with real projects
- [ ] Ensure at least one MERN and one PERN project represented

**Commit:** `content: add real project listings`

---

## Phase 2 — Navigation & Layout

> Goal: visitors can move around the site easily on desktop and mobile.

### 2.1 Navbar component skeleton ⬜
- [ ] Create Navbar component with logo + section links (About, Skills, Projects, Contact)

**Commit:** `feat: navbar component with section links`

### 2.2 Sticky positioning ⬜
- [ ] Fixed/sticky navbar that stays pinned during scroll

**Commit:** `feat: sticky navbar`

### 2.3 Glass navbar scroll effect ⬜
- [ ] Transparent at top; blurred surface + bottom border after scrolling past threshold
- [ ] Works in light + dark mode

**Commit:** `feat: glass blur navbar on scroll`

### 2.4 Hamburger toggle ⬜
- [ ] Hamburger button under `md` breakpoint with animated open/close icon

**Commit:** `feat: hamburger menu toggle`

### 2.5 Mobile menu panel ⬜
- [ ] Full-screen or slide-down glass menu
- [ ] Proper `aria-expanded`, focus handling, close on link click

**Commit:** `feat: accessible mobile navigation menu`

### 2.6 Scroll-spy logic ⬜
- [ ] Intersection Observer hook tracking which section is in view

**Commit:** `feat: scrollspy intersection observer hook`

### 2.7 Active link styling ⬜
- [ ] Accent underline/pill on the active nav link

**Commit:** `style: highlight active nav link`

### 2.8 Theme toggle + spacing cleanup ⬜
- [ ] Move dark-mode toggle from floating button into navbar
- [ ] Consistent section padding and max-width across all sections
- [ ] Subtle divider treatment between alternating sections

**Commit:** `refactor: theme toggle in navbar, unify section spacing`

---

## Phase 3 — Hero & Visual Polish

> Goal: strong first impression within 3 seconds of landing.

### 3.1 Typing effect component ⬜
- [ ] Reusable typing/deleting loop component (mono font + blinking cursor)

**Commit:** `feat: reusable typing effect component`

### 3.2 Wire typing roles into hero ⬜
- [ ] Cycle through "MERN Developer", "PERN Developer", "React Developer" etc.

**Commit:** `feat: typing role animation in hero`

### 3.3 Two-column hero layout ⬜
- [ ] Text left, hero.png right on desktop; stacked on mobile

**Commit:** `feat: two-column hero with image`

### 3.4 Hero image presentation ⬜
- [ ] Glow halo + gentle float animation behind hero.png

**Commit:** `style: glowing floating hero image`

### 3.5 Availability badge ⬜
- [ ] "Open to work" pill above the heading with pulsing dot

**Commit:** `feat: availability status badge`

### 3.6 Grid pattern background ⬜
- [ ] Faint grid texture layer across the hero

**Commit:** `feat: hero grid backdrop`

### 3.7 Glow blobs + fade-out ⬜
- [ ] Radial violet glow blobs with slow drift animation
- [ ] Fade to plain canvas before the About section

**Commit:** `feat: animated hero glow background`

### 3.8 Primary CTA ⬜
- [ ] Filled accent button "View Projects"

**Commit:** `feat: primary view projects CTA`

### 3.9 Ghost CTA + Download CV ⬜
- [ ] Ghost/outlined "Download CV" button (CV added later in 4.9)

**Commit:** `feat: download cv ghost button`

### 3.10 Social icon row ⬜
- [ ] GitHub / LinkedIn icons under CTAs

**Commit:** `feat: hero social icon row`

### 3.11 Scroll-reveal hook ⬜
- [ ] Intersection Observer reveal hook (fade + slide-up variants, staggered delays)

**Commit:** `feat: scroll reveal hook`

### 3.12 Apply reveals + hover polish ⬜
- [ ] Sections/cards fade-slide in on scroll
- [ ] Lift + glow on cards; shine sweep on primary buttons

**Commit:** `style: scroll reveals and hover effects`

---

## Phase 4 — Content Upgrades

> Goal: show real proof of skill as a full-stack developer.

### 4.1 Project preview frame ⬜
- [ ] Screenshot/GIF area styled like a browser-chrome window

**Commit:** `feat: browser-frame project previews`

### 4.2 Project action buttons ⬜
- [ ] Separate "Live Demo" and "GitHub Repo" buttons with icons

**Commit:** `feat: demo and repo buttons on project cards`

### 4.3 Featured variant ⬜
- [ ] Gradient-border featured variant for best 1–2 projects

**Commit:** `feat: featured project card variant`

### 4.4 Project descriptions ⬜ *(blocked until 1.10)*
- [ ] Descriptions, screenshots, demo links for real projects

**Commit:** `content: real project details and screenshots`

### 4.5 Install tech icon set ⬜
- [ ] devicon/react-icons dependency + baseline usage

**Commit:** `chore: add tech icon dependencies`

### 4.6 Skills section with logos ⬜
- [ ] Replace text pills with brand logos

**Commit:** `feat: skills section with tech logos`

### 4.7 Skills grouping ⬜
- [ ] Group as Frontend / Backend / Tools (MERN + PERN visible at a glance)

**Commit:** `content: group skills by stack layer`

### 4.8 Timeline component ⬜
- [ ] Vertical timeline with accent line + dots, mono dates

**Commit:** `feat: vertical timeline component`

### 4.9 Resume PDF ⬜
- [ ] Add CV to `public/`, wire download button, verify download works

**Commit:** `content: add downloadable resume`

### 4.10 About refresh ⬜
- [ ] Personal story, current learning focus, stack positioning

**Commit:** `content: rewrite about section story`

---

## Phase 5 — Section Redesigns (Hiring Focus)

> Goal: every section signals "real developer" instead of "tutorial graduate".

### 5.1 Animated counters ⬜
- [ ] Count-up-on-view number component

**Commit:** `feat: animated counter component`

### 5.2 Stats strip ⬜
- [ ] Below hero: projects built, technologies, commits / months of experience
- [ ] Mono font numbers with accent color

**Commit:** `feat: animated stats strip`

### 5.3 Tech marquee ⬜
- [ ] Infinite scrolling strip of tech logos between hero and About (CSS animation, pauses on hover)

**Commit:** `feat: infinite tech stack marquee`

### 5.4 De-emoji About ⬜
- [ ] Remove emoji avatar circle + fun-fact box

**Commit:** `fix: remove emoji elements from about`

### 5.5 Terminal card ⬜
- [ ] Stylized terminal card showing `whoami` / stack info beside the story text (two-column)

**Commit:** `feat: whoami terminal card in about`

### 5.6 Status chips ⬜
- [ ] "Currently learning" and "Open to" chips under the about story

**Commit:** `feat: learning and availability chips`

### 5.7 SectionHeader component ⬜
- [ ] Reusable header: mono eyebrow label (e.g. `01. about`), large display title, accent underline

**Commit:** `feat: reusable section header component`

### 5.8 Apply headers everywhere ⬜
- [ ] Replace all plain section titles with the new header component

**Commit:** `refactor: apply section headers site-wide`

### 5.9 Contact split layout ⬜
- [ ] Pitch text + direct email/socials left, glass form right

**Commit:** `feat: two-column contact layout`

### 5.10 Form input states ⬜
- [ ] Inputs with accent focus glow, inline success/error states

**Commit:** `style: polished form input states`

---

## Phase 6 — Micro-interactions & Motion

> Goal: the site feels alive and intentional.

### 6.1 Button press feedback ⬜
- [ ] Press/scale-down feedback on click for all buttons

**Commit:** `style: tactile button press feedback`

### 6.2 Arrow-slide hover ⬜
- [ ] Arrow icon slides right on button hover

**Commit:** `style: arrow slide hover on CTAs`

### 6.3 Spotlight card glow ⬜
- [ ] Mouse-follow glow border on project cards (spotlight effect)

**Commit:** `feat: spotlight hover effect on cards`

### 6.4 Scroll progress bar ⬜
- [ ] Thin accent progress bar fixed at top of viewport

**Commit:** `feat: scroll progress indicator`

### 6.5 Reduced motion support ⬜
- [ ] Wrap animations in `prefers-reduced-motion` guards

**Commit:** `a11y: respect reduced motion preferences`

---

## Phase 7 — SEO, Performance & Deployment

> Goal: production-quality finish.

### 7.1 Open Graph tags ⬜
- [ ] OG title/description/image in index.html

**Commit:** `seo: open graph meta tags`

### 7.2 Twitter card tags ⬜
- [ ] Twitter summary_large_image card tags

**Commit:** `seo: twitter card meta tags`

### 7.3 Favicon + theme-color ⬜
- [ ] Verify favicon renders, add theme-color meta matching dark canvas

**Commit:** `chore: favicon and theme color meta`

### 7.4 Lazy-load images ⬜
- [ ] Lazy-load images below the fold

**Commit:** `perf: lazy load below-fold images`

### 7.5 Bundle audit ⬜
- [ ] Check bundle size, trim unused deps/imports

**Commit:** `perf: bundle size audit`

### 7.6 Lighthouse audit ⬜
- [ ] Run Lighthouse, fix issues, aim 90+ in all categories

**Commit:** `fix: lighthouse audit fixes`

### 7.7 Mobile QA — layout ⬜
- [ ] Verify spacing and tap targets at small widths

**Commit:** `fix: mobile spacing and tap targets`

### 7.8 Mobile QA — interactions ⬜
- [ ] Verify menu behavior, forms, animations on real device widths

**Commit:** `fix: mobile interaction QA pass`

### 7.9 Deploy ⬜
- [ ] Production build, deploy to Vercel

**Commit:** `chore: production build and deploy`

### 7.10 README live URL ⬜
- [ ] Update README live-demo URL and final screenshots

**Commit:** `docs: update live site url`

---

## Notes & Decisions Log

| Date       | Decision                                                     |
|------------|--------------------------------------------------------------|
| 2026-08-22 | Roadmap created; work begins at Phase 1                      |
| 2026-08-22 | Contact form: Formspree chosen                               |
| 2026-08-22 | Social links + real projects deferred by user                |
| 2026-08-22 | Phases split into commit-sized mini-phases (27 total)        |
| 2026-08-26 | Full UI audit added: Phase 0 (design system), 5 (redesigns), 6 (motion) |
| 2026-08-26 | Target aesthetic: dark-first, violet accent, mono details, glass cards |
| 2026-08-26 | Merge conflict markers resolved (kept richer variants); roadmap expanded to 78 commit-sized micro-phases for granular commit history |
