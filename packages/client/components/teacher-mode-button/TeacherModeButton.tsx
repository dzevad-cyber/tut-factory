'use client';

import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '@client/components/ui/button';
import { cn } from '@client/client-utils/tailwind/cn';
import pagesRoutes from '@client/client-utils/page-routes/pagesRoutes';

const TeacherModeButton: React.FC<unknown> = () => {
  const pathName = usePathname();
  const isTeacherPage = pathName.includes('/teacher');

  return (
    <>
      {!isTeacherPage ? (
        <Button>
          <Link href={pagesRoutes.teacher.courses.path}>Teacher mode</Link>
        </Button>
      ) : (
        <Button variant='ghost'>
          <Link
            href={pagesRoutes.dashboard.path}
            className={cn('grid', 'grid-flow-col', 'gap-x-3')}
          >
            <LogOut />
            <span>Exit</span>
          </Link>
        </Button>
      )}
    </>
  );
};

export default TeacherModeButton;
