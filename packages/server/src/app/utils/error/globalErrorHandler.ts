import { ErrorRequestHandler, Response } from 'express';
import { handleSequelizeValidationError } from './sequelizeErrorHandlers/handleSequelizeValidationError';
import { handleSequelizeUniqueConstraintError } from './sequelizeErrorHandlers/handleSequelizeUniqueConstraintError';

const handleErrorsForDevTestEnv = (err: ErrorProps, res: Response) => {
  if (err.error?.name === 'SequelizeValidationError') {
    handleSequelizeValidationError(err, res);
  } else if (err.error?.name === 'SequelizeUniqueConstraintError') {
    handleSequelizeUniqueConstraintError(err, res);
  } else if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      error: err.error,
    });
  }
};

const handleErrorsForProdEnv = (err: ErrorProps, res: Response) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // all unhandled errors in production
    console.error('ERROR', err);
    return res.status(500).json({
      status: 'error',
      message: 'Something went wrong!!!',
    });
  }
};

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const errorProps: ErrorProps = {
    statusCode: err.statusCode || 500,
    status: err.status || 'error',
    message: err.message,
    stack: err.stack,
    error: err,
    isOperational: err.isOperational,
  };

  if (['development', 'test'].includes(process.env.NODE_ENV as string)) {
    handleErrorsForDevTestEnv(errorProps, res);
  } else {
    handleErrorsForProdEnv(errorProps, res);
  }
};

export default globalErrorHandler;

type ErrorProps = {
  status: 'fail';
  statusCode: number;
  message: string;
  stack: string;
  error: any;
  isOperational?: boolean;
};
