import pagesRoutes from '@client/client-utils/page-routes/pagesRoutes';
import { Button } from '@client/components/ui/button';
import Link from 'next/link';

const TeacherCourses = () => {
  return (
    <div>
      <Button size='lg'>
        <Link href={pagesRoutes.teacher.create.path}>Create New Course</Link>
      </Button>
    </div>
  );
};

export default TeacherCourses;
