import Section from '../ui/Section';
import RichText from '../ui/RichText';
import { profile } from '../../data/profile';

export default function About() {
  return (
    <Section id="about" title="About">
      <ul className="space-y-3.5 px-5 py-5">
        {profile.background.map((text, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-relaxed sm:text-base">
            <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-muted/60" />
            <p>
              <RichText text={text} />
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
