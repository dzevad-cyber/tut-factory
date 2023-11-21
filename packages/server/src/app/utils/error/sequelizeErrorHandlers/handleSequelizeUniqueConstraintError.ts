import { Response } from 'express';
import { responseFail } from '../../reponses/reponses';
import { ErrorProps } from '../error.types';
import { extractSequelizeErrors } from '../error.helpers';

export const handleSequelizeUniqueConstraintError = (
  err: ErrorProps,
  res: Response
): void => {
  const errors = getSequelizeUniqueConstraintErrors(err);

  responseFail(res, 400, { errors });
};

const getSequelizeUniqueConstraintErrors = (err: ErrorProps) => {
  const errors = extractSequelizeErrors(err.error?.errors);
  return errors;
};
