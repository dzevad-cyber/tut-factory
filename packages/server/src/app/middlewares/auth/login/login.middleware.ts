import { catchAsync } from '../../../utils/catchAsync';
import { responseFail } from '../../../utils/reponses/reponses';
import { loginFormSchema } from '../../../../../../shared/src/forms/login-form/loginForm.schema';

export const validateLoginReqBody = catchAsync(async (req, res, next) => {
  const reqBodySchemaParsed = loginFormSchema.safeParse(req.body);

  if (!reqBodySchemaParsed.success) {
    const errors = reqBodySchemaParsed.error.issues.reduce((acc, curr) => {
      return {
        ...acc,
        [curr.path[0] as string]: curr.message,
      };
    }, {});

    return responseFail(res, 400, errors);
  } else {
    req.body = reqBodySchemaParsed.data;
    next();
  }
});
