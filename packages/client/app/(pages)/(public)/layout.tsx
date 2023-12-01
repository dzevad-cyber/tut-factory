import { cn } from '@client/client-utils/tailwind/cn';
import NavLink from '@client/components/client-link/NavLink';

const PublicPagesLayout: React.FC<PublicPagesLayoutProps> = ({ children }) => {
  return (
    <div className={cn('grid', 'min-h-screen', 'grid-rows-[min-content_1fr]')}>
      <div className={cn('h-24', 'justify-end', 'grid', 'px-10')}>
        <header>
          <nav>
            <ul
              className={cn(
                'grid',
                'grid-flow-col',
                'gap-x-10',
                'items-center'
              )}
            >
              <li>
                <NavLink href='/dashboard'>Dashboard</NavLink>
              </li>
              <li>
                <NavLink href='/register'>Register</NavLink>
              </li>
              <li>
                <NavLink href='/login'>Log in</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </div>
    </div>
  );
};

export default PublicPagesLayout;

type PublicPagesLayoutProps = {
  children: React.ReactNode;
};
