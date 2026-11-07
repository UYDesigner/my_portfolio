import { Github, Globe } from 'lucide-react';

const iconLink =
  'grid h-8 w-8 place-items-center rounded-md text-muted transition-colors hover:bg-surface hover:text-fg';

export default function ProjectCard({ project }) {
  const { title, tagline, description, image, status, tags, liveUrl, repoUrl } = project;
  return (
    <article className="flex h-full flex-col p-4">
      <div className="aspect-[3/2] overflow-hidden rounded-xl border border-line bg-surface">
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        ) : (
          <div className="bg-dots grid h-full place-items-center font-mono text-xs text-muted">preview image</div>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-0.5 text-[13px] text-muted">{tagline}</p>
        </div>
        {status && (
          <span className="flex shrink-0 items-center gap-1.5 text-sm text-muted">
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${status.toLowerCase() === 'live' ? 'bg-accent' : 'bg-muted'}`}
            />
            {status}
          </span>
        )}
      </div>

      <p className="mt-3 text-[15px] leading-relaxed text-fg/75">{description}</p>

      <div className="mt-auto flex items-end justify-between gap-3 pt-5">
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <li key={`${tag}-${i}`} className="rounded-md bg-surface px-2.5 py-1 text-[13px] font-medium">
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 gap-1">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} live site`} className={iconLink}>
              <Globe size={18} aria-hidden="true" />
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} source code`} className={iconLink}>
              <Github size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
