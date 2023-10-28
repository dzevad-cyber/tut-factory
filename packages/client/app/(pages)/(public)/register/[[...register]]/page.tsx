'use client';

import { Input } from '@client/components/ui/input';
import { Label } from '@client/components/ui/label';
import { cn } from '@client/client-utils/tailwind/cn';
import { Button } from '@client/components/ui/button';
import { Card } from '@client/components/ui/card';
import Logo from '@client/components/logo/Logo';

const RegisterPage = () => {
  return (
    <main className={cn('grid', 'place-items-center')}>
      <Card>
        <Logo
          className={cn('grid', 'justify-center', 'bg-accent-foreground')}
        />
        <form
          className={cn('max-w-[400px]', 'grid', 'gap-y-5', 'bg-card', 'p-20')}
        >
          <div>
            <Label>Email</Label>
            <Input type='email' />
          </div>
          <div>
            <Label>Password</Label>
            <Input type='password' />
          </div>
          <div>
            <Label>Confirm password</Label>
            <Input type='password' />
          </div>
          <Button type='submit'>Register</Button>
        </form>
      </Card>
    </main>
  );
};

export default RegisterPage;
