import { ErrorRequestHandler } from 'express';
import { handleSequelizeValidationError } from './sequelizeErrorHandlers/handleSequelizeValidationError';
import { handleSequelizeUniqueConstraintError } from './sequelizeErrorHandlers/handleSequelizeUniqueConstraintError';
import { responseFail } from '../reponses/reponses';
import { ErrorProps } from './error.types';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const errorProps: ErrorProps = {
    statusCode: err.statusCode || 500,
    status: err.status || 'error',
    message: err.message,
    stack: err.stack,
    error: {
      ...err,
    },
    isOperational: err.isOperational,
  };

  if (errorProps.error?.name === 'JsonWebTokenError') {
    return responseFail(res, 401, {
      message: 'Please log in or create an account.',
    });
  } else if (errorProps.error?.name === 'TokenExpiredError') {
    return responseFail(res, 401, {
      message: 'Your session has expired. Please log in.',
    });
  } else if (errorProps.error?.name === 'SequelizeValidationError') {
    return handleSequelizeValidationError(errorProps, res);
  } else if (errorProps.error?.name === 'SequelizeUniqueConstraintError') {
    return handleSequelizeUniqueConstraintError(errorProps, res);
  } else if (errorProps.isOperational) {
    return responseFail(res, errorProps.statusCode, {
      message: errorProps.message,
    });
  } else if (['development', 'test'].includes(process.env.NODE_ENV!)) {
    console.log('[ server ]:', errorProps);
    return res.status(errorProps.statusCode).json(errorProps);
  } else {
    console.error('ERROR', errorProps.error); // use logger for this
    return res.status(500).json({
      status: 'error',
      message: 'Something went wrong!!!',
    });
  }
};

export default globalErrorHandler;
