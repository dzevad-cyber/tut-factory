import express from 'express';
import * as authController from '../../controllers/auth/auth.controller';

export const authRouter = express.Router({ mergeParams: true });

authRouter.post('/auth/register', authController.register);
