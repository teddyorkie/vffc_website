/**
 * UI — small, reusable HTML building blocks used by every page.
 * Each function takes data (bilingual values allowed) and returns an HTML string.
 * All text passes through escape() so content files can never inject markup.
 *
 * Tailwind note: class names are written out in full (never concatenated)
 * so the Tailwind compiler can find them when building the CSS.
 */
(function (V) {
  'use strict';

  var ENTITIES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

  function escape(value) {
    return String(value).replace(/[&<>"']/g, function (ch) { return ENTITIES[ch]; });
  }

  /** Translate + escape. */
  function tx(value) { return escape(V.i18n.t(value)); }

  /** Join an array of HTML strings produced by a mapper. */
  function each(list, render) { return (list || []).map(render).join(''); }

  /** Stroke icon from a single SVG path string (24×24 grid). */
  function icon(path, className) {
    return '<svg class="' + (className || 'h-6 w-6') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + escape(path) + '"></path></svg>';
  }

  /** Section heading block. tone: 'light' (on paper/white) or 'dark' (on navy). */
  function sectionHead(opts) {
    var dark = opts.tone === 'dark';
    var eyebrowClass = opts.eyebrowClass || (dark ? 'text-gold' : 'text-gold-700');
    return '<div class="flex max-w-3xl flex-col gap-3">' +
      (opts.eyebrow ? '<p class="eyebrow ' + eyebrowClass + '">' + tx(opts.eyebrow) + '</p>' : '') +
      '<h2 ' + (opts.id ? 'id="' + escape(opts.id) + '" ' : '') + 'class="' + (dark ? 'h2 text-paper' : 'h2') + '">' + tx(opts.title) + '</h2>' +
      (opts.lead ? '<p class="' + (dark ? 'text-lg text-fog' : 'text-lg text-muted') + '">' + tx(opts.lead) + '</p>' : '') +
      '</div>';
  }

  function bulletList(items, className) {
    return '<ul class="list-bullets ' + (className || '') + '">' + each(items, function (item) {
      return '<li>' + tx(item) + '</li>';
    }) + '</ul>';
  }

  /** Two-column definition list used for product specs and project details. */
  function specTable(rows) {
    return '<dl class="spec-table">' + each(rows, function (row) {
      return '<dt>' + tx(row.label) + '</dt><dd>' + tx(row.value) + '</dd>';
    }) + '</dl>';
  }

  function chips(items, label, chipClass) {
    return '<div class="flex flex-wrap items-center gap-2">' +
      (label ? '<span class="mr-1 text-xs font-semibold uppercase tracking-wide text-muted">' + tx(label) + '</span>' : '') +
      each(items, function (item) { return '<span class="chip ' + chipClass + '">' + tx(item) + '</span>'; }) +
      '</div>';
  }

  /** Photo with an "illustration" caption overlay. */
  function figure(src, alt, note, extraClass) {
    return '<figure class="relative overflow-hidden bg-white ' + (extraClass || '') + '">' +
      '<img src="' + escape(src) + '" alt="' + tx(alt) + '" loading="lazy" decoding="async" class="aspect-[4/3] h-full w-full object-cover">' +
      (note ? '<figcaption class="absolute bottom-2 left-2 bg-white/90 px-2 py-0.5 text-xs text-ink">' + tx(note) + '</figcaption>' : '') +
      '</figure>';
  }

  /** Colour themes for catalogue pages (full class names for Tailwind). */
  var THEMES = {
    brown: { hero: 'bg-brown', eyebrow: 'text-[#F2C877]', lead: 'text-[#F3E3CC]', jump: 'border-[#B98A55]', chip: 'bg-brown-100 text-brown', code: 'text-gold-700' },
    sea: { hero: 'bg-sea', eyebrow: 'text-gold', lead: 'text-[#D5E3F0]', jump: 'border-[#5C84A8]', chip: 'bg-sea-100 text-navy', code: 'text-[#1F5B8C]' },
    navy: { hero: 'bg-navy-700', eyebrow: 'text-gold', lead: 'text-fog', jump: 'border-navy-500', chip: 'bg-sea-100 text-navy', code: 'text-gold-700' }
  };

  /** Coloured page hero shared by catalogue and project pages. */
  function pageHero(opts) {
    var th = THEMES[opts.theme] || THEMES.navy;
    return '<section class="' + th.hero + ' text-paper">' +
      '<div class="container-site flex flex-col gap-5 py-14 sm:py-20">' +
      '<p class="eyebrow ' + th.eyebrow + '">' + tx(opts.eyebrow) + '</p>' +
      '<h1 class="h1 max-w-4xl">' + tx(opts.title) + '</h1>' +
      '<p class="max-w-3xl text-lg ' + th.lead + '">' + tx(opts.lead) + '</p>' +
      (opts.jumpLinks && opts.jumpLinks.length ? '<nav aria-label="' + tx(opts.jumpLabel || '') + '" class="flex flex-wrap gap-2 pt-2">' + each(opts.jumpLinks, function (l) {
        return '<a href="#' + escape(l.id) + '" class="border ' + th.jump + ' px-3.5 py-2 text-sm text-paper no-underline hover:bg-white/10">' + tx(l.label) + '</a>';
      }) + '</nav>' : '') +
      (opts.after || '') +
      '</div></section>';
  }

  /** Product card for catalogue pages. */
  function productCard(p, cfg) {
    var th = THEMES[cfg.theme] || THEMES.navy;
    var ui = V.site.ui;
    return '<article id="' + escape(p.id) + '" class="card flex scroll-mt-28 flex-col">' +
      '<div class="flex flex-col gap-5 bg-paper p-5 sm:flex-row sm:items-center sm:p-6">' +
      figure(p.image, p.name, ui.photoNote, 'w-full shrink-0 border border-sand sm:w-64 lg:w-72') +
      '<div class="flex min-w-0 flex-col gap-1.5">' +
      '<span class="font-display text-sm font-bold tracking-widest ' + th.code + '">' + escape(p.code) + '</span>' +
      '<h3 class="font-display text-2xl font-extrabold leading-tight text-navy">' + tx(p.name) + '</h3>' +
      '<span class="italic text-muted">' + tx(p.altName) + '</span>' +
      '<p class="mt-1">' + tx(p.description) + '</p>' +
      '</div></div>' +
      '<div class="flex flex-1 flex-col gap-5 p-5 sm:p-6">' +
      specTable(p.specs) +
      chips(p.markets, ui.mainMarkets, th.chip) +
      '<a href="index.html#contact" class="btn-navy mt-auto self-start">' + tx(ui.requestSpecs) + '</a>' +
      '</div></article>';
  }

  /** Project card for the investment projects page. */
  function projectCard(p, labels) {
    return '<article class="card flex flex-col">' +
      '<div class="relative">' +
      figure(p.image, p.title, labels.photoNote) +
      '<span class="absolute left-3 top-3 bg-navy px-2.5 py-1 text-xs font-bold tracking-wide text-paper">' + escape(p.code) + '</span>' +
      '<span class="absolute right-3 top-3 bg-gold px-2.5 py-1 text-xs font-bold text-navy">' + tx(p.status) + '</span>' +
      '</div>' +
      '<div class="flex flex-1 flex-col gap-4 p-5">' +
      '<span class="text-xs font-bold uppercase tracking-wide text-gold-700">' + tx(labels.typeLabel) + '</span>' +
      '<h3 class="font-display text-xl font-extrabold leading-snug text-navy">' + tx(p.title) + '</h3>' +
      specTable(p.details) +
      '<a href="index.html#contact" class="btn-navy mt-auto self-start text-sm">' + tx(labels.cta) + '</a>' +
      '</div></article>';
  }

  /** Grid of short title + text notes (bottom-of-page info strips). */
  function infoGrid(items) {
    return '<section class="border-t border-sand bg-white">' +
      '<div class="container-site grid gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">' +
      each(items, function (i) {
        return '<div class="flex flex-col gap-2"><h3 class="text-lg font-semibold text-navy">' + tx(i.title) + '</h3><p class="text-[15px] text-muted">' + tx(i.text) + '</p></div>';
      }) + '</div></section>';
  }

  V.ui = {
    escape: escape, tx: tx, each: each, icon: icon, sectionHead: sectionHead, bulletList: bulletList,
    specTable: specTable, chips: chips, figure: figure, pageHero: pageHero,
    productCard: productCard, projectCard: projectCard, infoGrid: infoGrid, THEMES: THEMES
  };
})(window.VFFC = window.VFFC || {});
