import { Response } from 'express';
import { responseFail } from '../../reponses/reponses';

export const handleSequelizeValidationError = (err: any, res: Response) => {
  const errors = getSequelizeValidationErrors(err);

  return responseFail(res, 400, { errors });
};

const getSequelizeValidationErrors = (err: any) => {
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
