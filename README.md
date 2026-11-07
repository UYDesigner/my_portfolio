# Developer Portfolio

A minimal, blueprint-style personal portfolio for a **Full-Stack Developer exploring AI/ML engineering**.
Built with React and Vite in plain JavaScript, with a dashed-grid layout, serif headings, dark and light themes, and subtle motion.

All personal content lives in `src/data/`. Anything in `[brackets]` is a placeholder for you to replace.

## Tech stack

| | |
|---|---|
| Framework | React 18 + Vite 5 (JavaScript, no TypeScript) |
| Styling | Tailwind CSS 3 with CSS-variable theme tokens |
| Motion | Framer Motion |
| Icons | Lucide React, plus brand logos from the Simple Icons CDN |

## Getting started

Requires **Node.js 18 or newer**.

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build in /dist
npm run preview   # serve the production build locally
```

## Project structure

```
portfolio/
├── index.html                  # SEO meta, OG tags, fonts, no-flash theme script
├── public/
│   ├── favicon.svg
│   └── banners/                # animated banner GIFs (pick one for the profile banner)
├── src/
│   ├── main.jsx
│   ├── App.jsx                 # page frame; composes sections in order
│   ├── index.css               # Tailwind layers, theme tokens, dashed-rule helpers
│   ├── data/                   # ALL personal content lives here
│   │   ├── profile.js          # name, role, bio, links, banner/avatar, quote
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── skillIcons.js       # skill name -> icon slug + colors (no need to edit often)
│   │   └── navigation.js
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, Logo
│   │   ├── sections/           # Profile, About, Contact, Projects, TechStack,
│   │   │                       # GithubActivity, CallToAction, Quote
│   │   ├── ui/                 # Section, ProjectCard, SkillIcon, Button, ThemeToggle,
│   │   │                       # RichText, XIcon, TerminalWindow
│   │   └── terminal/           # Terminal.jsx (built, currently not rendered)
│   ├── terminal/commands.js    # terminal command logic (reads from data/)
│   ├── hooks/                  # useTheme, useActiveSection, useGithubContributions, useTypewriter
│   └── lib/                    # links, heatmap, motion variants, scroll helper
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

Components never hard-code personal content. They render whatever `src/data/` exports.

## Making it yours

| To change | Edit |
|---|---|
| Name, role, location, bio, quote, email, resume, social links | `src/data/profile.js` |
| Banner and avatar | `bannerUrl` / `avatarUrl` in `profile.js` (files go in `public/`) |
| Projects | `src/data/projects.js` |
| Skills (commented-out lines are hidden) | `src/data/skills.js` |
| Nav links | `src/data/navigation.js` |
| Page title, description, Open Graph tags | `index.html` (search for `TODO` and `[Your Name]`) |

Notes:

- **About text:** wrap a phrase in `**double asterisks**` to render it bold and underlined.
- **Empty values:** an empty string (`''`) means "not provided". A project with no `liveUrl` or `repoUrl` simply hides that icon.
- **Contact links:** links without a URL appear dimmed in development and are removed from production builds, so visitors never see a dead link.
- **Banner:** to use one of the included GIFs, set `bannerUrl: '/banners/neural-net.gif'`. The others are `code-rain`, `gradient-descent`, `pixel-robot` and `data-clusters`.
- **Favicon:** `public/favicon.svg` is a simple placeholder. Replace it with your own.

## Features

### Theming

- Colors are CSS variables in `src/index.css`, defined for `:root` (light) and `.dark`, and mapped to Tailwind tokens in `tailwind.config.js`. Components only use tokens such as `bg-bg`, `text-muted` and `border-line`, so they never branch on theme.
- The toggle saves the choice in `localStorage` under `theme`, and the site defaults to dark.
- A small inline script in `index.html` applies the saved theme before first paint, so there is no flash.

### Layout

The page is a centered 800px column with dashed vertical borders and full-width dashed horizontal rules at section boundaries. The `Section` component and the `.bleed-t` / `.bleed-b` helpers in `index.css` produce this automatically for every section.

### GitHub activity

The GitHub Activity section reads your username from the GitHub link in `profile.js`. It fetches your contribution graph from a public contributions API. The endpoint is a single constant in `src/hooks/useGithubContributions.js`, so you can point it at your own backend. Without a GitHub URL it shows an empty graph and a hint, and it never shows made-up numbers.

### Skill icons

Skill logos load lazily from the [Simple Icons](https://simpleicons.org) CDN, so nothing is bundled. Icons are gray at rest and take their brand color on hover. If an icon can't load (offline, blocked, or a removed slug), the chip falls back to a neutral Lucide icon. To add an icon for a new skill, add an entry to `src/data/skillIcons.js` using the skill's exact name and its Simple Icons slug.

### Accessibility and motion

- Semantic landmarks, a skip-to-content link, visible focus rings, labelled icon buttons, `aria-expanded` on the menu, `aria-pressed` on filters, and `aria-current` on the active nav link.
- `MotionConfig reducedMotion="user"` in `App.jsx` and a `prefers-reduced-motion` rule in `index.css` disable non-essential animation for users who ask for it. Note that GIF banners cannot pause themselves.

## Status

**Built:** Navbar with dropdown, Profile (banner, avatar, name), About, Contact, Projects, Tech Stack with category filters, GitHub Activity, Call to action, Quote, Footer.

**Not built yet:** Education, AI/ML Journey, and a Highlights section for testimonials. The nav only links to sections that exist, so these will be added to `src/data/navigation.js` as they are built.

**Terminal:** an interactive terminal (`help`, `whoami`, `about`, `skills`, `projects`, `contact`, `clear`) is implemented in `src/components/terminal/` and `src/terminal/commands.js` but is not currently on the page. To bring it back, render `<Terminal />` inside any section.

## Deployment

`npm run build` outputs a static site to `dist/`. It can be hosted on any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages). On Vercel or Netlify, import the repository with the Vite preset: build command `npm run build`, output directory `dist`.

Before you publish:

1. Replace every `[placeholder]` in `src/data/` and `index.html`.
2. Fill in the page title, description and Open Graph tags in `index.html`, and add an `og:image` if you want link previews.
3. Replace `public/favicon.svg`.
4. Check the page in both themes and on a phone-sized screen.
