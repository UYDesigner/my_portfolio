// Theme colors are CSS variables (see src/index.css) so components never
// need to know which theme is active.
const color = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: color('--bg'),
        surface: color('--surface'),
        line: color('--line'),
        fg: color('--fg'),
        muted: color('--muted'),
        accent: color('--accent'),
        'accent-ink': color('--accent-ink'),
        cyan: color('--cyan'),
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 28px -6px rgb(var(--accent) / 0.55)',
        panel: '0 24px 60px -24px rgb(0 0 0 / 0.45)',
      },
      keyframes: {
        blink: { '0%, 49%': { opacity: '1' }, '50%, 100%': { opacity: '0' } },
      },
      animation: {
        blink: 'blink 1.1s steps(1) infinite',
      },
    },
  },
  plugins: [],
};
