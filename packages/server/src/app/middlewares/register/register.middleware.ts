import { NextFunction, Request, Response } from 'express';
import { responseFail } from '../../utils/reponses/reponses';
import { catchAsync } from '../../utils/catchAsync';
import { registerFormSchema } from '../../../../../shared/src/forms/registerForm';

export const validateRegisterReqBody = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const reqBodySchemaParsed = registerFormSchema.safeParse(req.body);

    if (!reqBodySchemaParsed.success) {
      const errors = reqBodySchemaParsed.error.issues.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.path[0] as string]: curr.message,
        };
      }, {});

      return responseFail(res, 400, errors);
    } else {
      next();
    }
  }
);
