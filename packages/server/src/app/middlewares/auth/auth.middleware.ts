import User from '../../models/user.model';
import { catchAsync } from '../../utils/catchAsync';
import AppError from '../../utils/error/error';
import jwt from 'jsonwebtoken';

export const authenticate = catchAsync(async (req, res, next) => {
  // 1. check does token exist
  if (!req.headers.authorization) {
    return next(new AppError('Please log in or create an account', 401));
  }

  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return next(new AppError('Please login or create an account', 401));
  }

  // 3. verify token
  const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET!);
  console.log('[ auth.middleware.ts - 18 ] - tokenDecoded:', tokenDecoded);

  //4. check if user still exists
  if (typeof tokenDecoded === 'string') {
    return next(new AppError('Please log in or create an account', 401));
  }

  const user = (await User.findByPk(tokenDecoded?.id))?.toJSON();

  if (!user) return next(new AppError('User does not exist.', 401));

  // 4. check if user changed password after token was issued
  // const isPasswordChangedAfterTokenIssued =
  //   tokenDecoded.iat! < user.changedPasswordAt!.getTime() / 1000;

  next();
});
