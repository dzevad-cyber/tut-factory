import Image from 'next/image';

const DashboardSidebar = () => {
  return (
    <div className='bg-muted hidden p-5 md:col-start-1 md:col-end-2 md:row-span-full md:block'>
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

export default DashboardSidebar;
