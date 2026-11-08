/**
 * Home page — hero, why VFFC, consulting (A1–A4), trade overview, contact.
 * Content: assets/js/data/home.js
 */
(function (V) {
  'use strict';

  var ui = V.ui;
  var d = V.home;
  var tx = ui.tx;
  var each = ui.each;

  function hero() {
    var h = d.hero;
    var tiles = d.consulting.services.concat([d.consulting.brokerage]);
    return '<section class="border-t border-navy-600 bg-navy text-paper">' +
      '<div class="container-site grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:gap-14">' +
      '<div class="flex flex-col gap-6">' +
      '<p class="eyebrow text-gold">' + tx(h.eyebrow) + '</p>' +
      '<h1 class="h1"><span class="block">' + tx(h.titleLine1) + '</span><span class="block">' + tx(h.titleLine2) + '</span></h1>' +
      '<p class="max-w-xl text-lg text-fog">' + tx(h.lead) + '</p>' +
      '<div class="flex flex-wrap gap-3 pt-2">' +
      '<a href="#consulting" class="btn-gold">' + tx(h.ctaPrimary) + '</a>' +
      '<a href="#trade" class="btn-outline-light">' + tx(h.ctaSecondary) + '</a>' +
      '</div></div>' +
      '<div class="grid gap-0.5 bg-navy-600 sm:grid-cols-2">' +
      each(tiles, function (s) {
        return '<div class="flex flex-col gap-2 bg-navy-700 p-6"><span class="font-display text-sm tracking-widest text-gold">' + ui.escape(s.code) + '</span>' +
          '<span class="text-[17px] font-semibold">' + tx(s.title) + '</span></div>';
      }) +
      '<div class="flex flex-wrap items-center justify-between gap-3 bg-paper p-6 text-navy sm:col-span-2">' +
      '<span class="flex flex-col"><span class="font-display text-sm tracking-widest text-gold-700">' + tx(h.tradeTile.label) + '</span>' +
      '<span class="text-[17px] font-semibold">' + tx(h.tradeTile.text) + '</span></span>' +
      '<a href="#trade" class="font-semibold">' + tx(h.tradeTile.link) + '</a></div>' +
      '</div></div></section>';
  }

  function why() {
    var w = d.why;
    return '<section aria-labelledby="why-title" class="container-site py-16 sm:py-24">' +
      '<div class="grid gap-12 lg:grid-cols-3">' +
      '<div class="flex flex-col gap-4"><p class="eyebrow text-gold-700">' + tx(w.eyebrow) + '</p>' +
      '<h2 id="why-title" class="h2">' + tx(w.title) + '</h2></div>' +
      '<div class="grid gap-8 sm:grid-cols-2 lg:col-span-2">' +
      each(w.items, function (i) {
        return '<div class="flex flex-col gap-2.5 border-t-2 border-navy pt-5"><h3 class="text-lg font-semibold text-navy">' + tx(i.h) + '</h3>' +
          '<p class="text-muted">' + tx(i.p) + '</p></div>';
      }) + '</div></div></section>';
  }

  function serviceBlock(s, labels) {
    return '<article class="grid gap-10 border border-sand bg-paper p-6 sm:p-10 lg:grid-cols-3">' +
      '<div class="flex flex-col gap-4">' +
      '<span class="text-navy">' + ui.icon(s.icon, 'h-14 w-14') + '</span>' +
      '<span class="font-display text-sm font-bold tracking-widest text-gold-700">' + ui.escape(s.code) + '</span>' +
      '<h3 class="font-display text-2xl font-extrabold leading-tight text-navy sm:text-[1.7rem]">' + tx(s.title) + '</h3>' +
      '<p class="text-muted">' + tx(s.intro) + '</p>' +
      '<p class="text-sm"><strong>' + tx(labels.ideal) + '</strong> ' + tx(s.ideal) + '</p></div>' +
      '<div class="flex flex-col gap-3.5"><h4 class="subhead text-navy">' + tx(labels.scope) + '</h4>' + ui.bulletList(s.scope) + '</div>' +
      '<div class="flex flex-col gap-3.5"><h4 class="subhead text-navy">' + tx(labels.deliverables) + '</h4>' + ui.bulletList(s.deliverables) + '</div>' +
      '</article>';
  }

  function brokerageBlock(b) {
    return '<article class="flex flex-col gap-10 bg-navy p-6 text-paper sm:p-10">' +
      '<div class="grid gap-10 lg:grid-cols-3">' +
      '<div class="flex flex-col gap-4">' +
      '<span class="text-gold">' + ui.icon(b.icon, 'h-14 w-14') + '</span>' +
      '<span class="font-display text-sm font-bold tracking-widest text-gold">' + ui.escape(b.code) + '</span>' +
      '<h3 class="font-display text-2xl font-extrabold leading-tight sm:text-[1.7rem]">' + tx(b.title) + '</h3>' +
      '<p class="text-fog">' + tx(b.intro) + '</p>' +
      '<a href="' + ui.escape(b.ctaHref) + '" class="btn-gold self-start">' + tx(b.cta) + '</a></div>' +
      '<div class="flex flex-col gap-3.5"><h4 class="subhead text-gold">' + tx(b.componentsLabel) + '</h4>' +
      '<div class="grid grid-cols-1 gap-2.5 sm:grid-cols-2">' +
      each(b.components, function (c) {
        return '<div class="border border-navy-500 p-3.5' + (c.wide ? ' sm:col-span-2' : '') + '"><strong class="block">' + tx(c.title) + '</strong>' +
          '<span class="text-sm text-mist">' + tx(c.text) + '</span></div>';
      }) + '</div></div>' +
      '<div class="flex flex-col gap-3.5"><h4 class="subhead text-gold">' + tx(b.structuresLabel) + '</h4>' + ui.bulletList(b.structures) + '</div>' +
      '</div>' +
      '<div class="flex flex-col gap-4"><h4 class="subhead text-gold">' + tx(b.processLabel) + '</h4>' +
      '<ol class="grid gap-0.5 bg-navy-500 sm:grid-cols-2 lg:grid-cols-5">' +
      each(b.steps, function (st, i) {
        return '<li class="flex flex-col gap-1.5 bg-navy-700 p-5"><span class="font-display text-2xl font-extrabold text-gold">0' + (i + 1) + '</span>' +
          '<strong>' + tx(st.title) + '</strong><span class="text-sm text-mist">' + tx(st.text) + '</span></li>';
      }) + '</ol></div></article>';
  }

  function consulting() {
    var c = d.consulting;
    return '<section id="consulting" aria-labelledby="consulting-title" class="scroll-mt-20 border-y border-sand bg-white">' +
      '<div class="container-site flex flex-col gap-12 py-16 sm:py-24">' +
      ui.sectionHead({ id: 'consulting-title', eyebrow: c.eyebrow, title: c.title, lead: c.lead }) +
      each(c.services, function (s) { return serviceBlock(s, c.labels); }) +
      brokerageBlock(c.brokerage) +
      '</div></section>';
  }

  function infoCard(title, body) {
    return '<div class="card flex flex-col gap-3.5 p-7"><h3 class="text-lg font-semibold text-navy">' + tx(title) + '</h3>' + body + '</div>';
  }

  function trade() {
    var t = d.trade;
    return '<section id="trade" aria-labelledby="trade-title" class="container-site flex scroll-mt-20 flex-col gap-12 py-16 sm:py-24">' +
      '<div class="grid items-end gap-8 lg:grid-cols-2">' +
      '<div class="flex flex-col gap-3"><p class="eyebrow text-leaf">' + tx(t.eyebrow) + '</p><h2 id="trade-title" class="h2">' + tx(t.title) + '</h2></div>' +
      '<p class="text-lg text-muted">' + tx(t.lead) + '</p></div>' +
      '<div class="grid gap-6 md:grid-cols-2">' +
      each(t.categories, function (cat) {
        return '<a href="' + ui.escape(cat.href) + '" class="card group flex flex-col text-ink no-underline">' +
          ui.figure(cat.image, cat.title, V.site.ui.photoNote) +
          '<div class="flex flex-col gap-2 p-6"><h3 class="font-display text-xl font-extrabold text-navy">' + tx(cat.title) + '</h3>' +
          '<p class="text-muted">' + tx(cat.text) + '</p><span class="font-semibold text-leaf group-hover:underline">' + tx(cat.link) + '</span></div></a>';
      }) + '</div>' +
      '<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">' +
      infoCard(t.markets.title, '<div class="flex flex-col gap-2.5 text-[15px]">' + each(t.markets.items, function (m) {
        return '<div><strong class="block">' + tx(m.h) + '</strong><span class="text-muted">' + tx(m.p) + '</span></div>';
      }) + '</div>') +
      infoCard(t.services.title, ui.bulletList(t.services.items, 'text-[15px]')) +
      infoCard(t.terms.title, ui.bulletList(t.terms.items, 'text-[15px]')) +
      '</div></section>';
  }

  function field(label, input) {
    return '<label class="flex flex-col gap-1.5 text-sm font-medium">' + tx(label) + input + '</label>';
  }

  function contact() {
    var c = d.contact;
    var f = c.form;
    var person = '<div class="flex items-center gap-5 bg-paper p-6 text-navy">' +
      '<span class="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy font-display text-xl font-extrabold text-gold">VF</span>' +
      '<span class="flex flex-col gap-0.5"><span class="eyebrow text-gold-700">' + tx(c.person.label) + '</span>' +
      '<span class="font-display text-2xl font-extrabold">' + tx(c.person.name) + '</span>' +
      '<span class="text-sm text-muted">' + tx(c.person.role) + '</span></span></div>';
    var channels = each(c.channels, function (ch) {
      var external = /^https?:/.test(ch.href);
      return '<a href="' + ui.escape(ch.href) + '"' + (external ? ' target="_blank" rel="noopener"' : '') +
        ' class="flex items-center gap-4 bg-navy-700 px-6 py-5 text-paper no-underline hover:bg-navy-600">' +
        '<span class="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-gold text-gold">' + ui.icon(ch.icon, 'h-5 w-5') + '</span>' +
        '<span class="flex min-w-0 flex-1 flex-col"><span class="text-xs font-semibold uppercase tracking-wide text-mist">' + tx(ch.label) + '</span>' +
        '<span class="break-words text-[17px] font-semibold">' + tx(ch.value) + '</span></span>' +
        '<span class="hidden whitespace-nowrap text-sm text-gold sm:inline">' + tx(ch.action) + '</span></a>';
    });
    var office = '<div class="flex items-start gap-4 bg-navy-700 px-6 py-5">' +
      '<span class="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-gold text-gold">' +
      ui.icon('M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z M9 10a3 3 0 1 0 6 0a3 3 0 1 0-6 0', 'h-5 w-5') + '</span>' +
      '<span class="flex flex-col gap-0.5"><span class="text-xs font-semibold uppercase tracking-wide text-mist">' + tx(c.officeLabel) + '</span>' +
      '<span class="font-semibold">' + tx(V.site.contact.address) + '</span><span class="text-sm text-mist">' + tx(V.site.contact.hours) + '</span></span></div>';

    var options = function (list) { return each(list, function (o) { return '<option>' + tx(o) + '</option>'; }); };
    var form = '<form id="contact-form" action="https://formspree.io/f/mjyydlao" method="POST" novalidate class="flex flex-col gap-4 bg-paper p-6 text-ink sm:p-8">' +
      '<h3 class="font-display text-2xl font-extrabold text-navy">' + tx(f.title) + '</h3>' +
      '<div class="grid gap-4 sm:grid-cols-2">' +
      field(f.name, '<input name="name" type="text" autocomplete="name" required class="input">') +
      field(f.company, '<input name="company" type="text" autocomplete="organization" class="input">') +
      field(f.email, '<input name="email" type="email" autocomplete="email" required class="input">') +
      field(f.phone, '<input name="phone" type="tel" autocomplete="tel" class="input">') +
      field(f.country, '<input name="country" type="text" autocomplete="country-name" class="input">') +
      field(f.channel, '<select name="channel" class="input">' + options(f.channelOptions) + '</select>') +
      '</div>' +
      field(f.interest, '<select name="interest" class="input">' + options(f.interestOptions) + '</select>') +
      field(f.message, '<textarea name="message" rows="4" class="input"></textarea>') +
      '<button type="submit" class="btn-navy self-start">' + tx(f.submit) + '</button>' +
      '<p id="form-status" role="status" class="hidden text-sm text-leaf"></p>' +
      '</form>';

    return '<section id="contact" aria-labelledby="contact-title" class="scroll-mt-20 bg-navy text-paper">' +
      '<div class="container-site flex flex-col gap-10 py-16 sm:py-24">' +
      ui.sectionHead({ id: 'contact-title', eyebrow: c.eyebrow, title: c.title, lead: c.lead, tone: 'dark' }) +
      '<div class="grid gap-8 lg:grid-cols-2">' +
      '<div class="flex flex-col gap-0.5 bg-navy-600">' + person + channels + office + '</div>' +
      form + '</div></div></section>';
  }

  /** Submit enquiry form to Formspree endpoint via AJAX while keeping current design. */
  function bindForm(root) {
    var form = root.querySelector('#contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var f = d.contact.form;
      var btn = form.querySelector('button[type="submit"]');
      var status = root.querySelector('#form-status');
      if (btn) {
        btn.disabled = true;
        btn.textContent = V.i18n.t(f.sending || f.submit);
      }
      status.classList.add('hidden');
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          status.textContent = V.i18n.t(f.sent);
          status.className = 'text-sm text-leaf';
        } else {
          status.textContent = V.i18n.t(f.error);
          status.className = 'text-sm text-brown';
        }
      }).catch(function () {
        status.textContent = V.i18n.t(f.error);
        status.className = 'text-sm text-brown';
      }).then(function () {
        if (btn) {
          btn.disabled = false;
          btn.textContent = V.i18n.t(f.submit);
        }
      });
    });
  }

  V.mountPage({
    render: function () { return hero() + why() + consulting() + trade() + contact(); },
    after: bindForm
  });
})(window.VFFC);
