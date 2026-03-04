/**
 * DOM injection: loads portfolio structure from partials (sidebar, about, resume, etc.),
 * assembles them into the main layout, then loads i18n and main script.
 * Fallback: if partials fail, loads full content.html.
 */
(function () {
  'use strict';
  var root = document.getElementById('root');
  if (!root) return;

  var base = './assets/html/';
  var partialsBase = base + 'partials/';
  var partials = [
    'svg-sprites.html',
    'sidebar.html',
    'navbar.html',
    'about.html',
    'resume.html',
    'portfolio.html',
    'blog.html',
    'contact.html'
  ];

  function loadScript(src, next) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = next || null;
    document.body.appendChild(s);
  }

  function runApp() {
    loadScript('./assets/js/constants.js', function () {
      loadScript('./assets/js/translations-data.js', function () {
        loadScript('./assets/js/i18n.js', function () {
          loadScript('./assets/js/script.js');
        });
      });
    });
  }

  function assembleAndInject(htmlParts) {
    var svg = htmlParts[0];
    var sidebar = htmlParts[1];
    var navbar = htmlParts[2];
    var about = htmlParts[3];
    var resume = htmlParts[4];
    var portfolio = htmlParts[5];
    var blog = htmlParts[6];
    var contact = htmlParts[7];
    var html = svg +
      '\n\n  <main>\n\n    ' + sidebar + '\n\n\n    <div class="main-content">\n\n      ' +
      navbar + '\n\n\n\n      ' + about + '\n\n      ' + resume + '\n\n      ' + portfolio +
      '\n\n      ' + blog + '\n\n      ' + contact + '\n\n    </div>\n\n  </main>';
    root.innerHTML = html;
    runApp();
  }

  function fallbackFullContent() {
    fetch(base + 'content.html')
      .then(function (r) { return r.text(); })
      .then(function (html) {
        root.innerHTML = html;
        runApp();
      })
      .catch(function () {
        root.innerHTML = '<p style="padding:2rem;text-align:center;">Failed to load content.</p>';
      });
  }

  var promises = partials.map(function (name) {
    return fetch(partialsBase + name).then(function (r) { return r.text(); });
  });

  Promise.all(promises)
    .then(assembleAndInject)
    .catch(fallbackFullContent);
})();
