import { motion } from 'framer-motion';

/** A boxed section: full-bleed dashed rules above/below, serif title row, subtle reveal on scroll. */
export default function Section({ id, title, titleNote, action, children, className = '' }) {
  return (
    <motion.section
      id={id}
      aria-labelledby={`${id}-title`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`bleed-t bleed-b relative mt-5 ${className}`}
    >
      <header className="bleed-b relative flex min-h-[49px] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-2">
        <div className="flex items-baseline gap-3">
          <h2 id={`${id}-title`} className="font-display text-[32px] leading-none tracking-tight">
            {title}
          </h2>
          {titleNote && <span className="font-mono text-[10px] text-muted">{titleNote}</span>}
        </div>
        {action}
      </header>
      {children}
    </motion.section>
  );
}
