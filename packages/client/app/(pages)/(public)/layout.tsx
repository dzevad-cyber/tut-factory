// import pagesRoutes from '@client/client-utils/page-routes/pagesRoutes';
import { cn } from '@client/client-utils/tailwind/cn';
import { Button } from '@client/components/ui/button';
import Link from 'next/link';

const PublicPagesLayout: React.FC<PublicPagesLayoutProps> = ({ children }) => {
  return (
    <div className={cn('grid', 'min-h-screen', 'grid-rows-[min-content_1fr]')}>
      <div className={cn('h-24', 'justify-end', 'grid', 'px-10')}>
        <ul className={cn('grid', 'grid-flow-col', 'gap-x-10', 'items-center')}>
          <li>
            <Button variant='outline'>
              <Link href='/dashboard'>Dashboard</Link>
            </Button>
          </li>
          <li>
            <Button variant='outline'>
              <Link href='/register'>Register</Link>
            </Button>
          </li>
          <li>
            <Button>
              <Link href='/login'>Log in</Link>
            </Button>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default PublicPagesLayout;

type PublicPagesLayoutProps = {
  children: React.ReactNode;
};
