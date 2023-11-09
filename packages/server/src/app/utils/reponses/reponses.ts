import { Response } from 'express';

export const responseSuccess = (
  res: Response,
  statusCode: number,
  data: Record<string, any>
) => {
  return res.status(statusCode).json({
    status: 'success',
    result: data,
  });
};

export const responseFail = (
  res: Response,
  statusCode: number,
  data: Record<string, any>
) => {
  return res.status(statusCode).json({
    status: 'fail',
    result: data,
  });
};
