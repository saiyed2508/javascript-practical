// Theme toggle + optional contact form message + year
const btn = document.getElementById('themeToggle');
const isLight = localStorage.getItem('theme') === 'light';
if (isLight) document.documentElement.classList.add('light');
if (btn) btn.textContent = isLight ? '☀' : '🌙';
btn && btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  const light = document.documentElement.classList.contains('light');
  localStorage.setItem('theme', light ? 'light' : 'dark');
  btn.textContent = light ? '☀' : '🌙';
});
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const msg = document.getElementById('formMsg');
    if (msg) msg.textContent = `Thanks ${data.name}! I'll reply to ${data.email} soon.`;
    e.target.reset();
  });
}
