import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

// index.html applies the saved theme before first paint; read it back from the DOM.
const readInitial = () =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light';

export function useTheme() {
  const [theme, setTheme] = useState(readInitial);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
  }, [theme]);

  const toggle = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable: theme still works for this session */
    }
  }, [theme]);

  return { theme, toggle };
}
