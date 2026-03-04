/**
 * Constantes del portafolio (contacto, mapa, redes sociales).
 * Se aplican a: data-contact="email"|"phone", iframe data-contact="map", enlaces data-contact="social-facebook"|"social-youtube"|"social-instagram".
 */
(function () {
  'use strict';

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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyConstants);
  } else {
    applyConstants();
  }
})();
