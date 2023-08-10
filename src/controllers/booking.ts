import type { Request, Response } from 'express';

export const postBooking = async (req: Request, res: Response): Promise<void> => {
	res.status(200).json({ msg: 'Booking successful' });
};
