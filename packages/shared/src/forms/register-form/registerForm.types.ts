import { z } from 'zod';
import { registerFormSchema } from './registerForm.schema';

export type RegisterForm = z.infer<typeof registerFormSchema>;
