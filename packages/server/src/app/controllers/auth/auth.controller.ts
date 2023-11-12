import User from '../../models/user.model';
import { catchAsync } from '../../utils/catchAsync';
import { pickFromObj } from '../../utils/pickFromObj';
import { responseSuccess } from '../../utils/reponses/reponses';
import jwt from 'jsonwebtoken';

export const register = catchAsync(async (req, res, next) => {
  // verfiy the data with zod ...
  const newUser = (
    await User.create(req.body, {
      fields: ['firstName', 'email', 'password', 'confirmPassword'],
    })
  ).toJSON();

  const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  const filteredNewUser = pickFromObj(['firstName', 'email'], newUser);

  return responseSuccess(res, 201, {
    newUser: filteredNewUser,
    token,
  });
});
