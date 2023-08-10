import type { Request, Response } from 'express';

const availableTime = [
	'13:00',
	'14:00',
	'15:00',
	'16:00',
	'17:00',
	'18:00',
	'19:00',
	'20:00',
	'21:00',
	'22:00',
];

const randomTime = () => {
	const arr = [];

	for (let i = 0; i < availableTime.length; i++) {
		const random = Math.random();
		if (random < 0.5) arr.push(availableTime[i]);
	}

	return arr;
};

export const getAvailableDates = async (req: Request, res: Response): Promise<void> => {
	const availability = randomTime();
	res.status(200).json({ availableTimes: availability });
};
