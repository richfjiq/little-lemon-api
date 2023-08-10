import express from 'express';
import type { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import dateRoute from '../routes/date';
import bookingRoute from '../routes/booking';

dotenv.config();

class Server {
	private readonly app: Application;
	private readonly port: string;
	private readonly apiPaths = {
		availability: '/api/availability',
		booking: '/api/booking',
	};

	constructor() {
		this.app = express();
		this.port = process.env.PORT ?? '8080';
		this.middlewares();
		this.routes();
	}

	listen(): void {
		this.app.listen(this.port, () => {
			// eslint-disable-next-line no-console
			console.log(`Server running on port ${this.port}`);
		});
	}

	middlewares(): void {
		this.app.use(cors());
		this.app.use(express.json());
	}

	routes(): void {
		this.app.use(this.apiPaths.availability, dateRoute);
		this.app.use(this.apiPaths.booking, bookingRoute);
	}
}

export default Server;
