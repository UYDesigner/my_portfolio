import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { profile } from '../../data/profile';

export default function CallToAction() {
  return (
    <Section id="talk" title="Say Hello">
      <div className="flex flex-col items-center gap-6 px-5 py-14 text-center">
        <p className="max-w-md text-lg text-muted">{profile.closing}</p>
        <Button variant="pill" href={profile.email ? `mailto:${profile.email}` : '#contact'}>
          Let&apos;s Talk <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </div>
    </Section>
  );
}
