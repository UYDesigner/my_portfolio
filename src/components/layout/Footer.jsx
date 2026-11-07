import { profile } from '../../data/profile';

export default function Footer() {
  return (
    <footer className="bleed-t relative mt-5 px-5 py-10 text-center text-sm text-muted">
      <p>
        Designed &amp; Developed by <strong className="font-semibold text-fg">{profile.name}</strong>
      </p>
      <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}
