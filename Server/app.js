import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import weatherRouter from './src/routes/weather.routes.js';
import constructionRouter from './src/routes/construction.routes.js';
app.use('/api', weatherRouter);
app.use('/api',constructionRouter);

export default app;