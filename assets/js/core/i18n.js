/**
 * i18n — language state shared by every page.
 * - Content objects are { en, vi }; plain strings are language-neutral.
 * - The chosen language is remembered in localStorage and survives page changes.
 * - Changing language fires a "vffc:lang" event; the app re-renders on it.
 */
(function (V) {
  'use strict';

  var STORAGE_KEY = 'vffc-lang';
  var LANGS = ['en', 'vi'];

  function initialLang() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) { /* storage unavailable: fall through */ }
    var browser = (navigator.language || '').toLowerCase();
    return browser.indexOf('vi') === 0 ? 'vi' : 'en';
  }

  var lang = initialLang();
  document.documentElement.lang = lang;

  V.i18n = {
    LANGS: LANGS,

    get lang() { return lang; },

    set: function (next) {
      if (LANGS.indexOf(next) === -1 || next === lang) return;
      lang = next;
      try { window.localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
      document.documentElement.lang = next;
      document.dispatchEvent(new CustomEvent('vffc:lang', { detail: next }));
    },

    /** Resolve a bilingual value to a plain string in the current language. */
    t: function (value) {
      if (value === null || value === undefined) return '';
      if (typeof value === 'object' && !Array.isArray(value)) {
        return value[lang] !== undefined ? value[lang] : (value.en !== undefined ? value.en : '');
      }
      return String(value);
    }
  };
})(window.VFFC = window.VFFC || {});
