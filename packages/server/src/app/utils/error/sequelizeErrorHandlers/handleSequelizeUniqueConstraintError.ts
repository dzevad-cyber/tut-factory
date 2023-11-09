import { Response } from 'express';
import { responseFail } from '../../reponses/reponses';

export const handleSequelizeUniqueConstraintError = (
  err: any,
  res: Response
): void => {
  const errors = getSequelizeUniqueConstraintErrors(err);

  responseFail(res, 400, { errors });
};

const getSequelizeUniqueConstraintErrors = (err: any) => {
  const errors = err.error?.errors.reduce(
    (acc: Record<string, string>, val: Record<string, any>) => {
      return {
        ...acc,
        [val.path]: val.message,
      };
    },
    {}
  );

  return errors;
};
