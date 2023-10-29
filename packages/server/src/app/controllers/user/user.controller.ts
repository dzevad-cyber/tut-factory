import User from '../../models/user.model';
import catchAsync from '../../utils/catchAsync';

export const createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  res.status(200).json({
    status: 'success',
    user: newUser,
  });
});
