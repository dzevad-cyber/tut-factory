import { type RegisterForm } from '@shared/forms/register-form/registerForm.types';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

export const useRegister = () => {
  return useMutation({
    mutationFn: async (formData: RegisterForm) => {
      const { data }: { data: RegisterForm } = await axios.post(
        'http://localhost:5000/api/v1/auth/register',
        formData
      );
      return data;
    },
    onError: (error: AxiosError<Record<string, any>>) => {
      return error.response?.data;
    },
  });
};
