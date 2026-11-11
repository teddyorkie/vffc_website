/**
 * About page — who we are, our story, our differences, how we work, what we do, leadership.
 * Content: assets/js/data/about.js
 * Team photos: set "photo" on a member (e.g. assets/img/team/rosalie-hoang.jpg, square portrait); initials show until then.
 */
(function (V) {
  'use strict';

  var ui = V.ui;
  var d = V.about;
  var tx = ui.tx;
  var each = ui.each;

  /** Two-column block: heading on the left, content on the right. */
  function split(id, title, content, tone) {
    var bg = tone === 'white' ? 'border-y border-sand bg-white' : '';
    return '<section id="' + id + '" aria-labelledby="' + id + '-title" class="scroll-mt-24 ' + bg + '">' +
      '<div class="container-site grid gap-8 py-16 sm:py-20 lg:grid-cols-3 lg:gap-10">' +
      '<h2 id="' + id + '-title" class="h2">' + tx(title) + '</h2>' +
      '<div class="flex max-w-prose flex-col gap-5 lg:col-span-2">' + content + '</div>' +
      '</div></section>';
  }

  function hero() {
    var h = d.hero;
    return '<section class="bg-navy text-paper">' +
      '<div class="container-site flex flex-col gap-10 py-16 sm:py-24">' +
      '<div class="flex max-w-4xl flex-col gap-5">' +
      '<p class="eyebrow text-gold">' + tx(h.eyebrow) + '</p>' +
      '<h1 class="h1">' + tx(h.title) + '</h1>' +
      '<p class="text-lg text-fog">' + tx(h.lead) + '</p></div>' +
      '<ol class="grid gap-0.5 bg-navy-600 md:grid-cols-3">' + each(h.origins, function (o) {
        return '<li class="flex flex-col gap-1.5 bg-navy-700 p-6">' +
          '<span class="font-display text-2xl font-extrabold text-gold">' + tx(o.place) + '</span>' +
          '<strong class="text-lg">' + tx(o.field) + '</strong>' +
          '<span class="text-sm text-mist">' + tx(o.detail) + '</span></li>';
      }) + '</ol>' +
      '<nav aria-label="' + tx(h.sectionsLabel) + '" class="flex flex-wrap gap-2">' + each(d.sections, function (s) {
        return '<a href="#' + ui.escape(s.id) + '" class="border border-navy-500 px-3.5 py-2 text-sm text-paper no-underline hover:bg-white/10 hover:text-paper">' + tx(s.label) + '</a>';
      }) + '</nav>' +
      '</div></section>';
  }

  function who() {
    var w = d.who;
    var paras = each(w.paragraphs, function (p, i) {
      return '<p class="' + (i === 0 ? 'text-xl leading-relaxed text-ink' : 'text-lg') + '">' + tx(p) + '</p>';
    });
    return split('who-we-are', w.title, paras);
  }

  function story() {
    var s = d.story;
    return split('our-story', s.title, each(s.paragraphs, function (p) { return '<p class="text-lg">' + tx(p) + '</p>'; }), 'white');
  }

  function differences() {
    var df = d.differences;
    return '<section id="our-differences" aria-labelledby="our-differences-title" class="scroll-mt-24">' +
      '<div class="container-site flex flex-col gap-10 py-16 sm:py-20">' +
      '<h2 id="our-differences-title" class="h2">' + tx(df.title) + '</h2>' +
      '<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">' + each(df.items, function (it, i) {
        return '<div class="flex flex-col gap-2.5 border-t-2 border-navy pt-5">' +
          '<span class="font-display text-sm font-bold tracking-widest text-gold-700">0' + (i + 1) + '</span>' +
          '<h3 class="font-display text-xl font-extrabold leading-snug text-navy">' + tx(it.title) + '</h3>' +
          '<p class="text-muted">' + tx(it.text) + '</p></div>';
      }) + '</div></div></section>';
  }

  function process() {
    var pr = d.process;
    return '<section id="how-we-work" aria-labelledby="how-we-work-title" class="scroll-mt-24 bg-navy text-paper">' +
      '<div class="container-site flex flex-col gap-8 py-16 sm:py-20">' +
      ui.sectionHead({ id: 'how-we-work-title', title: pr.title, lead: pr.lead, tone: 'dark' }) +
      '<ol class="grid gap-0.5 bg-navy-500 sm:grid-cols-2 lg:grid-cols-5">' + each(pr.steps, function (st, i) {
        return '<li class="flex flex-col gap-1.5 bg-navy-700 p-5"><span class="font-display text-2xl font-extrabold text-gold">0' + (i + 1) + '</span>' +
          '<strong>' + tx(st.title) + '</strong><span class="text-left text-sm text-mist">' + tx(st.text) + '</span></li>';
      }) + '</ol></div></section>';
  }

  function area(ar) {
    var body = ar.services
      ? '<ul class="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">' + each(ar.services, function (sv) {
          return '<li class="flex gap-3 text-left"><span class="font-display text-sm font-bold tracking-widest text-gold-700">' + ui.escape(sv.code) + '</span>' +
            '<span class="text-[15px]">' + tx(sv.label) + '</span></li>';
        }) + '</ul>'
      : '<p class="text-[15px] text-muted">' + tx(ar.text) + '</p>';
    return '<a href="' + ui.escape(ar.href) + '" class="card group flex flex-col gap-3 p-6 text-ink no-underline hover:border-navy' + (ar.services ? ' md:col-span-3' : '') + '">' +
      '<h3 class="font-display text-xl font-extrabold text-navy group-hover:underline">' + tx(ar.title) + '</h3>' + body + '</a>';
  }

  function whatWeDo() {
    var w = d.whatWeDo;
    return '<section id="what-we-do" aria-labelledby="what-we-do-title" class="scroll-mt-24">' +
      '<div class="container-site flex flex-col gap-8 py-16 sm:py-20">' +
      '<h2 id="what-we-do-title" class="h2">' + tx(w.title) + '</h2>' +
      '<div class="grid gap-5 md:grid-cols-3">' + each(w.areas, area) + '</div>' +
      '</div></section>';
  }

  function member(m) {
    var avatar = m.photo
      ? '<img src="' + ui.escape(m.photo) + '" alt="' + tx(m.name) + '" loading="lazy" class="h-20 w-20 shrink-0 rounded-full object-cover object-top">'
      : '<span class="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-navy font-display text-2xl font-extrabold text-gold" aria-hidden="true">' + ui.escape(m.initials) + '</span>';
    return '<article class="card flex flex-col gap-5 p-6 sm:p-7">' +
      '<div class="flex items-center gap-4">' + avatar +
      '<div class="flex flex-col gap-1"><h3 class="font-display text-xl font-extrabold text-navy">' + tx(m.name) + '</h3>' +
      '<p class="text-left text-sm font-semibold text-gold-700">' + tx(m.role) + '</p></div></div>' +
      '<div class="flex flex-col gap-3 border-t border-sand pt-5 text-[15px]">' +
      each(m.bio, function (p) { return '<p>' + tx(p) + '</p>'; }) +
      '</div></article>';
  }

  function leadership() {
    var t = d.team;
    return '<section id="leadership" aria-labelledby="leadership-title" class="scroll-mt-24 border-t border-sand bg-white">' +
      '<div class="container-site flex flex-col gap-10 py-16 sm:py-20">' +
      ui.sectionHead({ id: 'leadership-title', title: t.title, lead: t.lead }) +
      '<div class="grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">' + each(t.members, member) + '</div>' +
      '</div></section>';
  }

  function cta() {
    var c = d.cta;
    return '<section class="bg-navy text-paper"><div class="container-site flex flex-col items-start gap-5 py-14 md:flex-row md:items-center md:justify-between">' +
      '<div class="flex flex-col gap-2"><h2 class="font-display text-2xl font-extrabold sm:text-3xl">' + tx(c.title) + '</h2>' +
      '<p class="text-left text-fog">' + tx(c.text) + '</p></div>' +
      '<a href="index.html#contact" class="btn-gold">' + tx(c.button) + '</a></div></section>';
  }

  V.mountPage({
    title: d.hero.eyebrow,
    render: function () {
      return hero() + who() + story() + differences() + process() + whatWeDo() + leadership() + cta();
    },
    pager: { next: { href: 'index.html#consulting', label: { en: 'Our services →', vi: 'Dịch vụ của chúng tôi →' } } }
  });
})(window.VFFC);
