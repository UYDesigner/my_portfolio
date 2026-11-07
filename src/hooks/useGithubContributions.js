import { useEffect, useState } from 'react';

// Public contributions endpoint (no token needed). Swap this URL if you prefer your own backend.
const endpoint = (user) =>
  `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(user)}?y=last`;

export function useGithubContributions(username) {
  const [state, setState] = useState({ status: username ? 'loading' : 'idle', days: [], total: 0 });

  useEffect(() => {
    if (!username) return undefined;
    const controller = new AbortController();
    setState({ status: 'loading', days: [], total: 0 });
    fetch(endpoint(username), { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const days = data.contributions ?? [];
        const total = data.total?.lastYear ?? days.reduce((sum, d) => sum + d.count, 0);
        setState({ status: days.length ? 'ready' : 'error', days, total });
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setState({ status: 'error', days: [], total: 0 });
      });
    return () => controller.abort();
  }, [username]);

  return state;
}
