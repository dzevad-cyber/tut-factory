import { UserButton } from '@clerk/nextjs';

const Home: React.FC<unknown> = () => {
  return (
    <>
      <UserButton afterSignOutUrl='/' />
    </>
  );
};

export default Home;
