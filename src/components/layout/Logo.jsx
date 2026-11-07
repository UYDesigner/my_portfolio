import { profile } from '../../data/profile';

/** <yourname /> with a subtle blinking cursor. */
export default function Logo() {
  return (
    <a
      href="#home"
      aria-label={`${profile.handle} — back to top`}
      className="inline-flex items-center font-mono text-base font-semibold tracking-tight"
    >
      <span className="text-muted">&lt;</span>
      <span>{profile.handle}</span>
      <span className="text-accent">&nbsp;/&gt;</span>
      <span aria-hidden="true" className="ml-1 h-4 w-[2px] bg-accent animate-blink" />
    </a>
  );
}
