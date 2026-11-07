// Terminal command logic. Content comes from /src/data, never hard-coded here.
// Each command returns output lines: { kind, text } and may request an action.
import { profile } from '../data/profile';
import { groupedSkills as skills } from '../data/skills';

const line = (text, kind = 'text') => ({ kind, text });

export const WELCOME = [
  line(`Welcome to ${profile.handle}'s terminal.`, 'accent'),
  line('Type "help" to see available commands.', 'muted'),
];

const commands = {
  help: {
    description: 'Show available commands',
    run: () => [
      line('Available commands:', 'muted'),
      ...Object.entries(commands).map(([name, c]) => line(`  ${name.padEnd(10)} ${c.description}`)),
      line('Tip: ↑/↓ for history, Tab to autocomplete.', 'muted'),
    ],
  },
  whoami: {
    description: 'Display my introduction',
    run: () => [
      line(profile.name, 'accent'),
      line(`${profile.role} · ${profile.roleFocus}`, 'cyan'),
      line(profile.intro),
    ],
  },
  about: {
    description: 'Display my background',
    run: () => [
      ...profile.background.map((p) => line(p)),
      ...(profile.location ? [line(`Location: ${profile.location}`, 'muted')] : []),
    ],
  },
  skills: {
    description: 'Show my technical skills',
    run: () =>
      skills.map(({ category, items }) =>
        line(
          `${category.padEnd(18)} ${items.length ? items.join(', ') : '[add items in src/data/skills.js]'}`,
          items.length ? 'text' : 'muted',
        ),
      ),
  },
  projects: {
    description: 'Navigate to the projects section',
    run: () => [line('Navigating to projects…', 'accent')],
    action: { navigate: 'projects' },
  },
  contact: {
    description: 'Navigate to the contact section',
    run: () => [line('Navigating to contact…', 'accent')],
    action: { navigate: 'contact' },
  },
  clear: {
    description: 'Clear terminal output',
    run: () => [],
    action: 'clear',
  },
};

export const commandNames = Object.keys(commands);

/** Parses and runs one command line. Returns { lines, action }. */
export function runCommand(input) {
  const name = input.trim().split(/\s+/)[0].toLowerCase();
  const command = commands[name];
  if (!command) {
    return {
      lines: [line(`command not found: ${name}`, 'error'), line('Type "help" to see available commands.', 'muted')],
      action: null,
    };
  }
  return { lines: command.run(), action: command.action ?? null };
}

/** Commands starting with `partial` (for Tab completion). */
export function getCompletions(partial) {
  const p = partial.trim().toLowerCase();
  return p ? commandNames.filter((n) => n.startsWith(p)) : [];
}
