/**
 * Investment projects page (A4) — market context, filterable project list, investor brief.
 * Content: assets/js/data/projects.js
 */
(function (V) {
  'use strict';

  var ui = V.ui;
  var d = V.projects;
  var p = d.page;
  var tx = ui.tx;
  var each = ui.each;
  var filter = 'all';

  function typeLabel(id) {
    for (var i = 0; i < d.types.length; i++) if (d.types[i].id === id) return d.types[i].label;
    return '';
  }

  function heroExtra() {
    return '<div class="mt-4 grid gap-0.5 bg-navy-500 sm:grid-cols-3">' + each(p.pillars, function (x) {
      return '<div class="flex flex-col gap-1.5 bg-navy p-5"><strong class="text-gold">' + tx(x.h) + '</strong><span class="text-sm text-mist">' + tx(x.s) + '</span></div>';
    }) + '</div>';
  }

  function context() {
    return '<section aria-labelledby="ctx-title" class="container-site flex flex-col gap-6 pb-4 pt-14">' +
      '<h2 id="ctx-title" class="font-display text-2xl font-extrabold text-navy sm:text-3xl">' + tx(p.contextTitle) + '</h2>' +
      '<div class="grid gap-5 md:grid-cols-3">' + each(p.context, function (c) {
        return '<div class="card flex flex-col gap-2.5 border-t-[3px] border-t-gold p-6"><p>' + tx(c.p) + '</p>' +
          '<span class="text-sm text-muted">' + tx(p.sourceLabel) + ' ' + tx(c.src) + '</span></div>';
      }) + '</div></section>';
  }

  function filters() {
    return '<div role="group" aria-label="' + tx(p.filterLabel) + '" class="flex flex-wrap gap-2">' + each(d.types, function (t) {
      var on = t.id === filter;
      return '<button type="button" data-filter="' + ui.escape(t.id) + '" aria-pressed="' + on + '" class="min-h-[44px] border border-navy px-4 text-sm font-semibold ' +
        (on ? 'bg-navy text-paper' : 'bg-white text-navy hover:bg-sea-100') + '">' + tx(t.label) + '</button>';
    }) + '</div>';
  }

  function list() {
    var items = d.items.filter(function (it) { return filter === 'all' || it.type === filter; });
    return each(items, function (it) {
      return ui.projectCard(it, { typeLabel: typeLabel(it.type), photoNote: p.photoNote, cta: p.cardCta });
    });
  }

  function projects() {
    return '<section id="projects" aria-labelledby="pj-title" class="container-site flex flex-col gap-6 pb-16 pt-10">' +
      '<div class="flex flex-wrap items-end justify-between gap-4">' +
      '<h2 id="pj-title" class="font-display text-2xl font-extrabold text-navy sm:text-3xl">' + tx(p.listTitle) + '</h2>' +
      '<div id="project-filters">' + filters() + '</div></div>' +
      '<div id="project-list" class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">' + list() + '</div>' +
      '<p class="text-sm text-muted">' + tx(p.disclaimer) + '</p></section>';
  }

  function offMarket() {
    var o = p.offMarket;
    return '<section class="border-t border-sand bg-white"><div class="container-site grid items-center gap-10 py-16 lg:grid-cols-2">' +
      '<div class="flex flex-col gap-4"><p class="eyebrow text-gold-700">' + tx(o.eyebrow) + '</p>' +
      '<h2 class="font-display text-2xl font-extrabold text-navy sm:text-3xl">' + tx(o.title) + '</h2>' +
      '<p class="text-muted">' + tx(o.text) + '</p>' +
      '<a href="index.html#contact" class="btn-navy self-start">' + tx(o.cta) + '</a></div>' +
      '<div class="flex flex-col gap-3 border border-sand bg-paper p-7"><h3 class="text-lg font-semibold text-navy">' + tx(o.briefTitle) + '</h3>' +
      ui.bulletList(o.brief, 'text-[15px]') + '</div></div></section>';
  }

  function bindFilters(root) {
    root.querySelectorAll('[data-filter]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        filter = btn.getAttribute('data-filter');
        root.querySelector('#project-filters').innerHTML = filters();
        root.querySelector('#project-list').innerHTML = list();
        bindFilters(root);
      });
    });
  }

  V.mountPage({
    title: p.title,
    render: function () {
      return ui.pageHero({ theme: 'navy', eyebrow: p.eyebrow, title: p.title, lead: p.lead, after: heroExtra() }) +
        context() + projects() + offMarket();
    },
    after: bindFilters,
    pager: { next: { href: 'processed-foods.html', label: p.next } }
  });
})(window.VFFC);
