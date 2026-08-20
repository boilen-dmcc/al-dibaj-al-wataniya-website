# ADW — Al Dibaj Al Wataniya | Corporate Website

Official corporate website for **Al Dibaj Al Wataniya (ADW)** — an Iraq-based
contracting and general trading company serving the Oil & Gas, Energy and
Industrial sectors.

Built with **React + Vite + TypeScript + Tailwind CSS v4**. Fully static —
no backend, no API keys required. Deploys cleanly to GitHub Pages and works
just as well behind a custom domain (Hostinger DNS → GitHub Pages).

> **Note on imagery:** this build environment does not have general internet
> access, so all section imagery is a set of original, hand-built SVG
> illustrations (pumpjacks, refinery towers, storage tanks, pipelines, a
> drilling derrick, PPE-equipped workers) styled in the ADW charcoal/bronze
> palette — deliberately land-based/onshore only, per the brand brief. They
> are lightweight, load instantly, and never break. If you'd like to swap
> any of them for real photography later, see **"Where to edit"** below —
> every illustration is isolated in `src/components/illustrations/`.

---

## 1. Run it locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To produce a production build and preview it locally:

```bash
npm run build
npm run preview
```

---

## 2. Push it to GitHub

```bash
git init
git add .
git commit -m "Initial ADW website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Create the repository on GitHub first (public repo, no README/license
so it doesn't conflict with this project's files), then run the commands
above from inside this project folder.

---

## 3. Deploy with GitHub Pages

This repo already includes a GitHub Actions workflow at
`.github/workflows/deploy.yml` that builds the site and publishes it to
GitHub Pages automatically on every push to `main`.

One-time setup on GitHub:

1. Push the repo to GitHub (see step 2).
2. Go to **Settings → Pages** in your GitHub repository.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push any commit to `main` (or re-run the workflow from the **Actions**
   tab) — the site will build and deploy automatically.
5. Your site will be live at `https://<your-username>.github.io/<your-repo>/`.

The Vite config uses relative asset paths (`base: './'`), so the build works
correctly whether it's served from a GitHub Pages project subpath or from
the root of a custom domain — no extra configuration needed either way.

---

## 4. Connect your Hostinger domain (`www.aldibajalwataniya.com`) later

When you're ready to point your Hostinger domain at the GitHub Pages site:

**A. In your GitHub repository:**

1. Go to **Settings → Pages**.
2. Under **Custom domain**, enter `www.aldibajalwataniya.com` and save.
   GitHub will create a `CNAME` file in your repo automatically (or add
   one yourself in the `public/` folder containing just that domain name).
3. Tick **Enforce HTTPS** once it becomes available (GitHub provisions a
   free SSL certificate automatically — this can take a few minutes to a
   few hours).

**B. In Hostinger's DNS settings for `aldibajalwataniya.com`:**

- Add a **CNAME record**:
  - Host: `www`
  - Points to: `<your-username>.github.io`
- If you also want the bare domain (`aldibajalwataniya.com` without `www`)
  to work, add **A records** for `@` pointing to GitHub Pages' IP addresses:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
  and optionally an **AAAA record** set for IPv6 (GitHub's current IPv6
  addresses are published in GitHub's own Pages documentation — check there
  at the time you set this up, since these can change).
- DNS changes can take anywhere from a few minutes to 24–48 hours to
  propagate fully.

Once DNS resolves and HTTPS is issued, `https://www.aldibajalwataniya.com`
will serve this site directly.

---

## 5. Where to edit things

Everything content-related lives in a small number of files so you don't
need to touch component code for routine updates:

| What you want to change | File |
|---|---|
| Phone numbers, email, address, website, tagline | `src/data/content.ts` → `company` |
| Navigation menu items | `src/data/content.ts` → `navLinks` |
| About Us value cards (Reliability, Quality, Safety, Partnership) | `src/data/content.ts` → `aboutValues` |
| Services (the 6 service cards) | `src/data/content.ts` → `services` |
| Industries We Serve | `src/data/content.ts` → `industries` |
| Why Choose ADW (6 points) | `src/data/content.ts` → `whyChooseAdw` |
| Capabilities list | `src/data/content.ts` → `capabilities` |
| HSE points | `src/data/content.ts` → `hsePoints` |
| About Us paragraph text, Hero headline/subheading | `src/sections/About.tsx`, `src/sections/Hero.tsx` |
| Page title / meta description / Open Graph tags / structured data | `index.html` |
| Logo | `src/assets/adw-logo.png` and `public/adw-logo.png` (replace the file, keep the same name, or update the import in `src/components/Navbar.tsx` and `src/components/Footer.tsx`) |
| Favicons | `public/favicon-*.png` (regenerate from a new logo file at 16/32/180/192/512px) |
| Section illustrations (pumpjacks, refinery, pipeline, desert rig, PPE workers) | `src/components/illustrations/HeroScene.tsx` and `src/components/illustrations/Scenes.tsx` — or replace with real photography by dropping images into `src/assets/` and swapping the `<SceneImage />` usages for `<img>` tags |
| Brand colours (charcoal / bronze-gold palette) | `src/index.css` → the `@theme` block at the top |
| Fonts | `src/index.css` → the Google Fonts `@import` line and `--font-display` / `--font-sans` variables |

### Adding a real project to "Capabilities" later

`capabilities` in `src/data/content.ts` is intentionally structured as a
simple array so you can add real, completed projects once you have them to
publish, without touching any component code.

### Contact form

The contact form has no backend — submitting it opens the visitor's email
client with a pre-filled message addressed to `info@aldibajalwataniya.com`.
If you'd like true in-page form submission (e.g. via a service like
Formspree, EmailJS, or a serverless function), that can be wired in later
without changing the rest of the site.

---

## 6. Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Zero runtime dependencies beyond React — no analytics, no tracking, no
  external API calls other than Google Fonts and the Google Maps embed on
  the Contact section (both load only in the visitor's browser at runtime).

## 7. Performance & accessibility notes

- All imagery is inline SVG — no image requests, no layout shift, fast
  first paint.
- Images/icons carry descriptive `alt` text / `aria-label`s.
- Semantic heading hierarchy: one `<h1>` in the hero, `<h2>` per section,
  `<h3>` for cards.
- Mobile menu, buttons and links all meet reasonable tap-target sizing.
- `npm run build` produces a single small JS bundle and CSS file with no
  unused-framework bloat (Tailwind only ships the utility classes actually
  used in the project).
