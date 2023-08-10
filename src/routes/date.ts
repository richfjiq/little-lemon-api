import { Router } from 'express';

import { getAvailableDates } from '../controllers/date';

const router = Router();

router.get('/', getAvailableDates);

export default router;
