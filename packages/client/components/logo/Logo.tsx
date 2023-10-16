import Image from 'next/image';
import { cn } from '@client/client-utils/tailwind/cn';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' className={cn('grid', 'items-center', 'pl-10', 'h-24')}>
      <Image
        style={{ width: '100px' }}
        width={100}
        height={100}
        alt='logo'
        src='/logo.svg'
      />
    </Link>
  );
};

export default Logo;
