import { Link } from 'react-router-dom';

export default function PracticeCard({ title, description, to, questions, minutes, badge }) {
  return (
    <Link
      to={to}
      className="group rounded-2xl border border-sage/70 bg-surface p-6 shadow-sm transition hover:border-leaf hover:bg-mist-soft/60"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink group-hover:text-leaf">{title}</h3>
        {(questions || minutes || badge) && (
          <div className="flex shrink-0 flex-col items-end gap-1">
            {questions != null && (
              <span className="rounded-full bg-lime/25 px-2.5 py-0.5 text-xs font-medium text-fern">
                {questions} Q
              </span>
            )}
            {minutes != null && (
              <span className="rounded-full bg-grove px-2.5 py-0.5 text-xs font-medium text-shadow">
                {minutes} min
              </span>
            )}
            {badge && (
              <span className="rounded-full bg-lime/25 px-2.5 py-0.5 text-xs font-medium text-fern">
                {badge}
              </span>
            )}
          </div>
        )}
      </div>
      <p className="mt-2 text-sm leading-6 text-mist">{description}</p>
    </Link>
  );
}
