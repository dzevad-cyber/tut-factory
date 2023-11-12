import { NextFunction, Request, Response } from 'express';
import z from 'zod';
import { responseFail } from '../../utils/reponses/reponses';

export const validateRegisterReqBody = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const reqBodySchema = z
    .object({
      firstName: z.string().min(3).max(30),
      email: z.string().email(),
      password: z.string().min(12).max(30),
      confirmPassword: z.string().min(12).max(30),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });

  const reqBodySchemaParsed = reqBodySchema.safeParse(req.body);

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
};
