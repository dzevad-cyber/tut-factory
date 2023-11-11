import User from '../../models/user.model';
import { catchAsync } from '../../utils/catchAsync';
import { pickFromObj } from '../../utils/pickFromObj';
import { responseSuccess } from '../../utils/reponses/reponses';

export const register = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  const filteredNewUser = pickFromObj(['firstName', 'email'], newUser);

  return responseSuccess(res, 201, filteredNewUser);
});
