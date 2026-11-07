import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/** Types `text` one character at a time. Shows full text instantly under reduced motion. */
export function useTypewriter(text, { speed = 45, delay = 500 } = {}) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? text.length : 0);

  useEffect(() => {
    if (reduce) {
      setCount(text.length);
      return undefined;
    }
    setCount(0);
    let i = 0;
    let interval;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, delay, reduce]);

  return { text: text.slice(0, count), done: count >= text.length };
}
