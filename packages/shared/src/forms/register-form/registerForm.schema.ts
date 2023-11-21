import { z } from 'zod';

export const registerFormSchema = z
  .object({
    firstName: z.string().min(3).max(30),
    email: z.string().email(),
    password: z.string().min(12).max(30),
    confirmPassword: z.string().min(12).max(30),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
