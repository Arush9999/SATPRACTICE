import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import PracticeCard from '../components/PracticeCard';
import StatsPanel from '../components/StatsPanel';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [syncStatus, setSyncStatus] = useState(null);

  useEffect(() => {
    api.getStats().then(setStats).catch(console.error);
    api.getSyncStatus().then(setSyncStatus).catch(console.error);
  }, []);

  const needsSync = syncStatus && syncStatus.synced_count < 100;

  return (
    <div className="space-y-8">
      <section>
        <h1 className="font-display text-3xl font-bold text-ink">Dashboard</h1>
        <p className="mt-2 text-mist">
          Practice with official SAT Suite questions and track your progress over time.
        </p>
      </section>

      {needsSync && (
        <div className="rounded-2xl border border-earth/30 bg-earth/10 p-5 text-sm leading-6 text-earth">
          <p className="font-semibold">Question bank not synced yet</p>
          <p className="mt-1">
            Run <code className="rounded bg-earth/15 px-1">npm run sync-questions</code> in the
            backend folder to pull official questions from the College Board SAT Suite Question Bank.
            {syncStatus.synced_count > 0 && ` Currently synced: ${syncStatus.synced_count} questions.`}
          </p>
        </div>
      )}

      {syncStatus && !needsSync && (
        <p className="text-sm text-haze">
          {syncStatus.synced_count.toLocaleString()} official College Board questions synced
          {syncStatus.last_synced_at && ` · last updated ${new Date(syncStatus.last_synced_at).toLocaleDateString()}`}
        </p>
      )}

      <StatsPanel stats={stats} />

      <section>
        <h2 className="mb-4 font-display text-xl font-semibold text-ink">Practice Modes</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <PracticeCard
            title="Full Length SAT"
            description="Timed digital SAT: RW Module 1 → adaptive Module 2, break, then Math modules with College Board-style difficulty routing."
            to="/practice/full"
            questions={98}
            minutes={134}
          />
          <PracticeCard
            title="English Only"
            description="Two timed RW modules (32 min each) with adaptive Module 2 based on your Module 1 score."
            to="/practice/english"
            questions={54}
            minutes={64}
          />
          <PracticeCard
            title="Math Only"
            description="Two timed Math modules (35 min each) with adaptive Module 2 based on your Module 1 score."
            to="/practice/math"
            questions={44}
            minutes={70}
          />
          <PracticeCard
            title="Targeted Practice"
            description="Choose one of 8 SAT content domains and practice 15 questions at a time."
            to="/practice/targeted"
            questions={15}
          />
          <PracticeCard
            title="Vocab Flashcards"
            description="Review SAT vocabulary with context sentences, distractors, and explanations."
            to="/vocab"
            badge="383 words"
          />
        </div>
      </section>
    </div>
  );
}
