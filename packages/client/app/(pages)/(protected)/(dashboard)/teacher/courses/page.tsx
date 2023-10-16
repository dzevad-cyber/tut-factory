import pagesRoutes from '@client/client-utils/page-routes/pagesRoutes';
import { Button } from '@client/components/ui/button';
import Link from 'next/link';

const TeacherCourses: React.FC<unknown> = () => {
  return (
    <div>
      <Button>
        <Link href={pagesRoutes.teacher.create.path}>Create</Link>
      </Button>
    </div>
  );
};

export default TeacherCourses;
