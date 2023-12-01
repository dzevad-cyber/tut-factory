import { Button } from '@client/components/ui/button';
import { ClientRoutes } from '@client/page-routes/pageRoutes';
import Link from 'next/link';

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Button size='lg'>
      <Link href={href as unknown as string}>{children}</Link>
    </Button>
  );
};

export default NavLink;

type NavLinkProps = {
  href: ClientRoutes;
  children: React.ReactNode;
};
