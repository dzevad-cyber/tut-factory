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
      <Card className={cn('w-[350px]', 'grid', 'gap-y-3')}>
        <CardHeader className={cn('grid', 'gap-y-2')}>
          <CardTitle>Name your course</CardTitle>
          <CardDescription className={cn('leading-text')}>
            What would you like to call your course? Dont&apos;t worry you can
            change this later.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log('test');
            }}
          >
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Course Name</Label>
                <Input
                  id='name'
                  placeholder='e.g Advanced web development'
                  className={cn('placeholder: text-xsm ')}
                />
                <Label className={cn('text-[1.1rem]', 'text-muted-foreground')}>
                  What will you teach in this course?
                </Label>
              </div>
            </div>
            <div
              className={cn(
                'grid',
                'grid-flow-col',
                'justify-between',
                'pt-10'
              )}
            >
              <Button size='lg' variant='outline'>
                Cancel
              </Button>
              <Button type='submit' size='lg'>
                Continue
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateCourseForm;
