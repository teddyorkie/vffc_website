/**
 * Layout — header (desktop nav, mobile menu, language switch) and footer.
 * Rendered once per page into #site-header / #site-footer and refreshed on language change.
 * The active nav item comes from <body data-nav="...">.
 */
(function (V) {
  'use strict';

  var ui = V.ui;
  var MENU_ICON = 'M4 6h16 M4 12h16 M4 18h16';
  var CLOSE_ICON = 'M6 6l12 12 M18 6L6 18';

  function logo() {
    var b = V.site.brand;
    return '<a href="index.html" class="flex items-center gap-3 text-paper no-underline">' +
      '<span class="inline-flex h-11 w-11 shrink-0 items-center justify-center border-2 border-gold font-display text-sm font-extrabold tracking-wider">VF</span>' +
      '<span class="flex flex-col leading-tight"><span class="font-display text-xl font-extrabold tracking-[0.15em]">' + ui.escape(b.name) + '</span>' +
      '<span class="hidden text-xs text-mist sm:block">' + ui.escape(b.full) + '</span></span></a>';
  }

  function navLinks(active, mobile) {
    return ui.each(V.site.nav, function (item) {
      var on = item.id === active;
      var cls = mobile
        ? 'block border-b border-navy-600 py-3 text-base no-underline ' + (on ? 'text-gold' : 'text-paper')
        : 'py-2.5 text-[15px] font-medium no-underline hover:text-gold ' + (on ? 'text-gold underline decoration-2 underline-offset-8' : 'text-paper');
      return '<a href="' + ui.escape(item.href) + '" class="' + cls + '"' + (on ? ' aria-current="page"' : '') + '>' + ui.tx(item.label) + '</a>';
    });
  }

  function langSwitch() {
    return '<div role="group" aria-label="' + ui.tx(V.site.ui.language) + '" class="flex border border-navy-500">' +
      ui.each(V.i18n.LANGS, function (code) {
        var on = code === V.i18n.lang;
        return '<button type="button" data-lang="' + code + '" aria-pressed="' + on + '" class="min-h-[44px] min-w-[48px] px-2.5 text-[13px] font-semibold uppercase ' +
          (on ? 'bg-gold text-navy' : 'text-paper hover:bg-navy-700') + '">' + code + '</button>';
      }) + '</div>';
  }

  function header(active) {
    var s = V.site.ui;
    return '<div class="container-site flex items-center justify-between gap-4 py-3.5">' +
      logo() +
      '<div class="flex items-center gap-3 xl:gap-6">' +
      '<nav aria-label="' + ui.tx(s.mainNav) + '" class="hidden items-center gap-6 whitespace-nowrap xl:flex">' + navLinks(active, false) + '</nav>' +
      '<a href="index.html#contact" class="btn-gold hidden whitespace-nowrap text-sm md:inline-flex">' + ui.tx(s.contactUs) + '</a>' +
      langSwitch() +
      '<button type="button" id="menu-toggle" aria-expanded="false" aria-controls="mobile-menu" class="inline-flex h-11 w-11 items-center justify-center border border-navy-500 text-paper xl:hidden">' +
      '<span class="sr-only">' + ui.tx(s.menu) + '</span>' + ui.icon(MENU_ICON) + '</button>' +
      '</div></div>' +
      '<div id="mobile-menu" hidden class="border-t border-navy-600 xl:hidden">' +
      '<nav aria-label="' + ui.tx(s.mainNav) + '" class="container-site flex flex-col pb-5">' + navLinks(active, true) +
      '<a href="index.html#contact" class="btn-gold mt-4 self-start">' + ui.tx(s.contactUs) + '</a></nav></div>';
  }

  function footer(pager) {
    var c = V.site.contact;
    var b = V.site.brand;
    return '<div class="container-site flex flex-col gap-6 py-10 text-sm text-mist md:flex-row md:items-start md:justify-between">' +
      '<div class="flex flex-col gap-2">' +
      '<span class="font-display text-lg font-extrabold tracking-[0.15em] text-paper">' + ui.escape(b.name) + '</span>' +
      '<span>' + ui.escape(b.legalName || b.full) + '</span>' +
      '<span>' + ui.tx(c.addressShort) + '</span>' +
      '<span><a class="link-gold" href="' + ui.escape(c.phoneHref) + '">' + ui.escape(c.phone) + '</a> · ' +
      '<a class="link-gold" href="mailto:' + ui.escape(c.email) + '">' + ui.escape(c.email) + '</a></span>' +
      '</div>' +
      (pager ? '<nav class="flex flex-wrap gap-5">' +
        (pager.prev ? '<a class="link-gold" href="' + ui.escape(pager.prev.href) + '">' + ui.tx(pager.prev.label) + '</a>' : '') +
        (pager.next ? '<a class="link-gold" href="' + ui.escape(pager.next.href) + '">' + ui.tx(pager.next.label) + '</a>' : '') +
        '</nav>' : '') +
      '</div>' +
      '<div class="border-t border-navy-600"><p class="container-site py-5 text-xs text-mist">© ' + new Date().getFullYear() + ' ' +
      ui.escape(b.name) + ' — ' + ui.escape(b.full) + ' · ' + ui.escape(b.domain) + '</p></div>';
  }

  /** Wire header controls after each render. */
  function bindHeader(root) {
    root.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () { V.i18n.set(btn.getAttribute('data-lang')); });
    });
    var toggle = root.querySelector('#menu-toggle');
    var menu = root.querySelector('#mobile-menu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', function () {
      var open = menu.hasAttribute('hidden');
      if (open) menu.removeAttribute('hidden'); else menu.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.innerHTML = '<span class="sr-only">' + ui.tx(open ? V.site.ui.closeMenu : V.site.ui.menu) + '</span>' + ui.icon(open ? CLOSE_ICON : MENU_ICON);
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.setAttribute('hidden', ''); toggle.setAttribute('aria-expanded', 'false'); });
    });
  }

  V.layout = { header: header, footer: footer, bindHeader: bindHeader };
})(window.VFFC = window.VFFC || {});
