# Cyber Hygiene Model United Nations 2025

Production-ready React + Vite website for the Cyber Hygiene Model United Nations (CyberHygiene-MUN 2025), organised by C-DAC Mumbai and hosted by A. C. Patil College of Engineering.

## Stack

- React 18 + Vite
- Tailwind CSS (dark mode enabled) + Framer Motion
- React Router DOM
- Lucide React icon set
- Headless UI for accessible modals

## Getting Started

```bash
npm install
npm run dev
```

Open the development server at http://localhost:5173/. To create an optimized production build, run `npm run build`.

## Structure

```
/src
  /assets        # Logos and media placeholders
  /components    # Reusable UI blocks
  /data          # Mock content for committees, themes, agenda, etc.
  /pages         # Routed views
  App.jsx
  main.jsx
```

Update the mock data inside `src/data` and image URLs inside `src/assets` before launch. Replace the Google Form links in `pages/Registration.jsx` with the official registration endpoints.

## Deployment

Deploy seamlessly to Vercel or Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`

Remember to set the base URL to `/` (default) and enable SPA fallback routing when deploying.
