/**
 * Product catalogue page — one script for every catalogue.
 * Which catalogue to show comes from <body data-catalogue="processed|frozen">.
 * To add a catalogue: create assets/js/data/catalogue-<id>.js and an HTML shell
 * with data-catalogue="<id>". No new rendering code is needed.
 */
(function (V) {
  'use strict';

  var ui = V.ui;
  var id = document.body.getAttribute('data-catalogue');
  var cat = V.catalogues && V.catalogues[id];
  if (!cat) {
    document.getElementById('app').textContent = 'Catalogue "' + id + '" not found. Check the data-catalogue attribute and the data script.';
    return;
  }

  function group(g) {
    return '<section id="' + ui.escape(g.id) + '" aria-labelledby="' + ui.escape(g.id) + '-title" class="container-site flex scroll-mt-24 flex-col gap-6 pt-14">' +
      '<div class="flex flex-col gap-1.5 border-b-2 border-navy pb-3">' +
      '<h2 id="' + ui.escape(g.id) + '-title" class="font-display text-2xl font-extrabold text-navy sm:text-3xl">' + ui.tx(g.title) + '</h2>' +
      '<p class="text-muted">' + ui.tx(g.subtitle) + '</p></div>' +
      '<div class="grid gap-7 lg:grid-cols-2">' +
      ui.each(g.items, function (p) { return ui.productCard(p, { theme: cat.theme }); }) +
      '</div></section>';
  }

  V.mountPage({
    title: cat.title,
    render: function () {
      var links = cat.groups.map(function (g) { return { id: g.id, label: g.title }; });
      return ui.pageHero({ theme: cat.theme, eyebrow: cat.eyebrow, title: cat.title, lead: cat.lead, jumpLinks: links, jumpLabel: cat.title }) +
        ui.each(cat.groups, group) +
        '<div class="h-14"></div>' +
        ui.infoGrid(cat.info);
    },
    pager: { prev: cat.prev, next: cat.next }
  });
})(window.VFFC);
