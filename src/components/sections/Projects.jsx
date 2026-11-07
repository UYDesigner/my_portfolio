import { ArrowUpRight } from 'lucide-react';
import Section from '../ui/Section';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import { getGithubUrl } from '../../lib/links';

export default function Projects() {
  const githubUrl = getGithubUrl();
  const viewAll = githubUrl && (
    <a
      href={`${githubUrl.replace(/\/$/, '')}?tab=repositories`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
    >
      View all <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );

  return (
    <Section id="projects" title="Projects" action={viewAll || undefined}>
      <ul className="grid sm:grid-cols-2">
        {projects.map((project, i) => (
          <li
            key={`${project.title}-${i}`}
            className="border-t border-dashed border-line first:border-t-0 sm:odd:border-r sm:[&:nth-child(2)]:border-t-0"
          >
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
