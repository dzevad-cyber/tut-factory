import { ErrorRequestHandler } from 'express';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    status,
    message,
    stack: err.stack,
    error: err,
  });
};

export default globalErrorHandler;
