# Portfolio Template

A dark/light editorial portfolio for full-stack developers. Built with **Vite + React**.

## Design

- **Palette**: Midnight Teal & Silver with alternating dark/light sections
- **Typography**: Playfair Display (serif) for headlines, Inter (sans) for body
- **Responsive**: Mobile-first, respects `prefers-reduced-motion`
- **CSS tokens** in `src/index.css` (`.theme-dark` / `.theme-light`)

## Structure

```
src/
├── config/siteData.js      # All content (personal, projects, skills, contact)
├── components/
│   ├── common/             # ProjectCard, ImagePlaceholder, icons
│   ├── layout/             # Navbar, Footer
│   └── sections/           # Hero, About, Projects, Skills, Interests, Contact
├── App.jsx / App.css
├── index.css               # Design system, reset, base styles
└── main.jsx
```

## Commands

```bash
npm install      # install deps
npm run dev      # dev server at localhost:5173
npm run build    # production build to dist/
npm run lint     # oxlint
```

## Customize

Edit **`src/config/siteData.js`** for:

- Personal info, bio, location
- Project data (title, description, tech, repo/demo/video URLs, notes)
- Skills, interests, contact links

## Images

Place files in `public/images/`:

- `profile/profile.jpg` — Hero portrait
- `profile/about.jpg` — About section
- `projects/*.png` — Project screenshots

## Features

- Expandable project descriptions (Show more/less)
- Accessible: semantic HTML, focus states, reduced motion
- No backend required — static deployment ready
