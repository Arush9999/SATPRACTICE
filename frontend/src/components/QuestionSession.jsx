import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';
import { MathText } from '../lib/math';

const CHOICE_KEYS = ['A', 'B', 'C', 'D'];

export default function QuestionSession({
  questions,
  sessionType,
  title,
  loading = false,
  error = null,
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [checking, setChecking] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [finished, setFinished] = useState(false);

  if (loading) {
    return <LoadingState title={title} />;
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-earth/30 bg-earth/10 p-6 text-earth">
        <p className="font-medium">{error}</p>
        <Link to="/dashboard" className="mt-4 inline-block text-sm underline">Back to dashboard</Link>
      </div>
    );
  }

  if (!questions?.length) {
    return (
      <div className="rounded-2xl border border-sage/70 bg-surface p-6">
        <p>No questions available right now. Please try again later.</p>
        <Link to="/dashboard" className="mt-4 inline-block text-sm text-leaf underline">Back to dashboard</Link>
      </div>
    );
  }

  if (finished) {
    const pct = score.total ? Math.round((score.correct / score.total) * 100) : 0;
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-sage/70 bg-surface p-8 text-center shadow-sm">
        <h2 className="font-display text-2xl font-bold text-ink">Session Complete</h2>
        <p className="mt-4 font-display text-5xl font-bold text-leaf">{pct}%</p>
        <p className="mt-2 text-mist">
          {score.correct} of {score.total} correct
        </p>
        <Link
          to="/dashboard"
          className="mt-8 inline-flex rounded-xl bg-leaf px-6 py-3 font-medium text-grove hover:bg-moss"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const question = questions[index];
  const progress = ((index + 1) / questions.length) * 100;

  async function handleSubmit() {
    if (!selected || checking) return;
    setChecking(true);

    try {
      const response = await api.checkAnswer(question.id, selected);
      setResult(response);

      await api.recordAttempt({
        questionId: question.id,
        section: question.section,
        domain: question.domain,
        isCorrect: response.isCorrect,
        sessionType,
      });

      setScore((prev) => ({
        correct: prev.correct + (response.isCorrect ? 1 : 0),
        total: prev.total + 1,
      }));
    } catch (err) {
      setResult({ error: err.message });
    } finally {
      setChecking(false);
    }
  }

  function handleNext() {
    if (index + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setIndex((prev) => prev + 1);
    setSelected(null);
    setResult(null);
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">{title}</h1>
          <p className="text-sm text-haze">
            Question {index + 1} of {questions.length}
            {question.domain && ` · ${question.domain}`}
          </p>
        </div>
        <Link to="/dashboard" className="text-sm text-haze hover:text-ink">Exit</Link>
      </div>

      <div className="mb-6 h-2 overflow-hidden rounded-full bg-sage/50">
        <div className="h-full rounded-full bg-lime transition-all" style={{ width: `${progress}%` }} />
      </div>

      <div className="rounded-2xl border border-sage/70 bg-surface p-6 shadow-sm">
        {question.paragraph && (
          <p className="mb-4 leading-7 text-shadow">
            <MathText>{question.paragraph}</MathText>
          </p>
        )}

        {question.visuals && (
          <div
            className="mb-4 overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: question.visuals }}
          />
        )}

        <p className="mb-6 text-lg font-medium leading-8 text-ink">
          <MathText>{question.question}</MathText>
        </p>

        <div className="space-y-3">
          {CHOICE_KEYS.filter((key) => question.choices?.[key]).map((key) => {
            const isSelected = selected === key;
            const isCorrect = result?.correctAnswer === key;
            const isWrong = result && isSelected && !result.isCorrect;

            let className = 'w-full rounded-xl border px-4 py-3 text-left transition ';
            if (result) {
              if (isCorrect) className += 'border-moss bg-lime/20';
              else if (isWrong) className += 'border-earth bg-earth/10';
              else className += 'border-sage/50 bg-grove/50 opacity-70';
            } else if (isSelected) {
              className += 'border-leaf bg-lime/15';
            } else {
              className += 'border-sage/70 hover:border-leaf hover:bg-grove';
            }

            return (
              <button
                key={key}
                type="button"
                disabled={Boolean(result)}
                onClick={() => setSelected(key)}
                className={className}
              >
                <span className="mr-3 font-semibold text-leaf">{key}.</span>
                <MathText>{question.choices[key]}</MathText>
              </button>
            );
          })}
        </div>

        {result?.explanation && (
          <div className="mt-6 rounded-xl bg-grove p-4 text-sm leading-6 text-shadow">
            <p className="mb-1 font-semibold text-ink">Explanation</p>
            <MathText>{result.explanation}</MathText>
          </div>
        )}

        {result?.error && (
          <p className="mt-4 text-sm text-earth">{result.error}</p>
        )}

        <div className="mt-6 flex justify-end gap-3">
          {!result ? (
            <button
              type="button"
              disabled={!selected || checking}
              onClick={handleSubmit}
              className="rounded-xl bg-leaf px-6 py-2.5 font-medium text-grove disabled:cursor-not-allowed disabled:opacity-50 hover:bg-moss"
            >
              {checking ? 'Checking...' : 'Submit Answer'}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="rounded-xl bg-leaf px-6 py-2.5 font-medium text-grove hover:bg-moss"
            >
              {index + 1 >= questions.length ? 'Finish' : 'Next Question'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function LoadingState({ title }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="font-display text-2xl font-bold text-ink">{title}</h1>
      <p className="mt-6 text-mist">Loading questions from College Board SAT Suite...</p>
      <div className="mx-auto mt-4 h-2 w-48 overflow-hidden rounded-full bg-sage/50">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-lime" />
      </div>
    </div>
  );
}
