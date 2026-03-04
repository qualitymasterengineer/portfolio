/**
 * DOM injection: loads portfolio structure from external file and injects it,
 * then loads i18n and main script. Keeps index.html minimal.
 */
(function () {
  'use strict';
  var root = document.getElementById('root');
  if (!root) return;

  fetch('./assets/html/content.html')
    .then(function (r) { return r.text(); })
    .then(function (html) {
      root.innerHTML = html;
      var base = document.getElementsByTagName('base')[0];
      var basePath = base ? base.getAttribute('href') || '' : '';
      function loadScript(src, next) {
        var s = document.createElement('script');
        s.src = basePath + src;
        s.onload = next || null;
        document.body.appendChild(s);
      }
      loadScript('./assets/js/i18n.js', function () {
        loadScript('./assets/js/script.js');
      });
    })
    .catch(function () {
      root.innerHTML = '<p style="padding:2rem;text-align:center;">Failed to load content.</p>';
    });
})();
