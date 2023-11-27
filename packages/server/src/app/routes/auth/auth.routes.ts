import express from 'express';
import * as authController from '../../controllers/auth/auth.controller';
import { validateRegisterReqBody } from '../../middlewares/auth/register/register.middleware';
import { validateLoginReqBody } from '../../middlewares/auth/login/login.middleware';
import { authenticate } from '../../middlewares/auth/auth.middleware';

export const authRouter = express.Router({ mergeParams: true });

authRouter.post(
  '/auth/register',
  [validateRegisterReqBody],
  authController.register
);

authRouter.post(
  '/auth/login',
  [authenticate, validateLoginReqBody],
  authController.login
);
