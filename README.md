# Care for Knowledge — Main Website

Jekyll site for careforknowledge.org, hosted on GitHub Pages.

---

## Structure

```
cfk-site/
├── _config.yml          ← Site settings, URL, social links
├── _data/
│   ├── team.yml         ← All team members (board + executive)
│   └── programmes.yml   ← All programme metadata
├── _includes/
│   ├── head.html        ← SEO, OG tags, fonts — auto-adapts per page
│   ├── nav.html         ← Navigation bar (fixed, dark navy)
│   └── footer.html      ← Footer with links and logo
├── _layouts/
│   └── default.html     ← Base layout wrapping all pages
├── assets/
│   ├── css/main.css     ← Full design system (tokens, components, responsive)
│   ├── js/main.js       ← Nav toggle, scroll animations, email protection
│   └── images/
│       ├── favicon/     ← favicon.ico, favicon-192.png, favicon-512.png
│       ├── team/        ← Headshots (see naming guide below)
│       ├── og/          ← OG images 1200×630px (see list below)
│       ├── hero-home.jpg
│       └── band-fellows.jpg
├── index.html           ← Homepage
├── about/index.html     ← About + Team + Board
├── programmes/
│   ├── index.html       ← Programmes overview
│   ├── model-nass/      ← Model NASS programme page
│   ├── ctri/            ← CTRI programme page
│   ├── wikiquestions/   ← WikiQuestions programme page
│   ├── fellowship/      ← Fellowship programme page
│   └── first-essays/    ← First Essays (in development)
├── sprints/index.html   ← CFK Sprints page
├── donate/index.html    ← Donation page (Paystack links)
├── get-involved/index.html ← Get Involved
└── contact/index.html   ← Contact (email spam-protected)
```

---

## Making Common Changes

### Update a team member
Edit `_data/team.yml`. Add/change name, role, fellowship_level, linkedin, photo filename.
Changes reflect automatically on the About page — no HTML editing needed.

### Add a programme
Edit `_data/programmes.yml` (for the overview grid on homepage and programmes page),
then create a new folder under `programmes/` with an `index.html`.

### Update contact email
The email is assembled client-side for spam protection in `assets/js/main.js`.
To change it, edit the `data-email` attributes in `contact/index.html`.
Format: `data-email="username|domain.com"` (pipe separator, not @).

### Update donation links
Edit `donate/index.html` — the two Paystack links are clearly marked.
Current links:
- One-time: https://paystack.shop/pay/donatetocfk
- Recurring: https://paystack.shop/pay/recurringcfk

### Add a new Sprint to the Sprints page
Edit `_data/sprints.yml` — add a new entry to the bottom of the file:

```yaml
- number: 3
  date: "14 September 2026"
  location: "Osogbo, Osun State"
  virtual: true
  status: upcoming        # change to: done   after the Sprint runs
  description: "One or two sentences summarising what happened. Write after the Sprint."
  stats:
    - value: "—"
      label: "Past questions digitised"
    - value: "1 day"
      label: "Duration"
  photos:
    # - s3-01.jpg         # uncomment and add filenames after the Sprint
  report:
    # path: /assets/reports/cfk-sprint-3-report.pdf
    # label: "Download Sprint 3 Report"
```

The Sprints page re-renders automatically. The most recent Sprint opens by default.

### Add photos to a Sprint
Place image files in `assets/images/sprints/`.
Then uncomment and add the filenames to the `photos` list in `_data/sprints.yml`:
```yaml
photos:
  - s3-01.jpg
  - s3-02.jpg
```
Recommended: 4–6 photos per Sprint, landscape crop, 1200×900px minimum.

### Add a Sprint report (PDF)
Place the PDF in `assets/reports/`.
Then uncomment and fill in the `report` block in `_data/sprints.yml`:
```yaml
report:
  path: /assets/reports/cfk-sprint-3-report.pdf
  label: "Download Sprint 3 Report"
```
A download button appears on the Sprint card automatically.

### Change nav links or footer links
Edit `_includes/nav.html` and `_includes/footer.html`.
These files are used by every page automatically.

### Change SEO title/description/OG image for a page
Edit the front matter at the top of any page:
```yaml
---
title: "Page Title"
description: "Meta description for this page."
og_image: "/assets/images/og/og-pagename.jpg"
---
```
If og_image is not set, it falls back to the default OG image set in `_config.yml`.

---

## Images Needed

### Team headshots — place in `assets/images/team/`
Square crop recommended, 400×400px minimum. Warm, professional.
Name exactly as listed in `_data/team.yml`:
- joshua-olunlade.jpg
- israel-oladejo.jpg
- peace-oyegbola.jpg
- emmanuel-ogunniyi.jpg
- janet-fasoro.jpg
- cornelius-aboderin.jpg
- enoch-agboola.jpg
- ayodeji-oke.jpg

People without photos automatically show initials placeholder.

### Hero images
- `hero-home.jpg` — Homepage hero background. Wide landscape, young Nigerians
  studying or collaborating. Warm and human. 1920×1080px minimum.
- `band-fellows.jpg` — Photo band on homepage. Sprint or team session.
  1920×600px. Will be overlaid with text, so needs some darkness.

### OG images — place in `assets/images/og/` — 1200×630px each
- `og-default.jpg` — Default for pages without a specific OG image
- `og-home.jpg` — Homepage
- `og-about.jpg` — About page
- `og-programmes.jpg` — Programmes overview
- `og-modelnass.jpg` — Model NASS page
- `og-ctri.jpg` — CTRI page
- `og-wikiquestions.jpg` — WikiQuestions page
- `og-fellowship.jpg` — Fellowship page
- `og-sprints.jpg` — Sprints page
- `og-donate.jpg` — Donate page

OG images should follow CFK branding: navy background, programme/page name
in large white/cyan Urbanist text. Simple and bold.

### Favicons — place in `assets/images/favicon/`
- `favicon.ico`
- `favicon-192.png`
- `favicon-512.png`

---

## Running Locally

```bash
gem install bundler
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo
2. Go to Settings → Pages → Source: Deploy from branch → main
3. GitHub builds and deploys automatically on every push
4. Custom domain: add `CNAME` file with `careforknowledge.org`

---

## Design System

Colours (from `_config.yml` CSS variables):
- `--navy: #060F5B` — primary dark, nav, hero backgrounds
- `--cyan: #0BECD6` — primary accent, CTAs, highlights
- `--pink: #FF1BA2` — secondary accent, eyebrows
- `--mint: #89FEB8` — tertiary accent
- `--white / --off / --text / --muted` — typography scale

Font: Urbanist (Google Fonts), weights 300–900.
