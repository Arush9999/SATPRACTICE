import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';
import QuestionSession from '../components/QuestionSession';

export default function TargetedPractice() {
  const [domains, setDomains] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.getDomains().then(setDomains).catch((err) => setError(err.message));
  }, []);

  async function startPractice(domain) {
    setSelectedDomain(domain);
    setLoading(true);
    setError(null);

    try {
      const data = await api.getTargetedTest(domain);
      setQuestions(data.questions);
    } catch (err) {
      setError(err.message);
      setSelectedDomain(null);
    } finally {
      setLoading(false);
    }
  }

  if (selectedDomain && (questions.length || loading)) {
    return (
      <QuestionSession
        title={`Targeted: ${selectedDomain}`}
        sessionType="targeted"
        questions={questions}
        loading={loading}
        error={error}
      />
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Link to="/dashboard" className="text-sm text-haze hover:text-ink">← Back</Link>
      <h1 className="mt-4 font-display text-3xl font-bold text-ink">Targeted Practice</h1>
      <p className="mt-2 text-mist">Pick one of the 8 SAT content domains. Each session has 15 questions.</p>

      {error && <p className="mt-4 text-earth">{error}</p>}

      {!domains ? (
        <p className="mt-8 text-haze">Loading domains...</p>
      ) : (
        <div className="mt-8 space-y-8">
          <DomainGroup title="Reading & Writing" domains={domains.english} onSelect={startPractice} />
          <DomainGroup title="Math" domains={domains.math} onSelect={startPractice} />
        </div>
      )}
    </div>
  );
}

function DomainGroup({ title, domains, onSelect }) {
  return (
    <section>
      <h2 className="mb-3 font-display text-lg font-semibold text-shadow">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {domains.map((domain) => (
          <button
            key={domain}
            type="button"
            onClick={() => onSelect(domain)}
            className="rounded-xl border border-sage/70 bg-surface px-4 py-4 text-left text-sm font-medium text-ink shadow-sm transition hover:border-leaf hover:bg-lime/15"
          >
            {domain}
          </button>
        ))}
      </div>
    </section>
  );
}
