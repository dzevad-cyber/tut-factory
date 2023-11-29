import User from '../../models/user.model';
import { catchAsync } from '../../utils/catchAsync';
import { pickFromObj } from '../../utils/pickFromObj';
import { responseSuccess } from '../../utils/reponses/reponses';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import AppError from '../../utils/error/error';

export const register = catchAsync(async (req, res, next) => {
  const newUser = (
    await User.create(req.body, {
      fields: ['firstName', 'email', 'password', 'confirmPassword'],
    })
  ).toJSON();

  const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  const filteredNewUser = pickFromObj(['firstName', 'email'], newUser);

  res.cookie('__auth_tf__', token, {
    expires: new Date(
      Date.now() +
        Number(process.env.JWT_COOKIE_EXPIRES_IN!) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });

  return responseSuccess(res, 201, {
    newUser: filteredNewUser,
    token,
  });
});

export const login = catchAsync(async (req, res, next) => {
  const user = (
    await User.scope('withPassword').findOne({
      where: {
        email: req.body.email,
      },
    })
  )?.toJSON();

  if (!user) {
    return next(new AppError('User with this email does not exist', 400));
  }

  const passwordMatch = await bcrypt.compare(req.body.password, user.password);
  if (!passwordMatch) return next(new AppError('Password is incorrect', 401));

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  responseSuccess(res, 200, {
    user,
    token,
  });
});
