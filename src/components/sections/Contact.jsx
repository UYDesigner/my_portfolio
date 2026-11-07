import { ArrowUpRight, Github, Linkedin, Mail, Paperclip } from 'lucide-react';
import Section from '../ui/Section';
import XIcon from '../ui/XIcon';
import { getContactLinks } from '../../lib/links';

const icons = { github: Github, linkedin: Linkedin, x: XIcon, email: Mail, resume: Paperclip };

export default function Contact() {
  const links = getContactLinks();
  return (
    <Section id="contact" title="Contact">
      <ul className="grid grid-cols-2 sm:grid-flow-col sm:auto-cols-fr">
        {links.map(({ id, label, href, external }) => {
          const Icon = icons[id] ?? Mail;
          const body = (
            <>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-surface">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className="font-semibold">{label}</span>
              {href && (
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              )}
            </>
          );
          return (
            <li key={id} className="border-dashed border-line even:border-l sm:border-l sm:first:border-l-0">
              {href ? (
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-3 p-3 transition-colors hover:bg-surface/60"
                >
                  {body}
                </a>
              ) : (
                <span aria-disabled="true" title="Add this link in src/data/profile.js" className="flex items-center gap-3 p-3 opacity-40">
                  {body}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
