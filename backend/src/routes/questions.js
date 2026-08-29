import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import {
  fetchFullTest,
  fetchSectionTest,
  fetchTargetedPractice,
  getQuestionFromStore,
} from '../services/satQuestions.js';
import { collectQuestionsFromTest } from '../services/satTestBuilder.js';
import { cacheQuestions, getCachedQuestion, stripAnswers } from '../services/questionCache.js';
import { SAT_DOMAINS } from '../constants.js';

const router = Router();

function serializeTimedTest(test) {
  cacheQuestions(collectQuestionsFromTest(test));

  return {
    ...test,
    modules: test.modules.map((module) => {
      if (module.type === 'break') return module;
      return {
        ...module,
        questions: stripAnswers(module.questions),
      };
    }),
  };
}

router.get('/domains', (_req, res) => {
  res.json(SAT_DOMAINS);
});

router.get('/full', requireAuth, async (_req, res, next) => {
  try {
    const test = await fetchFullTest();
    res.json(serializeTimedTest(test));
  } catch (err) {
    next(err);
  }
});

router.get('/section/:section', requireAuth, async (req, res, next) => {
  const { section } = req.params;
  if (!['math', 'english'].includes(section)) {
    return res.status(400).json({ error: 'Section must be math or english' });
  }

  try {
    const test = await fetchSectionTest(section);
    res.json(serializeTimedTest(test));
  } catch (err) {
    next(err);
  }
});

router.get('/targeted/:domain', requireAuth, async (req, res, next) => {
  const domain = decodeURIComponent(req.params.domain);
  const allDomains = [...SAT_DOMAINS.math, ...SAT_DOMAINS.english];

  if (!allDomains.includes(domain)) {
    return res.status(400).json({ error: 'Invalid domain' });
  }

  try {
    const questions = await fetchTargetedPractice(domain);
    cacheQuestions(questions);
    res.json({ questions: stripAnswers(questions), domain });
  } catch (err) {
    next(err);
  }
});

router.post('/check', requireAuth, async (req, res, next) => {
  const { questionId, selectedAnswer } = req.body;
  if (!questionId || !selectedAnswer) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  let cached = getCachedQuestion(questionId);

  if (!cached) {
    try {
      cached = await getQuestionFromStore(questionId);
    } catch (err) {
      return next(err);
    }
  }

  if (!cached) {
    return res.status(404).json({ error: 'Question expired. Please reload the practice set.' });
  }

  const isCorrect = selectedAnswer.toUpperCase() === cached.correctAnswer.toUpperCase();
  res.json({
    isCorrect,
    correctAnswer: cached.correctAnswer.toUpperCase(),
    explanation: cached.explanation,
  });
});

export default router;
