const depth = window.location.pathname.split('/').length - 2;
const basePath = '../'.repeat(depth);
const headerPath = basePath + 'header.html';
const bootstrapPath = basePath + 'js/bootstrap.bundle.min.js';

fetch(headerPath)
  .then(res => res.text())
  .then(html => {
    document.getElementById('header-placeholder').innerHTML = html;

    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = basePath + 'js/bootstrap.bundle.min.js';
    document.body.appendChild(bootstrapScript);
  });