import { Button } from '@client/components/ui/button';
import Link from 'next/link';

const TeacherCourses = () => {
  return (
    <div>
      <Button size='lg'>
        <Link href='/dashboard/teacher/create'>Create New Course</Link>
      </Button>
    </div>
  );
};

export default TeacherCourses;
