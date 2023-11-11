import User from '../../models/user.model';
import { catchAsync } from '../../utils/catchAsync';
import { responseSuccess } from '../../utils/reponses/reponses';

export const register = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  const filteredNewUser = pickFromObj(['firstName', 'email'], newUser);

  return responseSuccess(res, 201, filteredNewUser);
});

const pickFromObj = (keys: string[], obj: Record<string, any>) => {
  const result = keys.reduce((acc, currentValue) => {
    if (!obj[currentValue]) return acc;

    return {
      ...acc,
      [currentValue]: obj[currentValue],
    };
  }, {});

  return result;
};
