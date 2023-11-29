import clientHttp from '@client/clientHttp';
import { type RegisterForm } from '@shared/forms/register-form/registerForm.types';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useRegister = () => {
  return useMutation({
    mutationFn: (formData: RegisterForm) => {
      return clientHttp.post('/v1/auth/register', formData);
    },
    onError: (error: AxiosError<Record<string, any>>) => {
      return error.response?.data;
    },
  });
};
