import express from 'express';
import * as userController from '../../controllers/user/user.controller';

export const authRouter = express.Router({ mergeParams: true });

authRouter.post('/auth/register', userController.createUser);
