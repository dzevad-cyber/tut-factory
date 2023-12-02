import { Button, buttonVariants } from '@client/components/ui/button';
import { ClientRoutes } from '@client/page-routes/pageRoutes';
import { VariantProps } from 'class-variance-authority';
import Link from 'next/link';

const NavLink: React.FC<NavLinkProps> = ({ children, href, ...props }) => {
  return (
    <Button {...props}>
      <Link href={href as unknown as string}>{children}</Link>
    </Button>
  );
};

export default NavLink;

type NavLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href: ClientRoutes;
    asChild?: boolean;
  };
