import pagesRoutes from '@client/client-utils/page-routes/pagesRoutes';
import ClerkUserButton from '@client/components/clerk-user-button/ClerkUserButton';
import { Button } from '@client/components/ui/button';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <ClerkUserButton />
      <Button>
        <Link href={pagesRoutes.dashboard.path}>Dashboard</Link>
      </Button>
    </>
  );
};

export default Home;
