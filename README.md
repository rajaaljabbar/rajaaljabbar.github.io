# Putra Raja Aljabbar — Portfolio (`pra-kernel@v2.0.0`)

**Live Website:** [https://rajaaljabbar.github.io](https://rajaaljabbar.github.io)

Personal portfolio of **Putra Raja Aljabbar** — IT Support & Infrastructure Specialist and AI-Augmented Builder based in Bogor – Jakarta, Indonesia.

## Tech Stack

- **Frontend:** Semantic HTML5, Tailwind CSS, Vanilla JavaScript (ES6+)
- **Internationalization:** Built-in bilingual switcher (`EN` / `ID`, default `EN`)
- **CI/CD & Hosting:** GitHub Actions → GitHub Pages

## Project Structure

```
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── .nojekyll
├── .github/workflows/deploy.yml
└── assets/
    ├── css/style.css
    ├── js/
    │   ├── tailwind.config.js
    │   ├── i18n.js
    │   └── main.js
    ├── img/
    └── docs/resumeputra.pdf
```

## Changelog

### `v2.0.0` (2026-11-18)
- Added bilingual language toggle (`EN` / `ID`) in header and mobile navigation with `EN` as the default language while preserving technical IT terminology in `ID` mode.
- Integrated asynchronous contact form submission (Web3Forms AJAX) with honeypot spam protection and automatic `mailto:` fallback.
- Optimized all portfolio and project imagery for fast page loads and OpenGraph previews.
- Added canonical metadata, OpenGraph/Twitter cards, JSON-LD `Person` schema, `sitemap.xml`, and modal keyboard focus trapping.
- Added 6 featured STAR architecture case studies and updated career timeline.
