import { Quote as QuoteIcon } from 'lucide-react';
import { profile } from '../../data/profile';

export default function Quote() {
  const { text, author } = profile.quote;
  return (
    <section aria-label="Quote" className="bleed-t bleed-b relative mt-5 px-5 py-14 text-center">
      <figure className="mx-auto max-w-xl">
        <QuoteIcon aria-hidden="true" className="mx-auto h-8 w-8 fill-current text-fg/80" />
        <blockquote className="mt-6 text-3xl font-light italic leading-snug text-muted sm:text-4xl">{text}</blockquote>
        <figcaption className="mt-8 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          <span aria-hidden="true" className="h-px w-8 bg-line" />
          {author}
          <span aria-hidden="true" className="h-px w-8 bg-line" />
        </figcaption>
      </figure>
    </section>
  );
}
