'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@client/components/ui/card';
import { cn } from '@client/client-utils/tailwind/cn';
import { Label } from '@client/components/ui/label';
import { Input } from '@client/components/ui/input';
import { Button } from '@client/components/ui/button';

const CreateCourseForm: React.FC<unknown> = () => {
  return (
    <div>
      <Card className={cn('w-[350px]')}>
        <CardHeader>
          <CardTitle>Name your course</CardTitle>
          <CardDescription>
            What would you like to call your course? Dont&apos;t worry you can
            change this later.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' placeholder='Name of your project' />
                <Label className={cn('text-[1.1rem]', 'text-muted-foreground')}>
                  What will you teach in this course?
                </Label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button variant='outline'>Cancel</Button>
          <Button>Continue</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateCourseForm;
