import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { recordAttempt, getUserStats } from '../services/statsService.js';

const router = Router();

router.get('/', requireAuth, async (req, res, next) => {
  try {
    const stats = await getUserStats(req.user.id);
    res.json(stats);
  } catch (err) {
    next(err);
  }
});

router.post('/attempts', requireAuth, async (req, res, next) => {
  const { questionId, section, domain, isCorrect, sessionType } = req.body;

  if (!questionId || !section || typeof isCorrect !== 'boolean' || !sessionType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await recordAttempt(req.user.id, {
      questionId,
      section,
      domain,
      isCorrect,
      sessionType,
    });
    const stats = await getUserStats(req.user.id);
    res.json(stats);
  } catch (err) {
    next(err);
  }
});

export default router;
