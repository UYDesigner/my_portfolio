/** Smoothly scrolls to a section by id. Returns false if the section isn't on the page. */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  return true;
}
