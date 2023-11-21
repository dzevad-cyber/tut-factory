import { Response } from 'express';
import { responseFail } from '../../reponses/reponses';
import { ErrorProps } from '../error.types';
import { extractSequelizeErrors } from '../error.helpers';

export const handleSequelizeValidationError = (
  err: ErrorProps,
  res: Response
) => {
  const errors = getSequelizeValidationErrors(err);

  return responseFail(res, 400, { errors });
};

const getSequelizeValidationErrors = (err: ErrorProps) => {
  const errors = extractSequelizeErrors(err.error?.errors);
  return errors;
};
