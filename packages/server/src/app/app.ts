import express from 'express';
import globalErrorHandler from './utils/error/globalErrorHandler';
import AppError from './utils/error/error';
import outputFormat from './utils/logger';
import morgan from 'morgan';
import cors from 'cors';
import { v1Router } from './api/v1/v1.routes';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan(outputFormat));

// routes
app.use('/api', v1Router);

app.all('*', (req, res, next) => {
  next(new AppError(`Not Found ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

export default app;
