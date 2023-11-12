import express from 'express';
import * as authController from '../../controllers/auth/auth.controller';
import { validateRegisterReqBody } from '../../middlewares/register/register.middleware';

export const authRouter = express.Router({ mergeParams: true });

authRouter.post(
  '/auth/register',
  [validateRegisterReqBody],
  authController.register
);
