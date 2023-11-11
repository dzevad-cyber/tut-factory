import { NextFunction, Request, Response } from 'express';

type Fn = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export const catchAsync = (fn: Fn) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err) => next(err));
  };
};
