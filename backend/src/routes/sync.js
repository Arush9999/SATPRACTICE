import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { getSyncStatus, syncAllQuestions, syncDomainQuestions } from '../services/questionSync.js';

const router = Router();

router.get('/status', requireAuth, async (_req, res, next) => {
  try {
    const status = await getSyncStatus();
    res.json(status);
  } catch (err) {
    next(err);
  }
});

router.post('/all', requireAuth, async (_req, res, next) => {
  try {
    const report = await syncAllQuestions();
    const status = await getSyncStatus();
    res.json({ report, status });
  } catch (err) {
    next(err);
  }
});

router.post('/domain/:domain', requireAuth, async (req, res, next) => {
  try {
    const domain = decodeURIComponent(req.params.domain);
    const report = await syncDomainQuestions(domain);
    res.json(report);
  } catch (err) {
    next(err);
  }
});

export default router;
