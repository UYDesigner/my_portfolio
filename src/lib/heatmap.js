const iso = (d) => d.toLocaleDateString('en-CA'); // YYYY-MM-DD

/** A year of empty days, used until real data is available. Contains no made-up counts. */
export function emptyYear() {
  const end = new Date();
  const start = new Date(end);
  start.setDate(end.getDate() - 364);
  const days = [];
  for (const d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    days.push({ date: iso(d), count: 0, level: 0 });
  }
  return days;
}

/** Groups days into Sunday-first week columns (null pads the first week). */
export function buildWeeks(days) {
  const weeks = [];
  let week = Array(new Date(`${days[0].date}T00:00:00`).getDay()).fill(null);
  days.forEach((day) => {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length) weeks.push(week);
  return weeks;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Month labels positioned by week index; drops labels that would overlap. */
export function monthLabels(weeks) {
  const labels = [];
  let last = -1;
  weeks.forEach((week, i) => {
    const day = week.find(Boolean);
    if (!day) return;
    const month = new Date(`${day.date}T00:00:00`).getMonth();
    if (month !== last) {
      labels.push({ index: i, text: MONTHS[month] });
      last = month;
    }
  });
  return labels.filter((l, i) => i === labels.length - 1 || labels[i + 1].index - l.index >= 3);
}
