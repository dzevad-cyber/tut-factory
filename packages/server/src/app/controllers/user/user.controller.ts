import User from '../../models/user.model';
import { catchAsync } from '../../utils/catchAsync';
import { responseSuccess } from '../../utils/reponses/reponses';

export const createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  return responseSuccess(res, 201, newUser);
});
