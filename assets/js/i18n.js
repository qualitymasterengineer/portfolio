/**
 * i18n: aplica traducciones EN/ES según el idioma elegido.
 * Usa window.TRANSLATIONS (definido en translations-data.js), con secciones
 * (sidebar, about, resume, etc.). Se aplana a un objeto por idioma para data-i18n.
 */
'use strict';

var STORAGE_KEY = 'portfolio-lang';
var DEFAULT_LANG = 'en';

function flattenTranslations(nested) {
  var flat = {};
  if (!nested || typeof nested !== 'object') return flat;
  Object.keys(nested).forEach(function (section) {
    var sectionObj = nested[section];
    if (sectionObj && typeof sectionObj === 'object') {
      Object.keys(sectionObj).forEach(function (key) {
        flat[key] = sectionObj[key];
      });
    }
  });
  return flat;
}

var raw = window.TRANSLATIONS || { en: {}, es: {} };
var translations = {
  en: flattenTranslations(raw.en),
  es: flattenTranslations(raw.es)
};

function getLang() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
}

function setLang(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
}

function applyTranslations(lang) {
  var t = translations[lang] || translations[DEFAULT_LANG];
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-alt');
    if (t[key] !== undefined) el.setAttribute('alt', t[key]);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-title');
    if (t[key] !== undefined) el.setAttribute('title', t[key]);
  });
  document.dispatchEvent(new CustomEvent('i18n-applied'));
}

function initI18n() {
  var lang = getLang();
  setLang(lang);
  applyTranslations(lang);
  document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var l = this.getAttribute('data-lang-switch');
      if (translations[l]) {
        setLang(l);
        applyTranslations(l);
        document.querySelectorAll('[data-lang-switch]').forEach(function (b) {
          b.classList.toggle('active', b.getAttribute('data-lang-switch') === l);
        });
      }
    });
  });
  document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang-switch') === lang);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
