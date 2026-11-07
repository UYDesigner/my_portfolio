const base = 'inline-flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5';

const variants = {
  primary: 'rounded-lg bg-accent px-5 py-2.5 font-mono text-sm font-medium text-accent-ink',
  secondary: 'rounded-lg border border-line px-5 py-2.5 font-mono text-sm font-medium hover:border-fg/40',
  pill: 'rounded-full bg-fg px-6 py-2.5 text-[15px] font-semibold text-bg shadow-[0_0_28px_-8px_rgb(var(--fg)/0.6)]',
};

/** Renders an <a> by default; pass as="button" for real buttons. */
export default function Button({ as: Tag = 'a', variant = 'primary', className = '', children, ...props }) {
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
