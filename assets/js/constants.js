/**
 * Constantes del portafolio (contacto, mapa, redes sociales, pestañas visibles).
 * PORTFOLIO_PAGES: pon a false las pestañas que no quieras mostrar.
 * Se aplican a: data-contact="email"|"phone", iframe data-contact="map", enlaces data-contact="social-*".
 */
(function () {
  'use strict';

  /**
   * Pestañas visibles en el menú y en el contenido.
   * Cambia a false la que quieras ocultar (ej: blog: false).
   */
  window.PORTFOLIO_PAGES = {
    about: true,
    aboutUs: true,
    resume: false,
    expertise: true,
    portfolio: true,
    blog: false,
    contact: true
  };

  window.PORTFOLIO_CONSTANTS = {
    contact: {
      email: 'masterqualityengineer@gmail.com',
      phone: '+58 4122654528',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62855.24216080122!2d-69.4040474710586!3d10.06194831424149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e87671d783e8671%3A0x972fe1e11519c3db!2sBarquisimeto%203001%2C%20Lara!5e0!3m2!1ses!2sve!4v1772549085679!5m2!1ses!2sve'
    },
    social: {
      facebook: 'https://facebook.com/dvezzoni',
      youtube: 'https://youtube.com',
      instagram: 'https://instagram.com/dvezzoni'
    }
  };

  function applyConstants() {
    var c = window.PORTFOLIO_CONSTANTS;
    if (!c) return;

    var emailEl = document.querySelector('a[data-contact="email"]');
    if (emailEl && c.contact && c.contact.email) {
      emailEl.href = 'mailto:' + c.contact.email;
      emailEl.textContent = c.contact.email;
    }

    var phoneEl = document.querySelector('a[data-contact="phone"]');
    if (phoneEl && c.contact && c.contact.phone) {
      phoneEl.href = 'tel:' + c.contact.phone.replace(/\s/g, '');
      phoneEl.textContent = c.contact.phone;
    }

    var mapEl = document.querySelector('iframe[data-contact="map"]');
    if (mapEl && c.contact && c.contact.mapEmbedUrl) {
      mapEl.src = c.contact.mapEmbedUrl;
    }

    if (c.social) {
      var socialFb = document.querySelector('a[data-contact="social-facebook"]');
      if (socialFb && c.social.facebook) socialFb.href = c.social.facebook;
      var socialYt = document.querySelector('a[data-contact="social-youtube"]');
      if (socialYt && c.social.youtube) socialYt.href = c.social.youtube;
      var socialIg = document.querySelector('a[data-contact="social-instagram"]');
      if (socialIg && c.social.instagram) socialIg.href = c.social.instagram;
    }
  }

  var HIDDEN_PAGE_CLASS = 'portfolio-page-hidden';

  function applyPagesConfig() {
    var pages = window.PORTFOLIO_PAGES;
    if (!pages || typeof pages !== 'object') return;

    var root = document.getElementById('root');
    if (!root) return;

    var main = root.querySelector('main');
    if (!main) return;

    var enabled = Object.keys(pages).filter(function (id) { return pages[id] === true; });
    if (enabled.length === 0) return;

    main.querySelectorAll('article[data-page]').forEach(function (article) {
      var page = article.getAttribute('data-page');
      if (pages[page] !== true) {
        article.classList.add(HIDDEN_PAGE_CLASS);
      } else {
        article.classList.remove(HIDDEN_PAGE_CLASS);
      }
    });

    main.querySelectorAll('[data-nav-link]').forEach(function (btn) {
      var page = btn.getAttribute('data-page');
      var li = btn.closest('.navbar-item');
      if (pages[page] !== true) {
        btn.classList.add(HIDDEN_PAGE_CLASS);
        if (li) li.classList.add(HIDDEN_PAGE_CLASS);
      } else {
        btn.classList.remove(HIDDEN_PAGE_CLASS);
        if (li) li.classList.remove(HIDDEN_PAGE_CLASS);
      }
    });

    var visibleArticles = main.querySelectorAll('article[data-page]:not(.' + HIDDEN_PAGE_CLASS + ')');
    var visibleNavLinks = main.querySelectorAll('[data-nav-link]:not(.' + HIDDEN_PAGE_CLASS + ')');
    main.querySelectorAll('article[data-page]').forEach(function (el) { el.classList.remove('active'); });
    main.querySelectorAll('[data-nav-link]').forEach(function (el) { el.classList.remove('active'); });
    if (visibleArticles.length) visibleArticles[0].classList.add('active');
    if (visibleNavLinks.length) visibleNavLinks[0].classList.add('active');
  }

  function populateToolsLists() {
    var base = './assets/tools-logo/';
    document.querySelectorAll('ul[data-tools-images]').forEach(function (ul) {
      var attr = ul.getAttribute('data-tools-images');
      if (!attr) return;
      var list = attr.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
      ul.innerHTML = list.map(function (filename) {
        var name = filename.replace(/\.[^.]+$/, '');
        return '<li class="clients-item"><img src="' + base + filename + '" alt="' + name + '" loading="lazy"></li>';
      }).join('');
    });
  }

  function run() {
    applyConstants();
    applyPagesConfig();
    populateToolsLists();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
