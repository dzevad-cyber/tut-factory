import Image from 'next/image';
import { cn } from '@client/client-utils/tailwind/cn';
import Link from 'next/link';
import React from 'react';

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href='/' className={cn('grid', 'items-center', 'h-24', className)}>
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

type LogoProps = {
  className?: string;
};
