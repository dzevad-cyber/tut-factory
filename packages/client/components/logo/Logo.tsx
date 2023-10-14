import Image from 'next/image';

const Logo: React.FC<unknown> = () => {
  return (
    <div>
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
