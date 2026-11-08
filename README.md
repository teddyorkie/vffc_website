# VFFC.vn — Website (EN / VI)

Static, bilingual website for **VFFC — Vietnam France Financial & Construction Consulting**: consulting services, investment projects and food export catalogues.

- Plain HTML + Tailwind CSS + vanilla JavaScript. No framework, no build needed to run.
- Responsive: mobile (≥ 360 px), tablet and desktop. Desktop navigation from 1280 px, a menu button below.
- Language switch (EN / VI) on every page. The chosen language is remembered between pages.

## Run it

Open `index.html` in a browser. That's all.

For a local server (recommended when testing links and fonts):

```bash
npm run serve          # or any static server, e.g. python3 -m http.server
```

To publish, upload the whole folder (except `node_modules/` and `src/`) to any web host.

## Change the styles

The compiled stylesheet `assets/css/styles.css` is included and ready to use. Only rebuild it after changing classes or the theme:

```bash
npm install
npm run build          # one-off build (minified)
npm run watch          # rebuild automatically while editing
```

## Folder structure

```
index.html                 Home: hero, why VFFC, consulting A1–A4, trade overview, contact
projects.html              A4 · Investment projects (filterable)
processed-foods.html       B1 · Processed foods & spices catalogue
frozen-foods.html          B2 · Frozen seafood, foods & fruit catalogue

assets/
  css/styles.css           Compiled Tailwind CSS (generated — do not edit)
  img/products/            One photo per product, named after the product id
  img/projects/            One photo per project, named after the project code
  js/
    data/                  ALL TEXT AND CONTENT lives here (EN + VI)
      site.js              Brand, contact details, navigation, shared labels
      home.js              Home page content
      projects.js          Investment projects
      catalogue-processed.js
      catalogue-frozen.js
    core/                  Shared code used by every page
      i18n.js              Language state + translation helper
      ui.js                Reusable components (cards, spec tables, hero, chips…)
      layout.js            Header, mobile menu, language switch, footer
      app.js               Mounts a page and re-renders on language change
    pages/                 One small script per page type
      home.js
      projects.js
      catalogue.js         Shared by every product catalogue
src/input.css              Tailwind source: theme layers + component classes
tailwind.config.js         Colours, fonts, content paths
```

### How the pieces fit (DRY)

- **Content is separate from markup.** Every text is `{ en: "...", vi: "..." }` in `assets/js/data/`. Edit a sentence once and it updates everywhere it is used.
- **One header, one footer** (`core/layout.js`) for all pages.
- **One product card, one project card, one spec table** (`core/ui.js`) reused across pages.
- **One catalogue script** (`pages/catalogue.js`) renders any catalogue; the HTML only says which one via `data-catalogue`.
- **Repeated styles are named classes** in `src/input.css` (`.btn-gold`, `.card`, `.spec-table`, `.container-site`…).

## Common edits

**Contact details** — `assets/js/data/site.js` → `contact`.

**Add a product** — append an object to a group's `items` in the catalogue data file, and add a photo `assets/img/products/<id>.jpg`:

```js
{
  "id": "white-pepper",
  "code": "B1.10",
  "name": { "en": "White Pepper", "vi": "Tiêu trắng" },
  "altName": { "en": "Tiêu trắng", "vi": "White Pepper" },
  "description": { "en": "…", "vi": "…" },
  "image": "assets/img/products/white-pepper.jpg",
  "specs": [ { "label": { "en": "Packing", "vi": "Đóng gói" }, "value": { "en": "25 kg bag", "vi": "Bao 25 kg" } } ],
  "markets": [ { "en": "EU", "vi": "EU" } ]
}
```

**Add a project** — append to `items` in `assets/js/data/projects.js`. `type` must be one of the ids in `types` (`mixed`, `resort`, `hotel`, `commercial`). Add the photo to `assets/img/projects/`.

**Add a new catalogue** (e.g. fresh fruit):
1. Copy `catalogue-frozen.js` to `catalogue-fresh.js`, set `VFFC.catalogues.fresh = {…}` and edit the content.
2. Copy `frozen-foods.html` to `fresh-foods.html`; change `data-nav`, `data-catalogue="fresh"`, the title/description and the data script name.
3. Add a nav entry in `site.js`. Run `npm run build` if you used new Tailwind classes.

**Add a language** — add the code to `LANGS` in `core/i18n.js` and a matching key (e.g. `"fr"`) to the content objects. Missing translations fall back to English.

## Before going live

- **Contact form**: on this static site the form opens the visitor's email app addressed to info@vffc.vn. To receive submissions directly, point the form to a form service (Formspree, Basin, Getform…) or your own server endpoint in `assets/js/pages/home.js` → `bindForm`.
- **Images** are illustrative (product photos and project renderings). Replace them with photos from suppliers or developers when available, keeping the same file names.
- **SEO**: page text is rendered by JavaScript. Google indexes it, but if SEO becomes a priority, the same data files can feed a static site generator (e.g. Eleventy) to pre-render HTML.
- Fonts load from Google Fonts (Archivo, Inter). Without internet access the system font is used.
