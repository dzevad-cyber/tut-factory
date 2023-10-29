import express from 'express';
import globalErrorHandler from './utils/error/globalErrorHandler';
import AppError from './utils/error/error';
import outputFormat from './utils/logger';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan(outputFormat));

// routes

app.all('*', (req, res, next) => {
  next(new AppError(`Not Found ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

export default app;
