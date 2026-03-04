/**
 * Splits assets/html/content.html into partials (sidebar, navbar, about, resume, etc.).
 * Run from project root: node scripts/split-content.js
 */
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const contentPath = path.join(projectRoot, 'assets/html/content.html');
const partialsDir = path.join(projectRoot, 'assets/html/partials');

const html = fs.readFileSync(contentPath, 'utf8');
const lines = html.split('\n');

function sliceLines(startOneBased, endOneBased) {
  return lines.slice(startOneBased - 1, endOneBased).join('\n').trim();
}

if (!fs.existsSync(partialsDir)) {
  fs.mkdirSync(partialsDir, { recursive: true });
}

const partials = [
  { name: 'svg-sprites.html', start: 1, end: 73 },
  { name: 'sidebar.html', start: 85, end: 203 },
  { name: 'navbar.html', start: 216, end: 242 },
  { name: 'about.html', start: 251, end: 595 },
  { name: 'resume.html', start: 605, end: 798 },
  { name: 'portfolio.html', start: 808, end: 1056 },
  { name: 'blog.html', start: 1066, end: 1248 },
  { name: 'contact.html', start: 1258, end: 1296 },
];

partials.forEach(function (p) {
  const content = sliceLines(p.start, p.end);
  fs.writeFileSync(path.join(partialsDir, p.name), content, 'utf8');
  console.log('Written', p.name);
});

console.log('Done. Partials in assets/html/partials/');
