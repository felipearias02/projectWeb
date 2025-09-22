const depth = window.location.pathname.split('/').length - 2;
const basePath = '../'.repeat(depth);
const headerPath = basePath + 'header.html';

fetch(headerPath)
  .then(res => res.text())
  .then(html => {
    document.getElementById('header-placeholder').innerHTML = html;
  });