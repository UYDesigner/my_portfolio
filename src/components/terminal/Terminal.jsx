import { useEffect, useRef, useState } from 'react';
import TerminalWindow from '../ui/TerminalWindow';
import { WELCOME, commandNames, getCompletions, runCommand } from '../../terminal/commands';
import { scrollToSection } from '../../lib/scroll';
import { profile } from '../../data/profile';

const MAX_LINES = 200;

const tones = {
  input: 'text-fg',
  text: 'text-fg/90',
  muted: 'text-muted',
  accent: 'text-accent',
  cyan: 'text-cyan',
  error: 'text-red-600 dark:text-red-400',
};

export default function Terminal() {
  const [lines, setLines] = useState(WELCOME);
  const [value, setValue] = useState('');
  const history = useRef([]);
  const cursor = useRef(0);
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  // Keep the newest output in view (scrolls the terminal only, never the page).
  useEffect(() => {
    const el = outputRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const submit = (raw) => {
    const input = raw.trim();
    const echo = { kind: 'input', text: input };
    if (!input) {
      setLines((l) => [...l, echo].slice(-MAX_LINES));
      return;
    }
    history.current.push(input);
    cursor.current = history.current.length;

    const { lines: output, action } = runCommand(input);
    if (action === 'clear') {
      setLines([]);
      return;
    }
    let result = output;
    if (action?.navigate && !scrollToSection(action.navigate)) {
      result = [...output, { kind: 'muted', text: `(The "${action.navigate}" section isn't on the page yet.)` }];
    }
    setLines((l) => [...l, echo, ...result].slice(-MAX_LINES));
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      submit(value);
      setValue('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cursor.current > 0) {
        cursor.current -= 1;
        setValue(history.current[cursor.current]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cursor.current < history.current.length - 1) {
        cursor.current += 1;
        setValue(history.current[cursor.current]);
      } else {
        cursor.current = history.current.length;
        setValue('');
      }
    } else if (e.key === 'Tab') {
      const matches = getCompletions(value);
      if (matches.length === 1) {
        e.preventDefault();
        setValue(matches[0]);
      } else if (value) {
        e.preventDefault();
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  // Clicking the terminal focuses the input, unless the user is selecting text.
  const focusInput = () => {
    if (!window.getSelection()?.toString()) inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <TerminalWindow title={`${profile.handle}@portfolio: ~`}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div className="flex h-[22rem] flex-col sm:h-[26rem]" onClick={focusInput}>
        <div
          ref={outputRef}
          role="log"
          aria-live="polite"
          aria-label="Terminal output"
          tabIndex={0}
          className="flex-1 space-y-1 overflow-y-auto px-4 py-3 font-mono text-[13px] leading-relaxed"
        >
          {lines.map((l, i) => (
            <p key={i} className={`whitespace-pre-wrap break-words ${tones[l.kind]}`}>
              {l.kind === 'input' && <span className="mr-2 text-accent">$</span>}
              {l.text}
            </p>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t border-line px-4 py-2.5 font-mono">
          <span className="text-accent" aria-hidden="true">
            $
          </span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Terminal command input"
            placeholder="type a command…"
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="send"
            className="min-w-0 flex-1 bg-transparent text-base text-fg caret-accent outline-none placeholder:text-muted/60 sm:text-[13px]"
          />
        </div>

        <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
          {commandNames.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => submit(name)}
              className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </TerminalWindow>
  );
}
