# Satwik Biswal — Cosmic Portfolio 🪐

A premium, futuristic personal portfolio website with a **light glassmorphism**
theme and a space/cosmic atmosphere — bright backgrounds, layered translucent
panels, controlled blur, subtle edge highlights and restrained cool
indigo/violet/cyan accents.

> **Note on the stack:** the original brief asked for Next.js. This project
> ships as a **Vite + React 19 + TypeScript** single-page app using the exact
> same React/TypeScript/Tailwind/Framer Motion/GSAP/Three.js stack. It runs
> with `npm install && npm run dev` and deploys to **Vercel or Netlify**
> identically (static export, no server required).

---

## ✨ Features

- **Light glassmorphism UI** — layered translucent panels, backdrop blur,
  edge highlights, no dark glass
- **Animated starfield** (canvas 2D) with twinkling stars & shooting stars
- **Drifting pastel nebula** background + film grain + orbit decorations
- **3D procedural ice planet** — React Three Fiber + custom GLSL shaders
  (noise surface, fresnel atmosphere, ring, orbiting particles), with a CSS
  fallback for small screens / no WebGL
- **Typing effect** — `AI Developer • ML Enthusiast • Full Stack Developer • Problem Solver`
- **Glowing futuristic avatar frame** — rotating gradient rings, orbiting
  comet, pulse ring, floating chips (placeholder image included)
- **Magnetic buttons**, **3D tilt cards** with glare, **cursor-follow glow** +
  trailing cursor, **smooth scrolling** (Lenis synced with GSAP ScrollTrigger)
- **Premium preloader** with animated counter, then a cinematic page reveal
- **GSAP** parallax orbs, animated stat counters, infinite tech marquee
- **Featured projects** with original custom SVG icons (chess, calculator,
  flappy bird), GitHub + Live Demo buttons
- **SEO optimized** — meta/OG/Twitter tags, JSON-LD Person schema, semantic
  HTML, lazy-loaded 3D bundle
- **Responsive** — fully mobile friendly, reduced-motion aware

## 🛠 Tech Stack

| Purpose        | Library                                   |
| -------------- | ----------------------------------------- |
| Framework      | Vite + React 19 + TypeScript              |
| Styling        | Tailwind CSS v4                           |
| Animation      | Framer Motion, GSAP (ScrollTrigger)       |
| 3D             | Three.js + React Three Fiber              |
| Smooth scroll  | Lenis                                     |
| Icons          | Lucide + custom inline SVGs               |

## 🚀 Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build & preview:

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/portfolio/
│   ├── effects/          # Reveal, Magnetic, TiltCard, SectionHeading,
│   │                     # PointerEffects, Starfield
│   ├── icons/            # SocialIcons + original ProjectIcons (SVG)
│   ├── CosmicBackground.tsx
│   ├── PlanetScene.tsx   # R3F 3D planet (+ CSS fallback)
│   ├── Preloader.tsx     # premium boot sequence
│   ├── Navbar.tsx
│   ├── Hero.tsx          # typing effect + avatar frame + 3D planet
│   ├── About.tsx / Skills.tsx / Education.tsx
│   ├── Projects.tsx / Contact.tsx / Footer.tsx
│   └── SmoothScroll.tsx  # Lenis + GSAP sync
├── data/portfolio.ts     # ⭐ edit ALL content here
├── hooks/use-typing.ts
└── lib/smooth-scroll.ts
public/
├── avatar-placeholder.svg  # ⭐ replace with your photo
├── resume.pdf              # ⭐ replace with your real resume
├── favicon.svg
└── og-cover.svg
scripts/generate-resume.mjs # regenerates public/resume.pdf
```

## 🎨 Customization

Everything editable lives in **`src/data/portfolio.ts`**:

| What                        | Where                                                    |
| --------------------------- | -------------------------------------------------------- |
| Name, roles, tagline, email | `profile` object                                         |
| Photo                       | swap `public/avatar-placeholder.svg` for `avatar.jpg` and update `profile.avatar` to `"/avatar.jpg"` |
| Resume                      | replace `public/resume.pdf` (or edit + run `node scripts/generate-resume.mjs`) |
| Social links                | `profile.github / linkedin / twitter / instagram`        |
| Skills & levels             | `skillGroups`, `techMarquee`                             |
| Degree / education          | `degree`, `coursework`, `focusAreas`                     |
| Projects                    | `projects` (name, description, tags, **github**, **demo**) |
| Stats counters              | `stats`                                                  |

## ☁️ Deployment

**Vercel** — import the repo; framework preset *Vite*; build `npm run build`,
output `dist`. No env vars required.

**Netlify** — build command `npm run build`, publish directory `dist`.

## ♿ Accessibility & Performance

- Respects `prefers-reduced-motion` (disables heavy animation, Lenis falls
  back to native scroll)
- 3D canvas is lazy-loaded and only rendered on `lg+` screens with WebGL
- Semantic landmarks, aria-labels on icon buttons, focus-visible styles
- Custom cursor effects are desktop-only (coarse pointers excluded)

## 📄 License

Feel free to use this portfolio as a template for your own site.
