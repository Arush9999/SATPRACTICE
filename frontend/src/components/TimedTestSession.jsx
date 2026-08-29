import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';
import { MathText } from '../lib/math';

const CHOICE_KEYS = ['A', 'B', 'C', 'D'];

function formatTime(seconds) {
  const safe = Math.max(0, seconds);
  const minutes = Math.floor(safe / 60);
  const remainder = safe % 60;
  return `${minutes}:${remainder.toString().padStart(2, '0')}`;
}

function formatDuration(seconds) {
  if (!seconds) return '0 min';
  return `${Math.round(seconds / 60)} min`;
}

function ModuleStats({ questionCount, timeLimitSeconds, currentQuestion, answeredCount, timeValue }) {
  const timeDisplay = timeValue != null ? formatTime(timeValue) : formatTime(timeLimitSeconds);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="min-w-[7rem] rounded-xl border border-sage/70 bg-grove px-5 py-4 text-center">
        <p className="text-xs uppercase tracking-wide text-haze">Questions</p>
        <p className="mt-1 font-display text-3xl font-bold text-ink">
          {currentQuestion != null ? `${currentQuestion} / ${questionCount}` : questionCount}
        </p>
      </div>
      <div className="min-w-[7rem] rounded-xl border border-sage/70 bg-grove px-5 py-4 text-center">
        <p className="text-xs uppercase tracking-wide text-haze">Time</p>
        <p className={`mt-1 font-display text-3xl font-bold ${timeValue != null && timeValue <= 60 ? 'text-earth' : 'text-leaf'}`}>
          {timeDisplay}
        </p>
      </div>
      {answeredCount != null && (
        <div className="min-w-[7rem] rounded-xl border border-sage/70 bg-grove px-5 py-4 text-center">
          <p className="text-xs uppercase tracking-wide text-haze">Answered</p>
          <p className="mt-1 font-display text-3xl font-bold text-ink">
            {answeredCount} / {questionCount}
          </p>
        </div>
      )}
    </div>
  );
}

function buildSequence(test) {
  const sequence = [];

  if (test.testType === 'full') {
    sequence.push(
      test.modules.find((module) => module.id === 'english-1'),
      { type: 'adaptive-slot', adaptiveKey: 'english-2' },
      test.modules.find((module) => module.type === 'break'),
      test.modules.find((module) => module.id === 'math-1'),
      { type: 'adaptive-slot', adaptiveKey: 'math-2' },
    );
  } else {
    sequence.push(
      test.modules.find((module) => module.moduleNumber === 1 && module.section === test.section),
      { type: 'adaptive-slot', adaptiveKey: `${test.section}-2` },
    );
  }

  return sequence.filter(Boolean);
}

function resolveAdaptiveModule(test, adaptiveKey, module1Score) {
  const routing = test.adaptiveRouting[adaptiveKey];
  if (!routing) return null;

  const accuracy = module1Score.total
    ? module1Score.correct / module1Score.total
    : 0;
  const useAdvanced = accuracy >= routing.threshold;
  const moduleId = useAdvanced ? routing.advancedModuleId : routing.standardModuleId;

  return {
    module: test.modules.find((entry) => entry.id === moduleId),
    path: useAdvanced ? 'advanced' : 'standard',
    accuracy,
  };
}

export default function TimedTestSession({
  test,
  title,
  sessionType,
  loading = false,
  error = null,
}) {
  const sequence = useMemo(() => (test ? buildSequence(test) : []), [test]);
  const [stepIndex, setStepIndex] = useState(0);
  const [phase, setPhase] = useState('intro');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [moduleScore, setModuleScore] = useState({ correct: 0, total: 0 });
  const [overallScore, setOverallScore] = useState({ correct: 0, total: 0 });
  const [adaptiveInfo, setAdaptiveInfo] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const finishingRef = useRef(false);

  const currentStep = sequence[stepIndex];
  const currentModule = currentStep?.type === 'adaptive-slot'
    ? adaptiveInfo?.module
    : currentStep;

  const questions = currentModule?.questions || [];
  const question = questions[questionIndex];

  const resetModuleState = useCallback((module) => {
    setQuestionIndex(0);
    setAnswers({});
    setModuleScore({ correct: 0, total: 0 });
    setTimeLeft(module?.timeLimitSeconds || 0);
    finishingRef.current = false;
  }, []);

  useEffect(() => {
    if (phase !== 'active' && phase !== 'break') return undefined;

    if (timeLeft <= 0) return undefined;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, timeLeft]);

  const finishModule = useCallback(async () => {
    if (finishingRef.current || !currentModule?.questions?.length) return;
    finishingRef.current = true;
    setSubmitting(true);

    let correct = 0;
    const total = currentModule.questions.length;

    try {
      for (const item of currentModule.questions) {
        const selected = answers[item.id];
        if (!selected) continue;

        const response = await api.checkAnswer(item.id, selected);
        if (response.isCorrect) correct += 1;

        await api.recordAttempt({
          questionId: item.id,
          section: item.section,
          domain: item.domain,
          isCorrect: response.isCorrect,
          sessionType,
        });
      }
    } catch (err) {
      finishingRef.current = false;
      setSubmitting(false);
      alert(err.message);
      return;
    }

    const score = { correct, total };
    setModuleScore(score);
    setOverallScore((prev) => ({
      correct: prev.correct + correct,
      total: prev.total + total,
    }));
    setSubmitting(false);
    setPhase('summary');
  }, [answers, currentModule, sessionType]);

  useEffect(() => {
    if (phase !== 'active' || timeLeft > 0 || submitting) return;
    finishModule();
  }, [phase, timeLeft, submitting, finishModule]);

  function beginStep() {
    if (currentStep?.type === 'break') {
      setTimeLeft(currentStep.timeLimitSeconds);
      setPhase('break');
      return;
    }

    resetModuleState(currentModule);
    setPhase('active');
  }

  function handleContinueFromSummary() {
    let resolvedAdaptive = adaptiveInfo;

    if (currentStep?.moduleNumber === 1 && currentStep?.path === 'routing') {
      resolvedAdaptive = resolveAdaptiveModule(test, `${currentStep.section}-2`, moduleScore);
      setAdaptiveInfo(resolvedAdaptive);
    }

    const nextIndex = stepIndex + 1;
    const nextStep = sequence[nextIndex];

    if (!nextStep) {
      setPhase('complete');
      return;
    }

    if (nextStep.type === 'adaptive-slot') {
      const resolved = resolvedAdaptive
        || resolveAdaptiveModule(test, nextStep.adaptiveKey, moduleScore);

      if (!resolved?.module) {
        setPhase('complete');
        return;
      }

      setAdaptiveInfo(resolved);
      setStepIndex(nextIndex);
      resetModuleState(resolved.module);
      setPhase('intro');
      return;
    }

    setStepIndex(nextIndex);
    setAdaptiveInfo(null);

    if (nextStep.type === 'break') {
      setPhase('intro');
      return;
    }

    resetModuleState(nextStep);
    setPhase('intro');
  }

  function skipBreak() {
    const nextIndex = stepIndex + 1;
    setStepIndex(nextIndex);
    setPhase('intro');
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-2xl font-bold text-ink">{title}</h1>
        <p className="mt-6 text-mist">Building your timed modules from College Board questions...</p>
        <div className="mx-auto mt-4 h-2 w-48 overflow-hidden rounded-full bg-sage/50">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-lime" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-earth/30 bg-earth/10 p-6 text-earth">
        <p className="font-medium">{error}</p>
        <Link to="/dashboard" className="mt-4 inline-block text-sm underline">Back to dashboard</Link>
      </div>
    );
  }

  if (!test?.modules?.length) {
    return (
      <div className="rounded-2xl border border-sage/70 bg-surface p-6">
        <p>No questions available right now. Please try again later.</p>
        <Link to="/dashboard" className="mt-4 inline-block text-sm text-leaf underline">Back to dashboard</Link>
      </div>
    );
  }

  if (phase === 'complete') {
    const pct = overallScore.total
      ? Math.round((overallScore.correct / overallScore.total) * 100)
      : 0;

    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-sage/70 bg-surface p-8 text-center shadow-sm">
        <h2 className="font-display text-2xl font-bold text-ink">{title} Complete</h2>
        <p className="mt-4 font-display text-5xl font-bold text-leaf">{pct}%</p>
        <p className="mt-2 text-mist">
          {overallScore.correct} of {overallScore.total} correct
        </p>
        <p className="mt-4 text-sm text-haze">
          Module 2 difficulty adapted to your Module 1 performance, matching Digital SAT routing.
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

  if (phase === 'intro') {
    const isBreak = currentStep?.type === 'break';
    const moduleLabel = isBreak ? currentStep.label : currentModule?.label;

    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-sage/70 bg-surface p-8 text-center shadow-sm">
        <p className="text-sm uppercase tracking-wide text-haze">
          {title} · Step {stepIndex + 1} of {sequence.length}
        </p>
        {stepIndex === 0 && test.totalQuestions && (
          <p className="mt-2 text-sm text-mist">
            {test.totalQuestions} questions total · {formatDuration(test.totalTimeSeconds)}
          </p>
        )}
        <h2 className="mt-3 font-display text-3xl font-bold text-ink">{moduleLabel}</h2>
        {isBreak ? (
          <p className="mt-4 text-mist">{currentStep.description}</p>
        ) : (
          <div className="mt-6">
            <ModuleStats
              questionCount={currentModule?.questionCount}
              timeLimitSeconds={currentModule?.timeLimitSeconds}
            />
          </div>
        )}
        {!isBreak && currentModule?.path === 'routing' && (
          <p className="mt-4 rounded-xl bg-grove px-4 py-3 text-sm text-shadow">
            Module 1 uses a College Board-style mix of easy, medium, and hard questions across all domains.
            Your Module 2 difficulty path is chosen from your Module 1 score.
          </p>
        )}
        {!isBreak && adaptiveInfo && (
          <p className="mt-4 rounded-xl bg-lime/20 px-4 py-3 text-sm text-shadow">
            Based on Module 1, you are on the{' '}
            <strong>{adaptiveInfo.path === 'advanced' ? 'advanced' : 'standard'}</strong> path
            ({Math.round(adaptiveInfo.accuracy * 100)}% on routing module).
          </p>
        )}
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/dashboard" className="rounded-xl border border-sage px-5 py-2.5 text-sm text-haze hover:text-ink">
            Exit
          </Link>
          <button
            type="button"
            onClick={beginStep}
            className="rounded-xl bg-leaf px-6 py-2.5 font-medium text-grove hover:bg-moss"
          >
            {isBreak ? 'Start Break' : 'Begin Module'}
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'break') {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-sage/70 bg-surface p-8 text-center shadow-sm">
        <h2 className="font-display text-3xl font-bold text-ink">Break</h2>
        <p className="mt-3 text-mist">Rest up before the Math section.</p>
        <p className="mt-6 font-display text-5xl font-bold text-leaf">{formatTime(timeLeft)}</p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={skipBreak}
            className="rounded-xl bg-leaf px-6 py-2.5 font-medium text-grove hover:bg-moss"
          >
            Continue to Math
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'summary') {
    const pct = moduleScore.total
      ? Math.round((moduleScore.correct / moduleScore.total) * 100)
      : 0;
    const routingKey = currentStep?.section ? `${currentStep.section}-2` : null;
    const willAdapt = currentStep?.path === 'routing' && test.adaptiveRouting[routingKey];

    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-sage/70 bg-surface p-8 text-center shadow-sm">
        <h2 className="font-display text-2xl font-bold text-ink">{currentModule?.label} Complete</h2>
        <p className="mt-4 font-display text-5xl font-bold text-leaf">{pct}%</p>
        <p className="mt-2 text-mist">
          {moduleScore.correct} of {moduleScore.total} correct
        </p>
        {willAdapt && (
          <p className="mt-4 rounded-xl bg-grove px-4 py-3 text-sm text-shadow">
            {pct >= Math.round(test.adaptiveThreshold * 100)
              ? 'Strong Module 1 performance — Module 2 will use a harder question mix.'
              : 'Module 2 will use a more accessible question mix to match your Module 1 performance.'}
          </p>
        )}
        <button
          type="button"
          disabled={submitting}
          onClick={handleContinueFromSummary}
          className="mt-8 rounded-xl bg-leaf px-6 py-3 font-medium text-grove hover:bg-moss disabled:opacity-50"
        >
          {stepIndex + 1 >= sequence.length ? 'View Results' : 'Continue'}
        </button>
      </div>
    );
  }

  const answeredCount = Object.keys(answers).length;
  const progress = questions.length ? ((questionIndex + 1) / questions.length) * 100 : 0;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-xl font-bold text-ink">{currentModule?.label}</h1>
          <p className="text-sm text-haze">
            {title}
            {question?.domain && ` · ${question.domain}`}
            {question?.difficulty && ` · ${question.difficulty}`}
          </p>
        </div>
        <Link to="/dashboard" className="text-sm text-haze hover:text-ink">Exit</Link>
      </div>

      <ModuleStats
        questionCount={questions.length}
        timeLimitSeconds={currentModule?.timeLimitSeconds}
        currentQuestion={questionIndex + 1}
        answeredCount={answeredCount}
        timeValue={timeLeft}
      />

      <div className="mb-4 mt-6 h-2 overflow-hidden rounded-full bg-sage/50">
        <div className="h-full rounded-full bg-lime transition-all" style={{ width: `${progress}%` }} />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {questions.map((item, idx) => {
          const isCurrent = idx === questionIndex;
          const isAnswered = Boolean(answers[item.id]);
          let className = 'h-8 w-8 rounded-lg border text-xs font-medium transition ';
          if (isCurrent) className += 'border-leaf bg-lime/20 text-ink';
          else if (isAnswered) className += 'border-moss bg-lime/10 text-leaf';
          else className += 'border-sage/70 text-haze hover:border-leaf';

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setQuestionIndex(idx)}
              className={className}
            >
              {idx + 1}
            </button>
          );
        })}
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
            const isSelected = answers[question.id] === key;
            const className = isSelected
              ? 'w-full rounded-xl border border-leaf bg-lime/15 px-4 py-3 text-left transition'
              : 'w-full rounded-xl border border-sage/70 px-4 py-3 text-left transition hover:border-leaf hover:bg-grove';

            return (
              <button
                key={key}
                type="button"
                onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: key }))}
                className={className}
              >
                <span className="mr-3 font-semibold text-leaf">{key}.</span>
                <MathText>{question.choices[key]}</MathText>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
            <button
              type="button"
              disabled={questionIndex === 0}
              onClick={() => setQuestionIndex((prev) => prev - 1)}
              className="rounded-xl border border-sage px-4 py-2 text-sm disabled:opacity-40"
            >
              Previous
            </button>
            {questionIndex + 1 >= questions.length ? (
              <button
                type="button"
                disabled={submitting}
                onClick={finishModule}
                className="rounded-xl bg-leaf px-6 py-2.5 font-medium text-grove hover:bg-moss disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Finish Module'}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setQuestionIndex((prev) => prev + 1)}
                className="rounded-xl bg-leaf px-6 py-2.5 font-medium text-grove hover:bg-moss"
              >
                Next
              </button>
            )}
        </div>
      </div>
    </div>
  );
}
