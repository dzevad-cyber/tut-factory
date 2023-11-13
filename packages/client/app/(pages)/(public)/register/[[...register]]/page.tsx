'use client';

import { Input } from '@client/components/ui/input';
import { Label } from '@client/components/ui/label';
import { cn } from '@client/client-utils/tailwind/cn';
import { Button } from '@client/components/ui/button';
import { Card } from '@client/components/ui/card';
import Logo from '@client/components/logo/Logo';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerFormSchema } from '@shared/forms/registerForm';
import type { RegisterForm } from '@shared/forms/registerForm';
import { Loader2 } from 'lucide-react';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    reset();
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
              {...register('firstName')}
              type='text'
              placeholder='First name'
            />
            {errors.firstName && (
              <div className='text-xsm pt-1 text-red-400'>{`${errors.firstName.message}`}</div>
            )}
          </div>
          <div>
            <Label>Email</Label>
            <Input {...register('email')} type='email' placeholder='Email' />
            {errors.email && (
              <div className='text-xsm pt-1 text-red-400'>{`${errors.email.message}`}</div>
            )}
          </div>
          <div>
            <Label>Password</Label>
            <Input
              {...register('password')}
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
              {...register('confirmPassword')}
              // type='password'
              placeholder='Confirm Password'
            />
            {errors.confirmPassword && (
              <div className='text-xsm text-red-400'>{`${errors.confirmPassword.message}`}</div>
            )}
          </div>

          <Button disabled={isSubmitting} type='submit'>
            {isSubmitting ? (
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
