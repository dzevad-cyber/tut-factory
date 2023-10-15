import Image from 'next/image';
import { cn } from '@client/client-utils/tailwind/cn';

const Logo: React.FC<unknown> = () => {
  return (
    <div className={cn('pt-base pl-base')}>
      <Image
        style={{ width: '100px' }}
        width={100}
        height={100}
        alt='logo'
        src='/logo.svg'
      />
    </div>
  );
};

export default Logo;
