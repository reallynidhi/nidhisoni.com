// Toggles light/dark and remembers the choice. The pre-paint snippet in each
// page's <head> applies the saved theme before render, so there's no flash.
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.theme-toggle');
  if (!btn) return;
  var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (err) {}
});
