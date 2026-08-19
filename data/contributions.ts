export type DayCell = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

const START = new Date("2025-08-17T00:00:00Z");
const DAYS = 371;

function hash(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function countFor(index: number, weekday: number) {
  const wave = 0.25 + 0.4 * hash(index * 0.17);
  const weekend = weekday === 0 || weekday === 6 ? 0.2 : 1;
  const burst = hash(Math.floor(index / 11)) > 0.88 ? 1.5 : 1;
  const raw = hash(index + 19) * 7 * wave * weekend * burst;
  if (raw < 0.7) return 0;
  return Math.min(12, Math.round(raw));
}

function levelFor(count: number): DayCell["level"] {
  if (count === 0) return 0;
  if (count < 3) return 1;
  if (count < 7) return 2;
  if (count < 13) return 3;
  return 4;
}

function build(): DayCell[] {
  const days: DayCell[] = [];
  for (let i = 0; i < DAYS; i++) {
    const d = new Date(START);
    d.setUTCDate(START.getUTCDate() + i);
    const count = countFor(i, d.getUTCDay());
    days.push({
      date: d.toISOString().slice(0, 10),
      count,
      level: levelFor(count),
    });
  }
  return days;
}

export const contributionDays = build();

export const contributionTotal = contributionDays.reduce((sum, d) => sum + d.count, 0);

export const monthLabels = [
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
];
