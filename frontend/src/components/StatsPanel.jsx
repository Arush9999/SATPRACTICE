export default function StatsPanel({ stats }) {
  if (!stats) return null;

  const formatPct = (value) => (value == null ? '—' : `${value}%`);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard label="Total Questions" value={stats.totalQuestions} />
      <StatCard label="English (Past Week)" value={formatPct(stats.weeklyAccuracy?.english)} />
      <StatCard label="Math (Past Week)" value={formatPct(stats.weeklyAccuracy?.math)} />
      <StatCard label="Daily Streak" value={stats.dailyStreak} suffix=" days" />
    </div>
  );
}

function StatCard({ label, value, suffix = '' }) {
  return (
    <div className="rounded-2xl border border-sage/70 bg-surface p-5 shadow-sm">
      <p className="text-sm font-medium text-mist">{label}</p>
      <p className="mt-2 font-display text-3xl font-bold text-leaf">
        {value}
        {suffix && <span className="text-lg font-medium text-haze">{suffix}</span>}
      </p>
    </div>
  );
}
