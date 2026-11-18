# Antoine Lebeau — CV en ligne

Personal CV site: a static [Astro](https://astro.build) site in French (`/`) and English (`/en/`), with a print-ready PDF version.

## Update the content

**Everything is in [`src/data/cv.ts`](src/data/cv.ts).** Experience, stats, skills, contact links: each text has an `fr` and an `en` version. Wrap text in `**double asterisks**` to make it bold in bullet points.

After changing content, regenerate the PDFs and the social-preview image:

```bash
npm run pdf
```

This builds the site, renders the print layout to `public/Antoine_Lebeau_CV_FR.pdf` / `_EN.pdf`, and refreshes `public/og.jpg`. Commit those files too. (It needs Playwright + Chromium installed locally: `npx playwright install chromium`.)

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
```

## Deploy (Vercel)

Import the repo in Vercel. The Astro preset is detected automatically (build `npm run build`, output `dist`). No configuration needed.
If you add a custom domain, set the env var `SITE_URL=https://your-domain.com` so canonical and Open Graph links use it.

## Structure

```
src/data/cv.ts          ← all content (FR + EN)
src/components/CV.astro ← page markup
src/layouts/Base.astro  ← <head>, SEO, Open Graph
src/styles/global.css   ← design (dark/light auto + print/PDF styles)
scripts/pdf.mjs         ← generates PDFs + og.jpg
public/                 ← photo, PDFs, favicon, og image
```

Photo © Max Gozy.
