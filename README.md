# Tayyaba Amin — Portfolio

A personal portfolio for Tayyaba Amin, a Software Engineering student and full-stack developer. Built with **Vite**, **React 19**, and **CSS Modules**.

## Highlights

- Editorial midnight-plum design with coral and lilac accents
- Hero portrait composition with a lilac disc, an open coral ring, and a soft blurred halo
- Auto-playing hero intro with a **Replay intro** control
- Scroll reveals, masked word animations, and pointer tilt on fine-pointer devices
- Responsive project gallery: 3 cards per row on laptops and desktops, 2 on tablets, 1 on phones
- Compact footer with copyright, a **Reduce motion** toggle, and **Back to top**
- Accessible, keyboard-friendly, and ready for static deployment

## Tech Stack

- React 19
- Vite 8
- CSS Modules
- oxlint

## Structure

```
src/
├── components/
│   ├── common/     # ProjectCard, ImagePlaceholder, SplitText, icons
│   ├── layout/     # Navbar, Footer
│   └── sections/   # Hero, About, Projects, Skills, Interests, Contact
├── config/
│   └── siteData.js # All portfolio content
├── hooks/          # usePointerTilt, useRoleReveal, useTypewriter
├── lib/
│   └── motion.js   # Motion preference and persistence
├── App.jsx
├── App.css         # Scroll-reveal and typewriter motion
├── index.css       # Design tokens, reset, shared utilities
└── main.jsx
```

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Customizing Content

Edit `src/config/siteData.js`:

- `personal`, `hero`, `about`, and `navLinks`
- `projects` — `summary` is shown in the card; `description` keeps the full text
- `skills`, `interests`, `contact`, and `siteMeta`

## Motion and Accessibility

Animations run by default. The footer's **Reduce motion** control stores the choice in `localStorage` and reloads the page into a static, fully readable state. Pointer tilt and card hover effects are limited to fine-pointer devices. Focus styles, a skip link, and semantic landmarks are included.

## Deployment

`npm run build` creates a static `dist/` folder that can be deployed to Vercel, Netlify, GitHub Pages, or any static host.
