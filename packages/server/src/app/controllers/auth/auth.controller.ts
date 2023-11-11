import User from '../../models/user.model';
import { catchAsync } from '../../utils/catchAsync';
import { responseSuccess } from '../../utils/reponses/reponses';

export const register = catchAsync(async (req, res, next) => {
  await User.create(req.body);

  return responseSuccess(res, 201, { message: 'User created successfully' });
});
