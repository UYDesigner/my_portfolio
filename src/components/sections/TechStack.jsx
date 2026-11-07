import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrainCircuit, LayoutTemplate, Server, Wrench } from 'lucide-react';
import Section from '../ui/Section';
import { skillCategories, skills } from '../../data/skills';

const icons = { Frontend: LayoutTemplate, Backend: Server, 'AI/ML': BrainCircuit, Tools: Wrench };
const filters = ['All', ...skillCategories];

export default function TechStack() {
  const [filter, setFilter] = useState('All');
  const visible = skills.filter((s) => filter === 'All' || s.category === filter);

  const tabs = (
    <div className="flex flex-wrap gap-1" role="group" aria-label="Filter skills by category">
      {filters.map((name) => (
        <button
          key={name}
          type="button"
          aria-pressed={filter === name}
          onClick={() => setFilter(name)}
          className={`rounded-md px-2.5 py-1 text-[13px] font-semibold transition-colors ${
            filter === name ? 'bg-surface text-fg' : 'text-muted hover:text-fg'
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );

  return (
    <Section id="skills" title="Tech Stack" titleNote="( hover to play )" action={tabs}>
      <ul className="flex min-h-[120px] flex-wrap content-start gap-2 p-5">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map(({ name, category, placeholder }) => {
            const Icon = icons[category] ?? Wrench;
            return (
              <motion.li
                key={name}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.18 }}
                className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium ${
                  placeholder ? 'border-dashed border-line text-muted' : 'border-line bg-surface'
                }`}
              >
                <Icon size={15} aria-hidden="true" className="text-muted" />
                {name}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </Section>
  );
}
