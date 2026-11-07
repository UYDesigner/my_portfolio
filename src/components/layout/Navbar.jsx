import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from '../ui/ThemeToggle';
import { moreNav, primaryNav } from '../../data/navigation';
import { useActiveSection } from '../../hooks/useActiveSection';

const sectionIds = [...primaryNav, ...moreNav].map((item) => item.id);
const mobileExtras = primaryNav.filter((item) => item.hideOnMobile);

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => !menuRef.current?.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const linkClass = (id) =>
    `relative rounded-md px-2 py-2 text-sm font-medium transition-colors sm:px-2.5 ${
      active === id ? 'text-fg' : 'text-muted hover:text-fg'
    }`;
  const menuItem = 'block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-fg';

  return (
    <header className="bleed-b fixed inset-x-0 top-0 z-50 bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-12 max-w-[800px] items-center justify-between border-x border-dashed border-line px-3 sm:px-4"
      >
        <Logo />

        <ul className="flex items-center gap-0.5 sm:gap-1">
          {primaryNav.map(({ id, label, hideOnMobile }) => (
            <li key={id} className={hideOnMobile ? 'hidden sm:block' : undefined}>
              <a href={`#${id}`} className={linkClass(id)} aria-current={active === id ? 'location' : undefined}>
                {label}
                {active === id && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                  />
                )}
              </a>
            </li>
          ))}

          <li ref={menuRef} className="relative">
            <button
              type="button"
              aria-expanded={open}
              aria-controls="more-menu"
              onClick={() => setOpen((v) => !v)}
              className={`${linkClass('')} inline-flex items-center gap-1`}
            >
              More
              <ChevronDown size={14} aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {open && (
                <motion.ul
                  id="more-menu"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-line bg-bg/95 p-1 shadow-lg backdrop-blur-md"
                >
                  {mobileExtras.map(({ id, label }) => (
                    <li key={id} className="sm:hidden">
                      <a href={`#${id}`} onClick={() => setOpen(false)} className={menuItem}>
                        {label}
                      </a>
                    </li>
                  ))}
                  {moreNav.map(({ id, label }) => (
                    <li key={id}>
                      <a href={`#${id}`} onClick={() => setOpen(false)} className={menuItem}>
                        {label}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className="ml-1">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
