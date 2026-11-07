import { profile } from '../data/profile';

/** Contact links in display order. Unfilled links are kept in dev (dimmed) and dropped in production. */
export function getContactLinks() {
  const links = [
    ...profile.socials.map((s) => ({ id: s.id, label: s.label, href: s.url, external: true })),
    { id: 'email', label: 'Mail', href: profile.email ? `mailto:${profile.email}` : '', external: false },
    { id: 'resume', label: 'Resume', href: profile.resumeUrl, external: true },
  ];
  return import.meta.env.DEV ? links : links.filter((l) => l.href);
}

export const getGithubUrl = () => profile.socials.find((s) => s.id === 'github')?.url ?? '';

export function getGithubUsername() {
  try {
    return new URL(getGithubUrl()).pathname.split('/').filter(Boolean)[0] ?? '';
  } catch {
    return '';
  }
}
