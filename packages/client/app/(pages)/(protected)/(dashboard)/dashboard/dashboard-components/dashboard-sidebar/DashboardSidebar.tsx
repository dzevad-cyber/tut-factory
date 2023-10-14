import Logo from '@client/components/logo/Logo';

const DashboardSidebar = () => {
  return (
    <div className='bg-muted hidden p-5 md:col-start-1 md:col-end-2 md:row-span-full md:grid'>
      <Logo />
    </div>
  );
};

export default DashboardSidebar;
