import { Router } from 'express';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { requireAuth } from '../middleware/auth.js';
import { recordAttempt } from '../services/statsService.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const vocabCandidates = [
  join(__dirname, '../../../data/vocab.json'),
  join(__dirname, '../../data/vocab.json'),
];
const vocabPath = vocabCandidates.find(existsSync);

if (!vocabPath) {
  throw new Error('vocab.json not found. Run scripts/extract-vocab.mjs first.');
}

const vocabCards = JSON.parse(readFileSync(vocabPath, 'utf8'));

const router = Router();

router.get('/', requireAuth, (_req, res) => {
  res.json({
    cards: vocabCards.map((card) => ({
      id: card.id,
      question: card.question,
      context: card.context,
      choices: shuffle([card.correct, ...card.wrong]),
    })),
    total: vocabCards.length,
  });
});

router.post('/check', requireAuth, async (req, res, next) => {
  const { cardId, selectedAnswer } = req.body;
  const card = vocabCards.find((c) => c.id === cardId);

  if (!card) {
    return res.status(404).json({ error: 'Card not found' });
  }

  const isCorrect = selectedAnswer === card.correct;

  try {
    await recordAttempt(req.user.id, {
      questionId: cardId,
      section: 'english',
      domain: 'Vocabulary',
      isCorrect,
      sessionType: 'vocab',
    });

    res.json({
      isCorrect,
      correct: card.correct,
      explanation: card.explanation,
    });
  } catch (err) {
    next(err);
  }
});

router.get('/:cardId', requireAuth, (req, res) => {
  const card = vocabCards.find((c) => c.id === req.params.cardId);
  if (!card) {
    return res.status(404).json({ error: 'Card not found' });
  }

  const choices = shuffle([card.correct, ...card.wrong]);
  res.json({
    id: card.id,
    question: card.question,
    context: card.context,
    choices,
  });
});

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default router;
