import express from 'express';
import { authRouter } from './auth/auth.routes';
// import { authRouter } from './auth/auth.routes';

export const v1Router = express.Router({ mergeParams: true });

v1Router.use('/v1', authRouter);
