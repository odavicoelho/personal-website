// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
);
document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

// Mobile menu
const menu = document.getElementById('mobile-menu');
const toggle = document.getElementById('menu-toggle');
const setMenu = (open: boolean) => {
  if (!menu || !toggle) return;
  menu.dataset.open = String(open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', (open ? toggle.dataset.labelClose : toggle.dataset.labelOpen) ?? '');
  document.body.style.overflow = open ? 'hidden' : '';
};
toggle?.addEventListener('click', () => setMenu(menu?.dataset.open !== 'true'));
menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

// Navbar background + floating WhatsApp button after leaving the hero
const nav = document.getElementById('site-nav');
const fab = document.getElementById('whatsapp-fab');
const hero = document.getElementById('top');
if (hero) {
  new IntersectionObserver(
    ([entry]) => {
      const past = !entry.isIntersecting;
      nav?.classList.toggle('is-scrolled', window.scrollY > 10);
      fab?.classList.toggle('is-visible', past);
    },
    { threshold: 0.15 },
  ).observe(hero);
}
const onScroll = () => nav?.classList.toggle('is-scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Language switch between the two engineering pages keeps the current section
document.querySelectorAll<HTMLAnchorElement>('[data-lang-switch]').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.location.hash) link.href = link.pathname + window.location.hash;
  });
});

// Copy email
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const label = btn.querySelector('[data-copy-label]');
    try {
      await navigator.clipboard.writeText(btn.dataset.copy ?? '');
    } catch {
      return;
    }
    if (!label) return;
    const original = label.textContent;
    label.textContent = btn.dataset.copied ?? '';
    setTimeout(() => (label.textContent = original), 1800);
  });
});

// Active nav link
const navLinks = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]');
const sections = document.querySelectorAll<HTMLElement>('main section[id]');
const activeObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navLinks.forEach((l) => l.classList.toggle('is-active', l.hash === `#${entry.target.id}`));
    }
  },
  { rootMargin: '-45% 0px -50% 0px' },
);
sections.forEach((s) => activeObserver.observe(s));
