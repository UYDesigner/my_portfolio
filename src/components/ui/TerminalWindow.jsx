/** Terminal-style window chrome. Dots are decorative only. */
export default function TerminalWindow({ title, children, className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-surface/90 shadow-panel backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
        </span>
        <span className="ml-2 truncate font-mono text-xs text-muted">{title}</span>
      </div>
      {children}
    </div>
  );
}
