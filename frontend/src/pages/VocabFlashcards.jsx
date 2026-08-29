import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';

export default function VocabFlashcards() {
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    api.getVocabDeck()
      .then((data) => {
        setCards(shuffle(data.cards));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const current = cards[index];

  if (loading) {
    return <p className="text-center text-haze">Loading flashcards...</p>;
  }

  if (finished) {
    const pct = score.total ? Math.round((score.correct / score.total) * 100) : 0;
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-sage/70 bg-surface p-8 text-center">
        <h2 className="font-display text-2xl font-bold text-ink">Session Complete</h2>
        <p className="mt-4 font-display text-5xl font-bold text-leaf">{pct}%</p>
        <p className="mt-2 text-mist">{score.correct} of {score.total} correct</p>
        <Link to="/dashboard" className="mt-8 inline-flex rounded-xl bg-leaf px-6 py-3 text-grove hover:bg-moss">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  if (!current) {
    return <p className="text-center text-haze">No vocabulary cards found.</p>;
  }

  async function handleSubmit() {
    if (!selected || result) return;
    const response = await api.checkVocab(current.id, selected);
    setResult(response);
    setScore((prev) => ({
      correct: prev.correct + (response.isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
  }

  function handleNext() {
    if (index + 1 >= cards.length) {
      setFinished(true);
      return;
    }
    setIndex((prev) => prev + 1);
    setSelected(null);
    setResult(null);
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Vocab Flashcards</h1>
          <p className="text-sm text-haze">Card {index + 1} of {cards.length}</p>
        </div>
        <Link to="/dashboard" className="text-sm text-haze hover:text-ink">Exit</Link>
      </div>

      <div className="rounded-2xl border border-sage/70 bg-surface p-6 shadow-sm">
        <p className="text-xl font-semibold text-forest">{current.question}</p>
        {current.context && (
          <p className="mt-4 italic leading-7 text-mist">&ldquo;{current.context}&rdquo;</p>
        )}

        <div className="mt-6 space-y-3">
          {(current.choices || []).map((choice) => {
            const isSelected = selected === choice;
            const isCorrect = result?.correct === choice;
            const isWrong = result && isSelected && !result.isCorrect;

            let className = 'w-full rounded-xl border px-4 py-3 text-left transition ';
            if (result) {
              if (isCorrect) className += 'border-moss bg-lime/20';
              else if (isWrong) className += 'border-earth bg-earth/10';
              else className += 'border-sage/50 opacity-70';
            } else if (isSelected) {
              className += 'border-leaf bg-lime/15';
            } else {
              className += 'border-sage/70 hover:border-leaf';
            }

            return (
              <button
                key={choice}
                type="button"
                disabled={Boolean(result)}
                onClick={() => setSelected(choice)}
                className={className}
              >
                {choice}
              </button>
            );
          })}
        </div>

        {result?.explanation && (
          <div className="mt-6 space-y-3 rounded-xl bg-grove p-4 text-sm leading-6 text-shadow">
            <p><strong>Correct:</strong> {result.explanation.right}</p>
            {result.explanation.hook && <p><strong>Memory hook:</strong> {result.explanation.hook}</p>}
          </div>
        )}

        <div className="mt-6 flex justify-end gap-3">
          {!result ? (
            <button
              type="button"
              disabled={!selected}
              onClick={handleSubmit}
              className="rounded-xl bg-leaf px-6 py-2.5 text-grove disabled:opacity-50 hover:bg-moss"
            >
              Check Answer
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="rounded-xl bg-leaf px-6 py-2.5 text-grove hover:bg-moss"
            >
              {index + 1 >= cards.length ? 'Finish' : 'Next Card'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
