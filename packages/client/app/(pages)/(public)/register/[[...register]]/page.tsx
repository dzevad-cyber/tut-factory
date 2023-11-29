'use client';

import { Input } from '@client/components/ui/input';
import { Label } from '@client/components/ui/label';
import { cn } from '@client/client-utils/tailwind/cn';
import { Button } from '@client/components/ui/button';
import { Card } from '@client/components/ui/card';
import Logo from '@client/components/logo/Logo';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerFormSchema } from '@shared/forms/register-form/registerForm.schema';
import { setFormErrors } from '@shared/forms/register-form/registerForm.helpers';
import { RegisterForm } from '@shared/forms/register-form/registerForm.types';
import { Loader2 } from 'lucide-react';
import { useRegister } from '@client/api/auth/register';

const RegisterPage = () => {
  const {
    register: registerHookForm,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
  });

  const { mutate: register, isError, isSuccess, isPending } = useRegister();

  const onSubmit = (formData: RegisterForm) => {
    register(formData, {
      onError: (error) => {
        const { errors } = error.response?.data?.result;
        setFormErrors(errors as Record<string, any>, setError);
      },
      onSuccess: (data) => {
        reset();
      },
    });
  };

  return (
    <main className={cn('grid', 'place-items-center')}>
      <Card>
        <Logo
          className={cn('grid', 'justify-center', 'bg-accent-foreground')}
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cn('max-w-[400px]', 'grid', 'gap-y-5', 'bg-card', 'p-20')}
        >
          <div>
            <Label>First name</Label>
            <Input
              {...registerHookForm('firstName')}
              type='text'
              placeholder='First name'
            />
            {errors.firstName && (
              <div className='text-xsm pt-1 text-red-400'>{`${errors.firstName.message}`}</div>
            )}
          </div>
          <div>
            <Label>Email</Label>
            <Input
              {...registerHookForm('email')}
              type='email'
              placeholder='Email'
            />
            {errors.email && (
              <div className='text-xsm pt-1 text-red-400'>{`${errors.email.message}`}</div>
            )}
          </div>
          <div>
            <Label>Password</Label>
            <Input
              {...registerHookForm('password')}
              // type='password'
              placeholder='Password'
            />
            {errors.password && (
              <p className='text-xsm text-red-400'>{`${errors.password.message}`}</p>
            )}
          </div>
          <div>
            <Label>Confirm password</Label>
            <Input
              {...registerHookForm('confirmPassword')}
              // type='password'
              placeholder='Confirm Password'
            />
            {errors.confirmPassword && (
              <div className='text-xsm text-red-400'>{`${errors.confirmPassword.message}`}</div>
            )}
          </div>

          <Button disabled={isPending} type='submit'>
            {isPending ? (
              <Loader2 stroke='#000000' className='h-6 w-6 animate-spin' />
            ) : (
              'Register'
            )}
          </Button>
        </form>
      </Card>
    </main>
  );
};

export default RegisterPage;
