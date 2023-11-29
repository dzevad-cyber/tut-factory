import { z } from 'zod';
import { loginFormSchema } from './loginForm.schema';

export type LoginForm = z.infer<typeof loginFormSchema>;
