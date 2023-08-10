import { Router } from 'express';

import { postBooking } from '../controllers/booking';

const router = Router();

router.post('/', postBooking);

export default router;
