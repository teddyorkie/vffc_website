/**
 * App — mounts a page.
 * A page script calls VFFC.mountPage({ render, after, pager }):
 *   render()  → HTML string for <main id="app">
 *   after(el) → optional: attach event listeners after each render
 *   pager     → optional: { prev, next } links shown in the footer
 * The whole page re-renders when the language changes, keeping the scroll position.
 */
(function (V) {
  'use strict';

  function scrollToHash() {
    if (!location.hash) return;
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView();
  }

  V.mountPage = function (page) {
    var headerEl = document.getElementById('site-header');
    var mainEl = document.getElementById('app');
    var footerEl = document.getElementById('site-footer');
    var active = document.body.getAttribute('data-nav') || '';

    function render() {
      headerEl.innerHTML = V.layout.header(active);
      V.layout.bindHeader(headerEl);
      mainEl.innerHTML = page.render();
      if (page.after) page.after(mainEl);
      footerEl.innerHTML = V.layout.footer(page.pager);
      if (page.title) document.title = V.i18n.t(page.title) + ' — VFFC';
    }

    render();
    scrollToHash();

    document.addEventListener('vffc:lang', function () {
      var y = window.scrollY;
      render();
      window.scrollTo(0, y);
    });
  };
})(window.VFFC = window.VFFC || {});
