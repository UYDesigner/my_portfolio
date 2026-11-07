import { useMemo } from 'react';
import Section from '../ui/Section';
import { useGithubContributions } from '../../hooks/useGithubContributions';
import { buildWeeks, emptyYear, monthLabels } from '../../lib/heatmap';
import { getGithubUsername } from '../../lib/links';

const CELL = 10;
const GAP = 4;
const PITCH = CELL + GAP;

const captions = {
  idle: 'Add your GitHub URL in src/data/profile.js to show your activity.',
  loading: 'Loading contributions…',
  error: "Couldn't load contributions right now.",
};

export default function GithubActivity() {
  const username = getGithubUsername();
  const { status, days, total } = useGithubContributions(username);
  const weeks = useMemo(() => buildWeeks(days.length ? days : emptyYear()), [days]);
  const labels = useMemo(() => monthLabels(weeks), [weeks]);
  const caption =
    status === 'ready' ? `${total.toLocaleString()} contributions in the last year` : captions[status];

  return (
    <Section id="activity" title="GitHub Activity">
      <div className="px-5 py-5">
        <div role="region" aria-label="Contribution graph" tabIndex={0} className="overflow-x-auto pb-2">
          <div className="w-max" aria-hidden="true">
            <div className="relative h-5 text-xs font-semibold">
              {labels.map(({ index, text }) => (
                <span key={index} className="absolute" style={{ left: index * PITCH }}>
                  {text}
                </span>
              ))}
            </div>
            <div className="flex" style={{ gap: GAP }}>
              {weeks.map((week, w) => (
                <div key={w} className="flex flex-col" style={{ gap: GAP }}>
                  {Array.from({ length: 7 }, (_, r) => {
                    const day = week[r];
                    return (
                      <span
                        key={r}
                        title={day ? `${day.count} contributions on ${day.date}` : undefined}
                        style={{
                          width: CELL,
                          height: CELL,
                          borderRadius: 2,
                          backgroundColor: day ? `rgb(var(--heat-${day.level ?? 0}))` : 'transparent',
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
          <p className={status === 'ready' ? 'font-semibold' : 'text-muted'} role="status">
            {caption}
          </p>
          <div className="flex items-center gap-1.5 text-muted" aria-hidden="true">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <span key={level} style={{ width: CELL, height: CELL, borderRadius: 2, backgroundColor: `rgb(var(--heat-${level}))` }} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
